import React, { useState } from "react";

import DisabledInput from "../../components/DisabledInput";

import primeNumbers from "../../helpers/primeNumbers";
import factorial from "../../helpers/factorial";

import { Container, Inputs, Results } from "./styles";

interface InputLabelType {
  label: string;
  value: number | number[];
}

const MathOperations: React.FC = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  const inputLabels: InputLabelType[] = [
    {
      label: "sum (A + B):",
      value: inputA + inputB,
    },
    {
      label: "subtract (A - B):",
      value: inputA - inputB,
    },
    {
      label: "subtract (B - A):",
      value: inputB - inputA,
    },
    {
      label: "multiply (A * B):",
      value: inputA * inputB,
    },
    {
      label: "divide (A / B):",
      value: inputA / inputB,
    },
    {
      label: "divide (B / A):",
      value: inputB * inputA,
    },
    {
      label: "power (A²):",
      value: inputA ** inputA,
    },
    {
      label: "power (B²):",
      value: inputB ** inputB,
    },
    {
      label: "whole divisiors (A):",
      value: primeNumbers(inputA),
    },
    {
      label: "whole divisiors (B):",
      value: primeNumbers(inputB),
    },
    {
      label: "fatorial of A (A!):",
      value: factorial(inputA),
    },
    {
      label: "fatorial of B (B!):",
      value: factorial(inputB),
    },
  ];

  return (
    <Container>
      <Inputs>
        <label>
          first num (A):
          <input
            type='number'
            step='0.1'
            onChange={(e) => setInputA(+e.target.value)}
            value={inputA}
          />
        </label>
        <label>
          first num (B):
          <input
            type='number'
            step='0.1'
            onChange={(e) => setInputB(+e.target.value)}
            value={inputB}
          />
        </label>
      </Inputs>
      <hr />
      <Results>
        {inputLabels.map(({ label, value }) => (
          <DisabledInput key={label} label={label} value={value.toString()} />
        ))}
      </Results>
    </Container>
  );
};

export default MathOperations;
