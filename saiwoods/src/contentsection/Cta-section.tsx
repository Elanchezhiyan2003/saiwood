// import Image from 'next/image'
// import Link from 'next/link'
import React from "react"
import HomeImage from '../Home/assets/Home.jpg'
import { Button } from "../components/ui/button"

export default function CTASection() {
  return (
    <section className="relative h-[400px] w-full my-24  overflow-hidden ">
      {/* Background Image */}
      {/* <Image
        src="/placeholder.svg?height=600&width=1920"
        alt="City buildings background"
        width={1920}
        height={600}
        className="object-cover object-center brightness-50"
        priority
      /> */}
      <img src={HomeImage} alt="" className="w-full h-96 object-cover" />
      
      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-teal-900/30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="container mx-auto px-4 text-center  p-8 relative  ">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Call To Action
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* <Link
            href="#"
            className="inline-block rounded-md border-2 border-white px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-white hover:text-teal-900"
          >
            Call To Action
          </Link> */}
          <Button className="bg-opacity-10">Call To Action</Button>
        </div>
      </div>
    </section>
  )
}

