import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';

export const CreateEvent = () => {
  const { user } = useContext(Context);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Создать event</h2>
        <Form className="d-flex flex-column">
          <Form>
            <Form.Control className="mt-3" placeholder="Название.." />
            <Form.Control className="mt-3" placeholder="Место..." />
            <Form.Control className="mt-3" placeholder="Дата и время..." />
            <Form.Control className="mt-3" placeholder="Макс. кол-во участников..." />
          </Form>
          <Button
            style={{ margin: '20px 0px 0px 0px' }}
            variant={'outline-success'}
            onClick={() => user.setIsAuth(true)}
          >
            Создать
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
