import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"
import elastic from "./image/Screenshot 2025-03-20 at 5.14.33 PM.png"
import kibana from "./image/Screenshot 2025-03-20 at 5.15.05 PM.png"
import logstash from "./image/Screenshot 2025-03-20 at 5.14.46 PM.png"
import kali from "./image/Screenshot 2025-03-20 at 5.26.39 PM.png"
import log from "./image/Screenshot 2025-03-20 at 5.25.51 PM.png"
export const SOCHomelab = () => {
  return (
    <div className="container">
      <div>
        <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">SOC HomeLab</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        </div>
        <div className="Content">
          <span>
              <h3>Summary: Open-Source SIEM Lab with ELK Stack</h3>
          </span>
              <h5> In this project, I designed and implemented an open-source SIEM (Security Information and Event Management) solution using the ELK Stack (Elasticsearch, Logstash, and Kibana) with Filebeat for log collection. The lab environment includes multiple virtual machines, simulating real-world attack scenarios and log analysis.
                  I configured Ubuntu clients to forward system logs to the SIEM server, enabling comprehensive monitoring of security events such as SSH brute-force attacks, privilege escalation attempts, and network traffic anomalies. Using Kibana, I built dynamic dashboards to visualize and analyze security incidents while creating custom alerting rules to detect and respond to potential threats.
                  This hands-on project demonstrates my expertise in log aggregation, threat detection, and incident response while utilizing open-source technologies to build a scalable and robust security monitoring system.
              </h5>
        </div>
        <div className="Content">
            <span>
                <h3>
                    Objective:
                </h3>
            </span>
            <h5>
                Build and operate a fully functional SIEM environment to collect, analyze, and visualize security logs for advanced threat detection and rapid incident response using open-source tools.
            </h5>
            <span>
                <h3>
                    Outcome:
                </h3>
            </span>
            <h5>
            Strengthened detection capabilities for SSH brute-force attempts, privilege escalation, and suspicious network activities by creating custom dashboards and automating real-time alerting—enhancing threat visibility and reducing response time.
            </h5>

            <span>
                <h3>
                Key Achievements:
                </h3>
            </span>
            <h5>
             
                  <li>Enhanced Threat Detection: Implemented and fine-tuned 3+ detection rules for identifying SSH brute-force attacks, privilege escalation, and suspicious activity. <br/></li>

                  <li>Improved Log Visibility: Configured centralized log collection from 2+ Ubuntu endpoints, increasing event coverage and visibility. <br/></li>

                <li>Reduced Response Time: Automated log parsing through Logstash pipelines, cutting manual investigation time by 50%. <br/></li>

                <li>Real-Time Monitoring: Designed and deployed dynamic Kibana dashboards for live threat visualization and streamlined analysis. <br/></li>

                <li>Operational Efficiency: Automated alerting processes to detect critical events, improving incident response readiness. <br/></li>
           
            </h5>

            <span>
                <h3>
                  Technical SKill Demonstration:
                </h3>
            </span>
            <h5>
               
                    <li>SIEM Tools: ELK Stack (Elasticsearch, Logstash, Kibana), Filebeat </li>

                    <li>Log Management: Centralized collection, parsing, and indexing from multiple endpoints.</li>

                    <li>Threat Detection: Identified and responded to SSH brute-force attacks, privilege escalation, and system anomalies</li>

                    <li>Incident Response: Configured real-time alerting rules to accelerate event triage and investigation</li>

                    <li>Linux Systems: Deployed and secured Ubuntu-based infrastructure for SIEM operations</li>

                    <li>Automation: Created efficient Logstash pipelines for automated log parsing and ingestion</li>

                    <li>Network Security: Monitored network traffic for anomalies and unauthorized access attempts</li>
                
            </h5>
            <span>
              <h3>
                  Lab Architecture
              </h3>
            </span>
              <h5>
                  <li>
                      SIEM Server: Ubantu Server (Running ELK Stack) 
                  </li>
                  <li>
                      Endpoint: Ubantu Client (Filebeat for log Shipping) 
                  </li>
                  <li>
                    Attack Machine: Kali Linux (Simulating cyberattacks)
                  </li>
                  <li>
                     Target: Metasploitable2 (Vulnerable machine for controlled testing)
                  </li>
              </h5>
              <span>
                <h3>
                    Data Flow
                </h3>
              </span>
              <li>
              Log Collection: Filebeat collects system logs from Ubuntu endpoints.
              </li>
              <li>
              Log Processing: Logstash parses and enriches logs before indexing.
              </li>
              <li>
              Data Analysis: Elasticsearch indexes logs for fast querying and search.
              </li>
              <li>
              Visualization & Alerting: Kibana displays dashboards and triggers alerts for suspicious events.
              </li>
        </div>
        <div className="visualproof">
            <h3>
              Visual Proof
            </h3>
            <div className="ELKStack">
                Working Elasticsearch Logstash Kibana Stack
                <img src={elastic} className="vpimage">
                </img>
                <img src={logstash} className="vpimage">
                </img>
                <img src={kibana}className="vpimage">
                </img>
            </div>
            <div className="logscan">
              Log of Ongoing Attack
              <img src={log} className="vpimage">
              </img>
              <img src={kali} className="vpimage">
              </img>
            </div>

        </div>
    </div>
  )
};
