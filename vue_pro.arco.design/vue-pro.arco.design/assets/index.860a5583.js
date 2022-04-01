var U = Object.defineProperty,
    H = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var I = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty,
    Q = Object.prototype.propertyIsEnumerable;
var z = (n, s, o) => s in n ? U(n, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : n[s] = o,
    P = (n, s) => {
        for (var o in s || (s = {})) K.call(s, o) && z(n, o, s[o]);
        if (I)
            for (var o of I(s)) Q.call(s, o) && z(n, o, s[o]);
        return n
    },
    N = (n, s) => H(n, J(s));
import {
    d as v,
    c as R,
    aE as a,
    A as g,
    aC as y,
    aF as t,
    aG as e,
    aJ as _,
    aK as u,
    u as B,
    E as m,
    aQ as Y,
    aR as X,
    e as k,
    aD as Z,
    B as C,
    aH as F,
    b2 as W,
    aI as E
} from "./arco.fe701834.js";
import {
    _ as $,
    b as ee,
    c as j,
    a as L
} from "./index.8269c28a.js";
import {
    L as M
} from "./chart.e3d53dbc.js";
import {
    u as O
} from "./chart-option.7c10627a.js";
import "./vue.ebc6a539.js";
const te = v({
    setup(n) {
        const s = ee(),
            o = R(() => ({
                name: s.name
            }));
        return (l, c) => {
            const i = a("a-typography-title"),
                f = a("a-col"),
                r = a("a-divider");
            return g(), y(f, {
                class: "banner"
            }, {
                default: t(() => [e(f, {
                    span: 8
                }, {
                    default: t(() => [e(i, {
                        heading: 5,
                        style: {
                            "margin-top": "0"
                        }
                    }, {
                        default: t(() => [_(u(l.$t("workplace.welcome")) + " " + u(B(o).name), 1)]),
                        _: 1
                    })]),
                    _: 1
                }), e(r, {
                    class: "panel-border"
                })]),
                _: 1
            })
        }
    }
});
var ae = $(te, [
    ["__scopeId", "data-v-3ddf61bf"]
]);
const oe = {},
    A = n => (Y("data-v-5c47a557"), n = n(), X(), n),
    ne = A(() => m("img", {
        alt: "avatar",
        src: "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image"
    }, null, -1)),
    le = _(" W+ "),
    se = {
        class: "unit"
    },
    ce = A(() => m("img", {
        alt: "avatar",
        src: "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image"
    }, null, -1)),
    re = {
        class: "unit"
    },
    ie = A(() => m("img", {
        alt: "avatar",
        src: "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image"
    }, null, -1)),
    ue = {
        class: "unit"
    },
    pe = A(() => m("img", {
        alt: "avatar",
        src: "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image"
    }, null, -1)),
    de = _(" % ");

function _e(n, s) {
    const o = a("a-avatar"),
        l = a("a-statistic"),
        c = a("a-space"),
        i = a("a-grid-item"),
        f = a("icon-caret-up"),
        r = a("a-divider"),
        h = a("a-grid");
    return g(), y(h, {
        cols: 24,
        "row-gap": 16,
        class: "panel"
    }, {
        default: t(() => [e(i, {
            class: "panel-col",
            span: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6
            }
        }, {
            default: t(() => [e(c, null, {
                default: t(() => [e(o, {
                    size: 54,
                    class: "col-avatar"
                }, {
                    default: t(() => [ne]),
                    _: 1
                }), e(l, {
                    title: n.$t("workplace.onlineContent"),
                    value: 373.5,
                    precision: 1,
                    "value-from": 0,
                    animation: "",
                    "show-group-separator": ""
                }, {
                    suffix: t(() => [le, m("span", se, u(n.$t("workplace.pecs")), 1)]),
                    _: 1
                }, 8, ["title", "value"])]),
                _: 1
            })]),
            _: 1
        }), e(i, {
            class: "panel-col",
            span: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6
            }
        }, {
            default: t(() => [e(c, null, {
                default: t(() => [e(o, {
                    size: 54,
                    class: "col-avatar"
                }, {
                    default: t(() => [ce]),
                    _: 1
                }), e(l, {
                    title: n.$t("workplace.putIn"),
                    value: 368,
                    "value-from": 0,
                    animation: "",
                    "show-group-separator": ""
                }, {
                    suffix: t(() => [m("span", re, u(n.$t("workplace.pecs")), 1)]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            })]),
            _: 1
        }), e(i, {
            class: "panel-col",
            span: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6
            }
        }, {
            default: t(() => [e(c, null, {
                default: t(() => [e(o, {
                    size: 54,
                    class: "col-avatar"
                }, {
                    default: t(() => [ie]),
                    _: 1
                }), e(l, {
                    title: n.$t("workplace.newDay"),
                    value: 8874,
                    "value-from": 0,
                    animation: "",
                    "show-group-separator": ""
                }, {
                    suffix: t(() => [m("span", ue, u(n.$t("workplace.pecs")), 1)]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            })]),
            _: 1
        }), e(i, {
            class: "panel-col",
            span: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6
            },
            style: {
                "border-right": "none"
            }
        }, {
            default: t(() => [e(c, null, {
                default: t(() => [e(o, {
                    size: 54,
                    class: "col-avatar"
                }, {
                    default: t(() => [pe]),
                    _: 1
                }), e(l, {
                    title: n.$t("workplace.newFromYesterday"),
                    value: 2.8,
                    precision: 1,
                    "value-from": 0,
                    animation: ""
                }, {
                    suffix: t(() => [de, e(f, {
                        class: "up-icon"
                    })]),
                    _: 1
                }, 8, ["title", "value"])]),
                _: 1
            })]),
            _: 1
        }), e(i, {
            span: 24
        }, {
            default: t(() => [e(r, {
                class: "panel-border"
            })]),
            _: 1
        })]),
        _: 1
    })
}
var me = $(oe, [
    ["render", _e],
    ["__scopeId", "data-v-5c47a557"]
]);

function fe() {
    return j.get("/api/content-data")
}

function ge(n) {
    return j.get("/api/popular/list", {
        params: n
    })
}
const he = v({
    setup(n) {
        function s(p) {
            return N(P({
                type: "text",
                bottom: "8"
            }, p), {
                style: {
                    text: "",
                    textAlign: "center",
                    fill: "#4E5969",
                    fontSize: 12
                }
            })
        }
        const {
            loading: o,
            setLoading: l
        } = L(!0), c = k([]), i = k([]), f = k([s({
            left: "2.6%"
        }), s({
            right: 0
        })]), {
            chartOption: r
        } = O(() => ({
            grid: {
                left: "2.6%",
                right: "0",
                top: "10",
                bottom: "30"
            },
            xAxis: {
                type: "category",
                offset: 2,
                data: c.value,
                boundaryGap: !1,
                axisLabel: {
                    color: "#4E5969",
                    formatter(p, d) {
                        return d === 0 || d === c.value.length - 1 ? "" : `${p}`
                    }
                },
                axisLine: {
                    show: !1
                },
                axisTick: {
                    show: !1
                },
                splitLine: {
                    show: !0,
                    interval: p => !(p === 0 || p === c.value.length - 1),
                    lineStyle: {
                        color: "#E5E8EF"
                    }
                },
                axisPointer: {
                    show: !0,
                    lineStyle: {
                        color: "#23ADFF",
                        width: 2
                    }
                }
            },
            yAxis: {
                type: "value",
                axisLine: {
                    show: !1
                },
                axisLabel: {
                    formatter(p, d) {
                        return d === 0 ? p : `${p}k`
                    }
                },
                splitLine: {
                    show: !0,
                    lineStyle: {
                        type: "dashed",
                        color: "#E5E8EF"
                    }
                }
            },
            tooltip: {
                trigger: "axis",
                formatter(p) {
                    const [d] = p;
                    return `<div>
            <p class="tooltip-title">${d.axisValueLabel}</p>
            <div class="content-panel"><span>\u603B\u5185\u5BB9\u91CF</span><span class="tooltip-value">${(Number(d.value)*1e4).toLocaleString()}</span></div>
          </div>`
                },
                className: "echarts-tooltip-diy"
            },
            graphic: {
                elements: f.value
            },
            series: [{
                data: i.value,
                type: "line",
                smooth: !0,
                symbolSize: 12,
                emphasis: {
                    focus: "series",
                    itemStyle: {
                        borderWidth: 2
                    }
                },
                lineStyle: {
                    width: 3,
                    color: new M(0, 0, 1, 0, [{
                        offset: 0,
                        color: "rgba(30, 231, 255, 1)"
                    }, {
                        offset: .5,
                        color: "rgba(36, 154, 255, 1)"
                    }, {
                        offset: 1,
                        color: "rgba(111, 66, 251, 1)"
                    }])
                },
                showSymbol: !1,
                areaStyle: {
                    opacity: .8,
                    color: new M(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(17, 126, 255, 0.16)"
                    }, {
                        offset: 1,
                        color: "rgba(17, 128, 255, 0)"
                    }])
                }
            }]
        }));
        return (async () => {
            l(!0);
            try {
                const {
                    data: p
                } = await fe();
                p.forEach((d, w) => {
                    c.value.push(d.x), i.value.push(d.y), w === 0 && (f.value[0].style.text = d.x), w === p.length - 1 && (f.value[1].style.text = d.x)
                })
            } catch {} finally {
                l(!1)
            }
        })(), (p, d) => {
            const w = a("a-link"),
                x = a("Chart"),
                S = a("a-card"),
                D = a("a-spin");
            return g(), y(D, {
                loading: B(o),
                style: {
                    width: "100%"
                }
            }, {
                default: t(() => [e(S, {
                    class: "general-card",
                    "header-style": {
                        paddingBottom: 0
                    },
                    "body-style": {
                        paddingTop: "20px"
                    },
                    title: p.$t("workplace.contentData")
                }, {
                    extra: t(() => [e(w, null, {
                        default: t(() => [_(u(p.$t("workplace.viewMore")), 1)]),
                        _: 1
                    })]),
                    default: t(() => [e(x, {
                        height: "289px",
                        option: B(r)
                    }, null, 8, ["option"])]),
                    _: 1
                }, 8, ["title"])]),
                _: 1
            }, 8, ["loading"])
        }
    }
});
const ye = {
        class: "increases-cell"
    },
    ve = v({
        setup(n) {
            const s = k("text"),
                {
                    loading: o,
                    setLoading: l
                } = L(),
                c = k(),
                i = async r => {
                    try {
                        l(!0);
                        const {
                            data: h
                        } = await ge({
                            type: r
                        });
                        c.value = h
                    } catch {} finally {
                        l(!1)
                    }
                },
                f = r => {
                    i(r)
                };
            return i("text"), (r, h) => {
                const p = a("a-link"),
                    d = a("a-radio"),
                    w = a("a-radio-group"),
                    x = a("a-table-column"),
                    S = a("a-typography-paragraph"),
                    D = a("icon-caret-up"),
                    T = a("a-table"),
                    V = a("a-space"),
                    q = a("a-card"),
                    G = a("a-spin");
                return g(), y(G, {
                    loading: B(o),
                    style: {
                        width: "100%"
                    }
                }, {
                    default: t(() => [e(q, {
                        class: "general-card",
                        "header-style": {
                            paddingBottom: "0"
                        },
                        "body-style": {
                            padding: "17px 20px 21px 20px"
                        }
                    }, {
                        title: t(() => [_(u(r.$t("workplace.popularContent")), 1)]),
                        extra: t(() => [e(p, null, {
                            default: t(() => [_(u(r.$t("workplace.viewMore")), 1)]),
                            _: 1
                        })]),
                        default: t(() => [e(V, {
                            direction: "vertical",
                            size: 10,
                            fill: ""
                        }, {
                            default: t(() => [e(w, {
                                "model-value": s.value,
                                "onUpdate:model-value": h[0] || (h[0] = b => s.value = b),
                                type: "button",
                                onChange: f
                            }, {
                                default: t(() => [e(d, {
                                    value: "text"
                                }, {
                                    default: t(() => [_(u(r.$t("workplace.popularContent.text")), 1)]),
                                    _: 1
                                }), e(d, {
                                    value: "image"
                                }, {
                                    default: t(() => [_(u(r.$t("workplace.popularContent.image")), 1)]),
                                    _: 1
                                }), e(d, {
                                    value: "video"
                                }, {
                                    default: t(() => [_(u(r.$t("workplace.popularContent.video")), 1)]),
                                    _: 1
                                })]),
                                _: 1
                            }, 8, ["model-value"]), e(T, {
                                data: c.value,
                                pagination: !1,
                                bordered: !1,
                                scroll: {
                                    x: "100%",
                                    y: "264px"
                                }
                            }, {
                                columns: t(() => [e(x, {
                                    title: "\u6392\u540D",
                                    "data-index": "key"
                                }), e(x, {
                                    title: "\u5185\u5BB9\u6807\u9898",
                                    "data-index": "title"
                                }, {
                                    cell: t(({
                                        record: b
                                    }) => [e(S, {
                                        ellipsis: {
                                            rows: 1
                                        }
                                    }, {
                                        default: t(() => [_(u(b.title), 1)]),
                                        _: 2
                                    }, 1024)]),
                                    _: 1
                                }), e(x, {
                                    title: "\u70B9\u51FB\u91CF",
                                    "data-index": "clickNumber"
                                }), e(x, {
                                    title: "\u65E5\u6DA8\u5E45",
                                    "data-index": "increases",
                                    sortable: {
                                        sortDirections: ["ascend", "descend"]
                                    }
                                }, {
                                    cell: t(({
                                        record: b
                                    }) => [m("div", ye, [m("span", null, u(b.increases) + "%", 1), b.increases !== 0 ? (g(), y(D, {
                                        key: 0,
                                        style: {
                                            color: "#f53f3f",
                                            "font-size": "8px"
                                        }
                                    })) : Z("", !0)])]),
                                    _: 1
                                })]),
                                _: 1
                            }, 8, ["data"])]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["loading"])
            }
        }
    });
var we = $(ve, [
    ["__scopeId", "data-v-776ab572"]
]);
const xe = v({
        setup(n) {
            const {
                loading: s
            } = L(), {
                chartOption: o
            } = O(l => ({
                legend: {
                    left: "center",
                    data: ["\u7EAF\u6587\u672C", "\u56FE\u6587\u7C7B", "\u89C6\u9891\u7C7B"],
                    bottom: 0,
                    icon: "circle",
                    itemWidth: 8,
                    textStyle: {
                        color: l ? "rgba(255, 255, 255, 0.7)" : "#4E5969"
                    },
                    itemStyle: {
                        borderWidth: 0
                    }
                },
                tooltip: {
                    show: !0,
                    trigger: "item"
                },
                graphic: {
                    elements: [{
                        type: "text",
                        left: "center",
                        top: "40%",
                        style: {
                            text: "\u5185\u5BB9\u91CF",
                            textAlign: "center",
                            fill: l ? "#ffffffb3" : "#4E5969",
                            fontSize: 14
                        }
                    }, {
                        type: "text",
                        left: "center",
                        top: "50%",
                        style: {
                            text: "928,531",
                            textAlign: "center",
                            fill: l ? "#ffffffb3" : "#1D2129",
                            fontSize: 16,
                            fontWeight: 500
                        }
                    }]
                },
                series: [{
                    type: "pie",
                    radius: ["50%", "70%"],
                    center: ["50%", "50%"],
                    label: {
                        formatter: "{d}%",
                        fontSize: 14,
                        color: l ? "rgba(255, 255, 255, 0.7)" : "#4E5969"
                    },
                    itemStyle: {
                        borderColor: l ? "#232324" : "#fff",
                        borderWidth: 1
                    },
                    data: [{
                        value: [148564],
                        name: "\u7EAF\u6587\u672C",
                        itemStyle: {
                            color: l ? "#3D72F6" : "#249EFF"
                        }
                    }, {
                        value: [334271],
                        name: "\u56FE\u6587\u7C7B",
                        itemStyle: {
                            color: l ? "#A079DC" : "#313CA9"
                        }
                    }, {
                        value: [445694],
                        name: "\u89C6\u9891\u7C7B",
                        itemStyle: {
                            color: l ? "#6CAAF5" : "#21CCFF"
                        }
                    }]
                }]
            }));
            return (l, c) => {
                const i = a("Chart"),
                    f = a("a-card"),
                    r = a("a-spin");
                return g(), y(r, {
                    loading: B(s),
                    style: {
                        width: "100%"
                    }
                }, {
                    default: t(() => [e(f, {
                        class: "general-card",
                        "header-style": {
                            paddingBottom: "0"
                        },
                        "body-style": {
                            padding: "20px"
                        }
                    }, {
                        title: t(() => [_(u(l.$t("workplace.categoriesPercent")), 1)]),
                        default: t(() => [e(i, {
                            height: "310px",
                            option: B(o)
                        }, null, 8, ["option"])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["loading"])
            }
        }
    }),
    be = {
        style: {
            "margin-bottom": "-1rem"
        }
    },
    Be = {
        class: "icon"
    },
    $e = v({
        setup(n) {
            const s = [{
                text: "workplace.contentManagement",
                icon: "icon-storage"
            }, {
                text: "workplace.contentStatistical",
                icon: "icon-file"
            }, {
                text: "workplace.advanced",
                icon: "icon-settings"
            }];
            return (o, l) => {
                const c = a("a-typography-paragraph"),
                    i = a("a-col"),
                    f = a("a-row"),
                    r = a("a-card");
                return g(), y(r, {
                    class: "general-card",
                    title: o.$t("workplace.recently.visited"),
                    "header-style": {
                        paddingBottom: "0"
                    },
                    "body-style": {
                        paddingTop: "26px"
                    }
                }, {
                    default: t(() => [m("div", be, [e(f, {
                        gutter: 8
                    }, {
                        default: t(() => [(g(), C(E, null, F(s, h => e(i, {
                            key: h.text,
                            span: 8,
                            class: "wrapper"
                        }, {
                            default: t(() => [m("div", Be, [(g(), y(W(h.icon)))]), e(c, {
                                class: "text"
                            }, {
                                default: t(() => [_(u(o.$t(h.text)), 1)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024)), 64))]),
                        _: 1
                    })])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    }),
    ke = {
        class: "icon"
    },
    Ce = v({
        setup(n) {
            const s = [{
                text: "workplace.contentManagement",
                icon: "icon-file"
            }, {
                text: "workplace.contentStatistical",
                icon: "icon-storage"
            }, {
                text: "workplace.advanced",
                icon: "icon-settings"
            }, {
                text: "workplace.onlinePromotion",
                icon: "icon-mobile"
            }, {
                text: "workplace.contentPutIn",
                icon: "icon-fire"
            }];
            return (o, l) => {
                const c = a("a-link"),
                    i = a("a-typography-paragraph"),
                    f = a("a-col"),
                    r = a("a-row"),
                    h = a("a-divider"),
                    p = a("a-card");
                return g(), y(p, {
                    class: "general-card",
                    title: o.$t("workplace.quick.operation"),
                    "header-style": {
                        paddingBottom: "0"
                    },
                    "body-style": {
                        padding: "24px 20px 0 20px"
                    }
                }, {
                    extra: t(() => [e(c, null, {
                        default: t(() => [_(u(o.$t("workplace.quickOperation.setup")), 1)]),
                        _: 1
                    })]),
                    default: t(() => [e(r, {
                        gutter: 8
                    }, {
                        default: t(() => [(g(), C(E, null, F(s, d => e(f, {
                            key: d,
                            span: 8,
                            class: "wrapper"
                        }, {
                            default: t(() => [m("div", ke, [(g(), y(W(d.icon)))]), e(i, {
                                class: "text"
                            }, {
                                default: t(() => [_(u(o.$t(d.text)), 1)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1024)), 64))]),
                        _: 1
                    }), e(h, {
                        class: "split-line",
                        style: {
                            margin: "0"
                        }
                    })]),
                    _: 1
                }, 8, ["title"])
            }
        }
    });
const Fe = {
        class: "item-content"
    },
    Ee = v({
        setup(n) {
            const s = [{
                type: "orangered",
                label: "\u6D3B\u52A8",
                content: "\u5185\u5BB9\u6700\u65B0\u4F18\u60E0\u6D3B\u52A8"
            }, {
                type: "cyan",
                label: "\u6D88\u606F",
                content: "\u65B0\u589E\u5185\u5BB9\u5C1A\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"
            }, {
                type: "blue",
                label: "\u901A\u77E5",
                content: "\u5F53\u524D\u4EA7\u54C1\u8BD5\u7528\u671F\u5373\u5C06\u7ED3\u675F\uFF0C\u5982\u9700\u7EED\u8D39\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"
            }, {
                type: "blue",
                label: "\u901A\u77E5",
                content: "1\u6708\u65B0\u7CFB\u7EDF\u5347\u7EA7\u8BA1\u5212\u901A\u77E5"
            }, {
                type: "cyan",
                label: "\u6D88\u606F",
                content: "\u65B0\u589E\u5185\u5BB9\u5DF2\u7ECF\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"
            }];
            return (o, l) => {
                const c = a("a-link"),
                    i = a("a-tag"),
                    f = a("a-card");
                return g(), y(f, {
                    class: "general-card",
                    title: o.$t("workplace.announcement"),
                    "header-style": {
                        paddingBottom: "0"
                    },
                    "body-style": {
                        padding: "15px 20px 13px 20px"
                    }
                }, {
                    extra: t(() => [e(c, null, {
                        default: t(() => [_(u(o.$t("workplace.viewMore")), 1)]),
                        _: 1
                    })]),
                    default: t(() => [m("div", null, [(g(), C(E, null, F(s, (r, h) => m("div", {
                        key: h,
                        class: "item"
                    }, [e(i, {
                        color: r.type,
                        size: "small"
                    }, {
                        default: t(() => [_(u(r.label), 1)]),
                        _: 2
                    }, 1032, ["color"]), m("span", Fe, u(r.content), 1)])), 64))])]),
                    _: 1
                }, 8, ["title"])
            }
        }
    });
var Ae = $(Ee, [
    ["__scopeId", "data-v-82d4c1fc"]
]);
const Se = ["src"],
    De = v({
        setup(n) {
            const s = ["//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/5cc3cd1d994b7ef9db6a1f619a22addd.jpg~tplv-49unhts6dw-image.image", "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/f256cbcc287139e191fecea9d255a1f0.jpg~tplv-49unhts6dw-image.image", "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/b557ff0cd44146a2e471b477af2f30d0.jpg~tplv-49unhts6dw-image.image", "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/665106f4bbd2a2df96eaf7aec52f7bc3.jpg~tplv-49unhts6dw-image.image", "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea095a2c9c72b5d8f2f2818040db736d.jpg~tplv-49unhts6dw-image.image"];
            return (o, l) => {
                const c = a("a-carousel-item"),
                    i = a("a-carousel");
                return g(), y(i, {
                    "indicator-type": "slider",
                    "show-arrow": "hover",
                    "auto-play": "",
                    style: {
                        width: "100%",
                        height: "170px",
                        "border-radius": "4px",
                        overflow: "hidden"
                    }
                }, {
                    default: t(() => [(g(), C(E, null, F(s, (f, r) => e(c, {
                        key: r
                    }, {
                        default: t(() => [m("div", null, [m("img", {
                            src: f,
                            style: {
                                width: "100%"
                            }
                        }, null, 8, Se)])]),
                        _: 2
                    }, 1024)), 64))]),
                    _: 1
                })
            }
        }
    });
const Le = {};

function Ie(n, s) {
    const o = a("a-link"),
        l = a("a-col"),
        c = a("a-row"),
        i = a("a-card");
    return g(), y(i, {
        class: "general-card",
        title: n.$t("workplace.docs"),
        "header-style": {
            paddingBottom: 0
        },
        "body-style": {
            paddingTop: 0
        },
        style: {
            height: "160px"
        }
    }, {
        extra: t(() => [e(o, null, {
            default: t(() => [_(u(n.$t("workplace.viewMore")), 1)]),
            _: 1
        })]),
        default: t(() => [e(c, null, {
            default: t(() => [e(l, {
                span: 12
            }, {
                default: t(() => [e(o, null, {
                    default: t(() => [_(u(n.$t("workplace.docs.productOverview")), 1)]),
                    _: 1
                })]),
                _: 1
            }), e(l, {
                span: 12
            }, {
                default: t(() => [e(o, null, {
                    default: t(() => [_(u(n.$t("workplace.docs.userGuide")), 1)]),
                    _: 1
                })]),
                _: 1
            }), e(l, {
                span: 12
            }, {
                default: t(() => [e(o, null, {
                    default: t(() => [_(u(n.$t("workplace.docs.workflow")), 1)]),
                    _: 1
                })]),
                _: 1
            }), e(l, {
                span: 12
            }, {
                default: t(() => [e(o, null, {
                    default: t(() => [_(u(n.$t("workplace.docs.interfaceDocs")), 1)]),
                    _: 1
                })]),
                _: 1
            })]),
            _: 1
        })]),
        _: 1
    }, 8, ["title"])
}
var ze = $(Le, [
    ["render", Ie],
    ["__scopeId", "data-v-0e308fb3"]
]);
const Pe = {
        class: "container"
    },
    Ne = {
        class: "left-side"
    },
    Me = {
        class: "panel"
    },
    We = {
        class: "right-side"
    },
    je = {
        class: "panel moduler-wrap"
    },
    Oe = v({
        setup(n) {
            return (s, o) => {
                const l = a("a-grid-item"),
                    c = a("a-grid");
                return g(), C("div", Pe, [m("div", Ne, [m("div", Me, [e(ae), e(me), e(he)]), e(c, {
                    cols: 24,
                    "col-gap": 16,
                    "row-gap": 16,
                    style: {
                        "margin-top": "16px"
                    }
                }, {
                    default: t(() => [e(l, {
                        span: {
                            xs: 24,
                            sm: 24,
                            md: 24,
                            lg: 12,
                            xl: 12,
                            xxl: 12
                        }
                    }, {
                        default: t(() => [e(we)]),
                        _: 1
                    }), e(l, {
                        span: {
                            xs: 24,
                            sm: 24,
                            md: 24,
                            lg: 12,
                            xl: 12,
                            xxl: 12
                        }
                    }, {
                        default: t(() => [e(xe)]),
                        _: 1
                    })]),
                    _: 1
                })]), m("div", We, [e(c, {
                    cols: 24,
                    "row-gap": 16
                }, {
                    default: t(() => [e(l, {
                        span: 24
                    }, {
                        default: t(() => [m("div", je, [e(Ce), e($e)])]),
                        _: 1
                    }), e(l, {
                        class: "panel",
                        span: 24
                    }, {
                        default: t(() => [e(De)]),
                        _: 1
                    }), e(l, {
                        class: "panel",
                        span: 24
                    }, {
                        default: t(() => [e(Ae)]),
                        _: 1
                    }), e(l, {
                        class: "panel",
                        span: 24
                    }, {
                        default: t(() => [e(ze)]),
                        _: 1
                    })]),
                    _: 1
                })])])
            }
        }
    });
var Je = $(Oe, [
    ["__scopeId", "data-v-0bd36d3e"]
]);
export {
    Je as
    default
};