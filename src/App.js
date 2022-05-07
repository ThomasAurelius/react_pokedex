import React from 'react'
import Header from './Header'
import PokeCard from './PokeCard'
import './style.css';

function App() {
  const pokemonId = 1
  
  const [pokemonData, setPokemonData] = React.useState(

  React.useEffect(() => {
    const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    
    setPokemonData(data)
    
  }
  
    getPokemon(pokemonId)  
    }, [])  
    

  )

console.log(pokemonData)

  return (
    <div className="App">
      <Header />
      <PokeCard pokemonData={pokemonData} />
    </div>
  );
}

export default App;
