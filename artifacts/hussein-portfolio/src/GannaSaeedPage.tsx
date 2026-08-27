import { ArrowDownLeft, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import heroEditorial from './assets/ganna/hero-editorial.webp';
import husseinMark from './assets/ganna/hussein-mark.webp';
import teamworkAbstract from './assets/ganna/teamwork-abstract.webp';
import cityVision from './assets/ganna/city-vision.webp';
import madinahPoster from './assets/ganna/madinah-poster.webp';
import teamMeeting from './assets/ganna/team-meeting.webp';
import obourEvent from './assets/ganna/obour-event.webp';
import './ganna.css';

type Language = 'en' | 'ar';
type Dialect = 'egyptian' | 'moroccan';

const gannaCopy = {
  en: {
    brand: 'HUSSEIN YEHYA',
    pageLabel: 'A NOTE FROM GANNA',
    heroTitle: 'A clear idea.\nA present team.\nWork that moves.',
    heroIntro: 'This is not a formal bio. It is a personal note from Ganna Saeed — a way of describing the person I have seen turn a busy room into a team with direction, patience, and a next step.',
    readStory: 'Read the story',
    seeMadinah: 'See Madinah AI',
    heroAlt: 'Editorial composition representing a clear idea becoming action',
    heroCaption: 'IDEA → DIRECTION → ACTION',
    archive: 'HY / ARCHIVE',
    scroll: 'SCROLL TO READ',
    location: 'QALYUBIA / EGYPT',
    aboutLabel: 'HOW HE WORKS',
    aboutTitle: 'When seriousness is quiet,\nbut clear.',
    aboutBody: 'Hussein takes the work seriously without making the room heavy. He listens, organizes the conversation, and keeps bringing it back to a goal everyone can understand. What stands out is not only the result; it is the trust his patience creates while the team gets there.',
    traits: [
      ['01', 'TIME HAS VALUE', 'He treats time as part of the work: a clear plan, focused meetings, and one useful step after another.'],
      ['02', 'THE TEAM COMES FIRST', 'He makes room for people to think, ask, and contribute — so everyone knows where the work is going.'],
      ['03', 'IMPROVEMENT IS A HABIT', 'Finishing is not the last question. He keeps asking how the idea can become clearer and more useful.'],
    ],
    marginLabel: 'A SMALL NOTE',
    marginBody: 'The result is not only finished work. It is a team that leaves the room stronger.',
    momentsLabel: 'MOMENTS THAT SHOWED IT',
    momentsTitle: 'Not words on paper.\nMoments that happened.',
    obourKicker: 'THE EVENT',
    obourTitle: 'Under pressure,\ncalm becomes the first solution.',
    obourBody: 'At an Obour event, every surprise or problem was met with patience instead of panic. That calm was not silence; it gave everyone enough space to think, choose, and keep moving.',
    obourFoot: 'Practical solutions, without extra noise.',
    obourAlt: 'A team event in Obour',
    obourCaption: 'OBOUR EVENT / WORKING IN THE ROOM',
    meetingKicker: 'THE MEETINGS',
    meetingTitle: 'Every gathering has\na reason to improve.',
    meetingBody: 'Our meetings were never just time passing. There was always something to leave with: a decision, a next step, or a better way to continue. That is what gives teamwork a real direction.',
    meetingFoot: 'A clear purpose before the next move.',
    meetingAlt: 'The Madinah AI team in a working meeting',
    meetingCaption: 'TEAM SESSION / IDEAS GROW WITH PEOPLE',
    madinahLabel: 'MADINAH AI / PROJECT NOTE',
    madinahTitle: 'A smarter city,\nservices that feel closer.',
    madinahBody: 'Madinah AI began with Hussein’s vision: a digital city layer that uses AI to make everyday services easier to find, understand, and reach.',
    posterAlt: 'Madinah AI project poster',
    posterCaption: 'VISION DOCUMENT / MADINAH AI',
    ideaLabel: 'THE ORIGINAL IDEA',
    ideaBody: 'Bring everyday services into one clearer, smarter experience.',
    roleLabel: 'THE ROLE',
    roleBody: 'Starting the vision and giving the team a direction to build toward.',
    impactLabel: 'THE IMPACT',
    impactBody: 'A team turning one idea into something with a tangible purpose for people.',
    noteLabel: 'A SHORT NOTE, FROM THE HEART',
    noteTitle: '“Hussein, you are not only\npart of the team; you are\none of the reasons it keeps moving.”',
    noteBody: 'Your ability to manage time, stay patient when something goes wrong, and leave a positive mark wherever you work made working with you feel different. Madinah AI is more than a project that started with your idea; it is proof that a clear vision can bring people together around something bigger.',
    noteBodySecond: 'Thank you for the patience, the seriousness, and for always asking how we can make the next version better.',
    signature: 'FROM GANNA',
    backTop: 'Back to top',
    footerNote: 'BUILT AS A THANK-YOU NOTE',
    footerArchive: 'HY / PERSONAL ARCHIVE',
  },
  egyptian: {
    brand: 'حسين يحيى',
    pageLabel: 'رسالة من جني',
    heroTitle: 'فكرة واضحة.\nفريق حاضر.\nوتنفيذ بيتحرّك.',
    heroIntro: 'دي مش سيرة شغل رسمية؛ دي رسالة شخصية من جني سعيد، بتحكي عن الشخص اللي شافته بيحوّل القعدة الزحمة لفريق عنده اتجاه، وصبر، وخطوة جاية واضحة.',
    readStory: 'اقرأ الحكاية',
    seeMadinah: 'شوف Madinah AI',
    heroAlt: 'تكوين بصري بيعبّر عن فكرة واضحة بتتحول لتنفيذ',
    heroCaption: 'فكرة ← اتجاه ← تنفيذ',
    archive: 'HY / أرشيف',
    scroll: 'انزل واقرأ',
    location: 'القليوبية / مصر',
    aboutLabel: 'طريقة شغله',
    aboutTitle: 'لما الجدية تبقى هادية،\nبس واضحة.',
    aboutBody: 'حسين بياخد الشغل بجدية من غير ما يخلّي القعدة تقيلة. بيسمع، وبينظم الكلام، ودايمًا بيرجّع النقاش لهدف كل الناس فاهمينه. اللي بيفضل مش النتيجة بس؛ كمان الثقة اللي صبره بيعملها وإحنا بنوصل لها.',
    traits: [
      ['٠١', 'وقته له قيمة', 'بيتعامل مع الوقت كجزء من جودة الشغل: خطة واضحة، اجتماعات مركزة، وخطوة مفيدة ورا خطوة.'],
      ['٠٢', 'الفريق عنده الأول', 'بيسيب مساحة للناس تفكر وتسأل وتشارك، عشان كل واحد يبقى عارف الشغل رايح فين.'],
      ['٠٣', 'التطوير عادة', 'إن الحاجة تخلص مش آخر سؤال. دايمًا بيسأل إزاي نخلي الفكرة أوضح وأنفع.'],
    ],
    marginLabel: 'ملاحظة صغيرة',
    marginBody: 'النتيجة مش شغل خلصان وبس؛ دي كمان فريق بيخرج من القعدة أقوى.',
    momentsLabel: 'مواقف وضّحت ده',
    momentsTitle: 'مش كلام على ورق.\nدي مواقف حصلت.',
    obourKicker: 'الفعالية',
    obourTitle: 'وقت الضغط،\nالهدوء بيكون أول حل.',
    obourBody: 'في فعالية العبور، أي مفاجأة أو مشكلة كانت بتتقابل بصبر بدل التوتر. الهدوء هنا ماكانش سكوت؛ كان مساحة للناس تفكر وتختار وتكمّل صح.',
    obourFoot: 'حلول عملية، من غير دوشة زيادة.',
    obourAlt: 'فعالية للفريق في العبور',
    obourCaption: 'فعالية العبور / شغل حقيقي في المكان',
    meetingKicker: 'الاجتماعات',
    meetingTitle: 'كل قعدة ليها\nسبب للتطوير.',
    meetingBody: 'اجتماعاتنا ماكانتْش مجرد وقت بيعدّي. كان دايمًا في حاجة نطلع بيها: قرار، خطوة جاية، أو طريقة أحسن نكمّل بيها. وده اللي بيخلّي الشغل الجماعي له اتجاه بجد.',
    meetingFoot: 'هدف مفهوم قبل أي حركة جديدة.',
    meetingAlt: 'فريق Madinah AI في اجتماع عمل',
    meetingCaption: 'جلسة فريق / الأفكار بتكبر بالناس',
    madinahLabel: 'Madinah AI / ملاحظة على المشروع',
    madinahTitle: 'مدينة أذكى،\nوالخدمة أقرب.',
    madinahBody: 'Madinah AI بدأت برؤية حسين: طبقة رقمية للمدينة بتستخدم الـAI عشان تخلّي الخدمات اليومية أسهل في البحث والفهم والوصول.',
    posterAlt: 'بوستر تعريفي لمشروع Madinah AI',
    posterCaption: 'مستند الرؤية / Madinah AI',
    ideaLabel: 'الفكرة الأصلية',
    ideaBody: 'نجمع خدمات الحياة اليومية في تجربة واحدة أوضح وأذكى.',
    roleLabel: 'الدور',
    roleBody: 'بداية الرؤية وتوجيه الفريق ناحية حاجة نقدر نبنيها.',
    impactLabel: 'الأثر',
    impactBody: 'فريق بيحوّل فكرة واحدة لحاجة ليها هدف ملموس للناس.',
    noteLabel: 'رسالة قصيرة، بس من القلب',
    noteTitle: '«حسين، إنت مش بس\nجزء من الفريق؛ إنت\nمن الأسباب اللي بتخلّيه يكمّل.»',
    noteBody: 'قدرتك على إدارة وقتك، وصبرك وقت أي مشكلة، والأثر الحلو اللي بتسيبه في أي مكان بتشتغل فيه؛ كل ده خلّى الشغل معاك تجربة مختلفة. Madinah AI مش مجرد مشروع بدأ بفكرة منك؛ هي دليل إن الرؤية الواضحة تقدر تجمع فريق وتحرّكه ناحية حاجة أكبر.',
    noteBodySecond: 'شكرًا على صبرك، وجديتك، وعلى إنك دايمًا بتفكر إزاي نخلي النسخة الجاية أحسن.',
    signature: 'من جني',
    backTop: 'للأعلى',
    footerNote: 'اتعملت كرسالة شكر',
    footerArchive: 'HY / أرشيف شخصي',
  },
  moroccan: {
    brand: 'حسين يحيى',
    pageLabel: 'رسالة من جني',
    heroTitle: 'فكرة واضحة.\nفريق حاضر.\nوالخدمة كتتحرك.',
    heroIntro: 'هادي ماشي سيرة مهنية رسمية؛ هادي رسالة شخصية من جني سعيد، كتحكي على الشخص اللي شافت كيحوّل القعدة العامرة لفريق عندو اتجاه، صبر، وخطوة جاية واضحة.',
    readStory: 'قرا الحكاية',
    seeMadinah: 'شوف Madinah AI',
    heroAlt: 'تكوين بصري كيعبر على فكرة واضحة كتولي تنفيذ',
    heroCaption: 'فكرة ← اتجاه ← تنفيذ',
    archive: 'HY / الأرشيف',
    scroll: 'هبط وقرا',
    location: 'القليوبية / مصر',
    aboutLabel: 'طريقة خدمتو',
    aboutTitle: 'ملي الجدية كتكون هادئة،\nولكن واضحة.',
    aboutBody: 'حسين كياخد الخدمة بجدية بلا ما يثقل الجو. كيسمع، كينظم الهضرة، وديما كيرجع النقاش لهدف مفهوم عند الجميع. اللي كيبقى ماشي غير النتيجة؛ حتى الثقة اللي كيخلقها الصبر ديالو وإحنا غادين نوصلو ليها.',
    traits: [
      ['٠١', 'الوقت عندو قيمة', 'كيشوف الوقت جزء من جودة الخدمة: خطة واضحة، اجتماعات مركزة، وخطوة مفيدة مور خطوة.'],
      ['٠٢', 'الفريق قبل كلشي', 'كيخلي بلاصة للناس يفكرو ويسولو ويشاركو، باش كل واحد يعرف فين غادية الخدمة.'],
      ['٠٣', 'التطوير عادة', 'ماشي ملي كتسالي الحاجة كيوقف السؤال. ديما كيسول كيفاش نخليو الفكرة أوضح وأنفع.'],
    ],
    marginLabel: 'ملاحظة صغيرة',
    marginBody: 'النتيجة ماشي غير خدمة سالية؛ حتى فريق كيخرج من القعدة أقوى.',
    momentsLabel: 'مواقف بينات هادشي',
    momentsTitle: 'ماشي كلام فالورق.\nمواقف وقعات بصح.',
    obourKicker: 'الفعالية',
    obourTitle: 'وقت الضغط،\nالهدوء كيكون أول حل.',
    obourBody: 'ففعالية العبور، أي مفاجأة ولا مشكل كان كيتقابل بالصبر بلا توتر. الهدوء هنا ماكانش سكوت؛ كان مساحة للناس يفكرو ويختارو ويكملو مزيان.',
    obourFoot: 'حلول عملية، بلا ضجيج زايد.',
    obourAlt: 'فعالية ديال الفريق فالعبور',
    obourCaption: 'فعالية العبور / خدمة حقيقية فالمكان',
    meetingKicker: 'الاجتماعات',
    meetingTitle: 'كل قعدة عندها\nسبب باش نطورو.',
    meetingBody: 'الاجتماعات ديالنا ماكانتش غير وقت كيدوز. ديما كنا كنخرجو بحاجة: قرار، خطوة جاية، ولا طريقة أحسن نكملو بها. وهادا اللي كيخلي الخدمة مع الفريق عندها اتجاه بصح.',
    meetingFoot: 'هدف مفهوم قبل أي حركة جديدة.',
    meetingAlt: 'فريق Madinah AI فاجتماع ديال الخدمة',
    meetingCaption: 'جلسة ديال الفريق / الأفكار كتكبر بالناس',
    madinahLabel: 'Madinah AI / ملاحظة على المشروع',
    madinahTitle: 'مدينة أذكى،\nوالخدمة أقرب.',
    madinahBody: 'Madinah AI بدات برؤية حسين: طبقة رقمية للمدينة كتستعمل الـAI باش تخلي الخدمات اليومية أسهل فالبحث والفهم والوصول.',
    posterAlt: 'بوستر تعريفي بمشروع Madinah AI',
    posterCaption: 'وثيقة الرؤية / Madinah AI',
    ideaLabel: 'الفكرة الأصلية',
    ideaBody: 'نجمعو خدمات الحياة اليومية فتجربة وحدة أوضح وأذكى.',
    roleLabel: 'الدور',
    roleBody: 'بداية الرؤية وتوجيه الفريق لشي حاجة نقدرو نبنيوها.',
    impactLabel: 'الأثر',
    impactBody: 'فريق كيحوّل فكرة وحدة لحاجة عندها هدف ملموس للناس.',
    noteLabel: 'رسالة قصيرة، ولكن من القلب',
    noteTitle: '«حسين، ماشي غير\nجزء من الفريق؛ نتا\nمن الأسباب اللي كتخليه يكمل.»',
    noteBody: 'القدرة ديالك على تنظيم الوقت، والصبر ديالك ملي كيوقع شي مشكل، والأثر الزوين اللي كتخلي فكل بلاصة كتخدم فيها؛ هادشي كامل خلا الخدمة معاك مختلفة. Madinah AI ماشي غير مشروع بدا بفكرة منك؛ هي دليل باللي الرؤية الواضحة تقدر تجمع فريق وتحركو لشي حاجة أكبر.',
    noteBodySecond: 'شكراً على الصبر والجدية، وعلى أنك ديما كتسول كيفاش نخليو النسخة الجاية أحسن.',
    signature: 'من جني',
    backTop: 'للفوق',
    footerNote: 'تدارت كرسالة شكر',
    footerArchive: 'HY / أرشيف شخصي',
  },
} as const;

function getGannaCopy(lang: Language, dialect: Dialect) {
  return lang === 'en' ? gannaCopy.en : dialect === 'moroccan' ? gannaCopy.moroccan : gannaCopy.egyptian;
}

export default function GannaSaeedPage({ lang, dialect, dark, onLanguage, onDialect, onTheme }: { lang: Language; dialect: Dialect; dark: boolean; onLanguage: () => void; onDialect: () => void; onTheme: () => void }) {
  const copy = getGannaCopy(lang, dialect);
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { setMenuOpen(false); }, [lang, dialect]);
  const reveal = (delay = 0) => reduced ? undefined : { opacity: 1, y: 0, transition: { duration: .65, delay } };
  return <main id="top" className="ganna-page">
    <div className="ganna-grain" aria-hidden="true" />
    <div className="ganna-mobile-menu" id="ganna-mobile-menu" data-open={menuOpen}>
      <a href="#ganna-about" onClick={() => setMenuOpen(false)}>{copy.aboutLabel}</a>
      <a href="#ganna-moments" onClick={() => setMenuOpen(false)}>{copy.momentsLabel}</a>
      <a href="#ganna-madinah" onClick={() => setMenuOpen(false)}>Madinah AI</a>
      <a href="#ganna-note" onClick={() => setMenuOpen(false)}>{copy.noteLabel}</a>
    </div>
    <header className="ganna-local-header">
      <a className="ganna-brand" href="/" aria-label={copy.backTop}><img src={husseinMark} alt="" /><span>{copy.brand}</span></a>
      <nav aria-label={copy.pageLabel}><a href="#ganna-about">{copy.aboutLabel}</a><a href="#ganna-moments">{copy.momentsLabel}</a><a href="#ganna-madinah">Madinah AI</a><a href="#ganna-note">{copy.noteLabel}</a></nav>
      <span className="ganna-year">PORTFOLIO / 2026</span>
      <div className="ganna-header-tools">
        <button type="button" onClick={onLanguage} aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}>{lang === 'en' ? 'ع' : 'EN'}</button>
        {lang === 'ar' && <button type="button" onClick={onDialect} aria-label={dialect === 'egyptian' ? 'Switch to Moroccan Arabic' : 'Switch to Egyptian Arabic'}>{dialect === 'egyptian' ? 'MA' : 'EG'}</button>}
        <button type="button" onClick={onTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
        <button className="ganna-menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="ganna-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>

    <section className="ganna-hero" aria-labelledby="ganna-hero-title">
      <span className="ganna-hero-index">01 / 04</span>
      <motion.div className="ganna-hero-copy" initial={reduced ? false : { opacity: 0, y: 18 }} animate={reveal()}>
        <p className="ganna-eyebrow"><i />{copy.pageLabel}</p>
        <h1 id="ganna-hero-title">{copy.heroTitle}</h1>
        <p className="ganna-hero-intro">{copy.heroIntro}</p>
        <div className="ganna-actions"><a className="ganna-arrow-link" href="#ganna-about">{copy.readStory}<ArrowDownLeft size={17} /></a><a className="ganna-text-link" href="#ganna-madinah">{copy.seeMadinah}<ArrowUpRight size={16} /></a></div>
      </motion.div>
      <motion.figure className="ganna-hero-art" initial={reduced ? false : { opacity: 0, y: 22 }} animate={reveal(.12)}>
        <img src={heroEditorial} alt={copy.heroAlt} width={1600} height={900} loading="eager" fetchPriority="high" decoding="async" />
        <figcaption>{copy.heroCaption}</figcaption>
        <div className="ganna-hero-stamp"><img src={husseinMark} alt="" width={512} height={512} /><small>{copy.archive}</small></div>
      </motion.figure>
      <div className="ganna-hero-footer"><span>{copy.scroll}</span><i /><span>{copy.location}</span></div>
    </section>

    <section className="ganna-about" id="ganna-about" aria-labelledby="ganna-about-title">
      <span className="ganna-side-number" aria-hidden="true">02</span>
      <div className="ganna-about-intro">
        <div className="ganna-section-label"><span>02</span><i /><b>{copy.aboutLabel}</b></div>
        <h2 id="ganna-about-title">{copy.aboutTitle}</h2>
        <p>{copy.aboutBody}</p>
      </div>
      <div className="ganna-traits">{copy.traits.map(([number, title, body]) => <article key={number}><div><span>{number}</span><b>{number === '01' || number === '٠١' ? '◷' : number === '02' || number === '٠٢' ? '◫' : '✦'}</b></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      <aside className="ganna-margin-note"><span>{copy.marginLabel}</span><p>{copy.marginBody}</p></aside>
    </section>

    <section className="ganna-moments" id="ganna-moments" aria-labelledby="ganna-moments-title">
      <div className="ganna-moments-heading"><div className="ganna-section-label"><span>03</span><i /><b>{copy.momentsLabel}</b></div><h2 id="ganna-moments-title">{copy.momentsTitle}</h2></div>
      <motion.article className="ganna-story ganna-story-obour" initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }}>
        <span className="ganna-story-count">01</span>
        <figure className="ganna-photo-frame"><img src={obourEvent} alt={copy.obourAlt} width={1280} height={960} loading="lazy" decoding="async" /><figcaption>{copy.obourCaption}</figcaption></figure>
        <div className="ganna-story-copy"><p className="ganna-story-kicker">{copy.obourKicker}</p><h3>{copy.obourTitle}</h3><p>{copy.obourBody}</p><div className="ganna-story-foot"><b>✓</b><span>{copy.obourFoot}</span></div></div>
      </motion.article>
      <motion.article className="ganna-story ganna-story-meeting" initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }}>
        <span className="ganna-story-count">02</span>
        <div className="ganna-story-copy"><p className="ganna-story-kicker">{copy.meetingKicker}</p><h3>{copy.meetingTitle}</h3><p>{copy.meetingBody}</p><div className="ganna-story-foot"><b>✓</b><span>{copy.meetingFoot}</span></div></div>
        <figure className="ganna-photo-frame ganna-meeting-photo"><img src={teamMeeting} alt={copy.meetingAlt} width={1280} height={720} loading="lazy" decoding="async" /><figcaption>{copy.meetingCaption}</figcaption></figure>
        <div className="ganna-story-texture" aria-hidden="true"><img src={teamworkAbstract} alt="" /></div>
      </motion.article>
    </section>

    <section className="ganna-madinah" id="ganna-madinah" aria-labelledby="ganna-madinah-title">
      <div className="ganna-madinah-canvas" aria-hidden="true"><img src={cityVision} alt="" /></div>
      <div className="ganna-madinah-topline"><span>{copy.madinahLabel}</span><span>ORIGIN → VISION → TEAM</span></div>
      <div className="ganna-madinah-content">
        <div className="ganna-madinah-heading"><p className="ganna-eyebrow"><i />Madinah AI</p><h2 id="ganna-madinah-title">{copy.madinahTitle}</h2><p>{copy.madinahBody}</p></div>
        <figure className="ganna-madinah-poster ganna-photo-frame"><img src={madinahPoster} alt={copy.posterAlt} width={1135} height={1600} loading="lazy" decoding="async" /><figcaption>{copy.posterCaption}</figcaption></figure>
        <div className="ganna-madinah-details"><div><b>{copy.ideaLabel}</b><p>{copy.ideaBody}</p></div><div><b>{copy.roleLabel}</b><p>{copy.roleBody}</p></div><div><b>{copy.impactLabel}</b><p>{copy.impactBody}</p></div></div>
      </div>
      <div className="ganna-madinah-signature"><span>MA</span><i /><p>Saving time.<br />Improving life.</p></div>
    </section>

    <section className="ganna-note" id="ganna-note" aria-labelledby="ganna-note-title">
      <span className="ganna-note-index" aria-hidden="true">04</span>
      <div className="ganna-section-label"><span>04</span><i /><b>{copy.noteLabel}</b></div>
      <div className="ganna-note-layout"><h2 id="ganna-note-title">{copy.noteTitle}</h2><div className="ganna-note-copy"><p>{copy.noteBody}</p><p>{copy.noteBodySecond}</p><div className="ganna-signature"><span>{copy.signature}</span><i /></div></div></div>
      <a className="ganna-back-top" href="#top"><span>{copy.backTop}</span><ArrowUpRight size={15} /></a>
    </section>
    <footer className="ganna-footer"><span>{copy.footerArchive}</span><span>{copy.footerNote}</span><span>© 2026</span></footer>
  </main>;
}