import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ApiProvider } from '@contexts/Api';
import { ToastProvider } from '@contexts/Toast';

import Base from '@components/Base';

import Event from '@pages/Event';
import Home from '@pages/Home';
import Statics from '@pages/Statistcs';
import { lightTheme } from '@themes/default';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <ApiProvider>
            <BrowserRouter>
              <Base>
                <Routes>
                  <Route path="eventos" element={<Home />} />
                  <Route path="eventos/:id" element={<Event />} />
                  <Route path="estatiscas" element={<Statics />} />
                  <Route path="*" element={<Navigate to="eventos" replace />} />
                </Routes>
              </Base>
            </BrowserRouter>
          </ApiProvider>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
