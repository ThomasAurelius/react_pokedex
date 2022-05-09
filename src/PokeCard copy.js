import React from 'react'

function PokeCard({pokemonData}) {
         
  const colors = {
   fire: '#d82b34',
   fairy: '#fceaff',
   bug: '#f8d5a3',
   psychic: '#eaeda1',
   grass: '#1ad148',
	 electric: '#FCF7DE',
	 water: '#DEF3FD',
   poison: '#837ad6',
	 ground: '#f4e7da',
   rock: '#d5d5d4',
   normal: '#F5F5F5',	
	 dragon: '#97b3e6',	
	 flying: '#30aae2',
	 fighting: '#E6E0D4',	
   steel: '#979595',
   ice: '#6eb8e9'   
}
const main_types = Object.keys(colors)

const poke_type = pokemonData.types.map(item => {
    return item.type.name;
})
   
   let poke_type2 = ""
   if (poke_type[1]) {
      poke_type2 = poke_type[1]
   } else {
      poke_type2 = poke_type 
   }

   const type = main_types.find(type => poke_type[0].indexOf(type) > -1)
   const type2 = main_types.find(type => poke_type2.indexOf(type) > -1)

   const color = colors[type]
   const color2 = colors[type2]

   const ability1 = pokemonData.abilities[0].ability.name[0].toUpperCase() + pokemonData.abilities[0].ability.name.slice(1)
   const ability2 = pokemonData.abilities[1].ability.name[0].toUpperCase() + pokemonData.abilities[1].ability.name.slice(1)

  return (
    
    <div className="PokeCard">
      <div className="pokemon" style={{background: `linear-gradient(${color2}, ${color})`}}>
        <div id={pokemonData.name}>
           <span className="number">#{pokemonData.id}</span>
           <div className="img-container">
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt="" />
           </div>
           <div className="info">
            
             <h3 className="name">{pokemonData.name}</h3>
             <small className="type">Type: <span>{type}, {type2}</span></small>
          </div>
        <div>
          <div className="moves">
            <h3 className="stats">Ability 1: {ability1}</h3>
            <h3 className="stats">Ability 2: {ability2}</h3>
          </div>
          <div className="stats">
            <h3 className="stats">Hit Points: {pokemonData.stats[0].base_stat}</h3>
            <div className="bar">
              <div style={`width:{pokemonData.stats[0].base_stat}%`} className="skill">{pokemonData.stats[0].base_stat}</div>
            </div>
            <h3 className="stats">Attack: {pokemonData.stats[1].base_stat}</h3>
            <div className="bar">
              <div style={`width:{pokemonData.stats[1].base_stat}%`} className="skill">{pokemonData.stats[1].base_stat}</div>
            </div>
            <h3 className="stats">Defense: {pokemonData.stats[2].base_stat}</h3>
            <div className="bar">
              <div style={`width:{pokemonData.stats[2].base_stat}%`} className="skill">{pokemonData.stats[2].base_stat}</div>
            </div>
            <h3 className="stats">Special-Attack: {pokemonData.stats[3].base_stat}</h3>
            <div className="bar">
              <div style={`width:{pokemonData.stats[3].base_stat}%`} className="skill">{pokemonData.stats[3].base_stat}</div>
            </div>
            <h3 className="stats">Special-Defense: {pokemonData.stats[4].base_stat} </h3>
            <div className="bar">
              <div style={`width:{pokemonData.stats[4].base_stat}%`} className="skill">{pokemonData.stats[4].base_stat}</div>
            </div>
            <h3 className="stats">Speed: {pokemonData.stats[5].base_stat}</h3>
            <div className="bar">
              <div style={`width:{pokemonData.stats[5].base_stat}%`} className="skill">{pokemonData.stats[5].base_stat}</div>
            </div>       
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PokeCard;
