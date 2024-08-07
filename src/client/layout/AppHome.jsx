import About from "../features/components/About";

import Hero from "../features/components/Hero";
import Services from "../features/components/Services";
import Works from "../features/components/Works";
import Contact from "../features/components/contact/Contact";

import "./AppHome.less";

export default function AppHome() {
  return (
    <div className='home-container'>
      <Hero />
      <Works />
      <About />
      <Services />

      <Contact />
    </div>
  );
}
