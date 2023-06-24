import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.header`
  width: 100%;
  padding: 0.5rem 0;
  display: grid;
  align-items: center;
  margin-top: 1rem;
`;
export const CurriculumButton = styled.a`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    font-weight: 700;
    border: 2px solid #5cc4c4;
    padding: 0.5rem 3rem;
    color: #5cc4c4;
    transition: 0.3s all ease;

    &:hover {
      background: #5cc4c4;
      color: #fff;
    }
  }

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #5cc4c4;
  }
  &::after {
    content: "";
    width: 20%;
    height: 1px;
    background: #5cc4c4;
  }

  @media (max-width: 450px) {
    gap: 1rem;

    span {
      padding: 0.3rem 1.5rem;
    }
  }
`;
