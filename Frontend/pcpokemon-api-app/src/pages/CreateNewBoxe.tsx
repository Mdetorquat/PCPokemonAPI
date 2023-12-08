import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import TrainerContext from "../contexts/TrainerContext";
import { createBoxe } from "../services/BoxeService";
import React from "react";

export default function CreateNewBoxe () {

    const navigate = useNavigate();
    const [newBoxe, setNewBoxe] = useState("");
    const { trainerData } = useContext(TrainerContext);

    async function handleCreate(e: { preventDefault: () => void}) {
        e.preventDefault();
        const result = await createBoxe(trainerData, newBoxe);

        if (result.codeStatus == 201) {
            navigate("/");
        } else {
            console.error("Error during creation of the boxe")
        }

    }

    return (
        <form className="max-w-sm mx-auto" onSubmit={handleCreate}>
            <div className="mb-5">
                <label htmlFor="box" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create box</label>
                <input 
                value={newBoxe} 
                name="box" 
                type="box" 
                id="box" 
                onChange={(e) => setNewBoxe(e.target.value)} 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                required 
                />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create my boxe</button>
        </form>
    )
}