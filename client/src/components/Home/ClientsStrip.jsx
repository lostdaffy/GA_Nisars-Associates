const clients = [
  "Tata Consultancy",
  "Infosys Ltd",
  "Reliance Industries",
  "HDFC Bank",
  "Wipro Ltd",
  "Bajaj Finance",
  "Mahindra Group",
  "Adani Enterprises",
];

const ClientsStrip = () => {
  return (
    <section className="w-full border-y border-[#f0f0f0] bg-[#fafafa] py-10">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#999]">
          Trusted by Businesses Across India
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex h-12 min-w-[160px] items-center justify-center rounded-xl border border-[#ebebeb] bg-white px-6"
            >
              <span className="text-[13px] font-semibold text-[#374151]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsStrip;
