import { useCallback } from 'react';

import { useApi, endpoints } from '@contexts/Api';

const useEvents = () => {
  const { request } = useApi();

  const listEvents = useCallback(
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

  return {
    listEvents,
  };
};

export default useEvents;
