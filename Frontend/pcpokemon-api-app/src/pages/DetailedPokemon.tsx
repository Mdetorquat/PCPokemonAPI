import { useContext, useEffect, useState } from "react"
import TrainerContext from "../contexts/TrainerContext";
import { NavLink, useParams } from "react-router-dom";
import { getPokemonById } from "../services/PokemonService";

export const DetailedPokemon = () => {

    const [ pokemonName, setPokemonName] = useState("");
    const [ pokemonSpecies, setPokemonSpecies ] = useState("");
    const [ pokemonLevel, setPokemonLevel ] = useState(1);
    const [ pokemonGender, setPokemonGender ] = useState("");
    const [ pokemonShiny, setPokemonShiny ] = useState(false);
    const [ pokemonWeight, setPokemonWeight ] = useState(0);
    const [ pokemonSize, setPokemonSize ] = useState(0);
    const { trainerData } = useContext(TrainerContext);

    const options = useParams();

    useEffect(() => {
        const getPokemon = async () => {
            const data = await getPokemonById(trainerData, options.pokemonId)

            if (data.codeStatus === 200 ) {
                const pokemonName = data.pokemon.name;
                const pokemonSpecies = data.pokemon.species;
                const pokemonGender = data.pokemon.genderTypeCode;
                const pokemonLevel = data.pokemon.level;
                const pokemonShiny = data.pokemon.isShiny;
                const pokemonWeight = data.pokemon.weight;
                const pokemonSize = data.pokemon.size;

                setPokemonName(pokemonName);
                setPokemonGender(pokemonGender);
                setPokemonLevel(pokemonLevel);
                setPokemonSpecies(pokemonSpecies);
                setPokemonShiny(pokemonShiny);
                setPokemonWeight(pokemonWeight);
                setPokemonSize(pokemonSize);
            }
        };
        getPokemon();
    },[])

    const handleEditPokemon = () => {

    }

    const handleDeletePokemon = () => {

    }

    return (
        <>

        <ul role="list" className="flex items-center divide-y divide-gray-100 grid grid-cols-3 gap-4 content-center">
            <div id="select-modal" className="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {pokemonName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    Species: {pokemonSpecies}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    Gender: {pokemonGender}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    Level: {pokemonLevel}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    Shiny: {pokemonShiny ? "yes" : "no"}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    Size: {pokemonSize}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                    Weight: {pokemonWeight}
                    </span>
                </div>
            </div>        
        </ul>
        </>
    )
}

export default DetailedPokemon