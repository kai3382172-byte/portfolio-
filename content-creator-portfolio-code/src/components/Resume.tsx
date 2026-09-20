import Ico from "./Ico";
import {
  SKILL_COLORS, SKILL_ICONS, XP_COLORS, STAT_COLORS,
} from "../data";
import { useCountUp, useReveal } from "../hooks";

type UI = Record<string, any>;

function Stat({ n, suf, t, c }: { n: number; suf: string; t: string; c: string }) {
  const { ref, val } = useCountUp(n);
  return (
    <div className="stat" style={{ "--c": c } as React.CSSProperties}>
      <b ref={ref as React.RefObject<HTMLElement>}>
        {val}
        {suf}
      </b>
      <span>{t}</span>
    </div>
  );
}

export function Stats({ ui }: { ui: UI }) {
  const rev = useReveal<HTMLDivElement>();
  return (
    <section className="sec tight" aria-label={ui.stT}>
      <div className="wrap rv" ref={rev}>
        <div className="stats">
          {ui.stats.map((s: any, i: number) => (
            <Stat key={i} n={s.n} suf={s.suf} t={s.t} c={STAT_COLORS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience({ ui, xp }: { ui: UI; xp: readonly any[] }) {
  const rev = useReveal<HTMLDivElement>();
  return (
    <section className="sec" id="experience">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--sky)" } as React.CSSProperties} />{ui.xpE}</span>
        <h2 className="h2">{ui.xpT}</h2>
        <p className="sub">{ui.xpS}</p>
        <div className="xp">
          {xp.map((x, i) => (
            <article className="xp-card" key={i} style={{ "--c": XP_COLORS[i % XP_COLORS.length] } as React.CSSProperties}>
              <div className="xp-head">
                <h3>{x.co}</h3>
                <span className="xp-role">{x.role}</span>
                <span className="xp-date">{x.date}</span>
              </div>
              <p>{x.d}</p>
              {x.res && (
                <span className="xp-res">
                  <Ico k="marketing" s={16} />
                  <span><b>{ui.xpRes}</b> {x.res}</span>
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills({ ui, skills }: { ui: UI; skills: readonly any[] }) {
  const rev = useReveal<HTMLDivElement>();
  return (
    <section className="sec" id="skills">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--mint)" } as React.CSSProperties} />{ui.skE}</span>
        <h2 className="h2">{ui.skT}</h2>
        <p className="sub">{ui.skS}</p>
        <div className="skills">
          {skills.map((s, i) => (
            <div className="skill" key={i} style={{ "--c": SKILL_COLORS[i] } as React.CSSProperties}>
              <i><Ico k={SKILL_ICONS[i]} s={24} /></i>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
