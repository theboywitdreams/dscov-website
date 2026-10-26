import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, ArrowLeft, Check, LoaderCircle } from "lucide-react";
import { useInquiry } from "../queries/inquiries";
const choices = [
  "Branding & identity",
  "Web design",
  "Print & documents",
  "Something else",
] as const;
type Service = (typeof choices)[number];
export function GuidedInquiry({
  preselected,
  selectionVersion,
}: {
  preselected: string;
  selectionVersion: number;
}) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<Service | "">("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const inquiry = useInquiry();
  useEffect(() => {
    if (choices.includes(preselected as Service)) {
      setService(preselected as Service);
      setStep(1);
      setError("");
    }
  }, [preselected, selectionVersion]);
  function next() {
    if (step === 0 && !service) {
      setError("Choose a service to get started.");
      return;
    }
    if (step === 1 && message.trim().length < 10) {
      setError("Tell me a little more—at least 10 characters.");
      return;
    }
    setError("");
    setStep((v) => v + 1);
  }
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step !== 2) {
      next();
      return;
    }
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    if (!service) return;
    setError("");
    const website = new FormData(e.currentTarget).get("website")?.toString() ?? "";
    try {
      await inquiry.mutateAsync({ name, email, service, message, website });
    } catch {
      setError("Your brief could not be saved. Please try again.");
    }
  }
  function restart() {
    inquiry.reset();
    setStep(0);
    setService("");
    setMessage("");
    setName("");
    setEmail("");
    setError("");
  }
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-grid">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">04 / YOUR NEXT BIG IDEA</span>
          <h2>
            Let's make
            <br />
            something
            <br />
            <span className="contact-outline">different.</span>
            <ArrowUpRight className="contact-big-arrow" />
          </h2>
          <p>
            A fresh start. A new look. An idea on a napkin.
            <br />
            Whatever you're thinking, let's give it shape.
          </p>
          <div className="contact-small">
            <span className="status-dot" /> GOOD THINGS START WITH A CONVERSATION.
          </div>
        </div>
        <div className="brief-builder">
          {inquiry.isSuccess ? (
            <div className="inquiry-success" aria-live="polite">
              <div className="success-check">
                <Check size={34} />
              </div>
              <span className="eyebrow">A GREAT PLACE TO START</span>
              <h3>
                Your idea is
                <br />
                on the board.
              </h3>
              <p>Your brief has been saved. Reference #{inquiry.data.reference}.</p>
              <p className="form-note">
                This preview stores inquiries in the app database. Email notifications are not
                enabled yet.
              </p>
              <button className="button button-dark" onClick={restart}>
                Start another brief <ArrowUpRight size={18} />
              </button>
            </div>
          ) : (
            <>
              <div className="brief-top">
                <span>THE PROJECT STARTER</span>
                <span>0{step + 1} / 03</span>
              </div>
              <div className="step-track" aria-label={`Step ${step + 1} of 3`}>
                {["The idea", "The details", "Meet you"].map((s, i) => (
                  <span key={s} className={i <= step ? "current" : ""}>
                    <b>{i < step ? <Check size={12} /> : `0${i + 1}`}</b>
                    {s}
                  </span>
                ))}
              </div>
              <form onSubmit={submit} noValidate>
                <div className="honeypot" aria-hidden="true">
                  <label>
                    Website
                    <input aria-label="Website" name="website" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                {step === 0 && (
                  <div className="brief-step">
                    <h3>
                      What are we
                      <br />
                      <span className="serif-word">dreaming up?</span>
                    </h3>
                    <p>Pick a starting point. We'll figure out the rest.</p>
                    <div className="service-choices">
                      {choices.map((s, i) => (
                        <button
                          type="button"
                          key={s}
                          className={service === s ? "chosen" : ""}
                          aria-pressed={service === s}
                          onClick={() => {
                            setService(s);
                            setError("");
                          }}
                        >
                          <span>0{i + 1}</span>
                          {s}
                          {service === s ? <Check size={18} /> : <ArrowUpRight size={18} />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 1 && (
                  <div className="brief-step">
                    <span className="selected-service">{service}</span>
                    <h3>
                      Give me the
                      <br />
                      <span className="serif-word">big picture.</span>
                    </h3>
                    <label htmlFor="project-message">What do you have in mind?</label>
                    <textarea
                      aria-label="What do you have in mind?"
                      id="project-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="The idea, the feeling, what you'd like to create..."
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                    />
                    <small>Just a few sentences. There are no wrong ideas.</small>
                  </div>
                )}
                {step === 2 && (
                  <div className="brief-step">
                    <h3>
                      And who is
                      <br />
                      <span className="serif-word">the visionary?</span>
                    </h3>
                    <div className="input-pair">
                      <label>
                        Your name
                        <input
                          aria-label="Your name"
                          name="name"
                          autoComplete="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          maxLength={100}
                          placeholder="Name & surname"
                          required
                        />
                      </label>
                      <label>
                        Email address
                        <input
                          aria-label="Email address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          maxLength={254}
                          placeholder="you@example.com"
                          required
                        />
                      </label>
                    </div>
                    <div className="brief-summary">
                      <span className="eyebrow">YOUR BRIEF, AT A GLANCE</span>
                      <strong>{service}</strong>
                      <p>{message}</p>
                      <button type="button" onClick={() => setStep(1)}>
                        Edit your idea <ArrowUpRight size={13} />
                      </button>
                    </div>
                    <p className="form-note">
                      Your name, email and project brief will be stored in the app. Email
                      notifications aren't enabled in this preview.
                    </p>
                  </div>
                )}
                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <div className="brief-actions">
                  {step > 0 ? (
                    <button
                      type="button"
                      className="back-button"
                      onClick={() => {
                        setStep((v) => v - 1);
                        setError("");
                      }}
                      disabled={inquiry.isPending}
                    >
                      <ArrowLeft size={17} /> Back
                    </button>
                  ) : (
                    <span className="brief-reassurance">A LITTLE BRIEF. A BIG FIRST STEP.</span>
                  )}
                  <button className="button button-dark" type="submit" disabled={inquiry.isPending}>
                    {inquiry.isPending ? (
                      <>
                        <LoaderCircle className="spin" size={17} /> Saving...
                      </>
                    ) : step === 2 ? (
                      <>
                        Save my brief <ArrowUpRight size={17} />
                      </>
                    ) : (
                      <>
                        Next step <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
