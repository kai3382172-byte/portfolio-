import { useState } from "react";
import { STAR_PATH } from "./Ico";

type UI = Record<string, any>;

export function Nav({ ui, onLang, lang }: { ui: UI; onLang: () => void; lang: string }) {
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [
    ["#services", ui.nServices],
    ["#experience", ui.nXp],
    ["#work", ui.nWork],
    ["#certificates", ui.nCerts],
    ["#about", ui.nAbout],
  ];
  return (
    <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
      <div className="nav-in">
        <a className="logo" href="#top">
          <span className="rec-dot" aria-hidden="true" />
          <span>{ui.logo}</span>
        </a>
        <div className="nav-links" onClick={() => setOpen(false)}>
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <button
          className="icon-btn"
          type="button"
          onClick={onLang}
          aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
        >
          {ui.langBtn}
        </button>
        <a className="btn pri sm" href="#contact">{ui.nContact}</a>
        <button
          className="icon-btn menu-btn"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export function Tape({ words }: { words: readonly string[] }) {
  const copies = [0, 1, 2, 3];
  return (
    <div className="tape-wrap" aria-hidden="true">
      <div className="tape">
        <div className="tape-track">
          {copies.map((c) =>
            words.map((w, i) => (
              <span key={`${c}-${i}`} style={{ display: "contents" }}>
                <span>{w}</span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  style={{ color: "#232046" }}
                  dangerouslySetInnerHTML={{ __html: STAR_PATH }}
                />
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
