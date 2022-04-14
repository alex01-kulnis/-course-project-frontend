import React, { useState } from 'react';

export const ConfirmEventItem = (props) => {
  return (
    <div className="post_main">
      <div className="post">
        <div className="post__content">
          <div>
            <strong>Название</strong> :{props.post.name_event}
          </div>
          <div>
            <strong>Место</strong> : {props.post.place_event}
          </div>
          <div>
            <strong>Дата и время</strong> : {props.post.data_and_time_event}
          </div>
          <div>
            <strong>Макс. колв-во участников</strong> : {props.post.max_participants_event}
          </div>
          <div>
            <strong>Имя заявителя</strong> : {props.post.surname}
          </div>
        </div>
        <div className="post__btns">
          <button style={{ margin: ' 0px 24px 0px 0px ' }}>Подвердить</button>
          <button>Отклонить</button>
        </div>
      </div>
    </div>
  );
};
