import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import {
  CONFIRM_EVENT_ROUTE,
  CREATE_EVENT_ROUTE,
  EVENT_ROUTE,
  HISTORY_EVENT_ROUTE,
  LOGIN_ROUTE,
} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  function logout() {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  }

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 50 }}>
      <Container>
        <Nav className="ml-auto">
          <Link style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={EVENT_ROUTE}>
            Events
          </Link>
          <NavLink style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={CREATE_EVENT_ROUTE}>
            Создать event
          </NavLink>
          <NavLink style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={CONFIRM_EVENT_ROUTE}>
            Активные заявки
          </NavLink>
          <NavLink style={{ color: 'white', margin: ' 0px 24px 0px 0px ' }} to={HISTORY_EVENT_ROUTE}>
            История посещений
          </NavLink>
          <NavLink style={{ color: 'white', margin: ' 0px 0px 0px 595px ' }} to={LOGIN_ROUTE} onClick={() => logout()}>
            Выйти
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
