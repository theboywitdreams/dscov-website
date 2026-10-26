import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects } from "../data/portfolio";
import { ProjectArt } from "./project-art";
export function ProjectDialog({
  selected,
  onClose,
  onChange,
}: {
  selected: number | null;
  onClose: () => void;
  onChange: (n: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const el = dialog.current!;
    const previous = document.activeElement as HTMLElement;
    el.showModal();
    document.body.style.overflow = "hidden";
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        el.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled), [tabindex="0"]',
        ),
      );
      if (!focusable.length) return;
      event.preventDefault();
      const current = focusable.indexOf(document.activeElement as HTMLElement);
      const next = (current + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length;
      focusable[next].focus();
    }
    el.addEventListener("keydown", trapFocus);
    return () => {
      el.removeEventListener("keydown", trapFocus);
      el.close();
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [isOpen]);
  const p = projects[selected ?? 0];
  return (
    <dialog
      className="project-dialog"
      ref={dialog}
      aria-labelledby="project-title"
      onCancel={onClose}
    >
      <div className="dialog-inner">
        <div className="dialog-top">
          <span>DSCOV / CONCEPT ARCHIVE</span>
          <button className="icon-button" onClick={onClose} aria-label="Close project">
            <X />
          </button>
        </div>
        <div className="dialog-heading">
          <span className="eyebrow">
            {p.category} / {p.year}
          </span>
          <h2 id="project-title">{p.name}</h2>
          <p className="sample-note">Sample concept — not commissioned client work</p>
        </div>
        <ProjectArt kind={p.art} />
        <div className="case-body">
          <div>
            <span className="eyebrow">THE IDEA</span>
            <h3>{p.description}</h3>
            <span className="eyebrow">THE APPROACH</span>
            <p>{p.approach}</p>
          </div>
          <div>
            <span className="eyebrow">WHAT WENT INTO IT</span>
            <ul>
              {p.deliverables.map((d) => (
                <li key={d}>
                  <ArrowUpRight size={16} />
                  {d}
                </li>
              ))}
            </ul>
            <a href="#contact" className="button button-dark" onClick={onClose}>
              Have something in mind? <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="dialog-pagination">
          <button
            onClick={() => {
              onChange(((selected ?? 0) + projects.length - 1) % projects.length);
              dialog.current?.scrollTo(0, 0);
            }}
          >
            <ArrowLeft size={18} /> Previous concept
          </button>
          <span>0{(selected ?? 0) + 1} / 04</span>
          <button
            onClick={() => {
              onChange(((selected ?? 0) + 1) % projects.length);
              dialog.current?.scrollTo(0, 0);
            }}
          >
            Next concept <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
