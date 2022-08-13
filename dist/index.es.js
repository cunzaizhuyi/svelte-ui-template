function a() {
}
function S(t) {
  return t();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function $(t) {
  t.forEach(S);
}
function G(t) {
  return typeof t == "function";
}
function L(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function H(t) {
  return Object.keys(t).length === 0;
}
function p(t, e) {
  t.appendChild(e);
}
function T(t, e, n) {
  t.insertBefore(e, n || null);
}
function k(t) {
  t.parentNode.removeChild(t);
}
function B(t) {
  return document.createElement(t);
}
function g(t) {
  return document.createTextNode(t);
}
function M(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function P(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function I(t) {
  return Array.from(t.childNodes);
}
function q(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let w;
function h(t) {
  w = t;
}
const d = [], N = [], m = [], O = [], J = Promise.resolve();
let y = !1;
function K() {
  y || (y = !0, J.then(z));
}
function x(t) {
  m.push(t);
}
const b = /* @__PURE__ */ new Set();
let _ = 0;
function z() {
  const t = w;
  do {
    for (; _ < d.length; ) {
      const e = d[_];
      _++, h(e), Q(e.$$);
    }
    for (h(null), d.length = 0, _ = 0; N.length; )
      N.pop()();
    for (let e = 0; e < m.length; e += 1) {
      const n = m[e];
      b.has(n) || (b.add(n), n());
    }
    m.length = 0;
  } while (d.length);
  for (; O.length; )
    O.pop()();
  y = !1, b.clear(), h(t);
}
function Q(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(x);
  }
}
const R = /* @__PURE__ */ new Set();
function U(t, e) {
  t && t.i && (R.delete(t), t.i(e));
}
function V(t, e, n, r) {
  const { fragment: c, on_mount: s, on_destroy: o, after_update: i } = t.$$;
  c && c.m(e, n), r || x(() => {
    const f = s.map(S).filter(G);
    o ? o.push(...f) : $(f), t.$$.on_mount = [];
  }), i.forEach(x);
}
function W(t, e) {
  const n = t.$$;
  n.fragment !== null && ($(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function X(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), K(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function D(t, e, n, r, c, s, o, i = [-1]) {
  const f = w;
  h(t);
  const u = t.$$ = {
    fragment: null,
    ctx: null,
    props: s,
    update: a,
    not_equal: c,
    bound: A(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    callbacks: A(),
    dirty: i,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  o && o(u.root);
  let E = !1;
  if (u.ctx = n ? n(t, e.props || {}, (l, v, ...C) => {
    const j = C.length ? C[0] : v;
    return u.ctx && c(u.ctx[l], u.ctx[l] = j) && (!u.skip_bound && u.bound[l] && u.bound[l](j), E && X(t, l)), v;
  }) : [], u.update(), E = !0, $(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = I(e.target);
      u.fragment && u.fragment.l(l), l.forEach(k);
    } else
      u.fragment && u.fragment.c();
    e.intro && U(t.$$.fragment), V(t, e.target, e.anchor, e.customElement), z();
  }
  h(f);
}
class F {
  $destroy() {
    W(this, 1), this.$destroy = a;
  }
  $on(e, n) {
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const c = r.indexOf(n);
      c !== -1 && r.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !H(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function Y(t) {
  let e, n, r, c, s;
  return {
    c() {
      e = B("button"), n = g("count is "), r = g(t[0]), P(e, "class", "bg-black text-white");
    },
    m(o, i) {
      T(o, e, i), p(e, n), p(e, r), c || (s = M(e, "click", t[1]), c = !0);
    },
    p(o, [i]) {
      i & 1 && q(r, o[0]);
    },
    i: a,
    o: a,
    d(o) {
      o && k(e), c = !1, s();
    }
  };
}
function Z(t, e, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 1);
  }];
}
class nt extends F {
  constructor(e) {
    super(), D(this, e, Z, Y, L, {});
  }
}
function tt(t) {
  let e, n, r, c, s;
  return {
    c() {
      e = B("button"), n = g("count is "), r = g(t[0]), P(e, "class", "bg-red text-white");
    },
    m(o, i) {
      T(o, e, i), p(e, n), p(e, r), c || (s = M(e, "click", t[1]), c = !0);
    },
    p(o, [i]) {
      i & 1 && q(r, o[0]);
    },
    i: a,
    o: a,
    d(o) {
      o && k(e), c = !1, s();
    }
  };
}
function et(t, e, n) {
  let r = 0;
  return [r, () => {
    n(0, r += 2);
  }];
}
class rt extends F {
  constructor(e) {
    super(), D(this, e, et, tt, L, {});
  }
}
export {
  nt as Counter,
  rt as Counter2
};
