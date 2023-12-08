import {useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services/LoginService";
import { TrainerType } from "../entity/Trainer";
import TrainerContext from "../contexts/TrainerContext";

export default function LoginForm() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [ error, setError ] = useState(false);

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

    const handleLogin = async (e: {preventDefault: () => void}) => {
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
      } else {
        setError(true);
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
          {
            error && (
              <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div className="ms-3 text-sm font-medium">
                  Wrong Login or Password !!!
                </div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
                  <span className="sr-only">Dismiss</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                </button>
            </div>
            )
          }
        </form>
    </>
    )
}