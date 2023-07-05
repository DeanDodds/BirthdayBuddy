import React, { useState } from 'react';
import data  from './assets/data.js';
import List from './assets/components/List.jsx';

const App = () => {
  const [people, setPeople] = React.useState(data);

  return (
  <main>
    <section className='container'>
    <h3>{people.length} Birthdays Today</h3>

    <List people={people}/>
    <button type="button" className='btn btn-block' onClick={() => setPeople([])}>
        Clear List
      </button>
    </section>
  </main>)
};

export default App;

