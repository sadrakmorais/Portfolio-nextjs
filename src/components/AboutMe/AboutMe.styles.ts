import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
`;

export const WrapperProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  width: 8rem;
  height: 8rem;
  border: 0.3rem solid #fff;
  box-shadow: rgba(92, 196, 196, 0.4) 0px 0px 60px;
`;
