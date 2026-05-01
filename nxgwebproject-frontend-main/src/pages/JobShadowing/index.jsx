import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../../components/Carousel";
import "./JobShadowing.css";


const companies = [
  { name: "Tony Elumelu Foundation", logo: "/jobshadowing/logos/tef-social-banner.jpg" },
  { name: "Nomba", logo: "/jobshadowing/logos/nomba.png" },
  { name: "Paystack", logo: "/jobshadowing/logos/paystack.png" },
  { name: "Flutterwave", logo: "/jobshadowing/logos/flutterwave.png" },
  { name: "Access Bank", logo: "/jobshadowing/logos/access-bank.png" },
  { name: "Deloitte", logo: "/jobshadowing/logos/deloitte-new.png" },
  { name: "Interswitch", logo: "/jobshadowing/logos/interswitch.png" },
  { name: "UBA", logo: "/jobshadowing/logos/uba.png" },
  { name: "OPay", logo: "/jobshadowing/logos/opay.jpg" },
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
    role: "Frontend Developer ",
    track: "Frontend Development",
    body: "My internship experience at NXG Hub was really helpful for my growth as a frontend developer. It gave me the chance to work in a practical environment, improve my skills, and understand better how real projects are handled. During the internship, I learned a lot about building user interfaces, writing better code, and paying attention to details while working on tasks. I also appreciated the support and guidance I received, which made learning easier and encouraged me to keep improving.",
  },
{
  name: "Onyinye Okugo",
  role: "Product Managemen",
  track: "Product Management",
  body: "My internship experience at NXG Hub was truly transformative for my journey in Product Management. The programme is structured around real practice, not just theory — you solve actual problems, collaborate with others, and deliver results. The hands-on environment pushed me to think independently and grow fast. A few months after completing the internship, I landed a role at a fintech company, and I credit NXG Hub for preparing me for that opportunity. Special thanks to Mr. Joseph for his leadership and encouragement.",
},
  {
    name: "Jubril Bucknor",
    role: "Software Engineerin",
    track: "Software Engineering",
    body: "My experience at NXG-Hub was very valuable to my early career. It was my first real professional experience in tech, and it helped me understand how a real development team works. During my time there, I had the opportunity to work with a great team and contribute to the delivery of two products. The environment was very supportive, and the senior engineers were always willing to help and guide us whenever we were stuck, especially Mr. Joe. Overall, it was a great learning experience.",
  },
];

const TRUNCATE_LENGTH = 220;

function TestimonialCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.body.length > TRUNCATE_LENGTH;
  const displayText =
    isLong && !expanded
      ? item.body.slice(0, TRUNCATE_LENGTH).trimEnd() + "…"
      : item.body;

  return (
    <article
      key={item.name}
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
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#2596BE",
              fontWeight: 600,
              fontSize: "0.88rem",
              padding: "0 0 0 4px",
              fontFamily: "inherit",
              fontStyle: "normal",
            }}
          >
            {expanded ? " Read less" : " Read more"}
          </button>
        )}
      </p>
      <div className="testimonial-person">
        <div className="ts-avatar">
          {item.name.split(" ").map((n) => n[0]).join("")}
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const elements = document.querySelectorAll(".jobshadowing-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));

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
      observer.disconnect();
      testimonialObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="jobshadowing-page">

        <section
          className="jobshadowing-hero"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,8,6,0.64), rgba(10,8,6,0.72)), url('/jobshadowing/images/ebooks-header.png')",
          }}
        >
          <div className="jobshadowing-hero-inner">
            <div className="jobshadowing-tag">Founding Cohort</div>
            <h1>
              Real People. <em>Real Careers.</em> Real Changes.
            </h1>
            <p>
              NXG Hub Job Shadowing is a practical three-month experience built
              for career explorers and transitioners who want real exposure,
              real mentors, and real work rhythms.
            </p>
            <div className="jobshadowing-actions">
              <Link to="/jobshadowing/ebooks" className="jobshadowing-btn primary">
                Explore Resources
              </Link>
              <a
                href="https://bit.ly/nxghubjobshadowing2026"
                className="jobshadowing-btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        <section className="jobshadowing-strip">
          <div>3-month immersive experience</div>
          <div>Mentor-guided shadowing</div>
          <div>Hands-on project exposure</div>
          <div>Career clarity and community</div>
        </section>

        <section className="jobshadowing-about">
          <div className="jobshadowing-copy jobshadowing-reveal">
            <div className="section-eyebrow">About the Program</div>
            <h2>
              Where Career <em>Clarity Begins</em>
            </h2>
            <p>
              The NXG-HUB Job Shadowing Program is an advanced internship designed
              for self-taught individuals who aspire to transition into the tech
              industry. Unlike traditional internships, participants work in real
              time alongside NXG-HUB professionals on active projects, contributing
              meaningfully to ongoing business and technology solutions.
            </p>
            <p>
              This immersive approach ensures participants gain hands-on, practical
              experience that mirrors real workplace expectations.
            </p>
            <p>
              By the end of the program, participants will have a clear understanding
              of professional tech workflows, collaboration standards, and performance
              expectations within the industry. Successful participants are further
              recommended and suggested to partner companies and external organizations
              for potential employment opportunities as part of the program perks.
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

        <section className="jobshadowing-companies">
          <div className="section-eyebrow">
            Trusted by Professionals from These Companies &amp; Sectors
          </div>
          <Carousel
            className="company-carousel jobshadowing-reveal"
            opts={{
              align: "start",
              containScroll: "trimSnaps",
              dragFree: true,
              loop: true,
              speed: 10,
            }}
            autoPlay={3000}
          >
            <CarouselContent className="pb-4">
              {companies.map((company) => (
                <CarouselItem
                  key={company.name}
                  className="min-w-[220px] basis-[25%]"
                >
                  <div className="company-card">
                    <img src={company.logo} alt={company.name} />
                    <span>{company.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </section>

        <section className="jobshadowing-cta jobshadowing-reveal">
          <div className="section-eyebrow-line">Join the Next Cohort</div>
          <h2>
            Your Turn to <em>Shadow</em> &amp; Succeed
          </h2>
          <p>
            Applications for Cohort 1 are open now. Spots are limited — we keep
            cohorts small to ensure every participant gets a quality mentorship
            match.
          </p>
        </section>

        <section className="jobshadowing-roadmap">
          <div className="jobshadowing-roadmap-card jobshadowing-reveal">

            <div className="roadmap-left">
              <div className="section-eyebrow">Founding Opportunity</div>
              <h2>
                Apply for <em>Cohort 1</em>
              </h2>
              <p>
                A 3-month intensive job shadowing experience across 10 career
                tracks. Each track is limited to ensure focused mentorship and
                personalized growth.
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
                    Work on defined tasks, attend real team meetings, and start
                    contributing to live projects.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <span>3</span>
                <div>
                  <small className="timeline-label">Month 3</small>
                  <h4>Independent Execution</h4>
                  <p>
                    Execute tasks independently with performance evaluation, just
                    like a real team member.
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