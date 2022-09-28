import { PokemonCard } from "../components";

export const ViewPokemons = ({ state, setState }) => {
  return (
    <div className="flex flex-col gap-y-10 mt-6 font-semibold p-4">
      {state.pokemonList.length > 0 ? (
        <h2 className="text-green-600">
          You possess {state.pokemonList.length} Pokemon(s)! You are rich!
        </h2>
      ) : (
        <div className="flex -gap-x-4">
          <h2 className="text-redFa mt-10">
            You don't have any pokemon. You are Poor
          </h2>
          <img
            width={50}
            src="https://www.pngkit.com/png/detail/56-565987_pikachu-pokemon-and-sad-image-pikachu-crying.png"
            alt="sad pikachu"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-6">
        {state.pokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
