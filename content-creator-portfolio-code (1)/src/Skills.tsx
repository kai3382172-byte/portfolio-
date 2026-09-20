import { useEffect, useRef, useState } from "react";
import { SKILLS_META } from "./data";
import { useD, Ic, Rv, SecHead } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));

export default function Skills() {
  const { d } = useD();
  const [active, setActive] = useState(0);
  const [tc, setTc] = useState(SKILLS_META[0].at);
  const trackRef = useRef<HTMLDivElement>(null);
  const phRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const movePlayhead = (pct: number, scrub: boolean) => {
    const ph = phRef.current;
    if (!ph) return;
    ph.classList.toggle("scrub", scrub);
    ph.style.left = pct + "%";
  };

  const select = (i: number, animate = true) => {
    setActive(i);
    setTc(SKILLS_META[i].at);
    movePlayhead(SKILLS_META[i].at, false);
    if (animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bodyRef.current?.animate(
        [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }],
        { duration: 300, easing: "cubic-bezier(.22,1,.36,1)" }
      );
    }
  };

  /* playhead follows active after language switch keeps active index */
  useEffect(() => { movePlayhead(SKILLS_META[active].at, false); }, [active]);

  const onTrackMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const tr = trackRef.current!;
    const r = tr.getBoundingClientRect();
    const pct = clamp(((e.clientX - r.left) / r.width) * 100, 0, 100);
    movePlayhead(pct, true);
    setTc(pct);
  };
  const onTrackLeave = () => {
    movePlayhead(SKILLS_META[active].at, false);
    setTc(SKILLS_META[active].at);
  };
  const onClipHover = (e: React.PointerEvent, i: number) => {
    if (e.pointerType !== "mouse" || i === active) return;
    select(i);
    movePlayhead(SKILLS_META[active].at, false);
  };

  const s = SKILLS_META[active];
  const skill = d.skills[active];

  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <SecHead eb={d.ui.skEb} icon="spark" title={d.ui.skT} sub={d.ui.skS} />
        <Rv className="studio">
          <div className="monitor" style={{ "--c": s.color } as React.CSSProperties}>
            <div className="mon-top">
              <b><span className="rec-dot" style={{ width: 9, height: 9 }} />PLAY</b>
              <span>00:{pad(Math.round(tc / 5))}</span>
            </div>
            <div className="mon-body" ref={bodyRef}>
              <div className="mon-icon"><Ic n={s.icon} s={32} sw={1.8} /></div>
              <h3>{skill.t}</h3>
              <p>{skill.d}</p>
              <ul className="tags">
                {skill.tags.map((t) => <li key={t}><Ic n="check" s={13} sw={2.6} />{t}</li>)}
              </ul>
            </div>
          </div>

          <div className="tl-wrap">
            <div
              className="tl-track" ref={trackRef} role="group" aria-label="Timeline" dir="ltr"
              onPointerMove={onTrackMove} onPointerLeave={onTrackLeave}
            >
              <div className="ruler" aria-hidden="true">
                {[0, 25, 50, 75, 100].map((p, i) => (
                  <span key={p} style={{ left: `${p}%` }}>{i * 5}s</span>
                ))}
              </div>
              {SKILLS_META.map((m, i) => (
                <div className="lane" key={i}>
                  <button
                    type="button" className="clip" data-i={i}
                    aria-pressed={i === active}
                    style={{ left: `${m.at}%`, width: `${m.w}%`, "--c": m.color } as React.CSSProperties}
                    onClick={() => select(i)}
                    onPointerOver={(e) => onClipHover(e, i)}
                    onFocus={() => select(i)}
                  >
                    <Ic n={m.icon} s={15} sw={2} />
                    <span>{d.skills[i].t}</span>
                  </button>
                </div>
              ))}
              <div className="playhead" ref={phRef} style={{ left: `${SKILLS_META[active].at}%` }} />
            </div>
          </div>
        </Rv>
      </div>
    </section>
  );
}
