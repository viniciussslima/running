import React from 'react';

import moment from 'moment';
import {
  MdRoute,
  MdTimer,
  MdMan3,
  MdOutlineDirectionsRun,
  MdEmojiEvents,
  MdCardMembership,
} from 'react-icons/md';

import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Certificate,
  InfoContainer,
  Label,
  LeftSide,
  RightSide,
} from './styles';

interface EventCardProps {
  event: Event;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <Card canClick={!!onClick} onClick={onClick}>
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
          {event.certificate && (
            <InfoContainer>
              <MdCardMembership />
              <Certificate
                href={event.certificate}
                target="_blank"
                rel="noreferrer"
              >
                Ver certificado
              </Certificate>
            </InfoContainer>
          )}
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
  );
};

export default EventCard;
