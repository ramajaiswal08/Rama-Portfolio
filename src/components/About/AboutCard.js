import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Rama Jaiswal</span>{" "}
            from <span className="purple">Jharkhand, India</span>.
            <br />
            I'm a passionate <span className="purple">Full-Stack Developer</span> currently working at{" "}
            <span className="purple">CosmicFusion</span>.
            <br />I'm pursuing my Bachelor of Technology in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">Rungta College of Engineering and Technology</span>.
            <br />
            <br />
            I love building innovative solutions and contributing to open-source projects:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Complex Problems 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Full-Stack Applications 🌐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build solutions that make a real-world impact!"{" "}
          </p>
          <footer className="blockquote-footer">Rama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
