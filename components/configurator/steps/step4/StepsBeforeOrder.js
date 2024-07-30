import * as $ from "@/styles/components/steps/step4/StepsBeforeOrder.styled";

const StepsBeforeOrder = () => {
  return (
    <$.Wrap>
      <$.WrapSteps>
        <$.Step>
          <$.NumWrap>01</$.NumWrap>
          <$.ContentWrap>
            <$.TitleWrap>
              Dohodnutí termínu pro osobní konzultaci a vizualizace
            </$.TitleWrap>
            <$.Text>
              Během krátkého telefonického rozhovoru spolu probereme všechny
              specifikace a rozměry vaší nové skříně. Na základě těchto
              informací připravíme realistickou vizualizaci a domluvíme si
              termín pro osobní návštěvu{" "}
              <strong>přímo na místě realizace</strong>.
            </$.Text>
          </$.ContentWrap>
        </$.Step>
        <$.Step>
          <$.NumWrap>02</$.NumWrap>
          <$.ContentWrap>
            <$.TitleWrap>Osobní konzultace a zaměření prostoru</$.TitleWrap>
            <$.Text>
              Při návštěvě u Vás doma máme{" "}
              <strong>
                poslední možnost provést revize či změny před samotnou
                objednávkou materiálů a výrobou skříně
              </strong>
              . Společně si probereme vzorníky od našich výrobců a doladíme
              poslední detaily. Poté laserem přesně zaměříme prostor pro skříň.
              V tuto chvíli složíte zálohu ve výši 30 % z ceny.
            </$.Text>
          </$.ContentWrap>
        </$.Step>
        <$.Step>
          <$.NumWrap>03</$.NumWrap>
          <$.ContentWrap>
            <$.TitleWrap>Doprava a montáž skříně</$.TitleWrap>
            <$.Text>
              Vaši vyrobenou skříň dopravíme v dohodnutém termínu přímo k Vám
              domů, přeneseme ji na místo realizace a kompletně smontujeme.{" "}
              <strong>
                Vše proběhne bez potřeby Vaší pomoci a bez dodatečných poplatků
              </strong>
              . Po montáži proběhne úhrada zbývajících 60 % z celkové částky za
              skříň
            </$.Text>
          </$.ContentWrap>
        </$.Step>
      </$.WrapSteps>
    </$.Wrap>
  );
};

export default StepsBeforeOrder;
