import { useState } from "react";
import { ChevronDown, ArrowUpRight, Box } from "lucide-react";

const serviceData = [
  {
    category: "Company Registration",
    items: [
      "Pvt Ltd",
      "LLP",
      "OPC",
      "Partnership Firm",
      "Micro Finance",
      "Nidhi Co.",
    ],
  },
  {
    category: "GST & Compliance",
    items: ["GST", "MSME", "Logo Design", "Website", "Unique Name"],
  },
  {
    category: "Digital Sign",
    items: ["Digital Signature", "All Class Registration"],
  },
  {
    category: "Trademark & IP India",
    items: [
      "Trade Mark",
      "Logo Registration",
      "Copyright",
      "Logo Artist / Work of Patent",
    ],
  },
  {
    category: "Labour & Licence",
    items: [
      "Shop and Establishment",
      "ESI",
      "EPFO",
      "Labour Licence",
      "GST",
      "MSME",
    ],
  },
  {
    category: "Legal & Tax",
    items: [
      "Legal Metrology",
      "Drug Licence",
      "FSSAI",
      "143",
      "Mutation",
      "Registry",
      "Land",
      "Commercial Land",
      "Export etc.",
    ],
  },
  {
    category: "Security Agency",
    items: [
      "PSARA",
      "Security Agency",
      "Labour Licence",
      "ESI",
      "EPFO",
      "etc.",
    ],
  },
  {
    category: "Design & Marketing",
    items: [
      "Graphic Design",
      "Logo Design",
      "Catalogue Design",
      "Social Media",
      "Promotional Video",
      "Poster/Video Design",
    ],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#0f0f10] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/50 px-4 py-2 text-[13px] font-medium text-black">
            <img src="/images/brand-logo.png" className="h-6 w-6" alt="" />
            Services
          </span>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[46px] lg:text-[60px]">
            Your Needs, Our Expertise
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-white/70 sm:text-[18px]">
            Business registration, legal compliance, branding, and professional
            services — all organized into clear categories for easy access.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {serviceData.map((group, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={group.category} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-medium text-white/40 sm:text-[16px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[32px] lg:text-[40px]">
                      {group.category}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-transform duration-300">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/85"
                        >
                          <span className="text-[15px] sm:text-[16px]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
