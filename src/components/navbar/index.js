import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="ligth" id="navbar">
    <Navbar.Brand className="toWhite">MyMovies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#action" className="toWhite">Action</Nav.Link>
        <Nav.Link href="#aventure" className="toWhite">Aventure</Nav.Link>
        <Nav.Link href="#horreur" className="toWhite">Horreur</Nav.Link>
        <Nav.Link href="#horreur" className="toWhite">Comédie</Nav.Link>
        <Nav.Link href="#signIn" className="toWhite">Sign-in</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
