import { useEffect, useMemo, useState } from "react";
import { DICT, type Lang } from "./data";
import { LangCtx, ToastHost, CursorRing } from "./ui";
import { Nav, Tape, Footer } from "./chrome";
import Hero from "./Hero";
import { About, Experience } from "./About";
import Skills from "./Skills";
import { Work, WebDev } from "./Work";
import { Certs, Education } from "./Creds";
import Contact from "./Contact";

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem("kh-lang");
      return s === "en" ? "en" : "ar";
    } catch {
      return "ar";
    }
  });

  const d = DICT[lang];

  useEffect(() => {
    const h = document.documentElement;
    h.lang = lang;
    h.dir = d.dir;
    document.title = d.ui.title;
    try { localStorage.setItem("kh-lang", lang); } catch { /* ignore */ }
  }, [lang, d]);

  const ctx = useMemo(
    () => ({ lang, d, toggle: () => setLang((l) => (l === "ar" ? "en" : "ar")) }),
    [lang, d]
  );

  return (
    <LangCtx.Provider value={ctx}>
      <CursorRing />
      <Nav />
      <Hero />
      <Tape />
      <main>
        <About />
        <Experience />
        <Skills />
        <Work />
        <WebDev />
        <Certs />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ToastHost />
    </LangCtx.Provider>
  );
}
