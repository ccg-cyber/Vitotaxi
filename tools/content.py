#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Words, areas and structured data for every page of vitotaxi.cierp.uk.
Edit the copy here, then run:

    python3 tools/pages.py

which rewrites the .html files. Never edit the generated .html files by hand.
"""
import html, json, os, sys, urllib.parse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ── The one block a non-programmer will ever need ─────────────────────────────
CFG = dict(
    site='https://vitotaxi.cierp.uk',
    name='Vito Taxi by Charbel',
    tel='+96170609211',            # tel: links
    tel_show='70 609 211',         # how it is written on the page
    tel_intl='+961 70 609 211',
    wa='96170609211',              # WhatsApp number, no plus, no spaces
    instagram='https://www.instagram.com/vitotaxibycharbel/',
    facebook='https://www.facebook.com/share/1BdaQC3ukn/',
    maps='https://www.google.com/maps?cid=2281982543360949360',
    rating='4.9', reviews='17', rating_asof='September 2026', rating_asof_ar='أيلول ٢٠٢٦',
    lat=33.9175029, lng=35.5840437,
    # Photos dropped into photos/ appear in a gallery automatically; missing files are skipped.
    photos=[('vito-1.jpg', 'The Vito'), ('vito-2.jpg', 'The cabin'), ('vito-3.jpg', 'Charbel')],
    # Real quotes from real riders, with permission. Empty list = the section is not rendered.
    voices=[],
)
E = html.escape


def wa_link(text):
    return 'https://wa.me/%s?text=%s' % (CFG['wa'], urllib.parse.quote(text))


# ── Words ─────────────────────────────────────────────────────────────────────
T = {
'en': dict(
  dir='ltr', locale='en_US', other='ar', other_label='عربي', other_name='العربية',
  title='Vito Taxi by Charbel — Premium Mercedes Vito Taxi in Antelias, Beirut & Lebanon',
  desc='24/7 taxi in a spacious Mercedes-Benz Vito from Antelias: Beirut Airport transfers, daily rides, trips and events across Lebanon. Rated 4.9 on Google. WhatsApp 70 609 211.',
  og_title='Vito Taxi by Charbel — every ride, first class',
  tagline='by Charbel',
  skip='Skip to content',
  nav=[('#services', 'Services'), ('#vito', 'The Vito'), ('#book', 'Book'), ('#areas', 'Areas'), ('#faq', 'FAQ')],
  call='Call', book_wa='Book on WhatsApp', wa_short='WhatsApp',
  wa_hello='Hello Charbel, I would like to book a ride.',
  kicker='24/7 · Antelias · All of Lebanon',
  h1='Every ride, <em class="gold">first class.</em>',
  lead='A spacious, air-conditioned Mercedes-Benz Vito, expert drivers who know every road, and the price confirmed before you set off. Airport transfers, daily rides, trips and events — day or night, from Antelias.',
  on_google='on Google', reviews_word='reviews', based='Based in Antelias', fast='Open 24/7',
  chip1=('Airport transfers', 'Beirut–Rafic Hariri Intl.'), chip2=('4.9 on Google', '17 reviews'), chip3=('Room for everyone', 'Groups & luggage'),
  scroll='Scroll',
  marquee=['Beirut Airport', 'Beirut', 'Jounieh', 'Byblos', 'Batroun', 'Faraya', 'Harissa', 'Jeita', 'Broumana', 'The Cedars', 'Baalbek', 'Tyre', 'Sidon'],
  svc_k='Services', svc_h='One car. <em class="gold">Every journey.</em>',
  svc_p='Your comfort, our priority. From a 4 a.m. flight to a wedding in the mountains — rain or shine, day or night.',
  services=[
    ('plane', 'Airport transfers', 'To and from Beirut–Rafic Hariri International. Share your flight and the pickup is planned around it — early departures and late landings included.'),
    ('city', 'City rides', 'Beirut, the Metn and Kesrouan: meetings, appointments, dinners and the ride home, without the parking or the traffic stress.'),
    ('map', 'Across Lebanon', 'A private driver for the day — Byblos, Batroun, Harissa, Jeita, the Cedars, Baalbek or the south. You choose the stops, we keep the time.'),
    ('glass', 'Evenings & events', 'Weddings, celebrations and nights out. Arrive looking the part and get home without thinking about who drives.'),
    ('group', 'Families & groups', 'A van, not a sedan: the whole family or group rides together, with the luggage in the back instead of on your lap.'),
    ('brief', 'Business & hotels', 'Punctual, discreet pickups for executives, visiting clients and hotel guests. One message and the car is booked.'),
  ],
  car_k='The Vito', car_h='Space you can <em class="gold">feel.</em>',
  car_p='The Mercedes-Benz Vito is built for exactly this: a high, quiet cabin, a sliding door that makes getting in effortless, and room left over once everyone is seated.',
  car_tag='Mercedes-Benz Vito',
  feats=[('seat', 'Seats for the group', 'Family, friends or colleagues — together in one car.'),
         ('bag', 'Room for luggage', 'Suitcases, strollers, golf bags or ski gear.'),
         ('snow', 'Climate control', 'Cool in August, warm on the way up to Faraya.'),
         ('shield', 'Clean, safe, on time', 'Professional drivers and a car kept spotless.')],
  book_k='Book', book_h='Your ride, <em class="gold">in one message.</em>',
  book_p='Fill in what you know — the form writes the WhatsApp message for you. Nothing is stored on this site.',
  steps=[('Tell us where and when', 'Use the form, send a WhatsApp or just call.'),
         ('Get your price', 'We confirm the fare and the time before anything is booked — fair, affordable, no surprises.'),
         ('Ride', 'Your driver is there when you walk out. Sit back.')],
  or_call='Prefer to talk?',
  form_h='Request a ride', form_sub='Replies usually come fast on WhatsApp.',
  trip_lbl='Trip',
  trips=[('ride', 'City ride'), ('airport', 'Airport'), ('day', 'Day trip'), ('event', 'Event')],
  f_from='Pickup', f_from_ph='e.g. Antelias, Naccache, hotel name…',
  f_to='Destination', f_to_ph='e.g. Beirut Airport, Byblos…',
  f_date='Date', f_time='Time', f_pax='Passengers', f_bags='Bags', f_flight='Flight number', f_flight_ph='e.g. ME 202',
  f_name='Your name', f_name_ph='Optional', f_notes='Anything else', f_notes_ph='Child seat, extra stop, return trip…',
  pax_opts=['1', '2', '3', '4', '5', '6', '7+'], bags_opts=['0', '1', '2', '3', '4', '5+'],
  f_send='Send on WhatsApp', f_call='Call instead',
  fine='Opens WhatsApp with your details filled in. You can edit before you send.',
  js=dict(hello='Hello Charbel, I would like to book a ride.', type='Trip', from_='From', to='To', when='When', now='As soon as possible',
          pax='Passengers', bags='Bags', flight='Flight', name='Name', notes='Notes', price='Could you confirm the price and availability? Thank you.',
          airport='Beirut Airport', trips={'ride': 'City ride', 'airport': 'Airport transfer', 'day': 'Day trip', 'event': 'Event'}),
  rate_k='Reviews', rate_h='Riders say it <em class="gold">best.</em>',
  rate_p='Rated {r} out of 5 by {n} riders on Google Maps. Read what they wrote — and if you have ridden with us, add yours.',
  rate_btn='Read the reviews on Google', rate_asof='Google rating as of {d}.', out_of='out of 5',
  areas_k='Areas', areas_h='Based in Antelias. <em class="gold">Driving everywhere.</em>',
  areas_p='The coast, the mountains and the airport road. Pick your area for the details.',
  faq_k='Questions', faq_h='Good to <em class="gold">know.</em>',
  faq=[
    ('How do I book a ride?', 'Send a WhatsApp or call 70 609 211. The booking form on this page writes the message for you: pickup, destination, time, passengers and bags.'),
    ('How much does a ride cost?', 'It depends on the distance, the time and the kind of trip. You get the price on WhatsApp or by phone before you confirm, so there is no surprise at the end of the ride.'),
    ('Do you do Beirut Airport pickups and drop-offs?', 'Yes. Airport transfers to and from Beirut–Rafic Hariri International are one of our main services. Send your flight number and landing or departure time when you book.'),
    ('How many passengers and bags fit?', 'The Vito is a van, so a family or a small group rides together with their luggage. Tell us how many people and bags when you book and we confirm it fits.'),
    ('Can you drive outside Beirut?', 'Yes. From Antelias we drive across Lebanon — Jounieh, Byblos, Batroun, Faraya, the Cedars, Baalbek, the south — as a single ride or a private driver for the day.'),
    ('Can I book in advance?', 'Yes, and it is the best way for early flights, weddings and day trips. Send the date and time and we confirm the booking.'),
    ('Are you available at night?', 'Yes — we run 24/7. Late landings, early departures and the ride home after a night out are all part of the job.'),
    ('Where are you based?', 'In Antelias, on the coast just north of Beirut, which puts the whole of Beirut, the Metn and Kesrouan a short drive away.'),
  ],
  final_k='Ready when you are', final_h='Your Vito is <em class="gold">one message away.</em>',
  final_p='Anywhere, anytime. Tell us where you are and where you are going — we take it from there.',
  foot_about='A 24/7 Mercedes-Benz Vito taxi service based in Antelias, Lebanon — airport transfers, daily rides, trips and events.',
  f_services='Services', f_areas='Areas', f_contact='Contact', save_contact='Save contact', find_us='Find us on Google Maps',
  rights='All rights reserved.', addr='Antelias, Metn, Lebanon',
  home='Home', other_areas='Other areas', side_h='Book this ride', side_p='Send your pickup and time — the price is confirmed before you ride.',
  area_faq_h='Questions about {a}',
  nf_title='Page not found — Vito Taxi by Charbel', nf_h='Wrong turn.', nf_p='This page does not exist, but your ride still can. Head back home or message us on WhatsApp.', nf_home='Back to the homepage',
),
'ar': dict(
  dir='rtl', locale='ar_LB', other='en', other_label='EN', other_name='English',
  title='ڤيتو تاكسي مع شربل — تاكسي مرسيدس ڤيتو فاخر في أنطلياس وبيروت ولبنان',
  desc='تاكسي ٢٤/٧ بمرسيدس ڤيتو واسعة من أنطلياس: توصيل مطار بيروت، مشاوير يومية، رحلات ومناسبات بكل لبنان. تقييم ٤٫٩ على Google. واتساب 70 609 211.',
  og_title='ڤيتو تاكسي مع شربل — كل مشوار درجة أولى',
  tagline='مع شربل',
  skip='انتقل إلى المحتوى',
  nav=[('#services', 'الخدمات'), ('#vito', 'السيارة'), ('#book', 'احجز'), ('#areas', 'المناطق'), ('#faq', 'أسئلة')],
  call='اتصل', book_wa='احجز عالواتساب', wa_short='واتساب',
  wa_hello='مرحبا شربل، بدي احجز مشوار.',
  kicker='٢٤/٧ · أنطلياس · كل لبنان',
  h1='كل مشوار، <em class="gold">درجة أولى.</em>',
  lead='مرسيدس ڤيتو واسعة ومكيّفة، سائقين محترفين بيعرفوا كل الطرقات، والسعر متفق عليه قبل ما تنطلق. توصيل مطار، مشاوير يومية، رحلات ومناسبات — ليل نهار، انطلاقاً من أنطلياس.',
  on_google='على Google', reviews_word='تقييم', based='مركزنا أنطلياس', fast='متاحين ٢٤/٧',
  chip1=('توصيل المطار', 'مطار رفيق الحريري الدولي'), chip2=('٤٫٩ على Google', '١٧ تقييم'), chip3=('في محل للكل', 'عائلات وشنط'),
  scroll='مرّر',
  marquee=['مطار بيروت', 'بيروت', 'جونية', 'جبيل', 'البترون', 'فاريا', 'حريصا', 'جعيتا', 'برمانا', 'الأرز', 'بعلبك', 'صور', 'صيدا'],
  svc_k='الخدمات', svc_h='سيارة وحدة. <em class="gold">لكل مشوار.</em>',
  svc_p='راحتك أولويتنا. من طيارة الساعة أربعة الصبح لعرس بالجبل — شتي أو شمس، ليل أو نهار.',
  services=[
    ('plane', 'توصيل المطار', 'من وإلى مطار رفيق الحريري الدولي. ابعتلنا رقم الرحلة ومنرتّب الوقت على أساسها — حتى الطيارات الباكرة والوصول المتأخر.'),
    ('city', 'مشاوير المدينة', 'بيروت، المتن وكسروان: اجتماعات، مواعيد، عشاء والرجعة عالبيت، بلا هم الصفّة والزحمة.'),
    ('map', 'بكل لبنان', 'سائق خاص لنهار كامل — جبيل، البترون، حريصا، جعيتا، الأرز، بعلبك أو الجنوب. إنت بتختار الوقفات ونحنا منضبط الوقت.'),
    ('glass', 'سهرات ومناسبات', 'أعراس، احتفالات وسهرات. وصال بأناقة وارجع عالبيت بلا ما تفكّر مين بدو يسوق.'),
    ('group', 'عائلات ومجموعات', 'ڤان مش سيارة صغيرة: العيلة كلها أو الشلة بتقعد سوا، والشنط بالخلف مش بحضنك.'),
    ('brief', 'أعمال وفنادق', 'توصيل دقيق وراقي لرجال الأعمال، الزوار وضيوف الفنادق. رسالة وحدة والسيارة محجوزة.'),
  ],
  car_k='السيارة', car_h='راحة <em class="gold">بتحسّ فيها.</em>',
  car_p='المرسيدس ڤيتو معمولة لهيدا بالزبط: مقصورة عالية وهادية، باب جانبي منزلق بيسهّل الطلعة، ومساحة زيادة بعد ما يقعد الكل.',
  car_tag='مرسيدس-بنز ڤيتو',
  feats=[('seat', 'مقاعد للمجموعة', 'العيلة، الأصحاب أو الزملاء — سوا بسيارة وحدة.'),
         ('bag', 'محل للشنط', 'شنط سفر، عربايات أولاد، أو عدّة التزلج.'),
         ('snow', 'تكييف كامل', 'بارد بآب، ودافي عطريق فاريا.'),
         ('shield', 'نظافة، أمان ودقة', 'سائقين محترفين وسيارة دايماً نضيفة.')],
  book_k='احجز', book_h='مشوارك <em class="gold">برسالة وحدة.</em>',
  book_p='عبّي يلي بتعرفو — الاستمارة بتكتبلك رسالة الواتساب. ما في شي بينحفظ عهالموقع.',
  steps=[('قلّنا من وين ولوين وإيمتى', 'عبّي الاستمارة، ابعت واتساب، أو اتصل.'),
         ('بيوصلك السعر', 'منأكدلك السعر والوقت قبل ما ينحجز شي — سعر مناسب وبلا مفاجآت.'),
         ('ارتاح', 'السائق بيكون ناطرك وقت تطلع.')],
  or_call='بتفضّل تحكي؟',
  form_h='اطلب مشوار', form_sub='الرد عادةً سريع عالواتساب.',
  trip_lbl='نوع المشوار',
  trips=[('ride', 'مشوار بالمدينة'), ('airport', 'مطار'), ('day', 'رحلة نهار'), ('event', 'مناسبة')],
  f_from='من وين', f_from_ph='مثلاً أنطلياس، النقاش، اسم الفندق…',
  f_to='لوين', f_to_ph='مثلاً مطار بيروت، جبيل…',
  f_date='التاريخ', f_time='الساعة', f_pax='عدد الركاب', f_bags='الشنط', f_flight='رقم الرحلة', f_flight_ph='مثلاً ME 202',
  f_name='اسمك', f_name_ph='اختياري', f_notes='شي تاني؟', f_notes_ph='كرسي ولد، وقفة إضافية، رجعة…',
  pax_opts=['1', '2', '3', '4', '5', '6', '7+'], bags_opts=['0', '1', '2', '3', '4', '5+'],
  f_send='ابعت عالواتساب', f_call='أو اتصل',
  fine='بيفتح الواتساب ومعلوماتك مكتوبة. فيك تعدّل قبل ما تبعت.',
  js=dict(hello='مرحبا شربل، بدي احجز مشوار.', type='نوع المشوار', from_='من', to='إلى', when='الوقت', now='بأسرع وقت',
          pax='عدد الركاب', bags='الشنط', flight='رقم الرحلة', name='الاسم', notes='ملاحظات', price='فيك تأكدلي السعر إذا في مجال؟ شكراً.',
          airport='مطار بيروت', trips={'ride': 'مشوار بالمدينة', 'airport': 'توصيل مطار', 'day': 'رحلة نهار', 'event': 'مناسبة'}),
  rate_k='التقييمات', rate_h='الركاب <em class="gold">بيحكوا عنّا.</em>',
  rate_p='تقييم {r} من ٥ من {n} راكب على Google Maps. اقرا شو كتبوا — وإذا مشيت معنا، زيد رأيك.',
  rate_btn='اقرا التقييمات على Google', rate_asof='تقييم Google بتاريخ {d}.', out_of='من ٥',
  areas_k='المناطق', areas_h='من أنطلياس. <em class="gold">لكل مكان.</em>',
  areas_p='الساحل، الجبل وطريق المطار. اختار منطقتك لتعرف التفاصيل.',
  faq_k='أسئلة', faq_h='منيح <em class="gold">تعرف.</em>',
  faq=[
    ('كيف بحجز مشوار؟', 'ابعت واتساب أو اتصل عالرقم 70 609 211. استمارة الحجز بهالصفحة بتكتبلك الرسالة: من وين، لوين، الوقت، عدد الركاب والشنط.'),
    ('قدّيش كلفة المشوار؟', 'بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد، فما في مفاجآت بآخر المشوار.'),
    ('بتوصّلوا من وإلى مطار بيروت؟', 'أكيد. توصيل المطار من أهم خدماتنا. ابعت رقم الرحلة ووقت الوصول أو المغادرة وقت تحجز.'),
    ('قدّيش ركاب وشنط بتساع؟', 'الڤيتو ڤان، يعني العيلة أو مجموعة صغيرة بتقعد سوا مع شنطها. قلّنا عدد الركاب والشنط وقت الحجز ومنأكّدلك.'),
    ('فيكن تسوقوا لبرّا بيروت؟', 'أكيد. من أنطلياس منوصل لكل لبنان — جونية، جبيل، البترون، فاريا، الأرز، بعلبك، الجنوب — مشوار واحد أو سائق خاص لنهار كامل.'),
    ('فيني احجز من قبل؟', 'أكيد، وهيدي أحسن طريقة للطيارات الباكرة، الأعراس ورحلات النهار. ابعت التاريخ والساعة ومنأكّد الحجز.'),
    ('بتشتغلوا بالليل؟', 'أكيد — نحنا ٢٤/٧. الوصول المتأخر، الطيارات الباكرة والرجعة بعد السهرة كلها من شغلنا.'),
    ('وين مركزكن؟', 'بأنطلياس، عالساحل شمال بيروت، يعني كل بيروت والمتن وكسروان على مسافة قصيرة.'),
  ],
  final_k='جاهزين وقت ما بدك', final_h='الڤيتو تبعك <em class="gold">على بُعد رسالة.</em>',
  final_p='بأي مكان وبأي وقت. قلّنا وين إنت ولوين رايح — والباقي علينا.',
  foot_about='خدمة تاكسي ٢٤/٧ بمرسيدس-بنز ڤيتو، مركزها أنطلياس، لبنان — توصيل مطار، مشاوير يومية، رحلات ومناسبات.',
  f_services='الخدمات', f_areas='المناطق', f_contact='تواصل', save_contact='احفظ الرقم', find_us='موقعنا على Google Maps',
  rights='جميع الحقوق محفوظة.', addr='أنطلياس، المتن، لبنان',
  home='الرئيسية', other_areas='مناطق تانية', side_h='احجز هالمشوار', side_p='ابعت مكانك والوقت — السعر بيتأكّد قبل ما تمشي.',
  area_faq_h='أسئلة عن {a}',
  nf_title='الصفحة غير موجودة — ڤيتو تاكسي مع شربل', nf_h='غلطنا بالطريق.', nf_p='هالصفحة مش موجودة، بس مشوارك بعدو ممكن. ارجع عالرئيسية أو ابعتلنا عالواتساب.', nf_home='ارجع عالرئيسية',
),
}

# ── Areas: one entry here makes an English page, an Arabic page and the links to both ──
AREAS = [
 dict(slug='taxi-antelias', icon='pin', place='Place', en='Antelias', ar='أنطلياس',
   en_sub='Home base — Naccache, Rabieh, Dbayeh', ar_sub='مركزنا — النقاش، الرابية، ضبية',
   en_title='Taxi in Antelias — Vito Taxi by Charbel',
   ar_title='تاكسي في أنطلياس — ڤيتو تاكسي مع شربل',
   en_desc='Premium taxi in Antelias, Naccache, Rabieh, Dbayeh and Jal el Dib. Black Mercedes Vito, price confirmed before you ride. Call or WhatsApp 70 609 211.',
   ar_desc='تاكسي فاخر بأنطلياس، النقاش، الرابية، ضبية وجل الديب. مرسيدس ڤيتو سوداء والسعر متفق عليه قبل المشوار. اتصل أو واتساب 70 609 211.',
   en_h1='Taxi in <em class="gold">Antelias.</em>', ar_h1='تاكسي في <em class="gold">أنطلياس.</em>',
   en_lede='Antelias is home, so pickups here and in the neighbouring towns are the quickest we do. One message and the Vito is on its way.',
   ar_lede='أنطلياس هي مركزنا، فالمشوار من هون ومن البلدات الجارة هو الأسرع. رسالة وحدة والڤيتو جايي.',
   en_body=['Being based on the coastal road means the whole of the Metn coast is minutes away: Naccache and Rabieh above, Dbayeh and the Waterfront to the north, Jal el Dib and Zalka to the south. Beirut is a short run down the highway, and the airport is a straight line from here.',
            'Tell us the building, the church or the shop you are next to and that is usually enough. Whether it is a school run, a meeting in Beirut or a late dinner in Dbayeh, the price is confirmed before you get in.'],
   ar_body=['لأنّا عالأوتوستراد الساحلي، كل ساحل المتن على بُعد دقايق: النقاش والرابية لفوق، ضبية والواجهة البحرية شمالاً، جل الديب والزلقا جنوباً. بيروت مشوار قصير عالأوتوستراد، والمطار خط مستقيم من هون.',
            'قلّنا البناية، الكنيسة أو المحل يلي حدّك وبيكفي عادةً. إن كان مشوار مدرسة، اجتماع ببيروت أو عشاء متأخر بضبية، السعر بيتأكّد قبل ما تطلع.'],
   en_hoods=[('Antelias', 'the square and the highway'), ('Naccache', 'and Rabieh'), ('Dbayeh', 'the Waterfront and LeMall'), ('Jal el Dib', 'and Zalka'), ('Mezher', 'and Haret el Ghouarneh'), ('Mtayleb', 'and Qornet Chehwan')],
   ar_hoods=[('أنطلياس', 'الساحة والأوتوستراد'), ('النقاش', 'والرابية'), ('ضبية', 'الواجهة البحرية ولو مول'), ('جل الديب', 'والزلقا'), ('المزهر', 'وحارة الغوارنة'), ('المطيلب', 'وقرنة شهوان')]),

 dict(slug='beirut-airport-taxi', icon='plane', place='Airport', en='Beirut Airport', ar='مطار بيروت',
   en_sub='Arrivals & departures, BEY', ar_sub='وصول ومغادرة',
   en_title='Beirut Airport Taxi — Private Transfers by Vito Taxi',
   ar_title='تاكسي مطار بيروت — توصيل خاص مع ڤيتو تاكسي',
   en_desc='Private Beirut Airport (BEY) taxi transfers in a Mercedes Vito, with room for all your luggage. Book ahead on WhatsApp 70 609 211 — price confirmed in advance.',
   ar_desc='توصيل خاص من وإلى مطار بيروت بمرسيدس ڤيتو مع محل لكل الشنط. احجز مسبقاً عالواتساب 70 609 211 — السعر متفق عليه سلفاً.',
   en_h1='Beirut Airport, <em class="gold">handled.</em>', ar_h1='مطار بيروت، <em class="gold">علينا.</em>',
   en_lede='Transfers to and from Beirut–Rafic Hariri International Airport in a spacious Mercedes-Benz Vito. Send your flight and relax — the car is planned around it.',
   ar_lede='توصيل من وإلى مطار رفيق الحريري الدولي بمرسيدس-بنز ڤيتو واسعة. ابعت رقم رحلتك وارتاح — الوقت منرتّبو على أساسها.',
   en_body=['An airport run is the one ride worth booking the day before. Tell us your flight time rather than a pickup time and we work backwards from it, traffic included — the early-morning departures that nobody else wants to drive are exactly the ones we plan for.',
            'Landing? Send your flight number and terminal. A van means the suitcases, the stroller and the duty-free all fit, and a family arriving together leaves together. The fare is confirmed before you fly, so there is nothing to negotiate at arrivals.'],
   ar_body=['مشوار المطار هو المشوار يلي بيستاهل تحجزو من نهار قبل. قلّنا وقت الطيارة مش وقت الانطلاق ومنحسبها رجوع، والزحمة محسوبة — والطيارات الباكرة يلي ما حدا بدو يسوق لإلها هي بالزبط يلي منخططلها.',
            'واصل؟ ابعت رقم الرحلة. الڤان يعني الشنط، عربية الولد والـ duty free كلها بتفوت، والعيلة يلي وصلت سوا بتطلع سوا. السعر متفق عليه قبل ما تسافر، فما في شي تتفاوض عليه بالوصول.'],
   en_hoods=[('Arrivals', 'we meet your flight'), ('Departures', 'dropped at the door'), ('Antelias to BEY', 'straight down the coast'), ('Jounieh & Byblos', 'to and from the airport'), ('Metn villages', 'to and from the airport'), ('Hotels', 'Beirut and the coast')],
   ar_hoods=[('الوصول', 'منستقبلك'), ('المغادرة', 'منوصلك عالباب'), ('أنطلياس — المطار', 'عالساحل مباشرة'), ('جونية وجبيل', 'من وإلى المطار'), ('قرى المتن', 'من وإلى المطار'), ('الفنادق', 'بيروت والساحل')]),

 dict(slug='taxi-beirut', icon='city', place='City', en='Beirut', ar='بيروت',
   en_sub='Achrafieh, Hamra, Downtown, Gemmayzeh', ar_sub='الأشرفية، الحمرا، الوسط، الجميزة',
   en_title='Taxi in Beirut — Premium Mercedes Vito | Vito Taxi by Charbel',
   ar_title='تاكسي في بيروت — مرسيدس ڤيتو فاخرة | ڤيتو تاكسي مع شربل',
   en_desc='Premium taxi across Beirut — Achrafieh, Hamra, Downtown, Gemmayzeh, Verdun. Black Mercedes Vito, price confirmed first. WhatsApp or call 70 609 211.',
   ar_desc='تاكسي فاخر بكل بيروت — الأشرفية، الحمرا، الوسط، الجميزة، فردان. مرسيدس ڤيتو سوداء والسعر أولاً. واتساب أو اتصل 70 609 211.',
   en_h1='Beirut, <em class="gold">door to door.</em>', ar_h1='بيروت، <em class="gold">من الباب للباب.</em>',
   en_lede='Meetings in Downtown, dinner in Gemmayzeh, a hotel in Achrafieh or Hamra — rides across the capital in a calm, air-conditioned Mercedes Vito.',
   ar_lede='اجتماع بالوسط، عشاء بالجميزة، فندق بالأشرفية أو الحمرا — مشاوير بكل العاصمة بمرسيدس ڤيتو هادية ومكيّفة.',
   en_body=['Beirut traffic is a timing problem, not a distance problem. Knowing which road is moving at eight in the morning and which one at eight at night is the difference between arriving calm and arriving late.',
            'For evenings out, book the ride home at the same time as the ride there. For visitors staying in the city, one number covers the airport, the day trips and everything in between.'],
   ar_body=['زحمة بيروت مشكلة وقت مش مسافة. إنك تعرف أي طريق ماشي الساعة تمانة الصبح وأيّا واحد الساعة تمانة المسا هو الفرق بين إنك توصل مرتاح أو توصل متأخر.',
            'للسهرات، احجز الرجعة مع الروحة. ولزوار المدينة، رقم واحد بيغطي المطار، رحلات النهار وكل شي بيناتهم.'],
   en_hoods=[('Achrafieh', 'Sassine, Sodeco, Monot'), ('Gemmayzeh', 'and Mar Mikhael'), ('Downtown', 'Beirut Central District'), ('Hamra', 'and Ras Beirut'), ('Verdun', 'and Raouche'), ('Badaro', 'and the museum')],
   ar_hoods=[('الأشرفية', 'ساسين، السوديكو، مونو'), ('الجميزة', 'ومار مخايل'), ('وسط بيروت', 'الداون تاون'), ('الحمرا', 'ورأس بيروت'), ('فردان', 'والروشة'), ('بدارو', 'والمتحف')]),

 dict(slug='taxi-jounieh', icon='pin', place='City', en='Jounieh', ar='جونية',
   en_sub='Kaslik, Zouk, Harissa, Maameltein', ar_sub='الكسليك، الذوق، حريصا، المعاملتين',
   en_title='Taxi in Jounieh & Kaslik — Vito Taxi by Charbel',
   ar_title='تاكسي في جونية والكسليك — ڤيتو تاكسي مع شربل',
   en_desc='Premium taxi in Jounieh, Kaslik, Zouk, Maameltein and up to Harissa. Mercedes Vito with room for everyone. Book on WhatsApp 70 609 211.',
   ar_desc='تاكسي فاخر بجونية، الكسليك، الذوق، المعاملتين وطلوعاً لحريصا. مرسيدس ڤيتو في فيها محل للكل. احجز عالواتساب 70 609 211.',
   en_h1='Jounieh, <em class="gold">in style.</em>', ar_h1='جونية، <em class="gold">بأناقة.</em>',
   en_lede='Across the bay — Kaslik, Zouk, Ghadir, Maameltein — and up the hill to Harissa. Nights out, weddings and the ride home.',
   ar_lede='عالخليج كلّو — الكسليك، الذوق، غدير، المعاملتين — وطلوعاً لحريصا. سهرات، أعراس والرجعة عالبيت.',
   en_body=['Jounieh is fifteen minutes up the coast from Antelias, which makes it one of the runs we do most. Kaslik on a Saturday night and a wedding in a Kesrouan venue have one thing in common: nobody wants to be the one driving home.',
            'Groups are where the Vito earns its keep — one car for the whole table instead of three taxis and a group chat about who is in which one.'],
   ar_body=['جونية ربع ساعة من أنطلياس عالساحل، يعني من أكتر المشاوير يلي منعملها. الكسليك ليلة السبت وعرس بصالة بكسروان في بيناتهم شي واحد: ما حدا بدو يكون هوي يلي يسوق بالرجعة.',
            'المجموعات هي وين الڤيتو بتفرق — سيارة وحدة للطاولة كلها بدل تلات تاكسيات وغروب مين طالع مع مين.'],
   en_hoods=[('Kaslik', 'and USEK'), ('Zouk Mosbeh', 'and Zouk Mikael'), ('Maameltein', 'and the bay'), ('Harissa', 'Our Lady of Lebanon'), ('Ghadir', 'and Sarba'), ('Adma', 'and Tabarja')],
   ar_hoods=[('الكسليك', 'والجامعة'), ('ذوق مصبح', 'وذوق مكايل'), ('المعاملتين', 'والخليج'), ('حريصا', 'سيدة لبنان'), ('غدير', 'وصربا'), ('أدما', 'وطبرجا')]),

 dict(slug='taxi-byblos', icon='map', place='City', en='Byblos (Jbeil)', ar='جبيل',
   en_sub='The old souk, the port, Amchit', ar_sub='السوق القديم، المرفأ، عمشيت',
   en_title='Taxi to Byblos (Jbeil) — Private Mercedes Vito | Vito Taxi',
   ar_title='تاكسي إلى جبيل — مرسيدس ڤيتو خاصة | ڤيتو تاكسي',
   en_desc='Private taxi to and from Byblos (Jbeil) — the old souk, the port, Amchit — from Beirut, Antelias or the airport. Mercedes Vito. WhatsApp 70 609 211.',
   ar_desc='تاكسي خاص من وإلى جبيل — السوق القديم، المرفأ، عمشيت — من بيروت، أنطلياس أو المطار. مرسيدس ڤيتو. واتساب 70 609 211.',
   en_h1='Byblos, <em class="gold">unhurried.</em>', ar_h1='جبيل، <em class="gold">عراحتك.</em>',
   en_lede='The oldest city on the coast deserves an easy ride there. Rides to Byblos from Antelias, Beirut or the airport — or a driver who waits while you explore.',
   ar_lede='أقدم مدينة عالساحل بتستاهل مشوار مريح. من أنطلياس، بيروت أو المطار لجبيل — أو سائق بينطرك وإنت عم تتمشى.',
   en_body=['Byblos is an easy run up the coastal highway. Dinner by the old port, a walk through the souk, a wedding in one of the venues around Amchit — all better when nobody has to find parking or drive back.',
            'Visitors often pair Byblos with Jeita and Harissa in a single day. Tell us the plan and we quote the day as one price.'],
   ar_body=['جبيل مشوار سهل عالأوتوستراد الساحلي. عشاء حد المرفأ القديم، مشوار بالسوق، عرس بإحدى الصالات حوالي عمشيت — كلها أحلى لما ما حدا مضطر يلاقي صفّة أو يسوق بالرجعة.',
            'الزوار كتير بيجمعوا جبيل مع جعيتا وحريصا بنهار واحد. قلّنا البرنامج ومنعطيك سعر واحد للنهار كلّو.'],
   en_hoods=[('Old souk', 'and the citadel'), ('Old port', 'dinner by the sea'), ('Amchit', 'and the wedding venues'), ('Blat', 'and the university'), ('Halat', 'and Fidar'), ('Jbeil to BEY', 'airport transfers')],
   ar_hoods=[('السوق القديم', 'والقلعة'), ('المرفأ القديم', 'عشاء عالبحر'), ('عمشيت', 'وصالات الأعراس'), ('بلاط', 'والجامعة'), ('حالات', 'والفيدار'), ('جبيل — المطار', 'توصيل مطار')]),

 dict(slug='taxi-metn', icon='pin', place='AdministrativeArea', en='Metn', ar='المتن',
   en_sub='Broumana, Beit Mery, Bikfaya', ar_sub='برمانا، بيت مري، بكفيا',
   en_title='Taxi in the Metn — Broumana, Beit Mery, Bikfaya | Vito Taxi',
   ar_title='تاكسي بالمتن — برمانا، بيت مري، بكفيا | ڤيتو تاكسي',
   en_desc='Premium taxi across the Metn — Broumana, Beit Mery, Bikfaya, Mansourieh, Jdeideh. Based in Antelias. Mercedes Vito, WhatsApp 70 609 211.',
   ar_desc='تاكسي فاخر بكل المتن — برمانا، بيت مري، بكفيا، المنصورية، الجديدة. مركزنا أنطلياس. مرسيدس ڤيتو، واتساب 70 609 211.',
   en_h1='The Metn, <em class="gold">coast to hills.</em>', ar_h1='المتن، <em class="gold">من البحر للجبل.</em>',
   en_lede='From the coast up to Broumana, Beit Mery and Bikfaya — hill roads we drive every day, starting just below them in Antelias.',
   ar_lede='من الساحل لبرمانا، بيت مري وبكفيا — طرقات جبل منسوقها كل يوم، ومنطلق من تحتها بأنطلياس.',
   en_body=['The Metn is two roads, not one: the coastal highway and the hill roads that climb behind it. Which one is faster depends on the hour, and choosing wrong costs twenty minutes. Being based at the foot of those hills, the answer is not a guess.',
            'Summer dinners in Broumana, weddings in the mountain venues, a Sunday in Bikfaya — book the way up and the way down together.'],
   ar_body=['المتن طريقين مش طريق: الأوتوستراد الساحلي وطرقات الجبل يلي طالعة وراه. أيّا واحد أسرع بيتوقف عالساعة، والغلط بيكلّف عشرين دقيقة. ولأنّا بأسفل هالجبال، الجواب مش تخمين.',
            'عشاء صيفي ببرمانا، أعراس بصالات الجبل، نهار أحد ببكفيا — احجز الطلعة والنزلة سوا.'],
   en_hoods=[('Broumana', 'and Baabdat'), ('Beit Mery', 'and Ain Saadeh'), ('Bikfaya', 'and Mhaydseh'), ('Mansourieh', 'and Mkalles'), ('Jdeideh', 'and Sin el Fil'), ('Dekwaneh', 'and Sad el Baouchrieh')],
   ar_hoods=[('برمانا', 'وبعبدات'), ('بيت مري', 'وعين سعادة'), ('بكفيا', 'والمحيدثة'), ('المنصورية', 'والمكلس'), ('الجديدة', 'وسن الفيل'), ('الدكوانة', 'وسد البوشرية')]),

 dict(slug='taxi-batroun', icon='map', place='City', en='Batroun', ar='البترون',
   en_sub='The old town, the beaches, the nights', ar_sub='البلدة القديمة، البحر، السهرات',
   en_title='Taxi to Batroun — Private Mercedes Vito | Vito Taxi by Charbel',
   ar_title='تاكسي إلى البترون — مرسيدس ڤيتو خاصة | ڤيتو تاكسي مع شربل',
   en_desc='Private taxi to Batroun from Beirut, Antelias or the airport — beach days, weddings, nights out and the safe ride home. Mercedes Vito. WhatsApp 70 609 211.',
   ar_desc='تاكسي خاص للبترون من بيروت، أنطلياس أو المطار — نهارات بحر، أعراس، سهرات ورجعة آمنة. مرسيدس ڤيتو. واتساب 70 609 211.',
   en_h1='Batroun, <em class="gold">and back.</em>', ar_h1='البترون، <em class="gold">وبالرجعة.</em>',
   en_lede='Beach clubs by day, the old town by night, and a driver for the long way home. Rides to Batroun for groups, couples and wedding guests.',
   ar_lede='بحر بالنهار، البلدة القديمة بالليل، وسائق لطريق الرجعة الطويل. مشاوير للبترون للمجموعات، الأزواج وضيوف الأعراس.',
   en_body=['Batroun is where the summer goes — and the drive back after a long day at the beach or a late night in the old town is exactly the one you should not be doing yourself.',
            'The Vito takes the whole group in one car, cool bags and all. Book the return at the same time and it is there when you are ready to leave.'],
   ar_body=['البترون هي وين بيروح الصيف — والرجعة بعد نهار طويل عالبحر أو سهرة متأخرة بالبلدة القديمة هي بالزبط الطريق يلي ما لازم تسوقها إنت.',
            'الڤيتو بتاخد المجموعة كلها بسيارة وحدة، مع البرادات. احجز الرجعة بنفس الوقت وبتكون ناطرتك وقت تكون جاهز.'],
   en_hoods=[('Old town', 'and the Phoenician wall'), ('Beach clubs', 'along the coast'), ('Wedding venues', 'around Batroun'), ('Kfar Abida', 'and Thoum'), ('Chekka', 'and the north coast'), ('Batroun to BEY', 'airport transfers')],
   ar_hoods=[('البلدة القديمة', 'والسور الفينيقي'), ('المسابح', 'عالساحل'), ('صالات الأعراس', 'حوالي البترون'), ('كفرعبيدا', 'وثوم'), ('شكا', 'والساحل الشمالي'), ('البترون — المطار', 'توصيل مطار')]),

 dict(slug='taxi-faraya', icon='snow', place='Place', en='Faraya & Mzaar', ar='فاريا والمزار',
   en_sub='Ski days, chalets, mountain weekends', ar_sub='تزلج، شاليهات، ويك إند بالجبل',
   en_title='Taxi to Faraya & Mzaar Ski Resort — Vito Taxi by Charbel',
   ar_title='تاكسي إلى فاريا ومزار كفرذبيان — ڤيتو تاكسي مع شربل',
   en_desc='Private taxi to Faraya, Mzaar Kfardebian and the Kesrouan mountains — room for skis and the whole group. Mercedes Vito from Antelias. WhatsApp 70 609 211.',
   ar_desc='تاكسي خاص لفاريا، مزار كفرذبيان وجبال كسروان — محل للسكي وللمجموعة كلها. مرسيدس ڤيتو من أنطلياس. واتساب 70 609 211.',
   en_h1='Up to the <em class="gold">snow.</em>', ar_h1='طلوعاً <em class="gold">عالتلج.</em>',
   en_lede='Ski days at Mzaar, chalet weekends in Faraya, and a warm car waiting at the end of the day. Skis, boots and the whole group included.',
   ar_lede='نهارات تزلج بالمزار، ويك إند بشاليه بفاريا، وسيارة دافية ناطرتك بآخر النهار. السكي، الجزم والمجموعة كلها معك.',
   en_body=['The road up to Faraya is beautiful and, on a winter morning, the last road you want to drive yourself. The Vito has the room for skis and boards, and a driver who does the climb regularly.',
            'Book the way up in the morning and the way down when the lifts close. Summer works too — Faraya and Kfardebian are cool when the coast is not.'],
   ar_body=['طريق فاريا حلوة كتير، وبصبحية شتوية هي آخر طريق بدك تسوقها إنت. الڤيتو فيها محل للسكي والسنوبورد، وسائق بيطلع هالطريق دايماً.',
            'احجز الطلعة الصبح والنزلة وقت تسكّر المصاعد. وبالصيف كمان — فاريا وكفرذبيان بتكون فرشة لما الساحل شوب.'],
   en_hoods=[('Mzaar', 'Kfardebian ski resort'), ('Faraya', 'the village and chalets'), ('Faqra', 'and the club'), ('Ouyoun el Simane', 'the slopes'), ('Kfardebian', 'Faqra Roman ruins'), ('Harissa', 'on the way')],
   ar_hoods=[('المزار', 'منتجع كفرذبيان'), ('فاريا', 'الضيعة والشاليهات'), ('فقرا', 'والنادي'), ('عيون السيمان', 'المنحدرات'), ('كفرذبيان', 'آثار فقرا'), ('حريصا', 'عالطريق')]),

 dict(slug='lebanon-private-driver', icon='map', place='Country', en='Private driver, Lebanon', ar='سائق خاص بلبنان',
   en_sub='Day trips: Cedars, Baalbek, the south', ar_sub='رحلات نهار: الأرز، بعلبك، الجنوب',
   en_title='Private Driver in Lebanon — Day Trips by Mercedes Vito | Vito Taxi',
   ar_title='سائق خاص بلبنان — رحلات نهار بمرسيدس ڤيتو | ڤيتو تاكسي',
   en_desc='Hire a private driver in Lebanon for the day: Jeita, Harissa, Byblos, the Cedars, Baalbek, Tyre and Sidon in a Mercedes Vito. One price for the day. WhatsApp 70 609 211.',
   ar_desc='سائق خاص بلبنان لنهار كامل: جعيتا، حريصا، جبيل، الأرز، بعلبك، صور وصيدا بمرسيدس ڤيتو. سعر واحد للنهار. واتساب 70 609 211.',
   en_h1='Lebanon, <em class="gold">your way.</em>', ar_h1='لبنان، <em class="gold">عطريقتك.</em>',
   en_lede='A private driver and a spacious Mercedes Vito for the whole day. You choose the places; we handle the roads, the timing and the parking.',
   ar_lede='سائق خاص ومرسيدس ڤيتو واسعة لنهار كامل. إنت بتختار الأماكن، ونحنا منهتم بالطرقات، الوقت والصفّة.',
   en_body=['Lebanon is small on a map and long on the road. A day that takes in Jeita Grotto, Harissa and Byblos, or the Cedars and the Qadisha valley, or Baalbek and a lunch in Zahle, is easy with a driver and exhausting without one.',
            'Send us the places you want to see and the number of people. We suggest an order that makes sense, and quote the day as one price before you commit.'],
   ar_body=['لبنان صغير عالخريطة وطويل عالطريق. نهار بيجمع مغارة جعيتا، حريصا وجبيل، أو الأرز ووادي قاديشا، أو بعلبك وغدا بزحلة، سهل مع سائق ومتعب بلاه.',
            'ابعتلنا الأماكن يلي بدك تشوفها وعدد الأشخاص. منقترح ترتيب منطقي، ومنعطيك سعر واحد للنهار قبل ما تلتزم.'],
   en_hoods=[('Jeita & Harissa', 'grotto and cable car'), ('The Cedars', 'and the Qadisha valley'), ('Baalbek', 'and Zahle'), ('Tyre & Sidon', 'the south coast'), ('Beiteddine', 'and Deir el Qamar'), ('Byblos & Batroun', 'the north coast')],
   ar_hoods=[('جعيتا وحريصا', 'المغارة والتلفريك'), ('الأرز', 'ووادي قاديشا'), ('بعلبك', 'وزحلة'), ('صور وصيدا', 'الساحل الجنوبي'), ('بيت الدين', 'ودير القمر'), ('جبيل والبترون', 'الساحل الشمالي')]),
]


def area_faq(a, lang):
    n = a[lang]
    if lang == 'en':
        return [
            ('How do I book a taxi in %s?' % n, 'Send a WhatsApp or call %s with your pickup point, destination and time. The price is confirmed before you ride.' % CFG['tel_show']),
            ('How much is a ride in %s?' % n, 'It depends on the distance, the time and the kind of trip. You get the exact fare on WhatsApp or by phone before you confirm — no surprises at the end.'),
            ('Can you take a group with luggage?', 'Yes. The Mercedes-Benz Vito is a van, so families and small groups ride together with their bags. Tell us the numbers when you book.'),
            ('Can I book the return trip too?', 'Yes — book both legs in the same message and the car is there when you are ready to leave.'),
        ]
    return [
        ('كيف بحجز تاكسي في %s؟' % n, 'ابعت واتساب أو اتصل عالرقم %s مع مكان الانطلاق، الوجهة والوقت. السعر بيتأكّد قبل المشوار.' % CFG['tel_show']),
        ('قدّيش كلفة المشوار في %s؟' % n, 'بتتوقف عالمسافة، الوقت ونوع المشوار. بيوصلك السعر عالواتساب أو عالتلفون قبل ما تأكّد — بلا مفاجآت.'),
        ('فيكن تاخدوا مجموعة مع شنط؟', 'أكيد. المرسيدس ڤيتو ڤان، يعني العائلات والمجموعات الصغيرة بتقعد سوا مع شنطها. قلّنا العدد وقت الحجز.'),
        ('فيني احجز الرجعة كمان؟', 'أكيد — احجز الروحة والرجعة بنفس الرسالة والسيارة بتكون ناطرتك وقت تكون جاهز.'),
    ]


# ── Structured data ───────────────────────────────────────────────────────────
BIZ_ID = CFG['site'] + '/#business'


def business(lang):
    t = T[lang]
    return {
        '@type': 'LocalBusiness', '@id': BIZ_ID,
        'name': CFG['name'], 'alternateName': ['Vito Taxi', 'ڤيتو تاكسي', 'Vito Taxi By Charbel'],
        'description': T['en']['foot_about'],
        'url': CFG['site'] + '/', 'telephone': CFG['tel'],
        'image': [CFG['site'] + '/og.jpg', CFG['site'] + '/assets/img/vito-night.webp'], 'logo': CFG['site'] + '/icon-512.png',
        'priceRange': '$$',
        'address': {'@type': 'PostalAddress', 'streetAddress': 'Antelias Road', 'addressLocality': 'Antelias',
                    'addressRegion': 'Mount Lebanon', 'addressCountry': 'LB'},
        'geo': {'@type': 'GeoCoordinates', 'latitude': CFG['lat'], 'longitude': CFG['lng']},
        'hasMap': CFG['maps'],
        'areaServed': [{'@type': 'Country', 'name': 'Lebanon'}] + [{'@type': 'Place', 'name': a['en']} for a in AREAS if a['slug'] != 'lebanon-private-driver'],
        'sameAs': [CFG['instagram'], CFG['facebook'], CFG['maps']],
        'contactPoint': {'@type': 'ContactPoint', 'telephone': CFG['tel'], 'contactType': 'reservations',
                         'availableLanguage': ['English', 'Arabic', 'French']},
        'founder': {'@type': 'Person', 'name': 'Charbel'},
        'slogan': 'Your comfort, our priority',
        'openingHoursSpecification': {'@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 'opens': '00:00', 'closes': '23:59'},
    }


def taxi_service(lang, area=None):
    s = {'@type': 'TaxiService', 'provider': {'@id': BIZ_ID}, 'serviceType': 'Private taxi and airport transfers',
         'name': CFG['name'] + (' — ' + area[lang] if area else ''),
         'areaServed': {'@type': area['place'], 'name': area['en']} if area else {'@type': 'Country', 'name': 'Lebanon'},
         'availableChannel': {'@type': 'ServiceChannel', 'servicePhone': {'@type': 'ContactPoint', 'telephone': CFG['tel']},
                              'serviceUrl': wa_link(T[lang]['wa_hello'])},
         'inLanguage': 'ar' if lang == 'ar' else 'en'}
    return s


def faq_ld(pairs):
    return {'@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': q,
            'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in pairs]}


def ld(*graph):
    return '<script type="application/ld+json">%s</script>' % json.dumps({'@context': 'https://schema.org', '@graph': list(graph)}, ensure_ascii=False, separators=(',', ':'))


