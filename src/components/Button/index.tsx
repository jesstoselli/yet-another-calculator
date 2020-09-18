import React, { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  digit: string;
}

const Button: React.FC<ButtonProps> = ({ digit, ...rest }) => {
  return <StyledButton {...rest}>{digit}</StyledButton>;
};

export default Button;
