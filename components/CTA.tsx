import React, { useState } from 'react';

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate submission
      setStatus('success');
    }
  };

  return (
    <section 
      id="newsletter-footer-section"
      className="w-full bg-[#0F172A] py-16 px-6 lg:px-[62px]"
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Headline Block */}
        <div className="flex flex-col items-center text-center gap-5">
          <span className="text-[#FFB524] text-[14px] font-medium font-sans leading-[20px]">
            Effortless Task Automation
          </span>
          <h2 className="text-white text-[32px] md:text-[36px] leading-[36px] md:leading-[39.6px] font-semibold font-sans max-w-[624px]">
            Based on 1,000+ G2 Crowd reviews, Mondai CRM is a game-changer
          </h2>
        </div>

        {/* Email Form */}
        <div className="flex justify-center w-full">
          {status === 'success' ? (
            <div className="bg-[#DDDDDD] p-5 rounded-[24px] text-center text-[#111111] font-sans w-full max-w-[600px]">
              Thank you! Your submission has been received!
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-[10px] w-full justify-center items-center"
            >
              <input 
                type="email" 
                name="email"
                placeholder="Your Email Address"
                required
                className="w-full md:max-w-[344px] h-[52px] bg-[rgba(255,255,255,0.2)] rounded-[104px] px-6 py-[14px] text-[14px] text-white placeholder:text-white/60 outline-none border-none font-sans transition-colors focus:bg-[rgba(255,255,255,0.25)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="w-full md:w-auto px-6 py-[14px] bg-white text-[#111111] rounded-[104px] text-[16px] font-medium leading-[24px] font-sans transition-colors hover:bg-gray-100 whitespace-nowrap"
              >
                Get Started
              </button>
            </form>
          )}
        </div>

        {/* Divider Spacer & Footer Area */}
        <div className="pt-10 border-t border-[rgba(255,255,255,0.1)] w-full mt-[10px]">
             
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4">
             
             {/* Footer Left */}
             <div className="flex flex-col gap-6 items-start">
               <a href="/" className="block">
                 <img 
                    src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68a4ae5cd724eae76592f083_footer%20logo.svg" 
                    alt="Lumora Logo"
                    className="h-[40px] w-auto object-cover"
                 />
               </a>
               <p className="text-white text-[14px] leading-[22px] font-sans whitespace-pre-line">
                  New York City, NY 123 Legal Avenue,{'\n'}Suite 456 New York, NY 10001
               </p>
               
               {/* Socials */}
               <div className="flex gap-4 items-center">
                 {[
                   { icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68a4b06b554913da6c3965e2_facebook%20icon.svg", href: "https://www.facebook.com/" },
                   { icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68a4b06b198c35e1dbaec887_linkedInd%20icon.svg", href: "https://linkedin.com/" },
                   { icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68a4b06bbd7f8827c50081c0_x%20icon.svg", href: "https://x.com/" },
                   { icon: "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/68a4b06b7f668c04cc1644cb_instagram%20icon.svg", href: "https://www.instagram.com/" },
                 ].map((social, idx) => (
                   <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex items-center justify-center bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                   >
                     <img src={social.icon} alt="social" className="w-4 h-4" />
                   </a>
                 ))}
               </div>
             </div>

             {/* Footer Right (Links) */}
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-4">
                 {/* Column 1 */}
                 <div className="flex flex-col gap-4">
                   {[
                     { label: "Home V.1", href: "/home/home-v1" },
                     { label: "Home V.2", href: "/home/home-v2" },
                     { label: "Home V.3", href: "/home/home-v3" },
                     { label: "About Us V.1", href: "/about/about-us-v-1" },
                     { label: "About Us V.2", href: "/about/about-us-v-2" },
                     { label: "About Us V.3", href: "/about/about-us-v-3" }
                   ].map((link) => (
                     <a key={link.label} href={link.href} className="text-white text-[14px] leading-[22px] font-sans hover:text-white/80 transition-colors">
                       {link.label}
                     </a>
                   ))}
                 </div>

                 {/* Column 2 */}
                 <div className="flex flex-col gap-4">
                   {[
                     { label: "Contact V.1", href: "/contact/contact-us-v-1" },
                     { label: "Contact V.2", href: "/contact/contact-us-v-2" },
                     { label: "Contact V.3", href: "/contact/contact-us-v-3" },
                     { label: "Pricing", href: "/pricing" },
                     { label: "Features", href: "/features" },
                     { label: "Blogs", href: "/blog" }
                   ].map((link) => (
                     <a key={link.label} href={link.href} className="text-white text-[14px] leading-[22px] font-sans hover:text-white/80 transition-colors">
                       {link.label}
                     </a>
                   ))}
                 </div>

                 {/* Column 3 */}
                 <div className="flex flex-col gap-4">
                   {[
                     { label: "Blog Post", href: "https://lumora-template.webflow.io/blogs/maximizing-your-marketing-roi", target: "_blank" },
                     { label: "Style Guide", href: "/template/style-guide" },
                     { label: "Changelog", href: "/template/changelog" },
                     { label: "Licensing", href: "/template/licensing" }
                   ].map((link) => (
                     <a 
                        key={link.label} 
                        href={link.href} 
                        target={link.target}
                        className="text-white text-[14px] leading-[22px] font-sans hover:text-white/80 transition-colors"
                     >
                       {link.label}
                     </a>
                   ))}
                 </div>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
};