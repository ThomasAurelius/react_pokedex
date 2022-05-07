import React from 'react'

function PokeCard(props) {
         
  return (
    
    <div className="PokeCard">
      <div className="pokemon">
        <div id={props.name}>
           <div className="img-container">
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="" />
           </div>
           <div className="info">
             <span className="number">#{props.id}</span>
             <h3 className="name">{props.name}</h3>
             <small className="type">Type: <span>{}</span></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
