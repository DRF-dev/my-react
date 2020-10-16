import React from 'react';
import {
  Form,
  Button,
  Image,
} from 'react-bootstrap';

import advertising from './assets/photo-1523798724321-364e1951df59.jpeg';

const Signin = () => (
  <div id="signin">
    <h2>Sign-in</h2>
    <Form className="form">
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    <div className="kfc">
      <Image src={advertising} fluid />
    </div>
  </div>
);

export default Signin;
