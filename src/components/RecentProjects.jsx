import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    title: "Social Media Saas Application", 
    description: "This Project is under progress. I am creating a social media application using MERN Stack. Tech stack: ReactJS, MongoDB, ExpressJS, NodesJS.", 
    image: Project3,
  },
  { 
    title: "XCENTIC Business Website", 
    description: "The official website of the startup named as XCENTIC using NextJS and TailwindCSS. I have also used EmailJS and ResendJS.", 
    image: Project1,
  },
  { 
    title: "AI Weather Dashboard", 
    description: "This Project is under progress. Tech stack used: Firebase(Auth and storage), NextJS, ChartJS, TailwindCSS and some other frameworks. ", 
    image: Project2,
  },
  { 
    title: "SSP Portfolio Website", 
    description: "The official website for the Startup Service Program launched by Ecell, KIET. Tech stack: ReactJS, TailwindCSS, Resend, EmailJS.", 
    image: Project5
  },
  { 
    title: "Movie Recommendation System", 
    description: "This is an AIML Project. Tech Stack: Python (frontend & backend), Some concepts of Machine Learning", 
    image: Project4
  },
];

const RecentWorks = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let scrollWidth = scrollContainerRef.current.scrollWidth;
    let windowWidth = window.innerWidth;

    gsap.to(scrollContainerRef.current, {
      x: -(scrollWidth - windowWidth),
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollWidth - windowWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="h-screen bg-gray-950 text-white flex items-center overflow-hidden">
      <div className="absolute top-16 left-12 max-w-6xl">
        <h2 className="text-5xl font-bold text-white">Innovations in Motion</h2>
        {/* <p className="text-lg text-gray-400 mt-4 max-w-2xl">
          A journey through groundbreaking ideas transformed into reality. Here’s a glimpse into our latest projects, where creativity meets technology to craft futuristic experiences.
        </p> */}
      </div>

      <div ref={scrollContainerRef} className="flex space-x-10 px-12 py-20">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-900 p-8 rounded-2xl shadow-lg flex items-center w-[700px] min-w-[700px] h-[400px] transform hover:-translate-y-2 transition-all"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 font-light mt-2">{project.description}</p>
            </div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-1/2 h-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
