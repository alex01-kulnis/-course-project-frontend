import { observer } from 'mobx-react-lite';
import React from 'react';
//история не работает бо поменял общщий event-item props.'event'.name_event
export const EventItem = (props) => {
  return (
    <div className="post_main">
      <div className="post">
        <div className="post__content">
          <div>
            <strong>Название</strong> : {props.post.name_event}
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
        </div>
        <div className="post__btns">
          <button>Подать заявку</button>
        </div>
      </div>
    </div>
  );
};
