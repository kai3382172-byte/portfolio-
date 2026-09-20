import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import {
  Lightbulb, Megaphone, Target, TrendingUp, Clapperboard, Palette, Mail, Users,
  Play, MessageCircle, GraduationCap, BookOpen, Award, FolderOpen, Camera, Heart,
  Sparkle, MapPin, Quote, Zap, CalendarDays, ExternalLink, Send,
  Menu, X, Check, Film, Scissors, Globe, ArrowLeft, ArrowRight, Search,
} from "lucide-react";
import { DICT, type Dict, type Lang } from "./data";

type IcProps = { size?: number; strokeWidth?: number | string; className?: string };
const InstagramSvg = ({ size = 20, strokeWidth = 1.9, className }: IcProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

/* ---------- language context ---------- */
export const LangCtx = createContext<{ lang: Lang; d: Dict; toggle: () => void }>({
  lang: "ar", d: DICT.ar, toggle: () => {},
});
export const useD = () => useContext(LangCtx);

/* ---------- icons ---------- */
const ICONS: Record<string, (p: IcProps) => ReactNode> = {
  strategy: Lightbulb, marketing: Megaphone, target: Target, seo: TrendingUp,
  video: Clapperboard, design: Palette, mail: Mail, community: Users,
  play: Play, social: MessageCircle, cap: GraduationCap, book: BookOpen,
  award: Award, folder: FolderOpen, camera: Camera, heart: Heart,
  spark: Sparkle, pin: MapPin, quote: Quote, zap: Zap, cal: CalendarDays,
  link: ExternalLink, send: Send, ig: InstagramSvg, menu: Menu, x: X,
  check: Check, film: Film, cut: Scissors, globe: Globe, search: Search,
  arrL: ArrowLeft, arrR: ArrowRight,
};
export function Ic({ n, s = 20, sw = 1.9, className }: { n: string; s?: number; sw?: number; className?: string }) {
  const C = ICONS[n] ?? Sparkle;
  return <C size={s} strokeWidth={sw} className={className} aria-hidden="true" />;
}
export const Arr = ({ s = 18 }: { s?: number }) => {
  const { lang } = useD();
  return <Ic n={lang === "ar" ? "arrL" : "arrR"} s={s} sw={2.2} />;
};

/* ---------- reveal on scroll ---------- */
export function Rv({ children, className = "", delay = 0, style = {}, as: Tag = "div" }: {
  children: ReactNode; className?: string; delay?: number;
  style?: CSSProperties; as?: "div" | "section" | "figure" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} className={`rv ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

/* ---------- section head ---------- */
export function SecHead({ eb, icon, title, sub, extra }: {
  eb: string; icon: string; title: string; sub?: string; extra?: ReactNode;
}) {
  return (
    <div className="sec-head">
      <div>
        <Rv><span className="eyebrow"><Ic n={icon} s={15} sw={2.1} />{eb}</span></Rv>
        <Rv delay={80}><h2 className="h2">{title}</h2></Rv>
        {sub && <Rv delay={150}><p className="sub">{sub}</p></Rv>}
      </div>
      {extra}
    </div>
  );
}

/* ---------- toast ---------- */
export function toast(msg: string) {
  window.dispatchEvent(new CustomEvent("kh-toast", { detail: msg }));
}
export function ToastHost() {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const fn = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      setShow(true);
      clearTimeout(t);
      t = setTimeout(() => setShow(false), 4200);
    };
    window.addEventListener("kh-toast", fn);
    return () => { window.removeEventListener("kh-toast", fn); clearTimeout(t); };
  }, []);
  return <div className={`toast ${show ? "show" : ""}`} role="status">{msg}</div>;
}

/* ---------- animated counter ---------- */
export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let started = false;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting || started) return;
      started = true;
      io.disconnect();
      if (reduce) { setV(to); return; }
      const t0 = performance.now(), dur = 1400;
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

/* ---------- cursor ring ---------- */
export function CursorRing() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const ring = ref.current!;
    let x = 0, y = 0, tx = 0, ty = 0, seen = false, raf = 0;
    const mv = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX; ty = e.clientY;
      if (!seen) { seen = true; x = tx; y = ty; ring.classList.add("on"); }
      const hit = (e.target as HTMLElement).closest(
        "a,button,input,textarea,.sticker,.frame,.polas,.tl-track,.clip,.card"
      );
      ring.classList.toggle("big", !!hit);
    };
    const loop = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      ring.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", mv, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { removeEventListener("pointermove", mv); cancelAnimationFrame(raf); };
  }, []);
  return <div id="cursor" ref={ref} aria-hidden="true" />;
}
