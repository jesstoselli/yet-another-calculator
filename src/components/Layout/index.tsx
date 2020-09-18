import React from "react";
import { NavLink } from "react-router-dom";

import Signature from "../Signature";

import { Container, Content, Footer } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <h1>yet another calculator</h1>
        <h3>project developed with reactjs and styled components</h3>
      </header>
      <Content>{children}</Content>
      <Footer>
        <NavLink to='/' exact activeClassName='active'>
          Calculator 1.0
        </NavLink>
        <NavLink to='/mathops' activeClassName='active'>
          Calculator 2.0
        </NavLink>
      </Footer>
      <Signature />
    </Container>
  );
};

export default Layout;
