import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, filters } from "../data/portfolio";
import { ProjectArt } from "./project-art";
import { ProjectDialog } from "./project-dialog";
export function SelectedWork() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState<number | null>(null);
  const visible = projects.filter((p) => filter === "All work" || p.category === filter);
  return (
    <section className="work-section section-wrap" id="work">
      <div className="section-heading" data-reveal>
        <div>
          <span className="eyebrow">01 / THE WORK</span>
          <h2>
            Made to <span className="serif-word">stand out.</span>
          </h2>
        </div>
        <p>
          A few ideas brought to life.
          <br />
          Different disciplines. The same curiosity.
        </p>
      </div>
      <div className="work-toolbar">
        <div className="filter-list" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === "All work" && <span>04</span>}
            </button>
          ))}
        </div>
        <span className="concept-caption">A COLLECTION OF SAMPLE CONCEPTS ↙</span>
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} projects shown
      </p>
      <div className="project-grid">
        {visible.map((p) => (
          <button
            className="project-card"
            key={p.id}
            onClick={() => setSelected(projects.findIndex((item) => item.id === p.id))}
            aria-label={`Explore ${p.name}, sample ${p.category} concept`}
          >
            <div className="art-wrap">
              <ProjectArt kind={p.art} />
              <span className="sample-badge">SAMPLE CONCEPT</span>
              <span className="view-project">
                Explore concept <ArrowUpRight size={20} />
              </span>
            </div>
            <div className="project-meta">
              <div>
                <h3>{p.name}</h3>
                <p>{p.type}</p>
              </div>
              <span className="project-open">
                <ArrowUpRight size={23} />
              </span>
            </div>
          </button>
        ))}
      </div>
      <div className="work-end">
        <span>Imagined brands. Real creative possibilities.</span>
        <a href="#contact" className="text-link">
          Your project could be next <ArrowUpRight size={17} />
        </a>
      </div>
      <ProjectDialog selected={selected} onClose={() => setSelected(null)} onChange={setSelected} />
    </section>
  );
}
