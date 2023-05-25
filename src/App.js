import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import WebNav from "./components/Nav";
import Tagline from "./components/Tagline";

import data from "../src/data/data.json";

function App() {
  return (
    <Container fluid className="p-0" style={{ overflow: "hidden" }}>
      <WebNav items={data.navbarLinks} />
      <Header />
      <Tagline
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi excepturi!"
        }
      />
      <Cards items={data.cardsList} />
      <Footer text={"Copyright © 2023"} />
    </Container>
  );
}

export default App;
