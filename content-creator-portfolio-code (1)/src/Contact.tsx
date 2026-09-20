import { useRef, useState } from "react";
import { CONFIG } from "./data";
import { useD, Ic, Rv, SecHead, toast } from "./ui";

export default function Contact() {
  const { d } = useD();
  const [go, setGo] = useState(false);
  const [picked, setPicked] = useState<number[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const clap = () => {
    setGo(false);
    requestAnimationFrame(() => {
      setGo(true);
      setTimeout(() => {
        nameRef.current?.focus({ preventScroll: true });
        nameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 380);
    });
  };

  const toggleChip = (i: number) =>
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value.trim() || "";
    const needs = picked.map((i) => d.chips[i]);
    const text = d.msg(name, needs, msgRef.current?.value.trim() || "");
    if (CONFIG.whatsapp) {
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else {
      navigator.clipboard?.writeText(text).catch(() => {});
      window.open(CONFIG.igDM, "_blank", "noopener");
      toast(d.ui.toast);
    }
  };

  return (
    <section className="sec alt" id="contact">
      <div className="wrap contact">
        <div className="clap-wrap">
          <SecHead eb={d.ui.cnEb} icon="send" title={d.ui.cnT} sub={d.ui.cnS} />
          <Rv delay={150}>
            <button className={`clap ${go ? "go" : ""}`} type="button" aria-label="Action" onClick={clap}>
              <div className="arm" />
              <div className="board">
                <dl>
                  <dt>{d.ui.clDir}</dt><dd>{d.ui.clDirV}</dd>
                  <dt>{d.ui.clLoc}</dt><dd>{d.ui.clLocV}</dd>
                  <dt>{d.ui.clTake}</dt><dd>01</dd>
                </dl>
                <span className="cl-hint">{d.ui.clHint}</span>
              </div>
            </button>
          </Rv>
          <Rv delay={250} className="links">
            <a className="btn sm" href={CONFIG.instagram} target="_blank" rel="noopener">
              <Ic n="ig" s={16} />{d.ui.fIg}
            </a>
            {CONFIG.whatsapp && (
              <a className="btn sm" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noopener">
                <Ic n="social" s={16} />{d.ui.fWa}
              </a>
            )}
            {CONFIG.email && (
              <a className="btn sm" href={`mailto:${CONFIG.email}`}>
                <Ic n="mail" s={16} />{d.ui.fMail}
              </a>
            )}
            <a className="btn sm" href={CONFIG.driveAll} target="_blank" rel="noopener">
              <Ic n="folder" s={16} />{d.ui.fDrive}
            </a>
          </Rv>
        </div>

        <Rv delay={200}>
          <form className="form" onSubmit={submit} autoComplete="off">
            <div>
              <label htmlFor="fName">{d.ui.fName}</label>
              <input id="fName" ref={nameRef} type="text" required placeholder={d.ui.namePh} />
            </div>
            <div>
              <span className="lbl">{d.ui.fNeed}</span>
              <div className="chips">
                {d.chips.map((c, i) => (
                  <button key={c} type="button" className="chipb"
                    aria-pressed={picked.includes(i)} onClick={() => toggleChip(i)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="fMsg">{d.ui.fMsg}</label>
              <textarea id="fMsg" ref={msgRef} placeholder={d.ui.msgPh} />
            </div>
            <button className="btn pri" type="submit">
              <Ic n="send" s={17} sw={2.1} />
              {CONFIG.whatsapp ? d.ui.sendWa : d.ui.sendIg}
            </button>
          </form>
        </Rv>
      </div>
    </section>
  );
}
