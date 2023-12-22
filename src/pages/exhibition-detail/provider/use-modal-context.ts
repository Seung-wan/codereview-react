import { useContext } from 'react';

import { ModalContext } from '@pages/exhibition-detail/provider/modal-provider';

export default function useModalContext() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('ModalContextProvider 내부에서 사용되어야 합니다.');
  }

  return context;
}
