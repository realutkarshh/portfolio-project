"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-item", {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen flex items-center py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-6">Connect & Elevate</h2>
        <p className="text-xl text-center font-light mb-12 max-w-3xl mx-auto">
          Ready to take your business to new heights? Get in touch with me and let's create something extraordinary together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-item bg-gray-950 shadow-lg p-8 rounded-lg">
            <h3 className="text-3xl text-stone-100 font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">Fill out the form and I'll be in touch as soon as possible. You know the business and I know the Tech</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-stone-100">Name</label>
                <input type="text" id="name" className="w-full p-3 border rounded-lg focus:ring text-stone-100 focus:ring-blue-300" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-stone-100">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-lg focus:ring text-stone-100 focus:ring-blue-300" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-stone-100">Message</label>
                <textarea id="message" className="w-full p-3 border rounded-lg focus:ring text-stone-100 focus:ring-blue-300" placeholder="Your Message" rows="4"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-100 text-gray-950 py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
          <div className="contact-item flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="mb-6 text-gray-700">
              I am always excited to hear about new projects and opportunities. Reach out to me and let's start a conversation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/realutkarshh/" className="text-gray-600 hover:text-blue-600 transition"><Linkedin className="w-6 h-6" /></a>
              <a href="https://www.instagram.com/realutkarshh" className="text-gray-600 hover:text-blue-600 transition"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
