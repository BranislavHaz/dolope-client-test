import { useState, useCallback } from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import * as $ from "@/styles/web/homepage/FAQ.styled";

const FAQ = ({ translations: t }) => {
  const [activeElement, setActiveElement] = useState(0);

  const handleClick = useCallback((elementId) => {
    setActiveElement((prevElement) =>
      prevElement === elementId ? 0 : elementId
    );
  }, []);

  // Dynamické generovanie zoznamu faqItems
  const faqItems = Object.keys(t.items).map((key) => ({
    id: parseInt(key),
    question: t.items[key].question,
    answer: t.items[key].answer,
  }));

  return (
    <Section id="faq" bgColor="#dbdada">
      <Container bgColor="#dbdada">
        <$.Wrap>
          <SectionTitle>Otázky, na které se nás často ptáte</SectionTitle>
          <$.WrapContent>
            {faqItems.map((item) => (
              <$.WrapElement
                key={item.id}
                $isActive={activeElement === item.id}
                onClick={() => handleClick(item.id)}
              >
                <$.Question>
                  {item.question}
                  <$.Close $isActive={activeElement === item.id} />
                </$.Question>
                <$.Answer className="answer">{item.answer}</$.Answer>
              </$.WrapElement>
            ))}
          </$.WrapContent>
        </$.Wrap>
      </Container>
    </Section>
  );
};

export default FAQ;
