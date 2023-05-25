import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Tagline({ text }) {
  return (
    <Row className="  text-white  px-4 pb-sm-2 d-flex justify-content-center">
      <Col>
        <p className="fs-6 text-center my-auto py-4 bg-secondary rounded">
          {text}
        </p>
      </Col>
    </Row>
  );
}
