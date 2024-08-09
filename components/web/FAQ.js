import { useState, useCallback } from "react";
import Section from "./Section";
import * as $ from "@/styles/web/components/FAQ.styled";

const FAQ = () => {
  const [activeElement, setActiveElement] = useState(0);

  const handleClick = useCallback((elementId) => {
    setActiveElement((prevElement) =>
      prevElement === elementId ? 0 : elementId
    );
  }, []);

  const faqItems = [
    {
      id: 1,
      question:
        "Je možné vyrobit typ skříně, která se nenachází v konfigurátoru?",
      answer:
        "Samozřejmě, je možné vyrobit i typ skříně, která není v konfigurátoru. Kontaktujte nás pro více informací.",
    },
    {
      id: 2,
      question: "Kolik trvá skříň vyrobit a smontovat?",
      answer:
        "Doba dodání je závislá na mnoha faktorech, jako je dostupnost vybraných dekorů, kování, madel, množství zakázek. Avšak naším průměrem je 14 pracovních dnů od závazného objednání.",
    },
    {
      id: 3,
      question:
        "Je toho v nabídce strašně mnoho, jak se rozhodnout pro konkrétní dekor, kování nebo madla?",
      answer:
        "Jsme si vědomi naší bohaté nabídky a nechceme to měnit, nakolik se snažíme poskytnout co nejširší sortiment. Pro pomoc při výběru nás kontaktujte. Co bude v našich silách probereme po telefonu nebo mailu, finální a tedy konečný výběr potvrdíte až při osobním setkání na kterém Vám představíme dekory a kování fyzicky. Rozumíme, že je lepší věc jednou ohmatat, než 3krát vidět na internetu 🙂",
    },
    {
      id: 4,
      question: "Z jakých materiálů je vyroben vnitřek skříně?",
      answer:
        "Vnitřek skříně vyrábíme z laminované dřevotřísky renomovaných značek Egger nebo Kronospan. Tloušťka materiálu je 18 mm a hrany jednotlivých dílců jsou hraněny kvalitní 2 mm ABS (plastovou) páskou, která se vyznačuje vysokou odolností i ve vlhčích prostorách.",
    },
    {
      id: 5,
      question: "Z jakých materiálů jsou vyrobeny posuvné dveře?",
      answer:
        "Dveře vyrábíme buď se zrcadlem, které je podlepeno bezpečnostní fólií (při rozbití zrcadla nepopadají střepy na zem, ale vytvoří se pavučina), barevnými skly značky Lacobel, nebo laminovaných desek značky Egger a Kronospan. Tloušťka zrcadla a barevných skel je 4 mm a dřevotřísky 10 mm. Přešli jsme na 10 mm tloušťku materiálu i přesto, že je dostupných méně dekorů. Avšak díky své menší váze oproti 18 mm tloušťce, poskytují tišší bohyb, lepší manipulaci, ale zároveň nám umožnují vyrábět mnohem širší dveře, což je jistě elegantnější a na oko krásnější než úzké a těžké dveře.",
    },
    {
      id: 6,
      question: "Jaké jsou minimální a maximální rozměry skříně?",
      answer:
        "Po dlouhém hledání jsme zasmluvněni se společností, která nám umí dodat madla v celkové délce až 5,6 metru a horizontální profily ve stejné délce. Proto si myslím, že limitem je jen samotná konstrukce, stabilita a bezpečnost. Co se týká nejmenších rozměrů, tam také limity nevidíme, jde spíše o otázku praktičnosti a vizuálu.",
    },
    {
      id: 7,
      question: "Děláte i atypické skříně do šikminy nebo rohu?",
      answer:
        "Skříně do šikmin momentálně z kapacitních důvodů neděláme, nicméně rohové skříně pro nás nejsou problémem.",
    },
    {
      id: 8,
      question: "Je možné si objednat jen posuvné dveře/vnitřek skříně?",
      answer:
        "Samozřejmě. Není pro nás problém zhotovit buď samostatné posuvné dveře, nebo naopak vnitřek skříně. Pro více info nás kontaktujte.",
    },
    {
      id: 9,
      question: "Vyrábíte i jiný typ nábytku než skříně?",
      answer:
        "V současnosti jsme fokusováni výhradně jen na skříně a úložný nábytek. V budoucnosti jsme této otázce otevření, avšak momentálně by to zpomalilo naši efektivitu, čímž by se prodloužily dodací lhůty. I kvůli vám se proto nechceme rozšiřovat v tomto stylu.",
    },
  ];

  return (
    <Section
      label="FAQ"
      title="Otázky, na které se nás často ptáte"
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
