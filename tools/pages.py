#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Writes every page of vitotaxi.cierp.uk from the words in content.py.

    python3 tools/pages.py

The site has no build step at serve time: this only WRITES static files, which are
committed and served as they are. Edit the copy in content.py, never the .html files.
"""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from content import CFG, T, AREAS, area_faq, business, taxi_service, faq_ld, ld, BIZ_ID, E, wa_link
from svg import MONO, STAR, I

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CREDITS = json.load(open(os.path.join(ROOT, 'tools', 'photo-credits.json'), encoding='utf-8'))

# Extra words for the new layout.
X = {
'en': dict(
  h1='Your comfort, <em class="g">our priority.</em>',
  live='Available now', open247='24/7',
  q_h='Where to?', q_sub='Get your fare on WhatsApp — no sign-up.', q_from='Pickup — e.g. Antelias', q_to='Destination — e.g. Beirut Airport',
  q_when=['Now', 'In an hour', 'Tonight', 'Tomorrow', 'Pick a date on WhatsApp'], q_pax='passengers', q_btn='Get my fare', q_note='Nothing is stored on this site',
  explore='Explore services',
  b_k='Why Vito Taxi', b_h='First class, <em class="g">every time.</em>', b_p='Everything our riders care about, in one car.',
  t_rate='// google rating', t_rate_p='from {n} reviews on Google Maps', t_247='// always on', t_247_p='Day, night, weekends and holidays. Rain or shine.',
  t_car='// the car', t_car_h='Mercedes-Benz Vito', t_car_p='Spacious, air-conditioned and spotless — built for comfort.',
  t_reg='// coverage', t_reg_p='regions — from Antelias to the Cedars.', t_zero='// pricing', t_zero_big='0', t_zero_p='surprises. Affordable fares, confirmed before you ride.',
  t_air='// airport', t_air_h='Beirut Airport transfers', t_air_p='Early departures and late landings. Send your flight — we plan around it.',
  t_safe='// clean & safe', t_safe_h='Professional drivers', t_safe_p='Expert drivers who know every road, and a car kept spotless.',
  svc_imgs=['vito-star', 'beirut-night', 'baalbek', 'raouche', 'jounieh', 'marina'],
  badge='MERCEDES-BENZ · VITO · FIRST CLASS · ',
  dest_k='Destinations', dest_h='Where to <em class="g">next?</em>', dest_p='Nine regions, one number. Pick yours for the details.', swipe='Scroll to explore',
  st_k='How it works', st_h='Booked in <em class="g">three steps.</em>',
  c_wa='WhatsApp · fastest', c_call='Call us 24/7', c_ig='Follow on Instagram',
  fab_b='Chat on WhatsApp', fab_s='Available 24/7', bub_name='Vito Taxi', bub_on='Available 24/7',
  bub_msg='Hello 👋 Need a ride? Send your pickup and destination — we will confirm your fare right away.', bub_go='Start chat',
  credits='Photo credits', credits_h='Photo <em class="g">credits.</em>',
  credits_p='Car photography from Unsplash (Unsplash License). Lebanon photography from Wikimedia Commons, used under the Creative Commons licences below.',
  loader='BY CHARBEL', read_more='Details',
),
'ar': dict(
  h1='راحتك، <em class="g">أولويتنا.</em>',
  live='متاحين هلّق', open247='٢٤/٧',
  q_h='لوين رايح؟', q_sub='خود سعرك عالواتساب — بلا تسجيل.', q_from='من وين — مثلاً أنطلياس', q_to='لوين — مثلاً مطار بيروت',
  q_when=['هلّق', 'بعد ساعة', 'الليلة', 'بكرا', 'منحدد عالواتساب'], q_pax='ركاب', q_btn='بدي سعري', q_note='ما في شي بينحفظ عهالموقع',
  explore='شوف الخدمات',
  b_k='ليش ڤيتو تاكسي', b_h='درجة أولى، <em class="g">كل مرة.</em>', b_p='كل شي بيهمّ ركابنا، بسيارة وحدة.',
  t_rate='تقييم Google', t_rate_p='من {n} تقييم على Google Maps', t_247='دايماً موجودين', t_247_p='ليل ونهار، ويك إند وأعياد. شتي أو شمس.',
  t_car='السيارة', t_car_h='مرسيدس-بنز ڤيتو', t_car_p='واسعة، مكيّفة ونضيفة — معمولة لراحتك.',
  t_reg='التغطية', t_reg_p='مناطق — من أنطلياس للأرز.', t_zero='السعر', t_zero_big='٠', t_zero_p='مفاجآت. أسعار مناسبة ومتفق عليها قبل المشوار.',
  t_air='المطار', t_air_h='توصيل مطار بيروت', t_air_p='طيارات باكرة ووصول متأخر. ابعت رقم رحلتك ومنرتّب الوقت.',
  t_safe='نظافة وأمان', t_safe_h='سائقين محترفين', t_safe_p='سائقين خبرة بيعرفوا كل الطرقات، وسيارة دايماً نضيفة.',
  svc_imgs=['vito-star', 'beirut-night', 'baalbek', 'raouche', 'jounieh', 'marina'],
  badge='MERCEDES-BENZ · VITO · FIRST CLASS · ',
  dest_k='الوجهات', dest_h='لوين <em class="g">المشوار الجاي؟</em>', dest_p='تسع مناطق ورقم واحد. اختار منطقتك لتعرف التفاصيل.', swipe='مرّر لتكتشف',
  st_k='كيف منشتغل', st_h='الحجز <em class="g">بتلات خطوات.</em>',
  c_wa='واتساب · الأسرع', c_call='اتصل فينا ٢٤/٧', c_ig='تابعنا على إنستغرام',
  fab_b='احكينا عالواتساب', fab_s='متاحين ٢٤/٧', bub_name='ڤيتو تاكسي', bub_on='متاحين ٢٤/٧',
  bub_msg='أهلا 👋 بدك مشوار؟ ابعتلنا من وين ولوين — ومنأكدلك السعر فوراً.', bub_go='ابدأ المحادثة',
  credits='حقوق الصور', credits_h='حقوق <em class="g">الصور.</em>',
  credits_p='صور السيارة من Unsplash (رخصة Unsplash). صور لبنان من Wikimedia Commons، مستعملة حسب رخص المشاع الإبداعي أدناه.',
  loader='مع شربل', read_more='التفاصيل',
),
}
AREA_IMG = {'taxi-antelias': 'marina', 'beirut-airport-taxi': 'vito-sunset', 'taxi-beirut': 'raouche', 'taxi-jounieh': 'jounieh',
            'taxi-byblos': 'byblos', 'taxi-metn': 'metn', 'taxi-batroun': 'batroun', 'taxi-faraya': 'faraya', 'lebanon-private-driver': 'cedars'}


def url_for(lang, slug=''):
    return CFG['site'] + '/' + ('ar/' if lang == 'ar' else '') + (slug + '/' if slug else '')


def img(pre, name, alt='', cls='', eager=False, par=None, sizes='100vw'):
    return '<img src="%sassets/img/%s.webp" alt="%s"%s%s%s decoding="async" width="1400" height="1000">' % (
        pre, name, E(alt), ' class="%s"' % cls if cls else '', ' fetchpriority="high"' if eager else ' loading="lazy"',
        ' data-par="%s"' % par if par else '')


def stars():
    return '<span class="stars" aria-hidden="true">%s</span>' % (STAR * 5)


def arabic_digits(s):
    return s.translate(str.maketrans('0123456789.', '٠١٢٣٤٥٦٧٨٩٫'))


# ── Shared chrome ─────────────────────────────────────────────────────────────
def head(lang, title, desc, slug, pre, extra='', robots='index,follow,max-image-preview:large', canonical=True, preload_img=None):
    t = T[lang]
    en_u, ar_u, me = url_for('en', slug), url_for('ar', slug), url_for(lang, slug)
    alt = '' if not canonical else f'''<link rel="canonical" href="{me}">
<link rel="alternate" hreflang="en" href="{en_u}">
<link rel="alternate" hreflang="ar" href="{ar_u}">
<link rel="alternate" hreflang="x-default" href="{en_u}">'''
    pl = f'<link rel="preload" as="image" href="{pre}assets/img/{preload_img}.webp" fetchpriority="high">' if preload_img else ''
    return f'''<!DOCTYPE html>
<html lang="{'ar-LB' if lang == 'ar' else 'en'}" dir="{t['dir']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{E(title)}</title>
<meta name="description" content="{E(desc)}">
<meta name="robots" content="{robots}">
<meta name="theme-color" content="#060607">
<meta name="format-detection" content="telephone=no">
<meta name="author" content="{E(CFG['name'])}">
{alt}
{pl}
<link rel="preload" href="{pre}fonts/{'plex-arabic-700' if lang == 'ar' else 'instrument-serif'}.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{pre}fonts/{'plex-arabic-400' if lang == 'ar' else 'manrope'}.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{pre}assets/site.css">
<link rel="icon" href="{pre}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="{pre}icon-180.png">
<link rel="manifest" href="{pre}site.webmanifest">
<meta name="geo.region" content="LB">
<meta name="geo.placename" content="Antelias">
<meta name="geo.position" content="{CFG['lat']};{CFG['lng']}">
<meta name="ICBM" content="{CFG['lat']}, {CFG['lng']}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{E(CFG['name'])}">
<meta property="og:locale" content="{t['locale']}">
<meta property="og:locale:alternate" content="{T[t['other']]['locale']}">
<meta property="og:url" content="{me}">
<meta property="og:title" content="{E(title if slug else t['og_title'])}">
<meta property="og:description" content="{E(desc)}">
<meta property="og:image" content="{CFG['site']}/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{E(CFG['name'])}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{E(title if slug else t['og_title'])}">
<meta name="twitter:description" content="{E(desc)}">
<meta name="twitter:image" content="{CFG['site']}/og.jpg">
<script>document.documentElement.classList.add('js');try{{if(sessionStorage.getItem('vt-seen')==='1')document.documentElement.classList.add('no-loader')}}catch(e){{}}</script>
{extra}
</head>'''


def top(lang, pre, home_pre, alt_href, on_home):
    t, x = T[lang], X[lang]
    links = ''.join('<a href="%s%s">%s</a>' % ('' if on_home else home_pre, h, E(l)) for h, l in t['nav'])
    return f'''<body>
<a class="skip" href="#main">{E(t['skip'])}</a>
<div class="loader" aria-hidden="true"><div>{MONO}<div class="loader-word">VITO TAXI<small>{E(x['loader'])}</small></div></div></div>
<header class="nav" id="top">
 <div class="nav-in">
  <a class="brand" href="{home_pre or './'}" aria-label="{E(CFG['name'])}">{MONO}<span><b>VITO TAXI</b><small>BY CHARBEL</small></span></a>
  <nav class="links" aria-label="Main">{links}</nav>
  <div class="nav-cta">
   <a class="lang" href="{alt_href}" hreflang="{t['other']}" lang="{t['other']}" aria-label="{E(t['other_name'])}">{t['other_label']}</a>
   <a class="btn btn-glass btn-sm btn-call" href="tel:{CFG['tel']}">{I['phone']}<span class="ltr">{CFG['tel_show']}</span></a>
   <a class="btn btn-gold btn-sm" href="{wa_link(t['wa_hello'])}" target="_blank" rel="noopener">{I['wa']}<span>{E(t['nav'][2][1])}</span></a>
  </div>
 </div>
</header>'''


def floating(lang):
    t, x = T[lang], X[lang]
    return f'''<div class="wa-bubble" role="dialog" aria-label="{E(x['fab_b'])}">
 <button class="x" type="button" aria-label="Close">×</button>
 <div class="who">{MONO}<div><b>{E(x['bub_name'])}</b><small>{E(x['bub_on'])}</small></div></div>
 <p>{E(x['bub_msg'])}</p>
 <div class="go"><a class="btn btn-wa btn-sm" href="{wa_link(t['wa_hello'])}" target="_blank" rel="noopener">{I['wa']}<span>{E(x['bub_go'])}</span></a></div>
</div>
<a class="wa-fab" href="{wa_link(t['wa_hello'])}" target="_blank" rel="noopener" aria-label="{E(x['fab_b'])}">
 <span class="wa-ic">{I['wa']}</span><span class="wa-tx"><b>{E(x['fab_b'])}</b><small>{E(x['fab_s'])}</small></span>
</a>
<a class="call-fab" href="tel:{CFG['tel']}" aria-label="{E(t['call'])} {CFG['tel_show']}">{I['phone']}</a>'''


def footer(lang, pre, home_pre, on_home):
    t, x = T[lang], X[lang]
    lp = '' if lang == 'en' else 'ar/'
    svc = ''.join('<li><a href="%s#services">%s</a></li>' % ('' if on_home else home_pre, E(s[1])) for s in t['services'])
    areas = ''.join('<li><a href="%s%s/">%s</a></li>' % (pre + lp, a['slug'], E(a[lang])) for a in AREAS)
    tag = 'Your comfort, our priority.' if lang == 'en' else 'راحتك أولويتنا.'
    return f'''<footer class="foot">
 <div class="wrap">
  <div class="foot-grid">
   <div>
    <a class="brand" href="{home_pre or './'}">{MONO}<span><b>VITO TAXI</b><small>BY CHARBEL</small></span></a>
    <p class="tagline">{tag}</p>
    <p class="about">{E(t['foot_about'])}</p>
    <div class="socials">
     <a href="{wa_link(t['wa_hello'])}" target="_blank" rel="noopener" aria-label="WhatsApp">{I['wa']}</a>
     <a href="{CFG['instagram']}" target="_blank" rel="noopener" aria-label="Instagram">{I['ig']}</a>
     <a href="{CFG['facebook']}" target="_blank" rel="noopener" aria-label="Facebook">{I['fb']}</a>
     <a href="{CFG['maps']}" target="_blank" rel="noopener" aria-label="Google Maps">{I['pin']}</a>
    </div>
   </div>
   <div><h4>{E(t['f_services'])}</h4><ul>{svc}</ul></div>
   <div><h4>{E(t['f_areas'])}</h4><ul>{areas}</ul></div>
   <div><h4>{E(t['f_contact'])}</h4><ul>
    <li><a href="tel:{CFG['tel']}" class="ltr">{CFG['tel_intl']}</a></li>
    <li><a href="{wa_link(t['wa_hello'])}" target="_blank" rel="noopener">WhatsApp</a></li>
    <li><a href="{CFG['instagram']}" target="_blank" rel="noopener">@vitotaxibycharbel</a></li>
    <li><a href="{CFG['maps']}" target="_blank" rel="noopener">{E(t['find_us'])}</a></li>
    <li><a href="{pre}vito-taxi.vcf" download>{E(t['save_contact'])}</a></li>
    <li><span class="muted">{E(t['addr'])}</span></li>
   </ul></div>
  </div>
  <div class="giant" aria-hidden="true">VITO TAXI</div>
  <div class="foot-bottom"><span>© <span class="yr">2026</span> {E(CFG['name'])}. {E(t['rights'])}</span><a href="{pre + lp}credits/">{E(x['credits'])}</a></div>
 </div>
</footer>'''


def scripts(lang, pre):
    js = dict(T[lang]['js']); js['from'] = js.pop('from_')
    vt = {'wa': CFG['wa'], 'base': pre, 'photos': [{'file': f, 'alt': a} for f, a in CFG['photos']], 't': js}
    v = f'{pre}assets/vendor/'
    return f'''<script>window.VT={json.dumps(vt, ensure_ascii=False)};document.querySelectorAll('.yr').forEach(function(e){{e.textContent=new Date().getFullYear()}});</script>
<script src="{v}gsap.min.js" defer></script>
<script src="{v}ScrollTrigger.min.js" defer></script>
<script src="{v}SplitText.min.js" defer></script>
<script src="{v}lenis.min.js" defer></script>
<script src="{pre}assets/site.js" defer></script>
</body>
</html>
'''


def faq_block(pairs):
    return ''.join('<details><summary>%s<i aria-hidden="true"></i></summary><div class="ans">%s</div></details>' % (E(q), E(a)) for q, a in pairs)


def dest_cards(lang, pre, prefix, exclude=None):
    x = X[lang]
    out = []
    n = 0
    for a in AREAS:
        if a is exclude:
            continue
        n += 1
        out.append(f'''<a class="d-card" href="{prefix}{a['slug']}/">{img(pre, AREA_IMG[a['slug']], a[lang])}
<span class="idx">{n:02d}</span>
<div class="in"><div><b>{E(a[lang])}</b><span class="s">{E(a[lang + '_sub'])}</span></div><span class="circle-link">{I['arrow']}</span></div></a>''')
    return ''.join(out)


# ── Homepage ──────────────────────────────────────────────────────────────────
def home(lang):
    t, x = T[lang], X[lang]
    ar = lang == 'ar'
    pre = '' if not ar else '../'
    alt = 'ar/' if not ar else '../'
    rd = arabic_digits(CFG['rating']) if ar else CFG['rating']
    nd = arabic_digits(CFG['reviews']) if ar else CFG['reviews']
    wa = wa_link(t['wa_hello'])

    out = [head(lang, t['title'], t['desc'], '', pre,
                ld(business(lang), taxi_service(lang),
                   {'@type': 'WebSite', '@id': CFG['site'] + '/#website', 'url': CFG['site'] + '/', 'name': CFG['name'],
                    'inLanguage': ['en', 'ar'], 'publisher': {'@id': BIZ_ID}},
                   {'@type': 'WebPage', '@id': url_for(lang) + '#webpage', 'url': url_for(lang), 'name': t['title'],
                    'isPartOf': {'@id': CFG['site'] + '/#website'}, 'about': {'@id': BIZ_ID}, 'inLanguage': 'ar' if ar else 'en',
                    'primaryImageOfPage': CFG['site'] + '/assets/img/vito-night.webp'},
                   faq_ld(t['faq'])), preload_img='vito-night'),
           top(lang, pre, '', alt, True)]

    when = ''.join('<option>%s</option>' % E(w) for w in x['q_when'])
    paxo = ''.join('<option value="%s"%s>%s %s</option>' % (p, ' selected' if p == '2' else '', arabic_digits(p) if ar else p, E(x['q_pax'])) for p in ['1', '2', '3', '4', '5', '6', '7+'])
    marquee = ''.join('<li>%s</li>' % E(m) for m in t['marquee'])
    svc = ''.join(f'''<article class="svc-card">{img(pre, x['svc_imgs'][i], h)}<span class="no">0{i + 1}</span><span class="ic">{I[ic]}</span>
<div class="in"><h3>{E(h)}</h3><p>{E(p)}</p></div></article>''' for i, (ic, h, p) in enumerate(t['services']))
    feats = ''.join('<div class="feat"><span class="fi">%s</span><div><b>%s</b><span>%s</span></div></div>' % (I[ic], E(b), E(s)) for ic, b, s in t['feats'])
    steps = ''.join('<div class="step"><span class="n">0%d</span><h3 class="h3">%s</h3><p>%s</p></div>' % (i + 1, E(a), E(b)) for i, (a, b) in enumerate(t['steps']))
    trips = ''.join('<button type="button" data-trip="%s" aria-pressed="%s">%s</button>' % (k, 'true' if k == 'ride' else 'false', E(v)) for k, v in t['trips'])
    pax = ''.join('<option%s>%s</option>' % (' selected' if o == '2' else '', o) for o in t['pax_opts'])
    bags = ''.join('<option%s>%s</option>' % (' selected' if o == '1' else '', o) for o in t['bags_opts'])
    chips = ''.join('<span>%s</span>' % E(a[lang].split(' (')[0].split(',')[0]) for a in AREAS[:6])
    voices = ''
    if CFG['voices']:
        voices = '<div class="voices" data-stagger>%s</div>' % ''.join('<figure class="voice"><q>%s</q><cite>— %s</cite></figure>' % (E(v['quote']), E(v['name'])) for v in CFG['voices'])
    badge_text = x['badge'] * 2
    flight = '''<svg class="flight" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true"><path class="dash" d="M-20 260 C 160 250, 260 80, 620 40" fill="none" stroke="#FFE08A" stroke-width="1.5"/></svg>'''

    out.append(f'''<main id="main">
<section class="hero" aria-labelledby="h1">
 <div class="hero-media"><picture><source media="(max-width: 700px)" srcset="{pre}assets/img/vito-night-m.webp">{img(pre, 'vito-night', 'Black Mercedes-Benz Vito with its headlights on at night', eager=True)}</picture></div>
 <div class="hero-glow" aria-hidden="true"></div>
 <div class="wrap hero-grid">
  <div>
   <span class="pill-note" data-intro><i class="live"></i>{E(x['live'])}<span class="sep"></span>{stars()}<b class="ltr">{rd}</b> Google</span>
   <h1 id="h1" class="display h1" data-split>{x['h1']}</h1>
   <p class="lead" data-intro>{E(t['lead'])}</p>
   <div class="ctas" data-intro>
    <a class="btn btn-gold" href="{wa}" target="_blank" rel="noopener">{I['wa']}<span>{E(t['book_wa'])}</span></a>
    <a class="btn btn-glass" href="tel:{CFG['tel']}">{I['phone']}<span>{E(t['call'])} <span class="ltr">{CFG['tel_show']}</span></span></a>
   </div>
  </div>
  <form class="quick" id="quickform" data-intro aria-labelledby="q-h">
   <h2 id="q-h">{E(x['q_h'])}</h2>
   <p class="sub">{E(x['q_sub'])}</p>
   <div class="route">
    <label class="qf"><i></i><span class="sr">{E(t['f_from'])}</span><input name="from" placeholder="{E(x['q_from'])}" autocomplete="street-address"></label>
    <label class="qf"><i class="to"></i><span class="sr">{E(t['f_to'])}</span><input name="to" placeholder="{E(x['q_to'])}"></label>
   </div>
   <div class="qrow">
    <label class="qf">{I['clock']}<span class="sr">{E(t['f_time'])}</span><select name="when">{when}</select></label>
    <label class="qf">{I['group']}<span class="sr">{E(t['f_pax'])}</span><select name="pax">{paxo}</select></label>
   </div>
   <button class="btn btn-gold" type="submit"><span>{E(x['q_btn'])}</span><span class="arr">{I['arrow']}</span></button>
   <p class="note">{I['lock']}{E(x['q_note'])}</p>
  </form>
 </div>
</section>

<div class="marquee" aria-hidden="true"><div class="mq"><ul>{marquee}</ul><ul>{marquee}</ul></div></div>

<section class="section" id="why" aria-labelledby="why-h">
 <div class="wrap">
  <div class="split-head"><div class="head" data-rv><span class="eyebrow">{E(x['b_k'])}</span><h2 id="why-h" class="display h2">{x['b_h']}</h2></div><p data-rv>{E(x['b_p'])}</p></div>
  <div class="bento" data-stagger>
   <a class="tile gold" href="{CFG['maps']}" target="_blank" rel="noopener">
    <span class="t-k">{E(x['t_rate'])}</span>
    <div><div class="big"><span data-count="{CFG['rating']}"{' data-ar="1"' if ar else ''}>{rd}</span></div>
    <div class="foot-row" style="margin-top:14px">{stars()}<span class="circle-link">{I['arrow']}</span></div>
    <p style="margin-top:8px">{E(x['t_rate_p'].format(n=nd))}</p></div>
   </a>
   <div class="tile"><span class="t-k">{E(x['t_247'])}</span><span class="clock" aria-hidden="true"><i></i></span><div><div class="big ltr">{x['open247']}</div><p style="margin-top:12px">{E(x['t_247_p'])}</p></div></div>
   <div class="tile photo span2 row2">{img(pre, 'vito-cockpit', x['t_car_h'])}<div class="cap"><span class="t-k">{E(x['t_car'])}</span><h3>{E(x['t_car_h'])}</h3><p>{E(x['t_car_p'])}</p></div></div>
   <div class="tile"><span class="t-k">{E(x['t_reg'])}</span><div><div class="big"><span data-count="9"{' data-ar="1"' if ar else ''}>{'٩' if ar else '9'}</span></div><p style="margin-top:12px">{E(x['t_reg_p'])}</p></div><div class="chips">{chips}</div></div>
   <div class="tile"><span class="t-k">{E(x['t_zero'])}</span><div><div class="big">{x['t_zero_big']}</div><p style="margin-top:12px">{E(x['t_zero_p'])}</p></div></div>
   <div class="tile span2">{flight}<span class="t-k">{E(x['t_air'])}</span><div><h3 class="display" style="font-size:clamp(2.2rem,3.6vw,3.2rem)">{E(x['t_air_h'])}</h3><p style="margin-top:10px;max-width:44ch">{E(x['t_air_p'])}</p></div></div>
   <div class="tile span2"><span class="t-k">{E(x['t_safe'])}</span><div><h3 class="display" style="font-size:clamp(2.2rem,3.6vw,3.2rem)">{E(x['t_safe_h'])}</h3><p style="margin-top:10px;max-width:44ch">{E(x['t_safe_p'])}</p></div></div>
  </div>
 </div>
</section>

<section class="section tight" id="services" aria-labelledby="svc-h">
 <div class="wrap">
  <div class="split-head"><div class="head" data-rv><span class="eyebrow">{E(t['svc_k'])}</span><h2 id="svc-h" class="display h2">{t['svc_h']}</h2></div><p data-rv>{E(t['svc_p'])}</p></div>
  <div class="svc" data-stagger>{svc}</div>
 </div>
</section>

<section class="section vito-sec" id="vito" aria-labelledby="car-h">
 <div class="outline-word" aria-hidden="true" data-drift>MERCEDES VITO</div>
 <div class="wrap vito">
  <div class="vito-stack" data-rv>
   <figure class="f1">{img(pre, 'vito-grille', 'Mercedes-Benz grille', par=14)}</figure>
   <figure class="f2">{img(pre, 'vito-sunset', 'Mercedes-Benz at sunset', par=14)}</figure>
   <div class="badge" aria-hidden="true"><svg viewBox="0 0 128 128"><defs><path id="bc" d="M64 64 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0"/></defs><text><textPath href="#bc">{E(badge_text)}</textPath></text></svg><b class="ltr">V</b></div>
  </div>
  <div>
   <span class="eyebrow" data-rv>{E(t['car_k'])}</span>
   <h2 id="car-h" class="display h2" style="margin:18px 0" data-rv>{t['car_h']}</h2>
   <p class="lead" data-rv>{E(t['car_p'])}</p>
   <div class="feats" data-stagger>{feats}</div>
  </div>
 </div>
 <div class="wrap"><div class="gallery bento" style="margin-top:40px" hidden></div></div>
</section>

<section class="dest" id="areas" aria-labelledby="areas-h">
 <div class="wrap"><div class="split-head" style="padding-top:clamp(40px,6vw,90px)"><div class="head" data-rv><span class="eyebrow">{E(x['dest_k'])}</span><h2 id="areas-h" class="display h2">{x['dest_h']}</h2></div><p data-rv>{E(x['dest_p'])}</p></div></div>
 <div class="dest-track">{dest_cards(lang, pre, '')}</div>
 <div class="wrap"><div class="dest-bar"><span>{E(x['swipe'])}</span><div class="prog"><i></i></div></div></div>
</section>

<section class="section tight" aria-labelledby="st-h">
 <div class="wrap">
  <div class="head c" data-rv><span class="eyebrow">{E(x['st_k'])}</span><h2 id="st-h" class="display h2">{x['st_h']}</h2></div>
  <div class="steps" data-stagger>{steps}</div>
 </div>
</section>

<section class="section book" id="book" aria-labelledby="book-h">
 <div class="book-bg" aria-hidden="true">{img(pre, 'qadisha', '')}</div>
 <div class="wrap book-grid">
  <div class="book-aside">
   <span class="eyebrow" data-rv>{E(t['book_k'])}</span>
   <h2 id="book-h" class="display h2" data-rv>{t['book_h']}</h2>
   <p class="muted" data-rv>{E(t['book_p'])}</p>
   <div class="contact-rows" data-stagger>
    <a class="crow" href="{wa}" target="_blank" rel="noopener"><span class="ci wa">{I['wa']}</span><span><small>{E(x['c_wa'])}</small><b class="ltr">{CFG['tel_intl']}</b></span></a>
    <a class="crow" href="tel:{CFG['tel']}"><span class="ci">{I['phone']}</span><span><small>{E(x['c_call'])}</small><b class="ltr">{CFG['tel_intl']}</b></span></a>
    <a class="crow" href="{CFG['instagram']}" target="_blank" rel="noopener"><span class="ci">{I['ig']}</span><span><small>{E(x['c_ig'])}</small><b>@vitotaxibycharbel</b></span></a>
   </div>
  </div>
  <form class="form" id="bookform" novalidate data-rv>
   <h3>{E(t['form_h'])}</h3>
   <p class="sub">{E(t['form_sub'])}</p>
   <div class="fields">
    <div class="field"><span class="lbl" id="trip-l">{E(t['trip_lbl'])}</span><div class="seg" role="group" aria-labelledby="trip-l">{trips}</div></div>
    <div class="row2">
     <div class="field"><label for="f-from">{E(t['f_from'])}</label><input id="f-from" name="from" autocomplete="street-address" placeholder="{E(t['f_from_ph'])}"></div>
     <div class="field"><label for="f-to">{E(t['f_to'])}</label><input id="f-to" name="to" placeholder="{E(t['f_to_ph'])}"></div>
    </div>
    <div class="row2">
     <div class="field"><label for="f-date">{E(t['f_date'])}</label><input id="f-date" name="date" type="date"></div>
     <div class="field"><label for="f-time">{E(t['f_time'])}</label><input id="f-time" name="time" type="time"></div>
    </div>
    <div class="row2">
     <div class="field"><label for="f-pax">{E(t['f_pax'])}</label><select id="f-pax" name="pax">{pax}</select></div>
     <div class="field"><label for="f-bags">{E(t['f_bags'])}</label><select id="f-bags" name="bags">{bags}</select></div>
    </div>
    <div class="field" id="f-flight-wrap" hidden><label for="f-flight">{E(t['f_flight'])}</label><input id="f-flight" name="flight" placeholder="{E(t['f_flight_ph'])}" autocapitalize="characters"></div>
    <div class="field"><label for="f-name">{E(t['f_name'])}</label><input id="f-name" name="name" autocomplete="name" placeholder="{E(t['f_name_ph'])}"></div>
    <div class="field"><label for="f-notes">{E(t['f_notes'])}</label><textarea id="f-notes" name="notes" rows="2" placeholder="{E(t['f_notes_ph'])}"></textarea></div>
   </div>
   <div class="actions">
    <button class="btn btn-wa" type="submit">{I['wa']}<span>{E(t['f_send'])}</span></button>
    <a class="btn btn-glass" href="tel:{CFG['tel']}">{I['phone']}<span>{E(t['f_call'])}</span></a>
   </div>
   <p class="fine">{I['lock']}<span>{E(t['fine'])}</span></p>
  </form>
 </div>
</section>

<section class="section tight" aria-labelledby="rate-h">
 <div class="wrap">
  <div class="review" data-rv>
   <div class="score"><span class="big"><span data-count="{CFG['rating']}"{' data-ar="1"' if ar else ''}>{rd}</span></span><div>{stars()}<small>{E(t['out_of'])}</small></div></div>
   <div>
    <span class="gmark">{I['google']}Google</span>
    <h2 id="rate-h" class="display h2">{t['rate_h']}</h2>
    <p class="muted">{E(t['rate_p'].format(r=rd, n=nd))}</p>
    <div class="ctas"><a class="btn btn-gold" href="{CFG['maps']}" target="_blank" rel="noopener"><span>{E(t['rate_btn'])}</span><span class="arr">{I['arrow']}</span></a></div>
    <p class="asof">{E(t['rate_asof'].format(d=CFG['rating_asof_ar'] if ar else CFG['rating_asof']))}</p>
   </div>
  </div>
  {voices}
 </div>
</section>

<section class="section tight" id="faq" aria-labelledby="faq-h">
 <div class="wrap faq-grid">
  <div class="head" data-rv><span class="eyebrow">{E(t['faq_k'])}</span><h2 id="faq-h" class="display h2">{t['faq_h']}</h2>
   <div class="ctas" style="margin-top:10px"><a class="btn btn-glass" href="{wa}" target="_blank" rel="noopener">{I['wa']}<span>{E(t['wa_short'])}</span></a></div></div>
  <div class="faq" data-stagger>{faq_block(t['faq'])}</div>
 </div>
</section>

<section class="section tight" aria-labelledby="final-h">
 <div class="wrap">
  <div class="final" data-rv>
   <div class="final-media" aria-hidden="true">{img(pre, 'vito-star', '', par=12)}</div>
   <div>
    <span class="eyebrow">{E(t['final_k'])}</span>
    <h2 id="final-h" class="display h2">{t['final_h']}</h2>
    <p class="lead">{E(t['final_p'])}</p>
    <div class="ctas">
     <a class="btn btn-gold" href="{wa}" target="_blank" rel="noopener">{I['wa']}<span>{E(t['book_wa'])}</span></a>
     <a class="btn btn-glass" href="{CFG['instagram']}" target="_blank" rel="noopener">{I['ig']}<span>Instagram</span></a>
    </div>
    <a class="bigphone" href="tel:{CFG['tel']}">{CFG['tel_intl']}</a>
   </div>
  </div>
 </div>
</section>
</main>''')
    out += [footer(lang, pre, '', True), floating(lang), scripts(lang, pre)]
    return '\n'.join(out)


# ── Area pages ────────────────────────────────────────────────────────────────
def area_page(lang, a):
    t, x = T[lang], X[lang]
    ar = lang == 'ar'
    pre = '../' if not ar else '../../'
    home_pre = '../'
    alt = ('../ar/%s/' if not ar else '../../%s/') % a['slug']
    name = a[lang]
    faqs = area_faq(a, lang)
    hello = ('Hello Charbel, I need a ride — %s.' if not ar else 'مرحبا شربل، بدي مشوار — %s.') % name
    wa = wa_link(hello)
    pic = AREA_IMG[a['slug']]
    crumbs = {'@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': t['home'], 'item': url_for(lang)},
        {'@type': 'ListItem', 'position': 2, 'name': name, 'item': url_for(lang, a['slug'])}]}
    webpage = {'@type': 'WebPage', '@id': url_for(lang, a['slug']) + '#webpage', 'url': url_for(lang, a['slug']), 'name': a[lang + '_title'],
               'isPartOf': {'@id': CFG['site'] + '/#website'}, 'about': {'@id': BIZ_ID}, 'inLanguage': 'ar' if ar else 'en',
               'primaryImageOfPage': CFG['site'] + '/assets/img/%s.webp' % pic}
    out = [head(lang, a[lang + '_title'], a[lang + '_desc'], a['slug'], pre,
                ld(business(lang), taxi_service(lang, a), webpage, crumbs, faq_ld(faqs)), preload_img=pic),
           top(lang, pre, home_pre, alt, False)]
    hoods = ''.join('<div class="hood"><b>%s</b><span>%s</span></div>' % (E(h), E(s)) for h, s in a[lang + '_hoods'])
    body = ''.join('<p>%s</p>' % E(p) for p in a[lang + '_body'])
    out.append(f'''<main id="main">
<section class="p-hero">
 <div class="hero-media">{img(pre, pic, name, eager=True)}</div>
 <div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb" data-intro><a href="{home_pre}">{E(t['home'])}</a><span aria-hidden="true">/</span><span aria-current="page">{E(name)}</span></nav>
  <span class="pill-note" data-intro><i class="live"></i>{E(x['live'])}<span class="sep"></span>{E(a[lang + '_sub'])}</span>
  <h1 class="display h1" data-split>{a[lang + '_h1'].replace('class="gold"', 'class="g"')}</h1>
  <p class="lead" data-intro>{E(a[lang + '_lede'])}</p>
  <div class="ctas" data-intro>
   <a class="btn btn-gold" href="{wa}" target="_blank" rel="noopener">{I['wa']}<span>{E(t['book_wa'])}</span></a>
   <a class="btn btn-glass" href="tel:{CFG['tel']}">{I['phone']}<span>{E(t['call'])} <span class="ltr">{CFG['tel_show']}</span></span></a>
  </div>
 </div>
</section>
<section class="section" style="padding-top:70px">
 <div class="wrap split">
  <div>
   <div class="prose" data-rv>{body}</div>
   <div class="hoods" data-stagger>{hoods}</div>
  </div>
  <aside class="sidecard" data-rv>
   <h3>{E(t['side_h'])}</h3>
   <p>{E(t['side_p'])}</p>
   <a class="btn btn-wa" href="{wa}" target="_blank" rel="noopener">{I['wa']}<span>{E(t['wa_short'])}</span></a>
   <a class="btn btn-glass" href="tel:{CFG['tel']}">{I['phone']}<span class="ltr">{CFG['tel_intl']}</span></a>
   <a class="btn btn-glass" href="{home_pre}#book"><span>{E(t['nav'][2][1])}</span><span class="arr">{I['arrow']}</span></a>
  </aside>
 </div>
</section>
<section class="section tight">
 <div class="wrap faq-grid">
  <div class="head" data-rv><span class="eyebrow">{E(t['faq_k'])}</span><h2 class="display h2">{E(t['area_faq_h'].format(a=name))}</h2></div>
  <div class="faq" data-stagger>{faq_block(faqs)}</div>
 </div>
</section>
<section class="dest" aria-labelledby="more-h">
 <div class="wrap"><div class="head" data-rv><span class="eyebrow">{E(t['other_areas'])}</span><h2 id="more-h" class="display h2">{x['dest_h']}</h2></div></div>
 <div class="dest-track">{dest_cards(lang, pre, '../', exclude=a)}</div>
 <div class="wrap"><div class="dest-bar"><span>{E(x['swipe'])}</span><div class="prog"><i></i></div></div></div>
</section>
</main>''')
    out += [footer(lang, pre, home_pre, False), floating(lang), scripts(lang, pre)]
    return '\n'.join(out)


def credits_page(lang):
    t, x = T[lang], X[lang]
    ar = lang == 'ar'
    pre = '../' if not ar else '../../'
    alt = '../ar/credits/' if not ar else '../../credits/'
    rows = [('<li><b>Mercedes-Benz Vito and details</b> — Unsplash contributors, <a href="https://unsplash.com/license" rel="noopener" target="_blank">Unsplash License</a>. Photographs are illustrative of the car model.</li>')]
    for k, c in CREDITS.items():
        lic = 'CC %s %s' % (c['license'].upper(), c['lv']) if c['license'] != 'cc0' else 'CC0'
        rows.append('<li><b>%s</b> — %s, <a href="%s" rel="noopener" target="_blank">%s</a> · <a href="%s" rel="noopener" target="_blank">source</a></li>'
                    % (E(c['title']), E(c['creator'] or 'Unknown'), E(c['lurl'] or '#'), lic, E(c['src'] or '#')))
    out = [head(lang, '%s — %s' % (x['credits'], CFG['name']), t['desc'], 'credits', pre, robots='noindex,follow'),
           top(lang, pre, '../', alt, False),
           f'''<main id="main"><section class="section" style="padding-top:170px"><div class="wrap">
<div class="head"><span class="eyebrow">{E(x['credits'])}</span><h1 class="display h2">{x['credits_h']}</h1><p>{E(x['credits_p'])}</p></div>
<ul class="credits">{''.join(rows)}</ul></div></section></main>''',
           footer(lang, pre, '../', False), floating(lang), scripts(lang, pre)]
    return '\n'.join(out)


def not_found():
    t, x = T['en'], X['en']
    pre = '/'
    return '\n'.join([
        head('en', t['nf_title'], t['desc'], '', pre, robots='noindex', canonical=False),
        top('en', pre, '/', '/ar/', False),
        f'''<main id="main"><section class="nf"><div>
<p class="eyebrow" style="justify-content:center">404</p>
<h1 class="display"><em class="g">404</em></h1>
<h2 class="display h2" style="margin-top:10px">{E(t['nf_h'])}</h2>
<p>{E(t['nf_p'])}</p>
<div class="ctas"><a class="btn btn-gold" href="/"><span>{E(t['nf_home'])}</span><span class="arr">{I['arrow']}</span></a>
<a class="btn btn-glass" href="{wa_link(t['wa_hello'])}" target="_blank" rel="noopener">{I['wa']}<span>WhatsApp</span></a></div>
</div></section></main>''',
        footer('en', pre, '/', False), floating('en'), scripts('en', pre)])


def write(rel, text):
    p = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)
    print('wrote', rel)


def main():
    write('index.html', home('en'))
    write('ar/index.html', home('ar'))
    for a in AREAS:
        write('%s/index.html' % a['slug'], area_page('en', a))
        write('ar/%s/index.html' % a['slug'], area_page('ar', a))
    write('credits/index.html', credits_page('en'))
    write('ar/credits/index.html', credits_page('ar'))
    write('404.html', not_found())

    rows = []
    for slug, pr in [('', '1.0')] + [(a['slug'], '0.8') for a in AREAS]:
        for lang in ('en', 'ar'):
            rows.append('''  <url>
    <loc>%s</loc>
    <xhtml:link rel="alternate" hreflang="en" href="%s"/>
    <xhtml:link rel="alternate" hreflang="ar" href="%s"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>
    <image:image><image:loc>%s/assets/img/%s.webp</image:loc></image:image>
    <changefreq>monthly</changefreq>
    <priority>%s</priority>
  </url>''' % (url_for(lang, slug), url_for('en', slug), url_for('ar', slug), url_for('en', slug), CFG['site'],
               AREA_IMG.get(slug, 'vito-night'), pr if lang == 'en' else ('0.9' if not slug else '0.7')))
    write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n%s\n</urlset>\n' % '\n'.join(rows))
    write('robots.txt', 'User-agent: *\nAllow: /\n\nSitemap: %s/sitemap.xml\n' % CFG['site'])
    write('site.webmanifest', json.dumps({
        'name': CFG['name'], 'short_name': 'Vito Taxi', 'start_url': '/', 'display': 'standalone',
        'background_color': '#060607', 'theme_color': '#060607', 'lang': 'en',
        'icons': [{'src': '/icon-180.png', 'sizes': '180x180', 'type': 'image/png'},
                  {'src': '/icon-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}]}, indent=2) + '\n')
    write('vito-taxi.vcf', '\r\n'.join(['BEGIN:VCARD', 'VERSION:3.0', 'FN:Vito Taxi by Charbel', 'N:;Vito Taxi by Charbel;;;',
        'ORG:Vito Taxi by Charbel', 'TEL;TYPE=CELL,VOICE:%s' % CFG['tel'], 'ADR;TYPE=WORK:;;Antelias Road;Antelias;Mount Lebanon;;Lebanon',
        'URL:%s/' % CFG['site'], 'X-SOCIALPROFILE;TYPE=instagram:%s' % CFG['instagram'],
        'NOTE:Your comfort, our priority. 24/7 Mercedes Vito taxi — airport transfers, daily rides, trips and events. WhatsApp %s' % CFG['tel_intl'],
        'END:VCARD', '']))


if __name__ == '__main__':
    main()
