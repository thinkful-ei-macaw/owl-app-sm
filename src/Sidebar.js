import React, { useState }  from 'react';
import Participants from './Participants';
import Chat from './Chat';
import './Sidebar.css'

function Sidebar(props){
  let [activeView, setActiveView] = useState("chat");
  let component = activeView === "chat" ? (
    <Chat log={props.log} 
      list={props.list} /> 
  ) : (
    <Participants list={props.list} />
  )
  
  return (
    <div className="sidebar">
      <div className="header">
        <button 
          className={activeView==="chat" ? "active" : ""}
          onClick={() => 
            {setActiveView("chat")}}>
          Chat
        </button>
        <button 
          className={activeView==="participants" ? "active" : ""}
          onClick={() => 
          {setActiveView("participants")}}>
          Participants
        </button>
      </div>
      {component}
    </div>
)}



export default Sidebar;