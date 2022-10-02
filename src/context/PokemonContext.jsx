import React, { createContext, useContext, useState } from "react";
import { getRandomIntInclusive } from "../utils";

const PokemonContext = createContext();
const PokemonUpdateContext = createContext();

export const usePokemonState = () => {
  return useContext(PokemonContext);
};

export const usePokemonStateUpdate = () => {
  return useContext(PokemonUpdateContext);
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
    <PokemonContext.Provider value={pokemonState}>
      <PokemonUpdateContext.Provider value={setPokemonState}>
        {children}
      </PokemonUpdateContext.Provider>
    </PokemonContext.Provider>
  );
};
