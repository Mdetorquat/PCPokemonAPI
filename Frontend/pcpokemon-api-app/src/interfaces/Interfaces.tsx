import { Boxe } from "../entity/Boxe";
import { Pokemon } from "../entity/Pokemon";


export interface BoxesState {
    codeStatus: number;
    boxes?:Boxe[];
}

export interface BoxeState {
    codeStatus: number;
    boxe: Boxe;
}

export interface PokemonState {
    codeStatus: number;
    pokemon: Pokemon;
}

export interface LoginState {
    accessToken?: string;
    trainerId?: number;
    message?: string;
    codeStatus?: number;
}

export interface SubscribeState {
    accessToken?: string;
    trainerId?: number;
    message?: string;
    codeStatus?: number;
}
