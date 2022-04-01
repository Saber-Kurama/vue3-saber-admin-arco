"use strict";
(self.webpackChunkarco_design_pro = self.webpackChunkarco_design_pro || []).push([
    [7326, 7901, 8050, 9827, 3938, 6582, 5849, 3496, 1291], {
        24767: function(e, t, n) {
            n.r(t);
            var r = n(2867),
                c = n(9759),
                a = n(43390),
                o = n.n(a),
                i = n(56327),
                l = n(62245),
                s = n(363),
                u = n(32582),
                d = n(77479),
                p = n(71419),
                f = n(63662),
                h = n(83938),
                m = n(50844);
            t.default = function() {
                var e = (0, c.useState)([]),
                    t = (0, r.Z)(e, 2),
                    n = t[0],
                    a = t[1],
                    y = (0, c.useState)(!0),
                    v = (0, r.Z)(y, 2),
                    j = v[0],
                    g = v[1],
                    w = (0, p.Z)(f.default);

                function b(e) {
                    switch (e) {
                        case "activity":
                            return "orangered";
                        case "info":
                            return "cyan";
                        default:
                            return "arcoblue"
                    }
                }
                return (0, c.useEffect)((function() {
                    g(!0), o().get("/api/workplace/announcement").then((function(e) {
                        a(e.data)
                    })).finally((function() {
                        g(!1)
                    }))
                }), []), (0, m.jsxs)(i.Z, {
                    children: [(0, m.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [(0, m.jsx)(l.Z.Title, {
                            heading: 6,
                            children: w["workplace.announcement"]
                        }), (0, m.jsx)(s.Z, {
                            children: w["workplace.seeMore"]
                        })]
                    }), (0, m.jsx)(u.Z, {
                        loading: j,
                        text: {
                            rows: 5,
                            width: "100%"
                        },
                        animation: !0,
                        children: (0, m.jsx)("div", {
                            children: n.map((function(e) {
                                return (0, m.jsxs)("div", {
                                    className: h.default.item,
                                    children: [(0, m.jsx)(d.Z, {
                                        color: b(e.type),
                                        size: "small",
                                        children: w["workplace.".concat(e.type)]
                                    }), (0, m.jsx)("span", {
                                        className: h.default.link,
                                        children: e.content
                                    })]
                                }, e.key)
                            }))
                        })
                    })]
                })
            }
        },
        7901: function(e, t, n) {
            n.r(t);
            n(9759);
            var r = n(52294),
                c = n(50844),
                a = ["//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f7e8fc1e09c42e30682526252365be1c.jpg~tplv-uwbnlip3yd-webp.webp", "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/94e8dd2d6dc4efb2c8cfd82c0ff02a2c.jpg~tplv-uwbnlip3yd-webp.webp", "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/ec447228c59ae1ebe185bab6cd776ca4.jpg~tplv-uwbnlip3yd-webp.webp", "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1d1580d2a5a1e27415ff594c756eabd8.jpg~tplv-uwbnlip3yd-webp.webp"];
            t.default = function() {
                return (0, c.jsx)(r.Z, {
                    indicatorType: "slider",
                    showArrow: "never",
                    autoPlay: !0,
                    style: {
                        width: "100%",
                        height: 160
                    },
                    children: a.map((function(e, t) {
                        return (0, c.jsx)("div", {
                            children: (0, c.jsx)("img", {
                                src: e,
                                style: {
                                    width: 280,
                                    transform: "translateY(-30px)"
                                }
                            })
                        }, t)
                    }))
                })
            }
        },
        67134: function(e, t, n) {
            n.r(t);
            var r = n(2867),
                c = n(9759),
                a = n(56327),
                o = n(62245),
                i = n(38631),
                l = n(39073),
                s = n(43390),
                u = n.n(s),
                d = n(71419),
                p = n(63662),
                f = n(50844);
            t.default = function() {
                var e = (0, d.Z)(p.default),
                    t = (0, c.useState)([]),
                    n = (0, r.Z)(t, 2),
                    s = n[0],
                    h = n[1],
                    m = (0, c.useState)(!0),
                    y = (0, r.Z)(m, 2),
                    v = y[0],
                    j = y[1];
                return (0, c.useEffect)((function() {
                    j(!0), u().get("/api/workplace/content-percentage").then((function(e) {
                        h(e.data)
                    })).finally((function() {
                        j(!1)
                    }))
                }), []), (0, f.jsxs)(a.Z, {
                    children: [(0, f.jsx)(o.Z.Title, {
                        heading: 6,
                        children: e["workplace.contentPercentage"]
                    }), (0, f.jsx)(i.Z, {
                        loading: v,
                        style: {
                            display: "block"
                        },
                        children: (0, f.jsx)(l.DonutChart, {
                            autoFit: !0,
                            height: 340,
                            data: s,
                            radius: .7,
                            innerRadius: .65,
                            angleField: "count",
                            colorField: "type",
                            color: ["#21CCFF", "#313CA9", "#249EFF"],
                            interactions: [{
                                type: "element-single-selected"
                            }],
                            tooltip: {
                                showMarkers: !1
                            },
                            label: {
                                visible: !0,
                                type: "spider",
                                formatter: function(e) {
                                    return "".concat((100 * e.percent).toFixed(0), "%")
                                },
                                style: {
                                    fill: "#86909C",
                                    fontSize: 14
                                }
                            },
                            legend: {
                                position: "bottom"
                            },
                            statistic: {
                                title: {
                                    style: {
                                        fontSize: "14px",
                                        lineHeight: 2,
                                        color: "rgb(--var(color-text-1))"
                                    },
                                    formatter: function() {
                                        return "\u5185\u5bb9\u91cf"
                                    }
                                },
                                content: {
                                    style: {
                                        fontSize: "16px",
                                        color: "rgb(--var(color-text-1))"
                                    },
                                    formatter: function(e, t) {
                                        var n = t.reduce((function(e, t) {
                                            return e + t.count
                                        }), 0);
                                        return Number(n).toLocaleString()
                                    }
                                }
                            }
                        })
                    })]
                })
            }
        },
        61402: function(e, t, n) {
            n.r(t);
            var r = n(2867),
                c = (n(9759), n(56327)),
                a = n(62245),
                o = n(363),
                i = n(71419),
                l = n(63662),
                s = n(86582),
                u = n(50844),
                d = {
                    react: "https://arco.design/react/docs/start",
                    vue: "https://arco.design/vue/docs/start",
                    designLab: "https://arco.design/themes",
                    materialMarket: "https://arco.design/material/"
                };
            t.default = function() {
                var e = (0, i.Z)(l.default);
                return (0, u.jsxs)(c.Z, {
                    children: [(0, u.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [(0, u.jsx)(a.Z.Title, {
                            heading: 6,
                            children: e["workplace.docs"]
                        }), (0, u.jsx)(o.Z, {
                            children: e["workplace.seeMore"]
                        })]
                    }), (0, u.jsx)("div", {
                        className: s.default.docs,
                        children: Object.entries(d).map((function(t) {
                            var n = (0, r.Z)(t, 2),
                                c = n[0],
                                a = n[1];
                            return (0, u.jsx)(o.Z, {
                                className: s.default.link,
                                href: a,
                                target: "_blank",
                                children: e["workplace.".concat(c)]
                            }, c)
                        }))
                    })]
                })
            }
        },
        81964: function(e, t, n) {
            n.r(t);
            n(9759);
            var r = n(69547),
                c = n(96256),
                a = n(48808),
                o = n(25798),
                i = n(67134),
                l = n(74480),
                s = n(24767),
                u = n(7901),
                d = n(61402),
                p = n(35849),
                f = (n(28050), n(50844)),
                h = r.Z.Row,
                m = r.Z.Col;
            t.default = function() {
                return (0, f.jsxs)(c.Z, {
                    size: 16,
                    align: "start",
                    children: [(0, f.jsxs)(c.Z, {
                        size: 16,
                        direction: "vertical",
                        children: [(0, f.jsx)(a.default, {}), (0, f.jsxs)(h, {
                            gutter: 16,
                            children: [(0, f.jsx)(m, {
                                span: 12,
                                children: (0, f.jsx)(o.default, {})
                            }), (0, f.jsx)(m, {
                                span: 12,
                                children: (0, f.jsx)(i.default, {})
                            })]
                        })]
                    }), (0, f.jsxs)(c.Z, {
                        className: p.default.right,
                        size: 16,
                        direction: "vertical",
                        children: [(0, f.jsx)(l.default, {}), (0, f.jsx)(u.default, {}), (0, f.jsx)(s.default, {}), (0, f.jsx)(d.default, {})]
                    })]
                })
            }
        },
        28050: function(e, t, n) {
            n.r(t);
            var r = n(80521),
                c = n.n(r),
                a = n(93989);
            (0, n(52082).Z)({
                setup: function() {
                    c().mock(new RegExp("/api/workplace/overview-content"), (function() {
                        var e = (new Date).getFullYear();
                        return {
                            allContents: "373.5w+",
                            liveContents: "368",
                            increaseComments: "8874",
                            growthRate: "2.8%",
                            chartData: new Array(12).fill(0).map((function(t, n) {
                                return {
                                    date: "".concat(e, "-").concat(n + 1),
                                    count: c().Random.natural(2e4, 75e3)
                                }
                            }))
                        }
                    }));
                    var e = function() {
                            return c().mock({
                                "list|100": [{
                                    "rank|+1": 1,
                                    title: function() {
                                        return c().Random.pick(["\u7ecf\u6d4e\u65e5\u62a5\uff1a\u8d22\u653f\u653f\u7b56\u8981\u7cbe\u51c6\u63d0\u5347\u6548\u80fd", "\u201c\u53cc12\u201d\u9047\u51b7\u6d88\u8d39\u8005\u538c\u5026\u4e86\u7535\u5546\u5e73\u53f0\u7684\u4fc3\u9500\u201c\u5957\u8def\u201d", "\u81f4\u656c\u575a\u5b88\u6218\u201c\u75ab\u201d\u4e00\u7ebf\u7684\u793e\u533a\u5de5\u4f5c\u8005", "\u666e\u9ad8\u8fd8\u662f\u804c\u9ad8\uff1f\u5bb6\u957f\u4eec\u9677\u5165\u9009\u6821\u96be\u9898"])
                                    },
                                    pv: function() {
                                        return 5e5 - 3200 * this.rank
                                    },
                                    increase: "@float(-1, 1)"
                                }]
                            }).list
                        },
                        t = e(),
                        n = e(),
                        r = e();
                    c().mock(new RegExp("/api/workplace/popular-contents"), (function(e) {
                        var c = a.parseUrl(e.url).query,
                            o = c.page,
                            i = void 0 === o ? 1 : o,
                            l = c.pageSize,
                            s = void 0 === l ? 5 : l,
                            u = c.category;
                        return {
                            list: [t, n, r][Number(void 0 === u ? 0 : u)].slice((i - 1) * s, i * s),
                            total: 100
                        }
                    })), c().mock(new RegExp("/api/workplace/content-percentage"), (function() {
                        return [{
                            type: "\u7eaf\u6587\u672c",
                            count: 148564,
                            percent: .16
                        }, {
                            type: "\u56fe\u6587\u7c7b",
                            count: 334271,
                            percent: .36
                        }, {
                            type: "\u89c6\u9891\u7c7b",
                            count: 445695,
                            percent: .48
                        }]
                    })), c().mock(new RegExp("/api/workplace/announcement"), (function() {
                        return [{
                            type: "activity",
                            key: "1",
                            content: "\u5185\u5bb9\u6700\u65b0\u4f18\u60e0\u6d3b\u52a8"
                        }, {
                            type: "info",
                            key: "2",
                            content: "\u65b0\u589e\u5185\u5bb9\u5c1a\u672a\u901a\u8fc7\u5ba1\u6838\uff0c\u8be6\u60c5\u8bf7\u70b9\u51fb\u67e5\u770b\u3002"
                        }, {
                            type: "notice",
                            key: "3",
                            content: "\u5f53\u524d\u4ea7\u54c1\u8bd5\u7528\u671f\u5373\u5c06\u7ed3\u675f\uff0c\u5982\u9700\u7eed\u8d39\u8bf7\u70b9\u51fb\u67e5\u770b\u3002"
                        }, {
                            type: "notice",
                            key: "4",
                            content: "1 \u6708\u65b0\u7cfb\u7edf\u5347\u7ea7\u8ba1\u5212\u901a\u77e5"
                        }, {
                            type: "info",
                            key: "5",
                            content: "\u65b0\u589e\u5185\u5bb9\u5df2\u7ecf\u901a\u8fc7\u5ba1\u6838\uff0c\u8be6\u60c5\u8bf7\u70b9\u51fb\u67e5\u770b\u3002"
                        }]
                    }))
                }
            })
        },
        25798: function(e, t, n) {
            n.r(t);
            var r = n(2867),
                c = n(9759),
                a = n(62245),
                o = n(56327),
                i = n(363),
                l = n(94782),
                s = n(62959),
                u = n(67262),
                d = n(46802),
                p = n(43390),
                f = n.n(p),
                h = n(71419),
                m = n(63662),
                y = n(53496),
                v = n(50844);
            t.default = function() {
                var e = (0, h.Z)(m.default),
                    t = (0, c.useState)(0),
                    n = (0, r.Z)(t, 2),
                    p = n[0],
                    j = n[1],
                    g = (0, c.useState)([]),
                    w = (0, r.Z)(g, 2),
                    b = w[0],
                    x = w[1],
                    k = (0, c.useState)(!0),
                    Z = (0, r.Z)(k, 2),
                    O = Z[0],
                    C = Z[1],
                    P = (0, c.useState)(1),
                    N = (0, r.Z)(P, 2),
                    S = N[0],
                    M = N[1],
                    E = (0, c.useState)(0),
                    D = (0, r.Z)(E, 2),
                    I = D[0],
                    R = D[1],
                    z = (0, c.useCallback)((function() {
                        C(!0), f().get("/api/workplace/popular-contents?page=".concat(S, "&pageSize=5&category=").concat(p)).then((function(e) {
                            x(e.data.list), R(e.data.total)
                        })).finally((function() {
                            C(!1)
                        }))
                    }), [S, p]);
                (0, c.useEffect)((function() {
                    z()
                }), [S, z]);
                var F = [{
                    title: e["workplace.column.rank"],
                    dataIndex: "rank",
                    width: 65
                }, {
                    title: e["workplace.column.title"],
                    dataIndex: "title",
                    render: function(e) {
                        return (0, v.jsx)(a.Z.Paragraph, {
                            style: {
                                margin: 0
                            },
                            ellipsis: !0,
                            children: e
                        })
                    }
                }, {
                    title: e["workplace.column.pv"],
                    dataIndex: "pv",
                    width: 100,
                    render: function(e) {
                        return "".concat(e / 1e3, "k")
                    }
                }, {
                    title: e["workplace.column.increase"],
                    dataIndex: "increase",
                    sorter: function(e, t) {
                        return e.increase - t.increase
                    },
                    width: 110,
                    render: function(e) {
                        return (0, v.jsxs)("span", {
                            children: ["".concat((100 * e).toFixed(2), "%"), (0, v.jsx)("span", {
                                className: y.default.symbol,
                                children: e < 0 ? (0, v.jsx)(u.Z, {
                                    style: {
                                        color: "rgb(var(--green-6))"
                                    }
                                }) : (0, v.jsx)(d.Z, {
                                    style: {
                                        color: "rgb(var(--red-6))"
                                    }
                                })
                            })]
                        })
                    }
                }];
                return (0, v.jsxs)(o.Z, {
                    children: [(0, v.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [(0, v.jsx)(a.Z.Title, {
                            heading: 6,
                            children: e["workplace.popularContents"]
                        }), (0, v.jsx)(i.Z, {
                            children: e["workplace.seeMore"]
                        })]
                    }), (0, v.jsx)(l.Z.Group, {
                        type: "button",
                        value: p,
                        onChange: j,
                        options: [{
                            label: e["workplace.text"],
                            value: 0
                        }, {
                            label: e["workplace.image"],
                            value: 1
                        }, {
                            label: e["workplace.video"],
                            value: 2
                        }],
                        style: {
                            marginBottom: 16
                        }
                    }), (0, v.jsx)(s.Z, {
                        rowKey: "rank",
                        columns: F,
                        data: b,
                        loading: O,
                        tableLayoutFixed: !0,
                        onChange: function(e) {
                            M(e.current)
                        },
                        pagination: {
                            total: I,
                            current: S,
                            pageSize: 5,
                            simple: !0
                        }
                    })]
                })
            }
        },
        74480: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n(9759),
                c = n(45715),
                a = n(56327),
                o = n(62245),
                i = n(363),
                l = n(15375),
                s = n(7896),
                u = n(56666),
                d = n(52152);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h(e, t) {
                var n = (0, r.useContext)(d.P).prefixCls,
                    c = e.spin,
                    a = e.className,
                    o = f(f({
                        ref: t
                    }, e), {}, {
                        className: "".concat(a ? a + " " : "").concat(n, "-icon ").concat(n, "-icon-storage")
                    });
                return c && (o.className = "".concat(o.className, " ").concat(n, "-icon-loading")), delete o.spin, delete o.isIcon, r.createElement("svg", (0, s.Z)({
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    viewBox: "0 0 48 48",
                    width: "1em",
                    height: "1em"
                }, o), r.createElement("path", {
                    d: "M7 18h34v12H7V18ZM40 6H8a1 1 0 0 0-1 1v11h34V7a1 1 0 0 0-1-1ZM7 30h34v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V30Z"
                }), r.createElement("path", {
                    d: "M13.02 36H13v.02h.02V36Z"
                }), r.createElement("path", {
                    fill: "currentColor",
                    stroke: "none",
                    d: "M13 12v-2h-2v2h2Zm.02 0h2v-2h-2v2Zm0 .02v2h2v-2h-2Zm-.02 0h-2v2h2v-2ZM13 14h.02v-4H13v4Zm-1.98-2v.02h4V12h-4Zm2-1.98H13v4h.02v-4Zm1.98 2V12h-4v.02h4Z"
                }), r.createElement("path", {
                    d: "M13.02 24H13v.02h.02V24Z"
                }))
            }
            var m = r.forwardRef(h);
            m.defaultProps = {
                isIcon: !0
            }, m.displayName = "IconStorage";
            var y = m;

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function g(e, t) {
                var n = (0, r.useContext)(d.P).prefixCls,
                    c = e.spin,
                    a = e.className,
                    o = j(j({
                        ref: t
                    }, e), {}, {
                        className: "".concat(a ? a + " " : "").concat(n, "-icon ").concat(n, "-icon-mobile")
                    });
                return c && (o.className = "".concat(o.className, " ").concat(n, "-icon-loading")), delete o.spin, delete o.isIcon, r.createElement("svg", (0, s.Z)({
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    viewBox: "0 0 48 48",
                    width: "1em",
                    height: "1em"
                }, o), r.createElement("path", {
                    d: "M17 14h14m6.125 28h-26.25C9.839 42 9 41.105 9 40V8c0-1.105.84-2 1.875-2h26.25C38.16 6 39 6.895 39 8v32c0 1.105-.84 2-1.875 2ZM22 33a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
                }), r.createElement("circle", {
                    cx: "24",
                    cy: "33",
                    r: "2",
                    fill: "currentColor",
                    stroke: "none"
                }))
            }
            var w = r.forwardRef(g);
            w.defaultProps = {
                isIcon: !0
            }, w.displayName = "IconMobile";
            var b = w;

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Z(e, t) {
                var n = (0, r.useContext)(d.P).prefixCls,
                    c = e.spin,
                    a = e.className,
                    o = k(k({
                        ref: t
                    }, e), {}, {
                        className: "".concat(a ? a + " " : "").concat(n, "-icon ").concat(n, "-icon-fire")
                    });
                return c && (o.className = "".concat(o.className, " ").concat(n, "-icon-loading")), delete o.spin, delete o.isIcon, r.createElement("svg", (0, s.Z)({
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "4",
                    viewBox: "0 0 48 48",
                    width: "1em",
                    height: "1em"
                }, o), r.createElement("path", {
                    d: "M17.577 27.477C20.022 22.579 17.041 12.98 24.546 6c0 0-1.156 15.55 5.36 17.181 2.145.537 2.68-5.369 4.289-8.59 0 0 .536 4.832 2.68 8.59 3.217 7.517-1 14.117-5.896 17.182-4.289 2.684-14.587 2.807-19.835-5.37-4.824-7.516 0-15.57 0-15.57s4.289 12.35 6.433 8.054Z"
                }))
            }
            var O = r.forwardRef(Z);
            O.defaultProps = {
                isIcon: !0
            }, O.displayName = "IconFire";
            var C = O,
                P = n(35814),
                N = n(17986),
                S = n(71419),
                M = n(63662),
                E = n(21291),
                D = n(50844);
            var I = function() {
                var e = (0, S.Z)(M.default),
                    t = [{
                        title: e["workplace.contentMgmt"],
                        key: "Content Management",
                        icon: (0, D.jsx)(P.Z, {})
                    }, {
                        title: e["workplace.contentStatistic"],
                        key: "Content Statistic",
                        icon: (0, D.jsx)(y, {})
                    }, {
                        title: e["workplace.advancedMgmt"],
                        key: "Advanced Management",
                        icon: (0, D.jsx)(N.Z, {})
                    }, {
                        title: e["workplace.onlinePromotion"],
                        key: "Online Promotion",
                        icon: (0, D.jsx)(b, {})
                    }, {
                        title: e["workplace.marketing"],
                        key: "Marketing",
                        icon: (0, D.jsx)(C, {})
                    }],
                    n = [{
                        title: e["workplace.contentStatistic"],
                        key: "Content Statistic",
                        icon: (0, D.jsx)(y, {})
                    }, {
                        title: e["workplace.contentMgmt"],
                        key: "Content Management",
                        icon: (0, D.jsx)(P.Z, {})
                    }, {
                        title: e["workplace.advancedMgmt"],
                        key: "Advanced Management",
                        icon: (0, D.jsx)(N.Z, {})
                    }];

                function r(e) {
                    c.Z.info({
                        content: (0, D.jsxs)("span", {
                            children: ["You clicked ", (0, D.jsx)("b", {
                                children: e
                            })]
                        })
                    })
                }
                return (0, D.jsxs)(a.Z, {
                    children: [(0, D.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [(0, D.jsx)(o.Z.Title, {
                            heading: 6,
                            children: e["workplace.shortcuts"]
                        }), (0, D.jsx)(i.Z, {
                            children: e["workplace.seeMore"]
                        })]
                    }), (0, D.jsx)("div", {
                        className: E.default.shortcuts,
                        children: t.map((function(e) {
                            return (0, D.jsxs)("div", {
                                className: E.default.item,
                                onClick: function() {
                                    return r(e.key)
                                },
                                children: [(0, D.jsx)("div", {
                                    className: E.default.icon,
                                    children: e.icon
                                }), (0, D.jsx)("div", {
                                    className: E.default.title,
                                    children: e.title
                                })]
                            }, e.key)
                        }))
                    }), (0, D.jsx)(l.Z, {}), (0, D.jsx)("div", {
                        className: E.default.recent,
                        children: e["workplace.recent"]
                    }), (0, D.jsx)("div", {
                        className: E.default.shortcuts,
                        children: n.map((function(e) {
                            return (0, D.jsxs)("div", {
                                className: E.default.item,
                                onClick: function() {
                                    return r(e.key)
                                },
                                children: [(0, D.jsx)("div", {
                                    className: E.default.icon,
                                    children: e.icon
                                }), (0, D.jsx)("div", {
                                    className: E.default.title,
                                    children: e.title
                                })]
                            }, e.key)
                        }))
                    })]
                })
            }
        },
        83938: function(e, t, n) {
            n.r(t), t.default = {
                item: "item--YuvG1",
                link: "link--Tuzcr"
            }
        },
        86582: function(e, t, n) {
            n.r(t), t.default = {
                docs: "docs--xoyOv",
                link: "link--WU5HR"
            }
        },
        35849: function(e, t, n) {
            n.r(t), t.default = {
                banner: "banner--UzyO3",
                content: "content--OyXPd",
                right: "right--HLZb7",
                panel: "panel--cfmJn"
            }
        },
        53496: function(e, t, n) {
            n.r(t), t.default = {
                symbol: "symbol--Kwvee"
            }
        },
        21291: function(e, t, n) {
            n.r(t), t.default = {
                shortcuts: "shortcuts--wBTsN",
                item: "item--C_DwQ",
                icon: "icon--NdKGr",
                title: "title--_EGfA",
                recent: "recent--ZKotA"
            }
        }
    }
]);
//# sourceMappingURL=7326.c2ff7d12.chunk.js.map