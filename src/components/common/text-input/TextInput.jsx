import React from 'react'

import './TextInput.css'

const TextInput = ({
  name, label, error, handleChange, ...rest
}) => {
  return (
    <div>
      <label htmlFor={name}></label>
      {error && <div> {error} </div>}
      <input
        {...rest}
        placeholder={label}
        className="input"
        onChange={handleChange}
        name={name}
        id={name}
      />
    </div>
  );
}

export default TextInput;