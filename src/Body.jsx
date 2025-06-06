import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Body() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Body;
