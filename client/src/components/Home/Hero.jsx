import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-106px)] max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-10 lg:px-12 xl:px-16">
          {/* Left Content */}
          <div className="max-w-[750px] text-center sm:text-start md:text-start lg:text-start">
            <span className="mb-8 inline-block bg-[#f5f5f5] px-4 py-2 text-[16px] font-medium text-[#111111] sm:text-[18px]">
              Trusted Business Services for Growth
            </span>

            <h1 className="max-w-[760px] text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#111111] ">
              Start, Register & Grow Your Business With Confidence
            </h1>

            <p className="mt-8 max-w-[720px] text-base sm:text-base md:text-lg lg:text-xl xl:text-xl leading-[1.65] text-[#4b4b4b] ">
              We help startups, professionals, and businesses with GST, company
              registration, MSME, trademarks, digital signature, legal
              compliance, and consultancy services — all in one place.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link to="/services" className="inline-flex h-[50px] items-center justify-center rounded-[8px] bg-[#1c1c1c] px-10 text-[18px] font-semibold text-white transition hover:bg-black">
                <i className="ri-arrow-right-long-fill mr-2"></i>Expolre Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px]">
              <div className="relative overflow-hidden rounded-[26px] bg-white">
                <img
                  src="/images/hero-img.jpg"
                  alt="Creative team member"
                  className=" w-full object-contain object-center"
                />
              </div>

              {/* White top cut shape */}
              <div className="absolute top-0 right-0 z-10 h-[52px] w-[36%] rounded-bl-[26px] bg-white" />

              {/* White bottom cut shape */}
              <div className="absolute bottom-0 left-0 z-10 h-[52px] w-[36%] rounded-se-[26px] bg-white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
