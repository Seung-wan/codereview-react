import { Component } from 'react';
import type { ReactNode } from 'react';

import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
  rejectedFallback: ReactNode;
  reset?: () => void;
}

interface State {
  hasError: boolean;
}
const initialState: State = {
  hasError: false,
};

class ErrorBoundary extends Component<Props, State> {
  state: State = initialState;

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  resetBoundary = () => {
    this.props.reset?.();
    this.setState(initialState);
  };

  render() {
    if (this.state.hasError) {
      return (
        <S.Container>
          <S.Wrapper>
            <div>{this.props.rejectedFallback}</div>
            <div>저희 팀은 빠르게 문제를 해결하고 있어요.</div>
          </S.Wrapper>
          <S.Button type="button" onClick={this.resetBoundary}>
            다시 시도하기
          </S.Button>
        </S.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Button = styled.button`
  width: 128px;
  padding: 8px;
  text-decoration: underline;
`;

const S = {
  Container,
  Wrapper,
  Button,
};
