import styled from "styled-components";

export const Steps = styled.div`
  width: 100%;
  height: var(--m-steps-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
`;

export const Line = styled.hr``;

export const StepsIcons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  ${Line} {
    width: 80%;
    position: absolute;
    margin: 0;
    top: 0.75em;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.05em dashed var(--non-active-color);
    opacity: 0.8;
    z-index: 1;
  }
`;

export const Step = styled.div``;
export const Number = styled.div``;
export const Text = styled.div``;

export const Icon = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
  z-index: 2;

  ${Step} {
    width: 1.5em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    ${(props) => props.$isActive && "border: 1px solid var(--main-color)"};
  }

  ${Number} {
    width: 1.2em;
    height: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isActive ? "var(--main-color)" : "var(--non-active-color)"};
    color: var(--background-color);
    font-size: 0.9em;
  }

  ${Text} {
    font-size: 0.6em;
    text-transform: uppercase;
    color: ${(props) =>
      props.$isActive ? "var(--main-color)" : "var(--non-active-color)"};
  }
`;
