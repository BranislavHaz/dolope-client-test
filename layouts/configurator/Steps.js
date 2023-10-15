import * as $ from "@/styles/layouts/configurator/Steps.styled";

const Steps = () => {
  return (
    <$.Steps>
      <$.StepsIcons>
        <$.Line />
        <$.Icon $isActive={false}>
          <$.Step>
            <$.Number>1</$.Number>
          </$.Step>
          <$.Text>specifikace</$.Text>
        </$.Icon>
        <$.Icon $isActive={true}>
          <$.Step>
            <$.Number>2</$.Number>
          </$.Step>
          <$.Text>typ skříně</$.Text>
        </$.Icon>
        <$.Icon $isActive={false}>
          <$.Step>
            <$.Number>3</$.Number>
          </$.Step>
          <$.Text>dekory</$.Text>
        </$.Icon>
        <$.Icon $isActive={false}>
          <$.Step>
            <$.Number>4</$.Number>
          </$.Step>
          <$.Text>sumář</$.Text>
        </$.Icon>
      </$.StepsIcons>
    </$.Steps>
  );
};

export default Steps;
