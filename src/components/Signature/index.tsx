import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { SiGithub, SiWhatsapp } from "react-icons/si";

import { Container } from "./styles";

const Signature: React.FC = ({ children }) => {
  return (
    <Container>
      <p>
        project by <strong>JessTo</strong>
      </p>
      <p>  >  </p>
      <div>
        <a
          href='https://github.com/jesstoselli'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/jessyca-toselli/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FiLinkedin />
        </a>
        <a
          href='https://wa.me/5521984841825'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiWhatsapp />
        </a>
      </div>
    </Container>
  );
};

export default Signature;
