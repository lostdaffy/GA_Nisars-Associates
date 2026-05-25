import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes float-orb {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(30px, -25px) scale(1.05); }
          66%  { transform: translate(-20px, 15px) scale(0.97); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes grid-pan {
          from { background-position: 0 0; }
          to   { background-position: 36px 36px; }
        }
        @keyframes orb-drift-1 {
          0%   { transform: translate(0px, 0px) scale(1); }
          25%  { transform: translate(60px, -40px) scale(1.08); }
          50%  { transform: translate(20px, -80px) scale(0.95); }
          75%  { transform: translate(-40px, -30px) scale(1.04); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes orb-drift-2 {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(-50px, 40px) scale(1.06); }
          66%  { transform: translate(30px, 60px) scale(0.94); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes orb-drift-3 {
          0%   { transform: translate(0px, 0px) scale(1); }
          40%  { transform: translate(40px, -30px) scale(1.1); }
          70%  { transform: translate(-20px, 20px) scale(0.96); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.4; }
          50%  { opacity: 0.7; }
          100% { opacity: 0.4; }
        }

        .hero-fade-up-1 { animation: fade-up 0.8s 0.10s ease both; }
        .hero-fade-up-2 { animation: fade-up 0.8s 0.20s ease both; }
        .hero-fade-up-3 { animation: fade-up 0.8s 0.35s ease both; }
        .hero-fade-up-4 { animation: fade-up 0.8s 0.50s ease both; }
        .hero-fade-up-5 { animation: fade-up 0.8s 0.65s ease both; }
        .hero-fade-up-6 { animation: fade-up 0.8s 0.75s ease both; }

        .hero-grid-lines {
          background-image:
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
          background-size: 36px 36px;
          animation: grid-pan 30s linear infinite;
        }

        .hero-orb-1 { animation: orb-drift-1 22s ease-in-out infinite; }
        .hero-orb-2 { animation: orb-drift-2 18s ease-in-out infinite; }
        .hero-orb-3 { animation: orb-drift-3 26s ease-in-out infinite; }
        .hero-orb-4 { animation: orb-drift-2 20s -8s ease-in-out infinite; }
        .hero-shimmer { animation: shimmer 4s ease-in-out infinite; }

        .hero-ca-1  { animation: spin-slow 30s linear infinite; }
        .hero-ca-2  { animation: spin-slow 22s linear infinite reverse; }

        .hero-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
        .hero-img-badge { animation: badge-float 3s ease-in-out infinite; }

        .hero-btn-primary {
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .hero-btn-primary:hover {
          background: #000 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
        }
        .hero-btn-primary:hover .hero-arrow {
          transform: translateX(3px);
        }
        .hero-arrow { transition: transform 0.2s; }

        .hero-btn-secondary {
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .hero-btn-secondary:hover {
          border-color: #111 !important;
          background: #f5f5f5 !important;
          transform: translateY(-2px);
        }

        .hero-img-frame {
          transition: box-shadow 0.3s;
        }
        .hero-img-frame:hover {
          box-shadow: 0 28px 80px rgba(0,0,0,0.14), 0 6px 20px rgba(0,0,0,0.08) !important;
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-gray-50">

        {/* ── Animated Background ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

          {/* Animated grid lines */}
          <div className="absolute inset-0 hero-grid-lines opacity-100" />

          {/* Large soft orbs — color blobs that drift slowly */}
          <div
            className="hero-orb-1 absolute rounded-full"
            style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)", top: "-15%", left: "-10%", }}
          />
          <div
            className="hero-orb-2 absolute rounded-full"
            style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(20,184,166,0.11) 0%, transparent 70%)", top: "20%", right: "-8%", }}
          />
          <div
            className="hero-orb-3 absolute rounded-full"
            style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(251,191,36,0.09) 0%, transparent 70%)", bottom: "-10%", left: "25%", }}
          />
          <div
            className="hero-orb-4 absolute rounded-full"
            style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)", bottom: "5%", right: "15%", }}
          />

          {/* Radial vignette to keep edges soft */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(249,250,251,0.6) 100%)",
            }}
          />

          {/* Spinning circles */}
          <div className="hero-ca-1 absolute rounded-full"
            style={{ width: 320, height: 320, top: -80, right: -80, border: "1.5px solid rgba(0,0,0,0.06)" }}
          />
          <div className="hero-ca-2 absolute rounded-full"
            style={{ width: 180, height: 180, bottom: 40, left: -40, border: "1.5px solid rgba(0,0,0,0.06)" }}
          />
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-15 pb-15">
            <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">

              {/* ── Left: Text Content ── */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                {/* Badge */}
                <div className="hero-fade-up-1 mb-6 inline-flex items-center gap-2 border border-black/10 bg-[#f5f5f5] rounded-full px-4 py-2 text-[14px] font-medium text-[#111]">
                  <span className="hero-pulse-dot inline-block h-[7px] w-[7px] rounded-full bg-[#111]" />
                  Trusted Business Services for Growth
                </div>

                {/* Heading */}
                <h1 className="hero-fade-up-2 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-[#111] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem]">
                  Start, Register &amp; Grow Your Business With Confidence
                </h1>

                {/* Description */}
                <p className="hero-fade-up-3 mt-5 max-w-[560px] text-[1rem] leading-[1.75] text-[#4b4b4b] sm:text-[1.05rem] lg:text-[1.1rem]">
                  We help startups, professionals, and businesses with{" "}
                  <strong className="font-semibold text-[#111]">
                    GST, company registration, MSME, trademarks, digital
                    signature, legal compliance, and consultancy services
                  </strong>{" "}
                  — all in one place.
                </p>

                {/* CTAs */}
                <div className="hero-fade-up-4 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <Link
                    to="/services"
                    className="hero-btn-primary inline-flex h-[50px] items-center gap-2 rounded-[8px] bg-[#1c1c1c] px-7 text-[1rem] font-semibold text-white"
                  >
                    <svg
                      className="hero-arrow"
                      width="18" height="18"
                      viewBox="0 0 24 24"
                      fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Explore Services
                  </Link>

                  <Link
                    to="/contact"
                    className="hero-btn-secondary inline-flex h-[50px] items-center gap-2 rounded-[8px] border-[1.5px] border-black/20 bg-transparent px-6 text-[1rem] font-medium text-[#1c1c1c]"
                  >
                    Talk to an Expert
                  </Link>
                </div>

                {/* Stats */}
                <div className="hero-fade-up-5 mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                  {[
                    { num: "5000+", label: "Businesses Served" },
                    { num: "98%",   label: "Client Satisfaction" },
                    { num: "10+",   label: "Years Experience" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-6">
                      {i > 0 && <div className="h-8 w-px bg-black/10" />}
                      <div className="flex flex-col">
                        <span className="text-[1.4rem] font-bold leading-none tracking-tight text-[#111]">
                          {stat.num}
                        </span>
                        <span className="mt-1 text-[0.75rem] text-[#4b4b4b]">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: Image ── */}
              <div className="hero-fade-up-6 flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <div
                    className="hero-img-frame relative overflow-hidden rounded-[26px] bg-white"
                    style={{
                      boxShadow: "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <img
                      src="/images/hero-img.png"
                      alt="Business services team"
                      className="w-full object-contain object-center"
                    />
                  </div>

                  {/* Corner accents */}
                  <div className="absolute right-0 top-0 z-10 h-[52px] w-[36%] rounded-bl-[26px]" />
                  <div className="absolute bottom-0 left-0 z-10 h-[52px] w-[36%] rounded-se-[26px]" />

                  {/* Floating verified badge */}
                  <div
                    className="hero-img-badge absolute -bottom-4 -right-4 z-20 flex items-center gap-2 rounded-[10px] bg-[#111] px-3 py-2 text-[0.75rem] font-semibold text-white"
                    style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.20)" }}
                  >
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-300" />
                    Verified &amp; Trusted
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;