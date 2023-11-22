import { useContext } from "react";
import TrainerContext from "../contexts/TrainerContext";

export default function Authentication() {
    const { trainerData } = useContext(TrainerContext);

    if (!trainerData.trainerId || !trainerData.accessToken || trainerData.accessToken === "" || trainerData.trainerId === 0) {
        return false;
    } else {
        return true;
    }
}