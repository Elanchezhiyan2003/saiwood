import React from 'react'
import Dinesh from '../assets/dinesh.jpg'
import Hema from '../assets/Hema.jpg'
import Bharani from '../assets/Bharani.jpg'
import Maha from '../assets/maha.jpg'

const Team = () => {
    const TeamData = [
        {
            title: 'Arul P',
            description: 'Proprietor | SAI WOOD TREATS',
            icon: Dinesh,
        },
        // {
        //     title: 'Team 2',
        //     description: 'Description for Team 2',
        //     icon: Hema,
        // },
        // {
        //     title: 'Team 3',
        //     description: 'Description for Team 3',
        //     icon: Bharani,
        // },
        // {
        //     title: 'Team 4',
        //     description: 'Description for Team 4',
        //     icon: Maha,
        // }
    ]
    return (
        <div className="flex flex-col items-center py-20 bg-gray-50 mx-auto xl:container">
            {/* Section Header */}
            <div className="mb-14 ">
                {/* <h2 className="text-lg font-medium text-gray-500 tracking-wide">Team <span className="text-gray-300">--------</span></h2> */}
                <h1 className="text-4xl font-bold text-gray-800 mt-2">OUR FOUNDER</h1>
            </div>

            {/* Team Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {TeamData.map((Data, index) => (
                    <div
                        key={index}
                        className="max-w-sm "
                    >
                        {/* Image */}
                        <div className="">
                            <img
                                src={Data.icon}
                                alt={Data.title}
                                className="object-cover rounded-full h-80 w-80"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-xl font-semibold text-gray-800 text-center m-4">
                            {Data.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-center">
                            {Data.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team
