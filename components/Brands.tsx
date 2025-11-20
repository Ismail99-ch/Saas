import React, { useState } from 'react';

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, title, content, isOpen, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group w-full bg-white rounded-[24px] p-6 cursor-pointer transition-all duration-300 hover:shadow-sm border border-transparent hover:border-gray-100"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[#111111] text-[20px] leading-[30px] font-medium font-sans">
          {title}
        </h3>
        {/* Toggle Icon */}
        <div className="relative flex items-center justify-center w-[34px] h-[34px] bg-[#111111] rounded-full shrink-0 transition-transform duration-300">
            {/* Horizontal line */}
            <span className="absolute w-[14px] h-[2px] bg-white rounded-full"></span>
            {/* Vertical line - scales to 0 when open to form a minus */}
            <span 
                className={`absolute w-[2px] h-[14px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'scale-y-0' : 'scale-y-100'}`}
            ></span>
        </div>
      </div>
      
      {/* Content Area */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] pt-4 opacity-100' : 'grid-rows-[0fr] pt-0 opacity-0'}`}
      >
        <div className="overflow-hidden">
           <p className="text-[rgba(17,17,17,0.6)] text-[18px] leading-[27.9px] font-sans">
             {content}
           </p>
        </div>
      </div>
    </div>
  );
};

export const Brands: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const items = [
    {
      id: "accordion-idea-to-tasks",
      title: "Ideas to tasks in seconds",
      content: "Transforming your thoughts, meeting notes, or ideas into actionable tasks with minimal effort."
    },
    {
      id: "accordion-create-emails",
      title: "Create emails fast",
      content: "Transforming your thoughts, meeting notes, or ideas into actionable tasks with minimal effort."
    },
    {
      id: "accordion-generate-summarize",
      title: "Generate and summarize content",
      content: "Transforming your thoughts, meeting notes, or ideas into actionable tasks with minimal effort."
    },
    {
      id: "accordion-automate-tasks",
      title: "Automate repetitive tasks",
      content: "Transforming your thoughts, meeting notes, or ideas into actionable tasks with minimal effort."
    },
    {
      id: "accordion-collaboration",
      title: "Seamless collaboration across teams",
      content: "Transforming your thoughts, meeting notes, or ideas into actionable tasks with minimal effort."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };

  return (
    <section 
      id="ai-features-accordion" 
      className="w-full bg-[#f5f5f5] py-[60px] lg:py-[80px] overflow-hidden"
    >
      <div className="w-full max-w-[1280px] px-6 lg:px-[62px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 lg:mb-[60px]">
           <h2 className="text-[#111111] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] lg:leading-[49.44px] font-semibold font-sans tracking-tight">
             Stay one step ahead with AI
           </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[50px] items-stretch">
          
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {items.map((item) => (
              <AccordionItem 
                key={item.id}
                {...item}
                isOpen={openId === item.id}
                onClick={() => handleToggle(item.id)}
              />
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full min-h-[400px] lg:min-h-[598px] h-auto rounded-[24px] overflow-hidden order-1 lg:order-2">
            <img 
               src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68b73f10cc44b91e4ba3707b_Frame%202147226985.avif"
               alt="CRM AI feature preview"
               className="absolute inset-0 w-full h-full object-cover"
               srcSet="
                 https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68b73f10cc44b91e4ba3707b_Frame%202147226985-p-500.avif 500w,
                 https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68b73f10cc44b91e4ba3707b_Frame%202147226985-p-800.avif 800w,
                 https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68b73f10cc44b91e4ba3707b_Frame%202147226985.avif 1674w
               "
               sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
};