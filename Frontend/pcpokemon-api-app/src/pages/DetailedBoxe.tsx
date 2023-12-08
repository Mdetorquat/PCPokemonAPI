import { useContext, useEffect, useState } from "react"
import TrainerContext from "../contexts/TrainerContext";
import { Pokemon } from "../entity/Pokemon";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteBoxe, getBoxeById } from "../services/BoxeService";
import { MdDelete } from "react-icons/md";

export default function DetailedBoxe() {

    const [ pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [ boxeName, setBoxeName ] = useState("");
    const { trainerData } = useContext(TrainerContext);
    const navigate = useNavigate();

    const options = useParams();

    useEffect(() => {
        const getBoxe = async () => {
            const data = await getBoxeById(trainerData, options.boxeId)

            if (data.codeStatus === 200 ) {
                const boxeName = data.boxe?.name;
                const pokemons = data.boxe?.pokemons as Pokemon[];

                setPokemons(pokemons);
                setBoxeName(boxeName);
            }
        };
        getBoxe();
    },[]);

    async function handleDelete(e: { preventDefault: () => void}) {
        e.preventDefault();

        const data = deleteBoxe(trainerData, options.pokemonId)
        console.log(data);
        if ((await data).codeStatus === 200) {
            navigate("/my-boxes")
        }
    }

    return (
        <>
        <div id="select-modal" className="inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-blue-900">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">{boxeName}</h1>
                    </div>
                    <div className="p-4 md:p-5">
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Create your pokemon now !!!</p>
                        <NavLink to={`/boxes/${options.boxeId}/new-pokemon`}>
                            <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Create a new Pokemon
                            </button>
                        </NavLink>
                        <NavLink to={`/my-boxes`}>
                            <button type="submit" onClick={handleDelete} className="text-white inline-flex w-full justify-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                <MdDelete className="mr-2"/>Supprimer la boîte
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

        <ul role="list" className="divide-y divide-gray-100 grid grid-cols-3 gap-4 content-center">
        { pokemons.map((pokemon) => (
            <div key={pokemon.id} id="select-modal" className="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <NavLink to={`/pokemons/${pokemon.id}`}>
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-blue-900">
                    {pokemon.name}
                    </h5>
                    <span className="text-sm text-blue-900">
                    Species: {pokemon.species}
                    </span>
                    <span className="text-sm text-blue-900">
                    Gender: {pokemon.genderTypeCode}
                    </span>
                    <span className="text-sm text-blue-900">
                    Level: {pokemon.level}
                    </span>
                    <span className="text-sm text-blue-900">
                    Shiny: {pokemon.isShiny ? "yes" : "no"}
                    </span>
                    <span className="text-sm text-blue-900">
                    Size: {pokemon.size}
                    </span>
                    <span className="text-sm text-blue-900">
                    Weight: {pokemon.weight}
                    </span>
                </div>
                </NavLink>
            </div>        
        ))}
        </ul>
        </>
    )
}