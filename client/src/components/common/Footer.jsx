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
    <footer style={{ background: "#071409" }} className="text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get the latest tips for business growth and consultancy straight to
              your inbox!
            </h2>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-5 border-b border-green-800/30 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="email"
                defaultValue="info@ganisarsandassociates.com"
                className="w-full bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-white/70 sm:text-3xl"
                aria-label="Email address"
              />
              <button className="flex items-center gap-2 text-lg font-medium text-green-400 transition-colors hover:text-green-300">
                <span>Subscribe Now</span>
                <i className="ri-send-plane-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-4 text-lg text-white/90">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">Policies</h3>
            <ul className="space-y-4 text-lg text-white/90">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Service Categories
            </h3>
            <ul className="space-y-4 text-lg text-white/90">
              {serviceCategories.map((item) => (
                <li key={item} className="text-white/90 hover:text-green-400 transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Contact Us
            </h3>
            <div className="space-y-5 text-lg text-white/90">
              <div className="flex items-start gap-4">
                <i className="ri-phone-line mt-1 text-xl text-green-400"></i>
                <Link
                  to="tel:18008919866"
                  className="transition-colors hover:text-green-400"
                >
                  1800 891 9866
                </Link>
              </div>

              <div className="flex items-start gap-4">
                <i className="ri-mail-line mt-1 text-xl text-green-400"></i>
                <Link
                  to="mailto:info@ganisarsandassociates.com"
                  className="transition-colors hover:text-green-400"
                >
                  info@ganisarsandassociates.com
                </Link>
              </div>

              <div className="flex items-start gap-4">
                <i className="ri-map-pin-line mt-1 text-xl text-green-400"></i>
                <p className="max-w-sm leading-relaxed">
                  GA Nisars & Associates, Pimpri-Chinchwad, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-green-900/40 pt-6 text-center text-sm text-white/50">
          © 2026 GA Nisars & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
