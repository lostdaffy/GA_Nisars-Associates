import useScrollReveal from "../../hooks/useScrollReveal";

const clients = [
  "Tata Consultancy",
  "Infosys Ltd",
  "Reliance Industries",
  "HDFC Bank",
  "Wipro Ltd",
  "Bajaj Finance",
  "Mahindra Group",
  "Adani Enterprises",
];

const ClientsStrip = () => {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section className="w-full overflow-hidden border-y border-[#e8fce8] bg-[#f8fdf9] py-7">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .cs-fade {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .cs-fade.cs-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Label */}
      <div
        ref={ref}
        className={`cs-fade mb-6 flex items-center justify-center gap-4 px-4 ${visible ? "cs-visible" : ""}`}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#bbf7d0]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16a34a]">
          Trusted by Businesses Across India
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#bbf7d0]" />
      </div>

      {/* Marquee with fade edges */}
      <div
        className={`cs-fade relative ${visible ? "cs-visible" : ""}`}
        style={{ transitionDelay: "0.12s" }}
      >
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20"
          style={{ background: "linear-gradient(to right, #f8fdf9, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20"
          style={{ background: "linear-gradient(to left, #f8fdf9, transparent)" }}
        />

        <div className="marquee-track flex w-max items-center gap-4">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex min-w-[170px] items-center justify-center gap-2.5 rounded-xl border border-[#e8fce8] bg-white px-5 py-2.5"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#16a34a] opacity-50" />
              <span className="text-[13px] font-semibold text-[#374151]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsStrip;