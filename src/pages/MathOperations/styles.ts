import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 26.5rem;
  height: 32.5rem;

  hr {
    width: 26rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 2rem 0;
  }
`;

export const Inputs = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 21.375rem;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: "Poppins";
    font-size: 1.125rem;
    color: #f9f9f9;
    margin-bottom: 0.5rem;
  }

  input {
    margin-top: 0.5rem;
    padding: 0.5rem;

    width: 5.5rem;
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

export const Results = styled.section`
  width: 100%;
  height: 24.25rem;

  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr);
  grid-template-areas:
    "button button button"
    "button button button"
    "button button button"
    "button button button";
  column-gap: 2rem;
  row-gap: 2rem;
`;
