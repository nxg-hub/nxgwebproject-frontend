import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import "./Ebooks.css";

const EBOOKS = [
  {
    id: 1,
    title: "Job Readiness Checklist",
    subtitle: "Prepare for interviews, applications, and workplace success.",
    description:
      "A practical checklist to help you approach opportunities with more confidence and structure.",
    category: "Career Preparation",
  },
  {
    id: 2,
    title: "How to Build a Tech Portfolio",
    subtitle: "Showcase your skills clearly and stand out.",
    description:
      "A focused guide to help you present your projects, skills, and experience in a strong and simple way.",
    category: "Portfolio Building",
  },
];

function EbooksPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const elements = document.querySelectorAll(".ebooks-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="ebooks-page">

        {/* ── HERO ───────────────── */}
        <section className="ebooks-hero">
          <div className="ebooks-hero-inner">
            
            <div className="ebooks-hero-copy">
              <div className="ebooks-badge">Resource Library</div>

              <h1>
                Free <span>job-shadowing</span> guides
              </h1>

              <p>
                Explore simple, practical ebooks designed to help you prepare
                for real career opportunities and grow with clarity.
              </p>

              <Link to="/jobshadowing" className="ebooks-back-link">
                ← Back to Job Shadowing
              </Link>
            </div>

          </div>
        </section>

        {/* ── MAIN CONTENT ───────────────── */}
        <section className="ebooks-shell">

          {/* ACCESS CARD */}
          <div className="ebooks-access-card ebooks-reveal">
            <div className="ebooks-access-copy">
              <h2>Get access to all ebooks</h2>

              <p>
                Click any guide, fill the quick form, and unlock the full
                resource library instantly.
              </p>

              <ul>
                <li>Choose a guide</li>
                <li>Enter your details</li>
                <li>Get instant access to all guides</li>
              </ul>
            </div>

          </div>

          {/* EBOOK LIST */}
          <div className="ebooks-grid">
            {EBOOKS.map((book, index) => {
              return (
                <Link
                  key={book.id}
                  to="/jobshadowing/ebooks/form"
                  className="ebook-card ebook-card-link ebooks-reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="ebook-card-head">
                    <span>{book.category}</span>
                    <h3>{book.title}</h3>
                    <p>{book.subtitle}</p>
                  </div>

                  <div className="ebook-card-body">
                    <p>{book.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default EbooksPage;
