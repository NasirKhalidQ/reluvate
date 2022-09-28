import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CatchPokemon, ViewPokemons, NotFound, Home, Login } from "./pages";
import { getRandomIntInclusive } from "./utils";

const App = () => {
  const [state, setState] = useState({
    guess: 0,
    magicNumber: parseInt(getRandomIntInclusive(1, 10)),
    tries: 3,
    currentPokemon: parseInt(getRandomIntInclusive(0, 15)),
    pokemonList: [],
  });

  const startGame = () => {
    const currentPokemon = parseInt(getRandomIntInclusive(0, 15));
    const magicNumber = parseInt(getRandomIntInclusive(1, 10));
    setState({ ...state, currentPokemon, magicNumber, tries: 3 });
  };

  const deletePokemon = (id) => {
    setState({
      ...state,
      pokemonList: state.pokemonList.filter((pokemon) => pokemon.id !== id),
    });
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home startGame={startGame} />}>
        <Route
          path="catch-pokemon"
          element={<CatchPokemon state={state} setState={setState} />}
        />
        <Route
          path="view-pokemons"
          element={
            <ViewPokemons
              pokemonList={state.pokemonList}
              deletePokemon={deletePokemon}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
