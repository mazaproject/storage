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
    [74, 716], {
        7387: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = i(2957);

            function o(t) {
                var e = [],
                    i = (t = (0, n.fy)(t)).split("\r\n\r\n");
                1 === i.length && (i = t.split("\n\n"));
                for (var o = 0; o < i.length; o++)
                    if ("WEBVTT" !== i[o]) {
                        var s = a(i[o]);
                        s.text && e.push(s)
                    } return e
            }

            function a(t) {
                var e = {},
                    i = t.split("\r\n");
                1 === i.length && (i = t.split("\n"));
                var o = 1;
                if (i[0].indexOf(" --\x3e ") > 0 && (o = 0), i.length > o + 1 && i[o + 1]) {
                    var a = i[o],
                        s = a.indexOf(" --\x3e ");
                    s > 0 && (e.begin = (0, n.m9)(a.substr(0, s)), e.end = (0, n.m9)(a.substr(s + 5)), e.text = i.slice(o + 1).join("\r\n"))
                }
                return e
            }
        },
        4667: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return a
                }
            });
            var n, o = i(2799);

            function a(t) {
                return n || (n = new DOMParser), (0, o.gB)((0, o.oH)(n.parseFromString(t, "image/svg+xml").documentElement))
            }
        },
        1831: function(t, e, i) {
            "use strict";
            i.d(e, {
                R: function() {
                    return w
                }
            });
            var n, o = i(7462),
                a = i(8348),
                s = i(2894),
                r = i(328),
                l = i(1643),
                c = i(974),
                u = i(2799),
                p = i(6042),
                w = {
                    back: !0,
                    backgroundOpacity: 50,
                    edgeStyle: null,
                    fontSize: 14,
                    fontOpacity: 100,
                    fontScale: .05,
                    preprocessor: p.yR,
                    windowOpacity: 0
                },
                d = function(t) {
                    var e, r, d, h, j, g, f, m, v, b = this,
                        y = t.player;

                    function x() {
                        (0, p.xV)(e.fontSize) && (y.get("containerHeight") ? m = w.fontScale * (e.userFontScale || 1) * e.fontSize / w.fontSize : y.once("change:containerHeight", x, this))
                    }

                    function k() {
                        var t = y.get("containerHeight");
                        if (t) {
                            var e;
                            if (y.get("fullscreen") && a.OS.iOS) e = null;
                            else {
                                var i = t * m;
                                e = Math.round(10 * function(t) {
                                    var e = y.get("mediaElement");
                                    if (e && e.videoHeight) {
                                        var i = e.videoWidth,
                                            n = e.videoHeight,
                                            o = i / n,
                                            s = y.get("containerHeight"),
                                            r = y.get("containerWidth");
                                        if (y.get("fullscreen") && a.OS.mobile) {
                                            var l = window.screen;
                                            l.orientation && (s = l.availHeight, r = l.availWidth)
                                        }
                                        if (r && s && i && n) return (r / s > o ? s : n * r / i) * m
                                    }
                                    return t
                                }(i)) / 10
                            }
                            y.get("renderCaptionsNatively") ? function(t, e) {
                                var i = "#" + t + " .jw-video::-webkit-media-text-track-display";
                                e && (e += "px", a.OS.iOS && (0, c.iv)(i, {
                                    fontSize: "inherit"
                                }, t, !0));
                                v.fontSize = e, (0, c.iv)(i, v, t, !0)
                            }(y.get("id"), e) : (0, c.oB)(j, {
                                fontSize: e
                            })
                        }
                    }

                    function C(t, e, i) {
                        var n = (0, c.HY)("#000000", i);
                        "dropShadow" === t ? e.textShadow = "0 2px 1px " + n : "raised" === t ? e.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === t ? e.textShadow = "0 -2px 1px " + n : "uniform" === t && (e.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n)
                    }(j = document.createElement("div")).className = "jw-captions jw-reset", this.show = function() {
                        (0, u.cn)(j, "jw-captions-enabled")
                    }, this.hide = function() {
                        (0, u.IV)(j, "jw-captions-enabled")
                    }, this.populate = function(t) {
                        y.get("renderCaptionsNatively") || (d = [], r = t, t ? this.selectCues(t, h) : this.renderCues())
                    }, this.resize = function() {
                        k(), this.renderCues(!0)
                    }, this.renderCues = function(t) {
                        t = !!t, n && n.processCues(window, d, j, t)
                    }, this.selectCues = function(t, e) {
                        if (t && t.data && e && !y.get("renderCaptionsNatively")) {
                            var i = this.getAlignmentPosition(t, e);
                            !1 !== i && (d = this.getCurrentCues(t.data, i), this.renderCues(!0))
                        }
                    }, this.getCurrentCues = function(t, e) {
                        return (0, p.hX)(t, (function(t) {
                            return e >= t.startTime && (!t.endTime || e <= t.endTime)
                        }))
                    }, this.getAlignmentPosition = function(t, e) {
                        var i = t.source,
                            n = e.metadata,
                            o = e.currentTime;
                        return i && n && (0, p.hj)(n[i]) && (o = n[i]), o
                    }, this.clear = function() {
                        (0, u.cS)(j)
                    }, this.setup = function(t, i) {
                        g = document.createElement("div"), f = document.createElement("span"), g.className = "jw-captions-window jw-reset", f.className = "jw-captions-text jw-reset", e = (0, o.Z)({}, w, i), m = w.fontScale;
                        var n = function() {
                            x(e.fontSize);
                            var i = e.windowColor,
                                n = e.windowOpacity,
                                o = e.edgeStyle;
                            v = {};
                            var s = {};
                            ! function(t, e) {
                                var i = e.color,
                                    n = e.fontOpacity;
                                (i || n !== w.fontOpacity) && (t.color = (0, c.HY)(i || "#ffffff", n));
                                if (e.back) {
                                    var o = e.backgroundColor,
                                        a = e.backgroundOpacity;
                                    o === w.backgroundColor && a === w.backgroundOpacity || (t.backgroundColor = (0, c.HY)(o, a))
                                } else t.background = "transparent";
                                e.fontFamily && (t.fontFamily = e.fontFamily);
                                e.fontStyle && (t.fontStyle = e.fontStyle);
                                e.fontWeight && (t.fontWeight = e.fontWeight);
                                e.textDecoration && (t.textDecoration = e.textDecoration)
                            }(s, e), (i || n !== w.windowOpacity) && (v.backgroundColor = (0, c.HY)(i || "#000000", n)), C(o, s, e.fontOpacity), e.back || null !== o || C("uniform", s), (0, c.oB)(g, v), (0, c.oB)(f, s),
                                function(t, e) {
                                    k(),
                                        function(t, e) {
                                            a.Browser.safari && (0, c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display-backdrop", {
                                                backgroundColor: e.backgroundColor
                                            }, t, !0);
                                            (0, c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display", v, t, !0), (0, c.iv)("#" + t + " .jw-video::cue", e, t, !0)
                                        }(t, e),
                                        function(t, e) {
                                            (0, c.iv)("#" + t + " .jw-text-track-display", v, t), (0, c.iv)("#" + t + " .jw-text-track-cue", e, t)
                                        }(t, e)
                                }(t, s)
                        };
                        n(), g.appendChild(f), j.appendChild(g), y.change("captionsTrack", (function(t, e) {
                            this.populate(e)
                        }), this), y.set("captions", e), y.on("change:captions", (function(t, i) {
                            e = i, n()
                        }))
                    }, this.element = function() {
                        return j
                    }, this.destroy = function() {
                        y.off(null, null, this), this.off()
                    };
                    var z = function(t) {
                        h = t, b.selectCues(r, h)
                    };
                    y.on("change:playlistItem", (function() {
                        h = null, d = []
                    }), this), y.on(l.NZ, (function(t) {
                        d = [], z(t)
                    }), this), y.on(l.R2, z, this), y.on("subtitlesTrackData", (function() {
                        this.selectCues(r, h)
                    }), this), y.on("change:captionsList", (function t(e, o) {
                        var a = this;
                        1 !== o.length && (e.get("renderCaptionsNatively") || n || (i.e(63).then(function(t) {
                            n = i(8698).default
                        }.bind(null, i)).catch((0, s.Jt)(301121)).catch((function(t) {
                            a.trigger(l.cM, t)
                        })), e.off("change:captionsList", t, this)))
                    }), this)
                };
            (0, o.Z)(d.prototype, r.ZP), e.Z = d
        },
        8165: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return s
                }
            });
            var n = i(4667),
                o = i(4429),
                a = i(5646);

            function s(t, e, i, s) {
                var r = document.createElement("div");
                r.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t, r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), i && r.setAttribute("aria-label", i), r.style.display = "none";
                var l = (0, a.Z)(r, e || o.Z.noop);
                return s && Array.prototype.forEach.call(s, (function(t) {
                    "string" == typeof t ? r.appendChild((0, n.Z)(t)) : r.appendChild(t)
                })), {
                    ui: l,
                    element: function() {
                        return r
                    },
                    toggle: function(t) {
                        t ? this.show() : this.hide()
                    },
                    show: function() {
                        r.style.display = ""
                    },
                    hide: function() {
                        r.style.display = "none"
                    }
                }
            }
        },
        8168: function(t, e, i) {
            "use strict";
            i.d(e, {
                w: function() {
                    return r
                }
            });
            var n = i(974),
                o = i(4667),
                a = i(5646),
                s = {};

            function r(t) {
                if (!s[t]) {
                    var e = Object.keys(s);
                    e.length > 10 && delete s[e[0]];
                    var i = (0, o.Z)(t);
                    s[t] = i
                }
                return s[t].cloneNode(!0)
            }
            var l = function() {
                function t(t, e, i, o, s) {
                    var l, c = document.createElement("div");
                    c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (s || ""), c.setAttribute("button", o), c.setAttribute("role", "button"), c.setAttribute("tabindex", "0"), e && c.setAttribute("aria-label", e), t && "<svg" === t.substring(0, 4) ? l = r(t) : ((l = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset", t && (0, n.oB)(l, {
                        backgroundImage: "url(" + t + ")"
                    })), c.appendChild(l), (0, a.Z)(c, i, this), c.addEventListener("mousedown", (function(t) {
                        t.preventDefault()
                    })), this.id = o, this.buttonElement = c
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
        3477: function(t, e, i) {
            "use strict";
            i.d(e, {
                k: function() {
                    return l
                },
                s: function() {
                    return r
                }
            });
            var n = i(4578),
                o = i(2799),
                a = i(3163),
                s = i(5646),
                r = function() {
                    function t(t, e, i) {
                        void 0 === i && (i = a.Ge), this.el = (0, o.az)(i(t)), this.ui = (0, s.Z)(this.el, e, this)
                    }
                    return t.prototype.destroy = function() {
                        this.el.parentNode && this.el.parentNode.removeChild(this.el), this.ui.destroy()
                    }, t
                }(),
                l = function(t) {
                    function e(e, i, n) {
                        return void 0 === n && (n = a.dr), t.call(this, e, i, n) || this
                    }(0, n.Z)(e, t);
                    var i = e.prototype;
                    return i.activate = function() {
                        this.active || ((0, o.og)(this.el, "jw-settings-item-active", !0), this.el.setAttribute("aria-checked", "true"), this.active = !0)
                    }, i.deactivate = function() {
                        this.active && ((0, o.og)(this.el, "jw-settings-item-active", !1), this.el.setAttribute("aria-checked", "false"), this.active = !1)
                    }, e
                }(r)
        },
        7284: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return g
                }
            });
            var n = i(7326),
                o = i(4578),
                a = i(5882),
                s = i(328),
                r = i(2799),
                l = i(8165),
                c = i(7191),
                u = i(3477),
                p = i(7509),
                w = i(2810),
                d = i(5349),
                h = function(t) {
                    var e = t.name,
                        i = t.title,
                        n = {
                            captions: "cc-off",
                            audioTracks: "audio-tracks",
                            quality: "quality-100",
                            playbackRates: "playback-rate"
                        } [e];
                    if (n || t.icon) {
                        var o = (0, l.Z)("jw-settings-" + e + " jw-submenu-" + e, (function(e) {
                                t.open(e)
                            }), i, [t.icon && (0, r.az)(t.icon) || (0, c.W)(n)]),
                            a = o.element();
                        return a.setAttribute("name", e), a.setAttribute("role", "button"), a.setAttribute("type", "button"), a.setAttribute("aria-expanded", "false"), a.setAttribute("aria-controls", t.el.id), "ontouchstart" in window || (o.tooltip = (0, d.i)(a, e, i)), o.ui.directSelect = !0, o
                    }
                },
                j = i(8518),
                g = function(t) {
                    function e(e, i, o, a, s) {
                        var l;
                        return void 0 === s && (s = p.qF), (l = t.call(this) || this).open = l.open.bind((0, n.Z)(l)), l.close = l.close.bind((0, n.Z)(l)), l.toggle = l.toggle.bind((0, n.Z)(l)), l.name = e, l.title = i || e, l.localizedPrevious = a.prev, l.isSubmenu = !!o, l.el = (0, r.az)(s(l.isSubmenu, e, l.title)), l.buttonContainer = l.el.querySelector(".jw-" + l.name + "-topbar-buttons"), l.children = {}, l.openMenus = [], l.items = [], l.visible = !1, l.parentMenu = o, l.mainMenu = l.parentMenu ? l.parentMenu.mainMenu : (0, n.Z)(l), l.categoryButton = null, l.closeButton = l.mainMenu.closeButton, l.isSubmenu && (l.parentMenu.name === l.mainMenu.name && (l.categoryButton = l.createCategoryButton()), l.parentMenu.parentMenu && !l.mainMenu.backButton && (l.mainMenu.backButton = l.createBackButton(l.localizedPrevious)), l.itemsContainer = l.createItemsContainer(), l.parentMenu.appendMenu((0, n.Z)(l))), l
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.createItemsContainer = function() {
                        var t = this,
                            e = this.el.querySelector(".jw-settings-submenu-items"),
                            i = this.mainMenu.closeButton && this.mainMenu.closeButton.element(),
                            n = this.mainMenu.backButton && this.mainMenu.backButton.element(),
                            o = this.categoryButton && this.categoryButton.element(),
                            s = new a.ZP(e);
                        return s.on("keydown", (function(a) {
                            if (event.target.parentNode === e) {
                                var s, l = a.sourceEvent,
                                    c = a.target,
                                    u = t.topbar && t.topbar.firstChild,
                                    p = document.getElementsByClassName("jw-icon-settings")[0],
                                    d = o ? (0, r.AH)(o) : i,
                                    h = o ? (0, r.i3)(o) : n,
                                    j = (0, r.AH)(c) || u || e.firstChild,
                                    g = (0, r.i3)(c) || u || e.lastChild,
                                    f = l && (0, w.ku)(l.key);
                                switch (f) {
                                    case "Tab":
                                        s = l.shiftKey ? h : d;
                                        break;
                                    case "Left":
                                        s = h || t.close(a) && p;
                                        break;
                                    case "Up":
                                        s = g;
                                        break;
                                    case "Right":
                                        s = d;
                                        break;
                                    case "Down":
                                        s = j;
                                        break;
                                    case "Esc":
                                        s = p, t.mainMenu.close(event)
                                }
                                s && s.focus(), l.preventDefault(), "Esc" !== f && l.stopPropagation()
                            }
                        })), s
                    }, i.createCategoryButton = function() {
                        return h(this)
                    }, i.createBackButton = function(t) {
                        var e = this,
                            i = (0, l.Z)("jw-settings-back", (function(t) {
                                var i = e.mainMenu.backButtonTarget;
                                i && i.open(t)
                            }), t, [(0, c.W)("arrow-left")]);
                        return (0, r.SH)(this.mainMenu.topbar.el, i.element()), i
                    }, i.setBackButtonAriaLabel = function(t) {
                        var e = this.mainMenu.backButton.element(),
                            i = t ? this.localizedPrevious + " - " + t : this.localizedPrevious;
                        e.setAttribute("aria-label", i)
                    }, i.createTopbar = function() {
                        var t = (0, r.az)('<div class="jw-reset jw-submenu-topbar"></div>'),
                            e = this.itemsContainer.el,
                            i = this.mainMenu,
                            n = this.categoryButton;
                        return this.topbarUI = new a.ZP(t).on("keydown", (function(t) {
                            var o = t.sourceEvent,
                                a = function() {
                                    n ? ((0, r.i3)(n.element()).focus(), o.preventDefault()) : i.backButton.element().focus()
                                },
                                s = function() {
                                    n ? ((0, r.AH)(n.element()).focus(), o.preventDefault()) : i.closeButton.element().focus()
                                };
                            switch ((0, w.ku)(o.key)) {
                                case "Up":
                                    e.lastChild.focus();
                                    break;
                                case "Down":
                                    e.firstChild.focus();
                                    break;
                                case "Left":
                                    a();
                                    break;
                                case "Right":
                                    s();
                                    break;
                                case "Tab":
                                    o.shiftKey ? a() : s()
                            }
                        })), (0, r.SH)(this.el, t), t
                    }, i.createItems = function(t, e, i, n) {
                        var o = this;
                        void 0 === i && (i = {}), void 0 === n && (n = u.k);
                        var a, s = this.name;
                        return t.map((function(t, l) {
                            var c, u, p;
                            switch (s) {
                                case "quality":
                                    "Auto" === t.label && 0 === l ? (c = "" + i.defaultText, p = ' <span class="jw-reset jw-auto-label"></span>') : c = t.label;
                                    break;
                                case "captions":
                                    c = "Off" !== t.label && "off" !== t.id || 0 !== l ? t.label : i.defaultText;
                                    break;
                                case "playbackRates":
                                    u = t, c = (0, j.t6)(i.tooltipText) ? "x" + t : t + "x";
                                    break;
                                case "audioTracks":
                                    c = t.name
                            }
                            c || (c = t, "object" == typeof t && (c.options = i));
                            var w = new n(c, function(t) {
                                if (!w.active) {
                                    if (w.deactivate) {
                                        o.items.filter((function(t) {
                                            return !0 === t.active
                                        })).forEach((function(t) {
                                            t.deactivate()
                                        }));
                                        var i = o.mainMenu.backButtonTarget;
                                        i ? i.open(t) : o.mainMenu.close(t)
                                    }
                                    if (w.activate) {
                                        if (w.el.classList.contains("jw-tab-focus")) return void a.activate();
                                        w.activate(), a = w
                                    }
                                    e(u || l)
                                }
                            }.bind(o));
                            return p && w.el.appendChild((0, r.az)(p)), w
                        }))
                    }, i.setMenuItems = function(t, e) {
                        var i = this;
                        t ? (this.destroyItems(), t.forEach((function(t) {
                            i.items.push(t), i.itemsContainer.el.appendChild(t.el)
                        })), e > -1 && this.items[e].activate(), this.categoryButton && this.categoryButton.show()) : this.removeMenu()
                    }, i.appendMenu = function(t) {
                        if (t) {
                            var e = t.el,
                                i = t.name,
                                n = t.categoryButton;
                            if (this.children[i] = t, n) {
                                var o = this.mainMenu.buttonContainer,
                                    a = o.querySelector(".jw-settings-sharing"),
                                    s = "quality" === i ? o.firstChild : a || this.closeButton.element();
                                o.insertBefore(n.element(), s)
                            }
                            this.mainMenu.el.appendChild(e), this.mainMenu.trigger("menuAppended", i)
                        }
                    }, i.removeMenu = function(t) {
                        if (!t) return this.parentMenu.removeMenu(this.name);
                        var e = this.children[t];
                        e && (delete this.children[t], e.destroy(), this.mainMenu.trigger("menuRemoved", t))
                    }, i.open = function(t) {
                        if (!t || -1 !== t.sourceEvent.pointerId) {
                            var e, i = this.mainMenu.visible;
                            if (this.items.length) {
                                var n = t && t.sourceEvent,
                                    o = n && "keydown" === n.type,
                                    a = this.items.filter((function(t) {
                                        return t.active
                                    }));
                                if (a = a.length ? a[0].el : this.items[0].el, !this.visible || this.openMenus.length) {
                                    var s = this.mainMenu,
                                        r = this.parentMenu,
                                        l = this.categoryButton;
                                    if (r.openMenus.push(this.name), r.openMenus.length > 1 && r.closeChildren(this.name), l && l.element().setAttribute("aria-expanded", "true"), r.isSubmenu) {
                                        r.el.classList.remove("jw-settings-submenu-active"), s.topbar.el.classList.add("jw-nested-menu-open");
                                        var c = s.topbar.el.querySelector(".jw-settings-topbar-text");
                                        c.setAttribute("name", this.title), c.innerText = this.title;
                                        var u = r.title;
                                        this.setBackButtonAriaLabel(u), s.backButton.show(), this.mainMenu.backButtonTarget = this.parentMenu, this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !0), e = c
                                    } else s.topbar.el.classList.remove("jw-nested-menu-open"), s.backButton && s.backButton.hide(), this.mainMenu.backButtonTarget && (this.mainMenu.backButtonTarget = null);
                                    this.el.classList.add("jw-settings-submenu-active"), i && o ? e = a : i || (s.open(t), e = l.element(), l && l.tooltip && !o && (l.tooltip.suppress = !0)), this.openMenus.length && this.closeChildren(), this.el.scrollTop = 0, this.visible = !0, this.el.setAttribute("aria-expanded", "true"), e && setTimeout((function() {
                                        e.focus()
                                    }))
                                } else this.items.length && o && a.focus()
                            }
                        }
                    }, i.close = function(t) {
                        var e = this;
                        this.visible && (this.visible = !1, this.el.setAttribute("aria-expanded", "false"), this.el.classList.remove("jw-settings-submenu-active"), this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !1), this.categoryButton && this.categoryButton.element().setAttribute("aria-expanded", "false"), this.parentMenu.openMenus = this.parentMenu.openMenus.filter((function(t) {
                            return t !== e.name
                        })), !this.mainMenu.openMenus.length && this.mainMenu.visible && this.mainMenu.close(t), this.openMenus.length && this.closeChildren())
                    }, i.closeChildren = function(t) {
                        var e = this;
                        this.openMenus.forEach((function(i) {
                            if (i !== t) {
                                var n = e.children[i];
                                n && n.close()
                            }
                        }))
                    }, i.toggle = function(t, e) {
                        if (e && this.mainMenu.visible) return this.mainMenu.close(t);
                        this.visible ? this.close(t) : this.open(t)
                    }, i.destroyItems = function() {
                        this.items.forEach((function(t) {
                            t.destroy()
                        })), this.items = []
                    }, i.destroy = function() {
                        var t = this;
                        Object.keys(this.children).map((function(e) {
                            t.children[e].destroy()
                        })), this.categoryButton && (this.parentMenu.buttonContainer.removeChild(this.categoryButton.element()), this.categoryButton.ui.destroy()), this.topbarUI && this.topbarUI.destroy(), this.destroyItems(), this.itemsContainer.destroy();
                        var e = this.parentMenu.openMenus,
                            i = e.indexOf(this.name);
                        e.length && i > -1 && this.openMenus.splice(i, 1), delete this.parentMenu, this.visible = !1, this.el.parentNode && this.el.parentNode.removeChild(this.el), this.off()
                    }, e
                }(s.ZP)
        },
        2810: function(t, e, i) {
            "use strict";
            i.d(e, {
                JU: function() {
                    return c
                },
                MR: function() {
                    return d
                },
                dt: function() {
                    return h
                },
                ku: function() {
                    return u
                }
            });
            var n, o, a = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"],
                s = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"],
                r = ["100%", "75%", "50%", "25%", "0%"],
                l = [100, 75, 50, 25, 0],
                c = function(t) {
                    return [{
                        name: "color",
                        label: t.color,
                        options: n || p(t),
                        values: a,
                        defaultVal: "#ffffff"
                    }, {
                        name: "fontOpacity",
                        label: t.fontOpacity,
                        options: ["100%", "75%", "50%", "25%"],
                        values: [100, 75, 50, 25],
                        defaultVal: 100
                    }, {
                        name: "userFontScale",
                        label: t.userFontScale,
                        options: ["200%", "175%", "150%", "125%", "100%", "75%", "50%"],
                        values: [2, 1.75, 1.5, 1.25, 1, .75, .5],
                        defaultVal: 1
                    }, {
                        name: "fontFamily",
                        label: t.fontFamily,
                        options: s,
                        values: s,
                        defaultVal: "Arial"
                    }, {
                        name: "edgeStyle",
                        label: t.edgeStyle,
                        options: o || w(t),
                        values: ["none", "raised", "depressed", "uniform", "dropShadow"],
                        defaultVal: "none"
                    }, {
                        name: "backgroundColor",
                        label: t.backgroundColor,
                        options: n || p(t),
                        values: a,
                        defaultVal: "#000000"
                    }, {
                        name: "backgroundOpacity",
                        label: t.backgroundOpacity,
                        options: r,
                        values: l,
                        defaultVal: 50
                    }, {
                        name: "windowColor",
                        label: t.windowColor,
                        options: n || p(t),
                        values: a,
                        defaultVal: "#000000"
                    }, {
                        name: "windowOpacity",
                        label: t.windowOpacity,
                        options: ["100%", "75%", "50%", "25%", "0%"],
                        values: l,
                        defaultVal: 0
                    }]
                },
                u = function(t) {
                    return t && t.replace(/(Arrow|ape)/, "")
                },
                p = function(t) {
                    var e = t.white,
                        i = t.black,
                        o = t.red,
                        a = t.green,
                        s = t.blue,
                        r = t.yellow,
                        l = t.magenta,
                        c = t.cyan;
                    return n = [e, i, o, a, s, r, l, c]
                },
                w = function(t) {
                    var e = t.none,
                        i = t.raised,
                        n = t.depressed,
                        a = t.uniform,
                        s = t.dropShadow;
                    return o = [e, i, n, a, s]
                };

            function d() {
                var t = this;
                this._destroyed || (this._destroyed = !0, Object.keys(this.children).forEach((function(e) {
                    t.children[e].destroy()
                })), this.children = {}, this.model && (this.model.off(null, null, this), delete this.model), this.off())
            }

            function h(t, e) {
                t && e > -1 && (t.items.forEach((function(t) {
                    t.deactivate()
                })), t.items[e].activate())
            }
        },
        5349: function(t, e, i) {
            "use strict";
            i.d(e, {
                i: function() {
                    return o
                }
            });
            var n = i(2799);

            function o(t, e, i, o, a) {
                var s = document.createElement("div");
                s.className = "jw-reset-text jw-tooltip jw-tooltip-" + e, s.setAttribute("dir", "auto");
                var r = document.createElement("div");
                r.className = "jw-text", s.appendChild(r), t.appendChild(s);
                var l = {
                        dirty: !!i,
                        opened: !1,
                        text: i,
                        touchEvent: !1,
                        suppress: !1,
                        open: function() {
                            l.touchEvent || (l.suppress ? l.suppress = !1 : (c(!0), o && o()))
                        },
                        close: function() {
                            l.touchEvent || (c(!1), a && a())
                        },
                        setText: function(t) {
                            t !== l.text && (l.text = t, l.dirty = !0), l.opened && c(!0)
                        }
                    },
                    c = function(t) {
                        t && l.dirty && ((0, n.nh)(r, l.text), l.dirty = !1), l.opened = t, (0, n.og)(s, "jw-open", t)
                    };
                return t.addEventListener("mouseover", l.open), t.addEventListener("focus", l.open), t.addEventListener("blur", l.close), t.addEventListener("mouseout", l.close), t.addEventListener("touchstart", (function() {
                    l.touchEvent = !0
                }), {
                    passive: !0
                }), l
            }
        },
        4244: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return u
                }
            });
            var n = i(4578),
                o = i(8348),
                a = i(328),
                s = i(5882),
                r = i(1261),
                l = i(2799),
                c = function(t) {
                    var e = (0, l.A8)(t),
                        i = window.pageXOffset;
                    return i && o.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i, e.right -= i), e
                },
                u = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this) || this).className = e + " jw-background-color jw-reset", n.orientation = i, n
                    }(0, n.Z)(e, t);
                    var i = e.prototype;
                    return i.setup = function() {
                        var t, e;
                        this.el = (0, l.az)((t = this.className, e = "jw-slider-" + this.orientation, void 0 === t && (t = ""), void 0 === e && (e = ""), '<div class="' + t + " " + e + ' jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>')), this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0], this.elementProgress = this.el.getElementsByClassName("jw-progress")[0], this.elementThumb = this.el.getElementsByClassName("jw-knob")[0], this.ui = new s.ZP(this.element(), {
                            preventScrolling: !0
                        }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click", this.tap, this)
                    }, i.dragStart = function() {
                        this.trigger("dragStart"), this.railBounds = c(this.elementRail)
                    }, i.dragEnd = function(t) {
                        this.dragMove(t), this.trigger("dragEnd")
                    }, i.dragMove = function(t) {
                        var e, i, n = this.railBounds = this.railBounds ? this.railBounds : c(this.elementRail);
                        return "pointercancel" === t.sourceEvent.type || (i = "horizontal" === this.orientation ? (e = t.pageX) < n.left ? 0 : e > n.right ? 100 : 100 * (0, r.v)((e - n.left) / n.width, 0, 1) : (e = t.pageY) >= n.bottom ? 0 : e <= n.top ? 100 : 100 * (0, r.v)((n.height - (e - n.top)) / n.height, 0, 1), this.render(i), this.update(i)), !1
                    }, i.tap = function(t) {
                        this.railBounds = c(this.elementRail), this.dragMove(t)
                    }, i.limit = function(t) {
                        return t
                    }, i.update = function(t) {
                        this.trigger("update", {
                            percentage: t
                        })
                    }, i.render = function(t) {
                        t = Math.max(0, Math.min(t, 100));
                        var e = this.elementThumb,
                            i = this.elementProgress;
                        "horizontal" === this.orientation ? (e.style.left = t + "%", i.style.width = t + "%") : (e.style.bottom = t + "%", i.style.height = t + "%")
                    }, i.updateBuffer = function(t) {
                        this.elementBuffer.style.width = t + "%"
                    }, i.element = function() {
                        return this.el
                    }, e
                }(a.ZP)
        },
        5635: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return k
                }
            });
            var n = i(7462),
                o = i(4578),
                a = i(6042),
                s = i(1261),
                r = i(974),
                l = i(9888),
                c = i(2799),
                u = i(5882),
                p = i(4244),
                w = i(520),
                d = i(6886),
                h = i(7387),
                j = i(8381),
                g = i(1643),
                f = function() {
                    function t(t, e, i) {
                        this.time = t, this.text = e, this.el = document.createElement("div");
                        var n = "jw-cue jw-reset";
                        i && "string" == typeof i && (n += " jw-cue-type-" + i), this.el.className = n
                    }
                    return t.prototype.align = function(t) {
                        if ("%" === this.time.toString().slice(-1)) this.pct = this.time;
                        else {
                            var e = this.time / t * 100;
                            this.pct = e + "%"
                        }
                        this.el.style.left = this.pct
                    }, t
                }(),
                m = {
                    loadChapters: function(t) {
                        (0, d.h)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                            plainText: !0
                        })
                    },
                    chaptersLoaded: function(t) {
                        var e = (0, h.Z)(t.responseText);
                        if (Array.isArray(e)) {
                            var i = this._model.get("playlistItem") || {};
                            if (!i.chapters || !i.chapters.timestamps || !i.chapters.timestamps.length) {
                                var n = (0, j._b)(e, i.chapters);
                                i.chapters = n, this._model.set("playlistItem", i), this._api.trigger(g.t6, n.timestamps[0])
                            }
                        }
                    },
                    chaptersFailed: function() {},
                    addCue: function(t) {
                        this.cues.push(new f(t.begin, t.text, t.cueType))
                    },
                    drawCues: function() {
                        var t = this,
                            e = this._model.get("duration");
                        !e || e <= 0 || this.cues.forEach((function(i) {
                            i.align(e), t.elementRail.appendChild(i.el)
                        }))
                    },
                    setActiveCue: function(t) {
                        this.activeCue = this.cues.reduce((function(e, i) {
                            return t < i.time ? e : e ? i.time > e.time ? i : e : i
                        }), null)
                    },
                    resetCues: function() {
                        this.cues.forEach((function(t) {
                            t.el.parentNode && t.el.parentNode.removeChild(t.el)
                        })), this.cues = []
                    },
                    updateChapter: function(t) {
                        var e = (this._model.get("playlistItem") || {}).chapters;
                        if (e && e.timestamps) {
                            var i = (0, j.Mf)(t, e.timestamps);
                            i && i !== this.activeChapter && (this.activeChapter = i, this._api.trigger(g.t6, i))
                        }
                    }
                };

            function v(t) {
                this.begin = t.begin, this.end = t.end, this.img = t.text
            }
            var b = {
                    loadThumbnails: function(t) {
                        t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, (0, d.h)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                            plainText: !0
                        }))
                    },
                    thumbnailsLoaded: function(t) {
                        var e = (0, h.Z)(t.responseText);
                        Array.isArray(e) && (e.forEach((function(t) {
                            this.thumbnails.push(new v(t))
                        }), this), this.drawCues(), this.showThumbnail(0))
                    },
                    thumbnailsFailed: function() {},
                    chooseThumbnail: function(t) {
                        var e = this.thumbnails,
                            i = (0, a.e1)(e, {
                                end: t
                            }, (0, a.Cb)("end"));
                        i >= e.length && (i = e.length - 1);
                        var n = e[i].img;
                        return n.indexOf("://") < 0 && (n = this.vttPath ? this.vttPath + "/" + n : n), n
                    },
                    loadThumbnail: function(t) {
                        var e = this.chooseThumbnail(t),
                            i = {
                                margin: "0 auto",
                                backgroundPosition: "0 0"
                            };
                        if (e.indexOf("#xywh") > 0) try {
                            var n = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(e);
                            if (!n) throw new Error("No match for expected thumbnail pattern");
                            e = n[1];
                            var o = parseInt(n[2]),
                                s = parseInt(n[3]);
                            i.backgroundPosition = -1 * o + "px " + -1 * s + "px", i.width = n[4], this.timeTip.setWidth(+i.width), i.height = n[5]
                        } catch (t) {
                            return
                        } else if (!this.individualImage) {
                            var r = this.individualImage = new Image;
                            r.onload = (0, a.ak)((function() {
                                r.onload = null, this.timeTip.image({
                                    width: r.width,
                                    height: r.height
                                }), this.timeTip.setWidth(r.width)
                            }), this), r.src = e
                        } return i.backgroundImage = 'url("' + e + '")', i
                    },
                    showThumbnail: function(t) {
                        this._model.get("containerWidth") <= 420 || !this.thumbnails || this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(t))
                    },
                    resetThumbnails: function() {
                        this.timeTip.image({
                            backgroundImage: "",
                            width: 0,
                            height: 0
                        }), this.thumbnails = []
                    }
                },
                y = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.setup = function() {
                        this.textChapter = document.createElement("span"), this.textChapter.className = "jw-time-chapter jw-text jw-reset", this.textChapter.style.display = "none", this.textTime = document.createElement("span"), this.textTime.className = "jw-time-time jw-text jw-reset", this.img = document.createElement("div"), this.img.className = "jw-time-thumb jw-reset", this.containerWidth = 0, this.textLength = 0, this.dragJustReleased = !1;
                        var t = document.createElement("div");
                        t.className = "jw-time-tip jw-reset", t.appendChild(this.img), t.appendChild(this.textChapter), t.appendChild(this.textTime), this.addContent(t)
                    }, i.image = function(t) {
                        (0, r.oB)(this.img, t)
                    }, i.update = function(t, e) {
                        this.textTime && (this.textTime.textContent = t, e ? this.textChapter && (this.textChapter.textContent = e, this.textChapter.style.removeProperty("display")) : this.textChapter && (this.textChapter.style.display = "none", this.textChapter.textContent = ""))
                    }, i.getWidth = function() {
                        return this.containerWidth || this.setWidth(), this.containerWidth
                    }, i.setWidth = function(t) {
                        t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = (0, c.A8)(this.container).width + 16)
                    }, i.resetWidth = function() {
                        this.containerWidth = 0
                    }, e
                }(w.Z);
            var x = function(t) {
                function e(e, i, o) {
                    var s, r, l, c;
                    return (s = t.call(this, "jw-slider-time", "horizontal") || this)._model = e, s._api = i, s.timeUpdateKeeper = o, s.timeTip = new y("jw-tooltip-time", null, !0), s.timeTip.setup(), s.cues = [], s.seekThrottled = (0, a.P2)(s.performSeek, 400), s._updateAriaTextLimitedThrottled = (r = (0, a.P2)(s.updateAriaText, 1e3), l = 4, c = 0, (0, n.Z)((function() {
                        if (++c < l) {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            return r.apply(this, e)
                        }
                    }), {
                        reset: function() {
                            c = 0
                        },
                        shush: function() {
                            c = 1 / 0
                        }
                    })), s.setup(), s
                }(0, o.Z)(e, t);
                var i = e.prototype;
                return i.setup = function() {
                    var e = this;
                    t.prototype.setup.call(this), this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("change:chapters", this.onChapters, this).on("seeked", (function() {
                        e._model.get("scrubbing") || (e._updateAriaTextLimitedThrottled.reset(), e._updateAriaTextLimitedThrottled())
                    })), this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this), this._model.player.change("playlistItem", this.onPlaylistItem, this);
                    var i = this.el;
                    (0, c.P$)(i, "tabindex", "0"), (0, c.P$)(i, "role", "slider"), (0, c.P$)(i, "aria-label", this._model.get("localization").slider), i.removeAttribute("aria-hidden"), this.elementRail.appendChild(this.timeTip.element()), this.ui = (this.ui || new u.ZP(i)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (function() {
                        return i.focus()
                    })).on("focus", (function() {
                        return e._updateAriaTextLimitedThrottled.reset()
                    })).on("blur", (function() {
                        return e._updateAriaTextLimitedThrottled.shush()
                    }))
                }, i.update = function(e) {
                    this.seekTo = e, this.seekThrottled(), t.prototype.update.apply(this, [e])
                }, i.dragStart = function() {
                    this._model.set("scrubbing", !0), t.prototype.dragStart.call(this)
                }, i.dragEnd = function(e) {
                    t.prototype.dragEnd.apply(this, [e]), this._model.set("scrubbing", !1)
                }, i.onBuffer = function(t, e) {
                    this.updateBuffer(e)
                }, i.onPosition = function(t, e) {
                    this.updateChapter(e), this.updateTime(e, t.get("duration"))
                }, i.onDuration = function(t, e) {
                    this.updateTime(t.get("position"), e), (0, c.P$)(this.el, "aria-valuemin", 0), (0, c.P$)(this.el, "aria-valuemax", Math.abs(e)), this.updateCues(null, t.getCues())
                }, i.onStreamType = function(t, e) {
                    this.streamType = e
                }, i.onChapters = function() {
                    this.updateCues(null, this._model.getCues())
                }, i.updateTime = function(t, e) {
                    var i = 0,
                        n = !!this._model.get("instreamMode");
                    if (e)
                        if ("DVR" !== this.streamType || n) "VOD" !== this.streamType && this.streamType && !n || (i = t / e * 100);
                        else {
                            var o = this._model.get("dvrSeekLimit"),
                                a = e + o;
                            i = (a - (t + o)) / a * 100
                        } this._updateAriaTextLimitedThrottled(), this.render(i)
                }, i.onPlaylistItem = function(t, e) {
                    this.reset();
                    var i = t.getCues();
                    !this.cues.length && i.length && this.updateCues(null, i);
                    var n = e.tracks;
                    (0, a.S6)(n, (function(t) {
                        t && t.kind && "thumbnails" === t.kind.toLowerCase() ? this.loadThumbnails(t.file) : t && t.kind && "chapters" === t.kind.toLowerCase() && this.loadChapters(t.file)
                    }), this)
                }, i.performSeek = function() {
                    var t, e = this.seekTo,
                        i = this._model.get("duration");
                    if (0 === i) this._api.play({
                        reason: "interaction"
                    });
                    else if ("DVR" === this.streamType) {
                        var n = this._model.get("seekRange") || {
                                start: 0
                            },
                            o = this._model.get("dvrSeekLimit");
                        t = n.start + (-i - o) * e / 100, this._api.seek(t, {
                            reason: "interaction"
                        })
                    } else t = e / 100 * i, this._api.seek(Math.min(t, i - .25), {
                        reason: "interaction"
                    })
                }, i.showTimeTooltip = function(t) {
                    var e = this._model.get("duration");
                    if (0 !== e) {
                        var i, n = this._model.get("containerWidth"),
                            o = (0, c.A8)(this.elementRail),
                            a = t.pageX ? t.pageX - o.left : t.x,
                            u = (a = (0, s.v)(a, 0, o.width)) / o.width,
                            p = e * u;
                        if (e < 0) p = (e += this._model.get("dvrSeekLimit")) - (p = e * u);
                        var w = (0, l.timeFormat)(p, !0),
                            d = this.timeTip;
                        if (this.setActiveCue(p), this.activeCue) d.update(w, this.activeCue.text), i = this.activeCue.text.length + w.length;
                        else {
                            var h = w;
                            e < 0 && p > -1 && (h = "Live"), d.update(h), i = h.length
                        }
                        this.textLength !== i && (this.textLength = i, d.resetWidth()), this.showThumbnail(p), (0, c.cn)(d.el, "jw-open");
                        var j = d.getWidth(),
                            g = n - o.width,
                            f = 0;
                        j > g && (f = (j - g) / 2);
                        var m = Math.round(4 * Math.min(o.width - f, Math.max(f, a))) / 4;
                        (0, r.vs)(d.el, "translateX(" + m + "px)")
                    }
                }, i.hideTimeTooltip = function() {
                    (0, c.IV)(this.timeTip.el, "jw-open")
                }, i.updateCues = function(t, e) {
                    var i = this;
                    this.resetCues(), e && e.length && (e.forEach((function(t) {
                        i.addCue(t)
                    })), this.drawCues())
                }, i.updateAriaText = function() {
                    var t = this._model,
                        e = this.el,
                        i = t.get("position"),
                        n = t.get("duration");
                    "DVR" === this.streamType && (i = (n = Math.abs(n)) + i);
                    var o = (0, l.timeFormatAria)(i) + " of " + (0, l.timeFormatAria)(n);
                    this.timeUpdateKeeper.textContent = o, (0, c.P$)(e, "aria-valuetext", o), (0, c.P$)(e, "aria-valuenow", i)
                }, i.reset = function() {
                    this.resetThumbnails(), this.timeTip.resetWidth(), this.textLength = 0, this._updateAriaTextLimitedThrottled.reset()
                }, e
            }(p.Z);
            (0, n.Z)(x.prototype, m, b);
            var k = x
        },
        520: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return r
                }
            });
            var n = i(4578),
                o = i(328);
            var a = i(2799),
                s = i(4667),
                r = function(t) {
                    function e(e, i, n, o) {
                        var a;
                        (a = t.call(this) || this).el = document.createElement("div");
                        var r, l, c = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset";
                        return n || (c += " jw-hidden"), i && (r = a.el, l = i, r && l && (r.setAttribute("aria-label", l), r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"))), a.el.className = c, a.tooltip = document.createElement("div"), a.tooltip.className = "jw-overlay jw-reset", a.openClass = "jw-open", a.componentType = "tooltip", a.el.appendChild(a.tooltip), o && o.length > 0 && Array.prototype.forEach.call(o, (function(t) {
                            "string" == typeof t ? a.el.appendChild((0, s.Z)(t)) : a.el.appendChild(t)
                        })), a
                    }(0, n.Z)(e, t);
                    var i = e.prototype;
                    return i.addContent = function(t) {
                        this.content && this.removeContent(), this.content = t, this.tooltip.appendChild(t)
                    }, i.removeContent = function() {
                        this.content && (this.tooltip.removeChild(this.content), this.content = null)
                    }, i.hasContent = function() {
                        return !!this.content
                    }, i.element = function() {
                        return this.el
                    }, i.openTooltip = function(t) {
                        this.isOpen || (this.trigger("open-" + this.componentType, t, {
                            isOpen: !0
                        }), this.isOpen = !0, (0, a.og)(this.el, this.openClass, this.isOpen))
                    }, i.closeTooltip = function(t) {
                        this.isOpen && (this.trigger("close-" + this.componentType, t, {
                            isOpen: !1
                        }), this.isOpen = !1, (0, a.og)(this.el, this.openClass, this.isOpen))
                    }, i.toggleOpenState = function(t) {
                        this.isOpen ? this.closeTooltip(t) : this.openTooltip(t)
                    }, e
                }(o.ZP)
        },
        4576: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return A
                }
            });
            var n = i(7462),
                o = i(8348),
                a = i(1643),
                s = i(7191),
                r = i(8168),
                l = i(5635),
                c = i(7326),
                u = i(4578),
                p = i(520),
                w = i(4244),
                d = i(5882),
                h = i(2799),
                j = function(t) {
                    function e(e, i, n) {
                        var o, a = "jw-slider-volume";
                        return "vertical" === e && (a += " jw-volume-tip"), (o = t.call(this, a, e) || this).setup(), o.element().classList.remove("jw-background-color"), (0, h.P$)(n, "tabindex", "0"), (0, h.P$)(n, "aria-label", i), (0, h.P$)(n, "aria-orientation", e), (0, h.P$)(n, "aria-valuemin", 0), (0, h.P$)(n, "aria-valuemax", 100), (0, h.P$)(n, "role", "slider"), o.uiOver = new d.ZP(n).on("click", (function() {})), o
                    }
                    return (0, u.Z)(e, t), e
                }(w.Z),
                g = function(t) {
                    function e(e, i, n, o, a) {
                        var s;
                        (s = t.call(this, i, n, !0, o) || this)._model = e, s.horizontalContainer = a;
                        var r = e.get("localization").volumeSlider;
                        return s.horizontalSlider = new j("horizontal", r, a), s.verticalSlider = new j("vertical", r, s.tooltip), a.appendChild(s.horizontalSlider.element()), s.addContent(s.verticalSlider.element()), s.verticalSlider.on("update", (function(t) {
                            this.trigger("update", t)
                        }), (0, c.Z)(s)), s.horizontalSlider.on("update", (function(t) {
                            this.trigger("update", t)
                        }), (0, c.Z)(s)), s.horizontalSlider.uiOver.on("keydown", (function(t) {
                            var e = t.sourceEvent;
                            switch (e.keyCode) {
                                case 37:
                                    e.stopPropagation(), s.trigger("adjustVolume", -10);
                                    break;
                                case 39:
                                    e.stopPropagation(), s.trigger("adjustVolume", 10)
                            }
                        })), s.ui = new d.ZP(s.el, {
                            directSelect: !0
                        }).on("click", s.handleClick, (0, c.Z)(s)).on("enter", (function() {
                            return s.trigger("toggleValue")
                        })), s.addSliderHandlers(s.ui), s.addSliderHandlers(s.horizontalSlider.uiOver), s.addSliderHandlers(s.verticalSlider.uiOver), s._model.change("audioMode", s.updateSlider, (0, c.Z)(s)), s
                    }(0, u.Z)(e, t);
                    var i = e.prototype;
                    return i.updateSlider = function(t, e) {
                        var i = t.get("horizontalVolumeSlider") || e;
                        (0, h.og)(this.element(), "jw-flag-horizontal-slider", !!i)
                    }, i.addSliderHandlers = function(t) {
                        var e = this.openSlider,
                            i = this.closeSlider;
                        t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
                    }, i.openSlider = function(e) {
                        t.prototype.openTooltip.call(this, e), (0, h.og)(this.horizontalContainer, this.openClass, !0)
                    }, i.closeSlider = function(e) {
                        t.prototype.closeTooltip.call(this, e), (0, h.og)(this.horizontalContainer, this.openClass, !1), this.horizontalContainer.blur()
                    }, i.handleClick = function(t) {
                        o.OS.mobile ? this.toggleOpenState(t) : this.trigger("toggleValue")
                    }, i.destroy = function() {
                        this.horizontalSlider.uiOver.destroy(), this.verticalSlider.uiOver.destroy(), this.ui.destroy()
                    }, e
                }(p.Z),
                f = i(8165),
                m = i(5349),
                v = i(328),
                b = i(2268),
                y = i(9888),
                x = i(6234),
                k = i(5646);

            function C(t, e) {
                var i = document.createElement("div");
                return i.className = "jw-icon jw-icon-inline jw-text jw-reset " + t, e && (0, h.P$)(i, "role", e), i
            }

            function z(t) {
                var e = document.createElement("div");
                return e.className = "jw-reset " + t, e
            }

            function T(t, e) {
                if ("WebKitPlaybackTargetAvailabilityEvent" in window) {
                    var i = (0, f.Z)("jw-icon-airplay jw-off", t, e.airplay, (0, s.o)("airplay-off,airplay-on"));
                    return (0, m.i)(i.element(), "airplay", e.airplay), i
                }
                if (o.Browser.chrome && window.chrome) {
                    var n = document.createElement("google-cast-launcher");
                    (0, h.P$)(n, "tabindex", "-1"), n.className += " jw-reset";
                    var a = (0, f.Z)("jw-icon-cast", null, e.cast);
                    a.ui.off();
                    var r = a.element();
                    return r.style.cursor = "pointer", r.appendChild(n), a.button = n, (0, m.i)(r, "chromecast", e.cast), a
                }
            }

            function S(t, e, i) {
                if (!o.OS.mobile && "disabled" !== t && (o.Browser.chrome && !(0, b.yS)() || o.Browser.edge || o.Browser.safari)) {
                    var n = (0, f.Z)("jw-icon-pip jw-off", e, i.pipIcon, (0, s.o)("pip-on,pip-off"));
                    return (0, m.i)(n.element(), "pip", i.pipIcon), n
                }
            }

            function M(t, e) {
                return t.filter((function(t) {
                    return !e.some((function(e) {
                        return e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback
                    }))
                }))
            }
            var B = function(t, e) {
                    e.forEach((function(e) {
                        e.element && (e = e.element()), t.appendChild(e)
                    }))
                },
                A = function() {
                    function t(t, e, i) {
                        var r = this;
                        (0, n.Z)(this, v.ZP), this._api = t, this._model = e, this._isMobile = o.OS.mobile, this._volumeAnnouncer = i.querySelector(".jw-volume-update");
                        var c, u, p, w = e.get("localization"),
                            j = new l.Z(e, t, i.querySelector(".jw-time-update")),
                            b = this.menus = [];
                        this.ui = [];
                        var y = "",
                            M = w.volume;
                        if (this._isMobile) {
                            if (!(e.get("sdkplatform") || o.OS.iOS && o.OS.version.major < 10)) {
                                var A = (0, s.o)("volume-0,volume-100");
                                p = (0, f.Z)("jw-icon-volume", (function() {
                                    t.setMute()
                                }), M, A)
                            }
                        } else {
                            (u = document.createElement("div")).className = "jw-horizontal-volume-container";
                            var E = (c = new g(e, "jw-icon-volume", M, (0, s.o)("volume-0,volume-50,volume-100"), u)).element();
                            b.push(c), (0, h.P$)(E, "role", "group"), e.change("mute", (function(t, e) {
                                var i = e ? w.unmute : w.mute;
                                (0, h.P$)(E, "aria-label", i + " button")
                            }), this)
                        }
                        var L = (0, f.Z)("jw-icon-next", (function() {
                                t.next({
                                    feedShownId: y,
                                    reason: "interaction"
                                })
                            }), w.next, (0, s.o)("next")),
                            Z = (0, f.Z)("jw-icon-settings jw-settings-submenu-button", (function(t) {
                                r.trigger("settingsInteraction", "quality", !0, t)
                            }), w.settings, (0, s.o)("settings"));
                        (0, h.P$)(Z.element(), "aria-controls", "jw-settings-menu"), (0, h.P$)(Z.element(), "aria-expanded", !1);
                        var I = (0, f.Z)("jw-icon-cc jw-settings-submenu-button", (function(t) {
                            r.trigger("settingsInteraction", "captions", !1, t)
                        }), w.cc, (0, s.o)("cc-off,cc-on"));
                        (0, h.P$)(I.element(), "aria-controls", "jw-settings-submenu-captions");
                        var H = (0, f.Z)("jw-text-live", (function() {
                            r.goToLiveEdge()
                        }), w.liveBroadcast);
                        H.element().textContent = w.liveBroadcast;
                        var V, P, _, O = this.elements = {
                                alt: (V = "jw-text-alt", P = "status", _ = document.createElement("span"), _.className = "jw-text jw-reset-text " + V, P && (0, h.P$)(_, "role", P), (0, h.P$)(_, "dir", "auto"), _),
                                play: (0, f.Z)("jw-icon-playback", (function() {
                                    t.playToggle({
                                        reason: "interaction"
                                    })
                                }), w.play, (0, s.o)("play,pause,stop")),
                                rewind: (0, f.Z)("jw-icon-rewind", (function() {
                                    r.rewind()
                                }), w.rewind, (0, s.o)("rewind")),
                                live: H,
                                next: L,
                                elapsed: C("jw-text-elapsed", "timer"),
                                countdown: C("jw-text-countdown", "timer"),
                                time: j,
                                duration: C("jw-text-duration", "timer"),
                                mute: p,
                                volumetooltip: c,
                                horizontalVolumeContainer: u,
                                cast: T((function() {
                                    t.castToggle()
                                }), w),
                                pip: S(e.get("pipIcon"), (function() {
                                    t.setPip()
                                }), w),
                                imaFullscreen: (0, f.Z)("jw-icon-fullscreen", (function() {
                                    t.setFullscreen()
                                }), w.fullscreen, (0, s.o)("fullscreen-off,fullscreen-on")),
                                fullscreen: (0, f.Z)("jw-icon-fullscreen", (function() {
                                    t.setFullscreen()
                                }), w.fullscreen, (0, s.o)("fullscreen-off,fullscreen-on")),
                                spacer: z("jw-spacer"),
                                buttonContainer: z("jw-button-container"),
                                settingsButton: Z,
                                captionsButton: I
                            },
                            N = (0, m.i)(I.element(), "captions", w.cc),
                            R = function(t) {
                                var e = t.get("captionsList")[t.get("captionsIndex")],
                                    i = w.cc;
                                e && "Off" !== e.label && (i = e.label), N.setText(i)
                            },
                            U = (0, m.i)(O.play.element(), "play", w.play);
                        this.setPlayText = function(t) {
                            U.setText(t)
                        };
                        var q = O.next.element(),
                            F = (0, m.i)(q, "next", w.nextUp, (function() {
                                var t = e.get("nextUp");
                                t && (y = (0, x.B)(x.F), r.trigger("nextShown", {
                                    mode: t.mode,
                                    ui: "nextup",
                                    itemsShown: [t],
                                    feedData: t.feedData,
                                    reason: "hover",
                                    feedShownId: y
                                }))
                            }), (function() {
                                y = ""
                            }));
                        (0, h.P$)(q, "dir", "auto"), (0, m.i)(O.rewind.element(), "rewind", w.rewind), (0, m.i)(O.settingsButton.element(), "settings", w.settings);
                        var D = [(0, m.i)(O.fullscreen.element(), "fullscreen", w.fullscreen), (0, m.i)(O.imaFullscreen.element())];
                        (0, h.cn)(O.imaFullscreen.element(), "jw-fullscreen-ima");
                        var W = [O.play, O.rewind, O.next, O.volumetooltip, O.horizontalVolumeContainer, O.imaFullscreen, O.mute, O.alt, O.live, O.elapsed, O.countdown, O.duration, O.spacer, O.cast, O.captionsButton, O.settingsButton, O.pip, O.fullscreen].filter((function(t) {
                                return t
                            })),
                            $ = [O.time, O.buttonContainer].filter((function(t) {
                                return t
                            }));
                        this.el = document.createElement("div"), this.el.className = "jw-controlbar jw-reset", B(O.buttonContainer, W), B(this.el, $);
                        var K = e.get("logo");
                        if (K && "control-bar" === K.position && this.addLogo(K), O.play.show(), O.fullscreen.show(), O.imaFullscreen.show(), O.mute && O.mute.show(), O.pip && O.pip.show(), e.change("volume", this.onVolume, this), e.change("mute", (function(t, e) {
                                r.renderVolume(e, t.get("volume"))
                            }), this), e.change("state", this.onState, this), e.change("duration", this.onDuration, this), e.change("position", this.onElapsed, this), e.change("fullscreen", (function(t, e) {
                                for (var i = [r.elements.fullscreen.element(), r.elements.imaFullscreen.element()], n = 0; n < i.length; n++) {
                                    var o = i[n];
                                    (0, h.og)(i[n], "jw-off", e);
                                    var a = t.get("fullscreen") ? w.exitFullscreen : w.fullscreen;
                                    D[n].setText(a), (0, h.P$)(o, "aria-label", a)
                                }
                            }), this), e.change("allowFullscreen", this.onAllowFullscreenToggle, this), e.change("pip", (function(t, e) {
                                r.elements.pip && (0, h.og)(r.elements.pip.element(), "jw-off", e)
                            }), this), e.change("mediaType", (function(t, e) {
                                r.elements.pip && r.elements.pip.toggle("audio" !== e)
                            }), this), e.change("streamType", this.onStreamTypeChange, this), e.change("dvrLive", (function(t, e) {
                                var i = w.liveBroadcast,
                                    n = w.notLive,
                                    o = r.elements.live.element(),
                                    a = !1 === e;
                                (0, h.og)(o, "jw-dvr-live", a), (0, h.P$)(o, "aria-label", a ? n : i), o.textContent = a ? n : i
                            }), this), e.change("altText", this.setAltText, this), e.change("customButtons", this.updateButtons, this), e.on("change:captionsIndex", R, this), e.on("change:captionsList", R, this), e.change("nextUp", (function(t, e) {
                                y = (0, x.B)(x.F);
                                var i = w.nextUp;
                                e && e.title && (i += ": " + e.title), F.setText(i), O.next.toggle(!!e)
                            }), this), e.change("audioMode", this.onAudioMode, this), O.cast && (e.change("castAvailable", this.onCastAvailable, this), e.change("castActive", this.onCastActive, this)), O.volumetooltip && (O.volumetooltip.on("update", (function(t) {
                                var e = t.percentage;
                                this._api.setVolume(e)
                            }), this), O.volumetooltip.on("toggleValue", (function() {
                                this._api.setMute()
                            }), this), O.volumetooltip.on("adjustVolume", (function(t) {
                                this.trigger("adjustVolume", t)
                            }), this)), O.cast && O.cast.button) {
                            var Y = O.cast.ui.on("click enter", (function(t) {
                                "keydown" === t.type && O.cast.button.click(), this._model.set("castClicked", !0)
                            }), this);
                            this.ui.push(Y)
                        }
                        var X = (0, k.Z)(O.duration, (function() {
                            if ("DVR" === this._model.get("streamType")) {
                                var t = this._model.get("position"),
                                    e = this._model.get("dvrSeekLimit");
                                this._api.seek(Math.max(-e, t), {
                                    reason: "interaction"
                                })
                            }
                        }), this);
                        this.ui.push(X);
                        var J = new d.ZP(this.el).on("click drag", (function() {
                            this.trigger(a.xf)
                        }), this);
                        this.ui.push(J), b.forEach((function(t) {
                            t.on("open-tooltip", r.closeMenus, r)
                        }))
                    }
                    var e = t.prototype;
                    return e.onVolume = function(t, e) {
                        this.renderVolume(t.get("mute"), e)
                    }, e.renderVolume = function(t, e) {
                        var i = this.elements.mute,
                            n = this.elements.volumetooltip;
                        if (i && ((0, h.og)(i.element(), "jw-off", t), (0, h.og)(i.element(), "jw-full", !t)), n) {
                            var o = t ? 0 : e,
                                a = n.element();
                            n.verticalSlider.render(o), n.horizontalSlider.render(o);
                            var s = n.tooltip,
                                r = n.horizontalContainer;
                            (0, h.og)(a, "jw-off", t), (0, h.og)(a, "jw-full", e >= 75 && !t), (0, h.P$)(s, "aria-valuenow", o), (0, h.P$)(r, "aria-valuenow", o);
                            var l = "Volume " + o + "%";
                            (0, h.P$)(s, "aria-valuetext", l), (0, h.P$)(r, "aria-valuetext", l), document.activeElement !== s && document.activeElement !== r && (this._volumeAnnouncer.textContent = l)
                        }
                    }, e.onCastAvailable = function(t, e) {
                        this.elements.cast.toggle(e)
                    }, e.onCastActive = function(t, e) {
                        this.elements.fullscreen.toggle(!e), this.elements.imaFullscreen.toggle(!e), this.elements.pip && this.elements.pip.toggle(!e), this.elements.cast.button && (0, h.og)(this.elements.cast.button, "jw-off", !e)
                    }, e.onElapsed = function(t, e) {
                        var i, n, o = t.get("duration");
                        if ("DVR" === t.get("streamType")) {
                            var a = Math.ceil(e),
                                s = this._model.get("dvrSeekLimit");
                            i = n = a >= -s ? "" : "-" + (0, y.timeFormat)(-(e + s)), t.set("dvrLive", a >= -s)
                        } else i = (0, y.timeFormat)(e), n = (0, y.timeFormat)(o - e);
                        this.elements.elapsed.textContent = i, this.elements.countdown.textContent = n
                    }, e.onDuration = function(t, e) {
                        this.elements.duration.textContent = (0, y.timeFormat)(Math.abs(e))
                    }, e.onAudioMode = function(t, e) {
                        var i = this.elements.time.element();
                        e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : (0, h.SH)(this.el, i)
                    }, e.element = function() {
                        return this.el
                    }, e.setAltText = function(t, e) {
                        this.elements.alt.textContent = e
                    }, e.closeMenus = function(t) {
                        this.menus.forEach((function(e) {
                            t && t.target === e.el || e.closeTooltip(t)
                        }))
                    }, e.rewind = function() {
                        var t, e = 0,
                            i = this._model.get("currentTime");
                        i ? t = i - 10 : (t = this._model.get("position") - 10, "DVR" === this._model.get("streamType") && (e = this._model.get("duration"))), this._api.seek(Math.max(t, e), {
                            reason: "interaction"
                        })
                    }, e.onState = function(t, e) {
                        var i = t.get("localization"),
                            n = i.play;
                        this.setPlayText(n), e === a.r0 && ("LIVE" !== t.get("streamType") ? (n = i.pause, this.setPlayText(n)) : (n = i.stop, this.setPlayText(n))), (0, h.P$)(this.elements.play.element(), "aria-label", n)
                    }, e.onAllowFullscreenToggle = function(t, e) {
                        [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()].forEach((function(t) {
                            (0, h.og)(t, "jw-fullscreen-disallowed", !e)
                        }))
                    }, e.onStreamTypeChange = function(t, e) {
                        var i = "LIVE" === e,
                            n = "DVR" === e;
                        this.elements.rewind && this.elements.rewind.toggle(!i), this.elements.live.toggle(i || n), (0, h.P$)(this.elements.live.element(), "tabindex", i ? "-1" : "0"), this.elements.duration.style.display = n ? "none" : "", this.onDuration(t, t.get("duration")), this.onState(t, t.get("state"))
                    }, e.addLogo = function(t) {
                        var e = this.elements.buttonContainer,
                            i = new r.Z(t.file, this._model.get("localization").logo, (function() {
                                t.link && (0, h.nG)(t.link, "_blank", {
                                    rel: "noreferrer"
                                })
                            }), "logo", "jw-logo-button");
                        t.link || (0, h.P$)(i.element(), "tabindex", "-1"), e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
                    }, e.goToLiveEdge = function() {
                        if ("DVR" === this._model.get("streamType")) {
                            var t = Math.min(this._model.get("position"), -1),
                                e = this._model.get("dvrSeekLimit");
                            this._api.seek(Math.max(-e, t), {
                                reason: "interaction"
                            }), this._api.play({
                                reason: "interaction"
                            })
                        }
                    }, e.updateButtons = function(t, e, i) {
                        if (e) {
                            var n, o, a = this.elements.buttonContainer;
                            e !== i && i ? (n = M(e, i), o = M(i, e), this.removeButtons(a, o)) : n = e;
                            for (var s = n.length - 1; s >= 0; s--) {
                                var l = n[s],
                                    c = new r.Z(l.img, l.tooltip, l.callback, l.id, l.btnClass);
                                l.tooltip && (0, m.i)(c.element(), l.id, l.tooltip);
                                var u = void 0;
                                "related" === c.id ? u = this.elements.settingsButton.element() : "share" === c.id ? u = a.querySelector('[button="related"]') || this.elements.settingsButton.element() : (u = this.elements.spacer.nextSibling) && "logo" === u.getAttribute("button") && (u = u.nextSibling), a.insertBefore(c.element(), u)
                            }
                        }
                    }, e.removeButtons = function(t, e) {
                        for (var i = e.length; i--;) {
                            var n = t.querySelector('[button="' + e[i].id + '"]');
                            n && t.removeChild(n)
                        }
                    }, e.toggleCaptionsButtonState = function(t) {
                        var e = this.elements.captionsButton;
                        e && (0, h.og)(e.element(), "jw-off", !t)
                    }, e.destroy = function() {
                        var t = this;
                        this._model.off(null, null, this), Object.keys(this.elements).forEach((function(e) {
                            var i = t.elements[e];
                            i && "function" == typeof i.destroy && t.elements[e].destroy()
                        })), this.ui.forEach((function(t) {
                            t.destroy()
                        })), this.ui = []
                    }, t
                }()
        },
        4697: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return w
                }
            });
            var n = function(t, e) {
                    return void 0 === t && (t = ""), void 0 === e && (e = ""), '<div class="jw-display-icon-container jw-display-icon-' + t + ' jw-reset"><div class="jw-icon jw-icon-' + t + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + e + '"></div></div>'
                },
                o = i(5646),
                a = function() {
                    function t(t, e, i) {
                        var n = i.querySelector(".jw-icon");
                        this.el = i, this.ui = (0, o.Z)(n, (function() {
                            var i = t.get("position"),
                                n = t.get("duration"),
                                o = i - 10,
                                a = 0;
                            "DVR" === t.get("streamType") && (a = n), e.seek(Math.max(o, a))
                        }))
                    }
                    return t.prototype.element = function() {
                        return this.el
                    }, t
                }(),
                s = i(4578),
                r = i(328),
                l = i(2799),
                c = function(t) {
                    function e(e, i, n) {
                        var a;
                        a = t.call(this) || this;
                        var s = e.get("localization"),
                            r = n.querySelector(".jw-icon");
                        if (a.icon = r, a.el = n, a.ui = (0, o.Z)(r, (function(t) {
                                a.trigger(t.type)
                            })), e.on("change:state", (function(t, e) {
                                var i;
                                switch (e) {
                                    case "buffering":
                                        i = s.buffer;
                                        break;
                                    case "playing":
                                        i = s.pause;
                                        break;
                                    case "idle":
                                    case "paused":
                                        i = s.playback;
                                        break;
                                    case "complete":
                                        i = s.replay;
                                        break;
                                    default:
                                        i = ""
                                }
                                "" !== i ? r.setAttribute("aria-label", i) : r.removeAttribute("aria-label")
                            })), e.get("displayPlaybackLabel")) {
                            var c = a.icon.getElementsByClassName("jw-idle-icon-text")[0];
                            c || (c = (0, l.az)('<div class="jw-idle-icon-text">' + s.playback + "</div>"), (0, l.cn)(a.icon, "jw-idle-label"), a.icon.appendChild(c))
                        }
                        return a
                    }
                    return (0, s.Z)(e, t), e.prototype.element = function() {
                        return this.el
                    }, e
                }(r.ZP),
                u = function() {
                    function t(t, e, i) {
                        var n = i.querySelector(".jw-icon");
                        this.ui = (0, o.Z)(n, (function() {
                            e.next({
                                reason: "interaction"
                            })
                        })), t.change("nextUp", (function(t, e) {
                            i.style.visibility = e ? "" : "hidden"
                        })), this.el = i
                    }
                    return t.prototype.element = function() {
                        return this.el
                    }, t
                }(),
                p = i(7191),
                w = function() {
                    function t(t, e) {
                        var i;
                        this.el = (0, l.az)((i = t.get("localization"), '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
                        var o = this.el.querySelector(".jw-display-controls"),
                            s = {};
                        d("rewind", (0, p.o)("rewind"), a, o, s, t, e), d("display", (0, p.o)("play,pause,buffer,replay"), c, o, s, t, e), d("next", (0, p.o)("next"), u, o, s, t, e), this.container = o, this.buttons = s
                    }
                    var e = t.prototype;
                    return e.element = function() {
                        return this.el
                    }, e.destroy = function() {
                        var t = this.buttons;
                        Object.keys(t).forEach((function(e) {
                            t[e].ui && t[e].ui.destroy()
                        }))
                    }, t
                }();

            function d(t, e, i, n, o, a, s) {
                var r = n.querySelector(".jw-display-icon-" + t),
                    l = n.querySelector(".jw-icon-" + t);
                e.forEach((function(t) {
                    l.appendChild(t)
                })), o[t] = new i(a, s, r)
            }
        },
        7191: function(t, e, i) {
            "use strict";
            i.d(e, {
                W: function() {
                    return rt
                },
                o: function() {
                    return lt
                }
            });
            var n = i(147),
                o = i.n(n),
                a = i(4886),
                s = i.n(a),
                r = i(4777),
                l = i.n(r),
                c = i(6084),
                u = i.n(c),
                p = i(2521),
                w = i.n(p),
                d = i(6207),
                h = i.n(d),
                j = i(6641),
                g = i.n(j),
                f = i(3498),
                m = i.n(f),
                v = i(3918),
                b = i.n(v),
                y = i(3356),
                x = i.n(y),
                k = i(8157),
                C = i.n(k),
                z = i(5806),
                T = i.n(z),
                S = i(7766),
                M = i.n(S),
                B = i(4851),
                A = i.n(B),
                E = i(3207),
                L = i.n(E),
                Z = i(7938),
                I = i.n(Z),
                H = i(4060),
                V = i.n(H),
                P = i(4119),
                _ = i.n(P),
                O = i(9992),
                N = i.n(O),
                R = i(6038),
                U = i.n(R),
                q = i(5058),
                F = i.n(q),
                D = i(7459),
                W = i.n(D),
                $ = i(4606),
                K = i.n($),
                Y = i(1438),
                X = i.n(Y),
                J = i(5147),
                G = i.n(J),
                Q = i(9863),
                tt = i.n(Q),
                et = i(2494),
                it = i.n(et),
                nt = i(8675),
                ot = i.n(nt),
                at = i(4667),
                st = null;

            function rt(t) {
                var e = pt().querySelector(ct(t));
                return e ? ut(e) : null
            }

            function lt(t) {
                var e = pt().querySelectorAll(t.split(",").map(ct).join(","));
                return Array.prototype.map.call(e, (function(t) {
                    return ut(t)
                }))
            }

            function ct(t) {
                return ".jw-svg-icon-" + t
            }

            function ut(t) {
                return t.cloneNode(!0)
            }

            function pt() {
                return st || (st = (0, at.Z)("<xml>" + o() + s() + l() + u() + w() + h() + g() + m() + b() + x() + C() + T() + M() + A() + L() + I() + V() + _() + N() + U() + F() + X() + G() + W() + K() + tt() + it() + ot() + "</xml>")), st
            }
        },
        3163: function(t, e, i) {
            "use strict";
            i.d(e, {
                Ge: function() {
                    return a
                },
                dr: function() {
                    return r
                },
                v2: function() {
                    return s
                }
            });
            var n = i(4060),
                o = i.n(n),
                a = function(t) {
                    return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" dir="auto">' + t + "</button>"
                },
                s = function(t) {
                    var e = t.label;
                    return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + e + '" aria-controls="jw-settings-submenu-' + t.name + '" aria-expanded="false" dir="auto">' + e + "<div class='jw-reset jw-settings-value-wrapper'><div class=\"jw-reset-text jw-settings-content-item-value\">" + t.currentSelection + '</div><div class="jw-reset-text jw-settings-content-item-arrow">' + o() + "</div></div></button>"
                },
                r = function(t) {
                    return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" role="menuitem" aria-checked="false" dir="auto">' + t + "</button>"
                }
        },
        7509: function(t, e, i) {
            "use strict";
            i.d(e, {
                E6: function() {
                    return o
                },
                Z2: function() {
                    return a
                },
                qF: function() {
                    return n
                }
            });
            var n = function(t, e) {
                    return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu" class="jw-reset jw-settings-menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar"><div class="jw-reset jw-settings-topbar-text" tabindex="0"></div><div class="jw-reset jw-settings-topbar-buttons"></div></div></div>'
                },
                o = function(t, e) {
                    return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu-tizen" class="jw-reset jw-settings-menu-tizen" aria-expanded="false"></div>'
                },
                a = function(t, e, i) {
                    return '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu-tizen jw-settings-submenu-' + e + '"><div class="jw-reset jw-reset-text jw-settings-topbar-text">' + i + '</div><div class="jw-reset jw-settings-submenu-items"></div></div>'
                }
        },
        3112: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return V
                }
            });
            var n = i(3144),
                o = i(4578),
                a = i(5187),
                s = i(4576),
                r = i(7191),
                l = i(5635),
                c = i(8168),
                u = i(8165),
                p = i(5349),
                w = i(2799);

            function d(t) {
                var e = document.createElement("div");
                return e.className = "jw-reset " + t, e
            }
            var h = function(t, e) {
                e.forEach((function(e) {
                    t.appendChild(e)
                }))
            };

            function j(t) {
                return t.map((function(t) {
                    return "element" in t ? t.element() : t
                }))
            }

            function g(t) {
                t.open(), t.close()
            }

            function f(t) {
                return "element" in t && "none" !== t.element().style.display && t.element().classList.contains("jw-button-color")
            }

            function m(t) {
                if (t && "object" == typeof t) return "element" in t ? t.element() : "el" in t ? t.el : void 0
            }

            function v(t, e, i) {
                if (t)
                    for (var n = i ? 1 : -1, o = e.indexOf(t) + n; o >= 0 && o < e.length; o += n) {
                        var a = e[o];
                        if (f(a)) return a
                    }
            }
            var b = function(t) {
                    function e(e, i, n) {
                        var o;
                        (o = t.call(this, e, i, n) || this)._api = e, o._model = i, o.activeButton = null;
                        var a = i.get("localization"),
                            s = new l.Z(i, e, n.querySelector(".jw-time-update")),
                            c = o.elements,
                            w = o.elements = {
                                alt: c.alt,
                                play: c.play,
                                live: c.live,
                                elapsed: c.elapsed,
                                countdown: c.countdown,
                                time: s,
                                duration: c.duration,
                                settingsButton: c.settingsButton,
                                back: (0, u.Z)("jw-icon-back", (function() {
                                    o.trigger("backClick")
                                }), "Back", (0, r.o)("arrow-left")),
                                topContainer: d("jw-top-container"),
                                bottomContainer: d("jw-bottom-container"),
                                buttonContainer: d("jw-button-container")
                            };
                        w.play.element().removeChild(w.play.element().querySelector(".jw-tooltip-play")), g((0, p.i)(w.settingsButton.element(), "settings", a.settings)), g((0, p.i)(w.back.element(), "back", "Back")), o.topLayout = [w.back, w.settingsButton], o.bottomLayout = [w.play, w.alt, w.live, w.elapsed, w.time, w.countdown];
                        var f = [w.topContainer, w.buttonContainer, w.bottomContainer];
                        return o.el = document.createElement("div"), o.el.className = "jw-tizen-controlbar jw-controlbar jw-reset", h(w.topContainer, j(o.topLayout)), h(w.bottomContainer, j(o.bottomLayout)), h(o.el, f), w.play.show(), w.back.show(), o.setActiveButton(o.elements.play), o
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.handleKeydown = function(t, e, i) {
                        var n, o, a = this.activeButton,
                            s = !1,
                            r = !1;
                        if (!i && a) {
                            s = this.elements.topContainer.contains(a.element()), r = this.elements.bottomContainer.contains(a.element());
                            var l = s ? this.topLayout : this.bottomLayout;
                            n = v(a, l, !0), o = v(a, l, !1)
                        }
                        switch (t.keyCode) {
                            case 415:
                            case 19:
                            case 10252:
                                this.setActiveButton(this.elements.play);
                                break;
                            case 37:
                                if (i && a === this.adSkipButton) return void this.setActiveButton(this.elements.play);
                                if (o) return void this.setActiveButton(o);
                                break;
                            case 39:
                                if (i && this.adSkipButton && a === this.elements.play) return void this.setActiveButton(this.adSkipButton);
                                if (n) return void this.setActiveButton(n);
                                break;
                            case 38:
                                if (!e) return void this.setActiveButton(this.elements.play);
                                if (i) return;
                                if (r) return void(f(this.elements.settingsButton) ? this.setActiveButton(this.elements.settingsButton) : this.setActiveButton(this.elements.back));
                                break;
                            case 40:
                                if (!e) return void this.setActiveButton(this.elements.play);
                                if (i) return;
                                if (s) return void this.setActiveButton(this.elements.play);
                                break;
                            case 13:
                                if (i && a === this.adSkipButton) {
                                    if (!this.adSkipButton.skippable) return;
                                    return this.adSkipButton.skipUI.trigger("click"), void this.setActiveButton(this.elements.play)
                                }
                                e && a && a.ui.trigger("click")
                        }
                    }, i.setActiveButton = function(t) {
                        var e = this.activeButton;
                        if (e !== t) {
                            var i = m(e),
                                n = m(t);
                            i && (0, w.og)(i, "jw-active", !1), n && (0, w.og)(n, "jw-active", !0), this.activeButton = t
                        }
                    }, i.onAudioMode = function() {}, i.updateButtons = function(t, e, i) {
                        if (e)
                            for (var n = this.elements.buttonContainer, o = e.length - 1; o >= 0; o--) {
                                var a = e[o],
                                    s = new c.Z(a.img, a.tooltip, a.callback, a.id, a.btnClass);
                                a.tooltip && (0, p.i)(s.element(), a.id, a.tooltip), n.appendChild(s.element())
                            }
                    }, i.toggleVisibility = function(t) {
                        (0, w.og)(this.el.querySelector(".jw-bottom-container"), "jw-hidden", !t)
                    }, i.destroy = function() {
                        this.activeButton = null, t.prototype.destroy.apply(this)
                    }, e
                }(s.Z),
                y = i(974),
                x = i(9888);

            function k(t, e, i) {
                return e === t ? 0 : parseInt(i) / (t - e) * 100
            }
            var C = function() {
                    function t(t, e, i) {
                        var n = this;
                        this._model = t, this._api = e, this._slider = i, this.currentTime = 0;
                        var o = document.createElement("div");
                        o.className = "jw-tizen-seekbar", this.el = o;
                        var a = this.thumbnailContainer = (0, w.az)('<div class="jw-seekbar-thumbnails"><div class="jw-seekbar-thumb jw-reset"></div><div class="jw-seekbar-thumb jw-reset"></div><div class="jw-seekbar-thumb jw-active jw-reset"></div><div class="jw-seekbar-thumb jw-reset"></div><div class="jw-seekbar-thumb jw-reset"></div></div>');
                        this.el.appendChild(a), e.on("firstFrame", (function() {
                            n._slider.thumbnails && 0 !== n._slider.thumbnails.length && n.setImageDimensions()
                        }), this)
                    }
                    var e = t.prototype;
                    return e.setImageDimensions = function() {
                        var t = this,
                            e = new Image;
                        e.onload = function() {
                            e.onload = null, t.imageWidth = e.width, t.imageHeight = e.height
                        }, e.src = this._slider.chooseThumbnail(0)
                    }, e.show = function() {
                        this._slider.thumbnails && 0 !== this._slider.thumbnails.length ? ((0, w.cn)(this.thumbnailContainer, "jw-open"), this.updateThumbnails(this._model.get("position"), 10)) : ((0, w.cn)(this._slider.timeTip.el, "jw-open"), this.updateTimeTip(this._model.get("position")))
                    }, e.update = function(t) {
                        var e = this.currentTime,
                            i = this._model.get("duration"),
                            n = e + t;
                        (n = (n = n < 0 ? 0 : n) > i ? i : n) !== e && (this._slider.thumbnails && 0 !== this._slider.thumbnails.length ? this.updateThumbnails(n, Math.abs(t)) : this.updateTimeTip(n))
                    }, e.updateTimeTip = function(t) {
                        var e = this._slider.timeTip,
                            i = this.getProgressPercent(t);
                        (0, y.oB)(e.el, {
                            left: i + "%"
                        }), e.update((0, x.timeFormat)(Math.round(t))), this.updateProgressBar(t), this.currentTime = Math.round(t)
                    }, e.updateThumbnails = function(t, e) {
                        for (var i = this.thumbnailContainer.children, n = this._model.get("duration"), o = [t - 2 * e, t - e, t, t + e, t + 2 * e], a = 0; a < o.length; a++) {
                            var s = o[a],
                                r = i[a],
                                l = void 0;
                            s >= 0 && s <= n && (l = this._slider.loadThumbnail(s));
                            var c = this.getThumbnailStyles(l);
                            (0, y.oB)(r, c)
                        }
                        document.getElementsByClassName("jw-text-elapsed")[0].textContent = (0, x.timeFormat)(Math.round(t)), this.updateProgressBar(t), this.currentTime = Math.round(t)
                    }, e.hide = function() {
                        var t = this._model.get("position");
                        document.getElementsByClassName("jw-text-elapsed")[0].textContent = (0, x.timeFormat)(Math.round(t)), this.updateProgressBar(t), (0, w.IV)(this._slider.timeTip.el, "jw-open"), (0, w.IV)(this.thumbnailContainer, "jw-open"), this.resetThumbnails()
                    }, e.seek = function() {
                        this._api.seek(this.currentTime, {
                            reason: "interaction"
                        })
                    }, e.element = function() {
                        return this.el
                    }, e.destroy = function() {
                        this._api.off(null, null, this)
                    }, e.resetThumbnails = function() {
                        for (var t = 0; t < this.thumbnailContainer.children.length; t++)(0, y.oB)(this.thumbnailContainer.children[t], {
                            backgroundImage: ""
                        })
                    }, e.getProgressPercent = function(t) {
                        var e = this._model.get("duration");
                        return 100 * parseFloat((t / e).toFixed(3))
                    }, e.updateProgressBar = function(t) {
                        var e = this.getProgressPercent(t),
                            i = this._slider.el.querySelector(".jw-progress");
                        (0, y.oB)(i, {
                            width: e + "%"
                        })
                    }, e.getThumbnailStyles = function(t) {
                        var e = {
                            margin: "5px",
                            height: "215px",
                            width: "375px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundImage: ""
                        };
                        if (t && (e.backgroundImage = t.backgroundImage, t.width && t.height && this.imageWidth && this.imageHeight)) {
                            var i = this.imageWidth / t.width * 100,
                                n = this.imageHeight / t.height * 100;
                            e.backgroundSize = i + "% " + n + "%";
                            var o = t.backgroundPosition.match(/\d+/g),
                                a = k(this.imageWidth, t.width, o[0]),
                                s = k(this.imageHeight, t.height, o[1]);
                            e.backgroundPosition = a + "% " + s + "%"
                        }
                        return e
                    }, t
                }(),
                z = i(4697),
                T = i(7326),
                S = i(7284),
                M = i(2810),
                B = i(1643),
                A = i(5882),
                E = i(7509),
                L = function(t) {
                    function e(e, i, n, o) {
                        var a;
                        return (a = t.call(this, "settings", o.settings, null, o, E.E6) || this).onInteraction = a.onInteraction.bind((0, T.Z)(a)), a.onTransition = a.onTransition.bind((0, T.Z)(a)), a.ui = new A.ZP(a.el), a.api = e, a.model = i, a.controlbar = n, a.localization = o, a.visible = !1, a.addEventListeners(), a
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.addEventListeners = function() {
                        var t = this.model;
                        this.on("visibility", this.onVisibility, this), this.on("menuAppended", this.updateControlbarButtons), t.on("change:playlistItem", this.onPlaylistItem, this), t.change("audioTracks", this.onAudioTracks, this), t.on("change:currentAudioTrack", this.onAudioTrackIndex, this), t.change("captionsList", this.onCaptionsList, this), t.change("captionsIndex", this.onCaptionsIndex, this), this.el.addEventListener("animationend", this.onTransition)
                    }, i.setupMenu = function(t, e, i, n, o, a) {
                        if (!i || i.length <= 1) this.removeMenu(t);
                        else {
                            var s = this.children[t];
                            if (!s) {
                                (s = new S.Z(t, e, null, this.localization, E.Z2)).parentMenu = this, s.itemsContainer = new A.ZP(s.el.querySelector(".jw-settings-submenu-items"));
                                s.open = s.close = s.toggle = function() {}, s.el.classList.add("jw-settings-submenu-active"), this.appendMenu(s)
                            }
                            s.setMenuItems(s.createItems(i, n, a), o)
                        }
                    }, i.onInteraction = function(t) {
                        var e = function(e) {
                            var i = t.target,
                                n = e ? (0, w.i3)(i) : (0, w.AH)(i);
                            if (n) n.focus({
                                preventScroll: !0
                            });
                            else {
                                var o = e ? this.children.captions : this.children.audioTracks;
                                if (o && !o.el.contains(i)) {
                                    var a = o.items;
                                    (e ? a[a.length - 1] : a[0]).el.focus({
                                        preventScroll: !0
                                    })
                                }
                            }
                            this.trigger(B.xf)
                        };
                        switch (t.keyCode) {
                            case 38:
                                e.call(this, !0);
                                break;
                            case 40:
                                e.call(this, !1);
                                break;
                            case 37:
                                this.close(), this.controlbar && this.controlbar.elements.settingsButton.element().focus();
                                break;
                            case 415:
                            case 10252:
                                this.close(t, !0), this.api.play({
                                    reason: "settingsInteraction"
                                });
                                break;
                            case 10009:
                                this.close(t)
                        }
                    }, i.onVisibility = function(t) {
                        var e = this.api,
                            i = this.children,
                            n = this.controlbar,
                            o = this.el,
                            a = o.classList;
                        if (t.visible) {
                            e.pause({
                                reason: "settingsInteraction"
                            }), document.addEventListener("keydown", this.onInteraction), a.remove("jw-settings-transition-close"), a.add("jw-settings-open"), a.add("jw-settings-transition-open"), o.setAttribute("aria-expanded", "true"), this.visible = !0;
                            var s = Object.keys(this.children);
                            i && s.length && i[s[0]].items[0].el.focus({
                                preventScroll: !0
                            })
                        } else document.removeEventListener("keydown", this.onInteraction), a.remove("jw-settings-transition-open"), a.add("jw-settings-transition-close"), o.setAttribute("aria-expanded", "false"), this.visible = !1;
                        n && n.toggleVisibility(!t.visible)
                    }, i.open = function(t) {
                        this.toggle(t, !0)
                    }, i.close = function(t) {
                        this.toggle(t, !1)
                    }, i.toggle = function(t, e) {
                        void 0 === e && (e = !this.visible), e !== this.visible && (this.children.captions || this.children.audioTracks) && this.trigger("visibility", {
                            visible: e,
                            evt: t
                        })
                    }, i.onTransition = function() {
                        this.visible || this.el.classList.remove("jw-settings-transition-open", "jw-settings-open")
                    }, i.onAudioTracks = function(t, e) {
                        var i = this;
                        this.setupMenu("audioTracks", this.localization.audioTracks, e, (function(t) {
                            return i.api.setCurrentAudioTrack(t)
                        }), t.get("currentAudioTrackIndex"))
                    }, i.onAudioTrackIndex = function(t, e) {
                        var i = this.children.audioTracks;
                        (0, M.dt)(i, e), this.close()
                    }, i.onCaptionsList = function(t, e) {
                        var i = this,
                            n = {
                                defaultText: this.localization.off
                            },
                            o = t.get("captionsIndex");
                        this.setupMenu("captions", this.localization.cc, e, (function(t) {
                            return i.api.setCurrentCaptions(t)
                        }), o, n)
                    }, i.onCaptionsIndex = function(t, e) {
                        var i = this.children.captions;
                        (0, M.dt)(i, e), this.close()
                    }, i.onPlaylistItem = function() {
                        var t = this,
                            e = this.children;
                        this.close(), e && e.length && e.forEach((function(e) {
                            t.removeChild(e)
                        }))
                    }, i.updateControlbarButtons = function() {
                        var t = this.controlbar.elements.settingsButton;
                        Object.keys(this.children).length ? t.show() : t.hide()
                    }, i.destroy = function() {
                        M.MR.call(this), this.el.removeEventListener("animationend", this.onTransition), document.removeEventListener("keydown", this.onInteraction), this.controlbar && this.controlbar.toggleVisibility(!0)
                    }, e
                }(S.Z),
                Z = i(4646);
            i(4779);

            function I(t, e, i) {
                var n = t.createElementNS("http://www.w3.org/2000/svg", "circle");
                n.setAttribute("class", i), n.setAttribute("cx", "50%"), n.setAttribute("cy", "50%"), n.setAttribute("r", "75");
                var o = e.element().querySelector(".jw-svg-icon-buffer");
                o && o.appendChild(n)
            }
            var H = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this, e, i) || this).context = e, n.playerContainer = i, n.api = null, n.model = null, n.div = null, n.backdrop = null, n.pauseDisplay = null, n.displayContainer = null, n.controlbar = null, n.seekbar = null, n.seekState = !1, n.settingsMenu = null, n.showing = !1, n.instreamState = !1, n.keydownCallback = null, n
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.enable = function(e, i) {
                        var n = this;
                        (0, w.cn)(this.playerContainer, "jw-tizen-app jw-flag-fullscreen"), this.api = e, this.model = i;
                        var o = this.context.createElement("div");
                        if (o.className = "jw-tizen-controls jw-tizen-reset", !this.pauseDisplay) {
                            var s = (0, w.az)('<div class="jw-pause-display jw-reset"><div class="jw-pause-display-container jw-reset"><div class="jw-pause-title jw-reset-text"></div><div class="jw-pause-description jw-reset-text"></div></div></div>');
                            new a.Z(i).setup(s.querySelector(".jw-pause-display-container")), o.appendChild(s), this.pauseDisplay = s
                        }
                        if (!this.displayContainer) {
                            var r = new z.Z(i, e);
                            I(this.context, r, "jw-tizen-buffer-draw"), I(this.context, r, "jw-tizen-buffer-erase"), o.appendChild(r.element()), this.displayContainer = r
                        }
                        var l = new b(e, i, this.playerContainer.querySelector(".jw-hidden-accessibility"));
                        l.on("backClick", this.onBackClick, this), o.appendChild(l.element());
                        var c = this.seekbar = new C(i, e, l.elements.time);
                        o.appendChild(c.element());
                        var u = i.get("localization"),
                            p = new L(e, i.player, this.controlbar, u);
                        p.on(B.xf, (function() {
                            return n.userActive()
                        })), l.on("settingsInteraction", (function() {
                            p.toggle();
                            var t = n.div && n.div.querySelector(".jw-active");
                            p.visible && t && (0, w.IV)(t, "jw-active")
                        })), o.insertBefore(p.el, l.element()), e.on("playlistComplete", this.onBackClick, this), this.keydownCallback && (this.playerContainer.removeEventListener("keydown", this.keydownCallback), this.keydownCallback = null), this.keydownCallback = function(t) {
                            return n.handleKeydown(t)
                        }, document.addEventListener("keydown", this.keydownCallback), t.prototype.enable.call(this, e, i);
                        var d = this.controlbar;
                        if (d) {
                            var h = d.nextUpToolTip;
                            h && (h.off("all"), i.get("nextUp") && h.onNextUp(i, i.get("nextUp")), d.nextUpToolTip = null, l.nextUpToolTip = h, o.appendChild(h.element())), d.destroy()
                        }
                        this.settingsMenu && this.settingsMenu.destroy(), this.settingsMenu = p, this.controlbar = l, this.div = o, this.addBackdrop(), this.addControls(), this.playerContainer.focus({
                            preventScroll: !0
                        }), this.userInactive(), i.set("controlsEnabled", !0)
                    }, i.addControls = function() {
                        var e = this.wrapperElement.querySelector(".jw-controls");
                        e && this.wrapperElement.removeChild(e), t.prototype.addControls.call(this)
                    }, i.disable = function(e) {
                        this.model = null, this.apiEnabled && (this.api.off(null, null, this), this.api = null), this.keydownCallback && document.removeEventListener("keydown", this.keydownCallback), this.seekbar && this.seekbar.destroy(), t.prototype.disable.call(this, e)
                    }, i.userActive = function(e) {
                        void 0 === e && (e = 5e3), t.prototype.userActive.call(this, e)
                    }, i.onBackClick = function() {
                        this.api.trigger("backClick"), this.api.remove()
                    }, i.handleKeydown = function(t) {
                        if (this.apiEnabled && this.model) {
                            var e = !1,
                                i = this.settingsMenu;
                            if (!i || !i.visible || 10253 === t.keyCode) switch (this.controlbar && (this.controlbar.handleKeydown(t, this.showing, this.instreamState), e = this.controlbar.activeButton === this.controlbar.elements.play), t.keyCode) {
                                case 37:
                                    if (this.instreamState) return void this.userActive();
                                    if (this.seekState) return void this.updateSeek(-10);
                                    if (!this.showing || e) return void this.enterSeekMode();
                                    this.userActive();
                                    break;
                                case 39:
                                    if (this.instreamState) return void this.userActive();
                                    if (this.seekState) return void this.updateSeek(10);
                                    if (!this.showing || e) return void this.enterSeekMode();
                                    this.userActive();
                                    break;
                                case 38:
                                    if (this.seekState) return this.exitSeekMode(), this.userInactive(), void this.api.play();
                                    this.userActive();
                                    break;
                                case 40:
                                    this.seekState && this.exitSeekMode(), this.userActive();
                                    break;
                                case 13:
                                    if (t.preventDefault(), this.seekState) return void this.seek();
                                    this.showing || (this.userActive(), this.api.playToggle({
                                        reason: "interaction"
                                    }));
                                    break;
                                case 415:
                                    if (this.seekState) return void this.seek();
                                    this.model.get("state") !== B.r0 && this.api.play();
                                    break;
                                case 19:
                                    if (this.seekState) return void this.exitSeekMode();
                                    this.model.get("state") !== B._5 && (this.userActive(), this.api.pause());
                                    break;
                                case 10252:
                                    if (this.seekState) return void this.seek();
                                    this.model.get("state") !== B._5 && this.userActive(), this.api.playToggle({
                                        reason: "interaction"
                                    });
                                    break;
                                case 412:
                                case 417:
                                default:
                                    break;
                                case 10009:
                                    if (this.seekState) return this.exitSeekMode(), void this.userActive();
                                    this.onBackClick();
                                    break;
                                case 10253:
                                    this.userActive(), i && i.toggle(t);
                                    break;
                                case 10182:
                                    this.api.remove()
                            }
                        }
                    }, i.seek = function() {
                        this.apiEnabled && this.seekbar && (this.seekbar.seek(), this.exitSeekMode(), this.api.play(), this.userInactive())
                    }, i.enterSeekMode = function() {
                        this.apiEnabled && this.seekbar && ((0, w.cn)(this.playerContainer, "jw-flag-seek"), this.seekState = !0, this.seekbar.show(), this.api.pause(), this.userActive())
                    }, i.exitSeekMode = function() {
                        this.seekbar && ((0, w.IV)(this.playerContainer, "jw-flag-seek"), this.seekState = !1, this.seekbar.hide())
                    }, i.updateSeek = function(t) {
                        this.seekbar && (this.seekbar.update(t), this.userActive())
                    }, (0, n.Z)(e, [{
                        key: "apiEnabled",
                        get: function() {
                            return !!this.api
                        }
                    }]), e
                }(Z.default),
                V = H
        },
        5187: function(t, e, i) {
            "use strict";
            var n = i(974),
                o = i(2799),
                a = i(8348),
                s = function() {
                    function t(t) {
                        this.model = t.player, this.truncated = t.get("__ab_truncated") && !a.Browser.ie
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
                            var o = 1 * parseInt(("" + i.margin).replace("px", "")),
                                a = t.get("logoWidth") + (isNaN(o) ? 0 : o + 10);
                            "top-left" === i.position ? e.paddingLeft = a : "top-right" === i.position && (e.paddingRight = a)
                        }(0, n.oB)(this.el, e)
                    }, e.playlistItem = function(t, e) {
                        if (e)
                            if (t.get("displaytitle") || t.get("displaydescription")) {
                                var i = "",
                                    n = "";
                                "string" == typeof e.title && t.get("displaytitle") && (i = e.title), "string" == typeof e.description && t.get("displaydescription") && (n = e.description), this.updateText(i, n)
                            } else this.hide()
                    }, e.updateText = function(t, e) {
                        this.title && this.description && ((0, o.nh)(this.title, (0, o.Ww)(t)), (0, o.nh)(this.description, (0, o.Ww)(e)), this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
                    }, e.element = function() {
                        return this.el
                    }, t
                }();
            e.Z = s
        },
        5646: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            var n = i(5882);

            function o(t, e, i) {
                return new n.ZP(t).on("click enter", e, i)
            }
        },
        6436: function(t, e, i) {
            "use strict";
            i.d(e, {
                d: function() {
                    return a
                },
                i: function() {
                    return o
                }
            });
            var n = i(2799);

            function o(t) {
                var e = -1;
                return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0), e
            }

            function a(t, e) {
                var i = "jw-breakpoint-" + e;
                (0, n.L_)(t, /jw-breakpoint--?\d+/, i)
            }
        },
        4646: function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return Lt
                }
            });
            var n = {};
            i.r(n), i.d(n, {
                email: function() {
                    return ft
                },
                embed: function() {
                    return vt
                },
                facebook: function() {
                    return pt
                },
                link: function() {
                    return mt
                },
                linkedin: function() {
                    return dt
                },
                pinterest: function() {
                    return ht
                },
                reddit: function() {
                    return jt
                },
                tumblr: function() {
                    return gt
                },
                twitter: function() {
                    return wt
                }
            });
            var o = i(4578),
                a = i(8348),
                s = i(1643),
                r = i(328),
                l = i(1261),
                c = i(2799),
                u = i(5004),
                p = i(8165),
                w = i(4576),
                d = i(4697),
                h = i(7462),
                j = i(974),
                g = i(5882),
                f = i(7191),
                m = i(2957),
                v = i(6234),
                b = i(9888),
                y = i(5646),
                x = function() {
                    function t(t, e, i) {
                        (0, h.Z)(this, r.ZP), this._model = t, this._api = e, this._playerElement = i, this.localization = t.get("localization"), this.state = "tooltip", this.enabled = !1, this.shown = !1, this.feedShownId = "", this.closeUi = null, this.tooltipUi = null, this.reset()
                    }
                    var e = t.prototype;
                    return e.setup = function(t) {
                        this.container = t.createElement("div"), this.container.className = "jw-nextup-container jw-reset";
                        var e, i, n, o, s = (0, c.az)((void 0 === e && (e = ""), void 0 === i && (i = ""), void 0 === n && (n = ""), void 0 === o && (o = ""), '<div class="jw-nextup jw-background-color jw-reset' + (a.Browser.firefox ? " jw-nextup-firefox-pip-fix" : "") + '"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">' + e + '</div><div class="jw-nextup-title jw-reset-text" dir="auto">' + i + '</div><div class="jw-nextup-duration jw-reset">' + n + '</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + o + '"></button></div>'));
                        s.querySelector(".jw-nextup-close").appendChild((0, f.W)("close")), this.addContent(s), this.closeButton = this.content.querySelector(".jw-nextup-close"), this.closeButton.setAttribute("aria-label", this.localization.close), this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                        var r = this._model,
                            l = r.player;
                        this.enabled = !1, r.on("change:nextUp", this.onNextUp, this), l.change("duration", this.onDuration, this), l.change("position", this.onElapsed, this), l.change("streamType", this.onStreamType, this), l.change("state", (function(t, e) {
                            "complete" === e && this.toggle(!1)
                        }), this), this.closeUi = (0, y.Z)(this.closeButton, (function() {
                            this.nextUpSticky = !1, this.toggle(!1)
                        }), this), this.tooltipUi = new g.ZP(this.tooltip).on("click", this.click, this)
                    }, e.loadThumbnail = function(t) {
                        return this.nextUpImage = new Image, this.nextUpImage.onload = function() {
                            this.nextUpImage.onload = null
                        }.bind(this), this.nextUpImage.src = t, {
                            backgroundImage: 'url("' + t + '")'
                        }
                    }, e.click = function() {
                        var t = this.feedShownId;
                        this.reset(), this._api.next({
                            feedShownId: t,
                            reason: "interaction"
                        })
                    }, e.toggle = function(t, e) {
                        if (this.enabled && ((0, c.og)(this.container, "jw-nextup-sticky", !!this.nextUpSticky), this.shown !== t)) {
                            this.shown = t, (0, c.og)(this.container, "jw-nextup-container-visible", t), (0, c.og)(this._playerElement, "jw-flag-nextup", t);
                            var i = this._model.get("nextUp");
                            t && i ? (this.feedShownId = (0, v.B)(v.F), this.trigger("nextShown", {
                                mode: i.mode,
                                ui: "nextup",
                                itemsShown: [i],
                                feedData: i.feedData,
                                reason: e,
                                feedShownId: this.feedShownId
                            })) : this.feedShownId = ""
                        }
                    }, e.setNextUpItem = function(t) {
                        var e = this;
                        setTimeout((function() {
                            var i = t.mediaid,
                                n = t.image,
                                o = t.title,
                                a = t.duration;
                            if (e.thumbnail = e.content.querySelector(".jw-nextup-thumbnail"), (0, c.og)(e.content, "jw-nextup-thumbnail-visible", !!n), n || i) {
                                var s;
                                s = i ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=120" : n;
                                var r = e.loadThumbnail(s);
                                (0, j.oB)(e.thumbnail, r)
                            }
                            e.header = e.content.querySelector(".jw-nextup-header"), e.header.textContent = (0, c.az)(e.localization.nextUp).textContent, e.title = e.content.querySelector(".jw-nextup-title"), e.title.textContent = o ? (0, c.az)(o).textContent : "", a && (e.duration = e.content.querySelector(".jw-nextup-duration"), e.duration.textContent = "number" == typeof a ? (0, b.timeFormat)(a) : a)
                        }), 500)
                    }, e.onNextUp = function(t, e) {
                        this.reset(), e || (e = {
                            showNextUp: !1
                        }), this.enabled = !(!e.title && !e.image), this.enabled && (e.showNextUp || (this.nextUpSticky = !1, this.toggle(!1)), this.setNextUpItem(e))
                    }, e.onDuration = function(t, e) {
                        if (e) {
                            var i = t.get("nextupoffset"),
                                n = -10;
                            i && (n = (0, m.U5)(i, e)), n < 0 && (n += e), (0, m.zz)(i) && e - 5 < n && (n = e - 5), this.offset = n
                        }
                    }, e.onElapsed = function(t, e) {
                        var i = this.nextUpSticky;
                        if (this.enabled && !1 !== i) {
                            var n = e >= this.offset;
                            n && void 0 === i ? (this.nextUpSticky = n, this.toggle(n, "time")) : !n && i && this.reset()
                        }
                    }, e.onStreamType = function(t, e) {
                        "VOD" !== e && (this.nextUpSticky = !1, this.toggle(!1))
                    }, e.element = function() {
                        return this.container
                    }, e.addContent = function(t) {
                        this.content && this.removeContent(), this.content = t, this.container.appendChild(t)
                    }, e.removeContent = function() {
                        this.content && (this.container.removeChild(this.content), this.content = null)
                    }, e.reset = function() {
                        this.nextUpSticky = void 0, this.toggle(!1)
                    }, e.destroy = function() {
                        this.off(), this._model.off(null, null, this), this.closeUi && this.closeUi.destroy(), this.tooltipUi && this.tooltipUi.destroy()
                    }, t
                }(),
                k = function(t, e) {
                    var i = t.featured,
                        n = t.showLogo,
                        o = t.type;
                    return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "", '<li class="jw-reset jw-rightclick-item ' + (i ? "jw-featured" : "") + '">' + C[o](t, e) + "</li>"
                },
                C = {
                    link: function(t) {
                        var e = t.link,
                            i = t.title;
                        return '<a href="' + (e || "") + '" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">' + t.logo + (i || "") + "</a>"
                    },
                    share: function(t, e) {
                        return '<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">' + e.sharing.heading + "</button>"
                    },
                    pip: function(t, e) {
                        return '<button type="button" class="jw-reset-text jw-rightclick-link jw-pip-item" dir="auto">' + e.pipIcon + "</button>"
                    },
                    keyboardShortcuts: function(t, e) {
                        return '<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">' + e.shortcuts.keyboardShortcuts + "</button>"
                    },
                    button: function(t) {
                        var e = t.title;
                        return '<button type="button" class="jw-reset-text jw-rightclick-link jw-' + t.button.name + '-item" dir="auto">' + e + "</button>"
                    }
                },
                z = i(6601),
                T = i(2268),
                S = i(8518),
                M = {
                    free: 0,
                    pro: 1,
                    premium: 2,
                    ads: 3,
                    invalid: 4,
                    enterprise: 6,
                    trial: 7,
                    platinum: 8,
                    starter: 9,
                    business: 10,
                    developer: 11
                };

            function B(t) {
                var e = (0, c.az)(t),
                    i = e.querySelector(".jw-rightclick-logo");
                return i && i.appendChild((0, f.W)("jwplayer-logo")), e
            }
            var A = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.buildArray = function() {
                        var e = this.model,
                            i = t.prototype.buildArray.call(this),
                            n = e.get("localization"),
                            o = n.abouttext,
                            a = n.videoInfo,
                            s = i.items;
                        if (o) {
                            for (var r, l, c = 0; c < s.length; c++)
                                if (s[c].featured) {
                                    l = s[c], r = c;
                                    break
                                } if (l) {
                                l.showLogo = !1;
                                var u = {
                                    title: o,
                                    type: "link",
                                    link: e.get("aboutlink") || l.link
                                };
                                s[r] = u
                            }
                        }
                        return this.shareHandler && s.unshift({
                            type: "share"
                        }), i.items.splice(0, 0, {
                            type: "button",
                            title: a,
                            button: {
                                name: "stats"
                            }
                        }), i
                    }, i.enableSharing = function(t) {
                        var e = this;
                        this.shareHandler = function() {
                            e.mouseOverContext = !1, e.hideMenu(), t()
                        }
                    }, i.addHideMenuHandlers = function() {
                        var e = this;
                        t.prototype.addHideMenuHandlers.call(this);
                        var i = this.el.querySelector(".jw-share-item");
                        i && i.addEventListener("click", this.shareHandler);
                        var n = this.el.querySelector(".jw-stats-item");
                        n && (this.statsHandler = function() {
                            var t = e.model;
                            e.mouseOverContext = !1, e.hideMenu(), t.set("displayStats", !t.get("displayStats"))
                        }, n.addEventListener("click", this.statsHandler))
                    }, i.removeHideMenuHandlers = function() {
                        if (t.prototype.removeHideMenuHandlers.call(this), this.el) {
                            var e = this.el.querySelector(".jw-share-item");
                            e && e.removeEventListener("click", this.shareHandler);
                            var i = this.el.querySelector(".jw-stats-item");
                            i && i.removeEventListener("click", this.statsHandler)
                        }
                    }, e
                }(function() {
                    function t(t) {
                        this.shortcutsTooltip = t
                    }
                    var e = t.prototype;
                    return e.buildArray = function() {
                        var t = z.i.split("+")[0],
                            e = this.model,
                            i = e.get("edition"),
                            n = e.get("localization").poweredBy,
                            o = '<span class="jw-reset">JW Player ' + t + "</span>",
                            s = {
                                items: [{
                                    title: (0, S.t6)(n) ? o + " " + n : n + " " + o,
                                    type: "link",
                                    featured: !0,
                                    showLogo: !0,
                                    link: "https://jwplayer.com/learn-more?e=" + M[i]
                                }]
                            },
                            r = s.items;
                        return this.shortcutsTooltip && r.splice(r.length - 1, 0, {
                            type: "keyboardShortcuts"
                        }), this.pipMenu = !a.OS.mobile && "disabled" !== e.get("pipIcon") && (a.Browser.chrome && !(0, T.yS)() || a.Browser.edge || a.Browser.safari), this.pipMenu && r.splice(r.length - 1, 0, {
                            type: "pip"
                        }), s
                    }, e.rightClick = function(t) {
                        if (this.lazySetup(), this.mouseOverContext) return !1;
                        this.hideMenu(), this.showMenu(t), this.addHideMenuHandlers()
                    }, e.getOffset = function(t) {
                        var e = (0, c.A8)(this.wrapperElement),
                            i = t.pageX - e.left,
                            n = t.pageY - e.top;
                        return this.model.get("touchMode") && (n -= 100), {
                            x: i,
                            y: n
                        }
                    }, e.showMenu = function(t) {
                        var e = this,
                            i = this.getOffset(t);
                        return this.el.style.left = i.x + "px", this.el.style.top = i.y + "px", this.outCount = 0, (0, c.cn)(this.playerContainer, "jw-flag-rightclick-open"), (0, c.cn)(this.el, "jw-open"), clearTimeout(this._menuTimeout), this._menuTimeout = setTimeout((function() {
                            return e.hideMenu()
                        }), 3e3), !1
                    }, e.hideMenu = function(t) {
                        t && this.el && this.el.contains(t.target) || ((0, c.IV)(this.playerContainer, "jw-flag-rightclick-open"), (0, c.IV)(this.el, "jw-open"))
                    }, e.lazySetup = function() {
                        var t, e, i, n = this,
                            o = (t = this.buildArray(), e = this.model.get("localization"), '<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">' + (void 0 === (i = t.items) ? [] : i).map((function(t) {
                                return k(t, e)
                            })).join("") + "</ul></div>");
                        if (this.el) {
                            if (this.html !== o) {
                                this.html = o;
                                var a = B(o);
                                (0, c.EU)(this.el);
                                for (var s = a.childNodes.length; s--;) this.el.appendChild(a.firstChild)
                            }
                        } else this.html = o, this.el = B(this.html), this.wrapperElement.appendChild(this.el), this.hideMenuHandler = function(t) {
                            (0, g.dO)(t) || n.hideMenu(t)
                        }, this.overHandler = function() {
                            n.mouseOverContext = !0
                        }, this.outHandler = function(t) {
                            n.mouseOverContext = !1, t.relatedTarget && !n.el.contains(t.relatedTarget) && ++n.outCount > 1 && n.hideMenu()
                        }, this.pipHandler = function() {
                            n.model.set("pip", !n.model.get("pip"))
                        }, this.shortcutsTooltipHandler = function() {
                            n.mouseOverContext = !1, n.hideMenu(), n.shortcutsTooltip.open()
                        }
                    }, e.setup = function(t, e, i) {
                        this.wrapperElement = i, this.model = t, this.mouseOverContext = !1, this.playerContainer = e, this.ui = new g.ZP(i).on("longPress", this.rightClick, this)
                    }, e.addHideMenuHandlers = function() {
                        this.removeHideMenuHandlers(), this.wrapperElement.addEventListener("touchstart", this.hideMenuHandler), document.addEventListener("touchstart", this.hideMenuHandler), a.OS.mobile || (this.wrapperElement.addEventListener("click", this.hideMenuHandler), document.addEventListener("click", this.hideMenuHandler), this.el.addEventListener("mouseover", this.overHandler), this.el.addEventListener("mouseout", this.outHandler)), this.pipMenu && this.el.querySelector(".jw-pip-item").addEventListener("click", this.pipHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").addEventListener("click", this.shortcutsTooltipHandler)
                    }, e.removeHideMenuHandlers = function() {
                        this.wrapperElement && (this.wrapperElement.removeEventListener("click", this.hideMenuHandler), this.wrapperElement.removeEventListener("touchstart", this.hideMenuHandler)), this.el && (this.el.removeEventListener("mouseover", this.overHandler), this.el.removeEventListener("mouseout", this.outHandler), this.pipMenu && this.el.querySelector(".jw-pip-item").removeEventListener("click", this.pipHandler), this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").removeEventListener("click", this.shortcutsTooltipHandler)), document.removeEventListener("click", this.hideMenuHandler), document.removeEventListener("touchstart", this.hideMenuHandler)
                    }, e.destroy = function() {
                        clearTimeout(this._menuTimeout), this.removeHideMenuHandlers(), this.el && (this.hideMenu(), this.hideMenuHandler = null, this.el = null), this.wrapperElement && (this.wrapperElement.oncontextmenu = null, this.wrapperElement = null), this.model && (this.model = null), this.ui && (this.ui.destroy(), this.ui = null)
                    }, t
                }()),
                E = i(7326),
                L = i(7284),
                Z = i(3477),
                I = i(3163),
                H = i(1831),
                V = i(2810),
                P = i(6436);

            function _(t, e, i, n) {
                if (t && "Auto" === t[0].label && i && i.items.length) {
                    var o = i.items[0].el.querySelector(".jw-auto-label"),
                        a = t[e.index] || {
                            label: ""
                        };
                    o.textContent = n ? "" : a.label
                }
            }
            var O = function(t) {
                    function e(e, i, n, o) {
                        var a, s, r, l;
                        return (a = t.call(this, "settings", o.settings, null, o) || this).api = e, a.model = i, a.localization = o, a.controlbar = n, a.closeButton = function(t, e, i) {
                            var n = (0, p.Z)("jw-settings-close", e, i.close, [(0, f.W)("close")]);
                            return n.show(), n.ui.on("keydown", (function(t) {
                                var i = t.sourceEvent,
                                    n = (0, V.ku)(i.key);
                                ("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
                            }), this), t.appendChild(n.element()), n
                        }(a.el.querySelector(".jw-" + a.name + "-topbar-buttons"), a.close, o), a.backButtonTarget = null, a.defaultChild = null, a.topbar = (s = (0, E.Z)(a), r = s.closeButton, l = s.el.querySelector(".jw-settings-topbar"), new g.ZP(l).on("keydown", (function(t) {
                            var e = t.sourceEvent,
                                i = t.target,
                                n = (0, c.AH)(i),
                                o = (0, c.i3)(i),
                                a = function(e) {
                                    o ? e || o.focus() : s.close(t)
                                },
                                l = function() {
                                    n && r.element() && i !== r.element() && n.focus()
                                },
                                u = function() {
                                    var e = i.getAttribute("name"),
                                        n = s.children[e];
                                    return !n && e && s.backButtonTarget && (n = s.backButtonTarget.children[e]), n && n.open && n.open(t), n
                                };
                            switch ((0, V.ku)(e.key)) {
                                case "Esc":
                                    s.close(t);
                                    break;
                                case "Left":
                                    a();
                                    break;
                                case "Right":
                                    l();
                                    break;
                                case "Tab":
                                    e.shiftKey && a(!0);
                                    break;
                                case "Up":
                                case "Down":
                                case "Enter":
                                    u()
                            }
                            if (e.stopPropagation(), /13|32|37|38|39|40/.test(e.keyCode)) return e.preventDefault(), !1
                        }))), a.onDocumentClick = a.onDocumentClick.bind((0, E.Z)(a)), a.addEventListeners(), a
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.setupMenu = function(t, e, i, n, o, a) {
                        if (!i || i.length <= 1) this.removeMenu(t);
                        else {
                            var s = this.children[t];
                            s || (s = new L.Z(t, e, this, this.localization)), s.setMenuItems(s.createItems(i, n, a), o);
                            var r = s.categoryButton && s.categoryButton.element();
                            this.buttonContainer.firstChild === r && (this.defaultChild = s)
                        }
                    }, i.onLevels = function(t, e) {
                        var i = this,
                            n = {
                                defaultText: this.localization.auto
                            };
                        this.setupMenu("quality", this.localization.hd, e, (function(t) {
                            return i.api.setCurrentQuality(t)
                        }), t.get("currentLevel") || 0, n)
                    }, i.onCurrentLevel = function(t, e) {
                        var i = this.children.quality,
                            n = t.get("visualQuality");
                        n && i && _(t.get("levels"), n.level, i, e), i.items[e].active || (0, V.dt)(i, e)
                    }, i.onVisualQuality = function(t, e) {
                        var i = this.children.quality;
                        e && i && _(t.get("levels"), e.level, i, t.get("currentLevel"))
                    }, i.onAudioTracks = function(t, e) {
                        var i = this;
                        this.setupMenu("audioTracks", this.localization.audioTracks, e, (function(t) {
                            return i.api.setCurrentAudioTrack(t)
                        }), t.get("currentAudioTrack"))
                    }, i.onAudioTrackIndex = function(t, e) {
                        this.children.audioTracks && (0, V.dt)(this.children.audioTracks, e)
                    }, i.onCaptionsList = function(t, e) {
                        var i = this,
                            n = {
                                defaultText: this.localization.off
                            },
                            o = t.get("captionsIndex");
                        this.setupMenu("captions", this.localization.cc, e, (function(t) {
                            return i.api.setCurrentCaptions(t)
                        }), o, n);
                        var a = this.children.captions;
                        if (a && !a.children.captionsSettings) {
                            a.topbar = a.topbar || a.createTopbar(), (0, c.EU)(a.topbar);
                            var s = this.localization.captionsStyles,
                                r = new L.Z("captionsSettings", s.subtitleSettings, a, this.localization),
                                l = r.open;
                            r.open = function(t) {
                                var e = r.visible;
                                l.call(r, t), e || i.trigger("captionStylesOpened")
                            };
                            var u = r.destroy;
                            r.destroy = function(t) {
                                a.topbar.parentNode.removeChild(a.topbar), a.topbar = null, a.topbarUI.destroy(), u.call(r, t)
                            };
                            var p = new Z.s(this.localization.settings, r.open);
                            a.topbar.appendChild(p.el);
                            var w = t.get("captions");
                            ! function e(n) {
                                var o = new Z.s(i.localization.reset, (function() {
                                    i.model.set("captions", (0, h.Z)({}, H.R)), e(!0)
                                }));
                                o.el.classList.add("jw-settings-reset");
                                var a = [];
                                (0, V.JU)(s).forEach((function(e) {
                                    !n && w && w[e.name] ? e.val = w[e.name] : e.val = e.defaultVal;
                                    var o = e.values.indexOf(e.val);
                                    e.currentSelection = e.options[o];
                                    var s = new L.Z(e.name, e.label, r, i.localization),
                                        l = new Z.s(e, s.open, I.v2);
                                    s.buttonContainer = l;
                                    var c = s.createItems(e.options, (function(n) {
                                        var o = l.el.querySelector(".jw-settings-content-item-value");
                                        ! function(e, n) {
                                            var o = t.get("captions"),
                                                a = e.name,
                                                s = e.values[n],
                                                r = (0, h.Z)({}, o);
                                            r[a] = s, i.model.set("captions", r)
                                        }(e, n), o.innerText = e.options[n]
                                    }), null);
                                    s.setMenuItems(c, e.values.indexOf(e.val) || 0), a.push(l)
                                })), a.push(o), r.setMenuItems(a)
                            }()
                        }
                    }, i.onPlaylistItem = function() {
                        this.removeMenu("captions"), this.removeMenu("audioTracks"), this.removeMenu("quality"), this.controlbar.elements.captionsButton.hide(), this.visible && this.close()
                    }, i.onCaptionsIndex = function(t, e) {
                        var i = this.children.captions;
                        i && (0, V.dt)(i, e), this.controlbar.toggleCaptionsButtonState(!!e)
                    }, i.onPlaybackRates = function(t, e) {
                        var i = this;
                        !e && t && (e = t.get("playbackRates"));
                        var n = this.localization,
                            o = this.children;
                        if (t.get("supportsPlaybackRate") && "LIVE" !== t.get("streamType") && t.get("playbackRateControls")) {
                            var a = e.indexOf(t.get("playbackRate")),
                                s = {
                                    tooltipText: n.playbackRates
                                };
                            this.setupMenu("playbackRates", this.localization.playbackRates, e, (function(t) {
                                return i.api.setPlaybackRate(t)
                            }), a, s)
                        } else o.playbackRates && this.removeMenu("playbackRates")
                    }, i.onPlaybackRate = function(t, e) {
                        var i = t.get("playbackRates"),
                            n = -1;
                        i && (n = i.indexOf(e)), (0, V.dt)(this.children.playbackRates, n)
                    }, i.onPlaybackRateControls = function(t) {
                        this.onPlaybackRates(t)
                    }, i.onCastActive = function(t, e, i) {
                        e !== i && (e ? (this.removeMenu("audioTracks"), this.removeMenu("quality"), this.removeMenu("playbackRates"), this.children.captions && this.children.captions.removeMenu("captionsSettings")) : (this.onAudioTracks(t, t.get("audioTracks")), this.onLevels(t, t.get("levels")), this.onPlaybackRates(t, t.get("playbackRates")), this.onCaptionsList(t, t.get("captionsList"))))
                    }, i.onChangeStreamType = function() {
                        this.onPlaybackRates(this.model)
                    }, i.onDocumentClick = function(t) {
                        /jw-(settings|video|nextup-close|sharing-link|share-item)/.test(t.target.className) || this.close()
                    }, i.addEventListeners = function() {
                        var t = this.updateControlbarButtons,
                            e = this.model;
                        this.on("menuAppended menuRemoved", t, this), e.change("levels", this.onLevels, this), e.on("change:currentLevel", this.onCurrentLevel, this), e.on("change:visualQuality", this.onVisualQuality, this), e.change("audioTracks", this.onAudioTracks, this), e.on("change:currentAudioTrack", this.onAudioTrackIndex, this), e.change("captionsList", this.onCaptionsList, this), e.on("change:playlistItem", this.onPlaylistItem, this), e.change("captionsIndex", this.onCaptionsIndex, this), e.change("playbackRates", this.onPlaybackRates, this), e.change("playbackRate", this.onPlaybackRate, this), e.on("change:playbackRateControls", this.onPlaybackRateControls, this), e.on("change:castActive", this.onCastActive, this), e.on("change:streamType", this.onChangeStreamType, this)
                    }, i.open = function(t) {
                        var e = (0, P.i)(this.model.get("containerWidth"));
                        if (!this.visible) {
                            e < 2 && "LIVE" !== this.model.get("streamType") && (this.mediaStateWhenOpened = this.model.get("state"), this.api.pause());
                            var i = this.controlbar.elements.settingsButton.element();
                            i && i.setAttribute("aria-expanded", !0), this.el.parentNode.classList.add("jw-settings-open"), this.trigger("visibility", {
                                visible: !0,
                                evt: t
                            }), document.addEventListener("click", this.onDocumentClick), this.el.setAttribute("aria-expanded", "true"), this.visible = !0
                        }
                    }, i.close = function(t) {
                        var e, i = (0, V.ku)(t && t.sourceEvent && t.sourceEvent.key),
                            n = this.controlbar.elements.settingsButton.element(),
                            o = (0, P.i)(this.model.get("containerWidth"));
                        switch (n && n.setAttribute("aria-expanded", !1), o < 2 && (this.mediaStateWhenOpened !== s.r0 && this.mediaStateWhenOpened !== s.Kb || this.api.play()), this.el.setAttribute("aria-expanded", "false"), this.el.parentNode.classList.remove("jw-settings-open"), this.trigger("visibility", {
                                visible: !1,
                                evt: t
                            }), document.removeEventListener("click", this.onDocumentClick), this.visible = !1, this.openMenus.length && this.closeChildren(), i) {
                            case "Right":
                                e = (0, c.AH)(n);
                                break;
                            case "Left":
                                e = (0, c.i3)(n);
                                break;
                            case "Tab":
                                if (t.shiftKey) {
                                    e = (0, c.i3)(n);
                                    break
                                }
                            case "Enter":
                            case "Esc":
                                e = n
                        }
                        e && e.focus({
                            preventScroll: !event
                        })
                    }, i.updateControlbarButtons = function(t) {
                        var e = this.children,
                            i = this.controlbar,
                            n = this.model,
                            o = !!e.quality || !!e.playbackRates || !!e.audioTracks || Object.keys(e).length > 1;
                        i.elements.settingsButton.toggle(o), e.captions && i.toggleCaptionsButtonState(!!n.get("captionsIndex"));
                        var a = i.elements[t + "Button"];
                        if (a) {
                            var s = !!e[t];
                            a.toggle(s)
                        } else if (o)
                            for (var r = Object.keys(this.children), l = 0; l < r.length; l++) {
                                var c = this.children[r[l]],
                                    u = c.categoryButton && c.categoryButton.element();
                                this.buttonContainer.firstChild === u && (this.defaultChild = c)
                            }
                    }, i.destroy = function() {
                        V.MR.call(this), document.removeEventListener("click", this.onDocumentClick)
                    }, e
                }(L.Z),
                N = i(4225),
                R = i(6391);

            function U(t, e, i, n) {
                var o, a = !1,
                    s = i.get("localization").shortcuts,
                    r = (0, c.az)(function(t, e) {
                        return '<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="' + e + '"><span class="jw-hidden" id="jw-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">' + e + '</span><button role="switch" aria-label="' + e + '" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">' + t.map((function(t) {
                            return '<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">' + t.description + '</span><span class="jw-shortcuts-key jw-reset">' + t.key + "</span></div>"
                        })).join("") + "</div></div></div></div>"
                    }(function(t) {
                        var e = t.playPause,
                            i = t.volumeToggle,
                            n = t.fullscreenToggle,
                            o = t.seekPercent,
                            a = t.increaseVolume,
                            s = t.decreaseVolume,
                            r = t.seekForward,
                            l = t.seekBackward;
                        return [{
                            key: t.spacebar,
                            description: e
                        }, {
                            key: "↑",
                            description: a
                        }, {
                            key: "↓",
                            description: s
                        }, {
                            key: "→",
                            description: r
                        }, {
                            key: "←",
                            description: l
                        }, {
                            key: "c",
                            description: t.captionsToggle
                        }, {
                            key: "f",
                            description: n
                        }, {
                            key: "m",
                            description: i
                        }, {
                            key: "0-9",
                            description: o
                        }]
                    }(s), s.keyboardShortcuts)),
                    l = new g.ZP(r.querySelector(".jw-switch")),
                    u = function() {
                        l.el.setAttribute("aria-checked", i.get("enableShortcuts")), (0, c.cn)(r, "jw-open"), r.querySelector(".jw-shortcuts-close").focus(), document.addEventListener("click", d), a = !0, n(!0)
                    },
                    w = function() {
                        (0, c.IV)(r, "jw-open"), document.removeEventListener("click", d), a = !1, n(!1)
                    },
                    d = function(t) {
                        var e = t.target;
                        /jw-shortcuts|jw-switch/.test(e.className) || w()
                    },
                    h = function(t) {
                        var e = t.currentTarget,
                            n = "true" !== e.getAttribute("aria-checked");
                        e.setAttribute("aria-checked", n.toString()), i.set("enableShortcuts", n)
                    };
                return o = (0, p.Z)("jw-shortcuts-close", w, i.get("localization").close, [(0, f.W)("close")]), (0, c.SH)(r, o.element()), o.show(), t.appendChild(r), l.on("click", h), {
                    el: r,
                    open: u,
                    close: w,
                    destroy: function() {
                        w(), l.destroy()
                    },
                    toggleVisibility: function() {
                        a ? w() : u()
                    }
                }
            }
            var q = function(t) {
                function e(e, i, n) {
                    var o;
                    (o = t.call(this) || this).element = (0, c.az)(function(t, e) {
                        return '<div class="jw-float-bar jw-reset">\n            <div class="jw-float-bar-title" aria-label="' + e + '" >' + e + '</div>\n            <div class="jw-float-bar-icon jw-float-icon jw-icon jw-button-color jw-reset" aria-label="' + t + '" tabindex="0">\n            </div>\n        </div>'
                    }(i, n));
                    var a = o.element.querySelector(".jw-float-bar-icon");
                    return a.appendChild((0, f.W)("floating-close")), o.ui = (0, y.Z)(a, (function() {
                        o.trigger(s.xf)
                    })), o.title = o.element.querySelector(".jw-float-bar-title"), e.appendChild(o.element), o
                }(0, o.Z)(e, t);
                var i = e.prototype;
                return i.destroy = function() {
                    this.element && (this.ui.destroy(), this.element.parentNode.removeChild(this.element), this.element = null), this.off()
                }, i.setTitle = function(t) {
                    t ? (this.title.innerText = t, this.title.setAttribute("aria-label", t)) : (this.title.innerHTML = "&nbsp;", this.title.setAttribute("aria-label", ""))
                }, e
            }(r.ZP);
            i(9725), i(1334);
            var F = a.OS.mobile ? 4e3 : 2e3,
                D = [27];
            N.Z.cloneIcon = f.W, R.Z.forEach((function(t) {
                if (t.getState() === s.Vy) {
                    var e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
                    e && !e.hasChildNodes() && e.appendChild(N.Z.cloneIcon("error"))
                }
            }));
            var W = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this) || this).activeTimeout = -1, n.inactiveTime = 0, n.context = e, n.controlbar = null, n.displayContainer = null, n.backdrop = null, n.enabled = !0, n.instreamState = null, n.keydownCallback = null, n.keyupCallback = null, n.blurCallback = null, n.mute = null, n.nextUpToolTip = null, n.playerContainer = i, n.wrapperElement = i.querySelector(".jw-wrapper"), n.rightClickMenu = null, n.settingsMenu = null, n.shortcutsTooltip = null, n.showing = !1, n.muteChangeCallback = null, n.unmuteCallback = null, n.logo = null, n.div = null, n.dimensions = {}, n.userInactiveTimeout = function() {
                            var t = n.inactiveTime - (0, u.z)();
                            n.inactiveTime && t > 16 ? n.activeTimeout = setTimeout(n.userInactiveTimeout, t) : n.playerContainer.querySelector(".jw-tab-focus") ? n.resetActiveTimeout() : n.userInactive()
                        }, n
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.resetActiveTimeout = function() {
                        clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.inactiveTime = 0
                    }, i.enable = function(t, e) {
                        var i = this,
                            n = this.context.createElement("div");
                        n.className = "jw-controls jw-reset", this.div = n;
                        var o = this.context.createElement("div");
                        o.className = "jw-controls-backdrop jw-reset", this.backdrop = o, this.logo = this.playerContainer.querySelector(".jw-logo");
                        var r = e.get("touchMode");
                        if (this.focusPlayerElement = function() {
                                e.get("isFloating") ? i.wrapperElement.querySelector("video").focus({
                                    preventScroll: !0
                                }) : i.playerContainer.focus({
                                    preventScroll: !0
                                })
                            }, !this.displayContainer) {
                            var u = new d.Z(e, t);
                            u.buttons.display.on("click enter", (function() {
                                i.trigger(s.cy), i.userActive(1e3), t.playToggle({
                                    reason: "interaction"
                                }), i.focusPlayerElement()
                            })), this.div.appendChild(u.element()), this.displayContainer = u
                        }
                        a.OS.mobile || (this.shortcutsTooltip = new U(this.wrapperElement, t, e, (function(t) {
                            t || i.focusPlayerElement()
                        }))), this.rightClickMenu = new A(this.shortcutsTooltip), r && (0, c.cn)(this.playerContainer, "jw-flag-touch"), this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement), e.get("floating") && this.setupFloating(t, e);
                        var h = this.controlbar = new w.Z(t, e, this.playerContainer.querySelector(".jw-hidden-accessibility"));
                        if (h.on(s.xf, (function() {
                                i.off("userInactive", i.focusPlayerElement, i), i.once("userInactive", i.focusPlayerElement, i), i.userActive()
                            })), h.on("nextShown", (function(t) {
                                this.trigger("nextShown", t)
                            }), this), h.on("adjustVolume", k, this), e.get("nextUpDisplay") && !h.nextUpToolTip) {
                            var j = new x(e, t, this.playerContainer);
                            j.on("all", this.trigger, this), j.setup(this.context), h.nextUpToolTip = j, this.div.appendChild(j.element())
                        }
                        this.div.appendChild(h.element());
                        var g = e.get("localization"),
                            m = this.settingsMenu = new O(t, e.player, this.controlbar, g),
                            v = null;
                        m.on("menuVisibility", (function(n) {
                            var o = n.visible,
                                a = n.evt,
                                r = e.get("state"),
                                l = {
                                    reason: "settingsInteraction"
                                },
                                c = i.controlbar.elements.settingsButton,
                                u = "keydown" === (a && a.sourceEvent || a || {}).type,
                                p = o || u ? 0 : F;
                            i.userActive(p), (0, P.i)(e.get("containerWidth")) < 2 && (o && r === s.r0 ? t.pause(l) : o || r !== s._5 || v !== s.r0 || t.play(l)), v = r, !o && u && c ? c.element().focus() : a && i.focusPlayerElement()
                        })), m.on("captionStylesOpened", (function() {
                            return i.trigger("captionStylesOpened")
                        })), h.on("settingsInteraction", (function(t, e, i) {
                            if (e) return m.defaultChild.toggle(i, !0);
                            m.children[t].toggle(i)
                        })), a.OS.mobile ? this.div.appendChild(m.el) : (this.playerContainer.setAttribute("aria-describedby", "jw-shortcuts-tooltip-explanation"), this.div.insertBefore(m.el, h.element()));
                        var b = function(e) {
                            if (e.get("autostartMuted")) {
                                var n = function() {
                                        return i.unmuteAutoplay(t, e)
                                    },
                                    o = function(t, e) {
                                        e || n()
                                    };
                                a.OS.mobile && (i.mute = (0, p.Z)("jw-autostart-mute jw-off", n, e.get("localization").unmute, [(0, f.W)("volume-0")]), i.mute.show(), i.div.appendChild(i.mute.element())), h.renderVolume(!0, e.get("volume")), (0, c.cn)(i.playerContainer, "jw-flag-autostart"), e.on("change:autostartFailed", n, i), e.on("change:autostartMuted change:mute", o, i), i.muteChangeCallback = o, i.unmuteCallback = n
                            }
                        };

                        function y(i) {
                            var n = 0,
                                o = e.get("duration"),
                                a = e.get("position");
                            if ("DVR" === e.get("streamType")) {
                                var s = e.get("dvrSeekLimit");
                                n = o, o = Math.max(a, -s)
                            }
                            var r = (0, l.v)(a + i, n, o);
                            t.seek(r, {
                                reason: "interaction"
                            })
                        }

                        function k(i) {
                            var n = (0, l.v)(e.get("volume") + i, 0, 100);
                            t.setVolume(n)
                        }
                        e.once("change:autostartMuted", b), b(e);
                        var C = function(n) {
                            if (n.ctrlKey || n.metaKey) return !0;
                            var o = !i.settingsMenu || !i.settingsMenu.visible,
                                a = !0 === e.get("enableShortcuts"),
                                s = i.instreamState;
                            if (a || -1 !== D.indexOf(n.keyCode)) {
                                switch (n.keyCode) {
                                    case 27:
                                        if (e.get("fullscreen")) t.setFullscreen(!1), i.playerContainer.blur(), i.userInactive();
                                        else {
                                            var r = t.getPlugin("related");
                                            r && r.close({
                                                type: "escape"
                                            })
                                        }
                                        i.rightClickMenu.el && i.rightClickMenu.hideMenuHandler(), e.get("displayStats") && e.set("displayStats", !1), i.shortcutsTooltip && i.shortcutsTooltip.close();
                                        break;
                                    case 13:
                                    case 32:
                                        if (document.activeElement.classList.contains("jw-switch") && 13 === n.keyCode) return !0;
                                        t.playToggle({
                                            reason: "interaction"
                                        });
                                        break;
                                    case 37:
                                        !s && o && y(-5);
                                        break;
                                    case 39:
                                        !s && o && y(5);
                                        break;
                                    case 38:
                                        o && k(10);
                                        break;
                                    case 40:
                                        o && k(-10);
                                        break;
                                    case 67:
                                        var l = t.getCaptionsList().length;
                                        if (l) {
                                            var c = (t.getCurrentCaptions() + 1) % l;
                                            t.setCurrentCaptions(c)
                                        }
                                        break;
                                    case 77:
                                        t.setMute();
                                        break;
                                    case 70:
                                        t.setFullscreen();
                                        break;
                                    case 191:
                                        i.shortcutsTooltip && i.shortcutsTooltip.toggleVisibility();
                                        break;
                                    default:
                                        if (n.keyCode >= 48 && n.keyCode <= 59) {
                                            var u = (n.keyCode - 48) / 10 * e.get("duration");
                                            t.seek(u, {
                                                reason: "interaction"
                                            })
                                        }
                                }
                                return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(), !1) : void 0
                            }
                        };
                        this.playerContainer.addEventListener("keydown", C), this.keydownCallback = C;
                        var z = function(t) {
                            switch (t.keyCode) {
                                case 9:
                                    var e = i.playerContainer.contains(t.target) ? 0 : F;
                                    i.userActive(e);
                                    break;
                                case 32:
                                    t.preventDefault()
                            }
                        };
                        this.playerContainer.addEventListener("keyup", z), this.keyupCallback = z;
                        var T = function(t) {
                            i.off("userInactive", i.focusPlayerElement, i);
                            var e = t.relatedTarget || document.querySelector(":focus");
                            e && (i.playerContainer.contains(e) || i.userInactive())
                        };
                        this.playerContainer.addEventListener("blur", T, !0), this.blurCallback = T;
                        var S = function t() {
                            "jw-shortcuts-tooltip-explanation" === i.playerContainer.getAttribute("aria-describedby") && i.playerContainer.removeAttribute("aria-describedby"), i.playerContainer.removeEventListener("blur", t, !0)
                        };
                        this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", S, !0), this.onRemoveShortcutsDescription = S), this.userActive(), this.addControls(), this.addBackdrop(), e.set("controlsEnabled", !0)
                    }, i.addControls = function() {
                        this.wrapperElement.appendChild(this.div)
                    }, i.disable = function(t) {
                        var e = this.nextUpToolTip,
                            i = this.settingsMenu,
                            n = this.controlbar,
                            o = this.rightClickMenu,
                            a = this.shortcutsTooltip,
                            s = this.playerContainer,
                            r = this.div;
                        clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.off(), t.off(null, null, this), t.set("controlsEnabled", !1), r.parentNode && ((0, c.IV)(s, "jw-flag-touch"), r.parentNode.removeChild(r)), n && n.destroy(), o && o.destroy(), this.keydownCallback && s.removeEventListener("keydown", this.keydownCallback), this.keyupCallback && s.removeEventListener("keyup", this.keyupCallback), this.blurCallback && s.removeEventListener("blur", this.blurCallback), this.onRemoveShortcutsDescription && s.removeEventListener("blur", this.onRemoveShortcutsDescription), this.displayContainer && this.displayContainer.destroy(), e && e.destroy(), i && i.destroy(), t.get("displayStats") && t.set("displayStats", !1), a && a.destroy(), this.removeBackdrop()
                    }, i.controlbarHeight = function() {
                        return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight), this.dimensions.cbHeight
                    }, i.element = function() {
                        return this.div
                    }, i.resize = function() {
                        this.dimensions = {}
                    }, i.unmuteAutoplay = function(t, e) {
                        var i = !e.get("autostartFailed"),
                            n = e.get("mute");
                        i ? n = !1 : e.set("playOnViewable", !1), this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback), this.muteChangeCallback = null), this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback), this.unmuteCallback = null), e.set("autostartFailed", void 0), e.set("autostartMuted", void 0), t.setMute(n), this.controlbar.renderVolume(n, e.get("volume")), this.mute && this.mute.hide(), (0, c.IV)(this.playerContainer, "jw-flag-autostart"), this.userActive()
                    }, i.mouseMove = function(t) {
                        var e = this.controlbar.element().contains(t.target),
                            i = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(t.target),
                            n = this.logo && this.logo.contains(t.target),
                            o = e || i || n ? 0 : F;
                        this.userActive(o)
                    }, i.userActive = function(t) {
                        void 0 === t && (t = F), t > 0 ? (this.inactiveTime = (0, u.z)() + t, -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(), this.showing || ((0, c.IV)(this.playerContainer, "jw-flag-user-inactive"), this.showing = !0, this.trigger("userActive"))
                    }, i.userInactive = function() {
                        clearTimeout(this.activeTimeout), this.activeTimeout = -1, this.settingsMenu.visible || (this.inactiveTime = 0, this.showing = !1, (0, c.cn)(this.playerContainer, "jw-flag-user-inactive"), this.trigger("userInactive"))
                    }, i.addBackdrop = function() {
                        var t = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
                        this.wrapperElement.insertBefore(this.backdrop, t)
                    }, i.removeBackdrop = function() {
                        var t = this.backdrop.parentNode;
                        t && t.removeChild(this.backdrop)
                    }, i.setupInstream = function() {
                        this.instreamState = !0, this.userActive(), this.addBackdrop(), this.settingsMenu && this.settingsMenu.close(), (0, c.IV)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
                    }, i.destroyInstream = function(t) {
                        this.instreamState = null, this.addBackdrop(), t.get("autostartMuted") && (0, c.cn)(this.playerContainer, "jw-flag-autostart"), this.controlbar.elements.time.element().setAttribute("tabindex", "0")
                    }, i.setupFloating = function(t, e) {
                        var i = this,
                            n = e.get("localization"),
                            o = e.get("advertising"),
                            a = e.get("floating"),
                            r = function() {
                                var t = e.get("playlistItem").title;
                                return a.showTitle ? i.instreamState ? n.advertising && n.advertising.displayHeading ? n.advertising.displayHeading : " " : t : " "
                            },
                            l = new q(this.wrapperElement, n.close, r());
                        o && o.outstream && o.dismissible ? l.on(s.xf, (function() {
                            return t.remove()
                        })) : l.on(s.xf, (function() {
                            return i.trigger("dismissFloating", {
                                doNotForward: !0
                            })
                        })), a && !1 !== a.dismissible && (0, c.cn)(this.playerContainer, "jw-floating-dismissible"), e.on("change:playlistItem", (function() {
                            l.setTitle(r())
                        }), this), e.on("instreamMode", (function() {
                            l.setTitle(r())
                        }), this)
                    }, e
                }(r.ZP),
                $ = i(8711),
                K = i.n($),
                Y = i(1983),
                X = i.n(Y),
                J = i(1277),
                G = i.n(J),
                Q = i(7928),
                tt = i.n(Q),
                et = i(5484),
                it = i.n(et),
                nt = i(6598),
                ot = i.n(nt),
                at = i(8053),
                st = i.n(at),
                rt = i(1666),
                lt = i.n(rt),
                ct = i(4375),
                ut = i.n(ct),
                pt = {
                    label: "facebook",
                    src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
                    svg: K(),
                    jwsource: "fb"
                },
                wt = {
                    label: "twitter",
                    src: "http://twitter.com/intent/tweet?url=[URL]",
                    svg: ot(),
                    jwsource: "twi"
                },
                dt = {
                    label: "linkedin",
                    src: "https://www.linkedin.com/cws/share?url=[URL]",
                    svg: X(),
                    jwsource: "lkn"
                },
                ht = {
                    label: "pinterest",
                    src: "http://pinterest.com/pin/create/button/?url=[URL]",
                    svg: G(),
                    jwsource: "pin"
                },
                jt = {
                    label: "reddit",
                    src: "http://www.reddit.com/submit?url=[URL]",
                    svg: tt(),
                    jwsource: "rdt"
                },
                gt = {
                    label: "tumblr",
                    src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
                    svg: it(),
                    jwsource: "tbr"
                },
                ft = {
                    label: "email",
                    src: "mailto:?body=[URL]",
                    svg: st(),
                    jwsource: "em"
                },
                mt = {
                    label: "link",
                    svg: lt(),
                    jwsource: "cl"
                },
                vt = {
                    label: "embed",
                    svg: ut(),
                    jwsource: "ceb"
                },
                bt = i(549),
                yt = i.n(bt),
                xt = i(6042),
                kt = !1,
                Ct = function(t, e, o, a, s) {
                    var l = this,
                        u = s && s.openLink || c.nG;
                    (0, h.Z)(this, r.ZP);
                    var p, w, d = [pt, wt, ft],
                        j = function(t) {
                            o.trigger("settingsInteraction", "sharing", !1, t)
                        };
                    ! function() {
                        if (Array.isArray(e.sites)) {
                            var i = [];
                            (0, xt.S6)(e.sites, (function(t) {
                                (0, xt.HD)(t) && n[t] ? i.push(n[t]) : (0, xt.Kn)(t) && i.push(t)
                            })), d = i
                        }
                        t.addButton(yt(), a, j, "share", "jw-settings-sharing");
                        var s = o.el.querySelector(".jw-settings-sharing");
                        s.setAttribute("aria-controls", "jw-settings-submenu-sharing"), s.setAttribute("role", "button")
                    }();
                    var g = function(t, e) {
                            var i = t.indexOf("MEDIAID");
                            return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
                        },
                        f = function(t, i) {
                            if (i) return i;
                            if (e.link) {
                                var n = g(e.link, t);
                                if (n) return n
                            }
                            return window.top === window ? window.location.toString() : document.referrer
                        },
                        m = function() {
                            var i = t.getPlaylistItem(),
                                n = d.filter((function(t) {
                                    return "link" === t.label
                                }))[0],
                                o = i.mediaid,
                                a = i.link;
                            p = f(o, a), n ? -1 === n.src.indexOf(p) && (n.src = p) : d.push((0, h.Z)({
                                src: p
                            }, mt));
                            var s = d.filter((function(t) {
                                return "embed" === t.label
                            }));
                            w = function(t) {
                                var i = null;
                                if (e.code) {
                                    i = g(e.code, t) || i
                                }
                                return i
                            }(i.mediaid) || e.code, s[0] ? s[0].src = decodeURIComponent(w) : e.code && d.push((0, h.Z)({
                                src: decodeURIComponent(w)
                            }, vt))
                        },
                        v = function(t) {
                            l.trigger("click", {
                                method: t
                            })
                        };
                    return this.getShareMethods = function() {
                        return m(), d
                    }, this.getLink = function(t, e) {
                        return f(t, e)
                    }, this.getHeading = function() {
                        return a
                    }, this.onSubmenuToggle = function(t, e) {
                        void 0 === e && (e = "interaction"), t && !kt && (kt = !0, i(3484)), l.trigger(t ? "open" : "close", {
                            visible: t,
                            method: e
                        })
                    }, this.action = function(e) {
                        var i = d[e].label;
                        "embed" !== i && "link" !== i ? function(e) {
                            var i = e.src;
                            if ((0, xt.mf)(i)) i(p);
                            else if (null != i) {
                                var n = encodeURIComponent(p || "share"),
                                    o = i.replace(/\[URL\]/gi, n);
                                i === o && (o = i + n), t.pause({
                                    reason: "sharing"
                                }), u(o, "_blank", {
                                    rel: "noreferrer"
                                }), window.focus()
                            }
                            v(e.label)
                        }(d[e]) : v(i)
                    }, this.open = function() {
                        o.trigger("sharingApi", !0)
                    }, this.close = function() {
                        o.trigger("sharingApi", !1)
                    }, this
                },
                zt = function(t, e) {
                    var i = this,
                        n = (0, c.az)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
                    n.querySelector(".jw-icon").appendChild((0, f.W)("next")), this.el = n, this.skiptext = this.el.querySelector(".jw-skiptext"), this.skipUI = (0, y.Z)(this.el, this.skipAd, this), this.model = t, this.skipMessage = t.get("skipText") || "", this.skipMessageCountdown = t.get("skipMessage") || "", this.waitTime = (0, m.U5)(t.get("skipOffset")), t.change("duration", (function(n, o) {
                        o && (i.waitTime || (i.waitTime = (0, m.U5)(n.get("skipOffset"), o)), i.el.parentNode !== e && i.waitTime + 2 < o && (t.change("position", (function(t, e) {
                            var n = i.waitTime - (e || 0);
                            n > 0 ? i.updateMessage(i.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(n) + "$2")) : null !== i.waitTime && (i.updateMessage(i.skipMessage), i.skippable = !0, (0, c.cn)(i.el, "jw-skippable"))
                        }), i), e.appendChild(i.el)))
                    }), this)
                };
            (0, h.Z)(zt.prototype, r.ZP, {
                updateMessage: function(t) {
                    (0, c.nh)(this.skiptext, t), this.el.setAttribute("aria-label", t)
                },
                skipAd: function() {
                    this.skippable && (this.skipUI.off(), this.trigger(s.k3))
                },
                destroy: function() {
                    this.model.off(null, null, this), this.skipUI && this.skipUI.destroy(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
                }
            });
            var Tt = zt,
                St = function(t, e, i) {
                    this.api = t, this.playerElement = e, this.wrapperElement = i
                };
            (0, h.Z)(St.prototype, {
                setup: function(t) {
                    var e = this;
                    this.element = (0, c.az)(function(t) {
                        return '<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=' + t + ' tabindex="0"></div>'
                    }(t)), this.element.appendChild((0, f.W)("close")), this.ui = (0, y.Z)(this.element, (function() {
                        e.api.remove()
                    }), this), this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild), (0, c.cn)(this.playerElement, "jw-flag-top")
                },
                destroy: function() {
                    this.element && (this.ui.destroy(), this.wrapperElement.removeChild(this.element), this.element = null)
                }
            });
            var Mt = St,
                Bt = function(t) {
                    var e = t.label,
                        i = t.src,
                        n = t.options,
                        o = t.displayText,
                        a = t.svg,
                        s = void 0 === a ? "" : a,
                        r = t.icon,
                        l = void 0 === r ? "" : r,
                        c = l ? '<img src="' + l + '" class="jw-svg-icon"/>' : s;
                    return "link" === e || "embed" === e ? '<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">' + c + " " + (o || e) + '</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">' + i + '</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-' + (o || e) + '"><div class="jw-text">' + n.copyText + "</div></div></div>" : '<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="menuitem">' + c + " " + (o || e) + "</button>"
                },
                At = function(t) {
                    function e(e, i, n) {
                        var o;
                        return void 0 === n && (n = Bt), (o = t.call(this, e, i, n) || this).content = e, o.el && e.label ? (o.el.setAttribute("aria-label", e.label), o.el.setAttribute("role", "button"), o.el.setAttribute("tabindex", "0"), o) : (0, E.Z)(o)
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.activate = function() {
                        if ("embed" === this.content.label || "link" === this.content.label) {
                            var t = this.el.querySelector(".jw-sharing-textarea");
                            if (t.select(), document.execCommand("copy")) {
                                var e = t.nextSibling;
                                (0, c.cn)(e, "jw-open"), setTimeout((function() {
                                    (0, c.IV)(e, "jw-open")
                                }), 1e3)
                            } else window.prompt("Copy the text below", this.content.src);
                            t.blur()
                        }
                    }, i.destroy = function() {
                        this.ui.destroy()
                    }, e
                }(Z.s),
                Et = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.createCategoryButton = function() {
                        return "sharing" === this.name && (this.icon = yt()), t.prototype.createCategoryButton.call(this, this.title)
                    }, i.createItems = function(e, i, n, o) {
                        return "sharing" === this.name && (o = At), t.prototype.createItems.apply(this, [e, i, n, o])
                    }, e
                }(L.Z),
                Lt = function(t) {
                    function e(e, i) {
                        var n;
                        return (n = t.call(this, e, i) || this).playerContainer = i, n.sharing = null, n.sharingApi = !1, n.dismissButton = null, n.skipButton = null, n
                    }(0, o.Z)(e, t);
                    var i = e.prototype;
                    return i.disable = function(e) {
                        t.prototype.disable.call(this, e), this.dismissButton && (this.dismissButton.destroy(), this.dismissButton = null)
                    }, i.enable = function(e, i) {
                        var n = this;
                        t.prototype.enable.call(this, e, i), i.change("instream", (function() {
                            n._destroySkipButton()
                        })), i.change("skipButton", (function(t, i) {
                            n._destroySkipButton(), i && (n.skipButton = new Tt(t, n.div), n.skipButton.on(s.k3, (function() {
                                t.set("skipButton", !1), e.skipAd()
                            })), n.controlbar.adSkipButton = n.skipButton)
                        }));
                        var o = i.get("localization"),
                            a = i.get("advertising");
                        a && a.outstream && a.dismissible && (this.dismissButton = new Mt(e, this.playerContainer, this.playerContainer.querySelector(".jw-top")), this.dismissButton.setup(o.close));
                        var r = i.get("sharing");
                        if (!this.sharing && r) {
                            var l = this.controlbar,
                                c = this.settingsMenu,
                                u = o.sharing;
                            this.sharing = new Ct(e, r, l, u.heading), e.addPlugin("sharing", this.sharing), i.change("playlistItem", (function() {
                                var t = n.sharing.getShareMethods().map((function(t) {
                                    var e = u[t.label];
                                    return e && (t.displayText = e), t
                                }));
                                c.removeMenu("sharing");
                                var e = new Et("sharing", o.sharing.heading, c, o),
                                    i = e.open,
                                    a = e.close,
                                    s = o.sharing.copied;
                                e.open = function(t) {
                                    e.visible || n._onSharingActive(!0), i(t)
                                }, e.close = function(t) {
                                    e.visible && n._onSharingActive(!1), a(t)
                                }, e.setMenuItems(e.createItems(t, n.sharing.action, {
                                    copyText: s
                                })), e.el.classList.add("jw-sharing-menu")
                            })), this._addSharingApiEvent(l, c), this.rightClickMenu.enableSharing(this.sharing.open)
                        }
                    }, i._destroySkipButton = function() {
                        this.skipButton && (this.skipButton.destroy(), this.skipButton = null, this.controlbar.adSkipButton = null)
                    }, i._addSharingApiEvent = function(t, e) {
                        var i = this;
                        t.on("sharingApi", (function(t) {
                            var n = e.children.sharing;
                            n && (i.sharingApi = !0, t && !n.visible ? (e.children.sharing.open(), i.sharing.onSubmenuToggle(!0, "api")) : !t && n.visible && (e.close(), i.sharing.onSubmenuToggle(!1, "api")))
                        }))
                    }, i._onSharingActive = function(t) {
                        this.sharingApi ? this.sharingApi = !1 : this.sharing.onSubmenuToggle(t)
                    }, e
                }(W)
        },
        4542: function(t, e, i) {
            "use strict";
            var n = i(8081),
                o = i.n(n),
                a = i(3645),
                s = i.n(a)()(o());
            s.push([t.id, '.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-overlays,.jw-settings-submenu{height:100%;width:100%}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;right:0}.jw-controls,.jw-controls-backdrop,.jw-overlays,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-controls,.jw-flag-small-player .jw-settings-menu,.jw-overlays{position:absolute;bottom:0;right:0}.jw-controlbar .jw-tooltip::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after,.jw-settings-menu .jw-tooltip::after,.jw-text-live::before,.jw-time-tip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:0}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-pip .jw-svg-icon-pip-off{display:none}.jw-off.jw-icon-pip .jw-svg-icon-pip-off{display:block}.jw-icon-pip .jw-svg-icon-pip-on{display:block}.jw-off.jw-icon-pip .jw-svg-icon-pip-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-full.jw-icon-volume .jw-svg-icon-volume-50,.jw-off.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-icon-volume.jw-open::after,.jw-settings-menu .jw-icon[aria-checked=true]::after,.jw-settings-open .jw-icon-settings::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-controls,.jw-overlays{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom,transparent,rgba(0,0,0,.4) 77%,rgba(0,0,0,.4) 100%) 100% 100%/100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0,.25,.25,1),background-size 250ms cubic-bezier(0,.25,.25,1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-rewind,.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon,.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before,.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar{max-height:140px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-duration,.jw-text-elapsed{justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{transform-style:preserve-3d}.jwplayer:not(.jw-flag-fullscreen) .jw-fullscreen-disallowed{display:none}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,.3)}.jw-buffer{background-color:rgba(255,255,255,.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:1;pointer-events:none;position:absolute;transform:translate(-50%,-50%) scale(0);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.4),0 0 0 6px rgba(255,255,255,.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{top:50%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{transform:translate(0,-50%)}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-knob,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{left:50%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate(-50%,0);transition:transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{transform:translate(-50%,50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-horizontal-volume-container .jw-slider-volume,.jw-slider-time{height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,.8);cursor:pointer;position:absolute;width:6px}.jw-horizontal-volume-container,.jw-slider-time{z-index:1;outline:0}.jw-horizontal-volume-container .jw-buffer,.jw-horizontal-volume-container .jw-cue,.jw-horizontal-volume-container .jw-progress,.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-buffer,.jw-slider-time .jw-cue,.jw-slider-time .jw-progress,.jw-slider-time .jw-rail{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;transform:translate(0,-50%) scale(1,.6);transition:transform 150ms ease-in-out}.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-dragging .jw-slider-time .jw-buffer,.jw-flag-dragging .jw-slider-time .jw-cue,.jw-flag-dragging .jw-slider-time .jw-progress,.jw-flag-dragging .jw-slider-time .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time .jw-buffer,.jw-flag-touch .jw-slider-time .jw-cue,.jw-flag-touch .jw-slider-time .jw-progress,.jw-flag-touch .jw-slider-time .jw-rail,.jw-horizontal-volume-container:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-rail,.jw-horizontal-volume-container:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:focus .jw-buffer,.jw-slider-time:focus .jw-cue,.jw-slider-time:focus .jw-progress,.jw-slider-time:focus .jw-rail,.jw-slider-time:hover .jw-buffer,.jw-slider-time:hover .jw-cue,.jw-slider-time:hover .jw-progress,.jw-slider-time:hover .jw-rail{transform:translate(0,-50%) scale(1,1)}.jw-horizontal-volume-container:focus .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:focus .jw-knob,.jw-slider-time:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-rail{background-color:rgba(255,255,255,.2)}.jw-horizontal-volume-container .jw-buffer,.jw-slider-time .jw-buffer{background-color:rgba(255,255,255,.4)}.jw-flag-touch .jw-horizontal-volume-container::before,.jw-flag-touch .jw-slider-time::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before,.jw-breakpoint-0.jw-flag-touch .jw-slider-time::before{height:34px}.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail,.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width .3s cubic-bezier(0,.25,.25,1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:12px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity .3s;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{transform:translate(-50%,-50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-modal{width:284px}.jw-breakpoint-5 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-7 .jw-modal{height:232px}.jw-breakpoint-3 .jw-modal,.jw-breakpoint-4 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-rightclick-link{border:none;background-color:transparent;outline:0;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:0}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0}.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after,.jw-time-tip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;transform-origin:75% 50%;transform:translate(-50%,-50%) rotate(45deg);z-index:-1}.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text,.jw-time-tip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s,150ms;transform:translate(-50%,0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;transform:translate(-50%,0);transition:.1s 0s cubic-bezier(0,.25,.25,1);transition-property:opacity,transform,visibility;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;transform:translate(-50%,-10px);transition-duration:150ms;transition-delay:.5s,0s,.5s;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;transform:translate(0,0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{transform:translate(0,-10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:rgba(38,38,38,.8);transform:translate(-50%,-50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:700}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:400}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-skip-icon,.jw-skip .jw-text{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:700}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-info-open .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-close,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-title{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:rgba(38,38,38,.8);border-radius:0;box-shadow:0 0 10px rgba(0,0,0,.5);color:rgba(255,255,255,.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;transform:translate(0,-5px);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;transform:translate(0,0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:700}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-nextup-firefox-pip-fix{background:#262626}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#262626;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%;min-height:200px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-5 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-3 .jw-settings-menu,.jw-breakpoint-4 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded=true]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:0}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:0}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:700}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:700;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity,background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:0}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));font:400 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0,.25,.25,1);transition-property:background-color,filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{transform:scale(.7,.7)}.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color,opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container,.jw-video-thumbnail-container:hover{cursor:pointer}.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;transform:translate(-50%,-50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@keyframes jw-ab-zoom-thumbnail-animation{0%{transform:scale(1,1)}50%{transform:scale(1.25,1.25)}100%{transform:scale(1,1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,.4)}.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:jw-spin 2s linear infinite;display:block}@keyframes jw-spin{100%{transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-complete .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-svg-icon-pause{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar,body .jwplayer.jw-state-error .jw-controlbar{display:none}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu,body .jwplayer.jw-state-error .jw-settings-menu{height:100%;top:50%;left:50%;transform:translate(-50%,-50%)}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display,body .jwplayer.jw-state-error .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right,body .jwplayer.jw-state-error .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-duration,.jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,.8)}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,.8);display:flex;font-size:12px;font-weight:700;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:0 0}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls,.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop{display:none!important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-logo,.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-inline,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-live{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-countdown,.jw-flag-audio-player .jw-controlbar .jw-text-duration{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity .3s,width .3s}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed{display:none}.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""]), e.Z = s
        },
        5670: function(t, e, i) {
            "use strict";
            var n = i(8081),
                o = i.n(n),
                a = i(3645),
                s = i.n(a)()(o());
            s.push([t.id, "._stretch{height:100%;width:100%}.jw-tizen-app:not(.jw-state-buffering) .jw-display{display:none}.jw-tizen-app.jw-state-buffering .jw-tizen-controlbar{display:none}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:none}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer path{display:none}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer circle{fill:transparent;stroke:#fff;stroke-width:13;stroke-dasharray:471}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer .jw-tizen-buffer-draw{animation:jw-draw 1.5s ease-in-out infinite}.jw-tizen-app.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer .jw-tizen-buffer-erase{animation:jw-erase 1.5s ease-in-out infinite}@keyframes jw-draw{0%{stroke-dashoffset:0}100%,50%{stroke-dashoffset:471}}@keyframes jw-erase{0%,50%{stroke-dashoffset:-471}100%{stroke-dashoffset:0}}.jw-tizen-app.jw-state-paused.jw-flag-user-inactive:not(.jw-flag-seek) .jw-pause-display{display:initial}.jw-tizen-app.jw-flag-ads .jw-skip{justify-content:center;right:10%;height:2.5em;bottom:9.72%;background-color:transparent;border-color:#fff;border-width:medium;will-change:opacity;font-size:40px}.jw-tizen-app.jw-flag-ads .jw-skip.jw-active,.jw-tizen-app.jw-flag-ads .jw-skip:focus{box-shadow:0 0 .25em .38em rgba(255,255,255,.3)}.jw-tizen-app.jw-flag-ads .jw-skip .jw-skip-icon{display:flex;justify-content:center;height:3.6em;width:3.6em}.jw-tizen-app.jw-flag-ads .jw-skip .jw-svg-icon{height:2em;width:2em}.jw-tizen-app.jw-flag-ads .jw-tizen-controlbar .jw-top-container{display:none}.jw-tizen-app.jw-flag-ads .jw-tizen-controlbar .jw-bottom-container .jw-slider-time{display:none}.jw-tizen-app.jw-flag-ads .jw-tizen-controlbar .jw-bottom-container .jw-text-alt{font-weight:400}.jw-tizen-app .jw-svg-icon{height:75px;width:75px;filter:drop-shadow(0 0 15px #fff)}.jw-tizen-app .jw-icon-back .jw-svg-icon{height:60px;width:60px}.jw-tizen-app .jw-icon{height:130px;width:130px;justify-content:center}.jw-tizen-app .jw-nextup-container{padding:8% 6.25%;font-size:50px}.jw-tizen-app .jw-nextup-container .jw-nextup{max-width:40.18%;background:rgba(0,0,0,.3);box-shadow:none}.jw-tizen-app .jw-nextup-container .jw-nextup-tooltip{height:4em}.jw-tizen-app .jw-nextup-container .jw-nextup-thumbnail{width:44.44%}.jw-tizen-app .jw-nextup-container .jw-nextup-body{padding-left:5.93%}.jw-tizen-app .jw-nextup-container .jw-nextup-header{font-size:1em}.jw-tizen-app .jw-nextup-container .jw-nextup-title{font-size:.8em;font-weight:400}.jw-tizen-app .jw-nextup-container .jw-nextup-close{display:none}.jw-tizen-app .jw-nextup-container .jw-nextup-duration{display:none}.jw-tizen-app .jw-tizen-controls{height:100%}.jw-tizen-app .jw-tizen-controls .jw-pause-display{height:100%;width:100%;position:absolute;background:rgba(0,0,0,.4);z-index:2;display:none}.jw-tizen-app .jw-tizen-controls .jw-pause-display .jw-pause-display-container{position:absolute;bottom:0;left:0;padding:0 6.25% 15%;width:100%;font-size:80px}.jw-tizen-app .jw-tizen-controls .jw-pause-display .jw-pause-display-container .jw-pause-title{font-size:1em;font-weight:700;width:90%;color:rgba(255,255,255,.9);padding-bottom:1.85%}.jw-tizen-app .jw-tizen-controls .jw-pause-display .jw-pause-display-container .jw-pause-description{font-size:.5em;width:60%;color:rgba(255,255,255,.8);font-weight:400}.jw-tizen-app .jw-tizen-controls{will-change:opacity}.jw-tizen-app .jw-tizen-controlbar{align-items:center;justify-content:center;padding:6% 6.25%;height:100%;max-height:initial;font-size:40px}.jw-tizen-app .jw-tizen-controlbar .jw-button-container{display:none}.jw-tizen-app .jw-tizen-controlbar .jw-top-container{display:flex;flex-flow:row wrap;position:absolute;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;left:0;top:0;padding:inherit}.jw-tizen-app .jw-tizen-controlbar .jw-bottom-container{display:flex;flex-flow:row wrap;position:absolute;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;left:0;bottom:0;padding:inherit;align-items:center}.jw-tizen-app .jw-tizen-controlbar .jw-bottom-container.jw-hidden{display:none}.jw-tizen-app .jw-tizen-controlbar .jw-text{font-size:1em;font-weight:700}.jw-tizen-app .jw-tizen-controlbar .jw-text-countdown{display:flex}.jw-tizen-app .jw-tizen-controlbar .jw-slider-time{height:initial;width:initial;flex-grow:1;padding:0}.jw-tizen-app .jw-tizen-controlbar .jw-slider-time .jw-slider-container{height:.38em}.jw-tizen-app .jw-tizen-controlbar .jw-active .jw-tooltip.jw-open{margin-top:15px}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip{box-shadow:none;top:100%;visibility:hidden}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip .jw-text{font-size:.75em;background-color:inherit;color:rgba(255,255,255,.9);padding-top:.25em}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip::after{content:initial}.jw-tizen-app .jw-tizen-controlbar .jw-tooltip.jw-open{transition-delay:0s;visibility:visible}.jw-tizen-app .jw-tizen-controlbar .jw-text-live{font-size:1em;width:auto}.jw-tizen-app .jw-tizen-controlbar .jw-text-live:before{height:.5em;width:.5em;margin-right:.38em}.jw-tizen-app .jw-controls-backdrop{background:linear-gradient(to bottom,rgba(0,0,0,.4) 0,transparent 35%,transparent 65%,rgba(0,0,0,.4) 100%)}.jw-tizen-app .jw-icon.jw-button-color.jw-active,.jw-tizen-app .jw-icon.jw-button-color:focus{border-radius:50%;background-color:rgba(255,255,255,.2);color:#fff;border:none}.jw-tizen-app .jw-icon.jw-button-color.jw-active .jw-tooltip,.jw-tizen-app .jw-icon.jw-button-color:focus .jw-tooltip{visibility:visible;opacity:1}.jw-tizen-app video::-webkit-media-text-track-container{max-height:90%}.jw-tizen-app.jwplayer.jw-flag-media-audio.jw-state-playing video::-webkit-media-text-track-container,.jw-tizen-app.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) video::-webkit-media-text-track-container,.jw-tizen-app.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) video::-webkit-media-text-track-container{max-height:75%}.jw-flag-seek .jw-icon-back,.jw-flag-seek .jw-icon-playback,.jw-flag-seek .jw-icon-settings{visibility:hidden}.jw-flag-seek .jw-seekbar-thumbnails.jw-open{display:flex}.jw-seekbar-thumbnails{position:absolute;display:none;justify-content:center;width:100%;left:0;bottom:0;padding-bottom:12%}.jw-seekbar-thumbnails .jw-seekbar-thumb.jw-active{border:#fff;border-style:solid;border-width:thick}.jw-tooltip-time .jw-overlay{top:0;left:0}.jw-settings-menu-tizen{display:none;flex-direction:column;height:100%;position:absolute;margin-left:auto;width:38%;bottom:0;padding-top:0;background:rgba(0,0,0,.8);z-index:1;color:#fff}.jw-settings-menu-tizen.jw-settings-open{display:flex}.jw-settings-menu-tizen.jw-settings-transition-close{animation:jw-transition-out .3s ease forwards}.jw-settings-menu-tizen.jw-settings-transition-open{animation:jw-transition-in .3s ease forwards}.jw-settings-menu-tizen .jw-settings-submenu-tizen{display:flex;flex-direction:column;padding-left:10%;padding-top:10%;padding-right:15%}.jw-settings-menu-tizen .jw-settings-item-active::before{font-size:1.333em}.jw-settings-menu-tizen .jw-settings-topbar-text{font-weight:700}.jw-settings-menu-tizen .jw-settings-content-item,.jw-settings-menu-tizen .jw-settings-submenu-items,.jw-settings-menu-tizen .jw-settings-topbar-text{font-size:36px}.jw-settings-menu-tizen .jw-settings-content-item{font-weight:400;padding:.29em 1.555em;margin-top:.417em}.jw-settings-menu-tizen .jw-settings-content-item:focus{border:solid .138em #fff;color:#fff;margin:-.138em;background:#fff36;border-radius:.083em;margin-top:.279em}.jw-settings-menu-tizen .jw-settings-submenu-items{padding-top:.5em;font-size:36px}@keyframes jw-transition-in{from{right:-100%}to{right:0}}@keyframes jw-transition-out{from{right:0}to{right:-100%}}", ""]), e.Z = s
        },
        8406: function(t, e, i) {
            "use strict";
            var n = i(8081),
                o = i.n(n),
                a = i(3645),
                s = i.n(a)()(o());
            s.push([t.id, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:focus,.jw-sharing-link:hover{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:focus,.jw-sharing-copy .jw-sharing-link:hover{color:#fff}.jw-sharing-copy:focus,.jw-sharing-link:focus{outline:0}.jw-sharing-copy:active,.jw-sharing-link:active{color:#fff;font-weight:700}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""]), e.Z = s
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
                }, e.i = function(t, i, n, o, a) {
                    "string" == typeof t && (t = [
                        [null, t, void 0]
                    ]);
                    var s = {};
                    if (n)
                        for (var r = 0; r < this.length; r++) {
                            var l = this[r][0];
                            null != l && (s[l] = !0)
                        }
                    for (var c = 0; c < t.length; c++) {
                        var u = [].concat(t[c]);
                        n && s[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = a), i && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = i) : u[2] = i), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), e.push(u))
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
        1334: function() {
            ! function() {
                if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
                    var t = !1;
                    try {
                        var e = document.createElement("div");
                        e.addEventListener("focus", (function(t) {
                            t.preventDefault(), t.stopPropagation()
                        }), !0), e.focus(Object.defineProperty({}, "preventScroll", {
                            get: function() {
                                t = !0
                            }
                        }))
                    } catch (t) {}
                    if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
                        HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
                        var i = function(t) {
                            for (var e = 0; e < t.length; e++) t[e][0].scrollTop = t[e][1], t[e][0].scrollLeft = t[e][2];
                            t = []
                        };
                        HTMLElement.prototype.focus = function(t) {
                            if (t && t.preventScroll) {
                                var e = function(t) {
                                    for (var e = t.parentNode, i = [], n = document.scrollingElement || document.documentElement; e && e !== n;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push([e, e.scrollTop, e.scrollLeft]), e = e.parentNode;
                                    return e = n, i.push([e, e.scrollTop, e.scrollLeft]), i
                                }(this);
                                this.nativeFocus(), "function" == typeof setTimeout ? setTimeout((function() {
                                    i(e)
                                }), 0) : i(e)
                            } else this.nativeFocus()
                        }
                    }
                }
            }()
        },
        9725: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(3379),
                o = i.n(n),
                a = i(7795),
                s = i.n(a),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                u = i.n(c),
                p = i(9216),
                w = i.n(p),
                d = i(4589),
                h = i.n(d),
                j = i(4542),
                g = {};
            g.styleTagTransform = h(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = s(), g.insertStyleElement = w();
            o()(j.Z, g);
            e.default = j.Z && j.Z.locals ? j.Z.locals : void 0
        },
        4779: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(3379),
                o = i.n(n),
                a = i(7795),
                s = i.n(a),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                u = i.n(c),
                p = i(9216),
                w = i.n(p),
                d = i(4589),
                h = i.n(d),
                j = i(5670),
                g = {};
            g.styleTagTransform = h(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = s(), g.insertStyleElement = w();
            o()(j.Z, g);
            e.default = j.Z && j.Z.locals ? j.Z.locals : void 0
        },
        3484: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(3379),
                o = i.n(n),
                a = i(7795),
                s = i.n(a),
                r = i(569),
                l = i.n(r),
                c = i(3565),
                u = i.n(c),
                p = i(9216),
                w = i.n(p),
                d = i(4589),
                h = i.n(d),
                j = i(8406),
                g = {};
            g.styleTagTransform = h(), g.setAttributes = u(), g.insert = l().bind(null, "head"), g.domAPI = s(), g.insertStyleElement = w();
            o()(j.Z, g);
            e.default = j.Z && j.Z.locals ? j.Z.locals : void 0
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
                for (var a = {}, s = [], r = 0; r < t.length; r++) {
                    var l = t[r],
                        c = n.base ? l[0] + n.base : l[0],
                        u = a[c] || 0,
                        p = "".concat(c, " ").concat(u);
                    a[c] = u + 1;
                    var w = i(p),
                        d = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5]
                        };
                    if (-1 !== w) e[w].references++, e[w].updater(d);
                    else {
                        var h = o(d, n);
                        n.byIndex = r, e.splice(r, 0, {
                            identifier: p,
                            updater: h,
                            references: 1
                        })
                    }
                    s.push(p)
                }
                return s
            }

            function o(t, e) {
                var i = e.domAPI(e);
                i.update(t);
                return function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                        i.update(t = e)
                    } else i.remove()
                }
            }
            t.exports = function(t, o) {
                var a = n(t = t || [], o = o || {});
                return function(t) {
                    t = t || [];
                    for (var s = 0; s < a.length; s++) {
                        var r = i(a[s]);
                        e[r].references--
                    }
                    for (var l = n(t, o), c = 0; c < a.length; c++) {
                        var u = i(a[c]);
                        0 === e[u].references && (e[u].updater(), e.splice(u, 1))
                    }
                    a = l
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
                            var o = void 0 !== i.layer;
                            o && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), n += i.css, o && (n += "}"), i.media && (n += "}"), i.supports && (n += "}");
                            var a = i.sourceMap;
                            a && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleTagTransform(n, t, e.options)
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
        3207: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
        },
        4851: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
        },
        7938: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
        },
        4060: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
        },
        6038: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
        },
        147: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
        },
        7766: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
        },
        5806: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
        },
        9863: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
        },
        2494: function(t) {
            t.exports = '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-floating-close" focusable="false"><path d="M7.41499 5.00001L10.705 1.70501C10.8688 1.51371 10.9544 1.26763 10.9447 1.01595C10.935 0.764278 10.8307 0.525539 10.6526 0.347444C10.4745 0.16935 10.2357 0.0650171 9.98405 0.055296C9.73237 0.0455748 9.48629 0.131181 9.29499 0.295007L5.99999 3.58501L2.70499 0.295007C2.51369 0.131181 2.26762 0.0455748 2.01594 0.055296C1.76426 0.0650171 1.52552 0.16935 1.34743 0.347444C1.16934 0.525539 1.065 0.764278 1.05528 1.01595C1.04556 1.26763 1.13117 1.51371 1.29499 1.70501L4.58499 5.00001L1.29499 8.29501C1.19031 8.38466 1.10529 8.49497 1.04527 8.61904C0.985244 8.7431 0.951515 8.87824 0.946195 9.01596C0.940876 9.15367 0.964081 9.29101 1.01436 9.41933C1.06463 9.54766 1.14089 9.6642 1.23834 9.76166C1.3358 9.85911 1.45235 9.93537 1.58067 9.98565C1.709 10.0359 1.84633 10.0591 1.98405 10.0538C2.12177 10.0485 2.2569 10.0148 2.38096 9.95473C2.50503 9.89471 2.61535 9.80969 2.70499 9.70501L5.99999 6.41501L9.29499 9.70501C9.48629 9.86884 9.73237 9.95444 9.98405 9.94472C10.2357 9.935 10.4745 9.83067 10.6526 9.65257C10.8307 9.47448 10.935 9.23574 10.9447 8.98406C10.9544 8.73239 10.8688 8.48631 10.705 8.29501L7.41499 5.00001Z" fill="white" fill-opacity="0.8"></path></svg>'
        },
        7459: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
        },
        4606: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
        },
        8675: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
        },
        6641: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
        },
        2521: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
        },
        5147: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.75V9.75H22V4.78C22 4.21116 21.5389 3.75 20.97 3.75H2.03C1.46116 3.75 1 4.21113 1 4.78V17.72C1 18.2889 1.46119 18.75 2.03 18.75H12V16.75H3V5.75H20ZM14 13.25C14 12.6977 14.4477 12.25 15 12.25H22C22.5523 12.25 23 12.6977 23 13.25V19.25C23 19.8023 22.5523 20.25 22 20.25H15C14.4477 20.25 14 19.8023 14 19.25V13.25ZM10 9.25L8.20711 11.0429L10.7071 13.5429L9.29289 14.9571L6.79289 12.4571L5 14.25V9.25H10Z"></path></svg>'
        },
        1438: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.125V9.125H22V4.155C22 3.58616 21.5389 3.125 20.97 3.125H2.03C1.46116 3.125 1 3.58613 1 4.155V17.095C1 17.6639 1.46119 18.125 2.03 18.125H12V16.125H3V5.125H20ZM14 11.875C14 11.3227 14.4477 10.875 15 10.875H22C22.5523 10.875 23 11.3227 23 11.875V17.875C23 18.4273 22.5523 18.875 22 18.875H15C14.4477 18.875 14 18.4273 14 17.875V11.875ZM6 12.375L7.79289 10.5821L5.29288 8.0821L6.7071 6.66788L9.20711 9.16789L11 7.375V12.375H6Z"></path></svg>'
        },
        6084: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
        },
        4777: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
        },
        4119: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
        },
        5058: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
        },
        4886: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
        },
        6207: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
        },
        9992: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
        },
        3498: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
        },
        3918: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
        },
        8157: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
        },
        3356: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
        },
        8053: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>'
        },
        8711: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>'
        },
        1983: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>'
        },
        1277: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>'
        },
        7928: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>'
        },
        5484: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>'
        },
        6598: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>'
        },
        4375: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>'
        },
        1666: function(t) {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>'
        },
        549: function(t) {
            t.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>'
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

            function o(t, e, i) {
                return e && n(t.prototype, e), i && n(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }
            i.d(e, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);