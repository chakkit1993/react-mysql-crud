import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

    const [users, setUser] = useState([]);

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3001/api/v2/users");
      console.log(result);
      setUser(result.data.reverse());
    };
  
    const deleteUser = async employee_id => {
      await axios.delete(`http://localhost:3001/api/v2/user/delete/${employee_id}`);
      loadUsers();
    };

    return (
        <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
              
                <th scope="col">Employee ID</th>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.employee_id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/users/${user.employee_id}`}>
                      View
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/users/edit/${user.employee_id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteUser(user.employee_id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Home
