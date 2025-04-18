/*!
   JW Player version 8.26.0
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.0/notice.txt
*/
(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([
    [681], {
        8377: function(t, e, i) {
            "use strict";

            function n(t, e) {
                var i = t.kind || "cc";
                return t.default || t.defaulttrack ? "default" : t._id || t.file || i + e
            }

            function r(t, e) {
                var i = t.label || t.name || t.language;
                return i || (i = "Unknown CC", (e += 1) > 1 && (i += " [" + e + "]")), {
                    label: i,
                    unknownCount: e
                }
            }
            i.d(e, {
                M: function() {
                    return n
                },
                _: function() {
                    return r
                }
            })
        },
        6103: function(t, e, i) {
            "use strict";
            i.d(e, {
                V: function() {
                    return h
                },
                x: function() {
                    return d
                }
            });
            var n = i(7477),
                r = i(2894),
                o = i(6886),
                a = i(7941),
                s = i(7387),
                l = i(2957),
                c = i(4446);

            function u(t) {
                throw new c.rG(null, t)
            }

            function d(t, e, n) {
                t.xhr = (0, o.h)(t.file, (function(o) {
                    ! function(t, e, n, o) {
                        var d, h, g = t.responseXML ? t.responseXML.firstChild : null;
                        if (g)
                            for ("xml" === (0, a.r1)(g) && (g = g.nextSibling); g && g.nodeType === g.COMMENT_NODE;) g = g.nextSibling;
                        try {
                            if (g && "tt" === (0, a.r1)(g)) {
                                if (!t.responseXML) throw new Error("Empty XML response");
                                d = function(t) {
                                    t || u(306007);
                                    var e = [],
                                        i = t.getElementsByTagName("p"),
                                        n = 30,
                                        r = t.getElementsByTagName("tt");
                                    if (r && r[0]) {
                                        var o = parseFloat(r[0].getAttribute("ttp:frameRate") || "");
                                        isNaN(o) || (n = o)
                                    }
                                    i || u(306005), i.length || (i = t.getElementsByTagName("tt:p")).length || (i = t.getElementsByTagName("tts:p"));
                                    for (var a = 0; a < i.length; a++) {
                                        for (var s = i[a], c = s.getElementsByTagName("br"), d = 0; d < c.length; d++) {
                                            var h = c[d];
                                            h && h.parentNode && h.parentNode.replaceChild(t.createTextNode("\r\n"), h)
                                        }
                                        var f = s.innerHTML || s.textContent || s.text || "",
                                            g = (0, l.fy)(f).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                        if (g) {
                                            var p = s.getAttribute("begin") || "",
                                                m = s.getAttribute("dur") || "",
                                                v = s.getAttribute("end") || "",
                                                w = {
                                                    begin: (0, l.m9)(p, n),
                                                    text: g
                                                };
                                            v ? w.end = (0, l.m9)(v, n) : m && (w.end = (w.begin || 0) + (0, l.m9)(m, n)), e.push(w)
                                        }
                                    }
                                    return e.length || u(306005), e
                                }(t.responseXML), h = f(d), delete e.xhr, n(h)
                            } else {
                                var p = t.responseText;
                                p.indexOf("WEBVTT") >= 0 ? i.e(347).then(function(t) {
                                    return i(2776).default
                                }.bind(null, i)).catch((0, r.Jt)(301131)).then((function(t) {
                                    var i = new t(window);
                                    h = [], i.oncue = function(t) {
                                        h.push(t)
                                    }, i.onflush = function() {
                                        delete e.xhr, n(h)
                                    }, i.parse(p)
                                })).catch((function(t) {
                                    delete e.xhr, o((0, c.Mm)(null, c.Y7, t))
                                })) : (d = (0, s.Z)(p), h = f(d), delete e.xhr, n(h))
                            }
                        } catch (t) {
                            delete e.xhr, o((0, c.Mm)(null, c.Y7, t))
                        }
                    }(o, t, e, n)
                }), (function(t, e, i, r) {
                    n((0, c.l9)(r, c.Y7))
                }))
            }

            function h(t) {
                t && t.forEach((function(t) {
                    var e = t.xhr;
                    e && (e.onload = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()), delete t.xhr
                }))
            }

            function f(t) {
                return t.map((function(t) {
                    return new n.Z(t.begin, t.end, t.text)
                }))
            }
        },
        7387: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return r
                }
            });
            var n = i(2957);

            function r(t) {
                var e = [],
                    i = (t = (0, n.fy)(t)).split("\r\n\r\n");
                1 === i.length && (i = t.split("\n\n"));
                for (var r = 0; r < i.length; r++)
                    if ("WEBVTT" !== i[r]) {
                        var a = o(i[r]);
                        a.text && e.push(a)
                    } return e
            }

            function o(t) {
                var e = {},
                    i = t.split("\r\n");
                1 === i.length && (i = t.split("\n"));
                var r = 1;
                if (i[0].indexOf(" --\x3e ") > 0 && (r = 0), i.length > r + 1 && i[r + 1]) {
                    var o = i[r],
                        a = o.indexOf(" --\x3e ");
                    a > 0 && (e.begin = (0, n.m9)(o.substr(0, a)), e.end = (0, n.m9)(o.substr(a + 5)), e.text = i.slice(r + 1).join("\r\n"))
                }
                return e
            }
        },
        7477: function(t, e) {
            "use strict";
            var i = window.VTTCue;

            function n(t) {
                if ("string" != typeof t) return !1;
                return !!{
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                } [t.toLowerCase()] && t.toLowerCase()
            }
            if (!i) {
                var r = "auto";
                (i = function(t, e, i) {
                    var o = this;
                    o.hasBeenReset = !1;
                    var a = "",
                        s = !1,
                        l = t,
                        c = e,
                        u = i,
                        d = null,
                        h = "",
                        f = !0,
                        g = r,
                        p = "start",
                        m = r,
                        v = 100,
                        w = "middle";
                    Object.defineProperty(o, "id", {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(t) {
                            a = "" + t
                        }
                    }), Object.defineProperty(o, "pauseOnExit", {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(t) {
                            s = !!t
                        }
                    }), Object.defineProperty(o, "startTime", {
                        enumerable: !0,
                        get: function() {
                            return l
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            l = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "endTime", {
                        enumerable: !0,
                        get: function() {
                            return c
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            c = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "text", {
                        enumerable: !0,
                        get: function() {
                            return u
                        },
                        set: function(t) {
                            u = "" + t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "region", {
                        enumerable: !0,
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            d = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "vertical", {
                        enumerable: !0,
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            var e = function(t) {
                                return "string" == typeof t && (!!{
                                    "": !0,
                                    lr: !0,
                                    rl: !0
                                } [t.toLowerCase()] && t.toLowerCase())
                            }(t);
                            if (!1 === e) throw new SyntaxError("An invalid or illegal string was specified.");
                            h = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "snapToLines", {
                        enumerable: !0,
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            f = !!t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "line", {
                        enumerable: !0,
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            if ("number" != typeof t && t !== r) throw new SyntaxError("An invalid number or illegal string was specified.");
                            g = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "lineAlign", {
                        enumerable: !0,
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            var e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            p = e, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "position", {
                        enumerable: !0,
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            m = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "size", {
                        enumerable: !0,
                        get: function() {
                            return v
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            v = t, this.hasBeenReset = !0
                        }
                    }), Object.defineProperty(o, "align", {
                        enumerable: !0,
                        get: function() {
                            return w
                        },
                        set: function(t) {
                            var e = n(t);
                            if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                            w = e, this.hasBeenReset = !0
                        }
                    }), o.displayState = void 0
                }).prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
            }
            e.Z = i
        },
        5099: function(t, e, i) {
            "use strict";

            function n(t) {
                return new Promise((function(e, i) {
                    if (t.paused) return i(r("NotAllowedError", 0, "play() failed."));
                    var n = function() {
                            t.removeEventListener("play", o), t.removeEventListener("playing", a), t.removeEventListener("pause", a), t.removeEventListener("abort", a), t.removeEventListener("error", a)
                        },
                        o = function() {
                            t.addEventListener("playing", a), t.addEventListener("abort", a), t.addEventListener("error", a), t.addEventListener("pause", a)
                        },
                        a = function(t) {
                            if (n(), "playing" !== t.type) {
                                var o = 'The play() request was interrupted by a "' + t.type + '" event.';
                                return "error" === t.type ? i(r("NotSupportedError", 9, o)) : i(r("AbortError", 20, o))
                            }
                            e()
                        };
                    t.addEventListener("play", o)
                }))
            }

            function r(t, e, i) {
                var n = new Error(i);
                return n.name = t, n.code = e, n
            }
            i.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        686: function(t, e, i) {
            "use strict";

            function n(t, e) {
                return t !== 1 / 0 && Math.abs(t) >= Math.max(o(e), 0)
            }

            function r(t, e) {
                var i = "VOD";
                return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = n(t, o(e)) ? "DVR" : "LIVE"), i
            }

            function o(t) {
                return void 0 === t ? 120 : Math.max(t, 0)
            }
            i.d(e, {
                s: function() {
                    return n
                },
                v: function() {
                    return r
                }
            })
        },
        4667: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            var n, r = i(2799);

            function o(t) {
                return n || (n = new DOMParser), (0, r.gB)((0, r.oH)(n.parseFromString(t, "image/svg+xml").documentElement))
            }
        },
        1831: function(t, e, i) {
            "use strict";
            i.d(e, {
                R: function() {
                    return h
                }
            });
            var n, r = i(7462),
                o = i(8348),
                a = i(2894),
                s = i(328),
                l = i(1643),
                c = i(974),
                u = i(2799),
                d = i(6042),
                h = {
                    back: !0,
                    backgroundOpacity: 50,
                    edgeStyle: null,
                    fontSize: 14,
                    fontOpacity: 100,
                    fontScale: .05,
                    preprocessor: d.yR,
                    windowOpacity: 0
                },
                f = function(t) {
                    var e, s, f, g, p, m, v, w, y, b = this,
                        j = t.player;

                    function k() {
                        (0, d.xV)(e.fontSize) && (j.get("containerHeight") ? w = h.fontScale * (e.userFontScale || 1) * e.fontSize / h.fontSize : j.once("change:containerHeight", k, this))
                    }

                    function _() {
                        var t = j.get("containerHeight");
                        if (t) {
                            var e;
                            if (j.get("fullscreen") && o.OS.iOS) e = null;
                            else {
                                var i = t * w;
                                e = Math.round(10 * function(t) {
                                    var e = j.get("mediaElement");
                                    if (e && e.videoHeight) {
                                        var i = e.videoWidth,
                                            n = e.videoHeight,
                                            r = i / n,
                                            a = j.get("containerHeight"),
                                            s = j.get("containerWidth");
                                        if (j.get("fullscreen") && o.OS.mobile) {
                                            var l = window.screen;
                                            l.orientation && (a = l.availHeight, s = l.availWidth)
                                        }
                                        if (s && a && i && n) return (s / a > r ? a : n * s / i) * w
                                    }
                                    return t
                                }(i)) / 10
                            }
                            j.get("renderCaptionsNatively") ? function(t, e) {
                                var i = "#" + t + " .jw-video::-webkit-media-text-track-display";
                                e && (e += "px", o.OS.iOS && (0, c.iv)(i, {
                                    fontSize: "inherit"
                                }, t, !0));
                                y.fontSize = e, (0, c.iv)(i, y, t, !0)
                            }(j.get("id"), e) : (0, c.oB)(p, {
                                fontSize: e
                            })
                        }
                    }

                    function x(t, e, i) {
                        var n = (0, c.HY)("#000000", i);
                        "dropShadow" === t ? e.textShadow = "0 2px 1px " + n : "raised" === t ? e.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === t ? e.textShadow = "0 -2px 1px " + n : "uniform" === t && (e.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n)
                    }(p = document.createElement("div")).className = "jw-captions jw-reset", this.show = function() {
                        (0, u.cn)(p, "jw-captions-enabled")
                    }, this.hide = function() {
                        (0, u.IV)(p, "jw-captions-enabled")
                    }, this.populate = function(t) {
                        j.get("renderCaptionsNatively") || (f = [], s = t, t ? this.selectCues(t, g) : this.renderCues())
                    }, this.resize = function() {
                        _(), this.renderCues(!0)
                    }, this.renderCues = function(t) {
                        t = !!t, n && n.processCues(window, f, p, t)
                    }, this.selectCues = function(t, e) {
                        if (t && t.data && e && !j.get("renderCaptionsNatively")) {
                            var i = this.getAlignmentPosition(t, e);
                            !1 !== i && (f = this.getCurrentCues(t.data, i), this.renderCues(!0))
                        }
                    }, this.getCurrentCues = function(t, e) {
                        return (0, d.hX)(t, (function(t) {
                            return e >= t.startTime && (!t.endTime || e <= t.endTime)
                        }))
                    }, this.getAlignmentPosition = function(t, e) {
                        var i = t.source,
                            n = e.metadata,
                            r = e.currentTime;
                        return i && n && (0, d.hj)(n[i]) && (r = n[i]), r
                    }, this.clear = function() {
                        (0, u.cS)(p)
                    }, this.setup = function(t, i) {
                        m = document.createElement("div"), v = document.createElement("span"), m.className = "jw-captions-window jw-reset", v.className = "jw-captions-text jw-reset", e = (0, r.Z)({}, h, i), w = h.fontScale;
                        var n = function() {
                            k(e.fontSize);
                            var i = e.windowColor,
                                n = e.windowOpacity,
                                r = e.edgeStyle;
                            y = {};
                            var a = {};
                            ! function(t, e) {
                                var i = e.color,
                                    n = e.fontOpacity;
                                (i || n !== h.fontOpacity) && (t.color = (0, c.HY)(i || "#ffffff", n));
                                if (e.back) {
                                    var r = e.backgroundColor,
                                        o = e.backgroundOpacity;
                                    r === h.backgroundColor && o === h.backgroundOpacity || (t.backgroundColor = (0, c.HY)(r, o))
                                } else t.background = "transparent";
                                e.fontFamily && (t.fontFamily = e.fontFamily);
                                e.fontStyle && (t.fontStyle = e.fontStyle);
                                e.fontWeight && (t.fontWeight = e.fontWeight);
                                e.textDecoration && (t.textDecoration = e.textDecoration)
                            }(a, e), (i || n !== h.windowOpacity) && (y.backgroundColor = (0, c.HY)(i || "#000000", n)), x(r, a, e.fontOpacity), e.back || null !== r || x("uniform", a), (0, c.oB)(m, y), (0, c.oB)(v, a),
                                function(t, e) {
                                    _(),
                                        function(t, e) {
                                            o.Browser.safari && (0, c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display-backdrop", {
                                                backgroundColor: e.backgroundColor
                                            }, t, !0);
                                            (0, c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display", y, t, !0), (0, c.iv)("#" + t + " .jw-video::cue", e, t, !0)
                                        }(t, e),
                                        function(t, e) {
                                            (0, c.iv)("#" + t + " .jw-text-track-display", y, t), (0, c.iv)("#" + t + " .jw-text-track-cue", e, t)
                                        }(t, e)
                                }(t, a)
                        };
                        n(), m.appendChild(v), p.appendChild(m), j.change("captionsTrack", (function(t, e) {
                            this.populate(e)
                        }), this), j.set("captions", e), j.on("change:captions", (function(t, i) {
                            e = i, n()
                        }))
                    }, this.element = function() {
                        return p
                    }, this.destroy = function() {
                        j.off(null, null, this), this.off()
                    };
                    var M = function(t) {
                        g = t, b.selectCues(s, g)
                    };
                    j.on("change:playlistItem", (function() {
                        g = null, f = []
                    }), this), j.on(l.NZ, (function(t) {
                        f = [], M(t)
                    }), this), j.on(l.R2, M, this), j.on("subtitlesTrackData", (function() {
                        this.selectCues(s, g)
                    }), this), j.on("change:captionsList", (function t(e, r) {
                        var o = this;
                        1 !== r.length && (e.get("renderCaptionsNatively") || n || (i.e(63).then(function(t) {
                            n = i(8698).default
                        }.bind(null, i)).catch((0, a.Jt)(301121)).catch((function(t) {
                            o.trigger(l.cM, t)
                        })), e.off("change:captionsList", t, this)))
                    }), this)
                };
            (0, r.Z)(f.prototype, s.ZP), e.Z = f
        },
        8168: function(t, e, i) {
            "use strict";
            i.d(e, {
                w: function() {
                    return s
                }
            });
            var n = i(974),
                r = i(4667),
                o = i(5646),
                a = {};

            function s(t) {
                if (!a[t]) {
                    var e = Object.keys(a);
                    e.length > 10 && delete a[e[0]];
                    var i = (0, r.Z)(t);
                    a[t] = i
                }
                return a[t].cloneNode(!0)
            }
            var l = function() {
                function t(t, e, i, r, a) {
                    var l, c = document.createElement("div");
                    c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (a || ""), c.setAttribute("button", r), c.setAttribute("role", "button"), c.setAttribute("tabindex", "0"), e && c.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? l = s(t) : ((l = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset", t && (0, n.oB)(l, {
                        backgroundImage: "url(" + t + ")"
                    })), c.appendChild(l), (0, o.Z)(c, i, this), c.addEventListener("mousedown", (function(t) {
                        t.preventDefault()
                    })), this.id = r, this.buttonElement = c
                }
                var e = t.prototype;
                return e.element = function() {
                    return this.buttonElement
                }, e.toggle = function(t) {
                    t ? this.show() : this.hide()
                }, e.show = function() {
                    this.buttonElement.style.display = ""
                }, e.hide = function() {
                    this.buttonElement.style.display = "none"
                }, t
            }();
            e.Z = l
        },
        5187: function(t, e, i) {
            "use strict";
            var n = i(974),
                r = i(2799),
                o = i(8348),
                a = function() {
                    function t(t) {
                        this.model = t.player, this.truncated = t.get("__ab_truncated") && !o.Browser.ie
                    }
                    var e = t.prototype;
                    return e.hide = function() {
                        (0, n.oB)(this.el, {
                            display: "none"
                        })
                    }, e.show = function() {
                        (0, n.oB)(this.el, {
                            display: ""
                        })
                    }, e.setup = function(t) {
                        if (this.el = t, this.el) {
                            var e = this.el.getElementsByTagName("div");
                            this.title = e[0], this.description = e[1], this.truncated && this.el.classList.add("jw-ab-truncated"), this.model.on("change:logoWidth", this.update, this), this.model.change("playlistItem", this.playlistItem, this)
                        }
                    }, e.update = function(t) {
                        var e = {},
                            i = t.get("logo");
                        if (i) {
                            var r = 1 * parseInt(("" + i.margin).replace("px", "")),
                                o = t.get("logoWidth") + (isNaN(r) ? 0 : r + 10);
                            "top-left" === i.position ? e.paddingLeft = o : "top-right" === i.position && (e.paddingRight = o)
                        }(0, n.oB)(this.el, e)
                    }, e.playlistItem = function(t, e) {
                        if (e)
                            if (t.get("displaytitle") || t.get("displaydescription")) {
                                var i = "",
                                    n = "";
                                "string" == typeof e.title && t.get("displaytitle") && (i = e.title), "string" == typeof e.description && t.get("displaydescription") && (n = e.description), this.updateText(i, n)
                            } else this.hide()
                    }, e.updateText = function(t, e) {
                        this.title && this.description && ((0, r.nh)(this.title, (0, r.Ww)(t)), (0, r.nh)(this.description, (0, r.Ww)(e)), this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
                    }, e.element = function() {
                        return this.el
                    }, t
                }();
            e.Z = a
        },
        5646: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return r
                }
            });
            var n = i(5882);

            function r(t, e, i) {
                return new n.ZP(t).on("click enter", e, i)
            }
        },
        6436: function(t, e, i) {
            "use strict";
            i.d(e, {
                d: function() {
                    return o
                },
                i: function() {
                    return r
                }
            });
            var n = i(2799);

            function r(t) {
                var e = -1;
                return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0), e
            }

            function o(t, e) {
                var i = "jw-breakpoint-" + e;
                (0, n.L_)(t, /jw-breakpoint--?\d+/, i)
            }
        },
        8446: function(t, e, i) {
            "use strict";
            i.d(e, {
                FM: function() {
                    return o
                },
                Sf: function() {
                    return s
                },
                xq: function() {
                    return a
                }
            });
            var n = i(2957),
                r = i(974);

            function o(t) {
                return t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2")
            }

            function a(t) {
                t || (t = {});
                var e = t.active,
                    i = t.inactive,
                    n = t.background,
                    r = {};
                return r.controlbar = function(t) {
                    if (t || e || i || n) {
                        var r = {};
                        return t = t || {}, r.iconsActive = t.iconsActive || e, r.icons = t.icons || i, r.text = t.text || i, r.background = t.background || n, r
                    }
                }(t.controlbar), r.timeslider = function(t) {
                    if (t || e) {
                        var i = {};
                        return t = t || {}, i.progress = t.progress || e, i.rail = t.rail, i
                    }
                }(t.timeslider), r.menus = function(t) {
                    if (t || e || i || n) {
                        var r = {};
                        return t = t || {}, r.text = t.text || i, r.textActive = t.textActive || e, r.background = t.background || n, r
                    }
                }(t.menus), r.tooltips = function(t) {
                    if (t || i || n) {
                        var e = {};
                        return t = t || {}, e.text = t.text || i, e.background = t.background || n, e
                    }
                }(t.tooltips), r
            }

            function s(t, e) {
                var i;
                e && (e.controlbar && function(e) {
                    o([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", e.text), e.icons && (o([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", e.icons), o([".jw-display-icon-container .jw-button-color"], "color", e.icons), (0, r.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off", "{--disconnected-color: " + e.icons + "}", t));
                    e.iconsActive && (o([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", e.iconsActive), o([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", e.iconsActive), o([".jw-svg-icon-buffer"], "fill", e.icons), (0, r.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t), (0, r.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t), (0, r.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off:focus", "{--disconnected-color: " + e.iconsActive + "}", t), (0, r.iv)("#" + t + " .jw-icon-cast google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t), (0, r.iv)("#" + t + " .jw-icon-cast google-cast-launcher:focus", "{--connected-color: " + e.iconsActive + "}", t), (0, r.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t), (0, r.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t));
                    o([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", e.background, !0)
                }(e.controlbar), e.timeslider && function(t) {
                    var e = t.progress;
                    "none" !== e && (o([".jw-progress", ".jw-knob"], "background-color", e), o([".jw-buffer"], "background-color", (0, r.HY)(e, 50)));
                    o([".jw-rail"], "background-color", t.rail), o([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
                }(e.timeslider), e.menus && (o([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", (i = e.menus).text), o([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", i.textActive), o([".jw-nextup", ".jw-settings-menu"], "background", i.background)), e.tooltips && function(t) {
                    o([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background), o([".jw-time-tip", ".jw-tooltip"], "color", t.background), o([".jw-skip"], "border", "none"), o([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
                }(e.tooltips), e.menus && function(e) {
                    if (e.textActive) {
                        var i = {
                            color: e.textActive,
                            borderColor: e.textActive,
                            stroke: e.textActive
                        };
                        (0, r.iv)("#" + t + " .jw-color-active", i, t), (0, r.iv)("#" + t + " .jw-color-active-hover:hover", i, t)
                    }
                    if (e.text) {
                        var n = {
                            color: e.text,
                            borderColor: e.text,
                            stroke: e.text
                        };
                        (0, r.iv)("#" + t + " .jw-color-inactive", n, t), (0, r.iv)("#" + t + " .jw-color-inactive-hover:hover", n, t)
                    }
                }(e.menus));

                function o(e, i, o, a) {
                    if (o) {
                        e = (0, n.O4)(e, "#" + t + (a ? "" : " "));
                        var s = {};
                        s[i] = o, (0, r.iv)(e.join(", "), s, t)
                    }
                }
            }
        },
        8151: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return qe
                }
            });
            var n = i(1918),
                r = i(1643),
                o = i(7462),
                a = i(6391),
                s = i(623),
                l = i(5191),
                c = ["notVisible", "always", "never"];
            var u = i(9128),
                d = i(7263),
                h = i(8320),
                f = i(658),
                g = i(2957),
                p = i(328),
                m = i(3144),
                v = i(4578),
                w = i(2303),
                y = i(7326),
                b = function() {
                    function t(t) {
                        this.callback = t
                    }
                    var e = t.prototype;
                    return e.async = function() {
                        for (var t = this, e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        return Promise.resolve().then((function() {
                            if (null !== t.callback) return t.callback.apply(t, i)
                        }))
                    }, e.cancel = function() {
                        this.callback = null
                    }, e.cancelled = function() {
                        return null === this.callback
                    }, t
                }();

            function j(t) {
                return new b(t)
            }
            var k = i(4446),
                _ = i(6042);

            function x(t, e) {
                var i = this.mediaModel,
                    n = (0, o.Z)({}, e, {
                        type: t
                    });
                switch (t) {
                    case r.oZ:
                        if (i.get(r.oZ) === n.mediaType) return;
                        i.set(r.oZ, n.mediaType);
                        break;
                    case r.ug:
                        return void i.set(r.ug, (0, o.Z)({}, e));
                    case r.gy:
                        if (e[r.gy] === this.model.getMute()) return;
                        break;
                    case r.uc:
                        var a = e.newstate;
                        a === r.bc && (this.thenPlayPromise.cancel(), i.srcReset());
                        var s = i.attributes.mediaState;
                        i.attributes.mediaState = a, i.trigger("change:mediaState", i, a, s);
                        break;
                    case r.Ms:
                        return this.beforeComplete = !0, this.trigger(r.s$, n), void(this.attached && !this.background && this._playbackComplete());
                    case r.Ew:
                        i.get("setup") ? (this.thenPlayPromise.cancel(), i.srcReset()) : (t = r.cM, n.code += 1e5);
                        break;
                    case r.rx:
                        var l = e,
                            c = l.duration,
                            u = l.metadataType,
                            d = l.seekRange;
                        u || (n.metadataType = "unknown"), (0, _.qh)(c) && (i.set("seekRange", d), i.set("duration", c));
                        break;
                    case r.uT:
                        i.set("buffer", e.bufferPercent);
                    case r.R2:
                        var h = e;
                        i.set("seekRange", h.seekRange), i.set("position", h.position), i.set("currentTime", h.currentTime);
                        var f = h.duration;
                        (0, _.qh)(f) && i.set("duration", f), t === r.R2 && "starttime" in this.item && delete this.item.starttime;
                        break;
                    case r.aQ:
                        var g = this.mediaElement;
                        g && g.paused && i.set("mediaState", "paused");
                        break;
                    case r.UZ:
                        i.set(r.UZ, e.levels);
                    case r.aM:
                        var p = e,
                            m = p.currentQuality,
                            v = p.levels;
                        m > -1 && v.length > 1 && i.set("currentLevel", parseInt(m));
                        break;
                    case r.j0:
                        i.set(r.j0, e.tracks);
                    case r._B:
                        var w = e,
                            y = w.currentTrack,
                            b = w.tracks;
                        y > -1 && b.length > 0 && y < b.length && i.set("currentAudioTrack", parseInt(y))
                }
                this.trigger(t, n)
            }

            function M(t, e) {
                var i = this.model;
                switch (t) {
                    case r.uc:
                        return;
                    case r.yH:
                        return void i.set(r.yH, e[r.yH]);
                    case r.gy:
                        return void i.set(r.gy, e[r.gy]);
                    case r.TJ:
                        return void i.set("playbackRate", e.playbackRate);
                    case r.rx:
                        (0, o.Z)(i.get("itemMeta"), e.metadata);
                        break;
                    case r.aM:
                        i.persistQualityLevel(e.currentQuality, e.levels);
                        break;
                    case r.UF:
                        i.persistVideoSubtitleTrack(e.currentTrack, e.tracks);
                        break;
                    case r.R2:
                        e.targetLatency && i.set("dvrSeekLimit", e.targetLatency);
                    case r.NZ:
                    case r.aQ:
                    case r.h7:
                    case r.jt:
                    case "subtitlesTracksData":
                        i.trigger(t, e);
                        break;
                    case r.qG:
                        return void i.persistBandwidthEstimate(e.bandwidthEstimate)
                }
                this.trigger(t, e)
            }
            var C = i(8348),
                S = i(7753),
                I = i(9918),
                E = i(8381),
                P = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).providerController = null, e._provider = null, e.addAttributes({
                            mediaModel: new A,
                            minDvrWindow: I.ni,
                            dvrSeekLimit: I.OG
                        }), e
                    }(0, v.Z)(e, t);
                    var i = e.prototype;
                    return i.setup = function(t) {
                        return t = t || {}, this._normalizeConfig(t), (0, o.Z)(this.attributes, t, I.bv), this.providerController = new w.Z(this.getConfiguration()), this.setAutoStart(), this
                    }, i.getConfiguration = function() {
                        var t = this.clone(),
                            e = t.mediaModel.attributes;
                        return Object.keys(I.L4).forEach((function(i) {
                            t[i] = e[i]
                        })), t.instreamMode = !!t.instream, delete t.instream, delete t.mediaModel, t
                    }, i.persistQualityLevel = function(t, e) {
                        var i = e[t] || {},
                            n = i.label,
                            r = (0, _.qh)(i.bitrate) ? i.bitrate : null;
                        this.set("bitrateSelection", r), this.set("qualityLabel", n)
                    }, i.setActiveItem = function(t) {
                        var e = this.get("playlist")[t];
                        this.resetItem(e), this.attributes.playlistItem = null, this.set("item", t), this.set("minDvrWindow", e.minDvrWindow), this.set("dvrSeekLimit", e.dvrSeekLimit || I.OG), this.set("playlistItem", e)
                    }, i.setMediaModel = function(t) {
                        this.mediaModel && this.mediaModel !== t && this.mediaModel.off(), t = t || new A, this.mediaModel = t,
                            function(t) {
                                var e = t.get("mediaState");
                                t.trigger("change:mediaState", t, e, e)
                            }(t)
                    }, i.destroy = function() {
                        this.attributes._destroyed = !0, this.off(), this._provider && (this._provider.off(null, null, this), this._provider.destroy(), this._provider = null), this.mediaModel && this.mediaModel.off(), this.providerController = null
                    }, i.getVideo = function() {
                        return this._provider
                    }, i.setFullscreen = function(t) {
                        (t = !!t) !== this.get("fullscreen") && this.set("fullscreen", t)
                    }, i.getProviders = function() {
                        return this.providerController
                    }, i.setVolume = function(t) {
                        if ((0, _.qh)(t)) {
                            var e = Math.min(Math.max(0, t), 100);
                            this.set("volume", e);
                            var i = 0 === e;
                            i !== this.getMute() && this.setMute(i)
                        }
                    }, i.getMute = function() {
                        return this.get("autostartMuted") || this.get("mute")
                    }, i.setMute = function(t) {
                        if (void 0 === t && (t = !this.getMute()), this.set("mute", !!t), !t) {
                            var e = Math.max(10, this.get("volume"));
                            this.set("autostartMuted", !1), this.setVolume(e)
                        }
                    }, i.setStreamType = function(t) {
                        this.set("streamType", t), "LIVE" === t && this.setPlaybackRate(1)
                    }, i.setProvider = function(t) {
                        this._provider = t, T(this, t)
                    }, i.resetProvider = function() {
                        this._provider = null, this.set("provider", void 0)
                    }, i.setPlaybackRate = function(t) {
                        (0, _.hj)(t) && (t = Math.max(Math.min(t, 4), .25), "LIVE" === this.get("streamType") && (t = 1), this.set("defaultPlaybackRate", t), this._provider && this._provider.setPlaybackRate && this._provider.setPlaybackRate(t))
                    }, i.persistCaptionsTrack = function() {
                        var t = this.get("captionsTrack");
                        t ? this.set("captionLabel", t.name) : this.set("captionLabel", "Off")
                    }, i.setVideoSubtitleTrack = function(t, e) {
                        this.set("captionsIndex", t), t && e && t <= e.length && e[t - 1].data && this.set("captionsTrack", e[t - 1])
                    }, i.persistVideoSubtitleTrack = function(t, e) {
                        this.setVideoSubtitleTrack(t, e), this.persistCaptionsTrack()
                    }, i.setAutoStart = function(t) {
                        void 0 !== t && this.set("autostart", t);
                        var e = !(!C.OS.mobile || !this.get("autostart"));
                        this.set("playOnViewable", e || "viewable" === this.get("autostart"))
                    }, i.setCues = function(t) {
                        var e = this.get("playlistItem");
                        e.chapters = (0, E._b)(t, e.chapters);
                        var i = t.filter((function(t) {
                            return "chapters" !== t.cueType
                        }));
                        this.set("cues", i), this.set("playlistItem", e), this.trigger("change:chapters", this)
                    }, i.getCues = function() {
                        var t = this.get("playlistItem").chapters,
                            e = (0, E.$W)(t);
                        return (this.get("cues") || []).concat(e)
                    }, i.resetItem = function(t) {
                        var e = t ? (0, g.m9)(t.starttime) : 0,
                            i = t ? (0, g.m9)(t.duration) : 0,
                            n = this.mediaModel;
                        this.set("playRejected", !1), this.attributes.itemMeta = {}, n.set("position", e), n.set("currentTime", 0), n.set("duration", i)
                    }, i.persistBandwidthEstimate = function(t) {
                        (0, _.qh)(t) && this.set("bandwidthEstimate", t)
                    }, i._normalizeConfig = function(t) {
                        var e = t.floating;
                        e && e.disabled && delete t.floating
                    }, e
                }(S.Z),
                T = function(t, e) {
                    t.set("provider", e.getName()), !0 === t.get("instreamMode") && (e.instreamMode = !0), t.setPlaybackRate(t.get("defaultPlaybackRate")), t.set("supportsPlaybackRate", e.supportsPlaybackRate), t.set("playbackRate", e.getPlaybackRate()), t.set("renderCaptionsNatively", e.renderNatively)
                };
            var A = function(t) {
                    function e() {
                        var e;
                        return (e = t.call(this) || this).addAttributes({
                            mediaState: r.bc
                        }), e
                    }
                    return (0, v.Z)(e, t), e.prototype.srcReset = function() {
                        (0, o.Z)(this.attributes, {
                            setup: !1,
                            started: !1,
                            preloaded: !1,
                            visualQuality: null,
                            buffer: 0,
                            currentTime: 0
                        })
                    }, e
                }(S.Z),
                F = P,
                R = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this) || this).attached = !0, n.beforeComplete = !1, n.item = null, n.mediaModel = new A, n.model = i, n.provider = e, n.providerListener = x, n.thenPlayPromise = j((function() {})), e.off(), e.on("all", n.providerListener, (0, y.Z)(n)), n.eventQueue = new u.Z((0, y.Z)(n), ["trigger"], (function() {
                            return !n.attached || n.background
                        })), n
                    }(0, v.Z)(e, t);
                    var i = e.prototype;
                    return i.play = function(t) {
                        var e = this.item,
                            i = this.model,
                            n = this.mediaModel,
                            r = this.provider;
                        if (t || (t = i.get("playReason")), i.set("playRejected", !1), n.get("setup")) return r.play() || Promise.resolve();
                        n.set("setup", !0);
                        var o = this._loadAndPlay(e, r);
                        return n.get("started") ? o : this._playAttempt(o, t)
                    }, i.stop = function() {
                        var t = this.provider;
                        this.beforeComplete = !1, t.stop()
                    }, i.pause = function() {
                        this.provider.pause()
                    }, i.preload = function() {
                        var t = this.item,
                            e = this.mediaModel,
                            i = this.provider;
                        !t || t && "none" === t.preload || !this.attached || this.setup || this.preloaded || (e.set("preloaded", !0), i.preload(t))
                    }, i.destroy = function() {
                        var t = this.provider,
                            e = this.mediaModel;
                        this.off(), e.off(), t.off(), this.eventQueue.destroy(), this.detach(), t.getContainer() && t.remove(), this.eventQueue && this.eventQueue.destroy(), delete t.instreamMode, this.thenPlayPromise && this.thenPlayPromise.cancel(), this.provider = this.mediaModel = this.model = this.eventQueue = this.item = this.providerListener = this.thenPlayPromise = null
                    }, i.attach = function() {
                        var t = this.model,
                            e = this.provider;
                        t.setPlaybackRate(t.get("defaultPlaybackRate")), e.attachMedia(), this.attached = !0, this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()
                    }, i.detach = function() {
                        var t = this.provider;
                        this.thenPlayPromise.cancel();
                        var e = t.detachMedia();
                        return this.attached = !1, e
                    }, i._playAttempt = function(t, e) {
                        var i = this,
                            n = this.item,
                            a = this.mediaModel,
                            s = this.model,
                            l = this.provider,
                            c = l ? l.video : null;
                        return this.trigger(r.cq, {
                            item: n,
                            playReason: e
                        }), (c ? c.paused : s.get(r.uc) !== r.r0) || s.set(r.uc, r.Kb), t.then((function() {
                            a.get("setup") && (a.set("started", !0), a === s.mediaModel && function(t) {
                                var e = t.get("mediaState");
                                t.trigger("change:mediaState", t, e, e)
                            }(a))
                        })).catch((function(t) {
                            if (i.item && a === s.mediaModel) {
                                if (s.set("playRejected", !0), c && c.paused) {
                                    if (c.src === location.href) return i._loadAndPlay(n, l);
                                    a.set("mediaState", r._5)
                                }
                                var u = (0, o.Z)(new k.rG(null, (0, k.nm)(t), t), {
                                    error: t,
                                    item: n,
                                    playReason: e
                                });
                                throw delete u.key, i.trigger(r.Je, u), t
                            }
                        }))
                    }, i._playbackComplete = function() {
                        var t = this.item,
                            e = this.provider;
                        t && delete t.starttime, this.beforeComplete = !1, e.setState(r.xQ), this.trigger(r.Ms, {})
                    }, i._loadAndPlay = function() {
                        var t = this,
                            e = this.item,
                            i = this.provider,
                            n = i.load(e);
                        if (n) {
                            var r = j((function() {
                                return t.provider.play() || Promise.resolve()
                            }));
                            return this.thenPlayPromise = r, n.then((function() {
                                return r.async()
                            }))
                        }
                        return i.play() || Promise.resolve()
                    }, (0, m.Z)(e, [{
                        key: "audioTrack",
                        get: function() {
                            return this.provider.getCurrentAudioTrack()
                        },
                        set: function(t) {
                            this.provider.setCurrentAudioTrack(t)
                        }
                    }, {
                        key: "quality",
                        get: function() {
                            return this.provider.getCurrentQuality()
                        },
                        set: function(t) {
                            this.provider.setCurrentQuality(t)
                        }
                    }, {
                        key: "audioTracks",
                        get: function() {
                            return this.provider.getAudioTracks()
                        }
                    }, {
                        key: "background",
                        get: function() {
                            if (!this.attached) return !1;
                            var t = this.provider;
                            if (!t.video) return !1;
                            var e = t.getContainer();
                            return !e || e && !e.contains(t.video)
                        },
                        set: function(t) {
                            var e = this.provider;
                            if (e.video) {
                                var i = e.getContainer();
                                i && (t ? this.background || (this.thenPlayPromise.cancel(), this.pause(), e.removeFromContainer ? e.removeFromContainer() : i.removeChild(e.video), this.container = null) : (this.eventQueue.flush(), this.beforeComplete && this._playbackComplete()))
                            } else t ? this.detach() : this.attach()
                        }
                    }, {
                        key: "container",
                        get: function() {
                            return this.provider.getContainer()
                        },
                        set: function(t) {
                            this.provider.setContainer(t)
                        }
                    }, {
                        key: "mediaElement",
                        get: function() {
                            return this.provider.video
                        }
                    }, {
                        key: "preloaded",
                        get: function() {
                            return this.mediaModel.get("preloaded")
                        }
                    }, {
                        key: "qualities",
                        get: function() {
                            return this.provider.getQualityLevels()
                        }
                    }, {
                        key: "setup",
                        get: function() {
                            return this.mediaModel.get("setup")
                        }
                    }, {
                        key: "started",
                        get: function() {
                            return this.mediaModel.get("started")
                        }
                    }, {
                        key: "activeItem",
                        set: function(t) {
                            var e = this.mediaModel = new A,
                                i = t ? (0, g.m9)(t.starttime) : 0,
                                n = t ? (0, g.m9)(t.duration) : 0,
                                r = e.attributes;
                            e.srcReset(), r.position = i, r.duration = n, this.item = t, this.provider.init(t)
                        }
                    }, {
                        key: "controls",
                        set: function(t) {
                            this.provider.setControls(t)
                        }
                    }, {
                        key: "mute",
                        set: function(t) {
                            this.provider.mute(t)
                        }
                    }, {
                        key: "position",
                        set: function(t) {
                            var e = this.provider;
                            this.model.get("scrubbing") && e.fastSeek ? e.fastSeek(t) : e.seek(t)
                        }
                    }, {
                        key: "subtitles",
                        set: function(t) {
                            this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(t)
                        }
                    }, {
                        key: "volume",
                        set: function(t) {
                            this.provider.volume(t)
                        }
                    }]), e
                }(p.ZP);

            function Z(t) {
                return Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, Z(t)
            }
            var L = i(9611);

            function B() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function O(t, e, i) {
                return O = B() ? Reflect.construct : function(t, e, i) {
                    var n = [null];
                    n.push.apply(n, e);
                    var r = new(Function.bind.apply(t, n));
                    return i && (0, L.Z)(r, i.prototype), r
                }, O.apply(null, arguments)
            }

            function V(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return V = function(t) {
                    if (null === t || (i = t, -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
                    var i;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n)
                    }

                    function n() {
                        return O(t, arguments, Z(this).constructor)
                    }
                    return n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), (0, L.Z)(n, t)
                }, V(t)
            }
            var z = i(393),
                H = function(t) {
                    function e(e) {
                        var i;
                        return (i = t.call(this, e) || this).code = k._M, i
                    }
                    return (0, v.Z)(e, t), e
                }(V(Error)),
                N = function() {
                    function t(t, e, i) {
                        var n = this;
                        this.index = t, this.model = e, this.api = i, this.promise = new Promise((function(t, e) {
                            n.resolve = t, n.reject = e
                        })), this.async = null, this.asyncPromise = null, this.rejected = !1
                    }
                    var e = t.prototype;
                    return e.run = function() {
                        var t = this,
                            e = this.api,
                            i = this.async,
                            n = this.index,
                            r = this.model,
                            o = this.resolve,
                            a = this.reject,
                            s = this.promise,
                            l = r.get("playlist"),
                            c = this.getItem(n);
                        if (!c) {
                            var u = -1 === n ? "No recs item" : "No playlist item at index " + n;
                            this.rejected = !0, a(new Error(u))
                        }
                        if (i) {
                            this.clear();
                            var d = this.asyncPromise = i.call(e, c, n);
                            d && d.then ? d.then((function(e) {
                                if (e && e !== c && l === r.get("playlist")) {
                                    var i = t.replace(e);
                                    if (i) return void o(i)
                                }
                                o(c)
                            })).catch((function(e) {
                                var i = new H("Item skipped by playlist item callback");
                                i.sourceError = e, t.rejected = !0, a(i)
                            })) : this.asyncPromise = null
                        }
                        return this.asyncPromise || o(c), s
                    }, e.getItem = function(t) {
                        var e = this.model;
                        return -1 === t ? e.get("nextUp") : e.get("playlist")[t]
                    }, e.replace = function(t) {
                        var e = this.index,
                            i = this.model,
                            n = (0, h.YF)(i, new z.Z(t), t.feedData || {});
                        if (n) {
                            if (-1 === e) i.set("nextUp", n);
                            else i.get("playlist")[e] = n;
                            return n
                        }
                    }, e.clear = function() {
                        this.async = null
                    }, e.destroy = function() {
                        this.model = this.api = this.promise = this.resolve = this.reject = this.async = this.asyncPromise = null
                    }, (0, m.Z)(t, [{
                        key: "callback",
                        set: function(t) {
                            this.async = t
                        }
                    }, {
                        key: "skipped",
                        get: function() {
                            return this.rejected
                        }
                    }]), t
                }();

            function q(t, e) {
                t.off().on("all", e.mediaControllerListener, e)
            }

            function D(t) {
                return t && t.sources && t.sources[0]
            }
            var U = function(t) {
                function e(e, i, n) {
                    var r, o, a;
                    return (r = t.call(this) || this).adPlaying = !1, r.apiContext = n, r.background = (o = null, a = null, {
                        setNext: function(t, e) {
                            a = {
                                item: t,
                                loadPromise: e
                            }
                        },
                        isNext: function(t) {
                            return !(!a || JSON.stringify(a.item.sources[0]) !== JSON.stringify(t.sources[0]))
                        },
                        updateNext: function(t) {
                            a && (a.item = t)
                        },
                        clearNext: function() {
                            a = null
                        },
                        get nextLoadPromise() {
                            return a ? a.loadPromise : null
                        },
                        get currentMedia() {
                            return o
                        },
                        set currentMedia(t) {
                            o = t
                        }
                    }), r.mediaPool = i, r.mediaController = null, r.mediaControllerListener = M, r.model = e, r.providers = new w.Z(e.getConfiguration()), r.loadPromise = null, r.backgroundLoading = e.get("backgroundLoading"), r.asyncItems = [], r.itemSetContext = 0, r.backgroundLoading || e.set("mediaElement", r.mediaPool.getPrimedElement()), r
                }(0, v.Z)(e, t);
                var i = e.prototype;
                return i.asyncActiveItem = function(t) {
                    var e = this,
                        i = this.model,
                        n = setTimeout((function() {
                            i.set(r.uc, r.Kb)
                        }), 50);
                    return this.getAsyncItem(t).run().then((function(t) {
                        return clearTimeout(n), t
                    })).catch((function(r) {
                        if (clearTimeout(n), t < i.get("playlist").length - 1) return e.setActiveItem(t + 1).then((function() {
                            return null
                        }));
                        throw r
                    }))
                }, i.setActiveItem = function(t) {
                    var e = this,
                        i = this.background,
                        n = this.mediaController,
                        r = this.model,
                        o = r.get("playlist")[t];
                    r.attributes.itemReady = !1, n && (n.mediaModel.off(), r.attributes.mediaModel = new A, r.mediaModel.attributes = n.mediaModel.clone()), i.isNext(o) || this._destroyBackgroundMedia();
                    var a = this.itemSetContext = Math.random();
                    return this.loadPromise = this.asyncActiveItem(t).then((function(o) {
                        if (null === o || a !== e.itemSetContext || null === e.providers) return null;
                        r.setActiveItem(t);
                        var s = D(o);
                        if (!s) return Promise.reject(new k.rG(k.ul, k.o2));
                        if (i.isNext(o)) return e._destroyActiveMedia(), e._activateBackgroundMedia();
                        if (n) {
                            if (r.get("castActive") || e._providerCanPlay(n.provider, s)) return n.activeItem = o, e._setActiveMedia(n), n;
                            e._destroyActiveMedia()
                        }
                        return e._setupMediaController(s).then((function(t) {
                            if (a === e.itemSetContext) return t.activeItem = o, e._setActiveMedia(t), t
                        })).catch((function(t) {
                            throw e._destroyActiveMedia(), t
                        }))
                    }))
                }, i.setAttached = function(t) {
                    var e = this.mediaController;
                    if (this.attached = t, e) {
                        if (!t) {
                            var i = e.detach(),
                                n = e.item,
                                r = e.mediaModel.get("position");
                            return r && (n.starttime = r), i
                        }
                        e.attach()
                    }
                }, i.playVideo = function(t) {
                    var e, i = this,
                        n = this.mediaController,
                        o = this.model;
                    if (!o.get("playlistItem")) return Promise.reject(new Error("No media"));
                    if (t || (t = o.get("playReason")), n) e = n.play(t);
                    else {
                        o.set(r.uc, r.Kb);
                        var a = j((function(e) {
                            if (i.mediaController && i.mediaController.mediaModel === e.mediaModel) return e.play(t);
                            throw new Error("Playback cancelled.")
                        }));
                        e = (this.loadPromise || Promise.resolve()).catch((function(t) {
                            throw a.cancel(), t
                        })).then((function() {
                            return a.async()
                        }))
                    }
                    return e
                }, i.stopVideo = function() {
                    var t = this.mediaController,
                        e = this.model,
                        i = e.get("playlist")[e.get("item")];
                    e.attributes.playlistItem = i, e.resetItem(i), t && t.stop()
                }, i.preloadVideo = function() {
                    var t = this.background,
                        e = this.mediaController || t.currentMedia;
                    e && e.preload()
                }, i.pause = function() {
                    var t = this.mediaController;
                    t && t.pause()
                }, i.castVideo = function(t, e) {
                    var i = this.model;
                    i.attributes.itemReady = !1;
                    var n = (0, o.Z)({}, e),
                        r = n.starttime = i.mediaModel.get("currentTime");
                    this._destroyActiveMedia();
                    var a = new R(t, i);
                    a.activeItem = n, this._setActiveMedia(a), i.mediaModel.set("currentTime", r)
                }, i.stopCast = function() {
                    var t = this.model,
                        e = t.get("item");
                    t.get("playlist")[e].starttime = t.mediaModel.get("currentTime"), this.stopVideo(), this.setActiveItem(e).catch((function() {}))
                }, i.backgroundActiveMedia = function() {
                    this.adPlaying = !0;
                    var t = this.background,
                        e = this.mediaController;
                    e && (t.currentMedia && this._destroyMediaController(t.currentMedia), e.background = !0, t.currentMedia = e, this.mediaController = null)
                }, i.restoreBackgroundMedia = function() {
                    this.adPlaying = !1;
                    var t = this.background,
                        e = this.mediaController,
                        i = t.currentMedia;
                    if (i) {
                        if (e && e !== i) return this._destroyMediaController(i), void(t.currentMedia = null);
                        var n = i.mediaModel.attributes;
                        n.mediaState === r.bc ? n.mediaState = r._5 : n.mediaState !== r._5 && (n.mediaState = r.Kb), this._setActiveMedia(i), i.background = !1, t.currentMedia = null
                    }
                }, i.backgroundLoad = function(t, e) {
                    var i = this,
                        n = this.background,
                        r = this.getAsyncItem(e).run().then((function(t) {
                            n.updateNext(t);
                            var e = D(t);
                            return i._setupMediaController(e).then((function(e) {
                                return e.activeItem = t, e.preload(), e
                            }))
                        })).catch((function() {
                            n.clearNext()
                        }));
                    n.setNext(t, r)
                }, i.forwardEvents = function() {
                    var t = this.mediaController;
                    t && q(t, this)
                }, i.routeEvents = function(t) {
                    var e = this.mediaController;
                    e && (e.off(), t && q(e, t))
                }, i.destroy = function() {
                    this.off(), this._destroyBackgroundMedia(), this._destroyActiveMedia(), this.asyncItems && this.asyncItems.forEach((function(t) {
                        t && t.destroy()
                    })), this.asyncItems = this.loadPromise = this.mediaControllerListener = this.model = this.providers = this.apiContext = null
                }, i._setActiveMedia = function(t) {
                    var e = this.model,
                        i = t.mediaModel,
                        n = t.provider;
                    ! function(t, e) {
                        var i = t.get("mediaContainer");
                        i ? e.container = i : t.once("change:mediaContainer", (function(t, i) {
                            e.container = i
                        }))
                    }(e, t), this.mediaController = t, e.set("mediaElement", t.mediaElement), e.setMediaModel(i), e.setProvider(n), q(t, this), e.set("itemReady", !0)
                }, i._destroyActiveMedia = function() {
                    var t = this.mediaController,
                        e = this.model;
                    t && t.provider && (t.detach(), this._destroyMediaController(t), e.resetProvider(), this.mediaController = null)
                }, i._destroyBackgroundMedia = function() {
                    var t = this.background;
                    this._destroyMediaController(t.currentMedia), t.currentMedia = null, this._destroyBackgroundLoadingMedia()
                }, i._destroyMediaController = function(t) {
                    var e = this.mediaPool;
                    t && t.provider && (e.recycle(t.mediaElement), t.destroy())
                }, i._setupMediaController = function(t) {
                    var e = this,
                        i = this.model,
                        n = this.providers,
                        r = function(t) {
                            return new R(new t(i.get("id"), i.getConfiguration(), e.primedElement), i)
                        },
                        o = n.choose(t),
                        a = o.provider,
                        s = o.name;
                    return a ? Promise.resolve(r(a)) : n.load(s).then((function(t) {
                        return r(t)
                    }))
                }, i._activateBackgroundMedia = function() {
                    var t = this,
                        e = this.background,
                        i = this.background.nextLoadPromise,
                        n = this.model;
                    return this._destroyMediaController(e.currentMedia), e.currentMedia = null, i.then((function(i) {
                        if (i) return e.clearNext(), t.adPlaying ? (n.attributes.itemReady = !0, e.currentMedia = i) : (t._setActiveMedia(i), i.background = !1), i
                    }))
                }, i._destroyBackgroundLoadingMedia = function() {
                    var t = this,
                        e = this.background,
                        i = this.background.nextLoadPromise;
                    i && i.then((function(i) {
                        t._destroyMediaController(i), e.clearNext()
                    }))
                }, i._providerCanPlay = function(t, e) {
                    var i = this.providers.choose(e).provider;
                    return i && t && t instanceof i
                }, i.setMute = function(t) {
                    var e = this.background,
                        i = this.mediaController,
                        n = this.mediaPool;
                    i && (i.mute = t), e.currentMedia && (e.currentMedia.mute = t), n.syncMute(t)
                }, i.setVolume = function(t) {
                    var e = this.background,
                        i = this.mediaController,
                        n = this.mediaPool;
                    i && (i.volume = t), e.currentMedia && (e.currentMedia.volume = t), n.syncVolume(t)
                }, i.getAsyncItem = function(t) {
                    var e = this.asyncItems[t];
                    return e || ((e = this.asyncItems[t] = new N(t, this.model, this.apiContext)).callback = this.model.get("playlistItemCallback")), e
                }, i.clearItemPromises = function() {
                    this.asyncItems.forEach((function(t) {
                        t && t.reject(new Error("Item playback aborted"))
                    })), this.asyncItems.length = 0
                }, (0, m.Z)(e, [{
                    key: "audioTrack",
                    get: function() {
                        var t = this.mediaController;
                        return t ? t.audioTrack : -1
                    },
                    set: function(t) {
                        var e = this.mediaController;
                        e && (e.audioTrack = parseInt(t, 10) || 0)
                    }
                }, {
                    key: "audioTracks",
                    get: function() {
                        var t = this.mediaController;
                        if (t) return t.audioTracks
                    }
                }, {
                    key: "beforeComplete",
                    get: function() {
                        var t = this.mediaController,
                            e = this.background.currentMedia;
                        return !(!t && !e) && (t ? t.beforeComplete : e.beforeComplete)
                    }
                }, {
                    key: "primedElement",
                    get: function() {
                        return this.backgroundLoading ? this.mediaPool.getPrimedElement() : this.model.get("mediaElement")
                    }
                }, {
                    key: "quality",
                    get: function() {
                        return this.mediaController ? this.mediaController.quality : -1
                    },
                    set: function(t) {
                        var e = this.mediaController;
                        e && (e.quality = parseInt(t, 10) || 0)
                    }
                }, {
                    key: "qualities",
                    get: function() {
                        var t = this.mediaController;
                        return t ? t.qualities : null
                    }
                }, {
                    key: "position",
                    set: function(t) {
                        var e = this.mediaController;
                        e && (e.item.starttime = t, e.attached && (e.position = t))
                    }
                }, {
                    key: "subtitles",
                    set: function(t) {
                        var e = this.mediaController;
                        e && (e.subtitles = t)
                    }
                }, {
                    key: "itemCallback",
                    set: function(t) {
                        this.model.set("playlistItemCallback", t), this.asyncItems.forEach((function(e) {
                            e && (e.callback = t)
                        }))
                    }
                }]), e
            }(p.ZP);

            function W(t) {
                return t === r.xQ || t === r.Vy ? r.bc : t
            }

            function Q(t, e, i) {
                if ((e = W(e)) !== (i = W(i))) {
                    var n = e.replace(/(?:ing|d)$/, ""),
                        o = function(t, e) {
                            return t === r.Kb ? e === r.nQ ? e : r.ik : e
                        }(e, t.mediaModel.get("mediaState")),
                        a = {
                            type: n,
                            newstate: e,
                            oldstate: i,
                            reason: o
                        };
                    "play" === n ? a.playReason = t.get("playReason") : "pause" === n && (a.pauseReason = t.get("pauseReason")), this.trigger(n, a)
                }
            }
            var Y = i(4609),
                J = function(t) {
                    function e(e, i) {
                        var n, r, o = (n = t.call(this, e, i) || this).model = new F;
                        if (n.playerModel = e, n.provider = null, n.backgroundLoading = e.get("backgroundLoading"), o.mediaModel.attributes.mediaType = "video", n.backgroundLoading) r = i.getAdElement();
                        else {
                            r = e.get("mediaElement"), o.attributes.mediaElement = r, o.attributes.mediaSrc = r.src;
                            var a = n.srcResetListener = function() {
                                n.srcReset()
                            };
                            r.addEventListener("emptied", a), r.playbackRate = r.defaultPlaybackRate = 1
                        }
                        return n.mediaPool = (0, Y.Z)(r, i), n
                    }(0, v.Z)(e, t);
                    var i = e.prototype;
                    return i.setup = function() {
                        var t = this.model,
                            e = this.playerModel,
                            i = this.primedElement,
                            n = e.attributes,
                            o = e.mediaModel;
                        t.setup({
                            id: n.id,
                            volume: n.volume,
                            instreamMode: !0,
                            edition: n.edition,
                            mediaContext: o,
                            mute: n.mute,
                            streamType: "VOD",
                            autostartMuted: n.autostartMuted,
                            autostart: n.autostart,
                            advertising: n.advertising,
                            sdkplatform: n.sdkplatform,
                            skipButton: !1
                        }), t.on("change:state", Q, this), t.on(r.pn, (function(t) {
                            this.trigger(r.pn, t)
                        }), this), i.paused || i.pause()
                    }, i.setActiveItem = function(e) {
                        var i = this;
                        return this.adPlaying = !0, this.stopVideo(), this.provider = null, t.prototype.setActiveItem.call(this, e).then((function(t) {
                            return i.trigger(r.$_), i._setProvider(t.provider), i.playVideo()
                        }))
                    }, i.usePsuedoProvider = function(t) {
                        t && (this._setProvider(t), t.off(r.pn), t.on(r.pn, (function(t) {
                            this.trigger(r.pn, t)
                        }), this))
                    }, i._setProvider = function(t) {
                        var e = this;
                        if (t && this.mediaPool) {
                            this.provider = t;
                            var i = this.model,
                                n = this.playerModel,
                                a = "vpaid" === t.type;
                            t.off(), t.on("all", (function(t, e) {
                                a && t === r.Ms || this.trigger(t, (0, o.Z)({}, e, {
                                    type: t
                                }))
                            }), this);
                            var s = i.mediaModel;
                            t.on(r.uc, (function(t) {
                                t.oldstate = t.oldstate || i.get(r.uc), s.set("mediaState", t.newstate)
                            })), t.on(r.h7, this._nativeFullscreenHandler, this), s.on("change:mediaState", (function(t, i) {
                                e._stateHandler(i)
                            })), t.attachMedia(), t.volume(n.get("volume")), t.mute(n.getMute()), t.setPlaybackRate && t.setPlaybackRate(1), n.on("change:volume", (function(t, e) {
                                this.volume = e
                            }), this), n.on("change:mute", (function(t, e) {
                                this.mute = e, e || (this.volume = n.get("volume"))
                            }), this), n.on("change:autostartMuted", (function(t, e) {
                                e || (i.set("autostartMuted", e), this.mute = n.get("mute"))
                            }), this)
                        }
                    }, i.destroy = function() {
                        this.adPlaying = !1;
                        var t = this.model,
                            e = this.mediaPool,
                            i = this.playerModel;
                        t.off(), this.provider = null;
                        var n = e.getPrimedElement();
                        if (this.backgroundLoading) {
                            e.clean();
                            var r = i.get("mediaContainer");
                            n.parentNode === r && r.removeChild(n)
                        } else n && (n.removeEventListener("emptied", this.srcResetListener), n.src !== t.get("mediaSrc") && this.srcReset())
                    }, i.srcReset = function() {
                        var t = this.playerModel,
                            e = t.get("mediaModel"),
                            i = t.getVideo();
                        e.srcReset(), i && (i.src = null)
                    }, i._nativeFullscreenHandler = function(t) {
                        this.model.trigger(r.h7, t), this.trigger(r.UW, {
                            fullscreen: t.jwstate
                        })
                    }, i._stateHandler = function(t) {
                        var e = this.model;
                        switch (t) {
                            case r.r0:
                            case r._5:
                                e.set(r.uc, t)
                        }
                    }, (0, m.Z)(e, [{
                        key: "mute",
                        set: function(e) {
                            var i = this.mediaController,
                                n = this.model,
                                r = this.provider;
                            n.set("mute", e), t.prototype.setMute.call(this, e), i || r.mute(e)
                        }
                    }, {
                        key: "volume",
                        set: function(e) {
                            var i = this.mediaController,
                                n = this.model,
                                r = this.provider;
                            n.set("volume", e), t.prototype.setVolume.call(this, e), i || r.volume(e)
                        }
                    }]), e
                }(U),
                X = {
                    skipoffset: null,
                    tag: null
                },
                K = function(t, e, i, n) {
                    var a, s, l, c, u = this,
                        d = this,
                        h = new J(e, n),
                        p = 0,
                        m = {},
                        v = null,
                        w = {},
                        y = F,
                        b = !1,
                        j = !1,
                        k = !1,
                        _ = !1,
                        x = function(t) {
                            j || ((t = t || {}).hasControls = !!e.get("controls"), u.trigger(r.l5, t), h.model.get("state") === r._5 ? t.hasControls && h.playVideo().catch((function() {})) : h.pause())
                        },
                        M = function() {
                            j || h.model.get("state") === r._5 && e.get("controls") && (t.setFullscreen(), t.play())
                        };

                    function C() {
                        h.model.set("playRejected", !0)
                    }

                    function S() {
                        p++, d.loadItem(a).catch((function() {}))
                    }

                    function I(t, e) {
                        "complete" !== t && (e = e || {}, w.tag && !e.tag && (e.tag = w.tag), this.trigger(t, e), "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
                    }

                    function E(t) {
                        var e = t.newstate,
                            i = t.oldstate || h.model.get("state");
                        i !== e && P((0, o.Z)({
                            oldstate: i
                        }, m, t))
                    }

                    function P(e) {
                        var i = e.newstate;
                        i === r.r0 ? t.trigger(r.WE, e) : i === r._5 && t.trigger(r.Ax, e)
                    }

                    function T(e) {
                        var i = e.duration,
                            n = e.position,
                            r = h.model.mediaModel || h.model;
                        r.set("duration", i), r.set("position", n), c || (c = ((0, g.U5)(l, i) || i) - f.l_), !b && n >= Math.max(c, f.HB) && (t.preloadNextItem(), b = !0)
                    }

                    function A(t) {
                        var e = {};
                        w.tag && (e.tag = w.tag), this.trigger(r.Ms, e), F.call(this, t)
                    }

                    function F(t) {
                        m = {}, a && p + 1 < a.length ? S() : (t.type === r.Ms && this.trigger(r.V$, {}), this.destroy())
                    }

                    function R() {
                        !j && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(x, M)
                    }

                    function Z(n) {
                        n.width && n.height && i && i.resizeMedia(), e.get("pip") && t.requestPip(h.primedElement)
                    }
                    this.init = function() {
                        if (!k && !j) {
                            k = !0, m = {}, h.setup(), h.on("all", I, this), h.on(r.Je, C, this), h.on(r.R2, T, this), h.on(r.Ms, A, this), h.on(r.rx, Z, this), h.on(r.uc, E, this), v = t.detachMedia();
                            var n = h.primedElement;
                            if (e.get("mediaContainer").appendChild(n), e.set("instream", h), h.model.set("state", r.Kb), i) {
                                var o = i.clickHandler();
                                o && o.setAlternateClickHandlers((function() {}), null)
                            }
                            return this.setText(e.get("localization").loadingAd), _ = t.isBeforeComplete() || e.get("state") === r.xQ, this
                        }
                    }, this.enableAdsMode = function(n) {
                        var o = this;
                        if (!k && !j) return t.routeEvents({
                                mediaControllerListener: function(t, e) {
                                    o.trigger(t, e)
                                }
                            }), e.set("instream", h), h.model.set("state", r.r0),
                            function(n) {
                                if (!i) return;
                                var o = i.clickHandler();
                                o && o.setAlternateClickHandlers((function(i) {
                                    j || ((i = i || {}).hasControls = !!e.get("controls"), d.trigger(r.l5, i), n && (e.get("state") === r._5 ? t.playVideo() : (t.pause(), n && (t.trigger(r.Rt, {
                                        clickThroughUrl: n
                                    }), window.open(n)))))
                                }), null)
                            }(n), this
                    }, this.setEventData = function(t) {
                        m = t
                    }, this.setState = function(t) {
                        var e = t.newstate,
                            i = h.model;
                        t.oldstate = i.get("state"), i.set("state", e), P(t)
                    }, this.setTime = function(e) {
                        T(e), t.trigger(r.uL, e)
                    }, this.loadNextItemOnError = function() {
                        a && p + 1 < a.length && S()
                    }, this.loadItem = function(t, i) {
                        if (j || !k) return Promise.reject(new Error("Instream not setup"));
                        m = {};
                        var n = t;
                        Array.isArray(t) ? (s = i || s, t = (a = t)[p], s && (i = s[p])) : n = [t];
                        var c = h.model;
                        c.set("playlist", n), e.set("hideAdsControls", !1), t.starttime = 0, d.trigger(r.gO, {
                            index: p,
                            item: t
                        }), w = (0, o.Z)({}, X, i), R(), c.set("skipButton", !1);
                        var u = !e.get("backgroundLoading") && v ? v.then((function() {
                            return h.setActiveItem(p)
                        })) : h.setActiveItem(p);
                        return b = !1, void 0 !== (l = t.skipoffset || w.skipoffset) && d.setupSkipButton(l, w), u
                    }, this.setupSkipButton = function(t, e, i) {
                        var n = h.model;
                        y = i || F, n.set("skipMessage", e.skipMessage), n.set("skipText", e.skipText), n.set("skipOffset", t), n.attributes.skipButton = !1, n.set("skipButton", !0)
                    }, this.applyProviderListeners = function(t) {
                        h.usePsuedoProvider(t), R()
                    }, this.play = function() {
                        m = {}, h.playVideo()
                    }, this.pause = function() {
                        m = {}, h && h.pause()
                    }, this.skipAd = function(t) {
                        var i = e.get("autoPause").pauseAds,
                            n = "autostart" === e.get("playReason"),
                            o = e.get("viewable");
                        !i || n || o || (this.noResume = !0);
                        var a = r.k3;
                        this.trigger(a, t), y.call(this, {
                            type: a
                        })
                    }, this.replacePlaylistItem = function(t) {
                        j || (e.set("playlistItem", t), h.srcReset())
                    }, this.destroy = function() {
                        j || (j = !0, this.trigger("destroyed"), this.off(), i && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(), e.off(null, null, h), h.off(null, null, d), h.destroy(), k && h.model && (e.attributes.state = r._5), t.forwardEvents(), e.set("instream", null), h = null, m = {}, v = null, k && !e.attributes._destroyed && (t.attachMedia(), e.get("pip") && t.requestPip(), this.noResume || (_ ? t.stopVideo() : t.playVideo())))
                    }, this.getState = function() {
                        return !j && h.model.get("state")
                    }, this.setText = function(t) {
                        return j || !i || i.setAltText(t || ""), this
                    }, this.hide = function() {
                        j || e.set("hideAdsControls", !0)
                    }, this.getMediaElement = function() {
                        return j ? null : h.primedElement
                    }, this.setSkipOffset = function(t) {
                        l = t > 0 ? t : null, h && h.model.set("skipOffset", l)
                    }
                };
            (0, o.Z)(K.prototype, p.ZP);
            var $ = K,
                G = i(6103),
                tt = i(8377),
                et = function() {
                    function t(t) {
                        var e = this;
                        this._model = t, this._tracks = [], this._tracksById = {}, this._unknownCount = 0, this._defaultIndex = 0, this._model.on("change:playlistItem", (function(t) {
                            e._tracks = [], e._tracksById = {}, e._unknownCount = 0;
                            var i = t.attributes;
                            i.captionsIndex = 0, i.captionsList = e._captionsMenu(), t.set("captionsTrack", null)
                        }), this), this._model.on("change:itemReady", (function() {
                            e._model.get("castActive") && (e._tracks = [], e._tracksById = {}, e._unknownCount = 0);
                            var t = e._model.get("playlistItem").tracks,
                                i = t && t.length;
                            if (i && !e._model.get("renderCaptionsNatively"))
                                for (var n = function(i) {
                                        var n = t[i];
                                        n.includedInManifest || !e._kindSupported(n.kind) || e._tracksById[n._id] || (n.sideloaded = !0, e._addTrack(n), (0, G.x)(n, (function(t) {
                                            e._addVTTCuesToTrack(n, t)
                                        }), (function(t) {
                                            e.trigger(r.cM, t)
                                        })))
                                    }, o = 0; o < i; o++) n(o);
                            e._setCaptionsList()
                        }), this), this._model.on("change:captionsIndex", (function(t, i) {
                            var n = null;
                            0 !== i && (n = e._tracks[i - 1]), t.set("captionsTrack", n)
                        }), this)
                    }
                    var e = t.prototype;
                    return e.setSubtitlesTracks = function(t) {
                        var e = this;
                        Array.isArray(t) && (t.length ? (t.forEach((function(t) {
                            return e._addTrack(t)
                        })), this._tracks.sort((function(e, i) {
                            var n = t.indexOf(e);
                            if (-1 === n) return 1;
                            var r = t.indexOf(i);
                            return -1 === r ? -1 : n - r
                        }))) : (this._tracks = [], this._tracksById = {}, this._unknownCount = 0), this._setCaptionsList())
                    }, e._kindSupported = function(t) {
                        return "subtitles" === t || "captions" === t
                    }, e._addVTTCuesToTrack = function(t, e) {
                        t.data = e
                    }, e._addTrack = function(t) {
                        t.data = t.data || [], t.name = t.label || t.name || t.language;
                        var e = (0, tt.M)(t, this._tracks.length);
                        if (!t.name) {
                            var i = (0, tt._)(t, this._unknownCount);
                            t.name = i.label, this._unknownCount = i.unknownCount
                        }
                        t._id = e, this._tracksById[e] = t, this._tracks = this._tracks.filter((function(t) {
                            return t._id !== e
                        })), this._tracks.push(t)
                    }, e._captionsMenu = function() {
                        var t = [{
                            id: "off",
                            label: "Off"
                        }];
                        this._model.get("castActive") && (this._tracks = this._tracks.filter((function(t) {
                            return -1 !== t._id.indexOf("nativesubtitles")
                        })));
                        for (var e = 0; e < this._tracks.length; e++) t.push({
                            id: this._tracks[e]._id,
                            label: this._tracks[e].name || "Unknown CC",
                            language: this._tracks[e].subtitleTrack ? this._tracks[e].subtitleTrack.lang : this._tracks[e].language
                        });
                        return t
                    }, e.selectDefaultIndex = function(t) {
                        var e = this._defaultIndex = t,
                            i = this._model.get("captionLabel");
                        if ("Off" !== i) {
                            for (var n = 0; n < this._tracks.length; n++) {
                                var r = this._tracks[n];
                                if (i && i === r.name) {
                                    e = n + 1;
                                    break
                                }
                                r.default || r.defaulttrack || "default" === r._id ? e = n + 1 : r.autoselect
                            }
                            this._setCurrentIndex(e)
                        } else this._model.set("captionsIndex", 0)
                    }, e._setCurrentIndex = function(t) {
                        this._tracks.length ? this._model.setVideoSubtitleTrack(t, this._tracks) : this._model.set("captionsIndex", t)
                    }, e._setCaptionsList = function() {
                        var t = this._captionsMenu();
                        this.listIdentity(t) !== this.listIdentity(this._model.get("captionsList")) && (this._model.set("captionsList", t), this.selectDefaultIndex(this._defaultIndex))
                    }, e.listIdentity = function(t) {
                        return t.map((function(t) {
                            return t.id + "-" + t.label
                        })).join(",")
                    }, e.getCurrentIndex = function() {
                        return this._model.get("captionsIndex")
                    }, e.getCaptionsList = function() {
                        return this._model.get("captionsList")
                    }, e.destroy = function() {
                        this.off(null, null, this)
                    }, t
                }();
            (0, o.Z)(et.prototype, p.ZP);
            var it = et,
                nt = i(4225),
                rt = i(4671);

            function ot(t, e) {
                if (t.get("fullscreen")) return 1;
                if (!t.get("activeTab")) return 0;
                if (t.get("isFloating")) return 1;
                var i = t.get("intersectionRatio");
                return void 0 === i && (i = function(t) {
                    var e = document.documentElement,
                        i = document.body,
                        n = {
                            top: 0,
                            left: 0,
                            right: e.clientWidth || i.clientWidth,
                            width: e.clientWidth || i.clientWidth,
                            bottom: e.clientHeight || i.clientHeight,
                            height: e.clientHeight || i.clientHeight
                        };
                    if (!i.contains(t)) return 0;
                    if ("none" === window.getComputedStyle(t).display) return 0;
                    var r = at(t);
                    if (!r) return 0;
                    var o = r,
                        a = t.parentNode,
                        s = !1;
                    for (; !s;) {
                        var l = null;
                        if (a === i || a === e || 1 !== a.nodeType ? (s = !0, l = n) : "visible" !== window.getComputedStyle(a).overflow && (l = at(a)), l && !(o = st(l, o))) return 0;
                        a = a.parentNode
                    }
                    var c = r.width * r.height,
                        u = o.width * o.height;
                    return c ? u / c : 0
                }(e), window.top !== window.self && i) ? 0 : i
            }

            function at(t) {
                try {
                    return t.getBoundingClientRect()
                } catch (t) {}
            }

            function st(t, e) {
                var i = Math.max(t.top, e.top),
                    n = Math.min(t.bottom, e.bottom),
                    r = Math.max(t.left, e.left),
                    o = Math.min(t.right, e.right),
                    a = o - r,
                    s = n - i;
                return a >= 0 && s >= 0 && {
                    top: i,
                    bottom: n,
                    left: r,
                    right: o,
                    width: a,
                    height: s
                }
            }
            var lt = i(6875),
                ct = i(1776),
                ut = i(6436),
                dt = i(8446),
                ht = i(4601),
                ft = i(2799),
                gt = i(2268),
                pt = i(974),
                mt = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
            var vt, wt = i(7010),
                yt = {};

            function bt(t, e, i) {
                var n = function(t, e, i) {
                        for (var n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen, r = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen, o = !(!n || !r), a = mt.length; a--;) e.addEventListener(mt[a], i);
                        return {
                            events: mt,
                            supportsDomFullscreen: function() {
                                return o
                            },
                            requestFullscreen: function() {
                                n.call(t, {
                                    navigationUI: "hide"
                                })
                            },
                            exitFullscreen: function() {
                                null !== this.fullscreenElement() && r.apply(e)
                            },
                            fullscreenElement: function() {
                                var t = e.fullscreenElement,
                                    i = e.webkitCurrentFullScreenElement,
                                    n = e.mozFullScreenElement,
                                    r = e.msFullscreenElement;
                                return null === t ? t : t || i || n || r
                            },
                            destroy: function() {
                                for (var t = mt.length; t--;) e.removeEventListener(mt[t], i)
                            }
                        }
                    }(t, e, i),
                    r = yt.requestFullscreen || n.requestFullscreen,
                    o = yt.exitFullscreen || n.exitFullscreen,
                    a = vt || function() {
                        return (0, wt.Z)() && !C.OS.iOS && !C.Browser.safari
                    };
                return n.requestFullscreen = function() {
                    if (!a()) return r.call(n)
                }, n.exitFullscreen = function() {
                    if (!a()) return o.call(n)
                }, n
            }
            var jt = i(5882),
                kt = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this) || this).revertAlternateClickHandlers(), n.domElement = i, n.model = e, n.ui = new jt.ZP(i).on("click", n.clickHandler, (0, y.Z)(n)).on("doubleClick", (function() {
                            this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
                        }), (0, y.Z)(n)), n
                    }(0, v.Z)(e, t);
                    var i = e.prototype;
                    return i.destroy = function() {
                        this.ui && (this.ui.destroy(), this.ui = null, this.domElement = null, this.model = null, this.revertAlternateClickHandlers())
                    }, i.clickHandler = function(t) {
                        this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(r.ot))
                    }, i.element = function() {
                        return this.domElement
                    }, i.setAlternateClickHandlers = function(t, e) {
                        this.alternateClickHandler = t, this.alternateDoubleClickHandler = e || null
                    }, i.revertAlternateClickHandlers = function() {
                        this.alternateClickHandler = null, this.alternateDoubleClickHandler = null
                    }, e
                }(p.ZP),
                _t = i(1831),
                xt = i(5646),
                Mt = {
                    linktarget: "_blank",
                    margin: 8,
                    hide: !1,
                    position: "top-right"
                };

            function Ct(t) {
                var e, i;
                (0, o.Z)(this, p.ZP);
                var n = new Image;
                this.setup = function() {
                    var a, s;
                    ((i = (0, o.Z)({}, Mt, t.get("logo"))).position = i.position || Mt.position, i.hide = "true" === i.hide.toString(), i.file && "control-bar" !== i.position) && (e || (e = (0, ft.az)((a = i.position, s = i.hide, '<div class="jw-logo jw-logo-' + a + (s ? " jw-hide" : "") + ' jw-reset"></div>'))), t.set("logo", i), n.onload = function() {
                        var n = this.height,
                            r = this.width,
                            o = {
                                backgroundImage: 'url("' + this.src + '")'
                            };
                        if (i.margin !== Mt.margin) {
                            var a = /(\w+)-(\w+)/.exec(i.position);
                            3 === a.length && (o["margin-" + a[1]] = i.margin, o["margin-" + a[2]] = i.margin)
                        }
                        var s = .15 * t.get("containerHeight"),
                            l = .15 * t.get("containerWidth");
                        if (n > s || r > l) {
                            var c = r / n;
                            l / s > c ? (n = s, r = s * c) : (r = l, n = l / c)
                        }
                        o.width = Math.round(r), o.height = Math.round(n), (0, pt.oB)(e, o), t.set("logoWidth", o.width)
                    }, n.src = i.file, i.link && (e.setAttribute("tabindex", "0"), e.setAttribute("aria-label", t.get("localization").logo)), this.ui = (0, xt.Z)(e, (function() {
                        this.trigger(r.Ib, {
                            link: i.link,
                            linktarget: i.linktarget
                        })
                    }), this))
                }, this.setContainer = function(t) {
                    e && t.appendChild(e)
                }, this.element = function() {
                    return e
                }, this.position = function() {
                    return i.position
                }, this.destroy = function() {
                    n.onload = null, this.ui && this.ui.destroy()
                }
            }
            var St = function() {
                    function t(t) {
                        this.model = t, this.image = null
                    }
                    var e = t.prototype;
                    return e.setup = function(t) {
                        this.el = t, this.hasZoomThumbnail = this.model.get("_abZoomThumbnail"), this.hasZoomThumbnail && (this.zoomOriginX = Math.ceil(100 * Math.random()) + "%", this.zoomOriginY = Math.ceil(100 * Math.random()) + "%", this.model.on("change:viewable", this.pauseZoomThumbnail, this), this.model.on("change:isFloating", this.enableZoomThumbnail, this))
                    }, e.setImage = function(t) {
                        var e = this.image;
                        e && (e.onload = null), this.image = null;
                        var i = "";
                        "string" == typeof t && t.length > 0 && (i = 'url("' + t + '")', (e = this.image = new Image).src = t), this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"), (0, pt.oB)(this.imageEl, {
                            backgroundImage: i
                        }), this.el && this.el.appendChild(this.imageEl), this.enableZoomThumbnail()) : (0, pt.oB)(this.el, {
                            backgroundImage: i
                        })
                    }, e.enableZoomThumbnail = function() {
                        var t = this;
                        this.hasZoomThumbnail && !this.model.get("isFloating") && (clearTimeout(this.zoomThumbnailTimeout), this.zoomThumbnailTimeout = window.setTimeout((function() {
                            t.imageEl && (t.imageEl.classList.add("jw-ab-zoom-thumbnail"), t.imageEl.style.transformOrigin = t.zoomOriginX + " " + t.zoomOriginY)
                        }), 2e3))
                    }, e.pauseZoomThumbnail = function() {
                        clearTimeout(this.zoomThumbnailTimeout), this.imageEl && (this.imageEl.style.animationPlayState = this.model.get("viewable") ? "running" : "paused")
                    }, e.removeZoomThumbnail = function() {
                        clearTimeout(this.zoomThumbnailTimeout), this.imageEl && this.imageEl.classList.remove("jw-ab-zoom-thumbnail")
                    }, e.resize = function(t, e, i) {
                        var n, r = this;
                        if ("uniform" === i) {
                            if (t && (this.playerAspectRatio = t / e), !this.playerAspectRatio || !this.image || "complete" !== (n = this.model.get("state")) && "idle" !== n && "error" !== n && "buffering" !== n) return;
                            var o = this.image,
                                a = null;
                            if (o) {
                                if (0 === o.width) return void(o.onload = function() {
                                    r.resize(t, e, i)
                                });
                                var s = o.width / o.height;
                                Math.abs(this.playerAspectRatio - s) < .09 && (a = "cover")
                            }(0, pt.oB)(this.el, {
                                backgroundSize: a
                            })
                        }
                    }, e.element = function() {
                        return this.el
                    }, e.destroy = function() {
                        this.hasZoomThumbnail && (this.removeZoomThumbnail(), this.model.off(null, null, this))
                    }, t
                }(),
                It = i(3296),
                Et = function(t) {
                    var e = new St(t),
                        i = !t.get("autostart"),
                        n = e.setImage.bind(e);
                    return (e = (0, o.Z)(e, p.ZP)).deferSetImage = function(n, o, a) {
                        t.once("change:playRejected change:autostart", (function() {
                            t.get("state") === r.bc && (i = !0, e.setImage(n, o, a))
                        }))
                    }, e.setImage = function(r, o, a) {
                        if (t.get("isAudioFile") && (i = !0), !i) return e.deferSetImage(r, o, a);
                        (n(r), o) && new It.Z("posterItem", e.el, a, t, (function() {
                            e.trigger("videoThumbnailFirstFrame", {
                                feedData: a.feedData,
                                target: a,
                                ui: "poster",
                                viewable: t.get("viewable")
                            })
                        })).init()
                    }, e
                },
                Pt = i(5187),
                Tt = function() {
                    function t(t) {
                        this.container = t
                    }
                    var e = t.prototype;
                    return e.disable = function() {
                        this.container && ((0, ft.IV)(this.container, "jw-floating-dragged"), (0, ft.IV)(this.container, "jw-floating-dragging"), Rt(this.container, "auto")), this.uiMedia = this.uiMedia && this.uiMedia.destroy(), this.uiBar = this.uiBar && this.uiBar.destroy(), this.uiTitle = this.uiTitle && this.uiTitle.destroy(), this.uiIcon = this.uiIcon && this.uiIcon.destroy()
                    }, e.enable = function() {
                        this.inputMedia = this.container.querySelector(".jw-media"), this.inputBar = this.container.querySelector(".jw-float-bar"), this.inputTitle = this.container.querySelector(".jw-float-bar-title"), this.inputIcon = this.container.querySelector(".jw-float-bar-icon"), this.x = 0, this.y = 0, this.uiMedia = new jt.ZP(this.inputMedia, {
                            preventScrolling: !0
                        }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiBar = new jt.ZP(this.inputBar, {
                            preventScrolling: !0,
                            directSelect: !0
                        }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiTitle = new jt.ZP(this.inputTitle, {
                            preventScrolling: !0,
                            directSelect: !0
                        }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this), this.uiIcon = new jt.ZP(this.inputIcon, {
                            preventScrolling: !0,
                            directSelect: !0
                        }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this)
                    }, e.dragStart = function(t) {
                        var e = t.pageX,
                            i = t.pageY,
                            n = window,
                            r = n.innerWidth,
                            o = n.innerHeight,
                            a = this.container.querySelector(".jw-float-bar"),
                            s = a && a.offsetHeight || 0,
                            l = this.container,
                            c = l.offsetLeft,
                            u = l.offsetTop,
                            d = l.offsetWidth,
                            h = l.offsetHeight;
                        this.startX = e, this.startY = i, this.minDeltaX = -c, this.minDeltaY = -u, this.maxDeltaX = At(r, c, d), this.maxDeltaY = At(o, u, h + s), (0, ft.cn)(this.container, "jw-floating-dragged"), (0, ft.cn)(this.container, "jw-floating-dragging"), Rt(this.container, "transform")
                    }, e.drag = function(t) {
                        var e = t.pageX,
                            i = t.pageY;
                        this.deltaX = Ft(this.x, e, this.startX, this.maxDeltaX, this.minDeltaX), this.deltaY = Ft(this.y, i, this.startY, this.maxDeltaY, this.minDeltaY), (0, pt.vs)(this.container, "translate(" + this.deltaX + "px, " + this.deltaY + "px)")
                    }, e.dragEnd = function() {
                        (0, ft.IV)(this.container, "jw-floating-dragging"), Rt(this.container, "auto"), this.x = this.deltaX, this.y = this.deltaY
                    }, t
                }(),
                At = function(t, e, i) {
                    return t - e - i
                },
                Ft = function(t, e, i, n, r) {
                    return Math.max(Math.min(t + e - i, n), r)
                },
                Rt = function(t, e) {
                    return (0, pt.oB)(t, {
                        willChange: e
                    })
                };

            function Zt(t, e, i, n) {
                var r = {
                    width: e
                };
                if (n && void 0 !== i && t.set("aspectratio", null), !t.get("aspectratio")) {
                    var o = i;
                    (0, _.hj)(o) && 0 !== o && (o = Math.max(o, 44)), r.height = o
                }
                return r
            }
            var Lt = null,
                Bt = {
                    floatingPlayer: Lt
                };
            Object.defineProperty(Bt, "floatingPlayer", {
                get: function() {
                    return Lt
                },
                set: function(t) {
                    if (t !== Lt) {
                        Lt = t;
                        var e = Vt.slice();
                        Vt.length = 0, e.forEach((function(t) {
                            t.startFloating()
                        }))
                    }
                }
            });
            var Ot, Vt = [],
                zt = function(t) {
                    var e = Vt.indexOf(t); - 1 !== e && Vt.splice(e, 1)
                },
                Ht = function() {
                    function t(t, e, i, n) {
                        void 0 === n && (n = C.OS.mobile), this._playerEl = i.player, this._wrapperEl = i.wrapper, this._preview = i.preview, this._model = t, this._floatingUI = new Tt(this._wrapperEl), this._floatingStoppedForever = !1, this._lastIntRatio = 0, this._playerBounds = e, this._isMobile = n, this._mobileCheckCanFire = !0, this._inTransition = !1, this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this), this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
                    }
                    var e = t.prototype;
                    return e.setup = function() {
                        this._model.change("floating", this._boundInitFloatingBehavior)
                    }, e.initFloatingBehavior = function() {
                        if (!this._floatingStoppedForever && (rt.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), zt(this), this.getFloatingConfig())) {
                            var t = this.getFloatMode();
                            "notVisible" === t ? this._isMobile ? (rt.Z.addScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
                        }
                    }, e.updatePlayerBounds = function(t) {
                        this._playerBounds = t
                    }, e.getFloatingConfig = function() {
                        return this._model.get("floating")
                    }, e.getFloatMode = function() {
                        var t = this.getFloatingConfig();
                        return t && t.mode || "notVisible"
                    }, e.resize = function() {
                        this._model.get("isFloating") && this.updateFloatingSize()
                    }, e.fosMobileBehavior = function() {
                        return this._isMobile && !(0, ft.UM)() && !this._model.get("fullscreen")
                    }, e.shouldFloatOnViewable = function() {
                        var t = this._model.get("state");
                        return t !== r.bc && t !== r.Vy && t !== r.xQ
                    }, e.startFloating = function(t) {
                        var e, i = this,
                            n = this._playerBounds;
                        if (null === this.getFloatingPlayer() && this._wrapperEl.querySelector(".jw-float-bar")) {
                            this.setFloatingPlayer(this._playerEl), this.transitionFloating(!0), this._model.set("isFloating", !0), (0, ft.cn)(this._playerEl, "jw-flag-floating"), t ? ((0, pt.oB)(this._wrapperEl, {
                                transform: "translateY(-" + (62 - n.top) + "px)"
                            }), window.setTimeout((function() {
                                (0, pt.oB)(i._wrapperEl, {
                                    transform: "translateY(0)",
                                    transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
                                })
                            }))) : (0, pt.oB)(this._wrapperEl, {
                                transform: "translate(0)"
                            }), window.setTimeout((function() {
                                i.transitionFloating(!1)
                            }), 50);
                            var r = this._preview.el;
                            (0, pt.oB)(this._playerEl, {
                                backgroundImage: r.style.backgroundImage
                            }), this.updateFloatingSize(), this._model.get("instreamMode") || this._floatingUI.enable()
                        } else this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (e = this, -1 === Vt.indexOf(e) && Vt.push(e))
                    }, e.stopFloating = function(t, e) {
                        var i = this;
                        if (t && (this._floatingStoppedForever = !0, rt.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)), this.getFloatingPlayer() === this._playerEl) {
                            this.transitionFloating(!0), this.setFloatingPlayer(null), this._model.set("isFloating", !1);
                            var n = this._playerBounds,
                                r = function() {
                                    (0, ft.IV)(i._playerEl, "jw-flag-floating"), i._model.trigger("forceAspectRatioChange", {}), (0, pt.oB)(i._playerEl, {
                                        backgroundImage: null
                                    }), (0, pt.oB)(i._wrapperEl, {
                                        maxWidth: null,
                                        width: null,
                                        height: null,
                                        transform: null,
                                        transition: null,
                                        "transition-timing-function": null
                                    }), window.setTimeout((function() {
                                        i.transitionFloating(!1)
                                    }), 50)
                                };
                            e ? ((0, pt.oB)(this._wrapperEl, {
                                transform: "translateY(-" + (62 - n.top) + "px)",
                                "transition-timing-function": "ease-out"
                            }), window.setTimeout(r, 150)) : r(), this.disableFloatingUI()
                        }
                    }, e.transitionFloating = function(t) {
                        this._inTransition = t;
                        var e = this._wrapperEl;
                        (0, pt.oB)(e, {
                            display: t ? "none" : null
                        }), t || this._model.trigger("forceResponsiveListener", {})
                    }, e.isInTransition = function() {
                        return this._inTransition
                    }, e.updateFloatingSize = function() {
                        var t = this._playerBounds,
                            e = this._model.get("width"),
                            i = this._model.get("height"),
                            n = Zt(this._model, e);
                        if (n.maxWidth = Math.min(400, t.width), !this._model.get("aspectratio")) {
                            var r = t.width,
                                o = t.height / r || .5625;
                            (0, _.hj)(e) && (0, _.hj)(i) && (o = i / e), this._model.trigger("forceAspectRatioChange", {
                                ratio: 100 * o + "%"
                            })
                        }(0, pt.oB)(this._wrapperEl, n)
                    }, e.enableFloatingUI = function() {
                        this._floatingUI.enable()
                    }, e.disableFloatingUI = function() {
                        this._floatingUI.disable()
                    }, e.setFloatingPlayer = function(t) {
                        Bt.floatingPlayer = t
                    }, e.getFloatingPlayer = function() {
                        return Bt.floatingPlayer
                    }, e.destroy = function() {
                        this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null), this.getFloatingConfig() && this._isMobile && rt.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler), this._floatingUI.disable(), zt(this), this._model.off("change:floating", this._boundInitFloatingBehavior)
                    }, e.updateFloating = function(t, e) {
                        t < .5 && !(0, gt.cL)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
                    }, e.checkFloatOnScroll = function() {
                        if ("notVisible" === this.getFloatMode()) {
                            var t = this._model.get("isFloating"),
                                e = this._playerBounds,
                                i = e.top < 62,
                                n = window.scrollY || window.pageYOffset,
                                r = i ? e.top <= n : e.top <= n + 62;
                            !t && r ? this.updateFloating(0, i) : t && !r && this.updateFloating(1, i)
                        }
                    }, e.throttledMobileFloatScrollHandler = function() {
                        var t = this;
                        this.fosMobileBehavior() && this._model.get("inDom") && (clearTimeout(this._mobileDebounceTimeout), this._mobileDebounceTimeout = window.setTimeout(this.checkFloatOnScroll.bind(this), 150), this._mobileCheckCanFire && (this._mobileCheckCanFire = !1, this.checkFloatOnScroll(), window.setTimeout((function() {
                            t._mobileCheckCanFire = !0
                        }), 50)))
                    }, e.checkFloatIntersection = function(t) {
                        var e = "number" == typeof t,
                            i = e ? t : this._lastIntRatio;
                        this._canFloat = this._canFloat || i >= .5, !this.getFloatingConfig() || "notVisible" !== this.getFloatMode() || this.fosMobileBehavior() || this._floatingStoppedForever || this._canFloat && this.updateFloating(i), e && (this._lastIntRatio = t)
                    }, e.updateStyles = function() {
                        !this._floatingStoppedForever && this.getFloatingConfig() && "notVisible" === this.getFloatMode() && this._boundThrottledMobileFloatScrollHandler()
                    }, t
                }(),
                Nt = i(9926);
            i(5430);
            var qt = C.OS.mobile,
                Dt = C.Browser.ie;
            var Ut = function(t, e) {
                    var i, n, a, s, l, c, u = this,
                        d = (0, o.Z)(this, p.ZP, {
                            isSetup: !1,
                            api: t,
                            model: e
                        }),
                        h = e.get("localization"),
                        f = (0, ft.az)((i = e.get("id"), n = h.player, '<div id="' + i + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + (n || "") + '" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>')),
                        g = f.querySelector(".jw-wrapper"),
                        m = f.querySelector(".jw-media"),
                        v = new Et(e, t),
                        w = new Pt.Z(e),
                        y = new _t.Z(e);
                    y.on("all", d.trigger, d);
                    var b = -1,
                        j = -1,
                        k = -1,
                        x = e.get("floating");
                    this.dismissible = x && x.dismissible;
                    var M, S, I, E = {},
                        P = new Ht(e, E, {
                            player: f,
                            wrapper: g,
                            preview: v
                        }),
                        T = null,
                        A = null,
                        F = !1,
                        R = null;

                    function Z() {
                        (0, ct.W)(j), j = (0, ct.U)(L)
                    }

                    function L() {
                        d.isSetup && !P.isInTransition() && (d.updateBounds(), d.updateStyles(), d.checkResized())
                    }

                    function B(t, i) {
                        if ((0, _.hj)(t) && (0, _.hj)(i)) {
                            var n = (0, ut.i)(t);
                            (0, ut.d)(f, n);
                            var r = n < 2;
                            (0, ft.og)(f, "jw-flag-small-player", r), (0, ft.og)(f, "jw-orientation-portrait", i > t)
                        }
                        if (e.get("controls")) {
                            var o = function(t) {
                                var e = t.get("height");
                                if (t.get("aspectratio")) return !1;
                                if ("string" == typeof e && e.indexOf("%") > -1) return !1;
                                var i = 1 * e || NaN;
                                return !!(i = isNaN(i) ? t.get("containerHeight") : i) && !!(i && i <= 44)
                            }(e);
                            (0, ft.og)(f, "jw-flag-audio-player", o), e.set("audioMode", o)
                        }
                    }

                    function O() {
                        e.get("pip") || e.set("visibility", ot(e, f))
                    }

                    function V(t, e) {
                        var i = {
                            controls: e
                        };
                        e ? (Ot = ht.v.controls) ? z() : (i.loadPromise = (0, ht.z)().then((function(e) {
                            Ot = e;
                            var i = t.get("controls");
                            return i && z(), i
                        })), i.loadPromise.catch((function(t) {
                            d.trigger(r.cM, t)
                        }))) : d.removeControls(), s && l && d.trigger(r.Hy, i)
                    }

                    function z() {
                        var t = new Ot(document, d.element());
                        d.addControls(t)
                    }

                    function H(t, e, i) {
                        e && !i && (it(t, t.get("state")), d.updateStyles())
                    }

                    function N(t) {
                        A && A.mouseMove(t)
                    }

                    function q(t) {
                        A && !A.showing && "IFRAME" === t.target.nodeName && A.userActive()
                    }

                    function D(t) {
                        A && A.showing && (t.relatedTarget && !f.contains(t.relatedTarget) || !t.relatedTarget && C.Features.iframe) && A.userActive()
                    }

                    function U(t, e) {
                        (0, ft.L_)(f, /jw-stretch-\S+/, "jw-stretch-" + e)
                    }

                    function W(t, e) {
                        (0, ft.og)(f, "jw-flag-aspect-mode", !!e);
                        var i = f.querySelectorAll(".jw-aspect");
                        (0, pt.oB)(i, {
                            paddingTop: e || null
                        }), d.isSetup && e && !t.get("isFloating") && (0, pt.oB)(f, Zt(t, t.get("width")))
                    }

                    function Q(i) {
                        i.link ? (t.pause({
                            reason: "interaction"
                        }), t.setFullscreen(!1), (0, ft.nG)(i.link, i.linktarget, {
                            rel: "noreferrer"
                        })) : e.get("controls") && t.playToggle({
                            reason: "interaction"
                        })
                    }
                    this.updateBounds = function() {
                        (0, ct.W)(j);
                        var t = Mt(),
                            i = document.body.contains(t),
                            n = (0, ft.A8)(t),
                            r = Math.round(n.width),
                            o = Math.round(n.height);
                        if (E = (0, ft.A8)(f), P.updatePlayerBounds(E), r === s && o === l) return s && l || Z(), void e.set("inDom", i);
                        r && o || s && l || Z(), (r || o || i) && (e.set("containerWidth", r), e.set("containerHeight", o)), e.set("inDom", i), i && rt.Z.observe(f)
                    }, this.updateStyles = function() {
                        var t = e.get("containerWidth"),
                            i = e.get("containerHeight");
                        B(t, i), A && A.resize(t, i), J(t, i), y.resize(), P.updateStyles()
                    }, this.checkResized = function() {
                        var t = e.get("containerWidth"),
                            i = e.get("containerHeight"),
                            n = e.get("isFloating");
                        if (t !== s || i !== l) {
                            this.resizeListener || (this.resizeListener = new Nt.Z(g, this, e)), s = t, l = i, d.trigger(r.sF, {
                                width: t,
                                height: i
                            });
                            var o = (0, ut.i)(t);
                            T !== o && (T = o, d.trigger(r.Bs, {
                                breakpoint: T
                            }))
                        }
                        n !== c && (c = n, d.trigger(r.RF, {
                            floating: n
                        }), O())
                    }, this.responsiveListener = Z, this.setup = function() {
                        v.setup(f.querySelector(".jw-preview")), w.setup(f.querySelector(".jw-title")), (a = new Ct(e)).setup(), a.setContainer(g), a.on(r.Ib, Q), y.setup(f.id, e.get("captions")), w.element().parentNode.insertBefore(y.element(), w.element()), M = function(t, e, i) {
                            var n = new kt(e, i),
                                o = e.get("controls");
                            n.on({
                                click: function() {
                                    if (d.trigger(r.cy), Mt().focus(), A) {
                                        if (C.OS.mobile) {
                                            var i = e.get("state");
                                            if (o && (i === r.bc || i === r.xQ || e.get("instream") && i === r._5) && t.playToggle({
                                                    reason: "interaction"
                                                }), o && i === r._5) {
                                                if (e.get("instream") || e.get("castActive") || "audio" === e.get("mediaType")) return;
                                                (0, ft.og)(f, "jw-flag-controls-hidden"), d.dismissible && (0, ft.og)(f, "jw-floating-dismissible", (0, ft.pv)(f, "jw-flag-controls-hidden")), y.renderCues(!0)
                                            } else A.showing ? A.userInactive() : A.userActive();
                                            return
                                        }
                                        mt() ? A.settingsMenu.close() : e.get("displayStats") ? e.set("displayStats", !1) : t.playToggle({
                                            reason: "interaction"
                                        })
                                    }
                                },
                                doubleClick: function() {
                                    return A && t.setFullscreen()
                                }
                            }), qt || (f.addEventListener("mousemove", N), f.addEventListener("mouseover", q), f.addEventListener("mouseout", D));
                            return n
                        }(t, e, m), I = new jt.ZP(f).on("click", (function() {})), S = bt(f, document, K), e.on("change:hideAdsControls", (function(t, e) {
                            (0, ft.og)(f, "jw-flag-ads-hide-controls", e)
                        })), e.on("change:scrubbing", (function(t, e) {
                            (0, ft.og)(f, "jw-flag-dragging", e)
                        })), e.on("change:playRejected", (function(t, e) {
                            (0, ft.og)(f, "jw-flag-play-rejected", e)
                        })), e.on(r.h7, X), e.on("change:" + r.ug, (function() {
                            J(), y.resize()
                        })), e.player.on("change:errorEvent", et), e.change("stretching", U);
                        var i = e.get("width"),
                            n = e.get("height"),
                            o = Zt(e, i, n);
                        (0, pt.oB)(f, o), e.change("aspectratio", W), B(i, n), e.get("controls") || ((0, ft.cn)(f, "jw-flag-controls-hidden"), (0, ft.IV)(f, "jw-floating-dismissible")), Dt && (0, ft.cn)(f, "jw-ie");
                        var s = e.get("skin") || {};
                        s.name && (0, ft.L_)(f, /jw-skin-\S+/, "jw-skin-" + s.name);
                        var l = (0, dt.xq)(s);
                        (0, dt.Sf)(e.get("id"), l), e.set("mediaContainer", m), e.set("iFrame", C.Features.iframe), e.set("activeTab", (0, lt.Z)()), e.set("touchMode", qt && ("string" == typeof n || n >= 44)), rt.Z.add(this), e.get("enableGradient") && !Dt && (0, ft.cn)(f, "jw-ab-drop-shadow"), this.isSetup = !0, e.trigger("viewSetup", f);
                        var c = document.body.contains(f);
                        c && rt.Z.observe(f), e.set("inDom", c), e.on("forceAspectRatioChange", (function(t) {
                            var i = t.ratio || e.get("aspectratio");
                            W(e, i)
                        })), e.on("forceResponsiveListener", Z), P.setup()
                    }, this.init = function() {
                        this.updateBounds(), e.on("change:fullscreen", Y), e.on("change:pip", yt), e.on("change:activeTab", O), e.on("change:fullscreen", O), e.on("change:intersectionRatio", O), e.on("change:visibility", H), e.on("instreamMode", (function(t) {
                            t ? vt() : wt()
                        })), O(), 1 !== rt.Z.size() || e.get("visibility") || H(e, 1, 0);
                        var t = e.player;
                        e.change("state", it), t.change("controls", V), e.change("streamType", G), e.change("mediaType", tt), t.change("playlistItem", (function(t, e) {
                            st(t, e)
                        })), s = l = null, this.initFloatingBehavior(), this.checkResized()
                    }, this.initFloatingBehavior = function() {
                        P.initFloatingBehavior()
                    }, this.addControls = function(i) {
                        var n = this;
                        A = i, (0, ft.IV)(f, "jw-flag-controls-hidden"), (0, ft.og)(f, "jw-floating-dismissible", this.dismissible), i.enable(t, e), l && (B(s, l), i.resize(s, l), y.renderCues(!0)), i.on("userActive userInactive", (function() {
                            var t = e.get("state");
                            t !== r.r0 && t !== r.Kb || y.renderCues(!0)
                        })), i.on("dismissFloating", (function() {
                            n.stopFloating(!0), e.get("autoPause") && !e.get("autoPause").pauseAds && e.get("instream") || t.pause({
                                reason: "interaction"
                            })
                        })), i.on("all", d.trigger, d), e.get("instream") && A.setupInstream()
                    }, this.removeControls = function() {
                        A && (A.disable(e), A = null), (0, ft.cn)(f, "jw-flag-controls-hidden"), (0, ft.IV)(f, "jw-floating-dismissible")
                    };
                    var Y = function(e, i) {
                        if (i && A && e.get("autostartMuted") && A.unmuteAutoplay(t, e), S.supportsDomFullscreen()) i ? S.requestFullscreen() : S.exitFullscreen(), $(f, i);
                        else if (Dt) $(f, i);
                        else {
                            var n = e.get("instream"),
                                r = n ? n.provider : null,
                                o = e.getVideo() || r;
                            o && o.setFullscreen && o.setFullscreen(i)
                        }
                    };

                    function J(t, i) {
                        if ((t && !isNaN(1 * t) || (t = e.get("containerWidth"))) && (i && !isNaN(1 * i) || (i = e.get("containerHeight")))) {
                            v && v.resize(t, i, e.get("stretching"));
                            var n = e.getVideo();
                            n && n.resize(t, i, e.get("stretching"))
                        }
                    }

                    function X(t) {
                        C.OS.mobile && ((0, ft.og)(f, "jw-flag-ios-fullscreen", t.jwstate), K(t))
                    }

                    function K(t) {
                        var i = e.get("fullscreen"),
                            n = void 0 !== t.jwstate ? t.jwstate : function() {
                                if (S.supportsDomFullscreen()) {
                                    var t = S.fullscreenElement();
                                    return !(!t || t !== f)
                                }
                                return e.getVideo().getFullScreen()
                            }();
                        i !== n && e.set("fullscreen", n), C.OS.android && n && screen.orientation.lock("any"), Z(), clearTimeout(b), b = setTimeout(J, 200)
                    }

                    function $(t, e) {
                        (0, ft.og)(t, "jw-flag-fullscreen", e), (0, pt.oB)(document.body, {
                            overflowY: e ? "hidden" : ""
                        }), e && A && A.userActive(), J(), Z()
                    }

                    function G(t, e) {
                        var i = "LIVE" === e;
                        (0, ft.og)(f, "jw-flag-live", i)
                    }

                    function tt(t, e) {
                        var i = "audio" === e,
                            n = t.get("isAudioFile"),
                            r = t.get("playlistItem");
                        n !== i && (t.set("isAudioFile", i), v.setImage(r && r.image)), (0, ft.og)(f, "jw-flag-media-audio", i), i && t.get("pip") && t.set("pip", !1);
                        var o = i ? m : m.nextSibling;
                        v.el.parentNode.insertBefore(v.el, o)
                    }

                    function et(t, e) {
                        if (e) {
                            var i = (0, nt.Z)(t, e);
                            nt.Z.cloneIcon && i.querySelector(".jw-icon").appendChild(nt.Z.cloneIcon("error")), w.hide(), f.appendChild(i.firstChild), (0, ft.og)(f, "jw-flag-audio-player", !!t.get("audioMode"))
                        } else w.playlistItem(t, t.get("playlistItem"))
                    }

                    function it(t, e, i) {
                        if (d.isSetup) {
                            if (i === r.Vy) {
                                var n = f.querySelector(".jw-error-msg");
                                n && n.parentNode.removeChild(n)
                            }(0, ct.W)(k), e === r.r0 ? at(e) : k = (0, ct.U)((function() {
                                return at(e)
                            }))
                        }
                    }

                    function at(t) {
                        switch (e.get("controls") && t !== r._5 && (0, ft.pv)(f, "jw-flag-controls-hidden") && ((0, ft.IV)(f, "jw-flag-controls-hidden"), (0, ft.og)(f, "jw-floating-dismissible", d.dismissible)), (0, ft.L_)(f, /jw-state-\S+/, "jw-state-" + t), t) {
                            case r.Vy:
                                d.stopFloating();
                            case r.bc:
                            case r.xQ:
                                y && y.hide(), v && v.enableZoomThumbnail();
                                break;
                            default:
                                y && (y.show(), t === r._5 && A && !A.showing && y.renderCues(!0)), v && v.removeZoomThumbnail()
                        }
                    }
                    this.resize = function(t, i) {
                        var n = Zt(e, t, i, !0);
                        void 0 !== t && void 0 !== i && (e.set("width", t), e.set("height", i)), (0, pt.oB)(f, n), P.resize(), L()
                    }, this.resizeMedia = J, this.setPosterImage = function(t, e) {
                        e.setImage(t && t.image)
                    };
                    var st = function(t, e) {
                            u.setPosterImage(e, v), qt && function(t, e) {
                                var i = t.get("mediaElement");
                                if (i) {
                                    var n = (0, ft.bJ)(e.title || "");
                                    i.setAttribute("title", n.textContent)
                                }
                            }(t, e)
                        },
                        mt = function() {
                            var t = A && A.settingsMenu;
                            return !(!t || !t.visible)
                        },
                        vt = function() {
                            (0, ft.cn)(f, "jw-flag-ads"), A && A.setupInstream(), P.disableFloatingUI()
                        },
                        wt = function() {
                            if (M) {
                                A && A.destroyInstream(e), P.getFloatingPlayer() !== f || (0, gt.cL)() || P.enableFloatingUI(), d.setAltText(""), (0, ft.IV)(f, ["jw-flag-ads", "jw-flag-ads-hide-controls"]), e.set("hideAdsControls", !1);
                                var t = e.getVideo();
                                t && t.setContainer(m), M.revertAlternateClickHandlers()
                            }
                        },
                        yt = function(t, e) {
                            e ? d.requestPip() : document.pictureInPictureElement && document.exitPictureInPicture()
                        };

                    function xt() {
                        if (R) {
                            var t = R,
                                e = t.video,
                                i = t.enter,
                                n = t.leave;
                            e.removeEventListener("loadedmetadata", i), e.removeEventListener("leavepictureinpicture", n)
                        }
                    }

                    function Mt() {
                        return e.get("isFloating") ? g : f
                    }
                    this.requestPip = function(t) {
                        var i = t || e.get("mediaElement");
                        if (i.requestPictureInPicture) {
                            xt();
                            var n = function t() {
                                    xt(), i.requestPictureInPicture().then((function() {
                                        F || (F = !0, d.trigger("pipEnter", {
                                            video: i
                                        })), i.addEventListener("leavepictureinpicture", r)
                                    })), i.removeEventListener("loadedmetadata", t)
                                },
                                r = function t() {
                                    i.removeEventListener("leavepictureinpicture", t), F && (F = !1, d.trigger("pipLeave", {
                                        video: i
                                    }), e.set("pip", !1), document.pictureInPictureElement && document.exitPictureInPicture())
                                };
                            i.readyState ? n() : i.addEventListener("loadedmetadata", n), R = {
                                video: i,
                                enter: n,
                                leave: r
                            }
                        }
                    }, this.setAltText = function(t) {
                        e.set("altText", t)
                    }, this.clickHandler = function() {
                        return M
                    }, this.getContainer = this.element = function() {
                        return f
                    }, this.getWrapper = function() {
                        return g
                    }, this.controlsContainer = function() {
                        return A ? A.element() : null
                    }, this.getSafeRegion = function(t) {
                        void 0 === t && (t = !0);
                        var e = {
                            x: 0,
                            y: 0,
                            width: s || 0,
                            height: l || 0
                        };
                        return A && t && (e.height -= A.controlbarHeight()), e
                    }, this.setCaptions = function(t) {
                        y.clear(), y.setup(e.get("id"), t), y.resize()
                    }, this.setIntersection = function(t) {
                        var i = Math.round(100 * t.intersectionRatio) / 100;
                        e.set("intersectionRatio", i), this.checkFloatIntersection(i)
                    }, this.checkFloatIntersection = function(t) {
                        P.checkFloatIntersection(t)
                    }, this.stopFloating = function(t, e) {
                        P.stopFloating(t, e)
                    }, this.destroy = function() {
                        e.destroy(), v.destroy(), rt.Z.unobserve(f), rt.Z.remove(this), this.isSetup = !1, this.off(), (0, ct.W)(j), clearTimeout(b), I && (I.destroy(), I = null), S && (S.destroy(), S = null), A && A.disable(e), M && (M.destroy(), f.removeEventListener("mousemove", N), f.removeEventListener("mouseout", D), f.removeEventListener("mouseover", q), M = null), y.destroy(), a && (a.destroy(), a = null), (0, pt.oI)(e.get("id")), this.resizeListener && (this.resizeListener.destroy(), delete this.resizeListener), P.destroy()
                    }
                },
                Wt = !1,
                Qt = window.$sf,
                Yt = function(t, e) {
                    this.playerElement = t, this.wrapperElement = e
                };
            (0, o.Z)(Yt.prototype, {
                setup: function(t) {
                    var e = (0, ft.az)(function(t) {
                        return '<span class="jw-text jw-reset">' + t + "</span>"
                    }(t));
                    this.wrapperElement.appendChild(e), (0, ft.cn)(this.playerElement, "jw-flag-top")
                }
            });
            var Jt, Xt = Yt,
                Kt = i(8675),
                $t = i.n(Kt),
                Gt = i(8168),
                te = i(2977),
                ee = function(t, e, n) {
                    var o = "free" === e.get("edition");
                    o && !Jt && (i(678), Jt = !0, n && n.cssInjected && n.cssInjected());
                    var a = new(n && n.View ? n.View : Ut)(t, e),
                        s = a.setup;
                    if (a.setPosterImage = function(i, n) {
                            var r = (0, te.Cz)(i.images),
                                o = i && i.image,
                                s = a.model.get("containerWidth");
                            s && (o = (0, te.Bf)(i, (0, te.IJ)(s))), r ? (C.OS.mobile || r.reverse(), i.videoThumbnail = r[0].src, n.on("videoThumbnailFirstFrame", (function(e) {
                                t.trigger("videoThumbFirstFrame", e)
                            })), n.setImage(o, !0, i, e)) : n.setImage(o)
                        }, a.setup = function() {
                            var t = this;
                            (s.call(this), e.get("displayHeading")) && new Xt(a.getContainer(), a.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading);
                            e.change("castAvailable", (function(e, i) {
                                var n = e.get("cast");
                                Object(n) === n && (0, ft.og)(t.getContainer(), "jw-flag-cast-available", i)
                            }), this), e.change("castActive", (function(e, i) {
                                var n = e.get("airplayActive"),
                                    r = t.getContainer();
                                (0, ft.og)(r, "jw-flag-casting", i || !1), (0, ft.og)(r, "jw-flag-airplay-casting", n || !1)
                            }), this)
                        }, o) {
                        var l = a.addControls;
                        a.addControls = function(t) {
                            l.call(this, t);
                            var e = document.querySelector(".jw-logo-button");
                            if (e) {
                                var i = (0, Gt.w)($t());
                                e.appendChild(i)
                            }
                        }
                    }
                    var c = e.get("advertising");
                    return c && c.outstream && function(t, e) {
                        Wt || (Wt = !0, i(8206));
                        var n = e.model,
                            o = e.getSafeRegion;
                        e.getSafeRegion = function(t) {
                            var e = o.call(this, t);
                            return e.height = this.api.getHeight(), e
                        }, n.on("change:mediaState", (function(i, a) {
                            if (a === r.ik || a === r.r0) {
                                if (n.off("change:mediaState", null, e), Qt && Qt.ext && Qt.ext.supports()["exp-push"]) {
                                    var s = Qt.ext.geom(),
                                        l = s.exp,
                                        c = s.self,
                                        u = Math.min(t.getHeight() - c.h, l.yx ? 1 / 0 : l.b),
                                        d = Math.min(t.getWidth() - c.w, l.xs ? 1 / 0 : l.r);
                                    (u > 0 || d > 0) && Qt.ext.expand({
                                        b: Math.max(0, u),
                                        r: Math.max(0, d),
                                        push: !0
                                    })
                                }(0, ft.IV)(e.getContainer(), "jw-flag-outstream-pending"), e.getSafeRegion = o, e.responsiveListener()
                            }
                        }), e);
                        var a = e.setup;
                        e.setup = function() {
                            a.call(this), (0, ft.cn)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
                        };
                        var s = n.get("advertising");
                        s.dismissible && (e.dismissible = !0, e.on("dismissFloating", (function() {
                            t.remove()
                        }))), Qt && Qt.ext && t.once(r.Rc, (function() {
                            Qt.ext.register(t.getWidth(), t.getHeight())
                        })), t.once(r.V$, (function() {
                            e.stopFloating(!0), "close" === s.endstate && ((0, ft.cn)(e.getContainer(), "jw-flag-outstream-close"), Qt && Qt.ext && Qt.ext.collapse())
                        }))
                    }(t, a), a
                },
                ie = /^change:(.+)$/;

            function ne(t, e, i) {
                Object.keys(e).forEach((function(n) {
                    n in e && e[n] !== i[n] && t.trigger("change:" + n, t, e[n], i[n])
                }))
            }

            function re(t, e) {
                t && t.off(null, null, e)
            }
            var oe = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this) || this)._model = e, n._mediaModel = null, (0, o.Z)(e.attributes, {
                            altText: "",
                            fullscreen: !1,
                            logoWidth: 0,
                            scrubbing: !1
                        }), e.on("all", (function(t, r, o, a) {
                            r === e && (r = (0, y.Z)(n)), i && !i(t, r, o, a) || n.trigger(t, r, o, a)
                        }), (0, y.Z)(n)), e.on("change:mediaModel", (function(t, e) {
                            n.mediaModel = e
                        }), (0, y.Z)(n)), n
                    }(0, v.Z)(e, t);
                    var i = e.prototype;
                    return i.get = function(t) {
                        var e = this._mediaModel;
                        return e && t in e.attributes ? e.get(t) : this._model.get(t)
                    }, i.set = function(t, e) {
                        return this._model.set(t, e)
                    }, i.getCues = function() {
                        return this._model.getCues()
                    }, i.getVideo = function() {
                        return this._model.getVideo()
                    }, i.destroy = function() {
                        re(this._model, this), re(this._mediaModel, this), this.off()
                    }, (0, m.Z)(e, [{
                        key: "mediaModel",
                        set: function(t) {
                            var e = this,
                                i = this._mediaModel;
                            re(i, this), this._mediaModel = t, t.on("all", (function(i, n, r, o) {
                                n === t && (n = e), e.trigger(i, n, r, o)
                            }), this), i && ne(this, t.attributes, i.attributes)
                        }
                    }]), e
                }(S.Z),
                ae = function(t) {
                    function e(e) {
                        var i;
                        return (i = t.call(this, e, (function(t) {
                            var e = i._instreamModel;
                            if (e) {
                                var n = ie.exec(t);
                                if (n)
                                    if (n[1] in e.attributes) return !1
                            }
                            return !0
                        })) || this)._instreamModel = null, i._playerViewModel = new oe(i._model), e.on("change:instream", (function(t, e) {
                            var n = e ? e.model : null;
                            i._model.set("instreamMode", !!n), i.instreamModel = n
                        }), (0, y.Z)(i)), i
                    }(0, v.Z)(e, t);
                    var i = e.prototype;
                    return i.get = function(t) {
                        var e = this._mediaModel;
                        if (e && t in e.attributes) return e.get(t);
                        var i = this._instreamModel;
                        return i && t in i.attributes ? i.get(t) : this._model.get(t)
                    }, i.getVideo = function() {
                        var e = this._instreamModel;
                        return e && e.getVideo() ? e.getVideo() : t.prototype.getVideo.call(this)
                    }, i.destroy = function() {
                        t.prototype.destroy.call(this), re(this._instreamModel, this)
                    }, (0, m.Z)(e, [{
                        key: "player",
                        get: function() {
                            return this._playerViewModel
                        }
                    }, {
                        key: "instreamModel",
                        set: function(t) {
                            var e = this,
                                i = this._instreamModel;
                            if (i || t)
                                if (re(i, this), this._model.off("change:mediaModel", null, this), this._instreamModel = t, this.trigger("instreamMode", !!t), t) t.on("all", (function(i, n, r, o) {
                                    n === t && (n = e), e.trigger(i, n, r, o)
                                }), this), t.change("mediaModel", (function(t, i) {
                                    e.mediaModel = i
                                }), this), ne(this, t.attributes, this._model.attributes);
                                else if (i) {
                                this._model.change("mediaModel", (function(t, i) {
                                    e.mediaModel = i
                                }), this);
                                var n = (0, o.Z)({}, this._model.attributes, i.attributes);
                                ne(this, this._model.attributes, n)
                            }
                        }
                    }]), e
                }(oe);
            var se, le, ce = i(5099),
                ue = (se = window).URL && se.URL.createObjectURL ? se.URL : se.webkitURL || se.mozURL,
                de = window.Blob;

            function he(t, e) {
                var i = e.muted;
                if (!le) try {
                    le = new de([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
                        type: "video/mp4"
                    })
                } catch (t) {
                    return Promise.resolve()
                }
                return C.OS.tizen ? Promise.resolve() : (t.muted = i, t.src = ue.createObjectURL(le), t.play() || (0, ce.Z)(t))
            }
            var fe = "autoplayMuted",
                ge = "autoplayDisabled",
                pe = {};

            function me(t, e) {
                var i = e.cancelable,
                    n = e.muted,
                    r = void 0 !== n && n,
                    o = e.allowMuted,
                    a = void 0 !== o && o,
                    s = e.timeout,
                    l = void 0 === s ? 1e4 : s,
                    c = t.getTestElement(),
                    u = r ? "muted" : "" + a;
                pe[u] || (pe[u] = he(c, {
                    muted: r
                }).catch((function(t) {
                    if (!i.cancelled() && !1 === r && a) return he(c, {
                        muted: r = !0
                    });
                    throw t
                })).then((function() {
                    return r ? (pe[u] = null, fe) : "autoplayEnabled"
                })).catch((function(t) {
                    throw clearTimeout(d), pe[u] = null, t.reason = ge, t
                })));
                var d, h = pe[u].then((function(t) {
                        if (clearTimeout(d), i.cancelled()) {
                            var e = new Error("Autoplay test was cancelled");
                            throw e.reason = "cancelled", e
                        }
                        return t
                    })),
                    f = new Promise((function(t, e) {
                        d = setTimeout((function() {
                            pe[u] = null;
                            var t = new Error("Autoplay test timed out");
                            t.reason = "timeout", e(t)
                        }), l)
                    }));
                return Promise.race([h, f])
            }
            var ve = i(686),
                we = i(7543),
                ye = i(7411),
                be = "tabVisible",
                je = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return (0, v.Z)(e, t), e.prototype.getFirstFrame = function() {
                        var t = this.between(r.cq, r.FU),
                            e = this.between(be, r.FU);
                        return e && t && e > 0 && e < t ? e : t
                    }, e
                }(ye.Z);

            function ke(t, e) {
                e.off(r.cq, t._onPlayAttempt), e.off(r.Gj, t._triggerFirstFrame), e.off(r.R2, t._onTime), t.off("change:activeTab", t._onTabVisible), t._triggerFirstFrame = t._onTime = null
            }

            function _e(t, e) {
                t.change("mediaModel", (function(t, i, n) {
                    t._qoeItem && n && t._qoeItem.end(n.get("mediaState")), t._qoeItem = new je, t._qoeItem.tick(r.gO), t._qoeItem.start(i.get("mediaState")),
                        function(t, e) {
                            t._onTabVisible && ke(t, e);
                            var i, n, o = !1;
                            t._triggerFirstFrame = function(i) {
                                if (!o && e.mediaController) {
                                    var n = e.mediaController.mediaModel,
                                        a = n.attributes.mediaState;
                                    if (a === r.r0 || a === r._5 || i.type === r.Gj) {
                                        o = !0;
                                        var s = t._qoeItem;
                                        s.tick(r.FU);
                                        var l = s.getFirstFrame();
                                        e.trigger(r.FU, {
                                            loadTime: l
                                        }), n.off("change:" + r.ug, null, n), n.change(r.ug, (function(t, i) {
                                            i && e.trigger(r.ug, i)
                                        }), n), ke(t, e)
                                    }
                                }
                            }, t._onTime = (i = t._triggerFirstFrame, n = 0, function(t) {
                                var e = t.position;
                                e > n && i(t), n = e
                            }), t._onPlayAttempt = function() {
                                this._qoeItem.tick(r.cq)
                            }, t._onTabVisible = function(t, e) {
                                e ? t._qoeItem.tick(be) : t._qoeItem.tick("tabHidden")
                            }, t.on("change:activeTab", t._onTabVisible), e.on(r.cq, t._onPlayAttempt, t), e.once(r.Gj, t._triggerFirstFrame), e.on(r.R2, t._onTime)
                        }(t, e), i.on("change:mediaState", (function(e, i, n) {
                            i !== n && (t._qoeItem.end(n), t._qoeItem.start(i))
                        }))
                }))
            }
            var xe = function(t) {
                    for (var e = (t || "").replace(/^\?/, "").split("&"), i = -1, n = 0; n < e.length; n++)
                        if (/^jw_start=/.test(e[n])) {
                            i = n;
                            break
                        } if (-1 === i) return -1;
                    var r = parseFloat(e[i].replace("jw_start=", ""));
                    return "number" != typeof r || isNaN(r) || r < 0 ? -1 : r
                },
                Me = i(2557);
            var Ce = function() {},
                Se = function() {};
            (0, o.Z)(Ce.prototype, {
                destroy: function() {
                    var t, e;
                    this.off(), this.stop(), (0, s.c)(this, this.originalContainer), this._view && this._view.destroy(), this._model && (t = this._model, e = this._programController, t._onTabVisible && ke(t, e), t._qoeItem = t._triggerFirstFrame = t._onTime = t._onPlayAttempt = t._onTabVisible = null, this._model.destroy()), this._apiQueue && this._apiQueue.destroy(), this._captions && this._captions.destroy(), this._programController && this._programController.destroy(), this.instreamDestroy(!0), this._view = this._model = this._apiQueue = this._captions = this._programController = null, this.clearSetupVars && this.clearSetupVars()
                },
                playerSetup: function(t, e, i, n, g, m) {
                    var v, w, y = this,
                        b = this,
                        x = b._model = new F;
                    x.set("jwStart", xe(window.location.search));
                    var M, S, I = !1,
                        P = !1,
                        T = null,
                        A = j(N),
                        R = j(Se);
                    b.originalContainer = b.currentContainer = i, b._events = n, b.trigger = function(t, e) {
                        var i = function(t, e, i) {
                            var n = i;
                            switch (e) {
                                case "time":
                                case "beforePlay":
                                case "pause":
                                case "play":
                                case "ready":
                                    var r = t.get("viewable");
                                    void 0 !== r && (n = (0, o.Z)({}, i, {
                                        viewable: r
                                    }))
                            }
                            return n
                        }(x, t, e);
                        return p.ZP.trigger.call(this, t, i)
                    };
                    var Z = new u.Z(b, ["trigger"], (function() {
                            return !0
                        })),
                        L = function(t, e) {
                            b.trigger(t, e)
                        };
                    x.setup(t);
                    var B = x.get("backgroundLoading"),
                        O = new ae(x);
                    (v = this._view = new ee(e, O)).on("all", (function(t, e) {
                        e && e.doNotForward || L(t, e)
                    }), b), O.on("viewSetup", (function(t) {
                        (0, s.c)(y, t)
                    }));
                    var V = this._programController = new U(x, m, e._publicApi);
                    mt(), V.on("all", L, b).on("subtitlesTracks", (function(t) {
                        if (w) {
                            w.setSubtitlesTracks(t.tracks);
                            var e = w.getCurrentIndex();
                            e > 0 && ft(e, t.tracks)
                        }
                    }), b).on(r.Ms, (function() {
                        Promise.resolve().then(ht)
                    }), b).on(r.Ew, b.triggerError, b), _e(x, V), b.clearSetupVars = function() {
                        Z && Z.destroy(), b = V = x = v = A = R = vt = Z = null
                    }, x.on(r.pn, b.triggerError, b), x.on("change:state", (function(t, e, i) {
                        K() || Q.call(y, t, e, i)
                    }), this), x.on("change:castState", (function(t, e) {
                        b.trigger(r.pi, e)
                    })), x.on("change:fullscreen", (function(t, e) {
                        b.trigger(r.UW, {
                            fullscreen: e
                        }), e && t.set("playOnViewable", !1)
                    })), x.on("change:volume", (function(t, e) {
                        b.trigger(r.yH, {
                            volume: e
                        })
                    })), x.on("change:mute", (function(t) {
                        b.trigger(r.gy, {
                            mute: t.getMute()
                        })
                    })), x.on("change:playbackRate", (function(t, e) {
                        b.trigger(r.QF, {
                            playbackRate: e,
                            position: t.get("position")
                        })
                    }));
                    var z = function t(e, i) {
                        "clickthrough" === i || "interaction" === i || "external" === i ? (x.set("playOnViewable", !1), x.off("change:playReason change:pauseReason", t)) : !i && x.get("autostart") && "playing" === K() && x.set("playReason", "autostart")
                    };

                    function H(t, e) {
                        (0, _.o8)(e) || x.set("viewable", Math.round(e))
                    }
                    x.on("change:playReason change:pauseReason", z), b.on(r.WE, (function(t) {
                        return z(0, t.playReason)
                    })), b.on(r.Ax, (function(t) {
                        return z(0, t.pauseReason)
                    })), x.on("change:scrubbing", (function(t, e) {
                        e ? (T = x.get("state") !== r._5, st({
                            reason: "interaction"
                        })) : T && tt({
                            reason: "interaction"
                        })
                    })), x.on("change:captionsList", (function(t, e) {
                        b.trigger(r.SL, {
                            tracks: e,
                            track: x.get("captionsIndex") || 0
                        })
                    })), x.on("change:mediaModel", (function(t, e) {
                        var i = this;
                        t.set("errorEvent", void 0), e.change("mediaState", (function(e, i) {
                            var n;
                            t.get("errorEvent") || t.set(r.uc, (n = i) === r.ik || n === r.nQ ? r.Kb : n)
                        }), this), e.change("duration", (function(e, i) {
                            if (0 !== i) {
                                var n = t.get("minDvrWindow"),
                                    r = (0, ve.v)(i, n);
                                t.setStreamType(r)
                            }
                        }), this);
                        var n = "autoplay" === (t.get("related") || {}).oncomplete,
                            o = t.get("item") + 1,
                            a = t.get("playlist")[o];
                        if (a || n) {
                            e.on("change:position", (function t(r, s) {
                                if (n && !a && (o = -1, a = x.get("nextUp")), a && !a.daiSetting) {
                                    var l = e.get("duration");
                                    s && l > 0 && s >= l - f.l_ && (e.off("change:position", t, i), B ? V.backgroundLoad(a, o) : V.getAsyncItem(o).run())
                                }
                            }), this)
                        }
                    })), (w = this._captions = new it(x)).on("all", L, b), this.playerReady = function() {
                        v.once(r.sF, (function() {
                            try {
                                ! function() {
                                    x.change("visibility", H), Z.off(), b.trigger(r.Rc, {
                                        setupTime: 0
                                    }), x.change("playlist", (function(t, e) {
                                        if (e.length) {
                                            var i = {
                                                    playlist: e
                                                },
                                                n = x.get("feedData");
                                            n && (i.feedData = (0, o.Z)({}, n)), b.trigger(r.Ow, i)
                                        }
                                    })), x.change("playlistItem", (function(t, e) {
                                        if (e) {
                                            var i = e.title,
                                                n = e.image;
                                            if ("mediaSession" in navigator && window.MediaMetadata && (i || n)) try {
                                                navigator.mediaSession.metadata = new window.MediaMetadata({
                                                    title: i,
                                                    artist: window.location.hostname,
                                                    artwork: [{
                                                        src: n || ""
                                                    }]
                                                })
                                            } catch (t) {}
                                            e.chapters || t.setCues([]), b.trigger(r.gO, {
                                                index: x.get("item"),
                                                item: e
                                            })
                                        }
                                    })), Z.flush(), Z.destroy(), Z = null, x.change("viewable", q), x.change("viewable", J), x.get("autoPause").viewability ? x.change("viewable", X) : x.once("change:autostartFailed change:mute", (function(t) {
                                        t.off("change:viewable", J)
                                    }));
                                    N(), x.on("change:itemReady", (function(t, e) {
                                        e && (vt.flush(), x.get("pip") && !b._instreamAdapter && v.requestPip())
                                    }))
                                }()
                            } catch (t) {
                                b.triggerError((0, k.Mm)(k.ud, k.YQ, t))
                            }
                        })), v.init()
                    };
                    var N = function() {
                        vt && (x.get("generateSEOMetadata") && x.get("jwStart") >= 0 ? (y._model.setAutoStart("viewable"), y._model.set("playReason", "jwstart"), x.get("viewable") ? J(x, x.get("viewable")) : X(x, x.get("viewable"))) : !0 !== x.get("autostart") || x.get("playOnViewable") || rt("autostart"), vt.flush())
                    };

                    function q(t, e) {
                        b.trigger("viewable", {
                            viewable: e
                        }), D()
                    }

                    function D() {
                        if ((a.Z[0] === e || 1 === x.get("viewable")) && "idle" === x.get("state") && !1 === x.get("autostart"))
                            if (!m.primed() && C.OS.android) {
                                var t = m.getTestElement(),
                                    i = b.getMute();
                                Promise.resolve().then((function() {
                                    return he(t, {
                                        muted: i
                                    })
                                })).then((function() {
                                    "idle" === x.get("state") && V.preloadVideo()
                                })).catch(Se)
                            } else V.preloadVideo()
                    }

                    function W(t) {
                        b._instreamAdapter.noResume = !t, t || at({
                            reason: "viewable"
                        })
                    }

                    function Y(t) {
                        t || (b.pause({
                            reason: "viewable"
                        }), x.set("playOnViewable", !t))
                    }

                    function J(t, e) {
                        var i = K();
                        if (t.get("playOnViewable")) {
                            if (e) {
                                var n = "viewable",
                                    o = t.get("autoPause").pauseAds,
                                    a = t.get("pauseReason");
                                G() === r.bc ? rt(n) : i && !o || "interaction" === a || tt({
                                    reason: n
                                })
                            } else C.OS.mobile && !i && (b.pause({
                                reason: "autostart"
                            }), x.set("playOnViewable", !0));
                            C.OS.mobile && i && W(e)
                        }
                    }

                    function X(t, e) {
                        var i = t.get("state"),
                            n = K(),
                            o = t.get("playReason");
                        n ? t.get("autoPause").pauseAds ? Y(e) : W(e) : i === r.r0 || i === r.Kb ? Y(e) : i === r.bc && "playlist" === o && t.once("change:state", (function() {
                            Y(e)
                        }))
                    }

                    function K() {
                        var t = b._instreamAdapter;
                        return !!t && t.getState()
                    }

                    function G() {
                        var t = K();
                        return t || x.get("state")
                    }

                    function tt(t) {
                        if (A.cancel(), P = !1, x.get("state") === r.Vy) return Promise.resolve();
                        var i = nt(t);
                        x.set("playReason", i);
                        var n = K();
                        return n ? (x.get("autostart") && "paused" === n && x.set("playReason", "autostart"), b._instreamAdapter.off("state", ct, b), e.pauseAd(!1, t), Promise.resolve()) : x.get("state") === r.xQ ? (ot(!0), b.setItemIndex(0).then((function() {
                            return et(t, i)
                        }))) : et(t, i)
                    }

                    function et(t, e) {
                        if (!I && (I = !0, b.trigger(r.$j, {
                                playReason: e,
                                startTime: t && t.startTime ? t.startTime : x.get("playlistItem").starttime
                            }), I = !1, (0, we.C)() && !m.primed() && m.prime(), "playlist" === e && x.get("autoPause").viewability && X(x, x.get("viewable")), S)) {
                            if ((0, we.C)() && !B) {
                                var i = x.get("mediaElement");
                                b._instreamAdapter && (i.preload = "none"), i.load()
                            }
                            return S = !1, M = null, Promise.resolve()
                        }
                        return V.playVideo(e).then(m.played)
                    }

                    function nt(t) {
                        return t && t.reason ? t.reason : t && t.startTime ? "jwstart" : "unknown"
                    }

                    function rt(t) {
                        if (G() === r.bc) {
                            A = j(N);
                            var e = x.get("advertising");
                            me(m, {
                                cancelable: A,
                                muted: b.getMute(),
                                allowMuted: !e || e.autoplayadsmuted
                            }).then((function(e) {
                                return x.set("canAutoplay", e), e !== fe || b.getMute() || (x.set("autostartMuted", !0), mt(), x.once("change:autostartMuted", (function(t) {
                                    x.get("autoPause").viewability || x.get("playOnViewable") || t.off("change:viewable", J), b.trigger(r.gy, {
                                        mute: x.getMute()
                                    })
                                }))), w && b.getMute() && x.get("enableDefaultCaptions") && w.selectDefaultIndex(1), tt({
                                    reason: t
                                }).catch((function() {
                                    b._instreamAdapter || x.set("autostartFailed", !0), M = null
                                }))
                            })).catch((function(t) {
                                if (x.set("canAutoplay", ge), x.set("autostart", !1), !A.cancelled()) {
                                    var e = (0, k.nm)(t);
                                    b.trigger(r.wh, {
                                        reason: t.reason,
                                        code: e,
                                        error: t
                                    })
                                }
                            }))
                        }
                    }

                    function ot(t) {
                        if (A.cancel(), vt.empty(), K()) {
                            var e = b._instreamAdapter;
                            return e && (e.noResume = !0), void(M = function() {
                                return V.stopVideo()
                            })
                        }
                        M = null, !t && (P = !0), I && (S = !0), x.set("errorEvent", void 0), V.stopVideo()
                    }

                    function at(t) {
                        var e = nt(t);
                        x.set("pauseReason", e), x.set("playOnViewable", "viewable" === e)
                    }

                    function st(t) {
                        M = null, A.cancel();
                        var i = K();
                        if (i && i !== r._5) return at(t), void(i === r.Kb ? v.once("dismissFloating", lt) : e.pauseAd(!0, t));
                        switch (x.get("state")) {
                            case r.Vy:
                                return;
                            case r.r0:
                            case r.Kb:
                                at(t), V.pause();
                                break;
                            default:
                                I && (S = !0)
                        }
                    }

                    function lt() {
                        b._instreamAdapter.once("state", ct), b._instreamAdapter.noResume = !0
                    }

                    function ct() {
                        var t = x.get("pauseReason");
                        e.pauseAd(!0, {
                            reason: t
                        })
                    }

                    function ut(t, e) {
                        b.instreamDestroy(), ot(!0), b.setItemIndex(t), b.play(e)
                    }

                    function dt(t) {
                        ut(x.get("item") + 1, t)
                    }

                    function ht() {
                        b.completeCancelled() || (M = b.completeHandler, b.shouldAutoAdvance() ? b.nextItem() : x.get("repeat") ? dt({
                            reason: "repeat"
                        }) : (C.OS.iOS && pt(!1), x.set("playOnViewable", !1), x.set("state", r.xQ), b.trigger(r.V$, {})))
                    }

                    function ft(t, e) {
                        t = parseInt(t, 10) || 0, x.persistVideoSubtitleTrack(t, e), V.subtitles = t, b.trigger(r.Z_, {
                            tracks: gt(),
                            track: t
                        })
                    }

                    function gt() {
                        return w ? w.getCaptionsList() : []
                    }

                    function pt(t) {
                        x.get("pip") && x.set("pip", !1), (0, _.jn)(t) || (t = !x.get("fullscreen")), !x.get("allowFullscreen") && t || (x.set("fullscreen", t), b._instreamAdapter && b._instreamAdapter._adModel && b._instreamAdapter._adModel.set("fullscreen", t))
                    }

                    function mt() {
                        V.setMute(x.getMute()), V.setVolume(x.get("volume"))
                    }
                    this.preload = D, this.load = function(t, e) {
                        var i, n = b._instreamAdapter;
                        switch (n && (n.noResume = !0), b.trigger("destroyPlugin", {}), ot(!0), V.clearItemPromises(), A.cancel(), A = j(N), R.cancel(), (0, we.C)() && m.prime(), typeof t) {
                            case "string":
                                x.attributes.item = 0, x.attributes.itemReady = !1, R = j((function(t) {
                                    if (t) return b.updatePlaylist((0, h.ZP)(t.playlist), t)
                                })), i = function(t) {
                                    var e = this;
                                    return new Promise((function(i, n) {
                                        var o = new d.Z;
                                        o.on(r.Ow, (function(t) {
                                            i(t)
                                        })), o.on(r.pn, n, e), o.load(t)
                                    }))
                                }(t).then((function(t) {
                                    return R.async(t)
                                }));
                                break;
                            case "object":
                                x.attributes.item = 0, i = b.updatePlaylist((0, h.ZP)(t), e || {});
                                break;
                            case "number":
                                i = b.setItemIndex(t);
                                break;
                            default:
                                return
                        }
                        i.catch((function(t) {
                            b.triggerError((0, k.l9)(t, k.DD))
                        })), i.then((function() {
                            return A.async()
                        })).catch(Se)
                    }, this.play = function(t) {
                        return tt(t).catch(Se)
                    }, this.pause = st, this.seek = function(t, e) {
                        var i = x.get("state");
                        if (i !== r.Vy) {
                            e && i === r.r0 && x.get("playReason") !== e.reason && x.set("playReason", e.reason), V.position = t;
                            var n = i === r.bc;
                            x.get("scrubbing") || !n && i !== r.xQ || (n && ((e = e || {}).startTime = t), this.play(e))
                        }
                    }, this.stop = ot, this.playlistItem = ut, this.playlistNext = dt, this.playlistPrev = function(t) {
                        ut(x.get("item") - 1, t)
                    }, this.setCurrentCaptions = ft, this.setCurrentQuality = function(t) {
                        V.quality = t
                    }, this.setFullscreen = pt, this.setAllowFullscreen = function(t) {
                        x.set("allowFullscreen", t), !t && x.get("fullscreen") && b.setFullscreen(!1)
                    }, this.setPip = function(t) {
                        x.get("fullscreen") && x.set("fullscreen", !1), (0, _.jn)(t) || (t = !x.get("pip")), x.set("pip", t)
                    }, this.getCurrentQuality = function() {
                        return V.quality
                    }, this.getQualityLevels = function() {
                        return V.qualities
                    }, this.setCurrentAudioTrack = function(t) {
                        V.audioTrack = t
                    }, this.getCurrentAudioTrack = function() {
                        return V.audioTrack
                    }, this.getAudioTracks = function() {
                        return V.audioTracks
                    }, this.getCurrentCaptions = function() {
                        return w ? w.getCurrentIndex() : -1
                    }, this.getCaptionsList = gt, this.getVisualQuality = function() {
                        var t = this._model.get("mediaModel");
                        return t ? t.get(r.ug) : null
                    }, this.getConfig = function() {
                        return this._model ? this._model.getConfiguration() : void 0
                    }, this.getState = G, this.next = Se, this.completeHandler = ht, this.completeCancelled = function() {
                        return (t = x.get("state")) !== r.bc && t !== r.xQ && t !== r.Vy || !!P && (P = !1, !0);
                        var t
                    }, this.shouldAutoAdvance = function() {
                        return x.get("item") !== x.get("playlist").length - 1
                    }, this.nextItem = function() {
                        dt({
                            reason: "playlist"
                        })
                    }, this.setConfig = function(t) {
                        ! function(t, e) {
                            var i = t._model,
                                n = i.attributes;
                            if (e.height && (e.height = (0, l.a)(e.height), e.width = e.width || n.width), e.width && (e.width = (0, l.a)(e.width), e.aspectratio ? (n.width = e.width, delete e.width) : e.height = n.height), e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height), e.floating) {
                                var r = i.get("floating") || {},
                                    a = (0, o.Z)({}, r, e.floating); - 1 === c.indexOf(a.mode) ? delete e.floating : e.floating = a
                            }
                            Object.keys(e).forEach((function(r) {
                                var o = e[r];
                                if (void 0 !== o) switch (r) {
                                    case "aspectratio":
                                        i.set(r, (0, l.R)(o, n.width));
                                        break;
                                    case "autostart":
                                        ! function(t, e, i) {
                                            t.setAutoStart(i), "idle" === t.get("state") && !0 === i && e.play({
                                                reason: "autostart"
                                            })
                                        }(i, t, o);
                                        break;
                                    case "mute":
                                        t.setMute(o);
                                        break;
                                    case "volume":
                                        t.setVolume(o);
                                        break;
                                    case "playbackRateControls":
                                    case "playbackRates":
                                    case "repeat":
                                    case "stretching":
                                    case "floating":
                                        i.set(r, o)
                                }
                            }))
                        }(b, t)
                    }, this.setItemIndex = function(t) {
                        V.stopVideo();
                        var e = x.get("playlist").length,
                            i = (0, h.bx)(t, e);
                        return V.setActiveItem(i).catch((function(t) {
                            if (t.code === k._M) {
                                if (V.asyncItems.reduce((function(t, e) {
                                        return t && e.skipped
                                    }), !0)) throw t;
                                var e = y.shouldAutoAdvance;
                                return y.shouldAutoAdvance = function() {
                                    return !1
                                }, ht(), x.attributes.itemReady = !0, void(y.shouldAutoAdvance = e)
                            }
                            t.code >= 151 && t.code <= 162 && (t = (0, k.l9)(t, k.EY)), y.triggerError((0, k.Mm)(k.ul, k.tJ, t))
                        }))
                    }, this.detachMedia = function() {
                        if (I && (S = !0), x.get("autoPause").viewability && X(x, x.get("viewable")), !B) return V.setAttached(!1);
                        V.backgroundActiveMedia()
                    }, this.attachMedia = function() {
                        B ? V.restoreBackgroundMedia() : V.setAttached(!0), "function" == typeof M && M()
                    }, this.routeEvents = function(t) {
                        return V.routeEvents(t)
                    }, this.forwardEvents = function() {
                        return V.forwardEvents()
                    }, this.playVideo = function(t) {
                        return V.playVideo(t)
                    }, this.stopVideo = function() {
                        return V.stopVideo()
                    }, this.castVideo = function(t, e) {
                        return V.castVideo(t, e)
                    }, this.stopCast = function() {
                        return V.stopCast()
                    }, this.backgroundActiveMedia = function() {
                        return V.backgroundActiveMedia()
                    }, this.restoreBackgroundMedia = function() {
                        return V.restoreBackgroundMedia()
                    }, this.preloadNextItem = function() {
                        V.background.currentMedia && V.preloadVideo()
                    }, this.isBeforeComplete = function() {
                        return V.beforeComplete
                    }, this.setVolume = function(t) {
                        x.setVolume(t), mt()
                    }, this.setMute = function(t) {
                        x.setMute(t), mt()
                    }, this.setPlaybackRate = function(t) {
                        x.setPlaybackRate(t)
                    }, this.getProvider = function() {
                        return x.get("provider")
                    }, this.getWidth = function() {
                        return x.get("containerWidth")
                    }, this.getHeight = function() {
                        return x.get("containerHeight")
                    }, this.getItemQoe = function() {
                        return x._qoeItem
                    }, this.setItemCallback = function(t) {
                        V.itemCallback = t
                    }, this.getItemPromise = function(t) {
                        var e = x.get("playlist");
                        if (t < -1 || t > e.length - 1 || isNaN(t)) return null;
                        var i = V.getAsyncItem(t);
                        return i ? i.promise : null
                    }, this.addButton = function(t, e, i, n, r) {
                        var o = x.get("customButtons") || [],
                            a = !1,
                            s = {
                                img: t,
                                tooltip: e,
                                callback: i,
                                id: n,
                                btnClass: r
                            };
                        o = o.reduce((function(t, e) {
                            return e.id === n ? (a = !0, t.push(s)) : t.push(e), t
                        }), []), a || o.unshift(s), x.set("customButtons", o)
                    }, this.removeButton = function(t) {
                        var e = x.get("customButtons") || [];
                        e = e.filter((function(e) {
                            return e.id !== t
                        })), x.set("customButtons", e)
                    }, this.resize = v.resize, this.getSafeRegion = v.getSafeRegion, this.setCaptions = v.setCaptions, this.checkBeforePlay = function() {
                        return I
                    }, this.setControls = function(t) {
                        (0, _.jn)(t) || (t = !x.get("controls")), x.set("controls", t), V.controls = t
                    }, this.addCues = function(t) {
                        this.setCues(x.getCues().concat(t))
                    }, this.setCues = function(t) {
                        x.setCues(t)
                    }, this.getCues = function() {
                        return x.getCues()
                    }, this.getChapters = function() {
                        return x.get("playlistItem").chapters.timestamps
                    }, this.getCurrentChapter = function() {
                        var t = x.get("state"),
                            e = x.get("playlistItem").chapters.timestamps;
                        if (!e || !e.length || t === r.xQ) return null;
                        if (t === r.bc) return e[0];
                        var i = this.get("currentTime");
                        return (0, E.Mf)(i, e)
                    }, this.setChapter = function(t) {
                        try {
                            var e = x.get("playlistItem"),
                                i = e.chapters.timestamps;
                            if (!i) return;
                            t instanceof Me.u || (t = new Me.u(t));
                            for (var n = -1, r = 0; r < i.length; r++)
                                if (i[r].time === t.time) {
                                    n = r;
                                    break
                                } - 1 !== n ? i[n] = t : i.push(t), e.chapters.timestamps = i, x.setCues(x.getCues()), x.set("playlistItem", e), x.trigger("change:chapters", x, t)
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }, this.setPlaylistItem = function(t, e) {
                        var i = x.get("playlist"),
                            n = (0, h.bx)(t, i.length),
                            r = V.getAsyncItem(n);
                        if (r.replace(e)) {
                            var o = i[n];
                            e && e !== o && (V.asyncItems[n] = null, r.reject(new Error("Item replaced"))), n === x.get("item") && "idle" === x.get("state") && this.setItemIndex(n)
                        }
                    }, this.isBeforePlay = this.checkBeforePlay, this.createInstream = function() {
                        return this.instreamDestroy(), this._instreamAdapter = new $(this, x, v, m), this._instreamAdapter
                    }, this.instreamDestroy = function(t) {
                        this._instreamAdapter && (t && (this._instreamAdapter.noResume = !0), this._instreamAdapter.off("state", ct), this._instreamAdapter.destroy(), this._instreamAdapter = null), v.off("dismissFloating", lt)
                    };
                    var vt = this._apiQueue = new u.Z(this, ["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setAllowFullscreen", "setFullscreen"], (function() {
                        return !y._model.get("itemReady") || Z
                    }));
                    vt.queue.push.apply(vt.queue, g), v && v.setup()
                },
                requestPip: function(t) {
                    this._view && this._view.requestPip(t)
                },
                get: function(t) {
                    if (t in I.L4) {
                        var e = this._model.get("mediaModel");
                        return e ? e.get(t) : I.L4[t]
                    }
                    return this._model.get(t)
                },
                getContainer: function() {
                    return this.currentContainer || this.originalContainer
                },
                getMute: function() {
                    return this._model.getMute()
                },
                triggerError: function(t) {
                    var e = this._model;
                    t.message = e.get("localization").errors[t.key], delete t.key, e.set("errorEvent", t), e.set("state", r.Vy), e.once("change:state", (function() {
                        this.set("errorEvent", void 0)
                    }), e), this.trigger(r.pn, t)
                },
                updatePlaylist: function(t, e) {
                    var i = this._model;
                    try {
                        var n = (0, h.s7)(t, i, e);
                        (0, h._)(n);
                        var r = (0, o.Z)({}, e);
                        delete r.playlist, i.set("feedData", r), i.set("playlist", n)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                    return 1 === t.length && 1 === t[0].sources.length && "mp4" === t[0].sources[0].type && i.get("repeat") && !i.get("advertising") ? (i.set("repeat", !1), i.set("loop", !0)) : i.set("loop", !1), this.setItemIndex(i.get("item"))
                }
            });
            var Ie = Ce,
                Ee = "afs_ads ad-placement",
                Pe = function(t, e) {
                    var i, n, r = !1;
                    t && ((n = document.createElement("div")).className = Ee, n.innerHTML = "&nbsp;", n.style.width = "1px", n.style.height = "1px", n.style.position = "absolute", n.style.background = "transparent", i = n, t.element().appendChild(i));
                    return {
                        onReady: function() {
                            if (r) return !0;
                            t && document.body.contains(t.element()) && (null !== i.offsetParent && i.className === Ee && "" !== i.innerHTML && 0 !== i.clientHeight || (r = !0)), r && e.trigger("adBlock")
                        },
                        getAdBlock: function() {
                            return r
                        }
                    }
                },
                Te = i(6593),
                Ae = i(6245),
                Fe = i(2894),
                Re = i(4101),
                Ze = i(7164),
                Le = function(t, e, n, o) {
                    if (function(t, e, i) {
                            var n = t.get("related"),
                                r = e.getPlaylist(),
                                o = Boolean(n && n.file) || Boolean(i.recommendations);
                            return (r.length > 1 || o) && (!1 !== t.get("controls") || !n.disableRelated)
                        }(t, e, o)) return function(t, e) {
                        return i.e(365).then(function(n) {
                            if (!t.attributes._destroyed && !e.getPlugin("related")) {
                                var r = new Re.Z;
                                return r.name = "related", r.js = i(8222).default, r
                            }
                        }.bind(null, i)).catch((0, Fe.Ep)(301129))
                    }(t, e).then((function(i) {
                        var r = e.getPlugin("related");
                        if (!r) {
                            var o = t.get("related");
                            (r = (0, Ze.MK)(i, o, e)).on("nextUp", (function(e) {
                                var i = null;
                                e === Object(e) && ((i = (0, z.Z)(e)).sources = (0, h.T5)(i, t), i.feedType = e.feedType), t.set("nextUp", i)
                            })), r.on("warning", (function(t) {
                                n.trigger("warning", t)
                            })), r.setup(t), r.addToPlayer.call(e)
                        }
                    })).catch((function(e) {
                        return e.message = e.message || t.get("localization").errors[e.key], delete e.key, n.trigger(r.cM, e), e
                    }))
                },
                Be = i(560),
                Oe = "__jw-ld-json",
                Ve = function(t, e) {
                    var i = t.search,
                        n = t.hash,
                        r = t.origin,
                        o = t.pathname;
                    void 0 === e && (e = "{seek_to_second_number}");
                    var a = "jw_start=" + e;
                    if (i) {
                        for (var s = i.replace(/^\?/, "").split("&"), l = -1, c = 0; c < s.length; c++)
                            if (/^jw_start=/.test(s[c])) {
                                l = c;
                                break
                            } - 1 !== l ? s[l] = a : s.push(a), i = "?" + s.join("&")
                    } else i = "?" + a;
                    return (r || "") + (o || "") + (i || "") + (n || "")
                },
                ze = function(t) {
                    var e = t.getElementById(Oe);
                    if (e && e.innerText) try {
                        var i = JSON.parse(e.innerText);
                        return Array.isArray(i) || (i = [i]), i
                    } catch (t) {}
                    return []
                },
                He = function(t, e) {
                    if (!t.length || !e) return -1;
                    for (var i = JSON.stringify(e), n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (JSON.stringify(r) === i) return n
                    }
                    return -1
                },
                Ne = function() {
                    function t(t, e, i) {
                        this.controller_ = e, this.item_ = t, this.metadata_ = null, this.metadataToUpdate_ = {}, this.window_ = i && i.window || window, this.document_ = i && i.document || document
                    }
                    var e = t.prototype;
                    return e.addMetadata = function() {
                        if (!this.metadata_) {
                            this.metadata_ = function(t, e, i) {
                                void 0 === i && (i = window);
                                var n = {
                                    "@context": "https://schema.org",
                                    "@type": "VideoObject",
                                    name: t.title,
                                    description: t.description,
                                    thumbnailUrl: t.image,
                                    potentialAction: {
                                        "@type": "SeekToAction",
                                        target: Ve(window.location),
                                        "startOffset-input": "required name=seek_to_second_number"
                                    }
                                };
                                if (t.pubdate && (n.uploadDate = new Date(1e3 * t.pubdate).toISOString()), t.sources && t.sources.length) {
                                    var r = (0, _.sE)(t.sources, (function(t) {
                                        return "video/mp4" === t.type
                                    })) || t.sources[0];
                                    r && (n.contentUrl = r.file)
                                }
                                var o = e.getConfig();
                                (0, Be.Z)() ? t.mediaid && o.pid && (n.embedUrl = "https://cdn.jwplayer.com/players/" + t.mediaid + "-" + o.pid + ".html"): n.embedUrl = window.location.href;
                                var a = e.get("duration");
                                return a && (n.duration = "PT" + Math.floor(a / 60) + "M" + Math.round(a) % 60 + "S"), n
                            }(this.item_, this.controller_);
                            var t = ze(this.document_).concat([this.metadata_]),
                                e = this.document_.getElementById(Oe);
                            if (e || ((e = this.document_.createElement("script")).setAttribute("type", "application/ld+json"), e.setAttribute("id", Oe), this.document_.head.appendChild(e)), e.innerText = JSON.stringify(t.length > 1 ? t : t[0]), (0, Be.Z)()) try {
                                this.window_.parent.postMessage({
                                    type: "metadata",
                                    generateSEOMetadata: !0,
                                    metadata: this.metadata_
                                }, "*")
                            } catch (t) {}
                        }
                    }, e.removeMetadata = function() {
                        var t = this.document_.getElementById(Oe),
                            e = this.metadata_;
                        if (this.metadata_ = null, e && t) {
                            var i = ze(this.document_),
                                n = He(i, e);
                            n >= 0 && (i.splice(n, 1), i.length ? t.innerText = JSON.stringify(i.length > 1 ? i : i[0]) : t.parentElement && t.parentElement.removeChild(t))
                        }
                    }, e.updateDurationAsync = function(t) {
                        !this.metadata_.duration && t.duration && (this.metadataToUpdate_.duration = "PT" + Math.floor(t.duration / 60) + "M" + Math.round(t.duration) % 60 + "S")
                    }, e.updateChapterCuesAsync = function(t) {
                        var e;
                        this.metadata_.hasPart || (t = t.filter((function(t) {
                            return "ads" !== t.cueType
                        }))) && t.length && (e = t.map((function(t) {
                            return {
                                "@type": "Clip",
                                name: t.text || "",
                                startOffset: t.begin,
                                endOffset: t.end,
                                url: Ve(window.location, Math.floor(t.begin))
                            }
                        })), this.metadataToUpdate_.hasPart = e)
                    }, e.updateScriptTag = function() {
                        if (Object.keys(this.metadataToUpdate_).length) {
                            var t = ze(this.document_),
                                e = He(t, this.metadata_),
                                i = this.document_.getElementById(Oe);
                            if (e >= 0 && t.length) {
                                if (this.metadata_ = (0, o.Z)(this.metadata_, this.metadataToUpdate_), t[e] = this.metadata_, i.innerText = JSON.stringify(t), (0, Be.Z)()) try {
                                    this.window_.parent.postMessage({
                                        type: "metadata",
                                        generateSEOMetadata: !0,
                                        metadata: this.metadata_
                                    }, "*")
                                } catch (t) {}
                                this.metadataToUpdate_ = {}
                            }
                        }
                    }, e.destroy = function() {
                        this.destroyed_ || (this.destroyed_ = !0, this.removeMetadata(), this.window_ = null, this.document_ = null, this.item_ = null, this.controller_ = null)
                    }, t
                }();
            Ie.prototype.osPlayerSetup = Ie.prototype.playerSetup, Ie.prototype.playerSetup = function(t, e, o, a, s, l) {
                var c = this;
                this.osPlayerSetup(t, e, o, a, s, l);
                var u, d = this.shouldAutoAdvance,
                    h = this._model,
                    f = this._view,
                    g = this.modelShim,
                    p = Pe(f, this),
                    m = h.get("advertising");
                if (g && g.attributes.ampController) {
                    var v = g.attributes.ampController,
                        w = this.playerReady;
                    this.ampController = v, delete g.attributes.ampController, this.playerReady = function() {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        w.apply(this, e), v.ready(h)
                    }
                }
                t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform), h.once("change:visibility", (function() {
                    p.onReady.call(c)
                }));
                var y = function(t, e, i, n) {
                    if (t) {
                        var r = h.get("nextUp");
                        r && c.trigger(e, {
                            mode: r.mode,
                            ui: "nextup",
                            feedShownId: i,
                            target: r,
                            itemsShown: [r],
                            feedData: r.feedData
                        }), "function" == typeof n && n()
                    }
                };
                this.next = function(t) {
                    t = t || {};
                    var i = e.getPlugin("related");
                    y.call(this, i, "nextClick", t.feedShownId, (function() {
                        return i.next(t)
                    }))
                };
                var b = this.nextItem;
                this.nextItem = function() {
                    var t = e.getPlugin("related");
                    y.call(this, t, "nextAutoAdvance"), b.call(this)
                }, this.updatePlaylist = function(t, i) {
                    var r = this,
                        o = [];
                    return h.get("mobileSdk") || ! function(t) {
                        return window.WebGLRenderingContext && t.some((function(t) {
                            return t.stereomode && t.stereomode.length > 0
                        }))
                    }(t) || e.getPlugin("vr") || console.warn("Playlist contains 360° or VR media. JW Player 360°/VR support is now deprecated"), (0, n.w0)(t) && o.push((0, n.lD)(h.get("edition"))), (0, Ae.g)(t, "images", "image"), o.length ? (h.attributes.itemReady = !1, Promise.all(o).then((function() {
                        return Ie.prototype.updatePlaylist.call(r, t, i)
                    }))) : Ie.prototype.updatePlaylist.call(this, t, i)
                }, this.shouldAutoAdvance = function() {
                    var t = h.get("related"),
                        e = h.get("nextUp");
                    return e && "playlist" === e.mode ? Boolean(t.shouldAutoAdvance) : d.call(this)
                };
                var j = function(t, i) {
                        p.onReady(), Le(h, e, c, i)
                    },
                    k = function() {
                        return u || (u = i.e(926).then(function(t) {
                            return new(0, i(8460).default)(f, h, e)
                        }.bind(null, i)).catch((function(t) {
                            throw t
                        })).catch((function(t) {
                            console.error("jwplayer.stats:", t)
                        }))), u
                    },
                    x = function(t) {
                        c.trigger(r.cM, t)
                    },
                    M = function() {
                        if (window.chrome && C.Browser.chrome) return function(t, e, n) {
                            i.e(977).then(function(n) {
                                var r = new(0, i(5016).default)(t, e);
                                return t.castToggle = r.castToggle.bind(t._castController), t._castController = r, t.stopCasting = r.stopCasting, r.init()
                            }.bind(null, i)).catch((0, Fe.Jt)(301161)).catch(n)
                        }(c, h, x)
                    },
                    S = function() {
                        var t = h.getVideo();
                        t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
                    },
                    I = function() {
                        if (window.WebKitPlaybackTargetAvailabilityEvent && !h.get("playlist").some((function(t) {
                                return !(0, Te.H)(t.sources[0])
                            }))) return function(t, e, n) {
                            return i.e(520).then(function(n) {
                                var r = i(6342).default;
                                t._airplayController = new r(t, e), t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
                            }.bind(null, i)).catch((0, Fe.Jt)(301162)).catch(n)
                        }(c, h, x);
                        S()
                    };
                e.getAdBlock = p.getAdBlock, this.once(r.gO, (function(t) {
                    h.on("change:playlistItem", j, c), !(m && m.outstream) && h.get("cast") ? (!(h.get("cast") || {}).customAppId && (0, n.w0)(h.get("playlist")) || M.apply(c), I.apply(c)) : S(), Le(h, e, c, t.item), h.get("generateSEOMetadata") && (c._seoMetadataManager = new Ne(t.item, c), c._seoMetadataManager.addMetadata(), c.on(r.rx, (function(e) {
                        var i = c.getCues();
                        i && i.length && c._seoMetadataManager.updateChapterCuesAsync(i), t.item.duration || c._seoMetadataManager.updateDurationAsync(e), c._seoMetadataManager.updateScriptTag()
                    })), setTimeout((function() {
                        c.off(r.rx)
                    }), 4e3)), c.getContainer().addEventListener("keydown", (function(t) {
                        "n" === t.key && (h.set("displayStats", !h.get("displayStats")), k())
                    }), c), h.on("change:displayStats", (function(t, e) {
                        e ? k().then((function(t) {
                            return t.show()
                        })) : !1 === e && k().then((function(t) {
                            return t.hide()
                        }))
                    }), c)
                }), this), m && m.outstream && function(t, e) {
                    var i = t._model,
                        n = t._view,
                        o = !1,
                        a = e.height,
                        s = e.width,
                        l = t.getHeight;
                    t.getHeight = function() {
                        var t = i.get("aspectratio");
                        return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : a
                    };
                    var c, u = t.getWidth;
                    t.getWidth = function() {
                        return (0, _.hj)(s) ? s : u.call(this)
                    }, t.getSafeRegion = function(t) {
                        return n.getSafeRegion(t)
                    }, t.resize = function(t, e) {
                        return n.resize(t, e)
                    }, c = n.resize, n.resize = function(t, e) {
                        return a = e, s = t, c.call(n, t, e)
                    }, i.setAutoStart("viewable"), t.setMute(!0), t.setItemIndex = function() {
                        return i.setActiveItem(0), Promise.resolve()
                    }, t.updatePlaylist = function() {
                        return i.set("playlist", [{
                            sources: [{}]
                        }]), i.attributes.itemReady = !0, this.setItemIndex(0)
                    };
                    var d = t.attachMedia;
                    t.attachMedia = t.playerDestroy;
                    var h = function() {
                        return o || i.set("repeat", !1), i.get("backgroundLoading") || t._programController.mediaPool.clean(), i.set("state", r.xQ), t._programController.trigger(r.Ms, {}), d.call(t)
                    };
                    t._programController.playVideo = function() {
                        return Promise.resolve()
                    };
                    var f = t.createInstream;
                    t.createInstream = function() {
                        var e = f.call(this);
                        return e.noResume = !0, o = !1, e.on("state", (function(e) {
                            var i = e.newstate;
                            i !== r.ik && i !== r.r0 || (t.attachMedia = h, t.getHeight = l, t.getWidth = u, n && (n.resize = c), o = !0)
                        })), e
                    }
                }(this, t)
            }, Ie.prototype.osDestroy = Ie.prototype.destroy, Ie.prototype.destroy = function() {
                this._seoMetadataManager && (this._seoMetadataManager.destroy(), this._seoMetadataManager = null), this.osDestroy()
            };
            var qe = Ie
        },
        3414: function(t, e, i) {
            "use strict";
            i.d(e, {
                B: function() {
                    return n
                },
                K: function() {
                    return r
                }
            });
            var n = [40, 120, 320, 480, 640, 720, 1280, 1920],
                r = 4500
        },
        2977: function(t, e, i) {
            "use strict";
            i.d(e, {
                Bf: function() {
                    return a
                },
                Cz: function() {
                    return r
                },
                IJ: function() {
                    return o
                }
            });
            var n = i(3414),
                r = function(t) {
                    if (t && t.length) {
                        var e = t.filter((function(t) {
                            return t.type && t.type.match(/video/)
                        }));
                        if (e && e.length) return e
                    }
                    return !1
                },
                o = function(t) {
                    for (var e = 0, i = n.B[e]; i < t && e < n.B.length;) i = n.B[e++];
                    return i
                },
                a = function(t, e) {
                    var i = t.mediaid,
                        n = t.image;
                    return i || n ? i && new RegExp("jwplayer.com/v2/media/" + i).test(n) ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=" + e : n : ""
                }
        },
        6245: function(t, e, i) {
            "use strict";
            i.d(e, {
                g: function() {
                    return o
                }
            });
            var n, r = i(6234),
                o = function(t, e, i) {
                    var o = function() {
                        try {
                            n = window.localStorage.jwplayerLocalId
                        } catch (t) {}
                        return n = n || (0, r.B)(12)
                    }();
                    t.forEach((function(t) {
                        var n = t.variations;
                        if (n && n[e]) {
                            n.selected = n.selected || {};
                            var r = function(t, e) {
                                    for (var i = function(t) {
                                            for (var e = 1794770992, i = 0, n = t.length; i < n; i++) e ^= t.charCodeAt(i), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                                            return e >>> 0
                                        }(t), n = i % 2520, r = e.reduce((function(t, e) {
                                            return t + e.weight
                                        }), 0), o = 0, a = 0; a < e.length; a++) {
                                        var s = e[a];
                                        if ((o += 2520 * s.weight / r) > n) return s
                                    }
                                }(o, n[e]),
                                a = r[i];
                            a && (t[i] = a, n.selected[e] = r)
                        }
                    }))
                }
        },
        3296: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return l
                }
            });
            var n = i(2799),
                r = i(8348),
                o = i(1776),
                a = i(7683),
                s = i(5099),
                l = function() {
                    function t(t, e, i, n, r) {
                        this.hoverElement = e, this.item = i, this.model = n, this.onView = r, this.type = t, this.container = null, this.played = !1, this.seeking = !1, this.completed = !1, this.src = i.videoThumbnail, this.video = (0, a.V)({
                            class: "jw-reset jw-video-thumbnail"
                        }), this.video.muted = !0, this.onPlay = this.onPlay.bind(this), this.onPause = this.onPause.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this)
                    }
                    var e = t.prototype;
                    return e.adapt = function() {
                        var t = this.video;
                        switch (this.type) {
                            case "overlayItem":
                                this.container = this.hoverElement.querySelector(".jw-related-item-poster"), this.container && this.container.parentElement && !this.hoverElement.className.match(/jw-related-item-next-up/) && (this.hoverElement = this.container.parentElement);
                                break;
                            case "widgetItem":
                                this.container = this.hoverElement.querySelector(".jw-related-shelf-item-image");
                                break;
                            case "shelfItem":
                            default:
                                break;
                            case "posterItem":
                                t.setAttribute("loop", "")
                        }
                        this.container || (this.container = (0, n.az)('<div class="jw-video-thumbnail-generated"></div>'))
                    }, e.onPlay = function() {
                        var t = this.video;
                        return this.src ? ((0, n.cn)(this.video, "jw-video-thumbnail-visible"), t && !t.src && (t.src = this.src, t.load()), this.completed && (t.currentTime = 0, (0, n.IV)(t, "jw-video-thumbnail-completed"), this.completed = !1), r.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
                    }, e.onPause = function() {
                        (0, n.IV)(this.video, "jw-video-thumbnail-visible"), this.seeking = !1, this.video.pause()
                    }, e.onEnded = function() {
                        "posterItem" !== this.type && (0, n.cn)(this.video, "jw-video-thumbnail-completed"), this.completed = !0, this.seeking = !1
                    }, e.onFirstFrame = function() {
                        this.played = !0, "function" == typeof this.onView && this.onView(this.item)
                    }, e.onError = function() {
                        this.destroy()
                    }, e.onViewPoster = function(t, e) {
                        if (e) return this.onPlay();
                        this.onPause()
                    }, e.asyncPlay = function() {
                        var t = this,
                            e = this.video;
                        return (e.play() || (0, s.Z)(e)).then((function() {
                            t.played || t.onFirstFrame()
                        })).catch((function(e) {
                            if (20 !== e.code) return 9 !== e.code && "Failed to load because no supported source was found." !== e.message ? t.seekPlay() : void t.destroy()
                        }))
                    }, e.seekPlay = function() {
                        var t = this,
                            e = this.video,
                            i = e.hasAttribute("loop"),
                            n = 0,
                            r = this.seek = function(a) {
                                if (t.seeking) {
                                    if (!e.duration) return (0, o.U)(r);
                                    n || (n = a);
                                    var s = (a - n) / 1e3;
                                    i ? s %= e.duration : s = Math.min(s, e.duration), e.currentTime = s, e.duration > s || i ? (0, o.U)(r) : t.onEnded()
                                }
                            },
                            a = this.handleSeek = function() {
                                t.onFirstFrame(), t.video.removeEventListener("seeked", a)
                            };
                        this.played || this.video.addEventListener("seeked", a), this.seeking = !0, (0, o.U)(r)
                    }, e.addEventListeners = function() {
                        "posterItem" === this.type ? (this.model.once("change:state", this.destroy, this), this.model.on("change:viewable", this.onViewPoster, this)) : (r.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay), this.hoverElement.addEventListener("mouseleave", this.onPause)), this.video.addEventListener("ended", this.onEnded)), this.video.addEventListener("error", this.onError)
                    }, e.removeEventListeners = function() {
                        "posterItem" === this.type ? (this.model.off("change: state", this.destroy, this), this.model.off("change:viewable", this.onViewPoster, this)) : (r.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay), this.hoverElement.removeEventListener("mouseleave", this.onPause)), this.video.removeEventListener("ended", this.onEnded)), this.video.removeEventListener("error", this.onError), this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
                    }, e.init = function() {
                        this.adapt(this.hoverElement.className), (0, n.cn)(this.container, "jw-video-thumbnail-container"), "widgetItem" === this.type ? (0, n.SH)(this.container, this.video) : this.container.appendChild(this.video), this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && (0, n.SH)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container), this.addEventListeners(), "posterItem" === this.type && this.model.get("viewable") && this.onViewPoster(null, !0)
                    }, e.isDestroyed = function() {
                        return !this.video
                    }, e.destroy = function() {
                        this.isDestroyed() || (this.removeEventListeners(), this.seeking = !1, this.seek && (0, o.W)(this.seek), this.onPause(), this.video.removeAttribute("src"), this.video.load(), this.container.removeChild(this.video), this.video = null, this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : (0, n.IV)(this.container, "jw-video-thumbnail-container"), this.container = null)
                    }, t
                }()
        },
        8901: function(t, e, i) {
            "use strict";
            var n = i(8081),
                r = i.n(n),
                o = i(3645),
                a = i.n(o)()(r());
            a.push([t.id, '.jw-reset{text-align:left;direction:ltr}.jw-reset,.jw-reset-text{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,.4)}.jw-text{color:rgba(255,255,255,.8)}.jw-knob{color:rgba(255,255,255,.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:0}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,.3)}.jw-buffer{background:rgba(255,255,255,.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:0 0}.jw-skip{padding:.5em;outline:0}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:rgba(255,255,255,.8)}.jw-skip.jw-skippable:focus .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast google-cast-launcher:focus{outline:0}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:focus,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}.jw-option{color:rgba(255,255,255,.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;outline:0}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-focus-ring-color:transparent;outline:0}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions{max-height:calc(100% - 60px)}.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:0}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0,.25,.25,1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop,.jw-state-setup .jw-logo{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating.jw-floating-dismissible .jw-wrapper{bottom:3rem}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-icon{margin:0;padding:0}.jw-flag-floating .jw-float-bar-icon{pointer-events:all;cursor:pointer;display:flex;height:24px;width:24px}.jw-flag-floating .jw-float-bar-icon:hover{background:#1d1d1d;border-radius:100px}.jw-flag-floating .jw-float-bar-icon .jw-svg-icon{display:block;margin:auto;padding:0;height:10px;width:10px}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible .jw-float-bar{display:inline-flex;flex-direction:row;align-items:center;position:fixed;z-index:2147483647;top:100%;height:32px;width:100%;max-height:32px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar{left:0;right:0;top:auto}}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-float-bar{display:none;position:absolute;padding:4px 8px;background:#2f2d2d;touch-action:none}.jw-float-bar-title{width:100%;max-height:24px;font-family:Arial,sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:16px;margin-left:0;padding-right:22px;color:rgba(255,255,255,.8)!important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@keyframes jw-float-to-bottom{from{transform:translateY(100%)}to{transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""]), e.Z = a
        },
        3591: function(t, e, i) {
            "use strict";
            var n = i(8081),
                r = i.n(n),
                o = i(3645),
                a = i.n(o)()(r());
            a.push([t.id, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-svg-icon-watermark{width:150px}", ""]), e.Z = a
        },
        2792: function(t, e, i) {
            "use strict";
            var n = i(8081),
                r = i.n(n),
                o = i(3645),
                a = i.n(o)()(r());
            a.push([t.id, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:transform 250ms cubic-bezier(0,.25,.25,1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;animation:250ms jw-outstream-collapse 1 step-end}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{transform:scaleY(0)}", ""]), e.Z = a
        },
        3645: function(t) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var i = "",
                            n = void 0 !== e[5];
                        return e[4] && (i += "@supports (".concat(e[4], ") {")), e[2] && (i += "@media ".concat(e[2], " {")), n && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), i += t(e), n && (i += "}"), e[2] && (i += "}"), e[4] && (i += "}"), i
                    })).join("")
                }, e.i = function(t, i, n, r, o) {
                    "string" == typeof t && (t = [
                        [null, t, void 0]
                    ]);
                    var a = {};
                    if (n)
                        for (var s = 0; s < this.length; s++) {
                            var l = this[s][0];
                            null != l && (a[l] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var u = [].concat(t[c]);
                        n && a[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), i && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = i) : u[2] = i), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), e.push(u))
                    }
                }, e
            }
        },
        8081: function(t) {
            "use strict";
            t.exports = function(t) {
                return t[1]
            }
        },
        5430: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(3379),
                r = i.n(n),
                o = i(7795),
                a = i.n(o),
                s = i(569),
                l = i.n(s),
                c = i(3565),
                u = i.n(c),
                d = i(9216),
                h = i.n(d),
                f = i(4589),
                g = i.n(f),
                p = i(8901),
                m = {};
            m.styleTagTransform = g(), m.setAttributes = u(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = h();
            r()(p.Z, m);
            e.default = p.Z && p.Z.locals ? p.Z.locals : void 0
        },
        678: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(3379),
                r = i.n(n),
                o = i(7795),
                a = i.n(o),
                s = i(569),
                l = i.n(s),
                c = i(3565),
                u = i.n(c),
                d = i(9216),
                h = i.n(d),
                f = i(4589),
                g = i.n(f),
                p = i(3591),
                m = {};
            m.styleTagTransform = g(), m.setAttributes = u(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = h();
            r()(p.Z, m);
            e.default = p.Z && p.Z.locals ? p.Z.locals : void 0
        },
        8206: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(3379),
                r = i.n(n),
                o = i(7795),
                a = i.n(o),
                s = i(569),
                l = i.n(s),
                c = i(3565),
                u = i.n(c),
                d = i(9216),
                h = i.n(d),
                f = i(4589),
                g = i.n(f),
                p = i(2792),
                m = {};
            m.styleTagTransform = g(), m.setAttributes = u(), m.insert = l().bind(null, "head"), m.domAPI = a(), m.insertStyleElement = h();
            r()(p.Z, m);
            e.default = p.Z && p.Z.locals ? p.Z.locals : void 0
        },
        3379: function(t) {
            "use strict";
            var e = [];

            function i(t) {
                for (var i = -1, n = 0; n < e.length; n++)
                    if (e[n].identifier === t) {
                        i = n;
                        break
                    } return i
            }

            function n(t, n) {
                for (var o = {}, a = [], s = 0; s < t.length; s++) {
                    var l = t[s],
                        c = n.base ? l[0] + n.base : l[0],
                        u = o[c] || 0,
                        d = "".concat(c, " ").concat(u);
                    o[c] = u + 1;
                    var h = i(d),
                        f = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5]
                        };
                    if (-1 !== h) e[h].references++, e[h].updater(f);
                    else {
                        var g = r(f, n);
                        n.byIndex = s, e.splice(s, 0, {
                            identifier: d,
                            updater: g,
                            references: 1
                        })
                    }
                    a.push(d)
                }
                return a
            }

            function r(t, e) {
                var i = e.domAPI(e);
                i.update(t);
                return function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                        i.update(t = e)
                    } else i.remove()
                }
            }
            t.exports = function(t, r) {
                var o = n(t = t || [], r = r || {});
                return function(t) {
                    t = t || [];
                    for (var a = 0; a < o.length; a++) {
                        var s = i(o[a]);
                        e[s].references--
                    }
                    for (var l = n(t, r), c = 0; c < o.length; c++) {
                        var u = i(o[c]);
                        0 === e[u].references && (e[u].updater(), e.splice(u, 1))
                    }
                    o = l
                }
            }
        },
        569: function(t) {
            "use strict";
            var e = {};
            t.exports = function(t, i) {
                var n = function(t) {
                    if (void 0 === e[t]) {
                        var i = document.querySelector(t);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                        e[t] = i
                    }
                    return e[t]
                }(t);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(i)
            }
        },
        9216: function(t) {
            "use strict";
            t.exports = function(t) {
                var e = document.createElement("style");
                return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
            }
        },
        3565: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                var e = i.nc;
                e && t.setAttribute("nonce", e)
            }
        },
        7795: function(t) {
            "use strict";
            t.exports = function(t) {
                var e = t.insertStyleElement(t);
                return {
                    update: function(i) {
                        ! function(t, e, i) {
                            var n = "";
                            i.supports && (n += "@supports (".concat(i.supports, ") {")), i.media && (n += "@media ".concat(i.media, " {"));
                            var r = void 0 !== i.layer;
                            r && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), n += i.css, r && (n += "}"), i.media && (n += "}"), i.supports && (n += "}");
                            var o = i.sourceMap;
                            o && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleTagTransform(n, t, e.options)
                        }(e, t, i)
                    },
                    remove: function() {
                        ! function(t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(e)
                    }
                }
            }
        },
        4589: function(t) {
            "use strict";
            t.exports = function(t, e) {
                if (e.styleSheet) e.styleSheet.cssText = t;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(t))
                }
            }
        },
        8675: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
        },
        7326: function(t, e, i) {
            "use strict";

            function n(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            i.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        3144: function(t, e, i) {
            "use strict";

            function n(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function r(t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            i.d(e, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);