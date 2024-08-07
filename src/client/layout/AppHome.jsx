import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import About from "../features/components/About";

import Hero from "../features/components/Hero";
import Services from "../features/components/Services";
import Works from "../features/components/Works";
import Contact from "../features/components/contact/Contact";

import "./AppHome.less";

export default function AppHome() {
  const location = useLocation();
  const blockRefs = useRef([]);

  useEffect(() => {
    if (location.state?.target) {
      document
        .querySelector(location.state.target)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    blockRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='home-container'>
      <div
        className='block'
        id='hero-section'
        ref={(el) => (blockRefs.current[0] = el)}
      >
        <Hero />
      </div>
      <div
        className='block'
        id='works-section'
        ref={(el) => (blockRefs.current[1] = el)}
      >
        <Works />
      </div>
      <div
        className='block'
        id='about-section'
        ref={(el) => (blockRefs.current[2] = el)}
      >
        <About />
      </div>
      <div
        className='block'
        id='services-section'
        ref={(el) => (blockRefs.current[3] = el)}
      >
        <Services />
      </div>
      <Contact />
    </div>
  );
}
