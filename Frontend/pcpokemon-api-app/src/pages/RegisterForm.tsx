import { useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { SubscribeService } from "../services/SubscribeService";

const RegisterForm = () => {

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e: {preventDefault: () => void}) {
      
    e.preventDefault();

    const result = await SubscribeService(
      firstName,
      lastName,
      login,
      birthDate,
      password
    );

    if (result.codeStatus == 201) {
      navigate("/");
    } 
    
  };

    return (
        <>
          <form onSubmit={handleSubmit} className="h-[100vh] flex justify-center items-center w-auto">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Veuillez vous créer un compte
                </p>
              </div>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                      Prénom
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        onChange={(e) => setFirstname(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                      Nom
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="login" className="block text-sm font-medium leading-6 text-gray-900">
                      Nom d'utilisateur
                    </label>
                    <div className="mt-2">
                      <input
                        id="login"
                        name="login"
                        type="email"
                        required
                        onChange={(e) => setLogin(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="birthDate" className="block text-sm font-medium leading-6 text-gray-900">
                      Date de naissance
                    </label>
                    <div className="mt-2">
                      <input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        required
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    S'inscrire
                  </button>
                  
                  <p>Déjà inscrit ? <Link to="/login" className="text-[#6f6f6f]">se connecter</Link></p>
                </div>
              </div>
            </div>
          </form>
        </>
    )
}

export default RegisterForm