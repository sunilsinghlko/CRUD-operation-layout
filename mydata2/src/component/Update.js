import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  let navigate = useNavigate();
  let { id } = useParams();

  let [name, setname] = useState();
  let [age, setage] = useState();
  let [email, setemail] = useState();
  let [rollno, setrollno] = useState();
  let [phone, setphone] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/Students/" + id).then((res) => {
      // console.log(res.data);
      setname(res.data.name);
      setage(res.data.age);
      setemail(res.data.email);
      setrollno(res.data.rollno);
      setphone(res.data.phone);
    });
  }, [id]);

  let updateUser = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/Students/" + id, {
        name,
        age,
        email,
        rollno,
        phone,
      })
      .then((res) => {
        navigate("/read");
      });
  };
  return (
    <>
      <br />
      <br />
      <form className="mx-auto col-5 m-5 data p-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter age"
            value={age}
            onChange={(e) => {
              setage(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Roll</label>
          <input
            type="number"
            name="rollno"
            className="form-control"
            placeholder="Enter roll"
            value={rollno}
            onChange={(e) => {
              setrollno(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">phone</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            placeholder="Enter roll"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="Submit"
            name="sub"
            className="form-control bg-danger"
            value="Update"
            onClick={updateUser}
          />
        </div>
      </form>
    </>
  );
}

export default Update;
