import React, { createContext, useContext, useState } from "react";
import { getRandomIntInclusive } from "../utils";

const PokemonContext = createContext();

export const usePokemonState = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
  const [pokemonState, setPokemonState] = useState({
    guess: 0,
    magicNumber: parseInt(getRandomIntInclusive(1, 10)),
    tries: 3,
    currentPokemon: parseInt(getRandomIntInclusive(0, 15)),
    pokemonList: [],
  });

  return (
    <PokemonContext.Provider value={{ pokemonState, setPokemonState }}>
      {children}
    </PokemonContext.Provider>
  );
};
