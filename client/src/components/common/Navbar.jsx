import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, PhoneCall, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-sm">
      <div className="mx-auto max-w-[1600px]">

        {/* ── Mobile Header (< lg) ── */}
        <div className="flex min-h-[78px] items-center justify-between px-4 sm:px-6 lg:hidden">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/brand-logo.png"
              className="h-12 w-auto object-contain sm:h-14"
              alt="Nisars logo"
            />
            <div className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-[#111827] sm:text-[17px]">
                Nisars & Associates
              </span>
              <span className="hidden text-[11px] font-medium text-[#6b7280] sm:block">
                Business Services
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="tel:18008919866"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4] text-[#16a34a] transition hover:bg-[#dcfce7]"
            >
              <PhoneCall className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0fdf4] text-[#16a34a] transition hover:bg-[#dcfce7]"
            >
              {mobileMenuOpen
                ? <X className="h-5 w-5" strokeWidth={2} />
                : <Menu className="h-5 w-5" strokeWidth={2} />
              }
            </button>
          </div>
        </div>

        {/* ── Desktop Header (≥ lg) ── */}
        <div className="hidden lg:grid lg:min-h-[100px] lg:grid-cols-12 lg:items-center xl:min-h-[110px]">

          {/* Logo — col 3 */}
          <div className="col-span-3 flex h-full items-center justify-center border-r border-dashed border-neutral-300 px-5 xl:px-8">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/brand-logo.png"
                className="h-16 w-auto shrink-0 object-contain xl:h-20"
                alt="Nisars logo"
              />
              <div className="leading-tight">
                <span className="block text-[17px] font-bold tracking-tight text-[#111827] xl:text-[20px]">
                  Nisars & Associates
                </span>
                <span className="mt-0.5 block text-[11px] font-medium tracking-wide text-[#6b7280] xl:text-[12px]">
                  Business Services
                </span>
              </div>
            </Link>
          </div>

          {/* Nav links — col 6 */}
          <div className="col-span-6 flex h-full items-center justify-center px-4 xl:px-6">
            <nav>
              <ul className="flex items-center gap-5 xl:gap-9">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 pb-0.5 text-[14px] font-medium transition-colors duration-200 xl:text-[16px] ${
                        isActive(link.href)
                          ? "border-b-2 border-[#16a34a] text-[#16a34a]"
                          : "text-[#374151] hover:text-[#16a34a]"
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Phone — col 3 */}
          <div className="col-span-3 flex h-full items-center justify-center border-l border-dashed border-neutral-300 px-4 xl:px-6">
            <Link
              to="tel:18008919866"
              className="group flex items-center gap-3 rounded-2xl px-4 py-2.5 transition hover:bg-[#f0fdf4]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0fdf4] transition group-hover:bg-white xl:h-12 xl:w-12">
                <PhoneCall className="h-5 w-5 text-[#16a34a]" strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <p className="text-[12px] font-semibold text-[#374151] xl:text-[13px]">
                  Call Any Time
                </p>
                <p className="text-[15px] font-bold text-[#16a34a] xl:text-[17px]">
                  1800 891 9866
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* ── Mobile Menu Dropdown ── */}
        <div
          className={`overflow-hidden border-t border-neutral-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-5 pt-3 sm:px-6">
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-[#f0fdf4] text-[#16a34a]"
                        : "text-[#111827] hover:bg-[#f9fafb] hover:text-[#16a34a]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown
                      ? <ChevronDown className="h-4 w-4" />
                      : <span className="text-[#d1d5db]">›</span>
                    }
                  </Link>
                </li>
              ))}
            </ul>

            {/* Phone card */}
            <Link
              to="tel:18008919866"
              className="mt-3 flex items-center gap-3 rounded-2xl border border-[#bbf7d0] bg-[#f0fdf4] p-4 transition hover:bg-[#dcfce7]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                <PhoneCall className="h-5 w-5 text-[#16a34a]" strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <p className="text-[12px] font-semibold text-[#374151]">
                  Call Any Time
                </p>
                <p className="text-[15px] font-bold text-[#16a34a]">
                  1800 891 9866
                </p>
              </div>
              <span className="ml-auto text-[#16a34a]">›</span>
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Navbar;