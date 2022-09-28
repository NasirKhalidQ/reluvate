import { PokemonCard } from "../components";

export const ViewPokemons = ({ state, setState }) => {
  return (
    <div className="flex flex-col gap-y-5 mt-6 font-semibold p-4">
      {state.pokemonList.length > 0 ? (
        <h2 className="text-green-600">
          You possess {state.pokemonList.length} Pokemon(s)! You are rich!
        </h2>
      ) : (
        <h2 className="text-redFa">
          You don't have any pokemon. You are Poor :(
        </h2>
      )}

      <div className="flex gap-x-6">
        {state.pokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
