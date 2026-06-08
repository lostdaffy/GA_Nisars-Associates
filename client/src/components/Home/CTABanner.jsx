import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";

const CTABanner = () => {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal();

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20"
      style={{
        background: "#071409",
        backgroundImage: `
          linear-gradient(rgba(22,163,74,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(22,163,74,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px",
      }}
    >
      <style>{`
        .cta-left {
          opacity: 0;
          transform: translateX(-36px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cta-left.cta-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .cta-right {
          opacity: 0;
          transform: translateX(36px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cta-right.cta-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* Orbs */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.15) 0%, transparent 70%)", transform: "translate(-40%, -40%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 70%)", transform: "translate(40%, 40%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

          {/* Left */}
          <div
            ref={leftRef}
            className={`cta-left max-w-2xl ${leftVisible ? "cta-visible" : ""}`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-800/40 bg-green-900/20 px-4 py-1.5 text-[13px] font-medium text-green-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              Ready to Get Started?
            </div>
            <h2 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.6rem] lg:text-[3rem]">
              Register Your Business Today.{" "}
              <span className="text-green-400">We Handle the Rest.</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-[1.8] text-white/50 sm:text-[1.05rem]">
              From GST to trademark, company registration to legal compliance —
              one call is all it takes. Free consultation, transparent pricing,
              fast turnaround.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              {["Free Consultation", "No Hidden Charges", "24–72 hr Turnaround"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-green-700/40 bg-green-900/40">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-medium text-white/50">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div
            ref={rightRef}
            className={`cta-right w-full max-w-sm shrink-0 ${rightVisible ? "cta-visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-[13px] font-medium text-white/50">
                Talk to an expert — free of cost
              </p>
              <p className="mt-1 text-[22px] font-bold text-white">
                1800 891 9866
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:1800 891 9866"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#16a34a] text-[15px] font-semibold text-white transition-all hover:bg-[#15803d] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900/50"
                >
                  <i className="ri-phone-line text-[17px]" />
                  Call Now — It's Free
                </a>

                <a
                  href="https://wa.me/918194000564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-[15px] font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <i className="ri-whatsapp-line text-[17px]" />
                  WhatsApp Us
                </a>

                <Link
                  to="/contact"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-transparent text-[15px] font-medium text-white/60 transition-all hover:border-white/20 hover:text-white/80"
                >
                  Send a Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;
