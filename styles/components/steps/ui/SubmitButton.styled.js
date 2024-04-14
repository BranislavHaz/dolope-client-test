import styled from "styled-components";
import { device } from "@/utils/devices";

export const SubmitWrap = styled.div`
  position: sticky;
  bottom: -2px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  cursor: pointer;
`;

export const SubmitButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.7rem 0.7rem 0;
  padding: 0.6rem 1.1rem;
  background-color: var(--main-color);
  border: 0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  @media ${device.tablet} {
    width: 6rem;
    height: 6rem;
    margin: 0 2rem 2rem 0;
  }
`;

export const SubmitIcon = styled.div`
  img {
    width: 1.3rem;
    height: 1.3rem;

    @media ${device.tablet} {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const SubmitText = styled.div`
  font-size: 12px;
  color: #000;

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
