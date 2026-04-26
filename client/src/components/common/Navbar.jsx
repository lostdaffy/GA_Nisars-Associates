import { useState } from "react";
import { ChevronDown, PhoneCall, Box, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      {/* Main Navbar */}
      <div className="mx-auto max-w-[1600px]">
        <div className="flex min-h-[78px] items-center justify-between px-4 sm:px-6 lg:hidden">
          {/* Mobile Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <img src="/images/brand-logo.png" className="h-12" alt="" />
            <span className="font-bold tracking-tight text-[#111827] text-lg sm:text-xl md:text-2xl lg:text-[22px]">
              Nisars & Associates
            </span>
          </a>

          {/* Mobile Right */}
          <div className="flex items-center gap-2">
            <a
              href="tel:1800 891 9866"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f5f5] text-[#111827]"
            >
              <PhoneCall className="h-5 w-5" strokeWidth={1.8} />
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f5f5] text-[#111827]"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:min-h-[106px] lg:grid-cols-12 lg:items-center">
          {/* Left Logo Area */}
          <div className="col-span-3 flex h-full items-center justify-center border-r border-dashed border-neutral-300 px-6 xl:px-8">
            <a href="/" className="flex items-center gap-3">
              <img src="/images/brand-logo.png" className="h-12" alt="" />
              <span className="text-[22px] font-semibold tracking-tight text-[#111827]">
                Nisars & Associates
              </span>
            </a>
          </div>

          {/* Center Nav */}
          <div className="col-span-6 flex h-full items-center justify-center px-4 xl:px-6">
            <nav>
              <ul className="flex items-center gap-6 xl:gap-10 text-[15px] xl:text-[17px] font-medium text-[#111827]">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 pb-1 transition-colors duration-200 ${
                        link.active
                          ? "border-b border-[#111827] text-[#111827]"
                          : "text-[#111827] hover:text-black/70"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Contact Area */}
          <div className="col-span-3 flex h-full items-center justify-center border-l border-dashed border-neutral-300 px-4 xl:px-6">
            <div className="flex items-center gap-4 xl:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5f5f5]">
                  <PhoneCall
                    className="h-5 w-5 text-[#111827]"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-[13px] xl:text-[14px] font-semibold text-[#111827]">
                    Call Any Time
                  </p>
                  <p className="text-[15px] xl:text-[16px] font-semibold text-[#111827]">
                    1800 891 9866
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`overflow-hidden border-t border-neutral-200 bg-white transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium transition-colors ${
                      link.active
                        ? "bg-neutral-100 text-[#111827]"
                        : "text-[#111827] hover:bg-neutral-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <PhoneCall
                    className="h-5 w-5 text-[#111827]"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-[13px] font-semibold text-[#111827]">
                    Call Any Time
                  </p>
                  <p className="text-[15px] font-semibold text-[#111827]">
                    22 (00) 356 7890
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
