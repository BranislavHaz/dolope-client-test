import Img from "@/components/Img";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import * as $ from "@/styles/web/homepage/OrderSteps.styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const generateSlides = (count) => {
  return Array.from({ length: count }, (_, i) => {
    const src = `/images/web/realizations/${i + 1}-realization.jpg`;

    return (
      <SwiperSlide key={i + 1}>
        <Img
          src={src}
          alt={`Realizace vestavěné skříně na míru u klienta - ${i + 1}`}
          fill
          style={{
            objectFit: "cover",
            background: "transparent",
          }}
        />
      </SwiperSlide>
    );
  });
};

const OrderSteps = () => {
  return (
    <Section id="order">
      <Container>
        <$.Wrap>
          <SectionTitle>
            Přístup k objednávce je zaměřen na zákazníka -{" "}
            <span className="text-gradient">mluví za nás činy, ne slova</span>.
          </SectionTitle>
          <$.ContentWrap>
            <$.Block>
              <$.SwiperWrap>
                <Swiper
                  slidesPerView={1.5}
                  centeredSlides={false}
                  spaceBetween={30}
                  grabCursor={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 0 },
                    950: { slidesPerView: 1.3, spaceBetween: 10 },
                    1200: { slidesPerView: 1.6, spaceBetween: 20 },
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {generateSlides(8)}
                </Swiper>
              </$.SwiperWrap>
            </$.Block>
            <$.Block>
              <$.OrderStepsContent>
                <$.OrderStepsTitle>Postup objednávky</$.OrderStepsTitle>
                <$.StepItems>
                  <$.StepItem>
                    <$.StepIcon>1.</$.StepIcon>
                    <$.StepTextWrap>
                      <$.StepTitle>Nezávazná objednávka</$.StepTitle>
                      <$.StepText>
                        Po nakonfigurování skříně a odeslání nezávazné
                        objednávky, Vás budeme kontaktovat do 24. hodin pro
                        sjednání osobní schůzky.
                      </$.StepText>
                    </$.StepTextWrap>
                  </$.StepItem>
                  <$.StepItem>
                    <$.StepIcon>2.</$.StepIcon>
                    <$.StepTextWrap>
                      <$.StepTitle>Osobní setkání</$.StepTitle>
                      <$.StepText>
                        Navštívíme Vás osobně, kde si společně projdeme dekory,
                        možnosti kování a madel. Laserem odměříme prostor pro
                        skříň a složí se 50% záloha. Ihned po úhradě poputuje
                        skříň do výroby.
                      </$.StepText>
                    </$.StepTextWrap>
                  </$.StepItem>
                  <$.StepItem>
                    <$.StepIcon>3.</$.StepIcon>
                    <$.StepTextWrap>
                      <$.StepTitle>Výroba a dodání</$.StepTitle>
                      <$.StepText>
                        Dříve samotnou finalizací výroby, Vás budeme kontaktovat
                        pro sjednání termínu a času montáže skříně. Skříň v
                        dohodnutém termínu dovezeme, smontujeme a předáme novému
                        majiteli 🙂 následně se doplatí zvýšná 50% částka.
                      </$.StepText>
                    </$.StepTextWrap>
                  </$.StepItem>
                </$.StepItems>
              </$.OrderStepsContent>
            </$.Block>
          </$.ContentWrap>
        </$.Wrap>
      </Container>
    </Section>
  );
};

export default OrderSteps;
