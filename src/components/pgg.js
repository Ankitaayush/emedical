import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../public/pgg.css";
import dustbin from '../images/dustbin_svg.svg'
import plus from '../images/plus_svg.svg'
import minus from '../images/minus_png.png'
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
                <img src={dustbin} alt="" onClick={deleteHandler} />
                <img src={plus} alt="" onClick={incrementHandler} />
                <span>{val}</span>
                <img src={minus} alt="" onClick={decrementHandler} />
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
      <div>
        <Link to="/clinic" className="b11">
          {" "}
          Back
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Pgg;
