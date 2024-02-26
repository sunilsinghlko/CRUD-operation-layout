import React from 'react'

function Slide(props) {
  return (
    <>
    <div className="card m-2 shadow p-2 mb-5 bg-white rounded text-center" style={{height:'270px'}}>
    <img className="product--image mb-1 rounded"  style={{height:'100px'}}
    src={props.image}   alt ='..'/>
    <h5>{props.name}</h5>
    <p>{props.description}</p>
    <p>{props.price}</p>
    <p>
      <button className='bg-dark text-white w-100'>Go Somewhere</button>
    </p>
  </div>
    </>
  )
}

export default Slide
