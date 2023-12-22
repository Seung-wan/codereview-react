import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global, ThemeProvider } from '@emotion/react';

import { ModalProvider } from '@src/providers';
import { reset, theme } from '@src/styles';

import Router from './Router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <ModalProvider>
          <Router />
        </ModalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
