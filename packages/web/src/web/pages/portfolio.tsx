import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { StudioNavigation } from "../components/studio-navigation";
import { HeroPlayground } from "../components/hero-playground";
import { SelectedWork } from "../components/selected-work";
import { AboutServices } from "../components/about-services";
import { GuidedInquiry } from "../components/guided-inquiry";
import { useReveal } from "../hooks/use-reveal";
export default function Portfolio() {
  const [service, setService] = useState({ name: "", version: 0 });
  useReveal();
  return (
    <>
      <StudioNavigation />
      <main id="main">
        <HeroPlayground />
        <div className="discipline-strip" aria-hidden="true">
          <div>
            {Array.from({ length: 2 }, (_, i) => (
              <span key={i}>
                BRANDING & IDENTITY <b>✳</b> WEB DESIGN <b>✳</b> PRINT & EDITORIAL <b>✳</b> A LITTLE
                DIFFERENT <b>✳</b>{" "}
              </span>
            ))}
          </div>
        </div>
        <SelectedWork />
        <AboutServices
          onService={(s) => setService((previous) => ({ name: s, version: previous.version + 1 }))}
        />
        <GuidedInquiry preselected={service.name} selectionVersion={service.version} />
      </main>
      <footer className="site-footer section-wrap">
        <a className="footer-logo" href="#home">
          <img src="/images/dscov-logo.png" alt="DsCov Creative" />
        </a>
        <p>
          © {new Date().getFullYear()} DsCov Creative.
          <br />
          Thoughtfully made. A little different.
        </p>
        <a className="text-link" href="#home">
          Back to the good stuff <ArrowUpRight size={17} />
        </a>
      </footer>
    </>
  );
}
