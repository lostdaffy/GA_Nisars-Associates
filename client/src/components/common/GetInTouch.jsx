import React from "react";

const GetInTouch = () => {
  return (
    <>
      <section className="bg-[#f7f6f3] py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-12">
            <div className="overflow-hidden">
              <img
                src="/images/contact-girl.jpg"
                alt="Contact person"
                className=" w-full object-cover"
              />
            </div>

            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-sm text-black/70">
                <i className="ri-customer-service-2-line text-[15px]"></i>
                <span>Get in touch</span>
              </div>

              <h2 className="mb-4 text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl">
                Send Your Message
              </h2>

              <div className="mb-6 h-px w-full bg-black/20"></div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] text-black/80">
                      Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Thomas Alison"
                      className="h-[48px] w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] text-black/80">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      className="h-[48px] w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] text-black/80">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      placeholder="+91 123 456789"
                      className="h-[48px] w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] text-black/80">
                      Budget*
                    </label>
                    <input
                      type="text"
                      placeholder="Type Your Budget"
                      className="h-[48px] w-full rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] text-black/80">
                    Inquiry about*
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message"
                    className="min-h-[160px] w-full rounded-xl border border-black/15 bg-white px-4 py-4 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex rounded-md bg-[#111111] px-7 py-3 text-sm font-medium text-white transition hover:bg-black/85"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="my-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-[18px] bg-[#f3f2ef] p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <i className="ri-map-pin-line text-[20px] text-[#111111]"></i>
              </div>
              <div className="mb-4 h-px w-full bg-black/20"></div>
              <h3 className="mb-3 text-[30px] font-medium leading-none text-[#111111]">
                Our Address
              </h3>
              <p className="text-lg leading-8 text-black/75">
                Roorkee, Uttarakhand, India
              </p>
            </div>

            <div className="rounded-[18px] bg-[#f3f2ef] p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <i className="ri-phone-line text-[20px] text-[#111111]"></i>
              </div>
              <div className="mb-4 h-px w-full bg-black/20"></div>
              <h3 className="mb-3 text-[30px] font-medium leading-none text-[#111111]">
                Phone
              </h3>
              <p className="text-lg leading-8 text-black/75">
                +91 997 078 7600
              </p>
            </div>

            <div className="rounded-[18px] bg-[#f3f2ef] p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                <i className="ri-mail-line text-[20px] text-[#111111]"></i>
              </div>
              <div className="mb-4 h-px w-full bg-black/20"></div>
              <h3 className="mb-3 text-[30px] font-medium leading-none text-[#111111]">
                Email
              </h3>
              <p className="break-all text-lg leading-8 text-black/75">
                info@ganisarasandassociates.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
