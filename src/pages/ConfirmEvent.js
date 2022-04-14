import React, { useState, useContext } from 'react';
import { ConfirmEventItem } from '../components/ConfirmEventItem';
import '../styles/styles.css';
import { Context } from '../index';

const ConfirmEvent = () => {
  const { user } = useContext(Context);

  const [posts, setPosts] = useState([
    {
      id_event: 1,
      id_creator: 1,
      id_user: 1,
      name_event: 'name',
      place_event: 'place',
      data_and_time_event: '23/03/2001',
      max_participants_event: 23,
      surname: 'alex',
    },
    {
      id_event: 2,
      id_creator: 2,
      id_user: 2,
      name_event: 'name',
      place_event: 'place',
      data_and_time_event: '23/03/2001',
      max_participants_event: 23,
      surname: 'Ivan',
    },
  ]);
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 20 }}>Активные заявки</h1>
      {posts.map((post) => (
        <ConfirmEventItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default ConfirmEvent;
