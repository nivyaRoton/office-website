import React from "react";
import NavBar from "../header/NavBar";
import "../pages/Home.css";
const images=[{
  id:1,
  src:'./images/bright.png'
},
{
  id:2,
  src:'./images/Throwback.png'
},
{
  id:3,
  src:'./images/ditto.png'
},
{
  id:4,
  src:'./images/puppy.png'
},
{
  id:5,
  src:'./images/dynamic.png'
},
{
  id:6,
  src:'./images/shillz.png'
},
{
  id:7,
  src:'./images/teevra.png'
}
]

export const Home = () => {

  return (
    <>
      <section className="bg-img">
        <div>
        <NavBar />
        </div>
        <div className="bg">
          <p className="p1"> Design </p>
          <p className="p2"> The Future</p>
          <p className="p1 display-1">Of Your Brand</p>
          <div className="d-flex">
            <button className="btn1">
              {" "}
              <b>Explore</b>{" "}
            </button>
            <button className="btn2 ">
              {" "}
              <b>Contact us</b>{" "}
            </button>
          </div>
        </div>
        </section>
    
      <section className="bg-img2">
        <div className="d-flex">
          {images.map((i)=>{
                  return(
                    <div>
                      <img src={i.src} alt="logo" width="100%"/>
                      </div>
                  )
          })}
        </div>
       
           
      </section>
    </>
  );
};
