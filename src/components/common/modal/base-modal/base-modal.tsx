import type { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { Cancel, Confirm, Title } from './compound';

export default function BaseModal({ children }: PropsWithChildren) {
  return <S.Container>{children}</S.Container>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
`;

const S = {
  Container,
};

BaseModal.Title = Title;
BaseModal.Confirm = Confirm;
BaseModal.Cancel = Cancel;
