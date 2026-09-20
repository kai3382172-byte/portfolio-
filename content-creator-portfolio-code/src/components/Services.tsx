import { useRef, useState } from "react";
import Ico from "./Ico";
import { SERV } from "../data";
import { clamp, pad, useReveal } from "../hooks";

type Service = { t: string; d: string; tags: readonly string[] };

export default function Services({
  ui,
  services,
}: {
  ui: Record<string, any>;
  services: readonly Service[];
}) {
  const [active, setActive] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const [scrub, setScrub] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const rev = useReveal<HTMLDivElement>();

  const shown = preview ?? active;
  const s = SERV[shown];
  const d = services[shown];
  const phPos = scrub ?? SERV[active].at;
  const tcVal = scrub != null ? scrub : SERV[shown].at;

  const swap = (i: number, asPreview = false) => {
    if (asPreview) setPreview(i);
    else {
      setActive(i);
      setPreview(null);
    }
    const el = bodyRef.current;
    if (el) {
      el.classList.remove("swap");
      void el.offsetWidth;
      el.classList.add("swap");
    }
  };

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const tr = trackRef.current;
    if (!tr) return;
    const r = tr.getBoundingClientRect();
    setScrub(clamp(((e.clientX - r.left) / r.width) * 100, 0, 100));
  };

  return (
    <section className="sec" id="services">
      <div className="wrap rv" ref={rev}>
        <span className="eyebrow"><i style={{ "--c": "var(--coral)" } as React.CSSProperties} />{ui.svE}</span>
        <h2 className="h2">{ui.svT}</h2>
        <p className="sub">{ui.svS}</p>

        <div className="studio">
          <div className="monitor" style={{ "--c": s.color } as React.CSSProperties}>
            <div className="mon-top">
              <b><span className="rec-dot" style={{ width: 9, height: 9 }} />PLAY</b>
              <span>00:{pad(Math.round(tcVal / 5))}</span>
            </div>
            <div className="mon-body" ref={bodyRef}>
              <div className="mon-icon"><Ico k={s.icon} s={32} /></div>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
              <ul className="tags">{d.tags.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>

          <div className="tl-wrap">
            <div
              className="tl-track"
              ref={trackRef}
              role="group"
              aria-label="Timeline"
              onPointerMove={onMove}
              onPointerLeave={() => { setScrub(null); setPreview(null); }}
            >
              <div className="ruler" aria-hidden="true">
                {[0, 25, 50, 75, 100].map((p, i) => (
                  <span key={p} style={{ left: `${p}%` }}>{i * 5}s</span>
                ))}
              </div>
              {SERV.map((sv, i) => (
                <div className="lane" key={i}>
                  <button
                    type="button"
                    className="clip"
                    aria-pressed={i === active}
                    style={{ left: `${sv.at}%`, width: `${sv.w}%`, "--c": sv.color } as React.CSSProperties}
                    onClick={() => swap(i)}
                    onFocus={() => i !== active && swap(i)}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse" && i !== shown) swap(i, true);
                    }}
                  >
                    <Ico k={sv.icon} s={16} />
                    <span>{services[i].t}</span>
                  </button>
                </div>
              ))}
              <div
                className={`playhead${scrub != null ? " scrub" : ""}`}
                style={{ left: `${phPos}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
