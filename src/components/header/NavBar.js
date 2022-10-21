import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import "../header/NavBar.css";
import pic from '../images/logo.png';

const NavBar = () => {
  return (
    <>
        <Navbar expand="lg gradient-background p-3">
          <Container>
            <Navbar.Brand to="/">
           <img src={pic} alt="logo" width="40%"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto " style={{paddingRight:"180px"}}>
                <Link to="/" className="px-3 links">
                  Home
                </Link>
                <Link to="/service" className="px-3 links">
                  Service
                </Link>
                <Link to="/company" className="px-3 links">
                  Company
                </Link>
                <Link to="/blog" className="px-3 links">
                  Blog
                </Link>
                <Link to="/contact" className="px-3 links">
                  Contact
                </Link>
              </Nav>
              <div className="links">
                <Link to="/login" className="px-3 link_btn">
                  Blog
                </Link>
                <Link to="/signup" className="px-3 link_btn">
                  Contact
                </Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <Outlet  />
    </>
  );
};

export default NavBar;
