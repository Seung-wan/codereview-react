import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export default function Title({ children }: PropsWithChildren) {
  return <S.H2>{children}</S.H2>;
}

const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-weight: 500;
`;

const S = {
  H2,
};
