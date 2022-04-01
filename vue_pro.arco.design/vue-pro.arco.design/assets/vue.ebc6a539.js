import {
    i as _e,
    s as $n,
    u as ie,
    c as J,
    r as kt,
    n as Dt,
    d as xn,
    h as Un,
    p as _t,
    e as ae,
    w as Ye,
    f as Gn,
    m as ze,
    g as Ft,
    j as Xe,
    k as Wn,
    l as Kr,
    b as Hr,
    t as Xr,
    q as qr,
    v as Qr,
    o as Yr,
    x as nn
} from "./arco.fe701834.js";
/*!
 * vue-router v4.0.14
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const Bn = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    De = e => Bn ? Symbol(e) : "_vr_" + e,
    Jr = De("rvlm"),
    rn = De("rvd"),
    st = De("r"),
    jt = De("rl"),
    Lt = De("rvl"),
    Ne = typeof window != "undefined";

function Zr(e) {
    return e.__esModule || Bn && e[Symbol.toStringTag] === "Module"
}
const W = Object.assign;

function vt(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = Array.isArray(o) ? o.map(e) : e(o)
    }
    return n
}
const Ve = () => {},
    zr = /\/$/,
    eo = e => e.replace(zr, "");

function Et(e, t, n = "/") {
    let r, o = {},
        s = "",
        a = "";
    const c = t.indexOf("?"),
        i = t.indexOf("#", c > -1 ? c : 0);
    return c > -1 && (r = t.slice(0, c), s = t.slice(c + 1, i > -1 ? i : t.length), o = e(s)), i > -1 && (r = r || t.slice(0, i), a = t.slice(i, t.length)), r = oo(r != null ? r : t, n), {
        fullPath: r + (s && "?") + s + a,
        path: r,
        query: o,
        hash: a
    }
}

function to(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function on(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function no(e, t, n) {
    const r = t.matched.length - 1,
        o = n.matched.length - 1;
    return r > -1 && r === o && we(t.matched[r], n.matched[o]) && Vn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function we(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Vn(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!ro(e[n], t[n])) return !1;
    return !0
}

function ro(e, t) {
    return Array.isArray(e) ? sn(e, t) : Array.isArray(t) ? sn(t, e) : e === t
}

function sn(e, t) {
    return Array.isArray(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function oo(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/");
    let o = n.length - 1,
        s, a;
    for (s = 0; s < r.length; s++)
        if (a = r[s], !(o === 1 || a === "."))
            if (a === "..") o--;
            else break;
    return n.slice(0, o).join("/") + "/" + r.slice(s - (s === r.length ? 1 : 0)).join("/")
}
var qe;
(function(e) {
    e.pop = "pop", e.push = "push"
})(qe || (qe = {}));
var Ke;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Ke || (Ke = {}));

function so(e) {
    if (!e)
        if (Ne) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), eo(e)
}
const io = /^[^#]+#/;

function ao(e, t) {
    return e.replace(io, "#") + t
}

function lo(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const it = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function uo(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = lo(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function an(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const At = new Map;

function co(e, t) {
    At.set(e, t)
}

function fo(e) {
    const t = At.get(e);
    return At.delete(e), t
}
let ho = () => location.protocol + "//" + location.host;

function Kn(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, s = e.indexOf("#");
    if (s > -1) {
        let c = o.includes(e.slice(s)) ? e.slice(s).length : 1,
            i = o.slice(c);
        return i[0] !== "/" && (i = "/" + i), on(i, "")
    }
    return on(n, e) + r + o
}

function po(e, t, n, r) {
    let o = [],
        s = [],
        a = null;
    const c = ({
        state: d
    }) => {
        const C = Kn(e, location),
            O = n.value,
            w = t.value;
        let L = 0;
        if (d) {
            if (n.value = C, t.value = d, a && a === O) {
                a = null;
                return
            }
            L = w ? d.position - w.position : 0
        } else r(C);
        o.forEach(p => {
            p(n.value, O, {
                delta: L,
                type: qe.pop,
                direction: L ? L > 0 ? Ke.forward : Ke.back : Ke.unknown
            })
        })
    };

    function i() {
        a = n.value
    }

    function l(d) {
        o.push(d);
        const C = () => {
            const O = o.indexOf(d);
            O > -1 && o.splice(O, 1)
        };
        return s.push(C), C
    }

    function u() {
        const {
            history: d
        } = window;
        !d.state || d.replaceState(W({}, d.state, {
            scroll: it()
        }), "")
    }

    function g() {
        for (const d of s) d();
        s = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", c), window.addEventListener("beforeunload", u), {
        pauseListeners: i,
        listen: l,
        destroy: g
    }
}

function ln(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? it() : null
    }
}

function mo(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: Kn(e, n)
    }, o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function s(i, l, u) {
        const g = e.indexOf("#"),
            d = g > -1 ? (n.host && document.querySelector("base") ? e : e.slice(g)) + i : ho() + e + i;
        try {
            t[u ? "replaceState" : "pushState"](l, "", d), o.value = l
        } catch (C) {
            console.error(C), n[u ? "replace" : "assign"](d)
        }
    }

    function a(i, l) {
        const u = W({}, t.state, ln(o.value.back, i, o.value.forward, !0), l, {
            position: o.value.position
        });
        s(i, u, !0), r.value = i
    }

    function c(i, l) {
        const u = W({}, o.value, t.state, {
            forward: i,
            scroll: it()
        });
        s(u.current, u, !0);
        const g = W({}, ln(r.value, i, null), {
            position: u.position + 1
        }, l);
        s(i, g, !1), r.value = i
    }
    return {
        location: r,
        state: o,
        push: c,
        replace: a
    }
}

function ka(e) {
    e = so(e);
    const t = mo(e),
        n = po(e, t.state, t.location, t.replace);

    function r(s, a = !0) {
        a || n.pauseListeners(), history.go(s)
    }
    const o = W({
        location: "",
        base: e,
        go: r,
        createHref: ao.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}

function go(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Hn(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const de = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    Xn = De("nf");
var un;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(un || (un = {}));

function Te(e, t) {
    return W(new Error, {
        type: e,
        [Xn]: !0
    }, t)
}

function he(e, t) {
    return e instanceof Error && Xn in e && (t == null || !!(e.type & t))
}
const cn = "[^/]+?",
    _o = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    vo = /[.+*?^${}()[\]/\\]/g;

function Eo(e, t) {
    const n = W({}, _o, t),
        r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const l of e) {
        const u = l.length ? [] : [90];
        n.strict && !l.length && (o += "/");
        for (let g = 0; g < l.length; g++) {
            const d = l[g];
            let C = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0) g || (o += "/"), o += d.value.replace(vo, "\\$&"), C += 40;
            else if (d.type === 1) {
                const {
                    value: O,
                    repeatable: w,
                    optional: L,
                    regexp: p
                } = d;
                s.push({
                    name: O,
                    repeatable: w,
                    optional: L
                });
                const v = p || cn;
                if (v !== cn) {
                    C += 10;
                    try {
                        new RegExp(`(${v})`)
                    } catch (h) {
                        throw new Error(`Invalid custom RegExp for param "${O}" (${v}): ` + h.message)
                    }
                }
                let N = w ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
                g || (N = L && l.length < 2 ? `(?:/${N})` : "/" + N), L && (N += "?"), o += N, C += 20, L && (C += -8), w && (C += -20), v === ".*" && (C += -50)
            }
            u.push(C)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const l = r.length - 1;
        r[l][r[l].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const a = new RegExp(o, n.sensitive ? "" : "i");

    function c(l) {
        const u = l.match(a),
            g = {};
        if (!u) return null;
        for (let d = 1; d < u.length; d++) {
            const C = u[d] || "",
                O = s[d - 1];
            g[O.name] = C && O.repeatable ? C.split("/") : C
        }
        return g
    }

    function i(l) {
        let u = "",
            g = !1;
        for (const d of e) {
            (!g || !u.endsWith("/")) && (u += "/"), g = !1;
            for (const C of d)
                if (C.type === 0) u += C.value;
                else if (C.type === 1) {
                const {
                    value: O,
                    repeatable: w,
                    optional: L
                } = C, p = O in l ? l[O] : "";
                if (Array.isArray(p) && !w) throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);
                const v = Array.isArray(p) ? p.join("/") : p;
                if (!v)
                    if (L) d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : g = !0);
                    else throw new Error(`Missing required param "${O}"`);
                u += v
            }
        }
        return u
    }
    return {
        re: a,
        score: r,
        keys: s,
        parse: c,
        stringify: i
    }
}

function yo(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function So(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length;) {
        const s = yo(r[n], o[n]);
        if (s) return s;
        n++
    }
    return o.length - r.length
}
const Co = {
        type: 0,
        value: ""
    },
    bo = /[a-zA-Z0-9_]/;

function Lo(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Co]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(C) {
        throw new Error(`ERR (${n})/"${l}": ${C}`)
    }
    let n = 0,
        r = n;
    const o = [];
    let s;

    function a() {
        s && o.push(s), s = []
    }
    let c = 0,
        i, l = "",
        u = "";

    function g() {
        !l || (n === 0 ? s.push({
            type: 0,
            value: l
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (i === "*" || i === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), s.push({
            type: 1,
            value: l,
            regexp: u,
            repeatable: i === "*" || i === "+",
            optional: i === "*" || i === "?"
        })) : t("Invalid state to consume buffer"), l = "")
    }

    function d() {
        l += i
    }
    for (; c < e.length;) {
        if (i = e[c++], i === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                i === "/" ? (l && g(), a()) : i === ":" ? (g(), n = 1) : d();
                break;
            case 4:
                d(), n = r;
                break;
            case 1:
                i === "(" ? n = 2 : bo.test(i) ? d() : (g(), n = 0, i !== "*" && i !== "?" && i !== "+" && c--);
                break;
            case 2:
                i === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + i : n = 3 : u += i;
                break;
            case 3:
                g(), n = 0, i !== "*" && i !== "?" && i !== "+" && c--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), g(), a(), o
}

function Ao(e, t, n) {
    const r = Eo(Lo(e.path), n),
        o = W(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function Oo(e, t) {
    const n = [],
        r = new Map;
    t = dn({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function o(u) {
        return r.get(u)
    }

    function s(u, g, d) {
        const C = !d,
            O = wo(u);
        O.aliasOf = d && d.record;
        const w = dn(t, u),
            L = [O];
        if ("alias" in u) {
            const N = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const h of N) L.push(W({}, O, {
                components: d ? d.record.components : O.components,
                path: h,
                aliasOf: d ? d.record : O
            }))
        }
        let p, v;
        for (const N of L) {
            const {
                path: h
            } = N;
            if (g && h[0] !== "/") {
                const _ = g.record.path,
                    S = _[_.length - 1] === "/" ? "" : "/";
                N.path = g.record.path + (h && S + h)
            }
            if (p = Ao(N, g, w), d ? d.alias.push(p) : (v = v || p, v !== p && v.alias.push(p), C && u.name && !fn(p) && a(u.name)), "children" in O) {
                const _ = O.children;
                for (let S = 0; S < _.length; S++) s(_[S], p, d && d.children[S])
            }
            d = d || p, i(p)
        }
        return v ? () => {
            a(v)
        } : Ve
    }

    function a(u) {
        if (Hn(u)) {
            const g = r.get(u);
            g && (r.delete(u), n.splice(n.indexOf(g), 1), g.children.forEach(a), g.alias.forEach(a))
        } else {
            const g = n.indexOf(u);
            g > -1 && (n.splice(g, 1), u.record.name && r.delete(u.record.name), u.children.forEach(a), u.alias.forEach(a))
        }
    }

    function c() {
        return n
    }

    function i(u) {
        let g = 0;
        for (; g < n.length && So(u, n[g]) >= 0 && (u.record.path !== n[g].record.path || !qn(u, n[g]));) g++;
        n.splice(g, 0, u), u.record.name && !fn(u) && r.set(u.record.name, u)
    }

    function l(u, g) {
        let d, C = {},
            O, w;
        if ("name" in u && u.name) {
            if (d = r.get(u.name), !d) throw Te(1, {
                location: u
            });
            w = d.record.name, C = W(No(g.params, d.keys.filter(v => !v.optional).map(v => v.name)), u.params), O = d.stringify(C)
        } else if ("path" in u) O = u.path, d = n.find(v => v.re.test(O)), d && (C = d.parse(O), w = d.record.name);
        else {
            if (d = g.name ? r.get(g.name) : n.find(v => v.re.test(g.path)), !d) throw Te(1, {
                location: u,
                currentLocation: g
            });
            w = d.record.name, C = W({}, g.params, u.params), O = d.stringify(C)
        }
        const L = [];
        let p = d;
        for (; p;) L.unshift(p.record), p = p.parent;
        return {
            name: w,
            path: O,
            params: C,
            matched: L,
            meta: Po(L)
        }
    }
    return e.forEach(u => s(u)), {
        addRoute: s,
        resolve: l,
        removeRoute: a,
        getRoutes: c,
        getRecordMatcher: o
    }
}

function No(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function wo(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: To(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || {} : {
            default: e.component
        }
    }
}

function To(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "boolean" ? n : n[r];
    return t
}

function fn(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Po(e) {
    return e.reduce((t, n) => W(t, n.meta), {})
}

function dn(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function qn(e, t) {
    return t.children.some(n => n === e || qn(e, n))
}
const Qn = /#/g,
    Ro = /&/g,
    Mo = /\//g,
    Io = /=/g,
    ko = /\?/g,
    Yn = /\+/g,
    Do = /%5B/g,
    Fo = /%5D/g,
    Jn = /%5E/g,
    jo = /%60/g,
    Zn = /%7B/g,
    $o = /%7C/g,
    zn = /%7D/g,
    xo = /%20/g;

function $t(e) {
    return encodeURI("" + e).replace($o, "|").replace(Do, "[").replace(Fo, "]")
}

function Uo(e) {
    return $t(e).replace(Zn, "{").replace(zn, "}").replace(Jn, "^")
}

function Ot(e) {
    return $t(e).replace(Yn, "%2B").replace(xo, "+").replace(Qn, "%23").replace(Ro, "%26").replace(jo, "`").replace(Zn, "{").replace(zn, "}").replace(Jn, "^")
}

function Go(e) {
    return Ot(e).replace(Io, "%3D")
}

function Wo(e) {
    return $t(e).replace(Qn, "%23").replace(ko, "%3F")
}

function Bo(e) {
    return e == null ? "" : Wo(e).replace(Mo, "%2F")
}

function et(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function Vo(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(Yn, " "),
            a = s.indexOf("="),
            c = et(a < 0 ? s : s.slice(0, a)),
            i = a < 0 ? null : et(s.slice(a + 1));
        if (c in t) {
            let l = t[c];
            Array.isArray(l) || (l = t[c] = [l]), l.push(i)
        } else t[c] = i
    }
    return t
}

function hn(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Go(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(Array.isArray(r) ? r.map(s => s && Ot(s)) : [r && Ot(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
        })
    }
    return t
}

function Ko(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Array.isArray(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}

function We() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e,
        reset: n
    }
}

function me(e, t, n, r, o) {
    const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, c) => {
        const i = g => {
                g === !1 ? c(Te(4, {
                    from: n,
                    to: t
                })) : g instanceof Error ? c(g) : go(g) ? c(Te(2, {
                    from: t,
                    to: g
                })) : (s && r.enterCallbacks[o] === s && typeof g == "function" && s.push(g), a())
            },
            l = e.call(r && r.instances[o], t, n, i);
        let u = Promise.resolve(l);
        e.length < 3 && (u = u.then(i)), u.catch(g => c(g))
    })
}

function yt(e, t, n, r) {
    const o = [];
    for (const s of e)
        for (const a in s.components) {
            let c = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (Ho(c)) {
                    const l = (c.__vccOpts || c)[t];
                    l && o.push(me(l, n, r, s, a))
                } else {
                    let i = c();
                    o.push(() => i.then(l => {
                        if (!l) return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
                        const u = Zr(l) ? l.default : l;
                        s.components[a] = u;
                        const d = (u.__vccOpts || u)[t];
                        return d && me(d, n, r, s, a)()
                    }))
                }
        }
    return o
}

function Ho(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function pn(e) {
    const t = _e(st),
        n = _e(jt),
        r = J(() => t.resolve(ie(e.to))),
        o = J(() => {
            const {
                matched: i
            } = r.value, {
                length: l
            } = i, u = i[l - 1], g = n.matched;
            if (!u || !g.length) return -1;
            const d = g.findIndex(we.bind(null, u));
            if (d > -1) return d;
            const C = mn(i[l - 2]);
            return l > 1 && mn(u) === C && g[g.length - 1].path !== C ? g.findIndex(we.bind(null, i[l - 2])) : d
        }),
        s = J(() => o.value > -1 && Yo(n.params, r.value.params)),
        a = J(() => o.value > -1 && o.value === n.matched.length - 1 && Vn(n.params, r.value.params));

    function c(i = {}) {
        return Qo(i) ? t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Ve) : Promise.resolve()
    }
    return {
        route: r,
        href: J(() => r.value.href),
        isActive: s,
        isExactActive: a,
        navigate: c
    }
}
const Xo = xn({
        name: "RouterLink",
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: pn,
        setup(e, {
            slots: t
        }) {
            const n = kt(pn(e)),
                {
                    options: r
                } = _e(st),
                o = J(() => ({
                    [gn(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [gn(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const s = t.default && t.default(n);
                return e.custom ? s : Un("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, s)
            }
        }
    }),
    qo = Xo;

function Qo(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Yo(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        if (typeof r == "string") {
            if (r !== o) return !1
        } else if (!Array.isArray(o) || o.length !== r.length || r.some((s, a) => s !== o[a])) return !1
    }
    return !0
}

function mn(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const gn = (e, t, n) => e != null ? e : t != null ? t : n,
    Jo = xn({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = _e(Lt),
                o = J(() => e.route || r.value),
                s = _e(rn, 0),
                a = J(() => o.value.matched[s]);
            _t(rn, s + 1), _t(Jr, a), _t(Lt, o);
            const c = ae();
            return Ye(() => [c.value, a.value, e.name], ([i, l, u], [g, d, C]) => {
                l && (l.instances[u] = i, d && d !== l && i && i === g && (l.leaveGuards.size || (l.leaveGuards = d.leaveGuards), l.updateGuards.size || (l.updateGuards = d.updateGuards))), i && l && (!d || !we(l, d) || !g) && (l.enterCallbacks[u] || []).forEach(O => O(i))
            }, {
                flush: "post"
            }), () => {
                const i = o.value,
                    l = a.value,
                    u = l && l.components[e.name],
                    g = e.name;
                if (!u) return _n(n.default, {
                    Component: u,
                    route: i
                });
                const d = l.props[e.name],
                    C = d ? d === !0 ? i.params : typeof d == "function" ? d(i) : d : null,
                    w = Un(u, W({}, C, t, {
                        onVnodeUnmounted: L => {
                            L.component.isUnmounted && (l.instances[g] = null)
                        },
                        ref: c
                    }));
                return _n(n.default, {
                    Component: w,
                    route: i
                }) || w
            }
        }
    });

function _n(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Zo = Jo;

function Da(e) {
    const t = Oo(e.routes, e),
        n = e.parseQuery || Vo,
        r = e.stringifyQuery || hn,
        o = e.history,
        s = We(),
        a = We(),
        c = We(),
        i = $n(de);
    let l = de;
    Ne && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = vt.bind(null, A => "" + A),
        g = vt.bind(null, Bo),
        d = vt.bind(null, et);

    function C(A, M) {
        let P, I;
        return Hn(A) ? (P = t.getRecordMatcher(A), I = M) : I = A, t.addRoute(I, P)
    }

    function O(A) {
        const M = t.getRecordMatcher(A);
        M && t.removeRoute(M)
    }

    function w() {
        return t.getRoutes().map(A => A.record)
    }

    function L(A) {
        return !!t.getRecordMatcher(A)
    }

    function p(A, M) {
        if (M = W({}, M || i.value), typeof A == "string") {
            const m = Et(n, A, M.path),
                b = t.resolve({
                    path: m.path
                }, M),
                T = o.createHref(m.fullPath);
            return W(m, b, {
                params: d(b.params),
                hash: et(m.hash),
                redirectedFrom: void 0,
                href: T
            })
        }
        let P;
        if ("path" in A) P = W({}, A, {
            path: Et(n, A.path, M.path).path
        });
        else {
            const m = W({}, A.params);
            for (const b in m) m[b] == null && delete m[b];
            P = W({}, A, {
                params: g(A.params)
            }), M.params = g(M.params)
        }
        const I = t.resolve(P, M),
            U = A.hash || "";
        I.params = u(d(I.params));
        const H = to(r, W({}, A, {
                hash: Uo(U),
                path: I.path
            })),
            f = o.createHref(H);
        return W({
            fullPath: H,
            hash: U,
            query: r === hn ? Ko(A.query) : A.query || {}
        }, I, {
            redirectedFrom: void 0,
            href: f
        })
    }

    function v(A) {
        return typeof A == "string" ? Et(n, A, i.value.path) : W({}, A)
    }

    function N(A, M) {
        if (l !== A) return Te(8, {
            from: M,
            to: A
        })
    }

    function h(A) {
        return y(A)
    }

    function _(A) {
        return h(W(v(A), {
            replace: !0
        }))
    }

    function S(A) {
        const M = A.matched[A.matched.length - 1];
        if (M && M.redirect) {
            const {
                redirect: P
            } = M;
            let I = typeof P == "function" ? P(A) : P;
            return typeof I == "string" && (I = I.includes("?") || I.includes("#") ? I = v(I) : {
                path: I
            }, I.params = {}), W({
                query: A.query,
                hash: A.hash,
                params: A.params
            }, I)
        }
    }

    function y(A, M) {
        const P = l = p(A),
            I = i.value,
            U = A.state,
            H = A.force,
            f = A.replace === !0,
            m = S(P);
        if (m) return y(W(v(m), {
            state: U,
            force: H,
            replace: f
        }), M || P);
        const b = P;
        b.redirectedFrom = M;
        let T;
        return !H && no(r, I, P) && (T = Te(16, {
            to: b,
            from: I
        }), Ze(I, I, !0, !1)), (T ? Promise.resolve(T) : $(b, I)).catch(k => he(k) ? he(k, 2) ? k : xe(k) : $e(k, b, I)).then(k => {
            if (k) {
                if (he(k, 2)) return y(W(v(k.to), {
                    state: U,
                    force: H,
                    replace: f
                }), M || b)
            } else k = K(b, I, !0, f, U);
            return B(b, I, k), k
        })
    }

    function j(A, M) {
        const P = N(A, M);
        return P ? Promise.reject(P) : Promise.resolve()
    }

    function $(A, M) {
        let P;
        const [I, U, H] = zo(A, M);
        P = yt(I.reverse(), "beforeRouteLeave", A, M);
        for (const m of I) m.leaveGuards.forEach(b => {
            P.push(me(b, A, M))
        });
        const f = j.bind(null, A, M);
        return P.push(f), Ae(P).then(() => {
            P = [];
            for (const m of s.list()) P.push(me(m, A, M));
            return P.push(f), Ae(P)
        }).then(() => {
            P = yt(U, "beforeRouteUpdate", A, M);
            for (const m of U) m.updateGuards.forEach(b => {
                P.push(me(b, A, M))
            });
            return P.push(f), Ae(P)
        }).then(() => {
            P = [];
            for (const m of A.matched)
                if (m.beforeEnter && !M.matched.includes(m))
                    if (Array.isArray(m.beforeEnter))
                        for (const b of m.beforeEnter) P.push(me(b, A, M));
                    else P.push(me(m.beforeEnter, A, M));
            return P.push(f), Ae(P)
        }).then(() => (A.matched.forEach(m => m.enterCallbacks = {}), P = yt(H, "beforeRouteEnter", A, M), P.push(f), Ae(P))).then(() => {
            P = [];
            for (const m of a.list()) P.push(me(m, A, M));
            return P.push(f), Ae(P)
        }).catch(m => he(m, 8) ? m : Promise.reject(m))
    }

    function B(A, M, P) {
        for (const I of c.list()) I(A, M, P)
    }

    function K(A, M, P, I, U) {
        const H = N(A, M);
        if (H) return H;
        const f = M === de,
            m = Ne ? history.state : {};
        P && (I || f ? o.replace(A.fullPath, W({
            scroll: f && m && m.scroll
        }, U)) : o.push(A.fullPath, U)), i.value = A, Ze(A, M, P, f), xe()
    }
    let z;

    function re() {
        z = o.listen((A, M, P) => {
            const I = p(A),
                U = S(I);
            if (U) {
                y(W(U, {
                    replace: !0
                }), I).catch(Ve);
                return
            }
            l = I;
            const H = i.value;
            Ne && co(an(H.fullPath, P.delta), it()), $(I, H).catch(f => he(f, 12) ? f : he(f, 2) ? (y(f.to, I).then(m => {
                he(m, 20) && !P.delta && P.type === qe.pop && o.go(-1, !1)
            }).catch(Ve), Promise.reject()) : (P.delta && o.go(-P.delta, !1), $e(f, I, H))).then(f => {
                f = f || K(I, H, !1), f && (P.delta ? o.go(-P.delta, !1) : P.type === qe.pop && he(f, 20) && o.go(-1, !1)), B(I, H, f)
            }).catch(Ve)
        })
    }
    let q = We(),
        Je = We(),
        Ee;

    function $e(A, M, P) {
        xe(A);
        const I = Je.list();
        return I.length ? I.forEach(U => U(A, M, P)) : console.error(A), Promise.reject(A)
    }

    function gt() {
        return Ee && i.value !== de ? Promise.resolve() : new Promise((A, M) => {
            q.add([A, M])
        })
    }

    function xe(A) {
        return Ee || (Ee = !A, re(), q.list().forEach(([M, P]) => A ? P(A) : M()), q.reset()), A
    }

    function Ze(A, M, P, I) {
        const {
            scrollBehavior: U
        } = e;
        if (!Ne || !U) return Promise.resolve();
        const H = !P && fo(an(A.fullPath, 0)) || (I || !P) && history.state && history.state.scroll || null;
        return Dt().then(() => U(A, M, H)).then(f => f && uo(f)).catch(f => $e(f, A, M))
    }
    const Ue = A => o.go(A);
    let Le;
    const Ge = new Set;
    return {
        currentRoute: i,
        addRoute: C,
        removeRoute: O,
        hasRoute: L,
        getRoutes: w,
        resolve: p,
        options: e,
        push: h,
        replace: _,
        go: Ue,
        back: () => Ue(-1),
        forward: () => Ue(1),
        beforeEach: s.add,
        beforeResolve: a.add,
        afterEach: c.add,
        onError: Je.add,
        isReady: gt,
        install(A) {
            const M = this;
            A.component("RouterLink", qo), A.component("RouterView", Zo), A.config.globalProperties.$router = M, Object.defineProperty(A.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => ie(i)
            }), Ne && !Le && i.value === de && (Le = !0, h(o.location).catch(U => {}));
            const P = {};
            for (const U in de) P[U] = J(() => i.value[U]);
            A.provide(st, M), A.provide(jt, kt(P)), A.provide(Lt, i);
            const I = A.unmount;
            Ge.add(A), A.unmount = function() {
                Ge.delete(A), Ge.size < 1 && (l = de, z && z(), i.value = de, Le = !1, Ee = !1), I()
            }
        }
    }
}

function Ae(e) {
    return e.reduce((t, n) => t.then(() => n()), Promise.resolve())
}

function zo(e, t) {
    const n = [],
        r = [],
        o = [],
        s = Math.max(t.matched.length, e.matched.length);
    for (let a = 0; a < s; a++) {
        const c = t.matched[a];
        c && (e.matched.find(l => we(l, c)) ? r.push(c) : n.push(c));
        const i = e.matched[a];
        i && (t.matched.find(l => we(l, i)) || o.push(i))
    }
    return [n, r, o]
}

function Fa() {
    return _e(st)
}

function ja() {
    return _e(jt)
}
var es = !1;
/*!
 * pinia v2.0.12
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
let er;
const at = e => er = e,
    tr = Symbol();

function Nt(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var He;
(function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(He || (He = {}));

function $a() {
    const e = Gn(!0),
        t = e.run(() => ae({}));
    let n = [],
        r = [];
    const o = ze({
        install(s) {
            at(o), o._a = s, s.provide(tr, o), s.config.globalProperties.$pinia = o, r.forEach(a => n.push(a)), r = []
        },
        use(s) {
            return !this._a && !es ? r.push(s) : n.push(s), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const nr = () => {};

function vn(e, t, n, r = nr) {
    e.push(t);
    const o = () => {
        const s = e.indexOf(t);
        s > -1 && (e.splice(s, 1), r())
    };
    return !n && Ft() && Hr(o), o
}

function Oe(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}

function wt(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        Nt(o) && Nt(r) && !Xe(r) && !Wn(r) ? e[n] = wt(o, r) : e[n] = r
    }
    return e
}
const ts = Symbol();

function ns(e) {
    return !Nt(e) || !e.hasOwnProperty(ts)
}
const {
    assign: ue
} = Object;

function rs(e) {
    return !!(Xe(e) && e.effect)
}

function os(e, t, n, r) {
    const {
        state: o,
        actions: s,
        getters: a
    } = t, c = n.state.value[e];
    let i;

    function l() {
        c || (n.state.value[e] = o ? o() : {});
        const u = Xr(n.state.value[e]);
        return ue(u, s, Object.keys(a || {}).reduce((g, d) => (g[d] = ze(J(() => {
            at(n);
            const C = n._s.get(e);
            return a[d].call(C, C)
        })), g), {}))
    }
    return i = rr(e, l, t, n), i.$reset = function() {
        const g = o ? o() : {};
        this.$patch(d => {
            ue(d, g)
        })
    }, i
}

function rr(e, t, n = {}, r, o) {
    let s;
    const a = n.state,
        c = ue({
            actions: {}
        }, n),
        i = {
            deep: !0
        };
    let l, u, g = ze([]),
        d = ze([]),
        C;
    const O = r.state.value[e];
    !a && !O && (r.state.value[e] = {}), ae({});

    function w(S) {
        let y;
        l = u = !1, typeof S == "function" ? (S(r.state.value[e]), y = {
            type: He.patchFunction,
            storeId: e,
            events: C
        }) : (wt(r.state.value[e], S), y = {
            type: He.patchObject,
            payload: S,
            storeId: e,
            events: C
        }), Dt().then(() => {
            l = !0
        }), u = !0, Oe(g, y, r.state.value[e])
    }
    const L = nr;

    function p() {
        s.stop(), g = [], d = [], r._s.delete(e)
    }

    function v(S, y) {
        return function() {
            at(r);
            const j = Array.from(arguments),
                $ = [],
                B = [];

            function K(q) {
                $.push(q)
            }

            function z(q) {
                B.push(q)
            }
            Oe(d, {
                args: j,
                name: S,
                store: h,
                after: K,
                onError: z
            });
            let re;
            try {
                re = y.apply(this && this.$id === e ? this : h, j)
            } catch (q) {
                throw Oe(B, q), q
            }
            return re instanceof Promise ? re.then(q => (Oe($, q), q)).catch(q => (Oe(B, q), Promise.reject(q))) : (Oe($, re), re)
        }
    }
    const N = {
            _p: r,
            $id: e,
            $onAction: vn.bind(null, d),
            $patch: w,
            $reset: L,
            $subscribe(S, y = {}) {
                const j = vn(g, S, y.detached, () => $()),
                    $ = s.run(() => Ye(() => r.state.value[e], B => {
                        (y.flush === "sync" ? u : l) && S({
                            storeId: e,
                            type: He.direct,
                            events: C
                        }, B)
                    }, ue({}, i, y)));
                return j
            },
            $dispose: p
        },
        h = kt(ue({}, N));
    r._s.set(e, h);
    const _ = r._e.run(() => (s = Gn(), s.run(() => t())));
    for (const S in _) {
        const y = _[S];
        if (Xe(y) && !rs(y) || Wn(y)) a || (O && ns(y) && (Xe(y) ? y.value = O[S] : wt(y, O[S])), r.state.value[e][S] = y);
        else if (typeof y == "function") {
            const j = v(S, y);
            _[S] = j, c.actions[S] = y
        }
    }
    return ue(h, _), ue(Kr(h), _), Object.defineProperty(h, "$state", {
        get: () => r.state.value[e],
        set: S => {
            w(y => {
                ue(y, S)
            })
        }
    }), r._p.forEach(S => {
        ue(h, s.run(() => S({
            store: h,
            app: r._a,
            pinia: r,
            options: c
        })))
    }), O && a && n.hydrate && n.hydrate(h.$state, O), l = !0, u = !0, h
}

function xa(e, t, n) {
    let r, o;
    const s = typeof t == "function";
    typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);

    function a(c, i) {
        const l = Ft();
        return c = c || l && _e(tr), c && at(c), c = er, c._s.has(r) || (s ? rr(r, t, o, c) : os(r, o, c)), c._s.get(r)
    }
    return a.$id = r, a
}

function xt(e) {
    return qr() ? (Qr(e), !0) : !1
}
const lt = typeof window != "undefined",
    ss = e => typeof e == "string",
    St = () => {};

function or(e, t) {
    function n(...r) {
        e(() => t.apply(this, r), {
            fn: t,
            thisArg: this,
            args: r
        })
    }
    return n
}
const is = e => e();

function as(e, t = {}) {
    let n, r;
    return s => {
        const a = ie(e),
            c = ie(t.maxWait);
        if (n && clearTimeout(n), a <= 0 || c !== void 0 && c <= 0) return r && (clearTimeout(r), r = null), s();
        c && !r && (r = setTimeout(() => {
            n && clearTimeout(n), r = null, s()
        }, c)), n = setTimeout(() => {
            r && clearTimeout(r), r = null, s()
        }, a)
    }
}

function Ua(e, t = 200, n = {}) {
    return or(as(t, n), e)
}
var En = Object.getOwnPropertySymbols,
    ls = Object.prototype.hasOwnProperty,
    us = Object.prototype.propertyIsEnumerable,
    cs = (e, t) => {
        var n = {};
        for (var r in e) ls.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && En)
            for (var r of En(e)) t.indexOf(r) < 0 && us.call(e, r) && (n[r] = e[r]);
        return n
    };

function fs(e, t, n = {}) {
    const r = n,
        {
            eventFilter: o = is
        } = r,
        s = cs(r, ["eventFilter"]);
    return Ye(e, or(o, t), s)
}

function sr(e, t = !0) {
    Ft() ? Yr(e) : t ? e() : Dt(e)
}

function ds(e, t, n = {}) {
    const {
        immediate: r = !0
    } = n, o = ae(!1);
    let s = null;

    function a() {
        s && (clearTimeout(s), s = null)
    }

    function c() {
        o.value = !1, a()
    }

    function i(...l) {
        a(), o.value = !0, s = setTimeout(() => {
            o.value = !1, s = null, e(...l)
        }, ie(t))
    }
    return r && (o.value = !0, lt && i()), xt(c), {
        isPending: o,
        start: i,
        stop: c
    }
}

function Ga(e = !1) {
    if (Xe(e)) return t => (e.value = typeof t == "boolean" ? t : !e.value, e.value); {
        const t = ae(e);
        return [t, r => (t.value = typeof r == "boolean" ? r : !t.value, t.value)]
    }
}
const Pe = lt ? window : void 0,
    hs = lt ? window.navigator : void 0;

function ir(...e) {
    let t, n, r, o;
    if (ss(e[0]) ? ([n, r, o] = e, t = Pe) : [t, n, r, o] = e, !t) return St;
    let s = St;
    const a = Ye(() => ie(t), i => {
            s(), i && (i.addEventListener(n, r, o), s = () => {
                i.removeEventListener(n, r, o), s = St
            })
        }, {
            immediate: !0,
            flush: "post"
        }),
        c = () => {
            a(), s()
        };
    return xt(c), c
}

function ps(e, t = {}) {
    const {
        window: n = Pe
    } = t;
    let r;
    const o = ae(!1),
        s = () => {
            !n || (r || (r = n.matchMedia(e)), o.value = r.matches)
        };
    return sr(() => {
        s(), r && ("addEventListener" in r ? r.addEventListener("change", s) : r.addListener(s), xt(() => {
            "removeEventListener" in s ? r.removeEventListener("change", s) : r.removeListener(s)
        }))
    }), o
}

function Wa(e = {}) {
    const {
        navigator: t = hs,
        read: n = !1,
        source: r,
        copiedDuring: o = 1500
    } = e, s = ["copy", "cut"], a = Boolean(t && "clipboard" in t), c = ae(""), i = ae(!1), l = ds(() => i.value = !1, o);

    function u() {
        t.clipboard.readText().then(d => {
            c.value = d
        })
    }
    if (a && n)
        for (const d of s) ir(d, u);
    async function g(d = ie(r)) {
        a && d != null && (await t.clipboard.writeText(d), c.value = d, i.value = !0, l.start())
    }
    return {
        isSupported: a,
        text: c,
        copied: i,
        copy: g
    }
}
const Tt = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
    Pt = "__vueuse_ssr_handlers__";
Tt[Pt] = Tt[Pt] || {};
const ms = Tt[Pt];

function ar(e, t) {
    return ms[e] || t
}

function gs(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" || Array.isArray(e) ? "object" : Number.isNaN(e) ? "any" : "number"
}
const _s = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    }
};

function vs(e, t, n, r = {}) {
    var o;
    const {
        flush: s = "pre",
        deep: a = !0,
        listenToStorageChanges: c = !0,
        writeDefaults: i = !0,
        shallow: l,
        window: u = Pe,
        eventFilter: g,
        onError: d = v => {
            console.error(v)
        }
    } = r, C = ie(t), O = gs(C), w = (l ? $n : ae)(t), L = (o = r.serializer) != null ? o : _s[O];
    if (!n) try {
        n = ar("getDefaultStorage", () => {
            var v;
            return (v = Pe) == null ? void 0 : v.localStorage
        })()
    } catch (v) {
        d(v)
    }

    function p(v) {
        if (!(!n || v && v.key !== e)) try {
            const N = v ? v.newValue : n.getItem(e);
            N == null ? (w.value = C, i && C !== null && n.setItem(e, L.write(C))) : typeof N != "string" ? w.value = N : w.value = L.read(N)
        } catch (N) {
            d(N)
        }
    }
    return p(), u && c && ir(u, "storage", v => setTimeout(() => p(v), 0)), n && fs(w, () => {
        try {
            w.value == null ? n.removeItem(e) : n.setItem(e, L.write(w.value))
        } catch (v) {
            d(v)
        }
    }, {
        flush: s,
        deep: a,
        eventFilter: g
    }), w
}

function lr(e) {
    return ps("(prefers-color-scheme: dark)", e)
}
var Es = Object.defineProperty,
    yn = Object.getOwnPropertySymbols,
    ys = Object.prototype.hasOwnProperty,
    Ss = Object.prototype.propertyIsEnumerable,
    Sn = (e, t, n) => t in e ? Es(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Cs = (e, t) => {
        for (var n in t || (t = {})) ys.call(t, n) && Sn(e, n, t[n]);
        if (yn)
            for (var n of yn(t)) Ss.call(t, n) && Sn(e, n, t[n]);
        return e
    };

function bs(e = {}) {
    const {
        selector: t = "html",
        attribute: n = "class",
        window: r = Pe,
        storage: o,
        storageKey: s = "vueuse-color-scheme",
        listenToStorageChanges: a = !0,
        storageRef: c
    } = e, i = Cs({
        auto: "",
        light: "light",
        dark: "dark"
    }, e.modes || {}), l = lr({
        window: r
    }), u = J(() => l.value ? "dark" : "light"), g = c || (s == null ? ae("auto") : vs(s, "auto", o, {
        window: r,
        listenToStorageChanges: a
    })), d = J({
        get() {
            return g.value === "auto" ? u.value : g.value
        },
        set(L) {
            g.value = L
        }
    }), C = ar("updateHTMLAttrs", (L, p, v) => {
        const N = r == null ? void 0 : r.document.querySelector(L);
        if (!!N)
            if (p === "class") {
                const h = v.split(/\s/g);
                Object.values(i).flatMap(_ => (_ || "").split(/\s/g)).filter(Boolean).forEach(_ => {
                    h.includes(_) ? N.classList.add(_) : N.classList.remove(_)
                })
            } else N.setAttribute(p, v)
    });

    function O(L) {
        var p;
        C(t, n, (p = i[L]) != null ? p : L)
    }

    function w(L) {
        e.onChanged ? e.onChanged(L, O) : O(L)
    }
    return Ye(d, w, {
        flush: "post",
        immediate: !0
    }), sr(() => w(d.value)), d
}
var Ls = Object.defineProperty,
    As = Object.defineProperties,
    Os = Object.getOwnPropertyDescriptors,
    Cn = Object.getOwnPropertySymbols,
    Ns = Object.prototype.hasOwnProperty,
    ws = Object.prototype.propertyIsEnumerable,
    bn = (e, t, n) => t in e ? Ls(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Ts = (e, t) => {
        for (var n in t || (t = {})) Ns.call(t, n) && bn(e, n, t[n]);
        if (Cn)
            for (var n of Cn(t)) ws.call(t, n) && bn(e, n, t[n]);
        return e
    },
    Ps = (e, t) => As(e, Os(t));

function Ba(e = {}) {
    const {
        valueDark: t = "dark",
        valueLight: n = "",
        window: r = Pe
    } = e, o = bs(Ps(Ts({}, e), {
        onChanged: (c, i) => {
            var l;
            e.onChanged ? (l = e.onChanged) == null || l.call(e, c === "dark") : i(c)
        },
        modes: {
            dark: t,
            light: n
        }
    })), s = lr({
        window: r
    });
    return J({
        get() {
            return o.value === "dark"
        },
        set(c) {
            c === s.value ? o.value = "auto" : o.value = c ? "dark" : "light"
        }
    })
}
var Ln, An;
lt && (window == null ? void 0 : window.navigator) && ((Ln = window == null ? void 0 : window.navigator) == null ? void 0 : Ln.platform) && /iP(ad|hone|od)/.test((An = window == null ? void 0 : window.navigator) == null ? void 0 : An.platform);
var Rs = Object.defineProperty,
    On = Object.getOwnPropertySymbols,
    Ms = Object.prototype.hasOwnProperty,
    Is = Object.prototype.propertyIsEnumerable,
    Nn = (e, t, n) => t in e ? Rs(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    ks = (e, t) => {
        for (var n in t || (t = {})) Ms.call(t, n) && Nn(e, n, t[n]);
        if (On)
            for (var n of On(t)) Is.call(t, n) && Nn(e, n, t[n]);
        return e
    };
const Ds = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 0,
    width: 0
};
ks({
    text: ""
}, Ds);
var Ut = {
        exports: {}
    },
    x = {};
/*!
 * shared v9.2.0-beta.32
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
Object.defineProperty(x, "__esModule", {
    value: !0
});
const Fs = typeof window != "undefined";
let js, $s;
const xs = /\{([0-9a-zA-Z]+)\}/g;

function Us(e, ...t) {
    return t.length === 1 && Gt(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(xs, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}
const Gs = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol",
    Ws = e => Gs ? Symbol(e) : e,
    Bs = (e, t, n) => ur({
        l: e,
        k: t,
        s: n
    }),
    ur = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Vs = e => typeof e == "number" && isFinite(e),
    Ks = e => ut(e) === "[object Date]",
    Hs = e => ut(e) === "[object RegExp]",
    Xs = e => Bt(e) && Object.keys(e).length === 0;

function qs(e, t) {
    typeof console != "undefined" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Qs = Object.assign;
let wn;
const Ys = () => wn || (wn = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof nn != "undefined" ? nn : {});

function Js(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const Zs = Object.prototype.hasOwnProperty;

function zs(e, t) {
    return Zs.call(e, t)
}
const cr = Array.isArray,
    Rt = e => typeof e == "function",
    ei = e => typeof e == "string",
    ti = e => typeof e == "boolean",
    ni = e => typeof e == "symbol",
    Gt = e => e !== null && typeof e == "object",
    ri = e => Gt(e) && Rt(e.then) && Rt(e.catch),
    Wt = Object.prototype.toString,
    ut = e => Wt.call(e),
    Bt = e => ut(e) === "[object Object]",
    oi = e => e == null ? "" : cr(e) || Bt(e) && e.toString === Wt ? JSON.stringify(e, null, 2) : String(e),
    Tn = 2;

function si(e, t = 0, n = e.length) {
    const r = e.split(/\r?\n/);
    let o = 0;
    const s = [];
    for (let a = 0; a < r.length; a++)
        if (o += r[a].length + 1, o >= t) {
            for (let c = a - Tn; c <= a + Tn || n > o; c++) {
                if (c < 0 || c >= r.length) continue;
                const i = c + 1;
                s.push(`${i}${" ".repeat(3-String(i).length)}|  ${r[c]}`);
                const l = r[c].length;
                if (c === a) {
                    const u = t - (o - l) + 1,
                        g = Math.max(1, n > o ? l - u : n - t);
                    s.push("   |  " + " ".repeat(u) + "^".repeat(g))
                } else if (c > a) {
                    if (n > o) {
                        const u = Math.max(Math.min(n - o, l), 1);
                        s.push("   |  " + "^".repeat(u))
                    }
                    o += l + 1
                }
            }
            break
        }
    return s.join(`
`)
}

function ii() {
    const e = new Map;
    return {
        events: e,
        on(n, r) {
            const o = e.get(n);
            o && o.push(r) || e.set(n, [r])
        },
        off(n, r) {
            const o = e.get(n);
            o && o.splice(o.indexOf(r) >>> 0, 1)
        },
        emit(n, r) {
            (e.get(n) || []).slice().map(o => o(r)), (e.get("*") || []).slice().map(o => o(n, r))
        }
    }
}
x.assign = Qs;
x.createEmitter = ii;
x.escapeHtml = Js;
x.format = Us;
x.friendlyJSONstringify = ur;
x.generateCodeFrame = si;
x.generateFormatCacheKey = Bs;
x.getGlobalThis = Ys;
x.hasOwn = zs;
x.inBrowser = Fs;
x.isArray = cr;
x.isBoolean = ti;
x.isDate = Ks;
x.isEmptyObject = Xs;
x.isFunction = Rt;
x.isNumber = Vs;
x.isObject = Gt;
x.isPlainObject = Bt;
x.isPromise = ri;
x.isRegExp = Hs;
x.isString = ei;
x.isSymbol = ni;
x.makeSymbol = Ws;
x.mark = js;
x.measure = $s;
x.objectToString = Wt;
x.toDisplayString = oi;
x.toTypeString = ut;
x.warn = qs;
Ut.exports = x;
var ai = {
        exports: {}
    },
    D = {},
    fr = {
        exports: {}
    },
    te = {},
    ct = {},
    Vt = {},
    ft = {},
    Kt = {},
    Pn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
Kt.encode = function(e) {
    if (0 <= e && e < Pn.length) return Pn[e];
    throw new TypeError("Must be between 0 and 63: " + e)
};
Kt.decode = function(e) {
    var t = 65,
        n = 90,
        r = 97,
        o = 122,
        s = 48,
        a = 57,
        c = 43,
        i = 47,
        l = 26,
        u = 52;
    return t <= e && e <= n ? e - t : r <= e && e <= o ? e - r + l : s <= e && e <= a ? e - s + u : e == c ? 62 : e == i ? 63 : -1
};
var dr = Kt,
    Ht = 5,
    hr = 1 << Ht,
    pr = hr - 1,
    mr = hr;

function li(e) {
    return e < 0 ? (-e << 1) + 1 : (e << 1) + 0
}

function ui(e) {
    var t = (e & 1) === 1,
        n = e >> 1;
    return t ? -n : n
}
ft.encode = function(t) {
    var n = "",
        r, o = li(t);
    do r = o & pr, o >>>= Ht, o > 0 && (r |= mr), n += dr.encode(r); while (o > 0);
    return n
};
ft.decode = function(t, n, r) {
    var o = t.length,
        s = 0,
        a = 0,
        c, i;
    do {
        if (n >= o) throw new Error("Expected more digits in base 64 VLQ value.");
        if (i = dr.decode(t.charCodeAt(n++)), i === -1) throw new Error("Invalid base64 digit: " + t.charAt(n - 1));
        c = !!(i & mr), i &= pr, s = s + (i << a), a += Ht
    } while (c);
    r.value = ui(s), r.rest = n
};
var Fe = {};
(function(e) {
    function t(h, _, S) {
        if (_ in h) return h[_];
        if (arguments.length === 3) return S;
        throw new Error('"' + _ + '" is a required argument.')
    }
    e.getArg = t;
    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
        r = /^data:.+\,.+$/;

    function o(h) {
        var _ = h.match(n);
        return _ ? {
            scheme: _[1],
            auth: _[2],
            host: _[3],
            port: _[4],
            path: _[5]
        } : null
    }
    e.urlParse = o;

    function s(h) {
        var _ = "";
        return h.scheme && (_ += h.scheme + ":"), _ += "//", h.auth && (_ += h.auth + "@"), h.host && (_ += h.host), h.port && (_ += ":" + h.port), h.path && (_ += h.path), _
    }
    e.urlGenerate = s;

    function a(h) {
        var _ = h,
            S = o(h);
        if (S) {
            if (!S.path) return h;
            _ = S.path
        }
        for (var y = e.isAbsolute(_), j = _.split(/\/+/), $, B = 0, K = j.length - 1; K >= 0; K--) $ = j[K], $ === "." ? j.splice(K, 1) : $ === ".." ? B++ : B > 0 && ($ === "" ? (j.splice(K + 1, B), B = 0) : (j.splice(K, 2), B--));
        return _ = j.join("/"), _ === "" && (_ = y ? "/" : "."), S ? (S.path = _, s(S)) : _
    }
    e.normalize = a;

    function c(h, _) {
        h === "" && (h = "."), _ === "" && (_ = ".");
        var S = o(_),
            y = o(h);
        if (y && (h = y.path || "/"), S && !S.scheme) return y && (S.scheme = y.scheme), s(S);
        if (S || _.match(r)) return _;
        if (y && !y.host && !y.path) return y.host = _, s(y);
        var j = _.charAt(0) === "/" ? _ : a(h.replace(/\/+$/, "") + "/" + _);
        return y ? (y.path = j, s(y)) : j
    }
    e.join = c, e.isAbsolute = function(h) {
        return h.charAt(0) === "/" || n.test(h)
    };

    function i(h, _) {
        h === "" && (h = "."), h = h.replace(/\/$/, "");
        for (var S = 0; _.indexOf(h + "/") !== 0;) {
            var y = h.lastIndexOf("/");
            if (y < 0 || (h = h.slice(0, y), h.match(/^([^\/]+:\/)?\/*$/))) return _;
            ++S
        }
        return Array(S + 1).join("../") + _.substr(h.length + 1)
    }
    e.relative = i;
    var l = function() {
        var h = Object.create(null);
        return !("__proto__" in h)
    }();

    function u(h) {
        return h
    }

    function g(h) {
        return C(h) ? "$" + h : h
    }
    e.toSetString = l ? u : g;

    function d(h) {
        return C(h) ? h.slice(1) : h
    }
    e.fromSetString = l ? u : d;

    function C(h) {
        if (!h) return !1;
        var _ = h.length;
        if (_ < 9 || h.charCodeAt(_ - 1) !== 95 || h.charCodeAt(_ - 2) !== 95 || h.charCodeAt(_ - 3) !== 111 || h.charCodeAt(_ - 4) !== 116 || h.charCodeAt(_ - 5) !== 111 || h.charCodeAt(_ - 6) !== 114 || h.charCodeAt(_ - 7) !== 112 || h.charCodeAt(_ - 8) !== 95 || h.charCodeAt(_ - 9) !== 95) return !1;
        for (var S = _ - 10; S >= 0; S--)
            if (h.charCodeAt(S) !== 36) return !1;
        return !0
    }

    function O(h, _, S) {
        var y = L(h.source, _.source);
        return y !== 0 || (y = h.originalLine - _.originalLine, y !== 0) || (y = h.originalColumn - _.originalColumn, y !== 0 || S) || (y = h.generatedColumn - _.generatedColumn, y !== 0) || (y = h.generatedLine - _.generatedLine, y !== 0) ? y : L(h.name, _.name)
    }
    e.compareByOriginalPositions = O;

    function w(h, _, S) {
        var y = h.generatedLine - _.generatedLine;
        return y !== 0 || (y = h.generatedColumn - _.generatedColumn, y !== 0 || S) || (y = L(h.source, _.source), y !== 0) || (y = h.originalLine - _.originalLine, y !== 0) || (y = h.originalColumn - _.originalColumn, y !== 0) ? y : L(h.name, _.name)
    }
    e.compareByGeneratedPositionsDeflated = w;

    function L(h, _) {
        return h === _ ? 0 : h === null ? 1 : _ === null ? -1 : h > _ ? 1 : -1
    }

    function p(h, _) {
        var S = h.generatedLine - _.generatedLine;
        return S !== 0 || (S = h.generatedColumn - _.generatedColumn, S !== 0) || (S = L(h.source, _.source), S !== 0) || (S = h.originalLine - _.originalLine, S !== 0) || (S = h.originalColumn - _.originalColumn, S !== 0) ? S : L(h.name, _.name)
    }
    e.compareByGeneratedPositionsInflated = p;

    function v(h) {
        return JSON.parse(h.replace(/^\)]}'[^\n]*\n/, ""))
    }
    e.parseSourceMapInput = v;

    function N(h, _, S) {
        if (_ = _ || "", h && (h[h.length - 1] !== "/" && _[0] !== "/" && (h += "/"), _ = h + _), S) {
            var y = o(S);
            if (!y) throw new Error("sourceMapURL could not be parsed");
            if (y.path) {
                var j = y.path.lastIndexOf("/");
                j >= 0 && (y.path = y.path.substring(0, j + 1))
            }
            _ = c(s(y), _)
        }
        return a(_)
    }
    e.computeSourceURL = N
})(Fe);
var Xt = {},
    qt = Fe,
    Qt = Object.prototype.hasOwnProperty,
    be = typeof Map != "undefined";

function ce() {
    this._array = [], this._set = be ? new Map : Object.create(null)
}
ce.fromArray = function(t, n) {
    for (var r = new ce, o = 0, s = t.length; o < s; o++) r.add(t[o], n);
    return r
};
ce.prototype.size = function() {
    return be ? this._set.size : Object.getOwnPropertyNames(this._set).length
};
ce.prototype.add = function(t, n) {
    var r = be ? t : qt.toSetString(t),
        o = be ? this.has(t) : Qt.call(this._set, r),
        s = this._array.length;
    (!o || n) && this._array.push(t), o || (be ? this._set.set(t, s) : this._set[r] = s)
};
ce.prototype.has = function(t) {
    if (be) return this._set.has(t);
    var n = qt.toSetString(t);
    return Qt.call(this._set, n)
};
ce.prototype.indexOf = function(t) {
    if (be) {
        var n = this._set.get(t);
        if (n >= 0) return n
    } else {
        var r = qt.toSetString(t);
        if (Qt.call(this._set, r)) return this._set[r]
    }
    throw new Error('"' + t + '" is not in the set.')
};
ce.prototype.at = function(t) {
    if (t >= 0 && t < this._array.length) return this._array[t];
    throw new Error("No element indexed by " + t)
};
ce.prototype.toArray = function() {
    return this._array.slice()
};
Xt.ArraySet = ce;
var gr = {},
    _r = Fe;

function ci(e, t) {
    var n = e.generatedLine,
        r = t.generatedLine,
        o = e.generatedColumn,
        s = t.generatedColumn;
    return r > n || r == n && s >= o || _r.compareByGeneratedPositionsInflated(e, t) <= 0
}

function dt() {
    this._array = [], this._sorted = !0, this._last = {
        generatedLine: -1,
        generatedColumn: 0
    }
}
dt.prototype.unsortedForEach = function(t, n) {
    this._array.forEach(t, n)
};
dt.prototype.add = function(t) {
    ci(this._last, t) ? (this._last = t, this._array.push(t)) : (this._sorted = !1, this._array.push(t))
};
dt.prototype.toArray = function() {
    return this._sorted || (this._array.sort(_r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
};
gr.MappingList = dt;
var Be = ft,
    X = Fe,
    tt = Xt.ArraySet,
    fi = gr.MappingList;

function ee(e) {
    e || (e = {}), this._file = X.getArg(e, "file", null), this._sourceRoot = X.getArg(e, "sourceRoot", null), this._skipValidation = X.getArg(e, "skipValidation", !1), this._sources = new tt, this._names = new tt, this._mappings = new fi, this._sourcesContents = null
}
ee.prototype._version = 3;
ee.fromSourceMap = function(t) {
    var n = t.sourceRoot,
        r = new ee({
            file: t.file,
            sourceRoot: n
        });
    return t.eachMapping(function(o) {
        var s = {
            generated: {
                line: o.generatedLine,
                column: o.generatedColumn
            }
        };
        o.source != null && (s.source = o.source, n != null && (s.source = X.relative(n, s.source)), s.original = {
            line: o.originalLine,
            column: o.originalColumn
        }, o.name != null && (s.name = o.name)), r.addMapping(s)
    }), t.sources.forEach(function(o) {
        var s = o;
        n !== null && (s = X.relative(n, o)), r._sources.has(s) || r._sources.add(s);
        var a = t.sourceContentFor(o);
        a != null && r.setSourceContent(o, a)
    }), r
};
ee.prototype.addMapping = function(t) {
    var n = X.getArg(t, "generated"),
        r = X.getArg(t, "original", null),
        o = X.getArg(t, "source", null),
        s = X.getArg(t, "name", null);
    this._skipValidation || this._validateMapping(n, r, o, s), o != null && (o = String(o), this._sources.has(o) || this._sources.add(o)), s != null && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({
        generatedLine: n.line,
        generatedColumn: n.column,
        originalLine: r != null && r.line,
        originalColumn: r != null && r.column,
        source: o,
        name: s
    })
};
ee.prototype.setSourceContent = function(t, n) {
    var r = t;
    this._sourceRoot != null && (r = X.relative(this._sourceRoot, r)), n != null ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[X.toSetString(r)] = n) : this._sourcesContents && (delete this._sourcesContents[X.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
};
ee.prototype.applySourceMap = function(t, n, r) {
    var o = n;
    if (n == null) {
        if (t.file == null) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        o = t.file
    }
    var s = this._sourceRoot;
    s != null && (o = X.relative(s, o));
    var a = new tt,
        c = new tt;
    this._mappings.unsortedForEach(function(i) {
        if (i.source === o && i.originalLine != null) {
            var l = t.originalPositionFor({
                line: i.originalLine,
                column: i.originalColumn
            });
            l.source != null && (i.source = l.source, r != null && (i.source = X.join(r, i.source)), s != null && (i.source = X.relative(s, i.source)), i.originalLine = l.line, i.originalColumn = l.column, l.name != null && (i.name = l.name))
        }
        var u = i.source;
        u != null && !a.has(u) && a.add(u);
        var g = i.name;
        g != null && !c.has(g) && c.add(g)
    }, this), this._sources = a, this._names = c, t.sources.forEach(function(i) {
        var l = t.sourceContentFor(i);
        l != null && (r != null && (i = X.join(r, i)), s != null && (i = X.relative(s, i)), this.setSourceContent(i, l))
    }, this)
};
ee.prototype._validateMapping = function(t, n, r, o) {
    if (n && typeof n.line != "number" && typeof n.column != "number") throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (!(t && "line" in t && "column" in t && t.line > 0 && t.column >= 0 && !n && !r && !o)) {
        if (t && "line" in t && "column" in t && n && "line" in n && "column" in n && t.line > 0 && t.column >= 0 && n.line > 0 && n.column >= 0 && r) return;
        throw new Error("Invalid mapping: " + JSON.stringify({
            generated: t,
            source: r,
            original: n,
            name: o
        }))
    }
};
ee.prototype._serializeMappings = function() {
    for (var t = 0, n = 1, r = 0, o = 0, s = 0, a = 0, c = "", i, l, u, g, d = this._mappings.toArray(), C = 0, O = d.length; C < O; C++) {
        if (l = d[C], i = "", l.generatedLine !== n)
            for (t = 0; l.generatedLine !== n;) i += ";", n++;
        else if (C > 0) {
            if (!X.compareByGeneratedPositionsInflated(l, d[C - 1])) continue;
            i += ","
        }
        i += Be.encode(l.generatedColumn - t), t = l.generatedColumn, l.source != null && (g = this._sources.indexOf(l.source), i += Be.encode(g - a), a = g, i += Be.encode(l.originalLine - 1 - o), o = l.originalLine - 1, i += Be.encode(l.originalColumn - r), r = l.originalColumn, l.name != null && (u = this._names.indexOf(l.name), i += Be.encode(u - s), s = u)), c += i
    }
    return c
};
ee.prototype._generateSourcesContent = function(t, n) {
    return t.map(function(r) {
        if (!this._sourcesContents) return null;
        n != null && (r = X.relative(n, r));
        var o = X.toSetString(r);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, o) ? this._sourcesContents[o] : null
    }, this)
};
ee.prototype.toJSON = function() {
    var t = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    return this._file != null && (t.file = this._file), this._sourceRoot != null && (t.sourceRoot = this._sourceRoot), this._sourcesContents && (t.sourcesContent = this._generateSourcesContent(t.sources, t.sourceRoot)), t
};
ee.prototype.toString = function() {
    return JSON.stringify(this.toJSON())
};
Vt.SourceMapGenerator = ee;
var ht = {},
    vr = {};
(function(e) {
    e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = 2;

    function t(n, r, o, s, a, c) {
        var i = Math.floor((r - n) / 2) + n,
            l = a(o, s[i], !0);
        return l === 0 ? i : l > 0 ? r - i > 1 ? t(i, r, o, s, a, c) : c == e.LEAST_UPPER_BOUND ? r < s.length ? r : -1 : i : i - n > 1 ? t(n, i, o, s, a, c) : c == e.LEAST_UPPER_BOUND ? i : n < 0 ? -1 : n
    }
    e.search = function(r, o, s, a) {
        if (o.length === 0) return -1;
        var c = t(-1, o.length, r, o, s, a || e.GREATEST_LOWER_BOUND);
        if (c < 0) return -1;
        for (; c - 1 >= 0 && s(o[c], o[c - 1], !0) === 0;) --c;
        return c
    }
})(vr);
var Er = {};

function Ct(e, t, n) {
    var r = e[t];
    e[t] = e[n], e[n] = r
}

function di(e, t) {
    return Math.round(e + Math.random() * (t - e))
}

function Mt(e, t, n, r) {
    if (n < r) {
        var o = di(n, r),
            s = n - 1;
        Ct(e, o, r);
        for (var a = e[r], c = n; c < r; c++) t(e[c], a) <= 0 && (s += 1, Ct(e, s, c));
        Ct(e, s + 1, c);
        var i = s + 1;
        Mt(e, t, n, i - 1), Mt(e, t, i + 1, r)
    }
}
Er.quickSort = function(e, t) {
    Mt(e, t, 0, e.length - 1)
};
var R = Fe,
    Yt = vr,
    Re = Xt.ArraySet,
    hi = ft,
    Qe = Er.quickSort;

function V(e, t) {
    var n = e;
    return typeof e == "string" && (n = R.parseSourceMapInput(e)), n.sections != null ? new ne(n, t) : new Q(n, t)
}
V.fromSourceMap = function(e, t) {
    return Q.fromSourceMap(e, t)
};
V.prototype._version = 3;
V.prototype.__generatedMappings = null;
Object.defineProperty(V.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
    }
});
V.prototype.__originalMappings = null;
Object.defineProperty(V.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
    }
});
V.prototype._charIsMappingSeparator = function(t, n) {
    var r = t.charAt(n);
    return r === ";" || r === ","
};
V.prototype._parseMappings = function(t, n) {
    throw new Error("Subclasses must implement _parseMappings")
};
V.GENERATED_ORDER = 1;
V.ORIGINAL_ORDER = 2;
V.GREATEST_LOWER_BOUND = 1;
V.LEAST_UPPER_BOUND = 2;
V.prototype.eachMapping = function(t, n, r) {
    var o = n || null,
        s = r || V.GENERATED_ORDER,
        a;
    switch (s) {
        case V.GENERATED_ORDER:
            a = this._generatedMappings;
            break;
        case V.ORIGINAL_ORDER:
            a = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.")
    }
    var c = this.sourceRoot;
    a.map(function(i) {
        var l = i.source === null ? null : this._sources.at(i.source);
        return l = R.computeSourceURL(c, l, this._sourceMapURL), {
            source: l,
            generatedLine: i.generatedLine,
            generatedColumn: i.generatedColumn,
            originalLine: i.originalLine,
            originalColumn: i.originalColumn,
            name: i.name === null ? null : this._names.at(i.name)
        }
    }, this).forEach(t, o)
};
V.prototype.allGeneratedPositionsFor = function(t) {
    var n = R.getArg(t, "line"),
        r = {
            source: R.getArg(t, "source"),
            originalLine: n,
            originalColumn: R.getArg(t, "column", 0)
        };
    if (r.source = this._findSourceIndex(r.source), r.source < 0) return [];
    var o = [],
        s = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", R.compareByOriginalPositions, Yt.LEAST_UPPER_BOUND);
    if (s >= 0) {
        var a = this._originalMappings[s];
        if (t.column === void 0)
            for (var c = a.originalLine; a && a.originalLine === c;) o.push({
                line: R.getArg(a, "generatedLine", null),
                column: R.getArg(a, "generatedColumn", null),
                lastColumn: R.getArg(a, "lastGeneratedColumn", null)
            }), a = this._originalMappings[++s];
        else
            for (var i = a.originalColumn; a && a.originalLine === n && a.originalColumn == i;) o.push({
                line: R.getArg(a, "generatedLine", null),
                column: R.getArg(a, "generatedColumn", null),
                lastColumn: R.getArg(a, "lastGeneratedColumn", null)
            }), a = this._originalMappings[++s]
    }
    return o
};
ht.SourceMapConsumer = V;

function Q(e, t) {
    var n = e;
    typeof e == "string" && (n = R.parseSourceMapInput(e));
    var r = R.getArg(n, "version"),
        o = R.getArg(n, "sources"),
        s = R.getArg(n, "names", []),
        a = R.getArg(n, "sourceRoot", null),
        c = R.getArg(n, "sourcesContent", null),
        i = R.getArg(n, "mappings"),
        l = R.getArg(n, "file", null);
    if (r != this._version) throw new Error("Unsupported version: " + r);
    a && (a = R.normalize(a)), o = o.map(String).map(R.normalize).map(function(u) {
        return a && R.isAbsolute(a) && R.isAbsolute(u) ? R.relative(a, u) : u
    }), this._names = Re.fromArray(s.map(String), !0), this._sources = Re.fromArray(o, !0), this._absoluteSources = this._sources.toArray().map(function(u) {
        return R.computeSourceURL(a, u, t)
    }), this.sourceRoot = a, this.sourcesContent = c, this._mappings = i, this._sourceMapURL = t, this.file = l
}
Q.prototype = Object.create(V.prototype);
Q.prototype.consumer = V;
Q.prototype._findSourceIndex = function(e) {
    var t = e;
    if (this.sourceRoot != null && (t = R.relative(this.sourceRoot, t)), this._sources.has(t)) return this._sources.indexOf(t);
    var n;
    for (n = 0; n < this._absoluteSources.length; ++n)
        if (this._absoluteSources[n] == e) return n;
    return -1
};
Q.fromSourceMap = function(t, n) {
    var r = Object.create(Q.prototype),
        o = r._names = Re.fromArray(t._names.toArray(), !0),
        s = r._sources = Re.fromArray(t._sources.toArray(), !0);
    r.sourceRoot = t._sourceRoot, r.sourcesContent = t._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = t._file, r._sourceMapURL = n, r._absoluteSources = r._sources.toArray().map(function(C) {
        return R.computeSourceURL(r.sourceRoot, C, n)
    });
    for (var a = t._mappings.toArray().slice(), c = r.__generatedMappings = [], i = r.__originalMappings = [], l = 0, u = a.length; l < u; l++) {
        var g = a[l],
            d = new yr;
        d.generatedLine = g.generatedLine, d.generatedColumn = g.generatedColumn, g.source && (d.source = s.indexOf(g.source), d.originalLine = g.originalLine, d.originalColumn = g.originalColumn, g.name && (d.name = o.indexOf(g.name)), i.push(d)), c.push(d)
    }
    return Qe(r.__originalMappings, R.compareByOriginalPositions), r
};
Q.prototype._version = 3;
Object.defineProperty(Q.prototype, "sources", {
    get: function() {
        return this._absoluteSources.slice()
    }
});

function yr() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
}
Q.prototype._parseMappings = function(t, n) {
    for (var r = 1, o = 0, s = 0, a = 0, c = 0, i = 0, l = t.length, u = 0, g = {}, d = {}, C = [], O = [], w, L, p, v, N; u < l;)
        if (t.charAt(u) === ";") r++, u++, o = 0;
        else if (t.charAt(u) === ",") u++;
    else {
        for (w = new yr, w.generatedLine = r, v = u; v < l && !this._charIsMappingSeparator(t, v); v++);
        if (L = t.slice(u, v), p = g[L], p) u += L.length;
        else {
            for (p = []; u < v;) hi.decode(t, u, d), N = d.value, u = d.rest, p.push(N);
            if (p.length === 2) throw new Error("Found a source, but no line and column");
            if (p.length === 3) throw new Error("Found a source and line, but no column");
            g[L] = p
        }
        w.generatedColumn = o + p[0], o = w.generatedColumn, p.length > 1 && (w.source = c + p[1], c += p[1], w.originalLine = s + p[2], s = w.originalLine, w.originalLine += 1, w.originalColumn = a + p[3], a = w.originalColumn, p.length > 4 && (w.name = i + p[4], i += p[4])), O.push(w), typeof w.originalLine == "number" && C.push(w)
    }
    Qe(O, R.compareByGeneratedPositionsDeflated), this.__generatedMappings = O, Qe(C, R.compareByOriginalPositions), this.__originalMappings = C
};
Q.prototype._findMapping = function(t, n, r, o, s, a) {
    if (t[r] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + t[r]);
    if (t[o] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + t[o]);
    return Yt.search(t, n, s, a)
};
Q.prototype.computeColumnSpans = function() {
    for (var t = 0; t < this._generatedMappings.length; ++t) {
        var n = this._generatedMappings[t];
        if (t + 1 < this._generatedMappings.length) {
            var r = this._generatedMappings[t + 1];
            if (n.generatedLine === r.generatedLine) {
                n.lastGeneratedColumn = r.generatedColumn - 1;
                continue
            }
        }
        n.lastGeneratedColumn = 1 / 0
    }
};
Q.prototype.originalPositionFor = function(t) {
    var n = {
            generatedLine: R.getArg(t, "line"),
            generatedColumn: R.getArg(t, "column")
        },
        r = this._findMapping(n, this._generatedMappings, "generatedLine", "generatedColumn", R.compareByGeneratedPositionsDeflated, R.getArg(t, "bias", V.GREATEST_LOWER_BOUND));
    if (r >= 0) {
        var o = this._generatedMappings[r];
        if (o.generatedLine === n.generatedLine) {
            var s = R.getArg(o, "source", null);
            s !== null && (s = this._sources.at(s), s = R.computeSourceURL(this.sourceRoot, s, this._sourceMapURL));
            var a = R.getArg(o, "name", null);
            return a !== null && (a = this._names.at(a)), {
                source: s,
                line: R.getArg(o, "originalLine", null),
                column: R.getArg(o, "originalColumn", null),
                name: a
            }
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    }
};
Q.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(t) {
        return t == null
    }) : !1
};
Q.prototype.sourceContentFor = function(t, n) {
    if (!this.sourcesContent) return null;
    var r = this._findSourceIndex(t);
    if (r >= 0) return this.sourcesContent[r];
    var o = t;
    this.sourceRoot != null && (o = R.relative(this.sourceRoot, o));
    var s;
    if (this.sourceRoot != null && (s = R.urlParse(this.sourceRoot))) {
        var a = o.replace(/^file:\/\//, "");
        if (s.scheme == "file" && this._sources.has(a)) return this.sourcesContent[this._sources.indexOf(a)];
        if ((!s.path || s.path == "/") && this._sources.has("/" + o)) return this.sourcesContent[this._sources.indexOf("/" + o)]
    }
    if (n) return null;
    throw new Error('"' + o + '" is not in the SourceMap.')
};
Q.prototype.generatedPositionFor = function(t) {
    var n = R.getArg(t, "source");
    if (n = this._findSourceIndex(n), n < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var r = {
            source: n,
            originalLine: R.getArg(t, "line"),
            originalColumn: R.getArg(t, "column")
        },
        o = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", R.compareByOriginalPositions, R.getArg(t, "bias", V.GREATEST_LOWER_BOUND));
    if (o >= 0) {
        var s = this._originalMappings[o];
        if (s.source === r.source) return {
            line: R.getArg(s, "generatedLine", null),
            column: R.getArg(s, "generatedColumn", null),
            lastColumn: R.getArg(s, "lastGeneratedColumn", null)
        }
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    }
};
ht.BasicSourceMapConsumer = Q;

function ne(e, t) {
    var n = e;
    typeof e == "string" && (n = R.parseSourceMapInput(e));
    var r = R.getArg(n, "version"),
        o = R.getArg(n, "sections");
    if (r != this._version) throw new Error("Unsupported version: " + r);
    this._sources = new Re, this._names = new Re;
    var s = {
        line: -1,
        column: 0
    };
    this._sections = o.map(function(a) {
        if (a.url) throw new Error("Support for url field in sections not implemented.");
        var c = R.getArg(a, "offset"),
            i = R.getArg(c, "line"),
            l = R.getArg(c, "column");
        if (i < s.line || i === s.line && l < s.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        return s = c, {
            generatedOffset: {
                generatedLine: i + 1,
                generatedColumn: l + 1
            },
            consumer: new V(R.getArg(a, "map"), t)
        }
    })
}
ne.prototype = Object.create(V.prototype);
ne.prototype.constructor = V;
ne.prototype._version = 3;
Object.defineProperty(ne.prototype, "sources", {
    get: function() {
        for (var e = [], t = 0; t < this._sections.length; t++)
            for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
        return e
    }
});
ne.prototype.originalPositionFor = function(t) {
    var n = {
            generatedLine: R.getArg(t, "line"),
            generatedColumn: R.getArg(t, "column")
        },
        r = Yt.search(n, this._sections, function(s, a) {
            var c = s.generatedLine - a.generatedOffset.generatedLine;
            return c || s.generatedColumn - a.generatedOffset.generatedColumn
        }),
        o = this._sections[r];
    return o ? o.consumer.originalPositionFor({
        line: n.generatedLine - (o.generatedOffset.generatedLine - 1),
        column: n.generatedColumn - (o.generatedOffset.generatedLine === n.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
        bias: t.bias
    }) : {
        source: null,
        line: null,
        column: null,
        name: null
    }
};
ne.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(t) {
        return t.consumer.hasContentsOfAllSources()
    })
};
ne.prototype.sourceContentFor = function(t, n) {
    for (var r = 0; r < this._sections.length; r++) {
        var o = this._sections[r],
            s = o.consumer.sourceContentFor(t, !0);
        if (s) return s
    }
    if (n) return null;
    throw new Error('"' + t + '" is not in the SourceMap.')
};
ne.prototype.generatedPositionFor = function(t) {
    for (var n = 0; n < this._sections.length; n++) {
        var r = this._sections[n];
        if (r.consumer._findSourceIndex(R.getArg(t, "source")) !== -1) {
            var o = r.consumer.generatedPositionFor(t);
            if (o) {
                var s = {
                    line: o.line + (r.generatedOffset.generatedLine - 1),
                    column: o.column + (r.generatedOffset.generatedLine === o.line ? r.generatedOffset.generatedColumn - 1 : 0)
                };
                return s
            }
        }
    }
    return {
        line: null,
        column: null
    }
};
ne.prototype._parseMappings = function(t, n) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var r = 0; r < this._sections.length; r++)
        for (var o = this._sections[r], s = o.consumer._generatedMappings, a = 0; a < s.length; a++) {
            var c = s[a],
                i = o.consumer._sources.at(c.source);
            i = R.computeSourceURL(o.consumer.sourceRoot, i, this._sourceMapURL), this._sources.add(i), i = this._sources.indexOf(i);
            var l = null;
            c.name && (l = o.consumer._names.at(c.name), this._names.add(l), l = this._names.indexOf(l));
            var u = {
                source: i,
                generatedLine: c.generatedLine + (o.generatedOffset.generatedLine - 1),
                generatedColumn: c.generatedColumn + (o.generatedOffset.generatedLine === c.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
                originalLine: c.originalLine,
                originalColumn: c.originalColumn,
                name: l
            };
            this.__generatedMappings.push(u), typeof u.originalLine == "number" && this.__originalMappings.push(u)
        }
    Qe(this.__generatedMappings, R.compareByGeneratedPositionsDeflated), Qe(this.__originalMappings, R.compareByOriginalPositions)
};
ht.IndexedSourceMapConsumer = ne;
var Sr = {},
    pi = Vt.SourceMapGenerator,
    nt = Fe,
    mi = /(\r?\n)/,
    gi = 10,
    je = "$$$isSourceNode$$$";

function Z(e, t, n, r, o) {
    this.children = [], this.sourceContents = {}, this.line = e == null ? null : e, this.column = t == null ? null : t, this.source = n == null ? null : n, this.name = o == null ? null : o, this[je] = !0, r != null && this.add(r)
}
Z.fromStringWithSourceMap = function(t, n, r) {
    var o = new Z,
        s = t.split(mi),
        a = 0,
        c = function() {
            var d = O(),
                C = O() || "";
            return d + C;

            function O() {
                return a < s.length ? s[a++] : void 0
            }
        },
        i = 1,
        l = 0,
        u = null;
    return n.eachMapping(function(d) {
        if (u !== null)
            if (i < d.generatedLine) g(u, c()), i++, l = 0;
            else {
                var C = s[a] || "",
                    O = C.substr(0, d.generatedColumn - l);
                s[a] = C.substr(d.generatedColumn - l), l = d.generatedColumn, g(u, O), u = d;
                return
            }
        for (; i < d.generatedLine;) o.add(c()), i++;
        if (l < d.generatedColumn) {
            var C = s[a] || "";
            o.add(C.substr(0, d.generatedColumn)), s[a] = C.substr(d.generatedColumn), l = d.generatedColumn
        }
        u = d
    }, this), a < s.length && (u && g(u, c()), o.add(s.splice(a).join(""))), n.sources.forEach(function(d) {
        var C = n.sourceContentFor(d);
        C != null && (r != null && (d = nt.join(r, d)), o.setSourceContent(d, C))
    }), o;

    function g(d, C) {
        if (d === null || d.source === void 0) o.add(C);
        else {
            var O = r ? nt.join(r, d.source) : d.source;
            o.add(new Z(d.originalLine, d.originalColumn, O, C, d.name))
        }
    }
};
Z.prototype.add = function(t) {
    if (Array.isArray(t)) t.forEach(function(n) {
        this.add(n)
    }, this);
    else if (t[je] || typeof t == "string") t && this.children.push(t);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + t);
    return this
};
Z.prototype.prepend = function(t) {
    if (Array.isArray(t))
        for (var n = t.length - 1; n >= 0; n--) this.prepend(t[n]);
    else if (t[je] || typeof t == "string") this.children.unshift(t);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + t);
    return this
};
Z.prototype.walk = function(t) {
    for (var n, r = 0, o = this.children.length; r < o; r++) n = this.children[r], n[je] ? n.walk(t) : n !== "" && t(n, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
    })
};
Z.prototype.join = function(t) {
    var n, r, o = this.children.length;
    if (o > 0) {
        for (n = [], r = 0; r < o - 1; r++) n.push(this.children[r]), n.push(t);
        n.push(this.children[r]), this.children = n
    }
    return this
};
Z.prototype.replaceRight = function(t, n) {
    var r = this.children[this.children.length - 1];
    return r[je] ? r.replaceRight(t, n) : typeof r == "string" ? this.children[this.children.length - 1] = r.replace(t, n) : this.children.push("".replace(t, n)), this
};
Z.prototype.setSourceContent = function(t, n) {
    this.sourceContents[nt.toSetString(t)] = n
};
Z.prototype.walkSourceContents = function(t) {
    for (var n = 0, r = this.children.length; n < r; n++) this.children[n][je] && this.children[n].walkSourceContents(t);
    for (var o = Object.keys(this.sourceContents), n = 0, r = o.length; n < r; n++) t(nt.fromSetString(o[n]), this.sourceContents[o[n]])
};
Z.prototype.toString = function() {
    var t = "";
    return this.walk(function(n) {
        t += n
    }), t
};
Z.prototype.toStringWithSourceMap = function(t) {
    var n = {
            code: "",
            line: 1,
            column: 0
        },
        r = new pi(t),
        o = !1,
        s = null,
        a = null,
        c = null,
        i = null;
    return this.walk(function(l, u) {
        n.code += l, u.source !== null && u.line !== null && u.column !== null ? ((s !== u.source || a !== u.line || c !== u.column || i !== u.name) && r.addMapping({
            source: u.source,
            original: {
                line: u.line,
                column: u.column
            },
            generated: {
                line: n.line,
                column: n.column
            },
            name: u.name
        }), s = u.source, a = u.line, c = u.column, i = u.name, o = !0) : o && (r.addMapping({
            generated: {
                line: n.line,
                column: n.column
            }
        }), s = null, o = !1);
        for (var g = 0, d = l.length; g < d; g++) l.charCodeAt(g) === gi ? (n.line++, n.column = 0, g + 1 === d ? (s = null, o = !1) : o && r.addMapping({
            source: u.source,
            original: {
                line: u.line,
                column: u.column
            },
            generated: {
                line: n.line,
                column: n.column
            },
            name: u.name
        })) : n.column++
    }), this.walkSourceContents(function(l, u) {
        r.setSourceContent(l, u)
    }), {
        code: n.code,
        map: r
    }
};
Sr.SourceNode = Z;
ct.SourceMapGenerator = Vt.SourceMapGenerator;
ct.SourceMapConsumer = ht.SourceMapConsumer;
ct.SourceNode = Sr.SourceNode;
/*!
 * message-compiler v9.2.0-beta.32
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
Object.defineProperty(te, "__esModule", {
    value: !0
});
var rt = Ut.exports,
    _i = ct;
const F = {
        EXPECTED_TOKEN: 1,
        INVALID_TOKEN_IN_PLACEHOLDER: 2,
        UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
        UNKNOWN_ESCAPE_SEQUENCE: 4,
        INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
        UNBALANCED_CLOSING_BRACE: 6,
        UNTERMINATED_CLOSING_BRACE: 7,
        EMPTY_PLACEHOLDER: 8,
        NOT_ALLOW_NEST_PLACEHOLDER: 9,
        INVALID_LINKED_FORMAT: 10,
        MUST_HAVE_MESSAGES_IN_PLURAL: 11,
        UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
        UNEXPECTED_EMPTY_LINKED_KEY: 13,
        UNEXPECTED_LEXICAL_ANALYSIS: 14,
        __EXTEND_POINT__: 15
    },
    vi = {
        [F.EXPECTED_TOKEN]: "Expected token: '{0}'",
        [F.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
        [F.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
        [F.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
        [F.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
        [F.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
        [F.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
        [F.EMPTY_PLACEHOLDER]: "Empty placeholder",
        [F.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
        [F.INVALID_LINKED_FORMAT]: "Invalid linked format",
        [F.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
        [F.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
        [F.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
        [F.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
    };

function Jt(e, t, n = {}) {
    const {
        domain: r,
        messages: o,
        args: s
    } = n, a = e, c = new SyntaxError(String(a));
    return c.code = e, t && (c.location = t), c.domain = r, c
}

function Ei(e) {
    throw e
}
const Cr = {
    start: {
        line: 1,
        column: 1,
        offset: 0
    },
    end: {
        line: 1,
        column: 1,
        offset: 0
    }
};

function br(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}

function ot(e, t, n) {
    const r = {
        start: e,
        end: t
    };
    return n != null && (r.source = n), r
}
const le = " ",
    yi = "\r",
    Y = `
`,
    Si = String.fromCharCode(8232),
    Ci = String.fromCharCode(8233);

function bi(e) {
    const t = e;
    let n = 0,
        r = 1,
        o = 1,
        s = 0;
    const a = y => t[y] === yi && t[y + 1] === Y,
        c = y => t[y] === Y,
        i = y => t[y] === Ci,
        l = y => t[y] === Si,
        u = y => a(y) || c(y) || i(y) || l(y),
        g = () => n,
        d = () => r,
        C = () => o,
        O = () => s,
        w = y => a(y) || i(y) || l(y) ? Y : t[y],
        L = () => w(n),
        p = () => w(n + s);

    function v() {
        return s = 0, u(n) && (r++, o = 0), a(n) && n++, n++, o++, t[n]
    }

    function N() {
        return a(n + s) && s++, s++, t[n + s]
    }

    function h() {
        n = 0, r = 1, o = 1, s = 0
    }

    function _(y = 0) {
        s = y
    }

    function S() {
        const y = n + s;
        for (; y !== n;) v();
        s = 0
    }
    return {
        index: g,
        line: d,
        column: C,
        peekOffset: O,
        charAt: w,
        currentChar: L,
        currentPeek: p,
        next: v,
        peek: N,
        reset: h,
        resetPeek: _,
        skipToPeek: S
    }
}
const pe = void 0,
    Rn = "'",
    Li = "tokenizer";

function Ai(e, t = {}) {
    const n = t.location !== !1,
        r = bi(e),
        o = () => r.index(),
        s = () => br(r.line(), r.column(), r.index()),
        a = s(),
        c = o(),
        i = {
            currentType: 14,
            offset: c,
            startLoc: a,
            endLoc: a,
            lastType: 14,
            lastOffset: c,
            lastStartLoc: a,
            lastEndLoc: a,
            braceNest: 0,
            inLinked: !1,
            text: ""
        },
        l = () => i,
        {
            onError: u
        } = t;

    function g(f, m, b, ...T) {
        const k = l();
        if (m.column += b, m.offset += b, u) {
            const G = ot(k.startLoc, m),
                fe = Jt(f, G, {
                    domain: Li,
                    args: T
                });
            u(fe)
        }
    }

    function d(f, m, b) {
        f.endLoc = s(), f.currentType = m;
        const T = {
            type: m
        };
        return n && (T.loc = ot(f.startLoc, f.endLoc)), b != null && (T.value = b), T
    }
    const C = f => d(f, 14);

    function O(f, m) {
        return f.currentChar() === m ? (f.next(), m) : (g(F.EXPECTED_TOKEN, s(), 0, m), "")
    }

    function w(f) {
        let m = "";
        for (; f.currentPeek() === le || f.currentPeek() === Y;) m += f.currentPeek(), f.peek();
        return m
    }

    function L(f) {
        const m = w(f);
        return f.skipToPeek(), m
    }

    function p(f) {
        if (f === pe) return !1;
        const m = f.charCodeAt(0);
        return m >= 97 && m <= 122 || m >= 65 && m <= 90 || m === 95
    }

    function v(f) {
        if (f === pe) return !1;
        const m = f.charCodeAt(0);
        return m >= 48 && m <= 57
    }

    function N(f, m) {
        const {
            currentType: b
        } = m;
        if (b !== 2) return !1;
        w(f);
        const T = p(f.currentPeek());
        return f.resetPeek(), T
    }

    function h(f, m) {
        const {
            currentType: b
        } = m;
        if (b !== 2) return !1;
        w(f);
        const T = f.currentPeek() === "-" ? f.peek() : f.currentPeek(),
            k = v(T);
        return f.resetPeek(), k
    }

    function _(f, m) {
        const {
            currentType: b
        } = m;
        if (b !== 2) return !1;
        w(f);
        const T = f.currentPeek() === Rn;
        return f.resetPeek(), T
    }

    function S(f, m) {
        const {
            currentType: b
        } = m;
        if (b !== 8) return !1;
        w(f);
        const T = f.currentPeek() === ".";
        return f.resetPeek(), T
    }

    function y(f, m) {
        const {
            currentType: b
        } = m;
        if (b !== 9) return !1;
        w(f);
        const T = p(f.currentPeek());
        return f.resetPeek(), T
    }

    function j(f, m) {
        const {
            currentType: b
        } = m;
        if (!(b === 8 || b === 12)) return !1;
        w(f);
        const T = f.currentPeek() === ":";
        return f.resetPeek(), T
    }

    function $(f, m) {
        const {
            currentType: b
        } = m;
        if (b !== 10) return !1;
        const T = () => {
                const G = f.currentPeek();
                return G === "{" ? p(f.peek()) : G === "@" || G === "%" || G === "|" || G === ":" || G === "." || G === le || !G ? !1 : G === Y ? (f.peek(), T()) : p(G)
            },
            k = T();
        return f.resetPeek(), k
    }

    function B(f) {
        w(f);
        const m = f.currentPeek() === "|";
        return f.resetPeek(), m
    }

    function K(f, m = !0) {
        const b = (k = !1, G = "", fe = !1) => {
                const ye = f.currentPeek();
                return ye === "{" ? G === "%" ? !1 : k : ye === "@" || !ye ? G === "%" ? !0 : k : ye === "%" ? (f.peek(), b(k, "%", !0)) : ye === "|" ? G === "%" || fe ? !0 : !(G === le || G === Y) : ye === le ? (f.peek(), b(!0, le, fe)) : ye === Y ? (f.peek(), b(!0, Y, fe)) : !0
            },
            T = b();
        return m && f.resetPeek(), T
    }

    function z(f, m) {
        const b = f.currentChar();
        return b === pe ? pe : m(b) ? (f.next(), b) : null
    }

    function re(f) {
        return z(f, b => {
            const T = b.charCodeAt(0);
            return T >= 97 && T <= 122 || T >= 65 && T <= 90 || T >= 48 && T <= 57 || T === 95 || T === 36
        })
    }

    function q(f) {
        return z(f, b => {
            const T = b.charCodeAt(0);
            return T >= 48 && T <= 57
        })
    }

    function Je(f) {
        return z(f, b => {
            const T = b.charCodeAt(0);
            return T >= 48 && T <= 57 || T >= 65 && T <= 70 || T >= 97 && T <= 102
        })
    }

    function Ee(f) {
        let m = "",
            b = "";
        for (; m = q(f);) b += m;
        return b
    }

    function $e(f) {
        let m = "";
        for (;;) {
            const b = f.currentChar();
            if (b === "{" || b === "}" || b === "@" || b === "|" || !b) break;
            if (b === "%")
                if (K(f)) m += b, f.next();
                else break;
            else if (b === le || b === Y)
                if (K(f)) m += b, f.next();
                else {
                    if (B(f)) break;
                    m += b, f.next()
                }
            else m += b, f.next()
        }
        return m
    }

    function gt(f) {
        L(f);
        let m = "",
            b = "";
        for (; m = re(f);) b += m;
        return f.currentChar() === pe && g(F.UNTERMINATED_CLOSING_BRACE, s(), 0), b
    }

    function xe(f) {
        L(f);
        let m = "";
        return f.currentChar() === "-" ? (f.next(), m += `-${Ee(f)}`) : m += Ee(f), f.currentChar() === pe && g(F.UNTERMINATED_CLOSING_BRACE, s(), 0), m
    }

    function Ze(f) {
        L(f), O(f, "'");
        let m = "",
            b = "";
        const T = G => G !== Rn && G !== Y;
        for (; m = z(f, T);) m === "\\" ? b += Ue(f) : b += m;
        const k = f.currentChar();
        return k === Y || k === pe ? (g(F.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), k === Y && (f.next(), O(f, "'")), b) : (O(f, "'"), b)
    }

    function Ue(f) {
        const m = f.currentChar();
        switch (m) {
            case "\\":
            case "'":
                return f.next(), `\\${m}`;
            case "u":
                return Le(f, m, 4);
            case "U":
                return Le(f, m, 6);
            default:
                return g(F.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, m), ""
        }
    }

    function Le(f, m, b) {
        O(f, m);
        let T = "";
        for (let k = 0; k < b; k++) {
            const G = Je(f);
            if (!G) {
                g(F.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${m}${T}${f.currentChar()}`);
                break
            }
            T += G
        }
        return `\\${m}${T}`
    }

    function Ge(f) {
        L(f);
        let m = "",
            b = "";
        const T = k => k !== "{" && k !== "}" && k !== le && k !== Y;
        for (; m = z(f, T);) b += m;
        return b
    }

    function tn(f) {
        let m = "",
            b = "";
        for (; m = re(f);) b += m;
        return b
    }

    function A(f) {
        const m = (b = !1, T) => {
            const k = f.currentChar();
            return k === "{" || k === "%" || k === "@" || k === "|" || !k || k === le ? T : k === Y ? (T += k, f.next(), m(b, T)) : (T += k, f.next(), m(!0, T))
        };
        return m(!1, "")
    }

    function M(f) {
        L(f);
        const m = O(f, "|");
        return L(f), m
    }

    function P(f, m) {
        let b = null;
        switch (f.currentChar()) {
            case "{":
                return m.braceNest >= 1 && g(F.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), f.next(), b = d(m, 2, "{"), L(f), m.braceNest++, b;
            case "}":
                return m.braceNest > 0 && m.currentType === 2 && g(F.EMPTY_PLACEHOLDER, s(), 0), f.next(), b = d(m, 3, "}"), m.braceNest--, m.braceNest > 0 && L(f), m.inLinked && m.braceNest === 0 && (m.inLinked = !1), b;
            case "@":
                return m.braceNest > 0 && g(F.UNTERMINATED_CLOSING_BRACE, s(), 0), b = I(f, m) || C(m), m.braceNest = 0, b;
            default:
                let k = !0,
                    G = !0,
                    fe = !0;
                if (B(f)) return m.braceNest > 0 && g(F.UNTERMINATED_CLOSING_BRACE, s(), 0), b = d(m, 1, M(f)), m.braceNest = 0, m.inLinked = !1, b;
                if (m.braceNest > 0 && (m.currentType === 5 || m.currentType === 6 || m.currentType === 7)) return g(F.UNTERMINATED_CLOSING_BRACE, s(), 0), m.braceNest = 0, U(f, m);
                if (k = N(f, m)) return b = d(m, 5, gt(f)), L(f), b;
                if (G = h(f, m)) return b = d(m, 6, xe(f)), L(f), b;
                if (fe = _(f, m)) return b = d(m, 7, Ze(f)), L(f), b;
                if (!k && !G && !fe) return b = d(m, 13, Ge(f)), g(F.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, b.value), L(f), b;
                break
        }
        return b
    }

    function I(f, m) {
        const {
            currentType: b
        } = m;
        let T = null;
        const k = f.currentChar();
        switch ((b === 8 || b === 9 || b === 12 || b === 10) && (k === Y || k === le) && g(F.INVALID_LINKED_FORMAT, s(), 0), k) {
            case "@":
                return f.next(), T = d(m, 8, "@"), m.inLinked = !0, T;
            case ".":
                return L(f), f.next(), d(m, 9, ".");
            case ":":
                return L(f), f.next(), d(m, 10, ":");
            default:
                return B(f) ? (T = d(m, 1, M(f)), m.braceNest = 0, m.inLinked = !1, T) : S(f, m) || j(f, m) ? (L(f), I(f, m)) : y(f, m) ? (L(f), d(m, 12, tn(f))) : $(f, m) ? (L(f), k === "{" ? P(f, m) || T : d(m, 11, A(f))) : (b === 8 && g(F.INVALID_LINKED_FORMAT, s(), 0), m.braceNest = 0, m.inLinked = !1, U(f, m))
        }
    }

    function U(f, m) {
        let b = {
            type: 14
        };
        if (m.braceNest > 0) return P(f, m) || C(m);
        if (m.inLinked) return I(f, m) || C(m);
        const T = f.currentChar();
        switch (T) {
            case "{":
                return P(f, m) || C(m);
            case "}":
                return g(F.UNBALANCED_CLOSING_BRACE, s(), 0), f.next(), d(m, 3, "}");
            case "@":
                return I(f, m) || C(m);
            default:
                if (B(f)) return b = d(m, 1, M(f)), m.braceNest = 0, m.inLinked = !1, b;
                if (K(f)) return d(m, 0, $e(f));
                if (T === "%") return f.next(), d(m, 4, "%");
                break
        }
        return b
    }

    function H() {
        const {
            currentType: f,
            offset: m,
            startLoc: b,
            endLoc: T
        } = i;
        return i.lastType = f, i.lastOffset = m, i.lastStartLoc = b, i.lastEndLoc = T, i.offset = o(), i.startLoc = s(), r.currentChar() === pe ? d(i, 14) : U(r, i)
    }
    return {
        nextToken: H,
        currentOffset: o,
        currentPosition: s,
        context: l
    }
}
const Lr = "parser",
    Oi = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;

function Ni(e, t, n) {
    switch (e) {
        case "\\\\":
            return "\\";
        case "\\'":
            return "'";
        default:
            {
                const r = parseInt(t || n, 16);
                return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "\uFFFD"
            }
    }
}

function Ar(e = {}) {
    const t = e.location !== !1,
        {
            onError: n
        } = e;

    function r(p, v, N, h, ..._) {
        const S = p.currentPosition();
        if (S.offset += h, S.column += h, n) {
            const y = ot(N, S),
                j = Jt(v, y, {
                    domain: Lr,
                    args: _
                });
            n(j)
        }
    }

    function o(p, v, N) {
        const h = {
            type: p,
            start: v,
            end: v
        };
        return t && (h.loc = {
            start: N,
            end: N
        }), h
    }

    function s(p, v, N, h) {
        p.end = v, h && (p.type = h), t && p.loc && (p.loc.end = N)
    }

    function a(p, v) {
        const N = p.context(),
            h = o(3, N.offset, N.startLoc);
        return h.value = v, s(h, p.currentOffset(), p.currentPosition()), h
    }

    function c(p, v) {
        const N = p.context(),
            {
                lastOffset: h,
                lastStartLoc: _
            } = N,
            S = o(5, h, _);
        return S.index = parseInt(v, 10), p.nextToken(), s(S, p.currentOffset(), p.currentPosition()), S
    }

    function i(p, v) {
        const N = p.context(),
            {
                lastOffset: h,
                lastStartLoc: _
            } = N,
            S = o(4, h, _);
        return S.key = v, p.nextToken(), s(S, p.currentOffset(), p.currentPosition()), S
    }

    function l(p, v) {
        const N = p.context(),
            {
                lastOffset: h,
                lastStartLoc: _
            } = N,
            S = o(9, h, _);
        return S.value = v.replace(Oi, Ni), p.nextToken(), s(S, p.currentOffset(), p.currentPosition()), S
    }

    function u(p) {
        const v = p.nextToken(),
            N = p.context(),
            {
                lastOffset: h,
                lastStartLoc: _
            } = N,
            S = o(8, h, _);
        return v.type !== 12 ? (r(p, F.UNEXPECTED_EMPTY_LINKED_MODIFIER, N.lastStartLoc, 0), S.value = "", s(S, h, _), {
            nextConsumeToken: v,
            node: S
        }) : (v.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, oe(v)), S.value = v.value || "", s(S, p.currentOffset(), p.currentPosition()), {
            node: S
        })
    }

    function g(p, v) {
        const N = p.context(),
            h = o(7, N.offset, N.startLoc);
        return h.value = v, s(h, p.currentOffset(), p.currentPosition()), h
    }

    function d(p) {
        const v = p.context(),
            N = o(6, v.offset, v.startLoc);
        let h = p.nextToken();
        if (h.type === 9) {
            const _ = u(p);
            N.modifier = _.node, h = _.nextConsumeToken || p.nextToken()
        }
        switch (h.type !== 10 && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe(h)), h = p.nextToken(), h.type === 2 && (h = p.nextToken()), h.type) {
            case 11:
                h.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe(h)), N.key = g(p, h.value || "");
                break;
            case 5:
                h.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe(h)), N.key = i(p, h.value || "");
                break;
            case 6:
                h.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe(h)), N.key = c(p, h.value || "");
                break;
            case 7:
                h.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe(h)), N.key = l(p, h.value || "");
                break;
            default:
                r(p, F.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
                const _ = p.context(),
                    S = o(7, _.offset, _.startLoc);
                return S.value = "", s(S, _.offset, _.startLoc), N.key = S, s(N, _.offset, _.startLoc), {
                    nextConsumeToken: h,
                    node: N
                }
        }
        return s(N, p.currentOffset(), p.currentPosition()), {
            node: N
        }
    }

    function C(p) {
        const v = p.context(),
            N = v.currentType === 1 ? p.currentOffset() : v.offset,
            h = v.currentType === 1 ? v.endLoc : v.startLoc,
            _ = o(2, N, h);
        _.items = [];
        let S = null;
        do {
            const $ = S || p.nextToken();
            switch (S = null, $.type) {
                case 0:
                    $.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe($)), _.items.push(a(p, $.value || ""));
                    break;
                case 6:
                    $.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe($)), _.items.push(c(p, $.value || ""));
                    break;
                case 5:
                    $.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe($)), _.items.push(i(p, $.value || ""));
                    break;
                case 7:
                    $.value == null && r(p, F.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, oe($)), _.items.push(l(p, $.value || ""));
                    break;
                case 8:
                    const B = d(p);
                    _.items.push(B.node), S = B.nextConsumeToken || null;
                    break
            }
        } while (v.currentType !== 14 && v.currentType !== 1);
        const y = v.currentType === 1 ? v.lastOffset : p.currentOffset(),
            j = v.currentType === 1 ? v.lastEndLoc : p.currentPosition();
        return s(_, y, j), _
    }

    function O(p, v, N, h) {
        const _ = p.context();
        let S = h.items.length === 0;
        const y = o(1, v, N);
        y.cases = [], y.cases.push(h);
        do {
            const j = C(p);
            S || (S = j.items.length === 0), y.cases.push(j)
        } while (_.currentType !== 14);
        return S && r(p, F.MUST_HAVE_MESSAGES_IN_PLURAL, N, 0), s(y, p.currentOffset(), p.currentPosition()), y
    }

    function w(p) {
        const v = p.context(),
            {
                offset: N,
                startLoc: h
            } = v,
            _ = C(p);
        return v.currentType === 14 ? _ : O(p, N, h, _)
    }

    function L(p) {
        const v = Ai(p, rt.assign({}, e)),
            N = v.context(),
            h = o(0, N.offset, N.startLoc);
        return t && h.loc && (h.loc.source = p), h.body = w(v), N.currentType !== 14 && r(v, F.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, p[N.offset] || ""), s(h, v.currentOffset(), v.currentPosition()), h
    }
    return {
        parse: L
    }
}

function oe(e) {
    if (e.type === 14) return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "\u2026" : t
}

function wi(e, t = {}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: s => (n.helpers.add(s), s)
    }
}

function Mn(e, t) {
    for (let n = 0; n < e.length; n++) Zt(e[n], t)
}

function Zt(e, t) {
    switch (e.type) {
        case 1:
            Mn(e.cases, t), t.helper("plural");
            break;
        case 2:
            Mn(e.items, t);
            break;
        case 6:
            Zt(e.key, t), t.helper("linked");
            break;
        case 5:
            t.helper("interpolate"), t.helper("list");
            break;
        case 4:
            t.helper("interpolate"), t.helper("named");
            break
    }
}

function Ti(e, t = {}) {
    const n = wi(e);
    n.helper("normalize"), e.body && Zt(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}

function Pi(e, t) {
    const {
        sourceMap: n,
        filename: r,
        breakLineCode: o,
        needIndent: s
    } = t, a = {
        source: e.loc.source,
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: s,
        indentLevel: 0
    }, c = () => a;

    function i(L, p) {
        a.code += L, a.map && (p && p.loc && p.loc !== Cr && w(p.loc.start, Fi(p)), ji(a, L))
    }

    function l(L, p = !0) {
        const v = p ? o : "";
        i(s ? v + "  ".repeat(L) : v)
    }

    function u(L = !0) {
        const p = ++a.indentLevel;
        L && l(p)
    }

    function g(L = !0) {
        const p = --a.indentLevel;
        L && l(p)
    }

    function d() {
        l(a.indentLevel)
    }
    const C = L => `_${L}`,
        O = () => a.needIndent;

    function w(L, p) {
        a.map.addMapping({
            name: p,
            source: a.filename,
            original: {
                line: L.line,
                column: L.column - 1
            },
            generated: {
                line: a.line,
                column: a.column - 1
            }
        })
    }
    return n && (a.map = new _i.SourceMapGenerator, a.map.setSourceContent(r, a.source)), {
        context: c,
        push: i,
        indent: u,
        deindent: g,
        newline: d,
        helper: C,
        needIndent: O
    }
}

function Ri(e, t) {
    const {
        helper: n
    } = e;
    e.push(`${n("linked")}(`), Me(e, t.key), t.modifier && (e.push(", "), Me(e, t.modifier)), e.push(")")
}

function Mi(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    e.push(`${n("normalize")}([`), e.indent(r());
    const o = t.items.length;
    for (let s = 0; s < o && (Me(e, t.items[s]), s !== o - 1); s++) e.push(", ");
    e.deindent(r()), e.push("])")
}

function Ii(e, t) {
    const {
        helper: n,
        needIndent: r
    } = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`), e.indent(r());
        const o = t.cases.length;
        for (let s = 0; s < o && (Me(e, t.cases[s]), s !== o - 1); s++) e.push(", ");
        e.deindent(r()), e.push("])")
    }
}

function ki(e, t) {
    t.body ? Me(e, t.body) : e.push("null")
}

function Me(e, t) {
    const {
        helper: n
    } = e;
    switch (t.type) {
        case 0:
            ki(e, t);
            break;
        case 1:
            Ii(e, t);
            break;
        case 2:
            Mi(e, t);
            break;
        case 6:
            Ri(e, t);
            break;
        case 8:
            e.push(JSON.stringify(t.value), t);
            break;
        case 7:
            e.push(JSON.stringify(t.value), t);
            break;
        case 5:
            e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
            break;
        case 4:
            e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
            break;
        case 9:
            e.push(JSON.stringify(t.value), t);
            break;
        case 3:
            e.push(JSON.stringify(t.value), t);
            break
    }
}
const Di = (e, t = {}) => {
    const n = rt.isString(t.mode) ? t.mode : "normal",
        r = rt.isString(t.filename) ? t.filename : "message.intl",
        o = !!t.sourceMap,
        s = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`,
        a = t.needIndent ? t.needIndent : n !== "arrow",
        c = e.helpers || [],
        i = Pi(e, {
            mode: n,
            filename: r,
            sourceMap: o,
            breakLineCode: s,
            needIndent: a
        });
    i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), c.length > 0 && (i.push(`const { ${c.map(g=>`${g}: _${g}`).join(", ")} } = ctx`), i.newline()), i.push("return "), Me(i, e), i.deindent(a), i.push("}");
    const {
        code: l,
        map: u
    } = i.context();
    return {
        ast: e,
        code: l,
        map: u ? u.toJSON() : void 0
    }
};

function Fi(e) {
    switch (e.type) {
        case 3:
            return e.value;
        case 5:
            return e.index.toString();
        case 4:
            return e.key;
        case 9:
            return e.value;
        case 8:
            return e.value;
        case 7:
            return e.value;
        default:
            return
    }
}

function ji(e, t, n = t.length) {
    let r = 0,
        o = -1;
    for (let s = 0; s < n; s++) t.charCodeAt(s) === 10 && (r++, o = s);
    return e.offset += n, e.line += r, e.column = o === -1 ? e.column + n : n - o, e
}

function $i(e, t = {}) {
    const n = rt.assign({}, t),
        o = Ar(n).parse(e);
    return Ti(o, n), Di(o, n)
}
te.CompileErrorCodes = F;
te.ERROR_DOMAIN = Lr;
te.LocationStub = Cr;
te.baseCompile = $i;
te.createCompileError = Jt;
te.createLocation = ot;
te.createParser = Ar;
te.createPosition = br;
te.defaultOnError = Ei;
te.errorMessages = vi;
fr.exports = te;
var Or = {
        exports: {}
    },
    zt = {};
/*!
 * devtools-if v9.2.0-beta.32
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
Object.defineProperty(zt, "__esModule", {
    value: !0
});
const xi = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
};
zt.IntlifyDevToolsHooks = xi;
Or.exports = zt;
/*!
 * core-base v9.2.0-beta.32
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
Object.defineProperty(D, "__esModule", {
    value: !0
});
var Ie = fr.exports,
    E = Ut.exports,
    Nr = Or.exports;
const ve = [];
ve[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
};
ve[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
};
ve[2] = {
    w: [2],
    i: [3, 0],
    ["0"]: [3, 0]
};
ve[3] = {
    i: [3, 0],
    ["0"]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
};
ve[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [4, 2],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
};
ve[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
};
ve[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
};
const Ui = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Gi(e) {
    return Ui.test(e)
}

function Wi(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function Bi(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Vi(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Gi(t) ? Wi(t) : "*" + t
}

function wr(e) {
    const t = [];
    let n = -1,
        r = 0,
        o = 0,
        s, a, c, i, l, u, g;
    const d = [];
    d[0] = () => {
        a === void 0 ? a = c : a += c
    }, d[1] = () => {
        a !== void 0 && (t.push(a), a = void 0)
    }, d[2] = () => {
        d[0](), o++
    }, d[3] = () => {
        if (o > 0) o--, r = 4, d[0]();
        else {
            if (o = 0, a === void 0 || (a = Vi(a), a === !1)) return !1;
            d[1]()
        }
    };

    function C() {
        const O = e[n + 1];
        if (r === 5 && O === "'" || r === 6 && O === '"') return n++, c = "\\" + O, d[0](), !0
    }
    for (; r !== null;)
        if (n++, s = e[n], !(s === "\\" && C())) {
            if (i = Bi(s), g = ve[r], l = g[i] || g.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = d[l[1]], u && (c = s, u() === !1)))) return;
            if (r === 7) return t
        }
}
const In = new Map;

function Tr(e, t) {
    return E.isObject(e) ? e[t] : null
}

function Ki(e, t) {
    if (!E.isObject(e)) return null;
    let n = In.get(t);
    if (n || (n = wr(t), n && In.set(t, n)), !n) return null;
    const r = n.length;
    let o = e,
        s = 0;
    for (; s < r;) {
        const a = o[n[s]];
        if (a === void 0) return null;
        o = a, s++
    }
    return o
}
const Hi = e => e,
    Xi = e => "",
    Pr = "text",
    qi = e => e.length === 0 ? "" : e.join(""),
    Qi = E.toDisplayString;

function kn(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function Yi(e) {
    const t = E.isNumber(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (E.isNumber(e.named.count) || E.isNumber(e.named.n)) ? E.isNumber(e.named.count) ? e.named.count : E.isNumber(e.named.n) ? e.named.n : t : t
}

function Ji(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function Rr(e = {}) {
    const t = e.locale,
        n = Yi(e),
        r = E.isObject(e.pluralRules) && E.isString(t) && E.isFunction(e.pluralRules[t]) ? e.pluralRules[t] : kn,
        o = E.isObject(e.pluralRules) && E.isString(t) && E.isFunction(e.pluralRules[t]) ? kn : void 0,
        s = p => p[r(n, p.length, o)],
        a = e.list || [],
        c = p => a[p],
        i = e.named || {};
    E.isNumber(e.pluralIndex) && Ji(n, i);
    const l = p => i[p];

    function u(p) {
        const v = E.isFunction(e.messages) ? e.messages(p) : E.isObject(e.messages) ? e.messages[p] : !1;
        return v || (e.parent ? e.parent.message(p) : Xi)
    }
    const g = p => e.modifiers ? e.modifiers[p] : Hi,
        d = E.isPlainObject(e.processor) && E.isFunction(e.processor.normalize) ? e.processor.normalize : qi,
        C = E.isPlainObject(e.processor) && E.isFunction(e.processor.interpolate) ? e.processor.interpolate : Qi,
        O = (p, v) => {
            const N = u(p)(L);
            return E.isString(v) ? g(v)(N) : N
        },
        w = E.isPlainObject(e.processor) && E.isString(e.processor.type) ? e.processor.type : Pr,
        L = {
            list: c,
            named: l,
            plural: s,
            linked: O,
            message: u,
            type: w,
            interpolate: C,
            normalize: d
        };
    return L
}
let ke = null;

function Zi(e) {
    ke = e
}

function zi() {
    return ke
}

function ea(e, t, n) {
    ke && ke.emit(Nr.IntlifyDevToolsHooks.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const ta = na(Nr.IntlifyDevToolsHooks.FunctionTranslate);

function na(e) {
    return t => ke && ke.emit(e, t)
}
const Se = {
        NOT_FOUND_KEY: 1,
        FALLBACK_TO_TRANSLATE: 2,
        CANNOT_FORMAT_NUMBER: 3,
        FALLBACK_TO_NUMBER_FORMAT: 4,
        CANNOT_FORMAT_DATE: 5,
        FALLBACK_TO_DATE_FORMAT: 6,
        __EXTEND_POINT__: 7
    },
    ra = {
        [Se.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
        [Se.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
        [Se.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
        [Se.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
        [Se.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
        [Se.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
    };

function oa(e, ...t) {
    return E.format(ra[e], ...t)
}

function Mr(e, t, n) {
    return [...new Set([n, ...E.isArray(t) ? t : E.isObject(t) ? Object.keys(t) : E.isString(t) ? [t] : [n]])]
}

function sa(e, t, n) {
    const r = E.isString(n) ? n : en,
        o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let s = o.__localeChainCache.get(r);
    if (!s) {
        s = [];
        let a = [n];
        for (; E.isArray(a);) a = Dn(s, a, t);
        const c = E.isArray(t) || !E.isPlainObject(t) ? t : t.default ? t.default : null;
        a = E.isString(c) ? [c] : c, E.isArray(a) && Dn(s, a, !1), o.__localeChainCache.set(r, s)
    }
    return s
}

function Dn(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && E.isBoolean(r); o++) {
        const s = t[o];
        E.isString(s) && (r = ia(e, t[o], n))
    }
    return r
}

function ia(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const s = o.join("-");
        r = aa(e, s, n), o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}

function aa(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o), (E.isArray(n) || E.isPlainObject(n)) && n[o] && (r = n[o])
    }
    return r
}
const Ir = "9.2.0-beta.32",
    pt = -1,
    en = "en-US",
    la = "";

function ua() {
    return {
        upper: e => E.isString(e) ? e.toUpperCase() : e,
        lower: e => E.isString(e) ? e.toLowerCase() : e,
        capitalize: e => E.isString(e) ? `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}` : e
    }
}
let kr;

function ca(e) {
    kr = e
}
let Dr;

function fa(e) {
    Dr = e
}
let Fr;

function da(e) {
    Fr = e
}
let jr = null;
const ha = e => {
        jr = e
    },
    pa = () => jr;
let $r = null;
const ma = e => {
        $r = e
    },
    ga = () => $r;
let Fn = 0;

function _a(e = {}) {
    const t = E.isString(e.version) ? e.version : Ir,
        n = E.isString(e.locale) ? e.locale : en,
        r = E.isArray(e.fallbackLocale) || E.isPlainObject(e.fallbackLocale) || E.isString(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
        o = E.isPlainObject(e.messages) ? e.messages : {
            [n]: {}
        },
        s = E.isPlainObject(e.datetimeFormats) ? e.datetimeFormats : {
            [n]: {}
        },
        a = E.isPlainObject(e.numberFormats) ? e.numberFormats : {
            [n]: {}
        },
        c = E.assign({}, e.modifiers || {}, ua()),
        i = e.pluralRules || {},
        l = E.isFunction(e.missing) ? e.missing : null,
        u = E.isBoolean(e.missingWarn) || E.isRegExp(e.missingWarn) ? e.missingWarn : !0,
        g = E.isBoolean(e.fallbackWarn) || E.isRegExp(e.fallbackWarn) ? e.fallbackWarn : !0,
        d = !!e.fallbackFormat,
        C = !!e.unresolving,
        O = E.isFunction(e.postTranslation) ? e.postTranslation : null,
        w = E.isPlainObject(e.processor) ? e.processor : null,
        L = E.isBoolean(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        p = !!e.escapeParameter,
        v = E.isFunction(e.messageCompiler) ? e.messageCompiler : kr,
        N = E.isFunction(e.messageResolver) ? e.messageResolver : Dr || Tr,
        h = E.isFunction(e.localeFallbacker) ? e.localeFallbacker : Fr || Mr,
        _ = E.isObject(e.fallbackContext) ? e.fallbackContext : void 0,
        S = E.isFunction(e.onWarn) ? e.onWarn : E.warn,
        y = e,
        j = E.isObject(y.__datetimeFormatters) ? y.__datetimeFormatters : new Map,
        $ = E.isObject(y.__numberFormatters) ? y.__numberFormatters : new Map,
        B = E.isObject(y.__meta) ? y.__meta : {};
    Fn++;
    const K = {
        version: t,
        cid: Fn,
        locale: n,
        fallbackLocale: r,
        messages: o,
        modifiers: c,
        pluralRules: i,
        missing: l,
        missingWarn: u,
        fallbackWarn: g,
        fallbackFormat: d,
        unresolving: C,
        postTranslation: O,
        processor: w,
        warnHtmlMessage: L,
        escapeParameter: p,
        messageCompiler: v,
        messageResolver: N,
        localeFallbacker: h,
        fallbackContext: _,
        onWarn: S,
        __meta: B
    };
    return K.datetimeFormats = s, K.numberFormats = a, K.__datetimeFormatters = j, K.__numberFormatters = $, K
}

function va(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}

function Ea(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}

function mt(e, t, n, r, o) {
    const {
        missing: s,
        onWarn: a
    } = e;
    if (s !== null) {
        const c = s(e, n, t, o);
        return E.isString(c) ? c : t
    } else return t
}

function ya(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}
const Sa = e => e;
let It = Object.create(null);

function Ca() {
    It = Object.create(null)
}

function ba(e, t = {}) {
    {
        const r = (t.onCacheKey || Sa)(e),
            o = It[r];
        if (o) return o;
        let s = !1;
        const a = t.onError || Ie.defaultOnError;
        t.onError = l => {
            s = !0, a(l)
        };
        const {
            code: c
        } = Ie.baseCompile(e, t), i = new Function(`return ${c}`)();
        return s ? i : It[r] = i
    }
}
let xr = Ie.CompileErrorCodes.__EXTEND_POINT__;
const bt = () => ++xr,
    se = {
        INVALID_ARGUMENT: xr,
        INVALID_DATE_ARGUMENT: bt(),
        INVALID_ISO_DATE_ARGUMENT: bt(),
        __EXTEND_POINT__: bt()
    };

function Ce(e) {
    return Ie.createCompileError(e, null, void 0)
}
se.INVALID_ARGUMENT + "", se.INVALID_DATE_ARGUMENT + "", se.INVALID_ISO_DATE_ARGUMENT + "";
const jn = () => "",
    ge = e => E.isFunction(e);

function La(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: o,
        messageCompiler: s,
        fallbackLocale: a,
        messages: c
    } = e, [i, l] = Wr(...t), u = E.isBoolean(l.missingWarn) ? l.missingWarn : e.missingWarn, g = E.isBoolean(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, d = E.isBoolean(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, C = !!l.resolvedMessage, O = E.isString(l.default) || E.isBoolean(l.default) ? E.isBoolean(l.default) ? i : l.default : n ? s ? i : () => i : "", w = n || O !== "", L = E.isString(l.locale) ? l.locale : e.locale;
    d && Aa(l);
    let [p, v, N] = C ? [i, L, c[L] || {}] : Ur(e, i, L, a, g, u), h = p, _ = i;
    if (!C && !(E.isString(h) || ge(h)) && w && (h = O, _ = h), !C && (!(E.isString(h) || ge(h)) || !E.isString(v))) return o ? pt : i;
    let S = !1;
    const y = () => {
            S = !0
        },
        j = ge(h) ? h : Gr(e, i, v, h, _, y);
    if (S) return h;
    const $ = wa(e, v, N, l),
        B = Rr($),
        K = Oa(e, j, B);
    return r ? r(K) : K
}

function Aa(e) {
    E.isArray(e.list) ? e.list = e.list.map(t => E.isString(t) ? E.escapeHtml(t) : t) : E.isObject(e.named) && Object.keys(e.named).forEach(t => {
        E.isString(e.named[t]) && (e.named[t] = E.escapeHtml(e.named[t]))
    })
}

function Ur(e, t, n, r, o, s) {
    const {
        messages: a,
        onWarn: c,
        messageResolver: i,
        localeFallbacker: l
    } = e, u = l(e, r, n);
    let g = {},
        d, C = null;
    const O = "translate";
    for (let w = 0; w < u.length && (d = u[w], g = a[d] || {}, (C = i(g, t)) === null && (C = g[t]), !(E.isString(C) || E.isFunction(C))); w++) {
        const L = mt(e, t, d, s, O);
        L !== t && (C = L)
    }
    return [C, d, g]
}

function Gr(e, t, n, r, o, s) {
    const {
        messageCompiler: a,
        warnHtmlMessage: c
    } = e;
    if (ge(r)) {
        const l = r;
        return l.locale = l.locale || n, l.key = l.key || t, l
    }
    const i = a(r, Na(e, n, o, r, c, s));
    return i.locale = n, i.key = t, i.source = r, i
}

function Oa(e, t, n) {
    return t(n)
}

function Wr(...e) {
    const [t, n, r] = e, o = {};
    if (!E.isString(t) && !E.isNumber(t) && !ge(t)) throw Ce(se.INVALID_ARGUMENT);
    const s = E.isNumber(t) ? String(t) : (ge(t), t);
    return E.isNumber(n) ? o.plural = n : E.isString(n) ? o.default = n : E.isPlainObject(n) && !E.isEmptyObject(n) ? o.named = n : E.isArray(n) && (o.list = n), E.isNumber(r) ? o.plural = r : E.isString(r) ? o.default = r : E.isPlainObject(r) && E.assign(o, r), [s, o]
}

function Na(e, t, n, r, o, s) {
    return {
        warnHtmlMessage: o,
        onError: a => {
            throw s && s(a), a
        },
        onCacheKey: a => E.generateFormatCacheKey(t, n, a)
    }
}

function wa(e, t, n, r) {
    const {
        modifiers: o,
        pluralRules: s,
        messageResolver: a,
        fallbackLocale: c,
        fallbackWarn: i,
        missingWarn: l,
        fallbackContext: u
    } = e, d = {
        locale: t,
        modifiers: o,
        pluralRules: s,
        messages: C => {
            let O = a(n, C);
            if (O == null && u) {
                const [, , w] = Ur(u, C, t, c, i, l);
                O = a(w, C)
            }
            if (E.isString(O)) {
                let w = !1;
                const p = Gr(e, C, t, O, C, () => {
                    w = !0
                });
                return w ? jn : p
            } else return ge(O) ? O : jn
        }
    };
    return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), E.isNumber(r.plural) && (d.pluralIndex = r.plural), d
}

function Ta(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: o,
        onWarn: s,
        localeFallbacker: a
    } = e, {
        __datetimeFormatters: c
    } = e, [i, l, u, g] = Br(...t), d = E.isBoolean(u.missingWarn) ? u.missingWarn : e.missingWarn;
    E.isBoolean(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const C = !!u.part,
        O = E.isString(u.locale) ? u.locale : e.locale,
        w = a(e, o, O);
    if (!E.isString(i) || i === "") return new Intl.DateTimeFormat(O).format(l);
    let L = {},
        p, v = null;
    const N = "datetime format";
    for (let S = 0; S < w.length && (p = w[S], L = n[p] || {}, v = L[i], !E.isPlainObject(v)); S++) mt(e, i, p, d, N);
    if (!E.isPlainObject(v) || !E.isString(p)) return r ? pt : i;
    let h = `${p}__${i}`;
    E.isEmptyObject(g) || (h = `${h}__${JSON.stringify(g)}`);
    let _ = c.get(h);
    return _ || (_ = new Intl.DateTimeFormat(p, E.assign({}, v, g)), c.set(h, _)), C ? _.formatToParts(l) : _.format(l)
}

function Br(...e) {
    const [t, n, r, o] = e;
    let s = {},
        a = {},
        c;
    if (E.isString(t)) {
        const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!i) throw Ce(se.INVALID_ISO_DATE_ARGUMENT);
        const l = i[3] ? i[3].trim().startsWith("T") ? `${i[1].trim()}${i[3].trim()}` : `${i[1].trim()}T${i[3].trim()}` : i[1].trim();
        c = new Date(l);
        try {
            c.toISOString()
        } catch {
            throw Ce(se.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (E.isDate(t)) {
        if (isNaN(t.getTime())) throw Ce(se.INVALID_DATE_ARGUMENT);
        c = t
    } else if (E.isNumber(t)) c = t;
    else throw Ce(se.INVALID_ARGUMENT);
    return E.isString(n) ? s.key = n : E.isPlainObject(n) && (s = n), E.isString(r) ? s.locale = r : E.isPlainObject(r) && (a = r), E.isPlainObject(o) && (a = o), [s.key || "", c, s, a]
}

function Pa(e, t, n) {
    const r = e;
    for (const o in n) {
        const s = `${t}__${o}`;
        !r.__datetimeFormatters.has(s) || r.__datetimeFormatters.delete(s)
    }
}

function Ra(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: o,
        onWarn: s,
        localeFallbacker: a
    } = e, {
        __numberFormatters: c
    } = e, [i, l, u, g] = Vr(...t), d = E.isBoolean(u.missingWarn) ? u.missingWarn : e.missingWarn;
    E.isBoolean(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const C = !!u.part,
        O = E.isString(u.locale) ? u.locale : e.locale,
        w = a(e, o, O);
    if (!E.isString(i) || i === "") return new Intl.NumberFormat(O).format(l);
    let L = {},
        p, v = null;
    const N = "number format";
    for (let S = 0; S < w.length && (p = w[S], L = n[p] || {}, v = L[i], !E.isPlainObject(v)); S++) mt(e, i, p, d, N);
    if (!E.isPlainObject(v) || !E.isString(p)) return r ? pt : i;
    let h = `${p}__${i}`;
    E.isEmptyObject(g) || (h = `${h}__${JSON.stringify(g)}`);
    let _ = c.get(h);
    return _ || (_ = new Intl.NumberFormat(p, E.assign({}, v, g)), c.set(h, _)), C ? _.formatToParts(l) : _.format(l)
}

function Vr(...e) {
    const [t, n, r, o] = e;
    let s = {},
        a = {};
    if (!E.isNumber(t)) throw Ce(se.INVALID_ARGUMENT);
    const c = t;
    return E.isString(n) ? s.key = n : E.isPlainObject(n) && (s = n), E.isString(r) ? s.locale = r : E.isPlainObject(r) && (a = r), E.isPlainObject(o) && (a = o), [s.key || "", c, s, a]
}

function Ma(e, t, n) {
    const r = e;
    for (const o in n) {
        const s = `${t}__${o}`;
        !r.__numberFormatters.has(s) || r.__numberFormatters.delete(s)
    }
}
D.CompileErrorCodes = Ie.CompileErrorCodes;
D.createCompileError = Ie.createCompileError;
D.CoreErrorCodes = se;
D.CoreWarnCodes = Se;
D.DEFAULT_LOCALE = en;
D.DEFAULT_MESSAGE_DATA_TYPE = Pr;
D.MISSING_RESOLVE_VALUE = la;
D.NOT_REOSLVED = pt;
D.VERSION = Ir;
D.clearCompileCache = Ca;
D.clearDateTimeFormat = Pa;
D.clearNumberFormat = Ma;
D.compileToFunction = ba;
D.createCoreContext = _a;
D.createCoreError = Ce;
D.createMessageContext = Rr;
D.datetime = Ta;
D.fallbackWithLocaleChain = sa;
D.fallbackWithSimple = Mr;
D.getAdditionalMeta = pa;
D.getDevToolsHook = zi;
D.getFallbackContext = ga;
D.getWarnMessage = oa;
D.handleMissing = mt;
D.initI18nDevTools = ea;
D.isMessageFunction = ge;
D.isTranslateFallbackWarn = va;
D.isTranslateMissingWarn = Ea;
D.number = Ra;
D.parse = wr;
D.parseDateTimeArgs = Br;
D.parseNumberArgs = Vr;
D.parseTranslateArgs = Wr;
D.registerLocaleFallbacker = da;
D.registerMessageCompiler = ca;
D.registerMessageResolver = fa;
D.resolveValue = Ki;
D.resolveWithKeyValue = Tr;
D.setAdditionalMeta = ha;
D.setDevToolsHook = Zi;
D.setFallbackContext = ma;
D.translate = La;
D.translateDevTools = ta;
D.updateFallbackLocale = ya;
ai.exports = D;
export {
    ai as a, Ba as b, $a as c, xa as d, Ga as e, Ua as f, ja as g, Da as h, ka as i, Wa as j, Ut as s, Fa as u
};