import React from "react"

export default function About () {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <h2>A propos du développeur :</h2>
                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        Nom : Maxence de Torquat
                    </li>
                </ul>
            </div>
        </div>
    )
}