import { useSuspenseQuery } from '@tanstack/react-query';

import { getDetailExhibition } from '@src/apis';
import { QUERY_KEYS } from '@constants/query-keys';

export function useGetFavoritesExhibitionsSuspenseQuery(id: number) {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.EXHIBITION.DETAIL(id),
    queryFn: () => getDetailExhibition({ id }),
  });
}
