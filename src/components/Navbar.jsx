export const Navbar = ({ startGame }) => {
  return (
    <div className="flex w-full bg-black p-4 justify-between">
      <h2 className="text-3xl text-white">Catch 'em all</h2>
      <div className="flex gap-x-4">
        <button onClick={() => startGame()} className="bg-white">
          Catch Pokemon
        </button>
        <button className="bg-white">View Pokemon</button>
      </div>
    </div>
  );
};
