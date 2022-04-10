import React, { useState } from 'react';

export const EventItem = (props) => {
  return (
    <div className="post_main">
      <div className="post">
        <div className="post__content">
          <strong>{props.post.name_event}</strong>
          <strong>{props.post.max_participants_event}</strong>
          <div>{props.post.place_event}</div>
          <div>{props.post.data_and_time_event}</div>
          <div>{props.post.max_participants_event}</div>
        </div>
        <div className="post__btns">
          <button>подать заявку</button>
        </div>
      </div>
    </div>
  );
};
