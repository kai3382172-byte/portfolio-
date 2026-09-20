import { useState } from "react";
import Ico from "./Ico";
import {
  CERT_COLORS, CONFIG, POL_COLORS, POL_ICONS, STEP_COLORS, STEP_ICONS,
} from "../data";
import { useReveal } from "../hooks";

type UI = Record<string, any>;

export function Process({ ui, steps }: { ui: UI; steps: readonly any[] }) {
  const rev = useReveal<HTMLDivElement>();
  return (
    <section className="sec" id="process">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--lemon)" } as React.CSSProperties} />{ui.prE}</span>
        <h2 className="h2">{ui.prT}</h2>
        <div className="strip">
          {steps.map((s, i) => (
            <div className="fr" key={i} style={{ "--c": STEP_COLORS[i] } as React.CSSProperties}>
              <div className="fr-top">
                <span className="fr-n">{i + 1}</span>
                <span className="fr-ic"><Ico k={STEP_ICONS[i]} s={22} /></span>
              </div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certificates({ ui, certs }: { ui: UI; certs: readonly any[] }) {
  const rev = useReveal<HTMLDivElement>();
  return (
    <section className="sec" id="certificates">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--lilac)" } as React.CSSProperties} />{ui.ceE}</span>
        <h2 className="h2">{ui.ceT}</h2>
        <p className="sub">{ui.ceS}</p>
        <div className="certs">
          {certs.map((c, i) => (
            <article className="cert" key={i}>
              <i style={{ "--c": CERT_COLORS[i] } as React.CSSProperties}>
                <Ico k={i === certs.length - 1 ? "link" : "cert"} s={26} />
              </i>
              <div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <a href={c.url} target="_blank" rel="noopener noreferrer">{ui.ceOpen}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education({ ui, edu }: { ui: UI; edu: readonly any[] }) {
  const rev = useReveal<HTMLDivElement>();
  const colors = ["var(--sky)", "var(--mint)"];
  return (
    <section className="sec" id="education">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--peach)" } as React.CSSProperties} />{ui.edE}</span>
        <h2 className="h2">{ui.edT}</h2>
        <p className="sub">{ui.edS}</p>
        <div className="edu">
          {edu.map((e, i) => (
            <article className="edu-card" key={i} style={{ "--c": colors[i] } as React.CSSProperties}>
              <span className="edu-date">{e.date}</span>
              <span className="edu-ic"><Ico k={i === 0 ? "edu" : "cert"} s={26} /></span>
              <h3>{e.t}</h3>
              <span className="edu-deg">{e.deg}</span>
              <p>{e.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ ui, pols }: { ui: UI; pols: readonly string[] }) {
  const [order, setOrder] = useState([0, 1, 2]);
  const rev = useReveal<HTMLDivElement>();
  const shuffle = () => setOrder((o) => [...o.slice(1), o[0]]);
  const imgs = [CONFIG.photo2, CONFIG.photo1, ""];
  return (
    <section className="sec" id="about">
      <div className="wrap about rv" ref={rev}>
        <div
          className="polas"
          role="button"
          tabIndex={0}
          aria-label="Photos"
          onClick={shuffle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); shuffle(); }
          }}
        >
          {[0, 1, 2].map((i) => (
            <figure className="pl" key={i} data-pos={order.indexOf(i)}>
              <div className="pl-img" style={{ "--c": POL_COLORS[i] } as React.CSSProperties}>
                <Ico k={POL_ICONS[i]} s={64} sw={1.3} />
                {imgs[i] && <img src={imgs[i]} alt="" loading="lazy" onError={(e) => e.currentTarget.remove()} />}
              </div>
              <figcaption>{pols[i]}</figcaption>
            </figure>
          ))}
        </div>
        <div className="about-text">
          <span className="eyebrow"><i style={{ "--c": "var(--coral)" } as React.CSSProperties} />{ui.abE}</span>
          <h2 className="h2">{ui.abT}</h2>
          <p>{ui.abP1}</p>
          <p>{ui.abP2}</p>
          <blockquote className="quote">{ui.quote}</blockquote>
          <ul className="values">
            {[
              { c: "var(--lemon)", r: "-6deg", k: "content", t: ui.v1 },
              { c: "var(--sky)", r: "5deg", k: "edit", t: ui.v2 },
              { c: "var(--mint)", r: "-4deg", k: "marketing", t: ui.v3 },
            ].map((v) => (
              <li key={v.k}>
                <i style={{ "--c": v.c, "--r": v.r } as React.CSSProperties} aria-hidden="true">
                  <Ico k={v.k} s={20} />
                </i>
                <span>{v.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
