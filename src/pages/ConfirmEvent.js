import React, { useState, useMemo, useEffect } from 'react';
import '../styles/styles.css';
import { observer } from 'mobx-react-lite';
import { fetchConfirmEvents } from '../http/eventApi';
import { Form } from 'react-bootstrap';
import MySelect from '../components/select/MySelect';
import ConfirmEventList from '../components/ConfirmEventList';

const ConfirmEvent = observer(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchConfirmEvents().then((data) => setPosts(data));
  }, [posts]);

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
      <h1 style={{ textAlign: 'center', margin: 20 }}>Активные заявки</h1>
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
      <ConfirmEventList posts={sortedAndSearchedPosts} />
    </div>
  );
});

export default ConfirmEvent;
