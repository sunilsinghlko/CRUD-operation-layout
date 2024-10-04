import Carousel from "react-multi-carousel";
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
