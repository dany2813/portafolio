import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Contacto () {
  
  const detallesFormularioIniciales = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    mensaje: ''
  }

  const [detallesFormulario, setDetallesFormulario] = useState(detallesFormularioIniciales);
  const [textoBoton, setTextoBoton] = useState('Enviar');
  const [estado, setEstado] = useState({});

  const actualizarFormulario = (categoria, valor) => {
    setDetallesFormulario({
      ...detallesFormulario,
      [categoria]: valor
    });
  }

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setTextoBoton("Enviando...");
    let respuesta = await fetch("http://localhost:5173/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(detallesFormulario),
    });
    setTextoBoton("Enviar");
    let resultado = await respuesta.json();
    setDetallesFormulario(detallesFormularioIniciales);
    if (resultado.codigo === 200) {
      setEstado({ exito: true, mensaje: 'Mensaje enviado con éxito' });
    } else {
      setEstado({ exito: false, mensaje: 'Algo salió mal, por favor intente de nuevo más tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contáctame</h2>
                  <form onSubmit={manejarEnvio}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={detallesFormulario.nombre} placeholder="Nombre" 
                          onChange={(e) => actualizarFormulario('nombre', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={detallesFormulario.apellido} placeholder="Apellido" 
                          onChange={(e) => actualizarFormulario('apellido', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={detallesFormulario.correo} placeholder="Correo electrónico" 
                          onChange={(e) => actualizarFormulario('correo', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={detallesFormulario.telefono} placeholder="Número telefónico" 
                          onChange={(e) => actualizarFormulario('telefono', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={detallesFormulario.mensaje} placeholder="Mensaje" 
                          onChange={(e) => actualizarFormulario('mensaje', e.target.value)}></textarea>
                        <button type="submit"><span>{textoBoton}</span></button>
                      </Col>
                      {
                        estado.mensaje &&
                        <Col>
                          <p className={estado.exito === false ? "danger" : "success"}>{estado.mensaje}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contáctanos" />
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}