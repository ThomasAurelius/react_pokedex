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
  
//make a loop that returns pokecard with prop numbers from start to end
  

const pokeId = () => {
 let pokemon = []
  for (let i = id.startId; i < id.endId; i++ ) {
    
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
