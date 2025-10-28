import React from "react";
import { MultiChoiceOption } from "../../types";

function MultiChoiceInput({ label, options, value, setValue }: { label: string, options: MultiChoiceOption[], value: string[], setValue: any }) {
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option, idx) => (
          <option
            key={idx}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MultiChoiceInput;
export { MultiChoiceInput };
