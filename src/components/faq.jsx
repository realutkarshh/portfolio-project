import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
// import Svg from "../assets/"

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What Services do you offer?",
    answer:
      "I specialize in building modern, responsive web applications using technologies like HTML, CSS, JavaScript, and React. I can help with landing pages, dashboards, interactive components, and complete front-end solutions.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on the project’s scope. A simple landing page may take 3–5 days, while a full web app could take 2–4 weeks. I always provide clear estimates upfront.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily use frameworks like ReactJS and NextJS. For styling, I prefer Tailwind CSS or Shadcn UI, and for animations, I use Framer Motion and GSAP.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Absolutely! I can revamp your current site to improve its design, speed, and mobile responsiveness.",
  },
  {
    question: "How much do you charge for a project?",
    answer:
      "Pricing depends on the project’s complexity. I offer competitive rates and package deals for larger projects. Contact me for a custom quote.",
  },
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-400"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const faqItemsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const faqItems = faqItemsRef.current;

    gsap.set(header, { autoAlpha: 0, y: 50 });

    // ScrollTrigger to animate the header and faq items when the section comes into view
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%", // Trigger animation when 80% of the section comes into view
      onEnter: () => {
        gsap.to(header, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
        gsap.from(faqItems.children, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
    id="faq"
      ref={sectionRef}
      className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gray-950"
    >
      <div className="max-w-7xl mx-auto lg:flex lg:items-start lg:gap-12">
        <div ref={headerRef} className="lg:w-1/2 mb-12 lg:mb-0 faq-header">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Find answers to common questions about Project development, Time and
            Cost of any new Project
          </p>
        </div>
        <div ref={faqItemsRef} className="lg:w-1/2 space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item text-white">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
