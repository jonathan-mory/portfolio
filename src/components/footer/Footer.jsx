import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-body-tertiary py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© 2025 - Jonathan Mory</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">Développeur JavaScript | React | Node.js</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
