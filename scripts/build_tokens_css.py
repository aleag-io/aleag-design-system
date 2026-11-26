"""Compile design-system/tokens.json into design-system/tokens.css.

Run after any token change:  python3 scripts/build_tokens_css.py

Output, in order:
- @font-face rules for every font in type.fonts (paths relative to tokens.css)
- color and shadow custom properties for the first theme on :root and
  [data-theme="<first>"], then a [data-theme="<id>"] block per further theme
- every other token family (spacing, radius, duration, easing, breakpoint,
  layout, ...) and the font stacks (--font-<key>) on :root
- one class per type style (.display-xl, .body, .code, ...)

Aliases such as "{cobalt-500}" become var(--cobalt-500).
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "design-system", "tokens.json")
OUT = os.path.join(ROOT, "design-system", "tokens.css")

ALIAS = re.compile(r"^\{([A-Za-z0-9][A-Za-z0-9_.-]*)\}$")


def css_name(name):
    return "--" + name.replace(".", "\\.")


def value(v):
    m = ALIAS.match(v) if isinstance(v, str) else None
    return f"var({css_name(m.group(1))})" if m else str(v)


def themed(tokens, theme, first):
    out = []
    for t in tokens:
        v = t["value"]
        if isinstance(v, dict):
            val = v.get(theme, v.get(first))
        else:
            val = v if theme == first else None
        if val is not None:
            out.append(f"  {css_name(t['name'])}: {value(val)};")
    return out


def main():
    with open(SRC) as f:
        t = json.load(f)
    lines = [f"/* {t.get('name', 'aleag')} — generated from tokens.json by scripts/build_tokens_css.py. Do not edit by hand. */", ""]

    for font in t.get("type", {}).get("fonts", []):
        path = font["file"] if "/" in font["file"] else "fonts/" + font["file"]
        ext = os.path.splitext(path)[1].lstrip(".").lower()
        fmt = {"ttf": "truetype", "otf": "opentype", "woff": "woff", "woff2": "woff2"}.get(ext, ext)
        lines += [
            "@font-face {",
            f"  font-family: \"{font['family']}\";",
            f"  src: url(\"{path}\") format(\"{fmt}\");",
            f"  font-weight: {font.get('weight', '400')};",
            f"  font-style: {font.get('style', 'normal')};",
            "  font-display: swap;",
            "}",
        ]
    lines.append("")

    themes = [th["id"] for th in t["color"]["themes"]]
    first = themes[0]
    colorish = t["color"]["tokens"] + t.get("shadow", {}).get("tokens", [])
    lines.append(f":root, [data-theme=\"{first}\"] {{")
    lines += themed(colorish, first, first)
    lines.append("}")
    for th in themes[1:]:
        lines.append("")
        lines.append(f"[data-theme=\"{th}\"] {{")
        lines += [l for l in themed(colorish, th, first)]
        lines.append("}")

    lines += ["", ":root {"]
    for fam, d in t.items():
        if fam in ("color", "shadow", "type") or not isinstance(d, dict) or "tokens" not in d:
            continue
        for tok in d["tokens"]:
            lines.append(f"  {css_name(tok['name'])}: {value(tok['value'])};")
    for key, stack in t.get("type", {}).get("families", {}).items():
        lines.append(f"  --font-{key}: {stack};")
    lines.append("}")

    for group in t.get("type", {}).get("groups", []):
        for st in group["styles"]:
            fam = st.get("family", group.get("family"))
            props = [f"font-family: var(--font-{fam})"]
            for k, css in (("fontSize", "font-size"), ("lineHeight", "line-height"), ("fontWeight", "font-weight"),
                           ("letterSpacing", "letter-spacing"), ("fontStyle", "font-style")):
                if k in st:
                    props.append(f"{css}: {st[k]}")
            lines.append(f".{st['name']} {{ " + "; ".join(props) + "; }")

    with open(OUT, "w") as f:
        f.write("\n".join(lines) + "\n")
    print("wrote", os.path.relpath(OUT, ROOT))


if __name__ == "__main__":
    main()
