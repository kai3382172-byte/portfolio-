import { useState } from "react";
import { CONFIG } from "./data";
import { useD, Ic } from "./ui";

/* ---------- Nav ---------- */
const LINKS = [
  { href: "#about", k: "navAbout" }, { href: "#experience", k: "navExp" },
  { href: "#skills", k: "navSkills" }, { href: "#work", k: "navWork" },
  { href: "#webdev", k: "navWeb", md: true }, { href: "#certs", k: "navCerts", md: true },
] as const;

export function Nav() {
  const { d, toggle } = useD();
  const [open, setOpen] = useState(false);
  return (
    <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
      <div className="nav-in">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          <span className="rec-dot" aria-hidden="true" />
          <span>{d.ui.logo}</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.k} href={l.href} className={"md" in l ? "hide-md" : ""} onClick={() => setOpen(false)}>
              {d.ui[l.k as keyof typeof d.ui] as string}
            </a>
          ))}
        </div>
        <button className="icon-btn" type="button" onClick={toggle} aria-label="Language">
          {d.ui.langBtn}
        </button>
        <a className="btn pri sm" href="#contact">{d.ui.navContact}</a>
        <button className="icon-btn menu-btn" type="button" aria-label="Menu" aria-expanded={open}
          onClick={() => setOpen(!open)}>
          <Ic n={open ? "x" : "menu"} s={16} sw={2.2} />
        </button>
      </div>
    </nav>
  );
}

/* ---------- Tape marquee ---------- */
export function Tape() {
  const { d } = useD();
  const seq = [...d.roles, ...d.roles];
  return (
    <div className="tape-wrap" aria-hidden="true">
      <div className="tape">
        <div className="tape-track">
          {[0, 1].map((half) => (
            <div key={half} style={{ display: "flex", alignItems: "center" }}>
              {seq.map((r, i) => (
                <span key={`${half}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: ".4rem" }}>
                  {r}<Ic n="spark" s={24} sw={2} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const { d } = useD();
  return (
    <footer>
      <div className="wrap foot">
        <a className="logo" href="#top">
          <span className="rec-dot" aria-hidden="true" />
          <span>{d.ui.logo}</span>
        </a>
        <span className="foot-note">
          {d.ui.foot} · {d.ui.madeIn}
          <Ic n="heart" s={16} sw={2.2} />
        </span>
        <span style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
          <a className="btn sm" href={CONFIG.driveAll} target="_blank" rel="noopener">
            <Ic n="folder" s={16} />{d.ui.fDrive}
          </a>
          <a className="btn sm" href={CONFIG.instagram} target="_blank" rel="noopener">
            <Ic n="ig" s={16} />{d.ui.fIg}
          </a>
        </span>
      </div>
    </footer>
  );
}
