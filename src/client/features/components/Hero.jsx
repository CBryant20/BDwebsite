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
      <video className='hero-video' autoPlay muted loop playsInline>
        <source src='src/images/BD_logo_video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='hero-content'>
        <button id='hero-btn' onClick={handleContactClick}>
          CONTACT
        </button>
      </div>
      <div className='circle-container'>
        <div className='circle c1' data-speed='5'></div>
        <div className='circle c2' data-speed='7'></div>
      </div>
    </section>
  );
}
