import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar";
import Footer from "./Footer";
import React from "react";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}