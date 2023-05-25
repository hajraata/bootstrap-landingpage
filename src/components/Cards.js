import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Cards({ items }) {
  return (
    <Row className="d-flex justify-content-between flex-wrap ps-4 pe-4">
      {items.map((item) => (
        <Col md lg xl={4} sm={12} className="ps-2 pe-2" key={item.id}>
          <Card className="pb-2 mt-sm-4">
            <Card.Img
              src={item.src}
              style={{ height: "12rem", maxWidth: "100%", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{item.heading}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
            <footer>
              <Button className="ms-2">Card Button</Button>
            </footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
