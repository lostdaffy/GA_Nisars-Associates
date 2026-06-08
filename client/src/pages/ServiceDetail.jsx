import { useParams, Link, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import servicesData from "../data/servicesData";

/* ─── FAQ Item ── */
const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#f0f0f0]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-medium text-[#111] sm:text-[17px]">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#16a34a] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="text-[15px] leading-[1.85] text-[#6b7280] sm:text-[16px]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── ServiceDetail Page ── */
const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        @keyframes fade-up {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation: fade-up 0.6s 0.05s ease both; }
        .anim-2 { animation: fade-up 0.6s 0.15s ease both; }
        .anim-3 { animation: fade-up 0.6s 0.25s ease both; }
        .anim-4 { animation: fade-up 0.6s 0.35s ease both; }
        .anim-5 { animation: fade-up 0.6s 0.45s ease both; }

        .step-line::after {
          content: '';
          position: absolute;
          left: 19px;
          top: 44px;
          bottom: -24px;
          width: 1.5px;
          background: #f0f0f0;
        }
        .step-line:last-child::after { display: none; }

        .cta-btn { transition: background 0.2s, transform 0.2s, box-shadow 0.2s; }
        .cta-btn:hover { background: #15803d !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(22,163,74,0.30); }

        .item-card { transition: border-color 0.2s, box-shadow 0.2s; }
        .item-card:hover { border-color: #bbf7d0; box-shadow: 0 4px 16px rgba(22,163,74,0.08); }
      `}</style>

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden border-b border-[#e5e7eb]"
        style={{
          background: "#071409",
          backgroundImage: `
            linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      >
        {/* Soft orb */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="pt-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white/40 transition-colors hover:text-white/80"
            >
              <ArrowLeft size={14} />
              Back to Services
            </button>
          </div>

          <div className="flex flex-col gap-10 pb-14 pt-10 lg:flex-row lg:items-end lg:gap-20 lg:pb-16">
            {/* Left: Text */}
            <div className="flex-1">
              {/* Category pill */}
              <div className="anim-1 mb-5 inline-flex items-center gap-2 rounded-full border border-green-800/40 bg-green-900/20 px-4 py-1.5 text-[13px] font-medium text-green-400">
                <span>{service.emoji}</span>
                {service.category}
              </div>

              <h1 className="anim-2 text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.6rem] lg:text-[3.2rem]">
                {service.tagline}
              </h1>

              <p className="anim-3 mt-5 max-w-xl text-[16px] leading-[1.8] text-white/50 sm:text-[17px]">
                {service.desc}
              </p>

              {/* Trust row */}
              <div className="anim-4 mt-8 flex flex-wrap items-center gap-5">
                {[
                  "Free Consultation",
                  "No Hidden Charges",
                  "Fast Turnaround",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-900/40 border border-green-700/40">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-medium text-white/50">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="anim-4 w-full lg:w-[400px] xl:w-[460px]">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={service.image}
                  alt={service.category}
                  className="h-[220px] w-full object-cover brightness-75 sm:h-[260px] lg:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_320px] lg:gap-16">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-14">
            {/* Services Included */}
            <div className="anim-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16a34a]">
                What's Included
              </p>
              <h2 className="mb-6 text-[22px] font-semibold tracking-tight text-[#111] sm:text-[26px]">
                Services Included
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.items.map((item, i) => (
                  <div
                    key={i}
                    className="item-card rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4]">
                        <CheckCircle2 size={13} className="text-[#16a34a]" />
                      </div>
                      <div>
                        <p className="text-[15px] font-semibold text-[#111]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-[#6b7280]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="anim-4">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16a34a]">
                Step by Step
              </p>
              <h2 className="mb-8 text-[22px] font-semibold tracking-tight text-[#111] sm:text-[26px]">
                How It Works
              </h2>
              <div className="space-y-7">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="step-line relative flex items-start gap-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4] text-[13px] font-bold text-[#16a34a]">
                      {step.step}
                    </div>
                    <div className="pt-1.5">
                      <p className="text-[16px] font-semibold text-[#111]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-[#6b7280]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="anim-5">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16a34a]">
                Common Questions
              </p>
              <h2 className="mb-2 text-[22px] font-semibold tracking-tight text-[#111] sm:text-[26px]">
                Frequently Asked Questions
              </h2>
              <div className="mt-5">
                {service.faqs.map((faq, i) => (
                  <FaqItem key={i} faq={faq} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Sidebar ── */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-[#e5e7eb]">
              {/* Green header */}
              <div className="bg-[#16a34a] px-6 py-5">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-white/70">
                  Get Started
                </p>
                <h3 className="mt-1 text-[20px] font-bold leading-snug text-white">
                  {service.cta}
                </h3>
              </div>

              {/* Body */}
              <div className="bg-white p-6">
                <p className="text-[14px] leading-relaxed text-[#6b7280]">
                  Talk to our experts for a free consultation. Most work done in
                  24–72 hours with zero hidden charges.
                </p>
                <Link
                  to="tel:1800 891 9866"
                  className="cta-btn mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#16a34a] text-[15px] font-semibold text-white"
                >
                  <Phone size={17} />
                  Call Now
                </Link>

                <Link
                  to="https://wa.me/918194000564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#e5e7eb] bg-white text-[15px] font-medium text-[#374151] transition-colors hover:border-[#bbf7d0] hover:bg-[#f0fdf4] hover:text-[#15803d]"
                >
                  <MessageCircle size={17} />
                  WhatsApp Us
                </Link>

                {/* Trust points */}
                <div className="mt-6 space-y-2.5">
                  {[
                    "Free initial consultation",
                    "No hidden charges",
                    "Dedicated support",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2.5">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4]">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-[13px] font-medium text-[#374151]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related services */}
            <div className="mt-5 rounded-2xl border border-[#f0f0f0] bg-[#fafafa] p-5">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#999]">
                Other Services
              </p>
              <div className="flex flex-col gap-1">
                {servicesData
                  .filter((s) => s.slug !== slug)
                  .slice(0, 5)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-[#374151] transition-colors hover:bg-[#f0fdf4] hover:text-[#15803d]"
                    >
                      <span>
                        {s.emoji} {s.category}
                      </span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
