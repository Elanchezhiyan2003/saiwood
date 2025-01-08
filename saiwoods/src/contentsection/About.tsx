import React from 'react';
import { Check } from 'lucide-react';
// import HomeImage from '../Home/assets/Home.jpg';
import Interior from '../contentsection/assets/interior.jpg';
const About = () => {
    return (
        <section className="py-24 px-4 md:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            At Sai Wood Treats, we specialize in delivering premium interior wood solutions tailored for every space. From resort interiors to personalized home designs, our expertise spans doors, floors, ceilings, and more. Our dedication to craftsmanship, combined with a deep respect for tradition and quality, ensures every project reflects elegance and durability.


                        </p>
                        <ul className="space-y-4">
                            {[
                                "Offer treated wood solutions to enhance durability and resistance.",
                                "Design and craft high-quality doors, floors, ceilings, and custom woodworks.",
                                "Supply versatile wood materials, including plywood and customizable wood sizes."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="text-yellow-500 w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-gray-600">
                            
                            
                            
                            With customizable options and treated wood solutions, we bring innovation to every project. Our team believes in blending functionality with aesthetics to create timeless interiors. Sai Wood Treats is where craftsmanship meets creativity, making your spaces truly extraordinary.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={Interior}
                            alt="Modern office space with people working"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

