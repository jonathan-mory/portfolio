import { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-bootstrap/Fade';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xeoaveko');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      if (formRef.current) {
        formRef.current.reset();
      }

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section
      id="contact"
      className="py-5 bg-dark text-white"
      data-aos="fade-down"
    >
      <Container>
        <h2 className="text-center mb-5">Contact</h2>
        <p className="text-center mb-5">
          Que ce soit pour discuter d'une opportunité, me faire part d’une idée
          ou simplement échanger autour du code, n’hésite pas à me contacter. Je
          suis toujours partant pour relever de nouveaux défis techniques !
        </p>
        <Row>
          <Col>
            <Fade in={showSuccess}>
              <div>
                {showSuccess && (
                  <Alert variant="success" className="mt-3">
                    Merci ! Votre message a bien été envoyé.
                  </Alert>
                )}
              </div>
            </Fade>

            <Fade in={!showSuccess}>
              <div>
                {!showSuccess && (
                  <Form onSubmit={handleSubmit} ref={formRef}>
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label>Nom</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        placeholder="Votre nom"
                      />
                      <ValidationError
                        prefix="Nom"
                        field="name"
                        errors={state.errors}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        placeholder="Votre email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        required
                        placeholder="Votre message..."
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="light"
                      disabled={state.submitting}
                      className="animated-button"
                    >
                      {state.submitting ? 'Envoi...' : 'Envoyer'}
                    </Button>
                  </Form>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
