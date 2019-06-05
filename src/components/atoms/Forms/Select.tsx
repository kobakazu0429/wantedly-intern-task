import React from "react";
import styled from "styled-components";

import { color } from "@/constants/styles";

export interface ITextInputProps {
  children?: any;
  value?: string;
  name?: string;
  optionElements?: { [key: string]: string | number };
  onChange?: (value: string | number) => void;
}

export default ({
  value,
  name,
  optionElements,
  onChange,
  children
}: ITextInputProps) => {
  const [currentValue, setCurrentValue] = React.useState(value);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const data = e.target.value;
      setCurrentValue(data);

      if (onChange) {
        onChange(Number(data));
      }
    },
    []
  );

  React.useEffect(() => {
    if (value != null) {
      setCurrentValue(value);
    }
  }, [value]);

  const props = {
    id: name,
    value: currentValue,
    onChange: handleChange
  };

  return (
    <StyledSelect {...props}>
      {children && children}
      {optionElements &&
        Object.keys(optionElements).map(v => (
          <option key={optionElements[v]} value={optionElements[v]}>
            {v}
          </option>
        ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  line-height: 1rem;
  padding: 5px;
  padding-left: 30px;
  border: 2px solid ${color.LIGHT_BLUE};
  border-radius: 1rem;
  background: none transparent;
  vertical-align: middle;
  color: ${color.LIGHT_BLUE};
`;
