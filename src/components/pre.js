
import React, { useState } from 'react';

import "../public/pre.css";
const FileUpload = () => {
  return (
    <div className="container upload">
      <label className="custom-file-upload btn btn-success">
        <input type="file" />
        Upload your Prescription
      </label>
      <img src="https://newassets.apollo247.com/images/ic_prescription_pad.svg" alt=".." />
    </div>
  );
};

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

const Container = () => {
  return (
    <div className="container">
      <SearchBar />
      <FileUpload />
    </div>
  );
};

export default Container;
