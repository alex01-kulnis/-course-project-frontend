import React from 'react';

export const HistoryEventItem = ({ post }) => {
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
      </div>
    </div>
  );
};
