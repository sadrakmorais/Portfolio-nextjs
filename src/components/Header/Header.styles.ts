import styled from "styled-components";
import Link from "next/link";
export const Wrapper = styled.header`
  width: 100%;
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
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
`;

export const ContactField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
  color: #ccc;

  span {
    color: #ccc;
  }

  svg {
    min-height: 1.5rem;
    min-width: 1.5rem;
  }
`;
