import { ShieldCheck, Clock, FileSearch, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: ShieldCheck,
    title: "No Hidden Fees. Ever.",
    desc: "You pay what we quote. No surprise charges, no upselling mid-way. Transparent pricing from day one.",
  },
  {
    icon: Clock,
    title: "Done While Others Are Still Quoting",
    desc: "Most services wrapped up in 24–72 hrs. You get results — not follow-up emails asking for 'just one more document'.",
  },
  {
    icon: FileSearch,
    title: "We Do the Running Around",
    desc: "Paperwork, portals, follow-ups — all on us. You won't spend a single hour chasing government offices.",
  },
  {
    icon: HeadphonesIcon,
    title: "A Real Person. Not a Ticket Number.",
    desc: "Call or message anytime — you'll reach someone who actually knows your case, not a support bot reading from a script.",
  },
];

const services = [
  "GST Registration & Filing",
  "MSME / Udyam Registration",
  "Company Incorporation",
  "Trademark Registration",
  "Income Tax Returns",
  "Legal Documentation",
  "FSSAI / Shop Act License",
  "Import Export Code (IEC)",
];

const About = () => (
  <section className="w-full bg-white py-16 lg:py-24">
    <style>{`


      @keyframes fade-up {
        from { opacity: 0; transform: translateY(22px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .ab-anim-1 { animation: fade-up 0.65s 0.05s ease both; }
      .ab-anim-2 { animation: fade-up 0.65s 0.15s ease both; }
      .ab-anim-3 { animation: fade-up 0.65s 0.25s ease both; }
      .ab-anim-4 { animation: fade-up 0.65s 0.35s ease both; }
      .ab-anim-5 { animation: fade-up 0.65s 0.45s ease both; }

      .ab-pillar {
        transition: box-shadow 0.22s, transform 0.22s, background 0.22s;
      }
      .ab-pillar:hover {
        background: #f0f0f2;
        transform: translateY(-3px);
        box-shadow: 0 8px 28px rgba(0,0,0,0.07);
      }

      .ab-service-tag {
        transition: background 0.18s, border-color 0.18s, color 0.18s;
      }
      .ab-service-tag:hover {
        background: #111;
        border-color: #111;
        color: #fff;
      }

      .ab-img-wrap::before {
        content: '';
        position: absolute;
        inset: -10px;
        border-radius: 2rem;
        background: linear-gradient(135deg, #e8e8ec 0%, #f5f5f7 100%);
        z-index: 0;
      }
    `}</style>

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* Badge */}
      <div className="ab-anim-1 mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#111]">
          <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
          About Us
        </span>
      </div>

      {/* Heading */}
      <div className="ab-anim-2 mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#111] sm:text-5xl lg:text-6xl">
          Your Business Deserves{" "}
          <span className="text-black/25">Better Than This</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
          Most people waste days chasing CA offices, government portals, and
          confusing paperwork. We handle all of it — fast, correctly, and
          without the headache.
        </p>
      </div>

      {/* Main Grid */}
      <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left: Image + service tags */}
        <div className="ab-anim-3">
          {/* Image */}
          <div className="ab-img-wrap relative hidden lg:block">
            <div className="relative z-10 overflow-hidden rounded-3xl border border-black/[0.07] shadow-sm">
              <img
                src="/images/hero-img.jpg"
                alt="Business services team"
                className="h-[420px] w-full object-cover object-center"
              />
              {/* Overlay label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-5 py-4 backdrop-blur-md">
                <div>
                  <p className="text-lg font-semibold text-[#111]">One-Stop Business Hub</p>
                  <p className="text-xs text-[#666] mt-0.5">Registration · Compliance · Legal · Growth</p>
                </div>
                <div className="h-9 w-9 rounded-full bg-[#111] flex items-center justify-center shrink-0">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Corner cutouts */}
            <div className="absolute left-0 top-0 h-12 w-[30%] rounded-br-3xl bg-white z-20" />
            <div className="absolute bottom-0 right-0 h-12 w-[30%] rounded-tl-3xl bg-white z-20" />
          </div>

          {/* Service tags */}
          <div className="mt-8 lg:mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-4">
              Services We Provide
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="ab-service-tag cursor-default rounded-full border border-black/10 bg-[#f7f7f9] px-4 py-2 text-sm font-medium text-[#333]"
                >
                  {s}
                </span>
              ))}
              <span className="rounded-full border border-dashed border-black/15 px-4 py-2 text-sm text-[#999]">
                + many more
              </span>
            </div>
          </div>
        </div>

        {/* Right: Why Choose Us pillars + CTA */}
        <div className="ab-anim-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-5">
            What Makes Us Different
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="ab-pillar rounded-2xl border border-black/[0.07] bg-[#f7f7f9] p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white">
                  <Icon className="h-5 w-5 text-[#111]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111] mb-2">
                  {title}
                </h3>
                <p className="text-[0.925rem] leading-relaxed text-[#555]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <div className="ab-anim-5 mt-8 rounded-2xl border border-black/[0.06] bg-[#f9f9fb] px-6 py-5">
            <p className="text-sm leading-relaxed text-[#444]">
              <span className="font-semibold text-[#111]">Your business isn't a ticket in our queue.</span>
              {" "}Whether you're registering your first startup or filing annual compliance for an established firm — we treat your work with the same urgency we'd give our own.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#111] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              <i className="ri-arrow-right-long-fill text-base" />
              More About Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-black/10 bg-white px-7 text-sm font-medium text-[#111] transition-all hover:border-black/20 hover:bg-[#f5f5f5]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;