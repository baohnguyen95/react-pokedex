import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function PokeFeed() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();
    console.log(data);
    setPokemons(data.results);
  }


  useEffect(() => {
    getPokemons();
  }, []);

  const pokeArray = [];
  for (let pokemon = 0; pokemon < pokemons.length; pokemon++){
    const index = ("00" + (pokemon + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`
    pokeArray.push(<Pokemon name={pokemons[pokemon].name} img={image} key={pokemon + 1} />);
  }
  return (
    <div class="flex flex-col items-center">
      {pokeArray};
    </div>
  )
}

export default PokeFeed;