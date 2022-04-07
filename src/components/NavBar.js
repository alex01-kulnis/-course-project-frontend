/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Context } from '../index';
import { NavLink } from 'react-bootstrap';
import { EVENT_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={EVENT_ROUTE}>
          Event
        </NavLink>
        <NavLink style={{ color: 'white' }} to={EVENT_ROUTE}>
          Активыне заявки
        </NavLink>
        <NavLink style={{ color: 'white' }} to={EVENT_ROUTE}>
          История посещения
        </NavLink>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          <Button variant={'outline-light'}>авторизация</Button>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
