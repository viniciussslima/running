import { useCallback } from 'react';

import { useApi, endpoints } from '@contexts/Api';

const useEvents = () => {
  const { request } = useApi();

  const listPaginatedEvents = useCallback(
    async (params: EventsQuery) => {
      const response = await request<IPaginated<Event>>({
        method: 'get',
        url: endpoints.events.list,
        params,
      });

      return response.data;
    },
    [request]
  );

  const listEvents = useCallback(
    async (distance: number) => {
      const response = await request<Array<Event>>({
        method: 'get',
        url: endpoints.events.list,
        params: {
          distance,
          paginate: false,
        },
      });

      return response.data;
    },
    [request]
  );

  const getEvent = useCallback(
    async (id: number) => {
      const response = await request<Event>({
        method: 'get',
        url: endpoints.events.get.replace(':id', id.toString()),
      });

      return response.data;
    },
    [request]
  );

  return {
    listPaginatedEvents,
    listEvents,
    getEvent,
  };
};

export default useEvents;
