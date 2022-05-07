import React from 'react'
import Header from './Header'
import PokeCard from './PokeCard'
import './style.css';

function App() {
  
  const [pokemonData, setPokemonData] = React.useState(

  React.useEffect(() => {
    const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    
    setPokemonData(data)
    
    
  }
    getPokemon(1)  
    }, [])  
  )



  return (
    <div className="App">
      <Header />
      <PokeCard pokemonData={pokemonData} />
    </div>
  );
}

export default App;
