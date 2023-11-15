import { useContext } from "react";
import Auth from "../contexts/AuthProvider";
import { Route,  } from "react-router-dom";

const AuthenticatedRoute = () => {
    const { isAuthenticated } = useContext(Auth);
}

export default AuthenticatedRoute