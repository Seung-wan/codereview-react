import { Spinner, WithQueryAsyncBoundary } from '@components/common';
import { ExhibitionList } from '@components/exhibition';
import { useGetExhibitionListSuspenseQuery } from '@pages/home/hooks';

function Home() {
  const { data: exhibitions } = useGetExhibitionListSuspenseQuery();

  return <ExhibitionList exhibitions={exhibitions} />;
}

const HomePage = WithQueryAsyncBoundary(Home, {
  pendingFallback: <Spinner />,
  rejectedFallback: <div>메인 페이지에서 에러가 발생했습니다.</div>,
});

export default HomePage;
