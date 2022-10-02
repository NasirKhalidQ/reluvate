import { Route, Routes } from "react-router-dom";
import { PokemonProvider } from "./context";
import { CatchPokemon, ViewPokemons, NotFound, Home, Login } from "./pages";

const App = () => {
  return (
    <PokemonProvider>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="catch-pokemon" element={<CatchPokemon />} />
          <Route path="view-pokemons" element={<ViewPokemons />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </PokemonProvider>
  );
};

export default App;
