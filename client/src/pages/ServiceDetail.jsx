import { useParams, Link, useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import servicesData from "../data/servicesData";

/* ─── FAQ Item ──────────────────────────────────────────── */
const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[18px] font-medium text-gray-900 sm:text-[19px]">
          {faq.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="text-[16px] leading-[1.8] text-gray-500 sm:text-[17px]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── ServiceDetail Page ────────────────────────────────── */
const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        @keyframes fade-up {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation: fade-up 0.6s 0.05s ease both; }
        .anim-2 { animation: fade-up 0.6s 0.15s ease both; }
        .anim-3 { animation: fade-up 0.6s 0.25s ease both; }
        .anim-4 { animation: fade-up 0.6s 0.35s ease both; }
        .anim-5 { animation: fade-up 0.6s 0.45s ease both; }

        .item-card { transition: border-color 0.2s, background 0.2s; }
        .item-card:hover { border-color: rgba(0,0,0,0.15); background: rgba(0,0,0,0.04); }

        .step-line::after {
          content: '';
          position: absolute;
          left: 18px;
          top: 40px;
          bottom: -24px;
          width: 1px;
          background: rgba(0,0,0,0.1);
        }
        .step-line:last-child::after { display: none; }

        .cta-btn { transition: background 0.2s, transform 0.2s; }
        .cta-btn:hover { background: #1a1a1a; transform: translateY(-2px); }

        .hero-pattern {
          background-color: #f8f9fb;
          background-image:
            linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        .breadcrumb-link { transition: color 0.15s; }
        .breadcrumb-link:hover { color: #111; }

        .service-image {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          display: block;
        }

        @media (max-width: 640px) {
          .service-image { height: 240px; }
        }
      `}</style>

      {/* ── Hero Banner ── */}
      <div className="hero-pattern border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="flex flex-col gap-8 py-12 sm:py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
            {/* Left: Text */}
            <div className="flex-1">
              <h1 className="anim-1 text-[32px] font-bold leading-[1.2] tracking-tight text-gray-900 sm:text-[42px] lg:text-[50px]">
                {service.category}
                <span className="block text-gray-400 font-normal text-[22px] sm:text-[28px] lg:text-[32px] mt-2">
                  — done right.
                </span>
              </h1>

              <p className="anim-2 mt-5 text-[17px] leading-[1.75] text-gray-500 sm:text-[18px] max-w-xl">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Left Column */}
          <div>
            {/* Description */}
            <div className="anim-2">
              <p className="text-[17px] leading-[1.85] text-gray-600 sm:text-[19px]">
                {service.desc}
              </p>
            </div>

            {/* ── Service Image ── */}
            <div className="anim-2 mt-8">
              <img
                src={service.image}
                alt={`${service.category} service`}
                className="service-image"
              />
              <p className="mt-3 text-[13px] text-gray-400 text-center">
                {service.emoji} {service.category} — Professional service by our
                expert team
              </p>
            </div>

            {/* Services Included */}
            <div className="anim-3 mt-12">
              <h2 className="mb-5 text-[24px] font-semibold tracking-tight text-gray-900 sm:text-[28px]">
                Services Included
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {service.items.map((item, i) => (
                  <div
                    key={i}
                    className="item-card rounded-2xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-gray-400"
                      />
                      <div>
                        <p className="text-[16px] font-semibold text-gray-900 sm:text-[17px]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="anim-4 mt-12">
              <h2 className="mb-6 text-[24px] font-semibold tracking-tight text-gray-900 sm:text-[28px]">
                How It Works
              </h2>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="step-line relative flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-[15px] font-semibold text-gray-600">
                      {step.step}
                    </div>
                    <div className="pt-1">
                      <p className="text-[17px] font-semibold text-gray-900">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[15px] leading-relaxed text-gray-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="anim-5 mt-12">
              <h2 className="mb-2 text-[24px] font-semibold tracking-tight text-gray-900 sm:text-[28px]">
                Frequently Asked Questions
              </h2>
              <div className="mt-4">
                {service.faqs.map((faq, i) => (
                  <FaqItem key={i} faq={faq} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:sticky lg:top-40 lg:self-start">
            {/* CTA Card */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-[14px] font-medium uppercase tracking-widest text-gray-400">
                Get Started
              </p>
              <h3 className="mt-2 text-[22px] font-bold leading-snug text-gray-900">
                {service.cta}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                Talk to our experts for a free consultation and get your work
                done quickly.
              </p>

              <a
                href="tel:+919999999999"
                className="cta-btn mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black text-[16px] font-semibold text-white"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-transparent text-[16px] font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-100"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

              <p className="mt-4 text-center text-[13px] text-gray-400">
                Free consultation · No hidden charges
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
