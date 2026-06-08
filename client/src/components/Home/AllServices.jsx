import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import servicesData from "../../data/servicesData";
import useScrollReveal from "../../hooks/useScrollReveal";

const ServiceCard = ({ service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111113] text-left transition-all duration-300 hover:-translate-y-[3px] hover:border-white/[0.16]"
  >
    <div className="relative h-52 overflow-hidden">
      <img
        src={service.image}
        alt={service.category}
        className="h-full w-full object-cover brightness-[0.68] transition-transform duration-500 group-hover:scale-[1.05]"
        loading="lazy"
      />
    </div>
    <div className="flex flex-1 flex-col gap-2 px-5 py-5">
      <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-white">
        {service.category}
      </h3>
      <p className="line-clamp-2 text-[14px] leading-relaxed text-white/50">
        {service.tagline}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
        <span className="text-[14px] font-medium text-white/45 transition-colors duration-200 group-hover:text-white/75">
          View details
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.05] transition-all duration-200 group-hover:border-white/[0.18] group-hover:bg-white/[0.11]">
          <ArrowUpRight size={12} className="text-white/45 transition-colors duration-200 group-hover:text-white/70" />
        </div>
      </div>
    </div>
  </Link>
);

const AllServices = () => {
  const { ref: headRef, visible: headVisible } = useScrollReveal();
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <section className="w-full bg-[#0a0a0b] py-16 text-white sm:py-20 lg:py-28">
      <style>{`
        .as-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .as-fade.as-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .as-grid {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .as-grid.as-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headRef}
          className={`as-fade ${headVisible ? "as-visible" : ""}`}
        >
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[13px] font-medium tracking-wide text-white/50">
              <img src="/images/brand-logo.png" className="h-5 w-5 opacity-70" alt="" />
              Our Services
            </span>
          </div>

          <div className="mx-auto max-w-2xl text-center" style={{ transitionDelay: "0.1s" }}>
            <h2 className="text-[34px] font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[54px]">
              Your Needs, <span className="text-[#16a34a]">Our Expertise</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-white/40 sm:text-[17px]">
              Business registration, legal compliance, branding, and professional
              services — tap any card to explore all details.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`as-grid mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridVisible ? "as-visible" : ""}`}
          style={{ transitionDelay: "0.18s" }}
        >
          {servicesData.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
