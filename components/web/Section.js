import * as $ from "@/styles/web/components/Section.styled";

const Section = ({
  id,
  children,
  label,
  title,
  theme = "light",
  padding = "classic",
}) => {
  return (
    <$.SectionWrap id={id ? id : ""}>
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
