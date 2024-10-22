import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import djioficial from "../assets/img/djioficial.webp";
import bloggeotop from "../assets/img/bloggeotop.webp";
import tesloShop from "../assets/img/teslo-shop.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import imageReact from "../assets/img/UC-63f2b190-6f63-4db1-957a-17dd405b1503.webp";
import imageNext from "../assets/img/UC-2ebda412-ea60-4bb6-897c-bd227cd54200.webp";
import 'animate.css';
import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedCertificado, setSelectedCertificado] = useState(null);

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: djioficial,
      url: "https://djioficial.la/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bloggeotop,
      url: "https://djioficial.la/posts?page=3"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: tesloShop,
      url: "https://teslo-shop-master.vercel.app/"
    },
  ];

  const certificados = [
    {
      imageUrl: imageReact,
    },
    {
      imageUrl: imageNext,
    },
  ];

  const handleImageClick = (certificado) => {
    setSelectedCertificado(certificado);
    setModalShow(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    A continuación, te presento algunos de los proyectos en los que he trabajado, abarcando desde desarrollos web para ecommerce hasta sistemas de gestión empresarial. Cada proyecto ha sido una oportunidad para aplicar y mejorar mis habilidades en tecnologías como React, Laravel, Node.js, y más, enfocados en crear soluciones funcionales y eficientes.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Proyectos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certificados</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            certificados.map((certificado, index) => {
                              return (
                                <Col key={index} sm={6} md={4} className="mb-4">
                                  <img
                                    src={certificado.imageUrl}
                                    alt={`Certificado ${index + 1}`}
                                    className="img-fluid"
                                    onClick={() => handleImageClick(certificado)}
                                    style={{ cursor: 'pointer' }}
                                  />
                                </Col>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal para mostrar la imagen seleccionada */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Certificado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedCertificado && (
            <img
              src={selectedCertificado.imageUrl}
              alt="Certificado"
              className="img-fluid"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
