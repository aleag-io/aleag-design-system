"""Regenerate the retired v1 aleag logo SVGs in design-system/assets/Retired logos.

The mark is four strokes (bowl, stem, descender, bar). The wordmark is
Sacramento outlined to paths with fontTools. Run: python3 scripts/build_logos.py
"""
import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen
OUT=os.path.join(ROOT,'design-system/assets/Retired logos')
os.makedirs(OUT,exist_ok=True)
f=TTFont(os.path.join(ROOT,'design-system/fonts/Sacramento.ttf'))
gs=f.getGlyphSet(); cmap=f.getBestCmap(); upm=f['head'].unitsPerEm
def word(text,size):
    s=size/upm; x=0; pen=SVGPathPen(gs); bp=BoundsPen(gs)
    for ch in text:
        g=cmap[ord(ch)]
        t=(s,0,0,-s,x,0)
        gs[g].draw(TransformPen(pen,t)); gs[g].draw(TransformPen(bp,t))
        x+=gs[g].width*s
    return pen.getCommands(), bp.bounds, x
# mark geometry, stroke 12, butt caps
SW=12
def mark(ink,bar,ox=0,oy=0,k=1.0):
    g=f'<g transform="translate({ox} {oy}) scale({k})">' \
      f'<circle cx="40" cy="62" r="22" fill="none" stroke="{ink}" stroke-width="{SW}"/>' \
      f'<path d="M62 4 V98 A22 22 0 0 1 40 120 H30" fill="none" stroke="{ink}" stroke-width="{SW}"/>' \
      f'<rect x="29" y="58" width="22" height="8" fill="{bar}"/></g>'
    return g
# mark bbox: x 12..68, y 4..126
INK='#0a5fe8'; BAR='#ffc933'; WHITE='#ffffff'; DEEP='#0b1524'; MONO='#0b1524'
def svg(w,h,body,bg=None,title='aleag'):
    b=f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{title}"><title>{title}</title>{b}{body}</svg>\n'
def markfile(ink,bar,bg=None):
    return svg(80,130,mark(ink,bar,ox=0,oy=0),bg)
# normalize mark to start at x=12: viewBox 0..80 gives 12px side room; tighten: translate -12+... keep simple: viewBox "8 0 64 130"
def markfile_tight(ink,bar,bg=None):
    s=svg(64,130,mark(ink,bar,ox=-8,oy=0),bg); return s
open(f'{OUT}/aleag-mark.svg','w').write(markfile_tight(INK,BAR))
open(f'{OUT}/aleag-mark-reversed.svg','w').write(markfile_tight(WHITE,BAR))
open(f'{OUT}/aleag-app-icon.svg','w').write(svg(512,512,mark(WHITE,BAR,ox=256-40*2.6,oy=256-65*2.6,k=2.6),INK))
open(f'{OUT}/aleag-mark-mono.svg','w').write(markfile_tight(MONO,MONO))
# wordmark
d,(x0,y0,x1,y1),adv=word('aleag',84)
print('word bounds',x0,y0,x1,y1)
def lockup_h(ink,bar,wcol,bg=None):
    # mark at left, 64 wide; word to the right baseline aligned to bowl bottom area
    gap=26; mx=-8
    wx=64+gap-x0; base=74  # baseline y
    wy0=base+y0; wy1=base+y1
    ul_y=base+ (y1 if y1>0 else 0)+12
    ul_y=max(ul_y,wy1+10)
    W=int(64+gap+(x1-x0)+8); H=136
    body=mark(ink,bar,ox=mx)+f'<path transform="translate({wx} {base})" d="{d}" fill="{wcol}"/>' \
        f'<rect x="{64+gap}" y="{base+y1+6:.1f}" width="{int((x1-x0)*0.92)}" height="5" fill="{bar}"/>'
    return svg(W,H,body,bg)
open(f'{OUT}/aleag-horizontal.svg','w').write(lockup_h(INK,BAR,INK))
open(f'{OUT}/aleag-horizontal-reversed.svg','w').write(lockup_h(WHITE,BAR,WHITE))
def lockup_s(ink,bar,wcol):
    ww=x1-x0; W=int(max(ww,64)+16); mx=(W-64)/2-8
    base=130+74; wx=(W-ww)/2-x0
    H=int(base+y1+14)
    body=mark(ink,bar,ox=mx)+f'<path transform="translate({wx} {base})" d="{d}" fill="{wcol}"/>' \
        f'<rect x="{(W-ww*0.7)/2:.1f}" y="{base+y1+6:.1f}" width="{int(ww*0.7)}" height="5" fill="{bar}"/>'
    return svg(W,max(H,base+26),body)
open(f'{OUT}/aleag-stacked.svg','w').write(lockup_s(INK,BAR,INK))
print(os.listdir(OUT))
