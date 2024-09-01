import styled from "styled-components";

const Wrap = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  margin: ${({ margin }) => margin};
`;

const Section = ({
  children,
  id = undefined,
  bgColor = "#fff",
  m = "0 0 5rem 0",
}) => {
  return (
    <Wrap id={id} bgColor={bgColor} margin={m}>
      {children}
    </Wrap>
  );
};

export default Section;
