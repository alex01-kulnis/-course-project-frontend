import Auth from './pages/Auth';
import Event from './pages/Event';
import { LOGIN_ROUTE, EVENT_ROUTE } from './utils/consts';

export const AllRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  { path: EVENT_ROUTE, Component: Event },
];
