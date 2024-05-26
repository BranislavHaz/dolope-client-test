import * as $ from "@/styles/components/steps/step4/StepsBeforeOrder.styled";

const StepsBeforeOrder = () => {
  return (
    <$.Wrap>
      <$.WrapSteps>
        <$.Step>
          <$.HeadlineWrap>
            <$.HeadlineStepNum>1.</$.HeadlineStepNum>
            <$.HeadlineText>
              Dohodnutí termínu pro osobní konzultaci a vizualizace
            </$.HeadlineText>
          </$.HeadlineWrap>
          <$.Text>
            Během telefonického rozhovoru si společně projdeme jednotlivé
            specifikace a rozměry vaší příští skříně, na jejímž základě
            připravíme realistickou vizualizaci. A dohodneme termín pro osobní
            návštěvu <strong>přímo na místě realizace</strong>.
          </$.Text>
        </$.Step>
        <$.Step>
          <$.HeadlineWrap>
            <$.HeadlineStepNum>2.</$.HeadlineStepNum>
            <$.HeadlineText>
              Osobní konzultace a zaměření prostoru
            </$.HeadlineText>
          </$.HeadlineWrap>
          <$.Text>
            Při návštěvě u Vás máme{" "}
            <strong>
              poslední možnost revize či změny před samotnou objednávkou
              materiálů a výroby skříně
            </strong>
            . Na základě vzorníků od výrobců si probereme poslední detaily.
            Následně laserem zaměříme prostor pro skříň a složíte zálohu ve výši
            30% z ceny.
          </$.Text>
        </$.Step>
        <$.Step>
          <$.HeadlineWrap>
            <$.HeadlineStepNum>3.</$.HeadlineStepNum>
            <$.HeadlineText>Doprava a montáž skříně</$.HeadlineText>
          </$.HeadlineWrap>
          <$.Text>
            Vyrobenou skříň dopravíme v dohodnutém termínu přímo k Vám,
            přeneseme na místo realizace a samozřejmě smontujeme
            <strong>
              {" "}
              - vše bez potřeby Vaší pomoci a dodatečných poplatků
            </strong>
            . Následně proběhne úhrada zbývajících 60% z částky za skříň.
          </$.Text>
        </$.Step>
      </$.WrapSteps>
    </$.Wrap>
  );
};

export default StepsBeforeOrder;
