import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className="flex items-center justify-between w-full px-4 py-2 fixed top-0 z-50 bg-transparent">
            {/* Logo Section */}
            <div className="text-xl font-bold text-slate-400">

                <button >
                    <Link to="home" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        Sai Wood Treats
                    </Link>
                </button>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-10">
                <button>
                    <Link to="home" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        Home
                    </Link>
                </button>
                <button>
                    <Link to="about" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        About
                    </Link>
                </button>
                <button>
                    <Link to="services" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        Services
                    </Link>
                </button>
                <button>
                    <Link to="gallery" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        Gallery

                    </Link>
                </button>
                <button>
                    <Link to="" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        WoodSupply
                    </Link>
                </button>
                <button>
                    <Link to="clientresources" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        Contact
                    </Link>
                </button>
                {/* <button>
                    <Link to="contact" smooth={true} duration={50} className="text-lg font-semibold text-slate-400 hover:text-gray-900 transition">
                        Contact
                    </Link>
                </button> */}
            </div>

            {/* Get Started Button */}
            <div>
                <Button className="px-6 py-2 text-sm font-medium bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                    Get Started
                </Button>
            </div>
        </nav>
    );
};

export default Nav;
