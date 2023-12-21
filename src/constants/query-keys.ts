export const QUERY_KEYS = {
  EXHIBITION: {
    ALL: ['exhibition'] as const,
    LISTS: () => [...QUERY_KEYS.EXHIBITION.ALL, 'list'] as const,
    DETAILS: () => [...QUERY_KEYS.EXHIBITION.ALL, 'detail'] as const,
    DETAIL: (id: number) => [...QUERY_KEYS.EXHIBITION.DETAILS(), id] as const,
  },
};
