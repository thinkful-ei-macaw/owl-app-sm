import React from 'react';

function Stage(props){
  const onStage = props.list.filter(participant => participant.onStage === true);
  

return (
  <div className="stage">
    {onStage.map(participant => (
      <div className={participant.self ? "participant self" : "participant"}>
        <div>
          <h2>{participant.name}</h2>
          <div className="volume"></div>
          <i></i>
        </div>
      <img src={participant.avatar} alt="avatar"/>
    </div>
      ))}
  </div>
)

}










export default Stage;