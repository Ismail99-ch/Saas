import React, { useState } from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero-crm" 
      className="w-full flex justify-center bg-[#f1ebf8] overflow-x-hidden"
    >
      <div className="w-full max-w-[1280px] px-6 lg:px-[62px] py-12 lg:py-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[24px] items-center lg:items-start">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-8 lg:gap-[32px] items-start order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-[10px] px-[20px] py-[10px] bg-white rounded-[104px] border border-[rgba(0,0,0,0.1)] shadow-sm">
              <img 
                src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e5b7a8d07d291e4764995_medal-star.svg" 
                alt="Medal Icon" 
                className="w-[20px] h-[20px]" 
              />
              <span className="text-[#111111] text-[16px] leading-[28px] font-medium">
                #1 Product of the Day
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[#111111] font-sans text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] lg:leading-[66px] font-semibold tracking-tight">
              The CRM with quick setup and intuitive interface
            </h1>

            {/* Description */}
            <p className="text-[rgba(17,17,17,0.8)] text-[16px] leading-[24px] max-w-[85%]">
              Effortlessly manage your business with a CRM that adapts to your needs. Fast setup, intuitive navigation, and customizable features designed to simplify your workflow.
            </p>

            {/* Primary Button */}
            <a 
              href="https://www.temlis.com/" 
              className="group flex items-center gap-4 bg-[#111111] text-white pl-6 pr-2 py-2 rounded-[96px] transition-all hover:shadow-lg hover:opacity-95"
            >
              <div className="h-[20px] overflow-hidden relative w-max">
                 <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[20px]">
                   <span className="block text-[14px] leading-[20px] font-medium">Start Now For Free</span>
                   <span className="block text-[14px] leading-[20px] font-medium">Start Now For Free</span>
                 </div>
              </div>
              <div className="bg-white p-2 rounded-full flex items-center justify-center w-8 h-8">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                   <path d="M3.75 9H14.25" />
                   <path d="M9 3.75L14.25 9L9 14.25" />
                </svg>
              </div>
            </a>

            {/* Subfeatures */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-[29px] w-full mt-2">
              <div className="flex items-start gap-3 max-w-[260px]">
                <img 
                  src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e6001cc35623a6e732659_Crown.svg" 
                  alt="Crown Icon" 
                  className="w-6 h-6 shrink-0"
                />
                <p className="text-[14px] leading-[19.88px] font-medium text-[rgba(17,17,17,0.6)]">
                  Boost Team Productivity Streamline tasks and focus on what matters
                </p>
              </div>
              <div className="flex items-start gap-3 max-w-[260px]">
                <img 
                  src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e6001cc35623a6e732659_Crown.svg" 
                  alt="Crown Icon" 
                  className="w-6 h-6 shrink-0"
                />
                <p className="text-[14px] leading-[19.88px] font-medium text-[rgba(17,17,17,0.6)]">
                  Tailored for Your Needs Custom tools that grow with your business
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Visuals) */}
          <div className="relative w-full flex justify-center lg:justify-center order-1 lg:order-2 mb-12 lg:mb-0">
             <div 
              className="relative w-[400px] h-[538px] max-w-full"
             >
                {/* Main Image */}
                <img 
                  src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e63032443f315ea5f4ad1_dc1c3f68257a317ba735df52c9228307_heroMainImg.avif"
                  alt="CRM dashboard and team working"
                  className="absolute inset-0 w-full h-full object-cover rounded-[40px] shadow-sm"
                />

                {/* Floating Elements (Hidden on small mobile for better fit, visible on sm+) */}
                
                {/* Card - Top Left */}
                <img 
                  src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e63022443f315ea5f4ab0_af485d6ada180cd44ebd141206fab1cf_heroOneCard.svg"
                  alt="Floating CRM card"
                  className="hidden sm:block absolute rounded-xl shadow-xl transition-transform hover:scale-105 duration-500"
                  style={{
                    top: '231px',
                    left: '-96px',
                    width: '218px', 
                    height: '166px'
                  }}
                />

                {/* Chip 1 - Top Left */}
                <img 
                   src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e6303169aa24108138621_heroProfileChip1.avif"
                   alt="Profile chip 1"
                   className="hidden sm:block absolute rounded-full shadow-lg transition-transform hover:scale-105 duration-500"
                   style={{
                     top: '107px',
                     left: '-40px',
                     width: '73px', 
                     height: '72px'
                   }}
                />

                {/* Chip 2 - Bottom Right */}
                <img 
                   src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e6303b4b275bb47cf3249_heroProfileChip2.avif"
                   alt="Profile chip 2"
                   className="hidden sm:block absolute rounded-full shadow-lg transition-transform hover:scale-105 duration-500"
                   style={{
                     top: '247px',
                     left: '368px',
                     width: '73px', 
                     height: '72px'
                   }}
                />

                 {/* Stats - Bottom Right */}
                 <img 
                   src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e63035a40cda410f58748_77aedad98fad139b2f81a691fbd6ee94_heroOneStats.svg"
                   alt="CRM statistics"
                   className="hidden sm:block absolute shadow-xl z-20 transition-transform hover:scale-105 duration-500"
                   style={{
                     top: '365px',
                     left: '276px',
                     width: '208px', 
                     height: '150px'
                   }}
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};