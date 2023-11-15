import {useState, FC, useContext, useEffect, useRef} from "react"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthProvider'


const RegisterForm = () => {

  const firstNameField = useRef<HTMLInputElement>(null);
  const lastNameField = useRef<HTMLInputElement>(null);
  const loginField = useRef<HTMLInputElement>(null);
  const birthDateField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);

  const { user } = useContext(AuthContext)
  const navigate = useNavigate();

  const base_api_url = import.meta.env.VITE_APP_BASE_API;

  useEffect(() => {
    if (user.token || localStorage.getItem('token')) {
      localStorage.setItem('token', JSON.stringify(user.token));
      localStorage.setItem('firstName', JSON.stringify(user.firstName));
      localStorage.setItem('lastName', JSON.stringify(user.lastName));
      localStorage.setItem('login', JSON.stringify(user.login));
      localStorage.setItem('birthDate', JSON.stringify(user.birthDate));
      localStorage.setItem('password', JSON.stringify(user.password));
      navigate('/');
    }
  }, [user])

  async function handleRegisterForm(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch(`${base_api_url}/register-user`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        firstName: firstNameField.current?.value,
        lastName: lastNameField.current?.value,
        login: loginField.current?.value,
        birthDate: birthDateField.current?.value,
        password: passwordField.current?.value,
      })
    })

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      navigate('/')
    }
  }

    return (
      <>
      {" "}

      <form onSubmit={handleRegisterForm} className="h-[100vh] flex justify-center items-center w-auto">

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
                  ref={firstNameField}
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
                  ref={lastNameField}
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
                  ref={loginField}
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
                  ref={birthDateField}
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
                  ref={passwordField}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Annuler
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          S'inscrire
        </button>
        <p>Déjà inscrit <Link to="/login" className="text-[#6f6f6f]">se connecter?</Link></p>
      </div>
        </div>
      </div>
      </form>
      </>
    )
}

export default RegisterForm