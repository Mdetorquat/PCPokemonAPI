import {FC} from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../NavBar";
import Search from "../Search";
import Footer from "../Footer";


const LayoutPage: FC = () => {
  return (
    <>
      <NavBar />
      <Search />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutPage;