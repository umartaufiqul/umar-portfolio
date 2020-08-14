import React from 'react';
import Menubar from "./components/Menubar"
import Sidebar from "./components/Sidebar"
import "./styles/App.css"
import {Container, Row, Col, Button} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Container>
        <h1> Umar Portfolio </h1>
        <Row>
          <Col md={3}>
            <Sidebar></Sidebar>
          </Col>
          <Col md={9}><Menubar /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
