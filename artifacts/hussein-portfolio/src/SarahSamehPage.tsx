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
    title: 'Sarah Sameh.\nA note about the people\nwho make work matter.',
    description: 'Sarah Sameh Hussein is a teammate on the Madinah AI team. This page holds her note about the things she saw in the way I worked: bringing order to busy moments, following through, and making space for the whole team.',
    affiliation: 'FELLOW TEAMMATE / MADINAH AI',
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
    noteTitle: 'The best teamwork leaves\npeople with more room to grow.',
    noteBody: 'Sarah’s message made me think about the kind of teammate I want to keep becoming. Someone who makes a busy moment clearer, keeps a promise visible, and helps the people around him move with confidence.',
    recordLabel: 'WHAT SHE NOTICED',
    recordTitle: 'The details are small.\nThe effect is not.',
    recordIntro: 'A short record of the habits Sarah noticed while we worked together on the Madinah AI team.',
    records: [
      ['01', 'CONSISTENT ORGANIZATION', 'Turning scattered ideas into a clear next step.', 'Good organization does not make a team rigid; it makes room for better ideas.'],
      ['02', 'SHARED COMMITMENT', 'Taking the work — and everyone’s time — seriously.', 'A promise kept on time tells people that their effort matters.'],
      ['03', 'CLOSE FOLLOW-UP', 'Staying close to the details after the meeting.', 'Regular follow-up keeps a good idea moving when the room has gone quiet.'],
    ],
    impactLabel: 'WHAT STAYED',
    impactTitle: 'Her words gave a name to\nwhat I want to keep practicing.',
    impactBody: 'The things that help a team are often simple: a clear plan, a thoughtful check-in, and the patience to bring people along. Sarah’s note made those details feel worth recording.',
    impactPoints: [
      ['A', 'More clarity', 'Busy work became easier to read and act on.'],
      ['B', 'Steadier progress', 'Follow-through made coordination feel lighter.'],
      ['C', 'More room to contribute', 'A clear direction helped every voice find its place.'],
    ],
    continueLabel: 'KEEP EXPLORING',
    continueTitle: 'More people. More lessons.\nMore of the story.',
    continueBody: 'Sarah is the first note in a growing collection of people, teams, and moments that shape how I learn, build, and show up.',
    explore: 'Explore the main portfolio',
    collaborationAlt: 'A team discussing a technical plan together',
    recordAlt: 'A notebook and schedule prepared for a team meeting',
  },
  egyptian: {
    eyebrow: 'ناس / سارة سامح / ٠١',
    title: 'سارة سامح.\nرسالة عن الناس\nاللي بتخلّي الشغل له معنى.',
    description: 'سارة سامح حسين زميلة معايا في فريق عمل Madinah AI. الصفحة دي محتفظة برسالتها عن الحاجات اللي لاحظتها في طريقتي في الشغل: ترتيب اللحظات الزحمة، إني أكمّل اللي بدأته، وإني أسيب مساحة للفريق كله.',
    affiliation: 'زميلة في فريق عمل Madinah AI',
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
    noteTitle: 'أحسن شغل جماعي\nبيفتح للناس مساحة تكبر.',
    noteBody: 'رسالة سارة فكرتني بنوع الزميل اللي نفسي أفضل أكونه: حد يوضّح اللحظة الزحمة، يخلّي الالتزام باين، ويساعد اللي حواليه يتحركوا بثقة.',
    recordLabel: 'هي لاحظت إيه',
    recordTitle: 'التفاصيل صغيرة.\nبس تأثيرها كبير.',
    recordIntro: 'ملخص للحاجات اللي لاحظتها سارة وإحنا شغالين سوا في فريق عمل Madinah AI.',
    records: [
      ['٠١', 'تنظيم مستمر', 'تحويل الأفكار المتلخبطة لخطوة جاية واضحة.', 'التنظيم الكويس مش بيخلّي الفريق جامد؛ بيدّيه مساحة لأفكار أحسن.'],
      ['٠٢', 'التزام مشترك', 'أخذ الشغل ووقت كل واحد بجدية.', 'الوعد اللي بيتنفذ في معاده بيفكّر كل واحد إن مجهوده مهم.'],
      ['٠٣', 'متابعة قريبة', 'الاهتمام بالتفاصيل حتى بعد الاجتماع.', 'المتابعة المستمرة بتخلّي الفكرة الحلوة تكمل طريقها.'],
    ],
    impactLabel: 'اللي فضل',
    impactTitle: 'كلامها سمّى حاجة\nنفسي أفضل أتمرّن عليها.',
    impactBody: 'الحاجات اللي بتساعد الفريق غالبًا بسيطة: خطة واضحة، متابعة فيها اهتمام، وصبر يخلّي الناس كلها ماشية مع بعض. رسالة سارة خلت التفاصيل دي تستاهل تتسجل.',
    impactPoints: [
      ['أ', 'وضوح أكبر', 'الشغل الزحمة بقى أسهل في الفهم والتنفيذ.'],
      ['ب', 'تقدم أهدى', 'الالتزام خلّى التنسيق أخف على الكل.'],
      ['ج', 'مساحة أكبر للمشاركة', 'لما الاتجاه يبقى واضح، كل صوت بيلاقي مكانه.'],
    ],
    continueLabel: 'كمّل الاستكشاف',
    continueTitle: 'ناس أكتر. دروس أكتر.\nوحكاية لسه بتكبر.',
    continueBody: 'سارة هي أول رسالة في مجموعة بتكبر من الناس والفرق واللحظات اللي بتشكّل طريقة تعلّمي وبنايا ووجودي وسط الفريق.',
    explore: 'شوف البورتفوليو الأساسي',
    collaborationAlt: 'فريق يناقش خطة تقنية معًا',
    recordAlt: 'دفتر وجدول مجهزان لاجتماع فريق',
  },
  moroccan: {
    eyebrow: 'الناس / سارة سامح / ٠١',
    title: 'سارة سامح.\nرسالة على الناس\nاللي كيعطيو للخدمة معنى.',
    description: 'سارة سامح حسين زميلة معايا ففريق العمل ديال Madinah AI. هاد الصفحة خلات فيها الرسالة ديالها على الحوايج اللي لاحظات فطريقتي فخدمتي: كنرتب اللحظات المزدحمة، كنتبع اللي بديت، وكنخلي بلاصة للفريق كامل.',
    affiliation: 'زميلة ففريق العمل ديال Madinah AI',
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
    noteTitle: 'الخدمة الزوينة مع الفريق\nكتخلي للناس بلاصة يكبرو.',
    noteBody: 'رسالة سارة فكراتني بنوع الزميل اللي بغيت نبقى نكون: واحد كيوضح اللحظة المزدحمة، كيخلي الالتزام باين، وكيعاون اللي حداو يتحركو بثقة.',
    recordLabel: 'شنو لاحظات',
    recordTitle: 'التفاصيل صغار.\nولكن الأثر كبير.',
    recordIntro: 'ملخص للحوايج اللي لاحظات سارة وإحنا خدامين مجموعين ففريق العمل ديال Madinah AI.',
    records: [
      ['٠١', 'تنظيم مستمر', 'تحويل الأفكار المخلطة لخطوة جاية واضحة.', 'التنظيم المزيان ما كيقيدش الفريق؛ كيعطيه بلاصة لأفكار أحسن.'],
      ['٠٢', 'التزام مشترك', 'ناخدو الخدمة ووقت كل واحد بجدية.', 'الوعد اللي كيتوفى فوقتو كيفكر كل واحد باللي المجهود ديالو مهم.'],
      ['٠٣', 'تتبع قريب', 'نبقاو قريبين من التفاصيل من بعد الاجتماع.', 'التتبع المستمر كيخلي الفكرة الزوينة تكمل طريقها.'],
    ],
    impactLabel: 'شنو بقى',
    impactTitle: 'كلامها عطى اسم لحاجة\nبغيت نبقى نتعلمها.',
    impactBody: 'الحوايج اللي كيساعدو الفريق غالبًا بسيطة: خطة واضحة، تتبع فيه الاهتمام، وصبر كيخلي الناس كاملين ماشيين مع بعضياتهم. رسالة سارة خلات هاد التفاصيل تستاهل تتسجل.',
    impactPoints: [
      ['أ', 'وضوح أكثر', 'الخدمة المزدحمة ولات أسهل فالفهم والتنفيذ.'],
      ['ب', 'تقدم أهدى', 'الالتزام خلى التنسيق أخف على الجميع.'],
      ['ج', 'بلاصة أكبر للمشاركة', 'ملي الاتجاه كيكون واضح، كل صوت كيلقى بلاصتو.'],
    ],
    continueLabel: 'كمّل تشوف',
    continueTitle: 'ناس كثر. دروس كثر.\nوحكاية مازال كتكبر.',
    continueBody: 'سارة هي أول رسالة فمجموعة كتكبر ديال الناس والفرق واللحظات اللي كيشكلو الطريقة اللي كنتعلم وبنبني وبكون بها وسط الفريق.',
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
      <p>{lang === 'en' ? 'A growing collection of notes from people and teams who left something useful behind. Sarah is a teammate on the Madinah AI team.' : dialect === 'moroccan' ? 'مجموعة كتكبر ديال رسائل من ناس وفرق خلو شي حاجة زوينة ومفيدة فطريقي. سارة زميلة معايا ففريق العمل ديال Madinah AI.' : 'مجموعة بتكبر من رسائل ناس وفرق سابوا حاجة مفيدة في طريقي. سارة زميلة معايا في فريق عمل Madinah AI.'}</p>
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
        <p className="people-affiliation"><span />{copy.affiliation}</p>
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