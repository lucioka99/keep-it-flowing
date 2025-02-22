import { useEffect, useState } from "react";
import clubchekaLogo from "../assets/checka.png";
import BackgroundCarousel from "../components/BackgroundCarousel";
import { motion } from "framer-motion";
import img1 from "../assets/evento1.jpg";
import img2 from "../assets/evento2.jpg";
import img3 from "../assets/evento3.jpg";

const images = [img1, img2, img3];

function Inicio() {
  const [timeLeft, setTimeLeft] = useState("");
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-03-21T00:00:00"); // Ajustá la fecha del evento

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        setTimeLeft("¡Hoy es el evento!");
        return;
      }

      const newTime = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };

      setChanging(true);
      setTimeout(() => setChanging(false), 300); // Animación rápida
      setTimeLeft(newTime);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav style={{ backgroundColor: "#000", color: "#fff", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontSize: "24px" }}>KEEP IT FLOWING</h1>
        <div>
          <a href="/" style={{ color: "#fff", margin: "0 20px", textDecoration: "none" }}>Inicio</a>
          <a href="/tienda" style={{ color: "#fff", margin: "0 20px", textDecoration: "none" }}>Tienda</a>
        </div>
      </nav>

      <div className="page-container">
        <BackgroundCarousel images={images} />

        <div className="inicio-container"></div>

        <div className="hero-section">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            KEEP IT FLOWING
          </motion.h1>

          <div className="countdown-text">
            <div className="logo-container">
              <img src={clubchekaLogo} alt="Club Cheka" className="event-logo" />
            </div>

            <div className="countdown-container">
              <div className="countdown-box">
                {timeLeft.days} <span className="countdown-label">Días</span>
              </div>

              <div className="countdown-box">
                {timeLeft.hours} <span className="countdown-label">Horas</span>
              </div>

              <div className="countdown-box">
                {timeLeft.minutes} <span className="countdown-label">Minutos</span>
              </div>

              <div className="countdown-box">
                {timeLeft.seconds} <span className="countdown-label">Segundos</span>
              </div>
            </div>
          </div>

          <div className="ticket-container">
            <a href="https://www.passline.com/" target="_blank" rel="noopener noreferrer">
              <button className="ticket-button">¡ADQUIRÍ TU INGRESO!</button>
            </a>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: "#000", color: "#fff", textAlign: "center", padding: "40px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          fontSize: "30vw",
          letterSpacing: "-5px",
          margin: "0",
          transform: "rotate(-10deg)",
          opacity: "0.08",
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          fontWeight: "bold",
          textTransform: "uppercase",
          transformOrigin: "center",
          translate: "-50% -50%",
          whiteSpace: "nowrap"
        }}>
          KEEP IT FLOWING
        </div>
        <p style={{ marginTop: "10px", position: "relative", zIndex: 2 }}>© 2025 Keep It Flowing. Todos los derechos reservados.</p>
      </footer>

      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
        <iframe
          width="300"
          height="150"
          src="https://www.youtube.com/embed/cq84pwNOINM?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Inicio;
