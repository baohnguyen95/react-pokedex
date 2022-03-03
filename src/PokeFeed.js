import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Pokemon from './Pokemon';

function PokeFeed() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();
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
    <div class="flex justify-center">
      {pokeArray[0]}
      {/* <Pokemon name={pokemons[0].name} img={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`} key={1} /> */}
    </div>
  )
}

export default PokeFeed;