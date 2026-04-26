import React from "react";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Services",
    "Pricing",
    "Blogs",
    "Projects",
  ];

  const supportLinks = [
    "Contact Us",
    "About Us",
    "Team Member",
    "Login Now",
    "Register Now",
  ];

  const utilityLinks = [
    "Licensing",
    "Style Guide",
    "Changelog",
    "Instructions",
    "404 Not Found",
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get the latest tips for business growth and consultancy straight to your inbox!
            </h2>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-5 border-b border-white/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="email"
                defaultValue="info@ganisarsandassociates.com"
                className="w-full bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-white/70 sm:text-3xl"
                aria-label="Email address"
              />
              <button className="flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-white/70">
                <span>Subscribe Now</span>
                <i className="ri-send-plane-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">Site Map</h3>
            <ul className="space-y-4 text-lg text-white/90">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white/60">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">Support</h3>
            <ul className="space-y-4 text-lg text-white/90">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white/60">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">Utilities</h3>
            <ul className="space-y-4 text-lg text-white/90">
              {utilityLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-white/60">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-5 text-lg text-white/90">
              <div className="flex items-start gap-4">
                <i className="ri-phone-line mt-1 text-xl"></i>
                <a href="tel:+919970787600" className="transition-colors hover:text-white/60">
                  +91 997 078 7600
                </a>
              </div>

              <div className="flex items-start gap-4">
                <i className="ri-mail-line mt-1 text-xl"></i>
                <a
                  href="mailto:info@ganisarsandassociates.com"
                  className="transition-colors hover:text-white/60"
                >
                  info@ganisarsandassociates.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <i className="ri-map-pin-line mt-1 text-xl"></i>
                <p className="max-w-sm leading-relaxed">
                  GA Nisars & Associates, Pimpri-Chinchwad, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2026 GA Nisars & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;