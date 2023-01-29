import React, { useState } from "react";
import '../public/checkbox.css'


function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select value={selectedOption} onChange={handleChange} className="dropdown">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
        <option value="Option 4">Option 4</option>
        <option value="Option 5">Option 5</option>
        <option value="Option 6">Option 6</option>
        <option value="Option 7">Option 7</option>
        <option value="Option 8">Option 8</option>
        <option value="Option 9">Option 9</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default Dropdown;
