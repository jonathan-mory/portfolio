import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function Presentation() {
  return (
    <section
      id="presentation"
      className="section-presentation"
      data-aos="fade-down"
    >
      <Container>
        <Row className="align-items-center">
          {/* Image - toujours ronde, prend toute la largeur sous lg */}
          <Col xs={12} lg={6} className="order-lg-2 mb-5 mb-lg-0">
            <Image
              src="/photo_cv_jonathan_mory.webp"
              alt="Jonathan Mory"
              fluid
              roundedCircle
              className="w-100 w-lg-75"
            />
          </Col>

          {/* Texte + boutons */}
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-center text-center text-lg-start gap-3 order-lg-1"
          >
            <h1 className="display-3 fw-semibold">Jonathan Mory</h1>
            <h2>Développeur Web</h2>
            <p className="fs-5">
              Bonjour et bienvenue sur mon site portfolio ! Formé chez
              OpenClassrooms, je suis un développeur web spécialisé dans le
              front-end avec JavaScript/React. Je conçois des sites et
              applications modernes, performants et accessibles. Passionné par
              le code, je serais ravi de transformer vos idées en solutions
              concrètes.
            </p>

            {/* Version desktop/tablette ≥ md : inline */}
            <Container className="p-0 gap-3 d-none d-md-flex justify-content-center justify-content-lg-start flex-wrap">
              <Button
                href="https://github.com/jonathan-mory"
                variant="dark"
                className="animated-button"
                size="lg"
              >
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/jonathan-mory/"
                variant="dark"
                className="animated-button"
                size="lg"
              >
                LinkedIn
              </Button>
              <Button
                href="/CV_Jonathan_Mory.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
                className="animated-button"
                size="lg"
              >
                CV
              </Button>
              <Button
                href="mailto:jomory@orange.fr"
                variant="dark"
                className="animated-button"
                size="lg"
              >
                E-mail
              </Button>
            </Container>

            {/* Version mobile < md : 2 par 2 */}
            <Container className="p-0 d-md-none">
              <Row className="g-2">
                <Col xs={6}>
                  <Button
                    href="https://github.com/jonathan-mory"
                    variant="dark"
                    className="animated-button w-100"
                    size="lg"
                  >
                    GitHub
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button
                    href="https://www.linkedin.com/in/jonathan-mory/"
                    variant="dark"
                    className="animated-button w-100"
                    size="lg"
                  >
                    LinkedIn
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button
                    href="/CV_Jonathan_Mory.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="dark"
                    className="animated-button w-100"
                    size="lg"
                  >
                    CV
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button
                    href="mailto:jomory@orange.fr"
                    variant="dark"
                    className="animated-button w-100"
                    size="lg"
                  >
                    E-mail
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
