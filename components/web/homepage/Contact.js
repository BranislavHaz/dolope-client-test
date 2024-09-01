import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "./ContactForm";
import * as $ from "@/styles/web/homepage/Contact.styled";

const Contact = ({ translations: t }) => {
  return (
    <Section id="contact">
      <Container>
        <$.Wrap>
          <SectionTitle>
            Chcete se nás na <span className="text-gradient">něco zeptat</span>?
          </SectionTitle>
          <$.WrapContent>
            <$.ContactSection>
              <$.CompanyName>Dolope s.r.o.</$.CompanyName>
              <$.CompanyInfo>
                <$.CompanyData>
                  <$.Bold>IČO: </$.Bold>54840911
                </$.CompanyData>
                <$.CompanyData>
                  <$.Bold>DIČ: </$.Bold>2121814695
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
                  <$.Bold>adresa: </$.Bold>Dubková 69, Lazy pod Makytou 020 55,
                  SK
                </$.CompanyData>
              </$.CompanyInfo>
            </$.ContactSection>
            <$.ContactFormSection>
              <ContactForm translations={t} />
            </$.ContactFormSection>
          </$.WrapContent>
        </$.Wrap>
      </Container>
    </Section>
  );
};

export default Contact;
