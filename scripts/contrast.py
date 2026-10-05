"""WCAG 2 contrast ratio between two hex colors.

Usage: python3 scripts/contrast.py '#0a5fe8' '#ffffff'
"""
import sys


def luminance(hex_color):
    h = hex_color.lstrip('#')
    r, g, b = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    f = lambda c: c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def contrast(a, b):
    la, lb = sorted([luminance(a), luminance(b)], reverse=True)
    return round((la + 0.05) / (lb + 0.05), 2)


if __name__ == '__main__':
    print(contrast(sys.argv[1], sys.argv[2]))
