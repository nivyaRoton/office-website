import React from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../header/NavBar";
import Business from "../images/Businessman.png";
import rect1 from "../images/Rectangle 8.png";
import rect2 from "../images/Rectangle 6.png";
import rect3 from "../images/Rectangle 6 (1).png";
import rect4 from "../images/Rectangle 7.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import vector from '../images/Vector.png';
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

const service1 = [
  {
    title: "WEB DEVELOPMENT",
    body: "For web development, proficient developers",
    body2: "are there to guide the people.",
  },
  {
    title: "APP DEVELOPMENT",
    body: "Smartphones are helping people with different ",
    body2: "applications.",
  },
  {
    title: "DIGITAL MARKETING",
    body: "The fastest growing online practice comes as ",
    body2: "a boom in digital marketing.",
  },
];
const service2 = [
  {
    title: "GRAPHIC DESIGN",
    body: "For web development, proficient developers",
    body2: "are there to guide the people.",
  },
  {
    title: "CONTENT WRITING",
    body: "Smartphones are helping people with different",
    body2: "applications.",
  },
  {
    title: "BUSINESS DEVELOPMENT",
    body: "The fastest growing online practice comes as a boom in digital marketing.",
    body2: "a boom in digital marketing.",
  },
];
const box=[{
  id:1,
  body:"Pleasure rationally encounter are extremely painful anyone who loves or pursues."
  
},
{
  id:2,
  body:"Pleasure rationally encounter are extremely painful anyone who loves or pursues."
  
},
{
  id:3,
  body:"Pleasure rationally encounter are extremely painful anyone who loves or pursues."
  
},

]
export const Home = () => {
  return (
    <div className="home">
      <section className="bg-img">
        <div>
          <NavBar />
        </div>
        <div className="bg">
          <p className="p1"> DESIGN </p>
          <p className="p2"> THE FUTURE</p>
          <p className="p1 display-1">OF YOUR BRAND</p>
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

      <section>
        <Container fluid>
          <Row>
            <Col md={12}>
          <p className="title">Our Clients</p>
          </Col>
          </Row>
          <Row>
            {images.map(({ src }) => {
              return (
                <Col md={2}>
                  <img src={src} alt="logo" width="100%" height="100%" />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
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

      <section  className="section4  my-5">
        <Container>
          <Row>
            <Col md={12}>
            <h1>We are<span className="txt"> different</span> because...</h1>
            <p className="p3">We are different our we offer Qaulity & Quantity With the Same Zeal</p>
            </Col>
          </Row>
          <Row>
            {box.map(({body})=>{
              return(
                 <>     
                <Col md={4}>
                  <div className="box" style={{marginTop:"30px"}}>
                  <p className="box-text">{body}</p>
                  <div className="icon"></div>
                  <Button className="security-btn mt-5"> <strong style={{textAlign:"center"}}>StrongSecurity</strong> </Button>

                  </div>
              
                </Col>
                </>
               

                
                
              )
            })}
        
          </Row>
        </Container>
      </section>

      <section className="section5">
        <Container>
      <Row className="text-center">
          <Col md={12}>
            <h1>
              Check<span className="txt"> Our </span>Services
            </h1>
            <p className="p3">
              Pleasure rationally encounter consequences that are
              <br />
              painful. Nor again is there anyone who pursues
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            {service1.map(({ title, body,body2 }) => {
              return (
                <div className="bottom pt-3">
                  <h1 className="heading">{title}</h1>
                  <p className="content">{body}</p>
                  <p className="content">{body2}</p>
                </div>
              );
            })}
          </Col>
          <Col md={4}  >
            <img src={vector} alt="vector" height="80%" width="80%"/>
            </Col>
            <Col md={4}>
            {service2.map(({ title, body,body2 }) => {
              return (
                <div className="bottom pt-3">
                  <h1 className="heading">{title}</h1>
                  <p className="content">{body}</p>
                  <p className="content">{body2}</p>

                </div>
              );
            })}
          </Col>
        </Row>
        </Container>
      </section>
    </div>
  )
};
