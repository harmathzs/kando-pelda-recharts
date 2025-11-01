/* TODO - npm install recharts bootstrap react-bootstrap */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Shared Layout with fixed top blue navbar
function Layout({ children }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand>React Charts Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/line">Line</Nav.Link>
              <Nav.Link as={Link} to="/bar">Bar</Nav.Link>
              <Nav.Link as={Link} to="/pie">Pie</Nav.Link>
              <Nav.Link as={Link} to="/function">Function</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Push content down below fixed navbar */}
      <Container style={{ marginTop: "75px" }}>
        {children}
      </Container>
    </>
  );
}

// TODO - outsource template subpage with code and chart cards
function ChartPage({ title, codeContent, chartType, chartData }) {
  return (
    <>
      <h2>{title}</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Code</Card.Header>
            <Card.Body>
              <pre style={{ whiteSpace: "pre-wrap" }}>{codeContent}</pre>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Chart</Card.Header>
            <Card.Body>
              {/* Placeholder for chart */}
              <div style={{height: "300px", border: "1px solid #ccc"}}>
                TODO - chart will go here
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

// TODO - outsource component
function Line() {
  const chartData = {
    title: 'Snail position', 
    positions: [
      ['1h', 10],
      ['2h', 30],
      ['3h', 20],
      ['4h', 40],
    ]
  }
  const sampleCode = `Line chart data JSON: \n${JSON.stringify(chartData)}`;
  return <ChartPage title="Line Chart" codeContent={sampleCode} chartType="line" chartData={chartData} />;
}

// TODO - outsource component
function Bar() {
  const chartData = {
    title: 'X vs O', 
    wins: {x: 7, y: 5}
  }
  const sampleCode = `Bar chart data JSON: \n${JSON.stringify(chartData)}`;
  return <ChartPage title="Bar Chart" codeContent={sampleCode} chartType="bar" chartData={chartData} />;
}

// TODO - outsource component
function Pie() {
  const chartData = {
    title: 'X vs O', 
    wins: {x: 7, y: 5}
  }
  const sampleCode = `Pie chart data JSON: \n${JSON.stringify(chartData)}`;
  return <ChartPage title="Pie Chart" codeContent={sampleCode} chartType="pie" chartData={chartData} />;
}

// TODO - outsource component
function FunctionPage() {
  const sampleCode = `Function formula: \nf(x)= (sin(x) +2x) /x`;
  const chartData = {
    f: x => (Math.sin(x) +2.0*x) /x
  }
  return <ChartPage title="Function" codeContent={sampleCode} chartType="function" chartData={chartData} />;
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/line" element={<Line />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/function" element={<FunctionPage />} />
          <Route path="*" element={<Line />} /> {/* Default to Line */}
        </Routes>
      </Layout>
    </Router>
  );
}
