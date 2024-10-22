import React from "react";
import Header from "./Pages/Header";
import Sidebar from "./Pages/SildeBar";
import NewsFeed from "./Pages/NewsFeed";
import RightSidebar from "./Pages/RightSlider";
import Footer from "./Pages/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App d-flex flex-column">
      {/* Responsive Header */}
      <Header />

      <Container fluid className="flex-grow-1">
        <Row>
          {/* Sidebar on the left */}
          <Col xs={12} md={4} lg={3} className="bg-light">
            <Sidebar />
          </Col>

          {/* Main content area for NewsFeed */}
          <Col xs={12} md={8} lg={6}>
            <NewsFeed />
          </Col>

          {/* Right Sidebar */}
          <Col xs={12} lg={3} className="bg-light">
            <RightSidebar />
          </Col>
        </Row>
      </Container>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
