import React from "react";
const PageHero = ({ title, sub, des }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[30vh] md:min-h-[50vh] lg:min-h-[50vh] flex justify-center overflow-hidden bg-[#111111]">
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-base sm:text-xl md:text-3xl lg:text-3xl font-light text-white mb-8">
              {des}
            </p>
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHero;
