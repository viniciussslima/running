import React, { createContext, useContext, useMemo } from 'react';

import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

interface IRequestConfig extends AxiosRequestConfig {
  method: Method;
  url: string;
}

interface IApiContextValues {
  request: <Type>(config: IRequestConfig) => Promise<AxiosResponse<Type>>;
}

const ApiContext = createContext<IApiContextValues>({} as IApiContextValues);

interface IApiProviderProps {
  children: React.ReactNode;
}

const ApiProvider: React.FC<IApiProviderProps> = ({ children }) => {
  const apiInstance = useMemo(
    () =>
      axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
      }),
    []
  );

  return (
    <ApiContext.Provider
      value={{
        request: apiInstance.request,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext);
  return context;
};

export { ApiProvider, useApi };
