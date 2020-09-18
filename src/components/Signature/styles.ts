import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 20rem;

  margin-top: 2rem;

  /* position: absolute; */
  /* flex-direction: column; */
  /* align-items: flex-end; */
  /* text-align: right; */

  /* top: 48px;
  right: 124px; */

  p {
    font-family: "Poppins";
    font-size: 1rem;
    line-height: 1.5rem;

    strong {
      font-size: 1.125rem;
      font-weight: bold;
    }
  }

  div {
    display: flex;
    align-items: flex-end;
    /* text-align: right; */

    a {
      /* margin-top: 0.75rem; */
      color: #f9f9f9;

      svg {
        width: 20px;
        height: 20px;

        &:hover {
          width: 24px;
          height: 24px;
        }
      }
      & + a {
        margin-left: 0.8rem;
      }
    }
  }
`;
