import React from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { Provider } from 'react-redux';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';

import Navigation from './components/navbar';
import Content from './components/content';
import SignIn from './components/signIn';
import Store from '../store/configureStore';

const App = () => (
  <Provider store={Store}>
    <Navigation />
    <Container fluid>
      <Row>
        <Col xs={9} sm={9} id="content">
          <Content />
        </Col>
        <Col xs={3} sm={3}>
          <SignIn />
        </Col>
      </Row>
    </Container>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
