import styled from '@emotion/styled';

export default function Spinner() {
  return (
    <S.Container>
      <S.Wrapper />
    </S.Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-top-color: ${(props) => props.theme.colors.primary};

  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const S = {
  Container,
  Wrapper,
};
