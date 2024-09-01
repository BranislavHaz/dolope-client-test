import Img from "@/components/Img";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import * as $ from "@/styles/web/homepage/Visualization.styled";

const generateGalleryItems = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => {
    const number = start + i;
    const src = `/images/web/visualisations/visualisation_0${number}.jpg`;
    return (
      <$.GalleryItem key={number}>
        <Img
          src={src}
          alt={`${number}# Obrázek fotorealistické vizualizace vestavěné skříně.`}
          fill
          style={{
            objectFit: "cover",
            background: "transparent",
          }}
        />
      </$.GalleryItem>
    );
  });
};

const Visualisation = () => {
  return (
    <Section id="visualization">
      <Container>
        <$.Wrap>
          <SectionTitle>
            Fotorealistická vizualizace vestavěné skříně{" "}
            <span className="text-gradient">ZDARMA</span>
          </SectionTitle>
          <$.ContentWrap>
            <$.Text>
              Nebyli bychom to my, kdyby Vám nenabídneme to, co byste jinde
              hledali nadarmo. Každému našemu zákazníkovi nabízíme
              fotorealistickou vizualizaci Vaší budoucí skříně. Přece jen, když
              něco vidíte, umíte si lépe představit zda zvolené dekory jsou „to
              pravé ořechové“ pro Váš prostor.
            </$.Text>
            <$.GalleryWrap>{generateGalleryItems(2, 5)}</$.GalleryWrap>
          </$.ContentWrap>
        </$.Wrap>
      </Container>
    </Section>
  );
};

export default Visualisation;
