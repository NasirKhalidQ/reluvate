import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export const Home = ({ startGame }) => {
  return (
    <main className="bg-tile">
      <Navbar startGame={startGame} />
      <Outlet />
    </main>
  );
};
