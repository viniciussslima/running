import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ApiProvider } from '@contexts/Api';
import { ToastProvider } from '@contexts/Toast';

import Home from '@pages/home';
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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </ApiProvider>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
