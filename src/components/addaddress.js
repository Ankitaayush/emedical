import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../public/addaddress.css"
const deleteHandler = () => {
  console.log("op nishak");
};

const Addaddress = () => {
  return (
    <React.Fragment>
      <Link  to="/pgg/addnewaddress" className="addaddressrbtn"> Addaddress</Link>
      <div className="flexnew">
        <div className="details">
          {
            <div className="Box1">
              <div className="testdetails">
                <h2>TEST NAME</h2>
              </div>
              <div className="incdec">
                <button type="submit" onClick={deleteHandler}>
                  Remove
                </button>
              </div>
            </div>
          }
        </div>
        <div className="Box">
            <div className="Boxitem">
          <div className="left-column">{/* content for left column */}</div>
          <div className="right-column">{/* content for right column */}</div>
          <div className="right-column2">{/* content for right column */}</div>
</div>
<button className="continuebtn" > continue</button>
        </div>
      </div>
      <Link to="/pgg/addcustomer" className="b11">
        {" "}
        Back
      </Link>
    </React.Fragment>
  );
};

export default Addaddress;
