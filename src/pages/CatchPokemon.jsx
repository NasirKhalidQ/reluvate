import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "../hooks";
import { getRandomIntInclusive } from "../utils";
import { PokemonCard } from "../components";
import { Pokemons } from "../mock-data";
import { usePokemonState, usePokemonStateUpdate } from "../context";

export const CatchPokemon = () => {
  const state = usePokemonState();
  const setState = usePokemonStateUpdate();

  const { width, height } = useWindowSize();
  const [difficulty, setDifficulty] = useState("easy");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = () => {
    if (state.tries > 0) {
      setState({ ...state, tries: state.tries - 1 });
    }
  };

  const showToast = () => {
    const mNumber = parseInt(state.magicNumber);
    const guessNumber = parseInt(state.guess);

    if (mNumber === guessNumber && state.tries !== 3) {
      const exists = state.pokemonList.find(
        (pokemon) => pokemon.id === Pokemons[parseInt(state.currentPokemon)].id
      );
      if (exists) {
        toast.error("You already have this same pokemon in your portfolio!");
        setState({
          ...state,
          currentPokemon: parseInt(getRandomIntInclusive(0, 15)),
          magicNumber: parseInt(getRandomIntInclusive(1, 10)),
          tries: 3,
        });
        return;
      }
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, [6000]);
      toast.success("Congrats! You caught a Pokemon");
      const caught = Pokemons[parseInt(state.currentPokemon)];
      setState({
        magicNumber: parseInt(getRandomIntInclusive(1, 10)),
        tries: 3,
        currentPokemon: parseInt(getRandomIntInclusive(0, 15)),
        pokemonList: [
          ...state.pokemonList,
          {
            ...caught,
            level: getRandomIntInclusive(1, 100),
          },
        ],
      });
      setDifficulty("easy");
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

  useEffect(() => {
    const number =
      difficulty === "easy" ? 10 : difficulty === "medium" ? 100 : 1000;
    setState({
      ...state,
      magicNumber: parseInt(getRandomIntInclusive(1, number)),
    });
  }, [difficulty]);

  const Button = ({ children, _difficulty, selected }) => {
    return (
      <button
        className={`${
          selected ? "bg-black text-redFa" : "bg-white text-black"
        } rounded-sm text-sm px-4 py-1 border-2 border-black transition duration-300 hover:bg-black hover:text-redFa`}
        onClick={() => {
          setState({
            ...state,
            magicNumber: parseInt(getRandomIntInclusive(1, 10)),
            tries: 3,
          });
          setDifficulty(_difficulty);
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <section className="flex flex-col gap-y-5 place-items-center mt-6 font-semibold">
      <h2 className="text-redFa">Want to catch this Pokemon?</h2>
      <PokemonCard pokemon={Pokemons[state.currentPokemon]} transition />
      <h4 className="mt-4 font-medium">
        Pick a number between 1 and 1
        {difficulty === "easy" ? "0" : difficulty === "medium" ? "00" : "000"}
      </h4>
      <div className="flex gap-x-3">
        <Button _difficulty="easy" selected={difficulty === "easy"}>
          Easy
        </Button>
        <Button _difficulty="medium" selected={difficulty === "medium"}>
          Medium
        </Button>
        <Button _difficulty="hard" selected={difficulty === "hard"}>
          Hard
        </Button>
      </div>

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
      {showConfetti && <Confetti width={width} height={height} />}
    </section>
  );
};
