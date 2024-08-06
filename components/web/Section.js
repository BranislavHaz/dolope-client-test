import * as $ from "@/styles/web/components/Section.styled";

const Section = ({ children, label, title }) => {
  return (
    <$.SectionWrap>
      <$.Section>
        <>
          {label && <$.Label>{label}</$.Label>}
          {title && <$.Title>{title}</$.Title>}
          {children}
        </>
      </$.Section>
    </$.SectionWrap>
  );
};

export default Section;
