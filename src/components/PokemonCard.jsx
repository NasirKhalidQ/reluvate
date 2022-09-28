import React from "react";

export const PokemonCard = ({ pokemon, transition }) => {
  return (
    <div
      className={`w-72 h-[25rem] px-10 py-3 text-black border-black border-4 flex flex-col rounded-2xl shadow-2xl ${
        transition ? "hover:scale-110" : ""
      } ease-linear delay-300 transition ${pokemon.shadow} ${pokemon.bg}`}
    >
      <p className="ml-16 text-xl">{`#00${pokemon.id + 1}`}</p>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p className="mt-4">Name: {pokemon.name}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
      <p>Type: {pokemon.type}</p>
      {pokemon.level && (
        <p className="bg-slate-800 text-redFa animate-pulse mt-1.5 p-0.5 w-28 rounded px-4 -ml-2">
          Level: {pokemon.level}
        </p>
      )}
    </div>
  );
};
