import React from 'react'
import { nanoid } from 'nanoid'

import bugIcon from './icons/bug.svg'
import darkIcon from './icons/dark.svg'
import dragonIcon from './icons/dragon.svg'
import electricIcon from './icons/electric.svg'
import fairyIcon from './icons/fairy.svg'
import fightingIcon from './icons/fighting.svg'
import fireIcon from './icons/fire.svg'
import flyingIcon from './icons/flying.svg'
import ghostIcon from './icons/ghost.svg'
import grassIcon from './icons/grass.svg'
import groundIcon from './icons/ground.svg'
import iceIcon from './icons/ice.svg'
import normalIcon from './icons/normal.svg'
import poisonIcon from './icons/poison.svg'
import psychicIcon from './icons/psychic.svg'
import rockIcon from './icons/rock.svg'
import steelIcon from './icons/steel.svg'
import waterIcon from './icons/water.svg'





export default function PokeCard(props) {
  
 
  console.log(props)
  const [pokemonData, setPokemonData] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  
  React.useEffect(() => {
    const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
  
    setPokemonData(data)
    setLoading(false)

  }
  getPokemon(props.id)
     
    }, [])  

  if (loading) return <h1>LOADING....</h1>
  

console.log(pokemonData)
         
const pokemonIcons = {
  bug: bugIcon,
  dark: darkIcon,
  dragon: dragonIcon,
  electric: electricIcon,
  fairy: fairyIcon,
  fighting: fightingIcon,
  fire: fireIcon,
  flying: flyingIcon,
  ghost: ghostIcon,  
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  rock: rockIcon,
  steel: steelIcon,
  water: waterIcon
  

}  

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
    return item.type.name
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

   
      return (
        
        <div className="PokeCard" key={nanoid()} id={pokemonData.name}>
          <div className="pokemon" style={{background: `linear-gradient(${color2}, ${color})`}}>
            <div id={pokemonData.name} className="pokemon-wrapper">

              <div className="img-container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt="" />
              </div>
              <div className="info">            
                <h3 className="name">{pokemonData.name}</h3>
               
               <img className="type-icon" src={pokemonIcons[type]} alt={`${type} type`} />
               {(type !== type2) ? <img className="type-icon" src={pokemonIcons[type2]} alt={`${type} type`} /> : <></> }

                <small className="type">Type: <span>{type}, {type2}</span></small>
              </div>        
            </div>
               <span className="number">#{pokemonData.id}</span>
          </div>
        </div>
      );
    

  
}

//line 91 -102 not working- not displaying the svg according to type
//fix the double type issue when pokemon only has 1 type..