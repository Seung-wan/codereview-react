import styled from '@emotion/styled';

export default function NotFound() {
  return (
    <S.Container>
      <div>찜해놓은 전시회가 없습니다.</div>
      <S.Description>맘에 드는 전시회가 있다면 찜해보세요</S.Description>
    </S.Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Description = styled.div`
  color: #aaa;
`;

const S = {
  Container,
  Description,
};
