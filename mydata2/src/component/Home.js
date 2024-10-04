import React from "react";
import Slider from "./Slider";
import SimpleImageSlider from "react-simple-image-slider";
import "react-multi-carousel/lib/styles.css";
import About from "./About";
import './style.css'
function Home() {
  const images = [
    { url: "image/slider5.jpg" },
    { url: "image/slider2.jpg" },
    { url: "image/slider3.jpg" },
    { url: "image/slider4.jpg" },
    { url: "image/slider1.jpg" },
    { url: "image/slider6.jpg" },
  ];

  return (
    <>
      <br />
      <br />

      <div className="w-100 border border-dark">
        <SimpleImageSlider
          width="100%"
          height={500}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={1}
          autoPlay={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="row mx-0"> 
        <div className="left col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-info">Full Stack Courses</li>
            <li className="list-group-item">MERN Stack</li>
            <li className="list-group-item">MEAN Stack</li>
            <li className="list-group-item">JAVA Full Stack</li>
            <li className="list-group-item">Python Full Stack</li>
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-info">Short term Courses</li>
            <li className="list-group-item">Digital Marketing</li>
            <li className="list-group-item">Graphic Design</li>
            <li className="list-group-item">Mechanical Auto Cad</li>
            <li className="list-group-item">Civil Auto Cad</li>
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-info">Microsoft Courses</li>
            <li className="list-group-item">MS Powerpoint</li>
            <li className="list-group-item">MS Word</li>
            <li className="list-group-item">MS Excel</li>
            <li className="list-group-item">Internet & Web Activities</li>
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-info">Special Courses</li>
            <li className="list-group-item">Data Science</li>
            <li className="list-group-item">Data Analyst</li>
            <li className="list-group-item">Machine Learning</li>
            <li className="list-group-item">Artificial Intelligence</li>
          </ul>
        
        </div>
        <div className="right col-sm-12 col-md-6 col-lg-8 col-xl-9 p-3 bg-secondary">
          <About />
          <Slider />
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Home;
