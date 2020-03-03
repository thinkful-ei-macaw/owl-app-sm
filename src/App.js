import React from 'react';
import './App.css';
import Stage from './Stage';
import Sidebar from './Sidebar'



function App(props) {
  return (
    <div className="App">
      <Sidebar  
        log={props.store.chatEvents} 
        list={props.store.participants} />
      <Stage list={props.store.participants} />
    </div>
  );
}

export default App;
