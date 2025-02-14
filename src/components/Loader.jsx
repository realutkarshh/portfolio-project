import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showLoader = () => {
      setLoading(true);
      const tl = gsap.timeline();

      tl.to(".loader", {
        duration: 0.5,
        y: "0%",
        ease: "power3.inOut",
      })
        .to(".loader-text", {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        })
        .to(".loader-bar", {
          duration: 1.5,
          width: "100%",
          ease: "power3.inOut",
        })
        .to(".loader", {
          duration: 0.5,
          y: "-100%",
          ease: "power3.inOut",
          onComplete: () => setLoading(false),
        });

      return tl;
    };

    showLoader();

    // Reload animation when clicking on the logo
    const logo = document.querySelector('a[href="#"]');
    if (logo) {
      logo.addEventListener("click", (e) => {
        e.preventDefault();
        showLoader();
      });
    }

    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem("hasLoaded");
    });

    return () => {
      if (logo) {
        logo.removeEventListener("click", showLoader);
      }
      window.removeEventListener("beforeunload", () => {
        sessionStorage.removeItem("hasLoaded");
      });
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="loader fixed inset-0 z-[9999] flex items-center justify-center bg-black px-4 md:px-0">
      <div className="text-center max-w-screen-sm w-full">
        <h2 className="loader-text text-gray-100 text-xl sm:text-2xl lg:text-3xl font-light mb-4 opacity-0 transform translate-y-4">
          You're Landing into Utkarsh Singh's Portfolio
        </h2>
      </div>
    </div>
  );
};

export default Loader;
