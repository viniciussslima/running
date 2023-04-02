import React from 'react';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { useToast } from '@contexts/Toast';
import { useEvents } from '@hooks';

import Container from '@components/Container';
import EmptyMessage from '@components/EmptyMessage';
import EventCard from '@components/EventCard';
import Loading from '@components/Loading';

import { Photo, PhotosContainer, Title } from './styles';

const Event = () => {
  const { id } = useParams<{ id: string }>();
  const { getEvent } = useEvents();
  const { addToast } = useToast();

  const { data: event, isLoading } = useQuery(
    ['event', id],
    () => getEvent(Number(id)),
    {
      onError: () => {
        addToast('Não foi possível carregar o evento', 'error');
      },
    }
  );

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <EventCard event={event!} />
          <Title>Fotos</Title>
          {event?.photos?.length === 0 && (
            <EmptyMessage>Não há fotos para esse evento</EmptyMessage>
          )}
          <PhotosContainer>
            {event?.photos?.map((photo) => (
              <Photo key={photo.id} src={photo.url} />
            ))}
          </PhotosContainer>
        </>
      )}
    </Container>
  );
};

export default Event;
