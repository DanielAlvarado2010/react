import React from "react";

function Input({ id, label, value, setValue, type = "text" }) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default Input;
