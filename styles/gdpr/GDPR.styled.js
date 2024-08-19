import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1200px;

  a {
    font-weight: 500;
    color: var(--main-color);
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Section = styled.div`
  margin: 2rem 0;

  ul {
    list-style-position: inside;
  }

  ul ul {
    padding-left: 1rem;
  }
`;

export const NoBulletList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 2rem;
`;

export const SectionRow = styled.p`
  margin: 1rem 0;
`;

export const Strong = styled.span`
  font-weight: 500;
`;
