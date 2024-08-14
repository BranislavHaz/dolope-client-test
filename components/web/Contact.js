import Section from "./Section";
import ContactForm from "./ContactForm";
import * as $ from "@/styles/web/components/Contact.styled";

const Contact = ({ translations: t }) => {
  return (
    <Section
      id={"contact"}
      label={t.label}
      title={t.title}
      theme="dark"
      padding="no-padding"
    >
      <$.Wrap>
        <$.ContactSection>
          <$.CompanyName>Dolope s.r.o.</$.CompanyName>
          <$.CompanyInfo>
            <$.CompanyData>
              <$.Bold>IČO: </$.Bold>54840911
            </$.CompanyData>
            <$.CompanyData>
              <$.Bold>DIČ: </$.Bold>2121814695
            </$.CompanyData>
            <$.CompanyData>
              <$.Bold>IČ DPH: </$.Bold>SK2121814695
            </$.CompanyData>
          </$.CompanyInfo>
          <$.CompanyInfo>
            <$.CompanyData>
              <$.Bold>tel: </$.Bold>
              <a href={`tel:${t.phone}`}>{t.phone}</a>
            </$.CompanyData>
            <$.CompanyData>
              <$.Bold>e-mail: </$.Bold>
              <a href={`mailto:${t.email}`}>{t.email}</a>
            </$.CompanyData>
            <$.CompanyData>
              <$.Bold>adresa: </$.Bold>Dubková 69, Lazy pod Makytou 020 55, SK
            </$.CompanyData>
          </$.CompanyInfo>
        </$.ContactSection>
        <$.ContactFormSection>
          <ContactForm translations={t} />
        </$.ContactFormSection>
      </$.Wrap>
    </Section>
  );
};

export default Contact;
