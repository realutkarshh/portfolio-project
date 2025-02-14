import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Replace with your video path
import bgVideo from "../assets/hero-video.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const title = heroRef.current.querySelector(".hero-title");
    const subtitle = heroRef.current.querySelector(".hero-subtitle");

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 2.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex items-center justify-center h-screen text-center text-white"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-12">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold opacity-0">
          Hello There !
        </h1>
        <p className="hero-subtitle text-lg md:text-2xl mt-4 opacity-0">
          I am a FRONTEND & AIML DEVELOPER
        </p>
      </div>
    </section>
  );
};

export default Hero;
