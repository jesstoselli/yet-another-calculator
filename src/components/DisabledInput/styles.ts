import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    font-family: "Poppins";
    font-size: 0.75rem;
    color: #f9f9f9;
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;

    width: 6.875rem;
    height: 2.75rem;
    background: #f9f9f9;
    border: 1px solid #1d2d50;
    border-radius: 8px;

    font-family: "Poppins";
    font-size: 1.125rem;
    line-height: 27px;
    color: #000000;
  }
`;
