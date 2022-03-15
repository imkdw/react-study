import { ReactChild } from "react";
import styled from "styled-components";

interface StyleButtonProps {
  buttonStyle: {
    width?: string;
    height?: string;
    color?: string;
    border?: string;
    fontSize?: string;
    backgroundColor?: string;
    borderRadius?: string;
    fontWeight?: string;
  };
}

const StyleButton = styled.button<StyleButtonProps>`
  width: ${(props) => props.buttonStyle.width};
  height: ${(props) => props.buttonStyle.height};
  color: ${(props) => props.buttonStyle.color};
  border: ${(props) => props.buttonStyle.border};
  font-size: ${(props) => props.buttonStyle.fontSize};
  background-color: ${(props) => props.buttonStyle.backgroundColor};
  border-radius: ${(props) => props.buttonStyle.borderRadius};
  font-weight: ${(props) => props.buttonStyle.fontWeight};
`;

interface ButtonProps {
  children: ReactChild;
  buttonStyle: any;
  onClick?(): void;
}

const Button = ({ buttonStyle, onClick, children }: ButtonProps) => {
  return (
    <StyleButton buttonStyle={buttonStyle} onClick={onClick}>
      {children}
    </StyleButton>
  );
};

export default Button;
