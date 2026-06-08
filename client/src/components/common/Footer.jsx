import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact Us", to: "/contact" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms & Conditions", to: "/terms-and-conditions" },
    { name: "Refund Policy", to: "/refund-policy" },
    { name: "Cancellation Policy", to: "/cancellation-policy" },
  ];

  const serviceCategories = [
    "GST Services",
    "Income Tax Filing",
    "Company Registration",
    "MSME Registration",
    "Legal Advisory",
  ];

  return (
    <footer className="text-white" style={{ background: "#0a0a0a" }}>

      {/* ── Top separator line ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-green-800/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Newsletter row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get the latest tips for business growth and consultancy straight to
              your inbox!
            </h2>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="email"
                defaultValue="info@ganisarsandassociates.com"
                className="w-full bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-white/70 sm:text-3xl"
                aria-label="Email address"
              />
              <button className="flex items-center gap-2 text-lg font-medium text-green-400 transition-colors hover:text-green-300">
                <span>Subscribe Now</span>
                <i className="ri-send-plane-line text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-8 text-[17px] font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-[16px] text-white/70 transition-colors hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-[17px] font-semibold uppercase tracking-widest text-white/40">
              Policies
            </h3>
            <ul className="space-y-3.5">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-[16px] text-white/70 transition-colors hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-[17px] font-semibold uppercase tracking-widest text-white/40">
              Services
            </h3>
            <ul className="space-y-3.5">
              {serviceCategories.map((item) => (
                <li
                  key={item}
                  className="cursor-default text-[16px] text-white/70 transition-colors hover:text-green-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-[17px] font-semibold uppercase tracking-widest text-white/40">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-phone-line mt-0.5 text-[18px] text-green-400" />
                <Link
                  to="tel:18008919866"
                  className="text-[16px] text-white/70 transition-colors hover:text-green-400"
                >
                  1800 891 9866
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-mail-line mt-0.5 text-[18px] text-green-400" />
                <Link
                  to="mailto:info@ganisarsandassociates.com"
                  className="break-all text-[16px] text-white/70 transition-colors hover:text-green-400"
                >
                  info@ganisarsandassociates.com
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line mt-0.5 text-[18px] text-green-400" />
                <p className="text-[16px] leading-relaxed text-white/70">
                  GA Nisars & Associates, Roorkee,
                  Uttarakhand, India
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: "ri-instagram-line", href: "#" },
                  { icon: "ri-facebook-line", href: "#" },
                  { icon: "ri-whatsapp-line", href: "#" },
                  { icon: "ri-linkedin-line", href: "#" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[18px] text-white/50 transition-all hover:border-green-800/50 hover:bg-green-900/20 hover:text-green-400"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src="/images/brand-logo.png" className="h-7 w-7 opacity-60" alt="" />
            <span className="text-[13px] text-white/40">
              © 2026 GA Nisars & Associates. All rights reserved.
            </span>
          </div>
          <p className="text-[13px] text-white/25">
            Made with care in Uttarakhand, India
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;