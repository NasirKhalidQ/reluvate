import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Home = ({ startGame }) => {
  return (
    <div className="bg-tile">
      <Navbar startGame={startGame} />
      <Outlet />
      {/* <div className="flex">
        <h1>Welcome to the Rabbit hole </h1>
        <h1 className=" animate-spin">🐇</h1>
      </div> */}
    </div>
  );
};
