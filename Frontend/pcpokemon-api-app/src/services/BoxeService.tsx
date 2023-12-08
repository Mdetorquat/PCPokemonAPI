import { Boxe } from "../entity/Boxe";
import { TrainerType } from "../entity/Trainer"
import { BoxeState, BoxesState } from "../interfaces/Interfaces"


/*-------------------------------------------Get all Boxes------------------------------------------------------- */
export const getBoxes = async (
    trainerData: TrainerType
) : Promise<BoxesState> => {
    const url = `http://localhost:8000/trainers/${trainerData.trainerId}/boxes`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
    };

    try {
        const result = await fetch(url, options);
        const data = (await result.json()) as Boxe[];

        return { codeStatus: 200, boxes: data }
    } catch (error) {
        return { codeStatus:400, boxes: []}
    }
}


/*-------------------------------------------Create a Boxe------------------------------------------------------- */
export const createBoxe = async (
    trainerData: TrainerType,
    boxeName: string
) => {
    const url = `http://localhost:8000/trainers/${trainerData.trainerId}/boxes`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
        body: JSON.stringify({ name: boxeName})
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();

        return { codeStatus: 201, id: data.id }
    } catch (error) {
        return { codeStatus: 400, errorMessage: "Your request doesn't have the fields expected" }
    }
}


/*-------------------------------------------Get Boxe By ID------------------------------------------------------- */
export const getBoxeById = async (
    trainerData: TrainerType,
    boxeId: string | undefined
) : Promise<BoxeState> => {
    const url = `http://localhost:8000/trainers/${trainerData.trainerId}/boxes/${boxeId}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        },
    };

    try {
        const result = await fetch(url, options);
        const data = (await result.json()) as Boxe;

        return { codeStatus: 200, boxe: data}
    } catch (error) {
        return { codeStatus: 400, boxe: {id: 0, name: ""}};
    }
}

export const deleteBoxe = async (
    trainerData: TrainerType,
    boxeId: string | undefined
) : Promise<BoxeState>  => {
    const url = `http://localhost:8000/trainers/${trainerData.trainerId}/boxes/${boxeId}`;
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type' : "application/json",
            "Authorization" : `Bearer ${trainerData.accessToken}`
        }
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.error("The data of the boxe have been entirely removed");
        return { codeStatus: 200, boxe: data }
    } catch (error) {
        console.error("You are forbidden to perform this action");
        return { codeStatus: 403, boxe: {id: 0, name: "" }  };
    }
}