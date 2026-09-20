import { useEffect, useState } from "react";
import { CONFIG, WORKS, WEBDEV, CAT_STYLE, type CatKey } from "./data";
import { useD, Ic, Rv, SecHead, Arr } from "./ui";

const FILTERS: ("all" | CatKey)[] = ["all", "video", "social", "design", "marketing"];

export function Work() {
  const { d, lang } = useD();
  const [filter, setFilter] = useState<"all" | CatKey>("all");
  const [open, setOpen] = useState<number | null>(null);

  const list = WORKS.map((w, i) => ({ ...w, i })).filter((w) => filter === "all" || w.cat === filter);

  /* modal: esc + scroll lock */
  useEffect(() => {
    if (open === null) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    document.body.style.overflow = "hidden";
    addEventListener("keydown", fn);
    return () => { document.body.style.overflow = ""; removeEventListener("keydown", fn); };
  }, [open]);

  const cur = open !== null ? WORKS[open] : null;
  const curTxt = open !== null ? d.works[open] : null;

  return (
    <section className="sec" id="work">
      <div className="wrap">
        <SecHead eb={d.ui.wkEb} icon="play" title={d.ui.wkT} sub={d.ui.wkS} />
        <Rv className="filters">
          {FILTERS.map((f) => (
            <button key={f} type="button" className="chipb" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {d.cats[f]}
            </button>
          ))}
        </Rv>
        <div className="grid pop" key={`${filter}-${lang}`}>
          {list.map((w, k) => {
            const st = CAT_STYLE[w.cat];
            const t = d.works[w.i];
            return (
              <button key={w.i} type="button" className="card" style={{ "--d": `${k * 70}ms` } as React.CSSProperties}
                onClick={() => setOpen(w.i)}>
                <span className="cover" style={{ "--c": `var(${st.c})`, aspectRatio: w.ratio } as React.CSSProperties}>
                  {w.img ? <img src={w.img} alt="" loading="lazy" /> : <span className="cover-ic"><Ic n={st.icon} s={60} sw={1.2} /></span>}
                  <span className="badge">{d.cats[w.cat]}</span>
                  <span className="playb"><Ic n="play" s={17} sw={2.2} /></span>
                </span>
                <span className="ct">{t.t}</span>
                <span className="cs">{t.d}</span>
              </button>
            );
          })}
        </div>
        <Rv className="work-cta">
          <a className="btn" href={CONFIG.driveAll} target="_blank" rel="noopener">
            <Ic n="folder" s={17} />{d.ui.driveAll}
          </a>
          {CONFIG.behance && (
            <a className="btn" href={CONFIG.behance} target="_blank" rel="noopener">
              <Ic n="design" s={17} />Behance
            </a>
          )}
        </Rv>
      </div>

      {cur && curTxt && (
        <div className="modal-ov" onClick={() => setOpen(null)} role="presentation">
          <div className="modal" role="dialog" aria-modal="true" aria-label={curTxt.t}
            onClick={(e) => e.stopPropagation()}>
            <div className="modal-cover" style={{ "--c": `var(${CAT_STYLE[cur.cat].c})` } as React.CSSProperties}>
              {cur.img ? <img src={cur.img} alt="" /> : <Ic n={CAT_STYLE[cur.cat].icon} s={84} sw={1} />}
            </div>
            <div className="modal-in">
              <h3>{curTxt.t}</h3>
              <p>{curTxt.d}</p>
              <div className="modal-meta">
                {curTxt.meta.map((m) => <span key={m}><Ic n="check" s={14} sw={2.5} />{m}</span>)}
              </div>
              {!cur.url && <p className="modal-note">{d.ui.dlgNote}</p>}
              <div className="modal-actions">
                {cur.url && (
                  <a className="btn pri sm" href={cur.url} target="_blank" rel="noopener">
                    <Ic n="link" s={15} />{d.ui.dlgLink}
                  </a>
                )}
                <button className="btn sm" type="button" onClick={() => setOpen(null)}>{d.ui.close}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function WebDev() {
  const { d } = useD();
  return (
    <section className="sec alt" id="webdev">
      <div className="wrap">
        <SecHead eb={d.ui.webEb} icon="globe" title={d.ui.webT} sub={d.ui.webS} />
        <div className="web-grid">
          {WEBDEV.map((w, i) => (
            <Rv key={w.url} delay={i * 110} className="browser">
              <div className="b-bar" aria-hidden="true">
                <span className="b-dots"><i /><i /><i /></span>
                <span className="b-url"><Ic n="search" s={11} sw={2.4} />{w.host}</span>
              </div>
              <div className="b-shot" style={{ "--c": w.c } as React.CSSProperties}>
                <img src={w.img} alt={d.webdev[i].t} loading="lazy" />
              </div>
              <div className="b-body">
                <h3>{d.webdev[i].t}</h3>
                <p>{d.webdev[i].d}</p>
                <div className="b-tags">{d.webdev[i].tags.map((t) => <span key={t}>{t}</span>)}</div>
                <a className="b-link" href={w.url} target="_blank" rel="noopener">
                  {d.ui.visit}<Arr s={16} />
                </a>
              </div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}
