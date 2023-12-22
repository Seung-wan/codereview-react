import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface Props {
  onClickCancel: () => void;
}

export default function Cancel({ onClickCancel, children }: PropsWithChildren<Props>) {
  return (
    <S.Button type="button" onClick={onClickCancel}>
      {children}
    </S.Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 34px;
  background-color: #d9d9d9;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
`;

const S = {
  Button,
};
