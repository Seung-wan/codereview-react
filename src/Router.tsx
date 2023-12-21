import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTE_PATHS } from '@constants/routes';
import { BottomNavigationLayout } from '@components/layout';
import { Home } from '@pages/home';
import { Favorites } from '@pages/favorites';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BottomNavigationLayout />}>
          <Route path={ROUTE_PATHS.HOME} element={<Home />} />
          <Route path={ROUTE_PATHS.FAVORITES} element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
