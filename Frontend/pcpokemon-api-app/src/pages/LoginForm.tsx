import {useContext, useState} from "react"
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services/LoginService";
import { TrainerType } from "../entity/Trainer";
import TrainerContext from "../contexts/TrainerContext";

const LoginForm = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { setTrainerData } = useContext(TrainerContext);
  
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
        setTrainerData(data);
        navigate("/");
      }
    }

    return (
      <>
        <form onSubmit={handleLogin} className="h-[100vh] flex justify-center items-center w-auto">     
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <p className="mt-1 text-sm leading-6 text-gray-600">
                Veuillez vous connecter
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="login" className="block text-sm font-medium leading-6 text-gray-900">
                    Nom d'utilisateur
                  </label>
                  <div className="mt-2">
                    <input
                    type="email"
                    name="login"
                    id="login"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setLogin(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Mot de passe
                  </label>
                  <div className="mt-2">
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="mt-2">
                    <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className=""
                    />
                    <label htmlFor="remember" className="block text-sm font-medium leading-6 text-gray-900">
                      Se souvenir de moi
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit" 
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Se connecter
            </button>
          </div>
        </form>
    </>
    )
}

export default LoginForm