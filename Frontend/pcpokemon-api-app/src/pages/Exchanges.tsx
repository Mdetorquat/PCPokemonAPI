import { useContext, useState } from "react";
import TrainerContext from "../contexts/TrainerContext";
import { Boxe } from "../entity/Boxe";

const Exchanges = () => {

    const { trainerData } = useContext(TrainerContext);
    const [ exchanges, setExchanges ] = useState<Boxe[]>([]);
}