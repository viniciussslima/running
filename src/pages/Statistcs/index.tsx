import React, { useState } from 'react';

import moment from 'moment';
import { useQuery } from 'react-query';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';
import { useTheme } from 'styled-components';

import { useToast } from '@contexts/Toast';
import { useEvents } from '@hooks';

import { Select } from '@components/Select';

import { Container, TooltipContent, TooltipTitle } from './styles';

const Statics = () => {
  const [distance, setDistance] = useState(5);

  const { listEvents } = useEvents();
  const { addToast } = useToast();
  const theme = useTheme();

  const { data: events, isLoading } = useQuery(
    [
      'events',
      {
        paginate: false,
        distance,
      },
    ],
    () => listEvents(distance),
    {
      select: (data) => {
        return data.map((event) => {
          const paceInSeconds = moment.duration(event.pace).asSeconds();

          return { ...event, paceInSeconds };
        });
      },
      onError: () => {
        addToast('Não foi possível carregar os dados do gráfico', 'error');
      },
    }
  );

  return (
    <>
      {isLoading && (
        <div>
          <h1>Carregando...</h1>
        </div>
      )}
      <Container>
        <Select onChange={(event) => setDistance(Number(event.target.value))}>
          <option value="5">5 km</option>
          <option value="10">10 km</option>
          <option value="21">21 km</option>
        </Select>
        <ResponsiveContainer width="90%" height={300}>
          <LineChart data={events}>
            <Line
              type="linear"
              dataKey="paceInSeconds"
              stroke={theme.colors.primary}
              strokeWidth={5}
            />
            <CartesianGrid
              stroke={theme.colors.white.main}
              strokeDasharray="5 5"
            />
            <XAxis
              reversed
              dataKey="date"
              tick={{ fill: theme.colors.white.one }}
              tickFormatter={(value) => moment.utc(value).format('DD/MM/YYYY')}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: theme.colors.white.one }}
              tickFormatter={(value) =>
                moment.utc(value * 1000).format('mm:ss')
              }
              dy={-65}
            />
            <Tooltip
              content={(props: TooltipProps<ValueType, NameType>) => {
                const payload: Event | undefined = props.payload?.[0]?.payload;

                return (
                  <TooltipContent>
                    <TooltipTitle>{payload?.name}</TooltipTitle>
                    <p>Pace: {payload?.pace}</p>
                    <p>Tempo: {payload?.time}</p>
                  </TooltipContent>
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
};

export default Statics;
