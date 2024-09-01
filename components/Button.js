import styled, { css } from "styled-components";
import { device } from "@/constants/sizeDevices";

const Wrap = styled.a`
  width: ${({ width }) => width};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--primary-color);
      color: var(--dark-color-text);
      border-color: var(--primary-color);

      &:hover {
        background-color: var(--secundary-color);
        color: var(--light-text-color);
        border-color: var(--secundary-color);
      }
    `}

  ${({ secundary }) =>
    secundary &&
    css`
      background-color: var(--secundary-color);
      color: var(--light-text-color);
      border-color: var(--secundary-color);

      &:hover {
        background-color: var(--secundary-color-hover);
        color: var(--light-text-color);
        border-color: var(--secundary-color-hover);
      }
    `}

    ${({ outline }) =>
    outline &&
    css`
      background-color: transparent;
      color: var(--dark-text-color);
      border-color: var(--secundary-color);

      &:hover {
        background-color: var(--secundary-color);
        color: var(--light-text-color);
        border-color: var(--secundary-color);
      }
    `}

    ${({ sm }) =>
    sm &&
    css`
      padding: 0.2rem 0.4rem;
      border-width: 1px;
      border-style: solid;
    `}

    ${({ md }) =>
    md &&
    css`
      padding: 0.4rem 0.6rem;
      border-width: 1px;
      border-style: solid;

      @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
      }
    `}

    ${({ lg }) =>
    lg &&
    css`
      padding: 0.6rem 1rem;
      border-width: 2px;
      border-style: solid;
    `}

    ${({ xl }) =>
    xl &&
    css`
      padding: 0.8rem 1.4rem;
      border-width: 2px;
      border-style: solid;
      gap: 0.45rem;
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  as = "a",
  type = undefined,
  href = undefined,
  onClick = undefined,
  primary = undefined,
  secundary = undefined,
  outline = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  w = "auto",
  disabled,
}) => {
  return (
    <Wrap
      as={as}
      type={type}
      href={href}
      onClick={onClick}
      primary={primary}
      secundary={secundary}
      outline={outline}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      width={w}
      disabled={disabled}
    >
      {children}
    </Wrap>
  );
};

export default Button;
