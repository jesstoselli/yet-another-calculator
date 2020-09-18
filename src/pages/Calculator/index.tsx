import React, { useState, useCallback } from "react";
import Button from "../../components/Button";

import { Container, Screen, Pad } from "./styles";

const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(0);

  const [operations, setOperations] = useState([]);

  const handleClick = useCallback((btn: string) => {
    let operator = "";
    let value: string = "";
    if (
      btn === "÷" ||
      btn === "x" ||
      btn === "-" ||
      btn === "+" ||
      btn === "±" ||
      btn === "C"
    ) {
      operator = btn;
    } else {
      value = btn;
    }

    console.log(btn);
    console.log(value);
    console.log(operator);

    // let valueToUse: string[] = [];
    // switch (btn) {
    //   case value === btn:
    //     valueToUse.push(value);
    //     console.log(valueToUse);
    //     break;
    //   case value === "÷":
    //     let finalValue = Number(valueToUse.join(""));
    //     let previousValue = currentValue;
    //     setCurrentValue(previousValue / finalValue);
    //     break;
    //   case value === "x":
    //     finalValue = Number(valueToUse.join(""));
    //     previousValue = currentValue;
    //     setCurrentValue(previousValue * finalValue);
    //     break;
    //   case value === "-":
    //     finalValue = Number(valueToUse.join(""));
    //     previousValue = currentValue;
    //     setCurrentValue(previousValue - finalValue);
    //     break;
    //   case value === "+":
    //     finalValue = Number(valueToUse.join(""));
    //     previousValue = currentValue;
    //     setCurrentValue(previousValue + finalValue);
    //     break;
    //   case value === "±":
    //     finalValue = Number(valueToUse.join("")) * -1;
    //     setCurrentValue(finalValue);
    //     break;
    //   case value === "C":
    //     setCurrentValue(0);
    //     break;

    //   default:
    //     break;
    // }
  }, []);

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
        <h4>{currentValue}</h4>
      </Screen>

      <Pad>
        {buttonContent.map((btn) => (
          <Button key={btn} digit={btn} onClick={() => handleClick(btn)} />
        ))}
        <Button key='=' digit='=' className='enter' />
      </Pad>
    </Container>
  );
};

export default Calculator;
