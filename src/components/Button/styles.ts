import styled from "styled-components";
import { shade } from "polished";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #1d2d50;
  border: 1px solid #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  height: 70px;
  width: 70px;

  font-family: "Rubik";
  font-weight: 500;
  font-size: 2.625rem;
  color: #f9f9f9;

  &:hover {
    background: ${shade(0.2, "#1d2d50")};
  }

  &.enter {
    background: #f9f9f9;
    border: 3px solid #1d2d50;
    color: #1d2d50;

    &:hover {
      background: ${shade(0.2, "#f9f9f9")};
    }
  }
`;
