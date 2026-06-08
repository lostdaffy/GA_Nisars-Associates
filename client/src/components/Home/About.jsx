import { Link } from "react-router-dom";

const highlights = [
  "10+ Years of Industry Experience",
  "Pan-India Service Coverage",
  "Certified & Qualified Professionals",
  "End-to-End Compliance Support",
  "Transparent Pricing, No Surprises",
  "Fast Turnaround — Most Work Done in 24–72 hrs",
];

const About = () => (
  <section className="w-full bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Badge */}
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-2 text-sm font-medium text-[#15803d]">
          <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
          About Us
        </span>
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#111] sm:text-5xl lg:text-6xl">
          Your Business Deserves{" "}
          <span className="text-[#16a34a]">Better Than This</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
          Most people waste days chasing CA offices, government portals, and
          confusing paperwork. We handle all of it — fast, correctly, and
          without the headache.
        </p>
      </div>

      {/* Main Grid */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* ── Left: Image ── */}
        <div className="overflow-hidden rounded-3xl border border-[#e5e7eb] shadow-sm">
          <div className="relative">
            <img
              src="/images/about-img.jpg"
              alt="Business services team"
              className="h-[260px] w-full object-cover object-center sm:h-[360px] lg:h-[560px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
            <div
              className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/90 px-4 py-3 sm:bottom-5 sm:left-5 sm:right-5 sm:px-5 sm:py-4"
              style={{ backdropFilter: "blur(14px)" }}
            >
              <div>
                <p className="text-[13px] font-semibold text-[#111] sm:text-[15px]">
                  One-Stop Business Hub
                </p>
                <p className="mt-0.5 text-[11px] text-[#666] sm:text-xs">
                  Registration · Compliance · Legal · Growth
                </p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16a34a] sm:h-9 sm:w-9">
                <svg
                  className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="flex flex-col gap-7">
          {/* Who We Are */}
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#16a34a]">
              Who We Are
            </p>
            <h3 className="mb-3 text-2xl font-semibold text-[#111] sm:text-3xl">
              We Work Like It's Our Own Business
            </h3>
            <p className="text-[0.975rem] leading-[1.85] text-[#555]">
              Nisars & Associates is a team of experienced professionals
              dedicated to making business compliance and registration
              straightforward for every client. Founded with a belief that every
              entrepreneur — big or small — deserves expert guidance without the
              confusion, we've spent over a decade simplifying GST filings,
              company registrations, trademark applications, and legal
              formalities for thousands of businesses across India.
            </p>
          </div>

          {/* Highlights */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#16a34a]">
              Why Clients Trust Us
            </p>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-150"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4]">
                  <i className="ri-check-line text-[#16a34a]"></i>
                  </div>
                  <span className="text-[13.5px] font-medium text-[#374151]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#16a34a] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-lg hover:shadow-green-200"
            >
              <i className="ri-arrow-right-long-line"></i>
              More About Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#bbf7d0] bg-white px-7 text-sm font-medium text-[#15803d] transition-all hover:border-[#16a34a] hover:bg-[#f0fdf4]"
            >
             <i className="ri-phone-fill"></i> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
