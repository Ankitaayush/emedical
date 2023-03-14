import React from 'react'

import '../public/AddNewAddress.css'

export default function AddNewAddress() {
  return (
    <div id="addNewAddress">
      <form action="" className="addNewAddress">

        <input type="radio" />
        <label htmlFor="">Home</label>
        <input type="radio" />
        <label htmlFor="">Work</label>
        <br />
        <label htmlFor="">Pincode</label>
        <input className="addNewAddressInputBox pincode" type="text" />
        <br />
        <label htmlFor="">City</label>
        <input className="addNewAddressInputBox" type="text" />
        <label htmlFor="">State</label>
        <input className="addNewAddressInputBox" type="text" />
        <br />
        <label htmlFor="">First Name</label>
        <input className="addNewAddressInputBox" type="text" />
        <label htmlFor="">Last Name</label>
        <input className="addNewAddressInputBox" type="text" />
        <br />
        {/* <label htmlFor="">Address</label> */}
        <textarea name="" cols="30" rows="2" placeholder="Address"></textarea>
        <br />
        <textarea name="" cols="30" rows="2" placeholder="Landmark"></textarea>
      </form>
      <div id="CurrentLocationmap">
        <h1>YAHA MAP AA JAEGA</h1>
      </div>
    </div>
  )
}