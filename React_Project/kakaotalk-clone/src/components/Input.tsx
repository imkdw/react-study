interface InputProps {
  type: string;
  placeholder: string;
  required: boolean;
  width: string;
  height: string;
  fontSize: string;
}

const Input = ({
  type,
  placeholder,
  required,
  width,
  height,
  fontSize,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      style={{ width, height }}
    />
  );
};

export default Input;
