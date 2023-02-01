import React, { useState } from 'react';
import '../public/clinic.css';
const clinics = [
  { name: 'Clinic 1', address: '123 Main St.', price: '$100', distance: '5 miles', id: 1 },
  { name: 'Clinic 2', address: '456 Elm St.', price: '$200', distance: '10 miles', id: 2 },
  { name: 'Clinic 3', address: '789 Oak St.', price: '$300', distance: '15 miles', id: 3 },
  { name: 'Clinic 2', address: '456 Elm St.', price: '$200', distance: '10 miles', id: 2 },
  { name: 'Clinic 3', address: '789 Oak St.', price: '$300', distance: '15 miles', id: 3 },

];

const ClinicList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClinics, setFilteredClinics] = useState(clinics);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredClinics(
      clinics.filter(clinic => clinic.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div>
      <div className="search-container1">
        <input type="text" placeholder="Search clinics" value={searchTerm} onChange={handleSearch} />
        <button className="btn">Search</button>
      </div>
      <ul>
        {filteredClinics.map(clinic => (
          <li className="li1" key={clinic.id}>
            <h3>{clinic.name}</h3>
            <p>Address: {clinic.address}</p>
            <p>Price: {clinic.price} | Distance: {clinic.distance}</p>
            <button className="btn">Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClinicList;
