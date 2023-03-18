import React,{useState} from "react";

import Wrapcard from "./shared/UIElements/Wrapcard";
import Model from "./modal";
import Input from "./shared/formElements/Input";
import Button from "./shared/formElements/Button";
import '../public/AddCustomerDetail.css';


const AddCustomerDetail = (props) => {

    const addCustomerHandler = (event) => {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            {props.show && 
                    <Wrapcard>
                    <Model
                        header="Add Customer"
                        onSubmit={addCustomerHandler}
                        onClose = {props.onClose}
                        footer={
                            <React.Fragment>
                                <Button 
                                    type="submit"
                                    onClick={props.onClose}
                                >
                                    Done
                                </Button>
                            </React.Fragment>
                        }
                    >
                        <Input 
                            element="input"
                            id="name"
                            type="text"
                            label="Name"
                        />
                        <div className="__personelInfo">
                            <Input 
                                element="input"
                                id="dob"
                                type="date"
                                label="DOB"
                            />
                            <Input 
                                element="input"
                                id="age"
                                type="number"
                                label="Age"
                            />
                            <div className="__options">
                            <label htmlFor="gender">Gender </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <Input 
                            element="input"
                            id="number"
                            type="number"
                            label="Mobile Number"
                        />
                    </Model>
                    </Wrapcard>
            }
        </React.Fragment>
    );
}

export default AddCustomerDetail;