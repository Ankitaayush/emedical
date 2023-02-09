import React, { useState } from "react";
import classes from "../public/search.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.search_container}>
      <input
        type="text"
        placeholder="Sekjkjharch..."
        value={searchTerm}
        onChange={handleChange}
        className={classes.search_input}
      />
    </div>
  );
};

export default SearchBar;
