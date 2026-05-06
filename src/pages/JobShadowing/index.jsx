import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

import "./JobShadowing.css";

const companies = [
  {
    name: "Tony Elumelu Foundation",
    logo: "/jobshadowing/logos/tef-social-banner.jpg",
  },
  { name: "Nomba", logo: "/jobshadowing/logos/nomba.png" },
  { name: "Paystack", logo: "/jobshadowing/logos/paystack.png" },
  { name: "Flutterwave", logo: "/jobshadowing/logos/flutterwave.png" },
  { name: "Access Bank", logo: "/jobshadowing/logos/access-bank.png" },
  { name: "Deloitte", logo: "/jobshadowing/logos/deloitte-new.png" },
  { name: "Interswitch", logo: "/jobshadowing/logos/interswitch.png" },
  { name: "UBA", logo: "/jobshadowing/logos/uba.png" },
  { name: "OPay", logo: "/jobshadowing/logos/opay.png" },
];

const benefits = [
  {
    title: "Real Workplace Access",
    text: "Work alongside professionals in real offices, studios, and delivery teams instead of staying in theory mode.",
  },
  {
    title: "1-on-1 Mentorship",
    text: "Weekly sessions with your assigned mentor for feedback, clarity, and practical career direction.",
    dark: true,
  },
  {
    title: "Alumni Network",
    text: "Stay connected to a growing community sharing referrals, opportunities, and support after the program ends.",
    dark: true,
  },
  {
    title: "Structured Curriculum",
    text: "Guided tasks, reflection exercises, and career roadmaps designed around your stage and goals.",
  },
];

const testimonials = [
  {
    name: "Queen Samuel",
    role: "Frontend Developer",
    track: "Frontend Development",
    body: "My internship experience at NXG Hub was really helpful for my growth as a frontend developer. It gave me the chance to work in a practical environment, improve my skills, and understand better how real projects are handled. During the internship, I learned a lot about building user interfaces, writing better code, and paying attention to details while working on tasks. I also appreciated the support and guidance I received, which made learning easier and encouraged me t ...[Truncated]",
  },
  {
    name: "Onyinye Okugo",
    role: "Product Manager",
    track: "Product Management",
    body: "My internship experience at NXG Hub was truly transformative for my journey in Product Management. The programme is structured around real practice, not just theory — you solve actual problems, collaborate with others, and deliver results. The hands-on environment pushed me to think independently and grow fast. A few months after completing the internship, I landed a role at a fintech company, and I credit NXG Hub for preparing me for that opportunity. Special thanks  ...[Truncated]",
  },
  {
    name: "Jubril Bucknor",
    role: "Software Engineer",
    track: "Software Engineering",
    body: "My experience at NXG-Hub was very valuable to my early career. It was my first real professional experience in tech, and it helped me understand how a real development team works. During my time there, I had the opportunity to work with a great team and contribute to the delivery of two products. The environment was very supportive, and the senior engineers were always willing to help and guide us whenever we were stuck, especially Mr. Joe. Overall, it was a great learn ...[Truncated]",
  },
];

const TRUNCATE_LENGTH = 220;

function TestimonialCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = item.body.length > TRUNCATE_LENGTH;

  const displayText =
    isLong && !expanded
      ? `${item.body.slice(0, TRUNCATE_LENGTH).trimEnd()}…`
      : item.body;

  return (
    <article
      className={`testimonial-card ${index === 0 ? "featured" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {index === 0 && <span className="featured-badge">Featured</span>}

      <div className="testimonial-track">{item.track}</div>

      <div className="ts-stars">★★★★★</div>

      <p>
        {displayText}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="read-more-btn"
          >
            {expanded ? " Read less" : " Read more"}
          </button>
        )}
      </p>

      <div className="testimonial-person">
        <div className="ts-avatar">
          {item.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
        </div>
      </div>
    </article>
  );
}

function JobShadowing() {
  const [activeHeroAction, setActiveHeroAction] = useState("resources");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const revealElements = document.querySelectorAll(".jobshadowing-reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    const testimonialCards = document.querySelectorAll(".testimonial-card");

    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ts-visible");
            testimonialObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    testimonialCards.forEach((card) => testimonialObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      testimonialObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />

      <main className="jobshadowing-page">
        {/* HERO */}
        <section
          className="jobshadowing-hero"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,8,6,0.64), rgba(10,8,6,0.72)), url('/jobshadowing/images/hero-bg.png')",
          }}
        >
          <div className="jobshadowing-hero-inner">
            <div className="jobshadowing-tag">Founding Cohort</div>

            <h1>
              Real People. <em>Real Careers.</em> Real Changes.
            </h1>

            <p>
              NXG Hub Job Shadowing is a practical three-month experience built
              for career explorers and transitioners who want real exposure, real
              mentors, and real work rhythms.
            </p>

            <div
              className={`jobshadowing-actions ${
                activeHeroAction === "apply" ? "is-apply-active" : ""
              }`}
              onMouseLeave={() => setActiveHeroAction("resources")}
            >
              <Link
                to="/jobshadowing/ebooks"
                className={`jobshadowing-btn hero-action-btn ${
                  activeHeroAction === "resources" ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveHeroAction("resources")}
                onFocus={() => setActiveHeroAction("resources")}
                onTouchStart={() => setActiveHeroAction("resources")}
                onClick={() => setActiveHeroAction("resources")}
              >
                Explore Resources
              </Link>

              <a
                href="https://bit.ly/nxghubjobshadowing2026"
                className={`jobshadowing-btn hero-action-btn ${
                  activeHeroAction === "apply" ? "is-active" : ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveHeroAction("apply")}
                onFocus={() => setActiveHeroAction("apply")}
                onTouchStart={() => setActiveHeroAction("apply")}
                onClick={() => setActiveHeroAction("apply")}
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <section className="jobshadowing-strip">
          <div>3-month immersive experience</div>
          <div>Mentor-guided shadowing</div>
          <div>Hands-on project exposure</div>
          <div>Career clarity and community</div>
        </section>

        {/* ABOUT */}
        <section className="jobshadowing-about">
          <div className="jobshadowing-copy jobshadowing-reveal">
            <div className="section-eyebrow">About the Program</div>

            <h2>
              Where Career <em>Clarity Begins</em>
            </h2>

            <p>
              The NXG-HUB Job Shadowing Program is an advanced internship
              designed for self-taught individuals who aspire to transition into
              the tech industry.
            </p>

            <p>
              Participants work in real time alongside NXG-HUB professionals on
              active projects, contributing meaningfully to ongoing business and
              technology solutions.
            </p>

            <p>
              This immersive approach ensures participants gain practical
              experience that mirrors real workplace expectations and industry
              standards.
            </p>

            <p>
              Successful participants are also recommended to partner companies
              and external organizations for potential employment opportunities.
            </p>
          </div>

          <div className="jobshadowing-benefits jobshadowing-reveal">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`benefit-card ${benefit.dark ? "dark" : ""}`}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="jobshadowing-testimonials">
          <div className="jobshadowing-testimonials-wrap">
            <div className="section-eyebrow-line">What They Say</div>

            <h2>
              Stories that <em>speak for themselves</em>
            </h2>

            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <TestimonialCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* COMPANIES — auto-scroll marquee */}
        <section className="jobshadowing-companies jobshadowing-reveal">
          <div className="section-eyebrow">
            Trusted by Professionals from These Companies &amp; Sectors
          </div>

          <div className="marquee-track">
            <div className="marquee-inner">
              {companies.map((company) => (
                <div className="company-card" key={company.name}>
                  <img src={company.logo} alt={company.name} />
                  <span>{company.name}</span>
                </div>
              ))}
              {companies.map((company) => (
                <div className="company-card" key={`${company.name}-dup`}>
                  <img src={company.logo} alt={company.name} />
                  <span>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="jobshadowing-cta jobshadowing-reveal">
          <div className="section-eyebrow-line">Join the Next Cohort</div>

          <h2>
            Your Turn to <em>Shadow</em> &amp; Succeed
          </h2>

          <p>
            Applications for Cohort 1 are open now. Spots are limited to ensure
            every participant gets quality mentorship and support.
          </p>
        </section>

        {/* ROADMAP */}
        <section className="jobshadowing-roadmap">
          <div className="jobshadowing-roadmap-card jobshadowing-reveal">
            <div className="roadmap-left">
              <div className="section-eyebrow">Founding Opportunity</div>

              <h2>
                Apply for <em>Cohort 1</em>
              </h2>

              <p>
                A 3-month intensive job shadowing experience across 10 career
                tracks.
              </p>

              <div className="roadmap-stats">
                <div>
                  <strong>3</strong>
                  <span>Months</span>
                </div>
                <div>
                  <strong>10</strong>
                  <span>Tracks</span>
                </div>
                <div>
                  <strong>15</strong>
                  <span>Max / Track</span>
                </div>
              </div>

              <div className="roadmap-pricing">
                <div>
                  <small>Program Fee</small>
                  <h3>₦100,000</h3>
                  <p>Nigerian participants</p>
                </div>
                <div>
                  <h3>$100</h3>
                  <p>International participants</p>
                </div>
              </div>
            </div>

            <div className="roadmap-right">
              <div className="timeline-step">
                <span>1</span>
                <div>
                  <small className="timeline-label">Month 1</small>
                  <h4>Onboarding &amp; Shadowing</h4>
                  <p>
                    Orientation, close shadowing with your assigned mentor, and
                    immersion in day-to-day workflows.
                  </p>
                </div>
              </div>

              <div className="timeline-step">
                <span>2</span>
                <div>
                  <small className="timeline-label">Month 2</small>
                  <h4>Active Participation</h4>
                  <p>
                    Work on defined tasks, attend real team meetings, and
                    contribute to live projects.
                  </p>
                </div>
              </div>

              <div className="timeline-step">
                <span>3</span>
                <div>
                  <small className="timeline-label">Month 3</small>
                  <h4>Independent Execution</h4>
                  <p>
                    Execute tasks independently with performance evaluation like
                    a real team member.
                  </p>
                </div>
              </div>

              <ul className="roadmap-perks">
                <li>Access to alumni network &amp; career resources</li>
              </ul>

              <a
                href="https://bit.ly/nxghubjobshadowing2026"
                className="jobshadowing-btn primary wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve My Spot in Cohort 1 →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default JobShadowing;
