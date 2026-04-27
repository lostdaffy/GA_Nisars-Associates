import React from "react";

const PolicyLayout = ({ title, updatedOn, intro, sections = [] }) => {
  return (
    <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8 md:mb-10 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 sm:p-6 md:p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Legal Information
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
                {title}
              </h2>
            </div>

            <div className="inline-flex w-fit rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300">
              Last Updated: {updatedOn}
            </div>
          </div>

          <p className="mt-5 text-base sm:text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            {intro}
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {sections.map((section, index) => (
            <article
              key={index}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {section.heading}
              </h3>

              {section.content?.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 text-base leading-8 text-neutral-700 dark:text-neutral-300"
                >
                  {para}
                </p>
              ))}

              {section.list?.length > 0 && (
                <ul className="space-y-3 text-base leading-8 text-neutral-700 dark:text-neutral-300 list-disc pl-5">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 md:mt-10 rounded-2xl bg-[#111111] text-white p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            Need help regarding this policy?
          </h3>
          <p className="text-white/80 leading-7 max-w-2xl">
            For any questions related to this page, you can contact our support
            team through phone, email, or WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyLayout;