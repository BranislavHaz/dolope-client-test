import * as $ from "@/styles/web/components/Section.styled";

const Section = ({
  children,
  label,
  title,
  theme = "light",
  padding = "classic",
}) => {
  return (
    <$.SectionWrap>
      <$.Section $theme={theme} $padding={padding}>
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
