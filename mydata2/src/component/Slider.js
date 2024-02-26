import Carousel from "react-multi-carousel";
// import {Link} from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import { productData,responsive } from "./Data";
import Slide from "./Slide";
 
export default function Slider (){
  const product= productData.map((item)=>
    <Slide image={item.image} name={item.name} description={item.description} />
    )

  return (
    <>
    <div className="App">
      <Carousel 
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}>
      {product}
     </Carousel>
     </div>
     </>
  )
}

// import Carousel from "react-multi-carousel";
// // import {Link} from 'react-router-dom'
// import "react-multi-carousel/lib/styles.css";
 
// export default function Slider (){
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 1024 },
//       items: 4,
//     },
//     desktop: {
//       breakpoint: { max: 1024, min: 800 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 800, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     }
//   };
//   return (
//     <>
//     <div className="App">
//       <Carousel 
//       autoPlay={true}
//       autoPlaySpeed={2000}
//   infinite={true}
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//       responsive={responsive}>
//   <div className="card m-2 shadow p-2 mb-5 bg-white rounded">
//     <img className="product--image h-25"
//     src="image/slider1.jpg" alt ='..'/>
//     <h5>item 1</h5>
//     <p>this is something else and normal paragraph</p>
//     <p>
//       <button>Go Somewhere</button>
//     </p>
//   </div>
//   <div className="card m-2 shadow p-2 mb-5 bg-white rounded ">
//     <img className="product--image h-25"
//     src="image/slider3.jpg" alt ='..'/>
//     <h5>item 1</h5>
//     <p>this is something else and normal paragraph</p>
//     <p>
//       <button>Go Somewhere</button>
//     </p>
//   </div>
//   <div className="card m-2 shadow p-2 mb-5 bg-white rounded">
//     <img className="product--image h-25"
//     src="image/slider4.jpg" alt ='..'/>
//     <h5>item 1</h5>
//     <p>this is something else and normal paragraph</p>
//     <p>
//       <button>Go Somewhere</button>
//     </p>
//   </div>
//   <div className="card m-2 shadow p-2 mb-5 bg-white rounded">
//     <img className="product--image h-25" 
//     src="image/slider1.jpg" alt ='..'/>
//     <h5>item 1</h5>
//     <p>this is something else and normal paragraph</p>
//     <p>
//       <button>Go Somewhere</button>
//     </p>
//   </div>
//   <div className="card m-2 shadow p-2 mb-5 bg-white rounded">
//     <img className="product--image h-25" 
//     src="image/slider5.jpg" alt ='..'/>
//     <h5>item 1</h5>
//     <p>this is something else and normal paragraph</p>
//     <p>
//       <button>Go Somewhere</button>
//     </p>
//   </div>
//   <div className="card m-2 shadow p-2 mb-5 bg-white rounded">
//     <img className="product--image"
//     src="image/slider6.jpg" alt ='..'/>
//     <h5>item 1</h5>
//     <p>this is something else and normal paragraph</p>
//     <p>
//       <button>Go Somewhere</button>
//     </p>
//   </div>
  
// </Carousel>
// </div>
//     </>
//   )
// }