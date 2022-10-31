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
import vector from "../images/Vector.png";
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
const box = [
  {
    id: 1,
    body: "Pleasure rationally encounter are extremely painful anyone who loves or pursues.",
  },
  {
    id: 2,
    body: "Pleasure rationally encounter are extremely painful anyone who loves or pursues.",
  },
  {
    id: 3,
    body: "Pleasure rationally encounter are extremely painful anyone who loves or pursues.",
  },
];
const features=[{
  id:1,
  title:"Request a Callback",
  body:"Chossing an accountant that Matchs your needs"

},
{
  id:2,
  title:"Initial Consultation",
  body:"Read the reviews from some of satisfied clients"

}]
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

      <section className="section3  my-5">
        <Container>
          <Row>
            <Col md={12}>
              <div>
              <h1  className="title">
                We are<span className="txt"> different</span> because...
              </h1>
              </div>
              <div>
              <p className="p3">
                We are different our we offer Qaulity & Quantity With the Same
                Zeal
              </p>
              </div>
            </Col>
          </Row>
          <Row>
            {box.map(({ body }) => {
              return (
                <>
                  <Col md={4}>
                    <div className="box my-5">
                      <p className="box-text text-center">{body}</p>
                      <div className="icon"></div>
                      <Button className="security-btn mt-5">
                        {" "}
                        <strong style={{ textAlign: "center" }}>
                          StrongSecurity
                        </strong>{" "}
                      </Button>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
          <Row>
          </Row>
        </Container>
      </section>

      <section className="section4 py-2">
        <Container>
          <Row className="text-center">
            <Col md={12}>
              <div >              <h1 className="title">

              <span className="txt"> Our Business</span> Provides Valuable
              <span className="txt">  Services </span>
               at<br/>
Any Time in Any Situation
              </h1>
              </div>
              <div>
              <p className="p3">
                Pleasure rationally encounter consequences that are
                <br />
                painful. Nor again is there anyone who pursues
              </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={4}>
              {service1.map(({ title, body, body2 }) => {
                return (
                  <div className="bottom py-3">
                    <div>
                    <h1 className="heading">{title}</h1>
                    </div>
                    <div>                    <p className="content">{body}</p>
                    <p className="content">{body2}</p>
                    </div>

                  </div>
                );
              })}
            </Col>
            <Col md={4}>
              <img src={vector} alt="vector" height="80%" width="80%" />
            </Col>
            <Col md={4}>
              {service2.map(({ title, body, body2 }) => {
                return (
                  <div className="bottom py-3">
                    <div>
                    <h1 className="heading">{title}</h1>
                    </div>
                    <div>
                    <p className="content">{body}</p>
                    <p className="content">{body2}</p>
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section5 my-5">
        <Container>
          <Row>
            <Col md={12}>
              <div>
                <p className="title">Our<span className="txt"> Features </span></p>
                <p className="p3">Unlesh your creativety with a visual collabration<br/>
Platform that enables effective ideation.</p>
              </div>

            </Col>
          </Row>
        </Container>

      </section>
    </div>
  );
};
