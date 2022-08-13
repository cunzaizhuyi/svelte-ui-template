function d() {
}
function S(n) {
  return n();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function m(n) {
  n.forEach(S);
}
function F(n) {
  return typeof n == "function";
}
function B(n, t) {
  return n != n ? t == t : n !== t || n && typeof n == "object" || typeof n == "function";
}
function G(n) {
  return Object.keys(n).length === 0;
}
function g(n, t) {
  n.appendChild(t);
}
function D(n, t, e) {
  const r = H(n);
  if (!r.getElementById(t)) {
    const u = v("style");
    u.id = t, u.textContent = e, J(r, u);
  }
}
function H(n) {
  if (!n)
    return document;
  const t = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return t && t.host ? t : n.ownerDocument;
}
function J(n, t) {
  g(n.head || n, t);
}
function L(n, t, e) {
  n.insertBefore(t, e || null);
}
function _(n) {
  n.parentNode.removeChild(n);
}
function v(n) {
  return document.createElement(n);
}
function y(n) {
  return document.createTextNode(n);
}
function R(n, t, e, r) {
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
}
function T(n, t, e) {
  e == null ? n.removeAttribute(t) : n.getAttribute(t) !== e && n.setAttribute(t, e);
}
function K(n) {
  return Array.from(n.childNodes);
}
function I(n, t) {
  t = "" + t, n.wholeText !== t && (n.data = t);
}
let $;
function p(n) {
  $ = n;
}
const f = [], A = [], h = [], O = [], Q = Promise.resolve();
let w = !1;
function U() {
  w || (w = !0, Q.then(M));
}
function x(n) {
  h.push(n);
}
const k = /* @__PURE__ */ new Set();
let b = 0;
function M() {
  const n = $;
  do {
    for (; b < f.length; ) {
      const t = f[b];
      b++, p(t), V(t.$$);
    }
    for (p(null), f.length = 0, b = 0; A.length; )
      A.pop()();
    for (let t = 0; t < h.length; t += 1) {
      const e = h[t];
      k.has(e) || (k.add(e), e());
    }
    h.length = 0;
  } while (f.length);
  for (; O.length; )
    O.pop()();
  w = !1, k.clear(), p(n);
}
function V(n) {
  if (n.fragment !== null) {
    n.update(), m(n.before_update);
    const t = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, t), n.after_update.forEach(x);
  }
}
const W = /* @__PURE__ */ new Set();
function X(n, t) {
  n && n.i && (W.delete(n), n.i(t));
}
function Y(n, t, e, r) {
  const { fragment: u, on_mount: c, on_destroy: o, after_update: s } = n.$$;
  u && u.m(t, e), r || x(() => {
    const l = c.map(S).filter(F);
    o ? o.push(...l) : m(l), n.$$.on_mount = [];
  }), s.forEach(x);
}
function Z(n, t) {
  const e = n.$$;
  e.fragment !== null && (m(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function nn(n, t) {
  n.$$.dirty[0] === -1 && (f.push(n), U(), n.$$.dirty.fill(0)), n.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function P(n, t, e, r, u, c, o, s = [-1]) {
  const l = $;
  p(n);
  const a = n.$$ = {
    fragment: null,
    ctx: null,
    props: c,
    update: d,
    not_equal: u,
    bound: j(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: j(),
    dirty: s,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  o && o(a.root);
  let z = !1;
  if (a.ctx = e ? e(n, t.props || {}, (i, E, ...C) => {
    const N = C.length ? C[0] : E;
    return a.ctx && u(a.ctx[i], a.ctx[i] = N) && (!a.skip_bound && a.bound[i] && a.bound[i](N), z && nn(n, i)), E;
  }) : [], a.update(), z = !0, m(a.before_update), a.fragment = r ? r(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const i = K(t.target);
      a.fragment && a.fragment.l(i), i.forEach(_);
    } else
      a.fragment && a.fragment.c();
    t.intro && X(n.$$.fragment), Y(n, t.target, t.anchor, t.customElement), M();
  }
  p(l);
}
class q {
  $destroy() {
    Z(this, 1), this.$destroy = d;
  }
  $on(t, e) {
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(e), () => {
      const u = r.indexOf(e);
      u !== -1 && r.splice(u, 1);
    };
  }
  $set(t) {
    this.$$set && !G(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function tn(n) {
  D(n, "svelte-1etnm5k", ".svelte-1etnm5k,.svelte-1etnm5k::before,.svelte-1etnm5k::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1etnm5k::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-black.svelte-1etnm5k{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity))}.text-white.svelte-1etnm5k{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}");
}
function en(n) {
  let t, e, r, u, c;
  return {
    c() {
      t = v("button"), e = y("count is "), r = y(n[0]), T(t, "class", "bg-black text-white svelte-1etnm5k");
    },
    m(o, s) {
      L(o, t, s), g(t, e), g(t, r), u || (c = R(t, "click", n[1]), u = !0);
    },
    p(o, [s]) {
      s & 1 && I(r, o[0]);
    },
    i: d,
    o: d,
    d(o) {
      o && _(t), u = !1, c();
    }
  };
}
function rn(n, t, e) {
  let r = 0;
  return [r, () => {
    e(0, r += 1);
  }];
}
class sn extends q {
  constructor(t) {
    super(), P(this, t, rn, en, B, {}, tn);
  }
}
function un(n) {
  D(n, "svelte-1lydoww", ".svelte-1lydoww,.svelte-1lydoww::before,.svelte-1lydoww::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.svelte-1lydoww::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.bg-red.svelte-1lydoww{--un-bg-opacity:1;background-color:rgba(248,113,113,var(--un-bg-opacity))}.text-white.svelte-1lydoww{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity))}.btn.svelte-1lydoww{border:8px solid #35eb9a}");
}
function on(n) {
  let t, e, r, u, c;
  return {
    c() {
      t = v("button"), e = y("count is "), r = y(n[0]), T(t, "class", "btn bg-red text-white svelte-1lydoww");
    },
    m(o, s) {
      L(o, t, s), g(t, e), g(t, r), u || (c = R(t, "click", n[1]), u = !0);
    },
    p(o, [s]) {
      s & 1 && I(r, o[0]);
    },
    i: d,
    o: d,
    d(o) {
      o && _(t), u = !1, c();
    }
  };
}
function an(n, t, e) {
  let r = 0;
  return [r, () => {
    e(0, r += 2);
  }];
}
class cn extends q {
  constructor(t) {
    super(), P(this, t, an, on, B, {}, un);
  }
}
export {
  sn as Counter,
  cn as Counter2
};
