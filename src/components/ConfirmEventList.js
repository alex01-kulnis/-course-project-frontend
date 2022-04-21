import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ConfirmEventItem } from './ConfirmEventItem';
import { observer } from 'mobx-react-lite';

const ConfirmEventList = observer(({ posts }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Events не найдены!</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <ConfirmEventItem post={post} key={post.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

export default ConfirmEventList;
