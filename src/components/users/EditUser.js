import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditUser() {

    let history = useHistory();
  const { employee_id } = useParams();
  const [user, setUser] = useState({
    employee_id: "",
    name: "",
    lastname: "",
    age: "",
  });

  const { name, lastname, age } = user;



  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value  });
  } 

  const onInputChangeLastname = e => {
    setUser({ ...user, [e.target.lastname]: e.target.value });
  };


  const onInputChangeAge = e => {
    setUser({ ...user, [e.target.Age]: e.target.value });
  };


  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/api/v2/users/update/${employee_id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/api/v2/users/${employee_id}`);
    console.log(result);
    setUser(result.data[0]);
  };

    return (
         <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <label>Employee ID</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your ID"
              name="employee_id"
              value={user.employee_id}
            
            />
          </div>

          <div className="form-group">
          <label>Name </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
          <label>Last Name </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Lastname"
              name="lastname"
              value={user.lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
          <label>Age </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="age"
              value={user.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
    )
}

export default EditUser
