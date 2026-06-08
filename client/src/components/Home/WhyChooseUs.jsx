import { ArrowUpRight } from "lucide-react";

const reasons = [
  {
    icon: "ri-shield-check-line",
    title: "Trusted Guidance",
    text: "Clear support for GST, MSME, trademark, company registration, and legal formalities.",
  },
  {
    icon: "ri-percent-line",
    title: "All-in-One Services",
    text: "One team for business setup, compliance, digital signatures, and branding needs.",
  },
  {
    icon: "ri-time-line",
    title: "Fast & Responsive",
    text: "Quick coordination and timely updates so your work moves without delays.",
  },
  {
    icon: "ri-book-open-line",
    title: "Professional Approach",
    text: "Clean process, proper documentation, and practical solutions for every client.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[520px_1fr] lg:gap-20">
          {/* ── Left: Image ── */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-[#e5e7eb]">
              <img
                src="/images/why-choose-us.jpg"
                alt="Why choose Nisars & Associates"
                className="h-[280px] w-full object-cover object-center sm:h-[380px] lg:h-[580px]"
              />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div>
            {/* Label */}
            <div className="mb-5 flex items-center gap-2">
              <div className="h-4 w-1 rounded-full bg-[#16a34a]" />
              <span className="text-[13px] font-semibold text-[#16a34a]">
                Why Choose Us?
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[2rem] font-bold leading-[1.0] tracking-[-0.02em] text-[#111] sm:text-[2.5rem] lg:text-[2.8rem]">
              When Your Business{" "}
              <span className="rounded-lg px-3 py-1 text-[#16a34a]">Needs</span>{" "}
              It Most —{" "}
              <span className="rounded-lg  px-3 py-1 text-[#16a34a]">
                Expert Help
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-[0.975rem] leading-[1.85] text-[#6b7280] sm:text-[1.05rem]">
              Most service providers treat you like a form to be filled. We
              don't. From the moment you reach out, you get a dedicated point of
              contact who understands your situation — whether you're a
              first-time founder or an established business managing annual
              compliance. No chasing. No confusion. Just results.
            </p>

            {/* ── 4 Reasons Grid ── */}
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              {reasons.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#bbf7d0] bg-[#f0fdf4]">
                    <i className={`${item.icon} text-[22px] text-[#16a34a]`} />
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#111]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-[1.75] text-[#6b7280]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
