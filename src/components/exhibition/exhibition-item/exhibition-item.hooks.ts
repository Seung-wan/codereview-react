import { useCallback, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { STORAGE_KEYS } from '@constants/storage-keys';

export function useExhibitionItem(id: number) {
  const [favoritesExhibitionsId, setFavoritesExhibitionsId] = useLocalStorage<number[]>(
    STORAGE_KEYS.FAVORITES_EXHIBITIONS_ID,
    [],
  );

  const isFavoriteExhibition = useMemo(
    () => favoritesExhibitionsId.find((favoritesExhibitionId) => favoritesExhibitionId === id),
    [favoritesExhibitionsId, id],
  );

  const handleClickStar = useCallback(() => {
    if (isFavoriteExhibition) {
      const filteredFavorites = favoritesExhibitionsId.filter(
        (favoritesExhibitionId) => favoritesExhibitionId !== id,
      );
      setFavoritesExhibitionsId(filteredFavorites);
      return;
    }

    setFavoritesExhibitionsId((prev) => [...prev, id]);
  }, [favoritesExhibitionsId, id, isFavoriteExhibition, setFavoritesExhibitionsId]);

  return {
    isFavoriteExhibition,
    handleClickStar,
  };
}
