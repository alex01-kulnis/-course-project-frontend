import React, { useState, useContext, useEffect } from 'react';
import { EventItem } from '../components/EventItem';
import '../styles/styles.css';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { fetchEvents } from '../http/eventApi';
import { Button, Form } from 'react-bootstrap';

const Event = observer(() => {
  const { event } = useContext(Context);

  // useEffect(()=>{
  //   fetchEvents().then)
  // })

  const [posts, setPosts] = useState([
    {
      id_event: 1,
      id_creator: 1,
      id_user: 1,
      name_event: 'name',
      place_event: 'place',
      data_and_time_event: '23/03/2001',
      max_participants_event: 23,
    },
    {
      id_event: 2,
      id_creator: 2,
      id_user: 2,
      name_event: 'name',
      place_event: 'place',
      data_and_time_event: '23/03/2001',
      max_participants_event: 23,
    },
  ]);
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 20 }}>Список Events</h1>
      <Form className="d-flex flex-column" style={{ width: 700, margin: '0px 0px 0px 595px' }}>
        <Form className="search_string">
          <Form.Control placeholder="Поиск" />
          <Button style={{ margin: '0px 0px 0px 15px' }}>Поиск</Button>
        </Form>
      </Form>
      .
      {posts.map((post) => (
        <EventItem post={post} key={post.id} />
      ))}
    </div>
  );
});

export default Event;
