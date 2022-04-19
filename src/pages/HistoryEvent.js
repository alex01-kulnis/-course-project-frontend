import React, { useState, useContext, useEffect, useMemo } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { fetchEvents, historyFetchEvents } from '../http/eventApi';
import { Form } from 'react-bootstrap';
import EventList from '../components/EventList';
import MySelect from '../components/select/MySelect';
import HistoryEventList from '../components/HistoryList';

export const HistoryEvent = observer(() => {
  const { event } = useContext(Context);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const [posts, setPosts] = useState([
    // {
    //   id_event: 1,
    //   id_user: 1,
    //   id_creator: 1,
    //   name_event: 'a',
    //   place_event: 'z',
    //   data_and_time_event: '23-03-2001',
    //   max_participants_event: 23,
    // },
    // {
    //   id_event: 2,
    //   id_user: 2,
    //   id_creator: 2,
    //   name_event: 'b',
    //   place_event: 'd',
    //   data_and_time_event: '23-03-2001',
    //   max_participants_event: 23,
    // },
  ]);

  useEffect(() => {
    historyFetchEvents().then((data) => setPosts(data));
    // event.setEvents(posts);
  }, []);

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.name_event.toLocaleLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: 20 }}>История посещения</h1>
      <Form className="d-flex flex-column" style={{ width: 700, margin: '0px 0px 0px 595px' }}>
        <div className="search_string">
          <Form.Control placeholder="Поиск" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <div style={{ display: 'flex', margin: '0px 0px 0px 10px' }}>
            <MySelect
              value={selectedSort}
              onChange={sortPosts}
              defaultValue="Сортировка"
              options={[
                { value: 'name_event', name: 'По имени' },
                { value: 'place_event', name: 'По месту' },
              ]}
            />
          </div>
        </div>
      </Form>
      <HistoryEventList posts={sortedAndSearchedPosts} />
    </div>
  );
});
