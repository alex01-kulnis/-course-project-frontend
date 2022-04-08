import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Nav } from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
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
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={'outline-light'} style={{ margin: ' 0px 24px 0px 0px ' }}>
              Event
            </Button>
            <Button variant={'outline-light'} style={{ margin: ' 0px 24px 0px 0px ' }}>
              Создать event
            </Button>
            <Button variant={'outline-light'} style={{ margin: ' 0px 24px 0px 0px ' }}>
              Активные заявки
            </Button>
            <Button variant={'outline-light'} style={{ margin: ' 0px 24px 0px 0px ' }}>
              История посещений
            </Button>
            <Button variant={'outline-light'} style={{ margin: ' 0px 0px 0px 595px ' }}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white', margin: '0px 224px 0px 0px ' }}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>
              Войти
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
