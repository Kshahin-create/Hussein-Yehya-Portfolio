import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, ExternalLink, Facebook, Github, Instagram, Linkedin, Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import profileImage from '@assets/hussein-profile.jpeg';
import madinahStage from '@assets/image_1787524765206.png';
import madinahExtra from '@assets/image_1787524769990.png';
import madinahTalk from '@assets/image_1787524775727.png';
import madinahSide from '@assets/image_1787524800777.png';
import madinahPodium from '@assets/image_1787524804715.png';
import madinahScreen from '@assets/image_1787524808716.png';
import madinahWide from '@assets/image_1787524812715.png';
import madinahClose from '@assets/image_1787525611582.png';
import teamGroup from '@assets/image_1787526879975.png';
import teamPortrait from '@assets/image_1787526886704.png';
import teamDiscussion from '@assets/image_1787526892281.png';
import teamWorkshop from '@assets/image_1787526913873.png';
import teamRoom from '@assets/image_1787526922159.png';
import teamBriefing from '@assets/image_1787526927703.png';
import teamMeet from '@assets/image_1787526933323.png';
import teamVisit from '@assets/image_1787526940727.png';
import greenSpeaking from '@assets/image_1787527265364.png';
import greenWorkshop from '@assets/image_1787527270175.png';
import greenFriends from '@assets/image_1787527275972.png';
import greenTeam from '@assets/image_1787527280769.png';
import postalMeeting from '@assets/image_1787529915109.png';
import postalSession from '@assets/image_1787529925461.png';
import eduTechProtocol from '@assets/image_1787530965625.png';
import benhaVisitGroup from '@assets/image_1787531567164.png';
import benhaVisitLab from '@assets/image_1787531580282.png';
import benhaVisitTour from '@assets/image_1787531597147.png';
import culturalAmbassadors from '@assets/image_1787531861754.png';
import casaPresentation from '@assets/image_1787532146188.png';
import casaMeeting from '@assets/image_1787532368628.png';
import schoolLeadersGroup from '@assets/image_1787532501617.png';
import schoolLeadersWorkshop from '@assets/image_1787532511366.png';
import schoolLeadersTeams from '@assets/image_1787532521745.png';
import schoolLeadersRoom from '@assets/image_1787532530336.png';
import studentOrganizingTeam from '@assets/image_1787532649975.png';
import studentOrganizingAward from '@assets/image_1787532661765.png';
import readingCarnivalGroup from '@assets/image_1787532793304.png';
import readingCarnivalPair from '@assets/image_1787532801556.png';
import readingCarnivalGirls from '@assets/image_1787532807556.png';
import readingCarnivalTeam from '@assets/image_1787532814564.png';
import readingCarnivalFriends from '@assets/image_1787532820660.png';
import readingCarnivalPortrait from '@assets/image_1787532828430.png';
import studentActivitiesAnnual from '@assets/image_1787532974298.png';
import studentActivitiesStage from '@assets/image_1787532995003.png';
import nasaSpaceApps from '@assets/image_1787533150745.png';
import qalyubiaPressExhibition from '@assets/image_1787533308263.png';
import qalyubiaPressTeam from '@assets/image_1787533329979.png';
import nationalYouthStrategyStage from '@assets/image_1787533519440.png';
import nationalYouthStrategyAudience from '@assets/image_1787533525669.png';
import nationalYouthStrategyDelegates from '@assets/image_1787533531892.png';
import knowYourCountryMeeting from '@assets/image_1787533669046.png';
import knowYourCountryEducation from '@assets/image_1787533785572.png';
import knowYourCountryDirectorate from '@assets/image_1787533795897.png';
import knowYourCountryDiscussion from '@assets/image_1787533804685.png';
import knowYourCountryTeam from '@assets/image_1787533811806.png';
import personalPortraitNightOne from '@assets/image_1787534092124.png';
import personalPortraitNightTwo from '@assets/image_1787534120958.png';
import personalPortraitNightThree from '@assets/image_1787534150298.png';
import personalPortraitBeachOne from '@assets/image_1787534191133.png';
import personalPortraitBeachTwo from '@assets/image_1787534202084.png';
import personalPortraitExtraOne from '@assets/image_1787534223555.png';
import personalPortraitExtraTwo from '@assets/image_1787535289029.png';
import personalPortraitExtraThree from '@assets/image_1787535310447.png';

type Language = 'en' | 'ar';
type Dialect = 'egyptian' | 'moroccan';
type Repo = { name: string; language: string | null; url: string; updated: string; fork?: boolean; homepage?: string };
type Achievement = { date: string; title: string; titleEgyptian?: string; titleMoroccan?: string; titleEn?: string; body: string; bodyEgyptian?: string; bodyMoroccan?: string; bodyEn?: string; role: string; roleEgyptian?: string; roleMoroccan?: string; roleEn?: string; location: string; locationEgyptian?: string; locationMoroccan?: string; locationEn?: string; images: string[] };

const repos: Repo[] = [
  { name: 'Tech-Day', language: 'HTML', url: 'https://github.com/husseinyehya1/Tech-Day', updated: '2026-06-29' },
  { name: 'Casaapp', language: 'C++', url: 'https://github.com/husseinyehya1/Casaapp', updated: '2025-12-05', homepage: 'https://casa.study' },
  { name: 'SOT-App', language: 'Dart', url: 'https://github.com/husseinyehya1/SOT-App', updated: '2025-12-05' },
  { name: 'Portfolio', language: 'HTML', url: 'https://github.com/husseinyehya1/Portfolio', updated: '2025-12-04' },
  { name: 'team', language: 'HTML', url: 'https://github.com/husseinyehya1/team', updated: '2025-10-09' },
  { name: 'airscope', language: 'HTML', url: 'https://github.com/husseinyehya1/airscope', updated: '2025-09-23' },
  { name: 'Tech-Adventurers-team', language: 'HTML', url: 'https://github.com/husseinyehya1/Tech-Adventurers-team', updated: '2025-02-05' },
];

const achievements: Achievement[] = [
  {
    date: '2025-06-30',
    title: 'لقاءات دعم مبادرة «اعرف بلدك» داخل مدارس القليوبية',
    titleEgyptian: 'لقاءات دعم مبادرة «اعرف بلدك» داخل مدارس القليوبية',
    titleMoroccan: 'لقاءات دعم مبادرة «اعرف بلدك» فمدارس القليوبية',
    titleEn: 'Meetings to Support the Know Your Country Initiative in Qalyubia Schools',
    body: 'خلال يومين متتاليين، تشرفت بالمشاركة في لقاءين مهمين ضمن خطوات تنفيذ مبادرة «اعرف بلدك» داخل مدارس محافظة القليوبية. كان اللقاء الأول مع وكيل وزارة التربية والتعليم بالقليوبية، لمناقشة تفاصيل المبادرة وطلب التعاون في تنفيذها رسميًا داخل المدارس وتحديد آلية التنسيق مع التوجيه العام للصحافة. ثم شاركت في لقاء مع القيادة العسكرية بمديرية التربية والتعليم، قُدّم خلاله طلب تعاون لتنفيذ ندوات توعوية للطلاب حول الدستور والمواطنة، والأمن المجتمعي، والاقتصاد والتنمية، والعلاقات الدولية، والسياحة والهوية، وملف مصر قبل وبعد 30 يونيو.',
    bodyEgyptian: 'خلال يومين ورا بعض، اتشرفت إني أشارك في لقائين مهمين ضمن خطوات تنفيذ مبادرة «اعرف بلدك» داخل مدارس القليوبية. اللقاء الأول كان مع وكيل وزارة التربية والتعليم بالقليوبية، واتكلمنا فيه عن تفاصيل المبادرة وطلبنا التعاون عشان تتنفذ رسميًا داخل المدارس، وكمان نحدد طريقة التنسيق مع التوجيه العام للصحافة. وبعدها شاركت في لقاء مع القيادة العسكرية بمديرية التربية والتعليم، وقدمنا طلب تعاون لتنفيذ ندوات توعوية للطلاب عن الدستور والمواطنة، والأمن المجتمعي، والاقتصاد والتنمية، والعلاقات الدولية، والسياحة والهوية، وملف مصر قبل وبعد 30 يونيو.',
    bodyMoroccan: 'فجوج أيام متتابعين، تشرفت نشارك فلقاءين مهمين ضمن الخطوات ديال تنفيذ مبادرة «اعرف بلدك» داخل مدارس القليوبية. اللقاء الأول كان مع وكيل وزارة التربية والتعليم فالقليوبية، وناقشنا فيه تفاصيل المبادرة وطلبنا التعاون باش تتنفذ رسميًا فالمدارس، ونحددو طريقة التنسيق مع التوجيه العام للصحافة. من بعد شاركت فلقاء مع القيادة العسكرية فمديرية التربية والتعليم، وقدمنا طلب تعاون لتنظيم ندوات توعوية للطلبة حول الدستور والمواطنة، والأمن المجتمعي، والاقتصاد والتنمية، والعلاقات الدولية، والسياحة والهوية، وملف مصر قبل وبعد 30 يونيو.',
    bodyEn: 'Over two consecutive days, I was honored to take part in two important meetings supporting the implementation of the Know Your Country initiative in Qalyubia schools. The first meeting was with the Undersecretary of the Qalyubia Directorate of Education, where we discussed the initiative’s details, requested cooperation to implement it officially in schools, and explored coordination with the General Press Guidance Department. I then joined a meeting with the military leadership at the Directorate of Education, during which we submitted a cooperation request to organize student awareness seminars on the constitution and citizenship, community security, economics and development, international relations, tourism and identity, and Egypt before and after June 30.',
    role: 'القائد العام لمبادرة «اعرف بلدك» — تنسيق لقاءات التعاون',
    roleEgyptian: 'القائد العام لمبادرة «اعرف بلدك» — تنسيق لقاءات التعاون',
    roleMoroccan: 'القائد العام لمبادرة «اعرف بلدك» — تنسيق لقاءات التعاون',
    roleEn: 'General Leader of the Know Your Country Initiative — cooperation meeting coordinator',
    location: 'مديرية التربية والتعليم بالقليوبية — القليوبية، مصر',
    locationEgyptian: 'مديرية التربية والتعليم بالقليوبية — القليوبية، مصر',
    locationMoroccan: 'مديرية التربية والتعليم بالقليوبية — القليوبية، مصر',
    locationEn: 'Qalyubia Directorate of Education — Qalyubia, Egypt',
    images: [knowYourCountryEducation, knowYourCountryDirectorate, knowYourCountryDiscussion, knowYourCountryTeam],
  },
  {
    date: '2025-07-04',
    title: 'لقاء موسع لدعم مبادرة «اعرف بلدك»',
    titleEgyptian: 'لقاء موسع لدعم مبادرة «اعرف بلدك»',
    titleMoroccan: 'لقاء موسع لدعم مبادرة «اعرف بلدك»',
    titleEn: 'Expanded Meeting to Support the Know Your Country Initiative',
    body: 'انعقد لقاء توعوي مع النائب الدكتور محمد عطية الفيومي، عضو مجلس النواب المصري عن محافظة القليوبية ورئيس مجلس الأمناء والآباء والمعلمين بالمحافظة، لبحث سبل التعاون المشترك في تنفيذ فعاليات هادفة لطلاب مدارس القليوبية. جاء اللقاء في إطار العمل الوطني لمبادرة «اعرف بلدك» لنشر الوعي والانتماء الوطني، وترسيخ الثقافة الدستورية، وتفعيل دور المبادرات الطلابية في المجتمع المحلي. اتفق الحضور على التحضير لمؤتمر موسع خلال الشهر التالي، بمشاركة قيادات تنفيذية وتعليمية وتشريعية وممثلي المجتمع المدني وطلاب من الإدارات التعليمية المختلفة. شارك من جانب المبادرة الأستاذة سلوى إبراهيم، المشرف العام، والأستاذة سحر عدلي، المشرف التربوي العام، والطالب حسين يحيى حسين، القائد العام للمبادرة، والطالب أحمد محمد عبد العليم، نائب القائد العام للشؤون الإدارية والتنظيمية.',
    bodyEgyptian: 'اتعمل لقاء توعوي مع النائب الدكتور محمد عطية الفيومي، عضو مجلس النواب عن القليوبية ورئيس مجلس الأمناء والآباء والمعلمين بالمحافظة، عشان نبحث التعاون في تنفيذ فعاليات هادفة لطلاب مدارس القليوبية. اللقاء جه ضمن شغل مبادرة «اعرف بلدك» على نشر الوعي والانتماء الوطني، وترسيخ الثقافة الدستورية، وتفعيل دور المبادرات الطلابية في المجتمع المحلي. واتفق الحضور على التحضير لمؤتمر موسع خلال الشهر اللي بعده، بمشاركة قيادات تنفيذية وتعليمية وتشريعية وممثلين عن المجتمع المدني وطلاب من الإدارات التعليمية المختلفة. وشارك من المبادرة الأستاذة سلوى إبراهيم، المشرف العام، والأستاذة سحر عدلي، المشرف التربوي العام، والطالب حسين يحيى حسين، القائد العام للمبادرة، والطالب أحمد محمد عبد العليم، نائب القائد العام للشؤون الإدارية والتنظيمية.',
    bodyMoroccan: 'تدار لقاء توعوي مع النائب الدكتور محمد عطية الفيومي، عضو مجلس النواب المصري عن القليوبية ورئيس مجلس الأمناء والآباء والمعلمين فالمحافظة، باش يتناقشو سبل التعاون لتنفيذ فعاليات هادفة لفائدة تلاميذ مدارس القليوبية. جا اللقاء فإطار العمل الوطني ديال مبادرة «اعرف بلدك» لنشر الوعي والانتماء الوطني، وترسيخ الثقافة الدستورية، وتفعيل دور المبادرات الطلابية فالمجتمع المحلي. وتافقو الحاضرين على التحضير لمؤتمر موسع فالشهر اللي من بعد، بمشاركة قيادات تنفيذية وتعليمية وتشريعية وممثلي المجتمع المدني وطلبة من الإدارات التعليمية المختلفة. شاركو من جانب المبادرة الأستاذة سلوى إبراهيم، المشرفة العامة، والأستاذة سحر عدلي، المشرفة التربوية العامة، والطالب حسين يحيى حسين، القائد العام للمبادرة، والطالب أحمد محمد عبد العليم، نائب القائد العام للشؤون الإدارية والتنظيمية.',
    bodyEn: 'An awareness meeting was held with Dr. Mohamed Attia El-Fayoumy, Member of the Egyptian House of Representatives for Qalyubia and Chairman of the Governorate Board of Trustees, Parents, and Teachers, to explore cooperation on meaningful activities for Qalyubia school students. The meeting was part of the Know Your Country initiative’s national work to promote awareness and belonging, strengthen constitutional culture, and activate student initiatives within the local community. The attendees agreed to prepare an expanded conference the following month, with executive, educational, and legislative leaders, civil society representatives, and students from different educational administrations. Representing the initiative were Salwa Ibrahim, General Supervisor; Sahar Adly, General Educational Supervisor; Hussein Yehya Hussein, General Initiative Leader; and Ahmed Mohamed Abdel Aleem, Deputy General Leader for Administration and Organization.',
    role: 'القائد العام لمبادرة «اعرف بلدك»',
    roleEgyptian: 'القائد العام لمبادرة «اعرف بلدك»',
    roleMoroccan: 'القائد العام لمبادرة «اعرف بلدك»',
    roleEn: 'General Leader of the Know Your Country Initiative',
    location: 'مدارس طوخ الخاصة — القليوبية، مصر',
    locationEgyptian: 'مدارس طوخ الخاصة — القليوبية، مصر',
    locationMoroccan: 'مدارس طوخ الخاصة — القليوبية، مصر',
    locationEn: 'Toukh Private Schools — Qalyubia, Egypt',
    images: [knowYourCountryMeeting],
  },
  {
    date: '2025-08-14',
    title: 'حضور مؤتمر الاستراتيجية الوطنية للشباب',
    titleEgyptian: 'حضور مؤتمر الاستراتيجية الوطنية للشباب',
    titleMoroccan: 'الحضور لمؤتمر الاستراتيجية الوطنية للشباب',
    titleEn: 'Attending the National Youth Strategy Conference',
    body: 'على هامش اختتام فعاليات اليوم العالمي للشباب، تشرفت بحضور مؤتمر الاستراتيجية الوطنية للشباب في فندق سانت ريجيس بالعاصمة الإدارية الجديدة، بحضور عدد من السادة الوزراء وممثلين من دول خارجية ومندوب من الأمم المتحدة، وذلك احتفالًا بإطلاق أول استراتيجية وطنية للشباب 2025–2032. أفخر بكوني جزءًا من هذا الحدث الوطني المهم الذي يعكس اهتمام الدولة بالشباب وتمكينهم، ويؤكد دورهم في صناعة مستقبل مصر.',
    bodyEgyptian: 'على هامش ختام فعاليات اليوم العالمي للشباب، اتشرفت بحضور مؤتمر الاستراتيجية الوطنية للشباب في فندق سانت ريجيس بالعاصمة الإدارية الجديدة، بحضور عدد من الوزراء وممثلين من دول خارجية ومندوب من الأمم المتحدة، احتفالًا بإطلاق أول استراتيجية وطنية للشباب 2025–2032. فخور إني كنت جزءًا من الحدث الوطني المهم ده، اللي بيعكس اهتمام الدولة بالشباب وتمكينهم، وبيأكد دورنا في صناعة مستقبل مصر.',
    bodyMoroccan: 'على هامش اختتام فعاليات اليوم العالمي للشباب، تشرفت بالحضور لمؤتمر الاستراتيجية الوطنية للشباب ففندق سانت ريجيس فالعاصمة الإدارية الجديدة، بحضور عدد من السادة الوزراء وممثلين من دول خارجية ومندوب من الأمم المتحدة، احتفالًا بإطلاق أول استراتيجية وطنية للشباب 2025–2032. كنفتخر بكوني جزء من هاد الحدث الوطني المهم، اللي كيعكس اهتمام الدولة بالشباب وتمكينهم، وكيأكد على الدور ديالنا فصناعة مستقبل مصر.',
    bodyEn: 'As part of the closing activities of International Youth Day, I was honored to attend the National Youth Strategy Conference at The St. Regis Hotel in the New Administrative Capital. The conference brought together several ministers, representatives from foreign countries, and a United Nations delegate to celebrate the launch of Egypt’s first National Youth Strategy for 2025–2032. I am proud to have been part of this important national event, which reflects the state’s commitment to youth empowerment and affirms our role in shaping Egypt’s future.',
    role: 'مشارك في مؤتمر إطلاق الاستراتيجية الوطنية للشباب',
    roleEgyptian: 'مشارك في مؤتمر إطلاق الاستراتيجية الوطنية للشباب',
    roleMoroccan: 'مشارك فمؤتمر إطلاق الاستراتيجية الوطنية للشباب',
    roleEn: 'Participant in the National Youth Strategy launch conference',
    location: 'فندق سانت ريجيس — العاصمة الإدارية الجديدة، مصر',
    locationEgyptian: 'فندق سانت ريجيس — العاصمة الإدارية الجديدة، مصر',
    locationMoroccan: 'فندق سانت ريجيس — العاصمة الإدارية الجديدة، مصر',
    locationEn: 'The St. Regis Hotel — New Administrative Capital, Egypt',
    images: [nationalYouthStrategyStage, nationalYouthStrategyAudience, nationalYouthStrategyDelegates],
  },
  {
    date: '2025-09-16',
    title: 'معرض الصحافة والتصوير والكاريكاتير بالقليوبية',
    titleEgyptian: 'معرض الصحافة والتصوير والكاريكاتير بالقليوبية',
    titleMoroccan: 'معرض الصحافة والتصوير والكاريكاتير فالقليوبية',
    titleEn: 'Qalyubia Press, Photography, and Cartoon Exhibition',
    body: 'استقبلت إدارة القناطر الخيرية التعليمية فعاليات تقييم معرض الصحافة والتصوير الصحفي ومسابقة الكاريكاتير المدرسي، بمشاركة متميزة من الطلاب في الصحف الحائطية والمقالات والتقارير الصحفية والرسوم الكاريكاتيرية والمقابلات والتحقيقات والتصميمات الإبداعية. عكست الأعمال الطلابية وعيهم المجتمعي والتربوي ومواهبهم الفنية والكتابية وروح الابتكار والعمل الجماعي. شهدت الفعاليات حضور أولياء الأمور والطلاب ومشرفي النشاط، إلى جانب مشاركة فريق مبادرة «اعرف بلدك»: حسين يحيى، قائد المبادرة، ومحمد فايز، نائب المبادرة، وزياد محمد، رئيس قسم الميديا بالمحافظة. جاء المعرض تحت رعاية وزير التربية والتعليم والتعليم الفني الدكتور محمد أحمد عبد اللطيف رمضان، ومحافظ القليوبية اللواء المهندس أيمن محمد إبراهيم عطية، والدكتورة إيمان حسن، مدير الإدارة المركزية للأنشطة الطلابية، والأستاذ مصطفى عبده، وكيل وزارة التربية والتعليم بالقليوبية، وباستضافة إدارة القناطر الخيرية التعليمية.',
    bodyEgyptian: 'استقبلت إدارة القناطر الخيرية التعليمية تقييم معرض الصحافة والتصوير الصحفي ومسابقة الكاريكاتير المدرسي، بمشاركة مميزة من الطلاب في الصحف الحائطية والمقالات والتقارير والرسوم الكاريكاتيرية والمقابلات والتحقيقات والتصميمات الإبداعية. الأعمال عكست وعي الطلاب ومواهبهم الفنية والكتابية وروح الابتكار والشغل الجماعي. حضر الفعاليات أولياء أمور وطلاب ومشرفو النشاط، وكمان شارك فريق مبادرة «اعرف بلدك»: حسين يحيى، قائد المبادرة، ومحمد فايز، نائب المبادرة، وزياد محمد، رئيس قسم الميديا بالمحافظة. المعرض اتعمل تحت رعاية وزير التربية والتعليم والتعليم الفني الدكتور محمد أحمد عبد اللطيف رمضان، ومحافظ القليوبية اللواء المهندس أيمن محمد إبراهيم عطية، والدكتورة إيمان حسن، مدير الإدارة المركزية للأنشطة الطلابية، والأستاذ مصطفى عبده، وكيل وزارة التربية والتعليم بالقليوبية، وباستضافة إدارة القناطر الخيرية التعليمية.',
    bodyMoroccan: 'استقبلات إدارة القناطر الخيرية التعليمية فعاليات تقييم معرض الصحافة والتصوير الصحفي ومسابقة الكاريكاتير المدرسي، بمشاركة مميزة من الطلبة فالصحف الحائطية والمقالات والتقارير الصحفية والرسومات الكاريكاتيرية والمقابلات والتحقيقات والتصميمات الإبداعية. الأعمال بينات الوعي المجتمعي والتربوي ديال الطلبة، والمواهب الفنية والكتابية وروح الابتكار والخدمة الجماعية. حضرو الفعاليات الآباء والأمهات والطلبة ومشرفو النشاط، وشارك حتى فريق مبادرة «اعرف بلدك»: حسين يحيى، قائد المبادرة، ومحمد فايز، نائب المبادرة، وزياد محمد، رئيس قسم الميديا فالمحافظة. تدار المعرض تحت رعاية وزير التربية والتعليم والتعليم الفني الدكتور محمد أحمد عبد اللطيف رمضان، وعامل القليوبية اللواء المهندس أيمن محمد إبراهيم عطية، والدكتورة إيمان حسن، مديرة الإدارة المركزية للأنشطة الطلابية، والأستاذ مصطفى عبده، وكيل وزارة التربية والتعليم بالقليوبية، وباستضافة إدارة القناطر الخيرية التعليمية.',
    bodyEn: 'The Qanater El Khayreya Educational Administration hosted the evaluation of the Press and Photojournalism Exhibition and the School Cartoon Competition. Students participated with wall newspapers, articles and reports, cartoons, interviews and investigations, and creative designs. Their work reflected social and educational awareness, artistic and writing talent, innovation, and teamwork. Parents, students, and activity supervisors attended, alongside the Know Your Country initiative team: Hussein Yehya, Initiative Leader; Mohamed Fayez, Deputy Leader; and Ziad Mohamed, Governorate Media Department Head. The exhibition was held under the patronage of Dr. Mohamed Ahmed Abdel Latif Ramadan, Minister of Education and Technical Education; Qalyubia Governor Major General Eng. Ayman Mohamed Ibrahim Attia; Dr. Eman Hassan, Director of the Central Administration for Student Activities; and Mustafa Abdo, Undersecretary of the Qalyubia Directorate of Education, and was hosted by the Qanater El Khayreya Educational Administration.',
    role: 'قائد مبادرة «اعرف بلدك» — مشارك في الفعاليات والتغطية الإعلامية',
    roleEgyptian: 'قائد مبادرة «اعرف بلدك» — مشارك في الفعاليات والتغطية الإعلامية',
    roleMoroccan: 'قائد مبادرة «اعرف بلدك» — مشارك فالفعاليات والتغطية الإعلامية',
    roleEn: 'Know Your Country Initiative Leader — event and media coverage participant',
    location: 'إدارة القناطر الخيرية التعليمية — القليوبية، مصر',
    locationEgyptian: 'إدارة القناطر الخيرية التعليمية — القليوبية، مصر',
    locationMoroccan: 'إدارة القناطر الخيرية التعليمية — القليوبية، مصر',
    locationEn: 'Qanater El Khayreya Educational Administration — Qalyubia, Egypt',
    images: [qalyubiaPressExhibition, qalyubiaPressTeam],
  },
  {
    date: '2025-09-19',
    title: 'حضور هاكثون NASA Space Apps Cairo',
    titleEgyptian: 'حضور هاكثون NASA Space Apps Cairo',
    titleMoroccan: 'الحضور لهاكاثون NASA Space Apps Cairo',
    titleEn: 'Attending NASA Space Apps Cairo',
    body: 'حضرت هاكثون NASA Space Apps Cairo في جامعة الجلالة الشرقية، ضمن تجربة جمعت الطلاب والمطورين والمهتمين بالعلوم والتكنولوجيا للعمل على أفكار وحلول مبتكرة مستوحاة من تحديات وكالة ناسا. أتاحت الفعالية فرصة للتعرّف على بيئة الهاكثونات، وتبادل الخبرات مع المشاركين، واستكشاف كيفية توظيف البرمجة والبيانات والعلوم في بناء حلول تخدم المجتمع وتفهم كوكبنا والفضاء من حولنا.',
    bodyEgyptian: 'حضرت هاكثون NASA Space Apps Cairo في جامعة الجلالة الشرقية، في تجربة جمعت طلاب ومطورين وكل المهتمين بالعلوم والتكنولوجيا عشان يشتغلوا على أفكار وحلول مبتكرة مستوحاة من تحديات وكالة ناسا. الفعالية كانت فرصة أتعرف على أجواء الهاكثونات، وأتبادل الخبرات مع المشاركين، وأستكشف إزاي نستخدم البرمجة والبيانات والعلوم في بناء حلول تخدم المجتمع وتساعدنا نفهم كوكبنا والفضاء حوالينا.',
    bodyMoroccan: 'حضرت هاكاثون NASA Space Apps Cairo فجامعة الجلالة الشرقية، فواحد التجربة اللي جمعت الطلبة والمطورين وكل المهتمين بالعلوم والتكنولوجيا باش يخدمو على أفكار وحلول مبتكرة مستوحاة من تحديات وكالة ناسا. كانت الفعالية فرصة باش نتعرف على أجواء الهاكاثونات، ونتبادل التجارب مع المشاركين، ونكتاشف كيفاش نوظفو البرمجة والبيانات والعلوم فبناء حلول كتخدم المجتمع وكتعاوننا نفهمو كوكبنا والفضاء اللي حوالينا.',
    bodyEn: 'I attended NASA Space Apps Cairo at Galala University in the Eastern Region, an experience that brought together students, developers, and science and technology enthusiasts to work on innovative ideas inspired by NASA challenges. The event offered an opportunity to experience a hackathon environment, exchange knowledge with fellow participants, and explore how programming, data, and science can be used to build solutions that serve communities and deepen our understanding of Earth and the space around us.',
    role: 'مشارك في هاكثون NASA Space Apps Cairo',
    roleEgyptian: 'مشارك في هاكثون NASA Space Apps Cairo',
    roleMoroccan: 'مشارك فهاكاثون NASA Space Apps Cairo',
    roleEn: 'Participant in NASA Space Apps Cairo',
    location: 'جامعة الجلالة الشرقية — مصر',
    locationEgyptian: 'جامعة الجلالة الشرقية — مصر',
    locationMoroccan: 'جامعة الجلالة الشرقية — مصر',
    locationEn: 'Galala University, Eastern Region — Egypt',
    images: [nasaSpaceApps],
  },
  {
    date: '2025-10-09',
    title: 'تنظيم اللقاء السنوي للأنشطة الطلابية',
    titleEgyptian: 'تنظيم اللقاء السنوي للأنشطة الطلابية',
    titleMoroccan: 'تنظيم اللقاء السنوي للأنشطة الطلابية',
    titleEn: 'Organizing the Annual Student Activities Meeting',
    body: 'نظّمت الإدارة المركزية للأنشطة الطلابية اللقاء السنوي لمديري عموم الشؤون التنفيذية وموجهي عموم الأنشطة التربوية على مستوى الجمهورية، بهدف توحيد الرؤى وتبادل الخبرات وتعزيز التنسيق بين قطاعات الأنشطة استعدادًا للعام الدراسي 2025/2026. أُقيم اللقاء يومي 30 سبتمبر و1 أكتوبر 2025 بالمدينة الشبابية بأبو قير في الإسكندرية، وتناول تقييم خطة الأنشطة السابقة، والخطة الجديدة، وآليات المتابعة الميدانية، ونماذج المبادرات الطلابية، ودمج القيم الوطنية والمهارات الحياتية في الأنشطة. تولّى فريق SOT — Students Organization Team، التابع للإدارة المركزية للأنشطة الطلابية، التنظيم والإدارة الميدانية للقاء في تجربة نوعية تُعد الأولى من نوعها داخل الوزارة؛ حيث أدار الفريق مراحل التنظيم من التخطيط إلى التنفيذ، بما يعكس قدرة الطلاب على العمل المؤسسي والقيادة والمسؤولية.',
    bodyEgyptian: 'نظّمت الإدارة المركزية للأنشطة الطلابية اللقاء السنوي لمديري عموم الشؤون التنفيذية وموجهي عموم الأنشطة التربوية على مستوى الجمهورية، عشان يوحّدوا الرؤى ويتبادلوا الخبرات وينسّقوا بين قطاعات الأنشطة استعدادًا للعام الدراسي 2025/2026. اللقاء اتعمل يومي 30 سبتمبر و1 أكتوبر 2025 في المدينة الشبابية بأبو قير في الإسكندرية، واتناقش فيه تقييم خطة الأنشطة اللي فاتت، والخطة الجديدة، والمتابعة الميدانية، ونماذج المبادرات الطلابية، ودمج القيم الوطنية والمهارات الحياتية في الأنشطة. فريق SOT — Students Organization Team، التابع للإدارة المركزية للأنشطة الطلابية، تولّى تنظيم اللقاء وإدارته ميدانيًا في تجربة نوعية هي الأولى من نوعها داخل الوزارة؛ والفريق أدار كل مراحل التنظيم من التخطيط لحد التنفيذ، وده عكس قدرة الطلاب على الشغل المؤسسي والقيادة وتحمل المسؤولية.',
    bodyMoroccan: 'نظّمت الإدارة المركزية للأنشطة الطلابية اللقاء السنوي لمديري عموم الشؤون التنفيذية وموجهي عموم الأنشطة التربوية على الصعيد الوطني، بهدف توحيد الرؤى وتبادل التجارب وتقوية التنسيق بين قطاعات الأنشطة استعدادًا للموسم الدراسي 2025/2026. تدار اللقاء يومي 30 شتنبر و1 أكتوبر 2025 فالمدينة الشبابية بأبو قير فالإسكندرية، وتناقشو فيه تقييم خطة الأنشطة السابقة، والخطة الجديدة، وآليات التتبع الميداني، ونماذج المبادرات الطلابية، وإدماج القيم الوطنية والمهارات الحياتية فالأنشطة. تكلف فريق SOT — Students Organization Team، التابع للإدارة المركزية للأنشطة الطلابية، بالتنظيم والتدبير الميداني ديال اللقاء فواحد التجربة النوعية اللي كتعتبر الأولى من نوعها داخل الوزارة؛ بحيث سير الفريق مراحل التنظيم كاملة من التخطيط حتى التنفيذ، وبيّن قدرة الطلبة على الخدمة المؤسساتية والقيادة وتحمل المسؤولية.',
    bodyEn: 'The Central Administration for Student Activities organized its annual meeting for general directors of executive affairs and general supervisors of educational activities from across Egypt. The meeting aimed to align visions, exchange expertise, and strengthen coordination across activity sectors ahead of the 2025/2026 academic year. It took place on September 30 and October 1, 2025, at the Abu Qir Youth City in Alexandria, and covered the previous activities plan, the new plan, field implementation follow-up, successful student initiatives, and the integration of national values and life skills into student activities. The SOT — Students Organization Team, affiliated with the Central Administration for Student Activities, handled the meeting’s organization and field management in a pioneering first-of-its-kind experience within the ministry. The team managed every stage from planning to on-site execution, demonstrating students’ ability to lead institutional work with professionalism and responsibility.',
    role: 'القائد العام لفريق SOT — التنظيم والإدارة الميدانية للقاء',
    roleEgyptian: 'القائد العام لفريق SOT — التنظيم والإدارة الميدانية للقاء',
    roleMoroccan: 'القائد العام لفريق SOT — تنظيم وتدبير اللقاء ميدانيًا',
    roleEn: 'SOT Team General Leader — meeting organization and field management',
    location: 'المدينة الشبابية بأبو قير — الإسكندرية، مصر',
    locationEgyptian: 'المدينة الشبابية بأبو قير — الإسكندرية، مصر',
    locationMoroccan: 'المدينة الشبابية بأبو قير — الإسكندرية، مصر',
    locationEn: 'Abu Qir Youth City — Alexandria, Egypt',
    images: [studentActivitiesAnnual, studentActivitiesStage],
  },
  {
    date: '2025-11-12',
    title: 'فريق SOT في تغطية كرنفال القراءة بالقليوبية',
    titleEgyptian: 'فريق SOT في تغطية كرنفال القراءة بالقليوبية',
    titleMoroccan: 'فريق SOT فالتغطية ديال كرنفال القراءة فالقليوبية',
    titleEn: 'SOT Team covering the Qalyubia Reading Carnival',
    body: 'شارك فريق SOT في التغطية الإعلامية والتنظيمية لكرنفال تحدي القراءة العربي بمحافظة القليوبية، ضمن فعاليات دعم القراءة والثقافة وتشجيع الطلاب على المشاركة والتعبير والإبداع. عمل أعضاء الفريق على توثيق أجواء الكرنفال والتفاعل مع الطلاب والطالبات والمشاركين، والمساهمة في إبراز الفعاليات بصورة منظمة تعكس روح التعاون والعمل الطلابي. مثّلت المشاركة فرصة لتعزيز مهارات الفريق في التغطية الإعلامية والعمل الميداني والتنسيق بين أعضاء الفريق خلال الفعاليات التعليمية والثقافية.',
    bodyEgyptian: 'شارك فريق SOT في التغطية الإعلامية والتنظيمية لكرنفال تحدي القراءة العربي في محافظة القليوبية، ضمن فعاليات دعم القراءة والثقافة وتشجيع الطلاب على المشاركة والتعبير والإبداع. أعضاء الفريق اشتغلوا على توثيق أجواء الكرنفال والتفاعل مع الطلاب والطالبات والمشاركين، والمساهمة في إظهار الفعاليات بشكل منظم يعكس روح التعاون والعمل الطلابي. المشاركة كانت فرصة لتطوير مهارات الفريق في التغطية الإعلامية والشغل الميداني والتنسيق بين أعضاء الفريق أثناء الفعاليات التعليمية والثقافية.',
    bodyMoroccan: 'شارك فريق SOT فالتغطية الإعلامية والتنظيمية ديال كرنفال تحدي القراءة العربي فإقليم القليوبية، ضمن فعاليات دعم القراءة والثقافة وتشجيع الطلبة على المشاركة والتعبير والإبداع. خدم أعضاء الفريق على توثيق أجواء الكرنفال والتفاعل مع الطلبة والطالبات والمشاركين، والمساهمة فإبراز الفعاليات بطريقة منظمة كتعكس روح التعاون والعمل الطلابي. كانت هاد المشاركة فرصة باش يطورو مهاراتهم فالتغطية الإعلامية والخدمة الميدانية والتنسيق بين أعضاء الفريق خلال الفعاليات التعليمية والثقافية.',
    bodyEn: 'The SOT Team took part in the media coverage and field organization of the Arab Reading Challenge carnival in Qalyubia, as part of activities supporting reading, culture, and student participation, expression, and creativity. Team members documented the carnival atmosphere, engaged with students and participants, and helped present the activities in an organized way that reflected collaboration and student-led work. The experience strengthened the team’s skills in media coverage, field operations, and coordination during educational and cultural events.',
    role: 'عضو فريق SOT — مشارك في التغطية الإعلامية والتنظيم الميداني',
    roleEgyptian: 'عضو فريق SOT — مشارك في التغطية الإعلامية والتنظيم الميداني',
    roleMoroccan: 'عضو فريق SOT — مشارك فالتغطية الإعلامية والتنظيم الميداني',
    roleEn: 'SOT Team member — media coverage and field organization participant',
    location: 'مجمع مدارس الشبان المسلمين ببنها — القليوبية، مصر',
    locationEgyptian: 'مجمع مدارس الشبان المسلمين ببنها — القليوبية، مصر',
    locationMoroccan: 'مجمع مدارس الشبان المسلمين ببنها — القليوبية، مصر',
    locationEn: 'Muslim Youth Schools Complex, Benha — Qalyubia, Egypt',
    images: [readingCarnivalGroup, readingCarnivalPair, readingCarnivalGirls, readingCarnivalTeam, readingCarnivalFriends, readingCarnivalPortrait],
  },
  {
    date: '2025-11-23',
    title: 'تدريبات متقدمة لطلاب وطالبات قادة مدارس الجمهورية بالقليوبية',
    titleEgyptian: 'تدريبات متقدمة لطلاب وطالبات قادة مدارس الجمهورية بالقليوبية',
    titleMoroccan: 'تداريب معمقة لطلبة وطالبات قادة مدارس الجمهورية فالقليوبية',
    titleEn: 'Advanced training for Qalyubia’s Republic Schools Leaders',
    body: 'مع طلاب وطالبات محافظة القليوبية، استكملنا مرحلة التدريبات المتعمقة في برنامج قادة مدارس الجمهورية، الذي يهدف إلى إعداد قادة قادرين على إدارة مبادراتهم بثقة وتحقيق تأثير حقيقي في مدارسهم. تناول التدريب أنماط القيادة، وساعد الطلاب على اكتشاف ميولهم القيادية وتعلّم اختيار الأسلوب المناسب لشخصياتهم وطبيعة الفرق التي يعملون معها. كما شمل التدريب التسويق للمبادرات، وكيفية تقديم الأفكار بطريقة جذابة ومقنعة وإيصال صوت الطلاب داخل المدرسة وخارجها. برنامج قادة مدارس الجمهورية هو أول وأكبر برنامج لدعم اتحاد طلاب وطالبات مدارس مصر، وتنّفذه مؤسسة شباب القادة بالشراكة مع يونيسف، وتحت رعاية وزارة التضامن الاجتماعي ووزارة التربية والتعليم والتعليم الفني والمجلس القومي للطفولة والأمومة والمجلس القومي للمرأة، وتحت مظلة المجموعة الوزارية للتنمية البشرية، في إطار برنامج تمكين المرأة المصرية بتمويل من الاتحاد الأوروبي.',
    bodyEgyptian: 'مع طلاب وطالبات محافظة القليوبية، كملنا مرحلة التدريبات المتعمقة في برنامج قادة مدارس الجمهورية، اللي هدفه يجهز قادة قادرين يديروا مبادراتهم بثقة ويحققوا تأثير حقيقي في مدارسهم. اتدربوا على أنماط القيادة، واكتشفوا ميولهم القيادية واتعلموا يختاروا الأسلوب اللي يناسب شخصياتهم وطبيعة الفريق اللي بيشتغلوا معاه. كمان اتدربوا على تسويق المبادرات، وإزاي يعرّفوا الناس بأفكارهم بطريقة جذابة ومقنعة ويوصلوا صوتهم جوه المدرسة وبرهها. برنامج قادة مدارس الجمهورية هو أول وأكبر برنامج لدعم اتحاد طلاب وطالبات مدارس مصر، بتنّفذه مؤسسة شباب القادة بالشراكة مع يونيسف، وتحت رعاية وزارة التضامن الاجتماعي ووزارة التربية والتعليم والتعليم الفني والمجلس القومي للطفولة والأمومة والمجلس القومي للمرأة، وتحت مظلة المجموعة الوزارية للتنمية البشرية، في إطار برنامج تمكين المرأة المصرية بتمويل من الاتحاد الأوروبي.',
    bodyMoroccan: 'مع طلبة وطالبات إقليم القليوبية، كملنا مرحلة التداريب المعمقة فبرنامج قادة مدارس الجمهورية، اللي الهدف ديالو يوجّد قادة قادرين يسيرو المبادرات ديالهم بثقة ويحققو أثر حقيقي فمدارسهم. تدربو على أنماط القيادة، واكتاشفو الميولات القيادية ديالهم وتعلمو كيفاش يختارو الأسلوب اللي كيناسب شخصياتهم وطبيعة الفريق اللي خدامين معاه. وتدربو حتى على التسويق للمبادرات، وكيفاش يعرفو الناس بالأفكار ديالهم بطريقة جذابة ومقنعة ويوصلو صوتهم داخل المدرسة وخارجها. برنامج قادة مدارس الجمهورية هو أول وأكبر برنامج لدعم اتحاد طلبة وطالبات مدارس مصر، كتديرو مؤسسة شباب القادة بشراكة مع يونيسف، وتحت رعاية وزارة التضامن الاجتماعي ووزارة التربية والتعليم والتعليم الفني والمجلس القومي للطفولة والأمومة والمجلس القومي للمرأة، وتحت مظلة المجموعة الوزارية للتنمية البشرية، فإطار برنامج تمكين المرأة المصرية بتمويل من الاتحاد الأوروبي.',
    bodyEn: 'Together with students from Qalyubia, we continued the advanced training phase of the Republic Schools Leaders program, which prepares young leaders to manage their initiatives with confidence and create meaningful impact in their schools. The sessions explored leadership styles, helping students discover their leadership tendencies and learn how to choose an approach that fits their personalities and the teams they work with. They also trained in initiative marketing: presenting ideas in an engaging and persuasive way and making their voices heard inside and outside school. Republic Schools Leaders is Egypt’s first and largest program supporting student unions across Egyptian schools. It is implemented by Leaders of Tomorrow Foundation in partnership with UNICEF, under the patronage of the Ministry of Social Solidarity, the Ministry of Education and Technical Education, the National Council for Childhood and Motherhood, and the National Council for Women, under the umbrella of the Ministerial Group for Human Development and within the Egyptian Women’s Empowerment Program funded by the European Union.',
    role: 'مشارك في التدريبات المتقدمة لبرنامج قادة مدارس الجمهورية',
    roleEgyptian: 'مشارك في التدريبات المتقدمة لبرنامج قادة مدارس الجمهورية',
    roleMoroccan: 'مشارك فالتداريب المعمقة ديال برنامج قادة مدارس الجمهورية',
    roleEn: 'Participant in the advanced Republic Schools Leaders training',
    location: 'مبنى الأنشطة الطلابية بالعجوزة — الجيزة، مصر',
    locationEgyptian: 'مبنى الأنشطة الطلابية بالعجوزة — الجيزة، مصر',
    locationMoroccan: 'مبنى الأنشطة الطلابية بالعجوزة — الجيزة، مصر',
    locationEn: 'Student Activities Building, Agouza — Giza, Egypt',
    images: [schoolLeadersGroup, schoolLeadersWorkshop, schoolLeadersTeams, schoolLeadersRoom],
  },
  {
    date: '2025-12-07',
    title: 'إطلاق منصة CASA للاختبارات الإلكترونية بأيدي طلابية مبتكرة',
    titleEgyptian: 'إطلاق منصة CASA للاختبارات الإلكترونية بأيدي طلابية مبتكرة',
    titleMoroccan: 'إطلاق منصة CASA للاختبارات الإلكترونية بأيادي طلبة مبتكرة',
    titleEn: 'Launching CASA, a student-built electronic examination platform',
    body: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني محمد عبد اللطيف، ومعالي محافظ القليوبية المهندس أيمن عطية، والدكتورة إيمان محمد حسن، رئيس الإدارة المركزية للأنشطة الطلابية، وبتوجيهات الأستاذ مصطفى عبده، مدير مديرية التربية والتعليم بالقليوبية، شهدت المديرية عرضًا تقديميًا لمنصة CASA للاختبارات الإلكترونية، وهي مشروع تكنولوجي رائد ومبتكر بالكامل بأيدي طلاب القليوبية. قدّم العرض الطالب حسين يحيى حسين أحمد، من إدارة بنها التعليمية، وقائد فريق SOT التابع للإدارة المركزية للأنشطة الطلابية، وخريج برنامج قادة مدارس الجمهورية، والمدرب المعتمد من شركة مايكروسوفت العالمية. وتحت إشراف فريق عمل توجيه عام المكتبات بالمديرية، تهدف منصة CASA، التي تعني Central Administrator Students Activities، إلى محاكاة وتطوير منظومة الاختبارات الإلكترونية بمرونة تناسب احتياجات المديريات التعليمية المختلفة. تتيح المنصة إنشاء أقسام متعددة وإدارة امتحانات متنوعة، وتشمل أقسامًا للأرشيف والذكاء الاصطناعي والتقييم والمراجعة والقيادة والإعلام والبرمجة والتدريب، إلى جانب إنشاء عدد غير محدود من الاختبارات ولوحة تحكم لمتابعة بيانات الطلاب وحالة الاختبار والنتائج والوقت المستغرق وتحليل الإجابات. تم تطوير المنصة باستخدام Python عبر Django وFlask، بالإضافة إلى PHP، وتخضع لمرحلة الاختبارات والتجارب العملية تمهيدًا لتعميم الاستفادة منها.',
    bodyEgyptian: 'تحت رعاية وزير التربية والتعليم والتعليم الفني محمد عبد اللطيف، ومحافظ القليوبية المهندس أيمن عطية، والدكتورة إيمان محمد حسن، رئيس الإدارة المركزية للأنشطة الطلابية، وبتوجيهات الأستاذ مصطفى عبده، مدير مديرية التربية والتعليم بالقليوبية، اتعمل عرض تقديمي لمنصة CASA للاختبارات الإلكترونية، وهي مشروع تكنولوجي مبتكر بالكامل بأيدي طلاب القليوبية. قدّم العرض الطالب حسين يحيى حسين أحمد، من إدارة بنها التعليمية، وقائد فريق SOT التابع للإدارة المركزية للأنشطة الطلابية، وخريج برنامج قادة مدارس الجمهورية، والمدرب المعتمد من شركة مايكروسوفت العالمية. وتحت إشراف فريق توجيه عام المكتبات بالمديرية، منصة CASA، أو Central Administrator Students Activities، بتستهدف محاكاة وتطوير منظومة الاختبارات الإلكترونية بشكل مرن يناسب احتياجات المديريات التعليمية المختلفة. المنصة بتسمح بإنشاء أقسام متعددة وإدارة امتحانات متنوعة، وفيها أقسام للأرشيف والذكاء الاصطناعي والتقييم والمراجعة والقيادة والإعلام والبرمجة والتدريب، بالإضافة لإنشاء اختبارات غير محدودة ولوحة تحكم تتابع بيانات الطلاب وحالة الاختبار والنتيجة والوقت وتحلل إجابات كل سؤال. اتطورت المنصة باستخدام Python مع Django وFlask، بالإضافة إلى PHP، وهي حاليًا في مرحلة الاختبارات والتجارب العملية تمهيدًا لتعميم استخدامها.',
    bodyMoroccan: 'تحت رعاية وزير التربية والتعليم والتعليم الفني محمد عبد اللطيف، وعامل القليوبية المهندس أيمن عطية، والدكتورة إيمان محمد حسن، رئيسة الإدارة المركزية للأنشطة الطلابية، وبتوجيهات الأستاذ مصطفى عبده، مدير مديرية التربية والتعليم بالقليوبية، تدار عرض تقديمي لمنصة CASA للاختبارات الإلكترونية، وهي مشروع تكنولوجي مبتكر كامل بأيادي طلبة القليوبية. قدّم العرض الطالب حسين يحيى حسين أحمد من إدارة بنها التعليمية، وقائد فريق SOT التابع للإدارة المركزية للأنشطة الطلابية، وخريج برنامج قادة مدارس الجمهورية، ومدرب معتمد من شركة مايكروسوفت العالمية. وتحت إشراف فريق توجيه عام المكتبات فالمديرية، منصة CASA، اللي كتعني Central Administrator Students Activities، الهدف ديالها هو محاكاة وتطوير منظومة الاختبارات الإلكترونية بمرونة كتوافق احتياجات المديريات التعليمية المختلفة. المنصة كتسمح بإنشاء أقسام متعددة وتدبير امتحانات متنوعة، وفيها أقسام للأرشيف والذكاء الاصطناعي والتقييم والمراجعة والقيادة والإعلام والبرمجة والتدريب، مع إمكانية إنشاء اختبارات بلا حدود ولوحة تحكم كتتبع بيانات الطلبة وحالة الاختبار والنتيجة والوقت وتحلل أجوبة كل سؤال. تطورات المنصة باستعمال Python مع Django وFlask، وزيد عليهم PHP، ودابا كتمر من مرحلة الاختبارات والتجارب العملية استعدادًا لتعميم الاستفادة منها.',
    bodyEn: 'Under the patronage of Minister of Education and Technical Education Mohamed Abdel Latif, Qalyubia Governor Eng. Ayman Attia, and Dr. Eman Mohamed Hassan, Head of the Central Administration for Student Activities, and under the direction of Mustafa Abdo, Director of the Qalyubia Directorate of Education, the directorate hosted a presentation of CASA, an innovative electronic examination platform built entirely by Qalyubia students. The presentation was delivered by Hussein Yehya Hussein Ahmed of the Benha Educational Administration, SOT Team Leader under the Central Administration for Student Activities, a graduate of the Republic Schools Leaders Program, and a Microsoft-certified trainer. Under the supervision of the directorate’s General Libraries team, CASA—Central Administrator Students Activities—aims to simulate and improve the Ministry’s electronic examination system while remaining flexible enough for different educational directorates. The platform supports multiple departments and diverse exams, including archives, artificial intelligence, assessment and review, leadership, media, programming, and training. It also enables unlimited exam creation and provides an admin panel for tracking student data, exam status, final results, time spent, and detailed answer analysis. CASA was developed with Python using Django and Flask, alongside PHP, and is currently undergoing testing and practical trials ahead of wider deployment.',
    role: 'مطور المنصة وقائد فريق SOT — عرض المشروع أمام مديرية التربية والتعليم بالقليوبية',
    roleEgyptian: 'مطور المنصة وقائد فريق SOT — عرض المشروع قدام مديرية التربية والتعليم بالقليوبية',
    roleMoroccan: 'مطور المنصة وقائد فريق SOT — تقديم المشروع قدام مديرية التربية والتعليم بالقليوبية',
    roleEn: 'Platform developer and SOT Team Leader — project presenter',
    location: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEgyptian: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationMoroccan: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEn: 'Qalyubia Directorate of Education — Egypt',
    images: [casaPresentation, casaMeeting],
  },
  {
    date: '2026-02-15',
    title: 'تكريم سفراء الثقافة بالقليوبية وأبطال التغطية الإعلامية',
    titleEgyptian: 'تكريم سفراء الثقافة بالقليوبية وأبطال التغطية الإعلامية',
    titleMoroccan: 'تكريم سفراء الثقافة فالقليوبية وأبطال التغطية الإعلامية',
    titleEn: 'Honoring Qalyubia’s cultural ambassadors and media coverage champions',
    body: 'في احتفالية اتسمت بالفخر والتقدير للجهود التطوعية المخلصة، قام الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، بتكريم نخبة من الطلاب المتميزين الذين شاركوا بفاعلية في التغطية الإعلامية وتنظيم فعاليات جناح وزارة التربية والتعليم، بالتعاون مع مبادرة تحدي القراءة العربي في موسمها العاشر، خلال دورة معرض القاهرة الدولي للكتاب 2026. جاءت هذه المشاركة تحت رعاية معالي وزير التربية والتعليم والتعليم الفني محمد عبد اللطيف، ومعالي محافظ القليوبية المهندس أيمن عطية، وإشراف الدكتورة إيمان حسن، رئيس الإدارة المركزية للأنشطة الطلابية بالوزارة، وبدعم من الأستاذة الدكتورة زينب نور الدين مشهور، مدير الإدارة العامة للمكتبات بوزارة التربية والتعليم. وشهد الحفل الإشادة بالدور المحوري لتوجيه عام المكتبات بالقليوبية وفريق عمله في إبراز قدرات الطلاب وتنظيم وجودهم بجناح الوزارة بجهد تطوعي خالص، عكس وعي شباب المحافظة بأهمية القراءة والثقافة. وكان من بين الطلاب المكرمين حسين يحيى حسين أحمد، ممثلًا لمدرسة مدحت طلعت الرسمية للغات ببنها. وأكد الدكتور ياسر محمود أن ما قدمه الطلاب لم يكن مجرد مهمة دراسية، بل واجبًا وطنيًا لنشر ثقافة القراءة، مشيدًا بقدرتهم على تمثيل المحافظة والوزارة بصورة تليق باسم مصر.',
    bodyEgyptian: 'في احتفالية كلها فخر وتقدير للمجهود التطوعي المخلص، كرّم الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، مجموعة من الطلاب المتميزين اللي شاركوا بفاعلية في التغطية الإعلامية وتنظيم فعاليات جناح وزارة التربية والتعليم، بالتعاون مع مبادرة تحدي القراءة العربي في موسمها العاشر، خلال معرض القاهرة الدولي للكتاب 2026. المشاركة كانت تحت رعاية وزير التربية والتعليم والتعليم الفني محمد عبد اللطيف، ومحافظ القليوبية المهندس أيمن عطية، وإشراف الدكتورة إيمان حسن، رئيس الإدارة المركزية للأنشطة الطلابية بالوزارة، وبدعم من الأستاذة الدكتورة زينب نور الدين مشهور، مدير الإدارة العامة للمكتبات. الحفل أشاد بدور توجيه عام المكتبات بالقليوبية وفريقه في إظهار قدرات الطلاب وتنظيم وجودهم في جناح الوزارة بمجهود تطوعي خالص، عكس وعي شباب المحافظة بأهمية القراءة والثقافة. وكان من ضمن الطلاب المكرمين حسين يحيى حسين أحمد، من مدرسة مدحت طلعت الرسمية للغات ببنها. وأكد الدكتور ياسر محمود إن اللي قدمه الطلاب ماكانش مجرد مهمة دراسية، لكنه كان واجب وطني لنشر ثقافة القراءة وتمثيل المحافظة والوزارة بصورة تليق باسم مصر.',
    bodyMoroccan: 'فاحتفالية عامرة بالفخر والتقدير للمجهود التطوعي الصادق، كرّم الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، مجموعة من الطلبة المتميزين اللي شاركو بفعالية فالتغطية الإعلامية وتنظيم فعاليات جناح وزارة التربية والتعليم، بتعاون مع مبادرة تحدي القراءة العربي فالموسم العاشر، خلال دورة معرض القاهرة الدولي للكتاب 2026. هاد المشاركة كانت تحت رعاية وزير التربية والتعليم والتعليم الفني محمد عبد اللطيف، وعامل القليوبية المهندس أيمن عطية، وتحت إشراف الدكتورة إيمان حسن، رئيسة الإدارة المركزية للأنشطة الطلابية فالوزارة، وبدعم من الأستاذة الدكتورة زينب نور الدين مشهور، مديرة الإدارة العامة للمكتبات. الحفل نوّه بالدور المهم ديال توجيه عام المكتبات فالقليوبية وفريق العمل ديالو فإبراز قدرات الطلبة وتنظيم حضورهم فجناح الوزارة بمجهود تطوعي خالص، اللي بيّن وعي شباب المحافظة بأهمية القراءة والثقافة. وكان من بين الطلبة المكرمين حسين يحيى حسين أحمد من مدرسة مدحت طلعت الرسمية للغات فبنها. وأكد الدكتور ياسر محمود أن اللي قدموه الطلبة ماشي غير مهمة دراسية، بل واجب وطني لنشر ثقافة القراءة وتمثيل المحافظة والوزارة بطريقة كتشرّف اسم مصر.',
    bodyEn: 'In a ceremony celebrating sincere volunteer work, Dr. Yasser Mahmoud, Director of the Qalyubia Directorate of Education, honored a group of outstanding students who actively contributed to media coverage and the organization of the Ministry of Education pavilion in partnership with the Arab Reading Challenge during its tenth season at the 2026 Cairo International Book Fair. The participation took place under the patronage of Minister of Education and Technical Education Mohamed Abdel Latif and Qalyubia Governor Eng. Ayman Attia, under the supervision of Dr. Eman Hassan, Head of the Ministry’s Central Administration for Student Activities, and with support from Prof. Dr. Zeinab Nour El-Din Mashhour, Director General of the Ministry’s Libraries Administration. The ceremony recognized the important role of Qalyubia’s General Libraries Directorate and its team in highlighting students’ abilities and organizing their presence at the ministry pavilion through genuine volunteer work that reflected young people’s awareness of reading and culture. Among the honored students was Hussein Yehya Hussein Ahmed of Medhat Talat Official Language School in Benha. Dr. Yasser Mahmoud emphasized that the students’ contribution was more than an academic task: it was a national duty to spread reading culture and represent Qalyubia and the ministry in a way worthy of Egypt.',
    role: 'طالب مكرم ومشارك في التغطية الإعلامية وتنظيم جناح وزارة التربية والتعليم',
    roleEgyptian: 'طالب مكرم ومشارك في التغطية الإعلامية وتنظيم جناح وزارة التربية والتعليم',
    roleMoroccan: 'طالب مكرم ومشارك فالتغطية الإعلامية وتنظيم جناح وزارة التربية والتعليم',
    roleEn: 'Honored student and participant in media coverage and pavilion organization',
    location: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEgyptian: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationMoroccan: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEn: 'Qalyubia Directorate of Education — Egypt',
    images: [culturalAmbassadors],
  },
  {
    date: '2026-03-10',
    title: 'زيارة الفريق التقني لكلية الحاسبات والذكاء الاصطناعي بجامعة بنها',
    titleEgyptian: 'زيارة الفريق التقني لكلية الحاسبات والذكاء الاصطناعي بجامعة بنها',
    titleMoroccan: 'زيارة الفريق التقني لكلية الحاسبات والذكاء الاصطناعي بجامعة بنها',
    titleEn: 'EDU-TECH visit to the Faculty of Computers and Artificial Intelligence at Benha University',
    body: 'في إطار تنفيذ توجيهات فخامة الرئيس عبد الفتاح السيسي بضرورة الاهتمام بجودة التعليم ومواكبة أحدث ما وصلت إليه تكنولوجيا البرمجة والذكاء الاصطناعي، وتحت رعاية معالي دولة رئيس مجلس الوزراء المصري الدكتور مصطفى مدبولي، ومعالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبد اللطيف، ومعالي وزير التعليم العالي والبحث العلمي الدكتور عبد العزيز قنصوة، والأستاذ ياسر محمود مدير مديرية التربية والتعليم بالقليوبية، والأستاذ الدكتور ناصر الجيزاوي رئيس جامعة بنها، وتحت إشراف موجه عام الحاسب الآلي الدكتورة جيهان محمد، وباستضافة كريمة من الدكتورة إيمان منير، وكيل كلية الحاسبات والذكاء الاصطناعي لشؤون خدمة المجتمع وتنمية البيئة، تم تنظيم زيارة ميدانية للفريق التقني بالقليوبية إلى كلية الحاسبات والذكاء الاصطناعي بجامعة بنها. حظي الفريق بجولة تعريفية متميزة داخل الكلية برفقة الدكتور عبد الحميد الشرقاوي، تعرّف خلالها أعضاء الفريق على أقسام الكلية المختلفة، كما زاروا المعامل والمدرجات واطلعوا على الإمكانات التعليمية والتقنية التي توفرها الكلية لطلابها. ومثّلت الزيارة فرصة مهمة لربط الطلاب بالواقع الأكاديمي والتكنولوجي، وتعزيز وعيهم بالتخصصات الحديثة في مجالات الحاسبات والذكاء الاصطناعي، بما يسهم في تنمية طموحاتهم العلمية ويدعم توجه الدولة نحو بناء جيل مؤهل علميًا وتقنيًا وقادر على المشاركة في مسيرة التحول الرقمي والتنمية المستدامة. كل الشكر والتقدير لكل من أسهم في إنجاح هذه الزيارة، ولكلية الحاسبات والذكاء الاصطناعي بجامعة بنها على حسن الاستقبال والتنظيم.',
    bodyEgyptian: 'في إطار توجيهات فخامة الرئيس عبد الفتاح السيسي بالاهتمام بجودة التعليم ومواكبة أحدث تكنولوجيا البرمجة والذكاء الاصطناعي، وتحت رعاية دولة رئيس مجلس الوزراء الدكتور مصطفى مدبولي، ووزير التربية والتعليم والتعليم الفني الأستاذ محمد عبد اللطيف، ووزير التعليم العالي والبحث العلمي الدكتور عبد العزيز قنصوة، والأستاذ ياسر محمود مدير مديرية التربية والتعليم بالقليوبية، والأستاذ الدكتور ناصر الجيزاوي رئيس جامعة بنها، وتحت إشراف الدكتورة جيهان محمد، موجه عام الحاسب الآلي، وباستضافة الدكتورة إيمان منير، وكيل كلية الحاسبات والذكاء الاصطناعي لشؤون خدمة المجتمع وتنمية البيئة، اتنظمت زيارة ميدانية للفريق التقني بالقليوبية لكلية الحاسبات والذكاء الاصطناعي بجامعة بنها. الفريق عمل جولة تعريفية مميزة داخل الكلية برفقة الدكتور عبد الحميد الشرقاوي، واتعرف على أقسام الكلية المختلفة، وزار المعامل والمدرجات، وشاف الإمكانيات التعليمية والتقنية اللي بتوفرها الكلية لطلابها. الزيارة كانت فرصة مهمة عشان نربط الطلاب بالواقع الأكاديمي والتكنولوجي، ونزود وعيهم بالتخصصات الحديثة في الحاسبات والذكاء الاصطناعي، ونشجع طموحهم العلمي ونجهزهم للمشاركة في التحول الرقمي والتنمية المستدامة. كل الشكر والتقدير لكل اللي ساهم في نجاح الزيارة، ولكلية الحاسبات والذكاء الاصطناعي بجامعة بنها على حسن الاستقبال والتنظيم.',
    bodyMoroccan: 'فإطار توجيهات فخامة الرئيس عبد الفتاح السيسي بالاهتمام بجودة التعليم ومواكبة آخر ما وصلات ليه تكنولوجيا البرمجة والذكاء الاصطناعي، وتحت رعاية رئيس الحكومة المصرية الدكتور مصطفى مدبولي، ووزير التربية والتعليم والتعليم الفني الأستاذ محمد عبد اللطيف، ووزير التعليم العالي والبحث العلمي الدكتور عبد العزيز قنصوة، والأستاذ ياسر محمود مدير مديرية التربية والتعليم بالقليوبية، والأستاذ الدكتور ناصر الجيزاوي رئيس جامعة بنها، وتحت إشراف الدكتورة جيهان محمد، الموجهة العامة للحاسب الآلي، وباستضافة الدكتورة إيمان منير، وكيلة كلية الحاسبات والذكاء الاصطناعي لشؤون خدمة المجتمع وتنمية البيئة، تدار زيارة ميدانية للفريق التقني بالقليوبية لكلية الحاسبات والذكاء الاصطناعي بجامعة بنها. دار الفريق جولة تعريفية مميزة داخل الكلية برفقة الدكتور عبد الحميد الشرقاوي، وتعرفو على الأقسام المختلفة، وزارو المعامل والمدرجات، وطلعو على الإمكانيات التعليمية والتقنية اللي كتوفّرها الكلية للطلبة. هاد الزيارة كانت فرصة مهمة باش نربطو الطلبة بالواقع الأكاديمي والتكنولوجي، ونقويو الوعي ديالهم بالتخصصات الحديثة فمجالات الحاسبات والذكاء الاصطناعي، وندعمو الطموح العلمي ديالهم وتوجه الدولة لبناء جيل مؤهل علميًا وتقنيًا وقادر يساهم فمسيرة التحول الرقمي والتنمية المستدامة. الشكر والتقدير لكل من ساهم فنجاح هاد الزيارة، ولكلية الحاسبات والذكاء الاصطناعي بجامعة بنها على حسن الاستقبال والتنظيم.',
    bodyEn: 'As part of President Abdel Fattah El-Sisi’s direction to prioritize education quality and keep students connected to the latest developments in programming and artificial intelligence, EDU-TECH Qalyubia made a field visit to the Faculty of Computers and Artificial Intelligence at Benha University. The visit was held under the patronage of Prime Minister Dr. Mostafa Madbouly; Minister of Education and Technical Education Mohamed Abdel Latif; Minister of Higher Education and Scientific Research Dr. Abdel Aziz Konsowa; Yasser Mahmoud, Director of the Qalyubia Directorate of Education; and Dr. Nasser El-Gizawy, President of Benha University. It was supervised by Dr. Jehan Mohamed, General Computer Science Supervisor, and graciously hosted by Dr. Eman Mounir, Vice Dean of the faculty for Community Service and Environmental Development. Accompanied by Dr. Abdel Hamid El-Sharqawy, the team toured the faculty, learned about its departments, visited laboratories and lecture halls, and explored the educational and technical resources available to students. The visit connected students with the academic and technology landscape, raised their awareness of modern computer science and AI specializations, and supported their ambitions as part of the country’s digital transformation and sustainable development goals. We are grateful to everyone who contributed to the visit’s success and to the faculty for its warm welcome and excellent organization.',
    role: 'عضو الفريق التقني بالقليوبية — زائر ومشارك في الجولة التعليمية',
    roleEgyptian: 'عضو الفريق التقني بالقليوبية — زائر ومشارك في الجولة التعليمية',
    roleMoroccan: 'عضو الفريق التقني بالقليوبية — زائر ومشارك فالجولة التعليمية',
    roleEn: 'Qalyubia Technical Team member — educational visit participant',
    location: 'كلية الحاسبات والذكاء الاصطناعي — جامعة بنها',
    locationEgyptian: 'كلية الحاسبات والذكاء الاصطناعي — جامعة بنها',
    locationMoroccan: 'كلية الحاسبات والذكاء الاصطناعي — جامعة بنها',
    locationEn: 'Faculty of Computers and Artificial Intelligence — Benha University',
    images: [benhaVisitGroup, benhaVisitLab, benhaVisitTour],
  },
  {
    date: '2026-03-25',
    title: 'بروتوكول تعاون بين الفريق التقني واتحاد طلاب القليوبية',
    titleEgyptian: 'بروتوكول تعاون بين الفريق التقني واتحاد طلاب القليوبية',
    titleMoroccan: 'بروتوكول تعاون بين الفريق التقني واتحاد طلبة القليوبية',
    titleEn: 'Cooperation protocol between EDU-TECH and Qalyubia Students Union',
    body: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبد اللطيف، ومعالي محافظ القليوبية الدكتور حسام الدين عبدالفتاح، وبتوجيهات الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، والأستاذ أشرف محمود والأستاذ مروان غراب، وكيلي مديرية التربية والتعليم بالقليوبية. في إطار دعم التحول الرقمي وتعزيز التكامل بين العمل الطلابي والتنظيمي والعمل التقني والفني، تم إبرام بروتوكول تعاون وتكامل بين اتحاد طلاب محافظة القليوبية وفريق EDU-TECH، بهدف توحيد الجهود وتعظيم الاستفادة من الإمكانات المتاحة لدى الجانبين، بما يسهم في تنفيذ الفعاليات والمبادرات والأنشطة الطلابية والتعليمية بصورة مؤسسية منظمة تجمع بين جودة التخطيط وكفاءة التنفيذ واحترافية الإدارة والتوثيق. يقوم التعاون على شراكة فاعلة بين اتحاد طلاب محافظة القليوبية باعتباره جهة طلابية تنظيمية وميدانية، وفريق EDU-TECH باعتباره كيانًا تقنيًا وفنيًا داعمًا للتحول الرقمي داخل المنظومة التعليمية. ويتولى الاتحاد الجوانب التنظيمية والميدانية والتنسيق مع الجهات المعنية، بينما يتولى فريق EDU-TECH الحلول الرقمية والدعم الفني والتنظيم الإلكتروني والتوثيق الإعلامي والتقني. ووقّع عن اتحاد الطلاب الأستاذ يحيى العمراوي، والأستاذة مرفت، والطالب عمر محمد عيد، وعن فريق EDU-TECH الدكتورة جيهان محمد عبد الجواد، والطالب حسين يحيى حسين، القائد العام للفريق. ويأتي البروتوكول بإشراف عام من الدكتور ياسر محمود، تأكيدًا على أهمية التكامل بين الجهود الطلابية والتنظيمية والدعم التقني والفني.',
    bodyEgyptian: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبد اللطيف، ومعالي محافظ القليوبية الدكتور حسام الدين عبدالفتاح، وبتوجيهات الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، والأستاذ أشرف محمود والأستاذ مروان غراب، وكيلي المديرية. في إطار دعم التحول الرقمي وربط شغل الطلاب والتنظيم بالشغل التقني والفني، اتعمل بروتوكول تعاون وتكامل بين اتحاد طلاب محافظة القليوبية وفريق EDU-TECH، بهدف توحيد الجهود والاستفادة من الإمكانيات المتاحة عند الطرفين، وتنفيذ الفعاليات والمبادرات والأنشطة الطلابية والتعليمية بشكل مؤسسي ومنظم يجمع بين التخطيط الجيد والتنفيذ الكفء والإدارة والتوثيق باحترافية. التعاون قائم على شراكة بين اتحاد الطلاب باعتباره جهة تنظيمية وميدانية، وفريق EDU-TECH باعتباره كيانًا تقنيًا وفنيًا بيدعم التحول الرقمي في التعليم. الاتحاد بيتابع الجوانب التنظيمية والميدانية والتنسيق مع الجهات المعنية، وفريق EDU-TECH بيتولى الحلول الرقمية والدعم الفني والتنظيم الإلكتروني والتوثيق الإعلامي والتقني. وقّع عن اتحاد الطلاب الأستاذ يحيى العمراوي، والأستاذة مرفت، والطالب عمر محمد عيد، وعن فريق EDU-TECH الدكتورة جيهان محمد عبد الجواد، والطالب حسين يحيى حسين، القائد العام للفريق. والبروتوكول تحت إشراف الدكتور ياسر محمود، تأكيدًا على أهمية تكامل شغل الطلاب والتنظيم مع الدعم التقني والفني.',
    bodyMoroccan: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبد اللطيف، ومعالي عامل إقليم القليوبية الدكتور حسام الدين عبدالفتاح، وبتوجيهات الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، والأستاذ أشرف محمود والأستاذ مروان غراب، نائبي المديرية. فإطار دعم التحول الرقمي وتقوية التكامل بين العمل الطلابي والتنظيمي والعمل التقني والفني، تدار بروتوكول تعاون وتكامل بين اتحاد طلبة إقليم القليوبية وفريق EDU-TECH، باش يوحدو الجهود ويستافدو أحسن استفادة من الإمكانيات المتوفرة عند الطرفين، وينظمو الفعاليات والمبادرات والأنشطة الطلابية والتعليمية بطريقة مؤسساتية ومنظمة، فيها تخطيط مزيان وتنفيذ فعّال وإدارة وتوثيق احترافي. هاد التعاون مبني على شراكة بين اتحاد الطلبة كجهة تنظيمية وميدانية، وفريق EDU-TECH ككيان تقني وفني كيدعم التحول الرقمي داخل المنظومة التعليمية. الاتحاد كيتكلف بالجوانب التنظيمية والميدانية والتنسيق مع الجهات المعنية، وفريق EDU-TECH كيتكلف بالحلول الرقمية والدعم التقني والتنظيم الإلكتروني والتوثيق الإعلامي والتقني. وقّع عن اتحاد الطلبة الأستاذ يحيى العمراوي، والأستاذة مرفت، والطالب عمر محمد عيد، وعن فريق EDU-TECH الدكتورة جيهان محمد عبد الجواد، والطالب حسين يحيى حسين، القائد العام للفريق. وهاد البروتوكول تحت الإشراف العام للدكتور ياسر محمود، تأكيدًا على أهمية التكامل بين الجهود الطلابية والتنظيمية والدعم التقني والفني.',
    bodyEn: 'Under the patronage of Mohamed Abdel Latif, Minister of Education and Technical Education, and Qalyubia Governor Dr. Hossam El-Din Abdel Fattah, and under the guidance of Dr. Yasser Mahmoud, Director of the Qalyubia Directorate of Education, and the directorate deputies Ashraf Mahmoud and Marwan Ghorab, a cooperation and integration protocol was signed between the Qalyubia Students Union and EDU-TECH. The protocol supports digital transformation and connects student and organizational work with technical and creative support. Its goal is to unify efforts and make better use of both sides’ capabilities to deliver student and educational events, initiatives, and activities through organized institutional work combining strong planning, efficient execution, and professional management and documentation. The Students Union leads organizational and field coordination, while EDU-TECH provides digital solutions, technical support, electronic organization, and media and technical documentation. The agreement was signed for the Students Union by Yehia El-Emrawy, Ms. Mervat, and student Omar Mohamed Eid; and for EDU-TECH by Dr. Jehan Mohamed Abdelgawad and student Hussein Yehya Hussein, the team’s General Leader. The protocol is generally supervised by Dr. Yasser Mahmoud, reinforcing the importance of integrating student and organizational efforts with technical and creative support.',
    role: 'حسين يحيى حسين — القائد العام لفريق EDU-TECH',
    roleEgyptian: 'حسين يحيى حسين — القائد العام لفريق EDU-TECH',
    roleMoroccan: 'حسين يحيى حسين — القائد العام لفريق EDU-TECH',
    roleEn: 'Hussein Yehya Hussein — EDU-TECH General Team Leader',
    location: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEgyptian: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationMoroccan: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEn: 'Qalyubia Directorate of Education — Egypt',
    images: [eduTechProtocol],
  },
  {
    date: '2026-04-22',
    title: 'خدمات البريد المصري بقت أقرب وأسهل لطلاب القليوبية',
    titleEgyptian: 'خدمات البريد المصري بقت أقرب وأسهل لطلاب القليوبية',
    titleMoroccan: 'خدمات البريد المصري ولات أقرب وأسهل لطلبة القليوبية',
    titleEn: 'Egypt Post services are now closer and easier for Qalyubia students',
    body: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبداللطيف، ورئيس مجلس إدارة الهيئة القومية للبريد السيدة/ داليا عبد الله محمد الباز، وبتوجيهات د/ ياسر محمود – مدير مديرية التربية والتعليم بالقليوبية، ود/ جيهان محمد عبدالجواد – موجه عام الحاسب الآلي. وبحضور: حسين يحيى حسين – قائد الفريق التقني بالقليوبية، والأستاذ محمود فهيم – مدير مراكز الخدمات، والأستاذ سعيد عبد النعيم أبو شريف – مدير بريد بنها الرئيسي، وبلال محمود – مسؤول قسم التقييم والمتابعة، وستيفن بيمن – مسؤول قسم الميديا والتصوير. في إطار التعاون بين مديرية التربية والتعليم بالقليوبية والهيئة القومية للبريد، تم تنفيذ لقاء توعوي لتعريف الطلاب بأهم الخدمات الحديثة اللي بيوفرها البريد المصري لتسهيل حياتهم اليومية بشكل آمن وسريع. ومن أهم الخدمات المقدمة للطلاب والأفراد: دفع مصاريف بيان النجاح من خلال مكاتب البريد، حصريًا بمحافظة القليوبية؛ فيزا Easy Pay من سن 15 سنة للشغل أونلاين والدعاية الرقمية واستقبال وتحويل الفلوس والدفع على المواقع والخدمات الإلكترونية؛ خدمة «وصلها» لشحن واستلام الطرود بسهولة والتعامل ببطاقة الرقم القومي فقط، وهي مثالية للبيع والشراء أونلاين؛ وحساب أو دفتر «سوبر توفير» المتاح للطلاب، مع فتحه لمن هم أقل من 18 سنة بوصاية ولي الأمر، بعائد تنافسي يضاف بشكل دوري ووسيلة آمنة للادخار. هدفنا إن كل طالب يبقى عارف يستخدم الخدمات الرقمية ويوفر وقته ومجهوده بطريقة ذكية. لو مهتم، ابدأ من أقرب مكتب بريد ليك واستفيد بالخدمات دي دلوقتي.',
    bodyEgyptian: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبداللطيف، ورئيس مجلس إدارة الهيئة القومية للبريد السيدة/ داليا عبد الله محمد الباز، وبتوجيهات د/ ياسر محمود – مدير مديرية التربية والتعليم بالقليوبية، ود/ جيهان محمد عبدالجواد – موجه عام الحاسب الآلي. وبحضور: حسين يحيى حسين – قائد الفريق التقني بالقليوبية، والأستاذ محمود فهيم – مدير مراكز الخدمات، والأستاذ سعيد عبد النعيم أبو شريف – مدير بريد بنها الرئيسي، وبلال محمود – مسؤول قسم التقييم والمتابعة، وستيفن بيمن – مسؤول قسم الميديا والتصوير. في إطار التعاون بين مديرية التربية والتعليم بالقليوبية والهيئة القومية للبريد، اتنفذ لقاء توعوي لتعريف الطلاب بأهم الخدمات الحديثة اللي بيوفرها البريد المصري عشان يسهّل حياتهم اليومية بشكل آمن وسريع. ومن أهم الخدمات: دفع مصاريف بيان النجاح من مكاتب البريد، حصريًا في محافظة القليوبية؛ فيزا Easy Pay من سن 15 سنة للشغل أونلاين والدعاية الرقمية واستقبال وتحويل الفلوس والدفع على المواقع والخدمات الإلكترونية؛ خدمة «وصلها» لشحن واستلام الطرود بسهولة والتعامل ببطاقة الرقم القومي بس، وهي مناسبة للبيع والشراء أونلاين؛ وحساب أو دفتر «سوبر توفير» المتاح للطلاب، واللي أقل من 18 سنة يفتحه بوصاية ولي الأمر، بعائد تنافسي بيتضاف بشكل دوري ووسيلة آمنة للادخار. هدفنا إن كل طالب يعرف يستخدم الخدمات الرقمية ويوفر وقته ومجهوده بطريقة ذكية. لو مهتم، ابدأ من أقرب مكتب بريد ليك واستفيد بالخدمات دي دلوقتي.',
    bodyMoroccan: 'تحت رعاية معالي وزير التربية والتعليم والتعليم الفني الأستاذ محمد عبداللطيف، ورئيسة مجلس إدارة الهيئة القومية للبريد السيدة داليا عبد الله محمد الباز، وبتوجيهات الدكتور ياسر محمود، مدير مديرية التربية والتعليم بالقليوبية، والدكتورة جيهان محمد عبدالجواد، الموجهة العامة للحاسب الآلي. وبحضور حسين يحيى حسين، قائد الفريق التقني بالقليوبية، والأستاذ محمود فهيم، مدير مراكز الخدمات، والأستاذ سعيد عبد النعيم أبو شريف، مدير بريد بنها الرئيسي، وبلال محمود، مسؤول التقييم والتتبع، وستيفن بيمن، مسؤول الميديا والتصوير. فإطار التعاون بين مديرية التربية والتعليم بالقليوبية والهيئة القومية للبريد، تدار لقاء توعوي باش يتعرفو الطلبة على أهم الخدمات الحديثة اللي كيوفرها البريد المصري، باش تسهّل عليهم حياتهم اليومية بشكل آمن وسريع. ومن بين الخدمات: أداء مصاريف بيان النجاح من مكاتب البريد، حصرياً فمحافظة القليوبية؛ بطاقة Easy Pay من 15 عام للخدمة أونلاين والدعاية الرقمية واستقبال وتحويل الفلوس والأداء فالمواقع والخدمات الإلكترونية؛ خدمة «وصلها» لشحن واستلام الطرود بسهولة وبطاقة الرقم القومي فقط، ومناسبة للبيع والشراء أونلاين؛ وحساب أو دفتر «سوبر توفير» المتاح للطلبة، واللي أقل من 18 عام يفتحو بوصاية ولي الأمر، بعائد تنافسي كيزاد بشكل دوري ووسيلة آمنة للادخار. الهدف ديالنا هو أن كل طالب يعرف يستعمل الخدمات الرقمية ويوفر الوقت والمجهود بطريقة ذكية. إلا كنت مهتم، بدا من أقرب مكتب بريد ليك واستافد من هاد الخدمات دابا.',
    bodyEn: 'Under the patronage of His Excellency Mohamed Abdel Latif, Minister of Education and Technical Education, and Ms. Dalia Abdullah Mohamed El-Baz, Chairwoman of the National Postal Authority, and under the guidance of Dr. Yasser Mahmoud, Director of the Qalyubia Directorate of Education, and Dr. Jehan Mohamed Abdelgawad, General Computer Science Supervisor. The meeting was attended by Hussein Yehya Hussein, Qalyubia Technical Team Lead; Mahmoud Fahim, Director of Service Centers; Saeed Abdel Naim Abu Sherif, Manager of Banha Main Post Office; Bilal Mahmoud, Evaluation and Follow-up Officer; and Stephen Bimen, Media and Photography Officer. As part of the cooperation between the Qalyubia Directorate of Education and the National Postal Authority, an awareness session introduced students to modern Egypt Post services that make daily life safer and easier. The services included paying the Statement of Success fees through post offices exclusively in Qalyubia; Easy Pay Visa from age 15 for online work, digital advertising, receiving and transferring money, and paying for online services; the Waselha parcel service using only a national ID card; and the Super Takhbeer savings account or booklet for students, with guardianship required under age 18 and periodic competitive returns. Our goal is for every student to understand digital services and save time and effort in a smart way.',
    role: 'حسين يحيى حسين — قائد الفريق التقني بالقليوبية',
    roleEgyptian: 'حسين يحيى حسين — قائد الفريق التقني بالقليوبية',
    roleMoroccan: 'حسين يحيى حسين — قائد الفريق التقني بالقليوبية',
    roleEn: 'Hussein Yehya Hussein — Qalyubia Technical Team Lead',
    location: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEgyptian: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationMoroccan: 'مديرية التربية والتعليم بالقليوبية — مصر',
    locationEn: 'Qalyubia Directorate of Education — Egypt',
    images: [postalMeeting, postalSession],
  },
  {
    date: '2026-06-09',
    title: 'ورشة المبادرة الوطنية للمشروعات الخضراء الذكية',
    titleEgyptian: 'ورشة المبادرة الوطنية للمشروعات الخضراء الذكية',
    titleMoroccan: 'ورشة المبادرة الوطنية للمشاريع الخضراء الذكية',
    titleEn: 'National Initiative for Smart Green Projects workshop',
    body: 'يوم من أحلى الأيام في ديوان عام محافظة القليوبية، محافظتي الغالية، وسط أحلى تيم… وقبل ما نكون تيم إحنا صحاب وأخوات. سعدت جدًا بحضوري ورشة المبادرة الوطنية للمشروعات الخضراء الذكية، يوم مليان طاقة إيجابية، أفكار ملهمة، وفرصة حقيقية إننا نتعلم ونفكر إزاي نكون جزء من حلول بتخدم بلدنا وبيئتنا ومستقبلنا. شكرًا لكل الناس الجميلة اللي كانت موجودة، وإن شاء الله دايمًا متجمعين على خير ونجاح وتأثير حقيقي.',
    bodyEgyptian: 'كان يوم من أحلى الأيام في ديوان عام محافظة القليوبية، محافظتي الغالية، وسط أحلى تيم… وقبل ما نكون تيم إحنا صحاب وإخوات. اتبسطت جدًا بحضوري ورشة المبادرة الوطنية للمشروعات الخضراء الذكية؛ يوم مليان طاقة إيجابية وأفكار ملهمة، وفرصة حقيقية نتعلم ونفكر إزاي نكون جزء من حلول بتخدم بلدنا وبيئتنا ومستقبلنا. شكرًا لكل الناس الجميلة اللي كانت موجودة، وإن شاء الله نفضل دايمًا متجمعين على خير ونجاح وتأثير حقيقي.',
    bodyMoroccan: 'كان نهار من زوين ما يكون فديوان عام محافظة القليوبية، المحافظة الغالية ديالي، وسط أحسن تيم… وقبل ما نكونو تيم، حنا صحاب وخوت. فرحت بزاف بالحضور ديالي فـورشة المبادرة الوطنية للمشاريع الخضراء الذكية؛ نهار عامر بالطاقة الإيجابية والأفكار الملهمة، وفرصة حقيقية باش نتعلمو ونفكرو كيفاش نكونو جزء من حلول كتخدم بلادنا وبيئتنا ومستقبلنا. شكراً لكل الناس الزوينة اللي كانت حاضرة، وإن شاء الله نبقاو ديما مجموعين على الخير والنجاح والأثر الحقيقي.',
    bodyEn: 'A beautiful day at the Qalyubia Governorate headquarters with an incredible team—and friends and siblings before we were ever a team. I was happy to attend the National Initiative for Smart Green Projects workshop: a day full of positive energy, inspiring ideas, and a real opportunity to learn how we can contribute to solutions that serve our country, environment, and future.',
    role: 'مشارك في ورشة المبادرة الوطنية للمشروعات الخضراء الذكية',
    roleEgyptian: 'مشارك في ورشة المبادرة الوطنية للمشروعات الخضراء الذكية',
    roleMoroccan: 'مشارك فـورشة المبادرة الوطنية للمشاريع الخضراء الذكية',
    roleEn: 'Participant in the National Initiative for Smart Green Projects workshop',
    location: 'ديوان عام محافظة القليوبية',
    locationEgyptian: 'ديوان عام محافظة القليوبية',
    locationMoroccan: 'ديوان عام محافظة القليوبية',
    locationEn: 'Qalyubia Governorate headquarters',
    images: [greenSpeaking, greenWorkshop, greenFriends, greenTeam],
  },
  {
    date: '2026-06-16',
    title: 'متابعة أعمال الفريق التقني بالعبور',
    titleEgyptian: 'متابعة شغل الفريق التقني بالعبور',
    titleMoroccan: 'تتبع خدمة الفريق التقني فالعبور',
    titleEn: 'Obour technical team follow-up',
    body: 'في إطار المتابعة المستمرة وحرصًا على دعم فرق العمل بالمحافظة، تابع قائد الفريق التقني بالقليوبية أعمال الفريق التقني بالعبور، والوقوف على أبرز التحديات التي تواجههم، والعمل على حل أي مشكلات بشكل فوري. كما تم التأكيد على توفير أفضل الإمكانيات والدعم اللازم، بما يضمن تقديم حلول تقنية فعّالة، وتحقيق أعلى مستوى من الجودة في الأداء والخدمات المقدمة. الفريق التقني بالقليوبية — معًا نحو أداء أفضل وحلول أكثر احترافية. إدارة العبور التعليمية.',
    bodyEgyptian: 'ضمن المتابعة المستمرة ودعم فرق العمل في المحافظة، تابع قائد الفريق التقني بالقليوبية شغل الفريق التقني في العبور، ووقف على أهم التحديات اللي بتقابلهم، واشتغل على حل أي مشكلة بشكل فوري. كمان اتأكدنا من توفير أفضل الإمكانيات والدعم اللازم، عشان نقدم حلول تقنية فعّالة ونوصل لأعلى جودة في الأداء والخدمات. الفريق التقني بالقليوبية — مع بعض لأداء أفضل وحلول أكثر احترافية. إدارة العبور التعليمية.',
    bodyMoroccan: 'فإطار التتبع المستمر والحرص على دعم فرق العمل فالمحافظة، تابع قائد الفريق التقني بالقليوبية خدمة الفريق التقني فالعبور ووقف على أبرز التحديات اللي كاتواجههم، وخدم على حل أي مشكل فالحين. وتأكدنا حتى من توفير أحسن الإمكانيات والدعم اللازم، باش نقدمو حلول تقنية فعّالة ونحققو أعلى جودة فالأداء والخدمات. الفريق التقني بالقليوبية — مجموعين من أجل أداء أحسن وحلول أكثر احترافية. إدارة العبور التعليمية.',
    bodyEn: 'As part of our continued follow-up and commitment to supporting teams across the governorate, the Qalyubia Technical Team Lead followed up with the Obour technical team, identified their main challenges, and worked to resolve issues immediately. The visit also reaffirmed the need to provide the best resources and support for effective technical solutions and higher-quality services. Qalyubia Technical Team — together toward better performance and more professional solutions. Obour Educational Administration.',
    roleEgyptian: 'قائد الفريق التقني بالقليوبية',
    roleMoroccan: 'قائد الفريق التقني بالقليوبية',
    role: 'قائد الفريق التقني بالقليوبية',
    location: 'الفريق التقني بالقليوبية — إدارة العبور التعليمية',
    locationEgyptian: 'الفريق التقني بالقليوبية — إدارة العبور التعليمية',
    locationMoroccan: 'الفريق التقني بالقليوبية — إدارة العبور التعليمية',
    locationEn: 'Qalyubia Technical Team — Obour Educational Administration',
    images: [teamGroup, teamPortrait, teamDiscussion, teamWorkshop, teamRoom, teamBriefing, teamMeet, teamVisit],
  },
  {
    date: '2026-06-26',
    title: 'إطلاق النسخة التجريبية الأولية من مدينة AI',
    titleEgyptian: 'إطلاق النسخة التجريبية الأولى من مدينة AI',
    titleMoroccan: 'إطلاق النسخة التجريبية الأولى من مدينة AI',
    titleEn: 'Madinah AI pilot launch',
    body: 'سعدت اليوم، بصفتي قائد الفريق التقني بالقليوبية، بإطلاق النسخة التجريبية الأولية من تطبيق مدينة AI خلال فعاليات Tech Day | Nile Sons بإدارة العبور التعليمية. لحظة مهمة في بداية مشروع نؤمن إنه هيكون خطوة جديدة نحو توظيف التكنولوجيا والذكاء الاصطناعي في خدمة المجتمع وتطوير الخدمات اليومية بشكل أسهل وأذكى.',
    bodyEgyptian: 'اتبسطت النهارده، بصفتي قائد الفريق التقني بالقليوبية، بإطلاق النسخة التجريبية الأولى من تطبيق مدينة AI خلال فعاليات Tech Day | Nile Sons بإدارة العبور التعليمية. دي لحظة مهمة في بداية مشروع مؤمنين إنه هيكون خطوة جديدة لتوظيف التكنولوجيا والذكاء الاصطناعي في خدمة المجتمع وتطوير الخدمات اليومية بشكل أسهل وأذكى.',
    bodyMoroccan: 'فرحت اليوم، بصفتي قائد الفريق التقني بالقليوبية، بإطلاق النسخة التجريبية الأولى من تطبيق مدينة AI خلال فعاليات Tech Day | Nile Sons بإدارة العبور التعليمية. هادي لحظة مهمة فبداية مشروع كنآمنو أنه غادي يكون خطوة جديدة فاستعمال التكنولوجيا والذكاء الاصطناعي لخدمة المجتمع وتطوير الخدمات اليومية بطريقة أسهل وأذكى.',
    bodyEn: 'I was happy to launch the first pilot version of Madinah AI as the Qalyubia Technical Team Lead during Tech Day | Nile Sons, organized by the Obour Educational Administration. It is an important first step for a project we believe can use technology and AI to serve the community and make everyday services easier and smarter.',
    role: 'قائد الفريق التقني بالقليوبية · المدير التنفيذي لمشروع مدينة AI',
    roleEgyptian: 'قائد الفريق التقني بالقليوبية · المدير التنفيذي لمشروع مدينة AI',
    roleMoroccan: 'قائد الفريق التقني بالقليوبية · المدير التنفيذي لمشروع مدينة AI',
    roleEn: 'Qalyubia Technical Team Lead · Madinah AI Executive Director',
    location: 'Tech Day | Nile Sons — إدارة العبور التعليمية',
    locationEgyptian: 'Tech Day | Nile Sons — إدارة العبور التعليمية',
    locationMoroccan: 'Tech Day | Nile Sons — إدارة العبور التعليمية',
    locationEn: 'Tech Day | Nile Sons — Obour Educational Administration',
    images: [madinahStage, madinahTalk, madinahSide, madinahPodium, madinahScreen, madinahWide],
  },
];

function getAchievementCopy(item: Achievement, lang: Language, dialect: Dialect) {
  if (lang === 'en') return { title: item.titleEn ?? item.title, body: item.bodyEn ?? item.body, role: item.roleEn ?? item.role, location: item.locationEn ?? item.location };
  if (dialect === 'moroccan') return { title: item.titleMoroccan ?? item.title, body: item.bodyMoroccan ?? item.body, role: item.roleMoroccan ?? item.role, location: item.locationMoroccan ?? item.location };
  return { title: item.titleEgyptian ?? item.title, body: item.bodyEgyptian ?? item.body, role: item.roleEgyptian ?? item.role, location: item.locationEgyptian ?? item.location };
}

const libraryPhotos = [
  { src: profileImage, title: 'Hussein Yehya', label: 'Portrait', labelAr: 'بورتريه', featured: true },
  { src: madinahStage, title: 'Madinah AI — Tech Day', label: 'Launch', labelAr: 'إطلاق', featured: true },
  { src: madinahExtra, title: 'Madinah AI — Tech Day', label: 'Launch', labelAr: 'إطلاق' },
  { src: madinahTalk, title: 'On stage at Tech Day', label: 'Launch', labelAr: 'إطلاق' },
  { src: madinahSide, title: 'Madinah AI presentation', label: 'Launch', labelAr: 'إطلاق' },
  { src: madinahPodium, title: 'Presenting the pilot', label: 'Launch', labelAr: 'إطلاق' },
  { src: madinahScreen, title: 'Madinah AI early access', label: 'Launch', labelAr: 'إطلاق' },
  { src: madinahWide, title: 'Madinah AI event', label: 'Launch', labelAr: 'إطلاق' },
  { src: madinahClose, title: 'Madinah AI pilot launch', label: 'Launch', labelAr: 'إطلاق' },
  { src: teamGroup, title: 'Obour technical team', label: 'Team', labelAr: 'الفريق التقني', featured: true },
  { src: teamPortrait, title: 'Team support visit', label: 'Team', labelAr: 'الفريق التقني' },
  { src: teamDiscussion, title: 'Technical team discussion', label: 'Team', labelAr: 'الفريق التقني' },
  { src: teamWorkshop, title: 'Working through challenges', label: 'Team', labelAr: 'الفريق التقني' },
  { src: teamRoom, title: 'Team follow-up', label: 'Team', labelAr: 'الفريق التقني' },
  { src: teamBriefing, title: 'Technical briefing', label: 'Team', labelAr: 'الفريق التقني' },
  { src: teamMeet, title: 'Team collaboration', label: 'Team', labelAr: 'الفريق التقني' },
  { src: teamVisit, title: 'Obour team visit', label: 'Team', labelAr: 'الفريق التقني' },
  { src: greenSpeaking, title: 'Speaking at the green projects workshop', label: 'Initiative', labelAr: 'المبادرة الخضراء', featured: true },
  { src: greenWorkshop, title: 'Smart green projects workshop', label: 'Initiative', labelAr: 'المبادرة الخضراء' },
  { src: greenFriends, title: 'Together at Qalyubia Governorate', label: 'Initiative', labelAr: 'المبادرة الخضراء' },
  { src: greenTeam, title: 'The initiative team', label: 'Initiative', labelAr: 'المبادرة الخضراء' },
  { src: postalMeeting, title: 'Egypt Post services awareness session', label: 'Postal services', labelAr: 'خدمات البريد', featured: true },
  { src: postalSession, title: 'Introducing student services', label: 'Postal services', labelAr: 'خدمات البريد' },
  { src: eduTechProtocol, title: 'EDU-TECH cooperation protocol', label: 'Protocol', labelAr: 'بروتوكول التعاون', featured: true },
  { src: benhaVisitGroup, title: 'Benha University faculty visit', label: 'University visit', labelAr: 'زيارة جامعية', featured: true },
  { src: benhaVisitLab, title: 'Exploring the AI faculty laboratories', label: 'University visit', labelAr: 'زيارة جامعية' },
  { src: benhaVisitTour, title: 'EDU-TECH educational tour', label: 'University visit', labelAr: 'زيارة جامعية' },
  { src: culturalAmbassadors, title: 'Cultural ambassadors recognition', label: 'Cultural ambassadors', labelAr: 'سفراء الثقافة', featured: true },
  { src: casaPresentation, title: 'CASA electronic examinations platform', label: 'casa', labelAr: 'منصة CASA', featured: true },
  { src: casaMeeting, title: 'Presenting CASA to the education directorate', label: 'casa', labelAr: 'منصة CASA' },
  { src: schoolLeadersGroup, title: 'Republic Schools Leaders training', label: 'leaders', labelAr: 'قادة مدارس الجمهورية', featured: true },
  { src: schoolLeadersWorkshop, title: 'Leadership styles workshop', label: 'leaders', labelAr: 'قادة مدارس الجمهورية' },
  { src: schoolLeadersTeams, title: 'Students developing an initiative', label: 'leaders', labelAr: 'قادة مدارس الجمهورية' },
  { src: schoolLeadersRoom, title: 'Qalyubia Republic Schools Leaders', label: 'leaders', labelAr: 'قادة مدارس الجمهورية' },
  { src: studentOrganizingTeam, title: 'Student Organizing Team recognition', label: 'organizing', labelAr: 'التنظيم الطلابي', featured: true },
  { src: studentOrganizingAward, title: 'Honoring the Student Organizing Team', label: 'organizing', labelAr: 'التنظيم الطلابي' },
  { src: readingCarnivalGroup, title: 'SOT Team at the Qalyubia Reading Carnival', label: 'reading', labelAr: 'كرنفال القراءة', featured: true },
  { src: readingCarnivalPair, title: 'Reading Carnival coverage', label: 'reading', labelAr: 'كرنفال القراءة' },
  { src: readingCarnivalGirls, title: 'SOT Team members at the carnival', label: 'reading', labelAr: 'كرنفال القراءة' },
  { src: readingCarnivalTeam, title: 'Student media coverage team', label: 'reading', labelAr: 'كرنفال القراءة' },
  { src: readingCarnivalFriends, title: 'SOT Team collaboration', label: 'reading', labelAr: 'كرنفال القراءة' },
  { src: readingCarnivalPortrait, title: 'Qalyubia Reading Carnival coverage', label: 'reading', labelAr: 'كرنفال القراءة' },
  { src: studentActivitiesAnnual, title: 'Annual Student Activities Meeting', label: 'annual', labelAr: 'اللقاء السنوي للأنشطة', featured: true },
  { src: studentActivitiesStage, title: 'SOT Team at the annual meeting', label: 'annual', labelAr: 'اللقاء السنوي للأنشطة' },
  { src: nasaSpaceApps, title: 'NASA Space Apps Cairo', label: 'nasa', labelAr: 'NASA Space Apps Cairo', featured: true },
  { src: qalyubiaPressExhibition, title: 'Qalyubia Press Exhibition', label: 'press', labelAr: 'معرض الصحافة', featured: true },
  { src: qalyubiaPressTeam, title: 'Press and photography exhibition team', label: 'press', labelAr: 'معرض الصحافة' },
  { src: nationalYouthStrategyStage, title: 'National Youth Strategy Conference', label: 'youth-strategy', labelAr: 'استراتيجية الشباب', featured: true },
  { src: nationalYouthStrategyAudience, title: 'National Youth Strategy launch', label: 'youth-strategy', labelAr: 'استراتيجية الشباب' },
  { src: nationalYouthStrategyDelegates, title: 'Youth strategy conference delegates', label: 'youth-strategy', labelAr: 'استراتيجية الشباب' },
  { src: knowYourCountryMeeting, title: 'Know Your Country initiative meeting', label: 'know-country', labelAr: 'مبادرة اعرف بلدك', featured: true },
  { src: knowYourCountryEducation, title: 'Know Your Country education meeting', label: 'know-country', labelAr: 'مبادرة اعرف بلدك', featured: true },
  { src: knowYourCountryDirectorate, title: 'Know Your Country cooperation meeting', label: 'know-country', labelAr: 'مبادرة اعرف بلدك' },
  { src: knowYourCountryDiscussion, title: 'Initiative cooperation discussion', label: 'know-country', labelAr: 'مبادرة اعرف بلدك' },
  { src: knowYourCountryTeam, title: 'Know Your Country initiative team', label: 'know-country', labelAr: 'مبادرة اعرف بلدك' },
  { src: personalPortraitNightOne, title: 'Personal portrait at night', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitNightTwo, title: 'Night portrait with passport', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitNightThree, title: 'Personal portrait with passport', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitBeachOne, title: 'Beach portrait', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitBeachTwo, title: 'Beach portrait by the sea', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitExtraOne, title: 'Personal portrait', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitExtraTwo, title: 'Personal portrait outdoors', label: 'portrait', labelAr: 'بورتريه' },
  { src: personalPortraitExtraThree, title: 'Personal portrait by the coast', label: 'portrait', labelAr: 'بورتريه' },
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

function Header({ lang, dialect, dark, onLanguage, onDialect, onTheme, libraryPage = false }: { lang: Language; dialect: Dialect; dark: boolean; onLanguage: () => void; onDialect: () => void; onTheme: () => void; libraryPage?: boolean }) {
  const [open, setOpen] = useState(false); const t = getT(lang, dialect);
  const links = ['story', 'profile', 'journal', 'systems', 'archive', 'method', 'contact'];
  const labels = [t.nav[0], lang === 'ar' ? 'البروفايل' : 'Profile', lang === 'ar' ? 'الإنجازات' : 'Journal', ...t.nav.slice(1)];
  const home = libraryPage ? '/' : '#top'; const sectionHref = (link: string) => libraryPage ? `/#${link}` : `#${link}`;
  return <header className="new-nav"><a href={home} data-testid="link-home" className="mark">HY<span>.</span></a><nav>{links.map((link, i) => <a data-testid={`link-nav-${i}`} key={link} href={sectionHref(link)}>{labels[i]}</a>)}</nav><div className="nav-tools"><a className="library-link" href="/gallery">{lang === 'ar' ? 'مكتبة الصور' : 'Photo library'}</a><button data-testid="button-language-toggle" onClick={onLanguage}>{t.language}</button>{lang === 'ar' && <button data-testid="button-dialect-toggle" onClick={onDialect}>{dialect === 'egyptian' ? 'مصرية' : 'مغربية'}</button>}<button data-testid="button-theme-toggle" aria-label={dark ? t.themeDark : t.themeLight} onClick={onTheme}>{dark ? <Sun size={15} /> : <Moon size={15} />}</button><button data-testid="button-menu-toggle" className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={17} /> : <Menu size={17} />}</button></div>{open && <div className="mobile-sheet">{links.map((link, i) => <a onClick={() => setOpen(false)} data-testid={`link-mobile-nav-${i}`} key={link} href={sectionHref(link)}>{labels[i]} <ArrowDownRight size={16} /></a>)}</div>}</header>;
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

function AchievementGallery({ images, title, details, role, location }: { images: string[]; title: string; details: string; role: string; location: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const imageCount = images.length;
  const activeIndex = imageCount > 0 ? Math.min(active, imageCount - 1) : 0;
  const showGallery = (index = 0, trigger?: HTMLElement) => {
    if (!imageCount) return;
    triggerRef.current = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    setActive(Math.max(0, Math.min(index, imageCount - 1)));
    setOpen(true);
  };
  const closeGallery = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };
  const previous = () => {
    if (!imageCount) return;
    setActive((index) => (index - 1 + imageCount) % imageCount);
  };
  const next = () => {
    if (!imageCount) return;
    setActive((index) => (index + 1) % imageCount);
  };
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeGallery();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        previous();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, imageCount]);
  return <>
    <div className="achievement-gallery" aria-label={title}>
      <button className="achievement-feature" onClick={(event) => showGallery(0, event.currentTarget)} aria-label={`Open ${title} gallery`}>
        {images[0] && <img src={images[0]} alt={title} />}
        <span className="gallery-open-label">View gallery <ArrowUpRight size={15} /></span>
      </button>
      <button className="achievement-stack" onClick={(event) => showGallery(1, event.currentTarget)} aria-label={`View all ${imageCount} photos`}>
        {images[1] && <img src={images[1]} alt="" />}
        {images[2] && <img src={images[2]} alt="" />}
        <span>+{Math.max(0, imageCount - 1)} photos <ArrowUpRight size={15} /></span>
      </button>
    </div>
    {open && imageCount > 0 && <div className="gallery-modal" role="dialog" aria-modal="true" aria-labelledby="gallery-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) closeGallery(); }}>
      <div className="gallery-modal-inner">
        <div className="gallery-modal-viewer">
          <span className="gallery-viewer-count">{String(activeIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}</span>
          <button type="button" className="gallery-viewer-nav previous" onClick={previous} aria-label="Previous photo"><ChevronLeft size={20} /></button>
          <img src={images[activeIndex]} alt={`${title} — ${activeIndex + 1}`} />
          <button type="button" className="gallery-viewer-nav next" onClick={next} aria-label="Next photo"><ChevronRight size={20} /></button>
        </div>
        <div className="gallery-modal-sidebar">
          <div className="gallery-modal-top">
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}</span>
            <button ref={closeButtonRef} type="button" onClick={closeGallery} aria-label="Close gallery"><X size={20} /></button>
          </div>
          <div className="gallery-modal-details">
            <h3 id="gallery-modal-title">{title}</h3>
            <p>{details}</p>
            <div>
              <strong>{role}</strong>
              <small>{location}</small>
            </div>
          </div>
          <div className="gallery-thumbs">
            {images.map((image, index) => <button type="button" className={index === activeIndex ? 'active' : ''} aria-current={index === activeIndex ? 'true' : undefined} key={`${image}-${index}`} onClick={() => setActive(index)} aria-label={`View photo ${index + 1}`}><img src={image} alt="" /></button>)}
          </div>
        </div>
      </div>
    </div>}
  </>;
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
        {(() => { const copy = getAchievementCopy(item, lang, dialect); return <><div className="achievement-copy"><h3>{copy.title}</h3></div><AchievementGallery images={item.images} title={copy.title} details={copy.body} role={copy.role} location={copy.location} /></>; })()}
      </motion.article>)}
    </div>
  </section>;
}

function PhotoLibrary({ lang }: { lang: Language }) {
  const [filter, setFilter] = useState<'all' | 'portrait' | 'launch' | 'team' | 'initiative' | 'postal-services' | 'protocol' | 'university' | 'cultural' | 'casa' | 'leaders' | 'organizing' | 'reading' | 'annual' | 'nasa' | 'press' | 'youth-strategy' | 'know-country'>('all');
  const [active, setActive] = useState<number | null>(null);
  const filtered = libraryPhotos.filter((photo) => filter === 'all' || photo.label.toLowerCase() === filter);
  const current = active === null ? null : libraryPhotos[active];
  const go = (direction: number) => {
    if (active === null) return;
    setActive((active + direction + libraryPhotos.length) % libraryPhotos.length);
  };
  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowLeft') go(-1);
      if (event.key === 'ArrowRight') go(1);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [active]);
   const copy = lang === 'ar' ? { eyebrow: 'مكتبة الصور / ٠١', title: 'لحظات من الشغل الحقيقي.', intro: 'صور من المشاريع والإطلاقات والرحلة اللي بتكبر مع كل تجربة.', all: 'كل الصور', portrait: 'بورتريه', launch: 'مدينة AI', team: 'الفريق التقني', initiative: 'المبادرة الخضراء', 'postal-services': 'خدمات البريد', protocol: 'بروتوكول التعاون', university: 'زيارة جامعية', cultural: 'سفراء الثقافة', casa: 'منصة CASA', leaders: 'قادة مدارس الجمهورية', organizing: 'التنظيم الطلابي', reading: 'كرنفال القراءة', annual: 'اللقاء السنوي للأنشطة', nasa: 'NASA Space Apps', press: 'معرض الصحافة', 'youth-strategy': 'استراتيجية الشباب', 'know-country': 'مبادرة اعرف بلدك', back: 'العودة للبورتفوليو', close: 'إغلاق', previous: 'السابق', next: 'التالي' } : { eyebrow: 'PHOTO LIBRARY / 01', title: 'Moments from the real work.', intro: 'A visual record of projects, launches, and the road between them.', all: 'All photos', portrait: 'Portraits', launch: 'Madinah AI', team: 'Technical team', initiative: 'Green initiative', 'postal-services': 'Postal services', protocol: 'Cooperation protocol', university: 'University visit', cultural: 'Cultural ambassadors', casa: 'CASA platform', leaders: 'Republic Schools Leaders', organizing: 'Student organizing', reading: 'Reading carnival', annual: 'Annual activities meeting', nasa: 'NASA Space Apps', press: 'Press exhibition', 'youth-strategy': 'Youth strategy', 'know-country': 'Know Your Country', back: 'Back to portfolio', close: 'Close', previous: 'Previous', next: 'Next' };
  return <div className="library-page">
    <div className="library-hero"><div><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></div><a className="library-back" href="/"><ArrowUpRight size={16} /> {copy.back}</a></div>
     <div className="library-toolbar"><div className="library-filters">{(['all', 'portrait', 'launch', 'team', 'initiative', 'postal-services', 'protocol', 'university', 'cultural', 'casa', 'leaders', 'organizing', 'reading', 'annual', 'nasa', 'press', 'youth-strategy', 'know-country'] as const).map((value) => <button type="button" className={filter === value ? 'active' : ''} key={value} onClick={() => setFilter(value)}>{copy[value]}</button>)}</div><span>{String(filtered.length).padStart(2, '0')} / {String(libraryPhotos.length).padStart(2, '0')}</span></div>
    <div className="library-grid">{filtered.map((photo) => { const index = libraryPhotos.indexOf(photo); return <button type="button" className={`library-photo ${photo.featured ? 'featured' : ''}`} key={photo.src} onClick={() => setActive(index)}><img src={photo.src} alt={photo.title} loading={index > 1 ? 'lazy' : undefined} /><span><small>{lang === 'ar' ? photo.labelAr : photo.label}</small><strong>{photo.title}</strong><ArrowUpRight size={16} /></span></button>; })}</div>
    {current && <div className="library-lightbox" role="dialog" aria-modal="true" aria-label={current.title} onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}><div className="library-lightbox-card"><div className="library-lightbox-top"><span>{String((active ?? 0) + 1).padStart(2, '0')} / {String(libraryPhotos.length).padStart(2, '0')}</span><button type="button" onClick={() => setActive(null)} aria-label={copy.close}><X size={20} /></button></div><div className="library-lightbox-stage"><button type="button" onClick={() => go(-1)} aria-label={copy.previous}><ChevronLeft /></button><img src={current.src} alt={current.title} /><button type="button" onClick={() => go(1)} aria-label={copy.next}><ChevronRight /></button></div><div className="library-lightbox-caption"><span>{lang === 'ar' ? current.labelAr : current.label}</span><h2>{current.title}</h2></div></div></div>}
  </div>;
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
  const libraryPage = window.location.pathname.endsWith('/gallery') || window.location.pathname.endsWith('/gallery/');
  useEffect(() => { setDark(localStorage.getItem('hussein-theme') === 'dark'); }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = lang; localStorage.setItem('hussein-theme', dark ? 'dark' : 'light'); }, [dark, lang]);
  return <div className={`kinetic-shell ${lang === 'ar' ? 'rtl' : ''}`}>{<Header lang={lang} dialect={dialect} dark={dark} libraryPage={libraryPage} onLanguage={() => setLang(lang === 'en' ? 'ar' : 'en')} onDialect={() => setDialect(dialect === 'egyptian' ? 'moroccan' : 'egyptian')} onTheme={() => setDark(!dark)} />}{libraryPage ? <PhotoLibrary lang={lang} /> : <main><Hero lang={lang} dialect={dialect} /><Story lang={lang} dialect={dialect} /><ProfileDetails lang={lang} /><Journal lang={lang} dialect={dialect} /><Systems lang={lang} dialect={dialect} /><Archive lang={lang} dialect={dialect} /><Method lang={lang} dialect={dialect} /><Contact lang={lang} dialect={dialect} /></main>}<footer><span>© {new Date().getFullYear()} / Hussein Yehya</span>{libraryPage ? <a href="/">{t.back}<ArrowUpRight size={14} /></a> : <a data-testid="link-back-top" href="#top">{t.back}<ArrowUpRight size={14} /></a>}</footer><span className="sr-only" data-testid="text-current-language">{t.eyebrow}</span></div>;
}
export default App;