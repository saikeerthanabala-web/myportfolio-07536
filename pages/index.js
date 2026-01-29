import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  // scroll reveal animation
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <>
      <Head>
        <title>Sai Keerthana Bala | SDET</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <h3>Sai Keerthana Bala</h3>
          <div className="links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero reveal">
        <img
          src="/profile.jpg"
          alt="Sai Keerthana Bala"
          className="profile"
          onClick={() => setShowImage(true)}
        />
        <h1>
          Software Development <br /> Engineer in Test
        </h1>
        <p>
          Automation • API • Backend • AI-Assisted QA
        </p>
      </section>

      {/* IMAGE MODAL */}
      {showImage && (
        <div className="modal" onClick={() => setShowImage(false)}>
          <img src="/profile.jpg" alt="profile" />
        </div>
      )}

      {/* ABOUT */}
      <section id="about" className="section reveal">
        <h2>About</h2>
        <p>
          I’m a <strong>Software Development Engineer in Test (SDET)</strong> with
          5+ years of experience delivering scalable automation and backend
          testing solutions for web-based and API-driven systems.
        </p>
        <p>
          I specialize in Selenium, Playwright, Cypress, Java, Python, REST APIs,
          CI/CD pipelines, and AI-assisted testing strategies in Agile
          environments.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section reveal">
        <h2>Skills</h2>
        <div className="skills">
          <div>
            <h4>Automation</h4>
            <span>Selenium, Playwright, Cypress, Robot Framework</span>
          </div>
          <div>
            <h4>Programming</h4>
            <span>Java, Python, JavaScript</span>
          </div>
          <div>
            <h4>API & Backend</h4>
            <span>REST API, SOAP UI, SQL Validation</span>
          </div>
          <div>
            <h4>CI/CD & Tools</h4>
            <span>Jenkins, GitHub, JIRA, ALM</span>
          </div>
          <div>
            <h4>Testing Types</h4>
            <span>Functional, Regression, Integration, E2E</span>
          </div>
          <div>
            <h4>AI-Assisted QA</h4>
            <span>Prompt Engineering, Test Generation</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h2>Projects</h2>

        <div className="project">
          <h3>DHCS – California State Client (Healthcare)</h3>
          <p>
            System-level and end-to-end testing of Medicaid applications,
            provider enrollment, eligibility, and claims processing with
            automation and backend SQL validation.
          </p>
        </div>

        <div className="project">
          <h3>Creditsafe Technologies (Financial)</h3>
          <p>
            Designed and maintained scalable UI & API automation frameworks,
            CI/CD integrations, and cross-browser testing for financial data
            platforms.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section reveal">
        <h2>Certifications</h2>
        <ul className="certs">
          <li>
            <a
              href="https://www.linkedin.com/learning/certificates/3616a12236061050059b49340236f011119a47345425794615a06bfd38fbf5be"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Learning – GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.datacamp.com/completed/statement-of-accomplishment/course/3649e0f53166c62e201654ebda46850a19bf688e"
              target="_blank"
              rel="noreferrer"
            >
              DataCamp – AI Testing
            </a>
          </li>
          <li>
            <a
              href="https://www.datacamp.com/completed/statement-of-accomplishment/course/4b9b3f1ecb92c140e55dafeeac0ddb25fdd49790"
              target="_blank"
              rel="noreferrer"
            >
              DataCamp – Python Programming
            </a>
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>
          Let’s connect on LinkedIn or view my resume below.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/Sai_Keerthana_Bala_Resume.pdf" target="_blank">Resume</a>
          <a
            href="https://www.linkedin.com/in/saikeerthanabala"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p>© 2026 Sai Keerthana Bala. All rights reserved.</p>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #0b0f19;
          color: #e5e7eb;
        }

        section {
          scroll-margin-top: 90px;
        }

        .nav {
          position: sticky;
          top: 0;
          background: #0b0f19;
          border-bottom: 1px solid #1f2933;
          z-index: 100;
        }

        .nav-inner {
          max-width: 1100px;
          margin: auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .links a {
          margin-left: 1.2rem;
          text-decoration: none;
          color: #cbd5f5;
          font-size: 0.95rem;
        }

        .hero {
          text-align: center;
          padding: 6rem 1.5rem 4rem;
        }

        .profile {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .profile:hover {
          transform: scale(1.1);
        }

        h1 {
          font-size: 2.8rem;
          margin: 1.5rem 0 0.5rem;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .section {
          max-width: 900px;
          margin: auto;
          padding: 4.5rem 1.5rem;
        }

        .skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .skills div {
          background: #111827;
          padding: 1.5rem;
          border-radius: 12px;
        }

        .project {
          background: #111827;
          padding: 1.8rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }

        .certs li {
          margin-bottom: 0.8rem;
        }

        .certs a {
          color: #60a5fa;
          text-decoration: none;
        }

        .footer {
          text-align: center;
          padding: 3rem 1.5rem;
          border-top: 1px solid #1f2933;
        }

        .footer-links a {
          margin: 0 1rem;
          color: #93c5fd;
          text-decoration: none;
        }

        /* reveal animation */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 200;
        }

        .modal img {
          width: 320px;
          border-radius: 18px;
        }
      `}</style>
    </>
  );
}

