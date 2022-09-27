import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { CatchPokemon } from "./components/CatchPokemon/CatchPokemon";

function App() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const [state, setState] = useState({
    guess: 0,
    magicNumber: 0,
    tries: 3,
    currentPokemon: 0,
  });

  const startGame = () => {
    const currentPokemon = parseInt(getRandomIntInclusive(0, 15));
    const magicNumber = parseInt(getRandomIntInclusive(1, 10));
    setState({ ...state, currentPokemon, magicNumber });
  };

  return (
    <div className="bg-tile">
      <div className="flex w-full bg-black p-4 justify-between">
        <h2 className="text-3xl text-white">Catch 'em all</h2>
        <div className="flex gap-x-4">
          <button onClick={() => startGame()} className="bg-white">
            Catch Pokemon
          </button>
          <button className="bg-white">View Pokemon</button>
        </div>
      </div>
      <CatchPokemon state={state} setState={setState} />
    </div>
  );
}

export default App;
