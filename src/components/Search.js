import React, { useState } from "react";
import "../public/search.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
