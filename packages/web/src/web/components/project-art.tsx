export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M50 0 57 20 72 5 73 28 94 17 84 39 100 43 80 52 95 69 73 67 77 91 58 77 50 100 42 78 24 93 27 69 5 73 20 54 0 46 23 39 10 19 32 28 30 5 44 21Z" />
      <circle cx="50" cy="50" r="15" fill="var(--paper)" />
      <path d="M41 52Q50 62 59 52" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
export function ProjectArt({ kind, compact = false }: { kind: string; compact?: boolean }) {
  return (
    <div className={`project-art art-${kind} ${compact ? "compact-art" : ""}`} aria-hidden="true">
      {kind === "sundae" && (
        <>
          <div className="sundae-paper">
            <small>GOOD DAYS. GREAT SCOOPS.</small>
            <strong>
              sundae<span>social</span>
            </strong>
            <Sun />
            <small>A LITTLE SCOOP OF SUNSHINE.</small>
          </div>
          <div className="sundae-card">
            <Sun />
            <b>
              sundae
              <br />
              social
            </b>
            <small>MADE FOR THE GOOD TIMES.</small>
          </div>
          <div className="sundae-sticker">
            stay
            <br />
            <i>sweet.</i>
          </div>
        </>
      )}
      {kind === "form" && (
        <>
          <div className="form-window">
            <div className="window-top">
              <span>FORM®</span>
              <span>Studio &nbsp; Work &nbsp; Contact ↗</span>
            </div>
            <p>
              Architecture.
              <br />
              <i>With intention.</i>
            </p>
            <div className="building">
              <div className="building-front" />
              <div className="building-side" />
              <div className="building-door" />
            </div>
            <div className="window-bottom">
              <span>SPACES FOR THE WAY WE LIVE.</span>
              <span>EST. 2026 ↗</span>
            </div>
          </div>
          <span className="form-caption">A NEW PERSPECTIVE.</span>
        </>
      )}
      {kind === "zest" && (
        <>
          <div className="zest-photo">
            <img src="/images/citrus.jpg" alt="" />
            <strong>
              zest<span>& co.</span>
            </strong>
            <small>GOODNESS, IN EVERY DROP.</small>
          </div>
          <div className="zest-card">
            <b>
              Fresh
              <br />
              by nature.
            </b>
            <span>100% GOOD ENERGY.</span>
            <div className="citrus-symbol">✳</div>
          </div>
        </>
      )}
      {kind === "field" && (
        <>
          <div className="field-sheet back-sheet">
            <small>A JOURNAL OF CREATIVE THINKING</small>
            <b>
              Make
              <br />
              <i>room.</i>
            </b>
            <span>FOR SOMETHING DIFFERENT.</span>
          </div>
          <div className="field-sheet front-sheet">
            <small>ISSUE 01 &nbsp; / &nbsp; THE CREATIVE ISSUE</small>
            <b>
              THE
              <br />
              FIELD
              <br />
              <i>NOTES.</i>
            </b>
            <div className="field-orbit" />
            <span>IDEAS DON'T LIVE IN STRAIGHT LINES.</span>
          </div>
        </>
      )}
    </div>
  );
}
