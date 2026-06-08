const steps = [
  {
    step: "01",
    icon: "ri-customer-service-2-line",
    title: "Free Consultation",
    desc: "Tell us what you need. We understand your situation and suggest the right service — no pressure, no jargon.",
  },
  {
    step: "02",
    icon: "ri-file-list-3-line",
    title: "Document Collection",
    desc: "We tell you exactly what documents are needed. No back-and-forth, no surprises — just a clear checklist.",
  },
  {
    step: "03",
    icon: "ri-send-plane-line",
    title: "We File & Follow Up",
    desc: "Our team handles all government filings, portal submissions, and follow-ups — so you don't have to.",
  },
  {
    step: "04",
    icon: "ri-checkbox-circle-line",
    title: "Done. Certificate Delivered.",
    desc: "Your registration or compliance work is complete. We hand over all documents and stay available for support.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#f8fdf9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-2 text-[13px] font-medium text-[#15803d]">
            <img src="/images/brand-logo.png" className="h-5 w-5" alt="" />
            How It Works
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[#111] sm:text-5xl lg:text-[52px]">
            From First Call to{" "}
            <span className="text-[#16a34a]">Final Certificate</span>
          </h2>
          <p className="mt-5 text-[1rem] leading-[1.8] text-[#6b7280] sm:text-[1.05rem]">
            Four simple steps. No confusion, no chasing — just a smooth process
            from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col">

              {/* Connector line — desktop only */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-[28px] hidden h-px w-[calc(100%-56px)] translate-x-full border-t border-dashed border-[#bbf7d0] lg:block" />
              )}

              {/* Card */}
              <div className="group flex flex-col gap-5 rounded-2xl border border-[#e8fce8] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#bbf7d0] hover:shadow-[0_8px_28px_rgba(22,163,74,0.10)]">

                {/* Step number + icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] transition-all duration-200 group-hover:border-[#15803d] group-hover:bg-[#16a34a]">
                    <i className={`${s.icon} text-[22px] text-[#16a34a] transition-colors duration-200 group-hover:text-white`} />
                  </div>
                  <span className="text-[2rem] font-bold leading-none tracking-tight text-[#e8fce8] group-hover:text-[#bbf7d0]">
                    {s.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-[17px] font-semibold text-[#111]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.75] text-[#6b7280]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;