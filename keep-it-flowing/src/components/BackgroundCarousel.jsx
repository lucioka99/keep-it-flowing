import { useState, useEffect } from "react";



function BackgroundCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="background-carousel">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Evento ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default BackgroundCarousel;


