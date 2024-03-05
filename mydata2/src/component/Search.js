import React, { useState } from "react";
import Slider from "./Slider";
import axios from "axios";
function Search() {
  let [searchkey, setsearchkey] = useState();
  let [val, setval] = useState();
  let searchUser = (key) => {
    axios.get("http://localhost:3000/Students?name=" + key).then((res) => {
      setval(res.data);
    });
  };
  return (
    <>
      <br />
      <br />
      <div className="input-group mb-3 mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Data"
          onChange={(e) => {
            setsearchkey(e.target.value);
          }}
        />
        <span className="input-group-text">
          <button
            className="btn btn-outline-info"
            onClick={() => {
              searchUser(searchkey);
            }}
          >
            Search
          </button>
        </span>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Roll</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {val ? (
          <tbody>
            {val.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <p>no data</p>
        )}
      </table>
    </>
  );
}

export default Search;
