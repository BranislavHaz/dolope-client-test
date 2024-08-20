import Image from "next/image";
import Section from "@/components/web/Section";
import * as $ from "@/styles/web/components/OrderSection.styled";

const OrderSection = ({ translations: t }) => {
  return (
    <Section id={"order"} label={t.label} title={t.title}>
      <$.Content>
        <$.Image>
          <Image
            src={`/images/web/order-progress.jpg`}
            layout="fill"
            objectFit="contain"
            alt={t.alt_img}
            className={"device active"}
          />
        </$.Image>
        <$.TextWrap>
          <$.TextBlock>
            <$.Title>
              <$.OrderNum>1.</$.OrderNum>
              {t.steps["1"].title}
            </$.Title>
            <$.Text>{t.steps["1"].description}</$.Text>
          </$.TextBlock>
          <$.TextBlock>
            <$.Title>
              <$.OrderNum>2.</$.OrderNum>
              {t.steps["2"].title}
            </$.Title>
            <$.Text>{t.steps["2"].description}</$.Text>
          </$.TextBlock>
          <$.TextBlock>
            <$.Title>
              <$.OrderNum>3.</$.OrderNum>
              {t.steps["3"].title}
            </$.Title>
            <$.Text>{t.steps["3"].description}</$.Text>
          </$.TextBlock>
        </$.TextWrap>
      </$.Content>
    </Section>
  );
};
export default OrderSection;
