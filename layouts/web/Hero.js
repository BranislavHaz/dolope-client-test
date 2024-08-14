import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as $ from "@/styles/web/layouts/Hero.styled";

const Hero = ({ translations: t }) => {
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
            alt={t.alt_img_frame}
            className={"device active"}
          />
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              layout="fill"
              objectFit="contain"
              alt={`${t.alt_img_configurator} #${index}`}
              className={`image ${index === activeIndex ? "active" : ""}`}
            />
          ))}
        </$.HeroImgDevice>
        <$.TextContent>
          <$.Label>
            <$.LabelText>{t.label}</$.LabelText>
          </$.Label>
          <$.Title>{t.title}</$.Title>
          <$.Description>{t.description}</$.Description>
          <$.ActionButton>
            <$.ButtonText>{t.action_button}</$.ButtonText>
          </$.ActionButton>
        </$.TextContent>
      </$.HeroContent>
    </$.Hero>
  );
};

export default Hero;
