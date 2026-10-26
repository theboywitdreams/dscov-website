import { useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowDown, RotateCcw, Move } from "lucide-react";
import { useDraggable } from "../hooks/use-draggable";
import { Sun } from "./project-art";
function Draggable({
  name,
  className,
  children,
}: {
  name: string;
  className: string;
  children: ReactNode;
}) {
  const { position, handlers } = useDraggable();
  return (
    <button
      {...handlers}
      className={`drag-piece ${className}`}
      style={{ translate: `${position.x}px ${position.y}px` }}
      aria-label={`Move ${name}. Drag or use arrow keys.`}
      aria-describedby="drag-instructions"
    >
      {children}
      <span className="drag-grip">
        <Move size={13} />
      </span>
    </button>
  );
}
export function HeroPlayground() {
  const [reset, setReset] = useState(0);
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow intro-item">
          <span className="tiny-star">✳</span> INDEPENDENT MIND. CREATIVE STUDIO.
        </div>
        <h1>
          <span className="headline-line">Good ideas.</span>
          <span className="headline-line">Bold design.</span>
          <span className="headline-line last-line">
            A little{" "}
            <span className="marker-word">
              different.
              <svg viewBox="0 0 430 22" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 14 Q 190 -2 421 9 M 24 20 Q 225 7 413 17" />
              </svg>
            </span>
          </span>
        </h1>
        <p className="hero-description intro-item">
          I'm <strong>Andani Mbanjwa.</strong> The creative behind DsCov.
          <br className="desktop-break" /> Turning your next big idea into something you can
          <br className="desktop-break" /> see, feel, and connect with.
        </p>
        <div className="hero-actions intro-item">
          <a className="button button-dark" href="#work">
            Explore my work <ArrowUpRight size={19} />
          </a>
          <a className="text-link" href="#contact">
            Let's make something <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="hero-foot intro-item">
          <span className="status-dot" /> YOUR IDEA. OUR NEXT CREATIVE ADVENTURE.
        </div>
      </div>
      <div className="hero-visual">
        <div className="playground" key={reset}>
          <div className="desk-grid" />
          <div className="desk-caption">THE CREATIVE DESK / 001</div>
          <Draggable name="yellow creative poster" className="poster-piece">
            <small>GOOD DESIGN IS A FEELING.</small>
            <b>
              Make
              <br />
              some
              <br />
              <i>good.</i>
            </b>
            <div className="poster-bottom">
              <span>
                DsCov
                <br />
                Creative
              </span>
              <Sun />
            </div>
          </Draggable>
          <Draggable name="olive business card" className="olive-piece">
            <span>FORM®</span>
            <b>
              Less ordinary.
              <br />
              More intention.
            </b>
            <small>THINK OUTSIDE THE FRAME. ↗</small>
          </Draggable>
          <Draggable name="lilac idea card" className="lilac-piece">
            <small>A NOTE FROM THE STUDIO</small>
            <b>
              what if
              <br />
              <i>we tried?</i>
            </b>
            <span>GOOD THINGS START WITH A QUESTION.</span>
          </Draggable>
          <Draggable name="creative sun sticker" className="sun-piece">
            <Sun />
            <span>GOOD ENERGY</span>
          </Draggable>
          <Draggable name="different by design sticker" className="round-piece">
            <span>
              DIFFERENT
              <br />
              <i>by design.</i>
              <ArrowUpRight size={30} />
            </span>
          </Draggable>
          <span className="desk-scribble">
            a little curiosity
            <br />
            goes a long way ↗
          </span>
        </div>
        <div className="playground-bottom">
          <span id="drag-instructions">
            <Move size={13} /> Nothing's set in stone. Drag things around.
          </span>
          <button onClick={() => setReset((v) => v + 1)} aria-label="Reset creative desk">
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>
      <a className="scroll-cue" href="#work">
        <ArrowDown size={16} /> SCROLL TO DISCOVER
      </a>
    </section>
  );
}
