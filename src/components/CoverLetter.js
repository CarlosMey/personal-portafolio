import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import cvFile from "../assets/CarlosMey-CV.pdf"; // Ruta del archivo de CV

export const CoverLetter = () => {
  return (
    <section className="cover-letter" id="cover-letter">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center mb-4">Carta de Presentación</h2>
                  <p>
                    <strong>Carlos Mey</strong><br />
                    Lima, Miraflores<br />
                    meycar96@gmail.com<br />
                    986875545
                  </p>
                  <p>
                    Me dirijo a usted con el propósito de postularme para el puesto de Programador Web. Con más de 2 años de experiencia en el desarrollo de aplicaciones web y una sólida formación en tecnologías tanto front-end como back-end, estoy convencido de que puedo aportar significativamente a su equipo.
                  </p>
                  <p>
                    En mi experiencia reciente como Programador Web en Geotop, he sido responsable del desarrollo y mantenimiento de páginas web de eCommerce y sistemas de gestión interna. Mis responsabilidades incluyeron la programación, gestión y optimización de la interfaz de usuario utilizando tecnologías como Livewire, JavaScript, Node.js, React, Tailwind y CSS, así como el desarrollo del servidor y la base de datos con Laravel 9.5 y MySQL. Esta experiencia me ha permitido mejorar mis habilidades de programación y aplicar las mejores prácticas en el desarrollo web.
                  </p>
                  <p>
                    Anteriormente, en mi rol en SystemV&V, me dediqué al diseño de interfaces de usuario y al mantenimiento evolutivo y correctivo del entorno web, utilizando tecnologías como Laravel, React, Typescript, HTML, CSS, Tailwind y SQL. Además, he implementado mejoras continuas en las plataformas, programado sistemas de gestión de contenidos y brindado soporte a usuarios finales.
                  </p>
                  <p>
                    Me considero un profesional orientado al desarrollo continuo, con excelentes habilidades de comunicación y capacidad para trabajar en equipo. Soy flexible y adaptable, cualidades que me han permitido colaborar eficazmente con colegas y usuarios finales para asegurar el éxito de los proyectos. También destaco en la definición de objetivos claros y la administración eficiente del tiempo.
                  </p>
                  {/* Botón para descargar el CV */}
                  <div className="text-center mt-4">
                    <Button variant="primary" 
                    // href={cvFile} 
                    // download="CarlosMey-CV.pdf"
                    >
                      Descargar CV
                    </Button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
