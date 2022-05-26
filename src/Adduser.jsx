import React from "react";
import { useState } from 'react';
const Form = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            address: ""
        });

    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);


    }

    const updateField = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h1>Add Users</h1>
                <label htmlFor="InputName">
                    Name
                </label>
                <input type="text" value={formData.name} name="name" id="InputName" onChange={updateField} />
                <br></br>
                <label htmlFor="InputEmail1">
                    Email
                </label>
                <input type="text" value={formData.email} name="email" id="InputEmail" onChange={updateField} />
                <br></br>
                <label htmlFor="InputAddress">
                    Address
                </label>
                <input type="text" value={formData.address} name="address" id="InputAddress" onChange={updateField} />
                <br></br>
                <br></br>
                <input type="submit" className="btn" />

            </div>
            <div>
                <p>{formData.name}</p>
            </div>

        </form>
    )

}

export default Form;