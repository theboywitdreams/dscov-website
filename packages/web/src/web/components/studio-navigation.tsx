import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Plus } from "lucide-react";
const links = [
  ["work", "The work"],
  ["services", "What I do"],
  ["about", "Behind DsCov"],
] as const;
export function StudioNavigation() {
  const [open, setOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setIndexOpen(false);
      }
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header section-wrap">
        <a className="logo-link" href="#home" aria-label="DsCov Creative home">
          <img src="/images/dscov-logo.png" alt="DsCov Creative" />
        </a>
        <span className="header-note">
          A LITTLE DIFFERENT.
          <br />
          ALWAYS INTENTIONAL.
        </span>
        <nav className={`header-nav ${open ? "mobile-open" : ""}`} aria-label="Main navigation">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="button button-outline" onClick={() => setOpen(false)}>
            Let's talk <ArrowUpRight size={17} />
          </a>
        </nav>
        <button
          className="mobile-menu-button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <aside className={`studio-index ${indexOpen ? "index-open" : ""}`}>
        <button
          className="index-toggle"
          onClick={() => setIndexOpen(!indexOpen)}
          aria-expanded={indexOpen}
        >
          <Plus size={17} /> <span>STUDIO INDEX</span>
        </button>
        {indexOpen && (
          <nav aria-label="Studio index">
            <small>WHERE SHALL WE GO?</small>
            {[
              ["home", "01", "The creative desk"],
              ["work", "02", "Selected work"],
              ["services", "03", "Creative services"],
              ["about", "04", "Meet Andani"],
              ["contact", "05", "Your next idea"],
            ].map(([id, number, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setIndexOpen(false)}>
                <span>{number}</span>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </aside>
    </>
  );
}
