import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import * as $ from "@/styles/web/components/Team.styled";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Team = ({ translations: t }) => {
  const slideRefs = [useRef(null), useRef(null), useRef(null)]; // Vytvárame pole refov pre každý slide
  const [teamTypes, setTeamTypes] = useState(["formal", "formal", "formal"]); // Pole pre stav každého obrázku

  useEffect(() => {
    const checkIfActive = (index) => {
      if (slideRefs[index].current) {
        if (
          slideRefs[index].current.classList.contains("swiper-slide-active")
        ) {
          updateTeamType(index, "peculiar");
        } else {
          updateTeamType(index, "formal");
        }
      }
    };

    const updateTeamType = (index, newType) => {
      setTeamTypes((prevTeamTypes) => {
        const updatedTypes = [...prevTeamTypes];
        updatedTypes[index] = newType;
        return updatedTypes;
      });
    };

    // Počiatočná kontrola
    slideRefs.forEach((_, index) => checkIfActive(index));

    // Pridanie observerov pre každý slide
    const observers = slideRefs.map((ref, index) => {
      const observer = new MutationObserver(() => checkIfActive(index));
      observer.observe(ref.current, { attributes: true });
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <Section id={"team"} label={t.label} title={t.title}>
      <$.TextWrap>
        <$.TextBlock>{t.descriptions["1"]}</$.TextBlock>
        <$.TextBlock>{t.descriptions["2"]}</$.TextBlock>
        <$.TextBlock>{t.descriptions["3"]}</$.TextBlock>
      </$.TextWrap>
      <$.Wrap>
        <Swiper
          effect={"coverflow"}
          initialSlide={1}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide ref={slideRefs[0]}>
            <$.Slide>
              <Image
                src={`/images/web/team/timo-${teamTypes[0]}.jpg`}
                layout="fill"
                objectFit="contain"
                alt={t.timotej.alt_img}
              />
              <$.NameBlock className="name-block">
                <$.TitleName>Timotej</$.TitleName>
                <$.Description>{t.timotej.description}</$.Description>
              </$.NameBlock>
            </$.Slide>
          </SwiperSlide>
          <SwiperSlide ref={slideRefs[1]}>
            <$.Slide>
              <Image
                src={`/images/web/team/brano-${teamTypes[1]}.jpg`}
                layout="fill"
                objectFit="contain"
                alt={t.brano.alt_img}
              />
              <$.NameBlock className="name-block">
                <$.TitleName>Braňo</$.TitleName>
                <$.Description>{t.brano.description}</$.Description>
              </$.NameBlock>
            </$.Slide>
          </SwiperSlide>
          <SwiperSlide ref={slideRefs[2]}>
            <$.Slide>
              <Image
                src={`/images/web/team/kikus-${teamTypes[2]}.jpg`}
                layout="fill"
                objectFit="contain"
                alt={t.kikus.alt_img}
              />
              <$.NameBlock className="name-block">
                <$.TitleName>Kikuš</$.TitleName>
                <$.Description>{t.kikus.description}</$.Description>
              </$.NameBlock>
            </$.Slide>
          </SwiperSlide>
        </Swiper>
      </$.Wrap>
    </Section>
  );
};

export default Team;
