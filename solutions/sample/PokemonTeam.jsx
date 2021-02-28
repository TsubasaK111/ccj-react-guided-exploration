import React, { useState, useEffect } from "react";

export default function PokemonTeam() {
  console.log("PokemonTeam rendered");

  const [pokemonTeamSprites, setPokemonTeamSprites] = useState([]);
  const [pokemonNumbers] = useState([94, 149, 25, 6, 129, 123]);

  useEffect(fetchAndSetPokemons, []); // fetch the pokemons on first render

  // gets pokemons and puts them to state
  function fetchAndSetPokemons() {
    // turn teamNumbers into pokemon sprite Promises
    const pokemonSpritePromises = pokemonNumbers.map(async (num) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      const data = await res.json();
      return data.sprites.front_default;
      // remember, async functions return a promise
    });

    // resolve promise array and set to state
    Promise.all(pokemonSpritePromises).then((pokemonSprites) => {
      setPokemonTeamSprites(pokemonSprites);
    });
  }
  // returns an array of <img> elements with each sprite
  function renderPokemonTeamSprites() {
    return pokemonTeamSprites.map((sprite) => {
      return <img src={sprite} alt="pokemon" key={sprite} />;
    });
  }

  return (
    <div id="pokemon-team">
      <button
        onClick={() => {
          fetchAndSetPokemons();
        }}
      >
        Show Pokemon Team
      </button>
      <button
        onClick={() => {
          setPokemonTeamSprites([]); // set it back to empty
        }}
      >
        Hide Pokemon Team
      </button>
      <br />
      {/* if we have 6 pokemons, show the sprites */}
      {pokemonTeamSprites.length === 6 && renderPokemonTeamSprites()}
    </div>
  );
}
