import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { createEvent } from '../http/eventApi';
import jwtDecode from 'jwt-decode';

export const CreateEvent = () => {
  const { user } = useContext(Context);

  const [nameEvent, setNameEvent] = useState('');
  const [placeEvent, setPlaceEvent] = useState('');
  const [data, setData] = useState('');
  const [time, setTime] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');

  const click = async () => {
    try {
      await createEvent(nameEvent, placeEvent, data + ' ' + time, maxParticipants);
      setNameEvent('');
      setPlaceEvent('');
      setData('');
      setTime('');
      setMaxParticipants('');
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Создать event</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Название.."
            onChange={(e) => setNameEvent(e.target.value)}
            value={nameEvent}
          />
          <Form.Control
            className="mt-3"
            placeholder="Место..."
            onChange={(e) => setPlaceEvent(e.target.value)}
            value={placeEvent}
          />
          <Form.Control className="mt-3" placeholder="Дата..." onChange={(e) => setData(e.target.value)} value={data} />
          <Form.Control
            className="mt-3"
            placeholder="Время..."
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          <Form.Control
            className="mt-3"
            placeholder="Макс. кол-во участников..."
            onChange={(e) => setMaxParticipants(e.target.value)}
            value={maxParticipants}
          />

          <Button style={{ margin: '20px 0px 0px 0px' }} variant={'outline-success'} onClick={click}>
            Создать
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
