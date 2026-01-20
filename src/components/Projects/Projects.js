import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import evcharge from "../../Assets/Projects/evcharge.jpeg";
import StudyMaterial from "../../Assets/Projects/StudyMaterial.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MERN Stack Chat App"
              description="Real-time chat application with Socket.io for instant messaging. Implemented JWT authentication, bcrypt password hashing, and user profiles with update capabilities."
              ghLink="https://github.com/ramajaiswal08/ChatApp--Chatr"
              demoLink="https://chatapp-chatr.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StudyMaterial}
              isBlog={false}
              title="GenAI Study Material App"
              description="AI-powered content generation using Google AI APIs. Built with Next.js and Prisma ORM connected to NeonDB. Scalable frontend with optimized SSR for seamless cross-device experience."
              ghLink="https://github.com/ramajaiswal08/GenAi-StudyMaterial-App"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evcharge}
              isBlog={false}
              title="EV Charging Station Locator"
              description="Location-based React Native app using OpenStreet Maps API and geolocation services. Integrated Clerk for authentication and Firebase for real-time data sync."
              ghLink="https://github.com/ramajaiswal08/Ev-Charging"
                           
            />
          </Col>

          

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
