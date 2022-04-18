import { $host, $authHost } from './index';

export const fetchEvents = async () => {
  const { data } = await $authHost.get('/api/events');
  return data;
};

// export const login = async (login, password) => {
//   const { data } = await $host.post('/api/login', { login, password });
//   localStorage.setItem('token', data.token);
//   return data.token;
// };
