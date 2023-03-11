import React, { useState } from 'react';
import '../public/clinic.css';

const clinics = [
  { name: 'Clinic 1', address: '123 Main St.', price: '$100', distance: '5', id: 1 },
  { name: 'Clinic 2', address: '456 Elm St.', price: '$200', distance: '10', id: 2 },
  { name: 'Clinic 3', address: '789 Oak St.', price: '$300', distance: '15', id: 3 },
  { name: 'Clinic 4', address: '123 Main St.', price: '$250', distance: '20', id: 4 },
  { name: 'Clinic 5', address: '456 Elm St.', price: '$150', distance: '8', id: 5 },
  { name: 'Clinic 6', address: '789 Oak St.', price: '$175', distance: '12', id: 6 },
];

const ClinicList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClinics, setFilteredClinics] = useState(clinics);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredClinics(
      clinics.filter(clinic => clinic.name.toLowerCase().includes(event.target.value.toLowerCase()))
    );
  };

  const handleFilter = (type) => {
    let filteredClinics = clinics.slice();
    if (type === 'price') {
      filteredClinics.sort((a, b) => {
        return parseInt(a.price.substring(1)) - parseInt(b.price.substring(1));
      });
    } else if (type === 'distance') {
      filteredClinics.sort((a, b) => {
        return parseInt(a.distance) - parseInt(b.distance);
      });
    }
    setFilteredClinics(filteredClinics);
  };

  const filteredAndSearchedClinics = filteredClinics.filter(clinic => clinic.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="search-container1">
        <input type="text" placeholder="Search clinics" value={searchTerm} onChange={handleSearch} />
        <button className="btn99">Search</button>
      </div>
      <div className="filter-container">
        <button className="filter-btn1" onClick={() => handleFilter('price')}>Sort by Price</button>
        <button className="filter-btn2" onClick={() => handleFilter('distance')}>Sort by Distance</button>
      </div>
      <div className="flex">
        {/* <div className="flex1"> */}
      <div className="certificates">
        <h2>CERTIFICATIONS</h2>
      </div>
      {/* <div className="lab-rating">
<h2>lab-rating</h2>
      </div> */}
      {/* </div> */}
      <ul>
        {filteredAndSearchedClinics.map(clinic => (
          <li className="li1" key={clinic.id}>
            <h3>{clinic.name}</h3>
            <p>Address: {clinic.address}</p>
            <p>Price: {clinic.price} | Distance: {clinic.distance} miles</p>
            <button className="btn91">Book</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ClinicList;
