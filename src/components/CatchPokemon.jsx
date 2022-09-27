import { ToastContainer, toast } from "react-toastify";
import { Pokemons } from "../pokemon";

export const CatchPokemon = ({ state, setState, startGame }) => {
  const handleSubmit = () => {
    if (state.tries > 0) {
      setState({ ...state, tries: state.tries - 1 });
    }

    const mNumber = parseInt(state.magicNumber);
    const guessNumber = parseInt(state.guess);

    if (mNumber === guessNumber) {
      toast.success("Congrats! You caught a Pokemon");
      setState({
        ...state,
        pokemonList: [
          ...state.pokemonList,
          Pokemons[parseInt(state.currentPokemon)],
        ],
      });
      startGame();
    } else {
      if (guessNumber > mNumber) {
        toast.error(
          `Incorrect! Your number is too high. You have ${state.tries} tries left`
        );
      } else {
        toast.error(
          `Incorrect! Your number is too low. You have ${state.tries} tries left`
        );
      }
    }
  };
  return (
    <div className="flex flex-col gap-y-5 place-items-center mt-6 font-semibold ">
      <h2 className="text-redFa">Want to catch this Pokemon?</h2>
      <div
        className={`w-72 h-96 px-10 py-3 text-black border-black border-4 flex flex-col rounded-2xl shadow-2xl transition ease-linear delay-300 hover:scale-110 ${
          Pokemons[state.currentPokemon].shadow
        } ${Pokemons[state.currentPokemon].bg}`}
      >
        <p className="ml-16 text-xl">{`#00${state.currentPokemon + 1}`}</p>
        <img
          src={Pokemons[state.currentPokemon].imageUrl}
          alt={Pokemons[state.currentPokemon].name}
        />
        <p className="mt-4">Name: {Pokemons[state.currentPokemon].name}</p>
        <p>HP: {Pokemons[state.currentPokemon].hp}</p>
        <p>Attack: {Pokemons[state.currentPokemon].attack}</p>
        <p>Defense: {Pokemons[state.currentPokemon].defense}</p>{" "}
        <p>Type: {Pokemons[state.currentPokemon].type}</p>
      </div>
      <h4 className="mt-4 font-medium">Pick a number between 1 and 10</h4>
      <input
        className="px-3 py-2 w-64 rounded-sm focus:outline-gray-900 bg-gray-100 border-2 border-zinc-500"
        type="number"
        min={0}
        onChange={(e) => setState({ ...state, guess: e.currentTarget.value })}
      />
      <button
        onClick={handleSubmit}
        className="bg-black w-64 p-2 text-white rounded-sm hover:text-redFa transition-all ease-in-out duration-300"
      >
        Submit
      </button>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
};
