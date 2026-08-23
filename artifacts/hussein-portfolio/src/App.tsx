import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ExternalLink, Facebook, Github, Instagram, Layers3, Linkedin, Moon, Quote, Sun, Terminal, Zap } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import profileImage from '@assets/hussein-profile.jpeg';

const queryClient = new QueryClient();

type Language = 'en' | 'ar';
type ArabicDialect = 'egyptian' | 'moroccan';

type GitHubRepository = {
  name: string;
  language: string | null;
  url: string;
  updated: string;
  fork?: boolean;
  homepage?: string;
};

const githubRepositories: readonly GitHubRepository[] = [
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

const copy = {
  en: {
    nav: ['about', 'work', 'github', 'approach', 'contact'],
    eyebrow: 'Independent developer · Egypt / Morocco',
    heroTitle: <>Interfaces with <em>intent.</em></>,
    heroBody: 'I’m Hussein Yehya — a full-stack web & app developer turning the everyday complexity of real businesses into clear, capable digital products.',
    viewWork: 'See the work',
    startTalk: 'Start a conversation',
    available: 'Open to thoughtful collaborations',
    portraitAlt: 'Hussein Yehya in front of an Arabic supermarket sign',
    currently: 'Currently building from',
    location: 'Cairo, Egypt',
    scroll: 'Scroll to explore',
    aboutKicker: '01 — A little context',
    aboutTitle: <>Practical by nature.<br /><span className="text-primary">Curious by default.</span></>,
    aboutBody: 'I care about the space between an idea and the moment it becomes useful. My work blends product thinking, robust engineering, and a sharp eye for the small details people feel before they can name them.',
    aboutBody2: 'As an Egyptian-Moroccan student, I bring a cross-cultural perspective to software: grounded in the realities of local businesses, open to the patterns shaping the wider web.',
    fact1: 'Full-stack',
    fact1Sub: 'web & app development',
    fact2: '2',
    fact2Sub: 'live business systems',
    fact3: 'EG / MA',
    fact3Sub: 'roots, global outlook',
    workKicker: '02 — Selected work',
    workTitle: <>Software that earns<br /><span className="font-display italic text-primary">its place.</span></>,
    workIntro: 'Two live systems. Both made for the people who use them every day — not for a portfolio screenshot.',
    visit: 'Visit live site',
    sakrDesc: 'A focused management and sales platform for Sakr supermarket in Egypt. It brings the moving parts of a busy store into one dependable operating view.',
    cleanDesc: 'A clear, operational home for CleanNova laundry in Egypt — connecting order flow, service management, and sales in a system built to keep the day moving.',
    builtFor: 'Built for',
    role: 'Role',
    roleValue: 'Product · Full-stack',
    stack: 'Stack',
    sakrTags: ['Operations', 'Sales platform', 'Business system'],
    cleanTags: ['Order flow', 'Management', 'Sales platform'],
    githubKicker: '03 — GitHub archive',
    githubTitle: <>Public work,<br /><span className="font-display italic text-primary">in progress.</span></>,
    githubIntro: 'A complete view of Hussein’s public repositories — experiments, team work, and shipped ideas from GitHub.',
    githubRepository: 'Repository',
    githubOpen: 'Open on GitHub',
    githubUpdated: 'Updated',
    githubFork: 'Forked repository',
    githubProfile: 'View GitHub profile',
    approachKicker: '04 — How I work',
    approachTitle: <>Make the complex<br /><span className="font-display italic text-primary">feel obvious.</span></>,
    approachIntro: 'Good software does not ask people to admire it. It makes the next right action feel natural.',
    step1: 'Listen for the real problem',
    step1Body: 'Every build starts with the people, workarounds, and constraints behind the brief.',
    step2: 'Shape the useful path',
    step2Body: 'I turn messy requirements into a focused experience with a clear hierarchy and a reason for every screen.',
    step3: 'Build for the long run',
    step3Body: 'The polish is visible. The reliability underneath is what makes a product stay useful.',
    principles: ['Clarity over decoration', 'Systems over shortcuts', 'Details that respect time'],
    note: 'A note from the desk',
    quote: 'The best interface is the one that lets the work take center stage.',
    contactKicker: '05 — Connect',
    contactTitle: <>Have a real problem<br /><span className="font-display italic text-primary">worth solving?</span></>,
    contactBody: 'I’m interested in ambitious ideas, thoughtful teams, and products that make a tangible difference. Tell me what you are working through.',
    contactPlaceholder: 'Contact details · add later',
    contactPlaceholderBody: 'Direct email and phone details will be added here soon. For now, this space is intentionally reserved.',
    phoneLabel: 'Call Hussein',
    openLink: 'Open a project',
    footerLine: 'Designed & built by Hussein Yehya',
    backTop: 'Back to top',
    languageLabel: 'العربية',
    dialectLabel: 'اللهجة',
    egyptian: 'مصرية',
    moroccan: 'مغربية',
    themeLabelLight: 'Switch to dark mode',
    themeLabelDark: 'Switch to light mode',
  },
  ar: {
    nav: ['أنا مين', 'الشغل', 'GitHub', 'بشتغل إزاي', 'كلّمني'],
    eyebrow: 'مطور مستقل · مصر / المغرب',
    heroTitle: <>بنبني حاجة<br /><em>تتستخدم بجد.</em></>,
    heroBody: 'أنا حسين يحيى — مطور ويب وتطبيقات بحب أحوّل الزحمة اللي في الشغل لمنتجات واضحة، سريعة، وتخلّي اليوم أسهل.',
    viewWork: 'شوف الشغل',
    startTalk: 'يلا نتكلم',
    available: 'متاح لشغل حلو وناس جدعة',
    portraitAlt: 'حسين يحيى أمام لافتة سوبر ماركت باللغة العربية',
    currently: 'شغال حالياً من',
    location: 'القاهرة، مصر',
    scroll: 'انزل شوف الباقي',
    aboutKicker: '٠١ — خلّينا نتعرّف',
    aboutTitle: <>بفكّر عملي.<br /><span className="text-primary">وبحب أجرّب كتير.</span></>,
    aboutBody: 'مش بكتب كود وخلاص. بفهم الناس والشغل الأول، وبعدها ببني تجربة شكلها حلو وبتشتغل من أول مرة من غير وجع دماغ.',
    aboutBody2: 'مصري ومغربي، طالب ومطور، وبحب أخلط بين فهم البيزنس المحلي وروح الإنترنت السريعة.',
    fact1: 'متكامل',
    fact1Sub: 'ويب وتطبيقات من الألف للياء',
    fact2: '٢',
    fact2Sub: 'أنظمة شغّالة على أرض الواقع',
    fact3: 'مصر / المغرب',
    fact3Sub: 'مصر والمغرب، بعقلية واسعة',
    workKicker: '٠٢ — حاجات اتبنت بجد',
    workTitle: <>مش مجرد كود.<br /><span className="font-display italic text-primary">ده شغل بيتحرك.</span></>,
    workIntro: 'مشاريع معمولة عشان تخلّي التشغيل أسرع وأوضح، مش عشان تتصور حلو في البورتفوليو وبس.',
    visit: 'افتح الموقع',
    sakrDesc: 'منصة مركّزة للإدارة والمبيعات لسوبر ماركت صقر في مصر. تجمع الأجزاء المتحركة لمتجر مزدحم في مساحة تشغيل موثوقة واحدة.',
    cleanDesc: 'مساحة تشغيل واضحة لمغسلة كلين نوفا في مصر — تصل بين تدفق الطلبات وإدارة الخدمات والمبيعات في نظام يحافظ على سير اليوم.',
    builtFor: 'معمول لـ',
    role: 'دوري',
    roleValue: 'منتج · Full-stack',
    stack: 'الأدوات',
    sakrTags: ['العمليات', 'منصة مبيعات', 'نظام أعمال'],
    cleanTags: ['تدفق الطلبات', 'الإدارة', 'منصة مبيعات'],
    githubKicker: '٠٣ — اللي موجود على GitHub',
    githubTitle: <>الكود على الرف.<br /><span className="font-display italic text-primary">والتجارب شغّالة.</span></>,
    githubIntro: 'كل المستودعات العامة في مكان واحد: تجارب، شغل جماعي، وأفكار بتكبر واحدة واحدة.',
    githubRepository: 'المستودع',
    githubOpen: 'افتحه على GitHub',
    githubUpdated: 'اتحدّث في',
    githubFork: 'مستودع متفرّع',
    githubProfile: 'شوف حساب GitHub',
    approachKicker: '٠٤ — دماغ الشغل',
    approachTitle: <>نمسك التعقيد<br /><span className="font-display italic text-primary">ونفكّه واحدة واحدة.</span></>,
    approachIntro: 'البرنامج الشاطر مش بيعمل دوشة. بيخلّي كل خطوة بعدها باينة وسهلة.',
    step1: 'نفهم الحكاية من أولها',
    step1Body: 'نسأل، نسمع، ونشوف الشغل ماشي إزاي قبل ما نرسم أول شاشة.',
    step2: 'نرتّب اللي له لازمة',
    step2Body: 'نحوّل الطلبات الكتير لمسار بسيط، وكل زر وشاشة ليهم سبب.',
    step3: 'نسلّم حاجة تعتمد عليها',
    step3Body: 'الشكل يشدّ العين، بس الثبات هو اللي يخلّي المنتج يكسب كل يوم.',
    principles: ['البساطة تكسب', 'حلول تعيش مش ترقيع', 'كل تفصيلة بتفرق'],
    note: 'كلمتين من المكتب',
    quote: 'لما المنتج يبقى واضح، الناس تركز في شغلها مش في البرنامج.',
    contactKicker: '٠٥ — تعالى نتكلم',
    contactTitle: <>عندك فكرة<br /><span className="font-display italic text-primary">نطلعها للنور؟</span></>,
    contactBody: 'لو عندك مشكلة تستاهل حل أو فكرة نفسك تشوفها شغّالة، ابعتلي ونبدأ من الحتة الصح.',
    contactPlaceholder: 'بيانات التواصل',
    contactPlaceholderBody: 'كل طرق التواصل موجودة هنا — اختار الأسهل ليك.',
    phoneLabel: 'اتصل بيا',
    openLink: 'شارك مشروعك',
    footerLine: 'تصميم وتطوير حسين يحيى',
    backTop: 'اطلع لفوق',
    languageLabel: 'English',
    dialectLabel: 'اللهجة',
    egyptian: 'مصرية',
    moroccan: 'مغربية',
    themeLabelLight: 'التبديل للوضع الداكن',
    themeLabelDark: 'التبديل للوضع الفاتح',
  },
} as const;

type ArabicDialectCopy = {
  heroTitle: ReactNode;
  heroBody: string;
  available: string;
  aboutTitle: ReactNode;
  aboutBody: string;
  aboutBody2: string;
  workTitle: ReactNode;
  workIntro: string;
  sakrDesc: string;
  cleanDesc: string;
  approachTitle: ReactNode;
  approachIntro: string;
  step1: string;
  step1Body: string;
  step2: string;
  step2Body: string;
  step3: string;
  step3Body: string;
  principles: readonly string[];
  contactTitle: ReactNode;
  contactBody: string;
};

const dialectCopy: Record<ArabicDialect, ArabicDialectCopy> = {
  egyptian: {
    heroTitle: <>واجهات بتفهم <em>الناس.</em></>,
    heroBody: 'أنا حسين يحيى — مطور ويب وتطبيقات متكامل، بحوّل تفاصيل الشغل اليومية لمنتجات رقمية سهلة، سريعة، وتنجز من غير لف ودوران.',
    available: 'متاح لتعاونات طموحة ومحترمة',
    aboutTitle: <>عملي في شغلي.<br /><span className="text-primary">فضولي في تعلّمي.</span></>,
    aboutBody: 'بحب أقرّب المسافة بين الفكرة والنتيجة اللي الناس تقدر تستخدمها بجد. بدمج فهم المنتج مع هندسة قوية واهتمام بالتفاصيل اللي بتخلّي التجربة مريحة وواضحة.',
    aboutBody2: 'كطالب مصري-مغربي، عندي نظرة واسعة للبرمجيات، لكن رجلي دايماً على الأرض: بفهم احتياجات البيزنس المحلي وببني حلول تشتغل بجد.',
    workTitle: <>شغل<br /><span className="font-display italic text-primary">يفرق.</span></>,
    workIntro: 'مشروعان شغّالان، وكل واحد فيهم معمول عشان يسهّل يوم الناس اللي بتستخدمه — مش مجرد شكل حلو في البورتفوليو.',
    sakrDesc: 'سيستم إدارة ومبيعات لسوبر ماركت صقر في مصر، بيجمع حركة المحل اليومية في طريقة تشغيل أبسط وأوضح.',
    cleanDesc: 'سيستم إدارة وتشغيل ومنصة بيع لمغسلة كلين نوفا في مصر، بتنظّم الطلبات والخدمات والمبيعات في مكان واحد.',
    approachTitle: <>نخلّي المعقّد<br /><span className="font-display italic text-primary">سهل.</span></>,
    approachIntro: 'البرنامج الصح مش بيستعرض نفسه؛ بيخلّي الخطوة اللي بعدها واضحة وطبيعية.',
    step1: 'أفهم المشكلة من أصلها',
    step1Body: 'كل مشروع بيبدأ بسماع الناس، وفهم طريقة شغلهم، والحلول المؤقتة اللي اتعودوا عليها.',
    step2: 'أرتّب الطريق الصح',
    step2Body: 'بحوّل المتطلبات الكتير لتجربة مركّزة، كل شاشة فيها لها هدف واضح.',
    step3: 'أبني حاجة تعيش',
    step3Body: 'الشكل الجميل بيبان، لكن الثبات والاعتمادية هما اللي بيخلّوا المنتج مفيد كل يوم.',
    principles: ['الوضوح أهم من الزحمة', 'الأنظمة قبل الحلول المؤقتة', 'تفاصيل بتوفّر وقت'],
    contactTitle: <>عندك فكرة<br /><span className="font-display italic text-primary">نخلّيها حقيقة؟</span></>,
    contactBody: 'لو عندك فكرة طموحة أو مشكلة تستاهل تتحل، احكي لي عنها ونشوف مع بعض أنسب بداية.',
  },
  moroccan: {
    heroTitle: <>خلي الفكرة<br /><em>تولي خدامة.</em></>,
    heroBody: 'أنا حسين يحيى — مطوّر ويب وتطبيقات، كنحوّل الفوضى ديال الخدمة لمنتجات رقمية خفيفة، مفهومة، وكتخدم من النهار اللول.',
    available: 'مفتوح لشراكات زوينة وبلا تعقيد',
    aboutTitle: <>كنخدم بتركيز.<br /><span className="text-primary">وكنبقى كنقلب.</span></>,
    aboutBody: 'ماشي غير كنكتب الكود. كنقرب للناس اللي غادي يستعملو المنتج، نفهم الخدمة، ومن بعد كنبني تجربة كتحسّها سهلة بلا ما تكون ساذجة.',
    aboutBody2: 'مصري ومغربي، طالب ومطور، كنشوف المشروع من جوج زوايا: واقع البيزنس وروح الويب اللي كتجري.',
    workTitle: <>أفكار<br /><span className="font-display italic text-primary">ولات خدمة.</span></>,
    workIntro: 'جوج مشاريع خدامين فالواقع، مبنيين باش ينقصو العيا ويخلّيو الخدمة دايرة مزيان.',
    sakrDesc: 'سيستم للتسيير والمبيعات ديال سوبر ماركت صقر فمصر، كيجمع حركة المحل كاملة فواجهة واضحة.',
    cleanDesc: 'سيستم للتسيير والتشغيل ومنصة بيع ديال كلين نوفا فمصر، كيرتّب الطلبات والخدمات والمبيعات فبلاصة وحدة.',
    approachTitle: <>نرتّبوها<br /><span className="font-display italic text-primary">حتى تبان سهلة.</span></>,
    approachIntro: 'البرنامج اللي مزيان ما كيتفلسفش عليك. كيعطيك الخطوة الجاية بلا صداع.',
    step1: 'كنفهمو الواقع',
    step1Body: 'كنسمعو للناس، كنشوفو الخدمة، وكنعرفو فين كيتحبس النهار قبل ما نبداو نبنيو.',
    step2: 'كنصفّيو الطريق',
    step2Body: 'كنحوّلو الزحام لمسار واضح، وكل تفصيلة عندها دور وماشي غير زواق.',
    step3: 'كنخليوها ثابتة',
    step3Body: 'الواجهة كتشدّ، ولكن الاعتمادية هي اللي كتخلّي الناس يرجعو للمنتج كل نهار.',
    principles: ['البساطة كتربح', 'نبنيو ماشي نرقّعو', 'التفاصيل كتفرق'],
    contactTitle: <>عندك فكرة<br /><span className="font-display italic text-primary">نطلّعوها للواقع؟</span></>,
    contactBody: 'إلى كانت عندك فكرة ولا مشكل باغي ليه حل، صيفط ليا ونبداو من الزبدة بلا دورات.',
  },
};

function getCopy(language: Language, dialect: ArabicDialect) {
  return language === 'ar' ? { ...copy.ar, ...dialectCopy[dialect] } : copy.en;
}

function Nav({ language, dialect, dark, onLanguage, onDialect, onTheme }: { language: Language; dialect: ArabicDialect; dark: boolean; onLanguage: () => void; onDialect: () => void; onTheme: () => void }) {
  const t = getCopy(language, dialect);
  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-40 border-b border-border/60">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#top" data-testid="link-home" className="group flex items-center gap-3">
          <span className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary bg-card shadow-sm transition-transform duration-300 group-hover:rotate-6"><img src={profileImage} alt="Hussein Yehya" className="h-full w-full object-cover object-top" /></span>
          <span className="hidden text-[11px] font-bold uppercase tracking-[.2em] sm:block">Hussein Yehya</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {t.nav.map((item, index) => (
            <a href={`#${['about', 'work', 'github', 'approach', 'contact'][index]}`} data-testid={`link-nav-${index}`} key={item} className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-muted-foreground transition-colors hover:text-foreground">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onLanguage} data-testid="button-language-toggle" aria-label="Toggle language" className="rounded-full border border-border px-3 py-2 font-mono-custom text-[10px] font-medium uppercase tracking-[.1em] transition-colors hover:border-primary hover:text-primary">{t.languageLabel}</button>
          {language === 'ar' && <button type="button" onClick={onDialect} data-testid="button-dialect-toggle" aria-label={t.dialectLabel} className="rounded-full border border-border px-3 py-2 font-mono-custom text-[10px] font-medium tracking-[.08em] transition-colors hover:border-primary hover:text-primary">{dialect === 'egyptian' ? t.egyptian : t.moroccan}</button>}
          <button type="button" onClick={onTheme} data-testid="button-theme-toggle" aria-label={dark ? t.themeLabelDark : t.themeLabelLight} className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            {dark ? <Sun size={15} strokeWidth={1.8} /> : <Moon size={15} strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  return (
    <section id="top" className="relative mx-auto grid min-h-[720px] max-w-[1240px] items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:pb-24">
      <div className="relative z-10">
        <div className="reveal mb-7 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-muted-foreground">{t.eyebrow}</p>
        </div>
        <h1 data-testid="text-hero-title" className="reveal reveal-delay-1 max-w-[760px] text-[clamp(3.8rem,8vw,7.5rem)] font-extrabold leading-[.91] tracking-[-.075em]">
          {t.heroTitle}
        </h1>
        <p data-testid="text-hero-intro" className="reveal reveal-delay-2 mt-8 max-w-[510px] text-base leading-8 text-muted-foreground sm:text-lg">{t.heroBody}</p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-3">
          <a href="#work" data-testid="link-view-work" className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-xs font-bold text-primary-foreground transition-transform hover:-translate-y-1">
            {t.viewWork}<ArrowDownRight size={15} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" data-testid="link-start-conversation" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-bold transition-colors hover:border-primary hover:text-primary">{t.startTalk}<ArrowUpRight size={14} /></a>
        </div>
        <div className="reveal reveal-delay-4 mt-14 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.12em] text-muted-foreground">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /></span>
          {t.available}
        </div>
      </div>
      <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[470px] lg:ml-auto">
        <div className="absolute -right-4 -top-9 z-10 flex h-24 w-24 rotate-6 flex-col justify-center rounded-full bg-accent p-4 text-center text-[10px] font-bold leading-tight text-accent-foreground shadow-lg sm:-right-8 sm:-top-5">
          <span className="font-mono-custom text-[9px] uppercase tracking-[.1em]">Egyptian</span><span className="font-display text-lg italic">×</span><span className="font-mono-custom text-[9px] uppercase tracking-[.1em]">Moroccan</span>
        </div>
        <div className="portrait-frame relative aspect-[.84] overflow-hidden rounded-[1.5rem] bg-muted">
          <img src={profileImage} alt={t.portraitAlt} data-testid="img-profile-portrait" className="h-full w-full object-cover object-center grayscale-[.12] transition-transform duration-700 hover:scale-[1.03]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/75 to-transparent p-5 pt-24 text-primary-foreground">
            <div><p className="font-display text-xl italic">Hussein Yehya</p><p className="font-mono-custom text-[9px] uppercase tracking-[.14em] opacity-75">developer / builder</p></div>
            <span className="font-mono-custom text-[10px] opacity-75">01 — 04</span>
          </div>
        </div>
        <div className="mt-7 flex items-start justify-between border-t border-border pt-4">
          <span className="font-mono-custom text-[9px] uppercase tracking-[.14em] text-muted-foreground">{t.currently}</span>
          <span className="text-right text-xs font-bold">{t.location}</span>
        </div>
      </div>
      <a href="#about" data-testid="link-scroll-explore" className="absolute bottom-5 left-5 hidden items-center gap-3 font-mono-custom text-[9px] uppercase tracking-[.16em] text-muted-foreground lg:flex sm:left-8"><span className="h-px w-8 bg-border" />{t.scroll}</a>
    </section>
  );
}

function About({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  return (
    <section id="about" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 sm:px-8 lg:py-36">
      <div className="mb-12 flex items-center gap-4"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-primary">{t.aboutKicker}</span><span className="section-rule h-px flex-1" /></div>
      <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
        <h2 data-testid="text-about-title" className="text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[.95] tracking-[-.06em]">{t.aboutTitle}</h2>
        <div className="max-w-[620px]">
          <p data-testid="text-about-body" className="text-xl leading-9">{t.aboutBody}</p>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">{t.aboutBody2}</p>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-5">
            {[['fact-1', t.fact1, t.fact1Sub], ['fact-2', t.fact2, t.fact2Sub], ['fact-3', t.fact3, t.fact3Sub]].map(([id, value, sub]) => <div key={id}><p data-testid={`text-${id}`} className="text-xl font-extrabold tracking-tight">{value}</p><p className="mt-1 text-[10px] leading-4 text-muted-foreground">{sub}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ kind, language, dialect }: { kind: 'sakr' | 'clean'; language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  const sakr = kind === 'sakr';
  const title = sakr ? 'sakrmarket.com' : 'cleannovaeg.com';
  const description = sakr ? t.sakrDesc : t.cleanDesc;
  const tags = sakr ? t.sakrTags : t.cleanTags;
  const url = sakr ? 'https://sakrmarket.com' : 'https://cleannovaeg.com';
  return (
    <article data-testid={`card-project-${kind}`} className={`project-card group relative overflow-hidden rounded-[1.25rem] border border-border bg-card ${sakr ? 'lg:col-span-7' : 'lg:col-span-5 lg:mt-24'}`}>
      <div className={`relative overflow-hidden ${sakr ? 'h-72 sm:h-96' : 'h-64 sm:h-80'}`}>
        <div className={`absolute inset-0 ${sakr ? 'bg-[#252b72]' : 'bg-[#d3a14a]'}`}>
          <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border-[34px] border-primary-foreground/10" />
          <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full border-[1px] border-primary-foreground/20" />
          <div className="absolute left-7 top-7 font-mono-custom text-[10px] uppercase tracking-[.18em] text-primary-foreground/65">{sakr ? 'SYSTEM / 001' : 'SYSTEM / 002'}</div>
          <div className="absolute inset-0 grid place-items-center">
            <div className={`flex items-center gap-3 ${sakr ? 'text-[#f5df9a]' : 'text-[#2b286c]'}`}>
              {sakr ? <Layers3 size={50} strokeWidth={1.1} /> : <Zap size={50} strokeWidth={1.1} />}
              <span className="font-display text-4xl italic sm:text-5xl">{sakr ? 'sakr' : 'clean nova'}</span>
            </div>
          </div>
          <span className="absolute bottom-6 right-7 font-mono-custom text-[10px] text-primary-foreground/65">{sakr ? 'retail / egypt' : 'laundry / egypt'}</span>
        </div>
        <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm"><ArrowUpRight className="project-arrow" size={18} /></div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono-custom text-[9px] uppercase tracking-[.08em] text-muted-foreground">{tag}</span>)}</div>
        <h3 data-testid={`text-project-title-${kind}`} className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 max-w-[580px] text-sm leading-7 text-muted-foreground">{description}</p>
        <div className="mt-7 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-5">
          <div className="grid grid-cols-2 gap-8 text-[10px]"><div><p className="font-mono-custom uppercase tracking-[.12em] text-muted-foreground">{t.builtFor}</p><p className="mt-2 font-bold">{sakr ? 'Sakr supermarket' : 'CleanNova laundry'}</p></div><div><p className="font-mono-custom uppercase tracking-[.12em] text-muted-foreground">{t.role}</p><p className="mt-2 font-bold">{t.roleValue}</p></div></div>
          <a href={url} target="_blank" rel="noreferrer" data-testid={`link-project-${kind}`} className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-foreground">{t.visit}<ExternalLink size={13} /></a>
        </div>
      </div>
    </article>
  );
}

function Work({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  return (
    <section id="work" className="scroll-mt-24 bg-secondary py-24 text-secondary-foreground sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-accent">{t.workKicker}</span><span className="h-px flex-1 bg-secondary-foreground/20" /></div>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_.72fr]">
          <h2 data-testid="text-work-title" className="text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[.88] tracking-[-.07em]">{t.workTitle}</h2>
          <p className="max-w-[340px] pb-1 text-sm leading-7 text-secondary-foreground/65">{t.workIntro}</p>
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-12 lg:items-start"><ProjectCard kind="sakr" language={language} dialect={dialect} /><ProjectCard kind="clean" language={language} dialect={dialect} /></div>
      </div>
    </section>
  );
}

function GitHubArchive({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  const formatUpdated = (date: string) => new Intl.DateTimeFormat(language === 'ar' ? 'ar-EG' : 'en-GB', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));

  return (
    <section id="github" className="scroll-mt-24 border-b border-border bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-primary">{t.githubKicker}</span>
          <span className="section-rule h-px flex-1" />
        </div>
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_.72fr]">
          <h2 className="text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[.88] tracking-[-.07em]">{t.githubTitle}</h2>
          <div className="max-w-[390px]">
            <p className="text-sm leading-7 text-muted-foreground">{t.githubIntro}</p>
            <a href="https://github.com/husseinyehya1" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-foreground">
              <Github size={15} />{t.githubProfile}<ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {githubRepositories.map((repository, index) => (
            <article key={repository.url} data-testid={`card-github-repository-${index}`} className="group flex min-h-56 flex-col justify-between rounded-[1.25rem] border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono-custom text-[10px] uppercase tracking-[.13em] text-muted-foreground">{t.githubRepository} / {String(index + 1).padStart(2, '0')}</span>
                  <Github size={18} className="text-primary" />
                </div>
                <h3 className="mt-9 break-words text-2xl font-extrabold tracking-tight">{repository.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {repository.language && <span className="rounded-full bg-primary/10 px-3 py-1 font-mono-custom text-[9px] uppercase tracking-[.08em] text-primary">{repository.language}</span>}
                  {repository.fork && <span className="rounded-full bg-accent/15 px-3 py-1 font-mono-custom text-[9px] uppercase tracking-[.08em] text-accent-foreground">{t.githubFork}</span>}
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-4">
                <span className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-muted-foreground">{t.githubUpdated} · {formatUpdated(repository.updated)}</span>
                <a href={repository.url} target="_blank" rel="noreferrer" aria-label={`${t.githubOpen}: ${repository.name}`} data-testid={`link-github-repository-${index}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-foreground">{t.githubOpen}<ExternalLink size={13} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  const steps = [[t.step1, t.step1Body], [t.step2, t.step2Body], [t.step3, t.step3Body]];
  return (
    <section id="approach" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 sm:px-8 lg:py-36">
      <div className="mb-12 flex items-center gap-4"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-primary">{t.approachKicker}</span><span className="section-rule h-px flex-1" /></div>
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
        <div><h2 data-testid="text-approach-title" className="text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold leading-[.9] tracking-[-.07em]">{t.approachTitle}</h2><p className="mt-8 max-w-[340px] text-sm leading-7 text-muted-foreground">{t.approachIntro}</p></div>
        <div className="divide-y divide-border border-y border-border">{steps.map(([title, body], index) => <div key={title} className="grid gap-4 py-7 sm:grid-cols-[72px_1fr]"><span className="font-mono-custom text-xs text-primary">0{index + 1}</span><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 max-w-[430px] text-sm leading-7 text-muted-foreground">{body}</p></div></div>)}</div>
      </div>
      <div className="mt-24 grid gap-10 border-t border-border pt-8 lg:grid-cols-[.8fr_1.2fr]">
        <div className="flex items-center gap-3 text-muted-foreground"><Quote size={18} /><span className="font-mono-custom text-[10px] uppercase tracking-[.14em]">{t.note}</span></div>
        <div><p className="font-display text-3xl leading-tight sm:text-4xl">“{t.quote}”</p><div className="mt-8 flex flex-wrap gap-2">{t.principles.map((principle) => <span key={principle} className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-[10px] font-bold"><Check size={12} className="text-primary" />{principle}</span>)}</div></div>
      </div>
    </section>
  );
}

function Contact({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-muted/45 py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-12 flex items-center gap-4"><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-primary">{t.contactKicker}</span><span className="section-rule h-px flex-1" /></div>
        <div className="grid gap-12 lg:grid-cols-[1fr_.72fr] lg:gap-24">
          <div><h2 data-testid="text-contact-title" className="text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[.86] tracking-[-.08em]">{t.contactTitle}</h2><p className="mt-8 max-w-[490px] text-base leading-8 text-muted-foreground">{t.contactBody}</p><div className="mt-8 flex flex-wrap gap-3"><button type="button" onClick={copyLink} data-testid="button-copy-profile-link" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-bold transition-colors hover:border-primary hover:text-primary">{copied ? <Check size={14} /> : <Github size={14} />}{copied ? (language === 'ar' ? 'تم نسخ الرابط' : 'Link copied') : (language === 'ar' ? 'مشاركة الصفحة' : 'Share this page')}</button></div></div>
           <div className="self-end rounded-[1.25rem] border border-border bg-card p-7 sm:p-9"><div className="flex items-center justify-between"><Terminal size={20} className="text-primary" /><span className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-muted-foreground">profiles.txt</span></div><h3 className="mt-10 text-lg font-bold">{language === 'ar' ? 'خلّينا على تواصل' : 'Find Hussein online'}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{language === 'ar' ? 'اختار الطريقة الأسهل ليك، وأنا هرد عليك.' : 'Follow the work and updates through Hussein’s official profiles.'}</p><div className="mt-7 grid gap-2 border-t border-border pt-5"><a href="tel:+201066480958" data-testid="link-phone" className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/20"><span className="inline-flex items-center gap-3"><span aria-hidden="true">☎</span><span><span className="block text-[10px] font-medium uppercase tracking-[.1em]">{t.phoneLabel}</span><span dir="ltr">+20 10 66480958</span></span></span><ArrowUpRight size={14} /></a><a href="https://github.com/husseinyehya1" target="_blank" rel="noreferrer" data-testid="link-social-github" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-bold transition-colors hover:bg-muted hover:text-primary"><span className="inline-flex items-center gap-3"><Github size={16} />GitHub</span><ArrowUpRight size={14} /></a><a href="https://www.facebook.com/hussin.aboslman" target="_blank" rel="noreferrer" data-testid="link-social-facebook" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-bold transition-colors hover:bg-muted hover:text-primary"><span className="inline-flex items-center gap-3"><Facebook size={16} />Facebook</span><ArrowUpRight size={14} /></a><a href="https://www.instagram.com/hussinaboslman/" target="_blank" rel="noreferrer" data-testid="link-social-instagram" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-bold transition-colors hover:bg-muted hover:text-primary"><span className="inline-flex items-center gap-3"><Instagram size={16} />Instagram</span><ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/in/seliman-hussein/" target="_blank" rel="noreferrer" data-testid="link-social-linkedin" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm font-bold transition-colors hover:bg-muted hover:text-primary"><span className="inline-flex items-center gap-3"><Linkedin size={16} />LinkedIn</span><ArrowUpRight size={14} /></a></div></div>
        </div>
      </div>
    </section>
  );
}

function Footer({ language, dialect }: { language: Language; dialect: ArabicDialect }) {
  const t = getCopy(language, dialect);
  return <footer className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p className="font-mono-custom text-[10px] uppercase tracking-[.12em] text-muted-foreground">© {new Date().getFullYear()} · {t.footerLine}</p><a href="#top" data-testid="link-back-top" className="inline-flex items-center gap-2 self-start font-mono-custom text-[10px] uppercase tracking-[.12em] text-muted-foreground transition-colors hover:text-primary sm:self-auto">{t.backTop}<ArrowUpRight size={13} /></a></footer>;
}

function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [dialect, setDialect] = useState<ArabicDialect>('egyptian');
  const [dark, setDark] = useState(false);
  const t = getCopy(language, dialect);
  useEffect(() => {
    const savedTheme = localStorage.getItem('hussein-theme');
    if (savedTheme === 'dark') setDark(true);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('hussein-theme', dark ? 'dark' : 'light');
  }, [dark, language]);
  return (
    <div className={`noise site-shell min-h-[100dvh] ${language === 'ar' ? 'rtl' : ''}`}>
      <Nav language={language} dialect={dialect} dark={dark} onLanguage={() => setLanguage(language === 'en' ? 'ar' : 'en')} onDialect={() => setDialect(dialect === 'egyptian' ? 'moroccan' : 'egyptian')} onTheme={() => setDark(!dark)} />
      <main>
        <Hero language={language} dialect={dialect} />
        <About language={language} dialect={dialect} />
        <Work language={language} dialect={dialect} />
        <GitHubArchive language={language} dialect={dialect} />
        <Approach language={language} dialect={dialect} />
        <Contact language={language} dialect={dialect} />
      </main>
      <Footer language={language} dialect={dialect} />
      <span className="sr-only" data-testid="text-current-language">{t.eyebrow}</span>
    </div>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;