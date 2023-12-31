import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  //console.log(currentYear);
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>RapdiBuy &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
