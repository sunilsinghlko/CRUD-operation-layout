import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Read() {
  let [user, setUser] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/Students/").then((res) => {
      setUser(res.data);
    });
  }, []);

  let deleteUser = (sno) => {
    axios.delete("http://localhost:3001/Students/" + sno).then(() => {
      navigate("/read");
    });
  };

  return (
    <><br/><br/>
    <div className="container mt-4">
    
      <h2 className="text-center text-dark bg-info border-bottom pb-2 mb-4" style={{ marginTop: '70px', borderRadius: '5px' }}>Student List</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Roll No.</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.rollno}</td>
                <td>{item.phone}</td>
                <td>
                  <Link to={"/update/" + item.id}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Read;
