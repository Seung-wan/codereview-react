import { Spinner, WithQueryAsyncBoundary } from '@components/common';
import { ExhibitionList } from '@components/exhibition';
import { NotFound } from '@pages/favorites/components';
import { useFavorites } from '@pages/favorites/favorites.hooks';

function Favorites() {
  const { favoritesExhibitions } = useFavorites();

  if (favoritesExhibitions.length === 0) {
    return <NotFound />;
  }

  return <ExhibitionList exhibitions={favoritesExhibitions} />;
}

const FavoritesPage = WithQueryAsyncBoundary(Favorites, {
  pendingFallback: <Spinner />,
  rejectedFallback: <div>메인 페이지에서 에러가 발생했습니다.</div>,
});

export default FavoritesPage;
