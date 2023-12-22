import { createContext, useCallback, useMemo, useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';

import { Modal } from '@components/common';

interface ModalProps {
  onClose?: () => void;
  onOpen?: () => void;
}

interface IModalContext {
  modal?: {
    children: ReactNode;
    props: ModalProps;
  };
  openModal: (component: ReactNode, props: ModalProps) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: {
    children: null,
    props: {},
  },
  openModal: () => null,
  closeModal: () => null,
});

export default function ModalProvider({ children }: PropsWithChildren) {
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({});
  const modal = useMemo(
    () => ({
      children: modalChildren,
      props: modalProps,
    }),
    [modalChildren, modalProps],
  );

  const openModal = useCallback((children: ReactNode, props: ModalProps) => {
    setModalChildren(children);
    setModalProps(props);
    props.onOpen?.();

    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    modalProps.onClose?.();
    setModalChildren(null);
    setModalProps({});

    document.body.style.removeProperty('overflow');
  }, [modalProps]);

  const contextValue: IModalContext = useMemo(() => {
    return {
      modal,
      openModal,
      closeModal,
    };
  }, [modal, openModal, closeModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modalChildren && <Modal onClickDimmed={closeModal}>{modalChildren}</Modal>}
    </ModalContext.Provider>
  );
}
