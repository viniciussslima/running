import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Header, Route } from './styles';

interface BaseProps {
  children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Route
          onClick={() => navigate('/eventos')}
          selected={location.pathname === '/eventos'}
        >
          Eventos
        </Route>
        <Route
          onClick={() => navigate('/estatiscas')}
          selected={location.pathname === '/estatiscas'}
        >
          Estatistas
        </Route>
      </Header>
      {children}
    </>
  );
};

export default Base;
