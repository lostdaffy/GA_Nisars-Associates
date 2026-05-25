import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import servicesData from "../../data/servicesData";

/* ─── Card ─────────────────────────────────────────────── */
const ServiceCard = ({ service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111113] text-left transition-all duration-300 hover:-translate-y-[3px] hover:border-white/[0.16]"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={service.image}
        alt={service.category}
        className="h-full w-full object-cover brightness-[0.68] transition-transform duration-500 group-hover:scale-[1.05]"
        loading="lazy"
      />
    </div>

    {/* Body */}
    <div className="flex flex-1 flex-col gap-2 px-5 py-5">
      <h3 className="text-lg font-semibold leading-snug tracking-[-0.01em] text-white">
        {service.category}
      </h3>
      <p className="line-clamp-2 text-sm leading-relaxed text-white/50">
        {service.tagline}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-sm font-medium text-white/45 transition-colors duration-200 group-hover:text-white/75">
          View details
        </span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.05] transition-all duration-200 group-hover:border-white/[0.18] group-hover:bg-white/[0.11]">
          <ArrowUpRight
            size={14}
            className="text-white/45 transition-colors duration-200 group-hover:text-white/70"
          />
        </div>
      </div>
    </div>
  </Link>
);

/* ─── Main Page ─────────────────────────────────────────── */
const Services = () => (
  <section className="flex min-h-screen w-full flex-col justify-center bg-[#0a0a0b] py-16 text-white sm:py-20 lg:py-28">
    <style>{`
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .hdr-anim  { animation: fade-up 0.6s ease both; }
      .hdr-anim-2 { animation: fade-up 0.6s 0.1s ease both; }
      .hdr-anim-3 { animation: fade-up 0.6s 0.18s ease both; }
    `}</style>

    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Label pill */}
      <div className="hdr-anim mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-sm font-medium tracking-wide text-white/50">
          <img
            src="/images/brand-logo.png"
            className="h-5 w-5 opacity-70"
            alt=""
          />
          Our Services
        </span>
      </div>

      {/* ── Header row: heading left, button right ── */}
      <div className="hdr-anim-2 mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        {/* Left: heading + subtext */}
        <div>
          <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-5xl lg:text-[54px]">
            Your Needs, <span className="text-white/30">Our Expertise</span>
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg">
            Business registration, legal compliance, branding, and professional
            services — tap any card to explore all details.
          </p>
        </div>

        {/* Right: button — desktop only */}
        <div className="hidden shrink-0 lg:flex">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-medium text-white/70 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.12] hover:text-white"
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
      <div className="hdr-anim-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.slice(0, 4).map((svc) => (
          <ServiceCard key={svc.slug} service={svc} />
        ))}
      </div>

      {/* Mobile: button below cards */}
      <div className="mt-8 flex justify-center lg:hidden">
        <Link
          to="/services"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-base font-medium text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.09] hover:text-white/90"
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
