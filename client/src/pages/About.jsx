import React from "react";
import GetInTouch from "../components/common/GetInTouch";
import PageHero from "../components/common/PageHero";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const features = [
  {
    title: "Client-Centric Approach",
    desc: "We listen carefully, understand your goals, and provide solutions tailored to your needs.",
  },
  {
    title: "Professional Excellence",
    desc: "Our team delivers accurate, practical, and high-quality legal and tax services with care.",
  },
];

const chooseFeatures = [
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

const stats = [
  { num: "10+", label: "Years Experience" },
  { num: "5,000+", label: "Clients Served" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "Pan-India", label: "Service Coverage" },
];

const About = () => {
  const { ref: sec1ImgRef, visible: sec1ImgVisible } = useScrollReveal();
  const { ref: sec1ContentRef, visible: sec1ContentVisible } =
    useScrollReveal();
  const { ref: portfolioRef, visible: portfolioVisible } = useScrollReveal(0.1);
  const { ref: statsRef, visible: statsVisible } = useScrollReveal(0.15);
  const { ref: sec2ContentRef, visible: sec2ContentVisible } =
    useScrollReveal();
  const { ref: sec2ImgRef, visible: sec2ImgVisible } = useScrollReveal();

  return (
    <>
      <style>{`
        /* ── Scroll reveal base ── */
        .ab-fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ab-fade-up.ab-visible { opacity: 1; transform: translateY(0); }

        .ab-fade-left {
          opacity: 0;
          transform: translateX(-36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .ab-fade-left.ab-visible { opacity: 1; transform: translateX(0); }

        .ab-fade-right {
          opacity: 0;
          transform: translateX(36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .ab-fade-right.ab-visible { opacity: 1; transform: translateX(0); }

        .ab-stat {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .ab-stat.ab-visible { opacity: 1; transform: translateY(0); }

        .ab-feature {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .ab-feature.ab-visible { opacity: 1; transform: translateY(0); }

        /* ── Portfolio text reveal ── */
        .portfolio-text {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .portfolio-text.ab-visible { opacity: 1; transform: translateY(0); }
        .portfolio-sub {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.15s;
        }
        .portfolio-sub.ab-visible { opacity: 1; transform: translateY(0); }

        /* ── Image hover ── */
        .about-img-wrap img {
          transition: transform 0.5s ease;
        }
        .about-img-wrap:hover img {
          transform: scale(1.03);
        }

        /* ── Feature card hover ── */
        .feat-card {
          transition: border-color 0.2s, background 0.2s;
        }
        .feat-card:hover {
          border-color: #bbf7d0;
          background: #f0fdf4;
        }
        .feat-card:hover .feat-icon {
          background: #16a34a;
          border-color: #15803d;
          color: white;
        }
        .feat-icon {
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
      `}</style>

      <PageHero
        title="GA Nisars & Associates"
        des="Your Trusted Partner in Business Solutions"
      />

      {/* ── Section 1: Who We Are ── */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Image */}
          <div
            ref={sec1ImgRef}
            className={`ab-fade-left about-img-wrap overflow-hidden rounded-3xl border border-[#e5e7eb] shadow-sm ${sec1ImgVisible ? "ab-visible" : ""}`}
          >
            <img
              src="/images/about-img.jpg"
              alt="Business services team"
              className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[560px]"
            />
          </div>

          {/* Content */}
          <div
            ref={sec1ContentRef}
            className={`ab-fade-right flex flex-col justify-center ${sec1ContentVisible ? "ab-visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-2 text-sm font-medium text-[#15803d]">
              <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
              About Us
            </div>

            <h2 className="mb-5 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#111] sm:text-5xl">
              GA Nisars &amp; Associates
            </h2>

            <p className="mb-8 text-[1rem] leading-[1.85] text-[#6b7280] sm:text-[1.05rem]">
              GA Nisars and Associates is a dynamic and client-focused law firm
              based in Roorkee, Uttarakhand, specializing in Tax Consultancy and
              comprehensive Legal Services. We deliver practical,
              result-oriented solutions with a strong focus on trust,
              transparency, and timely service.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((item, i) => (
                <div
                  key={item.title}
                  className={`ab-feature feat-card rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-5 ${sec1ContentVisible ? "ab-visible" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <h3 className="mb-2 text-[15px] font-semibold text-[#111]">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.75] text-[#6b7280]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#16a34a] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-lg hover:shadow-green-200"
              >
                <i className="ri-phone-fill" /> Start Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#bbf7d0] bg-white px-7 text-sm font-medium text-[#15803d] transition-all hover:border-[#16a34a] hover:bg-[#f0fdf4]"
              >
                <i className="ri-arrow-right-long-line" /> View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="border-y border-[#f0f0f0] bg-[#f8fdf9] py-12">
        <div
          ref={statsRef}
          className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`ab-stat flex flex-col items-center text-center ${statsVisible ? "ab-visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="text-[2rem] font-bold leading-none tracking-tight text-[#16a34a] sm:text-[2.4rem]">
                {s.num}
              </span>
              <span className="mt-2 text-[13px] font-medium text-[#6b7280]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio Section ── */}
      <section
        ref={portfolioRef}
        className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className={`portfolio-text text-[48px] font-bold leading-none tracking-[-0.04em] text-[#111] sm:text-[72px] md:text-[96px] lg:text-[120px] ${portfolioVisible ? "ab-visible" : ""}`}
          >
            Our Portfolio
          </h2>

          <div className="mt-8 flex items-start gap-8 lg:mt-12 lg:gap-16">
            <div className="hidden h-px flex-1 translate-y-4 bg-[#e5e7eb] lg:block" />
            <p
              className={`portfolio-sub max-w-3xl text-[18px] leading-[1.75] text-[#6b7280] sm:text-[22px] lg:text-[26px] ${portfolioVisible ? "ab-visible" : ""}`}
            >
              GA Nisars and Associates is a client-focused law firm based in
              Roorkee, Uttarakhand, offering tax consultancy and comprehensive
              legal services. We deliver practical, result-oriented solutions
              with a strong focus on trust, transparency, timely service, and
              long-term client relationships.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#f0f0f0]" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4]">
              <i className="ri-building-line text-[18px] text-[#16a34a]" />
            </div>
            <div className="h-px flex-1 bg-[#f0f0f0]" />
          </div>
        </div>
      </section>

      {/* ── Section 2: Why Choose Us ── */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Content */}
          <div
            ref={sec2ContentRef}
            className={`ab-fade-left order-2 flex flex-col justify-center lg:order-1 ${sec2ContentVisible ? "ab-visible" : ""}`}
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-2 text-sm font-medium text-[#15803d]">
              <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
              Why Choose Us
            </div>

            <h2 className="mb-5 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#111] sm:text-5xl">
              Why Businesses Trust{" "}
              <span className="text-[#16a34a]">GA Nisars</span>
            </h2>

            <p className="mb-8 text-[1rem] leading-[1.85] text-[#6b7280] sm:text-[1.05rem]">
              We provide practical, result-oriented legal and tax solutions for
              individuals, businesses, startups, and corporate clients with a
              strong focus on trust, clarity, and timely delivery.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {chooseFeatures.map((item, i) => (
                <div
                  key={item.title}
                  className={`ab-feature feat-card rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-5 ${sec2ContentVisible ? "ab-visible" : ""}`}
                  style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
                >
                  <div className="feat-icon mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] text-[#16a34a]">
                    <i className={`${item.icon} text-[20px]`} />
                  </div>
                  <h3 className="mb-1.5 text-[15px] font-semibold text-[#111]">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.75] text-[#6b7280]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            ref={sec2ImgRef}
            className={`ab-fade-right order-1 lg:order-2 ${sec2ImgVisible ? "ab-visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative">
              <div className="about-img-wrap relative z-10 overflow-hidden rounded-3xl border border-[#bbf7d0] shadow-md">
                <img
                  src="/images/why-choose-us.jpg"
                  alt="Why choose us"
                  className="h-[280px] w-full object-cover object-center sm:h-[400px] lg:h-[560px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/55 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/90 px-4 py-3 sm:bottom-5 sm:left-5 sm:right-5 sm:px-5 sm:py-4"
                  style={{ backdropFilter: "blur(14px)" }}
                >
                  <div>
                    <p className="text-[13px] font-semibold text-[#111] sm:text-[15px]">
                      Trusted by 5,000+ Businesses
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#666] sm:text-xs">
                      Roorkee, Uttarakhand · Pan-India Services
                    </p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16a34a]">
                   <i className="ri-arrow-right-long-line text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <GetInTouch />
    </>
  );
};

export default About;
