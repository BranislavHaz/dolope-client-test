import Image from "next/image";
import Section from "@/components/web/Section";
import * as $ from "@/styles/web/layouts/Benefits.styled";

const Benefits = () => {
  return (
    <Section>
      <$.BenefitsContent>
        <$.Benefit>
          <$.Icon>
            <Image
              src={"/icons/web/delivery.svg"}
              width={60}
              height={60}
              alt="Dolope - dodaní ikona"
            />
            <$.Circle />
          </$.Icon>
          <$.Title>Dodání a montáž v průměru 14&nbsp;dní</$.Title>
          <$.Description>
            Náš průměrný čas doručení a montáže skříně je 14 pracovních dnů od
            potvrzení objednávky.
          </$.Description>
        </$.Benefit>
        <$.Benefit>
          <$.Icon>
            <Image
              src={"/icons/web/design.svg"}
              width={60}
              height={60}
              alt="Dolope - dizajnovaní ikona"
            />
            <$.Circle />
          </$.Icon>
          <$.Title>Bezplatná konzultace a poradenství</$.Title>
          <$.Description>
            Odborné konzultace ohledně výběru dekorů, materiálů a rozmístění
            spolu s vizualizací je u nás zdarma.
          </$.Description>
        </$.Benefit>
        <$.Benefit>
          <$.Icon>
            <Image
              src={"/icons/web/price.svg"}
              width={60}
              height={60}
              alt="Dolope - cena ikona"
            />
            <$.Circle />
          </$.Icon>
          <$.Title>Cena bez skrytých poplatků</$.Title>
          <$.Description>
            Cena, kterou od nás obdržíte je konečná, bez skrytých poplatků za
            dopravu, montáž či jiných služeb.
          </$.Description>
        </$.Benefit>
      </$.BenefitsContent>
    </Section>
  );
};

export default Benefits;
