import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CatchPokemon } from "./components/CatchPokemon";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { ViewPokemons } from "./components/ViewPokemons";

const App = () => {
  const [state, setState] = useState({
    guess: 0,
    magicNumber: 1,
    tries: 3,
    currentPokemon: 0,
    pokemonList: [],
  });
  const getRandomIntInclusive = (min, max) => {
    // courtesy of MDN
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  };

  const startGame = () => {
    const currentPokemon = parseInt(getRandomIntInclusive(0, 15));
    const magicNumber = parseInt(getRandomIntInclusive(1, 10));
    setState({ ...state, currentPokemon, magicNumber });
  };
  return (
    <Routes>
      <Route exact path="/" element={<Home startGame={startGame} />}>
        <Route
          path="catch-pokemon"
          element={
            <CatchPokemon
              state={state}
              setState={setState}
              startGame={startGame}
            />
          }
        />
        <Route path="view-pokemons" element={<ViewPokemons />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
