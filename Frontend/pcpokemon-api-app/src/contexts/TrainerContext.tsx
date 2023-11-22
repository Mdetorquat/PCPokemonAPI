import { ReactNode, createContext, useState } from "react";
import { TrainerType } from "../entity/Trainer";

const defaultTrainerData: TrainerType = {
    accessToken: "",
    trainerId: 0
}

const TrainerContext = createContext<{
    trainerData: TrainerType;
    setTrainerData: (data: TrainerType) => void;
}>({
    trainerData: defaultTrainerData,
    setTrainerData: () => undefined
});

export const TrainerContextProvider = ({ children }: { children: ReactNode }) => {
    const [trainerData, setTrainerData] = useState(defaultTrainerData);
    return (
        <TrainerContext.Provider value={{trainerData, setTrainerData}}>
            {children}
        </TrainerContext.Provider>
    )
}

export default TrainerContext