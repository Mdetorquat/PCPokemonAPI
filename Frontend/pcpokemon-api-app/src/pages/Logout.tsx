import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setUser({
      loggedIn: false,
      firstName: "",
      lastName: "",
      login: "",
      birthDate:"",
      password:"",
      token: "",
    });

    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("login");
    localStorage.removeItem("birthDate");
    localStorage.removeItem("password");
    navigate("/subscribe");
  }, []); 

  return <div>Logging out...</div>;
}