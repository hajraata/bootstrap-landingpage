import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import ModalAlert from "./Modal";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="p-4">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>So this is a modal, eh?</Modal.Title>
        </Modal.Header>
        <Modal.Body>So glad I finally figured this out!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Col lg={8} md={12}>
        <Image
          src="https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80"
          fluid
        ></Image>
      </Col>

      <Col lg={4} md={12} className="my-auto">
        <p className="display-6">Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          architecto eos necessitatibus sed doloribus quibusdam, placeat saepe
          repudiandae magnam ad?
        </p>
        <Button size="lg" onClick={handleShow}>
          Submit
        </Button>
      </Col>
    </Row>
  );
}

export default Header;
