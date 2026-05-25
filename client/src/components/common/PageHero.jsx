import React from "react";

const PageHero = ({ title, sub, des }) => {
  return (
    <section className="relative flex min-h-[35vh] items-center overflow-hidden py-16 md:min-h-[45vh] md:py-20 lg:min-h-[50vh] lg:py-24"
      style={{
        backgroundColor: "#111111",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
        `,
        backgroundSize: "36px 36px",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          {sub && (
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/40">
              {sub}
            </p>
          )}
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {des && (
            <p className="mt-5 text-base font-light leading-relaxed text-white/60 sm:text-lg md:text-xl">
              {des}
            </p>
          )}
          <div className="mt-8 h-0.5 w-16 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
};

export default PageHero;