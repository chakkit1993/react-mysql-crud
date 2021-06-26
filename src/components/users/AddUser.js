import React, { useState } from 'react'

import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddUser() {
    let history = useHistory();
  const [user, setUser] = useState({
    employee_id: "",
    name: "",
    lastname: "",  
    age: "",
  });

  const { employee_id,name, lastname, age } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/v2/users", user);
    history.push("/");
  };
    return (
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your ID"
              name="employee_id"
              value={employee_id}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your LastName"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
    )
}

export default AddUser
