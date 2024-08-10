import Image from "next/image";
import Section from "@/components/web/Section";
import * as $ from "@/styles/web/layouts/OrderSection.styled";

const OrderSection = () => {
  return (
    <Section
      id={"order"}
      label={"objednávka"}
      title={
        "Přístup k objednávce je zaměřen na zákazníka - mluví za nás činy, ne slova."
      }
    >
      <$.Content>
        <$.Image>
          <Image
            src={`/images/web/postup-objednavky.jpg`}
            layout="fill"
            objectFit="contain"
            alt="Dolope - obrázek konfiguráora"
            className={"device active"}
          />
        </$.Image>
        <$.TextWrap>
          <$.TextBlock>
            <$.Title>
              <$.OrderNum>1.</$.OrderNum>
              Nezávazná objednávka
            </$.Title>
            <$.Text>
              Po nakonfigurování skříně a odeslání nezávazné objednávky, Vás
              budeme kontaktovat do 24. hodin pro sjednání osobní schůzky.
            </$.Text>
          </$.TextBlock>
          <$.TextBlock>
            <$.Title>
              <$.OrderNum>2.</$.OrderNum>
              Osobní setkání
            </$.Title>
            <$.Text>
              Navštívíme Vás osobně, kde si společně projdeme dekory, možnosti
              kování a madel. Laserem odměříme prostor pro skříň a složí se 50%
              záloha. Ihned po úhradě poputuje skříň do výroby.
            </$.Text>
          </$.TextBlock>
          <$.TextBlock>
            <$.Title>
              <$.OrderNum>3.</$.OrderNum>
              Výroba a dodání
            </$.Title>
            <$.Text>
              Dříve samotnou finalizací výroby, Vás budeme kontaktovat pro
              sjednání termínu a času montáže skříně. Skříň v dohodnutém termínu
              dovezeme, smontujeme a předáme novému majiteli 🙂 následně se
              doplatí zvýšná 50% částka.
            </$.Text>
          </$.TextBlock>
        </$.TextWrap>
      </$.Content>
    </Section>
  );
};
export default OrderSection;
