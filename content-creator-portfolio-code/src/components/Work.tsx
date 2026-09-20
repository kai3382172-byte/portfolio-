import { useEffect, useRef, useState } from "react";
import Ico from "./Ico";
import { CAT_META, PROJECTS, WEBDEV, WEB_COLORS, type Cat } from "../data";
import { useReveal } from "../hooks";

type UI = Record<string, any>;
const FILTERS: ("all" | Cat)[] = ["all", "video", "design", "social", "marketing"];

export function Work({
  ui,
  cats,
  projects,
}: {
  ui: UI;
  cats: Record<string, string>;
  projects: readonly { t: string; d: string }[];
}) {
  const [filter, setFilter] = useState<"all" | Cat>("all");
  const [popKey, setPopKey] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const dlgRef = useRef<HTMLDialogElement>(null);
  const rev = useReveal<HTMLDivElement>();

  const list = PROJECTS.map((p, i) => ({ ...p, i })).filter(
    (p) => filter === "all" || p.cat === filter
  );

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    if (open != null && !dlg.open) dlg.showModal();
    if (open == null && dlg.open) dlg.close();
  }, [open]);

  const p = open != null ? PROJECTS[open] : null;
  const meta = p ? CAT_META[p.cat] : null;
  const t = open != null ? projects[open] : null;

  return (
    <section className="sec" id="work">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--pink)" } as React.CSSProperties} />{ui.wkE}</span>
        <h2 className="h2">{ui.wkT}</h2>
        <p className="sub">{ui.wkS}</p>

        <div className="filters" role="group">
          {FILTERS.map((k) => (
            <button
              key={k}
              type="button"
              className="fchip"
              aria-pressed={k === filter}
              onClick={() => { setFilter(k); setPopKey((x) => x + 1); }}
            >
              {cats[k]}
            </button>
          ))}
        </div>

        <div className={`grid${popKey ? " pop" : ""}`} key={popKey}>
          {list.map((pr, k) => {
            const c = CAT_META[pr.cat];
            const tt = projects[pr.i];
            return (
              <button
                type="button"
                className="card"
                key={pr.i}
                style={{ "--d": `${k * 70}ms` } as React.CSSProperties}
                onClick={() => setOpen(pr.i)}
              >
                <span
                  className="cover"
                  style={{ "--c": `var(${c.c})`, aspectRatio: pr.ratio } as React.CSSProperties}
                >
                  {pr.img ? (
                    <img src={pr.img} alt="" loading="lazy" />
                  ) : (
                    <span className="cover-ic"><Ico k={c.icon} s={60} sw={1.4} /></span>
                  )}
                  <span className="badge">{cats[pr.cat]}</span>
                  <span className="playb"><Ico k="play" s={18} /></span>
                </span>
                <span className="ct">{tt.t}</span>
                <span className="cs">{tt.d}</span>
              </button>
            );
          })}
        </div>
      </div>

      <dialog ref={dlgRef} onClose={() => setOpen(null)} onClick={(e) => { if (e.target === dlgRef.current) setOpen(null); }} aria-labelledby="dlgT">
        {p && meta && t && (
          <>
            <div className="dlg-cover" style={{ "--c": `var(${meta.c})` } as React.CSSProperties}>
              {p.img ? <img src={p.img} alt="" /> : <Ico k={meta.icon} s={84} sw={1.2} />}
            </div>
            <div className="dlg-in">
              <h3 id="dlgT">{t.t}</h3>
              <p>{t.d}</p>
              <div className="dlg-actions">
                {p.url && (
                  <a className="btn pri sm" href={p.url} target="_blank" rel="noopener noreferrer">
                    {ui.dlgLink}
                  </a>
                )}
                <button className="btn sm" type="button" onClick={() => setOpen(null)}>
                  {ui.close}
                </button>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}

export function WebDev({ ui, descs }: { ui: UI; descs: readonly { d: string }[] }) {
  const rev = useReveal<HTMLDivElement>();
  return (
    <section className="sec" id="webdev">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow" style={{ direction: "ltr" }}>
          <Ico k="code" s={15} /> {ui.wdE.replace("> ", "")}
        </span>
        <h2 className="h2">{ui.wdT}</h2>
        <p className="sub">{ui.wdS}</p>
        <div className="web-grid">
          {WEBDEV.map((w, i) => (
            <article className="site" key={w.name}>
              <div className="site-bar" style={{ "--c": WEB_COLORS[i] } as React.CSSProperties}>
                <i /><i /><i />
                <span className="site-url">{w.host}</span>
              </div>
              <div className="site-body">
                <h3>{w.name}</h3>
                <p>{descs[i].d}</p>
                <ul className="site-tags">
                  {w.tags.map((tg) => <li key={tg}>{tg}</li>)}
                </ul>
                <a className="btn pri sm" href={w.url} target="_blank" rel="noopener noreferrer">
                  {ui.wdVisit}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
