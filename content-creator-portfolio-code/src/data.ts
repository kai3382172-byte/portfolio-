/* ============================================================
   بيانات خالد أحمد — عدّل من هنا
   ============================================================ */

export const CONFIG = {
  instagram: "https://www.instagram.com/khaled.elmsree",
  igDM: "https://ig.me/m/khaled.elmsree",
  whatsapp: "", // رقمك بالصيغة الدولية بدون + مثال: "2010xxxxxxx"
  email: "",
  driveAll: "https://drive.google.com/drive/folders/1DF7_XRQm1yi1sH1j15nvZTQQet3ebXuI",
  driveCerts:
    "https://drive.google.com/drive/folders/11F7t5NabjepguMxQlREWy7P6HyziWtu5?usp=drive_link",
  photo1: "https://https-khaled-ahmed-portfolio.vercel.app/assets/photo1.jpg",
  photo2: "https://https-khaled-ahmed-portfolio.vercel.app/assets/photo2.jpg",
};

export type Cat = "video" | "photo" | "design" | "social" | "marketing";

export const PROJECTS: { cat: Cat; ratio: string; img?: string; url?: string }[] = [
  { cat: "video", ratio: "4/5" },
  { cat: "marketing", ratio: "1/1" },
  { cat: "video", ratio: "16/11" },
  { cat: "design", ratio: "1/1", url: CONFIG.driveAll },
  { cat: "social", ratio: "4/5" },
  { cat: "marketing", ratio: "5/6" },
];

export const SERV = [
  { icon: "content", color: "var(--lemon)", at: 0, w: 46 },
  { icon: "social", color: "var(--sky)", at: 12, w: 42 },
  { icon: "marketing", color: "var(--mint)", at: 30, w: 44 },
  { icon: "seo", color: "var(--peach)", at: 8, w: 38 },
  { icon: "direction", color: "var(--coral)", at: 24, w: 40 },
  { icon: "photo", color: "var(--lilac)", at: 44, w: 40 },
  { icon: "design", color: "var(--pink)", at: 16, w: 38 },
  { icon: "edit", color: "var(--lemon)", at: 52, w: 44 },
] as const;

export const CAT_META: Record<Cat, { c: string; icon: string }> = {
  video: { c: "--sky", icon: "play" },
  photo: { c: "--lilac", icon: "photo" },
  design: { c: "--pink", icon: "design" },
  social: { c: "--lemon", icon: "social" },
  marketing: { c: "--mint", icon: "marketing" },
};

export const STEP_COLORS = ["var(--lemon)", "var(--sky)", "var(--pink)", "var(--mint)"];
export const STEP_ICONS = ["content", "photo", "edit", "marketing"];
export const POL_COLORS = ["var(--sky)", "var(--lemon)", "var(--pink)"];
export const POL_ICONS = ["photo", "direction", "edit"];
export const SKILL_COLORS = [
  "var(--lemon)", "var(--sky)", "var(--mint)", "var(--coral)",
  "var(--lilac)", "var(--pink)", "var(--peach)", "var(--lemon)",
];
export const SKILL_ICONS = [
  "content", "marketing", "target", "seo", "direction", "design", "mail", "social",
];
export const CERT_COLORS = ["var(--lemon)", "var(--sky)", "var(--mint)", "var(--lilac)"];
export const XP_COLORS = ["var(--lemon)", "var(--sky)"];
export const STAT_COLORS = ["var(--lemon)", "var(--sky)", "var(--mint)"];
export const WEB_COLORS = ["var(--sky)", "var(--mint)", "var(--lilac)"];

export const WEBDEV = [
  {
    url: "https://kai3382172-byte.github.io/actionstudios/",
    host: "kai3382172-byte.github.io/actionstudios",
    name: "Action Studio",
    tags: ["Landing Page", "Responsive", "HTML / CSS / JS"],
  },
  {
    url: "https://kai3382172-byte.github.io/Ican/",
    host: "kai3382172-byte.github.io/Ican",
    name: "ICAN",
    tags: ["Landing Page", "Responsive", "HTML / CSS / JS"],
  },
  {
    url: "https://bacera-inky.vercel.app/",
    host: "bacera-inky.vercel.app",
    name: "بصيرة | Baseera",
    tags: ["Next.js", "E-Commerce", "AR Try-On", "PostgreSQL"],
  },
];

/* ============================================================
   النصوص — عربي / English
   ============================================================ */
export const L = {
  ar: {
    dir: "rtl",
    ui: {
      title: "خالد أحمد | مسوّق رقمي وصانع محتوى",
      langBtn: "EN",
      logo: "خالد",
      nServices: "خدماتي", nXp: "الخبرات", nWork: "أعمالي", nCerts: "الشهادات",
      nAbout: "عني", nContact: "كلمني",
      avail: "متاح للعمل فل تايم وفريلانس", loc: "📍 القاهرة، مصر",
      iam: "أنا", n1: "خالد", n2: "أحمد",
      lede:
        "مسوّق رقمي وصانع محتوى بخبرة عملية في إدارة حملات السوشيال ميديا وكتابة وإخراج وتصوير المحتوى. بحوّل الفكرة لمحتوى يوصل للناس ويأثر فيهم — وأربط الإبداع بالنتيجة في كل حملة.",
      cta1: "شوف أعمالي", cta2: "ابدأ مشروعك",
      hint: "اسحب الاستيكرز، واضغط على الصورة تاخد لقطة.",
      stT: "أرقام بتتكلم",
      stats: [
        { n: 20, suf: "K+", t: "تفاعل ومشاهدة شهرياً — وصول عضوي بدون إعلانات" },
        { n: 15, suf: "+", t: "مشروع وحملة بين محتوى وتصميم وويب" },
        { n: 8, suf: "", t: "مهارات أساسية من الاستراتيجية للتنفيذ" },
      ],
      svE: "الاستوديو", svT: "اللي بعمله",
      svS: "مرّر على التايم لاين أو اضغط على أي مقطع وشوف التفاصيل.",
      xpE: "مسيرتي", xpT: "الخبرات المهنية",
      xpS: "محطات عملت فيها وأثبتت خبرتي في التسويق الرقمي وإنتاج المحتوى.",
      xpRes: "النتيجة:",
      skE: "نقاط القوة", skT: "المهارات والخبرات",
      skS: "مجموعة الأدوات والمهارات اللي بستخدمها عشان أحوّل الفكرة لنتيجة.",
      wkE: "معرض الأعمال", wkT: "أعمالي",
      wkS: "نماذج من شغلي في المحتوى والتسويق والتصميم. اضغط على أي شغل تشوف التفاصيل.",
      wdE: "> تطوير الويب", wdT: "مشاريعي في تطوير المواقع",
      wdS: "بجانب التسويق وصناعة المحتوى، بصمم وأبني مواقع تعريفية ومتاجر لعلامات تجارية ومساحات عمل — من الفكرة للتصميم للتنفيذ.",
      wdVisit: "زيارة الموقع ↗",
      prE: "خط الإنتاج", prT: "بشتغل إزاي",
      ceE: "التوثيق", ceT: "الشهادات والمؤهلات",
      ceS: "شهادات ومصادر بتوثّق مسيرتي المهنية.",
      ceOpen: "فتح الرابط ↗",
      edE: "التعليم", edT: "المؤهل الدراسي",
      edS: "الخلفية الأكاديمية اللي بنيت عليها مسيرتي.",
      abE: "ورا الكواليس", abT: "ورا الكاميرا",
      abP1:
        "أنا خالد أحمد، مسوّق رقمي وصانع محتوى مقيم في القاهرة. بشتغل بمنهجية قائمة على البيانات عبر Meta وGoogle وTikTok وSnapchat، وبمسك المشروع كامل من الفكرة للتنفيذ للنتيجة.",
      abP2:
        "من الـ SEO والميديا باينج لتصميم البوستات وإنتاج الفيديو وإدارة الحملات — كل خطوة بتتم بدقة، وبحب الشغل اللي بتبان فيه شخصية صاحبه مش القالب الجاهز.",
      quote:
        "«أحوّل الأفكار إلى محتوى يصل للناس ويؤثر فيهم، وأربط بين الإبداع والنتيجة المطلوبة في كل حملة»",
      v1: "فكرة قبل الكاميرا", v2: "إيقاع قبل الفلتر", v3: "أرقام بعد النشر",
      ctT: "نعمل حاجة تتشاف؟",
      ctS: "احكيلي عن مشروعك وهرد عليك في أقرب وقت.",
      clDir: "المخرج", clDirV: "خالد أحمد", clProj: "المشروع", clTake: "اللقطة",
      clHint: "اضغط على اللوحة",
      fName: "اسمك", fNeed: "محتاج إيه؟", fMsg: "احكيلي عن فكرتك",
      namePh: "اكتب اسمك", msgPh: "بتعمل إيه؟ ولمين؟",
      sendWa: "ابعت على واتساب", sendIg: "ابعت على إنستجرام",
      fIg: "إنستجرام", fWa: "واتساب", fMail: "إيميل", fDrive: "ملف الأعمال الكامل",
      foot: "© 2026 خالد أحمد — القاهرة، مصر", close: "إغلاق",
      dlgLink: "شوف الشغل",
      toast: "اتنسخت رسالتك. الصقها في رسايل إنستجرام.",
    },
    roles: [
      "مسوّق رقمي", "صانع محتوى", "مخرج فيديو", "مصمم جرافيك",
      "ميديا باير", "SEO سبيشاليست", "مصوّر", "مونتير",
    ],
    tape: [
      "مسوّق رقمي", "صانع محتوى", "مخرج فيديو", "مصمم جرافيك",
      "إدارة سوشيال ميديا", "استراتيجية محتوى", "SEO", "ميديا باينج",
    ],
    services: [
      { t: "صناعة المحتوى", d: "أفكار وسكريبتات وخطة محتوى تخلي الناس تتابعك وتفتكرك.", tags: ["أفكار", "سكريبت", "خطة شهرية"] },
      { t: "إدارة السوشيال ميديا", d: "كتابة الكابشنز وجدولة النشر وواتساب ماركتينج وتفاعل بصوت البراند.", tags: ["كابشن", "جدولة", "واتساب"] },
      { t: "الميديا باينج", d: "حملات ممولة على Meta وGoogle وTikTok وSnapchat باستهداف دقيق وتحسين مستمر.", tags: ["Meta", "Google", "TikTok"] },
      { t: "SEO", d: "تحسين الظهور في نتائج البحث وزيادة الوصول العضوي من غير ميزانية إعلانات.", tags: ["كلمات مفتاحية", "محتوى", "نمو عضوي"] },
      { t: "الإخراج", d: "بحوّل الفكرة لمشاهد مترتبة: ستوري بورد وتوجيه وإيقاع يوصل الرسالة.", tags: ["ستوري بورد", "توجيه", "أفلام قصيرة"] },
      { t: "التصوير", d: "صور وفيديو بإضاءة وزوايا بتظهر شخصية البراند.", tags: ["منتجات", "أشخاص", "فيديو"] },
      { t: "التصميم", d: "بوستات وأغلفة ريلز وهوية بصرية متناسقة على كل المنصات.", tags: ["بوستات", "أغلفة", "هوية"] },
      { t: "المونتاج", d: "قص وإيقاع وموسيقى وموشن يخلي أول 3 ثواني تشد المشاهد.", tags: ["ريلز", "إعلانات", "موشن"] },
    ],
    xp: [
      {
        co: "مؤسسة العاصم للتنمية",
        role: "مدير تسويق ومنتج محتوى",
        date: "سبتمبر 2024 — حتى الآن",
        d: "مسؤول عن إدارة حملات السوشيال ميديا والواتساب ماركتينج بالكامل من التخطيط للتنفيذ. بنيت استراتيجيات ترويجية متعددة القنوات شملت محتوى SEO وإيميل ماركتينج وإعلانات مدفوعة (PPC)، وكتبت وأخرجت محتوى فيديو لحملات منها حملة واصلات المياه في المنيا وحملة مركز غسيل الكلى.",
        res: "وصول عضوي تجاوز 20,000 تفاعل ومشاهدة شهرياً بدون ميزانية إعلانات مدفوعة.",
      },
      {
        co: "صفحة ترجمان",
        role: "كاتب محتوى ومصوّر",
        date: "فبراير 2024 — يونيو 2024",
        d: "كتبت مقالات ومنشورات متوافقة مع هوية البراند لعدة منصات رقمية، ونفذت مشاريع فيديو كاملة من الفكرة للتنفيذ للمونتاج، وشاركت في إخراج فيلم قصير بشكل كامل مع الحفاظ على هوية بصرية متسقة عبر المنصات.",
        res: "",
      },
    ],
    skills: [
      { t: "استراتيجية المحتوى", d: "تخطيط حملات تسويقية وكتابة سكريبتات وبوستات احترافية." },
      { t: "التسويق الرقمي", d: "إدارة حملات فيسبوك، واتساب ماركتينج، ونمو عضوي." },
      { t: "الميديا باينج", d: "إدارة إعلانات Meta وGoogle وTikTok وSnapchat واستهداف الجمهور." },
      { t: "SEO", d: "تحسين الظهور في نتائج البحث وزيادة الوصول العضوي." },
      { t: "الإنتاج البصري", d: "تصوير وإخراج فيديوهات ترويجية وأفلام قصيرة." },
      { t: "التصميم الجرافيكي", d: "تصميم هويات بصرية ومنشورات احترافية." },
      { t: "الإيميل ماركتينج", d: "حملات بريد إلكتروني مبنية على تحليل الجمهور." },
      { t: "إدارة المجتمع", d: "تنمية الجمهور وزيادة التفاعل وبناء مجتمعات رقمية." },
    ],
    cats: { all: "الكل", video: "فيديو", photo: "تصوير", design: "تصميم", social: "سوشيال", marketing: "تسويق" },
    projects: [
      { t: "حملة واصلات المياه — المنيا", d: "كتابة وإخراج محتوى فيديو لحملة تنموية وصلت لآلاف المشاهدات عضوياً." },
      { t: "حملة مركز غسيل الكلى", d: "حملة توعوية متعددة القنوات: فيديو ومحتوى وإدارة نشر." },
      { t: "إخراج فيلم قصير — ترجمان", d: "مشاركة كاملة في إخراج فيلم قصير من الفكرة للمونتاج النهائي." },
      { t: "تصاميم جرافيك — Behance", d: "هويات بصرية وبوستات احترافية. شوف النماذج في ملف الأعمال." },
      { t: "واتساب ماركتينج — العاصم", d: "إدارة قنوات واتساب من التخطيط للتنفيذ وقياس النتائج." },
      { t: "محتوى SEO وإيميل ماركتينج", d: "استراتيجية ترويجية متعددة القنوات بوصول عضوي مستمر." },
    ],
    webdev: [
      { d: "لاندنج بيدج لاستديو إنتاج محتوى وبودكاست في القاهرة الجديدة: عرض للخدمات، تسعير شفاف، ودعوة مباشرة للحجز عبر واتساب." },
      { d: "موقع تعريفي لقاعة محاضرات وتدريب في التجمع الخامس، بيعرض مقارنة أسعار السوق والباقات وخطوات الحجز بشكل واضح." },
      { d: "متجر نظارات مصري كامل — طبية وشمس وقراءة وعدسات، مبني بـ Next.js مع تجربة AR Try-On ودفع عند الاستلام وتوصيل لكل المحافظات." },
    ],
    steps: [
      { t: "الفكرة", d: "بنحدد الهدف والجمهور ونكتب السكريبت والاستراتيجية." },
      { t: "التصوير", d: "بجهز الكادرات والإضاءة وأصوّر بإخراج واضح." },
      { t: "المونتاج والتصميم", d: "بقص وأرتب وأضيف الصوت والجرافيك." },
      { t: "النشر والقياس", d: "بننزّل المحتوى ونتابع الأرقام ونطوّر." },
    ],
    certs: [
      { t: "دبلوم التسويق الاستراتيجي", d: "شهادة متخصصة في تخطيط وتنفيذ استراتيجيات التسويق.", url: CONFIG.driveCerts },
      { t: "دبلوم التسويق الرقمي — وكالة أنباء الشرق الأوسط (MENA)", d: "دبلوم معتمد في أساسيات وأدوات التسويق الرقمي.", url: CONFIG.driveCerts },
      { t: "دبلوم تسويق الأعمال — أكاديمية Galaxy", d: "دبلوم في تسويق الأعمال وتطوير العلامات التجارية.", url: CONFIG.driveCerts },
      { t: "ملف الأعمال الكامل", d: "جميع المشاريع والأعمال والشهادات على Google Drive.", url: CONFIG.driveAll },
    ],
    edu: [
      {
        t: "جامعة السويس",
        deg: "بكالوريوس الإعلام وتكنولوجيا الاتصال",
        date: "يونيو 2024",
        d: "دراسة أكاديمية في الإعلام وتكنولوجيا الاتصال، شملت أساسيات صناعة المحتوى والاتصال الجماهيري.",
      },
      {
        t: "دبلومات مهنية",
        deg: "تطوير مهني مستمر",
        date: "2023 — الآن",
        d: "التسويق الاستراتيجي • التسويق الرقمي (وكالة أنباء الشرق الأوسط) • تسويق الأعمال (أكاديمية Galaxy) — أساس نظري قوي دعم مسيرتي العملية.",
      },
    ],
    pols: ["ورا الكاميرا", "في التصوير", "في المونتاج"],
    chips: ["محتوى", "ريلز", "إعلانات ممولة", "تصميم", "إدارة حساب", "موقع ويب"],
    msg: (n: string, needs: string[], m: string) =>
      `أهلاً خالد، أنا ${n}.` +
      (needs.length ? ` محتاج: ${needs.join("، ")}.` : "") +
      (m ? `\n${m}` : ""),
  },

  en: {
    dir: "ltr",
    ui: {
      title: "Khaled Ahmed | Digital Marketer & Content Creator",
      langBtn: "عربي",
      logo: "Khaled",
      nServices: "Services", nXp: "Experience", nWork: "Work", nCerts: "Certificates",
      nAbout: "About", nContact: "Let's talk",
      avail: "Open for full-time & freelance", loc: "📍 Cairo, Egypt",
      iam: "I'm a", n1: "Khaled", n2: "Ahmed",
      lede:
        "Digital marketer & content creator with hands-on experience running social campaigns and writing, directing and shooting content. I turn ideas into content people stop for — and tie creativity to results in every campaign.",
      cta1: "See my work", cta2: "Start a project",
      hint: "Drag the stickers. Tap the photo to snap a shot.",
      stT: "Numbers that talk",
      stats: [
        { n: 20, suf: "K+", t: "monthly organic reach & engagement — no paid ads" },
        { n: 15, suf: "+", t: "projects & campaigns across content, design and web" },
        { n: 8, suf: "", t: "core skills from strategy to execution" },
      ],
      svE: "The studio", svT: "What I do",
      svS: "Scrub the timeline or tap a clip to see the details.",
      xpE: "My journey", xpT: "Professional experience",
      xpS: "Places I've worked that proved my skills in digital marketing and content production.",
      xpRes: "Result:",
      skE: "Strengths", skT: "Skills & expertise",
      skS: "The toolset I use to turn an idea into a result.",
      wkE: "Showcase", wkT: "My work",
      wkS: "Samples of my content, marketing and design work. Tap any piece for details.",
      wdE: "> Web dev", wdT: "Web development projects",
      wdS: "Alongside marketing and content, I design and build landing pages and stores for brands and workspaces — from idea to design to launch.",
      wdVisit: "Visit live site ↗",
      prE: "Pipeline", prT: "How I work",
      ceE: "Proof", ceT: "Certificates & credentials",
      ceS: "Certificates and sources that document my career.",
      ceOpen: "Open link ↗",
      edE: "Education", edT: "Academic background",
      edS: "The academic base I built my career on.",
      abE: "Behind the scenes", abT: "Behind the camera",
      abP1:
        "I'm Khaled Ahmed, a digital marketer and content creator based in Cairo. I work with a data-driven approach across Meta, Google, TikTok and Snapchat, owning projects end to end — idea, execution, results.",
      abP2:
        "From SEO and media buying to post design, video production and campaign management — every step is done with care, and I like work that shows its owner's personality, not a template.",
      quote:
        "\u201CI turn ideas into content that reaches people and moves them, tying creativity to the result in every campaign.\u201D",
      v1: "Idea before camera", v2: "Rhythm before filter", v3: "Numbers after posting",
      ctT: "Let's make something worth watching",
      ctS: "Tell me about your project and I'll get back to you soon.",
      clDir: "Director", clDirV: "Khaled Ahmed", clProj: "Project", clTake: "Take",
      clHint: "Tap the slate",
      fName: "Your name", fNeed: "What do you need?", fMsg: "Tell me about your idea",
      namePh: "Type your name", msgPh: "What are you making? Who is it for?",
      sendWa: "Send on WhatsApp", sendIg: "Send on Instagram",
      fIg: "Instagram", fWa: "WhatsApp", fMail: "Email", fDrive: "Full portfolio (Drive)",
      foot: "© 2026 Khaled Ahmed — Cairo, Egypt", close: "Close",
      dlgLink: "View project",
      toast: "Message copied. Paste it in your Instagram DM.",
    },
    roles: [
      "Digital Marketer", "Content Creator", "Video Director", "Graphic Designer",
      "Media Buyer", "SEO Specialist", "Photographer", "Video Editor",
    ],
    tape: [
      "Digital Marketing", "Content Creation", "Video Directing", "Graphic Design",
      "Social Media", "Content Strategy", "SEO", "Media Buying",
    ],
    services: [
      { t: "Content creation", d: "Ideas, scripts and a content plan that makes people follow you and remember you.", tags: ["Ideas", "Scripts", "Monthly plan"] },
      { t: "Social media", d: "Captions, scheduling, WhatsApp marketing and community replies in the brand's voice.", tags: ["Captions", "Scheduling", "WhatsApp"] },
      { t: "Media buying", d: "Paid campaigns on Meta, Google, TikTok and Snapchat with sharp targeting and steady optimization.", tags: ["Meta", "Google", "TikTok"] },
      { t: "SEO", d: "Better search visibility and organic reach growth without an ads budget.", tags: ["Keywords", "Content", "Organic growth"] },
      { t: "Directing", d: "I turn an idea into ordered scenes: storyboard, direction and a rhythm that carries the message.", tags: ["Storyboard", "Direction", "Short films"] },
      { t: "Photography", d: "Photo and video with lighting and angles that show a brand's personality.", tags: ["Products", "People", "Video"] },
      { t: "Design", d: "Posts, reel covers and a visual identity that stays consistent on every platform.", tags: ["Posts", "Covers", "Identity"] },
      { t: "Editing", d: "Cuts, rhythm, music and motion so the first 3 seconds hold the viewer.", tags: ["Reels", "Ads", "Motion"] },
    ],
    xp: [
      {
        co: "Al-Asem Development Foundation",
        role: "Marketing Manager & Content Producer",
        date: "Sep 2024 — Present",
        d: "Fully responsible for social media and WhatsApp marketing campaigns from planning to execution. Built multi-channel promotional strategies covering SEO content, email marketing and paid ads (PPC), and wrote & directed video content for campaigns including the Minya water-connections campaign and the dialysis center campaign.",
        res: "Organic reach exceeding 20,000 monthly interactions and views with zero paid-ads budget.",
      },
      {
        co: "Torjoman Page",
        role: "Content Writer & Photographer",
        date: "Feb 2024 — Jun 2024",
        d: "Wrote on-brand articles and posts for several digital platforms, delivered complete video projects from idea to edit, and co-directed a full short film while keeping a consistent visual identity across platforms.",
        res: "",
      },
    ],
    skills: [
      { t: "Content strategy", d: "Campaign planning, professional scripts and posts." },
      { t: "Digital marketing", d: "Facebook campaigns, WhatsApp marketing, organic growth." },
      { t: "Media buying", d: "Meta, Google, TikTok and Snapchat ads with audience targeting." },
      { t: "SEO", d: "Better search visibility and stronger organic reach." },
      { t: "Visual production", d: "Shooting and directing promos and short films." },
      { t: "Graphic design", d: "Visual identities and professional posts." },
      { t: "Email marketing", d: "Email campaigns built on audience analysis." },
      { t: "Community management", d: "Growing audiences, engagement and digital communities." },
    ],
    cats: { all: "All", video: "Video", photo: "Photo", design: "Design", social: "Social", marketing: "Marketing" },
    projects: [
      { t: "Water-connections campaign — Minya", d: "Wrote and directed video content for a development campaign that reached thousands organically." },
      { t: "Dialysis center campaign", d: "A multi-channel awareness campaign: video, content and publishing management." },
      { t: "Short film — Torjoman", d: "Full co-direction of a short film, from idea to final cut." },
      { t: "Graphic design — Behance", d: "Visual identities and professional posts. See samples in the portfolio file." },
      { t: "WhatsApp marketing — Al-Asem", d: "Managed WhatsApp channels from planning to execution and measurement." },
      { t: "SEO content & email marketing", d: "A multi-channel promotional strategy with steady organic reach." },
    ],
    webdev: [
      { d: "Landing page for a content & podcast studio in New Cairo: services, transparent pricing and a direct WhatsApp booking CTA." },
      { d: "One-pager for a lecture & training hall in the Fifth Settlement, with market price comparison, packages and clear booking steps." },
      { d: "A complete Egyptian eyewear store — prescription, sun, reading and lenses — built with Next.js, AR try-on, COD and nationwide delivery." },
    ],
    steps: [
      { t: "Idea", d: "We set the goal and audience, then I write the script and strategy." },
      { t: "Shoot", d: "I prepare the framing and lighting, and direct the shoot clearly." },
      { t: "Edit & design", d: "I cut, arrange, and add sound and graphics." },
      { t: "Post & measure", d: "We publish, follow the numbers, and improve." },
    ],
    certs: [
      { t: "Strategic Marketing Diploma", d: "A specialized certificate in planning and executing marketing strategies.", url: CONFIG.driveCerts },
      { t: "Digital Marketing Diploma — MENA News Agency", d: "An accredited diploma in digital marketing fundamentals and tools.", url: CONFIG.driveCerts },
      { t: "Business Marketing Diploma — Galaxy Academy", d: "A diploma in business marketing and brand development.", url: CONFIG.driveCerts },
      { t: "Full portfolio file", d: "All projects, work and certificates on Google Drive.", url: CONFIG.driveAll },
    ],
    edu: [
      {
        t: "Suez University",
        deg: "B.A. in Media & Communication Technology",
        date: "Jun 2024",
        d: "Academic study of media and communication technology, covering the foundations of content creation and mass communication.",
      },
      {
        t: "Professional diplomas",
        deg: "Continuous development",
        date: "2023 — Now",
        d: "Strategic Marketing • Digital Marketing (MENA News Agency) • Business Marketing (Galaxy Academy) — a solid theoretical base behind my hands-on career.",
      },
    ],
    pols: ["Behind the camera", "On set", "In the edit"],
    chips: ["Content", "Reels", "Paid ads", "Design", "Account management", "Website"],
    msg: (n: string, needs: string[], m: string) =>
      `Hi Khaled, I'm ${n}.` +
      (needs.length ? ` I need: ${needs.join(", ")}.` : "") +
      (m ? `\n${m}` : ""),
  },
} as const;

export type Lang = keyof typeof L;
