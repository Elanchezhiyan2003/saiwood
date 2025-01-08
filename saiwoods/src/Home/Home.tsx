// import React from 'react'
// import HomeImage from '../Home/assets/Home.jpg'
// import HomeImage2 from '../Home/assets/Home.jpg'

// const Home = () => {
//     return (
//         <div className='h-screen mx-auto w-full  '>
//             <img src={HomeImage} alt="" className='w-full h-screen object-cover h-screen' />
//             <h1 className='text-5xl font-bold text-center text-slate-400 absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>Sai Wood Treats</h1>
//             <h2 className='text-2xl font-bold text-center text-slate-400 absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><span className='text-gray-100'>Transforming</span> Wood, Crafting Dreams</h2>
//             <div className='relative flex space-x-10 bottom-60   --translate-y-1/2 mx-auto xl:container'>
//                 <div className=' p-2 w-52 h-36 align-content-center '>
//                     <img src={HomeImage2} alt="" />
//                     <h2 className='relative bottom-10 text-center align-content-center text-white '>Lorem Ipsum</h2>
//                 </div>
//                 <div className='w-52 h-36 align-content-center  p-2'>
//                     <img src={HomeImage2} alt="" />
//                     <h2 className='relative bottom-10 text-center align-content-center text-white '>Lorem Ipsum</h2>
//                 </div>
//                 <div className='p-2  w-52 h-36 align-content-center '>
//                     <img src={HomeImage2} alt="" />
//                     <h2 className='relative bottom-10 text-center align-content-center text-white '>Lorem Ipsum</h2>
//                 </div>
//                 <div className='p-2 w-52 h-36  align-content-center'>
//                     <img src={HomeImage2}  alt="" />
//                     <h2 className='relative bottom-10 text-center align-content-center text-white '>Lorem Ipsum</h2>
//                 </div>
//                 <div className='  p-2 w-52 h-36  align-content-center'>
//                     <img src={HomeImage2} alt="" />
//                     <h2 className='relative bottom-10 text-center align-content-center text-white '>Lorem Ipsum</h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;
import React from 'react'
import HomeImage from '../Home/assets/Home.jpg'
import HomeImage2 from '../Home/assets/Home.jpg'
import cellingworks from '../Home/assets/cellingworks.jpg'
import cutting from '../Home/assets/cutting.jpg'
import kitchenworks from '../Home/assets/kitchenworks.jpg'
import paintingworks from '../Home/assets/painitingworks.jpg'
import pplywoodworks from '../Home/assets/pplywoodworks.jpg'

const Home = () => {
    const works = [
        {
            Image:cellingworks,
            title: 'Celling Works'
        },
        {
            Image:kitchenworks,
            title:'Kitchen'
        },
        {
            Image:paintingworks,
            title:'Painting'
        },
        {
            Image:cutting,
            title:'Furnitures'
        },
        {
            Image:pplywoodworks,
            title:'Interior'
        }
    ]
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <img
                src={HomeImage}
                alt="Background"
                className="w-full h-screen object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-8xl font-bold text-slate-400">
                    Sai Wood Treats
                </h1>
                <h2 className="mt-4 text-2xl font-bold text-slate-400">
                    <span className="text-gray-100">Transforming</span> Wood, Crafting Dreams
                </h2>
            </div>

            {/* Bottom Content */}
            <div className="absolute hidden bottom-20 inset-x-0 flex flex-wrap justify-center gap-6 px-6 xl:container mx-auto">
                {works.map((work, index) => (
                    <div
                        key={index}
                        // className="flex flex-col items-center w-52 h-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={work.Image}
                            alt="Card"
                            className="w-56  h-56 object-cover -my-20 rounded-xl"
                        />
                        <h2 className="mt-2 text-center text-white text-2xl font-sans">
                            {work.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
