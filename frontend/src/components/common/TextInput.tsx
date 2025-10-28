import React from 'react';

function TextInput({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (value: string) => void, placeholder: string }) {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
export { TextInput };
