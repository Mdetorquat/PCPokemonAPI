import { useContext } from "react"
import TrainerContext from "../contexts/TrainerContext"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    const { trainerData } = useContext(TrainerContext);

    if (!trainerData.accessToken || !trainerData.trainerId || trainerData.trainerId === 0 || trainerData.accessToken === "") {
        return <Navigate to="/login" replace/>
    }

    return <Outlet />
}

export default ProtectedRoute