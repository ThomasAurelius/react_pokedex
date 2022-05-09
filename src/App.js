import React from 'react'
import Header from './Header'
import PokeCard from './PokeCard'
import { nanoid } from 'nanoid'
import './style.css';

function App() {

  const [id, setId] = React.useState({
    startId: 1,
    endId: 20
  })
   

const pokeId = () => {
 let pokemon = []
  for (let i = id.startId; i <= id.endId; i++ ) {
    
     pokemon.push(<PokeCard id={i} />)
    
  }
  return pokemon
}
 
    return (
    <div className="App">
      <Header />
      {pokeId()}
  
        </div>
  );
    
}

export default App;


//make buttons for generations
//re-style cards for a more modern look
//make a function that when a card is clicked, it expands with little more info
