import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../public/pgg.css";

const Pgg = () => {
  const [val, setVal] = useState(1);

  const incrementHandler = () => {
    setVal((prevVal) => prevVal + 1);
  };

  const decrementHandler = () => {
    setVal((prevVal) => prevVal - 1);
  };
  const deleteHandler = () => {
    setVal(0);
  };

  return (
    <React.Fragment>
      <div className="flexnew">
        <div className="details">
          {val > 0 && (
            <div className="Box1">
              <div className="testdetails">
                <h2>TEST NAME</h2>
              </div>
              <div className="incdec">
                <button type="submit" onClick={deleteHandler}>
                  TY
                </button>
                <button type="submit" onClick={incrementHandler}>
                  +
                </button>
                <span>{val}</span>
                <button type="submit" onClick={decrementHandler}>
                  -
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="Box">
            <div className="Boxitem">
          <div className="left-column">{/* content for left column */}</div>
          <div className="right-column">{/* content for right column */}</div>
          <div className="right-column2">{/* content for right column */}</div>
</div>
<Link to="/pgg/addcustomer" className="continuebtn" > continue</Link>
        </div>
      </div>
      <Link to="/clinic" className="b11">
        {" "}
        Back
      </Link>
    </React.Fragment>
  );
};
export default Pgg;
