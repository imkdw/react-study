import { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
  name?: string;
  placeholder: string;
  required: boolean;
  inputStyle: any;
  subInputStyle?: any;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  value: string;
}

interface StyleInputProps {
  inputStyle: {
    width: string;
    height: string;
    fontSize: string;
    color: string;
    paddingLeft: string;
  };

  subInputStyle?: {
    borderBottom?: string;
    backgroundColor?: string;
    border?: string;
    focus?: string;
  };
}

const StyledInput = styled.input<StyleInputProps>`
  width: ${(props) => props.inputStyle.width};
  height: ${(props) => props.inputStyle.height};
  font-size: ${(props) => props.inputStyle.fontSize};
  color: ${(props) => props.inputStyle.color};
  padding-left: ${(props) => props.inputStyle.paddingLeft};
  border-bottom: ${(props) => props.subInputStyle?.borderBottom};
  background-color: ${(props) => props.subInputStyle?.backgroundColor};
  border: ${(props) => props.subInputStyle?.border};

  &::placeholder {
    opacity: 0.7;
    color: #bfbfbf;
  }

  &:focus {
    border-bottom: ${(props) => props.subInputStyle?.focus};
  }
`;

const Input = ({
  type,
  name,
  placeholder,
  required,
  inputStyle,
  subInputStyle,
  onChange,
  value,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      inputStyle={inputStyle}
      subInputStyle={subInputStyle}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
