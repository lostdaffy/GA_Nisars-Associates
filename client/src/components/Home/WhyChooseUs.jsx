import { ShieldCheck, BadgeCheck, Clock3, Sparkles, ArrowUpRight, Box } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    text: "Clear support for GST, MSME, trademark, company registration, and legal formalities.",
  },
  {
    icon: BadgeCheck,
    title: "All-in-One Services",
    text: "One team for business setup, compliance, digital signatures, and branding needs.",
  },
  {
    icon: Clock3,
    title: "Fast & Responsive",
    text: "Quick coordination and timely updates so your work moves without delays.",
  },
  {
    icon: Sparkles,
    title: "Professional Approach",
    text: "Clean process, proper documentation, and practical solutions for every client.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-[13px] font-medium text-neutral-700">
            <img src="/images/brand-logo.png" className="h-6 w-6" alt="" />
            Why Choose Us
          </span>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[46px] lg:text-[60px]">
            Why Businesses Trust Our Services
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-neutral-600 sm:text-[18px]">
            We make business registration, compliance, and branding simple, structured, and dependable — so you can focus on growth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-[24px] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-8 w-8 text-neutral-900" />
                  <ArrowUpRight className="h-5 w-5 text-neutral-400 transition group-hover:text-neutral-700" />
                </div>

                <h3 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900 sm:text-[24px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-[1.7] text-neutral-600 sm:text-[16px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;