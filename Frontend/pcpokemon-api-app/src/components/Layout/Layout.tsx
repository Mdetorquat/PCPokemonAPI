import {FC} from "react";
import {Outlet} from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";


const LayoutPage: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <h1>Home</h1>
      <Footer />
    </>
  );
}

export default LayoutPage;