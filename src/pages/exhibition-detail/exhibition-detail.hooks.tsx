import { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { STORAGE_KEYS } from '@constants/storage-keys';
import { ROUTE_PATHS } from '@constants/routes';
import { ReservationModal, ReservationCompleteModal } from '@pages/exhibition-detail/components';
import { useGetFavoritesExhibitionsSuspenseQuery } from '@pages/exhibition-detail/hooks';
import { useModalContext } from '@pages/exhibition-detail/provider';

export function useExhibitionDetail(id: number) {
  const location = useLocation();

  const navigate = useNavigate();

  const { data } = useGetFavoritesExhibitionsSuspenseQuery(Number(id));

  const { openModal, closeModal } = useModalContext();

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

  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleClickConfirm = useCallback(() => {
    closeModal();

    openModal(
      <ReservationCompleteModal
        onClickConfirm={() => {
          closeModal();
          navigate(ROUTE_PATHS.HOME);
        }}
      />,
      { onClose: closeModal },
    );
  }, [closeModal, navigate, openModal]);

  const handleClickReserve = useCallback(() => {
    openModal(<ReservationModal onClickConfirm={handleClickConfirm} onClickCancel={closeModal} />, {
      onClose: closeModal,
    });
  }, [closeModal, handleClickConfirm, openModal]);

  useEffect(() => {
    const reservation = location.state?.reservation;

    if (reservation === true) {
      handleClickReserve();
      window.history.replaceState({}, document.title);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return {
    data,
    isFavoriteExhibition,
    handleClickStar,
    handleClickBack,
    handleClickReserve,
  };
}
