import React, { useRef } from 'react';

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
}

export const WorkProcess: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: "testimonial-1",
      rating: 5,
      quote: "We've been using HR Dashboard for over a year now, and we're still finding new ways to use it to improve our HR operations.",
      name: "Ryan Workman",
      role: "HR Director, Delta Consulting"
    },
    {
      id: "testimonial-2",
      rating: 5,
      quote: "Handling customer management has never been so streamlined – I wholeheartedly endorse this tool for any expanding business.",
      name: "James Schleifer",
      role: "HR of Nata.Co"
    },
    {
      id: "testimonial-3",
      rating: 5,
      quote: "The CRM features have truly revolutionized our approach and have significantly boosted our business growth.",
      name: "Cooper Carder",
      role: "Chief Marketing Officer"
    },
    {
      id: "testimonial-4",
      rating: 5,
      quote: "A year into using the HR Dashboard, and we’re still uncovering new possibilities for advancing our HR functions and even more effective.",
      name: "Ahmad Franci",
      role: "CEO, Mega. Co"
    },
    {
      id: "testimonial-5",
      rating: 5,
      quote: "With a year of marketing dashboard use under our belts, we’re still finding innovative and elevate our strategies effectively.",
      name: "Kadin Donin",
      role: "HR of Space Up"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by card width (424px) + gap (24px)
      const scrollAmount = 424 + 24;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="mondai-crm-testimonials" 
      className="w-full bg-white py-[60px] lg:py-[80px] overflow-hidden"
    >
      <div className="w-full max-w-[1280px] px-6 lg:px-[62px] mx-auto flex flex-col gap-[40px] lg:gap-[60px]">
        
        {/* Header Row */}
        <div className="w-full">
            <h2 className="text-[#111111] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-semibold font-sans tracking-tight max-w-[448px]">
              Experience Mondai CRM in Action
            </h2>
        </div>

        {/* Carousel Track */}
        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {testimonials.map((item) => (
                <div 
                    key={item.id}
                    className="min-w-[300px] sm:min-w-[424px] max-w-[424px] bg-white rounded-[24px] p-[30px] border border-gray-100 shadow-sm flex flex-col gap-[30px] snap-start h-auto transition-colors hover:border-gray-200 flex-shrink-0"
                >
                    {/* Rating */}
                    <div className="flex gap-[5px]">
                        {[...Array(item.rating)].map((_, i) => (
                             <img 
                                key={i}
                                src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68a4a009ce327b396770add0_Star.svg" 
                                alt="Star"
                                className="w-5 h-5 block"
                             />
                        ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-[rgba(17,17,17,0.6)] text-[18px] leading-[27.9px] font-sans flex-grow">
                        "{item.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="pt-2">
                        <p className="text-[#111111] text-[20px] leading-[30px] font-medium font-sans">
                            {item.name}
                        </p>
                        <p className="text-[rgba(17,17,17,0.6)] text-[18px] leading-[27.9px] font-sans mt-1">
                            {item.role}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Navigation Arrows (Bottom Center) */}
        <div className="flex items-center justify-center gap-4 mt-4">
             <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18L9 12L15 6" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18L15 12L9 6" />
                </svg>
              </button>
        </div>

      </div>
    </section>
  );
};