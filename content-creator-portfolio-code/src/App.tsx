import { useEffect, useState } from "react";
import { L, type Lang } from "./data";
import { Nav, Tape } from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { Stats, Experience, Skills } from "./components/Resume";
import { Work, WebDev } from "./components/Work";
import { Process, Certificates, Education, About } from "./components/Extra";
import Contact from "./components/Contact";

function CursorRing() {
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const ring = document.getElementById("cursor");
    if (!ring) return;
    let x = 0, y = 0, tx = 0, ty = 0, seen = false, raf = 0;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      if (!seen) {
        seen = true;
        x = tx;
        y = ty;
        ring.classList.add("on");
      }
      const t = e.target as Element | null;
      ring.classList.toggle(
        "big",
        !!t?.closest?.("a,button,input,textarea,.sticker,.frame,.polas,.tl-track")
      );
    };
    const leave = () => ring.classList.remove("on");
    const enter = () => { if (seen) ring.classList.add("on"); };
    addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      ring.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div id="cursor" aria-hidden="true" />;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem("kh-lang");
      if (s === "ar" || s === "en") return s;
    } catch {}
    return "ar";
  });

  const d = L[lang];
  const ui = d.ui;

  useEffect(() => {
    const h = document.documentElement;
    h.lang = lang;
    h.dir = d.dir;
    document.title = ui.title;
    try {
      localStorage.setItem("kh-lang", lang);
    } catch {}
  }, [lang, d.dir, ui.title]);

  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  return (
    <div key={lang}>
      <CursorRing />
      <Nav ui={ui} lang={lang} onLang={toggleLang} />
      <Hero ui={ui} roles={d.roles} />
      <Tape words={d.tape} />
      <main>
        <Stats ui={ui} />
        <Services ui={ui} services={d.services} />
        <Experience ui={ui} xp={d.xp} />
        <Skills ui={ui} skills={d.skills} />
        <Work ui={ui} cats={d.cats as Record<string, string>} projects={d.projects} />
        <WebDev ui={ui} descs={d.webdev} />
        <Process ui={ui} steps={d.steps} />
        <Certificates ui={ui} certs={d.certs} />
        <Education ui={ui} edu={d.edu} />
        <About ui={ui} pols={d.pols} />
      </main>
      <Contact ui={ui} chips={d.chips} buildMsg={d.msg} />
    </div>
  );
}
