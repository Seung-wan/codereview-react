export const ROUTE_PATHS = {
  HOME: '/',
  EXHIBITION_DETAIL: (id?: number) => (id ? `/exhibition/${id}` : '/exhibition/:id'),
  FAVORITES: '/favorites',
};
