import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import servicesData from "../../data/servicesData";
import useScrollReveal from "../../hooks/useScrollReveal";

const ServiceCard = ({ service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#1a3324] text-left transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={service.image}
        alt={service.category}
        className="h-full w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
        loading="lazy"
      />
      <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-sm">
        <span className="text-[11px] font-medium tracking-wide text-white/80">
          {service.category}
        </span>
      </div>
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/50 group-hover:bg-green-500/20">
        <ArrowUpRight size={14} className="text-white/60 transition-colors duration-300 group-hover:text-green-400" />
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="h-px w-8 rounded-full bg-green-600/60 transition-all duration-300 group-hover:w-16 group-hover:bg-green-500" />
      <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-white">
        {service.category}
      </h3>
      <p className="line-clamp-2 text-[13px] leading-relaxed text-white/40">
        {service.tagline}
      </p>
      <div className="mt-auto pt-3">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/30 transition-colors duration-200 group-hover:text-green-400">
          View details
          <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/0 to-transparent transition-all duration-300 group-hover:via-green-500/60" />
  </Link>
);

const Services = () => {
  const { ref: pillRef, visible: pillVisible } = useScrollReveal();
  const { ref: headRef, visible: headVisible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1);

  return (
    <section className="flex min-h-screen w-full flex-col justify-center bg-[#071409] py-16 text-white sm:py-20 lg:py-28">
      <style>{`
        .svc-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .svc-fade.svc-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-card-wrap {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .svc-card-wrap.svc-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label pill */}
        <div
          ref={pillRef}
          className={`svc-fade mb-6 flex justify-center ${pillVisible ? "svc-visible" : ""}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-800/40 bg-green-900/20 px-4 py-1.5 text-sm font-medium tracking-wide text-green-400">
            <img src="/images/brand-logo.png" className="h-5 w-5 opacity-70" alt="" />
            Our Services
          </span>
        </div>

        {/* Header */}
        <div
          ref={headRef}
          className={`svc-fade mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between ${headVisible ? "svc-visible" : ""}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <div>
            <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-5xl lg:text-[54px]">
              Your Needs, <span className="text-green-600/60">Our Expertise</span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
              Business registration, legal compliance, branding, and professional
              services — tap any card to explore all details.
            </p>
          </div>
          <div className="hidden shrink-0 lg:flex">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 rounded-full border border-green-800/30 bg-green-900/20 px-6 py-3 text-sm font-medium text-green-400 transition-all duration-200 hover:border-green-600/50 hover:bg-green-800/30 hover:text-green-300"
            >
              View All Services
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`svc-card-wrap grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${gridVisible ? "svc-visible" : ""}`}
          style={{ transitionDelay: "0.18s" }}
        >
          {servicesData.slice(0, 4).map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-green-800/30 bg-green-900/15 px-6 py-3 text-base font-medium text-green-400 transition-all duration-200 hover:border-green-600/40 hover:bg-green-800/25 hover:text-green-300"
          >
            View All Services
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
