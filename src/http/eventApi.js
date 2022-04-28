import { $authHost } from './index';

export const fetchEvents = async () => {
  const { data } = await $authHost.get('/api/events');
  return data;
};

export const createEvent = async (name_event, place_event, data_and_time_event, max_participants_event) => {
  const { data } = await $authHost.post('/api/create-event', {
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

export const applyEvent = async (
  id_event,
  id_creator,
  name_event,
  place_event,
  data_and_time_event,
  max_participants_event,
  surname
) => {
  const { data } = await $authHost.post('/api/apply-event', {
    id_event,
    id_creator,
    name_event,
    place_event,
    data_and_time_event,
    max_participants_event,
    surname,
  });
  return data;
};

export const fetchConfirmEvents = async () => {
  const { data } = await $authHost.get('/api/confirm-visiting-events');
  return data;
};

export const fetchApllyConfirmEvent = async (
  id,
  id_event,
  id_creator,
  id_user,
  name_event,
  place_event,
  data_and_time_event,
  max_participants_event
) => {
  const { data } = await $authHost.post('/api/confirm-visiting-events', {
    id,
    id_event,
    id_creator,
    id_user,
    name_event,
    place_event,
    data_and_time_event,
    max_participants_event,
  });
  return data;
};

export const refuseEvent = async (
  id,
  id_event,
  id_creator,
  id_user,
  name_event,
  place_event,
  data_and_time_event,
  max_participants_event
) => {
  const { data } = await $authHost.patch('/api/confirm-visiting-events', {
    id,
    id_event,
    id_creator,
    id_user,
    name_event,
    place_event,
    data_and_time_event,
    max_participants_event,
  });
  return data;
};
