import { useState, useEffect } from "react";
import Img from "@/components/Img";

// Definovanie styled komponentu pre obrázok
const styles = {
  top: 0,
  left: 0,
  transition: "opacity 0.5s ease-in-out",
  zIndex: 0,
  objectFit: "contain",
  background: "transparent",
};

const ImageRotator = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/web/configurator_1.png",
    "/images/web/configurator_2.png",
    "/images/web/configurator_3.png",
    "/images/web/configurator_4.png",
    "/images/web/configurator_5.png",
    "/images/web/configurator_6.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 100); // Čas na vyblednutie (0.1 sekundy)
    }, 2000); // Čas zmeny obrázka (2 sekundy)

    return () => clearInterval(intervalId); // Vyčistenie intervalu po odmountovaní komponentu
  }, [images.length]);

  return (
    <Img
      src={images[currentImageIndex]}
      alt={`#${currentImageIndex} Obrázek konfigurátoru firmy Dolope.`}
      fill
      style={styles}
    />
  );
};

export default ImageRotator;
