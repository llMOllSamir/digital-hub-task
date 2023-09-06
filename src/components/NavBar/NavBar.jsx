import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.css";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  InputGroup,
} from "react-bootstrap";
import logo1 from "../../Images/health.png";
import logo2 from "../../Images/Dakhelia.png";
import { useDispatch } from "react-redux";
import { setNavHeight } from "../../store/Nav.slice";

export default function NavBar() {
  const [mx, setmx] = useState("mx-5");
  let nav = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth <= 600) setmx("mx-1");
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth <= 600) {
        setmx("mx-1");
      } else {
        setmx("mx-5");
      }
    });
    setTimeout(() => {
      dispatch(setNavHeight(nav.current.clientHeight));
    }, 10);
  }, []);

  return (
    <Navbar fixed="top" ref={nav} expand="lg" bg="light" variant="light">
      <Container fluid className={mx}>
        <Navbar.Brand className={styles.logo}>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <h2 className="mx-3">الرئيسية</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Form className={styles.form}>
              <InputGroup className={styles.searchText}>
                <Form.Label htmlFor="search">
                  <i className="fa-solid fa-magnifying-glass text-muted fa-2x"></i>
                </Form.Label>
                <Form.Control
                  type="search"
                  id="search"
                  placeholder={"استعلام عن حاله مواليد او وفاة"}
                  className={styles.search}
                  aria-label="Search"
                />
              </InputGroup>
            </Form>
            <NavDropdown
              title={<i className="fa-solid fa-gear h1"></i>}
              className={styles.drop}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="" className="text-end">
                المواليد
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="" className="text-end">
                <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i>
                تسجيل الخروج
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
