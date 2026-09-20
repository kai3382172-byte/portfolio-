import { useEffect, useRef, useState } from "react";
import { clamp, pad, reduce } from "../hooks";
import { CONFIG } from "../data";

type UI = Record<string, any>;

function Sticker({ cls, children }: { cls: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onDown = (e: React.PointerEvent) => {
    const st = ref.current;
    const stage = st?.parentElement;
    if (!st || !stage) return;
    e.preventDefault();
    const sr = stage.getBoundingClientRect();
    const r = st.getBoundingClientRect();
    st.style.left = r.left - sr.left + "px";
    st.style.top = r.top - sr.top + "px";
    st.style.right = "auto";
    st.style.bottom = "auto";
    const dx = e.clientX - r.left;
    const dy = e.clientY - r.top;
    st.setPointerCapture(e.pointerId);
    st.classList.add("drag");
    const mv = (ev: PointerEvent) => {
      st.style.left = clamp(ev.clientX - sr.left - dx, -50, sr.width - r.width + 50) + "px";
      st.style.top = clamp(ev.clientY - sr.top - dy, -30, sr.height - r.height + 30) + "px";
    };
    const up = () => {
      st.classList.remove("drag");
      st.removeEventListener("pointermove", mv);
      st.removeEventListener("pointerup", up);
      st.removeEventListener("pointercancel", up);
    };
    st.addEventListener("pointermove", mv);
    st.addEventListener("pointerup", up);
    st.addEventListener("pointercancel", up);
  };
  return (
    <div ref={ref} className={`sticker ${cls}`} onPointerDown={onDown}>
      {children}
    </div>
  );
}

export default function Hero({ ui, roles }: { ui: UI; roles: readonly string[] }) {
  const [tc, setTc] = useState(0);
  const roleRef = useRef<HTMLSpanElement>(null);
  const roleI = useRef(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const retRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setTc((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  /* rotating role word */
  useEffect(() => {
    roleI.current = 0;
    if (roleRef.current) roleRef.current.textContent = roles[0];
    const id = setInterval(() => {
      const el = roleRef.current;
      if (!el) return;
      roleI.current = (roleI.current + 1) % roles.length;
      const next = roles[roleI.current];
      if (reduce || !el.animate) {
        el.textContent = next;
        return;
      }
      const out = el.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-55%)", opacity: 0 },
        ],
        { duration: 260, easing: "ease-in", fill: "forwards" }
      );
      out.onfinish = () => {
        el.textContent = next;
        out.cancel();
        el.animate(
          [
            { transform: "translateY(55%)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          { duration: 420, easing: "cubic-bezier(.22,1,.36,1)" }
        );
      };
    }, 2600);
    return () => clearInterval(id);
  }, [roles]);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const frame = frameRef.current, ret = retRef.current;
    if (!frame || !ret) return;
    const r = frame.getBoundingClientRect();
    ret.style.setProperty("--x", clamp(e.clientX - r.left, 50, r.width - 50) + "px");
    ret.style.setProperty("--y", clamp(e.clientY - r.top, 50, r.height - 50) + "px");
  };
  const onLeave = () => {
    retRef.current?.style.removeProperty("--x");
    retRef.current?.style.removeProperty("--y");
  };
  const snap = () => {
    const flash = flashRef.current, ret = retRef.current;
    if (flash) {
      flash.classList.remove("on");
      void flash.offsetWidth;
      flash.classList.add("on");
    }
    if (ret) {
      ret.classList.add("lock");
      setTimeout(() => ret.classList.remove("lock"), 450);
    }
  };

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="avail">
            <i aria-hidden="true" />
            <span>{ui.avail}</span>
            <span className="loc">{ui.loc}</span>
          </p>
          <h1 className="name">
            <span className="w" style={{ "--i": 0 } as React.CSSProperties}>
              <span>{ui.n1}</span>
            </span>
            <span className="w" style={{ "--i": 1 } as React.CSSProperties}>
              <span>{ui.n2}</span>
            </span>
          </h1>
          <svg className="squiggle" viewBox="0 0 320 28" aria-hidden="true">
            <path d="M4 14C30 2 50 26 80 14S130 2 160 14 210 26 240 14 290 2 316 12" />
          </svg>
          <p className="role">
            {ui.iam} <span className="role-word" ref={roleRef}>{roles[0]}</span>
          </p>
          <p className="lede">{ui.lede}</p>
          <div className="hero-cta">
            <a className="btn pri" href="#work">{ui.cta1}</a>
            <a className="btn" href="#contact">{ui.cta2}</a>
          </div>
        </div>

        <div>
          <div className="stage">
            <div className="blob" aria-hidden="true" />
            <div
              className="frame"
              ref={frameRef}
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              onClick={snap}
            >
              <svg className="ph" viewBox="0 0 400 500" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
                <rect width="400" height="500" fill="#A9D8FF" />
                <circle cx="322" cy="96" r="46" fill="#FFE14D" />
                <path d="M40 500c0-92 70-152 160-152s160 60 160 152z" fill="#FF9C93" stroke="#232046" strokeWidth="4" />
                <rect x="172" y="298" width="56" height="62" rx="18" fill="#F2C3A5" stroke="#232046" strokeWidth="4" />
                <circle cx="200" cy="245" r="78" fill="#F7CDB0" stroke="#232046" strokeWidth="4" />
                <path d="M122 236c-6-72 44-100 92-94 46 6 70 46 62 94-20-30-52-44-84-40-30 3-52 18-70 40z" fill="#232046" />
                <circle cx="174" cy="254" r="6" fill="#232046" />
                <circle cx="226" cy="254" r="6" fill="#232046" />
                <path d="M178 284q22 20 44 0" fill="none" stroke="#232046" strokeWidth="5" strokeLinecap="round" />
                <rect x="148" y="394" width="104" height="68" rx="14" fill="#fff" stroke="#232046" strokeWidth="4" />
                <circle cx="200" cy="428" r="21" fill="#FFE14D" stroke="#232046" strokeWidth="4" />
                <circle cx="200" cy="428" r="8" fill="#232046" />
              </svg>
              {imgOk && (
                <img
                  className="portrait"
                  src={CONFIG.photo1}
                  alt="Khaled Ahmed"
                  onError={() => setImgOk(false)}
                />
              )}
              <div className="hud" aria-hidden="true">
                <span className="c tl" /><span className="c tr" />
                <span className="c bl" /><span className="c br" />
                <span className="badge-h t">
                  <span className="rec-dot" style={{ width: 9, height: 9 }} />
                  REC <b>{`${pad(Math.floor(tc / 3600))}:${pad(Math.floor(tc / 60) % 60)}:${pad(tc % 60)}`}</b>
                </span>
                <span className="batt" />
                <span className="badge-h b">4K&nbsp;&nbsp;30 FPS</span>
                <div className="reticle" ref={retRef} />
              </div>
              <div className="flash" ref={flashRef} />
            </div>

            <Sticker cls="s1">Reels</Sticker>
            <Sticker cls="s2">Cut!</Sticker>
            <Sticker cls="s3">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#FF4D5E" stroke="#232046" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" />
              </svg>
            </Sticker>
            <Sticker cls="s4">
              <span style={{ fontWeight: 600 }}>SEO</span>
            </Sticker>
          </div>
          <p className="hint">{ui.hint}</p>
        </div>
      </div>
    </header>
  );
}
