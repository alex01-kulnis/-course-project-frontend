import React from 'react';
import { applyEvent } from '../http/eventApi';

export const EventItem = ({ post }) => {
  const click = async () => {
    try {
      const result = await applyEvent(
        post.id_event,
        post.id_creator,
        post.name_event,
        post.place_event,
        post.data_and_time_event,
        post.max_participants_event,
        post.surname
      ); 
      alert(result);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="post_main">
      <div className="post">
        <div className="post__content">
          <div>
            <strong>Название</strong> : {post.name_event}
          </div>
          <div>
            <strong>Место</strong> : {post.place_event}
          </div>
          <div>
            <strong>Дата и время</strong> : {post.data_and_time_event}
          </div>
          <div>
            <strong>Макс. колв-во участников</strong> : {post.max_participants_event}
          </div>
        </div>
        <div className="post__btns">
          <button onClick={click}>Подать заявку</button>
        </div>
      </div>
    </div>
  );
};
