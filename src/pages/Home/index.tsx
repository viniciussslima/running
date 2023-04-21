import React, { useMemo, useState } from 'react';

import moment from 'moment';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useToast } from '@contexts/Toast';
import { useDebounce, useEvents } from '@hooks';

import { ButtonsPage } from '@components/ButtonsPage';
import Container from '@components/Container';
import EmptyMessage from '@components/EmptyMessage';
import EventCard from '@components/EventCard';
import Loading from '@components/Loading';
import { Select } from '@components/Select';

import { FilterContainer, Search } from './styles';

const Home = () => {
  const [queryParams, setQueryParams] = useState<EventsQuery>({
    page: 1,
  });

  const { listPaginatedEvents } = useEvents();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const { data: events, isLoading } = useQuery(
    ['events', queryParams],
    () => listPaginatedEvents(queryParams),
    {
      onError: () => {
        addToast('Não foi possível carregar a lista de eventos', 'error');
      },
    }
  );

  const pages = useMemo(() => {
    return Math.ceil((events?.count ?? 0) / 10);
  }, [events]);

  const years = useMemo(() => {
    const newYears = [];

    for (let i = 2021; i <= moment().year(); i++) {
      newYears.push(i);
    }

    return newYears;
  }, []);

  const debouncedSearch = useDebounce((search: string) => {
    setQueryParams({
      ...queryParams,
      search,
      page: 1,
    });
  }, 1000);

  return (
    <Container>
      <FilterContainer>
        <Search
          placeholder="Pesquise por nome do evento"
          onChange={(event) => debouncedSearch(event.target.value)}
        />
        <Select
          onChange={(event) =>
            setQueryParams({
              ...queryParams,
              distance: event.target.value.length
                ? Number(event.target.value)
                : undefined,
              page: 1,
            })
          }
        >
          <option value="">Filtro por distância</option>
          <option value="5">5 km</option>
          <option value="10">10 km</option>
          <option value="21">21 km</option>
        </Select>
        <Select
          onChange={(event) =>
            setQueryParams({
              ...queryParams,
              year: event.target.value.length
                ? Number(event.target.value)
                : undefined,
              page: 1,
            })
          }
        >
          <option value="">Filtro por ano</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </FilterContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {events?.results.length === 0 && (
            <EmptyMessage>Nenhum evento encontrado</EmptyMessage>
          )}
          {events?.results.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => navigate(`/eventos/${event.id}`)}
              position={index + 1}
            />
          ))}
          {pages > 1 && (
            <ButtonsPage
              pages={10}
              changePage={(newPage) =>
                setQueryParams({ ...queryParams, page: newPage })
              }
              currentPage={queryParams.page}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
