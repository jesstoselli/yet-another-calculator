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
              if (operations.join(" ").length >= 28) {
                let ops = operations.slice(
                  operations.length - 4,
                  operations.length
                );
                setOperations([...ops, currentValue.toString(), btn]);
              } else if (!isFinite(+operations[operations.length - 1])) {
                setOperations([]);
              } else {
                setOperations([...operations, currentValue.toString(), "="]);
              }

              let firstNum = operations[operations.length - 2];
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
            if (!isFinite(valueToSum)) {
              setCurrentValue(0);
            }
            setCurrentValue(valueToSum);
            setPrevValue(valueToSum);
            setOperand("+");
            break;
          case "-":
            let valueToSubtract = prevValue - currentValue;
            if (!isFinite(valueToSubtract)) {
              setCurrentValue(0);
            }
            setCurrentValue(valueToSubtract);
            setPrevValue(valueToSubtract);
            setOperand("-");
            break;
          case "÷":
            let valueToDivide = prevValue / currentValue;
            if (!isFinite(valueToDivide)) {
              setCurrentValue(0);
            }
            setCurrentValue(valueToDivide);
            setPrevValue(valueToDivide);
            setOperand("/");
            break;
          case "x":
            let valueToMultiply = prevValue * currentValue;
            if (!isFinite(valueToMultiply)) {
              console.log("infnite");
              // setCurrentValue(0);
            }
            setCurrentValue(valueToMultiply);
            setPrevValue(valueToMultiply);
            setOperand("*");
            break;
          case "±":
            let negativeVal = currentValue * -1;
            setCurrentValue(negativeVal);
            break;
          case "x²":
            let valueToPower = Math.pow(currentValue, 2);
            if (!isFinite(valueToPower)) {
              setCurrentValue(0);
            } else {
              setCurrentValue(valueToPower);
            }
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
          if (operations.join(" ").length >= 28) {
            let ops = operations.slice(
              operations.length - 4,
              operations.length
            );
            setOperations([...ops, currentValue.toString(), btn]);
          } else if (
            isNaN(+operations[operations.length - 2]) &&
            operations.length > 1
          ) {
            console.log(+operations[operations.length - 2]);
            console.log(operations);
            setOperations([]);
          } else {
            setOperations([...operations, currentValue.toString(), btn]);
          }
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
