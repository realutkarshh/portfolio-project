import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: "+", label: "Projects done " },
  { value: 95, suffix: "%", label: "Happy clients" },
  { value: 4, suffix: "+", label: "years of experience" },
];

const NumberTicker = () => {
  const countersRef = useRef([]);
  
  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      gsap.fromTo(
        counter,
        { textContent: 0 },
        {
          textContent: stats[index].value,
          duration: 2,
          ease: "power3.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-stone-100 flex justify-center">
      <div className="max-w-7xl w-full grid bg-black grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl shadow-md text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-stone-100">
            <span className="text-4xl sm:text-5xl font-light">
              <span ref={(el) => (countersRef.current[index] = el)}>0</span>
              {stat.suffix}
            </span>
            <p className="text-sm sm:text-base text-gray-100 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumberTicker;
