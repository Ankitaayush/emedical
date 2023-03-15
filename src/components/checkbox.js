import React, { useCallback, useState } from "react";

import Button from "./shared/formElements/Button";
import Model from "./modal";

import '../public/checkbox.css'
const MultiSelectDropdownMenu = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    { value: "option8", label: "Option 8" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick =useCallback( () => {
    setShowMenu(prevState => !prevState);
  },[]);

  const handleOptionClick = (selectedOption) => {
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== selectedOption));
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);
    }
  };

  const content = (
    <React.Fragment>
      <ul className="dropdown-menu_">
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className={selectedOptions.includes(option.value) ? "selected_" : ""}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )

  const testFilterHandler =(event) => {
    event.preventDefault();
    //send the selected filter information 
  }

  return (
    <form onClick={testFilterHandler} className="container homePageSearchForm m-3">
      <div className="dropdown_">
        <button type="button"  onClick={handleClick}>
          {selectedOptions.length ? selectedOptions.join(", ") : "Select Options"}
        </button>
        {showMenu &&
          <Model
            onClose={handleClick}
            header="Select Treatments"
            footer={<Button type="button" className="btn-closeDrp btn btn-primary m-1" onClick={handleClick}> Close</Button>}
            footerClass="footerClass"
          >
            {content}
          </Model>}
        {/* {showMenu && content }  */}
        {/* {showMenu && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={selectedOptions.includes(option.value) ? "selected" : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )} */}

      </div>
      <button id="HomePageSearchButton" className="btn btn-primary m-3 btn-lg btn-primary">Search</button>
    </form>
  );
};

export default MultiSelectDropdownMenu;
