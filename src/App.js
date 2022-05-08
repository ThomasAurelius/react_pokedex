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
  

  

    return (
    <div className="App">
      <Header />
      
    <PokeCard id={1} />
    <PokeCard id={2} />
        </div>
  );
    


}

export default App;
