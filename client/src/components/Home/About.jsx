import {
  Box,
  FileText,
  Briefcase,
  Award,
  Users,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f5] px-4 py-2 text-[14px] font-medium text-[#111111]">
              <img src="/images/brand-logo.png" className="h-6 w-6" alt="" />
              About Us
            </span>
          </div>

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-[46px] lg:text-[60px]">
              Who We Are. Learn About Our Business Services
            </h2>
            <p className="mt-5 text-[18px] leading-[1.6] text-[#555555] sm:text-[20px]">
              We are a trusted team helping startups, businesses, and
              professionals with registration, compliance, legal documentation,
              and essential growth services.
            </p>
          </div>

          {/* Main Grid */}
          <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14">
            {/* Left Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[640px]">
                <div className="overflow-hidden rounded-[30px] bg-white">
                  <img
                    src="/images/hero-img.jpg"
                    alt="Business services team"
                    className="h-[420px] w-full object-contain object-center sm:h-[500px] lg:h-[560px]"
                  />
                </div>

                <div className="absolute left-0 top-0 h-[56px] w-[34%] rounded-br-[30px] bg-white" />
                <div className="absolute bottom-0 right-0 h-[56px] w-[34%] rounded-tl-[30px] bg-white" />
              </div>
            </div>

            {/* Right Stats */}
            <div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[20px] bg-[#f7f7f9] p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <FileText className="h-9 w-9 text-[#111111]" />
                    <div>
                      <h3 className="text-[34px] font-semibold leading-none text-[#111111]">
                        200+
                      </h3>
                      <div className="my-4 h-px bg-neutral-200" />
                      <p className="text-[18px] leading-[1.5] text-[#555555]">
                        GST, MSME, and business registrations handled smoothly
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] bg-[#f7f7f9] p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-9 w-9 text-[#111111]" />
                    <div>
                      <h3 className="text-[34px] font-semibold leading-none text-[#111111]">
                        10+
                      </h3>
                      <div className="my-4 h-px bg-neutral-200" />
                      <p className="text-[18px] leading-[1.5] text-[#555555]">
                        Core business service categories under one roof
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] bg-[#f7f7f9] p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Award className="h-9 w-9 text-[#111111]" />
                    <div>
                      <h3 className="text-[34px] font-semibold leading-none text-[#111111]">
                        20+
                      </h3>
                      <div className="my-4 h-px bg-neutral-200" />
                      <p className="text-[18px] leading-[1.5] text-[#555555]">
                        Legal, compliance, and consultancy solutions delivered
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] bg-[#f7f7f9] p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Users className="h-9 w-9 text-[#111111]" />
                    <div>
                      <h3 className="text-[34px] font-semibold leading-none text-[#111111]">
                        5K+
                      </h3>
                      <div className="my-4 h-px bg-neutral-200" />
                      <p className="text-[18px] leading-[1.5] text-[#555555]">
                        Clients supported with trusted service guidance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/about"
                  className="inline-flex h-[56px] items-center justify-center rounded-[8px] bg-[#111111] px-8 text-[16px] font-semibold text-white transition hover:bg-black"
                >
                  <i className="ri-arrow-right-long-fill mr-2"></i> More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
