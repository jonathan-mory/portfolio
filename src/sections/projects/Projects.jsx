import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { ListGroup } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import { projectsList } from '../../assets/datas';
import { getImage } from '../../utils/getImage';
import './Projects.scss';

export default function Projects() {
  const breakpointColumnsObj = {
    default: 2,
    991: 1,
    768: 1,
  };

  return (
    <section id="projects" className="py-5" data-aos="fade-down">
      <Container>
        <h2 className="mb-5 text-center">Mes Projets</h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projectsList.map((project) => (
            <Tab.Container key={project.projectId} defaultActiveKey="mission">
              <Card className="mb-4 shadow">
                <Card.Img
                  variant="top"
                  src={getImage(project.cover.split('/').pop())}
                  alt={project.title}
                />

                <Card.Body className="pb-4">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted">
                    {project.description}
                  </Card.Subtitle>
                  {project.linkDeployedSite && (
                    <Button
                      variant="primary"
                      size="md"
                      href={project.linkDeployedSite}
                      target="_blank"
                      className="me-3 animated-button"
                    >
                      Site web
                    </Button>
                  )}
                  {project.linkGitHub && (
                    <Button
                      variant="dark"
                      size="md"
                      href={project.linkGitHub}
                      target="_blank"
                      className="animated-button"
                    >
                      GitHub
                    </Button>
                  )}
                </Card.Body>

                <Card.Header>
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="mission">Mission</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="skills">
                        Compétences développées
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>

                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="mission">
                      <Card.Text>{project.mission}</Card.Text>
                    </Tab.Pane>
                    <Tab.Pane eventKey="skills">
                      <ListGroup variant="flush">
                        {project.skills.map((skill, idx) => (
                          <ListGroup.Item key={idx}>{skill}</ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          ))}
        </Masonry>
      </Container>
    </section>
  );
}
