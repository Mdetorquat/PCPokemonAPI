import { useContext, useEffect, useState } from "react";
import TrainerContext from "../contexts/TrainerContext";
import { Boxe } from "../entity/Boxe";
import { NavLink } from "react-router-dom";
import { getBoxes } from "../services/BoxeService";
import React from "react";

export default function Boxes() {

    const { trainerData } = useContext(TrainerContext);
    const [boxes, setBoxes] = useState<Boxe[]>([]);

    useEffect(() => {
        const boxesFetch = async () => {
          try {
            const data = await getBoxes(trainerData);

            if (data && data.codeStatus === 200 && Array.isArray(data.boxes)) {
                const boxes = data.boxes as Boxe[];
                setBoxes(boxes);
            } else {
              console.error("Invalid response format:", data);
            }
          } catch (error) {
            console.error("Error fetching boxes:", error);
          }
        };
        boxesFetch();
    }, [trainerData])
    
    
    return (
        <>
          <div id="select-modal" className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3>Create my new boxe now</h3>                   
            <div className="p-4 md:p-5">
              <NavLink to={"/new-box"}>
                <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Create a boxe
                </button>
              </NavLink>
            </div>
          </div>
              
          <div className="flex items-center justify-between">         
            <ul
              className="divide-y divide-gray-100 grid grid-cols-3 gap-4 content-center"
            >
              { boxes.map((boxe) => (
                <div key={boxe.id} id="select-modal" className="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <NavLink to={`/boxes/${boxe.id}`}>
                    <div className="flex flex-col items-center pb-10">
                      <h5 className="mb-1 text-xl font-medium text-blue-900">{boxe.name}</h5>
                      <span className="text-sm text-blue-900 dark:text-gray-400">
                        Boxe
                      </span>
                    </div>
                  </NavLink>
                </div>
              ))}
            </ul>
          </div>
        </>
    )
}