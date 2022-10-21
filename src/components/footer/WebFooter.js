import React from "react";
import "../footer/Footer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const service = [
  {
    id: 1,
    item: "web devlopment",
  },
  {
    id: 2,
    item: "Mobile Apps",
  },
  {
    id: 3,
    item: "Digital Marketing",
  },
  {
    id: 4,
    item: "Branding",
  },
  {
    id: 5,
    item: "Interface Design",
  },
];
const contact = [
  {
    id: 1,
    item: "203,206,207,209 manglam signature",
  },
  {
    id: 2,
    item: " tower, near apex bank,lalkothi,jaipur ",
  },
  {
    id: 3,
    item: "rajasthan 302015",
  },
  {
    id: 4,
    item: " support@roton.com",
  },
  {
    id: 5,
    item: " free: 91 9549691237",
  },
];

const newsletter = [
  {
    id: 1,
    item: "subscribe to our newsletter for daily",
  },
  {
    id: 2,
    item: " news and updates ",
  },
];

export const WebFooter = () => {
  return (
    <>
      <div className="container-fluid gradient-bg footer p-4 ">
        <div className="row">
        <div className="col-md-1"></div>
          <div className="col-md-3">
            <div>
              <p className="txt">Services</p>
              {service.map((s) => {
                return (
                  <div key={s.id}>
                    <p className="txt-style">{s.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact">
              <p className="txt">Contact</p>
              {contact.map((c) => {
                return (
                  <div key={c.id}>
                    <p className="txt-style">{c.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <div>
              <p className="txt">Newsletter</p>
              {newsletter.map((n) => {
                return (
                  <div key={n.id}>
                    <p className="txt-style">{n.item}</p>
                  </div>
                );
              })}
              <div  className="pos1">
                <div>
                  <Form.Group
                    className=" text-white "
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className=" bg-transparent text-white radius-style"
                    />
                  </Form.Group>
                </div>
                <div className="pos2">
                  <Button variant="light" className="btn button1 radius-style ">
                     <p>SEND</p>
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
};
