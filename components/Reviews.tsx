import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQItemComponent: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="w-full bg-[#F5F5F5] rounded-[24px] p-6 cursor-pointer transition-colors hover:bg-gray-200"
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-[#111111] text-[20px] leading-[30px] font-medium font-sans select-none">
          {item.question}
        </h3>
        {/* Toggle Icon */}
        <div className="relative flex items-center justify-center w-[34px] h-[34px] bg-[#111111] rounded-[96px] shrink-0 transition-transform duration-200">
             {/* Horizontal Bar */}
             <div className="absolute w-[14px] h-[2px] bg-white rounded-[16px]"></div>
             {/* Vertical Bar - Scales Y to 0 when OPEN (minus), 1 when CLOSED (plus) */}
             <div
               className={`absolute w-[2px] h-[14px] bg-white rounded-[16px] transition-transform duration-200 ease-out ${isOpen ? 'scale-y-0' : 'scale-y-100'}`}
             ></div>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-250 ease-out ${
          isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr] pt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[rgba(17,17,17,0.6)] text-[18px] leading-[27.9px] font-sans">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Reviews: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "faq-access-dashboard",
      question: "How Can I Access the Lumora Team Management Dashboard?",
      answer: "You can add team members by inviting them via email or adding their details manually."
    },
    {
      id: "faq-find-help",
      question: "Where Can I Find Help Using the Lumora Team Management Dashboard?",
      answer: "You can add team members by inviting them via email or adding their details manually."
    },
    {
      id: "faq-add-team-members",
      question: "How Do I Add Team Members to the Lumora Team Management Dashboard?",
      answer: "You can add team members by inviting them via email or adding their details manually."
    },
    {
      id: "faq-upgrade-plan",
      question: "How Can I Upgrade to a Higher Plan?",
      answer: "You can add team members by inviting them via email or adding their details manually."
    },
    {
      id: "faq-contact-support",
      question: "How Can I Contact the Lumora Support Team?",
      answer: "You can add team members by inviting them via email or adding their details manually."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-accordion"
      className="w-full bg-white py-[60px] lg:py-[80px]"
    >
      <div className="w-full max-w-[1280px] px-6 lg:px-[62px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[417px_1fr] gap-10 lg:gap-[50px] items-start">
           {/* Title Column */}
           <div className="max-w-[417px]">
             <h2 className="text-[#111111] text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] lg:leading-[49.44px] font-semibold font-sans tracking-tight">
               Frequently Asked Questions
             </h2>
           </div>

           {/* Accordion Column */}
           <div className="flex flex-col gap-4 w-full">
             {faqs.map(item => (
               <FAQItemComponent
                 key={item.id}
                 item={item}
                 isOpen={openId === item.id}
                 onToggle={() => handleToggle(item.id)}
               />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};
