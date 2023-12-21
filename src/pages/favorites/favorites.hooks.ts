import { useMemo } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalStorage } from 'usehooks-ts';

import { getApiExhibitionList } from '@src/apis';
import { QUERY_KEYS, STORAGE_KEYS } from '@constants/index';

export function useFavorites() {
  const [favoritesExhibitionsId] = useLocalStorage<number[]>(
    STORAGE_KEYS.FAVORITES_EXHIBITIONS_ID,
    [],
  );

  const { data: _favoritesExhibitions } = useSuspenseQuery({
    queryKey: QUERY_KEYS.EXHIBITION.LIST(JSON.stringify(favoritesExhibitionsId)),
    queryFn: getApiExhibitionList,
  });

  const favoritesExhibitions = useMemo(() => {
    return _favoritesExhibitions.filter((_favoritesExhibition) =>
      favoritesExhibitionsId.includes(_favoritesExhibition.id),
    );
  }, [_favoritesExhibitions, favoritesExhibitionsId]);

  return {
    favoritesExhibitions,
  };
}
