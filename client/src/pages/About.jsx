import React from "react";
import GetInTouch from "../components/common/GetInTouch";
import PageHero from "../components/common/PageHero";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      title: "Integrity & Ethics",
      desc: "We work with honesty, transparency, and a strong sense of responsibility in every matter we handle.",
    },
    {
      title: "Client-Centric Approach",
      desc: "We listen carefully, understand your goals, and provide solutions tailored to your needs.",
    },
    {
      title: "Professional Excellence",
      desc: "Our team delivers accurate, practical, and high-quality legal and tax services with care.",
    },
    {
      title: "Timely & Affordable Solutions",
      desc: "We focus on fast execution, clear communication, and cost-effective support for every client.",
    },
  ];

  const chossefeatures = [
    {
      icon: "ri-shield-check-line",
      title: "Integrity & Trust",
      desc: "We build long-term client relationships through transparency, ethics, and dependable legal guidance.",
    },
    {
      icon: "ri-user-heart-line",
      title: "Client-Focused Support",
      desc: "Every matter is handled with personal attention, practical advice, and solutions tailored to your goals.",
    },
    {
      icon: "ri-award-line",
      title: "Professional Excellence",
      desc: "Our team combines strong academic knowledge with real-world experience in taxation and legal services.",
    },
    {
      icon: "ri-time-line",
      title: "Timely & Affordable",
      desc: "We deliver efficient, result-oriented services with clear communication and cost-effective support.",
    },
  ];
  return (
    <>
      <PageHero
        title="GA Nisars & Associates"
        des="Your Trusted Partner in Business Solutions"
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
              <img src="/images/brand-logo.png" className="h-6 w-6" alt="" />
              <span>About Us</span>
            </div>

            <h2 className="mb-5 max-w-xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
              GA Nisaras & Associates
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-8 text-black/70 sm:text-lg">
              GA Nisaras and Associates is a dynamic and client-focused law firm
              based in Roorkee, Uttarakhand, specializing in Tax Consultancy and
              comprehensive Legal Services.
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

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                <i className="ri-phone-fill mr-2"> </i> Start Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                <i className="ri-arrow-right-long-line mr-2"></i> View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[56px] font-semibold leading-none tracking-[-0.04em] text-[#111111] sm:text-[84px] md:text-[110px] lg:text-[150px]">
            Our Portfolios
          </h2>

          <p className="mt-10 max-w-[1400px] text-[20px] leading-[1.7] text-black/70 sm:text-[26px] md:text-[32px] lg:text-[36px]">
            GA Nisaras and Associates is a client-focused law firm based in
            Roorkee, Uttarakhand, offering tax consultancy and comprehensive
            legal services. We deliver practical, result-oriented solutions with
            a strong focus on trust, transparency, timely service, and long-term
            client relationships.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#111111] shadow-sm">
              <img src="/images/brand-logo.png" className="h-6 w-6" alt="" />
              <span>Why Choose Us</span>
            </div>

            <h2 className="mb-5 max-w-xl text-4xl font-semibold leading-tight text-black sm:text-5xl">
              Why Businesses Trust GA Nisaras & Associates
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-8 text-black/70 sm:text-lg">
              We provide practical, result-oriented legal and tax solutions for
              individuals, businesses, startups, and corporate clients with a
              strong focus on trust, clarity, and timely delivery.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {chossefeatures.map((item) => (
                <div key={item.title} className="border-t border-black/10 pt-5">
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-black">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-base leading-7 text-black/65">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative flex justify-center lg:justify-end">
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
        </div>
      </section>

      {/* Contact Section */}
      <GetInTouch />
    </>
  );
};

export default About;
