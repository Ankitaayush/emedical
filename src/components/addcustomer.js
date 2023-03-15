import React, { useState } from "react";
import { Link } from "react-router-dom";

import AddCustomerDetail from "./AddCustomerDetail";
import Button from "./shared/formElements/Button";

import "../public/addcustomer.css"

const Addcustomer = () => {
  const [showAddCust, setShowAddCust] = useState(false);

  const deleteHandler = () => {
    console.log("op nishak");
  };

  const changeStateHandler = () => {
    setShowAddCust(prevState => !prevState);
  }

  return (
    <React.Fragment>
      <AddCustomerDetail show={showAddCust} onClose={changeStateHandler} />
      <Button className="btn btn-info m-2" type="button" onClick={changeStateHandler}> Add Customer</Button>
      <div className="flexnew">
        <div className="details">
          {
            <div className="Box1">
              <div className="testdetails">
                <h2>TEST NAME</h2>
              </div>
              <div className="incdec">
                <button class="btn btn-info" type="submit" onClick={deleteHandler}>
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
          <Link to="/pgg/addaddress" className="continuebtn" > continue</Link>
        </div>

      </div>
      <Link to="/pgg/detail" className="b11">
        {" "}
        Back
      </Link>
    </React.Fragment>
  );
};

export default Addcustomer;
