import { $host } from './index';

export const registration = async (login, password, firstname, secondname) => {
  const { data } = await $host.post('/api/registration', { login, password, firstname, secondname });
  localStorage.setItem('token', data.token);
  return data.token;
};

export const login = async (login, password) => {
  const { data } = await $host.post('/api/login', { login, password });
  localStorage.setItem('token', data.token);
  return data.token;
};
