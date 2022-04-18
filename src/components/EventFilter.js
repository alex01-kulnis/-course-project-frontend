import React from 'react';

const EventFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
    </div>
  );
};

export default EventFilter;
