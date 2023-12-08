import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainerContext from "../contexts/TrainerContext";
import { createPokemons } from "../services/PokemonService";

const CreateNewPokemon = () => {

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [level, setLevel] = useState(1);
    const [gender, setGender] = useState("");
    const [isShiny, setIsShiny] = useState("");
    const [size, setSize] = useState(0);
    const [weight, setWeight] = useState(0);

    const navigate = useNavigate();
    const { trainerData } = useContext(TrainerContext);

    async function handleCreate(e: { preventDefault: () => void}) {
        e.preventDefault();

        const result = await createPokemons(trainerData, {name, species, level, genderTypeCode:gender, isShiny: isShiny === "true" ? true : false, size, weight});
        if (result.codeStatus == 201) {
            navigate("/");
        } else {
            console.log("Error during creation of the pokemon");
        }
    }

    return (
        <>
        <form onSubmit={handleCreate} className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
              <input 
              type="text" 
              name="name" 
              id="name"
              value={name}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              onChange={(e) => setName(e.target.value)} 
              required 
              />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input 
              type="text" 
              name="species" 
              id="species"
              value={species}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              onChange={(e) => setSpecies(e.target.value)}
              required />
              <label htmlFor="species" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Species</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input 
              type="number" 
              name="level" 
              id="level" 
              value={level}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              onChange={(e) => setLevel(parseInt(e.target.value))}
              required />
              <label htmlFor="level" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Level</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input 
                            id="select-male" 
                            type="checkbox" 
                            value="MALE"
                            onChange={(e) => setGender(e.target.value)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="select-male" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">MALE</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input 
                            id="select-female" 
                            type="checkbox"
                            value="FEMALE"
                            onChange={(e) => setGender(e.target.value)} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="select-female" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">FEMALE</label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input 
                            id="no-gender" 
                            type="checkbox" 
                            value="NOT_DEFINED"
                            onChange={(e) => setGender(e.target.value)} 
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="no-gender" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NOT_DEFINED</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="isShiny" 
                id="isShiny" 
                value={isShiny}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setIsShiny(e.target.value)}
                required />
                <label htmlFor="isShiny" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shiny (True or False)</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                type="number" 
                name="size" 
                id="size"
                value={size}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setSize(parseInt(e.target.value))}
                required />
                <label htmlFor="size" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                type="number" 
                name="weight" 
                id="weight"
                value={weight} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                required />
                <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight</label>
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        </>
    )
}

export default CreateNewPokemon