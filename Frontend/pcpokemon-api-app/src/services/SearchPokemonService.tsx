import { SearchPokemon } from "../entity/Pokemon";
import { TrainerType } from "../entity/Trainer";

export const searchPokemon = async (
    _filters: { species: string; name: string; minLevel: string; maxLevel: string; minHeight: string; maxHeight: string; minWeight: string; maxWeight: string; isShiny: boolean; },
    _page: number
) => {
    const url = `http://localhost:8000/pokemons`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        },
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();

        return { codeStatus: 200, id: data.id }
    } catch (error) {
        return { codeStatus: 400 }
    }
}