import React from 'react';
import moment from 'moment';
import './Chat.css';

function Chat(props){
  const actions = {
    "thumbs-up": "gave a thumbs up 👍🏽",
    "thumbs-down": "gave a thumbs down 👎🏽",
    "raise-hand": " raised their hand🤚🏽",
    "clap": "clapped 👏🏽",
    "join": "joined",
    "join-stage": "joined the stage",
    "leave-stage": "left the stage",
    "leave": "left the session"
  }

  return (
  
    <div className="chat">
      <div className="log">
        {props.log.map(event => {
          let participant = props.list.find(item => item.id === event.participantId)
          let time = moment(event.timestamp).format("H:MM A")

          return event.type === 'message' ? (
            <div key={event.id} className="message">
              <img src={participant.avatar} alt="avatar" />
              <div>
                <h2>{participant.name} <span>{time}</span></h2> 
                <p>{event.message}</p>
              </div>
            </div>
          ) : (
            <div key={event.id} className="text">
              <b>{participant.name}</b> {actions[event.type]}
            </div>
          )
        })}


        
      </div>
      <div className="input">
        <input placeholder="Chat" />
      </div>  
    </div>
  )


}




export default Chat;