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
import { useEvents } from '@hooks';

import { ButtonsPage } from '@components/ButtonsPage';

import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  InfoContainer,
  Label,
  LeftSide,
  RightSide,
  Title,
} from './styles';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { listEvents } = useEvents();
  const { addToast } = useToast();

  const { data: events, isLoading } = useQuery(
    ['events', { page: currentPage }],
    () => listEvents(currentPage),
    {
      onError: () => {
        addToast('Não foi possível carregar a lista de eventos', 'error');
      },
    }
  );

  const pages = useMemo(() => {
    return Math.ceil((events?.count ?? 0) / 10);
  }, [events]);

  return (
    <>
      {isLoading && (
        <div>
          <h1>Carregando...</h1>
        </div>
      )}
      <Title>Eventos</Title>
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
          changePage={(newPage) => setCurrentPage(newPage)}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default Home;
