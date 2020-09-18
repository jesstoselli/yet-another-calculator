import React, { InputHTMLAttributes } from "react";

import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}

const DisabledInput: React.FC<InputProps> = ({ value, label }) => {
  return (
    <StyledInput>
      <label>{label}</label>
      <input disabled value={value} />
    </StyledInput>
  );
};

export default DisabledInput;
