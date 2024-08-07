import { useEffect } from "react";
import Typed from "typed.js";

export default function About() {
  useEffect(() => {
    const webDevTyped = new Typed("#web-dev-text", {
      strings: [
        "Full Stack",
        "Front-End",
        "Back-End",
        "Freelance",
        "UI/UX",
        "Mobile First",
        "Responsive Design",
        "Consultation",
      ],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
    });

    const woodWorkerTyped = new Typed("#woodworker-text", {
      strings: [
        "Skilled",
        "Creative",
        "Passionate",
        "Crafty",
        "Detailed",
        "Dedicated",
        "Precise",
        "Talented",
        "Resourceful",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      webDevTyped.destroy();
      woodWorkerTyped.destroy();
    };
  }, []);

  return (
    <div className='columns'>
      <div className='column'>
        <h3>Web Development</h3>
        <p>
          I am a <span id='web-dev-text'></span> <br />
          Web Developer.
        </p>
      </div>
      <div className='column'>
        <h3>Woodworking</h3>
        <p>
          I am a <span id='woodworker-text'></span> <br />
          Woodworker.
        </p>
      </div>
    </div>
  );
}
