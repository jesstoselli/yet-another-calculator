import React, { useState, useCallback } from "react";
import Button from "../../components/Button";

import { Container, Screen, Pad } from "./styles";

const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);
  const [operand, setOperand] = useState<string>("");
  const [valueToUse, setValueToUse] = useState<number[]>([]);
  const [operations, setOperations] = useState<string[]>([""]);

  const handleClick = useCallback(
    (btn: string) => {
      let value: number = 0;
      if (
        btn !== "÷" &&
        btn !== "x" &&
        btn !== "-" &&
        btn !== "+" &&
        btn !== "±" &&
        btn !== "x²" &&
        btn !== "%" &&
        btn !== "." &&
        btn !== "=" &&
        btn !== "C"
      ) {
        value = parseFloat(btn);
      }

      if (value === parseFloat(btn)) {
        valueToUse.push(value);
        setCurrentValue(parseFloat(valueToUse.join("")));
        // } else if (btn === ".") {
        //   valueToUse.push(0.0);
        //   setCurrentValue(parseFloat(valueToUse.join("")));
      } else {
        switch (btn) {
          case "=":
            if (operations !== undefined) {
              let firstNum = operations[operations.length - 2];
              let newSetOfOperations = [
                ...operations,
                currentValue.toString(),
                "=",
              ];
              setOperations(newSetOfOperations);

              let operationToExecute = `${firstNum} ${operand} ${currentValue}`;
              setCurrentValue(parseFloat(eval(operationToExecute)));
              setPrevValue(0);
              setValueToUse([]);
            }
            break;
          case "%":
            let valueToPercentage = currentValue / 100;
            setPrevValue(currentValue);
            setCurrentValue(valueToPercentage);
            break;
          case "+":
            let valueToSum = prevValue + currentValue;
            setPrevValue(valueToSum);
            setCurrentValue(valueToSum);
            setOperand("+");
            break;
          case "-":
            let valueToSubtract = prevValue - currentValue;
            setPrevValue(valueToSubtract);
            setCurrentValue(valueToSubtract);
            setOperand("-");
            break;
          case "÷":
            let valueToDivide = prevValue / currentValue;
            setPrevValue(valueToDivide);
            setCurrentValue(valueToDivide);
            setOperand("/");
            break;
          case "x":
            let valueToMultiply = prevValue * currentValue;
            setPrevValue(valueToMultiply);
            setCurrentValue(valueToMultiply);
            setOperand("*");
            break;
          case "±":
            let negativeVal = currentValue * -1;
            setCurrentValue(negativeVal);
            break;
          case "x²":
            let valueToPower = Math.pow(currentValue, 2);
            setCurrentValue(valueToPower);
            break;
          case "C":
            setPrevValue(0);
            setCurrentValue(0);
            setOperations([]);
            setValueToUse([]);
            break;

          default:
            break;
        }
        if (btn === "+" || btn === "-" || btn === "x" || btn === "÷") {
          setValueToUse([]);
          let newSetOfOperations = [
            ...operations,
            currentValue.toString(),
            btn,
          ];
          setOperations(newSetOfOperations);
        } else if (btn === "%" || btn === "x²" || btn === "±") {
          setValueToUse([]);
        }
      }
    },
    [currentValue, operand, operations, prevValue, valueToUse]
  );

  const buttonContent = [
    "%",
    "x²",
    "÷",
    "x",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "C",
    "±",
    "0",
    ".",
  ];

  return (
    <Container>
      <Screen>
        <p>{operations.join(" ")}</p>
        <hr />
        <h4>{currentValue}</h4>
      </Screen>

      <Pad>
        {buttonContent.map((btn) => (
          <Button key={btn} digit={btn} onClick={() => handleClick(btn)} />
        ))}
        <Button
          key='='
          digit='='
          className='enter'
          onClick={() => handleClick("=")}
        />
      </Pad>
    </Container>
  );
};

export default Calculator;
