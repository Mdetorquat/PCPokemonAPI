import {useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services/LoginService";
import { TrainerType } from "../entity/Trainer";
import TrainerContext from "../contexts/TrainerContext";

const LoginForm = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { setTrainerData } = useContext(TrainerContext);
  
    useEffect(() => {
      const storedLoginData = localStorage.getItem("loginData");
      if (storedLoginData) {
        const parseData: TrainerType = JSON.parse(storedLoginData);
        setTrainerData(parseData);
        navigate("/");
      }
    })

    const handleLogin = async (e: any) => {
      e.preventDefault();

      const result = await LoginService(
        login,
        password
      );

      if (result.codeStatus == 200) {
        const data: TrainerType = {
          accessToken: result.accessToken || "",
          trainerId: result.trainerId || 0
        };
        localStorage.setItem("loginData", JSON.stringify(data));
        setTrainerData(data);
        navigate("/");
      }
    }

    return (
      <>
              <form onSubmit={handleLogin} className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
              <input 
              type="email" 
              name="login" 
              id="login" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              onChange={(e) => setLogin(e.target.value)} 
              required 
              />
              <label htmlFor="login" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Login</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input 
              type="password" 
              name="password" 
              id="password" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              onChange={(e) => setPassword(e.target.value)}
              required />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </>
    )
}

export default LoginForm