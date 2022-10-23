import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import "../header/NavBar.css";
import pic from '../images/logo.png';

const NavBar = () => {
  return (
    <>
    
        <Navbar expand="lg gradient-background nav-tab p-2">
          <div className="d-flex ms-3">
            <Navbar.Brand to="/">
           <img src={pic} alt="logo" width="30%"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/" className="px-3 links">
                  Home
                </Link>
                <Link to="/about" className="px-4 links">
                  About
                </Link>
                <Link to="/service" className="px-4 links">
                  Service
                </Link>
                <Link to="/project" className="px-4 links">
                  Project
                </Link>
                <Link to="/blogs" className="px-4 links">
                  Blogs
                </Link>
                <Link to="/career" className="px-4 links">
                Career
                </Link>
                <Link to="/contact" className="px-4 links">
                  Contact
                </Link>
              </Nav>
              
            </Navbar.Collapse>
          </div>
        </Navbar>
      <Outlet  />
    </>
  );
};

export default NavBar;
