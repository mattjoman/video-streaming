import React from 'react';

function NumberInput({ label, value, onChange, placeholder }: { label: string, value: number, onChange: (value: number) => void, placeholder: string }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        placeholder={placeholder}
        min="1"
        max="50"
      />
    </div>
  );
}

export default NumberInput;
export { NumberInput };
