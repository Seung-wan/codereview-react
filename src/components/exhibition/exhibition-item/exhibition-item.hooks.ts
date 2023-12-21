import { useCallback, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import type { Exhibition } from '~types/exhibition';

export function useExhibitionItem(id: number, exhibition: Exhibition) {
  const [favoritesExhibitions, setFavoritesExhibitions] = useLocalStorage<Exhibition[]>(
    'favoritesExhibitions',
    [],
  );

  const isFavoriteExhibition = useMemo(
    () => favoritesExhibitions.find((favoritesExhibition) => favoritesExhibition.id === id),
    [favoritesExhibitions, id],
  );

  const handleClickStar = useCallback(() => {
    if (isFavoriteExhibition) {
      const filteredFavorites = favoritesExhibitions.filter(
        (favoritesExhibition) => favoritesExhibition.id !== id,
      );
      setFavoritesExhibitions(filteredFavorites);
      return;
    }

    setFavoritesExhibitions((prev) => [...prev, exhibition]);
  }, [exhibition, favoritesExhibitions, id, isFavoriteExhibition, setFavoritesExhibitions]);

  return {
    isFavoriteExhibition,
    handleClickStar,
  };
}
