import { ArrowUpRight, Download, Plus, PenTool, Monitor, FileText } from "lucide-react";
import { services } from "../data/portfolio";
import { Sun } from "./project-art";
export function AboutServices({ onService }: { onService: (service: string) => void }) {
  const icons = [PenTool, Monitor, FileText];
  return (
    <>
      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">02 / WHAT I DO</span>
              <h2>
                Big picture.
                <br />
                <span className="serif-word">Small details.</span>
              </h2>
            </div>
            <p>
              From the spark of an idea to the final file.
              <br />A creative partner for your next chapter.
            </p>
          </div>
          <div className="service-rows">
            {services.map((s, i) => {
              const Icon = icons[i];
              return (
                <a
                  key={s.title}
                  className="service-row"
                  href="#contact"
                  onClick={() => onService(s.title)}
                  data-reveal
                >
                  <span className="service-number">0{i + 1}</span>
                  <div className="service-title">
                    <Icon size={27} />
                    <h3>{s.title}</h3>
                  </div>
                  <div className="service-copy">
                    <p>{s.text}</p>
                    <small>{s.tags}</small>
                  </div>
                  <span className="service-arrow">
                    <ArrowUpRight />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section className="about-section section-wrap" id="about">
        <div className="about-art" data-reveal>
          <div className="about-grid" />
          <div className="about-type">
            More
            <br />
            than
            <br />
            <i>a logo.</i>
          </div>
          <Sun className="about-sun" />
          <div className="about-signature">
            Andani Mbanjwa <ArrowUpRight size={20} />
          </div>
          <span className="about-art-label">THE MIND BEHIND DSCOV CREATIVE</span>
        </div>
        <div className="about-copy" data-reveal>
          <span className="eyebrow">03 / BEHIND DSCOV</span>
          <h2>
            A curious mind.
            <br />
            An intentional
            <br />
            <span className="serif-word">creative.</span>
          </h2>
          <p>
            I'm Andani Mbanjwa, the person behind DsCov Creative. This is a space for bold ideas,
            thoughtful details, and design that feels a little different.
          </p>
          <p>
            DsCov brings branding, web design, and print together under one creative roof. Have
            something in mind? Let's explore what it could become.
          </p>
          <small className="draft-label">BIO DRAFT / READY FOR YOUR PERSONAL STORY</small>
          <a
            href="/downloads/Andani-Mbanjwa-CV-Draft.txt"
            download
            className="button button-outline"
          >
            Download CV draft <Download size={17} />
          </a>
        </div>
      </section>
      <section className="testimonial-section section-wrap" data-reveal>
        <div className="testimonial-label">
          <span className="eyebrow">A SPACE FOR YOUR CLIENT STORIES</span>
          <Plus size={36} />
        </div>
        <blockquote>
          “Good design doesn't just look different.
          <br />
          It makes you <span className="serif-word">feel something.</span>”
        </blockquote>
        <p>SAMPLE TESTIMONIAL COPY — NOT A CLIENT ENDORSEMENT</p>
      </section>
    </>
  );
}
