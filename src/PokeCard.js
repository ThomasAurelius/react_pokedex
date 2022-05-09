import React from 'react'
import { nanoid } from 'nanoid'
import  icons  from './icons/iconindex.js'
import grassIcon from './icons/grass.svg'
import poisonIcon from './icons/poison.svg'
import fireIcon from './icons/fire.svg'




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
  grass: grassIcon,
  poison: poisonIcon,
  fire: fireIcon
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
               
                <h4>type variable = {type}</h4>
                <img className="type-icon" src={pokemonIcons[type]} alt={`${type} type`} />
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