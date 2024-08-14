import Image from "next/image";
import Section from "@/components/web/Section";
import * as $ from "@/styles/web/layouts/Benefits.styled";

const Benefits = ({ translations: t }) => {
  return (
    <Section>
      <$.BenefitsContent>
        <$.Benefit>
          <$.Icon>
            <Image
              src={"/icons/web/delivery.svg"}
              width={60}
              height={60}
              alt={t.delivery.alt_img}
            />
            <$.Circle />
          </$.Icon>
          <$.Title>{t.delivery.title}</$.Title>
          <$.Description>{t.delivery.description}</$.Description>
        </$.Benefit>
        <$.Benefit>
          <$.Icon>
            <Image
              src={"/icons/web/design.svg"}
              width={60}
              height={60}
              alt={t.consultation.alt_img}
            />
            <$.Circle />
          </$.Icon>
          <$.Title>{t.consultation.title}</$.Title>
          <$.Description>{t.consultation.description}</$.Description>
        </$.Benefit>
        <$.Benefit>
          <$.Icon>
            <Image
              src={"/icons/web/price.svg"}
              width={60}
              height={60}
              alt={t.price.alt_img}
            />
            <$.Circle />
          </$.Icon>
          <$.Title>{t.price.title}</$.Title>
          <$.Description>{t.price.description}</$.Description>
        </$.Benefit>
      </$.BenefitsContent>
    </Section>
  );
};

export default Benefits;
