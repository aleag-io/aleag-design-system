/* @ds-bundle: {"format":4,"namespace":"Aleag","components":[{"name":"Logo"},{"name":"Button"},{"name":"TextField"},{"name":"Card"},{"name":"Badge"},{"name":"Alert"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) if (keys.indexOf(k) < 0) o[k] = p[k]; return o; }

  /* The mark: bowl (a), stem (l), bar (e), descender (g). Four strokes, butt caps. */
  function Mark(props) {
    return h('g', { transform: props.transform },
      h('circle', { cx: 40, cy: 62, r: 22, fill: 'none', stroke: props.ink, strokeWidth: 12 }),
      h('path', { d: 'M62 4 V98 A22 22 0 0 1 40 120 H30', fill: 'none', stroke: props.ink, strokeWidth: 12 }),
      h('rect', { x: 29, y: 58, width: 22, height: 8, fill: props.bar }));
  }
  function Logo(p) {
    var variant = p.variant || 'mark', tone = p.tone || 'color', size = p.size || 40;
    var ink = tone === 'reversed' ? '#ffffff' : tone === 'mono' ? 'currentColor' : 'var(--mark-ink)';
    var bar = tone === 'mono' ? 'currentColor' : 'var(--mark-bar)';
    var label = p.label || 'aleag';
    if (variant === 'mark') {
      return h('svg', { className: cx('al-logo', p.className), viewBox: '8 0 64 130', height: size, width: size * 64 / 130, role: 'img', 'aria-label': label },
        h(Mark, { ink: ink, bar: bar }));
    }
    var wordInk = tone === 'reversed' ? '#ffffff' : tone === 'mono' ? 'currentColor' : 'var(--mark-ink)';
    var word = h('span', { className: 'al-logo-word', style: { color: wordInk, fontSize: size * 0.62 } },
      label, h('span', { className: 'al-logo-rule', style: { background: bar } }));
    return h('span', { className: cx('al-logo-lockup', 'al-logo-' + variant, p.className), role: 'img', 'aria-label': label },
      h('svg', { viewBox: '8 0 64 130', height: size, width: size * 64 / 130, 'aria-hidden': true }, h(Mark, { ink: ink, bar: bar })),
      h('span', { 'aria-hidden': true }, word));
  }

  function Button(p) {
    var rest = omit(p, ['variant', 'size', 'icon', 'iconRight', 'block', 'className', 'children']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('al-btn', 'al-btn-' + (p.variant || 'secondary'), 'al-btn-' + (p.size || 'md'), p.block && 'al-btn-block', p.className)
    }), p.icon && h('span', { className: 'al-btn-icon', 'aria-hidden': true }, p.icon), p.children,
      p.iconRight && h('span', { className: 'al-btn-icon', 'aria-hidden': true }, p.iconRight));
  }

  var uid = 0;
  function TextField(p) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = p.id || 'al-field-' + (++uid);
    var id = idRef.current, hintId = id + '-hint';
    var rest = omit(p, ['label', 'hint', 'error', 'multiline', 'className', 'id', 'prefix']);
    var describe = (p.error || p.hint) ? hintId : undefined;
    var control = h(p.multiline ? 'textarea' : 'input', Object.assign({}, rest, {
      id: id, className: 'al-input', 'aria-invalid': p.error ? true : undefined, 'aria-describedby': describe
    }));
    return h('div', { className: cx('al-field', p.error && 'is-error', p.className) },
      h('label', { className: 'al-field-label', htmlFor: id }, p.label),
      p.prefix ? h('div', { className: 'al-input-wrap' }, h('span', { className: 'al-input-prefix' }, p.prefix), control) : control,
      (p.error || p.hint) && h('p', { id: hintId, className: 'al-field-hint' }, p.error || p.hint));
  }

  function Card(p) {
    var tag = p.href ? 'a' : 'div';
    var rest = omit(p, ['eyebrow', 'title', 'media', 'footer', 'elevation', 'className', 'children']);
    return h(tag, Object.assign({}, rest, {
      className: cx('al-card', 'al-elev-' + (p.elevation == null ? 1 : p.elevation), p.href && 'al-card-link', p.className)
    }),
      p.media && h('div', { className: 'al-card-media' }, p.media),
      h('div', { className: 'al-card-body' },
        p.eyebrow && h('p', { className: 'al-card-eyebrow' }, p.eyebrow),
        p.title && h('h3', { className: 'al-card-title' }, p.title),
        p.children && h('div', { className: 'al-card-content' }, p.children)),
      p.footer && h('div', { className: 'al-card-footer' }, p.footer));
  }

  function Badge(p) {
    return h('span', { className: cx('al-badge', 'al-badge-' + (p.tone || 'neutral'), p.className) },
      p.dot && h('span', { className: 'al-badge-dot', 'aria-hidden': true }), p.children);
  }

  var ICONS = {
    info: 'M12 8h.01M11 12h1v5h1',
    success: 'M8 12.5l2.5 2.5L16 9.5',
    warning: 'M12 9v4M12 17h.01',
    danger: 'M9 9l6 6M15 9l-6 6'
  };
  function AlertIcon(p) {
    var tone = p.tone;
    return h('svg', { viewBox: '0 0 24 24', width: 20, height: 20, 'aria-hidden': true, className: 'al-alert-icon' },
      tone === 'warning'
        ? h('path', { d: 'M12 3.5L21.5 20h-19z', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinejoin: 'round' })
        : h('circle', { cx: 12, cy: 12, r: 9, fill: 'none', stroke: 'currentColor', strokeWidth: 1.75 }),
      h('path', { d: ICONS[tone], fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function Alert(p) {
    var tone = p.tone || 'info';
    return h('div', { className: cx('al-alert', 'al-alert-' + tone, p.className), role: tone === 'danger' ? 'alert' : 'status' },
      h(AlertIcon, { tone: tone }),
      h('div', { className: 'al-alert-body' },
        p.title && h('p', { className: 'al-alert-title' }, p.title),
        p.children && h('div', { className: 'al-alert-text' }, p.children)),
      p.action && h('div', { className: 'al-alert-action' }, p.action));
  }

  window.Aleag = Object.assign(window.Aleag || {}, { Logo: Logo, Button: Button, TextField: TextField, Card: Card, Badge: Badge, Alert: Alert });
})();
