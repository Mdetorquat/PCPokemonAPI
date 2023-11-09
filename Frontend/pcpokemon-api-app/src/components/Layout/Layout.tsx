import {FC} from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../NavBar";
import Search from "../Search";


const LayoutPage: FC = () => {
  return (
    <>
      <NavBar />
      <Search />
      <Outlet />
    </>
  );
}

export default LayoutPage;