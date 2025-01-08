// import Image from 'next/image'
import React from 'react'
import { Smile, FileText, Headphones, Users2, Home } from 'lucide-react'
import HomeImage from '../Home/assets/Home.jpg'

export default function StatsSection() {
  return (
    <section className="relative w-full  px-4 py-20 lg:px-8 mx-auto xl:container">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Image Column */}
        <div className="relative h-[400px] w-full">
          {/* <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Business professionals collaborating"
            fill
            className="rounded-lg object-cover"
          /> */}
          <img src={HomeImage} className='w-full h-full' alt="" />
        </div>

        {/* Content Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Our Esteemed Clients
            </h2>
            <p className="text-muted-foreground">
              Building lasting realtionships with thise who trust Sai Wood Treats for exceptional quality and craftsmanship 
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Happy Clients */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Smile className="h-6 w-6 text-amber-500" />
                <span className="text-3xl font-bold">232</span>
              </div>
              <div>
                <h3 className="font-semibold">Happy Clients</h3>
                <p className="text-sm text-muted-foreground">consequuntur quae</p>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-amber-500" />
                <span className="text-3xl font-bold">521</span>
              </div>
              <div>
                <h3 className="font-semibold">Projects</h3>
                <p className="text-sm text-muted-foreground">adipisci atque cum quia aut</p>
              </div>
            </div>
            {/* Hours of Support */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Headphones className="h-6 w-6 text-amber-500" />
                <span className="text-3xl font-bold">1453</span>
              </div>
              <div>
                <h3 className="font-semibold">Hours Of Support</h3>
                <p className="text-sm text-muted-foreground">aut commodi quaerat</p>
              </div>
            </div>

            {/* Hard Workers */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users2 className="h-6 w-6 text-amber-500" />
                <span className="text-3xl font-bold">32</span>
              </div>
              <div>
                <h3 className="font-semibold">Hard Workers</h3>
                <p className="text-sm text-muted-foreground">rerum asperiores dolor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

