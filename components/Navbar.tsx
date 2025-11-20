import React, { useState } from 'react';

interface LinkItem {
  label: string;
  href: string;
  active?: boolean;
}

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <nav 
      className="w-full bg-[#f1ebf8] relative z-50"
      id="main-navbar"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[62px] py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" aria-label="home" className="shrink-0 z-50 relative">
          <img 
            src="https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/689e57fc121748f7c7120f79_Logo%20Lumora.svg" 
            alt="logo" 
            className="h-8 w-auto max-w-full"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Primary Links */}
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium px-3 py-2 transition-colors text-[#111111] hover:text-black uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a 
            href="https://www.temlis.com/" 
            className="text-[#111111] bg-white border border-transparent hover:bg-[#F5F5F5] px-6 py-[14px] rounded-[104px] text-[14px] font-medium leading-[19.88px] transition-colors"
          >
            Sign Up
          </a>
          <a 
            href="https://www.temlis.com/" 
            className="text-white bg-[#111111] hover:bg-black px-6 py-[14px] rounded-[104px] text-[14px] font-medium leading-[19.88px] transition-colors shadow-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-[48px] h-[48px] rounded bg-gray-50 z-50 relative"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-[#292D32] rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-[#292D32] rounded-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-[2px] bg-[#292D32] rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[80vh]">
          {/* Standard Links */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-6">
            {navLinks.map((link) => (
               <a 
                key={link.label}
                href={link.href} 
                className="text-xl font-medium text-[#111111] uppercase"
               >
                 {link.label}
               </a>
            ))}
          </div>
          
          {/* Mobile Actions */}
          <div className="flex flex-col gap-4 mt-auto pb-8">
            <a 
              href="https://www.temlis.com/" 
              className="w-full text-center text-[#111111] bg-gray-100 px-6 py-4 rounded-full text-base font-medium"
            >
              Sign Up
            </a>
            <a 
              href="https://www.temlis.com/" 
              className="w-full text-center text-white bg-[#111111] px-6 py-4 rounded-full text-base font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
};