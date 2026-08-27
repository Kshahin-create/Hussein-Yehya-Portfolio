import { ArrowDownRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import leadershipHero from './assets/sarah/leadership-hero.webp';
import leadershipMark from './assets/sarah/leadership-mark.webp';
import meetingRecord from './assets/sarah/meeting-record.webp';
import collaborationEvidence from './assets/sarah/collaboration-evidence.webp';
import './people.css';

type Language = 'en' | 'ar';
type Dialect = 'egyptian' | 'moroccan';

const peopleCopy = {
  en: {
    eyebrow: 'PEOPLE / SARAH SAMEH / 01',
    title: 'Sarah Sameh.\nA note that stayed.',
    description: 'This page keeps a note from Sarah Sameh Hussein, an Edu-Tech teammate, about the small habits that made working together clearer: organization, follow-up, and respect for time.',
    read: "Read Sarah's note",
    back: 'Back to Hussein’s portfolio',
    mark: 'A NOTE FROM SARAH',
    visualNote: 'VISUAL NOTE / 01',
    teamSession: 'A NOTE ON TEAMWORK',
    openRecord: 'OPEN RECORD',
    regularFollowUp: 'REGULAR FOLLOW-UP',
    followUpNote: 'FOLLOW-UP NOTE / 02',
    connectedResult: 'CONNECTED RESULT',
    moreToCome: 'MORE TO COME',
    workingSession: 'WORKING SESSION / 03',
    heroAlt: 'A team gathered around a planning session',
    noteLabel: 'THE NOTE',
    noteTitle: 'A good teammate can make\nthe next step easier.',
    noteBody: 'Sarah’s note is about the parts of teamwork that do not always make noise. A clear meeting, a checked-in task, and a promise kept on time can change how a whole team moves.',
    recordLabel: 'WHAT SHE NOTICED',
    recordTitle: 'Small practices.\nA real difference.',
    recordIntro: 'A short record of the habits Sarah connected with Hussein’s way of working in Edu-Tech.',
    records: [
      ['01', 'CONSISTENT ORGANIZATION', 'Meetings that keep everyone on the same page.', 'Each meeting made the next step easier to see.'],
      ['02', 'PROFESSIONAL COMMITMENT', 'Respecting time gives the work its weight.', 'When a commitment is taken seriously, execution becomes calmer for everyone.'],
      ['03', 'CLOSE FOLLOW-UP', 'Follow-up that keeps details from slipping.', 'A quick check-in can connect each contribution to the team’s shared direction.'],
    ],
    impactLabel: 'WHAT STAYED',
    impactTitle: 'Her note reminded me that impact is often quiet.',
    impactBody: 'Not every useful contribution needs a spotlight. Sometimes it is the person who keeps the agenda clear, notices what is missing, and gives the team a dependable next step.',
    impactPoints: [
      ['A', 'More clarity', 'Priorities and ownership became easier to see.'],
      ['B', 'Steadier delivery', 'Commitment reduced friction and made coordination simpler.'],
      ['C', 'A closer team', 'Everyone could see their effort as part of one direction.'],
    ],
    continueLabel: 'KEEP EXPLORING',
    continueTitle: 'One note in a bigger journey.',
    continueBody: 'This is the first page in a collection of people, teams, and moments that shaped how I learn and build.',
    explore: 'Explore the main portfolio',
    collaborationAlt: 'A team discussing a technical plan together',
    recordAlt: 'A notebook and schedule prepared for a team meeting',
  },
  egyptian: {
    eyebrow: 'ناس / سارة سامح / ٠١',
    title: 'سارة سامح.\nرسالة فضل صداها.',
    description: 'الصفحة دي محتفظة برسالة من سارة سامح حسين، زميلة في فريق Edu-Tech، عن العادات الصغيرة اللي خلّت الشغل بينا أوضح: التنظيم، المتابعة، واحترام الوقت.',
    read: 'اقرأ رسالة سارة',
    back: 'الرجوع لبورتفوليو حسين',
    mark: 'رسالة من سارة',
    visualNote: 'ملاحظة بصرية / ٠١',
    teamSession: 'رسالة عن الشغل مع الفريق',
    openRecord: 'سجل مفتوح',
    regularFollowUp: 'متابعة مستمرة',
    followUpNote: 'ملاحظة متابعة / ٠٢',
    connectedResult: 'أثر متصل',
    moreToCome: 'لسه في حكايات',
    workingSession: 'جلسة عمل / ٠٣',
    heroAlt: 'فريق مجتمع حول جلسة لتخطيط العمل',
    noteLabel: 'الرسالة',
    noteTitle: 'زميل شاطر يسهّل\nالخطوة اللي جاية.',
    noteBody: 'رسالة سارة عن تفاصيل الشغل الجماعي اللي مش دايمًا بتعمل دوشة. اجتماع واضح، ومهمة اتراجع عليها، ووعد اتنفذ في معاده ممكن يغيّروا حركة فريق كامل.',
    recordLabel: 'هي لاحظت إيه',
    recordTitle: 'حاجات بسيطة.\nفرق حقيقي.',
    recordIntro: 'ملخص للحاجات اللي ربطتها سارة بطريقة حسين في الشغل داخل Edu-Tech.',
    records: [
      ['٠١', 'تنظيم مستمر', 'اجتماعات بتخلّي الفريق شايف نفس الصورة.', 'كل اجتماع كان بيخلّي الخطوة الجاية أوضح.'],
      ['٠٢', 'التزام مهني', 'احترام الوقت بيدي الشغل قيمته.', 'لما الالتزام يتاخد بجد، التنفيذ بيبقى أهدى على الكل.'],
      ['٠٣', 'متابعة قريبة', 'متابعة بتخلّي التفاصيل ما تقعش.', 'رسالة سريعة ممكن تربط مجهود كل واحد باتجاه الفريق.'],
    ],
    impactLabel: 'اللي فضل',
    impactTitle: 'رسالتها فكرتني إن الأثر ساعات بيبقى هادي.',
    impactBody: 'مش كل مساهمة مفيدة محتاجة تظهر في الواجهة. ساعات بتكون في الشخص اللي بيخلّي جدول الاجتماع واضح، وياخد باله من اللي ناقص، ويدي الفريق خطوة جاية يقدر يعتمد عليها.',
    impactPoints: [
      ['أ', 'وضوح أكبر', 'الأولويات والمسؤوليات بقت أسهل في الرؤية.'],
      ['ب', 'تنفيذ أهدى', 'الالتزام قلّل التعطيل وخلّى التنسيق أبسط.'],
      ['ج', 'فريق أقرب', 'كل واحد قدر يشوف مجهوده جزء من اتجاه واحد.'],
    ],
    continueLabel: 'كمّل الاستكشاف',
    continueTitle: 'رسالة واحدة في رحلة أكبر.',
    continueBody: 'دي أول صفحة في مجموعة من الناس والفرق واللحظات اللي شكّلت طريقة تعلّمي وبنايا للحاجات.',
    explore: 'شوف البورتفوليو الأساسي',
    collaborationAlt: 'فريق يناقش خطة تقنية معًا',
    recordAlt: 'دفتر وجدول مجهزان لاجتماع فريق',
  },
  moroccan: {
    eyebrow: 'الناس / سارة سامح / ٠١',
    title: 'سارة سامح.\nرسالة بقات.',
    description: 'هاد الصفحة خلات فيها رسالة من سارة سامح حسين، زميلة ففريق Edu-Tech، على العادات الصغيرة اللي خلات الخدمة بيناتنا أوضح: التنظيم، التتبع، واحترام الوقت.',
    read: 'قرا رسالة سارة',
    back: 'رجع لبورتفوليو حسين',
    mark: 'رسالة من سارة',
    visualNote: 'ملاحظة بصرية / ٠١',
    teamSession: 'رسالة على الخدمة مع الفريق',
    openRecord: 'سجل مفتوح',
    regularFollowUp: 'تتبع مستمر',
    followUpNote: 'ملاحظة تتبع / ٠٢',
    connectedResult: 'أثر متواصل',
    moreToCome: 'مازال كاينين حكايات',
    workingSession: 'جلسة خدمة / ٠٣',
    heroAlt: 'فريق مجموع حول جلسة لتخطيط الخدمة',
    noteLabel: 'الرسالة',
    noteTitle: 'الزميل المزيان كيسهّل\nالخطوة اللي جاية.',
    noteBody: 'رسالة سارة كتهضر على تفاصيل الخدمة مع الفريق اللي ما كتديرش ديما الضجة. اجتماع واضح، ومهمة متراجعة، ووعد توفى فوقتو يقدرو يبدلو حركة فريق كامل.',
    recordLabel: 'شنو لاحظات',
    recordTitle: 'حوايج بسيطة.\nفرق باين.',
    recordIntro: 'ملخص للحوايج اللي ربطاتهم سارة بالطريقة ديال حسين فخدمتو وسط Edu-Tech.',
    records: [
      ['٠١', 'تنظيم مستمر', 'اجتماعات كتخلي الفريق كامل شايف نفس الصورة.', 'كل اجتماع كان كيخلي الخطوة الجاية باينة أكثر.'],
      ['٠٢', 'التزام مهني', 'احترام الوقت كيعطي للخدمة قيمتها.', 'ملي الالتزام كيتاخد بجد، التنفيذ كيولي أهدى على الجميع.'],
      ['٠٣', 'تتبع قريب', 'التتبع كيخلي التفاصيل ما تضيعش.', 'رسالة قصيرة تقدر تربط مجهود كل واحد بالاتجاه ديال الفريق.'],
    ],
    impactLabel: 'شنو بقى',
    impactTitle: 'رسالتها فكراتني باللي الأثر كيكون هادئ مرات.',
    impactBody: 'ماشي كل مساهمة نافعة خاصها تكون فالواجهة. مرات كتكون فالشخص اللي كيخلي جدول الاجتماع واضح، كينتبه للي ناقص، وكيعطي الفريق خطوة جاية يقدرو يعتمدو عليها.',
    impactPoints: [
      ['أ', 'وضوح أكثر', 'الأولويات والمسؤوليات ولات باينة بسهولة.'],
      ['ب', 'تنفيذ أهدى', 'الالتزام نقص التعطيل وسهّل التنسيق.'],
      ['ج', 'فريق قراب', 'كل واحد قدر يشوف المجهود ديالو جزء من اتجاه واحد.'],
    ],
    continueLabel: 'كمّل تشوف',
    continueTitle: 'رسالة وحدة فطريق كبير.',
    continueBody: 'هادي أول صفحة فمجموعة ديال الناس والفرق واللحظات اللي شكلات الطريقة اللي كنتعلم وبنبني بها.',
    explore: 'شوف البورتفوليو الأساسي',
    collaborationAlt: 'فريق كيناقش خطة تقنية مع بعضياتو',
    recordAlt: 'دفتر وجدول واجدين لاجتماع الفريق',
  },
} as const;

function getPeopleCopy(lang: Language, dialect: Dialect) {
  return lang === 'en' ? peopleCopy.en : dialect === 'moroccan' ? peopleCopy.moroccan : peopleCopy.egyptian;
}

export function PeopleSpotlight({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const copy = getPeopleCopy(lang, dialect);
  const reduced = useReducedMotion();
  return <motion.section id="people-spotlight" className="people-spotlight" initial={reduced ? false : { opacity: 0, y: 35 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
    <div className="people-spotlight-copy">
      <p className="people-kicker">{copy.continueLabel} / 01</p>
      <h2>{lang === 'en' ? 'People who shaped\nmy path.' : dialect === 'moroccan' ? 'ناس شكلو\nالطريق ديالي.' : 'ناس شكّلوا\nطريقي.'}</h2>
      <p>{lang === 'en' ? 'A growing collection of notes from people and teams who left something useful behind.' : dialect === 'moroccan' ? 'مجموعة كتكبر ديال رسائل من ناس وفرق خلو شي حاجة زوينة ومفيدة فطريقي.' : 'مجموعة بتكبر من رسائل ناس وفرق سابوا حاجة مفيدة في طريقي.'}</p>
      <a className="people-spotlight-link" data-testid="link-people-sarah" href="/people/sarah-sameh">{copy.read}<ArrowUpRight size={16} /></a>
    </div>
    <figure>
      <img src={collaborationEvidence} alt={copy.collaborationAlt} width={1024} height={768} loading="lazy" decoding="async" />
      <figcaption><span>NOTE 01</span><b>Sarah Sameh Hussein</b></figcaption>
    </figure>
  </motion.section>;
}

export default function SarahSamehPage({ lang, dialect }: { lang: Language; dialect: Dialect }) {
  const copy = getPeopleCopy(lang, dialect);
  const reduced = useReducedMotion();
  return <main className="people-page">
    <section className="people-hero">
      <motion.div className="people-hero-copy" initial={reduced ? false : { opacity: 0, x: lang === 'ar' ? 35 : -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }}>
        <p className="people-kicker"><span />{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="people-hero-description">{copy.description}</p>
        <div className="people-actions"><a className="people-button people-button-dark" href="#people-record">{copy.read}<ArrowDownRight size={17} /></a><a className="people-text-link" href="/">{copy.back}<ArrowUpRight size={16} /></a></div>
        <div className="people-status"><i />{copy.mark}</div>
      </motion.div>
      <motion.figure className="people-hero-visual" initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .12 }}>
        <img src={leadershipHero} alt={copy.heroAlt} width={1024} height={576} loading="eager" fetchPriority="high" decoding="async" />
        <figcaption><span>{copy.visualNote}</span><span>{copy.teamSession}</span></figcaption>
        <div className="people-stamp"><img src={leadershipMark} alt="" width={1024} height={1024} /><span>{copy.mark}</span></div>
      </motion.figure>
    </section>

    <section className="people-note people-section-rule" aria-labelledby="people-note-title">
      <div className="people-section-label"><span>01</span><b>{copy.noteLabel}</b><small>{copy.openRecord}</small></div>
      <div className="people-note-grid">
        <h2 id="people-note-title">{copy.noteTitle}</h2>
        <p>{copy.noteBody}</p>
      </div>
    </section>

    <section className="people-record" id="people-record" aria-labelledby="people-record-title">
      <div className="people-record-header">
        <div className="people-section-label people-section-label-light"><span>02</span><b>{copy.recordLabel}</b><small>{copy.regularFollowUp}</small></div>
        <h2 id="people-record-title">{copy.recordTitle}</h2>
        <p>{copy.recordIntro}</p>
      </div>
      <ol className="people-record-list">{copy.records.map(([number, tag, title, body]) => <li key={number}><span className="people-record-number">{number}</span><div><p className="people-record-tag">{tag}</p><h3>{title}</h3><p>{body}</p></div><span className="people-record-state">{lang === 'en' ? 'NOTED' : dialect === 'moroccan' ? 'متسجل' : 'متسجل'}</span></li>)}</ol>
    </section>

    <section className="people-impact people-section-rule" aria-labelledby="people-impact-title">
      <div className="people-impact-layout">
        <figure><img src={meetingRecord} alt={copy.recordAlt} width={768} height={1024} loading="lazy" decoding="async" /><figcaption><span>{copy.followUpNote}</span><b>{copy.impactLabel}</b></figcaption></figure>
        <div>
          <div className="people-section-label"><span>03</span><b>{copy.impactLabel}</b><small>{copy.connectedResult}</small></div>
          <h2 id="people-impact-title">{copy.impactTitle}</h2>
          <p className="people-impact-intro">{copy.impactBody}</p>
          <div className="people-impact-points">{copy.impactPoints.map(([letter, title, body]) => <article key={letter}><span>{letter}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </div>
    </section>

    <section className="people-continue" aria-labelledby="people-continue-title">
      <div><div className="people-section-label"><span>04</span><b>{copy.continueLabel}</b><small>{copy.moreToCome}</small></div><h2 id="people-continue-title">{copy.continueTitle}</h2><p>{copy.continueBody}</p><a className="people-button people-button-teal" href="/">{copy.explore}<ExternalLink size={16} /></a></div>
      <figure><img src={collaborationEvidence} alt={copy.collaborationAlt} width={1024} height={768} loading="lazy" decoding="async" /><figcaption><span>{copy.workingSession}</span><b>{copy.mark}</b></figcaption></figure>
    </section>
  </main>;
}