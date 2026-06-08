import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const faqs = [
  {
    q: "GST registration kab zaroori hai?",
    a: "Agar aapka annual turnover ₹20 lakhs se zyada hai (services ke liye) ya ₹40 lakhs se zyada (goods ke liye), toh GST registration mandatory hai. Inter-state business ke liye turnover limit nahi hai.",
  },
  {
    q: "Company registration mein kitna time lagta hai?",
    a: "Pvt Ltd company typically 7–10 working days mein register ho jaati hai. LLP 5–7 days mein. Documents complete hone ke baad process fast hota hai.",
  },
  {
    q: "Kya aap poore India mein services dete hain?",
    a: "Haan, hum pan-India services provide karte hain. GST, trademark, company registration — sabhi government portals online hain, isliye location koi barrier nahi hai.",
  },
  {
    q: "Charges kya hain? Koi hidden fees toh nahi?",
    a: "Bilkul nahi. Hum pehle ek clear quote dete hain jisme government fees aur our service charges dono include hote hain. Quote ke baad koi extra charge nahi.",
  },
  {
    q: "Trademark registration mein kitna time lagta hai?",
    a: "TM filing usi din ho jaati hai aur aapko TM symbol use karne ka hak mil jaata hai. Full registration certificate 18–24 months mein aata hai — yeh government process hai.",
  },
  {
    q: "Kya aap existing business ki compliance bhi handle karte hain?",
    a: "Haan — annual ROC filing, GST returns, ITR, MSME renewal, trademark renewal, aur sabhi ongoing compliance hum handle karte hain. Ek baar client, hamesha support.",
  },
];

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-200 ${open ? "border-[#bbf7d0] bg-[#f0fdf4]" : "border-[#f0f0f0] bg-white hover:border-[#e8fce8]"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[16px] font-medium text-[#111]">{faq.q}</span>
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${open ? "border-[#16a34a] bg-[#16a34a]" : "border-[#e5e7eb] bg-white"}`}>
          <i className={`ri-add-line text-[16px] transition-all duration-300 ${open ? "rotate-45 text-white" : "text-[#374151]"}`} />
        </div>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0">
          <p className="px-6 pb-5 text-[15px] leading-[1.85] text-[#6b7280]">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { ref: leftRef, visible: leftVisible } = useScrollReveal();
  const { ref: rightRef, visible: rightVisible } = useScrollReveal(0.05);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <style>{`
        .fq-left {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fq-left.fq-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .fq-right {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fq-right.fq-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fq-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fq-item.fq-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">

          {/* Left */}
          <div
            ref={leftRef}
            className={`fq-left lg:sticky lg:top-32 ${leftVisible ? "fq-visible" : ""}`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-2 text-[13px] font-medium text-[#15803d]">
              <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
              FAQ
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#111] sm:text-5xl lg:text-[48px]">
              Questions You{" "}
              <span className="text-black/20">Might Have</span>
            </h2>
            <p className="mt-5 text-[1rem] leading-[1.8] text-[#6b7280]">
              Can't find your answer here? Call us directly — we'll sort it out
              in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:1800 891 9866"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#16a34a] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-lg hover:shadow-green-200"
              >
                <i className="ri-phone-line text-[16px]" />
                Call Us Now
              </a>
              <a
                href="https://wa.me/918194000564"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#bbf7d0] bg-white px-7 text-sm font-medium text-[#15803d] transition-all hover:border-[#16a34a] hover:bg-[#f0fdf4]"
              >
                <i className="ri-whatsapp-line text-[16px]" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            ref={rightRef}
            className={`fq-right flex flex-col gap-3 ${rightVisible ? "fq-visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`fq-item ${rightVisible ? "fq-visible" : ""}`}
                style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
              >
                <FaqItem faq={faq} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
