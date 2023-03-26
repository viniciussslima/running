import React from 'react';

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
  const { listEvents } = useEvents();
  const { addToast } = useToast();

  const { data: events, isLoading } = useQuery(['events'], () => listEvents(), {
    onError: () => {
      addToast('Não foi possível carregar a lista de eventos', 'error');
    },
  });

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
    </>
  );
};

export default Home;
