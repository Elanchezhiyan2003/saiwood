'use client'

import { useState, useEffect } from 'react'
// import Image from 'next/image'
import { Star } from 'lucide-react'
import HomeImage from '../Home/assets/Home.jpg'



interface Testimonial {
    id: number
    name: string
    role: string
    quote: string
    image: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jena Karlis",
        role: "Store Owner",
        quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        image: HomeImage
    },
    {
        id: 2,
        name: "Karlis",
        role: "Store Owner",
        quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        image: HomeImage
    },
    {
        id: 3,
        name: "Dinesh",
        role: "Store Owner",
        quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
        image: HomeImage
    },
    // Add more testimonials as needed
]

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)

    // Automatically cycle through testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval) // Cleanup interval on unmount
    }, [])

    return (
        <section className="relative h-[400px] w-full overflow-hidden py-2 ">
            {/* Background Image */}
            {/* <Image
        src="/placeholder.svg?height=600&width=1920"
        alt="Modern building background"
        fill
        className="object-cover brightness-[0.3]"
        priority
      /> */}
            <img src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border-4 border-gray-600 bg-white">
                        {/* <Image
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            /> */}
                    <img src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    />
                    </div>

                    <h3 className="mb-1 text-2xl font-semibold text-white">
                        {testimonials[activeIndex].name}
                    </h3>
                    <p className="mb-6 text-gray-400">{testimonials[activeIndex].role}</p>

                    {/* Star Rating */}
                    <div className="mb-6 flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-5 w-5 fill-amber-400 text-amber-400"
                            />
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mx-auto max-w-3xl">
                        <p className="text-lg italic text-white">
                            {testimonials[activeIndex].quote}
                        </p>
                    </blockquote>

                    {/* Navigation Dots */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-3 w-3 rounded-full transition-all ${index === activeIndex
                                        ? 'bg-white'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
