/*! UIkit 3.6.3 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).UIkit = e();
}(this, function () {
  "use strict";

  var t = Object.prototype,
      n = t.hasOwnProperty;

  function h(t, e) {
    return n.call(t, e);
  }

  var e = {},
      i = /([a-z\d])([A-Z])/g;

  function d(t) {
    return t in e || (e[t] = t.replace(i, "$1-$2").toLowerCase()), e[t];
  }

  var r = /-(\w)/g;

  function f(t) {
    return t.replace(r, o);
  }

  function o(t, e) {
    return e ? e.toUpperCase() : "";
  }

  function p(t) {
    return t.length ? o(0, t.charAt(0)) + t.slice(1) : "";
  }

  var s = String.prototype,
      a = s.startsWith || function (t) {
    return 0 === this.lastIndexOf(t, 0);
  };

  function g(t, e) {
    return a.call(t, e);
  }

  var u = s.endsWith || function (t) {
    return this.substr(-t.length) === t;
  };

  function c(t, e) {
    return u.call(t, e);
  }

  var l = Array.prototype,
      m = function (t, e) {
    return !!~this.indexOf(t, e);
  },
      v = s.includes || m,
      w = l.includes || m;

  function b(t, e) {
    return t && (D(t) ? v : w).call(t, e);
  }

  var x = l.findIndex || function (t) {
    for (var e = arguments, n = 0; n < this.length; n++) if (t.call(e[1], this[n], n, this)) return n;

    return -1;
  };

  function y(t, e) {
    return x.call(t, e);
  }

  var k = Array.isArray;

  function $(t) {
    return "function" == typeof t;
  }

  function S(t) {
    return null !== t && "object" == typeof t;
  }

  var I = t.toString;

  function E(t) {
    return "[object Object]" === I.call(t);
  }

  function T(t) {
    return S(t) && t === t.window;
  }

  function C(t) {
    return 9 === M(t);
  }

  function _(t) {
    return 1 <= M(t);
  }

  function A(t) {
    return 1 === M(t);
  }

  function M(t) {
    return !T(t) && S(t) && t.nodeType;
  }

  function z(t) {
    return "boolean" == typeof t;
  }

  function D(t) {
    return "string" == typeof t;
  }

  function N(t) {
    return "number" == typeof t;
  }

  function B(t) {
    return N(t) || D(t) && !isNaN(t - parseFloat(t));
  }

  function P(t) {
    return !(k(t) ? t.length : S(t) && Object.keys(t).length);
  }

  function O(t) {
    return void 0 === t;
  }

  function H(t) {
    return z(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t;
  }

  function L(t) {
    t = Number(t);
    return !isNaN(t) && t;
  }

  function j(t) {
    return parseFloat(t) || 0;
  }

  var F = Array.from || function (t) {
    return l.slice.call(t);
  };

  function W(t) {
    return V(t)[0];
  }

  function V(t) {
    return t && (_(t) ? [t] : F(t).filter(_)) || [];
  }

  function R(t) {
    return T(t) ? t : (t = W(t)) ? (C(t) ? t : t.ownerDocument).defaultView : window;
  }

  function q(t) {
    return t ? c(t, "ms") ? j(t) : 1e3 * j(t) : 0;
  }

  function U(t, n) {
    return t === n || S(t) && S(n) && Object.keys(t).length === Object.keys(n).length && K(t, function (t, e) {
      return t === n[e];
    });
  }

  function Y(t, e, n) {
    return t.replace(new RegExp(e + "|" + n, "g"), function (t) {
      return t === e ? n : e;
    });
  }

  var X = Object.assign || function (t) {
    for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];

    t = Object(t);

    for (var i = 0; i < e.length; i++) {
      var r = e[i];
      if (null !== r) for (var o in r) h(r, o) && (t[o] = r[o]);
    }

    return t;
  };

  function G(t) {
    return t[t.length - 1];
  }

  function K(t, e) {
    for (var n in t) if (!1 === e(t[n], n)) return !1;

    return !0;
  }

  function J(t, n) {
    return t.slice().sort(function (t, e) {
      t = t[n];
      void 0 === t && (t = 0);
      e = e[n];
      return void 0 === e && (e = 0), e < t ? 1 : t < e ? -1 : 0;
    });
  }

  function Z(t, e) {
    var n = new Set();
    return t.filter(function (t) {
      t = t[e];
      return !n.has(t) && (n.add(t) || !0);
    });
  }

  function Q(t, e, n) {
    return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(L(t) || 0, e), n);
  }

  function tt() {}

  function et() {
    for (var i = [], t = arguments.length; t--;) i[t] = arguments[t];

    return [["bottom", "top"], ["right", "left"]].every(function (t) {
      var e = t[0],
          n = t[1];
      return 0 < Math.min.apply(Math, i.map(function (t) {
        return t[e];
      })) - Math.max.apply(Math, i.map(function (t) {
        return t[n];
      }));
    });
  }

  function nt(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }

  var it = {
    ratio: function (t, e, n) {
      var i = "width" === e ? "height" : "width",
          r = {};
      return r[i] = t[e] ? Math.round(n * t[i] / t[e]) : t[i], r[e] = n, r;
    },
    contain: function (n, i) {
      var r = this;
      return K(n = X({}, n), function (t, e) {
        return n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n;
      }), n;
    },
    cover: function (n, i) {
      var r = this;
      return K(n = this.contain(n, i), function (t, e) {
        return n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n;
      }), n;
    }
  };

  function rt(t, e, n) {
    if (S(e)) for (var i in e) rt(t, i, e[i]);else {
      if (O(n)) return (t = W(t)) && t.getAttribute(e);
      V(t).forEach(function (t) {
        $(n) && (n = n.call(t, rt(t, e))), null === n ? st(t, e) : t.setAttribute(e, n);
      });
    }
  }

  function ot(t, e) {
    return V(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }

  function st(t, e) {
    t = V(t), e.split(" ").forEach(function (e) {
      return t.forEach(function (t) {
        return t.hasAttribute(e) && t.removeAttribute(e);
      });
    });
  }

  function at(t, e) {
    for (var n = 0, i = [e, "data-" + e]; n < i.length; n++) if (ot(t, i[n])) return rt(t, i[n]);
  }

  var ut = "undefined" != typeof window,
      ct = ut && /msie|trident/i.test(window.navigator.userAgent),
      ht = ut && "rtl" === rt(document.documentElement, "dir"),
      lt = ut && "ontouchstart" in window,
      dt = ut && window.PointerEvent,
      ft = ut && (lt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints),
      pt = dt ? "pointerdown" : lt ? "touchstart" : "mousedown",
      mt = dt ? "pointermove" : lt ? "touchmove" : "mousemove",
      gt = dt ? "pointerup" : lt ? "touchend" : "mouseup",
      vt = dt ? "pointerenter" : lt ? "" : "mouseenter",
      wt = dt ? "pointerleave" : lt ? "" : "mouseleave",
      bt = dt ? "pointercancel" : "touchcancel";

  function xt(t, e) {
    return W(t) || $t(t, kt(t, e));
  }

  function yt(t, e) {
    var n = V(t);
    return n.length && n || St(t, kt(t, e));
  }

  function kt(t, e) {
    return void 0 === e && (e = document), Ct(t) || C(e) ? e : e.ownerDocument;
  }

  function $t(t, e) {
    return W(It(t, e, "querySelector"));
  }

  function St(t, e) {
    return V(It(t, e, "querySelectorAll"));
  }

  function It(t, o, e) {
    if (void 0 === o && (o = document), !t || !D(t)) return null;
    var s;
    Ct(t = t.replace(Tt, "$1 *")) && (s = [], t = t.match(_t).map(function (t) {
      return t.replace(/,$/, "").trim();
    }).map(function (t, e) {
      var n,
          i,
          r = o;
      return "!" === t[0] && (i = t.substr(1).trim().split(" "), r = Nt(Bt(o), i[0]), t = i.slice(1).join(" ").trim()), "-" === t[0] && (n = t.substr(1).trim().split(" "), i = (r || o).previousElementSibling, r = zt(i, t.substr(1)) ? i : null, t = n.slice(1).join(" ")), r ? (r.id || (r.id = "bs-" + Date.now() + e, s.push(function () {
        return st(r, "id");
      })), "#" + Ot(r.id) + " " + t) : null;
    }).filter(Boolean).join(","), o = document);

    try {
      return o[e](t);
    } catch (t) {
      return null;
    } finally {
      s && s.forEach(function (t) {
        return t();
      });
    }
  }

  var Et = /(^|[^\\],)\s*[!>+~-]/,
      Tt = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

  function Ct(t) {
    return D(t) && t.match(Et);
  }

  var _t = /.*?[^\\](?:,|$)/g;
  var At = ut ? Element.prototype : {},
      Mt = At.matches || At.webkitMatchesSelector || At.msMatchesSelector || tt;

  function zt(t, e) {
    return V(t).some(function (t) {
      return Mt.call(t, e);
    });
  }

  var Dt = At.closest || function (t) {
    var e = this;

    do {
      if (zt(e, t)) return e;
    } while (e = Bt(e));
  };

  function Nt(t, e) {
    return g(e, ">") && (e = e.slice(1)), A(t) ? Dt.call(t, e) : V(t).map(function (t) {
      return Nt(t, e);
    }).filter(Boolean);
  }

  function Bt(t) {
    return (t = W(t)) && A(t.parentNode) && t.parentNode;
  }

  var Pt = ut && window.CSS && CSS.escape || function (t) {
    return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
      return "\\" + t;
    });
  };

  function Ot(t) {
    return D(t) ? Pt.call(null, t) : "";
  }

  var Ht = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };

  function Lt(t) {
    return V(t).some(function (t) {
      return Ht[t.tagName.toLowerCase()];
    });
  }

  function jt(t) {
    return V(t).some(function (t) {
      return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
    });
  }

  var Ft = "input,select,textarea,button";

  function Wt(t) {
    return V(t).some(function (t) {
      return zt(t, Ft);
    });
  }

  function Vt(t, e) {
    return V(t).filter(function (t) {
      return zt(t, e);
    });
  }

  function Rt(t, e) {
    return D(e) ? zt(t, e) || !!Nt(t, e) : t === e || (C(e) ? e.documentElement : W(e)).contains(W(t));
  }

  function qt(t, e) {
    for (var n = []; t = Bt(t);) e && !zt(t, e) || n.push(t);

    return n;
  }

  function Ut(t, e) {
    t = (t = W(t)) ? V(t.children) : [];
    return e ? Vt(t, e) : t;
  }

  function Yt() {
    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];

    var n,
        i,
        r = Zt(t),
        o = r[0],
        s = r[1],
        a = r[2],
        u = r[3],
        c = r[4],
        o = ne(o);
    return 1 < u.length && (n = u, u = function (t) {
      return k(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t);
    }), c && c.self && (i = u, u = function (t) {
      if (t.target === t.currentTarget || t.target === t.current) return i.call(null, t);
    }), a && (u = function (t, i, r) {
      var o = this;
      return function (n) {
        t.forEach(function (t) {
          var e = ">" === i[0] ? St(i, t).reverse().filter(function (t) {
            return Rt(n.target, t);
          })[0] : Nt(n.target, i);
          e && (n.delegate = t, n.current = e, r.call(o, n));
        });
      };
    }(o, a, u)), c = Qt(c), s.split(" ").forEach(function (e) {
      return o.forEach(function (t) {
        return t.addEventListener(e, u, c);
      });
    }), function () {
      return Xt(o, s, u, c);
    };
  }

  function Xt(t, e, n, i) {
    void 0 === i && (i = !1), i = Qt(i), t = ne(t), e.split(" ").forEach(function (e) {
      return t.forEach(function (t) {
        return t.removeEventListener(e, n, i);
      });
    });
  }

  function Gt() {
    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];

    var n = Zt(t),
        i = n[0],
        r = n[1],
        o = n[2],
        s = n[3],
        a = n[4],
        u = n[5],
        c = Yt(i, r, o, function (t) {
      var e = !u || u(t);
      e && (c(), s(t, e));
    }, a);
    return c;
  }

  function Kt(t, n, i) {
    return ne(t).reduce(function (t, e) {
      return t && e.dispatchEvent(Jt(n, !0, !0, i));
    }, !0);
  }

  function Jt(t, e, n, i) {
    var r;
    return void 0 === e && (e = !0), void 0 === n && (n = !1), D(t) && ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i), t = r), t;
  }

  function Zt(t) {
    return $(t[2]) && t.splice(2, 0, !1), t;
  }

  function Qt(t) {
    return t && ct && !z(t) ? !!t.capture : t;
  }

  function te(t) {
    return t && "addEventListener" in t;
  }

  function ee(t) {
    return te(t) ? t : W(t);
  }

  function ne(t) {
    return k(t) ? t.map(ee).filter(Boolean) : D(t) ? St(t) : te(t) ? [t] : V(t);
  }

  function ie(t) {
    return "touch" === t.pointerType || !!t.touches;
  }

  function re(t) {
    var e = t.touches,
        n = t.changedTouches,
        t = e && e[0] || n && n[0] || t;
    return {
      x: t.clientX,
      y: t.clientY
    };
  }

  function oe() {
    var n = this;
    this.promise = new se(function (t, e) {
      n.reject = e, n.resolve = t;
    });
  }

  var se = ut && window.Promise || ce,
      ae = 2,
      ue = ut && window.setImmediate || setTimeout;

  function ce(t) {
    this.state = ae, this.value = void 0, this.deferred = [];
    var e = this;

    try {
      t(function (t) {
        e.resolve(t);
      }, function (t) {
        e.reject(t);
      });
    } catch (t) {
      e.reject(t);
    }
  }

  ce.reject = function (n) {
    return new ce(function (t, e) {
      e(n);
    });
  }, ce.resolve = function (n) {
    return new ce(function (t, e) {
      t(n);
    });
  }, ce.all = function (o) {
    return new ce(function (n, t) {
      var i = [],
          r = 0;
      0 === o.length && n(i);

      for (var e = 0; e < o.length; e += 1) ce.resolve(o[e]).then(function (e) {
        return function (t) {
          i[e] = t, (r += 1) === o.length && n(i);
        };
      }(e), t);
    });
  }, ce.race = function (i) {
    return new ce(function (t, e) {
      for (var n = 0; n < i.length; n += 1) ce.resolve(i[n]).then(t, e);
    });
  };
  var he = ce.prototype;

  function le(s, a) {
    return new se(function (t, e) {
      var n = X({
        data: null,
        method: "GET",
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: tt,
        responseType: ""
      }, a);
      n.beforeSend(n);
      var i,
          r,
          o = n.xhr;

      for (i in n) if (i in o) try {
        o[i] = n[i];
      } catch (t) {}

      for (r in o.open(n.method.toUpperCase(), s), n.headers) o.setRequestHeader(r, n.headers[r]);

      Yt(o, "load", function () {
        0 === o.status || 200 <= o.status && o.status < 300 || 304 === o.status ? ("json" === n.responseType && D(o.response) && (o = X(function (t) {
          var e,
              n = {};

          for (e in t) n[e] = t[e];

          return n;
        }(o), {
          response: JSON.parse(o.response)
        })), t(o)) : e(X(Error(o.statusText), {
          xhr: o,
          status: o.status
        }));
      }), Yt(o, "error", function () {
        return e(X(Error("Network Error"), {
          xhr: o
        }));
      }), Yt(o, "timeout", function () {
        return e(X(Error("Network Timeout"), {
          xhr: o
        }));
      }), o.send(n.data);
    });
  }

  function de(i, r, o) {
    return new se(function (t, e) {
      var n = new Image();
      n.onerror = function (t) {
        return e(t);
      }, n.onload = function () {
        return t(n);
      }, o && (n.sizes = o), r && (n.srcset = r), n.src = i;
    });
  }

  function fe(t) {
    var e;
    "loading" === document.readyState ? e = Yt(document, "DOMContentLoaded", function () {
      e(), t();
    }) : t();
  }

  function pe(t, e) {
    return e ? V(t).indexOf(W(e)) : Ut(Bt(t)).indexOf(t);
  }

  function me(t, e, n, i) {
    void 0 === n && (n = 0), void 0 === i && (i = !1);
    var r = (e = V(e)).length;
    return t = B(t) ? L(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : pe(e, t), i ? Q(t, 0, r - 1) : (t %= r) < 0 ? t + r : t;
  }

  function ge(t) {
    return (t = Ae(t)).innerHTML = "", t;
  }

  function ve(t, e) {
    return t = Ae(t), O(e) ? t.innerHTML : we(t.hasChildNodes() ? ge(t) : t, e);
  }

  function we(e, t) {
    return e = Ae(e), ye(t, function (t) {
      return e.appendChild(t);
    });
  }

  function be(e, t) {
    return e = Ae(e), ye(t, function (t) {
      return e.parentNode.insertBefore(t, e);
    });
  }

  function xe(e, t) {
    return e = Ae(e), ye(t, function (t) {
      return e.nextSibling ? be(e.nextSibling, t) : we(e.parentNode, t);
    });
  }

  function ye(t, e) {
    return (t = D(t) ? Ce(t) : t) ? "length" in t ? V(t).map(e) : e(t) : null;
  }

  function ke(t) {
    V(t).forEach(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }

  function $e(t, e) {
    for (e = W(be(t, e)); e.firstChild;) e = e.firstChild;

    return we(e, t), e;
  }

  function Se(t, e) {
    return V(V(t).map(function (t) {
      return t.hasChildNodes ? $e(V(t.childNodes), e) : we(t, e);
    }));
  }

  function Ie(t) {
    V(t).map(Bt).filter(function (t, e, n) {
      return n.indexOf(t) === e;
    }).forEach(function (t) {
      be(t, t.childNodes), ke(t);
    });
  }

  he.resolve = function (t) {
    var e = this;

    if (e.state === ae) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      var n = !1;

      try {
        var i = t && t.then;
        if (null !== t && S(t) && $(i)) return void i.call(t, function (t) {
          n || e.resolve(t), n = !0;
        }, function (t) {
          n || e.reject(t), n = !0;
        });
      } catch (t) {
        return void (n || e.reject(t));
      }

      e.state = 0, e.value = t, e.notify();
    }
  }, he.reject = function (t) {
    var e = this;

    if (e.state === ae) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      e.state = 1, e.value = t, e.notify();
    }
  }, he.notify = function () {
    var o = this;
    ue(function () {
      if (o.state !== ae) for (; o.deferred.length;) {
        var t = o.deferred.shift(),
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3];

        try {
          0 === o.state ? $(e) ? i(e.call(void 0, o.value)) : i(o.value) : 1 === o.state && ($(n) ? i(n.call(void 0, o.value)) : r(o.value));
        } catch (t) {
          r(t);
        }
      }
    });
  }, he.then = function (n, i) {
    var r = this;
    return new ce(function (t, e) {
      r.deferred.push([n, i, t, e]), r.notify();
    });
  }, he.catch = function (t) {
    return this.then(void 0, t);
  };
  var Ee = /^\s*<(\w+|!)[^>]*>/,
      Te = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

  function Ce(t) {
    var e = Te.exec(t);
    if (e) return document.createElement(e[1]);
    e = document.createElement("div");
    return Ee.test(t) ? e.insertAdjacentHTML("beforeend", t.trim()) : e.textContent = t, 1 < e.childNodes.length ? V(e.childNodes) : e.firstChild;
  }

  function _e(t, e) {
    if (A(t)) for (e(t), t = t.firstElementChild; t;) {
      var n = t.nextElementSibling;
      _e(t, e), t = n;
    }
  }

  function Ae(t, e) {
    return D(t) ? ze(t) ? W(Ce(t)) : $t(t, e) : W(t);
  }

  function Me(t, e) {
    return D(t) ? ze(t) ? V(Ce(t)) : St(t, e) : V(t);
  }

  function ze(t) {
    return "<" === t[0] || t.match(/^\s*</);
  }

  function De(t) {
    for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];

    Le(t, e, "add");
  }

  function Ne(t) {
    for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];

    Le(t, e, "remove");
  }

  function Be(t, e) {
    rt(t, "class", function (t) {
      return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }

  function Pe(t) {
    for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];

    e[0] && Ne(t, e[0]), e[1] && De(t, e[1]);
  }

  function Oe(t, e) {
    return e && V(t).some(function (t) {
      return t.classList.contains(e.split(" ")[0]);
    });
  }

  function He(t) {
    for (var i, r = [], e = arguments.length - 1; 0 < e--;) r[e] = arguments[e + 1];

    r.length && (i = D(G(r = je(r))) ? [] : r.pop(), r = r.filter(Boolean), V(t).forEach(function (t) {
      for (var e = t.classList, n = 0; n < r.length; n++) Fe.Force ? e.toggle.apply(e, [r[n]].concat(i)) : e[(O(i) ? !e.contains(r[n]) : i) ? "add" : "remove"](r[n]);
    }));
  }

  function Le(t, n, i) {
    (n = je(n).filter(Boolean)).length && V(t).forEach(function (t) {
      var e = t.classList;
      Fe.Multiple ? e[i].apply(e, n) : n.forEach(function (t) {
        return e[i](t);
      });
    });
  }

  function je(t) {
    return t.reduce(function (t, e) {
      return t.concat.call(t, D(e) && b(e, " ") ? e.trim().split(" ") : e);
    }, []);
  }

  var Fe = {
    get Multiple() {
      return this.get("_multiple");
    },

    get Force() {
      return this.get("_force");
    },

    get: function (t) {
      var e;
      return h(this, t) || ((e = document.createElement("_").classList).add("a", "b"), e.toggle("c", !1), this._multiple = e.contains("b"), this._force = !e.contains("c")), this[t];
    }
  },
      We = {
    "animation-iteration-count": !0,
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "stroke-dasharray": !0,
    "stroke-dashoffset": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0
  };

  function Ve(t, e, r, o) {
    return V(t).map(function (n) {
      if (D(e)) {
        if (e = Ge(e), O(r)) return qe(n, e);
        r || N(r) ? n.style.setProperty(e, B(r) && !We[e] ? r + "px" : r, o) : n.style.removeProperty(e);
      } else {
        if (k(e)) {
          var i = Re(n);
          return e.reduce(function (t, e) {
            return t[e] = i[Ge(e)], t;
          }, {});
        }

        S(e) && (o = r, K(e, function (t, e) {
          return Ve(n, e, t, o);
        }));
      }

      return n;
    })[0];
  }

  function Re(t, e) {
    return (t = W(t)).ownerDocument.defaultView.getComputedStyle(t, e);
  }

  function qe(t, e, n) {
    return Re(t, n)[e];
  }

  var Ue = {};

  function Ye(t) {
    var e,
        n = document.documentElement;
    return ct ? (t in Ue || (De(e = we(n, document.createElement("div")), "bs-" + t), Ue[t] = qe(e, "content", ":before").replace(/^["'](.*)["']$/, "$1"), ke(e)), Ue[t]) : Re(n).getPropertyValue("--bs-" + t);
  }

  var Xe = {};

  function Ge(t) {
    return Xe[t] || (Xe[t] = function (t) {
      t = d(t);
      var e = document.documentElement.style;
      if (t in e) return t;
      var n,
          i = Ke.length;

      for (; i--;) if ((n = "-" + Ke[i] + "-" + t) in e) return n;

      return t;
    }(t)), Xe[t];
  }

  var Ke = ["webkit", "moz", "ms"];

  function Je(t, s, a, u) {
    return void 0 === a && (a = 400), void 0 === u && (u = "linear"), se.all(V(t).map(function (o) {
      return new se(function (e, n) {
        for (var t in s) {
          var i = Ve(o, t);
          "" === i && Ve(o, t, i);
        }

        var r = setTimeout(function () {
          return Kt(o, "transitionend");
        }, a);
        Gt(o, "transitionend transitioncanceled", function (t) {
          t = t.type;
          clearTimeout(r), Ne(o, "bs-transition"), Ve(o, {
            transitionProperty: "",
            transitionDuration: "",
            transitionTimingFunction: ""
          }), "transitioncanceled" === t ? n() : e(o);
        }, {
          self: !0
        }), De(o, "bs-transition"), Ve(o, X({
          transitionProperty: Object.keys(s).map(Ge).join(","),
          transitionDuration: a + "ms",
          transitionTimingFunction: u
        }, s));
      });
    }));
  }

  var Ze = {
    start: Je,
    stop: function (t) {
      return Kt(t, "transitionend"), se.resolve();
    },
    cancel: function (t) {
      Kt(t, "transitioncanceled");
    },
    inProgress: function (t) {
      return Oe(t, "bs-transition");
    }
  },
      Qe = "bs-animation-";

  function tn(t, o, s, a, u) {
    return void 0 === s && (s = 200), se.all(V(t).map(function (r) {
      return new se(function (e, n) {
        Kt(r, "animationcanceled");
        var i = setTimeout(function () {
          return Kt(r, "animationend");
        }, s);
        Gt(r, "animationend animationcanceled", function (t) {
          t = t.type;
          clearTimeout(i), "animationcanceled" === t ? n() : e(r), Ve(r, "animationDuration", ""), Be(r, Qe + "\\S*");
        }, {
          self: !0
        }), Ve(r, "animationDuration", s + "ms"), De(r, o, Qe + (u ? "leave" : "enter")), g(o, Qe) && De(r, a && "bs-transform-origin-" + a, u && Qe + "reverse");
      });
    }));
  }

  var en = new RegExp(Qe + "(enter|leave)"),
      nn = {
    in: tn,
    out: function (t, e, n, i) {
      return tn(t, e, n, i, !0);
    },
    inProgress: function (t) {
      return en.test(rt(t, "class"));
    },
    cancel: function (t) {
      Kt(t, "animationcanceled");
    }
  },
      rn = {
    width: ["left", "right"],
    height: ["top", "bottom"]
  };

  function on(t) {
    t = T(t) || !W(t) ? {
      height: cn(t),
      width: hn(t),
      top: 0,
      left: 0
    } : W(t).getBoundingClientRect();
    return {
      height: t.height,
      width: t.width,
      top: t.top,
      left: t.left,
      bottom: t.top + t.height,
      right: t.left + t.width
    };
  }

  function sn(n, i) {
    var t,
        r = on(n),
        e = R(n),
        o = {
      height: e.pageYOffset,
      width: e.pageXOffset
    };

    for (t in rn) for (var s in rn[t]) r[rn[t][s]] += o[t];

    if (!i) return r;
    var a = Ve(n, "position");
    K(Ve(n, ["left", "top"]), function (t, e) {
      return Ve(n, e, i[e] - r[e] + j("absolute" === a && "auto" === t ? an(n)[e] : t));
    });
  }

  function an(t, e) {
    t = W(t), e = e || t.offsetParent || t.documentElement;
    var n = sn(t),
        t = sn(e);
    return {
      top: n.top - t.top - j(Ve(e, "borderTopWidth")),
      left: n.left - t.left - j(Ve(e, "borderLeftWidth"))
    };
  }

  function un(t) {
    var e = [0, 0];
    t = W(t);

    do {
      if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Ve(t, "position")) {
        var n = R(t);
        return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e;
      }
    } while (t = t.offsetParent);

    return e;
  }

  var cn = ln("height"),
      hn = ln("width");

  function ln(i) {
    var r = p(i);
    return function (t, e) {
      if (O(e)) {
        if (T(t)) return t["inner" + r];

        if (C(t)) {
          var n = t.documentElement;
          return Math.max(n["offset" + r], n["scroll" + r]);
        }

        return (e = "auto" === (e = Ve(t = W(t), i)) ? t["offset" + r] : j(e) || 0) - dn(t, i);
      }

      return Ve(t, i, e || 0 === e ? +e + dn(t, i) + "px" : "");
    };
  }

  function dn(n, t, e) {
    return void 0 === e && (e = "border-box"), Ve(n, "boxSizing") === e ? rn[t].map(p).reduce(function (t, e) {
      return t + j(Ve(n, "padding" + e)) + j(Ve(n, "border" + e + "Width"));
    }, 0) : 0;
  }

  function fn(t) {
    for (var e in rn) for (var n in rn[e]) if (rn[e][n] === t) return rn[e][1 - n];

    return t;
  }

  function pn(t, e, n) {
    return void 0 === e && (e = "width"), void 0 === n && (n = window), B(t) ? +t : c(t, "vh") ? mn(cn(R(n)), t) : c(t, "vw") ? mn(hn(R(n)), t) : c(t, "%") ? mn(on(n)[e], t) : j(t);
  }

  function mn(t, e) {
    return t * j(e) / 100;
  }

  var gn = {
    reads: [],
    writes: [],
    read: function (t) {
      return this.reads.push(t), bn(), t;
    },
    write: function (t) {
      return this.writes.push(t), bn(), t;
    },
    clear: function (t) {
      return yn(this.reads, t) || yn(this.writes, t);
    },
    flush: vn
  };

  function vn(t) {
    void 0 === t && (t = 1), xn(gn.reads), xn(gn.writes.splice(0, gn.writes.length)), gn.scheduled = !1, (gn.reads.length || gn.writes.length) && bn(t + 1);
  }

  var wn = 4;

  function bn(t) {
    gn.scheduled || (gn.scheduled = !0, t && t < wn ? se.resolve().then(function () {
      return vn(t);
    }) : requestAnimationFrame(function () {
      return vn();
    }));
  }

  function xn(t) {
    for (var e; e = t.shift();) e();
  }

  function yn(t, e) {
    e = t.indexOf(e);
    return !!~e && !!t.splice(e, 1);
  }

  function kn() {}

  kn.prototype = {
    positions: [],
    init: function () {
      var e,
          t = this;
      this.positions = [], this.unbind = Yt(document, "mousemove", function (t) {
        return e = re(t);
      }), this.interval = setInterval(function () {
        e && (t.positions.push(e), 5 < t.positions.length && t.positions.shift());
      }, 50);
    },
    cancel: function () {
      this.unbind && this.unbind(), this.interval && clearInterval(this.interval);
    },
    movesTo: function (t) {
      if (this.positions.length < 2) return !1;
      var e = t.getBoundingClientRect(),
          n = e.left,
          i = e.right,
          r = e.top,
          o = e.bottom,
          s = this.positions[0],
          t = G(this.positions),
          a = [s, t];
      return !nt(t, e) && [[{
        x: n,
        y: r
      }, {
        x: i,
        y: o
      }], [{
        x: n,
        y: o
      }, {
        x: i,
        y: r
      }]].some(function (t) {
        t = function (t, e) {
          var n = t[0],
              i = n.x,
              r = n.y,
              o = t[1],
              s = o.x,
              a = o.y,
              u = e[0],
              n = u.x,
              t = u.y,
              o = e[1],
              u = o.x,
              e = o.y,
              o = (e - t) * (s - i) - (u - n) * (a - r);
          if (0 == o) return !1;
          o = ((u - n) * (r - t) - (e - t) * (i - n)) / o;
          if (o < 0) return !1;
          return {
            x: i + o * (s - i),
            y: r + o * (a - r)
          };
        }(a, t);

        return t && nt(t, e);
      });
    }
  };
  var $n = {};

  function Sn(t, e, n) {
    return $n.computed($(t) ? t.call(n, n) : t, $(e) ? e.call(n, n) : e);
  }

  function In(t, e) {
    return t = t && !k(t) ? [t] : t, e ? t ? t.concat(e) : k(e) ? e : [e] : t;
  }

  function En(e, n, i) {
    var t,
        r,
        o = {};
    if ($(n) && (n = n.options), n.extends && (e = En(e, n.extends, i)), n.mixins) for (var s = 0, a = n.mixins.length; s < a; s++) e = En(e, n.mixins[s], i);

    for (t in e) u(t);

    for (r in n) h(e, r) || u(r);

    function u(t) {
      o[t] = ($n[t] || function (t, e) {
        return O(e) ? t : e;
      })(e[t], n[t], i);
    }

    return o;
  }

  function Tn(t, e) {
    var n;
    void 0 === e && (e = []);

    try {
      return t ? g(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function (t, e) {
        var n = e.split(/:(.*)/),
            e = n[0],
            n = n[1];
        return e && !O(n) && (t[e.trim()] = n.trim()), t;
      }, {}) : {};
    } catch (t) {
      return {};
    }
  }

  function Cn(t) {
    if (zn(t) && Bn(t, {
      func: "playVideo",
      method: "play"
    }), Mn(t)) try {
      t.play().catch(tt);
    } catch (t) {}
  }

  function _n(t) {
    zn(t) && Bn(t, {
      func: "pauseVideo",
      method: "pause"
    }), Mn(t) && t.pause();
  }

  function An(t) {
    zn(t) && Bn(t, {
      func: "mute",
      method: "setVolume",
      value: 0
    }), Mn(t) && (t.muted = !0);
  }

  function Mn(t) {
    return t && "VIDEO" === t.tagName;
  }

  function zn(t) {
    return t && "IFRAME" === t.tagName && (Dn(t) || Nn(t));
  }

  function Dn(t) {
    return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }

  function Nn(t) {
    return !!t.src.match(/vimeo\.com\/video\/.*/);
  }

  function Bn(t, e) {
    (function (e) {
      if (e[On]) return e[On];
      var n,
          i = Dn(e),
          r = Nn(e),
          o = ++Hn;
      return e[On] = new se(function (t) {
        i && Gt(e, "load", function () {
          function t() {
            return Pn(e, {
              event: "listening",
              id: o
            });
          }

          n = setInterval(t, 100), t();
        }), Gt(window, "message", t, !1, function (t) {
          var e = t.data;

          try {
            return (e = JSON.parse(e)) && (i && e.id === o && "onReady" === e.event || r && Number(e.player_id) === o);
          } catch (t) {}
        }), e.src = e.src + (b(e.src, "?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + o);
      }).then(function () {
        return clearInterval(n);
      });
    })(t).then(function () {
      return Pn(t, e);
    });
  }

  function Pn(t, e) {
    try {
      t.contentWindow.postMessage(JSON.stringify(X({
        event: "command"
      }, e)), "*");
    } catch (t) {}
  }

  $n.events = $n.created = $n.beforeConnect = $n.connected = $n.beforeDisconnect = $n.disconnected = $n.destroy = In, $n.args = function (t, e) {
    return !1 !== e && In(e || t);
  }, $n.update = function (t, e) {
    return J(In(t, $(e) ? {
      read: e
    } : e), "order");
  }, $n.props = function (t, e) {
    return k(e) && (e = e.reduce(function (t, e) {
      return t[e] = String, t;
    }, {})), $n.methods(t, e);
  }, $n.computed = $n.methods = function (t, e) {
    return e ? t ? X({}, t, e) : e : t;
  }, $n.data = function (e, n, t) {
    return t ? Sn(e, n, t) : n ? e ? function (t) {
      return Sn(e, n, t);
    } : n : e;
  };
  var On = "_ukPlayer",
      Hn = 0;

  function Ln(t, r, o) {
    return void 0 === r && (r = 0), void 0 === o && (o = 0), !!jt(t) && et.apply(void 0, Vn(t).map(function (t) {
      var e = sn(Rn(t)),
          n = e.top,
          i = e.left,
          t = e.bottom,
          e = e.right;
      return {
        top: n - r,
        left: i - o,
        bottom: t + r,
        right: e + o
      };
    }).concat(sn(t)));
  }

  function jn(t, e) {
    (t = (T(t) || C(t) ? qn : W)(t)).scrollTop = e;
  }

  function Fn(s, t) {
    void 0 === t && (t = {});
    var a = t.offset;

    if (void 0 === a && (a = 0), jt(s)) {
      var c = Vn(s),
          h = 0;
      return c.reduce(function (t, e, n) {
        var i = e.scrollTop,
            r = e.scrollHeight,
            o = Rn(e),
            r = r - cn(o),
            u = Math.ceil(an(c[n - 1] || s, o).top - a) + h + i;
        return r < u ? (h = u - r, u = r) : h = 0, function () {
          return s = e, a = u - i, new se(function (n) {
            var t,
                i = s.scrollTop,
                r = (t = Math.abs(a), 40 * Math.pow(t, .375)),
                o = Date.now();
            !function t() {
              var e,
                  e = (e = Q((Date.now() - o) / r), .5 * (1 - Math.cos(Math.PI * e)));
              jn(s, i + a * e), 1 != e ? requestAnimationFrame(t) : n();
            }();
          }).then(t);
          var s, a;
        };
      }, function () {
        return se.resolve();
      })();
    }
  }

  function Wn(t, e) {
    if (void 0 === e && (e = 0), !jt(t)) return 0;
    var n = Vn(t, /auto|scroll/)[0],
        i = n.scrollHeight,
        r = n.scrollTop,
        o = Rn(n),
        s = cn(o),
        o = un(t)[0] - r - un(n)[0],
        n = Math.min(s, o + r);
    return Q(-1 * (o - n) / Math.min(cn(t) + e + n, i - (o + r), i - s));
  }

  function Vn(t, e, n) {
    void 0 === e && (e = /auto|scroll|hidden/), void 0 === n && (n = !1);
    var i = qn(t),
        r = qt(t).reverse(),
        t = y(r = r.slice(r.indexOf(i) + 1), function (t) {
      return "fixed" === Ve(t, "position");
    });
    return ~t && (r = r.slice(t)), [i].concat(r.filter(function (t) {
      return e.test(Ve(t, "overflow")) && (!n || t.scrollHeight > cn(t));
    })).reverse();
  }

  function Rn(t) {
    return t === qn(t) ? window : t;
  }

  function qn(t) {
    t = R(t).document;
    return t.scrollingElement || t.documentElement;
  }

  var Un = {
    width: ["x", "left", "right"],
    height: ["y", "top", "bottom"]
  };

  function Yn(t, e, h, l, d, n, i, r) {
    h = Gn(h), l = Gn(l);
    var f = {
      element: h,
      target: l
    };
    if (!t || !e) return f;
    var o,
        p = sn(t),
        m = sn(e),
        g = m;
    return Xn(g, h, p, -1), Xn(g, l, m, 1), d = Kn(d, p.width, p.height), n = Kn(n, m.width, m.height), d.x += n.x, d.y += n.y, g.left += d.x, g.top += d.y, i && (o = Vn(e).map(Rn), r && b(o, r) && o.unshift(r), o = o.map(function (t) {
      return sn(t);
    }), K(Un, function (t, s) {
      var a = t[0],
          u = t[1],
          c = t[2];
      !0 !== i && !b(i, a) || o.some(function (n) {
        var t = h[a] === u ? -p[s] : h[a] === c ? p[s] : 0,
            e = l[a] === u ? m[s] : l[a] === c ? -m[s] : 0;

        if (g[u] < n[u] || g[u] + p[s] > n[c]) {
          var i = p[s] / 2,
              r = "center" === l[a] ? -m[s] / 2 : 0;
          return "center" === h[a] && (o(i, r) || o(-i, -r)) || o(t, e);
        }

        function o(e, t) {
          t = j((g[u] + e + t - 2 * d[a]).toFixed(4));
          if (t >= n[u] && t + p[s] <= n[c]) return g[u] = t, ["element", "target"].forEach(function (t) {
            f[t][a] = e ? f[t][a] === Un[s][1] ? Un[s][2] : Un[s][1] : f[t][a];
          }), !0;
        }
      });
    })), sn(t, g), f;
  }

  function Xn(r, o, s, a) {
    K(Un, function (t, e) {
      var n = t[0],
          i = t[1],
          t = t[2];
      o[n] === t ? r[i] += s[e] * a : "center" === o[n] && (r[i] += s[e] * a / 2);
    });
  }

  function Gn(t) {
    var e = /left|center|right/,
        n = /top|center|bottom/;
    return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
      x: e.test(t[0]) ? t[0] : "center",
      y: n.test(t[1]) ? t[1] : "center"
    };
  }

  function Kn(t, e, n) {
    var i = (t || "").split(" "),
        t = i[0],
        i = i[1];
    return {
      x: t ? j(t) * (c(t, "%") ? e / 100 : 1) : 0,
      y: i ? j(i) * (c(i, "%") ? n / 100 : 1) : 0
    };
  }

  function Jn(t) {
    return !(!g(t, "bs-") && !g(t, "data-bs-")) && f(t.replace("data-bs-", "").replace("bs-", ""));
  }

  function Zn(t) {
    this._init(t);
  }

  var Qn, ti, ei, ni, ii, ri, oi, si, ai;

  function ui(t, e) {
    if (t) for (var n in t) t[n]._connected && t[n]._callUpdate(e);
  }

  function ci(t, e) {
    var n = {},
        i = t.args;
    void 0 === i && (i = []);
    var r = t.props;
    void 0 === r && (r = {});
    var o,
        s = t.el;
    if (!r) return n;

    for (o in r) {
      var a = d(o),
          u = at(s, a);
      O(u) || (u = r[o] === Boolean && "" === u || li(r[o], u), ("target" !== a || u && !g(u, "_")) && (n[o] = u));
    }

    var c,
        h = Tn(at(s, e), i);

    for (c in h) {
      var l = f(c);
      void 0 !== r[l] && (n[l] = li(r[l], h[c]));
    }

    return n;
  }

  function hi(e, n, i) {
    E(n) || (n = {
      name: i,
      handler: n
    });
    var t = n.name,
        r = n.el,
        o = n.handler,
        s = n.capture,
        a = n.passive,
        u = n.delegate,
        c = n.filter,
        h = n.self,
        r = $(r) ? r.call(e) : r || e.$el;
    k(r) ? r.forEach(function (t) {
      return hi(e, X({}, n, {
        el: t
      }), i);
    }) : !r || c && !c.call(e) || e._events.push(Yt(r, t, u ? D(u) ? u : u.call(e) : null, D(o) ? e[o] : o.bind(e), {
      passive: a,
      capture: s,
      self: h
    }));
  }

  function li(t, e) {
    return t === Boolean ? H(e) : t === Number ? L(e) : "list" === t ? k(n = e) ? n : D(n) ? n.split(/,(?![^(]*\))/).map(function (t) {
      return B(t) ? L(t) : H(t.trim());
    }) : [n] : t ? t(e) : e;
    var n;
  }

  Zn.util = Object.freeze({
    __proto__: null,
    ajax: le,
    getImage: de,
    transition: Je,
    Transition: Ze,
    animate: tn,
    Animation: nn,
    attr: rt,
    hasAttr: ot,
    removeAttr: st,
    data: at,
    addClass: De,
    removeClass: Ne,
    removeClasses: Be,
    replaceClass: Pe,
    hasClass: Oe,
    toggleClass: He,
    dimensions: on,
    offset: sn,
    position: an,
    offsetPosition: un,
    height: cn,
    width: hn,
    boxModelAdjust: dn,
    flipPosition: fn,
    toPx: pn,
    ready: fe,
    index: pe,
    getIndex: me,
    empty: ge,
    html: ve,
    prepend: function (e, t) {
      return (e = Ae(e)).hasChildNodes() ? ye(t, function (t) {
        return e.insertBefore(t, e.firstChild);
      }) : we(e, t);
    },
    append: we,
    before: be,
    after: xe,
    remove: ke,
    wrapAll: $e,
    wrapInner: Se,
    unwrap: Ie,
    fragment: Ce,
    apply: _e,
    $: Ae,
    $$: Me,
    inBrowser: ut,
    isIE: ct,
    isRtl: ht,
    hasTouch: ft,
    pointerDown: pt,
    pointerMove: mt,
    pointerUp: gt,
    pointerEnter: vt,
    pointerLeave: wt,
    pointerCancel: bt,
    on: Yt,
    off: Xt,
    once: Gt,
    trigger: Kt,
    createEvent: Jt,
    toEventTargets: ne,
    isTouch: ie,
    getEventPos: re,
    fastdom: gn,
    isVoidElement: Lt,
    isVisible: jt,
    selInput: Ft,
    isInput: Wt,
    filter: Vt,
    within: Rt,
    parents: qt,
    children: Ut,
    hasOwn: h,
    hyphenate: d,
    camelize: f,
    ucfirst: p,
    startsWith: g,
    endsWith: c,
    includes: b,
    findIndex: y,
    isArray: k,
    isFunction: $,
    isObject: S,
    isPlainObject: E,
    isWindow: T,
    isDocument: C,
    isNode: _,
    isElement: A,
    isBoolean: z,
    isString: D,
    isNumber: N,
    isNumeric: B,
    isEmpty: P,
    isUndefined: O,
    toBoolean: H,
    toNumber: L,
    toFloat: j,
    toArray: F,
    toNode: W,
    toNodes: V,
    toWindow: R,
    toMs: q,
    isEqual: U,
    swap: Y,
    assign: X,
    last: G,
    each: K,
    sortBy: J,
    uniqueBy: Z,
    clamp: Q,
    noop: tt,
    intersectRect: et,
    pointInRect: nt,
    Dimensions: it,
    MouseTracker: kn,
    mergeOptions: En,
    parseOptions: Tn,
    play: Cn,
    pause: _n,
    mute: An,
    positionAt: Yn,
    Promise: se,
    Deferred: oe,
    query: xt,
    queryAll: yt,
    find: $t,
    findAll: St,
    matches: zt,
    closest: Nt,
    parent: Bt,
    escape: Ot,
    css: Ve,
    getStyles: Re,
    getStyle: qe,
    getCssVar: Ye,
    propName: Ge,
    isInView: Ln,
    scrollTop: jn,
    scrollIntoView: Fn,
    scrolledOver: Wn,
    scrollParents: Vn,
    getViewport: Rn
  }), Zn.data = "__uikit__", Zn.prefix = "bs-", Zn.options = {}, Zn.version = "3.6.3", ei = (Qn = Zn).data, Qn.use = function (t) {
    if (!t.installed) return t.call(null, this), t.installed = !0, this;
  }, Qn.mixin = function (t, e) {
    (e = (D(e) ? Qn.component(e) : e) || this).options = En(e.options, t);
  }, Qn.extend = function (t) {
    t = t || {};

    function e(t) {
      this._init(t);
    }

    return ((e.prototype = Object.create(this.prototype)).constructor = e).options = En(this.options, t), e.super = this, e.extend = this.extend, e;
  }, Qn.update = function (t, e) {
    qt(t = t ? W(t) : document.body).reverse().forEach(function (t) {
      return ui(t[ei], e);
    }), _e(t, function (t) {
      return ui(t[ei], e);
    });
  }, Object.defineProperty(Qn, "container", {
    get: function () {
      return ti || document.body;
    },
    set: function (t) {
      ti = Ae(t);
    }
  }), (ni = Zn).prototype._callHook = function (t) {
    var e = this,
        t = this.$options[t];
    t && t.forEach(function (t) {
      return t.call(e);
    });
  }, ni.prototype._callConnected = function () {
    this._connected || (this._data = {}, this._computeds = {}, this._frames = {
      reads: {},
      writes: {}
    }, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate());
  }, ni.prototype._callDisconnected = function () {
    this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1);
  }, ni.prototype._callUpdate = function (t) {
    var r = this;
    void 0 === t && (t = "update");
    var o = t.type || t;
    b(["update", "resize"], o) && this._callWatches();
    var e = this.$options.update,
        t = this._frames,
        s = t.reads,
        a = t.writes;
    e && e.forEach(function (t, e) {
      var n = t.read,
          i = t.write,
          t = t.events;
      "update" !== o && !b(t, o) || (n && !b(gn.reads, s[e]) && (s[e] = gn.read(function () {
        var t = r._connected && n.call(r, r._data, o);
        !1 === t && i ? gn.clear(a[e]) : E(t) && X(r._data, t);
      })), i && !b(gn.writes, a[e]) && (a[e] = gn.write(function () {
        return r._connected && i.call(r, r._data, o);
      })));
    });
  }, ni.prototype._callWatches = function () {
    var a,
        u = this,
        c = this._frames;
    c._watch || (a = !h(c, "_watch"), c._watch = gn.read(function () {
      if (u._connected) {
        var t,
            e = u.$options.computed,
            n = u._computeds;

        for (t in e) {
          var i = h(n, t),
              r = n[t];
          delete n[t];
          var o = e[t],
              s = o.watch,
              o = o.immediate;
          s && (a && o || i && !U(r, u[t])) && s.call(u, u[t], r);
        }

        c._watch = null;
      }
    }));
  }, ri = 0, (ii = Zn).prototype._init = function (t) {
    (t = t || {}).data = function (t, e) {
      var n = t.data,
          i = (t.el, e.args),
          r = e.props;
      void 0 === r && (r = {});
      if (n = k(n) ? P(i) ? void 0 : n.slice(0, i.length).reduce(function (t, e, n) {
        return E(e) ? X(t, e) : t[i[n]] = e, t;
      }, {}) : n) for (var o in n) O(n[o]) ? delete n[o] : n[o] = r[o] ? li(r[o], n[o]) : n[o];
      return n;
    }(t, this.constructor.options), this.$options = En(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._uid = ri++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el);
  }, ii.prototype._initData = function () {
    var t,
        e = this.$options.data;

    for (t in void 0 === e && (e = {}), e) this.$props[t] = this[t] = e[t];
  }, ii.prototype._initMethods = function () {
    var t = this.$options.methods;
    if (t) for (var e in t) this[e] = t[e].bind(this);
  }, ii.prototype._initComputeds = function () {
    var t = this.$options.computed;
    if (this._computeds = {}, t) for (var e in t) !function (i, r, o) {
      Object.defineProperty(i, r, {
        enumerable: !0,
        get: function () {
          var t = i._computeds,
              e = i.$props,
              n = i.$el;
          return h(t, r) || (t[r] = (o.get || o).call(i, e, n)), t[r];
        },
        set: function (t) {
          var e = i._computeds;
          e[r] = o.set ? o.set.call(i, t) : t, O(e[r]) && delete e[r];
        }
      });
    }(this, e, t[e]);
  }, ii.prototype._initProps = function (t) {
    for (var e in t = t || ci(this.$options, this.$name)) O(t[e]) || (this.$props[e] = t[e]);

    var n = [this.$options.computed, this.$options.methods];

    for (e in this.$props) e in t && function (t, e) {
      return t.every(function (t) {
        return !t || !h(t, e);
      });
    }(n, e) && (this[e] = this.$props[e]);
  }, ii.prototype._initEvents = function () {
    var n = this;
    this._events = [];
    var t = this.$options.events;
    t && t.forEach(function (t) {
      if (h(t, "handler")) hi(n, t);else for (var e in t) hi(n, t[e], e);
    });
  }, ii.prototype._unbindEvents = function () {
    this._events.forEach(function (t) {
      return t();
    }), delete this._events;
  }, ii.prototype._initObserver = function () {
    var i = this,
        t = this.$options,
        r = t.attrs,
        e = t.props,
        t = t.el;
    !this._observer && e && !1 !== r && (r = k(r) ? r : Object.keys(e), this._observer = new MutationObserver(function (t) {
      var n = ci(i.$options, i.$name);
      t.some(function (t) {
        var e = t.attributeName,
            t = e.replace("data-", "");
        return (t === i.$name ? r : [f(t), f(e)]).some(function (t) {
          return !O(n[t]) && n[t] !== i.$props[t];
        });
      }) && i.$reset();
    }), e = r.map(d).concat(this.$name), this._observer.observe(t, {
      attributes: !0,
      attributeFilter: e.concat(e.map(function (t) {
        return "data-" + t;
      }))
    }));
  }, si = (oi = Zn).data, ai = {}, oi.component = function (s, t) {
    var e = d(s);
    if (s = f(e), !t) return E(ai[s]) && (ai[s] = oi.extend(ai[s])), ai[s];

    oi[s] = function (t, n) {
      for (var e = arguments.length, i = Array(e); e--;) i[e] = arguments[e];

      var r = oi.component(s);
      return r.options.functional ? new r({
        data: E(t) ? t : [].concat(i)
      }) : t ? Me(t).map(o)[0] : o(t);

      function o(t) {
        var e = oi.getComponent(t, s);

        if (e) {
          if (!n) return e;
          e.$destroy();
        }

        return new r({
          el: t,
          data: n
        });
      }
    };

    var n = E(t) ? X({}, t) : t.options;
    return n.name = s, n.install && n.install(oi, n, s), oi._initialized && !n.functional && gn.read(function () {
      return oi[s]("[bs-" + e + "],[data-bs-" + e + "]");
    }), ai[s] = E(t) ? n : t;
  }, oi.getComponents = function (t) {
    return t && t[si] || {};
  }, oi.getComponent = function (t, e) {
    return oi.getComponents(t)[e];
  }, oi.connect = function (t) {
    if (t[si]) for (var e in t[si]) t[si][e]._callConnected();

    for (var n = 0; n < t.attributes.length; n++) {
      var i = Jn(t.attributes[n].name);
      i && i in ai && oi[i](t);
    }
  }, oi.disconnect = function (t) {
    for (var e in t[si]) t[si][e]._callDisconnected();
  }, function (i) {
    var r = i.data;
    i.prototype.$create = function (t, e, n) {
      return i[t](e, n);
    }, i.prototype.$mount = function (t) {
      var e = this.$options.name;
      t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, Rt(t, document) && this._callConnected());
    }, i.prototype.$reset = function () {
      this._callDisconnected(), this._callConnected();
    }, i.prototype.$destroy = function (t) {
      void 0 === t && (t = !1);
      var e = this.$options,
          n = e.el,
          e = e.name;
      n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][e], P(n[r]) || delete n[r], t && ke(this.$el));
    }, i.prototype.$emit = function (t) {
      this._callUpdate(t);
    }, i.prototype.$update = function (t, e) {
      void 0 === t && (t = this.$el), i.update(t, e);
    }, i.prototype.$getComponent = i.getComponent;
    var e = {};
    Object.defineProperties(i.prototype, {
      $container: Object.getOwnPropertyDescriptor(i, "container"),
      $name: {
        get: function () {
          var t = this.$options.name;
          return e[t] || (e[t] = i.prefix + d(t)), e[t];
        }
      }
    });
  }(Zn);
  var di = {
    connected: function () {
      Oe(this.$el, this.$name) || De(this.$el, this.$name);
    }
  },
      fi = {
    props: {
      cls: Boolean,
      animation: "list",
      duration: Number,
      origin: String,
      transition: String
    },
    data: {
      cls: !1,
      animation: [!1],
      duration: 200,
      origin: !1,
      transition: "linear",
      clsEnter: "bs-togglabe-enter",
      clsLeave: "bs-togglabe-leave",
      initProps: {
        overflow: "",
        height: "",
        paddingTop: "",
        paddingBottom: "",
        marginTop: "",
        marginBottom: ""
      },
      hideProps: {
        overflow: "hidden",
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    computed: {
      hasAnimation: function (t) {
        return !!t.animation[0];
      },
      hasTransition: function (t) {
        t = t.animation;
        return this.hasAnimation && !0 === t[0];
      }
    },
    methods: {
      toggleElement: function (t, i, r) {
        var s = this;
        return se.all(V(t).map(function (t) {
          var e = z(i) ? i : !s.isToggled(t);
          if (!Kt(t, "before" + (e ? "show" : "hide"), [s])) return se.reject();
          var o,
              n = ($(r) ? r : !1 !== r && s.hasAnimation ? s.hasTransition ? pi(s) : (o = s, function (t, e) {
            nn.cancel(t);
            var n = o.animation,
                i = o.duration,
                r = o._toggle;
            return e ? (r(t, !0), nn.in(t, n[0], i, o.origin)) : nn.out(t, n[1] || n[0], i, o.origin).then(function () {
              return r(t, !1);
            });
          }) : s._toggle)(t, e) || se.resolve();
          return De(t, e ? s.clsEnter : s.clsLeave), Kt(t, e ? "show" : "hide", [s]), n.catch(tt).then(function () {
            return Ne(t, e ? s.clsEnter : s.clsLeave);
          }), n.then(function () {
            Ne(t, e ? s.clsEnter : s.clsLeave), Kt(t, e ? "shown" : "hidden", [s]), s.$update(t);
          }, tt);
        }));
      },
      isToggled: function (t) {
        return void 0 === t && (t = this.$el), !!Oe(this.clsEnter) || !Oe(this.clsLeave) && (this.cls ? Oe(t, this.cls.split(" ")[0]) : !ot(t, "hidden"));
      },
      _toggle: function (t, e) {
        var n;
        t && (e = Boolean(e), this.cls ? (n = b(this.cls, " ") || e !== Oe(t, this.cls)) && He(t, this.cls, b(this.cls, " ") ? void 0 : e) : (n = e === t.hidden) && (t.hidden = !e), Me("[autofocus]", t).some(function (t) {
          return jt(t) ? t.focus() || !0 : t.blur();
        }), n && (Kt(t, "toggled", [e, this]), this.$update(t)));
      }
    }
  };

  function pi(t) {
    var o = t.isToggled,
        s = t.duration,
        a = t.initProps,
        u = t.hideProps,
        c = t.transition,
        h = t._toggle;
    return function (t, e) {
      var n = Ze.inProgress(t),
          i = t.hasChildNodes ? j(Ve(t.firstElementChild, "marginTop")) + j(Ve(t.lastElementChild, "marginBottom")) : 0,
          r = jt(t) ? cn(t) + (n ? 0 : i) : 0;
      Ze.cancel(t), o(t) || h(t, !0), cn(t, ""), gn.flush();
      i = cn(t) + (n ? 0 : i);
      return cn(t, r), (e ? Ze.start(t, X({}, a, {
        overflow: "hidden",
        height: i
      }), Math.round(s * (1 - r / i)), c) : Ze.start(t, u, Math.round(s * (r / i)), c).then(function () {
        return h(t, !1);
      })).then(function () {
        return Ve(t, a);
      });
    };
  }

  var mi = {
    mixins: [di, fi],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "bs-open",
      toggle: "> .bs-accordion-title",
      content: "> .bs-accordion-content",
      transition: "ease",
      offset: 0
    },
    computed: {
      items: {
        get: function (t, e) {
          return Me(t.targets, e);
        },
        watch: function (t, e) {
          var n = this;
          t.forEach(function (t) {
            return gi(Ae(n.content, t), !Oe(t, n.clsOpen));
          }), e || Oe(t, this.clsOpen) || (t = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0]) && this.toggle(t, !1);
        },
        immediate: !0
      },
      toggles: function (t) {
        var e = t.toggle;
        return this.items.map(function (t) {
          return Ae(e, t);
        });
      }
    },
    events: [{
      name: "click",
      el: function () {
        return this.toggles;
      },
      handler: function (t) {
        t.preventDefault(), this.toggle(pe(this.toggles, t.target));
      }
    }],
    methods: {
      toggle: function (t, r) {
        var o = this,
            e = [this.items[me(t, this.items)]],
            t = Vt(this.items, "." + this.clsOpen);
        this.multiple || b(t, e[0]) || (e = e.concat(t)), !this.collapsible && t.length < 2 && !Vt(e, ":not(." + this.clsOpen + ")").length || e.forEach(function (t) {
          return o.toggleElement(t, !Oe(t, o.clsOpen), function (e, n) {
            He(e, o.clsOpen, n), rt(Ae(o.$props.toggle, e), "aria-expanded", n);
            var i = Ae((e._wrapper ? "> * " : "") + o.content, e);
            if (!1 !== r && o.hasTransition) return e._wrapper || (e._wrapper = $e(i, "<div" + (n ? " hidden" : "") + ">")), gi(i, !1), pi(o)(e._wrapper, n).then(function () {
              var t;
              gi(i, !n), delete e._wrapper, Ie(i), n && (Ln(t = Ae(o.$props.toggle, e)) || Fn(t, {
                offset: o.offset
              }));
            });
            gi(i, !n);
          });
        });
      }
    }
  };

  function gi(t, e) {
    t && (t.hidden = e);
  }

  var vi = {
    mixins: [di, fi],
    args: "animation",
    props: {
      close: String
    },
    data: {
      animation: [!0],
      selClose: ".bs-alert-close",
      duration: 150,
      hideProps: X({
        opacity: 0
      }, fi.data.hideProps)
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.selClose;
      },
      handler: function (t) {
        t.preventDefault(), this.close();
      }
    }],
    methods: {
      close: function () {
        var t = this;
        this.toggleElement(this.$el).then(function () {
          return t.$destroy(!0);
        });
      }
    }
  },
      wi = {
    args: "autoplay",
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: !1,
      autoplay: !0
    },
    computed: {
      inView: function (t) {
        return "inview" === t.autoplay;
      }
    },
    connected: function () {
      this.inView && !ot(this.$el, "preload") && (this.$el.preload = "none"), this.automute && An(this.$el);
    },
    update: {
      read: function () {
        return {
          visible: jt(this.$el) && "hidden" !== Ve(this.$el, "visibility"),
          inView: this.inView && Ln(this.$el)
        };
      },
      write: function (t) {
        var e = t.visible,
            t = t.inView;
        !e || this.inView && !t ? _n(this.$el) : (!0 === this.autoplay || this.inView && t) && Cn(this.$el);
      },
      events: ["resize", "scroll"]
    }
  },
      bi = {
    mixins: [di, wi],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: !0
    },
    update: {
      read: function () {
        var t = this.$el,
            e = function (t) {
          for (; t = Bt(t);) if ("static" !== Ve(t, "position")) return t;
        }(t) || Bt(t),
            n = e.offsetHeight,
            e = e.offsetWidth,
            n = it.cover({
          width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
          height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
        }, {
          width: e + (e % 2 ? 1 : 0),
          height: n + (n % 2 ? 1 : 0)
        });

        return !(!n.width || !n.height) && n;
      },
      write: function (t) {
        var e = t.height,
            t = t.width;
        Ve(this.$el, {
          height: e,
          width: t
        });
      },
      events: ["resize"]
    }
  };
  var xi,
      yi = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      clsPos: String
    },
    data: {
      pos: "bottom-" + (ht ? "right" : "left"),
      flip: !0,
      offset: !1,
      clsPos: ""
    },
    computed: {
      pos: function (t) {
        t = t.pos;
        return (t + (b(t, "-") ? "" : "-center")).split("-");
      },
      dir: function () {
        return this.pos[0];
      },
      align: function () {
        return this.pos[1];
      }
    },
    methods: {
      positionAt: function (t, e, n) {
        Be(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
        var i,
            r = this.offset,
            o = this.getAxis();
        B(r) || (r = (i = Ae(r)) ? sn(i)["x" === o ? "left" : "top"] - sn(e)["x" === o ? "right" : "bottom"] : 0);
        r = Yn(t, e, "x" === o ? fn(this.dir) + " " + this.align : this.align + " " + fn(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target, n = r.x, r = r.y;
        this.dir = "x" === o ? n : r, this.align = "x" === o ? r : n, He(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset);
      },
      getAxis: function () {
        return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
      }
    }
  },
      ki = {
    mixins: [yi, fi],
    args: "pos",
    props: {
      mode: "list",
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      clsDrop: String
    },
    data: {
      mode: ["click", "hover"],
      toggle: "- *",
      boundary: ut && window,
      boundaryAlign: !1,
      delayShow: 0,
      delayHide: 800,
      clsDrop: !1,
      animation: ["bs-animation-fade"],
      cls: "bs-open"
    },
    computed: {
      boundary: function (t, e) {
        return xt(t.boundary, e);
      },
      clsDrop: function (t) {
        return t.clsDrop || "bs-" + this.$options.name;
      },
      clsPos: function () {
        return this.clsDrop;
      }
    },
    created: function () {
      this.tracker = new kn();
    },
    connected: function () {
      De(this.$el, this.clsDrop);
      var t = this.$props.toggle;
      this.toggle = t && this.$create("toggle", xt(t, this.$el), {
        target: this.$el,
        mode: this.mode
      });
    },
    disconnected: function () {
      this.isActive() && (xi = null);
    },
    events: [{
      name: "click",
      delegate: function () {
        return "." + this.clsDrop + "-close";
      },
      handler: function (t) {
        t.preventDefault(), this.hide(!1);
      }
    }, {
      name: "click",
      delegate: function () {
        return 'a[href^="#"]';
      },
      handler: function (t) {
        var e = t.defaultPrevented,
            t = t.current.hash;
        e || !t || Rt(t, this.$el) || this.hide(!1);
      }
    }, {
      name: "beforescroll",
      handler: function () {
        this.hide(!1);
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function (t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1);
      }
    }, {
      name: "toggleshow",
      self: !0,
      handler: function (t, e) {
        t.preventDefault(), this.show(e);
      }
    }, {
      name: "togglehide",
      self: !0,
      handler: function (t) {
        t.preventDefault(), this.hide();
      }
    }, {
      name: vt,
      filter: function () {
        return b(this.mode, "hover");
      },
      handler: function (t) {
        ie(t) || this.clearTimers();
      }
    }, {
      name: wt,
      filter: function () {
        return b(this.mode, "hover");
      },
      handler: function (t) {
        !ie(t) && t.relatedTarget && this.hide();
      }
    }, {
      name: "toggled",
      self: !0,
      handler: function (t, e) {
        e && (this.clearTimers(), this.position());
      }
    }, {
      name: "show",
      self: !0,
      handler: function () {
        var r = this;
        (xi = this).tracker.init(), Gt(this.$el, "hide", Yt(document, pt, function (t) {
          var i = t.target;
          return !Rt(i, r.$el) && Gt(document, gt + " " + bt + " scroll", function (t) {
            var e = t.defaultPrevented,
                n = t.type,
                t = t.target;
            e || n !== gt || i !== t || r.toggle && Rt(i, r.toggle.$el) || r.hide(!1);
          }, !0);
        }), {
          self: !0
        }), Gt(this.$el, "hide", Yt(document, "keydown", function (t) {
          27 === t.keyCode && r.hide(!1);
        }), {
          self: !0
        });
      }
    }, {
      name: "beforehide",
      self: !0,
      handler: function () {
        this.clearTimers();
      }
    }, {
      name: "hide",
      handler: function (t) {
        t = t.target;
        this.$el === t ? (xi = this.isActive() ? null : xi, this.tracker.cancel()) : xi = null === xi && Rt(t, this.$el) && this.isToggled() ? this : xi;
      }
    }],
    update: {
      write: function () {
        this.isToggled() && !Oe(this.$el, this.clsEnter) && this.position();
      },
      events: ["resize"]
    },
    methods: {
      show: function (t, e) {
        var n,
            i = this;

        if (void 0 === t && (t = this.toggle), void 0 === e && (e = !0), this.isToggled() && t && this.toggle && t.$el !== this.toggle.$el && this.hide(!1), this.toggle = t, this.clearTimers(), !this.isActive()) {
          if (xi) {
            if (e && xi.isDelaying) return void (this.showTimer = setTimeout(this.show, 10));

            for (; xi && n !== xi && !Rt(this.$el, xi.$el);) (n = xi).hide(!1);
          }

          this.showTimer = setTimeout(function () {
            return !i.isToggled() && i.toggleElement(i.$el, !0);
          }, e && this.delayShow || 0);
        }
      },
      hide: function (t) {
        var e = this;
        void 0 === t && (t = !0);

        function n() {
          return e.toggleElement(e.$el, !1, !1);
        }

        var i, r;
        this.clearTimers(), this.isDelaying = (i = this.$el, r = [], _e(i, function (t) {
          return "static" !== Ve(t, "position") && r.push(t);
        }), r.some(function (t) {
          return e.tracker.movesTo(t);
        })), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n();
      },
      clearTimers: function () {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
      },
      isActive: function () {
        return xi === this;
      },
      position: function () {
        Ne(this.$el, this.clsDrop + "-stack"), He(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
        var t,
            e = sn(this.boundary),
            n = this.boundaryAlign ? e : sn(this.toggle.$el);
        "justify" === this.align ? (t = "y" === this.getAxis() ? "width" : "height", Ve(this.$el, t, n[t])) : this.$el.offsetWidth > Math.max(e.right - n.left, n.right - e.left) && De(this.$el, this.clsDrop + "-stack"), this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);
      }
    }
  };
  var $i = {
    mixins: [di],
    args: "target",
    props: {
      target: Boolean
    },
    data: {
      target: !1
    },
    computed: {
      input: function (t, e) {
        return Ae(Ft, e);
      },
      state: function () {
        return this.input.nextElementSibling;
      },
      target: function (t, e) {
        t = t.target;
        return t && (!0 === t && Bt(this.input) === e && this.input.nextElementSibling || xt(t, e));
      }
    },
    update: function () {
      var t,
          e,
          n = this.target,
          i = this.input;
      !n || n[e = Wt(n) ? "value" : "textContent"] !== (i = i.files && i.files[0] ? i.files[0].name : zt(i, "select") && (t = Me("option", i).filter(function (t) {
        return t.selected;
      })[0]) ? t.textContent : i.value) && (n[e] = i);
    },
    events: [{
      name: "change",
      handler: function () {
        this.$update();
      }
    }, {
      name: "reset",
      el: function () {
        return Nt(this.$el, "form");
      },
      handler: function () {
        this.$update();
      }
    }]
  },
      Si = {
    update: {
      read: function (t) {
        var e = Ln(this.$el);
        if (!e || t.isInView === e) return !1;
        t.isInView = e;
      },
      write: function () {
        this.$el.src = "" + this.$el.src;
      },
      events: ["scroll", "resize"]
    }
  },
      Ii = {
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: "bs-margin-small-top",
      firstColumn: "bs-first-column"
    },
    update: {
      read: function () {
        var n,
            t = Ei(this.$el.children);
        return {
          rows: t,
          columns: (n = [[]], t.forEach(function (t) {
            return Ti(t, "left", "right").forEach(function (t, e) {
              return n[e] = n[e] ? n[e].concat(t) : t;
            });
          }), ht ? n.reverse() : n)
        };
      },
      write: function (t) {
        var n = this,
            i = t.columns;
        t.rows.forEach(function (t, e) {
          return t.forEach(function (t) {
            He(t, n.margin, 0 !== e), He(t, n.firstColumn, b(i[0], t));
          });
        });
      },
      events: ["resize"]
    }
  };

  function Ei(t) {
    return Ti(t, "top", "bottom");
  }

  function Ti(t, e, n) {
    for (var i = [[]], r = 0; r < t.length; r++) {
      var o = t[r];
      if (jt(o)) for (var s = Ci(o), a = i.length - 1; 0 <= a; a--) {
        var u = i[a];

        if (!u[0]) {
          u.push(o);
          break;
        }

        var c = void 0,
            c = u[0].offsetParent === o.offsetParent ? Ci(u[0]) : (s = Ci(o, !0), Ci(u[0], !0));

        if (s[e] >= c[n] - 1 && s[e] !== c[e]) {
          i.push([o]);
          break;
        }

        if (s[n] - 1 > c[e] || s[e] === c[e]) {
          u.push(o);
          break;
        }

        if (0 === a) {
          i.unshift([o]);
          break;
        }
      }
    }

    return i;
  }

  function Ci(t, e) {
    void 0 === e && (e = !1);
    var n = t.offsetTop,
        i = t.offsetLeft,
        r = t.offsetHeight,
        o = t.offsetWidth;
    return e && (n = (t = un(t))[0], i = t[1]), {
      top: n,
      left: i,
      bottom: n + r,
      right: i + o
    };
  }

  var _i = {
    extends: Ii,
    mixins: [di],
    name: "grid",
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: "bs-grid-margin",
      clsStack: "bs-grid-stack",
      masonry: !1,
      parallax: 0
    },
    connected: function () {
      this.masonry && De(this.$el, "bs-flex-top bs-flex-wrap-top");
    },
    update: [{
      write: function (t) {
        t = t.columns;
        He(this.$el, this.clsStack, t.length < 2);
      },
      events: ["resize"]
    }, {
      read: function (t) {
        var e = t.columns,
            n = t.rows,
            i = Ut(this.$el);
        if (!i.length || !this.masonry && !this.parallax || Ai(this.$el)) return !1;
        var r,
            o,
            s = !1,
            a = e.map(function (t) {
          return t.reduce(function (t, e) {
            return t + e.offsetHeight;
          }, 0);
        }),
            u = (t = i, r = this.margin, j((i = t.filter(function (t) {
          return Oe(t, r);
        })[0]) ? Ve(i, "marginTop") : Ve(t[0], "paddingLeft")) * (n.length - 1)),
            c = Math.max.apply(Math, a) + u;
        this.masonry && (e = e.map(function (t) {
          return J(t, "offsetTop");
        }), t = e, o = n.map(function (t) {
          return Math.max.apply(Math, t.map(function (t) {
            return t.offsetHeight;
          }));
        }), s = t.map(function (n) {
          var i = 0;
          return n.map(function (t, e) {
            return i += e ? o[e - 1] - n[e - 1].offsetHeight : 0;
          });
        }));
        var h = Math.abs(this.parallax);
        return {
          padding: h = h && a.reduce(function (t, e, n) {
            return Math.max(t, e + u + (n % 2 ? h : h / 8) - c);
          }, 0),
          columns: e,
          translates: s,
          height: s ? c : ""
        };
      },
      write: function (t) {
        var e = t.height,
            t = t.padding;
        Ve(this.$el, "paddingBottom", t || ""), !1 !== e && Ve(this.$el, "height", e);
      },
      events: ["resize"]
    }, {
      read: function (t) {
        t = t.height;
        return {
          scrolled: !(!this.parallax || Ai(this.$el)) && Wn(this.$el, t ? t - cn(this.$el) : 0) * Math.abs(this.parallax)
        };
      },
      write: function (t) {
        var e = t.columns,
            i = t.scrolled,
            r = t.translates;
        !1 === i && !r || e.forEach(function (t, n) {
          return t.forEach(function (t, e) {
            return Ve(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? n % 2 ? i : i / 8 : 0)) + "px)" : "");
          });
        });
      },
      events: ["scroll", "resize"]
    }]
  };

  function Ai(t) {
    return Ut(t).some(function (t) {
      return "absolute" === Ve(t, "position");
    });
  }

  var Mi = ct ? {
    props: {
      selMinHeight: String
    },
    data: {
      selMinHeight: !1,
      forceHeight: !1
    },
    computed: {
      elements: function (t, e) {
        t = t.selMinHeight;
        return t ? Me(t, e) : [e];
      }
    },
    update: [{
      read: function () {
        Ve(this.elements, "height", "");
      },
      order: -5,
      events: ["resize"]
    }, {
      write: function () {
        var n = this;
        this.elements.forEach(function (t) {
          var e = j(Ve(t, "minHeight"));
          e && (n.forceHeight || Math.round(e + dn(t, "height", "content-box")) >= t.offsetHeight) && Ve(t, "height", e);
        });
      },
      order: 5,
      events: ["resize"]
    }]
  } : {},
      zi = {
    mixins: [Mi],
    args: "target",
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: "> *",
      row: !0,
      forceHeight: !0
    },
    computed: {
      elements: function (t, e) {
        return Me(t.target, e);
      }
    },
    update: {
      read: function () {
        return {
          rows: (this.row ? Ei(this.elements) : [this.elements]).map(Di)
        };
      },
      write: function (t) {
        t.rows.forEach(function (t) {
          var n = t.heights;
          return t.elements.forEach(function (t, e) {
            return Ve(t, "minHeight", n[e]);
          });
        });
      },
      events: ["resize"]
    }
  };

  function Di(t) {
    if (t.length < 2) return {
      heights: [""],
      elements: t
    };
    var n = t.map(Bi),
        i = Math.max.apply(Math, n),
        e = t.some(function (t) {
      return t.style.minHeight;
    }),
        r = t.some(function (t, e) {
      return !t.style.minHeight && n[e] < i;
    });
    return e && r && (Ve(t, "minHeight", ""), n = t.map(Bi), i = Math.max.apply(Math, n)), {
      heights: n = t.map(function (t, e) {
        return n[e] === i && j(t.style.minHeight).toFixed(2) !== i.toFixed(2) ? "" : i;
      }),
      elements: t
    };
  }

  var Ni = "bs-display-block";

  function Bi(t) {
    jt(t) || De(t, Ni);
    var e = on(t).height - dn(t, "height", "content-box");
    return Ne(t, Ni), e;
  }

  var Pi = {
    mixins: [Mi],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: !1,
      offsetTop: !1,
      offsetBottom: !1,
      minHeight: 0
    },
    update: {
      read: function (t) {
        var e = t.minHeight;
        if (!jt(this.$el)) return !1;
        var n = "",
            i = dn(this.$el, "height", "content-box");

        if (this.expand) {
          if (this.$el.dataset.heightExpand = "", Ae("[data-height-expand]") !== this.$el) return !1;
          n = cn(window) - (on(document.documentElement).height - on(this.$el).height) - i || "";
        } else {
          n = "calc(100vh";
          this.offsetTop && (n += 0 < (t = sn(this.$el).top) && t < cn(window) / 2 ? " - " + t + "px" : ""), !0 === this.offsetBottom ? n += " - " + on(this.$el.nextElementSibling).height + "px" : B(this.offsetBottom) ? n += " - " + this.offsetBottom + "vh" : this.offsetBottom && c(this.offsetBottom, "px") ? n += " - " + j(this.offsetBottom) + "px" : D(this.offsetBottom) && (n += " - " + on(xt(this.offsetBottom, this.$el)).height + "px"), n += (i ? " - " + i + "px" : "") + ")";
        }

        return {
          minHeight: n,
          prev: e
        };
      },
      write: function (t) {
        var e = t.minHeight,
            t = t.prev;
        Ve(this.$el, {
          minHeight: e
        }), e !== t && this.$update(this.$el, "resize"), this.minHeight && j(Ve(this.$el, "minHeight")) < this.minHeight && Ve(this.$el, "minHeight", this.minHeight);
      },
      events: ["resize"]
    }
  },
      Oi = {
    args: "src",
    props: {
      id: Boolean,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      class: String,
      strokeAnimation: Boolean,
      focusable: Boolean,
      attributes: "list"
    },
    data: {
      ratio: 1,
      include: ["style", "class", "focusable"],
      class: "",
      strokeAnimation: !1
    },
    beforeConnect: function () {
      this.class += " bs-svg";
    },
    connected: function () {
      var t,
          e = this;
      !this.icon && b(this.src, "#") && (t = this.src.split("#"), this.src = t[0], this.icon = t[1]), this.svg = this.getSvg().then(function (t) {
        return e.applyAttributes(t), e.svgEl = function (t, e) {
          if (Lt(e) || "CANVAS" === e.tagName) {
            e.hidden = !0;
            var n = e.nextElementSibling;
            return Wi(t, n) ? n : xe(e, t);
          }

          n = e.lastElementChild;
          return Wi(t, n) ? n : we(e, t);
        }(t, e.$el);
      }, tt);
    },
    disconnected: function () {
      var e = this;
      Lt(this.$el) && (this.$el.hidden = !1), this.svg && this.svg.then(function (t) {
        return (!e._connected || t !== e.svgEl) && ke(t);
      }, tt), this.svg = this.svgEl = null;
    },
    update: {
      read: function () {
        return !!(this.strokeAnimation && this.svgEl && jt(this.svgEl));
      },
      write: function () {
        var t, e;
        t = this.svgEl, (e = Fi(t)) && t.style.setProperty("--bs-animation-stroke", e);
      },
      type: ["resize"]
    },
    methods: {
      getSvg: function () {
        var e = this;
        return function (n) {
          if (Hi[n]) return Hi[n];
          return Hi[n] = new se(function (e, t) {
            n ? g(n, "data:") ? e(decodeURIComponent(n.split(",")[1])) : le(n).then(function (t) {
              return e(t.response);
            }, function () {
              return t("SVG not found.");
            }) : t();
          });
        }(this.src).then(function (t) {
          return function (t, e) {
            e && b(t, "<symbol") && (t = function (t, e) {
              if (!ji[t]) {
                var n;

                for (ji[t] = {}, Li.lastIndex = 0; n = Li.exec(t);) ji[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>";
              }

              return ji[t][e];
            }(t, e) || t);
            return (t = Ae(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t;
          }(t, e.icon) || se.reject("SVG not found.");
        });
      },
      applyAttributes: function (n) {
        var t,
            e,
            i = this;

        for (t in this.$options.props) this[t] && b(this.include, t) && rt(n, t, this[t]);

        for (e in this.attributes) {
          var r = this.attributes[e].split(":", 2),
              o = r[0],
              r = r[1];
          rt(n, o, r);
        }

        this.id || st(n, "id");
        var s = ["width", "height"],
            a = [this.width, this.height];
        a.some(function (t) {
          return t;
        }) || (a = s.map(function (t) {
          return rt(n, t);
        }));
        var u = rt(n, "viewBox");
        u && !a.some(function (t) {
          return t;
        }) && (a = u.split(" ").slice(2)), a.forEach(function (t, e) {
          (t = (0 | t) * i.ratio) && rt(n, s[e], t), t && !a[1 ^ e] && st(n, s[1 ^ e]);
        }), rt(n, "data-svg", this.icon || this.src);
      }
    }
  },
      Hi = {};
  var Li = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
      ji = {};

  function Fi(t) {
    return Math.ceil(Math.max.apply(Math, [0].concat(Me("[stroke]", t).map(function (t) {
      try {
        return t.getTotalLength();
      } catch (t) {
        return 0;
      }
    }))));
  }

  function Wi(t, e) {
    return rt(t, "data-svg") === rt(e, "data-svg");
  }

  var Vi = {
    spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
    marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
    "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
    "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
    "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
    "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
  },
      Ri = {
    install: function (r) {
      r.icon.add = function (t, e) {
        var n,
            i = D(t) ? ((n = {})[t] = e, n) : t;
        K(i, function (t, e) {
          Vi[e] = t, delete Ki[e];
        }), r._initialized && _e(document.body, function (t) {
          return K(r.getComponents(t), function (t) {
            t.$options.isIcon && t.icon in i && t.$reset();
          });
        });
      };
    },
    extends: Oi,
    args: "icon",
    props: ["icon"],
    data: {
      include: ["focusable"]
    },
    isIcon: !0,
    beforeConnect: function () {
      De(this.$el, "bs-icon");
    },
    methods: {
      getSvg: function () {
        var t = function (t) {
          if (!Vi[t]) return null;
          Ki[t] || (Ki[t] = Ae((Vi[function (t) {
            return ht ? Y(Y(t, "left", "right"), "previous", "next") : t;
          }(t)] || Vi[t]).trim()));
          return Ki[t].cloneNode(!0);
        }(this.icon);

        return t ? se.resolve(t) : se.reject("Icon not found.");
      }
    }
  },
      qi = {
    args: !1,
    extends: Ri,
    data: function (t) {
      return {
        icon: d(t.constructor.options.name)
      };
    },
    beforeConnect: function () {
      De(this.$el, this.$name);
    }
  },
      Ui = {
    extends: qi,
    beforeConnect: function () {
      De(this.$el, "bs-slidenav");
    },
    computed: {
      icon: function (t, e) {
        t = t.icon;
        return Oe(e, "bs-slidenav-large") ? t + "-large" : t;
      }
    }
  },
      Yi = {
    extends: qi,
    computed: {
      icon: function (t, e) {
        t = t.icon;
        return Oe(e, "bs-search-icon") && qt(e, ".bs-search-large").length ? "search-large" : qt(e, ".bs-search-navbar").length ? "search-navbar" : t;
      }
    }
  },
      Xi = {
    extends: qi,
    computed: {
      icon: function () {
        return "close-" + (Oe(this.$el, "bs-close-large") ? "large" : "icon");
      }
    }
  },
      Gi = {
    extends: qi,
    connected: function () {
      var e = this;
      this.svg.then(function (t) {
        return 1 !== e.ratio && Ve(Ae("circle", t), "strokeWidth", 1 / e.ratio);
      }, tt);
    }
  },
      Ki = {};
  var Ji = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String
    },
    data: {
      dataSrc: "",
      dataSrcset: !1,
      sizes: !1,
      width: !1,
      height: !1,
      offsetTop: "50vh",
      offsetLeft: "50vw",
      target: !1
    },
    computed: {
      cacheKey: function (t) {
        t = t.dataSrc;
        return this.$name + "." + t;
      },
      width: function (t) {
        var e = t.width,
            t = t.dataWidth;
        return e || t;
      },
      height: function (t) {
        var e = t.height,
            t = t.dataHeight;
        return e || t;
      },
      sizes: function (t) {
        var e = t.sizes,
            t = t.dataSizes;
        return e || t;
      },
      isImg: function (t, e) {
        return rr(e);
      },
      target: {
        get: function (t) {
          t = t.target;
          return [this.$el].concat(yt(t, this.$el));
        },
        watch: function () {
          this.observe();
        }
      },
      offsetTop: function (t) {
        return pn(t.offsetTop, "height");
      },
      offsetLeft: function (t) {
        return pn(t.offsetLeft, "width");
      }
    },
    connected: function () {
      window.IntersectionObserver ? (sr[this.cacheKey] ? Zi(this.$el, sr[this.cacheKey], this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Zi(this.$el, function (t, e, n) {
        n && (n = it.ratio({
          width: t,
          height: e
        }, "width", pn(tr(n))), t = n.width, e = n.height);
        return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>';
      }(this.width, this.height, this.sizes)), this.observer = new IntersectionObserver(this.load, {
        rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
      }), requestAnimationFrame(this.observe)) : Zi(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
    },
    disconnected: function () {
      this.observer && this.observer.disconnect();
    },
    update: {
      read: function (t) {
        var e = this,
            t = t.image;
        return !!this.observer && (t || "complete" !== document.readyState || this.load(this.observer.takeRecords()), !this.isImg && void (t && t.then(function (t) {
          return t && "" !== t.currentSrc && Zi(e.$el, or(t));
        })));
      },
      write: function (t) {
        var e, n, i;
        this.dataSrcset && 1 !== window.devicePixelRatio && (!(n = Ve(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) && j(n) !== t.bgSize || (t.bgSize = (e = this.dataSrcset, n = this.sizes, i = pn(tr(n)), (e = (e.match(ir) || []).map(j).sort(function (t, e) {
          return t - e;
        })).filter(function (t) {
          return i <= t;
        })[0] || e.pop() || ""), Ve(this.$el, "backgroundSize", t.bgSize + "px")));
      },
      events: ["resize"]
    },
    methods: {
      load: function (t) {
        var e = this;
        t.some(function (t) {
          return O(t.isIntersecting) || t.isIntersecting;
        }) && (this._data.image = de(this.dataSrc, this.dataSrcset, this.sizes).then(function (t) {
          return Zi(e.$el, or(t), t.srcset, t.sizes), sr[e.cacheKey] = or(t), t;
        }, function (t) {
          return Kt(e.$el, new t.constructor(t.type, t));
        }), this.observer.disconnect());
      },
      observe: function () {
        var e = this;
        this._connected && !this._data.image && this.target.forEach(function (t) {
          return e.observer.observe(t);
        });
      }
    }
  };

  function Zi(t, e, n, i) {
    rr(t) ? (i && (t.sizes = i), n && (t.srcset = n), e && (t.src = e)) : e && !b(t.style.backgroundImage, e) && (Ve(t, "backgroundImage", "url(" + Ot(e) + ")"), Kt(t, Jt("load", !1)));
  }

  var Qi = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

  function tr(t) {
    var e, n;

    for (Qi.lastIndex = 0; e = Qi.exec(t);) if (!e[1] || window.matchMedia(e[1]).matches) {
      e = g(n = e[2], "calc") ? n.slice(5, -1).replace(er, function (t) {
        return pn(t);
      }).replace(/ /g, "").match(nr).reduce(function (t, e) {
        return t + +e;
      }, 0) : n;
      break;
    }

    return e || "100vw";
  }

  var er = /\d+(?:\w+|%)/g,
      nr = /[+-]?(\d+)/g;
  var ir = /\s+\d+w\s*(?:,|$)/g;

  function rr(t) {
    return "IMG" === t.tagName;
  }

  function or(t) {
    return t.currentSrc || t.src;
  }

  var sr,
      ar = "__test__";

  try {
    (sr = window.sessionStorage || {})[ar] = 1, delete sr[ar];
  } catch (t) {
    sr = {};
  }

  var ur = {
    props: {
      media: Boolean
    },
    data: {
      media: !1
    },
    computed: {
      matchMedia: function () {
        var t = function (t) {
          if (D(t)) if ("@" === t[0]) t = j(Ye("breakpoint-" + t.substr(1)));else if (isNaN(t)) return t;
          return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
        }(this.media);

        return !t || window.matchMedia(t).matches;
      }
    }
  };
  var cr = {
    mixins: [di, ur],
    props: {
      fill: String
    },
    data: {
      fill: "",
      clsWrapper: "bs-leader-fill",
      clsHide: "bs-leader-hide",
      attrFill: "data-fill"
    },
    computed: {
      fill: function (t) {
        return t.fill || Ye("leader-fill-content");
      }
    },
    connected: function () {
      var t = Se(this.$el, '<span class="' + this.clsWrapper + '">');
      this.wrapper = t[0];
    },
    disconnected: function () {
      Ie(this.wrapper.childNodes);
    },
    update: {
      read: function (t) {
        var e = t.changed,
            n = t.width,
            t = n;
        return {
          width: n = Math.floor(this.$el.offsetWidth / 2),
          fill: this.fill,
          changed: e || t !== n,
          hide: !this.matchMedia
        };
      },
      write: function (t) {
        He(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, rt(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)));
      },
      events: ["resize"]
    }
  },
      hr = {
    props: {
      container: Boolean
    },
    data: {
      container: !0
    },
    computed: {
      container: function (t) {
        t = t.container;
        return !0 === t && this.$container || t && Ae(t);
      }
    }
  },
      lr = [],
      dr = {
    mixins: [di, hr, fi],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: "bs-open",
      escClose: !0,
      bgClose: !0,
      overlay: !0,
      stack: !1
    },
    computed: {
      panel: function (t, e) {
        return Ae(t.selPanel, e);
      },
      transitionElement: function () {
        return this.panel;
      },
      bgClose: function (t) {
        return t.bgClose && this.panel;
      }
    },
    beforeDisconnect: function () {
      this.isToggled() && this.toggleElement(this.$el, !1, !1);
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.selClose;
      },
      handler: function (t) {
        t.preventDefault(), this.hide();
      }
    }, {
      name: "toggle",
      self: !0,
      handler: function (t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === b(lr, this) && this.toggle());
      }
    }, {
      name: "beforeshow",
      self: !0,
      handler: function (t) {
        if (b(lr, this)) return !1;
        !this.stack && lr.length ? (se.all(lr.map(function (t) {
          return t.hide();
        })).then(this.show), t.preventDefault()) : lr.push(this);
      }
    }, {
      name: "show",
      self: !0,
      handler: function () {
        var r = this;
        hn(window) - hn(document) && this.overlay && Ve(document.body, "overflowY", "scroll"), this.stack && Ve(this.$el, "zIndex", j(Ve(this.$el, "zIndex")) + lr.length), De(document.documentElement, this.clsPage), this.bgClose && Gt(this.$el, "hide", Yt(document, pt, function (t) {
          var i = t.target;
          G(lr) !== r || r.overlay && !Rt(i, r.$el) || Rt(i, r.panel) || Gt(document, gt + " " + bt + " scroll", function (t) {
            var e = t.defaultPrevented,
                n = t.type,
                t = t.target;
            e || n !== gt || i !== t || r.hide();
          }, !0);
        }), {
          self: !0
        }), this.escClose && Gt(this.$el, "hide", Yt(document, "keydown", function (t) {
          27 === t.keyCode && G(lr) === r && r.hide();
        }), {
          self: !0
        });
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        var e = this;
        lr.splice(lr.indexOf(this), 1), lr.length || Ve(document.body, "overflowY", ""), Ve(this.$el, "zIndex", ""), lr.some(function (t) {
          return t.clsPage === e.clsPage;
        }) || Ne(document.documentElement, this.clsPage);
      }
    }],
    methods: {
      toggle: function () {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function () {
        var e = this;
        return this.container && Bt(this.$el) !== this.container ? (we(this.container, this.$el), new se(function (t) {
          return requestAnimationFrame(function () {
            return e.show().then(t);
          });
        })) : this.toggleElement(this.$el, !0, fr(this));
      },
      hide: function () {
        return this.toggleElement(this.$el, !1, fr(this));
      }
    }
  };

  function fr(t) {
    var s = t.transitionElement,
        a = t._toggle;
    return function (r, o) {
      return new se(function (n, i) {
        return Gt(r, "show hide", function () {
          r._reject && r._reject(), r._reject = i, a(r, o);
          var t = Gt(s, "transitionstart", function () {
            Gt(s, "transitionend transitioncancel", n, {
              self: !0
            }), clearTimeout(e);
          }, {
            self: !0
          }),
              e = setTimeout(function () {
            t(), n();
          }, q(Ve(s, "transitionDuration")));
        });
      }).then(function () {
        return delete r._reject;
      });
    };
  }

  var pr = {
    install: function (t) {
      var a = t.modal;

      function i(t, e, n, i) {
        e = X({
          bgClose: !1,
          escClose: !0,
          labels: a.labels
        }, e);
        var r = a.dialog(t(e), e),
            o = new oe(),
            s = !1;
        return Yt(r.$el, "submit", "form", function (t) {
          t.preventDefault(), o.resolve(i && i(r)), s = !0, r.hide();
        }), Yt(r.$el, "hide", function () {
          return !s && n(o);
        }), o.promise.dialog = r, o.promise;
      }

      a.dialog = function (t, e) {
        var n = a('<div class="bs-modal"> <div class="bs-modal-dialog">' + t + "</div> </div>", e);
        return n.show(), Yt(n.$el, "hidden", function () {
          return se.resolve().then(function () {
            return n.$destroy(!0);
          });
        }, {
          self: !0
        }), n;
      }, a.alert = function (e, t) {
        return i(function (t) {
          t = t.labels;
          return '<div class="bs-modal-body">' + (D(e) ? e : ve(e)) + '</div> <div class="bs-modal-footer bs-text-right"> <button class="bs-button bs-button-primary bs-modal-close" autofocus>' + t.ok + "</button> </div>";
        }, t, function (t) {
          return t.resolve();
        });
      }, a.confirm = function (e, t) {
        return i(function (t) {
          t = t.labels;
          return '<form> <div class="bs-modal-body">' + (D(e) ? e : ve(e)) + '</div> <div class="bs-modal-footer bs-text-right"> <button class="bs-button bs-button-default bs-modal-close" type="button">' + t.cancel + '</button> <button class="bs-button bs-button-primary" autofocus>' + t.ok + "</button> </div> </form>";
        }, t, function (t) {
          return t.reject();
        });
      }, a.prompt = function (e, n, t) {
        return i(function (t) {
          t = t.labels;
          return '<form class="bs-form-stacked"> <div class="bs-modal-body"> <label>' + (D(e) ? e : ve(e)) + '</label> <input class="bs-input" value="' + (n || "") + '" autofocus> </div> <div class="bs-modal-footer bs-text-right"> <button class="bs-button bs-button-default bs-modal-close" type="button">' + t.cancel + '</button> <button class="bs-button bs-button-primary">' + t.ok + "</button> </div> </form>";
        }, t, function (t) {
          return t.resolve(null);
        }, function (t) {
          return Ae("input", t.$el).value;
        });
      }, a.labels = {
        ok: "Ok",
        cancel: "Cancel"
      };
    },
    mixins: [dr],
    data: {
      clsPage: "bs-modal-page",
      selPanel: ".bs-modal-dialog",
      selClose: ".bs-modal-close, .bs-modal-close-default, .bs-modal-close-outside, .bs-modal-close-full"
    },
    events: [{
      name: "show",
      self: !0,
      handler: function () {
        Oe(this.panel, "bs-margin-auto-vertical") ? De(this.$el, "bs-flex") : Ve(this.$el, "display", "block"), cn(this.$el);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        Ve(this.$el, "display", ""), Ne(this.$el, "bs-flex");
      }
    }]
  };
  var mr = {
    extends: mi,
    data: {
      targets: "> .bs-parent",
      toggle: "> a",
      content: "> ul"
    }
  },
      gr = {
    mixins: [di, Mi],
    props: {
      dropdown: String,
      mode: "list",
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarMode: String,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: ".bs-navbar-nav > li",
      align: ht ? "right" : "left",
      clsDrop: "bs-navbar-dropdown",
      mode: void 0,
      offset: void 0,
      delayShow: void 0,
      delayHide: void 0,
      boundaryAlign: void 0,
      flip: "x",
      boundary: !0,
      dropbar: !1,
      dropbarMode: "slide",
      dropbarAnchor: !1,
      duration: 200,
      forceHeight: !0,
      selMinHeight: ".bs-navbar-nav > li > a, .bs-navbar-item, .bs-navbar-toggle"
    },
    computed: {
      boundary: function (t, e) {
        var n = t.boundary,
            t = t.boundaryAlign;
        return !0 === n || t ? e : n;
      },
      dropbarAnchor: function (t, e) {
        return xt(t.dropbarAnchor, e);
      },
      pos: function (t) {
        return "bottom-" + t.align;
      },
      dropbar: {
        get: function (t) {
          t = t.dropbar;
          return t ? (t = this._dropbar || xt(t, this.$el) || Ae("+ .bs-navbar-dropbar", this.$el)) || (this._dropbar = Ae("<div></div>")) : null;
        },
        watch: function (t) {
          De(t, "bs-navbar-dropbar");
        },
        immediate: !0
      },
      dropdowns: {
        get: function (t, e) {
          return Me(t.dropdown + " ." + t.clsDrop, e);
        },
        watch: function (t) {
          var e = this;
          this.$create("drop", t.filter(function (t) {
            return !e.getDropdown(t);
          }), X({}, this.$props, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset
          }));
        },
        immediate: !0
      }
    },
    disconnected: function () {
      this.dropbar && ke(this.dropbar), delete this._dropbar;
    },
    events: [{
      name: "mouseover",
      delegate: function () {
        return this.dropdown;
      },
      handler: function (t) {
        var e = t.current,
            t = this.getActive();
        t && t.toggle && !Rt(t.toggle.$el, e) && !t.tracker.movesTo(t.$el) && t.hide(!1);
      }
    }, {
      name: "mouseleave",
      el: function () {
        return this.dropbar;
      },
      handler: function () {
        var t = this.getActive();
        t && !this.dropdowns.some(function (t) {
          return zt(t, ":hover");
        }) && t.hide();
      }
    }, {
      name: "beforeshow",
      capture: !0,
      filter: function () {
        return this.dropbar;
      },
      handler: function () {
        Bt(this.dropbar) || xe(this.dropbarAnchor || this.$el, this.dropbar);
      }
    }, {
      name: "show",
      filter: function () {
        return this.dropbar;
      },
      handler: function (t, e) {
        var n = e.$el,
            e = e.dir;
        Oe(n, this.clsDrop) && ("slide" === this.dropbarMode && De(this.dropbar, "bs-navbar-dropbar-slide"), this.clsDrop && De(n, this.clsDrop + "-dropbar"), "bottom" === e && this.transitionTo(n.offsetHeight + j(Ve(n, "marginTop")) + j(Ve(n, "marginBottom")), n));
      }
    }, {
      name: "beforehide",
      filter: function () {
        return this.dropbar;
      },
      handler: function (t, e) {
        var n = e.$el,
            e = this.getActive();
        zt(this.dropbar, ":hover") && e && e.$el === n && t.preventDefault();
      }
    }, {
      name: "hide",
      filter: function () {
        return this.dropbar;
      },
      handler: function (t, e) {
        var n = e.$el;
        !Oe(n, this.clsDrop) || (!(e = this.getActive()) || e && e.$el === n) && this.transitionTo(0);
      }
    }],
    methods: {
      getActive: function () {
        var t = this.dropdowns.map(this.getDropdown).filter(function (t) {
          return t && t.isActive();
        })[0];
        return t && b(t.mode, "hover") && Rt(t.toggle.$el, this.$el) && t;
      },
      transitionTo: function (t, e) {
        var n = this,
            i = this.dropbar,
            r = jt(i) ? cn(i) : 0;
        return Ve(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), cn(i, r), Ze.cancel([e, i]), se.all([Ze.start(i, {
          height: t
        }, this.duration), Ze.start(e, {
          clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
        }, this.duration)]).catch(tt).then(function () {
          Ve(e, {
            clip: ""
          }), n.$update(i);
        });
      },
      getDropdown: function (t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }
    }
  },
      vr = {
    mixins: [dr],
    args: "mode",
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: "slide",
      flip: !1,
      overlay: !1,
      clsPage: "bs-offcanvas-page",
      clsContainer: "bs-offcanvas-container",
      selPanel: ".bs-offcanvas-bar",
      clsFlip: "bs-offcanvas-flip",
      clsContainerAnimation: "bs-offcanvas-container-animation",
      clsSidebarAnimation: "bs-offcanvas-bar-animation",
      clsMode: "bs-offcanvas",
      clsOverlay: "bs-offcanvas-overlay",
      selClose: ".bs-offcanvas-close",
      container: !1
    },
    computed: {
      clsFlip: function (t) {
        var e = t.flip,
            t = t.clsFlip;
        return e ? t : "";
      },
      clsOverlay: function (t) {
        var e = t.overlay,
            t = t.clsOverlay;
        return e ? t : "";
      },
      clsMode: function (t) {
        var e = t.mode;
        return t.clsMode + "-" + e;
      },
      clsSidebarAnimation: function (t) {
        var e = t.mode,
            t = t.clsSidebarAnimation;
        return "none" === e || "reveal" === e ? "" : t;
      },
      clsContainerAnimation: function (t) {
        var e = t.mode,
            t = t.clsContainerAnimation;
        return "push" !== e && "reveal" !== e ? "" : t;
      },
      transitionElement: function (t) {
        return "reveal" === t.mode ? Bt(this.panel) : this.panel;
      }
    },
    update: {
      read: function () {
        this.isToggled() && !jt(this.$el) && this.hide();
      },
      events: ["resize"]
    },
    events: [{
      name: "click",
      delegate: function () {
        return 'a[href^="#"]';
      },
      handler: function (t) {
        var e = t.current.hash;
        !t.defaultPrevented && e && Ae(e, document.body) && this.hide();
      }
    }, {
      name: "touchstart",
      passive: !0,
      el: function () {
        return this.panel;
      },
      handler: function (t) {
        t = t.targetTouches;
        1 === t.length && (this.clientY = t[0].clientY);
      }
    }, {
      name: "touchmove",
      self: !0,
      passive: !1,
      filter: function () {
        return this.overlay;
      },
      handler: function (t) {
        t.cancelable && t.preventDefault();
      }
    }, {
      name: "touchmove",
      passive: !1,
      el: function () {
        return this.panel;
      },
      handler: function (t) {
        var e, n, i, r;
        1 === t.targetTouches.length && (e = event.targetTouches[0].clientY - this.clientY, n = (r = this.panel).scrollTop, ((i = r.scrollHeight) <= (r = r.clientHeight) || 0 === n && 0 < e || i - n <= r && e < 0) && t.cancelable && t.preventDefault());
      }
    }, {
      name: "show",
      self: !0,
      handler: function () {
        "reveal" !== this.mode || Oe(Bt(this.panel), this.clsMode) || ($e(this.panel, "<div>"), De(Bt(this.panel), this.clsMode)), Ve(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), De(document.body, this.clsContainer, this.clsFlip), Ve(document.body, "touch-action", "pan-y pinch-zoom"), Ve(this.$el, "display", "block"), De(this.$el, this.clsOverlay), De(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), cn(document.body), De(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (wr().content += ",user-scalable=0");
      }
    }, {
      name: "hide",
      self: !0,
      handler: function () {
        Ne(document.body, this.clsContainerAnimation), Ve(document.body, "touch-action", "");
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        var t;
        this.clsContainerAnimation && ((t = wr()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && Ie(this.panel), Ne(this.panel, this.clsSidebarAnimation, this.clsMode), Ne(this.$el, this.clsOverlay), Ve(this.$el, "display", ""), Ne(document.body, this.clsContainer, this.clsFlip), Ve(document.documentElement, "overflowY", "");
      }
    }, {
      name: "swipeLeft swipeRight",
      handler: function (t) {
        this.isToggled() && c(t.type, "Left") ^ this.flip && this.hide();
      }
    }]
  };

  function wr() {
    return Ae('meta[name="viewport"]', document.head) || we(document.head, '<meta name="viewport">');
  }

  var br = {
    mixins: [di],
    props: {
      selContainer: String,
      selContent: String
    },
    data: {
      selContainer: ".bs-modal",
      selContent: ".bs-modal-dialog"
    },
    computed: {
      container: function (t, e) {
        return Nt(e, t.selContainer);
      },
      content: function (t, e) {
        return Nt(e, t.selContent);
      }
    },
    connected: function () {
      Ve(this.$el, "minHeight", 150);
    },
    update: {
      read: function () {
        return !!(this.content && this.container && jt(this.$el)) && {
          current: j(Ve(this.$el, "maxHeight")),
          max: Math.max(150, cn(this.container) - (on(this.content).height - cn(this.$el)))
        };
      },
      write: function (t) {
        var e = t.current,
            t = t.max;
        Ve(this.$el, "maxHeight", t), Math.round(e) !== Math.round(t) && Kt(this.$el, "resize");
      },
      events: ["resize"]
    }
  },
      s = {
    props: ["width", "height"],
    connected: function () {
      De(this.$el, "bs-responsive-width");
    },
    update: {
      read: function () {
        return !!(jt(this.$el) && this.width && this.height) && {
          width: hn(Bt(this.$el)),
          height: this.height
        };
      },
      write: function (t) {
        cn(this.$el, it.contain({
          height: this.height,
          width: this.width
        }, t).height);
      },
      events: ["resize"]
    }
  },
      m = {
    props: {
      offset: Number
    },
    data: {
      offset: 0
    },
    methods: {
      scrollTo: function (t) {
        var e = this;
        t = t && Ae(t) || document.body, Kt(this.$el, "beforescroll", [this, t]) && Fn(t, {
          offset: this.offset
        }).then(function () {
          return Kt(e.$el, "scrolled", [e, t]);
        });
      }
    },
    events: {
      click: function (t) {
        t.defaultPrevented || (t.preventDefault(), this.scrollTo(Ot(decodeURIComponent(this.$el.hash)).substr(1)));
      }
    }
  },
      xr = "_ukScrollspy",
      t = {
    args: "cls",
    props: {
      cls: String,
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function () {
      return {
        cls: !1,
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "bs-scrollspy-inview"
      };
    },
    computed: {
      elements: {
        get: function (t, e) {
          t = t.target;
          return t ? Me(t, e) : [e];
        },
        watch: function (t) {
          this.hidden && Ve(Vt(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden");
        },
        immediate: !0
      }
    },
    disconnected: function () {
      var e = this;
      this.elements.forEach(function (t) {
        Ne(t, e.inViewClass, t[xr] ? t[xr].cls : ""), delete t[xr];
      });
    },
    update: [{
      read: function (t) {
        var e = this;
        t.update && this.elements.forEach(function (t) {
          t[xr] || (t[xr] = {
            cls: at(t, "bs-scrollspy-class") || e.cls
          }), t[xr].show = Ln(t, e.offsetTop, e.offsetLeft);
        });
      },
      write: function (i) {
        var r = this;
        if (!i.update) return this.$emit(), i.update = !0;
        this.elements.forEach(function (e) {
          function t(t) {
            Ve(e, "visibility", !t && r.hidden ? "hidden" : ""), He(e, r.inViewClass, t), He(e, n.cls), Kt(e, t ? "inview" : "outview"), n.inview = t, r.$update(e);
          }

          var n = e[xr];
          !n.show || n.inview || n.queued ? !n.show && n.inview && !n.queued && r.repeat && t(!1) : (n.queued = !0, i.promise = (i.promise || se.resolve()).then(function () {
            return new se(function (t) {
              return setTimeout(t, r.delay);
            });
          }).then(function () {
            t(!0), setTimeout(function () {
              n.queued = !1, r.$emit();
            }, 300);
          }));
        });
      },
      events: ["scroll", "resize"]
    }]
  },
      lt = {
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: "bs-active",
      closest: !1,
      scroll: !1,
      overflow: !0,
      offset: 0
    },
    computed: {
      links: {
        get: function (t, e) {
          return Me('a[href^="#"]', e).filter(function (t) {
            return t.hash;
          });
        },
        watch: function (t) {
          this.scroll && this.$create("scroll", t, {
            offset: this.offset || 0
          });
        },
        immediate: !0
      },
      targets: function () {
        return Me(this.links.map(function (t) {
          return Ot(t.hash).substr(1);
        }).join(","));
      },
      elements: function (t) {
        t = t.closest;
        return Nt(this.links, t || "*");
      }
    },
    update: [{
      read: function () {
        var n = this,
            t = this.targets.length;
        if (!t || !jt(this.$el)) return !1;
        var e = Vn(this.targets, /auto|scroll/, !0)[0],
            i = e.scrollTop,
            r = e.scrollHeight,
            o = Rn(e),
            r = r - cn(o),
            s = !1;
        return i === r ? s = t - 1 : (this.targets.every(function (t, e) {
          if (an(t, o).top - n.offset <= 0) return s = e, !0;
        }), !1 === s && this.overflow && (s = 0)), {
          active: s
        };
      },
      write: function (t) {
        t = t.active;
        this.links.forEach(function (t) {
          return t.blur();
        }), Ne(this.elements, this.cls), !1 !== t && Kt(this.$el, "active", [t, De(this.elements[t], this.cls)]);
      },
      events: ["scroll", "resize"]
    }]
  },
      dt = {
    mixins: [di, ur],
    props: {
      top: null,
      bottom: Boolean,
      offset: String,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      widthElement: Boolean,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      top: 0,
      bottom: !1,
      offset: 0,
      animation: "",
      clsActive: "bs-active",
      clsInactive: "",
      clsFixed: "bs-sticky-fixed",
      clsBelow: "bs-sticky-below",
      selTarget: "",
      widthElement: !1,
      showOnUp: !1,
      targetOffset: !1
    },
    computed: {
      offset: function (t) {
        return pn(t.offset);
      },
      selTarget: function (t, e) {
        t = t.selTarget;
        return t && Ae(t, e) || e;
      },
      widthElement: function (t, e) {
        return xt(t.widthElement, e) || this.placeholder;
      },
      isActive: {
        get: function () {
          return Oe(this.selTarget, this.clsActive);
        },
        set: function (t) {
          t && !this.isActive ? (Pe(this.selTarget, this.clsInactive, this.clsActive), Kt(this.$el, "active")) : t || Oe(this.selTarget, this.clsInactive) || (Pe(this.selTarget, this.clsActive, this.clsInactive), Kt(this.$el, "inactive"));
        }
      }
    },
    connected: function () {
      this.placeholder = Ae("+ .bs-sticky-placeholder", this.$el) || Ae('<div class="bs-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1;
    },
    disconnected: function () {
      this.isFixed && (this.hide(), Ne(this.selTarget, this.clsInactive)), ke(this.placeholder), this.placeholder = null, this.widthElement = null;
    },
    events: [{
      name: "load hashchange popstate",
      el: ut && window,
      handler: function () {
        var i,
            r = this;
        !1 !== this.targetOffset && location.hash && 0 < window.pageYOffset && (i = Ae(location.hash)) && gn.read(function () {
          var t = sn(i).top,
              e = sn(r.$el).top,
              n = r.$el.offsetHeight;
          r.isFixed && t <= e + n && e <= t + i.offsetHeight && jn(window, t - n - (B(r.targetOffset) ? r.targetOffset : 0) - r.offset);
        });
      }
    }],
    update: [{
      read: function (t, e) {
        t = t.height;
        if (this.inactive = !this.matchMedia || !jt(this.$el), this.inactive) return !1;
        this.isActive && "update" !== e && (this.hide(), t = this.$el.offsetHeight, this.show()), t = this.isActive ? t : this.$el.offsetHeight, this.topOffset = sn(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + t;
        e = yr("bottom", this);
        return this.top = Math.max(j(yr("top", this)), this.topOffset) - this.offset, this.bottom = e && e - this.$el.offsetHeight, this.width = on(jt(this.widthElement) ? this.widthElement : this.$el).width, {
          height: t,
          top: un(this.placeholder)[0],
          margins: Ve(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
        };
      },
      write: function (t) {
        var e = t.height,
            n = t.margins,
            t = this.placeholder;
        Ve(t, X({
          height: e
        }, n)), Rt(t, document) || (xe(this.$el, t), t.hidden = !0), this.isActive = !!this.isActive;
      },
      events: ["resize"]
    }, {
      read: function (t) {
        t = t.scroll;
        return void 0 === t && (t = 0), this.scroll = window.pageYOffset, {
          dir: t <= this.scroll ? "down" : "up",
          scroll: this.scroll
        };
      },
      write: function (t, e) {
        var n = this,
            i = Date.now(),
            r = t.initTimestamp;
        void 0 === r && (r = 0);
        var o = t.dir,
            s = t.lastDir,
            a = t.lastScroll,
            u = t.scroll,
            c = t.top;
        (t.lastScroll = u) < 0 || u === a && "scroll" === e || this.showOnUp && "scroll" !== e && !this.isFixed || ((300 < i - r || o !== s) && (t.initScroll = u, t.initTimestamp = i), t.lastDir = o, this.showOnUp && !this.isFixed && Math.abs(t.initScroll - u) <= 30 && Math.abs(a - u) <= 10 || (this.inactive || u < this.top || this.showOnUp && (u <= this.top || "down" === o && "scroll" === e || "up" === o && !this.isFixed && u <= this.bottomOffset) ? this.isFixed ? (this.isFixed = !1, this.animation && u > this.topOffset ? (nn.cancel(this.$el), nn.out(this.$el, this.animation).then(function () {
          return n.hide();
        }, tt)) : this.hide()) : nn.inProgress(this.$el) && u < c && (nn.cancel(this.$el), this.hide()) : this.isFixed ? this.update() : this.animation ? (nn.cancel(this.$el), this.show(), nn.in(this.$el, this.animation).catch(tt)) : this.show()));
      },
      events: ["resize", "scroll"]
    }],
    methods: {
      show: function () {
        this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
      },
      hide: function () {
        this.isActive = !1, Ne(this.$el, this.clsFixed, this.clsBelow), Ve(this.$el, {
          position: "",
          top: "",
          width: ""
        }), this.placeholder.hidden = !0;
      },
      update: function () {
        var t = 0 !== this.top || this.scroll > this.top,
            e = Math.max(0, this.offset);
        B(this.bottom) && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Ve(this.$el, {
          position: "fixed",
          top: e + "px",
          width: this.width
        }), this.isActive = t, He(this.$el, this.clsBelow, this.scroll > this.bottomOffset), De(this.$el, this.clsFixed);
      }
    }
  };

  function yr(t, e) {
    var n = e.$props,
        i = e.$el,
        e = e[t + "Offset"],
        t = n[t];
    if (t) return D(t) && t.match(/^-?\d/) ? e + pn(t) : sn(!0 === t ? Bt(i) : xt(t, i)).bottom;
  }

  var kr,
      $r,
      Sr,
      At = {
    mixins: [fi],
    args: "connect",
    props: {
      connect: String,
      toggle: String,
      active: Number,
      swiping: Boolean
    },
    data: {
      connect: "~.bs-switcher",
      toggle: "> * > :first-child",
      active: 0,
      swiping: !0,
      cls: "bs-active",
      attrItem: "bs-switcher-item"
    },
    computed: {
      connects: {
        get: function (t, e) {
          return yt(t.connect, e);
        },
        watch: function (t) {
          this.swiping && Ve(t, "touch-action", "pan-y pinch-zoom");
        },
        immediate: !0
      },
      toggles: {
        get: function (t, e) {
          return Me(t.toggle, e).filter(function (t) {
            return !zt(t, ".bs-disabled *, .bs-disabled, [disabled]");
          });
        },
        watch: function (t) {
          var e = this.index();
          this.show(~e && e || t[this.active] || t[0]);
        },
        immediate: !0
      },
      children: function () {
        var t = this;
        return Ut(this.$el).filter(function (e) {
          return t.toggles.some(function (t) {
            return Rt(t, e);
          });
        });
      }
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.toggle;
      },
      handler: function (t) {
        t.preventDefault(), this.show(t.current);
      }
    }, {
      name: "click",
      el: function () {
        return this.connects;
      },
      delegate: function () {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function (t) {
        t.preventDefault(), this.show(at(t.current, this.attrItem));
      }
    }, {
      name: "swipeRight swipeLeft",
      filter: function () {
        return this.swiping;
      },
      el: function () {
        return this.connects;
      },
      handler: function (t) {
        t = t.type;
        this.show(c(t, "Left") ? "next" : "previous");
      }
    }],
    methods: {
      index: function () {
        var e = this;
        return y(this.children, function (t) {
          return Oe(t, e.cls);
        });
      },
      show: function (t) {
        var n = this,
            i = this.index(),
            r = me(this.children[me(t, this.toggles, i)], Ut(this.$el));
        i !== r && (this.children.forEach(function (t, e) {
          He(t, n.cls, r === e), rt(n.toggles[e], "aria-expanded", r === e);
        }), this.connects.forEach(function (t) {
          var e = t.children;
          return n.toggleElement(V(e).filter(function (t, e) {
            return e !== r && n.isToggled(t);
          }), !1, 0 <= i).then(function () {
            return n.toggleElement(e[r], !0, 0 <= i);
          });
        }));
      }
    }
  },
      he = {
    mixins: [di],
    extends: At,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: "bs-tab-item"
    },
    connected: function () {
      var t = Oe(this.$el, "bs-tab-left") ? "bs-tab-left" : !!Oe(this.$el, "bs-tab-right") && "bs-tab-right";
      t && this.$create("toggle", this.$el, {
        cls: t,
        mode: "media",
        media: this.media
      });
    }
  },
      Mi = {
    mixins: [ur, fi],
    args: "target",
    props: {
      href: String,
      target: null,
      mode: "list",
      queued: Boolean
    },
    data: {
      href: !1,
      target: !1,
      mode: "click",
      queued: !0
    },
    computed: {
      target: {
        get: function (t, e) {
          var n = t.href,
              t = t.target;
          return (t = yt(t || n, e)).length && t || [e];
        },
        watch: function () {
          this.updateAria();
        },
        immediate: !0
      }
    },
    events: [{
      name: vt + " " + wt,
      filter: function () {
        return b(this.mode, "hover");
      },
      handler: function (t) {
        ie(t) || this.toggle("toggle" + (t.type === vt ? "show" : "hide"));
      }
    }, {
      name: "click",
      filter: function () {
        return b(this.mode, "click") || ft && b(this.mode, "hover");
      },
      handler: function (t) {
        var e;
        (Nt(t.target, 'a[href="#"], a[href=""]') || (e = Nt(t.target, "a[href]")) && (!Ir(this.target, this.cls) || e.hash && zt(this.target, e.hash))) && t.preventDefault(), this.toggle();
      }
    }, {
      name: "toggled",
      self: !0,
      el: function () {
        return this.target;
      },
      handler: function (t, e) {
        this.updateAria(e);
      }
    }],
    update: {
      read: function () {
        return !(!b(this.mode, "media") || !this.media) && {
          match: this.matchMedia
        };
      },
      write: function (t) {
        var e = t.match,
            t = this.isToggled(this.target);
        (e ? !t : t) && this.toggle();
      },
      events: ["resize"]
    },
    methods: {
      toggle: function (t) {
        var n = this;

        if (Kt(this.target, t || "toggle", [this])) {
          if (!this.queued) return this.toggleElement(this.target);
          var e,
              i = this.target.filter(function (t) {
            return Oe(t, n.clsLeave);
          });
          i.length ? this.target.forEach(function (t) {
            var e = b(i, t);
            n.toggleElement(t, e, e);
          }) : (e = this.target.filter(this.isToggled), this.toggleElement(e, !1).then(function () {
            return n.toggleElement(n.target.filter(function (t) {
              return !b(e, t);
            }), !0);
          }));
        }
      },
      updateAria: function (t) {
        rt(this.$el, "aria-expanded", z(t) ? t : Ir(this.target, this.cls));
      }
    }
  };

  function Ir(t, e) {
    return e ? Oe(t, e.split(" ")[0]) : jt(t);
  }

  K(Object.freeze({
    __proto__: null,
    Accordion: mi,
    Alert: vi,
    Cover: bi,
    Drop: ki,
    Dropdown: ki,
    FormCustom: $i,
    Gif: Si,
    Grid: _i,
    HeightMatch: zi,
    HeightViewport: Pi,
    Icon: Ri,
    Img: Ji,
    Leader: cr,
    Margin: Ii,
    Modal: pr,
    Nav: mr,
    Navbar: gr,
    Offcanvas: vr,
    OverflowAuto: br,
    Responsive: s,
    Scroll: m,
    Scrollspy: t,
    ScrollspyNav: lt,
    Sticky: dt,
    Svg: Oi,
    Switcher: At,
    Tab: he,
    Toggle: Mi,
    Video: wi,
    Close: Xi,
    Spinner: Gi,
    SlidenavNext: Ui,
    SlidenavPrevious: Ui,
    SearchIcon: Yi,
    Marker: qi,
    NavbarToggleIcon: qi,
    OverlayIcon: qi,
    PaginationNext: qi,
    PaginationPrevious: qi,
    Totop: qi
  }), function (t, e) {
    return Zn.component(e, t);
  }), Zn.use(function (o) {
    ut && fe(function () {
      var t;
      o.update();

      function e() {
        t || (t = !0, gn.write(function () {
          return t = !1;
        }), o.update(null, "resize"));
      }

      var n;
      Yt(window, "load resize", e), Yt(document, "loadedmetadata load", e, !0), "ResizeObserver" in window && new ResizeObserver(e).observe(document.documentElement), Yt(window, "scroll", function (t) {
        n || (n = !0, gn.write(function () {
          return n = !1;
        }), o.update(null, t.type));
      }, {
        passive: !0,
        capture: !0
      });
      var i,
          r = 0;
      Yt(document, "animationstart", function (t) {
        t = t.target;
        (Ve(t, "animationName") || "").match(/^bs-.*(left|right)/) && (r++, Ve(document.documentElement, "overflowX", "hidden"), setTimeout(function () {
          --r || Ve(document.documentElement, "overflowX", "");
        }, q(Ve(t, "animationDuration")) + 100));
      }, !0), Yt(document, pt, function (t) {
        var s, a;
        i && i(), ie(t) && (s = re(t), a = "tagName" in t.target ? t.target : parent(t.target), i = Gt(document, gt + " " + bt, function (t) {
          var t = re(t),
              r = t.x,
              o = t.y;
          (a && r && 100 < Math.abs(s.x - r) || o && 100 < Math.abs(s.y - o)) && setTimeout(function () {
            var t, e, n, i;
            Kt(a, "swipe"), Kt(a, "swipe" + (t = s.x, e = s.y, n = r, i = o, Math.abs(t - n) >= Math.abs(e - i) ? 0 < t - n ? "Left" : "Right" : 0 < e - i ? "Up" : "Down"));
          });
        }));
      }, {
        passive: !0
      });
    });
  }), $r = (kr = Zn).connect, Sr = kr.disconnect, ut && window.MutationObserver && gn.read(function () {
    document.body && _e(document.body, $r);
    new MutationObserver(function (t) {
      var i = [];
      t.forEach(function (t) {
        return e = i, n = (t = t).target, void (("attributes" !== t.type ? function (t) {
          for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) _e(e[i], $r);

          for (var r = 0; r < n.length; r++) _e(n[r], Sr);

          return 1;
        } : function (t) {
          var e = t.target,
              n = t.attributeName;
          if ("href" === n) return 1;
          t = Jn(n);
          if (!(t && t in kr)) return;
          if (ot(e, n)) return kr[t](e), 1;
          t = kr.getComponent(e, t);
          if (t) return t.$destroy(), 1;
        })(t) && !e.some(function (t) {
          return t.contains(n);
        }) && e.push(n.contains ? n : n.parentNode));
        var e, n;
      }), i.forEach(function (t) {
        return kr.update(t);
      });
    }).observe(document, {
      childList: !0,
      subtree: !0,
      characterData: !0,
      attributes: !0
    }), kr._initialized = !0;
  });
  At = {
    mixins: [di],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: "",
      clsWrapper: ".bs-countdown-%unit%"
    },
    computed: {
      date: function (t) {
        t = t.date;
        return Date.parse(t);
      },
      days: function (t, e) {
        return Ae(t.clsWrapper.replace("%unit%", "days"), e);
      },
      hours: function (t, e) {
        return Ae(t.clsWrapper.replace("%unit%", "hours"), e);
      },
      minutes: function (t, e) {
        return Ae(t.clsWrapper.replace("%unit%", "minutes"), e);
      },
      seconds: function (t, e) {
        return Ae(t.clsWrapper.replace("%unit%", "seconds"), e);
      },
      units: function () {
        var e = this;
        return ["days", "hours", "minutes", "seconds"].filter(function (t) {
          return e[t];
        });
      }
    },
    connected: function () {
      this.start();
    },
    disconnected: function () {
      var e = this;
      this.stop(), this.units.forEach(function (t) {
        return ge(e[t]);
      });
    },
    events: [{
      name: "visibilitychange",
      el: ut && document,
      handler: function () {
        document.hidden ? this.stop() : this.start();
      }
    }],
    update: {
      write: function () {
        var i = this,
            r = function (t) {
          t -= Date.now();
          return {
            total: t,
            seconds: t / 1e3 % 60,
            minutes: t / 1e3 / 60 % 60,
            hours: t / 1e3 / 60 / 60 % 24,
            days: t / 1e3 / 60 / 60 / 24
          };
        }(this.date);

        r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function (t) {
          var e = (e = String(Math.floor(r[t]))).length < 2 ? "0" + e : e,
              n = i[t];
          n.textContent !== e && ((e = e.split("")).length !== n.children.length && ve(n, e.map(function () {
            return "<span></span>";
          }).join("")), e.forEach(function (t, e) {
            return n.children[e].textContent = t;
          }));
        });
      }
    },
    methods: {
      start: function () {
        this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3));
      },
      stop: function () {
        this.timer && (clearInterval(this.timer), this.timer = null);
      }
    }
  };
  var Er = "bs-transition-leave",
      Tr = "bs-transition-enter";

  function Cr(t, s, a, u) {
    void 0 === u && (u = 40);

    var c = _r(s, !0),
        h = {
      opacity: 1
    },
        l = {
      opacity: 0
    },
        e = function (t) {
      return function () {
        return c === _r(s) ? t() : se.reject();
      };
    },
        n = e(function () {
      return De(s, Er), se.all(Mr(s).map(function (e, n) {
        return new se(function (t) {
          return setTimeout(function () {
            return Ze.start(e, l, a / 2, "ease").then(t);
          }, n * u);
        });
      })).then(function () {
        return Ne(s, Er);
      });
    }),
        e = e(function () {
      var o = cn(s);
      return De(s, Tr), t(), Ve(Ut(s), {
        opacity: 0
      }), new se(function (r) {
        requestAnimationFrame(function () {
          var t = Ut(s),
              e = cn(s);
          cn(s, o);
          var n = Mr(s);
          Ve(t, l);
          var i = n.map(function (e, n) {
            return new se(function (t) {
              return setTimeout(function () {
                return Ze.start(e, h, a / 2, "ease").then(t);
              }, n * u);
            });
          });
          o !== e && i.push(Ze.start(s, {
            height: e
          }, a / 2 + n.length * u, "ease")), se.all(i).then(function () {
            Ne(s, Tr), c === _r(s) && (Ve(s, "height", ""), Ve(t, {
              opacity: ""
            }), delete s.dataset.transition), r();
          });
        });
      });
    });

    return (Oe(s, Er) ? Ar(s) : Oe(s, Tr) ? Ar(s).then(n) : n()).then(e);
  }

  function _r(t, e) {
    return e && (t.dataset.transition = 1 + _r(t)), L(t.dataset.transition) || 0;
  }

  function Ar(t) {
    return se.all(Ut(t).filter(Ze.inProgress).map(function (e) {
      return new se(function (t) {
        return Gt(e, "transitionend transitioncanceled", t);
      });
    }));
  }

  function Mr(t) {
    return Ei(Ut(t)).reduce(function (t, e) {
      return t.concat(J(e.filter(function (t) {
        return Ln(t);
      }), "offsetLeft"));
    }, []);
  }

  var zr,
      Dr = "bs-animation-target";

  function Nr(t, n, i) {
    zr = zr || !!we(document.head, "<style> ." + Dr + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        } </style>");
    var r = Ut(n),
        e = r.map(function (t) {
      return Br(t, !0);
    }),
        o = cn(n);
    Ze.cancel(n), r.forEach(Ze.cancel), Ne(n, Dr), Pr(n), t(), r = r.concat(Ut(n).filter(function (t) {
      return !b(r, t);
    })), Kt(R(n), "resize"), gn.flush();
    var s,
        a,
        u,
        c = cn(n),
        e = (s = n, u = e, t = (a = r).map(function (t, e) {
      return !!(Bt(t) && e in u) && (u[e] ? jt(t) ? Or(t) : {
        opacity: 0
      } : {
        opacity: jt(t) ? 1 : 0
      });
    }), e = t.map(function (t, e) {
      e = Bt(a[e]) === s && (u[e] || Br(a[e]));
      return !!e && (t ? "opacity" in t || (e.opacity % 1 ? t.opacity = 1 : delete e.opacity) : delete e.opacity, e);
    }), [t, e]),
        h = e[0],
        l = e[1];
    return De(n, Dr), r.forEach(function (t, e) {
      return l[e] && Ve(t, l[e]);
    }), Ve(n, {
      height: o,
      display: "block"
    }), new se(function (e) {
      return requestAnimationFrame(function () {
        var t = r.map(function (t, e) {
          return Ze.start(t, h[e], i, "ease");
        }).concat(Ze.start(n, {
          height: c
        }, i, "ease"));
        se.all(t).then(function () {
          r.forEach(function (t, e) {
            return Ve(t, {
              display: 0 === h[e].opacity ? "none" : "",
              zIndex: ""
            });
          }), Pr(n);
        }, tt).then(e);
      });
    });
  }

  function Br(t, e) {
    var n = Ve(t, "zIndex");
    return !!jt(t) && X({
      display: "",
      opacity: e ? Ve(t, "opacity") : "0",
      pointerEvents: "none",
      position: "absolute",
      zIndex: "auto" === n ? pe(t) : n
    }, Or(t));
  }

  function Pr(t) {
    Ve(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      width: ""
    }), Ne(t, Dr), Ve(t, {
      height: "",
      display: ""
    });
  }

  function Or(t) {
    var e = sn(t),
        n = e.height,
        e = e.width,
        t = an(t);
    return {
      top: t.top,
      left: t.left,
      height: n,
      width: e
    };
  }

  he = {
    props: {
      duration: Number,
      animation: String
    },
    data: {
      duration: 150,
      animation: "slide"
    },
    methods: {
      animate: function (t, e) {
        return void 0 === e && (e = this.$el), ("fade" === this.animation ? Cr : Nr)(t, e, this.duration).then(function () {
          return Kt(R(e), "resize");
        }, tt);
      }
    }
  }, Mi = {
    mixins: [he],
    args: "target",
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: !1,
      attrItem: "bs-filter-control",
      cls: "bs-active",
      duration: 250
    },
    computed: {
      toggles: {
        get: function (t, e) {
          t.attrItem;
          return Me("[" + this.attrItem + "],[data-" + this.attrItem + "]", e);
        },
        watch: function () {
          var e,
              n = this;
          this.updateState(), !1 !== this.selActive && (e = Me(this.selActive, this.$el), this.toggles.forEach(function (t) {
            return He(t, n.cls, b(e, t));
          }));
        },
        immediate: !0
      },
      children: {
        get: function (t, e) {
          return Me(t.target + " > *", e);
        },
        watch: function (t, e) {
          var n;
          n = e, (t = t).length === n.length && t.every(function (t) {
            return ~n.indexOf(t);
          }) || this.updateState();
        }
      }
    },
    events: [{
      name: "click",
      delegate: function () {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function (t) {
        t.preventDefault(), this.apply(t.current);
      }
    }],
    methods: {
      apply: function (t) {
        this.setState(jr(t, this.attrItem, this.getState()));
      },
      getState: function () {
        var n = this;
        return this.toggles.filter(function (t) {
          return Oe(t, n.cls);
        }).reduce(function (t, e) {
          return jr(e, n.attrItem, t);
        }, {
          filter: {
            "": ""
          },
          sort: []
        });
      },
      setState: function (n, i) {
        var r = this;
        void 0 === i && (i = !0), n = X({
          filter: {
            "": ""
          },
          sort: []
        }, n), Kt(this.$el, "beforeFilter", [this, n]), this.toggles.forEach(function (t) {
          return He(t, r.cls, !!function (t, e, n) {
            var i = n.filter;
            void 0 === i && (i = {
              "": ""
            });
            var r = n.sort,
                o = r[0],
                s = r[1],
                n = Hr(t, e),
                r = n.filter;
            void 0 === r && (r = "");
            t = n.group;
            void 0 === t && (t = "");
            e = n.sort, n = n.order;
            void 0 === n && (n = "asc");
            return O(e) ? t in i && r === i[t] || !r && t && !(t in i) && !i[""] : o === e && s === n;
          }(t, r.attrItem, n));
        }), se.all(Me(this.target, this.$el).map(function (t) {
          var e = Ut(t);
          return i ? r.animate(function () {
            return Lr(n, t, e);
          }, t) : Lr(n, t, e);
        })).then(function () {
          return Kt(r.$el, "afterFilter", [r]);
        });
      },
      updateState: function () {
        var t = this;
        gn.write(function () {
          return t.setState(t.getState(), !1);
        });
      }
    }
  };

  function Hr(t, e) {
    return Tn(at(t, e), ["filter"]);
  }

  function Lr(t, e, n) {
    var i,
        r = (a = (a = t).filter, i = "", K(a, function (t) {
      return i += t || "";
    }), i);
    n.forEach(function (t) {
      return Ve(t, "display", r && !zt(t, r) ? "none" : "");
    });
    var o,
        s,
        a = t.sort,
        t = a[0],
        a = a[1];
    t && (o = t, s = a, U(a = X([], n).sort(function (t, e) {
      return at(t, o).localeCompare(at(e, o), void 0, {
        numeric: !0
      }) * ("asc" === s || -1);
    }), n) || we(e, a));
  }

  function jr(t, e, n) {
    var i = Hr(t, e),
        r = i.filter,
        t = i.group,
        e = i.sort,
        i = i.order;
    return void 0 === i && (i = "asc"), (r || O(e)) && (t ? r ? (delete n.filter[""], n.filter[t] = r) : (delete n.filter[t], (P(n.filter) || "" in n.filter) && (n.filter = {
      "": r || ""
    })) : n.filter = {
      "": r || ""
    }), O(e) || (n.sort = [e, i]), n;
  }

  wi = {
    slide: {
      show: function (t) {
        return [{
          transform: Wr(-100 * t)
        }, {
          transform: Wr()
        }];
      },
      percent: Fr,
      translate: function (t, e) {
        return [{
          transform: Wr(-100 * e * t)
        }, {
          transform: Wr(100 * e * (1 - t))
        }];
      }
    }
  };

  function Fr(t) {
    return Math.abs(Ve(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }

  function Wr(t, e) {
    return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", ct ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)";
  }

  function Vr(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }

  var Rr = X({}, wi, {
    fade: {
      show: function () {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function (t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t
        }, {
          opacity: t
        }];
      }
    },
    scale: {
      show: function () {
        return [{
          opacity: 0,
          transform: Vr(.8)
        }, {
          opacity: 1,
          transform: Vr(1)
        }];
      },
      percent: function (t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t,
          transform: Vr(1 - .2 * t)
        }, {
          opacity: t,
          transform: Vr(.8 + .2 * t)
        }];
      }
    }
  });

  function qr(t, e, n) {
    Kt(t, Jt(e, !1, !1, n));
  }

  Xi = {
    mixins: [{
      props: {
        autoplay: Boolean,
        autoplayInterval: Number,
        pauseOnHover: Boolean
      },
      data: {
        autoplay: !1,
        autoplayInterval: 7e3,
        pauseOnHover: !0
      },
      connected: function () {
        this.autoplay && this.startAutoplay();
      },
      disconnected: function () {
        this.stopAutoplay();
      },
      update: function () {
        rt(this.slides, "tabindex", "-1");
      },
      events: [{
        name: "visibilitychange",
        el: ut && document,
        filter: function () {
          return this.autoplay;
        },
        handler: function () {
          document.hidden ? this.stopAutoplay() : this.startAutoplay();
        }
      }],
      methods: {
        startAutoplay: function () {
          var t = this;
          this.stopAutoplay(), this.interval = setInterval(function () {
            return (!t.draggable || !Ae(":focus", t.$el)) && (!t.pauseOnHover || !zt(t.$el, ":hover")) && !t.stack.length && t.show("next");
          }, this.autoplayInterval);
        },
        stopAutoplay: function () {
          this.interval && clearInterval(this.interval);
        }
      }
    }, {
      props: {
        draggable: Boolean
      },
      data: {
        draggable: !0,
        threshold: 10
      },
      created: function () {
        var i = this;
        ["start", "move", "end"].forEach(function (t) {
          var n = i[t];

          i[t] = function (t) {
            var e = re(t).x * (ht ? -1 : 1);
            i.prevPos = e !== i.pos ? i.pos : i.prevPos, i.pos = e, n(t);
          };
        });
      },
      events: [{
        name: pt,
        delegate: function () {
          return this.selSlides;
        },
        handler: function (t) {
          var e;
          !this.draggable || !ie(t) && !(e = t.target).children.length && e.childNodes.length || Nt(t.target, Ft) || 0 < t.button || this.length < 2 || this.start(t);
        }
      }, {
        name: "dragstart",
        handler: function (t) {
          t.preventDefault();
        }
      }],
      methods: {
        start: function () {
          this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, Yt(document, mt, this.move, {
            passive: !1
          }), Yt(document, gt + " " + bt, this.end, !0), Ve(this.list, "userSelect", "none");
        },
        move: function (t) {
          var e = this,
              n = this.pos - this.drag;

          if (!(0 == n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
            Ve(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;

            for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth;

            this.percent = o / a;
            var u,
                c = i[r],
                t = i[s],
                n = this.index !== s,
                h = r === s;
            [this.index, this.prevIndex].filter(function (t) {
              return !b([s, r], t);
            }).forEach(function (t) {
              Kt(i[t], "itemhidden", [e]), h && (u = !0, e.prevIndex = r);
            }), (this.index === r && this.prevIndex !== r || u) && Kt(i[this.index], "itemshown", [this]), n && (this.prevIndex = r, this.index = s, h || Kt(c, "beforeitemhide", [this]), Kt(t, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), c, !h && t), n && (h || Kt(c, "itemhide", [this]), Kt(t, "itemshow", [this]));
          }
        },
        end: function () {
          var t;
          Xt(document, mt, this.move, {
            passive: !1
          }), Xt(document, gt + " " + bt, this.end, !0), this.dragging && (this.dragging = null, this.index === this.prevIndex ? (this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null) : (t = (ht ? this.dir * (ht ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos, this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0))), Ve(this.list, {
            userSelect: "",
            pointerEvents: ""
          }), this.drag = this.percent = null;
        }
      }
    }, {
      data: {
        selNav: !1
      },
      computed: {
        nav: function (t, e) {
          return Ae(t.selNav, e);
        },
        selNavItem: function (t) {
          t = t.attrItem;
          return "[" + t + "],[data-" + t + "]";
        },
        navItems: function (t, e) {
          return Me(this.selNavItem, e);
        }
      },
      update: {
        write: function () {
          var n = this;
          this.nav && this.length !== this.nav.children.length && ve(this.nav, this.slides.map(function (t, e) {
            return "<li " + n.attrItem + '="' + e + '"><a href></a></li>';
          }).join("")), this.navItems.concat(this.nav).forEach(function (t) {
            return t && (t.hidden = !n.maxIndex);
          }), this.updateNav();
        },
        events: ["resize"]
      },
      events: [{
        name: "click",
        delegate: function () {
          return this.selNavItem;
        },
        handler: function (t) {
          t.preventDefault(), this.show(at(t.current, this.attrItem));
        }
      }, {
        name: "itemshow",
        handler: "updateNav"
      }],
      methods: {
        updateNav: function () {
          var n = this,
              i = this.getValidIndex();
          this.navItems.forEach(function (t) {
            var e = at(t, n.attrItem);
            He(t, n.clsActive, L(e) === i), He(t, "bs-invisible", n.finite && ("previous" === e && 0 === i || "next" === e && i >= n.maxIndex));
          });
        }
      }
    }],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String
    },
    data: function () {
      return {
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "bs-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {}
      };
    },
    connected: function () {
      this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
    },
    disconnected: function () {
      Ne(this.slides, this.clsActive);
    },
    computed: {
      duration: function (t, e) {
        t = t.velocity;
        return Ur(e.offsetWidth / t);
      },
      list: function (t, e) {
        return Ae(t.selList, e);
      },
      maxIndex: function () {
        return this.length - 1;
      },
      selSlides: function (t) {
        return t.selList + " " + (t.selSlides || "> *");
      },
      slides: {
        get: function () {
          return Me(this.selSlides, this.$el);
        },
        watch: function () {
          this.$reset();
        }
      },
      length: function () {
        return this.slides.length;
      }
    },
    events: {
      itemshown: function () {
        this.$update(this.list);
      }
    },
    methods: {
      show: function (t, e) {
        var n = this;

        if (void 0 === e && (e = !1), !this.dragging && this.length) {
          var i = this.stack,
              r = e ? 0 : i.length,
              o = function () {
            i.splice(r, 1), i.length && n.show(i.shift(), !0);
          };

          if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));else {
            var s,
                a = this.getIndex(this.index),
                u = Oe(this.slides, this.clsActive) && this.slides[a],
                c = this.getIndex(t, this.index),
                h = this.slides[c];

            if (u !== h) {
              if (this.dir = (s = a, "next" !== (t = t) && ("previous" === t || t < s) ? -1 : 1), this.prevIndex = a, this.index = c, u && !Kt(u, "beforeitemhide", [this]) || !Kt(h, "beforeitemshow", [this, u])) return this.index = this.prevIndex, void o();
              e = this._show(u, h, e).then(function () {
                return u && Kt(u, "itemhidden", [n]), Kt(h, "itemshown", [n]), new se(function (t) {
                  gn.write(function () {
                    i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t();
                  });
                });
              });
              return u && Kt(u, "itemhide", [this]), Kt(h, "itemshow", [this]), e;
            }

            o();
          }
        }
      },
      getIndex: function (t, e) {
        return void 0 === t && (t = this.index), void 0 === e && (e = this.index), Q(me(t, this.slides, e, this.finite), 0, this.maxIndex);
      },
      getValidIndex: function (t, e) {
        return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e);
      },
      _show: function (t, e, n) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, X({
          easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
        }, this.transitionOptions)), !n && !t) return this._translate(1), se.resolve();
        t = this.stack.length;
        return this._transitioner[1 < t ? "forward" : "show"](1 < t ? Math.min(this.duration, 75 + 75 / (t - 1)) : this.duration, this.percent);
      },
      _getDistance: function (t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance();
      },
      _translate: function (t, e, n) {
        void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
        n = this._getTransitioner(e !== n && e, n);
        return n.translate(t), n;
      },
      _getTransitioner: function (t, e, n, i) {
        return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(N(t) ? this.slides[t] : t, N(e) ? this.slides[e] : e, n * (ht ? -1 : 1), i);
      }
    }
  };

  function Ur(t) {
    return .5 * t + 300;
  }

  var Gi = {
    mixins: [Xi],
    props: {
      animation: String
    },
    data: {
      animation: "slide",
      clsActivated: "bs-transition-active",
      Animations: wi,
      Transitioner: function (r, o, s, t) {
        var e = t.animation,
            a = t.easing,
            n = e.percent,
            i = e.translate;
        void 0 === (e = e.show) && (e = tt);
        var u = e(s),
            c = new oe();
        return {
          dir: s,
          show: function (t, e, n) {
            var i = this;
            void 0 === e && (e = 0);
            n = n ? "linear" : a;
            return t -= Math.round(t * Q(e, -1, 1)), this.translate(e), qr(o, "itemin", {
              percent: e,
              duration: t,
              timing: n,
              dir: s
            }), qr(r, "itemout", {
              percent: 1 - e,
              duration: t,
              timing: n,
              dir: s
            }), se.all([Ze.start(o, u[1], t, n), Ze.start(r, u[0], t, n)]).then(function () {
              i.reset(), c.resolve();
            }, tt), c.promise;
          },
          cancel: function () {
            Ze.cancel([o, r]);
          },
          reset: function () {
            for (var t in u[0]) Ve([o, r], t, "");
          },
          forward: function (t, e) {
            return void 0 === e && (e = this.percent()), Ze.cancel([o, r]), this.show(t, e, !0);
          },
          translate: function (t) {
            this.reset();
            var e = i(t, s);
            Ve(o, e[1]), Ve(r, e[0]), qr(o, "itemtranslatein", {
              percent: t,
              dir: s
            }), qr(r, "itemtranslateout", {
              percent: 1 - t,
              dir: s
            });
          },
          percent: function () {
            return n(r || o, o, s);
          },
          getDistance: function () {
            return r && r.offsetWidth;
          }
        };
      }
    },
    computed: {
      animation: function (t) {
        var e = t.animation,
            t = t.Animations;
        return X(t[e] || t.slide, {
          name: e
        });
      },
      transitionOptions: function () {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      "itemshow itemhide itemshown itemhidden": function (t) {
        t = t.target;
        this.$update(t);
      },
      beforeitemshow: function (t) {
        De(t.target, this.clsActive);
      },
      itemshown: function (t) {
        De(t.target, this.clsActivated);
      },
      itemhidden: function (t) {
        Ne(t.target, this.clsActive, this.clsActivated);
      }
    }
  },
      Yr = {
    mixins: [hr, dr, fi, Gi],
    functional: !0,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function () {
      return {
        preload: 1,
        videoAutoplay: !1,
        delayControls: 3e3,
        items: [],
        cls: "bs-open",
        clsPage: "bs-lightbox-page",
        selList: ".bs-lightbox-items",
        attrItem: "bs-lightbox-item",
        selClose: ".bs-close-large",
        selCaption: ".bs-lightbox-caption",
        pauseOnHover: !1,
        velocity: 2,
        Animations: Rr,
        template: '<div class="bs-lightbox bs-overflow-hidden"> <ul class="bs-lightbox-items"></ul> <div class="bs-lightbox-toolbar bs-position-top bs-text-right bs-transition-slide-top bs-transition-opaque"> <button class="bs-lightbox-toolbar-icon bs-close-large" type="button" bs-close></button> </div> <a class="bs-lightbox-button bs-position-center-left bs-position-medium bs-transition-fade" href bs-slidenav-previous bs-lightbox-item="previous"></a> <a class="bs-lightbox-button bs-position-center-right bs-position-medium bs-transition-fade" href bs-slidenav-next bs-lightbox-item="next"></a> <div class="bs-lightbox-toolbar bs-lightbox-caption bs-position-bottom bs-text-center bs-transition-slide-bottom bs-transition-opaque"></div> </div>'
      };
    },
    created: function () {
      var t = Ae(this.template),
          e = Ae(this.selList, t);
      this.items.forEach(function () {
        return we(e, "<li>");
      }), this.$mount(we(this.container, t));
    },
    computed: {
      caption: function (t, e) {
        t.selCaption;
        return Ae(".bs-lightbox-caption", e);
      }
    },
    events: [{
      name: mt + " " + pt + " keydown",
      handler: "showControls"
    }, {
      name: "click",
      self: !0,
      delegate: function () {
        return this.selSlides;
      },
      handler: function (t) {
        t.defaultPrevented || this.hide();
      }
    }, {
      name: "shown",
      self: !0,
      handler: function () {
        this.showControls();
      }
    }, {
      name: "hide",
      self: !0,
      handler: function () {
        this.hideControls(), Ne(this.slides, this.clsActive), Ze.stop(this.slides);
      }
    }, {
      name: "hidden",
      self: !0,
      handler: function () {
        this.$destroy(!0);
      }
    }, {
      name: "keyup",
      el: ut && document,
      handler: function (t) {
        if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
          case 37:
            this.show("previous");
            break;

          case 39:
            this.show("next");
        }
      }
    }, {
      name: "beforeitemshow",
      handler: function (t) {
        this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Rr.scale, Ne(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      }
    }, {
      name: "itemshow",
      handler: function () {
        ve(this.caption, this.getItem().caption || "");

        for (var t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t);
      }
    }, {
      name: "itemshown",
      handler: function () {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: "itemload",
      handler: function (t, n) {
        var i = this,
            r = n.source,
            e = n.type,
            o = n.alt;
        void 0 === o && (o = "");
        var s,
            a,
            u,
            c = n.poster,
            h = n.attrs;
        void 0 === h && (h = {}), this.setItem(n, "<span bs-spinner></span>"), r && (a = {
          frameborder: "0",
          allow: "autoplay",
          allowfullscreen: "",
          style: "max-width: 100%; box-sizing: border-box;",
          "bs-responsive": "",
          "bs-video": "" + this.videoAutoplay
        }, "image" === e || r.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i) ? de(r, h.srcset, h.size).then(function (t) {
          var e = t.width,
              t = t.height;
          return i.setItem(n, Xr("img", X({
            src: r,
            width: e,
            height: t,
            alt: o
          }, h)));
        }, function () {
          return i.setError(n);
        }) : "video" === e || r.match(/\.(mp4|webm|ogv)($|\?)/i) ? (Yt(u = Xr("video", X({
          src: r,
          poster: c,
          controls: "",
          playsinline: "",
          "bs-video": "" + this.videoAutoplay
        }, h)), "loadedmetadata", function () {
          rt(u, {
            width: u.videoWidth,
            height: u.videoHeight
          }), i.setItem(n, u);
        }), Yt(u, "error", function () {
          return i.setError(n);
        })) : "iframe" === e || r.match(/\.(html|php)($|\?)/i) ? this.setItem(n, Xr("iframe", X({
          src: r,
          frameborder: "0",
          allowfullscreen: "",
          class: "bs-lightbox-iframe"
        }, h))) : (s = r.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) ? this.setItem(n, Xr("iframe", X({
          src: "https://www.youtube" + (s[1] || "") + ".com/embed/" + s[2] + (s[3] ? "?" + s[3] : ""),
          width: 1920,
          height: 1080
        }, a, h))) : (s = r.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) && le("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(r), {
          responseType: "json",
          withCredentials: !1
        }).then(function (t) {
          var e = t.response,
              t = e.height,
              e = e.width;
          return i.setItem(n, Xr("iframe", X({
            src: "https://player.vimeo.com/video/" + s[1] + (s[2] ? "?" + s[2] : ""),
            width: e,
            height: t
          }, a, h)));
        }, function () {
          return i.setError(n);
        }));
      }
    }],
    methods: {
      loadItem: function (t) {
        void 0 === t && (t = this.index);
        t = this.getItem(t);
        this.getSlide(t).childElementCount || Kt(this.$el, "itemload", [t]);
      },
      getItem: function (t) {
        return void 0 === t && (t = this.index), this.items[me(t, this.slides)];
      },
      setItem: function (t, e) {
        Kt(this.$el, "itemloaded", [this, ve(this.getSlide(t), e)]);
      },
      getSlide: function (t) {
        return this.slides[this.items.indexOf(t)];
      },
      setError: function (t) {
        this.setItem(t, '<span bs-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function () {
        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), De(this.$el, "bs-active", "bs-transition-active");
      },
      hideControls: function () {
        Ne(this.$el, "bs-active", "bs-transition-active");
      }
    }
  };

  function Xr(t, e) {
    t = Ce("<" + t + ">");
    return rt(t, e), t;
  }

  Ui = {
    install: function (t, e) {
      t.lightboxPanel || t.component("lightboxPanel", Yr);
      X(e.props, t.component("lightboxPanel").options.props);
    },
    props: {
      toggle: String
    },
    data: {
      toggle: "a"
    },
    computed: {
      toggles: {
        get: function (t, e) {
          return Me(t.toggle, e);
        },
        watch: function () {
          this.hide();
        }
      }
    },
    disconnected: function () {
      this.hide();
    },
    events: [{
      name: "click",
      delegate: function () {
        return this.toggle + ":not(.bs-disabled)";
      },
      handler: function (t) {
        t.preventDefault(), this.show(t.current);
      }
    }],
    methods: {
      show: function (t) {
        var e,
            n = this,
            i = Z(this.toggles.map(Gr), "source");
        return A(t) && (e = Gr(t).source, t = y(i, function (t) {
          t = t.source;
          return e === t;
        })), this.panel = this.panel || this.$create("lightboxPanel", X({}, this.$props, {
          items: i
        })), Yt(this.panel.$el, "hidden", function () {
          return n.panel = !1;
        }), this.panel.show(t);
      },
      hide: function () {
        return this.panel && this.panel.hide();
      }
    }
  };

  function Gr(e) {
    var n = {};
    return ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (t) {
      n["href" === t ? "source" : t] = at(e, t);
    }), n.attrs = Tn(n.attrs), n;
  }

  qi = {
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "bs-notification",
      clsClose: "bs-notification-close",
      clsMsg: "bs-notification-message"
    },
    install: function (i) {
      i.notification.closeAll = function (e, n) {
        _e(document.body, function (t) {
          t = i.getComponent(t, "notification");
          !t || e && e !== t.group || t.close(n);
        });
      };
    },
    computed: {
      marginProp: function (t) {
        return "margin" + (g(t.pos, "top") ? "Top" : "Bottom");
      },
      startProps: function () {
        var t = {
          opacity: 0
        };
        return t[this.marginProp] = -this.$el.offsetHeight, t;
      }
    },
    created: function () {
      var t = Ae("." + this.clsContainer + "-" + this.pos, this.$container) || we(this.$container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
      this.$mount(we(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-bs-close></a> <div>' + this.message + "</div> </div>"));
    },
    connected: function () {
      var t,
          e = this,
          n = j(Ve(this.$el, this.marginProp));
      Ze.start(Ve(this.$el, this.startProps), ((t = {
        opacity: 1
      })[this.marginProp] = n, t)).then(function () {
        e.timeout && (e.timer = setTimeout(e.close, e.timeout));
      });
    },
    events: ((Yi = {
      click: function (t) {
        Nt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }
    })[vt] = function () {
      this.timer && clearTimeout(this.timer);
    }, Yi[wt] = function () {
      this.timeout && (this.timer = setTimeout(this.close, this.timeout));
    }, Yi),
    methods: {
      close: function (t) {
        function e(t) {
          var e = Bt(t);
          Kt(t, "close", [n]), ke(t), e && !e.hasChildNodes() && ke(e);
        }

        var n = this;
        this.timer && clearTimeout(this.timer), t ? e(this.$el) : Ze.start(this.$el, this.startProps).then(e);
      }
    }
  };
  var Kr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
      dr = {
    mixins: [ur],
    props: Kr.reduce(function (t, e) {
      return t[e] = "list", t;
    }, {}),
    data: Kr.reduce(function (t, e) {
      return t[e] = void 0, t;
    }, {}),
    computed: {
      props: function (f, p) {
        var m = this;
        return Kr.reduce(function (t, e) {
          if (O(f[e])) return t;
          var n,
              i,
              r = e.match(/color/i),
              o = r || "opacity" === e,
              s = f[e].slice();
          o && Ve(p, e, ""), s.length < 2 && s.unshift(("scale" === e ? 1 : o ? Ve(p, e) : 0) || 0);
          var a,
              u,
              c,
              h,
              l,
              o = s.reduce(function (t, e) {
            return D(e) && e.replace(/-|\d/g, "").trim() || t;
          }, "");

          if (r ? (r = p.style.color, s = s.map(function (t) {
            return Ve(Ve(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(j);
          }), p.style.color = r) : g(e, "bg") ? (a = "bgy" === e ? "height" : "width", s = s.map(function (t) {
            return pn(t, a, m.$el);
          }), Ve(p, "background-position-" + e[2], ""), i = Ve(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], n = m.covers ? (u = Math.min.apply(Math, s), c = Math.max.apply(Math, s), h = s.indexOf(u) < s.indexOf(c), l = c - u, s = s.map(function (t) {
            return t - (h ? u : c);
          }), (h ? -l : 0) + "px") : i) : s = s.map(j), "stroke" === e) {
            if (!s.some(function (t) {
              return t;
            })) return t;
            var d = Fi(m.$el);
            Ve(p, "strokeDasharray", d), "%" === o && (s = s.map(function (t) {
              return t * d / 100;
            })), s = s.reverse(), e = "strokeDashoffset";
          }

          return t[e] = {
            steps: s,
            unit: o,
            pos: n,
            bgPos: i,
            diff: l
          }, t;
        }, {});
      },
      bgProps: function () {
        var e = this;
        return ["bgx", "bgy"].filter(function (t) {
          return t in e.props;
        });
      },
      covers: function (t, e) {
        return i = (n = e).style.backgroundSize, e = "cover" === Ve(Ve(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, e;
        var n, i;
      }
    },
    disconnected: function () {
      delete this._image;
    },
    update: {
      read: function (t) {
        var e,
            n,
            a,
            u,
            c,
            h = this;
        t.active = this.matchMedia, t.active && (t.image || !this.covers || !this.bgProps.length || (e = Ve(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1")) && ((n = new Image()).src = e, (t.image = n).naturalWidth || (n.onload = function () {
          return h.$update();
        })), (n = t.image) && n.naturalWidth && (a = {
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        }, u = {
          width: n.naturalWidth,
          height: n.naturalHeight
        }, c = it.cover(u, a), this.bgProps.forEach(function (t) {
          var e,
              n = h.props[t],
              i = n.diff,
              r = n.bgPos,
              o = n.steps,
              n = "bgy" === t ? "height" : "width",
              s = c[n] - a[n];
          s < i ? a[n] = c[n] + i - s : i < s && (e = a[n] / pn(r, n, h.$el)) && (h.props[t].steps = o.map(function (t) {
            return t - (s - i) / e;
          })), c = it.cover(u, a);
        }), t.dim = c));
      },
      write: function (t) {
        var e = t.dim;
        t.active ? e && Ve(this.$el, {
          backgroundSize: e.width + "px " + e.height + "px",
          backgroundRepeat: "no-repeat"
        }) : Ve(this.$el, {
          backgroundSize: "",
          backgroundRepeat: ""
        });
      },
      events: ["resize"]
    },
    methods: {
      reset: function () {
        var n = this;
        K(this.getCss(0), function (t, e) {
          return Ve(n.$el, e, "");
        });
      },
      getCss: function (l) {
        var d = this.props;
        return Object.keys(d).reduce(function (t, e) {
          var n = d[e],
              i = n.steps,
              r = n.unit,
              o = n.pos,
              s = function (t, e, n) {
            void 0 === n && (n = 2);
            var i = Jr(t, e),
                t = i[0],
                e = i[1],
                i = i[2];
            return (N(t) ? t + Math.abs(t - e) * i * (t < e ? 1 : -1) : +e).toFixed(n);
          }(i, l);

          switch (e) {
            case "x":
            case "y":
              r = r || "px", t.transform += " translate" + p(e) + "(" + j(s).toFixed("px" === r ? 0 : 2) + r + ")";
              break;

            case "rotate":
              r = r || "deg", t.transform += " rotate(" + (s + r) + ")";
              break;

            case "scale":
              t.transform += " scale(" + s + ")";
              break;

            case "bgy":
            case "bgx":
              t["background-position-" + e[2]] = "calc(" + o + " + " + s + "px)";
              break;

            case "color":
            case "backgroundColor":
            case "borderColor":
              var a = Jr(i, l),
                  u = a[0],
                  c = a[1],
                  h = a[2];
              t[e] = "rgba(" + u.map(function (t, e) {
                return t += h * (c[e] - t), 3 === e ? j(t) : parseInt(t, 10);
              }).join(",") + ")";
              break;

            case "blur":
              r = r || "px", t.filter += " blur(" + (s + r) + ")";
              break;

            case "hue":
              r = r || "deg", t.filter += " hue-rotate(" + (s + r) + ")";
              break;

            case "fopacity":
              r = r || "%", t.filter += " opacity(" + (s + r) + ")";
              break;

            case "grayscale":
            case "invert":
            case "saturate":
            case "sepia":
              r = r || "%", t.filter += " " + e + "(" + (s + r) + ")";
              break;

            default:
              t[e] = s;
          }

          return t;
        }, {
          transform: "",
          filter: ""
        });
      }
    }
  };

  function Jr(t, e) {
    var n = t.length - 1,
        i = Math.min(Math.floor(n * e), n - 1),
        i = t.slice(i, i + 2);
    return i.push(1 === e ? 1 : e % (1 / n) * n), i;
  }

  Yi = {
    mixins: [dr],
    props: {
      target: String,
      viewport: Number,
      easing: Number
    },
    data: {
      target: !1,
      viewport: 1,
      easing: 1
    },
    computed: {
      target: function (t, e) {
        t = t.target;
        return function t(e) {
          return e ? "offsetTop" in e ? e : t(Bt(e)) : document.body;
        }(t && xt(t, e) || e);
      }
    },
    update: {
      read: function (t, e) {
        var n = t.percent;

        if ("scroll" !== e && (n = !1), t.active) {
          var i = n;
          return e = Wn(this.target) / (this.viewport || 1), t = this.easing, {
            percent: n = Q(e * (1 - (t - t * e))),
            style: i !== n && this.getCss(n)
          };
        }
      },
      write: function (t) {
        var e = t.style;
        t.active ? e && Ve(this.$el, e) : this.reset();
      },
      events: ["scroll", "resize"]
    }
  };
  ur = {
    update: {
      write: function () {
        var t;
        this.stack.length || this.dragging || (t = this.getValidIndex(this.index), ~this.prevIndex && this.index === t || this.show(t));
      },
      events: ["resize"]
    }
  };

  function Zr(t, e, n) {
    var i = eo(t, e);
    return n ? i - (t = t, on(e).width / 2 - on(t).width / 2) : Math.min(i, Qr(e));
  }

  function Qr(t) {
    return Math.max(0, to(t) - on(t).width);
  }

  function to(t) {
    return Ut(t).reduce(function (t, e) {
      return on(e).width + t;
    }, 0);
  }

  function eo(t, e) {
    return t && (an(t).left + (ht ? on(t).width - on(e).width : 0)) * (ht ? -1 : 1) || 0;
  }

  function no(t, e, n) {
    Kt(t, Jt(e, !1, !1, n));
  }

  Xi = {
    mixins: [di, Xi, ur],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: !1,
      sets: !1,
      attrItem: "bs-slider-item",
      selList: ".bs-slider-items",
      selNav: ".bs-slider-nav",
      clsContainer: "bs-slider-container",
      Transitioner: function (i, r, o, t) {
        var e = t.center,
            s = t.easing,
            a = t.list,
            u = new oe(),
            n = i ? Zr(i, a, e) : Zr(r, a, e) + on(r).width * o,
            c = r ? Zr(r, a, e) : n + on(i).width * o * (ht ? -1 : 1);
        return {
          dir: o,
          show: function (t, e, n) {
            void 0 === e && (e = 0);
            n = n ? "linear" : s;
            return t -= Math.round(t * Q(e, -1, 1)), this.translate(e), i && this.updateTranslates(), e = i ? e : Q(e, 0, 1), no(this.getItemIn(), "itemin", {
              percent: e,
              duration: t,
              timing: n,
              dir: o
            }), i && no(this.getItemIn(!0), "itemout", {
              percent: 1 - e,
              duration: t,
              timing: n,
              dir: o
            }), Ze.start(a, {
              transform: Wr(-c * (ht ? -1 : 1), "px")
            }, t, n).then(u.resolve, tt), u.promise;
          },
          cancel: function () {
            Ze.cancel(a);
          },
          reset: function () {
            Ve(a, "transform", "");
          },
          forward: function (t, e) {
            return void 0 === e && (e = this.percent()), Ze.cancel(a), this.show(t, e, !0);
          },
          translate: function (t) {
            var e = this.getDistance() * o * (ht ? -1 : 1);
            Ve(a, "transform", Wr(Q(e - e * t - c, -to(a), on(a).width) * (ht ? -1 : 1), "px")), this.updateTranslates(), i && (t = Q(t, -1, 1), no(this.getItemIn(), "itemtranslatein", {
              percent: t,
              dir: o
            }), no(this.getItemIn(!0), "itemtranslateout", {
              percent: 1 - t,
              dir: o
            }));
          },
          percent: function () {
            return Math.abs((Ve(a, "transform").split(",")[4] * (ht ? -1 : 1) + n) / (c - n));
          },
          getDistance: function () {
            return Math.abs(c - n);
          },
          getItemIn: function (t) {
            void 0 === t && (t = !1);
            var e = J(this.getActives(), "offsetLeft"),
                n = J(Ut(a), "offsetLeft"),
                e = pe(n, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
            return ~e && n[e + (i && !t ? o : 0)];
          },
          getActives: function () {
            return [i || r].concat(Ut(a).filter(function (t) {
              var e = eo(t, a);
              return n < e && e + on(t).width <= on(a).width + n;
            }));
          },
          updateTranslates: function () {
            var n = this.getActives();
            Ut(a).forEach(function (t) {
              var e = b(n, t);
              no(t, "itemtranslate" + (e ? "in" : "out"), {
                percent: e ? 1 : 0,
                dir: t.offsetLeft <= r.offsetLeft ? 1 : -1
              });
            });
          }
        };
      }
    },
    computed: {
      avgWidth: function () {
        return to(this.list) / this.length;
      },
      finite: function (t) {
        return t.finite || Math.ceil(to(this.list)) < on(this.list).width + (t = this.list, Math.max.apply(Math, [0].concat(Ut(t).map(function (t) {
          return on(t).width;
        })))) + this.center;
      },
      maxIndex: function () {
        var e = this;
        if (!this.finite || this.center && !this.sets) return this.length - 1;
        if (this.center) return G(this.sets);
        Ve(this.slides, "order", "");
        var n = Qr(this.list),
            t = y(this.slides, function (t) {
          return eo(t, e.list) >= n;
        });
        return ~t ? t : this.length - 1;
      },
      sets: function (t) {
        var r = this;

        if (t = t.sets) {
          var o = on(this.list).width / (this.center ? 2 : 1),
              s = 0,
              a = o,
              u = 0;
          return !P(t = J(this.slides, "offsetLeft").reduce(function (t, e, n) {
            var i = on(e).width;
            return s < u + i && (!r.center && n > r.maxIndex && (n = r.maxIndex), b(t, n) || (e = r.slides[n + 1], r.center && e && i < a - on(e).width / 2 ? a -= i : (a = o, t.push(n), s = u + o + (r.center ? i / 2 : 0)))), u += i, t;
          }, [])) && t;
        }
      },
      transitionOptions: function () {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function () {
      He(this.$el, this.clsContainer, !Ae("." + this.clsContainer, this.$el));
    },
    update: {
      write: function () {
        var n = this;
        this.navItems.forEach(function (t) {
          var e = L(at(t, n.attrItem));
          !1 !== e && (t.hidden = !n.maxIndex || e > n.maxIndex || n.sets && !b(n.sets, e));
        }), !this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1));

        var e = this._getTransitioner(this.index).getActives();

        this.slides.forEach(function (t) {
          return He(t, n.clsActive, b(e, t));
        }), this.sets && !b(this.sets, j(this.index)) || this.slides.forEach(function (t) {
          return He(t, n.clsActivated, b(e, t));
        });
      },
      events: ["resize"]
    },
    events: {
      beforeitemshow: function (t) {
        !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
        var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

        if (!this.dragging && 1 < e) {
          for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");

          t.preventDefault();
        } else {
          t = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
          this.duration = Ur(this.avgWidth / this.velocity) * (on(this.slides[t]).width / this.avgWidth), this.reorder();
        }
      },
      itemshow: function () {
        ~this.prevIndex && De(this._getTransitioner().getItemIn(), this.clsActive);
      }
    },
    methods: {
      reorder: function () {
        var n = this;
        if (this.finite) Ve(this.slides, "order", "");else {
          var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
          if (this.slides.forEach(function (t, e) {
            return Ve(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "");
          }), this.center) for (var t = this.slides[i], e = on(this.list).width / 2 - on(t).width / 2, r = 0; 0 < e;) {
            var o = this.getIndex(--r + i, i),
                s = this.slides[o];
            Ve(s, "order", i < o ? -2 : -1), e -= on(s).width;
          }
        }
      },
      getValidIndex: function (t, e) {
        if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
        var n;

        do {
          if (b(this.sets, t)) return t;
        } while ((n = t, (t = this.getIndex(t + this.dir, e)) !== n));

        return t;
      }
    }
  };
  dr = {
    mixins: [dr],
    data: {
      selItem: "!li"
    },
    computed: {
      item: function (t, e) {
        return xt(t.selItem, e);
      }
    },
    events: [{
      name: "itemin itemout",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function (t) {
        var n = this,
            i = t.type,
            t = t.detail,
            r = t.percent,
            o = t.duration,
            s = t.timing,
            a = t.dir;
        gn.read(function () {
          var t = n.getCss(ro(i, a, r)),
              e = n.getCss(io(i) ? .5 : 0 < a ? 1 : 0);
          gn.write(function () {
            Ve(n.$el, t), Ze.start(n.$el, e, o, s).catch(tt);
          });
        });
      }
    }, {
      name: "transitioncanceled transitionend",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function () {
        Ze.cancel(this.$el);
      }
    }, {
      name: "itemtranslatein itemtranslateout",
      self: !0,
      el: function () {
        return this.item;
      },
      handler: function (t) {
        var e = this,
            n = t.type,
            t = t.detail,
            i = t.percent,
            r = t.dir;
        gn.read(function () {
          var t = e.getCss(ro(n, r, i));
          gn.write(function () {
            return Ve(e.$el, t);
          });
        });
      }
    }]
  };

  function io(t) {
    return c(t, "in");
  }

  function ro(t, e, n) {
    return n /= 2, io(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n;
  }

  var oo,
      wi = X({}, wi, {
    fade: {
      show: function () {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function (t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function () {
        return [{
          opacity: 0,
          transform: Vr(1.5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function (t) {
        return 1 - Ve(t, "opacity");
      },
      translate: function (t) {
        return [{
          opacity: 1 - t,
          transform: Vr(1 + .5 * t),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function (t) {
        return t < 0 ? [{
          transform: Wr(30),
          zIndex: -1
        }, {
          transform: Wr(),
          zIndex: 0
        }] : [{
          transform: Wr(-100),
          zIndex: 0
        }, {
          transform: Wr(),
          zIndex: -1
        }];
      },
      percent: function (t, e, n) {
        return n < 0 ? 1 - Fr(e) : Fr(t);
      },
      translate: function (t, e) {
        return e < 0 ? [{
          transform: Wr(30 * t),
          zIndex: -1
        }, {
          transform: Wr(-100 * (1 - t)),
          zIndex: 0
        }] : [{
          transform: Wr(100 * -t),
          zIndex: 0
        }, {
          transform: Wr(30 * (1 - t)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function (t) {
        return t < 0 ? [{
          transform: Wr(100),
          zIndex: 0
        }, {
          transform: Wr(),
          zIndex: -1
        }] : [{
          transform: Wr(-30),
          zIndex: -1
        }, {
          transform: Wr(),
          zIndex: 0
        }];
      },
      percent: function (t, e, n) {
        return 0 < n ? 1 - Fr(e) : Fr(t);
      },
      translate: function (t, e) {
        return e < 0 ? [{
          transform: Wr(100 * t),
          zIndex: 0
        }, {
          transform: Wr(-30 * (1 - t)),
          zIndex: -1
        }] : [{
          transform: Wr(-30 * t),
          zIndex: -1
        }, {
          transform: Wr(100 * (1 - t)),
          zIndex: 0
        }];
      }
    }
  }),
      wi = {
    mixins: [di, Gi, ur],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: "16:9",
      minHeight: !1,
      maxHeight: !1,
      selList: ".bs-slideshow-items",
      attrItem: "bs-slideshow-item",
      selNav: ".bs-slideshow-nav",
      Animations: wi
    },
    update: {
      read: function () {
        var t = this.ratio.split(":").map(Number),
            e = t[0],
            t = (t = t[1]) * this.list.offsetWidth / e || 0;
        return this.minHeight && (t = Math.max(this.minHeight, t)), this.maxHeight && (t = Math.min(this.maxHeight, t)), {
          height: t - dn(this.list, "height", "content-box")
        };
      },
      write: function (t) {
        t = t.height;
        0 < t && Ve(this.list, "minHeight", t);
      },
      events: ["resize"]
    }
  },
      he = {
    mixins: [di, he],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: !1,
      threshold: 5,
      clsItem: "bs-sortable-item",
      clsPlaceholder: "bs-sortable-placeholder",
      clsDrag: "bs-sortable-drag",
      clsDragState: "bs-drag",
      clsBase: "bs-sortable",
      clsNoDrag: "bs-sortable-nodrag",
      clsEmpty: "bs-sortable-empty",
      clsCustom: "",
      handle: !1,
      pos: {}
    },
    created: function () {
      var n = this;
      ["init", "start", "move", "end"].forEach(function (t) {
        var e = n[t];

        n[t] = function (t) {
          X(n.pos, re(t)), e(t);
        };
      });
    },
    events: {
      name: pt,
      passive: !1,
      handler: "init"
    },
    computed: {
      target: function () {
        return (this.$el.tBodies || [this.$el])[0];
      },
      items: function () {
        return Ut(this.target);
      },
      isEmpty: {
        get: function () {
          return P(this.items);
        },
        watch: function (t) {
          He(this.target, this.clsEmpty, t);
        },
        immediate: !0
      },
      handles: {
        get: function (t, e) {
          t = t.handle;
          return t ? Me(t, e) : this.items;
        },
        watch: function (t, e) {
          Ve(e, {
            touchAction: "",
            userSelect: ""
          }), Ve(t, {
            touchAction: ft ? "none" : "",
            userSelect: "none"
          });
        },
        immediate: !0
      }
    },
    update: {
      write: function () {
        var t, e, n, i, r, o, s;
        this.drag && Bt(this.placeholder) && (t = (n = this.pos).x, e = n.y, s = (i = this.origin).offsetTop, r = i.offsetLeft, n = this.placeholder, Ve(this.drag, {
          top: e - s,
          left: t - r
        }), (i = this.getSortable(document.elementFromPoint(t, e))) && ((s = i.items).some(Ze.inProgress) || (o = {
          x: t,
          y: e
        }, r = (r = s)[y(r, function (t) {
          return nt(o, t.getBoundingClientRect());
        })], (!s.length || r && r !== n) && (this.touched.add(i), i !== (s = this.getSortable(n)) && s.remove(n), i.insert(n, function (t, e, n, i, r) {
          var o = Ut(t);
          if (!o.length) return;
          o = 1 === o.length;
          o && we(t, n);

          t = function (i) {
            return i.some(function (t, e) {
              var n = t.getBoundingClientRect();
              return i.slice(e + 1).some(function (t) {
                t = t.getBoundingClientRect();
                return !so([n.left, n.right], [t.left, t.right]);
              });
            });
          }(Ut(t));

          o && ke(n);
          o = e.getBoundingClientRect();
          if (!t) return r < o.top + o.height / 2 ? e : e.nextElementSibling;
          r = n.getBoundingClientRect(), n = so([o.top, o.bottom], [r.top, r.bottom]);
          return n && i > o.left + o.width / 2 || !n && r.top < o.top ? e.nextElementSibling : e;
        }(i.target, r, n, t, e))))));
      },
      events: ["move"]
    },
    methods: {
      init: function (t) {
        var e = t.target,
            n = t.button,
            i = t.defaultPrevented,
            r = this.items.filter(function (t) {
          return Rt(e, t);
        })[0];
        !r || i || 0 < n || Wt(e) || Rt(e, "." + this.clsNoDrag) || this.handle && !Rt(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = r, this.origin = X({
          target: e,
          index: pe(r)
        }, this.pos), Yt(document, mt, this.move), Yt(document, gt, this.end), this.threshold || this.start(t));
      },
      start: function (t) {
        this.drag = function (t, e) {
          t = we(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
          return Ve(t, "margin", "0", "important"), Ve(t, X({
            boxSizing: "border-box",
            width: e.offsetWidth,
            height: e.offsetHeight
          }, Ve(e, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), cn(t.firstElementChild, cn(e.firstElementChild)), t;
        }(this.$container, this.placeholder);

        var e,
            n,
            i = this.placeholder.getBoundingClientRect(),
            r = i.left,
            i = i.top;
        X(this.origin, {
          offsetLeft: this.pos.x - r,
          offsetTop: this.pos.y - i
        }), De(this.drag, this.clsDrag, this.clsCustom), De(this.placeholder, this.clsPlaceholder), De(this.items, this.clsItem), De(document.documentElement, this.clsDragState), Kt(this.$el, "start", [this, this.placeholder]), e = this.pos, n = Date.now(), oo = setInterval(function () {
          var t = e.x,
              s = e.y;
          s += window.pageYOffset;
          var a = .3 * (Date.now() - n);
          n = Date.now(), Vn(document.elementFromPoint(t, e.y)).reverse().some(function (t) {
            var e = t.scrollTop,
                n = t.scrollHeight,
                i = sn(Rn(t)),
                r = i.top,
                o = i.bottom,
                i = i.height;
            if (r < s && s < r + 35) e -= a;else {
              if (!(s < o && o - 35 < s)) return;
              e += a;
            }
            if (0 < e && e < n - i) return jn(t, e), !0;
          });
        }, 15), this.move(t);
      },
      move: function (t) {
        this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t);
      },
      end: function () {
        var t,
            i = this;
        Xt(document, mt, this.move), Xt(document, gt, this.end), Xt(window, "scroll", this.scroll), this.drag && (clearInterval(oo), t = this.getSortable(this.placeholder), this === t ? this.origin.index !== pe(this.placeholder) && Kt(this.$el, "moved", [this, this.placeholder]) : (Kt(t.$el, "added", [t, this.placeholder]), Kt(this.$el, "removed", [this, this.placeholder])), Kt(this.$el, "stop", [this, this.placeholder]), ke(this.drag), this.drag = null, this.touched.forEach(function (t) {
          var e = t.clsPlaceholder,
              n = t.clsItem;
          return i.touched.forEach(function (t) {
            return Ne(t.items, e, n);
          });
        }), this.touched = null, Ne(document.documentElement, this.clsDragState));
      },
      insert: function (t, e) {
        var n,
            i = this;
        e && (t === e || t === e.previousElementSibling) || (De(this.items, this.clsItem), n = function () {
          return e ? be(e, t) : we(i.target, t);
        }, this.animation ? this.animate(n) : n());
      },
      remove: function (t) {
        Rt(t, this.target) && (this.animation ? this.animate(function () {
          return ke(t);
        }) : ke(t));
      },
      getSortable: function (t) {
        do {
          var e = this.$getComponent(t, "sortable");
          if (e && (e === this || !1 !== this.group && e.group === this.group)) return e;
        } while (t = Bt(t));
      }
    }
  };

  function so(t, e) {
    return t[1] > e[0] && e[1] > t[0];
  }

  wt = {
    mixins: [hr, fi, yi],
    args: "title",
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: "top",
      title: "",
      delay: 0,
      animation: ["bs-animation-scale-up"],
      duration: 100,
      cls: "bs-active",
      clsPos: "bs-tooltip"
    },
    beforeConnect: function () {
      var t;
      this._hasTitle = ot(this.$el, "title"), rt(this.$el, "title", ""), this.updateAria(!1), function (t) {
        return Wt(t) || zt(t, "a,button") || ot(t, "tabindex");
      }(t = this.$el) || rt(t, "tabindex", "0");
    },
    disconnected: function () {
      this.hide(), rt(this.$el, "title", this._hasTitle ? this.title : null);
    },
    methods: {
      show: function () {
        var e = this;
        !this.isToggled(this.tooltip) && this.title && (this._unbind = Gt(document, "show keydown", this.hide, !1, function (t) {
          return "keydown" === t.type && 27 === t.keyCode || "show" === t.type && t.detail[0] !== e && t.detail[0].$name === e.$name;
        }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay));
      },
      hide: function () {
        var t = this;
        zt(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip) && this.toggleElement(this.tooltip, !1, !1).then(function () {
          t.tooltip = ke(t.tooltip), t._unbind();
        }));
      },
      _show: function () {
        var n = this;
        this.tooltip = we(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), Yt(this.tooltip, "toggled", function (t, e) {
          n.updateAria(e), e && (n.positionAt(n.tooltip, n.$el), n.origin = "y" === n.getAxis() ? fn(n.dir) + "-" + n.align : n.align + "-" + fn(n.dir));
        }), this.toggleElement(this.tooltip, !0);
      },
      updateAria: function (t) {
        rt(this.$el, "aria-expanded", t);
      }
    },
    events: ((yi = {
      focus: "show",
      blur: "hide"
    })[vt + " " + wt] = function (t) {
      ie(t) || (t.type === vt ? this.show() : this.hide());
    }, yi)
  };
  yi = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: !1,
      clsDragover: "bs-dragover",
      concurrent: 1,
      maxSize: 0,
      method: "POST",
      mime: !1,
      msgInvalidMime: "Invalid File Type: %s",
      msgInvalidName: "Invalid File Name: %s",
      msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
      multiple: !1,
      name: "files[]",
      params: {},
      type: "",
      url: "",
      abort: tt,
      beforeAll: tt,
      beforeSend: tt,
      complete: tt,
      completeAll: tt,
      error: tt,
      fail: tt,
      load: tt,
      loadEnd: tt,
      loadStart: tt,
      progress: tt
    },
    events: {
      change: function (t) {
        zt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      },
      drop: function (t) {
        uo(t);
        t = t.dataTransfer;
        t && t.files && (Ne(this.$el, this.clsDragover), this.upload(t.files));
      },
      dragenter: function (t) {
        uo(t);
      },
      dragover: function (t) {
        uo(t), De(this.$el, this.clsDragover);
      },
      dragleave: function (t) {
        uo(t), Ne(this.$el, this.clsDragover);
      }
    },
    methods: {
      upload: function (t) {
        var i = this;

        if (t.length) {
          Kt(this.$el, "upload", [t]);

          for (var e = 0; e < t.length; e++) {
            if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
            if (this.allow && !ao(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
            if (this.mime && !ao(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime));
          }

          this.multiple || (t = [t[0]]), this.beforeAll(this, t);

          var r = function (t, e) {
            for (var n = [], i = 0; i < t.length; i += e) {
              for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);

              n.push(r);
            }

            return n;
          }(t, this.concurrent),
              o = function (t) {
            var e,
                n = new FormData();

            for (e in t.forEach(function (t) {
              return n.append(i.name, t);
            }), i.params) n.append(e, i.params[e]);

            le(i.url, {
              data: n,
              method: i.method,
              responseType: i.type,
              beforeSend: function (t) {
                var e = t.xhr;
                e.upload && Yt(e.upload, "progress", i.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) {
                  return Yt(e, t.toLowerCase(), i[t]);
                }), i.beforeSend(t);
              }
            }).then(function (t) {
              i.complete(t), r.length ? o(r.shift()) : i.completeAll(t);
            }, function (t) {
              return i.error(t);
            });
          };

          o(r.shift());
        }
      }
    }
  };

  function ao(t, e) {
    return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
  }

  function uo(t) {
    t.preventDefault(), t.stopPropagation();
  }

  return K(Object.freeze({
    __proto__: null,
    Countdown: At,
    Filter: Mi,
    Lightbox: Ui,
    LightboxPanel: Yr,
    Notification: qi,
    Parallax: Yi,
    Slider: Xi,
    SliderParallax: dr,
    Slideshow: wi,
    SlideshowParallax: dr,
    Sortable: he,
    Tooltip: wt,
    Upload: yi
  }), function (t, e) {
    return Zn.component(e, t);
  }), Zn;
});