import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const WrapSteps = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Step = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const HeadlineWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  margin-bottom: 1rem;
`;

export const HeadlineStepNum = styled.div`
  display: flex;
  align-items: end;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--main-color);
`;

export const HeadlineText = styled.h4`
  font-size: 1.2rem;
  color: var(--main-color);
`;

export const Text = styled.div`
  padding: 0.5rem;
  color: #4b4b4b;
`;
