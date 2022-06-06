import React from "react";
import { useState } from 'react';
import validator from 'validator'



const Form = () => {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: "",
            address: ""
        });

    const [list, SetList] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();

        const dupEmail = list.filter(list => list.formData.email !== formData.email).length
        // console.log(dupEmail);
        const DisplayData = { formData };
        if (validator.isEmail(formData.email) !== false || formData.email === "") {
            if (formData.name !== "" && formData.address !== "" && formData.email !== "") {
                if (list.length === 0) {
                    SetList((ls) => [...ls, DisplayData]);
                    document.getElementById("myForm").reset();



                }
                else if (dupEmail === list.length) {
                    SetList((ls) => [...ls, DisplayData]);
                    document.getElementById("myForm").reset();

                }
                else {
                    alert(`${formData.email} Already Exist`)
                }

            }
            else {
                alert("Enter All Field")
            }
        }
        else {
            alert("Email Incorrect")
        }
    }



    const deleteData = (e) => {
        e.preventDefault();
        console.log(list);
        const email = e.target.name;
        SetList(list.filter(list => list.formData.email !== email));

    }


    const updateField = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const editData = (e) => {

        // e.preventDefault();
        // console.log(e.target.value);
        // // console.log(formData.name);
        // // console.log(formData.email);

        // console.log(list)
        e.preventDefault();

        console.log(e.parentElement);
        formData.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove();



    };

    const showData = (e) => {
        console.log(formData.email)
        const dupEmail = list.filter(list => list.formData.email !== formData.email)
        console.log(dupEmail)
        console.log(dupEmail.length)

        e.preventDefault();
    };


    // let editPost = (e) => {
    //     console.log(e.parent);
    //     input.value = e.parentElement.previousElementSibling.innerHTML;
    //     e.parentElement.parentElement.remove();

    // };

    return (

        <form id="myForm">
            <div className="form-group">
                <div id="heading-div"> <h1 className="heading">Add Users</h1></div>


                <label htmlFor="InputName">
                    Name
                </label>
                <input type="text" value={formData.name} placeholder="Enter Name" name="name" id="InputName" onChange={updateField} />
                <br></br>
                <label htmlFor="InputEmail">
                    Email
                </label>
                <input type="link" value={formData.email} placeholder="Enter Email" name="email" id="InputEmail" onChange={updateField} />
                <br></br>
                <label htmlFor="InputAddress">
                    Address
                </label>
                <input type="text" value={formData.address} placeholder="Enter Address" name="address" id="InputAddress" onChange={updateField} />
                <br></br>
                <br></br>
                <button type="submit" onClick={handleSubmit} className="btnSubmit">Submit</button>
                {/* <button onClick={showData} className="btnSubmit">Show</button> */}

            </div>
            <div className="Display-Users">
                <h1 id="user">Users</h1>
                <table>
                    <th id="name">Name</th>
                    <th id="email">Email</th>
                    <th id="address">Address</th>
                    <th id="editDelete">Edit / Delete</th>
                </table>



                {
                    list.map((item) => <div>

                        <table border="2px">
                            <tr>
                                <td id="name" >{item.formData.name}</td>
                                <td id="email"> {item.formData.email}</td>
                                <td id="address"> {item.formData.address}</td>
                                <td><button className="btn" name={item.formData.email} onClick={deleteData}>delete</button>
                                    <button className="btn" value={list.formData} onClick={editData}>Edit</button>
                                </td>
                            </tr>

                        </table>

                    </div>

                    )

                }
            </div>
        </form>

    );

}

export default Form;