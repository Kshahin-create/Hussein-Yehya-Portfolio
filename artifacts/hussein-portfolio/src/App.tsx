import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ExternalLink, Facebook, Github, Instagram, Linkedin, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import profileImage from '@assets/hussein-profile.jpeg';
import madinahStage from '@assets/image_1787524765206.png';
import madinahTalk from '@assets/image_1787524775727.png';
import madinahSide from '@assets/image_1787524800777.png';
import madinahPodium from '@assets/image_1787524804715.png';
import madinahScreen from '@assets/image_1787524808716.png';
import madinahWide from '@assets/image_1787524812715.png';

type Language = 'en' | 'ar';
type Dialect = 'egyptian' | 'moroccan';
type Repo = { name: string; language: string | null; url: string; updated: string; fork?: boolean; homepage?: string };
type Achievement = { date: string; title: string; body: string; role: string; location: string; images: string[] };

const repos: Repo[] = [
  { name: 'Tech-Day', language: 'HTML', url: 'https://github.com/husseinyehya1/Tech-Day', updated: '2026-06-29' },
  { name: 'vertify', language: 'HTML', url: 'https://github.com/husseinyehya1/vertify', updated: '2026-06-25' },
  { name: 'EDU-TECH-Obour-Team87', language: null, url: 'https://github.com/husseinyehya1/EDU-TECH-Obour-Team87', updated: '2026-05-30', fork: true },
  { name: 'my-nono', language: 'HTML', url: 'https://github.com/husseinyehya1/my-nono', updated: '2025-12-12' },
  { name: '-', language: 'HTML', url: 'https://github.com/husseinyehya1/-', updated: '2025-12-05' },
  { name: 'Casaapp', language: 'C++', url: 'https://github.com/husseinyehya1/Casaapp', updated: '2025-12-05', homepage: 'https://casa.study' },
  { name: 'SOT-App', language: 'Dart', url: 'https://github.com/husseinyehya1/SOT-App', updated: '2025-12-05' },
  { name: 'Portfolio', language: 'HTML', url: 'https://github.com/husseinyehya1/Portfolio', updated: '2025-12-04' },
  { name: 'team', language: 'HTML', url: 'https://github.com/husseinyehya1/team', updated: '2025-10-09' },
  { name: 'airscope', language: 'HTML', url: 'https://github.com/husseinyehya1/airscope', updated: '2025-09-23' },
  { name: 'Tech-Adventurers-team', language: 'HTML', url: 'https://github.com/husseinyehya1/Tech-Adventurers-team', updated: '2025-02-05' },
];

const achievements: Achievement[] = [
  {
    date: '2026-06-26',
    title: 'إطلاق النسخة التجريبية الأولية من مدينة AI',
    body: 'سعدت اليوم، بصفتي قائد الفريق التقني بالقليوبية، بإطلاق النسخة التجريبية الأولية من تطبيق مدينة AI خلال فعاليات Tech Day | Nile Sons بإدارة العبور التعليمية. لحظة مهمة في بداية مشروع نؤمن إنه هيكون خطوة جديدة نحو توظيف التكنولوجيا والذكاء الاصطناعي في خدمة المجتمع وتطوير الخدمات اليومية بشكل أسهل وأذكى.',
    role: 'قائد الفريق التقني بالقليوبية · المدير التنفيذي لمشروع مدينة AI',
    location: 'Tech Day | Nile Sons — إدارة العبور التعليمية',
    images: [madinahStage, madinahTalk, madinahSide, madinahPodium, madinahScreen, madinahWide],
  },
];

const detailCopy = {
  en: {
    label: 'PROFILE / WHAT I BUILD', title: 'More than shipping code.',
    intro: 'I work across product, engineering, operations, and the decisions that turn an idea into something people can actually use.',
    doing: 'What I do', doingBody: 'I design and develop digital systems from the first question to deployment: requirements, architecture, databases, APIs, product experience, and the operating details underneath.',
    focus: ['Web applications', 'Mobile apps with Flutter', 'Backend systems & REST APIs', 'Database architecture', 'Admin and operations platforms', 'AI inside real products', 'Automation and integrations', 'Product and technical leadership'],
    stack: 'Technical range', backend: 'Backend development', backendBody: 'Django, Flask, REST APIs, authentication, authorization, role-based access, business logic, integrations, and backend architecture.',
    mobile: 'Mobile & ecosystem', mobileBody: 'Flutter apps for Android, iOS, Windows, and Web — one connected product ecosystem instead of four disconnected builds.',
    cloud: 'Data & cloud', cloudBody: 'Supabase, PostgreSQL, Railway, Cloudflare, Firebase, OneSignal, hosting, deployment, DNS, and domain management.',
    ai: 'Artificial intelligence', aiBody: 'AI assistants, intelligent search, recommendation systems, agents, automation, data analysis, and decision support — integrated into a real workflow, not added as a gimmick.',
    initiatives: 'Leadership & initiatives', edu: 'Edu-Tech Qalyubia', eduBody: 'A technical team working across education, digital transformation, events, assessments, verification, and data. I help plan systems, organize teams, and coordinate technical and administrative work.',
    madinah: 'Madinah AI', madinahBody: 'A smart-city services ecosystem connecting people with nearby providers, products, delivery, maps, intelligent search, recommendations, and operations platforms.',
    country: 'Know Your Country', countryBody: 'An educational initiative making national, political, historical, geographic, economic, cultural, and technological knowledge more accessible and interactive.',
    products: 'Product thinking', productsBody: 'PharmaCore covers pharmacy POS, stock, purchasing, prescriptions, permissions, and audit. Nova Core is a commerce OS for stores, products, inventory, orders, customers, suppliers, reports, and multi-tenant architecture.',
    security: 'Security & the real world', securityBody: 'Cybersecurity, network security, infrastructure, secure APIs, threat modeling, access control, Arduino, robotics, electronics, embedded systems, and IoT.',
    vision: 'The bigger picture', visionBody: 'My goal is to build and manage real technology products from idea to operation — understanding the technology, product, user, market, data, management, and operations together.',
    philosophy: 'Technology is not the destination. It is the tool that helps us build a better answer.',
  },
  ar: {
    label: 'الملف / أنا ببني إيه', title: 'مش بسلّم كود وخلاص.',
    intro: 'بشتغل بين المنتج والهندسة والتشغيل والقرارات اللي بتحوّل الفكرة لحاجة الناس تقدر تستخدمها بجد.',
    doing: 'بعمل إيه؟', doingBody: 'بصمّم وبطوّر الأنظمة من أول سؤال لحد التشغيل: متطلبات، Architecture، قواعد بيانات، APIs، تجربة المنتج، وكل التفاصيل اللي بتحرّك الشغل من تحت.',
    focus: ['تطبيقات ويب', 'تطبيقات موبايل بـ Flutter', 'Backend وREST APIs', 'تصميم قواعد البيانات', 'أنظمة إدارية وتشغيلية', 'ذكاء اصطناعي جوّه المنتج', 'أتمتة وربط الخدمات', 'إدارة المنتجات والفرق التقنية'],
    stack: 'المدى التقني', backend: 'Backend منظم', backendBody: 'Django وFlask وREST APIs، تسجيل الدخول والصلاحيات، Role-Based Access، منطق الأعمال، الربط بين الخدمات، وتصميم الـBackend.',
    mobile: 'موبايل ومنظومة كاملة', mobileBody: 'تطبيقات Flutter لـ Android وiOS وWindows والويب، عشان نفس المشروع يبقى Ecosystem واحد مش أربع نسخ منفصلة.',
    cloud: 'بيانات وCloud', cloudBody: 'Supabase وPostgreSQL وRailway وCloudflare وFirebase وOneSignal، بالإضافة للاستضافة والنشر وDNS والدومينات.',
    ai: 'الذكاء الاصطناعي', aiBody: 'مساعدات ذكية، بحث ذكي، توصيات، Agents، أتمتة، تحليل بيانات، وقرارات مدعومة بالبيانات — جوّه Workflow حقيقي، مش Feature متحطوطة للمنظر.',
    initiatives: 'القيادة والمبادرات', edu: 'الفريق التقني لتعليم القليوبية', eduBody: 'فريق شغال على التعليم والتحول الرقمي والفعاليات والاختبارات والتحقق والبيانات. بساهم في تخطيط الأنظمة وتنظيم الفرق وربط الشغل التقني بالإداري.',
    madinah: 'Madinah AI', madinahBody: 'منظومة خدمات للمدينة الذكية بتوصل الناس بمقدمي الخدمات والمنتجات القريبة، مع توصيل وخرائط وبحث ذكي وتوصيات وأنظمة تشغيل.',
    country: 'مبادرة اعرف بلدك', countryBody: 'مبادرة تعليمية وتوعوية بتقدم المعرفة الوطنية والسياسية والتاريخية والجغرافية والاقتصادية والثقافية والتقنية بشكل بسيط وتفاعلي.',
    products: 'بعقلية المنتج', productsBody: 'PharmaCore نظام لإدارة الصيدليات يشمل POS والمخزون والمشتريات والروشتات والصلاحيات والـAudit. وNova Core هو Commerce OS للمتاجر والمنتجات والمخازن والطلبات والعملاء والتقارير وMulti-tenant Architecture.',
    security: 'الأمان والعالم الحقيقي', securityBody: 'باهتم بالأمن السيبراني وأمن الشبكات والبنية التحتية والـSecure APIs والـThreat Modeling والتحكم في الوصول، وكمان Arduino والروبوتات والإلكترونيات والأنظمة المدمجة وIoT.',
    vision: 'الصورة الأكبر', visionBody: 'هدفي أبني وأدير منتجات تقنية حقيقية من الفكرة للتشغيل، وأنا فاهم التكنولوجيا والمنتج والمستخدم والسوق والبيانات والإدارة والتشغيل مع بعض.',
    philosophy: 'التكنولوجيا مش هي الهدف. هي الأداة اللي بنبني بيها إجابة أحسن.',
  },
} as const;

const text = {
  en: {
    nav: ['Story', 'Systems', 'Archive', 'Method', 'Contact'],
    rail: 'Scroll for the build log',
    eyebrow: 'Independent developer / Egypt — Morocco',
    hero: 'I make local work run like good software.',
    intro: 'Hussein Yehya is a full-stack web & app developer turning the everyday complexity of real businesses into clear, capable digital products.',
    available: 'Open to thoughtful collaborations', work: 'Enter the work', talk: 'Start a conversation',
    storyLabel: '01 / Origin', storyTitle: 'Built close to the work.', story1: 'I care about the space between an idea and the moment it becomes useful. My work blends product thinking, robust engineering, and a sharp eye for the small details people feel before they can name them.', story2: 'As an Egyptian-Moroccan student, I bring a cross-cultural perspective to software: grounded in the realities of local businesses, open to the patterns shaping the wider web.',
    systemsLabel: '02 / Live systems', systemsTitle: 'Not mockups. Operating surfaces.', systemsIntro: 'Two systems made for the people who use them every day — not for a portfolio screenshot.', visit: 'Visit live site', role: 'Product · Full-stack', builtFor: 'Built for',
    sakr: 'A focused management and sales platform for Sakr supermarket in Egypt. It brings the moving parts of a busy store into one dependable operating view.',
    clean: 'A clear, operational home for CleanNova laundry in Egypt — connecting order flow, service management, and sales in a system built to keep the day moving.',
    archiveLabel: '03 / Public archive', archiveTitle: 'Every experiment leaves a trace.', archiveIntro: 'A complete view of Hussein’s public repositories — experiments, team work, and shipped ideas from GitHub.', open: 'Open', updated: 'Updated', profile: 'GitHub profile', fork: 'Forked repository',
    journalLabel: '03 / Build journal', journalTitle: 'The work, in real moments.', journalIntro: 'Selected launches, talks, and milestones from the projects I help move forward.', achievementRole: 'Role',
    methodLabel: '04 / Method', methodTitle: 'Listen. Shape. Build.', steps: [['Listen for the real problem', 'Every build starts with the people, workarounds, and constraints behind the brief.'], ['Shape the useful path', 'I turn messy requirements into a focused experience with a clear hierarchy and a reason for every screen.'], ['Build for the long run', 'The polish is visible. The reliability underneath is what makes a product stay useful.']],
    contactLabel: '05 / Contact', contactTitle: 'Have a real problem worth solving?', contact: 'I’m interested in ambitious ideas, thoughtful teams, and products that make a tangible difference. Tell me what you are working through.', phone: 'Call Hussein', share: 'Share this page', copied: 'Link copied', back: 'Back to top', language: 'العربية', themeLight: 'Switch to dark mode', themeDark: 'Switch to light mode',
  },
  ar: {
    nav: ['الحكاية', 'الأنظمة', 'الأرشيف', 'الطريقة', 'تواصل'],
    rail: 'انزل عشان تشوف رحلة البناء',
    eyebrow: 'مطور مستقل / مصر — المغرب',
    hero: 'بحوّل زحمة الشغل لحاجة تشتغل صح.',
    intro: 'أنا حسين يحيى — مطور ويب وتطبيقات متكامل بحوّل تعقيد الشغل اليومي في البيزنس لمنتجات رقمية واضحة وقوية.',
    available: 'متاح لتعاونات طموحة ومحترمة', work: 'ادخل على الشغل', talk: 'يلا نتكلم',
    storyLabel: '٠١ / البداية', storyTitle: 'قريب من الشغل الحقيقي.', story1: 'بحب أقرب المسافة بين الفكرة والنتيجة اللي الناس تقدر تستخدمها بجد. بدمج فهم المنتج مع هندسة قوية واهتمام بالتفاصيل اللي بتخلّي التجربة مريحة وواضحة.', story2: 'كطالب مصري-مغربي، عندي نظرة واسعة للبرمجيات، لكن رجلي دايماً على الأرض: بفهم احتياجات البيزنس المحلي وببني حلول تشتغل بجد.',
    systemsLabel: '٠٢ / أنظمة شغّالة', systemsTitle: 'مش صور. مساحات تشغيل.', systemsIntro: 'مشروعان شغّالان، وكل واحد فيهم معمول عشان يسهّل يوم الناس اللي بتستخدمه.', visit: 'افتح الموقع', role: 'منتج · Full-stack', builtFor: 'معمول لـ',
    sakr: 'سيستم إدارة ومبيعات لسوبر ماركت صقر في مصر، بيجمع حركة المحل اليومية في طريقة تشغيل أبسط وأوضح.', clean: 'سيستم إدارة وتشغيل ومنصة بيع لمغسلة كلين نوفا في مصر، بتنظّم الطلبات والخدمات والمبيعات في مكان واحد.',
    archiveLabel: '٠٣ / أرشيف علني', archiveTitle: 'كل تجربة بتسيب أثر.', archiveIntro: 'كل المستودعات العامة في مكان واحد: تجارب، شغل جماعي، وأفكار بتكبر واحدة واحدة.', open: 'افتح', updated: 'اتحدّث', profile: 'حساب GitHub', fork: 'مستودع متفرّع',
    journalLabel: '٠٣ / سجل الإنجازات', journalTitle: 'الشغل في لحظاته الحقيقية.', journalIntro: 'إطلاقات، مشاركات، ومحطات موثقة من المشاريع اللي بساهم في تحريكها.', achievementRole: 'الدور',
    methodLabel: '٠٤ / طريقة الشغل', methodTitle: 'نفهم. نرتب. نبني.', steps: [['أفهم المشكلة من أصلها', 'كل مشروع بيبدأ بسماع الناس، وفهم طريقة شغلهم، والحلول المؤقتة اللي اتعودوا عليها.'], ['أرتّب الطريق الصح', 'بحوّل المتطلبات الكتير لتجربة مركّزة، كل شاشة فيها لها هدف واضح.'], ['أبني حاجة تعيش', 'الشكل الجميل بيبان، لكن الثبات والاعتمادية هما اللي بيخلّوا المنتج مفيد كل يوم.']],
    contactLabel: '٠٥ / تواصل', contactTitle: 'عندك مشكلة تستاهل حل؟', contact: 'لو عندك فكرة طموحة أو مشكلة تستاهل تتحل، احكي لي عنها ونشوف مع بعض أنسب بداية.', phone: 'اتصل بيا', share: 'شارك الصفحة', copied: 'تم نسخ الرابط', back: 'اطلع لفوق', language: 'English', themeLight: 'التبديل للوضع الداكن', themeDark: 'التبديل للوضع الفاتح',
  },
} as const;

function getT(lang: Language, dialect: Dialect) {
  if (lang === 'en') return text.en;
  const base = text.ar;
  return dialect === 'moroccan' ? {
    ...base,
    nav: ['الحكاية', 'الخدمة', 'الأرشيف', 'الطريقة', 'تواصل'],
    rail: 'هبط تشوف كيفاش كنبنيو',
    eyebrow: 'مطوّر مستقل / مصر — المغرب',
    hero: 'خلي الفكرة تولي خدامة.',
    intro: 'أنا حسين يحيى — مطوّر ويب وتطبيقات، كنحوّل الفوضى ديال الخدمة لمنتجات رقمية خفيفة، مفهومة، وكتخدم من النهار اللول.',
    available: 'مفتوح لشراكات زوينة وبلا تعقيد',
    work: 'دخل للشغل', talk: 'يلا نهضرو',
    storyLabel: '٠١ / البداية', storyTitle: 'قريب من الخدمة الحقيقية.',
    story1: 'كنهتم بالمسافة بين الفكرة واللحظة اللي كتولي فيها نافعة بجد. كنخلط فهم المنتج مع هندسة قوية وعين للتفاصيل اللي كتخلي التجربة مريحة وواضحة.',
    story2: 'كمصري-مغربي، طالب ومطوّر، كنشوف البرمجيات بعينين: واقع البيزنس اللي قدامي وروح الويب اللي كتمشي لقدّام.',
    systemsLabel: '٠٢ / أنظمة خدامة', systemsTitle: 'ماشي صور. بلايص للخدمة.',
    systemsIntro: 'جوج ديال الأنظمة خدامين فالواقع، مبنيين للناس اللي كيستعملوهم كل نهار، ماشي غير للصورة ديال البورتفوليو.',
    visit: 'حلّ الموقع', role: 'منتج · Full-stack', builtFor: 'تدار لـ',
    sakr: 'سيستم للتسيير والمبيعات ديال سوبر ماركت صقر فمصر، كيجمع حركة المحل كاملة فواجهة واضحة.',
    clean: 'سيستم للتسيير والتشغيل ومنصة بيع ديال كلين نوفا فمصر، كيرتّب الطلبات والخدمات والمبيعات فبلاصة وحدة.',
    archiveLabel: '٠٣ / أرشيف علني', archiveTitle: 'كل تجربة كتخلّي أثر.',
    archiveIntro: 'المستودعات العامة كلها هنا: تجارب، خدمة مع الفريق، وأفكار كتكبر شوية بشوية.',
    journalLabel: '٠٣ / سجل المحطات', journalTitle: 'الخدمة ف لحظاتها الحقيقية.', journalIntro: 'إطلاقات، مشاركات، ومحطات من المشاريع اللي كنساهم ف تحريكها.', achievementRole: 'الدور',
    open: 'حلّ', updated: 'تحدّث', profile: 'حساب GitHub', fork: 'مستودع متفرّع',
    methodLabel: '٠٤ / الطريقة', methodTitle: 'نسمعو. نرتّبو. نبنيو.',
    steps: [['كنفهمو المشكل من الجذر', 'كل مشروع كيبدا بالناس، بطريقتهم فالخدمة، وبالحلول المؤقتة اللي ولفوها.'], ['كنصفّيو الطريق', 'كنحوّلو الطلبات الكثيرة لتجربة مركّزة، وكل شاشة عندها دور واضح.'], ['كنبنيوا باش تبقى', 'الشكل كيبان، ولكن الثبات والاعتمادية هما اللي كيخليو المنتج مفيد كل نهار.']],
    contactLabel: '٠٥ / تواصل', contactTitle: 'عندك مشكل باغي ليه حل؟',
    contact: 'إلى كانت عندك فكرة طموحة ولا مشكل كيستاهل حل، صيفط ليا ونشوفو منين نبداو.',
    phone: 'عيّط ليا', share: 'شارك الصفحة', copied: 'تنسخ الرابط', back: 'رجع للفوق',
  } : base;
}

function SectionHead({ label, title }: { label: string; title: string }) {
  return <div className="section-heading"><span>{label}</span><div /><h2>{title}</h2></div>;
}

function Header({ lang, dialect, dark, onLanguage, onDialect, onTheme }: { lang: Language; dialect: Dialect; dark: boolean; onLanguage: () => void; onDialect: () => void; onTheme: () => void }) {
  const [open, setOpen] = useState(false); const t = getT(lang, dialect);
  const links = ['story', 'profile', 'journal', 'systems', 'archive', 'method', 'contact'];
  const labels = [t.nav[0], lang === 'ar' ? 'البروفايل' : 'Profile', lang === 'ar' ? 'الإنجازات' : 'Journal', ...t.nav.slice(1)];
  return <header className="new-nav"><a href="#top" data-testid="link-home" className="mark">HY<span>.</span></a><nav>{links.map((link, i) => <a data-testid={`link-nav-${i}`} key={link} href={`#${link}`}>{labels[i]}</a>)}</nav><div className="nav-tools"><button data-testid="button-language-toggle" onClick={onLanguage}>{t.language}</button>{lang === 'ar' && <button data-testid="button-dialect-toggle" onClick={onDialect}>{dialect === 'egyptian' ? 'مصرية' : 'مغربية'}</button>}<button data-testid="button-theme-toggle" aria-label={dark ? t.themeDark : t.themeLight} onClick={onTheme}>{dark ? <Sun size={15} /> : <Moon size={15} />}</button><button data-testid="button-menu-toggle" className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={17} /> : <Menu size={17} />}</button></div>{open && <div className="mobile-sheet">{links.map((link, i) => <a onClick={() => setOpen(false)} data-testid={`link-mobile-nav-${i}`} key={link} href={`#${link}`}>{labels[i]} <ArrowDownRight size={16} /></a>)}</div>}</header>;
}

function Hero({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const t = getT(lang, dialect); const ref = useRef<HTMLElement>(null); const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 160]); const wordsY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -110]); const opacity = useTransform(scrollYProgress, [.7, 1], [1, 0]);
  return <section ref={ref} id="top" className="story-hero"><div className="hero-index">01 / 05</div><motion.div style={{ y: wordsY, opacity }} className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1 data-testid="text-hero-title">{t.hero}</h1><p data-testid="text-hero-intro">{t.intro}</p><div className="hero-actions"><a data-testid="link-view-work" href="#systems">{t.work} <ArrowDownRight size={17} /></a><a data-testid="link-start-conversation" href="#contact">{t.talk} <ArrowUpRight size={16} /></a></div></motion.div><motion.figure style={{ y: portraitY }} className="hero-photo"><div className="photo-tape">CAIRO / BUILD LOG</div><img data-testid="img-profile-portrait" src={profileImage} alt="Hussein Yehya" /><figcaption><span>Hussein Yehya</span><span>developer / builder</span></figcaption></motion.figure><div className="hero-signal"><i />{t.available}</div><a className="scroll-rail" data-testid="link-scroll-explore" href="#story"><span>{t.rail}</span><b /></a></section>;
}

function Story({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const t = getT(lang, dialect); const reduced = useReducedMotion(); const facts = lang === 'ar' ? [['متكامل', 'ويب وتطبيقات من الألف للياء'], ['٢', 'أنظمة شغّالة على أرض الواقع'], ['مصر / المغرب', 'جذور محلية ونظرة واسعة']] : [['Full-stack', 'web & app development'], ['2', 'live business systems'], ['EG / MA', 'roots, global outlook']];
  return <motion.section initial={reduced ? false : { opacity: 0 }} whileInView={reduced ? undefined : { opacity: 1 }} viewport={{ once: true, amount: .22 }} id="story" className="story-block"><SectionHead label={t.storyLabel} title={t.storyTitle} /><div className="story-body"><motion.p initial={reduced ? false : { x: -45, opacity: 0 }} whileInView={reduced ? undefined : { x: 0, opacity: 1 }} viewport={{ once: true }}>{t.story1}</motion.p><motion.p initial={reduced ? false : { x: 45, opacity: 0 }} whileInView={reduced ? undefined : { x: 0, opacity: 1 }} viewport={{ once: true }}>{t.story2}</motion.p><div className="facts">{facts.map(([title, sub], index) => <span data-testid={`text-fact-${index + 1}`} key={title}><b>{title}</b>{sub}</span>)}</div></div></motion.section>;
}

function ProfileDetails({ lang }: { lang: Language }) {
  const t = detailCopy[lang];
  const areas = [[t.backend, t.backendBody], [t.mobile, t.mobileBody], [t.cloud, t.cloudBody], [t.ai, t.aiBody]];
  const initiatives = [[t.edu, t.eduBody], [t.madinah, t.madinahBody], [t.country, t.countryBody]];
  return <section id="profile" data-testid="section-profile-details" className="profile-section">
    <SectionHead label={t.label} title={t.title} />
    <div className="profile-lead"><p>{t.intro}</p><div><span>{t.doing}</span><p>{t.doingBody}</p><div className="focus-list">{t.focus.map((item) => <span key={item}>{item}</span>)}</div></div></div>
    <div className="profile-subhead"><span>{t.stack}</span><div /></div>
    <div className="range-grid">{areas.map(([title, body], i) => <motion.article data-testid={`card-technical-area-${i}`} key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .08 }}><b>0{i + 1}</b><h3>{title}</h3><p>{body}</p></motion.article>)}</div>
    <div className="profile-split"><div><div className="profile-subhead"><span>{t.initiatives}</span><div /></div><div className="initiative-list">{initiatives.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div><div className="product-note"><span>{t.products}</span><p>{t.productsBody}</p><div className="security-line"><strong>{t.security}</strong><p>{t.securityBody}</p></div></div></div>
    <div className="vision-block"><span>{t.vision}</span><p>{t.visionBody}</p><strong>“{t.philosophy}”</strong></div>
  </section>;
}

function Journal({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const t = getT(lang, dialect);
  const reduced = useReducedMotion();
  const ordered = [...achievements].sort((a, b) => b.date.localeCompare(a.date));
  const locale = lang === 'ar' ? 'ar-EG' : 'en-GB';
  return <section id="journal" className="journal-section" data-testid="section-achievements">
    <SectionHead label={t.journalLabel} title={t.journalTitle} />
    <p className="journal-intro">{t.journalIntro}</p>
    <div className="journal-list">
      {ordered.map((item, index) => <motion.article className="achievement-card" data-testid={`card-achievement-${index}`} key={item.date + item.title} initial={reduced ? false : { opacity: 0, y: 45 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }}>
        <div className="achievement-meta"><span>{String(index + 1).padStart(2, '0')}</span><time dateTime={item.date}>{new Intl.DateTimeFormat(locale, { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(`${item.date}T12:00:00`))}</time></div>
        <div className="achievement-copy"><h3>{lang === 'en' ? 'Madinah AI pilot launch' : item.title}</h3><p>{lang === 'en' ? 'As Technical Team Lead for Qalyubia, I launched the initial pilot version of Madinah AI during Tech Day | Nile Sons, organized by Obour Educational Administration. It marks the beginning of a practical effort to use technology and artificial intelligence to make everyday services easier and smarter.' : item.body}</p><div className="achievement-footer"><span>{t.achievementRole}</span><strong>{lang === 'en' ? 'Qalyubia Technical Team Lead · Madinah AI Executive Director' : item.role}</strong><small>{item.location}</small></div></div>
        <div className="achievement-gallery">{item.images.map((image, imageIndex) => <img key={image} data-testid={`img-achievement-${index}-${imageIndex}`} src={image} alt={`${item.title} — ${imageIndex + 1}`} loading={imageIndex > 1 ? 'lazy' : undefined} />)}</div>
      </motion.article>)}
    </div>
  </section>;
}

function SystemCard({ type, lang, dialect, reduced }: { type: 'sakr' | 'clean'; lang: Language; dialect: Dialect; reduced: boolean | null }) {
  const t = getT(lang, dialect); const sakr = type === 'sakr'; const title = sakr ? 'sakrmarket.com' : 'cleannovaeg.com'; const url = sakr ? 'https://sakrmarket.com' : 'https://cleannovaeg.com';
  return <motion.article data-testid={`card-project-${type}`} initial={reduced ? false : { opacity: 0, y: 70 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }} className={`system-card ${type}`}><div className="system-screen"><span>LIVE SYSTEM / 0{sakr ? 1 : 2}</span><strong>{sakr ? 'SAKR' : 'CLEAN\\NOVA'}</strong><div className="screen-lines"><i /><i /><i /></div></div><div className="system-info"><p>{sacrTags(sakr, lang).map(x => <span key={x}>{x}</span>)}</p><h3 data-testid={`text-project-title-${type}`}>{title}</h3><p>{sakr ? t.sakr : t.clean}</p><div><small>{t.builtFor}<b>{sakr ? 'Sakr supermarket' : 'CleanNova laundry'}</b></small><small>{lang === 'ar' ? 'دوري' : 'Role'}<b>{t.role}</b></small><a data-testid={`link-project-${type}`} target="_blank" rel="noreferrer" href={url}>{t.visit}<ExternalLink size={14} /></a></div></div></motion.article>;
}
function sacrTags(sakr: boolean, lang: Language) { return sakr ? (lang === 'ar' ? ['العمليات', 'المبيعات', 'نظام أعمال'] : ['Operations', 'Sales platform', 'Business system']) : (lang === 'ar' ? ['الطلبات', 'الإدارة', 'المبيعات'] : ['Order flow', 'Management', 'Sales platform']); }

function Systems({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const t = getT(lang, dialect); const reduced = useReducedMotion(); return <section id="systems" className="systems-section"><SectionHead label={t.systemsLabel} title={t.systemsTitle} /><p className="systems-intro">{t.systemsIntro}</p><div className="systems-stage"><SystemCard type="sakr" lang={lang} dialect={dialect} reduced={reduced} /><SystemCard type="clean" lang={lang} dialect={dialect} reduced={reduced} /></div></section>;
}

function Archive({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const t = getT(lang, dialect); const reduced = useReducedMotion(); return <section id="archive" className="archive-section"><SectionHead label={t.archiveLabel} title={t.archiveTitle} /><div className="archive-top"><p>{t.archiveIntro}</p><a data-testid="link-github-profile" href="https://github.com/husseinyehya1" target="_blank" rel="noreferrer"><Github size={16} /> {t.profile}</a></div><div className="repo-list">{repos.map((repo, i) => <motion.article data-testid={`card-github-repository-${i}`} key={repo.url} initial={reduced ? false : { opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={reduced ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: (i % 4) * .05 }}><span>{String(i + 1).padStart(2, '0')}</span><h3>{repo.name}</h3><p>{repo.language ?? t.fork} <small>{t.updated} {new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-GB', { month: 'short', year: 'numeric' }).format(new Date(`${repo.updated}T00:00:00Z`))}</small></p><a data-testid={`link-github-repository-${i}`} href={repo.url} target="_blank" rel="noreferrer" aria-label={`${t.open} ${repo.name}`}><ArrowUpRight size={17} /></a></motion.article>)}</div></section>;
}

function Method({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const t = getT(lang, dialect); const reduced = useReducedMotion(); return <section id="method" className="method-section"><SectionHead label={t.methodLabel} title={t.methodTitle} /><div className="steps">{t.steps.map(([title, body], i) => <motion.article key={title} initial={reduced ? false : { opacity: 0, scale: .92 }} whileInView={reduced ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true, amount: .5 }} transition={{ delay: i * .13 }}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></motion.article>)}</div></section>;
}

function Contact({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const [copied, setCopied] = useState(false); const t = getT(lang, dialect);
  const share = async () => { try { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 1700); } catch { setCopied(false); } };
  return <section id="contact" className="contact-section"><p>{t.contactLabel}</p><h2 data-testid="text-contact-title">{t.contactTitle}</h2><p className="contact-copy">{t.contact}</p><div className="contact-grid"><a data-testid="link-phone" href="tel:+201066480958"><Phone size={20} /><span><small>{t.phone}</small><b dir="ltr">+20 10 66480958</b></span><ArrowUpRight /></a><div><a data-testid="link-social-github" href="https://github.com/husseinyehya1" target="_blank" rel="noreferrer"><Github /> GitHub</a><a data-testid="link-social-facebook" href="https://www.facebook.com/hussin.aboslman" target="_blank" rel="noreferrer"><Facebook /> Facebook</a><a data-testid="link-social-instagram" href="https://www.instagram.com/hussinaboslman/" target="_blank" rel="noreferrer"><Instagram /> Instagram</a><a data-testid="link-social-linkedin" href="https://www.linkedin.com/in/seliman-hussein/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></div></div><button data-testid="button-copy-profile-link" onClick={share}>{copied ? <Check size={16} /> : <ArrowUpRight size={16} />}{copied ? t.copied : t.share}</button></section>;
}

function App() {
  const [lang, setLang] = useState<Language>('en'); const [dialect, setDialect] = useState<Dialect>('egyptian'); const [dark, setDark] = useState(false); const t = getT(lang, dialect);
  useEffect(() => { setDark(localStorage.getItem('hussein-theme') === 'dark'); }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = lang; localStorage.setItem('hussein-theme', dark ? 'dark' : 'light'); }, [dark, lang]);
  return <div className={`kinetic-shell ${lang === 'ar' ? 'rtl' : ''}`}><Header lang={lang} dialect={dialect} dark={dark} onLanguage={() => setLang(lang === 'en' ? 'ar' : 'en')} onDialect={() => setDialect(dialect === 'egyptian' ? 'moroccan' : 'egyptian')} onTheme={() => setDark(!dark)} /><main><Hero lang={lang} dialect={dialect} /><Story lang={lang} dialect={dialect} /><ProfileDetails lang={lang} /><Journal lang={lang} dialect={dialect} /><Systems lang={lang} dialect={dialect} /><Archive lang={lang} dialect={dialect} /><Method lang={lang} dialect={dialect} /><Contact lang={lang} dialect={dialect} /></main><footer><span>© {new Date().getFullYear()} / Hussein Yehya</span><a data-testid="link-back-top" href="#top">{t.back}<ArrowUpRight size={14} /></a></footer><span className="sr-only" data-testid="text-current-language">{t.eyebrow}</span></div>;
}
export default App;