import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useD, Ic } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (n: number, a: number, b: number) => Math.min(b, Math.max(a, n));

/* ---------- draggable sticker ---------- */
function Sticker({ children, style }: { children: ReactNode; style: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const st = ref.current!;
    const stage = st.parentElement!;
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
      st.style.left = clamp(ev.clientX - sr.left - dx, -60, sr.width - r.width + 60) + "px";
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
    <div ref={ref} className="sticker" style={style} onPointerDown={onDown}>
      {children}
    </div>
  );
}

/* ---------- hero ---------- */
export default function Hero() {
  const { d, lang } = useD();
  const [secs, setSecs] = useState(0);
  const [roleI, setRoleI] = useState(0);
  const roleRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const retRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const firstRole = useRef(true);

  /* REC timecode */
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  /* rotating role word */
  useEffect(() => { firstRole.current = true; }, [lang]);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setInterval(() => {
      const el = roleRef.current;
      if (!el || reduce) { setRoleI((i) => i + 1); return; }
      const out = el.animate(
        [{ transform: "translateY(0)", opacity: 1 }, { transform: "translateY(-55%)", opacity: 0 }],
        { duration: 260, easing: "ease-in", fill: "forwards" }
      );
      out.onfinish = () => { setRoleI((i) => i + 1); out.cancel(); };
    }, 2600);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (firstRole.current) { firstRole.current = false; return; }
    roleRef.current?.animate(
      [{ transform: "translateY(55%)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
      { duration: 420, easing: "cubic-bezier(.22,1,.36,1)" }
    );
  }, [roleI, lang]);

  /* viewfinder reticle */
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const frame = frameRef.current!, ret = retRef.current!;
    const r = frame.getBoundingClientRect();
    ret.style.setProperty("--x", clamp(e.clientX - r.left, 50, r.width - 50) + "px");
    ret.style.setProperty("--y", clamp(e.clientY - r.top, 50, r.height - 50) + "px");
  };
  const onLeave = () => {
    retRef.current?.style.removeProperty("--x");
    retRef.current?.style.removeProperty("--y");
  };
  const snap = () => {
    const flash = flashRef.current!, ret = retRef.current!;
    flash.classList.remove("on");
    void flash.offsetWidth;
    flash.classList.add("on");
    ret.classList.add("lock");
    setTimeout(() => ret.classList.remove("lock"), 450);
  };

  const roles = d.roles;
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="avail"><i aria-hidden="true" /><span>{d.ui.avail}</span></p>
          <h1 className="name">
            <span className="w" style={{ "--i": 0 } as CSSProperties}><span>{d.ui.n1}</span></span>
            <span className="w" style={{ "--i": 1 } as CSSProperties}><span>{d.ui.n2}</span></span>
          </h1>
          <svg className="squiggle" viewBox="0 0 320 28" aria-hidden="true">
            <path d="M4 14C30 2 50 26 80 14S130 2 160 14 210 26 240 14 290 2 316 12" />
          </svg>
          <p className="role">
            {d.ui.iam}{" "}
            <span className="role-word" ref={roleRef}>{roles[roleI % roles.length]}</span>
          </p>
          <p className="lede">{d.ui.lede}</p>
          <div className="hero-cta">
            <a className="btn pri" href="#work"><Ic n="play" s={17} sw={2.2} />{d.ui.cta1}</a>
            <a className="btn" href="#contact"><Ic n="send" s={16} sw={2.1} />{d.ui.cta2}</a>
          </div>
        </div>

        <div>
          <div className="stage">
            <div className="blob" aria-hidden="true" />
            <div className="frame" ref={frameRef} onPointerMove={onMove} onPointerLeave={onLeave} onClick={snap}>
              <img src="images/khaled.jpg" alt={lang === "ar" ? "خالد أحمد" : "Khaled Ahmed"} />
              <div className="hud" aria-hidden="true">
                <span className="c tl" /><span className="c tr" /><span className="c bl" /><span className="c br" />
                <span className="badge-h t">
                  <span className="rec-dot" style={{ width: 9, height: 9 }} />
                  REC <b>{`${pad(Math.floor(secs / 3600))}:${pad(Math.floor(secs / 60) % 60)}:${pad(secs % 60)}`}</b>
                </span>
                <span className="batt" />
                <span className="badge-h b">4K &nbsp;30 FPS</span>
                <div className="reticle" ref={retRef} />
              </div>
              <div className="flash" ref={flashRef} />
            </div>

            <Sticker style={{ left: "-7%", top: "8%", "--r": "-8deg", "--sc": "var(--lemon)" } as CSSProperties}>
              <Ic n="seo" s={16} sw={2.2} />{d.ui.mini1}
            </Sticker>
            <Sticker style={{ right: "-6%", top: "4%", "--r": "7deg", "--sc": "var(--coral)" } as CSSProperties}>
              <Ic n="video" s={16} sw={2.1} />{d.ui.mini2}
            </Sticker>
            <Sticker style={{ right: "1%", bottom: "15%", "--r": "-6deg", "--sc": "var(--mint)" } as CSSProperties}>
              <Ic n="design" s={16} sw={2.1} />{d.ui.mini3}
            </Sticker>
            <Sticker style={{ left: "-4%", bottom: "10%", "--r": "8deg", "--sc": "var(--sky)" } as CSSProperties}>
              <Ic n="search" s={15} sw={2.2} />SEO
            </Sticker>
          </div>
          <p className="hint">{d.ui.hint}</p>
        </div>
      </div>
    </header>
  );
}
