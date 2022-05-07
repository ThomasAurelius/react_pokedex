import React from 'react'

function PokeCard({pokemonData}) {
         console.log(pokemonData)
  return (
    
    <div className="PokeCard">
      <div className="pokemon">
        <div id={pokemonData.name}>
           <div className="img-container">
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt="" />
           </div>
           <div className="info">
             <span className="number">#{pokemonData.id}</span>
             <h3 className="name">{pokemonData.name}</h3>
             <small className="type">Type: <span></span></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
