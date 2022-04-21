import React from 'react';
import { fetchApllyConfirmEvent, refuseEvent } from '../http/eventApi';

export const ConfirmEventItem = ({ post }) => {
  const confirm = async () => {
    try {
      const result = await fetchApllyConfirmEvent(
        post.id,
        post.id_event,
        post.id_creator,
        post.id_user,
        post.name_event,
        post.place_event,
        post.data_and_time_event,
        post.max_participants_event
      );
      alert(result);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const remove = async () => {
    try {
      const result = await refuseEvent(post.id);
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
            <strong>Название</strong> :{post.name_event}
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
          <div>
            <strong>Имя заявителя</strong> : {post.surname}
          </div>
        </div>
        <div className="post__btns">
          <button style={{ margin: ' 0px 24px 0px 0px ' }} onClick={confirm}>
            Подвердить
          </button>
          <button onClick={remove}>Отклонить</button>
        </div>
      </div>
    </div>
  );
};
