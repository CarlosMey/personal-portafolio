import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

const EXPERIENCES = [
    {
      year: "2023 - Present",
      role: "Programador Back-End & Front-End",
      company: "Geotop",
      description: `Encargado de la programación, mantenimiento, gestión de la página web Ecommerce y desarrollo de la página de gestión interna de la empresa.`,
      technologies: [
        "Livewire", 
        "JavaScript", 
        "React", 
        "Tailwind", 
        "CSS", 
        "Laravel 9.5", 
        "Node.js", 
        "API Rest", 
        "MySQL"
      ]
    },
    {
      year: "2022 - 2023",
      role: "Programador Web",
      company: "SystemV&V",
      description: `Desarrollo de una página de gestión (ERP) con enfoque en diseño de interfaces de usuario y mejoras continuas, además de atención a usuarios finales.`,
      technologies: [
        "Laravel", 
        "React", 
        "Typescript", 
        "HTML", 
        "CSS", 
        "Tailwind", 
        "SQL", 
        "API Rest"
      ]
    }
  ];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row className="align-items-center mt-5">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="text-center mb-5">Experience</h2>
                  {EXPERIENCES.map((experience, index) => (
                    <Row key={index} className="mb-4">
                      <Col md={3} className="text-md-right text-center">
                        <p className="">{experience.year}</p>
                      </Col>
                      <Col md={9}>
                        <h5>
                          {experience.role} -{" "}
                          <span className="">{experience.company}</span>
                        </h5>
                        <p className="mb-2">{experience.description}</p>
                        <div className="d-flex flex-wrap">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="badge bg-secondary me-2 mb-2"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
