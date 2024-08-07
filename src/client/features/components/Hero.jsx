import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const circles = document.querySelectorAll(".circle");
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      circles.forEach((circle) => {
        const speed = circle.getAttribute("data-speed");
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;

        circle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className='hero'>
      <div className='hero-content'>
        <h4>WELCOME TO</h4>
        <h1>Bryant Designs</h1>
        <button id='hero-btn' onClick={handleContactClick}>
          CONTACT
        </button>
      </div>
      <div className='circle-container'>
        <div className='circle c1' data-speed='5'></div>
        <div className='circle c2' data-speed='7'></div>
      </div>
      <div className='icon-container'>
        <i className='fas fa-hammer icon hammer'></i>
        <i className='fas fa-laptop-code icon computer'></i>
      </div>
    </section>
  );
}
