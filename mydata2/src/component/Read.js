import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate,Link} from 'react-router-dom'
function Read() {
  let [user,setuser] = useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3000/Students').then((res)=>{
      setuser(res.data)
    })
  })
  let deleteuser=(sno)=>{
 
    axios.delete('http://localhost:3000/Students/'+sno).then((res)=>{
     navigate('./read')
    })
  }
  return (
    <>
    <br/>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Roll no.</th>
      <th scope="col">Phone no.</th>
      <th scope="col">Edit</th>
      <th scope="col">Update</th>
      
    </tr>
  </thead>
  {user?<tbody>
  {user.map((item)=>{
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.email}</td>
        <td>{item.rollno}</td>
        <td>{item.phone}</td>
        <td><Link to={'/update/'+item.id}><button className='btn btn-outline-dark text-success'>Edit</button></Link></td>
        <td><button className='p-1 btn btn-outline-dark text-danger rounded' onClick={()=>{deleteuser(item.id)}}>Delete</button></td>
      </tr>
    )
  })}
  </tbody>:<p>No Data</p>}
</table>
    </>
  )
}

export default Read
