import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Head>
        <title>Keerthana Bala | SDET</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NAVBAR */}
      <nav className="nav">
        <h3>Keerthana Bala</h3>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile"
          onClick={() => setShowImage(true)}
        />
        <h1>Software Development Engineer in Test</h1>
        <p>Automation • API • Backend • AI-Assisted QA</p>
      </section>

      {/* IMAGE POPUP */}
      {showImage && (
        <div className="modal" onClick={() => setShowImage(false)}>
          <img src="/profile.jpg" alt="Popup" className="modal-img" />
        </div>
      )}

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          SDET with <b>5+ years of experience</b> in building scalable automation
          frameworks and validating complex web and API-based systems.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div><h4>Automation</h4><p>Selenium, Playwright, Cypress</p></div>
          <div><h4>Languages</h4><p>Java, Python, JavaScript</p></div>
          <div><h4>API Testing</h4><p>REST, SOAP</p></div>
          <div><h4>Backend</h4><p>SQL, Data Validation</p></div>
          <div><h4>CI/CD</h4><p>GitHub, Jenkins</p></div>
          <div><h4>AI QA</h4><p>Prompt Engineering, AI Testing</p></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="card">
          <h4>Automation Framework</h4>
          <p>Selenium & Playwright based E2E automation.</p>
        </div>
        <div className="card">
          <h4>API Test Suite</h4>
          <p>REST API automation with Python & SQL checks.</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <ul>
          <li>✔ Python Programming – DataCamp</li>
          <li>✔ AI Testing & Prompt Engineering</li>
          <li>✔ Java & Problem Solving – HackerRank</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: keerthanabala@example.com</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">🔗</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">💻</a>
        <a href="/SaikeerthanaResume.pdf" target="_blank" rel="noreferrer">📄</a>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        section {
          scroll-margin-top: 90px;
        }

        .nav {
          position: sticky;
          top: 0;
          background: #020617;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          z-index: 100;
        }

        .nav h3 {
          color: #38bdf8;
        }

        .nav-links a {
          margin-left: 1.2rem;
          color: #e5e7eb;
          text-decoration: none;
        }

        .hero {
          padding: 4rem 2rem;
          text-align: center;
        }

        .profile {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .profile:hover {
          transform: scale(1.1);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }

        .modal-img {
          width: 300px;
          border-radius: 16px;
        }

        .section {
          padding: 4rem 2rem;
          max-width: 1000px;
          margin: auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .skills-grid div,
        .card {
          background: #020617;
          padding: 1.5rem;
          border-radius: 14px;
          transition: transform 0.3s;
        }

        .skills-grid div:hover,
        .card:hover {
          transform: translateY(-6px);
        }

        .footer {
          text-align: center;
          padding: 2rem;
          background: #020617;
          font-size: 1.5rem;
        }

        .footer a {
          margin: 0 1rem;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
