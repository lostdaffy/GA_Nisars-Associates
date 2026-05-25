import React from "react";
import PageHero from "../components/common/PageHero";
import { Link } from "react-router-dom";
import GetInTouch from "../components/common/GetInTouch";
import AllServices from "../components/Home/AllServices";
const OurServices = () => {
  const features = [
    {
      icon: "ri-government-line",
      title: "GST Services",
      desc: "Registration, return filing, notice handling, and end-to-end GST compliance for your business.",
      tag: "Most Popular",
    },
    {
      icon: "ri-file-text-line",
      title: "Income Tax",
      desc: "ITR filing, tax planning, assessment responses, and saving strategies for individuals and businesses.",
      tag: "Essential",
    },
    {
      icon: "ri-building-2-line",
      title: "Company Registration",
      desc: "Pvt Ltd, LLP, OPC, Partnership — complete incorporation with MCA filings and documentation.",
      tag: "Startup Friendly",
    },
    {
      icon: "ri-scales-3-line",
      title: "Legal Services",
      desc: "Contracts, notices, property registry, trademark, and litigation support by experienced professionals.",
      tag: "Expert Backed",
    },
  ];

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "8+", label: "Years Experience" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Services Offered" },
  ];

  const benefits = [
    {
      title: "Fast & Reliable Delivery",
      desc: "We ensure timely service execution without compromising quality, accuracy, or client satisfaction.",
    },
    {
      title: "Tailored To Your Needs",
      desc: "Every service is customized to match your business goals, compliance needs, and legal requirements.",
    },
  ];

  return (
    <>
      {/* Hero Section */}

      <PageHero
        title="Our Services & Expertise"
        des="Trusted tax, legal, and compliance solutions."
      />

      <section className="bg-white py-12 md:py-16 lg:py-20">
        <style>{`
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .s1-anim-1 { animation: fade-up 0.55s 0.05s ease both; }
      .s1-anim-2 { animation: fade-up 0.55s 0.12s ease both; }
      .s1-anim-3 { animation: fade-up 0.55s 0.20s ease both; }
      .s1-anim-4 { animation: fade-up 0.55s 0.28s ease both; }
    `}</style>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* ── Left: Image + Stats ── */}
            <div className="s1-anim-1 hidden flex-col gap-6 lg:flex">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/hero-img.jpg"
                  alt="Professional business services team"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Stats grid bottom-right */}
                <div className="absolute bottom-5 right-5 grid grid-cols-2 gap-2">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur-md"
                    >
                      <p className="text-xl font-semibold leading-none text-white">
                        {s.value}
                      </p>
                      <p className="mt-1 text-xs text-white/70">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Content ── */}
            <div className="flex flex-col justify-center">
              {/* Label */}
              <div className="s1-anim-1 mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#111] shadow-sm">
                <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
                Expert Services
              </div>

              {/* Heading */}
              <h2 className="s1-anim-2 max-w-lg text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-black lg:text-5xl">
                Everything Your Business
                <span className="block text-black/30">Legally Needs</span>
              </h2>

              {/* Subtext */}
              <p className="s1-anim-3 mt-5 max-w-md text-base leading-relaxed text-black/55 sm:text-lg">
                From day-one registration to annual compliance — we handle every
                legal and tax requirement so you can focus on growing your
                business.
              </p>

              {/* Feature List */}
              <div className="s1-anim-4 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-black/[0.07] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08] bg-[#f4f4f4]">
                      <i className={`${item.icon} text-lg text-black/60`} />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-black">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[56px] font-semibold leading-none tracking-[-0.04em] text-[#111111] sm:text-[84px] md:text-[110px] lg:text-[150px]">
            Our Services
          </h2>

          <p className="mt-10 max-w-[1400px] text-[20px] leading-[1.7] text-black/70 sm:text-[26px] md:text-[32px] lg:text-[36px]">
            GA Nisaras and Associates provides expert GST, income tax, legal
            advisory, company registration, drafting, compliance, and litigation
            support services in Roorkee, Uttarakhand, delivering practical
            solutions with trust, transparency, and timely execution.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-full">
            <img
              src="/images/contact-girl.jpg"
              alt="Professional consultation team"
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-full lg:min-h-[760px]"
            />
          </div>

          <div className="bg-[#1f1f1f] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16 xl:px-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/50 px-4 py-2 text-[13px] font-medium text-black">
              <img src="/images/brand-logo.png" className="h-6 w-6" alt="" />
              Benefit
            </span>

            <h2 className="max-w-lg text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-[58px]">
              Why Choose Our Services
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
              Get dependable legal and taxation support with practical
              solutions, timely execution, and services tailored to your
              business needs.
            </p>

            <div className="mt-10 space-y-8">
              {benefits.map((item, index) => (
                <div
                  key={item.title}
                  className={`${index !== 0 ? "pt-8" : "pt-0"} border-t border-white/12`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#d96b4f]/70 text-[#d96b4f]">
                      <i className="ri-checkbox-circle-line text-[14px]"></i>
                    </div>

                    <div>
                      <h3 className="text-[28px] font-semibold leading-tight text-white sm:text-[32px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-base leading-8 text-white/78">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <GetInTouch />
    </>
  );
};

export default OurServices;
