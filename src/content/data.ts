/* Every word on the site, in English and Arabic, plus the business details.
   Edit here, then `npm run build`. Text between *asterisks* in a heading renders in gold italic. */

export const CFG = {
  "site": "https://vitotaxi.cierp.uk",
  "name": "Vito Taxi by Charbel",
  "tel": "+96170609211",
  "tel_show": "70 609 211",
  "tel_intl": "+961 70 609 211",
  "wa": "96170609211",
  "instagram": "https://www.instagram.com/vitotaxibycharbel/",
  "facebook": "https://www.facebook.com/share/1BdaQC3ukn/",
  "maps": "https://www.google.com/maps?cid=2281982543360949360",
  "rating": "4.9",
  "reviews": "17",
  "rating_asof": "September 2026",
  "rating_asof_ar": "أيلول ٢٠٢٦",
  "lat": 33.9175029,
  "lng": 35.5840437,
  "photos": [
    {
      "file": "vito-1.jpg",
      "alt": "The Vito"
    },
    {
      "file": "vito-2.jpg",
      "alt": "The cabin"
    },
    {
      "file": "vito-3.jpg",
      "alt": "Charbel"
    }
  ],
  "voices": []
} as const

export type Lang = 'en' | 'ar'

export const T = {
  "en": {
    "dir": "ltr",
    "locale": "en_US",
    "other": "ar",
    "other_label": "عربي",
    "other_name": "العربية",
    "title": "Vito Taxi by Charbel — Premium Mercedes Vito Taxi in Antelias, Beirut & Lebanon",
    "desc": "24/7 taxi in a spacious Mercedes-Benz Vito from Antelias: Beirut Airport transfers, daily rides, trips and events across Lebanon. Rated 4.9 on Google. WhatsApp 70 609 211.",
    "og_title": "Vito Taxi by Charbel — every ride, first class",
    "tagline": "by Charbel",
    "skip": "Skip to content",
    "nav": [
      [
        "#services",
        "Services"
      ],
      [
        "#vito",
        "The Vito"
      ],
      [
        "#book",
        "Book"
      ],
      [
        "#areas",
        "Areas"
      ],
      [
        "#faq",
        "FAQ"
      ]
    ],
    "call": "Call",
    "book_wa": "Book on WhatsApp",
    "wa_short": "WhatsApp",
    "wa_hello": "Hello Charbel, I would like to book a ride.",
    "lead": "A spacious, air-conditioned Mercedes-Benz Vito, expert drivers who know every road, and the price confirmed before you set off. Airport transfers, daily rides, trips and events — day or night, from Antelias.",
    "marquee": [
      "Beirut Airport",
      "Beirut",
      "Jounieh",
      "Byblos",
      "Batroun",
      "Faraya",
      "Harissa",
      "Jeita",
      "Broumana",
      "The Cedars",
      "Baalbek",
      "Tyre",
      "Sidon"
    ],
    "svc_k": "Services",
    "svc_h": "One car. *Every journey.*",
    "svc_p": "Your comfort, our priority. From a 4 a.m. flight to a wedding in the mountains — rain or shine, day or night.",
    "services": [
      [
        "plane",
        "Airport transfers",
        "To and from Beirut–Rafic Hariri International. Share your flight and the pickup is planned around it — early departures and late landings included."
      ],
      [
        "city",
        "City rides",
        "Beirut, the Metn and Kesrouan: meetings, appointments, dinners and the ride home, without the parking or the traffic stress."
      ],
      [
        "map",
        "Across Lebanon",
        "A private driver for the day — Byblos, Batroun, Harissa, Jeita, the Cedars, Baalbek or the south. You choose the stops, we keep the time."
      ],
      [
        "glass",
        "Evenings & events",
        "Weddings, celebrations and nights out. Arrive looking the part and get home without thinking about who drives."
      ],
      [
        "group",
        "Families & groups",
        "A van, not a sedan: the whole family or group rides together, with the luggage in the back instead of on your lap."
      ],
      [
        "brief",
        "Business & hotels",
        "Punctual, discreet pickups for executives, visiting clients and hotel guests. One message and the car is booked."
      ]
    ],
    "car_k": "The Vito",
    "car_h": "Space you can *feel.*",
    "car_p": "The Mercedes-Benz Vito is built for exactly this: a high, quiet cabin, a sliding door that makes getting in effortless, and room left over once everyone is seated.",
    "feats": [
      [
        "seat",
        "Seats for the group",
        "Family, friends or colleagues — together in one car."
      ],
      [
        "bag",
        "Room for luggage",
        "Suitcases, strollers, golf bags or ski gear."
      ],
      [
        "snow",
        "Climate control",
        "Cool in August, warm on the way up to Faraya."
      ],
      [
        "shield",
        "Clean, safe, on time",
        "Professional drivers and a car kept spotless."
      ]
    ],
    "book_k": "Book",
    "book_h": "Your ride, *in one message.*",
    "book_p": "Fill in what you know — the form writes the WhatsApp message for you. Nothing is stored on this site.",
    "steps": [
      [
        "Tell us where and when",
        "Use the form, send a WhatsApp or just call."
      ],
      [
        "Get your price",
        "We confirm the fare and the time before anything is booked — fair, affordable, no surprises."
      ],
      [
        "Ride",
        "Your driver is there when you walk out. Sit back."
      ]
    ],
    "form_h": "Request a ride",
    "form_sub": "Replies usually come fast on WhatsApp.",
    "trip_lbl": "Trip",
    "trips": [
      [
        "ride",
        "City ride"
      ],
      [
        "airport",
        "Airport"
      ],
      [
        "day",
        "Day trip"
      ],
      [
        "event",
        "Event"
      ]
    ],
    "f_from": "Pickup",
    "f_from_ph": "e.g. Antelias, Naccache, hotel name…",
    "f_to": "Destination",
    "f_to_ph": "e.g. Beirut Airport, Byblos…",
    "f_date": "Date",
    "f_time": "Time",
    "f_pax": "Passengers",
    "f_bags": "Bags",
    "f_flight": "Flight number",
    "f_flight_ph": "e.g. ME 202",
    "f_name": "Your name",
    "f_name_ph": "Optional",
    "f_notes": "Anything else",
    "f_notes_ph": "Child seat, extra stop, return trip…",
    "pax_opts": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7+"
    ],
    "bags_opts": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5+"
    ],
    "f_send": "Send on WhatsApp",
    "f_call": "Call instead",
    "fine": "Opens WhatsApp with your details filled in. You can edit before you send.",
    "js": {
      "hello": "Hello Charbel, I would like to book a ride.",
      "type": "Trip",
      "to": "To",
      "when": "When",
      "now": "As soon as possible",
      "pax": "Passengers",
      "bags": "Bags",
      "flight": "Flight",
      "name": "Name",
      "notes": "Notes",
      "price": "Could you confirm the price and availability? Thank you.",
      "airport": "Beirut Airport",
      "trips": {
        "ride": "City ride",
        "airport": "Airport transfer",
        "day": "Day trip",
        "event": "Event"
      },
      "from": "From"
    },
    "rate_k": "Reviews",
    "rate_h": "Riders say it *best.*",
    "rate_p": "Rated {r} out of 5 by {n} riders on Google Maps. Read what they wrote — and if you have ridden with us, add yours.",
    "rate_btn": "Read the reviews on Google",
    "rate_asof": "Google rating as of {d}.",
    "out_of": "out of 5",
    "faq_k": "Questions",
    "faq_h": "Good to *know.*",
    "faq": [
      [
        "How do I book a ride?",
        "Send a WhatsApp or call 70 609 211. The booking form on this page writes the message for you: pickup, destination, time, passengers and bags."
      ],
      [
        "How much does a ride cost?",
        "It depends on the distance, the time and the kind of trip. You get the price on WhatsApp or by phone before you confirm, so there is no surprise at the end of the ride."
      ],
      [
        "Do you do Beirut Airport pickups and drop-offs?",
        "Yes. Airport transfers to and from Beirut–Rafic Hariri International are one of our main services. Send your flight number and landing or departure time when you book."
      ],
      [
        "How many passengers and bags fit?",
        "The Vito is a van, so a family or a small group rides together with their luggage. Tell us how many people and bags when you book and we confirm it fits."
      ],
      [
        "Can you drive outside Beirut?",
        "Yes. From Antelias we drive across Lebanon — Jounieh, Byblos, Batroun, Faraya, the Cedars, Baalbek, the south — as a single ride or a private driver for the day."
      ],
      [
        "Can I book in advance?",
        "Yes, and it is the best way for early flights, weddings and day trips. Send the date and time and we confirm the booking."
      ],
      [
        "Are you available at night?",
        "Yes — we run 24/7. Late landings, early departures and the ride home after a night out are all part of the job."
      ],
      [
        "Where are you based?",
        "In Antelias, on the coast just north of Beirut, which puts the whole of Beirut, the Metn and Kesrouan a short drive away."
      ]
    ],
    "final_k": "Ready when you are",
    "final_h": "Your Vito is *one message away.*",
    "final_p": "Anywhere, anytime. Tell us where you are and where you are going — we take it from there.",
    "foot_about": "A 24/7 Mercedes-Benz Vito taxi service based in Antelias, Lebanon — airport transfers, daily rides, trips and events.",
    "f_services": "Services",
    "f_areas": "Areas",
    "f_contact": "Contact",
    "save_contact": "Save contact",
    "find_us": "Find us on Google Maps",
    "rights": "All rights reserved.",
    "addr": "Antelias, Metn, Lebanon",
    "home": "Home",
    "other_areas": "Other areas",
    "side_h": "Book this ride",
    "side_p": "Send your pickup and time — the price is confirmed before you ride.",
    "area_faq_h": "Questions about {a}",
    "nf_title": "Page not found — Vito Taxi by Charbel",
    "nf_h": "Wrong turn.",
    "nf_p": "This page does not exist, but your ride still can. Head back home or message us on WhatsApp.",
    "nf_home": "Back to the homepage"
  },
  "ar": {
    "dir": "rtl",
    "locale": "ar_LB",
    "other": "en",
    "other_label": "EN",
    "other_name": "English",
    "title": "ڤيتو تاكسي مع شربل — تاكسي مرسيدس ڤيتو فاخر في أنطلياس وبيروت ولبنان",
    "desc": "تاكسي ٢٤/٧ بمرسيدس ڤيتو واسعة من أنطلياس: توصيل مطار بيروت، مشاوير يومية، رحلات ومناسبات بكل لبنان. تقييم ٤٫٩ على Google. واتساب 70 609 211.",
    "og_title": "ڤيتو تاكسي مع شربل — كل مشوار درجة أولى",
    "tagline": "مع شربل",
    "skip": "انتقل إلى المحتوى",
    "nav": [
      [
        "#services",
        "الخدمات"
      ],
      [
        "#vito",
        "السيارة"
      ],
      [
        "#book",
        "احجز"
      ],
      [
        "#areas",
        "المناطق"
      ],
      [
        "#faq",
        "أسئلة"
      ]
    ],
    "call": "اتصل",
    "book_wa": "احجز عالواتساب",
    "wa_short": "واتساب",
    "wa_hello": "مرحبا شربل، بدي احجز مشوار.",
    "lead": "مرسيدس ڤيتو واسعة ومكيّفة، سائقين محترفين بيعرفوا كل الطرقات، والسعر متفق عليه قبل ما تنطلق. توصيل مطار، مشاوير يومية، رحلات ومناسبات — ليل نهار، انطلاقاً من أنطلياس.",
    "marquee": [
      "مطار بيروت",
      "بيروت",
      "جونية",
      "جبيل",
      "البترون",
      "فاريا",
      "حريصا",
      "جعيتا",
      "برمانا",
      "الأرز",
      "بعلبك",
      "صور",
      "صيدا"
    ],
    "svc_k": "الخدمات",
    "svc_h": "سيارة وحدة. *لكل مشوار.*",
    "svc_p": "راحتك أولويتنا. من طيارة الساعة أربعة الصبح لعرس بالجبل — شتي أو شمس، ليل أو نهار.",
    "services": [
      [
        "plane",
        "توصيل المطار",
        "من وإلى مطار رفيق الحريري الدولي. ابعتلنا رقم الرحلة ومنرتّب الوقت على أساسها — حتى الطيارات الباكرة والوصول المتأخر."
      ],
      [
        "city",
        "مشاوير المدينة",
        "بيروت، المتن وكسروان: اجتماعات، مواعيد، عشاء والرجعة عالبيت، بلا هم الصفّة والزحمة."
      ],
      [
        "map",
        "بكل لبنان",
        "سائق خاص لنهار كامل — جبيل، البترون، حريصا، جعيتا، الأرز، بعلبك أو الجنوب. إنت بتختار الوقفات ونحنا منضبط الوقت."
      ],
      [
        "glass",
        "سهرات ومناسبات",
        "أعراس، احتفالات وسهرات. وصال بأناقة وارجع عالبيت بلا ما تفكّر مين بدو يسوق."
      ],
      [
        "group",
        "عائلات ومجموعات",
        "ڤان مش سيارة صغيرة: العيلة كلها أو الشلة بتقعد سوا، والشنط بالخلف مش بحضنك."
      ],
      [
        "brief",
        "أعمال وفنادق",
        "توصيل دقيق وراقي لرجال الأعمال، الزوار وضيوف الفنادق. رسالة وحدة والسيارة محجوزة."
      ]
    ],
    "car_k": "السيارة",
    "car_h": "راحة *بتحسّ فيها.*",
    "car_p": "المرسيدس ڤيتو معمولة لهيدا بالزبط: مقصورة عالية وهادية، باب جانبي منزلق بيسهّل الطلعة، ومساحة زيادة بعد ما يقعد الكل.",
    "feats": [
      [
        "seat",
        "مقاعد للمجموعة",
        "العيلة، الأصحاب أو الزملاء — سوا بسيارة وحدة."
      ],
      [
        "bag",
        "محل للشنط",
        "شنط سفر، عربايات أولاد، أو عدّة التزلج."
      ],
      [
        "snow",
        "تكييف كامل",
        "بارد بآب، ودافي عطريق فاريا."
      ],
      [
        "shield",
        "نظافة، أمان ودقة",
        "سائقين محترفين وسيارة دايماً نضيفة."
      ]
    ],
    "book_k": "احجز",
    "book_h": "مشوارك *برسالة وحدة.*",
    "book_p": "عبّي يلي بتعرفو — الاستمارة بتكتبلك رسالة الواتساب. ما في شي بينحفظ عهالموقع.",
    "steps": [
      [
        "قلّنا من وين ولوين وإيمتى",
        "عبّي الاستمارة، ابعت واتساب، أو اتصل."
      ],
      [
        "بيوصلك السعر",
        "منأكدلك السعر والوقت قبل ما ينحجز شي — سعر مناسب وبلا مفاجآت."
      ],
      [
        "ارتاح",
        "السائق بيكون ناطرك وقت تطلع."
      ]
    ],
    "form_h": "اطلب مشوار",
    "form_sub": "الرد عادةً سريع عالواتساب.",
    "trip_lbl": "نوع المشوار",
    "trips": [
      [
        "ride",
        "مشوار بالمدينة"
      ],
      [
        "airport",
        "مطار"
      ],
      [
        "day",
        "رحلة نهار"
      ],
      [
        "event",
        "مناسبة"
      ]
    ],
    "f_from": "من وين",
    "f_from_ph": "مثلاً أنطلياس، النقاش، اسم الفندق…",
    "f_to": "لوين",
    "f_to_ph": "مثلاً مطار بيروت، جبيل…",
    "f_date": "التاريخ",
    "f_time": "الساعة",
    "f_pax": "عدد الركاب",
    "f_bags": "الشنط",
    "f_flight": "رقم الرحلة",
    "f_flight_ph": "مثلاً ME 202",
    "f_name": "اسمك",
    "f_name_ph": "اختياري",
    "f_notes": "شي تاني؟",
    "f_notes_ph": "كرسي ولد، وقفة إضافية، رجعة…",
    "pax_opts": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7+"
    ],
    "bags_opts": [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5+"
    ],
    "f_send": "ابعت عالواتساب",
    "f_call": "أو اتصل",
    "fine": "بيفتح الواتساب ومعلوماتك مكتوبة. فيك تعدّل قبل ما تبعت.",
    "js": {
      "hello": "مرحبا شربل، بدي احجز مشوار.",
      "type": "نوع المشوار",
      "to": "إلى",
      "when": "الوقت",
      "now": "بأسرع وقت",
      "pax": "عدد الركاب",
      "bags": "الشنط",
      "flight": "رقم الرحلة",
      "name": "الاسم",
      "notes": "ملاحظات",
      "price": "فيك تأكدلي السعر إذا في مجال؟ شكراً.",
      "airport": "مطار بيروت",
      "trips": {
        "ride": "مشوار بالمدينة",
        "airport": "توصيل مطار",
        "day": "رحلة نهار",
        "event": "مناسبة"
      },
      "from": "من"
    },
    "rate_k": "التقييمات",
    "rate_h": "الركاب *بيحكوا عنّا.*",
    "rate_p": "تقييم {r} من ٥ من {n} راكب على Google Maps. اقرا شو كتبوا — وإذا مشيت معنا، زيد رأيك.",
    "rate_btn": "اقرا التقييمات على Google",
    "rate_asof": "تقييم Google بتاريخ {d}.",
    "out_of": "من ٥",
    "faq_k": "أسئلة",
    "faq_h": "منيح *تعرف.*",
    "faq": [
      [
        "كيف بحجز مشوار؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211. استمارة الحجز بهالصفحة بتكتبلك الرسالة: من وين، لوين، الوقت، عدد الركاب والشنط."
      ],
      [
        "قدّيش كلفة المشوار؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد، فما في مفاجآت بآخر المشوار."
      ],
      [
        "بتوصّلوا من وإلى مطار بيروت؟",
        "أكيد. توصيل المطار من أهم خدماتنا. ابعت رقم الرحلة ووقت الوصول أو المغادرة وقت تحجز."
      ],
      [
        "قدّيش ركاب وشنط بتساع؟",
        "الڤيتو ڤان، يعني العيلة أو مجموعة صغيرة بتقعد سوا مع شنطها. قلّنا عدد الركاب والشنط وقت الحجز ومنأكّدلك."
      ],
      [
        "فيكن تسوقوا لبرّا بيروت؟",
        "أكيد. من أنطلياس منوصل لكل لبنان — جونية، جبيل، البترون، فاريا، الأرز، بعلبك، الجنوب — مشوار واحد أو سائق خاص لنهار كامل."
      ],
      [
        "فيني احجز من قبل؟",
        "أكيد، وهيدي أحسن طريقة للطيارات الباكرة، الأعراس ورحلات النهار. ابعت التاريخ والساعة ومنأكّد الحجز."
      ],
      [
        "بتشتغلوا بالليل؟",
        "أكيد — نحنا ٢٤/٧. الوصول المتأخر، الطيارات الباكرة والرجعة بعد السهرة كلها من شغلنا."
      ],
      [
        "وين مركزكن؟",
        "بأنطلياس، عالساحل شمال بيروت، يعني كل بيروت والمتن وكسروان على مسافة قصيرة."
      ]
    ],
    "final_k": "جاهزين وقت ما بدك",
    "final_h": "الڤيتو تبعك *على بُعد رسالة.*",
    "final_p": "بأي مكان وبأي وقت. قلّنا وين إنت ولوين رايح — والباقي علينا.",
    "foot_about": "خدمة تاكسي ٢٤/٧ بمرسيدس-بنز ڤيتو، مركزها أنطلياس، لبنان — توصيل مطار، مشاوير يومية، رحلات ومناسبات.",
    "f_services": "الخدمات",
    "f_areas": "المناطق",
    "f_contact": "تواصل",
    "save_contact": "احفظ الرقم",
    "find_us": "موقعنا على Google Maps",
    "rights": "جميع الحقوق محفوظة.",
    "addr": "أنطلياس، المتن، لبنان",
    "home": "الرئيسية",
    "other_areas": "مناطق تانية",
    "side_h": "احجز هالمشوار",
    "side_p": "ابعت مكانك والوقت — السعر بيتأكّد قبل ما تمشي.",
    "area_faq_h": "أسئلة عن {a}",
    "nf_title": "الصفحة غير موجودة — ڤيتو تاكسي مع شربل",
    "nf_h": "غلطنا بالطريق.",
    "nf_p": "هالصفحة مش موجودة، بس مشوارك بعدو ممكن. ارجع عالرئيسية أو ابعتلنا عالواتساب.",
    "nf_home": "ارجع عالرئيسية"
  }
}

/* Words used by the newer sections of the homepage. */
export const X = {
  "en": {
    "h1": "Your comfort, *our priority.*",
    "live": "Available now",
    "open247": "24/7",
    "q_h": "Where to?",
    "q_sub": "Get your fare on WhatsApp — no sign-up.",
    "q_from": "Pickup — e.g. Antelias",
    "q_to": "Destination — e.g. Beirut Airport",
    "q_when": [
      "Now",
      "In an hour",
      "Tonight",
      "Tomorrow",
      "Pick a date on WhatsApp"
    ],
    "q_pax": "passengers",
    "q_btn": "Get my fare",
    "q_note": "Nothing is stored on this site",
    "explore": "Explore services",
    "b_k": "Why Vito Taxi",
    "b_h": "First class, *every time.*",
    "b_p": "Everything our riders care about, in one car.",
    "t_rate": "// google rating",
    "t_rate_p": "from {n} reviews on Google Maps",
    "t_247": "// always on",
    "t_247_p": "Day, night, weekends and holidays. Rain or shine.",
    "t_car": "// the car",
    "t_car_h": "Mercedes-Benz Vito",
    "t_car_p": "Spacious, air-conditioned and spotless — built for comfort.",
    "t_reg": "// coverage",
    "t_reg_p": "regions — from Antelias to the Cedars.",
    "t_zero": "// pricing",
    "t_zero_big": "0",
    "t_zero_p": "surprises. Affordable fares, confirmed before you ride.",
    "t_air": "// airport",
    "t_air_h": "Beirut Airport transfers",
    "t_air_p": "Early departures and late landings. Send your flight — we plan around it.",
    "t_safe": "// clean & safe",
    "t_safe_h": "Professional drivers",
    "t_safe_p": "Expert drivers who know every road, and a car kept spotless.",
    "dest_k": "Destinations",
    "dest_h": "Where to *next?*",
    "dest_p": "Nine regions, one number. Pick yours for the details.",
    "swipe": "Scroll to explore",
    "st_k": "How it works",
    "st_h": "Booked in *three steps.*",
    "c_wa": "WhatsApp · fastest",
    "c_call": "Call us 24/7",
    "c_ig": "Follow on Instagram",
    "fab_b": "Chat on WhatsApp",
    "fab_s": "Available 24/7",
    "bub_name": "Vito Taxi",
    "bub_on": "Available 24/7",
    "bub_msg": "Hello 👋 Need a ride? Send your pickup and destination — we will confirm your fare right away.",
    "bub_go": "Start chat",
    "credits": "Photo credits",
    "credits_h": "Photo *credits.*",
    "credits_p": "Car photography from Unsplash (Unsplash License). Lebanon photography from Wikimedia Commons, used under the Creative Commons licences below.",
    "loader": "BY CHARBEL",
    "read_more": "Details"
  },
  "ar": {
    "h1": "راحتك، *أولويتنا.*",
    "live": "متاحين هلّق",
    "open247": "٢٤/٧",
    "q_h": "لوين رايح؟",
    "q_sub": "خود سعرك عالواتساب — بلا تسجيل.",
    "q_from": "من وين — مثلاً أنطلياس",
    "q_to": "لوين — مثلاً مطار بيروت",
    "q_when": [
      "هلّق",
      "بعد ساعة",
      "الليلة",
      "بكرا",
      "منحدد عالواتساب"
    ],
    "q_pax": "ركاب",
    "q_btn": "بدي سعري",
    "q_note": "ما في شي بينحفظ عهالموقع",
    "explore": "شوف الخدمات",
    "b_k": "ليش ڤيتو تاكسي",
    "b_h": "درجة أولى، *كل مرة.*",
    "b_p": "كل شي بيهمّ ركابنا، بسيارة وحدة.",
    "t_rate": "تقييم Google",
    "t_rate_p": "من {n} تقييم على Google Maps",
    "t_247": "دايماً موجودين",
    "t_247_p": "ليل ونهار، ويك إند وأعياد. شتي أو شمس.",
    "t_car": "السيارة",
    "t_car_h": "مرسيدس-بنز ڤيتو",
    "t_car_p": "واسعة، مكيّفة ونضيفة — معمولة لراحتك.",
    "t_reg": "التغطية",
    "t_reg_p": "مناطق — من أنطلياس للأرز.",
    "t_zero": "السعر",
    "t_zero_big": "٠",
    "t_zero_p": "مفاجآت. أسعار مناسبة ومتفق عليها قبل المشوار.",
    "t_air": "المطار",
    "t_air_h": "توصيل مطار بيروت",
    "t_air_p": "طيارات باكرة ووصول متأخر. ابعت رقم رحلتك ومنرتّب الوقت.",
    "t_safe": "نظافة وأمان",
    "t_safe_h": "سائقين محترفين",
    "t_safe_p": "سائقين خبرة بيعرفوا كل الطرقات، وسيارة دايماً نضيفة.",
    "dest_k": "الوجهات",
    "dest_h": "لوين *المشوار الجاي؟*",
    "dest_p": "تسع مناطق ورقم واحد. اختار منطقتك لتعرف التفاصيل.",
    "swipe": "مرّر لتكتشف",
    "st_k": "كيف منشتغل",
    "st_h": "الحجز *بتلات خطوات.*",
    "c_wa": "واتساب · الأسرع",
    "c_call": "اتصل فينا ٢٤/٧",
    "c_ig": "تابعنا على إنستغرام",
    "fab_b": "احكينا عالواتساب",
    "fab_s": "متاحين ٢٤/٧",
    "bub_name": "ڤيتو تاكسي",
    "bub_on": "متاحين ٢٤/٧",
    "bub_msg": "أهلا 👋 بدك مشوار؟ ابعتلنا من وين ولوين — ومنأكدلك السعر فوراً.",
    "bub_go": "ابدأ المحادثة",
    "credits": "حقوق الصور",
    "credits_h": "حقوق *الصور.*",
    "credits_p": "صور السيارة من Unsplash (رخصة Unsplash). صور لبنان من Wikimedia Commons، مستعملة حسب رخص المشاع الإبداعي أدناه.",
    "loader": "مع شربل",
    "read_more": "التفاصيل"
  }
}

/* The nine regions. Each one becomes an English page and an Arabic page. */
export const AREAS = [
  {
    "slug": "taxi-antelias",
    "icon": "pin",
    "place": "Place",
    "en": "Antelias",
    "ar": "أنطلياس",
    "en_sub": "Home base — Naccache, Rabieh, Dbayeh",
    "ar_sub": "مركزنا — النقاش، الرابية، ضبية",
    "en_title": "Taxi in Antelias — Vito Taxi by Charbel",
    "ar_title": "تاكسي في أنطلياس — ڤيتو تاكسي مع شربل",
    "en_desc": "Premium taxi in Antelias, Naccache, Rabieh, Dbayeh and Jal el Dib. Black Mercedes Vito, price confirmed before you ride. Call or WhatsApp 70 609 211.",
    "ar_desc": "تاكسي فاخر بأنطلياس، النقاش، الرابية، ضبية وجل الديب. مرسيدس ڤيتو سوداء والسعر متفق عليه قبل المشوار. اتصل أو واتساب 70 609 211.",
    "en_h1": "Taxi in *Antelias.*",
    "ar_h1": "تاكسي في *أنطلياس.*",
    "en_lede": "Antelias is home, so pickups here and in the neighbouring towns are the quickest we do. One message and the Vito is on its way.",
    "ar_lede": "أنطلياس هي مركزنا، فالمشوار من هون ومن البلدات الجارة هو الأسرع. رسالة وحدة والڤيتو جايي.",
    "en_body": [
      "Being based on the coastal road means the whole of the Metn coast is minutes away: Naccache and Rabieh above, Dbayeh and the Waterfront to the north, Jal el Dib and Zalka to the south. Beirut is a short run down the highway, and the airport is a straight line from here.",
      "Tell us the building, the church or the shop you are next to and that is usually enough. Whether it is a school run, a meeting in Beirut or a late dinner in Dbayeh, the price is confirmed before you get in."
    ],
    "ar_body": [
      "لأنّا عالأوتوستراد الساحلي، كل ساحل المتن على بُعد دقايق: النقاش والرابية لفوق، ضبية والواجهة البحرية شمالاً، جل الديب والزلقا جنوباً. بيروت مشوار قصير عالأوتوستراد، والمطار خط مستقيم من هون.",
      "قلّنا البناية، الكنيسة أو المحل يلي حدّك وبيكفي عادةً. إن كان مشوار مدرسة، اجتماع ببيروت أو عشاء متأخر بضبية، السعر بيتأكّد قبل ما تطلع."
    ],
    "en_hoods": [
      [
        "Antelias",
        "the square and the highway"
      ],
      [
        "Naccache",
        "and Rabieh"
      ],
      [
        "Dbayeh",
        "the Waterfront and LeMall"
      ],
      [
        "Jal el Dib",
        "and Zalka"
      ],
      [
        "Mezher",
        "and Haret el Ghouarneh"
      ],
      [
        "Mtayleb",
        "and Qornet Chehwan"
      ]
    ],
    "ar_hoods": [
      [
        "أنطلياس",
        "الساحة والأوتوستراد"
      ],
      [
        "النقاش",
        "والرابية"
      ],
      [
        "ضبية",
        "الواجهة البحرية ولو مول"
      ],
      [
        "جل الديب",
        "والزلقا"
      ],
      [
        "المزهر",
        "وحارة الغوارنة"
      ],
      [
        "المطيلب",
        "وقرنة شهوان"
      ]
    ]
  },
  {
    "slug": "beirut-airport-taxi",
    "icon": "plane",
    "place": "Airport",
    "en": "Beirut Airport",
    "ar": "مطار بيروت",
    "en_sub": "Arrivals & departures, BEY",
    "ar_sub": "وصول ومغادرة",
    "en_title": "Beirut Airport Taxi — Private Transfers by Vito Taxi",
    "ar_title": "تاكسي مطار بيروت — توصيل خاص مع ڤيتو تاكسي",
    "en_desc": "Private Beirut Airport (BEY) taxi transfers in a Mercedes Vito, with room for all your luggage. Book ahead on WhatsApp 70 609 211 — price confirmed in advance.",
    "ar_desc": "توصيل خاص من وإلى مطار بيروت بمرسيدس ڤيتو مع محل لكل الشنط. احجز مسبقاً عالواتساب 70 609 211 — السعر متفق عليه سلفاً.",
    "en_h1": "Beirut Airport, *handled.*",
    "ar_h1": "مطار بيروت، *علينا.*",
    "en_lede": "Transfers to and from Beirut–Rafic Hariri International Airport in a spacious Mercedes-Benz Vito. Send your flight and relax — the car is planned around it.",
    "ar_lede": "توصيل من وإلى مطار رفيق الحريري الدولي بمرسيدس-بنز ڤيتو واسعة. ابعت رقم رحلتك وارتاح — الوقت منرتّبو على أساسها.",
    "en_body": [
      "An airport run is the one ride worth booking the day before. Tell us your flight time rather than a pickup time and we work backwards from it, traffic included — the early-morning departures that nobody else wants to drive are exactly the ones we plan for.",
      "Landing? Send your flight number and terminal. A van means the suitcases, the stroller and the duty-free all fit, and a family arriving together leaves together. The fare is confirmed before you fly, so there is nothing to negotiate at arrivals."
    ],
    "ar_body": [
      "مشوار المطار هو المشوار يلي بيستاهل تحجزو من نهار قبل. قلّنا وقت الطيارة مش وقت الانطلاق ومنحسبها رجوع، والزحمة محسوبة — والطيارات الباكرة يلي ما حدا بدو يسوق لإلها هي بالزبط يلي منخططلها.",
      "واصل؟ ابعت رقم الرحلة. الڤان يعني الشنط، عربية الولد والـ duty free كلها بتفوت، والعيلة يلي وصلت سوا بتطلع سوا. السعر متفق عليه قبل ما تسافر، فما في شي تتفاوض عليه بالوصول."
    ],
    "en_hoods": [
      [
        "Arrivals",
        "we meet your flight"
      ],
      [
        "Departures",
        "dropped at the door"
      ],
      [
        "Antelias to BEY",
        "straight down the coast"
      ],
      [
        "Jounieh & Byblos",
        "to and from the airport"
      ],
      [
        "Metn villages",
        "to and from the airport"
      ],
      [
        "Hotels",
        "Beirut and the coast"
      ]
    ],
    "ar_hoods": [
      [
        "الوصول",
        "منستقبلك"
      ],
      [
        "المغادرة",
        "منوصلك عالباب"
      ],
      [
        "أنطلياس — المطار",
        "عالساحل مباشرة"
      ],
      [
        "جونية وجبيل",
        "من وإلى المطار"
      ],
      [
        "قرى المتن",
        "من وإلى المطار"
      ],
      [
        "الفنادق",
        "بيروت والساحل"
      ]
    ]
  },
  {
    "slug": "taxi-beirut",
    "icon": "city",
    "place": "City",
    "en": "Beirut",
    "ar": "بيروت",
    "en_sub": "Achrafieh, Hamra, Downtown, Gemmayzeh",
    "ar_sub": "الأشرفية، الحمرا، الوسط، الجميزة",
    "en_title": "Taxi in Beirut — Premium Mercedes Vito | Vito Taxi by Charbel",
    "ar_title": "تاكسي في بيروت — مرسيدس ڤيتو فاخرة | ڤيتو تاكسي مع شربل",
    "en_desc": "Premium taxi across Beirut — Achrafieh, Hamra, Downtown, Gemmayzeh, Verdun. Black Mercedes Vito, price confirmed first. WhatsApp or call 70 609 211.",
    "ar_desc": "تاكسي فاخر بكل بيروت — الأشرفية، الحمرا، الوسط، الجميزة، فردان. مرسيدس ڤيتو سوداء والسعر أولاً. واتساب أو اتصل 70 609 211.",
    "en_h1": "Beirut, *door to door.*",
    "ar_h1": "بيروت، *من الباب للباب.*",
    "en_lede": "Meetings in Downtown, dinner in Gemmayzeh, a hotel in Achrafieh or Hamra — rides across the capital in a calm, air-conditioned Mercedes Vito.",
    "ar_lede": "اجتماع بالوسط، عشاء بالجميزة، فندق بالأشرفية أو الحمرا — مشاوير بكل العاصمة بمرسيدس ڤيتو هادية ومكيّفة.",
    "en_body": [
      "Beirut traffic is a timing problem, not a distance problem. Knowing which road is moving at eight in the morning and which one at eight at night is the difference between arriving calm and arriving late.",
      "For evenings out, book the ride home at the same time as the ride there. For visitors staying in the city, one number covers the airport, the day trips and everything in between."
    ],
    "ar_body": [
      "زحمة بيروت مشكلة وقت مش مسافة. إنك تعرف أي طريق ماشي الساعة تمانة الصبح وأيّا واحد الساعة تمانة المسا هو الفرق بين إنك توصل مرتاح أو توصل متأخر.",
      "للسهرات، احجز الرجعة مع الروحة. ولزوار المدينة، رقم واحد بيغطي المطار، رحلات النهار وكل شي بيناتهم."
    ],
    "en_hoods": [
      [
        "Achrafieh",
        "Sassine, Sodeco, Monot"
      ],
      [
        "Gemmayzeh",
        "and Mar Mikhael"
      ],
      [
        "Downtown",
        "Beirut Central District"
      ],
      [
        "Hamra",
        "and Ras Beirut"
      ],
      [
        "Verdun",
        "and Raouche"
      ],
      [
        "Badaro",
        "and the museum"
      ]
    ],
    "ar_hoods": [
      [
        "الأشرفية",
        "ساسين، السوديكو، مونو"
      ],
      [
        "الجميزة",
        "ومار مخايل"
      ],
      [
        "وسط بيروت",
        "الداون تاون"
      ],
      [
        "الحمرا",
        "ورأس بيروت"
      ],
      [
        "فردان",
        "والروشة"
      ],
      [
        "بدارو",
        "والمتحف"
      ]
    ]
  },
  {
    "slug": "taxi-jounieh",
    "icon": "pin",
    "place": "City",
    "en": "Jounieh",
    "ar": "جونية",
    "en_sub": "Kaslik, Zouk, Harissa, Maameltein",
    "ar_sub": "الكسليك، الذوق، حريصا، المعاملتين",
    "en_title": "Taxi in Jounieh & Kaslik — Vito Taxi by Charbel",
    "ar_title": "تاكسي في جونية والكسليك — ڤيتو تاكسي مع شربل",
    "en_desc": "Premium taxi in Jounieh, Kaslik, Zouk, Maameltein and up to Harissa. Mercedes Vito with room for everyone. Book on WhatsApp 70 609 211.",
    "ar_desc": "تاكسي فاخر بجونية، الكسليك، الذوق، المعاملتين وطلوعاً لحريصا. مرسيدس ڤيتو في فيها محل للكل. احجز عالواتساب 70 609 211.",
    "en_h1": "Jounieh, *in style.*",
    "ar_h1": "جونية، *بأناقة.*",
    "en_lede": "Across the bay — Kaslik, Zouk, Ghadir, Maameltein — and up the hill to Harissa. Nights out, weddings and the ride home.",
    "ar_lede": "عالخليج كلّو — الكسليك، الذوق، غدير، المعاملتين — وطلوعاً لحريصا. سهرات، أعراس والرجعة عالبيت.",
    "en_body": [
      "Jounieh is fifteen minutes up the coast from Antelias, which makes it one of the runs we do most. Kaslik on a Saturday night and a wedding in a Kesrouan venue have one thing in common: nobody wants to be the one driving home.",
      "Groups are where the Vito earns its keep — one car for the whole table instead of three taxis and a group chat about who is in which one."
    ],
    "ar_body": [
      "جونية ربع ساعة من أنطلياس عالساحل، يعني من أكتر المشاوير يلي منعملها. الكسليك ليلة السبت وعرس بصالة بكسروان في بيناتهم شي واحد: ما حدا بدو يكون هوي يلي يسوق بالرجعة.",
      "المجموعات هي وين الڤيتو بتفرق — سيارة وحدة للطاولة كلها بدل تلات تاكسيات وغروب مين طالع مع مين."
    ],
    "en_hoods": [
      [
        "Kaslik",
        "and USEK"
      ],
      [
        "Zouk Mosbeh",
        "and Zouk Mikael"
      ],
      [
        "Maameltein",
        "and the bay"
      ],
      [
        "Harissa",
        "Our Lady of Lebanon"
      ],
      [
        "Ghadir",
        "and Sarba"
      ],
      [
        "Adma",
        "and Tabarja"
      ]
    ],
    "ar_hoods": [
      [
        "الكسليك",
        "والجامعة"
      ],
      [
        "ذوق مصبح",
        "وذوق مكايل"
      ],
      [
        "المعاملتين",
        "والخليج"
      ],
      [
        "حريصا",
        "سيدة لبنان"
      ],
      [
        "غدير",
        "وصربا"
      ],
      [
        "أدما",
        "وطبرجا"
      ]
    ]
  },
  {
    "slug": "taxi-byblos",
    "icon": "map",
    "place": "City",
    "en": "Byblos (Jbeil)",
    "ar": "جبيل",
    "en_sub": "The old souk, the port, Amchit",
    "ar_sub": "السوق القديم، المرفأ، عمشيت",
    "en_title": "Taxi to Byblos (Jbeil) — Private Mercedes Vito | Vito Taxi",
    "ar_title": "تاكسي إلى جبيل — مرسيدس ڤيتو خاصة | ڤيتو تاكسي",
    "en_desc": "Private taxi to and from Byblos (Jbeil) — the old souk, the port, Amchit — from Beirut, Antelias or the airport. Mercedes Vito. WhatsApp 70 609 211.",
    "ar_desc": "تاكسي خاص من وإلى جبيل — السوق القديم، المرفأ، عمشيت — من بيروت، أنطلياس أو المطار. مرسيدس ڤيتو. واتساب 70 609 211.",
    "en_h1": "Byblos, *unhurried.*",
    "ar_h1": "جبيل، *عراحتك.*",
    "en_lede": "The oldest city on the coast deserves an easy ride there. Rides to Byblos from Antelias, Beirut or the airport — or a driver who waits while you explore.",
    "ar_lede": "أقدم مدينة عالساحل بتستاهل مشوار مريح. من أنطلياس، بيروت أو المطار لجبيل — أو سائق بينطرك وإنت عم تتمشى.",
    "en_body": [
      "Byblos is an easy run up the coastal highway. Dinner by the old port, a walk through the souk, a wedding in one of the venues around Amchit — all better when nobody has to find parking or drive back.",
      "Visitors often pair Byblos with Jeita and Harissa in a single day. Tell us the plan and we quote the day as one price."
    ],
    "ar_body": [
      "جبيل مشوار سهل عالأوتوستراد الساحلي. عشاء حد المرفأ القديم، مشوار بالسوق، عرس بإحدى الصالات حوالي عمشيت — كلها أحلى لما ما حدا مضطر يلاقي صفّة أو يسوق بالرجعة.",
      "الزوار كتير بيجمعوا جبيل مع جعيتا وحريصا بنهار واحد. قلّنا البرنامج ومنعطيك سعر واحد للنهار كلّو."
    ],
    "en_hoods": [
      [
        "Old souk",
        "and the citadel"
      ],
      [
        "Old port",
        "dinner by the sea"
      ],
      [
        "Amchit",
        "and the wedding venues"
      ],
      [
        "Blat",
        "and the university"
      ],
      [
        "Halat",
        "and Fidar"
      ],
      [
        "Jbeil to BEY",
        "airport transfers"
      ]
    ],
    "ar_hoods": [
      [
        "السوق القديم",
        "والقلعة"
      ],
      [
        "المرفأ القديم",
        "عشاء عالبحر"
      ],
      [
        "عمشيت",
        "وصالات الأعراس"
      ],
      [
        "بلاط",
        "والجامعة"
      ],
      [
        "حالات",
        "والفيدار"
      ],
      [
        "جبيل — المطار",
        "توصيل مطار"
      ]
    ]
  },
  {
    "slug": "taxi-metn",
    "icon": "pin",
    "place": "AdministrativeArea",
    "en": "Metn",
    "ar": "المتن",
    "en_sub": "Broumana, Beit Mery, Bikfaya",
    "ar_sub": "برمانا، بيت مري، بكفيا",
    "en_title": "Taxi in the Metn — Broumana, Beit Mery, Bikfaya | Vito Taxi",
    "ar_title": "تاكسي بالمتن — برمانا، بيت مري، بكفيا | ڤيتو تاكسي",
    "en_desc": "Premium taxi across the Metn — Broumana, Beit Mery, Bikfaya, Mansourieh, Jdeideh. Based in Antelias. Mercedes Vito, WhatsApp 70 609 211.",
    "ar_desc": "تاكسي فاخر بكل المتن — برمانا، بيت مري، بكفيا، المنصورية، الجديدة. مركزنا أنطلياس. مرسيدس ڤيتو، واتساب 70 609 211.",
    "en_h1": "The Metn, *coast to hills.*",
    "ar_h1": "المتن، *من البحر للجبل.*",
    "en_lede": "From the coast up to Broumana, Beit Mery and Bikfaya — hill roads we drive every day, starting just below them in Antelias.",
    "ar_lede": "من الساحل لبرمانا، بيت مري وبكفيا — طرقات جبل منسوقها كل يوم، ومنطلق من تحتها بأنطلياس.",
    "en_body": [
      "The Metn is two roads, not one: the coastal highway and the hill roads that climb behind it. Which one is faster depends on the hour, and choosing wrong costs twenty minutes. Being based at the foot of those hills, the answer is not a guess.",
      "Summer dinners in Broumana, weddings in the mountain venues, a Sunday in Bikfaya — book the way up and the way down together."
    ],
    "ar_body": [
      "المتن طريقين مش طريق: الأوتوستراد الساحلي وطرقات الجبل يلي طالعة وراه. أيّا واحد أسرع بيتوقف عالساعة، والغلط بيكلّف عشرين دقيقة. ولأنّا بأسفل هالجبال، الجواب مش تخمين.",
      "عشاء صيفي ببرمانا، أعراس بصالات الجبل، نهار أحد ببكفيا — احجز الطلعة والنزلة سوا."
    ],
    "en_hoods": [
      [
        "Broumana",
        "and Baabdat"
      ],
      [
        "Beit Mery",
        "and Ain Saadeh"
      ],
      [
        "Bikfaya",
        "and Mhaydseh"
      ],
      [
        "Mansourieh",
        "and Mkalles"
      ],
      [
        "Jdeideh",
        "and Sin el Fil"
      ],
      [
        "Dekwaneh",
        "and Sad el Baouchrieh"
      ]
    ],
    "ar_hoods": [
      [
        "برمانا",
        "وبعبدات"
      ],
      [
        "بيت مري",
        "وعين سعادة"
      ],
      [
        "بكفيا",
        "والمحيدثة"
      ],
      [
        "المنصورية",
        "والمكلس"
      ],
      [
        "الجديدة",
        "وسن الفيل"
      ],
      [
        "الدكوانة",
        "وسد البوشرية"
      ]
    ]
  },
  {
    "slug": "taxi-batroun",
    "icon": "map",
    "place": "City",
    "en": "Batroun",
    "ar": "البترون",
    "en_sub": "The old town, the beaches, the nights",
    "ar_sub": "البلدة القديمة، البحر، السهرات",
    "en_title": "Taxi to Batroun — Private Mercedes Vito | Vito Taxi by Charbel",
    "ar_title": "تاكسي إلى البترون — مرسيدس ڤيتو خاصة | ڤيتو تاكسي مع شربل",
    "en_desc": "Private taxi to Batroun from Beirut, Antelias or the airport — beach days, weddings, nights out and the safe ride home. Mercedes Vito. WhatsApp 70 609 211.",
    "ar_desc": "تاكسي خاص للبترون من بيروت، أنطلياس أو المطار — نهارات بحر، أعراس، سهرات ورجعة آمنة. مرسيدس ڤيتو. واتساب 70 609 211.",
    "en_h1": "Batroun, *and back.*",
    "ar_h1": "البترون، *وبالرجعة.*",
    "en_lede": "Beach clubs by day, the old town by night, and a driver for the long way home. Rides to Batroun for groups, couples and wedding guests.",
    "ar_lede": "بحر بالنهار، البلدة القديمة بالليل، وسائق لطريق الرجعة الطويل. مشاوير للبترون للمجموعات، الأزواج وضيوف الأعراس.",
    "en_body": [
      "Batroun is where the summer goes — and the drive back after a long day at the beach or a late night in the old town is exactly the one you should not be doing yourself.",
      "The Vito takes the whole group in one car, cool bags and all. Book the return at the same time and it is there when you are ready to leave."
    ],
    "ar_body": [
      "البترون هي وين بيروح الصيف — والرجعة بعد نهار طويل عالبحر أو سهرة متأخرة بالبلدة القديمة هي بالزبط الطريق يلي ما لازم تسوقها إنت.",
      "الڤيتو بتاخد المجموعة كلها بسيارة وحدة، مع البرادات. احجز الرجعة بنفس الوقت وبتكون ناطرتك وقت تكون جاهز."
    ],
    "en_hoods": [
      [
        "Old town",
        "and the Phoenician wall"
      ],
      [
        "Beach clubs",
        "along the coast"
      ],
      [
        "Wedding venues",
        "around Batroun"
      ],
      [
        "Kfar Abida",
        "and Thoum"
      ],
      [
        "Chekka",
        "and the north coast"
      ],
      [
        "Batroun to BEY",
        "airport transfers"
      ]
    ],
    "ar_hoods": [
      [
        "البلدة القديمة",
        "والسور الفينيقي"
      ],
      [
        "المسابح",
        "عالساحل"
      ],
      [
        "صالات الأعراس",
        "حوالي البترون"
      ],
      [
        "كفرعبيدا",
        "وثوم"
      ],
      [
        "شكا",
        "والساحل الشمالي"
      ],
      [
        "البترون — المطار",
        "توصيل مطار"
      ]
    ]
  },
  {
    "slug": "taxi-faraya",
    "icon": "snow",
    "place": "Place",
    "en": "Faraya & Mzaar",
    "ar": "فاريا والمزار",
    "en_sub": "Ski days, chalets, mountain weekends",
    "ar_sub": "تزلج، شاليهات، ويك إند بالجبل",
    "en_title": "Taxi to Faraya & Mzaar Ski Resort — Vito Taxi by Charbel",
    "ar_title": "تاكسي إلى فاريا ومزار كفرذبيان — ڤيتو تاكسي مع شربل",
    "en_desc": "Private taxi to Faraya, Mzaar Kfardebian and the Kesrouan mountains — room for skis and the whole group. Mercedes Vito from Antelias. WhatsApp 70 609 211.",
    "ar_desc": "تاكسي خاص لفاريا، مزار كفرذبيان وجبال كسروان — محل للسكي وللمجموعة كلها. مرسيدس ڤيتو من أنطلياس. واتساب 70 609 211.",
    "en_h1": "Up to the *snow.*",
    "ar_h1": "طلوعاً *عالتلج.*",
    "en_lede": "Ski days at Mzaar, chalet weekends in Faraya, and a warm car waiting at the end of the day. Skis, boots and the whole group included.",
    "ar_lede": "نهارات تزلج بالمزار، ويك إند بشاليه بفاريا، وسيارة دافية ناطرتك بآخر النهار. السكي، الجزم والمجموعة كلها معك.",
    "en_body": [
      "The road up to Faraya is beautiful and, on a winter morning, the last road you want to drive yourself. The Vito has the room for skis and boards, and a driver who does the climb regularly.",
      "Book the way up in the morning and the way down when the lifts close. Summer works too — Faraya and Kfardebian are cool when the coast is not."
    ],
    "ar_body": [
      "طريق فاريا حلوة كتير، وبصبحية شتوية هي آخر طريق بدك تسوقها إنت. الڤيتو فيها محل للسكي والسنوبورد، وسائق بيطلع هالطريق دايماً.",
      "احجز الطلعة الصبح والنزلة وقت تسكّر المصاعد. وبالصيف كمان — فاريا وكفرذبيان بتكون فرشة لما الساحل شوب."
    ],
    "en_hoods": [
      [
        "Mzaar",
        "Kfardebian ski resort"
      ],
      [
        "Faraya",
        "the village and chalets"
      ],
      [
        "Faqra",
        "and the club"
      ],
      [
        "Ouyoun el Simane",
        "the slopes"
      ],
      [
        "Kfardebian",
        "Faqra Roman ruins"
      ],
      [
        "Harissa",
        "on the way"
      ]
    ],
    "ar_hoods": [
      [
        "المزار",
        "منتجع كفرذبيان"
      ],
      [
        "فاريا",
        "الضيعة والشاليهات"
      ],
      [
        "فقرا",
        "والنادي"
      ],
      [
        "عيون السيمان",
        "المنحدرات"
      ],
      [
        "كفرذبيان",
        "آثار فقرا"
      ],
      [
        "حريصا",
        "عالطريق"
      ]
    ]
  },
  {
    "slug": "lebanon-private-driver",
    "icon": "map",
    "place": "Country",
    "en": "Private driver, Lebanon",
    "ar": "سائق خاص بلبنان",
    "en_sub": "Day trips: Cedars, Baalbek, the south",
    "ar_sub": "رحلات نهار: الأرز، بعلبك، الجنوب",
    "en_title": "Private Driver in Lebanon — Day Trips by Mercedes Vito | Vito Taxi",
    "ar_title": "سائق خاص بلبنان — رحلات نهار بمرسيدس ڤيتو | ڤيتو تاكسي",
    "en_desc": "Hire a private driver in Lebanon for the day: Jeita, Harissa, Byblos, the Cedars, Baalbek, Tyre and Sidon in a Mercedes Vito. One price for the day. WhatsApp 70 609 211.",
    "ar_desc": "سائق خاص بلبنان لنهار كامل: جعيتا، حريصا، جبيل، الأرز، بعلبك، صور وصيدا بمرسيدس ڤيتو. سعر واحد للنهار. واتساب 70 609 211.",
    "en_h1": "Lebanon, *your way.*",
    "ar_h1": "لبنان، *عطريقتك.*",
    "en_lede": "A private driver and a spacious Mercedes Vito for the whole day. You choose the places; we handle the roads, the timing and the parking.",
    "ar_lede": "سائق خاص ومرسيدس ڤيتو واسعة لنهار كامل. إنت بتختار الأماكن، ونحنا منهتم بالطرقات، الوقت والصفّة.",
    "en_body": [
      "Lebanon is small on a map and long on the road. A day that takes in Jeita Grotto, Harissa and Byblos, or the Cedars and the Qadisha valley, or Baalbek and a lunch in Zahle, is easy with a driver and exhausting without one.",
      "Send us the places you want to see and the number of people. We suggest an order that makes sense, and quote the day as one price before you commit."
    ],
    "ar_body": [
      "لبنان صغير عالخريطة وطويل عالطريق. نهار بيجمع مغارة جعيتا، حريصا وجبيل، أو الأرز ووادي قاديشا، أو بعلبك وغدا بزحلة، سهل مع سائق ومتعب بلاه.",
      "ابعتلنا الأماكن يلي بدك تشوفها وعدد الأشخاص. منقترح ترتيب منطقي، ومنعطيك سعر واحد للنهار قبل ما تلتزم."
    ],
    "en_hoods": [
      [
        "Jeita & Harissa",
        "grotto and cable car"
      ],
      [
        "The Cedars",
        "and the Qadisha valley"
      ],
      [
        "Baalbek",
        "and Zahle"
      ],
      [
        "Tyre & Sidon",
        "the south coast"
      ],
      [
        "Beiteddine",
        "and Deir el Qamar"
      ],
      [
        "Byblos & Batroun",
        "the north coast"
      ]
    ],
    "ar_hoods": [
      [
        "جعيتا وحريصا",
        "المغارة والتلفريك"
      ],
      [
        "الأرز",
        "ووادي قاديشا"
      ],
      [
        "بعلبك",
        "وزحلة"
      ],
      [
        "صور وصيدا",
        "الساحل الجنوبي"
      ],
      [
        "بيت الدين",
        "ودير القمر"
      ],
      [
        "جبيل والبترون",
        "الساحل الشمالي"
      ]
    ]
  }
]

export type Area = (typeof AREAS)[number]

/* Which photo (public/img/<name>.webp) illustrates each area. */
export const AREA_IMG: Record<string, string> = {
  "taxi-antelias": "marina",
  "beirut-airport-taxi": "vito-sunset",
  "taxi-beirut": "raouche",
  "taxi-jounieh": "jounieh",
  "taxi-byblos": "byblos",
  "taxi-metn": "metn",
  "taxi-batroun": "batroun",
  "taxi-faraya": "faraya",
  "lebanon-private-driver": "cedars"
}

/* Area-page FAQs (also emitted as FAQPage structured data). */
export const AREA_FAQ: Record<string, Record<Lang, string[][]>> = {
  "taxi-antelias": {
    "en": [
      [
        "How do I book a taxi in Antelias?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Antelias?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في أنطلياس؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في أنطلياس؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "beirut-airport-taxi": {
    "en": [
      [
        "How do I book a taxi in Beirut Airport?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Beirut Airport?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في مطار بيروت؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في مطار بيروت؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "taxi-beirut": {
    "en": [
      [
        "How do I book a taxi in Beirut?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Beirut?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في بيروت؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في بيروت؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "taxi-jounieh": {
    "en": [
      [
        "How do I book a taxi in Jounieh?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Jounieh?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في جونية؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في جونية؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "taxi-byblos": {
    "en": [
      [
        "How do I book a taxi in Byblos (Jbeil)?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Byblos (Jbeil)?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في جبيل؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في جبيل؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "taxi-metn": {
    "en": [
      [
        "How do I book a taxi in Metn?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Metn?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في المتن؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في المتن؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "taxi-batroun": {
    "en": [
      [
        "How do I book a taxi in Batroun?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Batroun?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في البترون؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في البترون؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "taxi-faraya": {
    "en": [
      [
        "How do I book a taxi in Faraya & Mzaar?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Faraya & Mzaar?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في فاريا والمزار؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في فاريا والمزار؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  },
  "lebanon-private-driver": {
    "en": [
      [
        "How do I book a taxi in Private driver, Lebanon?",
        "Send a WhatsApp or call 70 609 211 with your pickup point, destination and time. The price is confirmed before you ride."
      ],
      [
        "How much is a ride in Private driver, Lebanon?",
        "It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end."
      ],
      [
        "Can you take a group with luggage?",
        "Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book."
      ],
      [
        "Can I book the return trip too?",
        "Yes — book both legs in the same message and the car is there when you are ready to leave."
      ]
    ],
    "ar": [
      [
        "كيف بحجز تاكسي في سائق خاص بلبنان؟",
        "ابعت واتساب أو اتصل عالرقم 70 609 211 مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار."
      ],
      [
        "قدّيش كلفة المشوار في سائق خاص بلبنان؟",
        "بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت."
      ],
      [
        "فيكن تاخدوا مجموعة مع شنط؟",
        "أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز."
      ],
      [
        "فيني احجز الرجعة كمان؟",
        "أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز."
      ]
    ]
  }
}

/* Lebanon photography credits (Wikimedia Commons, Creative Commons licences). */
export const CREDITS: Record<string, { title: string; creator: string | null; license: string; lv: string; lurl: string | null; src: string | null }> = {
  "beirut-night": {
    "title": "Beirut sunset - panoramio (1)",
    "creator": "L-BBE",
    "license": "by",
    "lv": "3.0",
    "lurl": "https://creativecommons.org/licenses/by/3.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=60338756"
  },
  "raouche": {
    "title": "Raouche sunset",
    "creator": "Rabih omeiri",
    "license": "by-sa",
    "lv": "4.0",
    "lurl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=73082199"
  },
  "cedars": {
    "title": "Cedars of God (Lebanon cedar forest), Lebanon",
    "creator": "Vyacheslav Argenberg",
    "license": "by",
    "lv": "4.0",
    "lurl": "https://creativecommons.org/licenses/by/4.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=92872079"
  },
  "qadisha": {
    "title": "Qadisha Valley, Aerial View From Qannoubine Monastery",
    "creator": "Evan Williams",
    "license": "by-sa",
    "lv": "4.0",
    "lurl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=84143140"
  },
  "faraya": {
    "title": "File:Rock formations in Faraya.jpg",
    "creator": "FOSS-the-world",
    "license": "by-sa",
    "lv": "4.0",
    "lurl": "https://creativecommons.org/licenses/by-sa/4.0",
    "src": "https://commons.wikimedia.org/w/index.php?curid=63027119"
  },
  "batroun": {
    "title": "Batroun - Mar Maroun Church",
    "creator": "Serge Melki",
    "license": "by",
    "lv": "2.0",
    "lurl": "https://creativecommons.org/licenses/by/2.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=4024024"
  },
  "jounieh": {
    "title": "Jounieh Bay, Jounieh, Lebanon",
    "creator": "Vyacheslav Argenberg",
    "license": "by",
    "lv": "4.0",
    "lurl": "https://creativecommons.org/licenses/by/4.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=92846160"
  },
  "byblos": {
    "title": "Byblos Libanon 2003",
    "creator": "Orient at de.wikipedia",
    "license": "by-sa",
    "lv": "2.0",
    "lurl": "https://creativecommons.org/licenses/by-sa/2.0/de/deed.en/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=3266681"
  },
  "baalbek": {
    "title": "Lebanon, Baalbek, Temple of Bacchus 2",
    "creator": "Vyacheslav Argenberg",
    "license": "by",
    "lv": "4.0",
    "lurl": "https://creativecommons.org/licenses/by/4.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=93336418"
  },
  "metn": {
    "title": "File:Sacred Heart Church of Qadisha Valley - panoramio.jpg",
    "creator": "Evilscaught",
    "license": "by",
    "lv": "3.0",
    "lurl": "https://creativecommons.org/licenses/by/3.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=53559555"
  },
  "marina": {
    "title": "File:St Georges Bay Towers and Marina.JPG",
    "creator": "Wusel007",
    "license": "by-sa",
    "lv": "3.0",
    "lurl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "src": "https://commons.wikimedia.org/w/index.php?curid=30677928"
  }
}
