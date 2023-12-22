import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface Props {
  onClickConfirm: () => void;
}

export default function Confirm({ onClickConfirm, children }: PropsWithChildren<Props>) {
  return (
    <S.Button type="button" onClick={onClickConfirm}>
      {children}
    </S.Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 34px;
  background-color: #ffbf66;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
`;

const S = {
  Button,
};
