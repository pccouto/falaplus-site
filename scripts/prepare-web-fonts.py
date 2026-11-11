"""Optional asset preparation with fontTools + Brotli (not required to serve the site)."""
from pathlib import Path
from fontTools.ttLib import TTFont
ROOT=Path(__file__).resolve().parents[1]
for name in ['baloo2-variable','nunito-variable']:
    source=ROOT/'assets/fonts'/f'{name}.ttf'
    target=source.with_suffix('.woff2')
    font=TTFont(source);glyphs=font.getGlyphOrder();axes=[(a.axisTag,a.minValue,a.maxValue) for a in font['fvar'].axes]
    font.flavor='woff2';font.save(target)
    restored=TTFont(target)
    assert restored.getGlyphOrder()==glyphs
    assert [(a.axisTag,a.minValue,a.maxValue) for a in restored['fvar'].axes]==axes
    assert restored['hmtx'].metrics==font['hmtx'].metrics
    print(f'{name}: {source.stat().st_size:,} -> {target.stat().st_size:,} bytes; glyphs, variation axes and advances preserved.')
