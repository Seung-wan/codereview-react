import { useCallback } from 'react';
import type { MouseEvent, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface Props {
  onClickDimmed?: () => void;
}

export default function Modal({ children, onClickDimmed }: PropsWithChildren<Props>) {
  const handleClickContent = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }, []);

  return (
    <S.Dimmed onClick={onClickDimmed}>
      <S.ModalWrapper onClick={handleClickContent}>{children}</S.ModalWrapper>
    </S.Dimmed>
  );
}
const Dimmed = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const ModalWrapper = styled.div`
  width: 266px;
  height: 200px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  z-index: 10;
`;

const S = {
  Dimmed,
  ModalWrapper,
};
