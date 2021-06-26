import React ,{useEffect , useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function User() {
    const [user, setUser] = useState({
        employee_id: "",
        name: "",
        lastname: "",
        age: "",
      });
      const { employee_id } = useParams();

      useEffect(() => {
        loadUser();
      }, []);
      const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/api/v2/users/${employee_id}`);
        console.log(res);
        setUser(res.data[0]);
      };

    return (
        <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to Home
        </Link>
        <h1 className="display-4">User Id: {employee_id}</h1>
        <hr />
        <ul className="list-group w-50">
        <li className="list-group-item">Employee ID: {user.employee_id}</li>
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Last name: {user.lastname}</li>
          <li className="list-group-item">Age: {user.age}</li>
        </ul>
      </div>
    )
}

export default User
