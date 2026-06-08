import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import servicesData from "../../data/servicesData";

/* ─── Card ─────────────────────────────────────────────── */
const ServiceCard = ({ service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#1a3324] text-left transition-all duration-300 hover:-translate-y-1"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={service.image}
        alt={service.category}
        className="h-full w-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
        loading="lazy"
      />
  
      {/* Category pill on image */}
      <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-sm">
        <span className="text-[11px] font-medium tracking-wide text-white/80">
          {service.category}
        </span>
      </div>

      {/* Arrow button on image top-right */}
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/50 group-hover:bg-green-500/20">
        <ArrowUpRight
          size={14}
          className="text-white/60 transition-colors duration-300 group-hover:text-green-400"
        />
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-1 flex-col gap-3 p-5">
      {/* Thin green accent line */}
      <div className="h-px w-8 rounded-full bg-green-600/60 transition-all duration-300 group-hover:w-16 group-hover:bg-green-500" />

      <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-white">
        {service.category}
      </h3>
      <p className="line-clamp-2 text-[13px] leading-relaxed text-white/40">
        {service.tagline}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-3">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/30 transition-colors duration-200 group-hover:text-green-400">
          View details
          <ArrowUpRight
            size={12}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </div>

    {/* Bottom green glow on hover */}
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/0 to-transparent transition-all duration-300 group-hover:via-green-500/60" />
  </Link>
);

/* ─── Main Page ─────────────────────────────────────────── */
const Services = () => (
  <section className="flex min-h-screen w-full flex-col justify-center bg-[#071409] py-16 text-white sm:py-20 lg:py-28">
    <style>{`
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .hdr-anim   { animation: fade-up 0.6s ease both; }
      .hdr-anim-2 { animation: fade-up 0.6s 0.1s ease both; }
      .hdr-anim-3 { animation: fade-up 0.6s 0.18s ease both; }
    `}</style>

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Label pill */}
      <div className="hdr-anim mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-800/40 bg-green-900/20 px-4 py-1.5 text-sm font-medium tracking-wide text-green-400">
          <img
            src="/images/brand-logo.png"
            className="h-5 w-5 opacity-70"
            alt=""
          />
          Our Services
        </span>
      </div>

      {/* Header row */}
      <div className="hdr-anim-2 mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="hdr-anim-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default Services;
