import Section from "./Section";
import ContactForm from "./ContactForm";
import * as $ from "@/styles/web/components/Contact.styled";

const Contact = () => {
  return (
    <Section
      id={"contact"}
      label="Kontakt"
      title="Chcete se nás na něco zeptat?"
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
              <a href="tel: +420 999 666 585">+420 999 666 585</a>
            </$.CompanyData>
            <$.CompanyData>
              <$.Bold>e-mail: </$.Bold>
              <a href="mailto: kontakt@dolope.cz">kontakt@dolope.cz</a>
            </$.CompanyData>
            <$.CompanyData>
              <$.Bold>adresa: </$.Bold>Dubková 69, Lazy pod Makytou 020 55, SK
            </$.CompanyData>
          </$.CompanyInfo>
        </$.ContactSection>
        <$.ContactFormSection>
          <ContactForm />
        </$.ContactFormSection>
      </$.Wrap>
    </Section>
  );
};

export default Contact;
