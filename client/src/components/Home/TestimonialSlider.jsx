import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    text: "Very professional support for GST and registration work. Everything was handled clearly and on time.",
  },
  {
    name: "Neha Verma",
    role: "Startup Founder",
    text: "They guided me through company setup, digital signature, and compliance with full support.",
  },
  {
    name: "Amit Khan",
    role: "Trader",
    text: "Good service for trademark, MSME, and legal documentation. The process was smooth and reliable.",
  },
  {
    name: "Priya Singh",
    role: "Consultant",
    text: "Best team for business-related services. The communication was quick and professional.",
  },
];

const CARD_GAP = 24;
const AUTOPLAY_SPEED = 0.05;

const TestimonialSlider = () => {
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const positionRef = useRef(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth + CARD_GAP;
    const totalWidth = cardWidth * testimonials.length;

    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      positionRef.current -= AUTOPLAY_SPEED * delta;

      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
      }

      track.style.transform = `translateX(${positionRef.current}px)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    setReady(true);
    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-[13px] font-medium text-neutral-700">
            <Quote className="h-4 w-4" />
            Testimonial
          </span>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-[46px] lg:text-[60px]">
            What Our Clients Are Saying
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-neutral-600 sm:text-[18px]">
            Hear directly from our clients about their experience with our
            business registration, compliance, and consultancy services.
          </p>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            ref={trackRef}
            className={`flex gap-6 will-change-transform ${ready ? "" : "opacity-0"}`}
            style={{ width: "max-content" }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-[28px] border border-neutral-200 bg-[#f7f7f7] p-7 shadow-sm sm:min-w-[380px] sm:max-w-[380px]"
              >
                <div className="flex items-center gap-1 text-black">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-black">
                      ★
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-[16px] leading-[1.8] text-neutral-700 sm:text-[17px]">
                  {item.text}
                </p>

                <div className="mt-8 border-t border-dashed border-neutral-200 pt-6">
                  <h3 className="text-[18px] font-semibold text-neutral-900">
                    {item.name}
                  </h3>
                  <p className="text-[14px] text-neutral-600">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
