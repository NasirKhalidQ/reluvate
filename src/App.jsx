import { useState } from "react";
import { Pokemons } from "./pokemon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    setMagicNumber(Math.floor(Math.random() * (max - min + 1) + min)); // The maximum is inclusive and the minimum is inclusive
  }

  const [guess, setGuess] = useState(0);
  const [magicNumber, setMagicNumber] = useState(0);
  const [tries, setTries] = useState(3);

  const handleSubmit = () => {
    const mNumber = parseInt(magicNumber);
    const guessNumber = parseInt(guess);

    if (mNumber === guessNumber) {
      toast.success("Congrats! You caught a Pokemon");
    } else {
      if (guessNumber > mNumber) {
        toast.error(
          `Incorrect! Your number is too high\nYou have ${tries} tries left`
        );
      } else {
        toast.error(
          `Incorrect! Your number is too low\nYou have ${tries} tries left`
        );
      }
    }
  };

  return (
    <div className="bg-tile">
      <div className="flex w-full bg-black p-4 justify-between">
        <h2 className="text-3xl text-white">Catch 'em all</h2>
        <div className="flex gap-x-4">
          <button
            onClick={() => getRandomIntInclusive(1, 10)}
            className="bg-white"
          >
            Catch Pokemon
          </button>
          <button className="bg-white">View Pokemon</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 place-items-center mt-6 font-semibold ">
        <h2 className="text-redFa">Want to catch this Pokemon?</h2>
        <div
          className={`w-72 h-96 p-10 border-black border-4 rounded-2xl shadow-2xl transition ease-linear delay-300 hover:scale-110 ${Pokemons[15].shadow} ${Pokemons[15].bg}`}
        >
          <img src={Pokemons[15].imageUrl} alt={Pokemons[2].name} />
        </div>
        <h4 className="mt-4 font-medium">Pick a number between 1 and 10</h4>
        <input
          className="px-3 py-2 w-64 rounded-sm focus:outline-gray-900 bg-gray-100 border-2 border-zinc-500"
          type="number"
          min={0}
          onChange={(e) => setGuess(e.currentTarget.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-black w-64 p-2 text-white rounded-sm hover:text-redFa"
        >
          Submit
        </button>
        <h4>
          {parseInt(magicNumber) === parseInt(guess) ? "Success" : "Fails"}
        </h4>
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
    </div>
  );
}

export default App;
