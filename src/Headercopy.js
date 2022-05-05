import pokemonImage from './pokemon.png'

function Header() {
  return (
    <div className="Header">
      <img src={pokemonImage} class="title_img" alt="pokemon title graphic"></img>
      <div class="generation-btns">
        <button onClick={() => updateGen(1, 151)}>1st Generation</button>
        <button onClick={() => updateGen(152, 251)}>2nd Generation</button>
        <button onClick={() => updateGen(252, 386)}>3rd Generation</button>
        <button onClick={() => updateGen(387, 493)}>4th Generation</button>
        <button onClick={() => updateGen(494, 649)}>5th Generation</button>
        
        <br />
        <p>Click a card to see its pokemons stats and starting moves.</p>
    </div>
   <div id="loader" class="loader">
      <img src={pokemonImage} class="title_img" alt="pokemon title graphic" />
      <h1>Catching Pokemon!....</h1>
   </div>
    </div>
  );
}

export default Header;
