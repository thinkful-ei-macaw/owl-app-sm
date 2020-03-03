import React from 'react';
import './Stage.css';

function Stage(props){
  const onStage = props.list.filter(participant => participant.onStage === true);
  

return (
  <div className="stage">
    {onStage.map(participant => (
      <div key={participant.id} className={participant.self ? "participant self" : "participant"}>
        <div className="info">
          <h2>{participant.name} <span role="img" aria-label="volume">🔊</span></h2>
          <div className="volume">
            <span></span>
          </div>
        </div>
      <img src={participant.avatar} alt="avatar"/>
    </div>
      ))}
  </div>
)

}










export default Stage;