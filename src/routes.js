import Auth from './pages/Auth';
import { ConfrmEvent } from './pages/ConfrmEvent';
import { CreateEvent } from './pages/CreateEvent';
import Event from './pages/Event';
import { HistoryEvent } from './pages/HistoryEvent';
import {
  LOGIN_ROUTE,
  EVENT_ROUTE,
  CREATE_EVENT_ROUTE,
  CONFIRM_EVENT_ROUTE,
  HISTORY_EVENT_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts';

export const authRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  { path: EVENT_ROUTE, Component: Event },
  { path: CREATE_EVENT_ROUTE, Component: CreateEvent },
  { path: CONFIRM_EVENT_ROUTE, Component: ConfrmEvent },
  { path: HISTORY_EVENT_ROUTE, Component: HistoryEvent },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
