import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.header`
  width: 100%;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  height: 5rem;
  gap: 1rem;

  h1 {
    display: flex;
    align-items: center;
    font-family: var(--Raleway);

    b {
      color: #5cc4c4;
    }
  }

  section {
    display: flex;
    gap: 1rem;
    justify-self: flex-end;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    height: 6rem;
    gap: 0;

    h1 {
      justify-self: center;
    }
    section {
      justify-self: center;
    }
  }
`;

export const ContactField = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  justify-content: flex-end;
  color: #aaa;

  p {
    color: #aaa;
  }

  svg {
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
  @media (max-width: 750px) {
    p {
      display: none;
    }
  }
`;
