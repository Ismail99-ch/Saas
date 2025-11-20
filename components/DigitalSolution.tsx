import React from 'react';

export const DigitalSolution: React.FC = () => {
  return (
    <section
      id="fit-sales-cycle"
      className="w-full bg-white py-0 lg:py-0"
    >
      <div className="w-full max-w-[1280px] px-6 lg:px-[62px] mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[40px] items-center">
          
          {/* Content Column - Order 2 on mobile (bottom), Order 1 on Desktop (left) */}
          <div className="flex flex-col items-start order-2 lg:order-1 max-w-full lg:max-w-[550px] pb-16 lg:pb-0">
            
            {/* Eyebrow */}
            <span className="block text-[#111111] text-[14px] font-medium mb-[28px] font-sans">
              Effortless Task Automation
            </span>
            
            {/* Heading */}
            <h2 className="text-[#111111] text-[32px] md:text-[48px] leading-[38px] md:leading-[49.44px] font-semibold font-sans mb-[28px] tracking-tight">
              Fit your sales cycle with ease
            </h2>
            
            {/* Description */}
            <p className="text-[rgba(17,17,17,0.6)] text-[16px] md:text-[18px] leading-[24px] md:leading-[27.9px] font-sans mb-[32px] max-w-[538px]">
              Streamline your sales pipeline, tailor deal stages, and effortlessly manage client interactions—Mondai helps you build a sales process that’s as unique as your business.
            </p>
            
            {/* Button */}
            <a 
              href="/features"
              id="btn-get-started-sales-cycle"
              className="group inline-flex items-center gap-4 bg-[#111111] text-white pl-6 pr-2 py-2 rounded-[96px] transition-colors hover:bg-black hover:text-white"
            >
              <span className="text-[14px] font-medium leading-[19.88px] ml-1">
                Get Started
              </span>
              <div className="bg-white p-2 rounded-full flex items-center justify-center w-8 h-8">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 18 18" 
                  fill="none" 
                  stroke="#111111" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3.75 9L14.25 9" />
                  <path d="M14.25 9L9 3.75" />
                  <path d="M14.25 9L9 14.25" />
                </svg>
              </div>
            </a>
          </div>

          {/* Image Column - Order 1 on mobile (top), Order 2 on Desktop (right) */}
          <div className="relative w-full h-auto pt-[100%] lg:pt-[596px] lg:h-[596px] rounded-[24px] overflow-hidden order-1 lg:order-2 mt-10 lg:mt-0">
            <img
              src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689ff79cf32a6b5dcb235549_automation-img.avif"
              srcSet="
                https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689ff79cf32a6b5dcb235549_automation-img-p-500.avif 500w,
                https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689ff79cf32a6b5dcb235549_automation-img.avif 1106w
              "
              sizes="(max-width: 1106px) 100vw, 1106px"
              alt="Sales automation dashboard illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};