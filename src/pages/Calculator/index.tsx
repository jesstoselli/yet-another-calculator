import React from "react";
import Button from "../../components/Button";

import { Container, Screen, Pad } from "./styles";

const Calculator: React.FC = () => {
  const buttonContent = [
    "÷",
    "x",
    "-",
    "+",
    "7",
    "8",
    "9",
    "±",
    "4",
    "5",
    "6",
    "C",
    "1",
    "2",
    "3",
  ];

  return (
    <Container>
      <Screen>
        <p>10 + 12</p>
        <hr />
        <h4>22</h4>
      </Screen>

      <Pad>
        {buttonContent.map((btn) => (
          <Button key={btn} digit={btn} />
        ))}
        <Button key='=' digit='=' className='enter' />
      </Pad>
    </Container>
  );
};

export default Calculator;
