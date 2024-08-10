import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import * as $ from "@/styles/web/components/Team.styled";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Team = () => {
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
    <Section id={"team"} label={"O nás"} title={"Kdo jsme a proč to děláme?"}>
      <$.TextWrap>
        <$.TextBlock>
          Jsme rodinná firma s dlouholetými zkušenostmi nejen v truhlářství, ale
          i v dalších oborech. Naše cesta začala v dílně našeho otce, kde jsme
          se od mládí učili základy řemesla. I když nás život zavedl do jiných
          profesí, truhlářství jsme nikdy neopustili. Spojili jsme naše znalosti
          z programování, marketingu a techniky s tím, co jsme se naučili od
          otce, a tak vzniklo Dolope.
        </$.TextBlock>
        <$.TextBlock>
          Náš tým je mladý a kreativní, přičemž každý z nás přináší do firmy
          svůj jedinečný pohled. Výsledkem je automatizovaná výroba a
          konfigurátor, kde si můžete jednoduše navrhnout vlastní skříň a
          okamžitě zjistit její cenu. Technické znalosti nám umožňují maximálně
          využít materiály a nabídnout vám skvělé ceny za vysokou kvalitu.
        </$.TextBlock>
        <$.TextBlock>
          Navíc se spoléháme na kreativní vkus, který do firmy přináší moderní
          designy a trendy. Naše práce je postavena na transparentnosti a
          čestnosti, což je základ naší komunikace se zákazníky. Chceme, aby
          proces objednávky byl co nejjednodušší a nejpřehlednější.
        </$.TextBlock>
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
                alt="Dolope tým - Formální Timo"
              />
              <$.NameBlock className="name-block">
                <$.TitleName>Timotej</$.TitleName>
                <$.Description>
                  Technické myšlení a zkušenosti z výroby zajišťují, že každá
                  skříň je pečlivě zpracovaným mistrovským dílem, které dokonale
                  zapadne do vašeho domova.
                </$.Description>
              </$.NameBlock>
            </$.Slide>
          </SwiperSlide>
          <SwiperSlide ref={slideRefs[1]}>
            <$.Slide>
              <Image
                src={`/images/web/team/brano-${teamTypes[1]}.jpg`}
                layout="fill"
                objectFit="contain"
                alt="Dolope tým - Formální Braňo"
              />
              <$.NameBlock className="name-block">
                <$.TitleName>Braňo</$.TitleName>
                <$.Description>
                  Analytické myšlení, zkušenosti s automatizací a důraz na
                  detaily zaručují efektivní a bezproblémový průběh vaší
                  objednávky.
                </$.Description>
              </$.NameBlock>
            </$.Slide>
          </SwiperSlide>
          <SwiperSlide ref={slideRefs[2]}>
            <$.Slide>
              <Image
                src={`/images/web/team/kikus-${teamTypes[2]}.jpg`}
                layout="fill"
                objectFit="contain"
                alt="Dolope tým - Formální Kikuš"
              />
              <$.NameBlock className="name-block">
                <$.TitleName>Kikuš</$.TitleName>
                <$.Description>
                  S kreativním okem, citem pro detail a jedinečným vkusem pro
                  kombinace materiálů promění vaši skříň v estetický skvost,
                  který překvapí a potěší.
                </$.Description>
              </$.NameBlock>
            </$.Slide>
          </SwiperSlide>
        </Swiper>
      </$.Wrap>
    </Section>
  );
};

export default Team;
