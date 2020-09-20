import React, { useState, useCallback } from "react";
import Button from "../../components/Button";

import { Container, Screen, Pad } from "./styles";

const Calculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);
  const [currentOperand, setCurrentOperand] = useState<string>("");

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
        value = Number(btn);
      }

      if (value === Number(btn)) {
        console.log(value);
        valueToUse.push(value);
        setCurrentValue(Number(valueToUse.join("")));
        console.log(valueToUse);
        // } else if (btn === ".") {
        //   if (!/\./.test(String(currentValue))) {
        //     setCurrentValue(Number(String(currentValue) + "."));
        //   }
      } else {
        setCurrentOperand(btn);
        let newSetOfOperations = [
          ...operations,
          currentOperand,
          String(currentValue),
        ];
        setOperations(newSetOfOperations);

        switch (btn) {
          case "=":
            console.log(btn);
            if (operations !== undefined) {
              setCurrentValue(Number(operations.pop()));
            }
            break;
          case "%":
            let valueToPercentage = currentValue / 100;
            setCurrentValue(valueToPercentage);
            setPrevValue(currentValue);
            break;
          case "+":
            let valueToSum = prevValue + currentValue;
            setPrevValue(currentValue);
            setCurrentValue(valueToSum);
            // let newSetOfOperations = [...operations, String(currentValue)];
            // setOperations(newSetOfOperations);

            break;
          case "-":
            let valueToSubtract = prevValue + currentValue;
            setPrevValue(currentValue);
            setCurrentValue(valueToSubtract);
            break;
          case "÷":
            let valueToDivide = prevValue / currentValue;
            setPrevValue(currentValue);
            setCurrentValue(valueToDivide);
            break;
          case "x":
            let valueToMultiply = prevValue * currentValue;
            setPrevValue(currentValue);
            setCurrentValue(valueToMultiply);
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
            setOperations([]);
            setCurrentOperand("");
            setPrevValue(0);
            setCurrentValue(0);
            break;

          default:
            break;
        }
        setValueToUse([]);
      }
      // setValueToUse([]);
      // valueToUse = [];

      // let newSetOfOperations = [
      //   ...operations,
      //   currentValue.toString(),
      //   currentOperand,
      // ];
      // setOperations(newSetOfOperations);
    },
    [currentOperand, currentValue, operations, prevValue, valueToUse]
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
