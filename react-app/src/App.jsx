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

// Template subpage with code and chart cards
function ChartPage({ title, codeContent }) {
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
              <div style={{height: "300px", border: "1px solid #ccc"}}>Chart will go here</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

function Line() {
  const sampleCode = `// Sample Line chart code snippet\nconst data = [...];`;
  return <ChartPage title="Line Chart" codeContent={sampleCode} />;
}

function Bar() {
  const sampleCode = `// Sample Bar chart code snippet\nconst data = [...];`;
  return <ChartPage title="Bar Chart" codeContent={sampleCode} />;
}

function Pie() {
  const sampleCode = `// Sample Pie chart code snippet\nconst data = [...];`;
  return <ChartPage title="Pie Chart" codeContent={sampleCode} />;
}

function FunctionPage() {
  const sampleCode = `// Sample function or formula code snippet\nfunction f(x) { return x * x; }`;
  return <ChartPage title="Function" codeContent={sampleCode} />;
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
