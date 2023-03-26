import React, { useMemo, useState } from 'react';

import moment from 'moment';
import {
  MdEmojiEvents,
  MdMan3,
  MdOutlineDirectionsRun,
  MdRoute,
  MdTimer,
} from 'react-icons/md';
import { useQuery } from 'react-query';

import { useToast } from '@contexts/Toast';
import { useDebounce, useEvents } from '@hooks';

import { ButtonsPage } from '@components/ButtonsPage';

import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  FilterContainer,
  InfoContainer,
  Label,
  LeftSide,
  RightSide,
  Search,
  Select,
  Title,
} from './styles';

const Home = () => {
  const [queryParams, setQueryParams] = useState<EventsQuery>({
    page: 1,
  });

  const { listEvents } = useEvents();
  const { addToast } = useToast();

  const { data: events, isLoading } = useQuery(
    ['events', queryParams],
    () => listEvents(queryParams),
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
    <>
      <Title>Eventos</Title>
      {isLoading && (
        <div>
          <h1>Carregando...</h1>
        </div>
      )}
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
      {events?.results.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.name}</CardTitle>
            <CardSubtitle>
              Data: {moment(event.date).format('DD/MM/YYYY')}
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            <LeftSide>
              <InfoContainer>
                <MdRoute />
                <Label>Distância: </Label>
                <span>{event.distance} Km</span>
              </InfoContainer>
              <InfoContainer>
                <MdTimer />
                <Label>Tempo total: </Label>
                <span>{event.time}</span>
              </InfoContainer>
              <InfoContainer>
                <MdMan3 />
                <Label>Faixa etária: </Label>
                <span>{event.age_category}</span>
              </InfoContainer>
            </LeftSide>
            <RightSide>
              <InfoContainer>
                <MdOutlineDirectionsRun />
                <span>{event.pace}</span>
              </InfoContainer>
              <InfoContainer>
                <MdEmojiEvents />
                <span>{event.overall_position}º no geral</span>
              </InfoContainer>
              <InfoContainer>
                <MdEmojiEvents />
                <span>{event.age_position}º na faixa etária</span>
              </InfoContainer>
            </RightSide>
          </CardBody>
        </Card>
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
  );
};

export default Home;
