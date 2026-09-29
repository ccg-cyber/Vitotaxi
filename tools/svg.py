# -*- coding: utf-8 -*-
"""Hand-drawn SVG artwork shared by every page: the van, the skyline, the monogram and the icons."""


def van(uid='v', moving=True):
    """A black Mercedes-Benz Vito-style van in side profile, facing right. No badges, no plates."""
    w = ' class="wheel"' if moving else ''
    beam = '<path class="beam" d="M758 176 L990 140 L990 230 Z" fill="url(#%s-beam)"/>' % uid if moving else ''
    return f'''<svg viewBox="0 0 1000 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Black Mercedes-Benz Vito van" style="overflow:visible">
<defs>
 <linearGradient id="{uid}-body" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="#3A3E48"/><stop offset=".18" stop-color="#1B1E25"/><stop offset=".55" stop-color="#0D0F13"/><stop offset="1" stop-color="#050608"/>
 </linearGradient>
 <linearGradient id="{uid}-shine" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".45" stop-color="#F6DC9C" stop-opacity=".28"/><stop offset=".55" stop-color="#fff" stop-opacity=".12"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
 </linearGradient>
 <linearGradient id="{uid}-glass" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#2A3242"/><stop offset=".5" stop-color="#0B0E15"/><stop offset="1" stop-color="#1A2030"/>
 </linearGradient>
 <linearGradient id="{uid}-refl" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#E8D8B5" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
 </linearGradient>
 <radialGradient id="{uid}-rim" cx=".4" cy=".35" r=".7">
  <stop offset="0" stop-color="#E9EBEF"/><stop offset=".55" stop-color="#8C919B"/><stop offset="1" stop-color="#3A3D44"/>
 </radialGradient>
 <radialGradient id="{uid}-head" cx=".5" cy=".5" r=".5">
  <stop offset="0" stop-color="#FFFBEF"/><stop offset=".4" stop-color="#F6E7C2"/><stop offset="1" stop-color="#F6DC9C" stop-opacity="0"/>
 </radialGradient>
 <linearGradient id="{uid}-beam" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#FFF3D6" stop-opacity=".55"/><stop offset="1" stop-color="#FFF3D6" stop-opacity="0"/>
 </linearGradient>
 <radialGradient id="{uid}-shadow" cx=".5" cy=".5" r=".5">
  <stop offset="0" stop-color="#000" stop-opacity=".85"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
 </radialGradient>
</defs>
{beam}
<ellipse cx="440" cy="300" rx="430" ry="22" fill="url(#{uid}-shadow)"/>
<!-- body -->
<path d="M58 262 L56 92 Q57 50 102 46 L610 40 Q648 39 668 60 L748 150 Q760 162 790 166 L862 176 Q900 182 906 212 L910 250 Q911 272 890 274 L812 276 A64 64 0 0 0 688 276 L292 276 A64 64 0 0 0 168 276 L78 276 Q58 276 58 262 Z" fill="url(#{uid}-body)"/>
<path d="M60 96 Q62 56 104 52 L608 46 Q640 45 660 64 L700 108 L62 116 Z" fill="url(#{uid}-shine)" opacity=".9"/>
<!-- roof taxi sign -->
<rect x="360" y="26" width="112" height="18" rx="6" fill="#F6DC9C"/>
<rect x="360" y="26" width="112" height="18" rx="6" fill="none" stroke="#AD8733" stroke-width="1.5"/>
<text x="416" y="40" text-anchor="middle" font-family="Manrope,Arial,sans-serif" font-weight="800" font-size="13" letter-spacing="3" fill="#1A1408">TAXI</text>
<rect x="340" y="42" width="152" height="5" rx="2" fill="#1B1E25"/>
<!-- glasshouse -->
<path d="M84 74 Q86 64 102 63 L602 58 Q628 58 642 74 L712 152 L84 156 Z" fill="url(#{uid}-glass)"/>
<path d="M84 74 Q86 64 102 63 L602 58 Q628 58 642 74 L712 152 L84 156 Z" fill="url(#{uid}-refl)"/>
<path d="M150 64 L110 156 L150 156 L190 63 Z M420 60 L380 156 L400 156 L440 60 Z" fill="#fff" opacity=".05"/>
<!-- pillars -->
<rect x="214" y="58" width="14" height="100" fill="#07080B"/>
<rect x="456" y="56" width="14" height="102" fill="#07080B"/>
<path d="M600 58 L616 58 L660 156 L644 156 Z" fill="#07080B"/>
<!-- beltline chrome -->
<path d="M70 160 L720 156" stroke="#C8CDD6" stroke-opacity=".55" stroke-width="2"/>
<path d="M70 164 L724 160" stroke="#000" stroke-opacity=".5" stroke-width="1"/>
<!-- door seams, sliding rail, handles -->
<path d="M232 74 L232 272" stroke="#000" stroke-opacity=".7" stroke-width="2"/>
<path d="M470 64 L470 272" stroke="#000" stroke-opacity=".7" stroke-width="2"/>
<path d="M650 72 Q700 150 690 272" stroke="#000" stroke-opacity=".6" stroke-width="2" fill="none"/>
<path d="M236 150 L466 148" stroke="#000" stroke-opacity=".45" stroke-width="3"/>
<rect x="426" y="178" width="30" height="7" rx="3.5" fill="#9AA0AA" opacity=".7"/>
<rect x="608" y="176" width="30" height="7" rx="3.5" fill="#9AA0AA" opacity=".7"/>
<!-- side sculpt line -->
<path d="M70 210 Q480 200 900 214" stroke="url(#{uid}-shine)" stroke-width="2" fill="none" opacity=".8"/>
<path d="M70 236 L150 236 M310 236 L674 236 M830 236 L905 236" stroke="#000" stroke-opacity=".35" stroke-width="2"/>
<!-- mirror -->
<path d="M700 138 Q716 128 734 136 L736 156 Q716 160 704 156 Z" fill="#14171D" stroke="#2C3039"/>
<!-- head & tail lights -->
<path d="M846 180 Q890 184 900 200 L870 204 Q850 198 842 188 Z" fill="#EFE6D0"/>
<ellipse cx="878" cy="194" rx="46" ry="26" fill="url(#{uid}-head)" opacity=".9"/>
<path d="M58 104 L70 104 L70 172 L58 172 Z" fill="#B3261E"/>
<path d="M58 104 L70 104 L70 172 L58 172 Z" fill="#FF5A46" opacity=".5"><animate attributeName="opacity" values=".35;.7;.35" dur="3s" repeatCount="indefinite"/></path>
<!-- grille and bumper -->
<path d="M900 212 L910 214 L910 246 L900 246 Z" fill="#0A0B0E"/>
<path d="M896 218 L910 218 M896 226 L910 226 M896 234 L910 234" stroke="#8D929B" stroke-width="1.5" opacity=".6"/>
<path d="M78 268 L168 268 M812 268 L890 268" stroke="#2A2D35" stroke-width="6" stroke-linecap="round"/>
<!-- wheels -->
<g transform="translate(230 276)"><circle r="58" fill="#050507"/><circle r="56" fill="#0E0F12" stroke="#1E2027" stroke-width="3"/>
 <g{w}><circle r="36" fill="url(#{uid}-rim)"/>
  <g fill="#1A1C21">{''.join('<path d="M-5 -34 L5 -34 L3 -9 L-3 -9 Z" transform="rotate(%d)"/>' % a for a in range(0, 360, 36))}</g>
  <circle r="10" fill="#2A2D34"/><circle r="4" fill="#C9CDD4"/></g></g>
<g transform="translate(750 276)"><circle r="58" fill="#050507"/><circle r="56" fill="#0E0F12" stroke="#1E2027" stroke-width="3"/>
 <g{w}><circle r="36" fill="url(#{uid}-rim)"/>
  <g fill="#1A1C21">{''.join('<path d="M-5 -34 L5 -34 L3 -9 L-3 -9 Z" transform="rotate(%d)"/>' % a for a in range(0, 360, 36))}</g>
  <circle r="10" fill="#2A2D34"/><circle r="4" fill="#C9CDD4"/></g></g>
</svg>'''


def skyline():
    """A Beirut-coast silhouette: towers, the hills behind, a few lit windows."""
    import random
    r = random.Random(7)
    parts = ['<path d="M0 120 Q120 70 260 96 T520 84 T800 92 L800 200 L0 200 Z" fill="#131826"/>']
    x = 0
    while x < 800:
        w = r.randint(26, 58); h = r.randint(40, 150)
        parts.append('<rect x="%d" y="%d" width="%d" height="%d" fill="#0B0E16"/>' % (x, 200 - h, w, h))
        for _ in range(r.randint(1, 5)):
            wx = x + r.randint(4, max(5, w - 8)); wy = 200 - h + r.randint(8, max(9, h - 10))
            parts.append('<rect x="%d" y="%d" width="3" height="4" fill="#F6DC9C" opacity="%.2f"/>' % (wx, wy, r.uniform(.35, .9)))
        x += w + r.randint(2, 14)
    return '<svg viewBox="0 0 800 200" preserveAspectRatio="none" aria-hidden="true">%s</svg>' % ''.join(parts)


MONO = '''<svg viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F6DC9C"/><stop offset=".6" stop-color="#E2B85C"/><stop offset="1" stop-color="#AD8733"/></linearGradient></defs>
<circle cx="24" cy="24" r="22.5" fill="#0C0D11" stroke="url(#mg)" stroke-width="1.5"/><circle cx="24" cy="24" r="18.5" fill="none" stroke="url(#mg)" stroke-opacity=".35" stroke-width=".8"/>
<path d="M14 15 L24 35 L34 15" fill="none" stroke="url(#mg)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="12.5" r="1.6" fill="#F6DC9C"/></svg>'''

STAR = '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.7l6-.7z"/></svg>'

I = {
 'wa': '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>',
 'phone': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
 'plane': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
 'city': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V7l6-4v18M19 21V11l-8-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg>',
 'map': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3zM9 3v15M15 6v15"/></svg>',
 'glass': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 22h8M12 11v11M5 3h14l-1 5a6 6 0 0 1-12 0L5 3z"/></svg>',
 'group': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
 'brief': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
 'seat': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4h6a2 2 0 0 1 2 2v7H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM5 13l-1 7M15 13h3a2 2 0 0 1 2 2v5M8 17h8"/></svg>',
 'bag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="7" width="12" height="13" rx="2"/><path d="M9 7V4h6v3M9 20v1M15 20v1M10 11v5M14 11v5"/></svg>',
 'snow': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M4.9 6.9l14.2 10.2M19.1 6.9 4.9 17.1M9 4l3 2 3-2M9 20l3-2 3 2"/></svg>',
 'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
 'clock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
 'pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
 'arrow': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
 'ig': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
 'fb': '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/></svg>',
 'lock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
 'card': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
 'google': '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-1.9 3.3-4.8 3.3-7.9z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1a6.5 6.5 0 0 1-6.1-4.5H2.2v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.9 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.2a11 11 0 0 0 0 9.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.2 7.1l3.7 2.8A6.5 6.5 0 0 1 12 5.4z"/></svg>',
}
