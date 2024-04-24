import React from "react";
import { StyledButton } from "./styles";

interface IButtonProp {
  label: string;
}

const Button: React.FC<IButtonProp> = ({ label }) => (
  <StyledButton>{label}</StyledButton>
);

export default Button;
