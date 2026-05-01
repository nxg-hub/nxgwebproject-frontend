import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import "./Ebooks.css";

const EBOOK_DOWNLOADS = [
  {
    href: "/jobshadowing/ebooks/nxg-hub-job-shadowing-guides.pdf",
    filename: "NXG-Hub-Job-Shadowing-Guides.pdf",
  },
];

const encodeFormData = (data) =>
  new URLSearchParams(data).toString();

const downloadEbooks = () => {
  EBOOK_DOWNLOADS.forEach((ebook, index) => {
    window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = ebook.href;
      link.download = ebook.filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, index * 350);
  });
};

function ResourceForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "ebook-resource-form");
    downloadEbooks();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      });

      setStatus("success");
      setMessage("Submitted successfully. Your download has started.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We could not submit the form. Please check your connection and try again."
      );
    }
  };

  return (
    <>
      <Header />
      <main className="ebooks-page">
        <section className="ebooks-form-page">
          <div className="ebooks-form-panel">
            <Link to="/jobshadowing/ebooks" className="ebooks-back-link dark">
              Back to Resources
            </Link>

            <div className="ebooks-form-heading">
              <span>Unlock Resources</span>
              <h1>Fill the form to access all guides.</h1>
              <p>Takes less than a minute.</p>
            </div>

            <form
              className="ebooks-resource-form"
              name="ebook-resource-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="ebook-resource-form" />
              <input type="hidden" name="recipient_emails" value="info@nextgenhub.com.ng, admin@nextgenhub.com.ng" />
              <label className="ebooks-hidden-field">
                Do not fill this out if you are human:
                <input name="bot-field" />
              </label>

              <label>
                Name*
                <input type="text" name="name" required />
              </label>

              <label>
                Career Track*
                <input type="text" name="careerTrack" required />
              </label>

              <label>
                City*
                <input type="text" name="city" required />
              </label>

              <label>
                Social Media Handles (LinkedIn, Twitter and Facebook)*
                <textarea name="socialMediaHandles" rows="3" required />
              </label>

              <label>
                Email Address*
                <input type="email" name="email" required />
              </label>

              <fieldset>
                <legend>Career Position</legend>
                <label>
                  <input type="radio" name="careerPosition" value="Entry Level" />
                  Entry Level
                </label>
                <label>
                  <input type="radio" name="careerPosition" value="Mid-Level" />
                  Mid-Level
                </label>
                <label>
                  <input type="radio" name="careerPosition" value="Senior Level" />
                  Senior Level
                </label>
                <label>
                  <input type="radio" name="careerPosition" value="Other" />
                  Other:
                </label>
              </fieldset>

              <fieldset>
                <legend>Career Stage *</legend>
                <label>
                  <input type="radio" name="careerStage" value="Self taught" required />
                  Self taught
                </label>
                <label>
                  <input type="radio" name="careerStage" value="Career Switcher" />
                  Career Switcher
                </label>
                <label>
                  <input type="radio" name="careerStage" value="Fresh Graduate" />
                  Fresh Graduate
                </label>
                <label>
                  <input type="radio" name="careerStage" value="Other" />
                  Other:
                </label>
              </fieldset>

              <label>
                How did you find out about us?*
                <input type="text" name="referralSource" required />
              </label>

              <button
                type="submit"
                className="ebooks-form-btn"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting..." : "Submit and Download"}
              </button>

              {message && (
                <p className={`ebooks-form-status ${status}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ResourceForm;
