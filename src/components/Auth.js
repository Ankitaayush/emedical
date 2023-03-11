import React, { useState } from 'react';


import Input from './shared/formElements/Input';
import Button from './shared/formElements/Button';
import Model from './modal';
import Wrapcard from './shared/UIElements/Wrapcard';
// import '../public/login.css'
import '../public/auth.css'

const Auth = (props) => {
  const [sendOtp,setSendOtp] =useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Here you can make a call to your server to authenticate the user
  //   // based on the formData and show a success or error message
  // };

  const otpSendHandler = () => {
    setSendOtp(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setSendOtp(false);
    props.onClick();

    //sending data at baend and validation ;
  }

  const btnContent =(
    <div>
      {!sendOtp && <Button type="button" onClick={otpSendHandler} inverse="inverse" className="btn-mrg"> Send OTP</Button>}
      {sendOtp && <Button type="submit" onClick={submitHandler} inverse="inverse" className="btn-mrg">Login</Button>}
      <Button type="button" onClick={props.onClick}> Close</Button>
    </div>
  );

  return (
    <React.Fragment>
      <Model
        onClose={props.onClick}
        header="Login"
        footer={btnContent}
      >
        <Wrapcard>
          <Input 
            element = "input"
            label = "Phone Number"
            id = "phoneNumber"
            type="number"
          />
          {sendOtp && 
            <Input 
              element = "input"
              label = "OTP"
              id = "otp"
              type = "number"
            />
          }
            
        </Wrapcard>
      </Model>
    </React.Fragment>
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input
  //         type="text"
  //         id="username"
  //         name="username"
  //         value={formData.username}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="password">Password:</label>
  //       <input
  //         type="password"
  //         id="password"
  //         name="password"
  //         value={formData.password}
  //         onChange={handleChange}
  //       />
  //     </div>
  //     <button type="submit">Login</button>
  //   </form>
  // );
};

export default Auth;
