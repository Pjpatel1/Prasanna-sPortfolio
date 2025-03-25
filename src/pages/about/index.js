import {React, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import HeroImage from "./Images/workperch-3jjgUHIibPs-unsplash.jpg"
import Uwindsor from "./Images/Uwindsorlogo.webp"
export const About = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const navigate = useNavigate();
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigateToPage = (path) => {
    navigate(path);
  };  

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Get to Know About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="Heroimage-container">
          <h7>Please click and hover over devices & badges in image</h7>
          <img  className="hero-image" src={HeroImage}></img>
            <div 
              className="hover-section section-1"
              onClick={() => scrollToSection(section1Ref)}
            >
              <span className="hover-text">Who am I</span>
            </div>
            <div
                className="hover-section section-2"
                onClick={() => navigateToPage('/portfolio')}
            >
              <span className="hover-text">Projects</span>
            </div>
            <div
                className="hover-section section-3"
                onClick={() => navigateToPage('/contact')}
            >
              <span className="hover-text">Contact Me</span>
            </div>
            {/* <div
                className="hover-section section-4"
                onClick={() => scrollToSection('Software Skills')}
            >
              <span className="hover-text">Software Development skills</span>
            </div> */}
            {/* <div
                className="hover-section section-5"
                onClick={() => scrollToSection('Cyber Skills')}
            >
                <span className="hover-text">Cyber-security Skills</span>
            </div> */}
            <div 
              className="section-6 Security+"
              onClick={() => navigateToPage('/Certficates')}
            >
            </div>

        </div>
           <div className="BodyText" ref={section1Ref}>
            <h2>Who am I</h2>
            <h4>I am a Cybersecurity Analyst with 3 years of combined experience in software development and cybersecurity, holding a Master’s in Electrical and Computer Engineering with a focus on cybersecurity and a CompTIA Security+ certification. Proficient in SIEM tools like Wazuh, ELK Stack, and Splunk, as well as Metasploit, Kali Linux, and Ubuntu Server, I excel at automating security processes using Python and Shell scripting. My hands-on experience includes building a fully functional home lab to simulate and mitigate real-world threats, driven by a passion for protecting sensitive data and creating secure systems. Known for my creativity and problem-solving skills, I aim to refine and innovate cybersecurity practices, with a long-term goal of becoming a CISO. Let’s connect and build a safer digital future together.</h4>
          </div>
          <div className="BodyText">
            <h2>Education</h2>
            <div className="logocontainer"><img src={Uwindsor} className="Uwindsorlogo"></img></div>
            <h4>Masters of Electrical and Computer Engineering at University of Windsor</h4> 
            <h4>Focused in Cyber-security</h4>
          </div>
         
      </Container>
     
    </HelmetProvider>
  );
};
