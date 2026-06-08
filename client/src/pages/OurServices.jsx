import React from "react";
import PageHero from "../components/common/PageHero";
import { Link } from "react-router-dom";
import GetInTouch from "../components/common/GetInTouch";
import AllServices from "../components/Home/AllServices";
import useScrollReveal from "../hooks/useScrollReveal";

const features = [
  { icon: "ri-government-line", title: "GST Services" },
  { icon: "ri-file-text-line", title: "Income Tax" },
  { icon: "ri-building-2-line", title: "Company Registration" },
  { icon: "ri-scales-3-line", title: "Legal Services" },
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
  {
    title: "Transparent Pricing",
    desc: "No surprise charges — you get a clear quote upfront with government fees and service charges included.",
  },
];

const OurServices = () => {
  const { ref: sec1ImgRef, visible: sec1ImgVisible } = useScrollReveal();
  const { ref: sec1ContentRef, visible: sec1ContentVisible } = useScrollReveal();
  const { ref: portfolioRef, visible: portfolioVisible } = useScrollReveal(0.1);
  const { ref: splitImgRef, visible: splitImgVisible } = useScrollReveal();
  const { ref: splitContentRef, visible: splitContentVisible } = useScrollReveal();

  return (
    <>
      <style>{`
        .os-fade-left {
          opacity: 0;
          transform: translateX(-36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .os-fade-left.os-visible { opacity: 1; transform: translateX(0); }

        .os-fade-right {
          opacity: 0;
          transform: translateX(36px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .os-fade-right.os-visible { opacity: 1; transform: translateX(0); }

        .os-fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .os-fade-up.os-visible { opacity: 1; transform: translateY(0); }

        .os-feat {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .os-feat.os-visible { opacity: 1; transform: translateY(0); }

        .os-portfolio-h {
          opacity: 0;
          transform: translateY(44px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .os-portfolio-h.os-visible { opacity: 1; transform: translateY(0); }

        .os-portfolio-p {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.18s;
        }
        .os-portfolio-p.os-visible { opacity: 1; transform: translateY(0); }

        .os-benefit {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .os-benefit.os-visible { opacity: 1; transform: translateY(0); }

        .feat-card-hover {
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .feat-card-hover:hover {
          border-color: #bbf7d0;
          background: #f0fdf4;
          transform: translateY(-2px);
        }
        .feat-card-hover:hover .feat-icon-box {
          background: #16a34a;
          border-color: #15803d;
        }
        .feat-card-hover:hover .feat-icon-box i {
          color: white;
        }
        .feat-icon-box {
          transition: background 0.2s, border-color 0.2s;
        }
      `}</style>

      <PageHero
        title="Our Services & Expertise"
        des="Trusted tax, legal, and compliance solutions."
      />

      {/* ── Section 1: Intro ── */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Left: Image + Stats */}
            <div
              ref={sec1ImgRef}
              className={`os-fade-left hidden flex-col gap-6 lg:flex ${sec1ImgVisible ? "os-visible" : ""}`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#e5e7eb] shadow-sm">
                <img
                  src="/images/handshake.jpg"
                  alt="Professional business services team"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Stats grid */}
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-md"
                    >
                      <p className="text-[18px] font-bold leading-none text-white">
                        {s.value}
                      </p>
                      <p className="mt-1 text-[11px] text-white/70">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div
              ref={sec1ContentRef}
              className={`os-fade-right flex flex-col justify-center ${sec1ContentVisible ? "os-visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-2 text-sm font-medium text-[#15803d]">
                <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
                Expert Services
              </div>

              <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#111] sm:text-5xl">
                Everything Your Business{" "}
                <span className="text-[#16a34a]">Legally Needs</span>
              </h2>

              <p className="mt-5 text-[1rem] leading-[1.85] text-[#6b7280] sm:text-[1.05rem]">
                From day-one registration to annual compliance — we handle every
                legal and tax requirement so you can focus on growing your business.
              </p>

              {/* Feature tiles */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((item, i) => (
                  <div
                    key={item.title}
                    className={`os-feat feat-card-hover flex items-center gap-3 rounded-2xl border border-[#f0f0f0] bg-[#fafafa] px-4 py-4 ${sec1ContentVisible ? "os-visible" : ""}`}
                    style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
                  >
                    <div className="feat-icon-box flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#bbf7d0] bg-[#f0fdf4]">
                      <i className={`${item.icon} text-[18px] text-[#16a34a]`} />
                    </div>
                    <span className="text-[14.5px] font-semibold text-[#111]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#16a34a] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-lg hover:shadow-green-200"
                >
                  <i className="ri-phone-fill" /> Free Consultation
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#bbf7d0] bg-white px-7 text-sm font-medium text-[#15803d] transition-all hover:border-[#16a34a] hover:bg-[#f0fdf4]"
                >
                  <i className="ri-whatsapp-line" /> WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Services Grid ── */}
      <AllServices />

      {/* ── Portfolio Text ── */}
      <section
        ref={portfolioRef}
        className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className={`os-portfolio-h text-[48px] font-bold leading-none tracking-[-0.04em] text-[#111] sm:text-[72px] md:text-[96px] lg:text-[120px] ${portfolioVisible ? "os-visible" : ""}`}
          >
            Our Services
          </h2>

          <div className="mt-8 flex items-start gap-8 lg:mt-12 lg:gap-16">
            <div className="hidden h-px flex-1 translate-y-4 bg-[#e5e7eb] lg:block" />
            <p
              className={`os-portfolio-p max-w-3xl text-[18px] leading-[1.75] text-[#6b7280] sm:text-[22px] lg:text-[26px] ${portfolioVisible ? "os-visible" : ""}`}
            >
              GA Nisars and Associates provides expert GST, income tax, legal
              advisory, company registration, drafting, compliance, and litigation
              support services in Roorkee, Uttarakhand, delivering practical
              solutions with trust, transparency, and timely execution.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#f0f0f0]" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4]">
              <i className="ri-scales-3-line text-[18px] text-[#16a34a]" />
            </div>
            <div className="h-px flex-1 bg-[#f0f0f0]" />
          </div>
        </div>
      </section>

      {/* ── Split Section: Why Choose ── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Image */}
          <div
            ref={splitImgRef}
            className={`os-fade-left ${splitImgVisible ? "os-visible" : ""}`}
          >
            <img
              src="/images/contact-girl.jpg"
              alt="Professional consultation"
              className="h-[360px] w-full object-cover sm:h-[480px] lg:h-full lg:min-h-[700px]"
            />
          </div>

          {/* Content */}
          <div
            ref={splitContentRef}
            className={`os-fade-right bg-[#071409] px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20 xl:px-16 ${splitContentVisible ? "os-visible" : ""}`}
            style={{ transitionDelay: "0.12s" }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-800/40 bg-green-900/20 px-4 py-2 text-[13px] font-medium text-green-400">
              <img src="/images/brand-logo.png" className="h-5 w-5 opacity-70" alt="" />
              Why Choose Us
            </div>

            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-5xl lg:text-[52px]">
              Why Choose Our{" "}
              <span className="text-green-400/70">Services</span>
            </h2>

            <p className="mt-5 text-[1rem] leading-[1.85] text-white/50 sm:text-[1.05rem]">
              Get dependable legal and taxation support with practical solutions,
              timely execution, and services tailored to your business needs.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-0">
              {benefits.map((item, i) => (
                <div
                  key={item.title}
                  className={`os-benefit ${splitContentVisible ? "os-visible" : ""} ${i !== 0 ? "border-t border-white/[0.08] pt-8 mt-8" : ""}`}
                  style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green-700/40 bg-green-900/30">
                      <i className="ri-checkbox-circle-line text-[15px] text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-[1.8] text-white/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#16a34a] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-lg hover:shadow-green-900/50"
              >
                <i className="ri-phone-line" /> Call Now
              </Link>
              <a
                href="https://wa.me/918194000564"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <i className="ri-whatsapp-line" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;