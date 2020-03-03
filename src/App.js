import React from 'react';
import './App.css';
//import Participants from './Participants';
import Stage from './Stage';
import Chat from './Chat';


function App(props) {
  return (
    <div className="App">

      <Chat log={props.store.chatEvents} 
        list={props.store.participants} /> 
      {/* <Participants list={props.store.participants} /> */}
      <Stage list={props.store.participants} />
      
    </div>
  );
}

export default App;
