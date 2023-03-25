import React from 'react';

import moment from 'moment';
import {
  MdEmojiEvents,
  MdMan3,
  MdOutlineDirectionsRun,
  MdRoute,
  MdTimer,
} from 'react-icons/md';

import events from '@data/events.json';

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
  return (
    <>
      <Title>Eventos</Title>
      {events.map((event) => (
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
                <span>{event.age_range}</span>
              </InfoContainer>
            </LeftSide>
            <RightSide>
              <InfoContainer>
                <MdOutlineDirectionsRun />
                <span>{event.pace}</span>
              </InfoContainer>
              <InfoContainer>
                <MdEmojiEvents />
                <span>{event.general_position}º no geral</span>
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
