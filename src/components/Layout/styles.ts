import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.main`
  position: relative;

  width: 1120px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */

  padding: 3rem 0;

  header {
    width: 34rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    /* border: 1px solid black; */

    h1 {
      font-family: "Rubik";
      font-weight: 500;
      font-size: 3rem;
      line-height: 3.625rem;
      color: #fcdab7;
      margin-bottom: 1rem;
    }

    h3 {
      width: 21.5rem;
      font-family: "Rubik";
      font-size: 1.5rem;
      line-height: 2.125rem;
      color: #fcdab7;
    }
  }
`;

export const Content = styled.section`
  width: 34rem;
  height: 38.5rem;

  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #133b5c;
  border: 2px solid #2b364e;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Footer = styled.footer`
  width: 34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    width: 14.125rem;
    height: 2.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fcdab7;

    border: 1px solid #f9f9f9;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: "Rubik";
    font-weight: 500;
    font-size: 1.5rem;
    color: #1d2d50;

    &:hover {
      background: ${shade(0.2, "#fcdab7")};
    }
  }

  a.active {
    color: #fcdab7;
    border: 1px solid #f9f9f9;
    background: #1d2d50;

    &:hover {
      background: ${shade(0.2, "#1d2d50")};
    }
  }
`;
