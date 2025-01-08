import { Activity, Radio, PresentationIcon as PresentationScreen } from 'lucide-react'
import { Button } from '../components/ui/button'
import celling from '../contentsection/assets/celling.jpg'
import cutting from '../contentsection/assets/cutting.jpg'
import kitchen from '../contentsection/assets/kitchen.jpg'
import painting from '../contentsection/assets/painting.jpg'
import plywood from '../contentsection/assets/plywood.jpg'  
import wood from '../contentsection/assets/Wood.jpg'
import Interior from '../contentsection/assets/interiors.jpg'

export default function ServicesSection() {
    const services = [
        {
            icon: kitchen,
            title: "Kitchen Works",
            description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
        },
        {
            icon: celling,
            title: "Celling Works",
            description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
        },
        {
            icon: wood,
            title: "Wood Works",
            description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
        },
        {
            icon: plywood,
            title: "Plywood Works",
            description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti."
        },
        {
            icon: Interior,
            title: "Interior Works",
            description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem."
        },
        {
            icon: painting,
            title: "Painting Works",
            description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
        },
    ]

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                        SERVICES
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        CHECK OUR SERVICES
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className=" border rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-center  inline-block   rounded-lg">
                                {/* <service.icon className="w-6 h-6 text-amber-500" /> */}
                                <img src={service.icon} alt=""className='object-cover  h-[18rem] w-[50rem] ' />
                            </div>
                            <h3 className=" p-2 text-xl font-semibold">
                                {service.title}
                            </h3>
                            {/* <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p> */}
                        </div>
                    ))}
                </div>
                <Button className='flex flex-col items-center  mt-4 mx-auto xl:container"'>View more {'>'}</Button>
            </div>
        </section>
    )
}

