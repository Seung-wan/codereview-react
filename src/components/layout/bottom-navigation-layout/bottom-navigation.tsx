import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { StarIcon, TicketIcon } from '@assets/svgs';
import { ROUTE_PATHS } from '@constants/index';
import { theme } from '@src/styles';

const NAVIGATION_ITEMS = [
  {
    title: '전시회',
    icon: <TicketIcon />,
    to: ROUTE_PATHS.HOME,
  },
  {
    title: '찜목록',
    icon: <StarIcon fill={theme.colors.primary} />,
    to: ROUTE_PATHS.FAVORITES,
  },
];

export default function BottomNavigation() {
  return (
    <S.Footer>
      <S.Nav>
        <S.Ul>
          {NAVIGATION_ITEMS.map(({ title, icon, to }) => (
            <S.Li key={to}>
              <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <div>{icon}</div>
                <div>{title}</div>
              </NavLink>
            </S.Li>
          ))}
        </S.Ul>
      </S.Nav>
    </S.Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  border-top: 0.5px solid #f4f4f4;
  background-color: #fff;
`;

const Nav = styled.nav`
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  height: 100%;
`;

const Li = styled.li`
  height: 100%;
  flex: 1;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 4px;
    font-size: 12px;
    color: #aaa;
  }

  a.active {
    color: #1a1a1a;
  }
`;

const S = {
  Footer,
  Nav,
  Ul,
  Li,
};
