import { MouseEvent, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { STORAGE_KEYS, ROUTE_PATHS } from '@constants/index';

export function useExhibitionItem(id: number) {
  const navigate = useNavigate();

  const [favoritesExhibitionsId, setFavoritesExhibitionsId] = useLocalStorage<number[]>(
    STORAGE_KEYS.FAVORITES_EXHIBITIONS_ID,
    [],
  );

  const isFavoriteExhibition = useMemo(
    () => favoritesExhibitionsId.find((favoritesExhibitionId) => favoritesExhibitionId === id),
    [favoritesExhibitionsId, id],
  );

  const handleClickStar = useCallback(
    (e: MouseEvent<HTMLOrSVGElement>) => {
      e.preventDefault();

      if (isFavoriteExhibition) {
        const filteredFavorites = favoritesExhibitionsId.filter(
          (favoritesExhibitionId) => favoritesExhibitionId !== id,
        );
        setFavoritesExhibitionsId(filteredFavorites);
        return;
      }

      setFavoritesExhibitionsId((prev) => [...prev, id]);
    },
    [favoritesExhibitionsId, id, isFavoriteExhibition, setFavoritesExhibitionsId],
  );

  const handleClickReserve = useCallback(
    (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      navigate(ROUTE_PATHS.EXHIBITION_DETAIL(id), {
        state: {
          reservation: true,
        },
      });
    },
    [navigate],
  );

  return {
    isFavoriteExhibition,
    handleClickStar,
    handleClickReserve,
  };
}
