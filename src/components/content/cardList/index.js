import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';

const CardList = ({ movies }) => (
  <Row>
    {movies.map((movie) => {
      const { img, title, resume } = movie;
      return (
        <Col xs={3} sm={3}>
          <Card>
            <Card.Img variant="top" src={img} className="img-cards" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text className="resume">{resume}</Card.Text>
              <Button variant="primary">Show</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    })}
  </Row>
);

export default CardList;
