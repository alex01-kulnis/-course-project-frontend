import { $host, $authHost } from './index';

export const fetchEvents = async () => {
  const { data } = await $authHost.get('/api/events');
  return data;
};

export const createEvent = async (
  // id_user,
  // id_creator,
  name_event,
  place_event,
  data_and_time_event,
  max_participants_event
) => {
  const { data } = await $authHost.post('/api/create-event', {
    // id_user,
    // id_creator,
    name_event,
    place_event,
    data_and_time_event,
    max_participants_event,
  });
  return data;
};

export const historyFetchEvents = async () => {
  const { data } = await $authHost.get('/api/history-visiting-events');
  return data;
};
