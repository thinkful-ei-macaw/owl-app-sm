import React from 'react';
import './App.css';
import Participants from './Participants';
import Stage from './Stage'


function App(props) {
  return (
    <div className="App">

      <Participants list={props.store.participants} />
      <Stage list={props.store.participants} />

    </div>
  );
}

export default App;
