import React, { useEffect, useRef, useState } from 'react';

const SmoothLogoCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const logos = [
    { name: 'Lilly', url: '/placeholder.svg?height=80&width=150' },
    { name: 'MYOB', url: '/placeholder.svg?height=80&width=150' },
    { name: 'BELIMO', url: '/placeholder.svg?height=80&width=150' },
    { name: 'LifeGroups', url: '/placeholder.svg?height=80&width=150' },
    { name: 'Grabyo', url: '/placeholder.svg?height=80&width=150' },
    { name: 'Citrus', url: '/placeholder.svg?height=80&width=150' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    const scrollSpeed = 0.50; // Adjust this value to change scroll speed

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = (prevPosition + scrollSpeed) % totalWidth;
        container.scrollLeft = newPosition;
        return newPosition;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const getActiveDotIndex = () => {
    if (!containerRef.current) return 0;
    const totalWidth = containerRef.current.scrollWidth / 2;
    const sectionWidth = totalWidth / 4;
    return Math.floor(scrollPosition / sectionWidth);
  };

  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden"
        >
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[200px] px-6 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* 4 Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[0, 1, 2, 3,4].map((dotIndex) => (
            <div
              key={dotIndex}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dotIndex === getActiveDotIndex()
                  ? 'bg-yellow-400 w-4' 
                  : 'bg-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothLogoCarousel;

