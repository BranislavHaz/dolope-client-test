import * as $ from "@/styles/configurator/components/steps/step4/StepsBeforeOrder.styled";

const StepsBeforeOrder = ({ translations: t }) => {
  return (
    <$.Wrap>
      <$.WrapSteps>
        <$.Step>
          <$.NumWrap>01</$.NumWrap>
          <$.ContentWrap>
            <$.TitleWrap>{t.content["1"].title}</$.TitleWrap>
            <$.Text>{t.content["1"].description}</$.Text>
          </$.ContentWrap>
        </$.Step>
        <$.Step>
          <$.NumWrap>02</$.NumWrap>
          <$.ContentWrap>
            <$.TitleWrap>{t.content["2"].title}</$.TitleWrap>
            <$.Text>{t.content["2"].description}</$.Text>
          </$.ContentWrap>
        </$.Step>
        <$.Step>
          <$.NumWrap>03</$.NumWrap>
          <$.ContentWrap>
            <$.TitleWrap>{t.content["3"].title}</$.TitleWrap>
            <$.Text>{t.content["3"].description}</$.Text>
          </$.ContentWrap>
        </$.Step>
      </$.WrapSteps>
    </$.Wrap>
  );
};

export default StepsBeforeOrder;
