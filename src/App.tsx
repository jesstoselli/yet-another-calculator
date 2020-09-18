import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
      <GlobalStyle />
    </Router>
  );
};

export default App;
