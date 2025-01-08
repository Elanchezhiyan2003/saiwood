// import Image from "next/image"
import React from 'react'
import { Box, ShoppingCart, Radio, Video } from 'lucide-react'
import HomeImage from '../Home/assets/Home.jpg'

const features = [
  {
    icon: Box,
    title: "Est labore ad",
    description: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
  },
  {
    icon: ShoppingCart,
    title: "Harum esse qui",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
  },
  {
    icon: Radio,
    title: "Aut occaecati",
    description: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
  },
  {
    icon: Video,
    title: "Beatae veritatis",
    description: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta"
  }
]

export default function FeaturesSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          {/* <Img
            src="/placeholder.svg"
            alt="Workspace"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          /> */}
          <img src={HomeImage} className='' alt="" bg-red-400 />
        </div>
        <div className="lg:w-1/2 lg:pl-16   ">
          {features.map((feature, index) => (
            <div key={index} className="flex mb-8 ">
              <div className="mr-4 ">
                <div className="bg-orange-100 rounded-lg p-3 mt-4">
                  <feature.icon className="w-6 h-6 text-orange-500 " />
                </div>
              </div>
              <div className=''>
                <h3 className="text-xl font-semibold  mt-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

