import React from "react";
import PageHero from "../components/common/PageHero";
import { Link } from "react-router-dom";
import GetInTouch from "../components/common/GetInTouch";
import Services from "../components/Home/Services";

const OurServices = () => {
  const features = [
    {
      title: "GST Services",
      desc: "GST registration, return filing, compliance, and advisory support for businesses.",
    },
    {
      title: "Income Tax",
      desc: "Tax planning, filing, assessment support, and complete income tax solutions.",
    },
    {
      title: "Company Registration",
      desc: "Private limited, LLP, partnership, and startup registration services.",
    },
    {
      title: "Legal Services",
      desc: "Legal drafting, documentation, consultation, and dispute support.",
    },
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

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[640px]">
                <div className="overflow-hidden rounded-[30px] bg-white">
                  <img
                    src="/images/hero-img.jpg"
                    alt="Business services team"
                    className="h-[420px] w-full object-contain object-center sm:h-[500px] lg:h-[560px]"
                  />
                </div>

                <div className="absolute left-0 top-0 h-[56px] w-[34%] rounded-br-[30px] bg-white" />
                <div className="absolute bottom-0 right-0 h-[56px] w-[34%] rounded-tl-[30px] bg-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#111111] shadow-sm">
              <i className="ri-box-3-line text-[16px]"></i>
              <span>Our Services</span>
            </div>

            <h2 className="mb-5 max-w-xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
              Our Services & Expertise
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-8 text-black/70 sm:text-lg">
              Comprehensive legal, tax, and business support services tailored
              to your needs.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item.title} className="border-t border-black/10 pt-5">
                  <h3 className="mb-2 text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-black/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                Start Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Services />

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
            <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-white/8 px-3 py-1.5 text-sm text-white/90">
              <i className="ri-box-3-line text-[15px]"></i>
              <span>Benefit</span>
            </div>

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
