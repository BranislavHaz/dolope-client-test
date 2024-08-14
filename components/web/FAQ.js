import { useState, useCallback } from "react";
import Section from "./Section";
import * as $ from "@/styles/web/components/FAQ.styled";

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
    <Section
      id={"faq"}
      label={t.label}
      title={t.title}
      theme="dark"
      padding="no-padding"
    >
      <$.Wrap>
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
      </$.Wrap>
    </Section>
  );
};

export default FAQ;
