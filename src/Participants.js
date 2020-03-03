import React from 'react';
import './Participants.css';

function Participants(props) {
  return (
    <div className="participants">
      <ul>
      {props.list.map( participant => (
        <li>
          <img src={participant.avatar} alt="person" />
          <div>
            <h2>{participant.name}</h2>
            <p>
              <span className={participant.onStage || participant.inSession ? 'online' : 'offline'}>
              {participant.onStage ? "on stage" : participant.inSession ? "in session" : "left session"}
              </span>
            </p>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Participants;
