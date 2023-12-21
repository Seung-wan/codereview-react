import styled from '@emotion/styled';

import ExhibitionItem from '@components/exhibition/exhibition-item/exhibition-item';
import type { Exhibition } from '~types/exhibition/index';

interface Props {
  exhibitions: Exhibition[];
}

export default function ExhibitionList({ exhibitions }: Props) {
  return (
    <S.Ul>
      {exhibitions.map((exhibition) => (
        <ExhibitionItem key={exhibition.id} exhibition={exhibition} />
      ))}
    </S.Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const S = {
  Ul,
};
