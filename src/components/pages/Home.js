import React from "react";
import NavBar from "../header/NavBar";
import Business from "../images/Businessman.png";
import rect1 from "../images/Rectangle 8.png";
import rect2 from "../images/Rectangle 6.png";
import rect3 from "../images/Rectangle 6 (1).png";
import rect4 from "../images/Rectangle 7.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../pages/Home.css";
const images = [
  {
    id: 1,
    src: "./images/bright.png",
  },
  {
    id: 2,
    src: "./images/Throwback.png",
  },
  {
    id: 3,
    src: "./images/ditto.png",
  },
  {
    id: 4,
    src: "./images/puppy.png",
  },
  {
    id: 5,
    src: "./images/shillz.png",
  },
  {
    id: 6,
    src: "./images/teevra.png",
  },
];

export const Home = () => {
  return (
    <div className="home">
      <section className="bg-img section1">
        <Container fluid>
          <Row>
            <Col md={12} className="mt-2">
            <NavBar />
            </Col>
          </Row>
          <Row className="bg">
            <Col md={7}>
              <div>
            <p className="p1">
            {" "}
            Connecting<span className="p2"> Business </span>
            With <br /> <span className="p2"> Customers </span> 
            Anytime, Anywhere
          </p>
          </div>
          <div>
          <p className="subheading">Stop wasting time looking for files in folder. Let’s get of all 
            <br/>
boards, lists, deadlines, calendars.</p>
</div>
            </Col>
            <Col className="mx-2 mt-2" md={5}>
          <button className="btn1">
              {" "}
              <b>Explore</b>{" "}
            </button>
            <button className="btn2 ">
              {" "}
              <b>Contact us</b>{" "}
            </button>
            </Col>
          </Row>
          </Container>
          </section>


      

      <section className="section2">
        <Container fluid>
          <Row>
            <Col md={12} >
              <div>
              <p className="title">Our <span className="txt">Clients </span></p>
              </div>
              <div>
                <p className="p3">We build  trust with efforts and  We serve the best with the bests</p>
              </div>
            </Col>
          </Row>
          <Row>
            {images.map(({ src }) => {
              return (
                <Col md={2} className="my-3">
                  <img src={src} alt="logo" width="100%" height="100%" />
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col md={4}>
              <img
                src={rect1}
                alt="rect1"
                width="500px"
                height="25px"
                className="rect"
              />
              <img
                src={rect3}
                alt="rect1"
                width="350px"
                height="25px"
                className="rect"
              />
            </Col>

            <Col md={4}>
              <img
                src={Business}
                alt="businessman"
                width=" 400px"
                height="400px"
                className="business"
              />
            </Col>

            <Col md={4}>
              <img
                src={rect2}
                alt="rect1"
                width="350px"
                height="25px"
                className="rect"
                style={{ marginLeft: "150px" }}
              />
              <img
                src={rect4}
                alt="rect1"
                width="600px"
                height="25px"
                className="rect"
              />
            </Col>
          </Row>
        </Container>
      </section> 

    </div>
  );
};
