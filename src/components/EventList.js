import React, { useContext } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { EventItem } from './EventItem';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const EventList = observer(({ posts }) => {
  const { event } = useContext(Context);

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Events не найдены!</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => (
          <EventItem post={post} key={post.id_event} />
        ))}
      </TransitionGroup>
    </div>
  );
});

export default EventList;
