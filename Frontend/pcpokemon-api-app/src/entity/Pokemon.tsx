export type Pokemon = {
    id: number;
    species: string,
    name: string,
    level: number,
    genderTypeCode: string,
    size: number,
    weight: number,
    isShiny: boolean,
}

export type CreatePokemon = {
    species: string;
    name: string;
    level: number;
    genderTypeCode: string;
    size: number;
    weight: number;
    isShiny: boolean;
  };

  export type SearchPokemon = {
    filters: {
        species: string,
        name: string,
        minLevel: number,
        maxLevel: number,
        minHeight: number,
        maxHeight: number,
        minWeight: number,
        maxWeight: number,
        isShiny: boolean
    }
  }
  