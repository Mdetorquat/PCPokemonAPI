import { useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { SubscribeService } from "../services/SubscribeService";
import React from "react";

const RegisterForm = () => {

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError ] = useState(false);

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
    }  else {
      setError(true);
    }
    
  };

    return (
        <>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
          <div className="relative z-0 w-full mb-5 group">
              <input 
              type="date" 
              name="birthDate" 
              id="birthDate" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              onChange={(e) => setBirthDate(e.target.value)}
              required />
              <label htmlFor="birthDate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthdate</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                onChange={(e) => setFirstname(e.target.value)}
                required />
                <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Firstname</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setLastName(e.target.value)}
                required />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lastname</label>
            </div>
          </div>
          <button name="Submit" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          <p>Déjà inscrit ? <Link to="/login" className="text-[#6f6f6f]">se connecter</Link></p>
          {
            error && (
              <div id="alert-border-2" className="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div className="ms-3 text-sm font-medium">
                  This login is already used. Please retry with another Login.
                </div>
                
            </div>
            )
          }
        </form>
        </>
    )
}

export default RegisterForm