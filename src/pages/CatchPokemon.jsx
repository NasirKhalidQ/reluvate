import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "../hooks";
import { getRandomIntInclusive } from "../utils";
import { PokemonCard } from "../components";
import { Pokemons } from "../mock-data";

export const CatchPokemon = ({ state, setState }) => {
  const { width, height } = useWindowSize();

  const handleSubmit = () => {
    if (state.tries > 0) {
      setState({ ...state, tries: state.tries - 1 });
    }
  };

  const showToast = () => {
    const mNumber = parseInt(state.magicNumber);
    const guessNumber = parseInt(state.guess);

    if (mNumber === guessNumber && state.tries !== 3) {
      toast.success("Congrats! You caught a Pokemon");
      const caught = Pokemons[parseInt(state.currentPokemon)];
      setState({
        guess: 0,
        magicNumber: parseInt(getRandomIntInclusive(1, 10)),
        tries: 3,
        currentPokemon: parseInt(getRandomIntInclusive(0, 15)),
        pokemonList: [
          ...state.pokemonList,
          {
            ...caught,
            level: getRandomIntInclusive(1, 1000),
          },
        ],
      });
    } else if (state.tries !== 3) {
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

  useEffect(() => {
    showToast();
  }, [state.tries]);

  return (
    <div className="flex flex-col gap-y-5 place-items-center mt-6 font-semibold">
      <h2 className="text-redFa">Want to catch this Pokemon?</h2>
      <PokemonCard pokemon={Pokemons[state.currentPokemon]} />
      <h4 className="mt-4 font-medium">Pick a number between 1 and 10</h4>
      <input
        className="px-3 py-2 w-64 rounded-sm focus:outline-gray-900 bg-gray-100 border-2 border-zinc-500"
        type="number"
        min={0}
        onChange={(e) => setState({ ...state, guess: e.currentTarget.value })}
      />
      <button
        onClick={handleSubmit}
        disabled={state.tries < 1}
        className={`bg-black w-64 p-2 ${
          state.tries < 1
            ? "disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:text-white"
            : ""
        } text-white rounded-sm hover:text-redFa transition-all ease-in-out duration-300`}
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
      {false && <Confetti width={width} height={height} recycle={true} />}
    </div>
  );
};
