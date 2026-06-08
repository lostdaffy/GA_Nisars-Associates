import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.5); opacity: 0.6; }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes grid-pan {
          from { background-position: 0 0; }
          to   { background-position: 40px 40px; }
        }
        @keyframes orb-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(40px, -30px) scale(1.06); }
          66%       { transform: translate(-20px, 20px) scale(0.96); }
        }
        @keyframes orb-b {
          0%, 100% { transform: translate(0, 0); }
          50%       { transform: translate(-35px, 30px); }
        }
        @keyframes shimmer-line {
          0%   { opacity: 0; transform: translateX(-100%); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%); }
        }

        .h-fade-1 { animation: fade-up 0.7s 0.10s ease both; }
        .h-fade-2 { animation: fade-up 0.7s 0.22s ease both; }
        .h-fade-3 { animation: fade-up 0.7s 0.36s ease both; }
        .h-fade-4 { animation: fade-up 0.7s 0.50s ease both; }
        .h-fade-5 { animation: fade-up 0.7s 0.64s ease both; }
        .h-fade-6 { animation: fade-up 0.7s 0.50s ease both; }

        .h-pulse-dot   { animation: pulse-dot 2s ease-in-out infinite; }
        .h-badge-float { animation: badge-float 3s ease-in-out infinite; }
        .h-spin-1      { animation: spin-slow 28s linear infinite; }
        .h-spin-2      { animation: spin-slow 18s linear infinite reverse; }
        .h-spin-3      { animation: spin-slow 40s linear infinite; }
        .h-orb-a       { animation: orb-a 20s ease-in-out infinite; }
        .h-orb-b       { animation: orb-b 15s ease-in-out infinite; }

        .h-grid-lines {
          background-image:
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-pan 25s linear infinite;
        }

        .h-shimmer::after {
          content: '';
          position: absolute;
          inset-y: 0;
          width: 20px;
          background: rgba(255,255,255,0.7);
          animation: shimmer-line 3s ease-in-out infinite;
        }

        .h-btn-primary {
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .h-btn-primary:hover {
          background: #15803d !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(22,163,74,0.35);
        }
        .h-btn-secondary {
          transition: border-color 0.2s, background 0.2s, color 0.2s, transform 0.2s;
        }
        .h-btn-secondary:hover {
          border-color: #16a34a !important;
          background: #f0fdf4 !important;
          color: #16a34a !important;
          transform: translateY(-2px);
        }
        .h-float-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .h-float-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(22,163,74,0.18) !important;
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-[#f8fdf9]">
        {/* ── Background ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="h-grid-lines absolute inset-0" />

          <div
            className="h-orb-a absolute rounded-full"
            style={{
              width: 560,
              height: 560,
              background:
                "radial-gradient(circle, rgba(22,163,74,0.14) 0%, transparent 68%)",
              top: "-15%",
              left: "-8%",
            }}
          />
          <div
            className="h-orb-b absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              background:
                "radial-gradient(circle, rgba(134,239,172,0.13) 0%, transparent 68%)",
              bottom: "-5%",
              left: "30%",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 380,
              height: 380,
              background:
                "radial-gradient(circle, rgba(20,184,100,0.09) 0%, transparent 68%)",
              top: "15%",
              right: "-5%",
            }}
          />

          <div
            className="h-spin-1 absolute rounded-full"
            style={{
              width: 380,
              height: 380,
              top: -60,
              right: -60,
              border: "1px solid rgba(22,163,74,0.08)",
            }}
          />
          <div
            className="h-spin-2 absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              bottom: 30,
              left: -50,
              border: "1px solid rgba(22,163,74,0.07)",
            }}
          />
          <div
            className="h-spin-3 absolute rounded-full"
            style={{
              width: 160,
              height: 160,
              top: "40%",
              right: "30%",
              border: "1px dashed rgba(22,163,74,0.08)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 35%, rgba(248,253,249,0.55) 100%)",
            }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-0">
            {/* ── Left ── */}
            <div className="flex flex-col items-center pb-16 pt-16 text-center lg:items-start lg:text-left">
              {/* Badge */}
              <div className="h-fade-1 mb-6 inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-[7px] text-[13px] font-medium text-[#15803d]">
                <span className="h-pulse-dot inline-block h-[7px] w-[7px] rounded-full bg-[#16a34a]" />
                Trusted Business Services for Growth
              </div>

              {/* Heading */}
              <h1 className="h-fade-2 text-[1.85rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0d1f14] sm:text-[2.4rem] lg:text-[2.9rem] xl:text-[3.2rem]">
                Start, Register &amp; Grow
                <br className="hidden sm:block" /> Your Business{" "}
                <span className="text-[#16a34a]">With Confidence</span>
              </h1>

              {/* Accent bar */}
              <div className="h-fade-2 relative mt-5 h-[3px] w-[52px] overflow-hidden rounded-full bg-[#16a34a] lg:mx-0">
                <div className="h-shimmer absolute inset-0" />
              </div>

              {/* Description */}
              <p className="h-fade-3 mt-5 max-w-[500px] text-[0.975rem] leading-[1.78] text-[#374151] sm:text-[1.05rem]">
                We help startups, professionals, and businesses with{" "}
                <strong className="font-semibold text-[#15803d]">
                  GST, company registration, MSME, trademarks, digital
                  signature, legal compliance, and consultancy services
                </strong>{" "}
                — all in one place.
              </p>

              {/* CTAs */}
              <div className="h-fade-4 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  to="/services"
                  className="h-btn-primary inline-flex h-[50px] items-center gap-2 rounded-[10px] bg-[#16a34a] px-7 text-[0.95rem] font-semibold text-white"
                >
                 <i className="ri-arrow-right-long-line"></i>
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="h-btn-secondary inline-flex h-[50px] items-center gap-2 rounded-[10px] border-[1.5px] border-black/20 bg-transparent px-6 text-[0.95rem] font-medium text-[#1c1c1c]"
                >
                  <i className="ri-customer-service-2-line"></i> Talk to an Expert
                </Link>
              </div>

              {/* Trust Row */}
              <div className="h-fade-5 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                {[
                  {
                    label: "5,000+ Businesses Served",
                    icon: (
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    ),
                  },
                  {
                    label: "24–72 hr Turnaround",
                    icon: (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </>
                    ),
                  },
                  {
                    label: "No Hidden Charges",
                    icon: (
                      <>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                    <span className="text-[13px] font-medium text-[#374151]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Image ── */}
            <div className="h-fade-6 relative flex justify-center lg:justify-end lg:overflow-visible">
              {/* Ground glow */}
              <div
                className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
                style={{
                  width: "85%",
                  height: "70%",
                  background:
                    "linear-gradient(to top, #dcfce7 0%, rgba(220,252,231,0.55) 50%, transparent 100%)",
                  borderRadius: "50% 50% 0 0",
                }}
              />

              {/* Float card — top left */}
              <div
                className="h-float-card absolute left-0 top-[18%] z-20 min-w-[158px] rounded-[14px] border border-[#bbf7d0] bg-white p-3"
                style={{ boxShadow: "0 4px 20px rgba(22,163,74,0.12)" }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#f0fdf4]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#16a34a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-semibold text-[#15803d]">
                    GST Filing
                  </span>
                </div>
                <span className="text-[11px] text-[#6b7280]">
                  Completed in 24hrs
                </span>
              </div>

              {/* Float badge — top right */}
              <div
                className="h-badge-float absolute right-4 top-[6%] z-20 flex items-center gap-2 rounded-[12px] bg-[#16a34a] px-3.5 py-2.5"
                style={{ boxShadow: "0 8px 24px rgba(22,163,74,0.38)" }}
              >
                <span className="inline-block h-[6px] w-[6px] rounded-full bg-white" />
                <span className="text-[12px] font-semibold text-white">
                  Verified &amp; Trusted
                </span>
              </div>

              {/* Float card — bottom right */}
              <div
                className="h-float-card absolute bottom-[22%] right-0 z-20 rounded-[14px] border border-[#e5e7eb] bg-white px-3.5 py-2.5"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
              >
                <div className="mb-1 text-[11px] text-[#6b7280]">
                  Client Satisfaction
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[17px] font-extrabold text-[#16a34a]">
                    98%
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="#f59e0b"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Girl image */}
              <img
                src="/images/hero-imgs.png"
                alt="Business professional"
                className="relative z-10 w-[95%] max-w-[540px] object-contain object-bottom lg:w-[110%] lg:max-w-full"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(22,163,74,0.18))",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
