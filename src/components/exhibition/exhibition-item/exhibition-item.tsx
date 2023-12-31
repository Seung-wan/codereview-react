import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { StarIcon } from '@assets/svgs';
import { useExhibitionItem } from '@components/exhibition/exhibition-item/exhibition-item.hooks';
import { ROUTE_PATHS } from '@constants/index';
import type { Exhibition } from '~types/exhibition/index';
import { commaize } from '@utils/number';
import { theme } from '@styles/theme';

interface Props {
  exhibition: Exhibition;
}

export default function ExhibitionItem({ exhibition }: Props) {
  const { id, date, imageUrl, place, price, title } = exhibition;

  const { isFavoriteExhibition, handleClickStar, handleClickReserve } = useExhibitionItem(id);

  return (
    <li>
      <S.Link to={ROUTE_PATHS.EXHIBITION_DETAIL(id)}>
        <div>
          <S.Image src={imageUrl} alt={title} />
        </div>
        <S.Right>
          <S.Top>
            <S.TitleWrapper>
              <div>{title}</div>
              <StarIcon
                onClick={handleClickStar}
                fill={isFavoriteExhibition ? theme.colors.primary : theme.colors.white}
              />
            </S.TitleWrapper>
            <S.Place>{place}</S.Place>
            <S.Price>{commaize(price)} 원</S.Price>
          </S.Top>
          <S.Bottom>
            <S.DateWrapper>
              <div>{date.started} ~ </div>
              <div>{date.ended}</div>
            </S.DateWrapper>
            <S.Button onClick={handleClickReserve(id)} type="button">
              예매하기
            </S.Button>
          </S.Bottom>
        </S.Right>
      </S.Link>
    </li>
  );
}

const _Link = styled(Link)`
  display: flex;
  height: 80px;
  gap: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

const Place = styled.div`
  color: #999;
  font-size: 12px;
`;

const Price = styled.div`
  color: #ff4800;
  font-size: 12px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 16px;
  border-radius: 4px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 8px;
`;

const DateWrapper = styled.div`
  display: flex;
  color: #3f3f3f;
  font-size: 8px;
`;

const S = {
  Link: _Link,
  Right,
  Top,
  TitleWrapper,
  Place,
  Price,
  Image,
  Bottom,
  Button,
  DateWrapper,
};
