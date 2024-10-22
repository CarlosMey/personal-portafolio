import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  
  // Define useRef for form
  const form = useRef(null);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_plij9dg', 'template_8aexo3j', form.current, {
        publicKey: 'NRJgPZtaBZQ3vKUAJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus({ success: true, message: 'Message sent successfully' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({ success: false, message: 'Something went wrong, please try again later.' });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Enviame un correo si estas interesado en trabajar conmigo</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="to_name" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col> */}
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="reply_to" value={formDetails.email} placeholder="Correo" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col> */}
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    
                    </Row>
                  </form>
                  {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger bg-white p-2 mt-2 rounded w-50" : "success bg-white p-2 mt-2 rounded w-50"}>{status.message}</p>
                        </Col>
                      )}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
