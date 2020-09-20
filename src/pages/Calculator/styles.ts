import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 26.5rem;
  height: 32.5rem;
`;

export const Screen = styled.section`
  width: 100%;
  height: 7rem;

  margin-bottom: 2rem;
  padding: 2rem;

  background: #f9f9f9;
  color: #000000;
  font-family: "Poppins";

  border: 2px solid #1d2d50;
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  p {
    font-size: 1.125rem;
  }

  hr {
    width: 22.5rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  h4 {
    font-size: 2rem;
  }
`;

export const Pad = styled.section`
  width: 100%;
  /* height: 23.5rem; */
  height: 30rem;

  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr);
  grid-template-areas:
    "button button button button"
    "button button button button"
    "button button button button"
    "button button button button"
    "button button button button";
  column-gap: 3rem;
  row-gap: 2rem;
`;
