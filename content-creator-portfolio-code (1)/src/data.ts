/* ============================================================
   بيانات الموقع — عدّل من هنا
   ============================================================ */
export const CONFIG = {
  instagram: "https://www.instagram.com/khaled.elmsree",
  igDM: "https://ig.me/m/khaled.elmsree",
  whatsapp: "", // رقمك بالصيغة الدولية بدون + مثال: "2010XXXXXXXX"
  email: "",    // مثال: "hello@example.com"
  behance: "",  // لينك Behance لو حابب تضيفه
  driveCerts: "https://drive.google.com/drive/folders/11F7t5NabjepguMxQlREWy7P6HyziWtu5?usp=drive_link",
  driveAll: "https://drive.google.com/drive/folders/1DF7_XRQm1yi1sH1j15nvZTQQet3ebXuI",
};

export type Lang = "ar" | "en";
export type CatKey = "video" | "social" | "design" | "marketing";

export interface Skill {
  icon: string;
  color: string;
  at: number;
  w: number;
}
export const SKILLS_META: Skill[] = [
  { icon: "strategy",  color: "var(--lemon)", at: 0,  w: 46 },
  { icon: "marketing", color: "var(--sky)",   at: 12, w: 42 },
  { icon: "target",    color: "var(--mint)",  at: 34, w: 44 },
  { icon: "seo",       color: "var(--coral)", at: 6,  w: 40 },
  { icon: "video",     color: "var(--lilac)", at: 26, w: 40 },
  { icon: "design",    color: "var(--pink)",  at: 48, w: 38 },
  { icon: "mail",      color: "var(--peach)", at: 58, w: 40 },
  { icon: "community", color: "var(--sky)",   at: 70, w: 28 },
];

export const CAT_STYLE: Record<CatKey, { c: string; icon: string }> = {
  video:     { c: "--sky",   icon: "play" },
  social:    { c: "--lemon", icon: "social" },
  design:    { c: "--pink",  icon: "design" },
  marketing: { c: "--mint",  icon: "target" },
};

/* works: img مسار الصورة | url لينك الشغل | meta تفاصيل إضافية للمودال */
export interface Work {
  cat: CatKey;
  ratio: string;
  img?: string;
  url?: string;
}
export const WORKS: Work[] = [
  { cat: "video",  ratio: "4/5",   img: "images/work-water.jpg" },
  { cat: "video",  ratio: "16/11", img: "images/work-clinic.jpg" },
  { cat: "social", ratio: "4/5",   img: "images/work-coffee.jpg" },
  { cat: "video",  ratio: "1/1",   img: "images/work-film.jpg" },
  { cat: "design", ratio: "1/1" },
  { cat: "marketing", ratio: "4/5" },
];

export const WEBDEV = [
  {
    img: "images/web-action.jpg",
    host: "kai3382172-byte.github.io/actionstudios",
    url: "https://kai3382172-byte.github.io/actionstudios/",
    c: "var(--coral)",
  },
  {
    img: "images/web-ican.jpg",
    host: "kai3382172-byte.github.io/Ican",
    url: "https://kai3382172-byte.github.io/Ican/",
    c: "var(--sky)",
  },
  {
    img: "images/web-baseera.jpg",
    host: "bacera-inky.vercel.app",
    url: "https://bacera-inky.vercel.app/",
    c: "var(--lilac)",
  },
];

const ar = {
  dir: "rtl" as "rtl" | "ltr",
  ui: {
    title: "خالد أحمد | مسوّق رقمي وصانع محتوى",
    langBtn: "EN",
    logo: "خالد",
    navAbout: "عني", navExp: "خبراتي", navSkills: "مهاراتي", navWork: "أعمالي",
    navWeb: "الويب", navCerts: "الشهادات", navContact: "كلمني",
    avail: "متاح لمشاريع جديدة — فل تايم وفريلانس",
    iam: "أنا", n1: "خالد", n2: "أحمد",
    lede: "بخبرة عملية في إدارة حملات التواصل الاجتماعي وكتابة وإخراج وتصوير المحتوى. بحوّل الأفكار لمحتوى يوصل للناس ويأثر فيهم، وبربط بين الإبداع والنتيجة المطلوبة في كل حملة.",
    cta1: "شوف أعمالي", cta2: "ابدأ مشروعك",
    mini1: "+20K تفاعل شهري", mini2: "إنتاج فيديو", mini3: "هوية بصرية",
    hint: "اسحب الاستيكرز، واضغط على الصورة تاخد لقطة.",
    // About
    abEb: "نبذة عني", abT: "مسوّق رقمي وصانع محتوى",
    abP1: "بخبرة عملية في إدارة حملات التواصل الاجتماعي وكتابة وإخراج وتصوير المحتوى، بمنهجية قائمة على البيانات عبر Meta وGoogle وTikTok وSnapchat. عملت على مشاريع متنوعة في مجال التسويق حققت نتائج ملموسة في الوصول والتفاعل.",
    abP2: "أقدر أدير العملية كاملة من الفكرة للتنفيذ للنتيجة. من الـ SEO والميديا باينج لتصميم المنشورات وإنتاج الفيديو وإدارة الحملات، كل خطوة بتتم بدقة واحترافية.",
    abP3: "مقيم في القاهرة، مصر — ومتاح للعمل بدوام كامل والفريلانس.",
    quote: "بحوّل الأفكار لمحتوى يوصل للناس ويأثر فيهم، وبربط بين الإبداع والنتيجة المطلوبة في كل حملة",
    st1: "تفاعل شهري", st2: "مشاريع موثقة", st3: "سنوات خبرة",
    pols: ["ورا الكاميرا", "في التصوير", "شغل ويب"],
    loc: "Cairo, Egypt",
    // Experience
    xpEb: "مسيرتي", xpT: "الخبرات المهنية",
    xpS: "محطات اشتغلت فيها وأثبتت خبرتي في التسويق الرقمي وإنتاج المحتوى.",
    now: "حتى الآن",
    // Skills
    skEb: "نقاط القوة", skT: "المهارات والخبرات",
    skS: "مجموعة الأدوات والمهارات اللي بستخدمها عشان أحوّل الفكرة لنتيجة. مرّر على التايم لاين أو اضغط على أي مقطع.",
    // Work
    wkEb: "معرض الأعمال", wkT: "أعمالي",
    wkS: "نماذج من شغلي في الفيديو والسوشيال والتسويق والتصميم. اضغط على أي شغل تشوف التفاصيل.",
    driveAll: "ملف الأعمال الكامل على Drive",
    dlgLink: "شوف الشغل",
    dlgNote: "للشغل الكامل والتفاصيل، تقدر تطلب ملف الأعمال مني مباشرة.",
    // Webdev
    webEb: "تطوير الويب", webT: "مشاريعي في تطوير المواقع",
    webS: "بجانب التسويق وصناعة المحتوى، بصمم وأبني مواقع تعريفية (Landing Pages) لعلامات تجارية ومساحات عمل، من الفكرة للتصميم للتنفيذ.",
    visit: "زيارة الموقع المباشر",
    // Certs
    ctEb: "التوثيق", ctT: "الشهادات والمؤهلات",
    ctS: "شهادات ومصادر توثّق مسيرتي المهنية.",
    openLink: "فتح الرابط",
    driveT: "ملف الأعمال الكامل",
    driveP: "جميع المشاريع والأعمال والشهادات على Google Drive.",
    driveB: "فتح الملف",
    // Education
    edEb: "التعليم", edT: "المؤهل الدراسي",
    edS: "الخلفية الأكاديمية اللي بنيت عليها مسيرتي المهنية.",
    // Contact
    cnEb: "تواصل", cnT: "نعمل حاجة تتشاف؟",
    cnS: "احكيلي عن مشروعك وهرد عليك في أقرب وقت.",
    clDir: "المخرج", clDirV: "خالد أحمد", clLoc: "الموقع", clLocV: "Cairo, EG",
    clTake: "اللقطة", clHint: "اضغط على اللوحة",
    fName: "اسمك", fNeed: "محتاج إيه؟", fMsg: "احكيلي عن فكرتك",
    namePh: "اكتب اسمك", msgPh: "بتعمل إيه؟ ولمين؟",
    sendWa: "ابعت على واتساب", sendIg: "ابعت على إنستجرام",
    fIg: "إنستجرام", fWa: "واتساب", fMail: "إيميل", fDrive: "شغلي الكامل",
    foot: "© 2026 خالد أحمد", madeIn: "اتعمل في القاهرة",
    close: "إغلاق",
    toast: "اتنسخت رسالتك. الصقها في رسايل إنستجرام.",
  },
  roles: ["مسوّق رقمي", "صانع محتوى", "مخرج فيديو", "مصمم جرافيك", "إدارة سوشيال ميديا", "استراتيجية محتوى", "SEO", "ميديا باينج"],
  stats: [{ v: 20, suffix: "K+" }, { v: 9, suffix: "+" }, { v: 2, suffix: "+" }],
  experience: [
    {
      co: "مؤسسة العاصم للتنمية",
      role: "مدير تسويق ومنتج محتوى",
      period: "سبتمبر 2024",
      current: true,
      c: "var(--lemon)",
      p: "مسؤول عن إدارة حملات السوشيال ميديا والواتساب ماركتينج بشكل كامل من التخطيط للتنفيذ. بنيت استراتيجيات ترويجية متعددة القنوات شملت محتوى SEO وإيميل ماركتينج وإعلانات مدفوعة (PPC)، وكتبت وأخرجت محتوى فيديو لحملات منها حملة واصلات المياه في المنيا وحملة مركز غسيل الكلى.",
      res: "وصول عضوي تجاوز 20,000 تفاعل ومشاهدة شهرياً — بدون ميزانية إعلانات مدفوعة.",
    },
    {
      co: "صفحة ترجمان",
      role: "كاتب محتوى ومصوّر",
      period: "فبراير 2024 — يونيو 2024",
      current: false,
      c: "var(--sky)",
      p: "كتبت مقالات ومنشورات متوافقة مع هوية البراند لعدة منصات رقمية، ونفذت مشاريع فيديو كاملة من الفكرة للتنفيذ للمونتاج، وشاركت في إخراج فيلم قصير بشكل كامل، مع الحفاظ على هوية بصرية متسقة عبر المنصات.",
      res: "فيلم قصير كامل شاركت في إخراجه من الفكرة للنسخة النهائية.",
    },
  ],
  skills: [
    { t: "استراتيجية المحتوى", d: "تخطيط حملات تسويقية، وكتابة سكريبتات وبوستات احترافية بصوت البراند.", tags: ["تخطيط", "سكريبت", "بوستات"] },
    { t: "التسويق الرقمي", d: "إدارة حملات فيسبوك، واتساب ماركتينج، ونمو عضوي يوصل لآلاف التفاعلات.", tags: ["فيسبوك", "واتساب", "نمو عضوي"] },
    { t: "الميديا باينج", d: "إدارة إعلانات Meta وGoogle وTikTok وSnapchat واستهداف الجمهور الصح.", tags: ["Meta", "TikTok", "استهداف"] },
    { t: "SEO", d: "تحسين الظهور في نتائج البحث وزيادة الوصول العضوي بمحتوى مدروس.", tags: ["كلمات مفتاحية", "محتوى", "وصول"] },
    { t: "الإنتاج البصري", d: "تصوير وإخراج فيديوهات ترويجية وأفلام قصيرة من الفكرة للمونتاج.", tags: ["تصوير", "إخراج", "مونتاج"] },
    { t: "التصميم الجرافيكي", d: "تصميم هويات بصرية ومنشورات احترافية متناسقة على كل المنصات.", tags: ["هوية", "بوستات", "أغلفة"] },
    { t: "التسويق بالإيميل", d: "حملات إيميل ماركتينج مبنية على تحليل الجمهور وسلوكه.", tags: ["حملات", "تحليل", "نمو"] },
    { t: "إدارة المجتمع", d: "تنمية الجمهور وزيادة التفاعل وبناء مجتمعات رقمية حول البراند.", tags: ["تفاعل", "ردود", "مجتمع"] },
  ],
  cats: { all: "الكل", video: "فيديو", social: "سوشيال", design: "تصميم", marketing: "تسويق" } as Record<string, string>,
  works: [
    { t: "حملة واصلات المياه — المنيا", d: "كتابة وإخراج وتصوير سلسلة فيديوهات للحملة في مؤسسة العاصم للتنمية.", meta: ["إخراج", "تصوير", "محتوى", "وصول عضوي +20K شهرياً"] },
    { t: "حملة مركز غسيل الكلى", d: "محتوى فيديو توعوي إنساني، من السكريبت للنشر، ضمن حملات المؤسسة.", meta: ["كتابة", "إخراج", "سوشيال", "حملة توعية"] },
    { t: "ريلز سوشيال — براند قهوة", d: "سلسلة ريلز قصيرة بإيقاع سريع وخطافات أول 3 ثواني.", meta: ["ريلز", "هوك", "إيقاع", "هوية بصرية"] },
    { t: "فيلم قصير — إخراج", d: "شاركت في إخراج فيلم قصير كامل مع صفحة ترجمان، من الستوري بورد للنسخة النهائية.", meta: ["ستوري بورد", "توجيه", "مونتاج"] },
    { t: "هوية بصرية وسوشيال ديزاين", d: "بوستات وأغلفة وهويات بصرية متسقة لحسابات على المنصات المختلفة.", meta: ["هوية", "بوستات", "Behance"] },
    { t: "حملات إعلانات ممولة", d: "إدارة وتحسين حملات PPC على Meta وTikTok مع قراءة مستمرة للأرقام.", meta: ["Media Buying", "استهداف", "تحسين"] },
  ],
  webdev: [
    { t: "Action Studio", d: "لاندنج بيدج لاستديو إنتاج محتوى وبودكاست في القاهرة الجديدة، فيها عرض للخدمات، تسعير شفاف، ودعوة مباشرة للحجز عبر واتساب.", tags: ["Landing Page", "Responsive", "HTML / CSS / JS"] },
    { t: "ICAN", d: "موقع تعريفي لقاعة محاضرات وتدريب في التجمع الخامس، بيعرض مقارنة أسعار السوق، الباقات، وخطوات الحجز بشكل واضح ومنظم.", tags: ["Landing Page", "Responsive", "HTML / CSS / JS"] },
    { t: "بصيرة | Baseera", d: "متجر نظارات مصري كامل — طبية وشمس وقراءة وعدسات لاصقة، مبني بـ Next.js مع تجربة معاينة النظارة على وشك بالكاميرا (AR Try-On)، دفع عند الاستلام، وتوصيل لكل محافظات مصر.", tags: ["Next.js", "E-Commerce", "AR Try-On", "PostgreSQL"] },
  ],
  certs: [
    { t: "دبلوم التسويق الاستراتيجي", d: "شهادة متخصصة في تخطيط وتنفيذ استراتيجيات التسويق.", c: "var(--lemon)", r: "-5deg" },
    { t: "دبلوم التسويق الرقمي — MENA", d: "دبلوم معتمد من وكالة أنباء الشرق الأوسط في أساسيات وأدوات التسويق الرقمي.", c: "var(--sky)", r: "4deg" },
    { t: "دبلوم تسويق الأعمال — Galaxy", d: "دبلوم من أكاديمية Galaxy في تسويق الأعمال وتطوير العلامات التجارية.", c: "var(--pink)", r: "-4deg" },
  ],
  education: [
    { t: "جامعة السويس", deg: "بكالوريوس الإعلام وتكنولوجيا الاتصال · يونيو 2024", d: "دراسة أكاديمية في الإعلام وتكنولوجيا الاتصال، شملت أساسيات صناعة المحتوى والاتصال الجماهيري.", c: "var(--sky)", r: "-5deg", icon: "cap" },
    { t: "دبلومات مهنية", deg: "تطوير مهني مستمر", d: "التسويق الاستراتيجي • التسويق الرقمي (وكالة أنباء الشرق الأوسط) • تسويق الأعمال (أكاديمية Galaxy) — مجموعة دبلومات دعمت مسيرتي العملية بأساس نظري قوي.", c: "var(--mint)", r: "4deg", icon: "book" },
  ],
  chips: ["محتوى", "إعلانات ممولة", "SEO", "تصوير", "تصميم", "إدارة حساب", "موقع ويب"],
  msg: (n: string, needs: string[], m: string) =>
    `أهلاً خالد، أنا ${n}.` + (needs.length ? ` محتاج: ${needs.join("، ")}.` : "") + (m ? `\n${m}` : ""),
};

const en: typeof ar = {
  dir: "ltr",
  ui: {
    title: "Khaled Ahmed | Digital Marketer & Content Creator",
    langBtn: "عربي",
    logo: "Khaled",
    navAbout: "About", navExp: "Experience", navSkills: "Skills", navWork: "Work",
    navWeb: "Web", navCerts: "Certificates", navContact: "Let's talk",
    avail: "Open for new projects — full-time & freelance",
    iam: "I'm a", n1: "Khaled", n2: "Ahmed",
    lede: "Hands-on experience managing social media campaigns and writing, directing and shooting content. I turn ideas into content that reaches people and moves them, tying creativity to the result every campaign needs.",
    cta1: "See my work", cta2: "Start a project",
    mini1: "+20K monthly engagement", mini2: "Video production", mini3: "Visual identity",
    hint: "Drag the stickers. Tap the photo to snap a shot.",
    abEb: "About me", abT: "Digital marketer & content creator",
    abP1: "Hands-on experience in social media campaign management and content writing, directing and shooting, with a data-driven approach across Meta, Google, TikTok and Snapchat. I've worked on a range of marketing projects with tangible reach and engagement results.",
    abP2: "I can run the whole process, from idea to execution to result. From SEO and media buying to post design, video production and campaign management — every step done with care.",
    abP3: "Based in Cairo, Egypt — available for full-time and freelance.",
    quote: "I turn ideas into content that reaches people and moves them, tying creativity to the result every campaign needs",
    st1: "Monthly engagement", st2: "Documented projects", st3: "Years of experience",
    pols: ["Behind the camera", "On set", "Web work"],
    loc: "Cairo, Egypt",
    xpEb: "My journey", xpT: "Professional experience",
    xpS: "Places where I proved my experience in digital marketing and content production.",
    now: "Present",
    skEb: "Strengths", skT: "Skills & expertise",
    skS: "The toolbox I use to turn an idea into a result. Scrub the timeline or tap a clip.",
    wkEb: "Portfolio", wkT: "My work",
    wkS: "Selected work in video, social, marketing and design. Tap any piece for details.",
    driveAll: "Full portfolio on Drive",
    dlgLink: "View project",
    dlgNote: "For the full work and details, you can ask me directly for the portfolio file.",
    webEb: "Web development", webT: "My web projects",
    webS: "Besides marketing and content, I design and build landing pages for brands and workspaces — from idea to design to launch.",
    visit: "Visit live site",
    ctEb: "Credentials", ctT: "Certificates & qualifications",
    ctS: "Certificates and sources documenting my professional journey.",
    openLink: "Open link",
    driveT: "Complete work archive",
    driveP: "All projects, works and certificates on Google Drive.",
    driveB: "Open archive",
    edEb: "Education", edT: "Academic background",
    edS: "The academic foundation behind my professional journey.",
    cnEb: "Contact", cnT: "Let's make something worth watching",
    cnS: "Tell me about your project and I'll get back to you soon.",
    clDir: "Director", clDirV: "Khaled Ahmed", clLoc: "Location", clLocV: "Cairo, EG",
    clTake: "Take", clHint: "Tap the slate",
    fName: "Your name", fNeed: "What do you need?", fMsg: "Tell me about your idea",
    namePh: "Type your name", msgPh: "What are you making? Who is it for?",
    sendWa: "Send on WhatsApp", sendIg: "Send on Instagram",
    fIg: "Instagram", fWa: "WhatsApp", fMail: "Email", fDrive: "Full archive",
    foot: "© 2026 Khaled Ahmed", madeIn: "Made in Cairo",
    close: "Close",
    toast: "Message copied. Paste it in your Instagram DM.",
  },
  roles: ["Digital Marketer", "Content Creator", "Video Director", "Graphic Designer", "Social Media Management", "Content Strategy", "SEO", "Media Buying"],
  stats: [{ v: 20, suffix: "K+" }, { v: 9, suffix: "+" }, { v: 2, suffix: "+" }],
  experience: [
    {
      co: "El Asema Development Foundation",
      role: "Marketing Manager & Content Producer",
      period: "Sep 2024",
      current: true,
      c: "var(--lemon)",
      p: "Own the full social media and WhatsApp marketing cycle, from planning to execution. Built multi-channel promotional strategies covering SEO content, email marketing and paid ads (PPC), and wrote and directed video content for campaigns including the Minya water connections campaign and the dialysis center campaign.",
      res: "Organic reach beyond 20,000 engagements and views per month — with zero paid ads budget.",
    },
    {
      co: "Torgoman Page",
      role: "Content Writer & Photographer",
      period: "Feb 2024 — Jun 2024",
      current: false,
      c: "var(--sky)",
      p: "Wrote articles and posts aligned with the brand identity across digital platforms, executed full video projects from idea to edit, and co-directed a complete short film while keeping a consistent visual identity.",
      res: "Co-directed a complete short film, from concept to final cut.",
    },
  ],
  skills: [
    { t: "Content strategy", d: "Planning marketing campaigns and writing professional scripts and posts in the brand's voice.", tags: ["Planning", "Scripts", "Posts"] },
    { t: "Digital marketing", d: "Running Facebook campaigns, WhatsApp marketing and organic growth reaching thousands of engagements.", tags: ["Facebook", "WhatsApp", "Organic"] },
    { t: "Media buying", d: "Managing Meta, Google, TikTok and Snapchat ads with precise audience targeting.", tags: ["Meta", "TikTok", "Targeting"] },
    { t: "SEO", d: "Improving search visibility and growing organic reach with well-planned content.", tags: ["Keywords", "Content", "Reach"] },
    { t: "Visual production", d: "Shooting and directing promo videos and short films, from idea to final edit.", tags: ["Shooting", "Directing", "Editing"] },
    { t: "Graphic design", d: "Designing visual identities and professional posts that stay consistent everywhere.", tags: ["Identity", "Posts", "Covers"] },
    { t: "Email marketing", d: "Email campaigns built on audience analysis and behavior.", tags: ["Campaigns", "Analysis", "Growth"] },
    { t: "Community management", d: "Growing audiences, boosting engagement and building digital communities around brands.", tags: ["Engagement", "Replies", "Community"] },
  ],
  cats: { all: "All", video: "Video", social: "Social", design: "Design", marketing: "Marketing" } as Record<string, string>,
  works: [
    { t: "Water connections campaign — Minya", d: "Wrote, directed and shot the campaign's video series at El Asema Development Foundation.", meta: ["Directing", "Shooting", "Content", "+20K monthly organic reach"] },
    { t: "Dialysis center campaign", d: "Humanitarian awareness video content, from script to publishing, within the foundation's campaigns.", meta: ["Writing", "Directing", "Social", "Awareness"] },
    { t: "Social reels — coffee brand", d: "A short reel series with fast rhythm and first-3-seconds hooks.", meta: ["Reels", "Hooks", "Rhythm", "Identity"] },
    { t: "Short film — directing", d: "Co-directed a complete short film with Torgoman, from storyboard to final cut.", meta: ["Storyboard", "Direction", "Edit"] },
    { t: "Visual identity & social design", d: "Posts, covers and consistent visual identities for accounts across platforms.", meta: ["Identity", "Posts", "Behance"] },
    { t: "Paid ads campaigns", d: "Managing and optimizing PPC campaigns on Meta and TikTok with continuous number reading.", meta: ["Media buying", "Targeting", "Optimization"] },
  ],
  webdev: [
    { t: "Action Studio", d: "Landing page for a content production and podcast studio in New Cairo, with services, transparent pricing and a direct WhatsApp booking call.", tags: ["Landing Page", "Responsive", "HTML / CSS / JS"] },
    { t: "ICAN", d: "Website for a lecture and training hall in the 5th Settlement, showing market price comparisons, packages and booking steps clearly.", tags: ["Landing Page", "Responsive", "HTML / CSS / JS"] },
    { t: "Baseera", d: "A complete Egyptian eyewear store — medical, sun, reading and contact lenses — built with Next.js, with AR camera try-on, cash on delivery and shipping across Egypt.", tags: ["Next.js", "E-Commerce", "AR Try-On", "PostgreSQL"] },
  ],
  certs: [
    { t: "Strategic Marketing Diploma", d: "Specialized certificate in planning and executing marketing strategies.", c: "var(--lemon)", r: "-5deg" },
    { t: "Digital Marketing Diploma — MENA", d: "Certified diploma from Middle East News Agency in digital marketing fundamentals and tools.", c: "var(--sky)", r: "4deg" },
    { t: "Business Marketing Diploma — Galaxy", d: "Galaxy Academy diploma in business marketing and brand development.", c: "var(--pink)", r: "-4deg" },
  ],
  education: [
    { t: "Suez University", deg: "BA in Media & Communication Technology · Jun 2024", d: "Academic studies in media and communication technology, covering content production and mass communication fundamentals.", c: "var(--sky)", r: "-5deg", icon: "cap" },
    { t: "Professional diplomas", deg: "Continuous development", d: "Strategic marketing • Digital marketing (Middle East News Agency) • Business marketing (Galaxy Academy) — diplomas that backed my practical journey with strong theory.", c: "var(--mint)", r: "4deg", icon: "book" },
  ],
  chips: ["Content", "Paid ads", "SEO", "Photography", "Design", "Account management", "Website"],
  msg: (n: string, needs: string[], m: string) =>
    `Hi Khaled, I'm ${n}.` + (needs.length ? ` I need: ${needs.join(", ")}.` : "") + (m ? `\n${m}` : ""),
};

export type Dict = typeof ar;
export const DICT: Record<Lang, Dict> = { ar, en };
