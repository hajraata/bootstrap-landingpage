import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer({ text }) {
  return (
    <Container className="mt-3 text-center bg-dark text-white pt-3 pb-2" fluid>
      <Row>
        <Col>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
}
