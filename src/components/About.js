import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row>
          <Col md={6} className="mx-auto text-center">
            <p>Hi, I'm a software developer passionate about building web applications. I specialize in React and have experience with various web technologies.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
