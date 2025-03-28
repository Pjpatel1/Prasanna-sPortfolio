import React from "react";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import SIEM from "../Projects/SOCHomeLab/SIEM.webp";
export const Portfolio = () => {
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path);
  };  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
       
            
              <div  className="po_item">
                <img src={SIEM} alt="" />
                <div className="content">
                  <p>SOC Hands-on home lab</p>
                  <a onClick={() => navigateToPage('/sochomelab')}>view project</a>
                </div>
              </div>
              <div  className="po_item">
                <img src="https://picsum.photos/400/800/?grayscale" alt="" />
                <div className="content">
                  <p>E-Commerce Site</p>
                  <a onClick={() => navigateToPage('/SecureEcommerce')}>view project</a>
                </div>
              </div>
              <div  className="po_item">
                <img src="https://picsum.photos/400/?grayscale" alt="" />
                <div className="content">
                  <p>Portfolio Site</p>
                  <a href="https://prasanna-sportfolio.onrender.com/">view project</a>
                </div>
                
              </div>
       
          
        </div>
      </Container>
    </HelmetProvider>
  );
};
