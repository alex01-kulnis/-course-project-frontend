import React, { useState } from 'react';
import { EventItem } from '../components/EventItem';
import '../styles/styles.css';

const Event = () => {
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
      {posts.map((post) => (
        <EventItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Event;
