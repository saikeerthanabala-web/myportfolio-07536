import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
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
        <h1>Software Development Engineer in Test</h1>
        <p>Automation • API • Backend • QA Engineering</p>

        <div className="hero-actions">
          <a href="/SaiKeerthanaResume.pdf" target="_blank" className="btn">
            <i className="fa-solid fa-file-lines"></i> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/saikeerthanabala"
            target="_blank"
            className="btn outline"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
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
          I am a <strong>Software Development Engineer in Test (SDET)</strong> with
          5+ years of experience in automation, API, and backend testing across
          healthcare and financial domains.
        </p>
        <p>
          I focus on building scalable test frameworks, improving CI/CD quality,
          and enabling faster, reliable releases.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section reveal">
        <h2>Skills</h2>
        <div className="skills">
          <span>Selenium</span>
          <span>Playwright</span>
          <span>Cypress</span>
          <span>Java</span>
          <span>Python</span>
          <span>REST API</span>
          <span>Postman</span>
          <span>SQL</span>
          <span>Jenkins</span>
          <span>GitHub</span>
          <span>Agile</span>
          <span>AI-Assisted Testing</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h2>Projects</h2>

        <div className="project">
          <h3>DHCS – Healthcare (California State Client)</h3>
          <p>
            End-to-end automation and backend testing for Medicaid eligibility,
            provider enrollment, and claims processing systems.
          </p>
        </div>

        <div className="project">
          <h3>Creditsafe Technologies – Financial Domain</h3>
          <p>
            UI and API automation frameworks, CI/CD integration, and cross-browser
            testing for enterprise financial platforms.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section reveal">
        <h2>Certifications</h2>
        <ul className="certs">
          <li>DataCamp – AI Testing</li>
          <li>DataCamp – Python Programming</li>
          <li>LinkedIn Learning – GitHub</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>Open to SDET, QA Engineer, and Automation Tester roles.</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="/SaiKeerthanaResume.pdf" target="_blank">
          <i className="fa-solid fa-file-lines"></i>
        </a>
        <a href="https://www.linkedin.com/in/saikeerthanabala" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <p>© 2026 Sai Keerthana Bala</p>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: #f9fafb;
          color: #111827;
        }

        .nav {
          position: sticky;
          top: 0;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          z-index: 10;
        }

        .nav-inner {
          max-width: 1100px;
          margin: auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
        }

        .links a {
          margin-left: 1rem;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
        }

        .hero {
          text-align: center;
          padding: 3.5rem 1.5rem 2.5rem;
        }

        .profile {
          width: 140px;
          border-radius: 50%;
          cursor: pointer;
        }

        h1 {
          font-size: 2.3rem;
          margin: 1rem 0 0.5rem;
        }

        h2 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
        }

        .hero-actions {
          margin-top: 1.2rem;
        }

        .btn {
          display: inline-block;
          padding: 0.55rem 1.2rem;
          background: #2563eb;
          color: #fff;
          border-radius: 6px;
          text-decoration: none;
          margin: 0 0.4rem;
        }

        .btn.outline {
          background: transparent;
          color: #2563eb;
          border: 1px solid #2563eb;
        }

        .section {
          max-width: 900px;
          margin: auto;
          padding: 2.5rem 1.5rem;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .skills span {
          background: #e5e7eb;
          padding: 0.45rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
        }

        .project {
          margin-bottom: 1.2rem;
        }

        .certs li {
          margin-bottom: 0.5rem;
        }

        .footer {
          text-align: center;
          padding: 2rem 1rem;
          border-top: 1px solid #e5e7eb;
          background: #ffffff;
        }

        .footer a {
          margin: 0 0.6rem;
          color: #2563eb;
          font-size: 1.3rem;
        }

        .reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: 0.7s ease;
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal img {
          width: 300px;
          border-radius: 14px;
        }
      `}</style>
    </>
  );
}
