import React from 'react';

import { useQuery } from 'react-query';

import { useToast } from '@contexts/Toast';
import { useEvents } from '@hooks';

import { Select } from '@components/Select';

interface DistanceSelect {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DistanceSelect: React.FC<DistanceSelect> = ({ onChange }) => {
  const { listDistances } = useEvents();
  const { addToast } = useToast();

  const { data: distances, isLoading } = useQuery(
    ['distances'],
    () => listDistances(),
    {
      select: (data) => data.distances,
      onError: () => {
        addToast('Não foi possível carregar a lista de distâncias', 'error');
      },
    }
  );

  return (
    <Select onChange={onChange} disabled={isLoading}>
      <option value="">
        {isLoading ? 'Carregando...' : 'Filtro por distância'}
      </option>
      {distances?.map((distance) => (
        <option key={distance} value={distance}>
          {distance} km
        </option>
      ))}
    </Select>
  );
};

export default DistanceSelect;
