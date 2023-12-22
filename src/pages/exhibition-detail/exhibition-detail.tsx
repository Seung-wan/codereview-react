import { Navigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { StarIcon, BackIcon } from '@assets/svgs';
import { Spinner, WithQueryAsyncBoundary } from '@components/common';
import { ROUTE_PATHS } from '@constants/index';
import { useExhibitionDetail } from '@pages/exhibition-detail/exhibition-detail.hooks';
import { theme } from '@styles/theme';
import { commaize } from '@utils/number';

function ExhibitionDetail() {
  const { id } = useParams();

  const {
    data: exhibition,
    isFavoriteExhibition,
    handleClickStar,
    handleClickBack,
    handleClickReserve,
  } = useExhibitionDetail(Number(id));

  if (!id || exhibition instanceof Error) {
    return <Navigate to={ROUTE_PATHS.HOME} />;
  }

  const { imageUrl, title, price, place, date } = exhibition;

  return (
    <>
      <S.Header>
        <BackIcon onClick={handleClickBack} />
        예매하기
      </S.Header>
      <S.Image src={imageUrl} alt={title} />
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Price>{commaize(price)}원</S.Price>
        <S.Info>
          <S.Left>
            <div>{place}</div>
            <S.Date>
              <div>{date.started} ~ </div>
              <div>{date.ended}</div>
            </S.Date>
          </S.Left>
          <StarIcon
            onClick={handleClickStar}
            width={32}
            height={32}
            fill={isFavoriteExhibition ? theme.colors.primary : theme.colors.white}
          />
        </S.Info>
        <S.Footer>
          <button type="button" onClick={handleClickReserve}>
            예매하기
          </button>
        </S.Footer>
      </S.Body>
    </>
  );
}

const Header = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 19px 12px;
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 100%;
  height: 390px;
`;

const Body = styled.div`
  padding: 12px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const Price = styled.div`
  margin-top: 8px;
  color: #ea3800;
  font-size: 24px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Left = styled.div`
  margin-top: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  display: flex;
  margin-top: 2px;
`;

const Footer = styled.div`
  width: 100%;
  height: 59px;
  margin-top: 16px;

  button {
    width: 100%;
    height: 59px;
    background-color: #ffbf66;
    border-radius: 4px;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
  }
`;

const S = {
  Header,
  Image,
  Body,
  Title,
  Price,
  Info,
  Left,
  Date,
  Footer,
};

const ExhibitionDetailPage = WithQueryAsyncBoundary(ExhibitionDetail, {
  pendingFallback: <Spinner />,
  rejectedFallback: <div>메인 페이지에서 에러가 발생했습니다.</div>,
});

export default ExhibitionDetailPage;
