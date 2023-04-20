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
          selected={location.pathname.includes('/eventos')}
        >
          Eventos
        </Route>
        <Route
          onClick={() => navigate('/estatisticas')}
          selected={location.pathname.includes('/estatisticas')}
        >
          Estatísticas
        </Route>
      </Header>
      {children}
    </>
  );
};

export default Base;
