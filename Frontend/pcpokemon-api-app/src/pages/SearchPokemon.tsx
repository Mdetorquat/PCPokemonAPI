import { useEffect, useState } from "react"
//import { useHistory } from "react-router-dom"
import { searchPokemon } from "../services/SearchPokemonService";
import { Link } from "react-router-dom";
import { Pokemon } from "../entity/Pokemon";

export const SearchPokemons = () => {

    const [ filters, setFilters ] = useState({
        species: '',
        name: '',
        minLevel: '',
        maxLevel: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        isShiny: false
    });

    const [ pokemonList, setPokemonList ] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const [ error, setError ] = useState("");
    //const history = useHistory();

    useEffect(() => {
        const pokemonsFetch = async () => {
            const data = await searchPokemon(filters, currentPage);
            //setPokemonList(data.pokemons);            
        }
        pokemonsFetch();
    }, [filters, currentPage]);

    async function handleFilterChange(e: { target: { name: any; value: any; }; }) {
        const {name, value} = e.target;
        setFilters((prevFilters) => ({...prevFilters, [name]: value }));
        setCurrentPage(1);
    };

    async function handleNextPage() {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    async function handlePrevPage() {
        setCurrentPage((prevPage) => prevPage - 1);
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Specie
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Level
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Height
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Weight
                        </th>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="isShiny" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="isShiny" className="sr-only">Shiny</label>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    </tr>
                </tbody>
            </table>
            <ul>
                {
                    pokemonList.map((pokemon: Pokemon) => (
                        <li key={pokemon.id}>
                            <Link to={`/pokemons/${pokemon.id}`}>{pokemon.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handlePrevPage}>Previous Page</button>
            <button onClick={handleNextPage}>Next Page</button>
        </div>
    )
    
}