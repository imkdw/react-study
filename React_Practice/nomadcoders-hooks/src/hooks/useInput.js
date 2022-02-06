import { useState } from "react";

export const useInputs = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    const { target: { value } } = event;

    if (validator(value)) {
      setValue(event.target.value);
    }
  };

  return { value, onChange };
}