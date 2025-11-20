import React, { useRef } from 'react';

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  titleMaxWidth?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  titleMaxWidth
}) => {
  return (
    <div 
      id={id}
      className="w-full bg-white rounded-[24px] px-[24px] py-[30px] lg:px-[40px] lg:py-[30px] flex flex-col lg:flex-row items-center gap-8 lg:gap-[40px] min-h-[367px] border border-transparent shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-start gap-6 lg:gap-8 order-2 lg:order-1 w-full">
        <div className="flex flex-col gap-4">
          <h3
            className="text-[#111111] text-[28px] lg:text-[32px] leading-[1.2] font-semibold font-sans"
            style={{ maxWidth: titleMaxWidth ? `${titleMaxWidth}px` : '100%' }}
          >
            {title}
          </h3>
          <p className="text-[rgba(17,17,17,0.6)] text-[18px] leading-[27.9px] font-sans lg:max-w-[480px]">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="/features"
          className="group flex items-center gap-4 bg-[#111111] text-white pl-6 pr-2 py-2 rounded-[96px] transition-all hover:bg-black hover:shadow-lg hover:opacity-95"
        >
          <span className="text-[14px] font-medium leading-[20px] ml-2">Get Started</span>
          <div className="bg-white/10 p-1 rounded-full flex items-center justify-center w-8 h-8 group-hover:bg-white group-hover:text-black transition-colors">
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.75 9H14.25" />
                <path d="M9 3.75L14.25 9L9 14.25" />
             </svg>
          </div>
        </a>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full h-[250px] lg:h-[307px] rounded-[24px] overflow-hidden order-1 lg:order-2 bg-gray-100">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export const ExpertService: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: "solution-email-marketing",
      icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fd6a41335dc081b12081c_icon-sms.svg",
      title: "Email Marketing",
      description: "Centralize all your marketing activities and projects in one powerful platform."
    },
    {
      id: "solution-sales-automation",
      icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fd6a499aec66b2d71ff37_icon-settings.svg",
      title: "Sales Automation",
      description: "Automate your sales processes to improve efficiency, track leads, and close deals faster."
    },
    {
      id: "solution-contact-management",
      icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fd6a438d7a3bb2aa70bb3_icon-book.svg",
      title: "Contact management",
      description: "Efficiently manage contacts and leads to capture every opportunity."
    },
    {
      id: "solution-integrations",
      icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fd6a4ac739b87049a3549_icon-cpu.svg",
      title: "Integration third-party apps",
      description: "Easily integrate with essential tools to streamline your workflow."
    },
    {
      id: "solution-analytics-reporting",
      icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fd6a41dc34dfcd23fd122_icon-chart.svg",
      title: "Analytics and reporting",
      description: "Get insights with analytics and reporting for data-driven decisions."
    },
    {
      id: "solution-customer-support",
      icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fd6a4437d2a3aaa8813d6_icon-user.svg",
      title: "Customer support",
      description: "Boost customer satisfaction with tools for managing support requests."
    }
  ];

  const features = [
    {
      id: "tools-ideas-to-tasks",
      title: "Ideas to tasks in seconds",
      description: "Transforming your thoughts, meeting notes actionable tasks with minimal effort.",
      imageSrc: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fe485ec8c522010748e37_9fd43874eeddd4794b0db24b865e7ffb_tools-img-1.svg",
      imageAlt: "Automation tools illustration 1",
      titleMaxWidth: 352
    },
    {
      id: "tools-generate-summarize",
      title: "Generate summarize content",
      description: "From sales cycle steps to call transcripts and meeting notes.",
      imageSrc: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fe74755f44e7e17c0c6cf_0166fd73d4c01f245b4170c1837bb9a3_tools-img-02.svg",
      imageAlt: "Automation tools illustration 2",
      titleMaxWidth: 448
    },
    {
      id: "tools-create-emails-fast",
      title: "Create emails fast",
      description: "Smart templates ensure your message hits the mark",
      imageSrc: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fe7477e450a8408b6cb4a_5fa07b3de384f4fa0cc5663dd3aeb420_tools-img-03.svg",
      imageAlt: "Automation tools illustration 3",
      titleMaxWidth: 448
    },
    {
      id: "tools-ai-lead-scoring",
      title: "AI-powered lead scoring",
      description: "Automatically prioritize leads based on their likelihood to convert, helping sales teams focus.",
      imageSrc: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fe747ea6b9a95e7727003_13709076373090e5249e0cd182170660_tools-img-04.svg",
      imageAlt: "Automation tools illustration 4",
      titleMaxWidth: 448
    },
    {
      id: "tools-automated-email-composition",
      title: "Automated email composition",
      description: "Use AI to draft and suggest personalized emails, speeding up communication.",
      imageSrc: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689fe7473ff036cc5aa26255_4da99410bb683ca2aeb27a1421cbbaea_tools-img-05.svg",
      imageAlt: "Automation tools illustration 5",
      titleMaxWidth: 448
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 360; // Card width (approx 332px) + gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* SECTION 1: CAROUSEL */}
      <section 
        id="ready-made-solutions" 
        className="w-full bg-[#f5f5f5] py-[60px] lg:py-[80px] overflow-hidden"
      >
        <div className="w-full max-w-[1280px] px-6 lg:px-[62px] mx-auto flex flex-col gap-12 lg:gap-[60px]">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-4">
            <div className="max-w-[610px]">
              <h2 className="text-[#111111] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] lg:leading-[49.44px] font-semibold font-sans tracking-tight">
                Ready-made solutions for a range of service use cases
              </h2>
            </div>
            
            {/* CTA Button */}
            <a 
              href="/features" 
              className="group flex items-center gap-4 bg-[#111111] text-white pl-6 pr-2 py-2 rounded-[96px] transition-all hover:shadow-lg hover:opacity-95 shrink-0"
            >
              <div className="h-[20px] overflow-hidden relative w-max">
                  <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[20px]">
                    <span className="block text-[14px] leading-[20px] font-medium">See More</span>
                    <span className="block text-[14px] leading-[20px] font-medium">See More</span>
                  </div>
              </div>
              <div className="bg-white p-2 rounded-full flex items-center justify-center w-8 h-8">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3.75 9H14.25" />
                    <path d="M9 3.75L14.25 9L9 14.25" />
                </svg>
              </div>
            </a>
          </div>

          {/* Carousel Section */}
          <div className="flex flex-col gap-[60px]">
            
            {/* Cards Track */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {solutions.map((item) => (
                <div 
                  key={item.id}
                  className="min-w-[300px] sm:min-w-[332px] bg-white rounded-[24px] p-6 border border-gray-100 shadow-sm flex flex-col gap-[50px] snap-start h-auto min-h-[286px] transition-colors hover:border-gray-200"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#FFE36E] rounded-full flex items-center justify-center shrink-0">
                    <img 
                      src={item.icon} 
                      alt={`${item.title} icon`}
                      className="w-8 h-8" 
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111111] text-[20px] leading-[32px] font-medium font-sans">
                      {item.title}
                    </h3>
                    <p className="text-[rgba(17,17,17,0.6)] text-[16px] leading-[24px] font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => scroll('left')}
                aria-label="Previous slide"
                className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18L9 12L15 6" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                aria-label="Next slide"
                className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18L15 12L9 6" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TASK AUTOMATION LIST */}
      <section
        id="task-automation"
        className="w-full bg-[#f5f5f5] py-[60px] lg:py-[80px]"
      >
        <div className="w-full max-w-[1280px] px-6 lg:px-[62px] mx-auto">

          {/* Header */}
          <div className="text-center mb-[40px] lg:mb-[60px]">
            <span className="block text-[#00499D] text-[14px] font-medium mb-4 font-sans tracking-wide uppercase">
              Effortless Task Automation
            </span>
            <h2 className="text-[#111111] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-semibold font-sans max-w-[774px] mx-auto">
              Unlock Productivity with Smart Automation Tools
            </h2>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-6 lg:gap-[40px]">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};