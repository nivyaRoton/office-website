import React from "react";
import "../pages/Home.css";

export const Home = () => {
  return (
    <>
      <section className="bg-img">

        <div className="bg">
          <p className="p1"> Design </p>
          <p className="p2"> The Future</p>
          <p className="p1 display-1">Of Your Brand</p>
          <div className="d-flex">
            <button className="btn1">
              {" "}
              <b>Sign In</b>{" "}
            </button>
            <button className="btn2 ">
              {" "}
              <b>Watch how it work</b>{" "}
            </button>
          </div>
        </div>
    
      </section>
      {/* <section className="bg-img2">
      
        <div className="container-fluid">
        <div className="row bg2">
          <div className="col-md 6">
            <p className="p1">
              How can we help <br />
              your Business?
            </p>
          </div>
          <div className="col-md 6 rectangle"></div>
        </div>
        </div>
      </section> */}
    </>
  );
};
