import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from 'react-router-dom';


  export const SecureEcommerce = () => {
        
   
  return (
    <HelmetProvider>
    <div className="container">
                
            <h1>Secure E-Commerce Platform</h1>
            <h3> <a href="https://testing-9-j4r9.onrender.com/Namaste">Try Here</a></h3>
            <div className="highlight">
                <strong>Objective:</strong> Developed a <strong>secure, scalable, and cost-effective</strong> e-commerce platform to bridge the gap between local vendors and digital commerce. This project was designed to <strong>implement and refine</strong> my expertise in full-stack development, security best practices, and cloud deployment while empowering small businesses with an affordable digital storefront solution.
            </div>

            <h2>Key Features & Technical Implementation</h2>
            
            <ul>
                <li><strong>Google OAuth 2.0 Sign-In</strong>
                    <ul>
                        <li>Integrated secure, passwordless authentication to enhance user experience while reducing credential-based vulnerabilities</li>
                        <li>Leveraged Firebase Authentication for seamless SSO (Single Sign-On) and JWT-based session management</li>
                    </ul>
                </li>
                
                <li><strong>End-to-End Data Security with AES-256 Encryption</strong>
                    <ul>
                        <li>Implemented symmetric encryption for sensitive user and transaction data at rest (database) and in transit (TLS 1.3)</li>
                        <li>Ensured compliance with PCI-DSS standards for payment data handling</li>
                    </ul>
                </li>
                
                <li><strong>Stripe & Razorpay Payment Gateway Integration</strong>
                    <ul>
                        <li>Enabled multi-payment support (credit/debit, UPI, net banking) with client-side tokenization to prevent MITM attacks</li>
                        <li>Automated invoice generation and real-time transaction logging for auditability</li>
                    </ul>
                </li>
                
                <li><strong>Automated EmailJS Workflows</strong>
                    <ul>
                        <li>Deployed transactional email triggers (order confirmations, OTPs, password resets) via SMTP with DKIM/SPF validation</li>
                    </ul>
                </li>
                
                <li><strong>Role-Based Access Control (RBAC) for Admin & Customers</strong>
                    <ul>
                        <li>Enforced least-privilege access via policy-driven permissions</li>
                        <li>Implemented JWT claims for granular authorization checks at the API middleware level</li>
                    </ul>
                </li>
                
                <li><strong>CI/CD Pipeline Deployment (AWS/GCP)</strong>
                    <ul>
                        <li>Automated build, test, and deployment using GitHub Actions/Jenkins with Docker containerization</li>
                        <li>Configured auto-scaling and CDN caching (Cloudflare) for high availability</li>
                    </ul>
                </li>
                
                <li><strong>Responsive UI with Dynamic Search</strong>
                    <ul>
                        <li>Built a mobile-first frontend with lazy loading and debounced search queries</li>
                        <li>Utilized Elasticsearch for fuzzy matching and typo-tolerant product discovery</li>
                    </ul>
                </li>
            </ul>

            <h2>Impact & Intent</h2>
            <p>This project demonstrates my ability to <strong>architect secure, production-grade systems</strong> while addressing real-world gaps in digital accessibility for SMEs. By prioritizing <strong>cost efficiency</strong> (open-source stack, serverless components) and <strong>security-by-design</strong>, the platform enables vendors to transition online <strong>without prohibitive overhead</strong>.</p>
            
            <h2>Technologies Used</h2>
            <div className="tech-stack">
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Firebase</span>
                <span className="tech-item">Stripe API</span>
                <span className="tech-item">Razorpay API</span>
                <span className="tech-item">AWS EC2/S3</span>
                <span className="tech-item">GitHub Actions</span>
                <span className="tech-item">Docker</span>
            </div>
            
            <div className="highlight">
                <strong>Note:</strong> The solution is <strong>modular and extensible</strong>, with future plans to integrate AI-driven inventory forecasting and multi-vendor APIs.
            </div>

    </div>
    </HelmetProvider>
  )
}
