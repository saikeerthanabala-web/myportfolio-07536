import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.15 }
    );
    items.forEach(i => observer.observe(i));
  }, []);

  return (
    <>
      <Head>
        <title>Sai Keerthana Bala | SDET</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </Head>

      {/* NAV */}
      <nav className="nav">
        <h3>Sai Keerthana Bala</h3>
        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certs</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero reveal">
        <img
          src="/profile.jpg"
          className="profile"
          onClick={() => setShowImage(true)}
          alt="Sai Keerthana Bala"
        />
        <h1>SDET • Automation • API</h1>
        <p>Building reliable, scalable & intelligent test systems</p>

        <div className="hero-buttons">
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

      {/* MODAL */}
      {showImage && (
        <div className="modal" onClick={() => setShowImage(false)}>
          <img src="/profile.jpg" alt="profile" />
        </div>
      )}

      {/* ABOUT */}
      <section id="about" className="section reveal">
        <h2>👩‍💻 About Me</h2>
        <p>
          Software Development Engineer in Test with <strong>5+ years</strong> of
          experience in automation, backend, and API testing across healthcare
          and financial domains.
        </p>
        <p>
          Passionate about CI/CD, AI-assisted QA, and building maintainable test
          frameworks that scale.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section reveal">
        <h2>🧪 Skills</h2>
        <div className="skills">
          <div><i className="fa-solid fa-robot"></i> Automation<br/><span>Selenium, Playwright, Cypress</span></div>
          <div><i className="fa-solid fa-code"></i> Programming<br/><span>Java, Python, JS</span></div>
          <div><i className="fa-solid fa-plug"></i> API Testing<br/><span>REST, SOAP, Postman</span></div>
          <div><i className="fa-solid fa-database"></i> Databases<br/><span>SQL Validation</span></div>
          <div><i className="fa-solid fa-gears"></i> CI/CD<br/><span>Jenkins, GitHub</span></div>
          <div><i className="fa-solid fa-brain"></i> AI-QA<br/><span>Prompt Engg, Test Gen</span></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h2>📂 Projects</h2>

        <div className="card">
          <h3>DHCS – Healthcare</h3>
          <p>
            Automated and backend testing for Medicaid eligibility, claims, and
            provider workflows using Selenium, APIs, and SQL.
          </p>
        </div>

        <div className="card">
          <h3>Creditsafe – Financial</h3>
          <p>
            UI & API automation, CI/CD pipelines, cross-browser testing for
            enterprise financial platforms.
          </p>
        </div>
      </section>

      {/* CERTS */}
      <section id="certifications" className="section reveal">
        <h2>🎓 Certifications</h2>
        <ul className="certs">
          <li>✔ DataCamp – AI Testing</li>
          <li>✔ DataCamp – Python</li>
          <li>✔ LinkedIn Learning – GitHub</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section reveal">
        <h2>📬 Contact</h2>
        <p>Open to QA / SDET / Automation roles</p>
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
        * { box-sizing: border-box; }
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(135deg, #0f172a, #020617);
          color: #e5e7eb;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(2,6,23,0.9);
          display: flex;
          justify-content: space-between;
          padding: 1rem 2rem;
        }

        .links a {
          margin-left: 1rem;
          color: #93c5fd;
          text-decoration: none;
        }

        .hero {
          text-align: center;
          padding: 4rem 1.5rem 3rem;
        }

        .profile {
          width: 140px;
          border-radius: 50%;
          cursor: pointer;
          border: 4px solid #38bdf8;
          transition: transform .3s;
        }
        .profile:hover { transform: scale(1.1); }

        h1 { font-size: 2.4rem; margin: 1rem 0; }
        h2 { color: #38bdf8; margin-bottom: 1rem; }

        .hero-buttons { margin-top: 1.5rem; }
        .btn {
          padding: .6rem 1.2rem;
          background: #38bdf8;
          color: #020617;
          border-radius: 25px;
          margin: 0 .5rem;
          text-decoration: none;
        }
        .btn.outline {
          background: transparent;
          border: 1px solid #38bdf8;
          color: #38bdf8;
        }

        .section {
          max-width: 1000px;
          margin: auto;
          padding: 3rem 1.5rem;
        }

        .skills {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
          gap: 1.2rem;
        }
        .skills div, .card {
          background: #020617;
          border: 1px solid #1e293b;
          padding: 1.2rem;
          border-radius: 14px;
        }
        .skills i { color: #38bdf8; font-size: 1.3rem; }

        .certs li { margin-bottom: .6rem; }

        .footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid #1e293b;
        }
        .footer a {
          margin: 0 .8rem;
          color: #38bdf8;
          font-size: 1.4rem;
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: .8s; }
        .reveal.active { opacity: 1; transform: translateY(0); }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.85);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal img { width: 320px; border-radius: 20px; }
      `}</style>
    </>
  );
}
