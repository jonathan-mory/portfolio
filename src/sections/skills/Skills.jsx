import { skillsList } from '../../assets/datas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.scss';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-5 bg-dark text-white"
      data-aos="fade-down"
    >
      <Container>
        <h2 className="text-center mb-5">Compétences</h2>
        <Row className="align-items-start">
          {skillsList.map((section) => (
            <Col
              md={4}
              className="mb-4 d-flex flex-column align-items-center"
              key={section.title}
            >
              <h3 className="mb-5">{section.title}</h3>
              <ul className="list-unstyled d-flex flex-column gap-5">
                {section.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="d-flex align-items-center gap-3 skill-item"
                  >
                    {skill.logo && (
                      <FontAwesomeIcon
                        icon={skill.logo}
                        className="display-1 skill-icon fa-fw"
                      />
                    )}
                    <span className="fs-4 skill-text">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
