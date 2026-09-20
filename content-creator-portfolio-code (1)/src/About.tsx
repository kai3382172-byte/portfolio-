import { useState } from "react";
import { useD, Ic, Rv, SecHead, Counter } from "./ui";

const POL_IMGS = ["images/khaled.jpg", "images/work-film.jpg", "images/web-action.jpg"];
const POL_COLORS = ["var(--sky)", "var(--lemon)", "var(--pink)"];

export function About() {
  const { d, lang } = useD();
  const [order, setOrder] = useState([0, 1, 2]);
  const shuffle = () => setOrder((o) => [...o.slice(1), o[0]]);
  const stats = [
    { ...d.stats[0], label: d.ui.st1 },
    { ...d.stats[1], label: d.ui.st2 },
    { ...d.stats[2], label: d.ui.st3 },
  ];
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <Rv className="polas-zone">
          <div
            className="polas" role="button" tabIndex={0} aria-label="Photos"
            onClick={shuffle}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); shuffle(); } }}
          >
            {[0, 1, 2].map((i) => (
              <figure className="pl" key={i} data-pos={order.indexOf(i)}>
                <div className="pl-img" style={{ "--c": POL_COLORS[i] } as React.CSSProperties}>
                  <Ic n={["camera", "film", "cut"][i]} s={64} sw={1.2} />
                  <img src={POL_IMGS[i]} alt="" loading="lazy" />
                </div>
                <figcaption>{d.ui.pols[i]}</figcaption>
              </figure>
            ))}
          </div>
          <span className="loc-pill"><Ic n="pin" s={15} sw={2.2} />{d.ui.loc}</span>
        </Rv>

        <div className="about-text">
          <Rv><span className="eyebrow"><Ic n="camera" s={15} sw={2.1} />{d.ui.abEb}</span></Rv>
          <Rv delay={70}><h2 className="h2">{d.ui.abT}</h2></Rv>
          <Rv delay={130}><p>{d.ui.abP1}</p></Rv>
          <Rv delay={180}><p>{d.ui.abP2}</p></Rv>
          <Rv delay={220}>
            <p>
              <strong>{d.ui.abP3}</strong>
            </p>
          </Rv>
          <Rv delay={260}>
            <blockquote className="quote">
              <Ic n="quote" s={22} sw={2.2} />
              <p>"{d.ui.quote}"</p>
            </blockquote>
          </Rv>
          <Rv delay={300}>
            <div className="stats" dir={lang === "ar" ? "rtl" : "ltr"}>
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b><Counter to={s.v} suffix={s.suffix} /></b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Rv>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const { d } = useD();
  return (
    <section className="sec alt" id="experience">
      <div className="wrap">
        <SecHead eb={d.ui.xpEb} icon="zap" title={d.ui.xpT} sub={d.ui.xpS} />
        <div className="xp">
          {d.experience.map((x, i) => (
            <Rv key={x.co} delay={i * 120}>
              <article className="xp-item">
                <span className="xp-dot" style={{ "--c": x.c } as React.CSSProperties} />
                <div className="xp-card">
                  <div className="xp-top">
                    <h3 className="xp-co">{x.co}</h3>
                    <span className="xp-role" style={{ "--c": x.c } as React.CSSProperties}>
                      <Ic n="check" s={15} sw={2.4} />{x.role}
                    </span>
                  </div>
                  <div className="xp-meta">
                    <span><Ic n="cal" s={14} sw={2.1} />{x.period}{x.current ? ` — ${d.ui.now}` : ""}</span>
                    {x.current && <span className="now"><Ic n="zap" s={14} sw={2.3} />{d.ui.now}</span>}
                  </div>
                  <p>{x.p}</p>
                  <div className="xp-res">
                    <Ic n="zap" s={18} sw={2.2} />
                    <span><b>{x.res}</b></span>
                  </div>
                </div>
              </article>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}
