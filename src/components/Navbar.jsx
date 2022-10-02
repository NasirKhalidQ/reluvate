import { NavLink } from "react-router-dom";

export const Navbar = ({ startGame }) => {
  const Button = ({ handleClick, children }) => {
    return (
      <button
        onClick={handleClick}
        className="bg-black border-redFa border-2 p-2 text-white font-medium rounded-sm hover:text-redFa transition-all ease-in-out duration-300"
      >
        {children}
      </button>
    );
  };
  return (
    <nav className="flex w-full bg-black p-4 justify-between gap-y-6 pl-12 sm:pl-4 flex-col sm:flex-row">
      <h2 className="text-3xl text-white">Catch 'em all</h2>
      <div className="flex gap-x-4">
        <NavLink to="/catch-pokemon">
          <Button handleClick={() => startGame()}>Catch Pokemon</Button>
        </NavLink>
        <NavLink to="/view-pokemons">
          <Button> View Pokemon</Button>
        </NavLink>
      </div>
    </nav>
  );
};
