import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EventStore from './store/EventStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ user: new UserStore(), event: new EventStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
