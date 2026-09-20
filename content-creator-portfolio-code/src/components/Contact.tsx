import { useRef, useState } from "react";
import { CONFIG } from "../data";
import { reduce, useReveal } from "../hooks";

type UI = Record<string, any>;

export default function Contact({
  ui,
  chips,
  buildMsg,
}: {
  ui: UI;
  chips: readonly string[];
  buildMsg: (n: string, needs: string[], m: string) => string;
}) {
  const [selected, setSelected] = useState<number[]>([]);
  const [toast, setToast] = useState("");
  const clapRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);
  const toastT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const rev = useReveal<HTMLDivElement>();

  const onClap = () => {
    const el = clapRef.current;
    if (el) {
      el.classList.remove("go");
      void el.offsetWidth;
      el.classList.add("go");
    }
    setTimeout(() => {
      nameRef.current?.focus({ preventScroll: true });
      nameRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    }, 380);
  };

  const showToast = (m: string) => {
    setToast(m);
    clearTimeout(toastT.current);
    toastT.current = setTimeout(() => setToast(""), 4200);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim() || "";
    const needs = selected.map((i) => chips[i]);
    const text = buildMsg(name, needs, msgRef.current?.value.trim() || "");
    if (CONFIG.whatsapp) {
      window.open(
        `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener"
      );
    } else {
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
      window.open(CONFIG.igDM, "_blank", "noopener");
      showToast(ui.toast);
    }
  };

  return (
    <>
      <section className="sec" id="contact">
        <div className="wrap contact rv" ref={rev}>
          <div className="clap-wrap">
            <h2 className="h2">{ui.ctT}</h2>
            <p className="sub">{ui.ctS}</p>
            <button className="clap" ref={clapRef} type="button" aria-label="Action" onClick={onClap}>
              <div className="arm" />
              <div className="board">
                <dl>
                  <dt>{ui.clDir}</dt><dd>{ui.clDirV}</dd>
                  <dt>{ui.clProj}</dt><dd>&nbsp;</dd>
                  <dt>{ui.clTake}</dt><dd>01</dd>
                </dl>
                <span className="cl-hint">{ui.clHint}</span>
              </div>
            </button>
            <div className="links">
              <a className="btn sm" href={CONFIG.instagram} target="_blank" rel="noopener noreferrer">{ui.fIg}</a>
              {CONFIG.whatsapp && (
                <a className="btn sm" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">{ui.fWa}</a>
              )}
              {CONFIG.email && <a className="btn sm" href={`mailto:${CONFIG.email}`}>{ui.fMail}</a>}
              <a className="btn sm" href={CONFIG.driveAll} target="_blank" rel="noopener noreferrer">{ui.fDrive}</a>
            </div>
          </div>

          <form className="form" autoComplete="off" onSubmit={onSubmit}>
            <div>
              <label htmlFor="fName">{ui.fName}</label>
              <input id="fName" ref={nameRef} type="text" required placeholder={ui.namePh} />
            </div>
            <div>
              <span className="lbl">{ui.fNeed}</span>
              <div className="chips">
                {chips.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    className="chip"
                    aria-pressed={selected.includes(i)}
                    onClick={() =>
                      setSelected((s) =>
                        s.includes(i) ? s.filter((x) => x !== i) : [...s, i]
                      )
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="fMsg">{ui.fMsg}</label>
              <textarea id="fMsg" ref={msgRef} placeholder={ui.msgPh} />
            </div>
            <button className="btn pri" type="submit">
              {CONFIG.whatsapp ? ui.sendWa : ui.sendIg}
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <a className="logo" href="#top">
            <span className="rec-dot" aria-hidden="true" />
            <span>{ui.logo}</span>
          </a>
          <span>{ui.foot}</span>
          <div className="foot-links">
            <a className="btn sm" href={CONFIG.instagram} target="_blank" rel="noopener noreferrer">{ui.fIg}</a>
            <a className="btn sm" href={CONFIG.driveAll} target="_blank" rel="noopener noreferrer">{ui.fDrive}</a>
          </div>
        </div>
      </footer>

      <div className={`toast${toast ? " show" : ""}`} role="status">{toast}</div>
    </>
  );
}
