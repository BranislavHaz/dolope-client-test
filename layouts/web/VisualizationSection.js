import Image from "next/image";
import Section from "@/components/web/Section";
import * as $ from "@/styles/web/layouts/VisualizationSection.styled";

const VisualizationSection = () => {
  return (
    <Section
      id={"visualization"}
      label={"Vizualizace"}
      title={"Fotorealistická vizualizace vestavěné skříně ZDARMA."}
    >
      <$.Wrap>
        <$.Text>
          Nebyli bychom to my, kdyby Vám nenabídneme to, co byste jinde hledali
          nadarmo. Každému našemu zákazníkovi nabízíme fotorealistickou
          vizualizaci Vaší budoucí skříně. Přece jen, když něco vidíte, umíte si
          lépe představit zda zvolené dekory jsou „to pravé ořechové“ pro Váš
          prostor.
        </$.Text>
        <$.Images>
          <$.ImageWrap>
            <Image
              src={`/images/web/vizual1.png`}
              layout="fill"
              objectFit="contain"
              alt="Dolope - obrázek konfiguráora"
              className={"device active"}
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <Image
              src={`/images/web/vizual2.png`}
              layout="fill"
              objectFit="contain"
              alt="Dolope - obrázek konfiguráora"
              className={"device active"}
            />
          </$.ImageWrap>
          <$.ImageWrap>
            <Image
              src={`/images/web/vizual3.png`}
              layout="fill"
              objectFit="contain"
              alt="Dolope - obrázek konfiguráora"
              className={"device active"}
            />
          </$.ImageWrap>
        </$.Images>
      </$.Wrap>
    </Section>
  );
};

export default VisualizationSection;
