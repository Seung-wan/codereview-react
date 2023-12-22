import { useSuspenseQuery } from '@tanstack/react-query';

import { getApiExhibitionList } from '@src/apis';
import { QUERY_KEYS } from '@constants/index';

export function useGetExhibitionListSuspenseQuery() {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.EXHIBITION.LISTS(),
    queryFn: getApiExhibitionList,
  });
}
