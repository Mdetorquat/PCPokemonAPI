import { TrainerType } from "../entity/Trainer";
import { CreatePokemon, Pokemon } from "../entity/Pokemon";
import { PokemonState } from "../interfaces/Interfaces";

export const getPokemons = async (
    trainerData: TrainerType,
    boxeId: string | undefined
) => {
    const url = `http://localhost:8000/trainers/${trainerData.trainerId}/boxes/${boxeId}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        },
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();

        return { codeStatus: 200, pokemons: data.pokemons }
    } catch (error) {
        console.error("Error in getPokemons:", error);
        return { codeStatus: 400, pokemons: [] }
    }
}

export const getPokemonById = async (
    trainerData: TrainerType,
    pokemonId: string | undefined
) : Promise<PokemonState> => {
    const url = `http://localhost:8000/pokemons/${pokemonId}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
    };

    try {
        const result = await fetch(url, options);
        const data = (await result.json()) as Pokemon;

        return { codeStatus: 200, pokemon: data}
    } catch (error) {
        console.error("Error in getPokemonById:", error);
        return { codeStatus: 400, pokemon: {id: 0, species: "", name: "", level: 1, genderTypeCode: "", size: 0, weight: 0, isShiny: false}};
    }
}


export const createPokemons = async (
    trainerData: TrainerType,
    pokemon: CreatePokemon
) => {
    const url = `http://localhost:8000/pokemons`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
        body: JSON.stringify(pokemon)
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.log(data);
        return { codeStatus: 201, id: data.id };
    } catch (error) {
        console.error("Your request doesn't have the fields expected");
        return  { codeStatus: 400 }
    }
}