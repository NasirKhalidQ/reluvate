export const Navbar = ({ startGame }) => {
  const Button = ({ onClick, children }) => {
    return (
      <button
        onClick={onClick}
        className="bg-black border-redFa border-2 p-2 text-white font-medium rounded-sm hover:text-redFa transition-all ease-in-out duration-300"
      >
        {children}
      </button>
    );
  };
  return (
    <div className="flex w-full bg-black p-4 justify-between">
      <h2 className="text-3xl text-white">Catch 'em all</h2>
      <div className="flex gap-x-4">
        <Button onClick={() => startGame()}>Catch Pokemon</Button>
        <Button onClick={() => startGame()}> View Pokemon</Button>
      </div>
    </div>
  );
};
