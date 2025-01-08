import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Input = ({ className, ...props }) => (
  <input className={`px-3 py-2 bg-transparent border rounded-md ${className}`} {...props} />
);

const Button = ({ className, children, ...props }) => (
  <button className={`px-4 py-2 font-bold rounded-md ${className}`} {...props}>
    {children}
  </button>
);

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 mx-auto ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold">Innotech Titans</h2>
            <div className="space-y-2">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>
                <strong>Phone:</strong>+91 9447005258
              </p>
              <p>
                <strong>Email:</strong> saiwoodtreats@gmail.com 
              </p>
            </div>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['Home', 'About us', 'Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="text-yellow-400 mr-2">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Wood Furnitures', 'Resisitance', 'House Wood Furnitures', 'Hotels', 'Customized Woods'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors flex items-center">
                    <span className="text-yellow-400 mr-2">›</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-white text-lg  font-semibold mb-4">Our Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-transparent border-gray-700 focus:border-yellow-400 flex-grow"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                Subscribe
              </Button>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© Copyright <strong className="text-white">Sai Wood Treats</strong>. All Rights Reserved</p>
          <p className="mt-2">
            Designed by{" "}
            <a href="#" className="text-yellow-400 hover:text-yellow-500">
              Cybernaut
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

