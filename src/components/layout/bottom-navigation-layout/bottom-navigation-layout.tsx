import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import BottomNavigation from '@components/layout/bottom-navigation-layout/bottom-navigation';

export default function BottomNavigationLayout() {
  return (
    <>
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
      <BottomNavigation />
    </>
  );
}

const OutletWrapper = styled.div`
  padding: 8px 8px 80px;
`;
const S = {
  OutletWrapper,
};
