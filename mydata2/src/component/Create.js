import React,{useState} from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Create() {
  let navigate = useNavigate();
  let [name,setname] = useState();
  let [age,setage] = useState();
  let [phone,setphone] = useState()
  let [email,setemail] = useState();
  let [rollno,setrollno] = useState()

  let submitUser = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/Students',{
      name,age,email,phone,rollno
    }).then((res)=>{
      // console.log(res);
      navigate('/read')
    })
  }
  return (
    <>
    <br/><br/>
    <div className='mx-auto col-5 m-5 myform p-3 text-white'>
    <form onSubmit={submitUser}>
   <div className="mb-3">
  <label className="form-label">Name</label>
  <input type="text" name='name' className="form-control" placeholder="Enter Your Name here.."
    onChange={(e)=>{setname(e.target.value)}}
  />
</div>
 <div className="mb-3">
  <label className="form-label">Age</label>
  <input type="number" name='age' className="form-control" placeholder="type age here.."
     onChange={(e)=>{setage(e.target.value)}}
  />
</div>
<div className="mb-3">
  <label className="form-label">Phone no.</label>
  <input type="number" name='phone' className="form-control" placeholder="type phone no..."
     onChange={(e)=>{setphone(e.target.value)}}
  />
</div>
      <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" name='email' className="form-control" placeholder="type your email id.."
     onChange={(e)=>{setemail(e.target.value)}}
  />
</div>
<div className="mb-3">
  <label className="form-label">Roll no.</label>
  <input type="number" name='rollno' className="form-control" placeholder="type roll no. here.."
     onChange={(e)=>{setrollno(e.target.value)}}
  />
</div>
 <input type="submit" name='sub' className="form-control bg-info text-white "/>
 </form>
</div>
    </>
  )
}

export default Create
