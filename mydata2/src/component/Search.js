import React, { useState } from "react";
import axios from "axios";

function Search() {
  let [searchkey, setsearchkey] = useState('');
  let [val, setval] = useState([]);

  let searchUser = (key) => {
    axios.get(`http://localhost:3001/Students?name=${key}`)
      .then((res) => {
        setval(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setval([]); 
      });
  };

  return (
    <><br /><br />
    <div className="container mt-5">
      <h2 className="text-center text-dark bg-info border-bottom pb-2 mb-4" style={{ marginTop: '70px', borderRadius: '5px' }}>Student Search</h2>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Data"
          value={searchkey}
          onChange={(e) => {
            setsearchkey(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-info"
          onClick={() => {
            searchUser(searchkey);
          }}
        >
          Search
        </button>
      </div>

      {val.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Roll</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {val.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.rollno}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          No data found
        </div>
      )}
    </div>
    </>
  );
}

export default Search;
