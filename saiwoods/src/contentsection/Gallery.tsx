import React from 'react'
import HomeIMage from '../Home/assets/Home.jpg'
import { Button } from '../components/ui/button'

const Gallery = () => {
    const Image = [
        {
            "icon": HomeIMage,
        },
        {
            "icon": HomeIMage,
        },
        {
            "icon": HomeIMage,
        },
        {
            "icon": HomeIMage,
        },
    ]
  return (
    <div>
        <div className='text-center p-10'>
            <h2 className='text-3xl font-bold'>SAI WOOD TREAT</h2>
            <h1>EXPLORE OUR GALLERY</h1>
        </div>
        <div>
        <div className="flex flex-wrap justify-center gap-8">
                {Image.map((Data, index) => (
                    <div
                        key={index}
                        className="max-w-sm border border-gray-200   bg-white"
                    >
                        {/* Image */}
                        <div className="">
                            <img
                                src={Data.icon}
                                // alt={Data.title}
                                className="h-64 w-80  "
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Button className='flex mx-auto content-center my-10'>View More</Button>
        </div>
    </div>
  )
}

export default Gallery