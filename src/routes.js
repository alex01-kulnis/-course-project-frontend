import Auth from './pages/Auth';
import ConfirmEvent from './pages/ConfirmEvent';
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
  { path: HISTORY_EVENT_ROUTE, Component: HistoryEvent },
  { path: CONFIRM_EVENT_ROUTE, Component: ConfirmEvent },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Auth },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
