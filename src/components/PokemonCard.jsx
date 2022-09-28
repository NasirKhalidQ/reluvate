import React from "react";

export const PokemonCard = ({ pokemon }) => {
  return (
    <div
      className={`w-72 h-96 px-10 py-3 text-black border-black border-4 flex flex-col rounded-2xl shadow-2xl transition ease-linear delay-300 hover:scale-110 ${pokemon.shadow} ${pokemon.bg}`}
    >
      <p className="ml-16 text-xl">{`#00${pokemon.id + 1}`}</p>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <p className="mt-4">Name: {pokemon.name}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p> <p>Type: {pokemon.type}</p>
    </div>
  );
};
