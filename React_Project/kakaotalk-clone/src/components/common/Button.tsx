import styled from "styled-components";

interface StyleButtonProps {
  buttonStyle: {
    width: string;
    height: string;
    color: string;
    border: string;
    fontSize: string;
    backgroundColor: string;
    borderRadius: string;
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
`;

interface ButtonProps {
  value: string;
  buttonStyle: any;
  onClick?(): void;
}

const Button = ({ value, buttonStyle, onClick }: ButtonProps) => {
  return (
    <StyleButton buttonStyle={buttonStyle} onClick={onClick}>
      {value}
    </StyleButton>
  );
};

export default Button;
