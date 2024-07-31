import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as $ from "@/styles/web/layouts/Hero.styled";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/images/web/device-img1.png",
    "/images/web/device-img2.png",
    "/images/web/device-img3.png",
    "/images/web/device-img4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <$.Hero>
      <$.HeroContent>
        <$.HeroImgDevice>
          <Image
            src={"/images/web/hero-img.png"}
            layout="fill"
            objectFit="contain"
            alt="Dolope - obrázek konfiguráora"
            className={"device active"}
          />
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              layout="fill"
              objectFit="contain"
              alt={`Image ${index}`}
              className={`image ${index === activeIndex ? "active" : ""}`}
            />
          ))}
        </$.HeroImgDevice>
        <$.TextContent>
          <$.Label>
            <$.LabelText>#1 Nejpřehlednější konfigurátor</$.LabelText>
          </$.Label>
          <$.Title>
            Vytvořte si design své skříně <$.Underline>online</$.Underline>
          </$.Title>
          <$.Description>
            Nadesignujte si vlastní vestavěnou skříň na míru. Celý proces vám
            nezabere více než 3 minuty a okamžitě získáte{" "}
            <$.Underline>konečnou cenu bez skrytých poplatků</$.Underline>{" "}
            včetně dopravy a montáže.
          </$.Description>
          <$.ActionButton>
            <$.ButtonText>Vytvořit svou skříň</$.ButtonText>
          </$.ActionButton>
        </$.TextContent>
      </$.HeroContent>
    </$.Hero>
  );
};

export default Hero;
