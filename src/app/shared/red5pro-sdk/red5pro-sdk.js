/*!
 * 
 *   red5pro-sdk - Red5 Pro HTML Publisher and Subscriber SDK.
 *   Author: Infrared5 Inc.
 *   Version: 9.1.2
 *   Url: https://github.com/red5pro/red5pro-html-sdk#readme
 * 
 *   Copyright © 2015 Infrared5, Inc. All rights reserved.
 * 
 *   The accompanying code comprising examples for use solely in conjunction with Red5 Pro (the "Example Code") 
 *   is  licensed  to  you  by  Infrared5  Inc.  in  consideration  of  your  agreement  to  the  following  
 *   license terms  and  conditions.  Access,  use,  modification,  or  redistribution  of  the  accompanying  
 *   code  constitutes your acceptance of the following license terms and conditions.
 * 
 *   Permission is hereby granted, free of charge, to you to use the Example Code and associated documentation 
 *   files (collectively, the "Software") without restriction, including without limitation the rights to use, 
 *   copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
 *   persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 *   The Software shall be used solely in conjunction with Red5 Pro. Red5 Pro is licensed under a separate end 
 *   user  license  agreement  (the  "EULA"),  which  must  be  executed  with  Infrared5,  Inc.   
 *   An  example  of  the EULA can be found on our website at: https://account.red5pro.com/assets/LICENSE.txt.
 * 
 *   The above copyright notice and this license shall be included in all copies or portions of the Software.
 * 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,  INCLUDING  BUT  
 *   NOT  LIMITED  TO  THE  WARRANTIES  OF  MERCHANTABILITY, FITNESS  FOR  A  PARTICULAR  PURPOSE  AND  
 *   NONINFRINGEMENT.   IN  NO  EVENT  SHALL INFRARED5, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 *   WHETHER IN  AN  ACTION  OF  CONTRACT,  TORT  OR  OTHERWISE,  ARISING  FROM,  OUT  OF  OR  IN CONNECTION 
 *   WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.red5prosdk = t() : e.red5prosdk = t()
}(this, function() {
  return function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function(e) {
      return e
    }, t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, t.n = function(e) {
      var n = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 214)
  }([function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
  }, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(96),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(e, r.key, r)
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }()
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.fatal = t.error = t.warn = t.debug = t.info = t.trace = t.getRecordedLogs = t.getLogger = t.establishLogger = t.LEVELS = void 0;
    var r = n(100),
      i = n(123),
      o = void 0,
      a = void 0,
      s = function(e) {
        return function(t) {
          return "(" + e + ") " + t
        }
      },
      u = function(e) {
        return function(t, n) {
          o[e](s(t)(n))
        }
      },
      c = t.LEVELS = {
        TRACE: "trace",
        INFO: "info",
        DEBUG: "debug",
        WARN: "warn",
        ERROR: "error",
        FATAL: "fatal"
      };
    t.establishLogger = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        s = [];
      if (s.push({
          level: e,
          stream: new i.RawStream,
          type: "raw"
        }), n) {
        var u = n.map(function(t) {
          t.level = e
        });
        s = s.concat(u)
      }
      t && (a = [], s.push({
        level: e,
        stream: {
          write: function(e) {
            var t = "[" + e.time.toISOString() + "] " + r.nameFromLevel[e.level] + ": " + e.msg;
            a.push(t)
          }
        }
      })), o = (0, r.createLogger)({
        level: e,
        name: "red5pro-sdk",
        streams: s
      })
    }, t.getLogger = function() {
      return o
    }, t.getRecordedLogs = function() {
      return a
    }, t.trace = u(c.TRACE), t.info = u(c.INFO), t.debug = u(c.DEBUG), t.warn = u(c.WARN), t.error = u(c.ERROR), t.fatal = u(c.FATAL)
  }, function(e, t, n) {
    e.exports = {
      default: n(163),
      __esModule: !0
    }
  }, function(e, t) {
    var n = e.exports = {
      version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var i = n(146),
      o = r(i),
      a = n(144),
      s = r(a),
      u = n(63),
      c = r(u);
    t.default = function(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, c.default)(t)));
      e.prototype = (0, s.default)(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
    }
  }, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(63),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t
    }
  }, function(e, t, n) {
    "use strict";

    function r() {
      !p && window.screenfull && window.screenfull.enabled && (p = !0, window.screenfull.onchange(function() {
        var e = void 0,
          t = f.length;
        for (e = 0; e < t; e++) f[e](window.screenfull.isFullscreen)
      }))
    }

    function i(e) {
      var t = screen.orientation ? screen.orientation.angle : void 0,
        n = void 0 === t ? window.matchMedia("(orientation: portrait)").matches ? 0 : 90 : t,
        r = void 0,
        i = v.length;
      for ((0, d.debug)("[window:onorientationchange]", "orientation(" + n + ")."), r = 0; r < i; r++) v[r]((n + 90) % 360)
    }

    function o(e) {
      var t = void 0,
        n = b.length;
      for (t = 0; t < n; t++) b[t]();
      _ = !0
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = n(63),
      s = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a),
      u = n(8),
      c = n(118),
      l = n(117),
      d = n(2),
      h = [],
      f = [],
      p = !1,
      v = [],
      b = [],
      _ = !1,
      m = function() {
        var e = "0,0,0";
        try {
          e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (t) {
          try {
            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
          } catch (e) {}
        }
        return e.split(",")
      },
      g = function(e) {
        return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
          return window.setTimeout(e, 1e3)
        }
      }(),
      y = window.adapter,
      S = !!navigator.mozGetUserMedia,
      E = !!document.documentMode,
      C = y ? "edge" === window.adapter.browserDetails.browser.toLowerCase() : !E && !!window.StyleMedia,
      w = "ontouchstart" in window || window.DocumentTouch && window.document instanceof window.DocumentTouch;
    y || (navigator.getUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia), t.default = {
      requestFrame: g,
      getIsMoz: function() {
        return S
      },
      getIsEdge: function() {
        return C
      },
      isTouchEnabled: function() {
        return w
      },
      supportsWebSocket: function() {
        return !!window.WebSocket
      },
      supportsHLS: function() {
        var e = document.createElement("video");
        return e.canPlayType("application/vnd.apple.mpegURL").length > 0 || e.canPlayType("application/x-mpegURL").length > 0 || e.canPlayType("audio/mpegurl").length > 0 || e.canPlayType("audio/x-mpegurl").length > 0
      },
      supportsFlashVersion: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".";
        return m()[0] >= e.split(t)[0]
      },
      resolveElement: function(e) {
        try {
          var t = document.getElementById(e);
          if (!t) throw new c.NoElementFoundError("Element with id(" + e + ") could not be found.");
          return t
        } catch (t) {
          throw new c.NoElementFoundError("Error in accessing element with id(" + e + "). " + t.message)
        }
      },
      createWebSocket: function(e) {
        return new WebSocket(e);
      },
      setVideoSource: function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
          e.srcObject = t
        } catch (n) {
          (0, d.warn)("[setVideoSource:obj]", "Could not set srcObject: " + n.message), S ? e.mozSrcObject = t : e.src = window.URL.createObjectURL(t)
        }
        if (n) try {
          var r = e.play();
          r && r.then(function() {
            return (0, d.debug)("[setVideoSource:action]", "play (START)")
          }).catch(function(e) {
            return (0, d.warn)("[setVideoSource:action]", "play (FAULT) " + (e.message ? e.message : e))
          })
        } catch (t) {
          (0, d.warn)("[setVideoSource:action]", "play (CATCH::FAULT) " + t.message);
          try {
            e.setAttribute("autoplay", !1), e.pause()
          } catch (e) {
            (0, d.warn)("[setVideoSource:action]", "pause (CATCH::FAULT) " + e.message)
          }
        } else try {
          e.setAttribute("autoplay", !1), e.pause()
        } catch (e) {}
      },
      injectScript: function(e) {
        var t = new u.DeferredPromise,
          n = document.createElement("script");
        return n.type = "text/javascript", n.onload = function() {
          t.resolve()
        }, n.onreadystatechange = function() {
          "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t.resolve())
        }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n), t.promise
      },
      gUM: function(e) {
        return (navigator.mediaDevices || navigator).getUserMedia(e)
      },
      setGlobal: function(e, t) {
        window[e] = t
      },
      getSwfObject: function() {
        return window.swfobject
      },
      getEmbedObject: function(e) {
        return document.getElementById(e)
      },
      getElementId: function(e) {
        return e.getAttribute("id")
      },
      addOrientationChangeHandler: function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        "onorientationchange" in window && ((0, d.debug)("[window:orientation]", "[addOrientationChangeHandler]", "adding responder."), v.push(e), t && i()), 1 === v.length && ((0, d.debug)("[window:orientation]", "[addOrientationChangeHandler]", "onorientationchange added."), window.addEventListener("orientationchange", i))
      },
      removeOrientationChangeHandler: function(e) {
        for (var t = v.length; --t > -1;)
          if (v[t] === e) {
            v.slice(t, 1);
            break
          } 0 === v.length && ((0, d.debug)("[window:orientation]", "[removeOrientationChangeHandler]:: onorientationchange removed."), window.removeEventListener("onorientationchange", i))
      },
      addCloseHandler: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        b.splice(-1 === t ? b.length : t, 0, e), _ || window.addEventListener("unload", o)
      },
      removeCloseHandler: function(e) {
        for (var t = b.length; --t > -1;)
          if (b[t] === e) {
            b.slice(t, 1);
            break
          }
      },
      invoke: function(e, t) {
        window.hasOwnProperty(e) && window[e].call(window, t)
      },
      toggleFullScreen: function(e) {
        window.screenfull && window.screenfull.enabled && window.screenfull.toggle(e)
      },
      onFullScreenStateChange: function(e) {
        f.push(e), r(window.screenfull)
      },
      onOrientationMetadata: l.onOrientationMetadata,
      onStreamingModeMetadata: l.onStreamingModeMetadata,
      hasAttributeDefined: function(e, t) {
        var n = e.getAttribute(t);
        return null !== n && void 0 !== (void 0 === n ? "undefined" : (0, s.default)(n)) && "string" == typeof n && ("" === n || "true" === n || n === t)
      },
      hasClassDefined: function(e, t) {
        return e.classList.contains(t)
      },
      createElement: function(e, t) {
        return "text" === e ? document.createTextNode(t.toString()) : document.createElement(e, t)
      },
      addSubscriptionAssignmentHandler: function(e) {
        h.push(e), void 0 === window.setSubscriberId && (window.setSubscriberId = function(e) {
          h.shift()(e)
        })
      },
      getMouseXFromEvent: function(e) {
        return e || (e = window.event), e.pageX ? e.pageX : e.clientX ? e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft : 0
      },
      getScrollX: function() {
        return void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
      },
      createEvent: function(e) {
        return document.createEvent(e)
      },
      getGlobal: function() {
        return window
      }
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Future = t.DeferredPromise = void 0;
    var i = n(62),
      o = r(i),
      a = n(0),
      s = r(a),
      u = function e() {
        var t = this;
        (0, s.default)(this, e), this.resolve = void 0, this.reject = void 0, this.promise = new o.default(function(e, n) {
          t.resolve = e, t.reject = n
        })
      },
      c = {
        createIfNotExist: function(e) {
          var t = e;
          return t || (t = new u), t
        }
      };
    t.DeferredPromise = u, t.Future = c
  }, function(e, t, n) {
    var r = n(75)("wks"),
      i = n(57),
      o = n(12).Symbol,
      a = "function" == typeof o;
    (e.exports = function(e) {
      return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
    }).store = r
  }, function(e, t, n) {
    e.exports = {
      default: n(154),
      __esModule: !0
    }
  }, function(e, t, n) {
    var r = n(12),
      i = n(4),
      o = n(20),
      a = n(22),
      s = function(e, t, n) {
        var u, c, l, d = e & s.F,
          h = e & s.G,
          f = e & s.S,
          p = e & s.P,
          v = e & s.B,
          b = e & s.W,
          _ = h ? i : i[t] || (i[t] = {}),
          m = _.prototype,
          g = h ? r : f ? r[t] : (r[t] || {}).prototype;
        h && (n = t);
        for (u in n)(c = !d && g && void 0 !== g[u]) && u in _ || (l = c ? g[u] : n[u], _[u] = h && "function" != typeof g[u] ? n[u] : v && c ? o(l, r) : b && g[u] == l ? function(e) {
          var t = function(t, n, r) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t);
                case 2:
                  return new e(t, n)
              }
              return new e(t, n, r)
            }
            return e.apply(this, arguments)
          };
          return t.prototype = e.prototype, t
        }(l) : p && "function" == typeof l ? o(Function.call, l) : l, p && ((_.virtual || (_.virtual = {}))[u] = l, e & s.R && m && !m[u] && a(m, u, l)))
      };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
  }, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MessageTransportStateEventTypes = t.SharedObjectEventTypes = t.FailoverSubscriberEventTypes = t.RTMPSubscriberEventTypes = t.RTCSubscriberEventTypes = t.SubscriberEventTypes = t.FailoverPublisherEventTypes = t.RTMPPublisherEventTypes = t.RTCPublisherEventTypes = t.PublisherEventTypes = t.MessageTransportStateEvent = t.SharedObjectEvent = t.SubscriberEvent = t.PublisherEvent = t.Event = void 0;
    var i = n(3),
      o = r(i),
      a = n(6),
      s = r(a),
      u = n(5),
      c = r(u),
      l = n(0),
      d = r(l),
      h = n(1),
      f = r(h),
      p = n(84);
    Object.defineProperty(t, "PublisherEventTypes", {
      enumerable: !0,
      get: function() {
        return p.PublisherEventTypes
      }
    }), Object.defineProperty(t, "RTCPublisherEventTypes", {
      enumerable: !0,
      get: function() {
        return p.RTCPublisherEventTypes
      }
    }), Object.defineProperty(t, "RTMPPublisherEventTypes", {
      enumerable: !0,
      get: function() {
        return p.RTMPPublisherEventTypes
      }
    }), Object.defineProperty(t, "FailoverPublisherEventTypes", {
      enumerable: !0,
      get: function() {
        return p.FailoverPublisherEventTypes
      }
    });
    var v = n(86);
    Object.defineProperty(t, "SubscriberEventTypes", {
      enumerable: !0,
      get: function() {
        return v.SubscriberEventTypes
      }
    }), Object.defineProperty(t, "RTCSubscriberEventTypes", {
      enumerable: !0,
      get: function() {
        return v.RTCSubscriberEventTypes
      }
    }), Object.defineProperty(t, "RTMPSubscriberEventTypes", {
      enumerable: !0,
      get: function() {
        return v.RTMPSubscriberEventTypes
      }
    }), Object.defineProperty(t, "FailoverSubscriberEventTypes", {
      enumerable: !0,
      get: function() {
        return v.FailoverSubscriberEventTypes
      }
    });
    var b = n(85);
    Object.defineProperty(t, "SharedObjectEventTypes", {
      enumerable: !0,
      get: function() {
        return b.SharedObjectEventTypes
      }
    });
    var _ = n(83);
    Object.defineProperty(t, "MessageTransportStateEventTypes", {
      enumerable: !0,
      get: function() {
        return _.MessageTransportStateEventTypes
      }
    });
    var m = function() {
        function e(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
          (0, d.default)(this, e), this._type = t, this._data = n
        }
        return (0, f.default)(e, [{
          key: "type",
          get: function() {
            return this._type
          }
        }, {
          key: "data",
          get: function() {
            return this._data
          }
        }]), e
      }(),
      g = function(e) {
        function t(e, n, r) {
          (0, d.default)(this, t);
          var i = (0, s.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
          return i._publisher = n, i
        }
        return (0, c.default)(t, e), (0, f.default)(t, [{
          key: "publisher",
          get: function() {
            return this._publisher
          }
        }]), t
      }(m),
      y = function(e) {
        function t(e, n, r) {
          (0, d.default)(this, t);
          var i = (0, s.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
          return i._subscriber = n, i
        }
        return (0, c.default)(t, e), (0, f.default)(t, [{
          key: "subscriber",
          get: function() {
            return this._subscriber
          }
        }]), t
      }(m),
      S = function(e) {
        function t(e, n, r) {
          (0, d.default)(this, t);
          var i = (0, s.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
          return i._name = n, i
        }
        return (0, c.default)(t, e), (0, f.default)(t, [{
          key: "name",
          get: function() {
            return this._name
          }
        }]), t
      }(m),
      E = function(e) {
        function t(e, n, r) {
          (0, d.default)(this, t);
          var i = (0, s.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
          return i._name = n, i
        }
        return (0, c.default)(t, e), (0, f.default)(t, [{
          key: "name",
          get: function() {
            return this._name
          }
        }]), t
      }(m);
    t.Event = m, t.PublisherEvent = g, t.SubscriberEvent = y, t.SharedObjectEvent = S, t.MessageTransportStateEvent = E
  }, function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function(e, t, n) {
    var r = n(16),
      i = n(104),
      o = n(77),
      a = Object.defineProperty;
    t.f = n(17) ? Object.defineProperty : function(e, t, n) {
      if (r(e), t = o(t, !0), r(n), i) try {
        return a(e, t, n)
      } catch (e) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  }, function(e, t, n) {
    var r = n(14);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function(e, t, n) {
    e.exports = !n(26)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, n) {
    e.exports = {
      default: n(161),
      __esModule: !0
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = r(i),
      a = n(1),
      s = r(a),
      u = "RED5PRO",
      c = function() {
        function e() {
          (0, o.default)(this, e), this._callbacks = {}, this._callbacks[u] = []
        }
        return (0, s.default)(e, [{
          key: "_notify",
          value: function(e, t) {
            var n = void 0,
              r = e.length;
            for (n = 0; n < r; n++) e[n](t)
          }
        }, {
          key: "on",
          value: function(e, t) {
            if ("function" == typeof t) {
              if ("*" === e) return void this._callbacks[u].push(t);
              void 0 === this._callbacks[e] && (this._callbacks[e] = []), -1 === this._callbacks[e].indexOf(t) && this._callbacks[e].push(t)
            }
          }
        }, {
          key: "off",
          value: function(e, t) {
            var n = this._callbacks[e];
            if ("*" === e && (n = this._callbacks[u]), n) {
              var r = n.indexOf(t); - 1 !== r && n.splice(r, 1)
            }
          }
        }, {
          key: "trigger",
          value: function(e) {
            var t = e.type;
            this._callbacks[t] && this._notify(this._callbacks[t], e), this._notify(this._callbacks[u], e)
          }
        }]), e
      }();
    t.default = c
  }, function(e, t, n) {
    var r = n(64);
    e.exports = function(e, t, n) {
      if (r(e), void 0 === t) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n)
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r)
          };
        case 3:
          return function(n, r, i) {
            return e.call(t, n, r, i)
          }
      }
      return function() {
        return e.apply(t, arguments)
      }
    }
  }, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t)
    }
  }, function(e, t, n) {
    var r = n(15),
      i = n(41);
    e.exports = n(17) ? function(e, t, n) {
      return r.f(e, t, i(1, n))
    } : function(e, t, n) {
      return e[t] = n, e
    }
  }, function(e, t, n) {
    var r = n(69),
      i = n(50);
    e.exports = function(e) {
      return r(i(e))
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PlaybackControlsImpl = t.PlaybackControls = t.PlaybackController = void 0;
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(5),
      f = r(h),
      p = n(19),
      v = r(p),
      b = n(7),
      _ = r(b),
      m = n(131),
      g = r(m),
      y = n(91),
      S = n(37),
      E = n(2),
      C = "PlaybackControls",
      w = function(e) {
        function t() {
          return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this))
        }
        return (0, f.default)(t, e), (0, c.default)(t, [{
          key: "play",
          value: function() {}
        }, {
          key: "pause",
          value: function() {}
        }, {
          key: "resume",
          value: function() {}
        }, {
          key: "stop",
          value: function() {}
        }, {
          key: "mute",
          value: function() {}
        }, {
          key: "unmute",
          value: function() {}
        }, {
          key: "setVolume",
          value: function(e) {}
        }, {
          key: "seekTo",
          value: function(e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          }
        }, {
          key: "toggleFullScreen",
          value: function() {}
        }]), t
      }(v.default),
      T = function() {
        function e() {
          (0, s.default)(this, e)
        }
        return (0, c.default)(e, [{
          key: "getVolume",
          value: function() {}
        }, {
          key: "setVolume",
          value: function(e) {}
        }, {
          key: "setSeekTime",
          value: function(e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          }
        }, {
          key: "setPlaybackDuration",
          value: function(e) {}
        }, {
          key: "getState",
          value: function() {}
        }, {
          key: "setState",
          value: function(e) {}
        }, {
          key: "setAsVOD",
          value: function(e) {}
        }, {
          key: "enable",
          value: function(e) {}
        }]), e
      }(),
      k = function(e) {
        function t(e, n) {
          (0, s.default)(this, t);
          var r = (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this));
          return r.player = e, r.container = n, r._controlbar = void 0, r._playPauseButton = void 0, r._muteButton = void 0, r._volumeField = void 0, r._seekTimeField = void 0, r._timeField = void 0, r._fullScreenButton = void 0, r._state = S.PlaybackState.IDLE, r._mutedState = !1, r._resumeAfterSeek = !1, r._playbackDuration = 0, r._volumeValue = 1, r._onPlayPauseClickBound = r._onPlayPauseClick.bind(r), r.decorate(r.container), r
        }
        return (0, f.default)(t, e), (0, c.default)(t, [{
          key: "decorate",
          value: function(e) {
            (0, E.debug)(C, "[decorate]");
            var t = _.default.createElement("div");
            t.classList.add("red5pro-media-control-bar"), this._playPauseButton = this._createPlayPauseButton(), this._muteButton = this._createMuteButton(), this._volumeField = this._createVolumeControl(), this._seekTimeField = this._createSeekControl(), this._timeField = this._createPlaybackTime(), this._fullScreenButton = this._createFullScreenToggle(), t.appendChild(this._playPauseButton), t.appendChild(this._timeField), t.appendChild(this._seekTimeField.view), t.appendChild(this._muteButton), t.appendChild(this._volumeField.view), t.appendChild(this._fullScreenButton), e.appendChild(t), this._controlbar = t;
            var n = void 0,
              r = function() {
                clearTimeout(n), n = setTimeout(function() {
                  t.classList.remove("red5pro-media-control-bar-show")
                }, 6e3)
              };
            _.default.isTouchEnabled() ? (t.classList.add("red5pro-media-control-bar-show"), this.container.addEventListener("touchend", function() {
              t.classList.toggle("red5pro-media-control-bar-show"), r()
            }), r()) : (this.container.addEventListener("mouseover", function() {
              t.classList.add("red5pro-media-control-bar-show")
            }), this.container.addEventListener("mouseout", function() {
              t.classList.remove("red5pro-media-control-bar-show")
            })), this.setState(S.PlaybackState.IDLE).onFullScreenChange(!1).setSeekTime(0).enable(!1)
          }
        }, {
          key: "_onPlayPauseClick",
          value: function() {
            this.getState() === S.PlaybackState.PLAYING ? this.player.pause() : this.getState() === S.PlaybackState.PAUSED ? this.player.resume() : this.player.play()
          }
        }, {
          key: "_createPlayPauseButton",
          value: function() {
            var e = _.default.createElement("button");
            return e.setAttribute("aria-label", "Toggle Playback"), e.classList.add("red5pro-media-control-element"), e.classList.add("red5pro-media-element-button"), e.classList.add("red5pro-media-playpause-button"), e
          }
        }, {
          key: "_createMuteButton",
          value: function() {
            var e = this,
              t = _.default.createElement("button");
            return t.setAttribute("aria-label", "Toggle Mute Audio"), t.classList.add("red5pro-media-control-element"), t.classList.add("red5pro-media-element-button"), t.classList.add("red5pro-media-muteunmute-button"), t.addEventListener("click", function() {
              e.getMutedState() ? (e.player.unmute(), e.setMutedState(!1)) : (e.player.mute(), e.setMutedState(!0))
            }), t
          }
        }, {
          key: "_createVolumeControl",
          value: function() {
            var e = this,
              t = new g.default("volume");
            return t.view.classList.add("red5pro-media-control-element"), t.view.classList.add("red5pro-media-volume-slider"), t.view.classList.add("red5pro-media-slider"), t.on(y.SliderEventTypes.CHANGE, function(t) {
              var n = Number(t.data);
              e.player.setVolume(n)
            }), t
          }
        }, {
          key: "_createSeekControl",
          value: function() {
            var e = this,
              t = new g.default("seek");
            return t.view.classList.add("red5pro-media-control-element"), t.view.classList.add("red5pro-media-seektime-slider"), t.view.classList.add("red5pro-media-slider"), t.on(y.SliderEventTypes.CHANGE_START, function() {
              e.getState() === S.PlaybackState.PLAYING && (e._resumeAfterSeek = !0, e.player.pause())
            }), t.on(y.SliderEventTypes.CHANGE, function(t) {
              var n = Number(t.data);
              e.player.seekTo(n, 0 === e._playbackDuration ? void 0 : e._playbackDuration), e.setSeekTime(n * e._playbackDuration, e._playbackDuration)
            }), t.on(y.SliderEventTypes.CHANGE_COMPLETE, function() {
              e._resumeAfterSeek && e.getState() === S.PlaybackState.PAUSED && (e._resumeAfterSeek = !1, e.player.resume())
            }), t
          }
        }, {
          key: "_createPlaybackTime",
          value: function() {
            var e = _.default.createElement("span"),
              t = _.default.createElement("text", "hello!");
            return e.classList.add("red5pro-media-control-element"), e.classList.add("red5pro-media-time-field"), e.appendChild(t), e
          }
        }, {
          key: "_createFullScreenToggle",
          value: function() {
            var e = this,
              t = _.default.createElement("button");
            return t.setAttribute("aria-label", "Toggle Fullscreen"), t.classList.add("red5pro-media-control-element"), t.classList.add("red5pro-media-element-button"), t.classList.add("red5pro-media-fullscreen-button"), t.addEventListener("click", function() {
              e.player.toggleFullScreen()
            }), t
          }
        }, {
          key: "enable",
          value: function(e) {
            e ? (this._playPauseButton.classList.remove("red5pro-media-element-button-disabled"), this._playPauseButton.addEventListener("click", this._onPlayPauseClickBound)) : (this._playPauseButton.classList.add("red5pro-media-element-button-disabled"), this._playPauseButton.removeEventListener("click", this._onPlayPauseClickBound))
          }
        }, {
          key: "formatTime",
          value: function(e) {
            var t = 0,
              n = 0 === e ? 0 : parseInt(e / 60),
              r = 0;
            n >= 60 && (t = parseInt(n / 60), n %= 60), r = 0 === e ? 0 : parseInt(e % 60);
            var i = t < 10 ? ["0" + t] : [t];
            return i.push(n < 10 ? ["0" + n] : [n]), i.push(r < 10 ? ["0" + r] : [r]), i.join(":")
          }
        }, {
          key: "getVolume",
          value: function() {
            return this._volumeValue
          }
        }, {
          key: "setVolume",
          value: function(e) {
            return this._volumeField.value = e, this._volumeValue = e, 0 === e ? this.setMutedState(!0) : this.getMutedState() && this.setMutedState(!1), this
          }
        }, {
          key: "setSeekTime",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return this._seekTimeField.value = 0 === t ? 0 : e / t, 0 !== this._playbackDuration && parseInt(this._playbackDuration) <= parseInt(e) && (this._seekTimeField.value = 1), this._timeField.innerText = this.formatTime(Math.floor(e)), this
          }
        }, {
          key: "setPlaybackDuration",
          value: function(e) {
            (0, E.debug)(C, "[setplaybackduration]: " + e), this._playbackDuration = e
          }
        }, {
          key: "getState",
          value: function() {
            return this._state
          }
        }, {
          key: "setState",
          value: function(e) {
            return (0, E.debug)(C, "[setState]: " + S.PlaybackStateReadable[e]), this._state = e, this.onStateChange(this._state), this
          }
        }, {
          key: "getMutedState",
          value: function() {
            return "muted" in this.player ? this.player.muted : this._mutedState
          }
        }, {
          key: "setMutedState",
          value: function(e) {
            return this._mutedState = e, this.onMutedStateChange(this._mutedState), this
          }
        }, {
          key: "onStateChange",
          value: function(e) {
            return e === S.PlaybackState.PLAYING ? (this._playPauseButton.classList.remove("red5pro-media-play-button"), this._playPauseButton.classList.add("red5pro-media-pause-button")) : (this._playPauseButton.classList.add("red5pro-media-play-button"), this._playPauseButton.classList.remove("red5pro-media-pause-button")), this
          }
        }, {
          key: "onMutedStateChange",
          value: function(e) {
            e ? (this._muteButton.classList.add("red5pro-media-mute-button"), this._muteButton.classList.remove("red5pro-media-unmute-button"), this._volumeField.value = 0) : (this._muteButton.classList.remove("red5pro-media-mute-button"), this._muteButton.classList.add("red5pro-media-unmute-button"), this._volumeField.value = this._volumeValue)
          }
        }, {
          key: "onFullScreenChange",
          value: function(e) {
            return e ? (this._fullScreenButton.classList.add("red5pro-media-exit-fullscreen-button"), this._fullScreenButton.classList.remove("red5pro-media-fullscreen-button")) : (this._fullScreenButton.classList.remove("red5pro-media-exit-fullscreen-button"), this._fullScreenButton.classList.add("red5pro-media-fullscreen-button")), this
          }
        }, {
          key: "setAsVOD",
          value: function(e) {
            (0, E.debug)(C, "[setAsVOD]: " + e), e ? this._seekTimeField.disabled = !1 : (this._seekTimeField.value = 0, this._seekTimeField.disabled = !0)
          }
        }, {
          key: "detach",
          value: function() {
            this.enable(!1), this._controlbar && this._controlbar.parentNode === this.container && this.container.removeChild(this._controlbar)
          }
        }]), t
      }(T);
    t.PlaybackController = w, t.PlaybackControls = T, t.PlaybackControlsImpl = k
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.isObjectEmpty = t.metadataResolutionToObject = t.deepCopy = t.deepDefine = void 0;
    var i = n(38),
      o = r(i),
      a = n(10),
      s = r(a);
    t.deepDefine = function(e, t, n) {
      var r = 0,
        i = e,
        o = t.pop(),
        a = t.length;
      for (r; r < a; r++) {
        var s = t[r];
        i[s] = i[s] || {}, i = i[s]
      }
      i[o] = n
    }, t.deepCopy = function(e) {
      var t = (0, s.default)(e);
      return JSON.parse(t)
    }, t.metadataResolutionToObject = function(e) {
      if ("string" == typeof e) {
        var t = e.split(",");
        return {
          width: parseInt(t[0]),
          height: parseInt(t[1])
        }
      }
      return e
    }, t.isObjectEmpty = function(e) {
      return 0 === (0, o.default)(e).length && e.constructor === Object
    }
  }, function(e, t) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(187)(!0);
    n(70)(String, "String", function(e) {
      this._t = String(e), this._i = 0
    }, function() {
      var e, t = this._t,
        n = this._i;
      return n >= t.length ? {
        value: void 0,
        done: !0
      } : (e = r(t, n), this._i += e.length, {
        value: e,
        done: !1
      })
    })
  }, function(e, t, n) {
    n(192);
    for (var r = n(12), i = n(22), o = n(32), a = n(9)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
      var c = s[u],
        l = r[c],
        d = l && l.prototype;
      d && !d[a] && i(d, a, c), o[c] = o.Array
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RTCSessionDescription = t.RTCIceCandidate = t.RTCPeerConnection = t.updateBandwidth = t.forceUserMedia = t.getUserMedia = t.supportsDataChannel = t.isSupported = t.determineSupportedResolution = t.quickResolutionSupport = void 0;
    var i = n(10),
      o = r(i),
      a = n(7),
      s = r(a),
      u = n(8),
      c = n(93),
      l = n(25),
      d = n(2),
      h = [{
        label: "4K(UHD)",
        width: 3840,
        height: 2160
      }, {
        label: "1080p(FHD)",
        width: 1920,
        height: 1080
      }, {
        label: "UXGA",
        width: 1600,
        height: 1200
      }, {
        label: "720p(HD)",
        width: 1280,
        height: 720
      }, {
        label: "SVGA",
        width: 800,
        height: 600
      }, {
        label: "VGA",
        width: 640,
        height: 480
      }, {
        label: "360p(nHD)",
        width: 640,
        height: 360
      }, {
        label: "CIF",
        width: 352,
        height: 288
      }, {
        label: "QVGA",
        width: 320,
        height: 240
      }, {
        label: "QCIF",
        width: 176,
        height: 144
      }, {
        label: "QQVGA",
        width: 160,
        height: 120
      }],
      f = function(e) {
        return e.hasOwnProperty("video") && (e.video.hasOwnProperty("width") || e.video.hasOwnProperty("height"))
      },
      p = function(e) {
        return e.exact || e.ideal || e.max || e.min || e
      },
      v = (0, c.curry)(function(e, t) {
        if ("boolean" == typeof e.video) return !0;
        var n = e.video.hasOwnProperty("width") ? p(e.video.width) : 0,
          r = e.video.hasOwnProperty("height") ? p(e.video.height) : 0,
          i = n === t.width && r === t.height;
        return i && (0, d.debug)("[gum:isExact]", "Found matching resolution for " + t.width + ", " + t.height + "."), i
      }),
      b = (0, c.curry)(function(e, t) {
        var n = e.video.hasOwnProperty("width") ? p(e.video.width) : 0,
          r = e.video.hasOwnProperty("height") ? p(e.video.height) : 0,
          i = n * r;
        return t.width * t.height < i
      }),
      _ = (0, c.curry)(function(e, t) {
        var n = (0, c.filter)(v(t))(e);
        return (0, d.debug)("[gum:hasMatchingFormat]", "Filtered list: " + (0, o.default)(n, null, 2)), n.length > 0
      }),
      m = (0, c.curry)(function(e, t) {
        var n = b(t);
        return (0, c.filter)(n)(e)
      }),
      g = function(e, t) {
        e.video = !0, s.default.gUM(e).then(function(n) {
          t.resolve({
            media: n,
            constraints: e
          })
        }).catch(function(n) {
          var r = "string" == typeof n ? n : [n.name, n.message].join(": ");
          (0, d.debug)("[gum:getUserMedia]", "Failure in getUserMedia: " + r + ". Attempting other resolution tests..."), (0, d.debug)("[gUM:findformat]", "Constraints declined by browser: " + (0, o.default)(e, null, 2)), t.reject("Could not find proper camera for provided constraints.")
        })
      },
      y = function e(t, n, r) {
        if (0 == n.length) return void g(t, r);
        var i = n.shift();
        t.video.width = {
          exact: i.width
        }, t.video.height = {
          exact: i.height
        }, s.default.gUM(t).then(function(e) {
          r.resolve({
            media: e,
            constraints: t
          })
        }).catch(function(i) {
          var a = "string" == typeof i ? i : [i.name, i.message].join(": ");
          (0, d.debug)("[gum:getUserMedia]", "Failure in getUserMedia: " + a + ". Attempting other resolution tests..."), (0, d.debug)("[gUM:findformat]", "Constraints declined by browser: " + (0, o.default)(t, null, 2)), e(t, n, r)
        })
      },
      S = t.quickResolutionSupport = function(e) {
        var t = (0, l.deepCopy)(e);
        return "boolean" == typeof e.video ? t : (e.video.width && (t.video.width = {
          exact: p(e.video.width)
        }), e.video.height && (t.video.height = {
          exact: p(e.video.height)
        }), t)
      },
      E = t.determineSupportedResolution = function(e) {
        (0, d.debug)("[gum:determineSupportedResolution]", "Determine next neighbor based on constraints: " + (0, o.default)(e, null, 2));
        var t = new u.DeferredPromise,
          n = m(h)(e),
          r = (0, l.deepCopy)(e);
        return y(r, n, t), t.promise
      },
      C = t.isSupported = function() {
        return w && T && k
      },
      w = (t.supportsDataChannel = function() {
        try {
          var e = new w(null);
          return e.createDataChannel({
            name: "test"
          }).close(), e.close(), !!C()
        } catch (e) {
          return (0, d.debug)("Could not detect RTCDataChannel support: " + e.message), !1
        }
      }, t.getUserMedia = function(e, t) {
        var n = new u.DeferredPromise,
          r = _(h);
        (0, d.debug)("[gum:getUserMedia]", "Is Available in format listing: " + r(e));
        var i = function(r) {
          if (r) {
            var i = "string" == typeof r ? r : [r.name, r.message].join(": ");
            (0, d.debug)("[gum:getUserMedia]", "Failure in getUserMedia: " + i + ". Attempting other resolution tests...")
          }
          E(e).then(function(e) {
            n.resolve({
              media: e.media,
              constraints: e.constraints
            })
          }).catch(function(r) {
            t && t(e), n.reject({
              error: r,
              constraints: e
            })
          })
        };
        if (f(e))
          if (r(e)) {
            (0, d.debug)("[gum:getUserMedia]", "Found constraints in list. Checking quick support for faster setup with: " + (0, o.default)(e, null, 2));
            var a = S(e);
            s.default.gUM(a).then(function(e) {
              n.resolve({
                media: e,
                constraints: a
              })
            }).catch(i)
          } else(0, d.debug)("[gum:getUserMedia]", "Could not find contraints in list. Attempting failover..."), t && t(e), i();
        else(0, d.debug)("[gum:getUserMedia]", "Constraints were not defined properly. Attempting failover..."), s.default.gUM(e).then(function(t) {
          n.resolve({
            media: t,
            constraints: e
          })
        }).catch(i);
        return n.promise
      }, t.forceUserMedia = function(e) {
        return s.default.gUM(e)
      }, t.updateBandwidth = function(e, t) {
        var n = t.indexOf("m=audio"),
          r = t.indexOf("m=video"),
          i = void 0,
          o = void 0,
          a = void 0;
        return n > -1 && (e.audio && (i = t.indexOf("\r\n", n), o = t.slice(0, i), a = t.slice(i + "\r\n".length, t.length), t = [o, "b=AS:" + e.audio, a].join("\r\n")), r = t.indexOf("m=video")), r > -1 && e.video && (i = t.indexOf("\r\n", r), o = t.slice(0, i), a = t.slice(i + "\r\n".length, t.length), t = [o, "b=AS:" + e.video, a].join("\r\n")), -1 === n && -1 === r && (t = t.replace(/b=AS([^\r\n]+\r\n)/g, ""), e.audio && (t = t.replace(/a=mid:audio\r\n/g, "a=mid:audio\r\nb=AS:" + e.audio + "\r\n")), e.video && (t = t.replace(/a=mid:video\r\n/g, "a=mid:video\r\nb=AS:" + e.video + "\r\n"))), t
      }, window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection),
      T = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate,
      k = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    t.RTCPeerConnection = w, t.RTCIceCandidate = T, t.RTCSessionDescription = k
  }, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(143),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = i.default || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var i = n(3),
      o = r(i),
      a = n(145),
      s = r(a);
    t.default = function e(t, n, r) {
      null === t && (t = Function.prototype);
      var i = (0, s.default)(t, n);
      if (void 0 === i) {
        var a = (0, o.default)(t);
        return null === a ? void 0 : e(a, n, r)
      }
      if ("value" in i) return i.value;
      var u = i.get;
      if (void 0 !== u) return u.call(r)
    }
  }, function(e, t) {
    e.exports = {}
  }, function(e, t, n) {
    var r = n(57)("meta"),
      i = n(14),
      o = n(21),
      a = n(15).f,
      s = 0,
      u = Object.isExtensible || function() {
        return !0
      },
      c = !n(26)(function() {
        return u(Object.preventExtensions({}))
      }),
      l = function(e) {
        a(e, r, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        })
      },
      d = function(e, t) {
        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!o(e, r)) {
          if (!u(e)) return "F";
          if (!t) return "E";
          l(e)
        }
        return e[r].i
      },
      h = function(e, t) {
        if (!o(e, r)) {
          if (!u(e)) return !0;
          if (!t) return !1;
          l(e)
        }
        return e[r].w
      },
      f = function(e) {
        return c && p.NEED && u(e) && !o(e, r) && l(e), e
      },
      p = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: d,
        getWeak: h,
        onFreeze: f
      }
  }, function(e, t, n) {
    var r = n(113),
      i = n(68);
    e.exports = Object.keys || function(e) {
      return r(e, i)
    }
  }, function(e, t, n) {
    var r = n(50);
    e.exports = function(e) {
      return Object(r(e))
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PlaybackVideoEncoder = t.PlaybackAudioEncoder = t.PlaybackTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.PlaybackTypes = (0, i.default)({
      RTC: "rtc",
      RTMP: "rtmp",
      HLS: "hls"
    }), t.PlaybackAudioEncoder = (0, i.default)({
      OPUS: "Opus",
      PCMU: "PCMU",
      PCMA: "PCMA",
      SPEEX: "Speex",
      NONE: "NONE"
    }), t.PlaybackVideoEncoder = (0, i.default)({
      VP8: "VP8",
      H264: "H264",
      NONE: "NONE"
    })
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PlaybackStateReadable = t.PlaybackState = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.PlaybackState = (0, i.default)({
      UNAVAILABLE: 1e3,
      AVAILABLE: 0,
      IDLE: 1,
      PLAYING: 2,
      PAUSED: 3
    }), t.PlaybackStateReadable = (0, i.default)({
      1e3: "Playback.UNAVAILABLE",
      0: "Playback.AVAILABLE",
      1: "Playback.IDLE",
      2: "Playback.PLAYING",
      3: "Playback.PAUSED"
    })
  }, function(e, t, n) {
    e.exports = {
      default: n(164),
      __esModule: !0
    }
  }, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
      return n.call(e).slice(8, -1)
    }
  }, function(e, t, n) {
    var r = n(20),
      i = n(107),
      o = n(105),
      a = n(16),
      s = n(56),
      u = n(80),
      c = {},
      l = {},
      t = e.exports = function(e, t, n, d, h) {
        var f, p, v, b, _ = h ? function() {
            return e
          } : u(e),
          m = r(n, d, t ? 2 : 1),
          g = 0;
        if ("function" != typeof _) throw TypeError(e + " is not iterable!");
        if (o(_)) {
          for (f = s(e.length); f > g; g++)
            if ((b = t ? m(a(p = e[g])[0], p[1]) : m(e[g])) === c || b === l) return b
        } else
          for (v = _.call(e); !(p = v.next()).done;)
            if ((b = i(v, m, p.value, t)) === c || b === l) return b
      };
    t.BREAK = c, t.RETURN = l
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function(e, t, n) {
    var r = n(15).f,
      i = n(21),
      o = n(9)("toStringTag");
    e.exports = function(e, t, n) {
      e && !i(e = n ? e : e.prototype, o) && r(e, o, {
        configurable: !0,
        value: t
      })
    }
  }, function(e, t) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.create = t.isSupported = void 0;
    var r = n(7);
    var i = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(r);
    t.isSupported = function() {
      return i.default.supportsWebSocket()
    };
    t.create = function(e) {
      return i.default.createWebSocket(e)
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(44),
      _ = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(b),
      m = n(7),
      g = r(m),
      y = n(87),
      S = r(y),
      E = n(13),
      C = n(2),
      w = "R5ProSocketProxy",
      T = function(e) {
        function t(e, n) {
          (0, c.default)(this, t);
          var r = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, n || w));
          return r._responder = e, r._pendingPostRequests = [], r._websocket = void 0, r._connectionPromise = void 0, r._responseHandlers = [], r._isTerminated = !1, r._retryCount = 0, r._retryLimit = 1, r._readyCheckCount = 0, r._readyCheckLimit = 10, r._openState = 0, r._onclose = r.tearDown.bind(r), r._onopenTimeout = 0, r
        }
        return (0, v.default)(t, e), (0, d.default)(t, [{
          key: "_resetOnopenTimeout",
          value: function(e, t) {
            var n = this,
              r = setTimeout(function() {
                if (clearTimeout(r), 1 === e.readyState) {
                  for ((0, C.info)(n._name, "[websocketopen]"), n._openState = 1; n._pendingPostRequests.length > 0;) n.post(n._pendingPostRequests.shift());
                  n._responder && n._responder.onSocketOpen && n._responder.onSocketOpen(), n.trigger(new E.MessageTransportStateEvent(E.MessageTransportStateEventTypes.OPEN, n._name, {
                    socket: n
                  }))
                } else 0 === e.readyState ? ++n._readyCheckCount > n._readyCheckLimit ? ((0, C.warn)(n._name, "WebSocket connection issue. We have waited for " + (n._readyCheckCount - 1) + " samples, without any connection."), n.clearRetry(), t.reject({
                  type: "Timeout"
                }), n.tearDown()) : ((0, C.info)(n._name, "WebSocket connection is still opening, will let it continue (" + n._readyCheckCount + ")..."), n._onopenTimeout = n._resetOnopenTimeout(e, t)) : (0, C.info)(n._name, "WebSocket connection attempts have ended with state (" + e.readyState + ").")
              }, 500);
            return r
          }
        }, {
          key: "_removeSocketHandlers",
          value: function(e) {
            e && (e.onopen = void 0, e.onmessage = void 0, e.onerror = void 0, e.onclose = void 0)
          }
        }, {
          key: "_addSocketHandlers",
          value: function(e, t) {
            var n = this;
            this._openState = 0, this._readyCheckCount = 0, clearTimeout(this._onopenTimeout), this._onopenTimeout = this._resetOnopenTimeout(e, t), e.onerror = function(e) {
              (0, C.warn)(n._name, "[websocketerror]: Error from WebSocket. " + e.type + "."), n.clearRetry(), t.reject(e), n.trigger(new E.MessageTransportStateEvent(E.MessageTransportStateEventTypes.ERROR, n._name, {
                socket: n,
                error: e
              }))
            }, e.onmessage = function(e) {
              n.respond(e)
            }, e.onclose = function(t) {
              t.code > 1e3 ? (0, C.warn)(n._name, "[websocketclose]: " + t.code) : (0, C.debug)(n._name, "[websocketclose]: " + t.code), n._responder && n._responder.onSocketClose && n._responder.onSocketClose(t), n.clearRetry(), n._removeSocketHandlers(e || n._websocket), n._openState = 0, n.trigger(new E.MessageTransportStateEvent(E.MessageTransportStateEventTypes.CLOSE, n._name, {
                socket: n,
                event: t
              }))
            }
          }
        }, {
          key: "_onUnexpectedSocketError",
          value: function(e) {
            this._responder && this._responder.onSocketClose && this._responder.onSocketClose(e), this.trigger(new E.MessageTransportStateEvent(E.MessageTransportStateEventTypes.CLOSE, this._name, {
              socket: this
            })), (0, C.warn)(this._name, "[websocketerror]: Possible Unexpected Error from WebSocket. " + e.type + ", " + e.detail), this.clearRetry(), this._removeSocketHandlers(this._websocket)
          }
        }, {
          key: "clearRetry",
          value: function() {
            this._retryCount = 0, this._readyCheckCount = 0, clearTimeout(this._onopenTimeout)
          }
        }, {
          key: "setUp",
          value: function(e, t) {
            const n = this;
            const r = g.default.getIsMoz() || g.default.getIsEdge();
            (0, C.debug)(this._name, "[websocket:setup] " + e + ".");
            this.tearDown();
            this._isTerminated = !1;
            this._connectionPromise = t;
            g.default.addCloseHandler(this._onclose);
            this._websocket = _.create(e);
            this._addSocketHandlers(this._websocket, this._connectionPromise);
            if (r && this._retryCount++ < this._retryLimit) {
              (0, C.debug)(this._name, "We have determined it is Firefox and are setting up a retry limit.");
              var i = setTimeout(function() {
                n._websocket && 0 === n._websocket.readyState && ((0, C.debug)(n._name, "[websocket:FF-timeout]"), (0, C.debug)(n._name, "Our connection on Firefox to the wss endpoint has timed out. Let's try that again."), n._removeSocketHandlers(n._websocket), n.setUp(e, t)), clearTimeout(i)
              }, 2e3)
            }
          }
        }, {
          key: "setUpWithSocket",
          value: function(e, t) {
            (0, C.debug)(this._name, "[websocket:setupWithSocket] " + e.url + "."), this.tearDown(), this._isTerminated = !1, this._connectionPromise = t, g.default.addCloseHandler(this._onclose), this._websocket = e, this._addSocketHandlers(this._websocket, this._connectionPromise)
          }
        }, {
          key: "sever",
          value: function(e) {
            (0, C.debug)(this._name, "[websocket:sever]"), this._websocket && (e && this.post(e), this._removeSocketHandlers(this._websocket), this.tearDown())
          }
        }, {
          key: "tearDown",
          value: function() {
            if (this._pendingPostRequests.length = 0, void 0 !== this._websocket && !this._isTerminated) {
              (0, C.debug)(this._name, "[teardown] >>"), (0, C.debug)(this._name, "[WebSocket(" + this._websocket.url + ")] close() >>");
              try {
                this._websocket.close()
              } catch (e) {
                (0, C.warn)(this._name, "Attempt to close WebSocket failed: " + e.message + "."), this._removeSocketHandlers(this._websocket)
              } finally {
                this._websocket && (0, C.debug)(this._name, "<< [WebSocket(" + this._websocket.url + ")] close()")
              }(0, C.debug)(this._name, "<< [teardown]")
            }
            for (this._websocket = void 0, this._isTerminated = !0, this._openState = 0; this._responseHandlers.length > 0;) this._responseHandlers.shift();
            g.default.removeCloseHandler(this._onclose)
          }
        }, {
          key: "postEndOfCandidates",
          value: function(e) {
            this.post({
              handleCandidate: e,
              data: {
                candidate: {
                  type: "candidate",
                  candidate: ""
                }
              }
            })
          }
        }, {
          key: "post",
          value: function(e) {
            if (void 0 === this._websocket || 1 !== this._openState) return (void 0 === this._websocket || 2 !== this._websocket.readyState && 3 !== this._websocket.readyState) && (!this._isTerminated && (this._pendingPostRequests.push(e), !0));
            try {
              return (0, C.debug)(this._name, "[websocket-post]: " + (0, o.default)(e, null, 2)), this._websocket.send((0, o.default)(e)), !0
            } catch (t) {
              return (0, C.debug)(this._name, "Could not send request: " + e + ". " + t), !1
            }
          }
        }, {
          key: "respond",
          value: function(e) {
            var t = this.handleMessageResponse(e);
            if (!t && e.data) {
              var n = this.getJsonFromSocketMessage(e);
              if (null === n) return (0, C.warn)(this._name, "Determined websocket response not in correct format. Aborting message handle."), !0;
              if ((0, C.debug)(this._name, "[websocket-response]: " + (0, o.default)(n, null, 2)), void 0 !== n.isAvailable) return "boolean" == typeof n.isAvailable && n.isAvailable ? (this._responder && this._responder.onStreamAvailable(n), !0) : (this._responder && this._responder.onStreamUnavailable(n), !0);
              if (n.async && n.id) {
                var r = this._asyncTickets.find(function(e) {
                    return e.id === n.id
                  }),
                  i = r.promise;
                i && n.data ? i.resolve(n.data) : i && n.error && i.reject(n.error)
              } else if (void 0 !== n.data) {
                var a = n.data;
                if (void 0 !== a.message) {
                  if ("error" === a.type && this._responder) return this._responder.onSocketMessageError(a.message, a.detail), !0
                } else if ("status" === a.type) {
                  if ("NetConnection.Connect.Success" === a.code) return this._websocket.onerror = this._onUnexpectedSocketError.bind(this), this._connectionPromise.resolve(this), !0;
                  if ("NetConnection.DataChannel.Available" === a.code) return this._responder.onDataChannelAvailable(a.description), !0;
                  if ("NetConnection.Connect.Rejected" === a.code) return this._connectionPromise.reject("NetConnection.Connect.Rejected"), !0
                } else if ("error" === a.type) {
                  if ("NetConnection.Connect.Rejected" === a.code) return this._connectionPromise.reject("NetConnection.Connect.Rejected"), !0;
                  if ("NetConnection.Connect.Failed" === a.code) return this._connectionPromise.reject("NetConnection.Connect.Failed"), !0
                }
              }
            }
            return t
          }
        }, {
          key: "isTerminated",
          get: function() {
            return this._isTerminated
          }
        }]), t
      }(S.default);
    t.default = T
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.hlsSocketEndpointFromOptions = t.rtcSocketEndpointFromOptions = t.encodeKeyValues = void 0;
    var i = n(30),
      o = r(i),
      a = n(38),
      s = r(a),
      u = function(e) {
        switch (e) {
          case 8083:
          case "8083":
            return console.warn("The default WebSocket port on the server has changed from 8083 to 443 for secure connections."), 443;
          case 8081:
          case "8081":
            return console.warn("The default WebSocket port on the server has changed from 8081 to 5080 or 80 for secure connections."), 5080
        }
        return e
      },
      c = t.encodeKeyValues = function(e) {
        var t = {};
        return (0, s.default)(e).forEach(function(n, r) {
          t[n] = encodeURIComponent(e[n])
        }), t
      };
    t.rtcSocketEndpointFromOptions = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = e.wsprotocol || e.protocol,
        r = u(e.wsport || e.port),
        i = e.context ? [e.app, e.context].join("/") : e.app,
        a = n + "://" + e.host + ":" + r + "/" + i + "/";
      if (void 0 !== e.connectionParams) {
        var l = c(e.connectionParams);
        t = (0, o.default)(t, l)
      }
      if (void 0 !== t) {
        var d = [];
        (0, s.default)(t).forEach(function(e, n) {
          d.push([e, t[e]].join("="))
        }), d.length > 0 && (a += "?" + d.join("&"))
      }
      return a
    }, t.hlsSocketEndpointFromOptions = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = e.socketParams,
        r = e.connectionParams,
        i = n.protocol,
        a = u(n.port || ("wss" === i ? 443 : 5080)),
        l = i + "://" + n.host + ":" + a + "/" + n.app + "/";
      if (r) {
        var d = c(e.connectionParams);
        t = (0, o.default)(t, d)
      }
      if (t) {
        var h = [];
        (0, s.default)(t).forEach(function(e, n) {
          h.push([e, t[e]].join("="))
        }), h.length > 0 && (l += "?" + h.join("&"))
      }
      return l
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PlaybackView = void 0;
    var i = n(0),
      o = r(i),
      a = n(1),
      s = r(a),
      u = n(7),
      c = r(u),
      l = n(2),
      d = "R5ProPlaybackView",
      h = "red5pro-subscriber",
      f = t.PlaybackView = function() {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
          (0, o.default)(this, e);
          try {
            this._targetElement = c.default.resolveElement(t)
          } catch (e) {
            throw (0, l.error)(d, "Could not instantiate a new instance of Red5ProSubscriber. Reason: " + e.message), e
          }
        }
        return (0, s.default)(e, [{
          key: "attachSubscriber",
          value: function(e) {
            (0, l.debug)(d, "[attachsubscriber]"), e.setView(this, c.default.getElementId(this._targetElement))
          }
        }, {
          key: "attachStream",
          value: function(e) {
            var t = this.isAutoplay;
            (0, l.debug)(d, "[attachstream]"), c.default.setVideoSource(this._targetElement, e, t)
          }
        }, {
          key: "detachStream",
          value: function() {
            (0, l.debug)(d, "[detachstream]"), c.default.setVideoSource(this._targetElement, null, this.isAutoplay)
          }
        }, {
          key: "isAutoplay",
          get: function() {
            return c.default.hasAttributeDefined(this._targetElement, "autoplay")
          }
        }, {
          key: "view",
          get: function() {
            return this._targetElement
          }
        }]), e
      }();
    t.default = f
  }, function(e, t) {
    e.exports = function(e, t, n, r) {
      if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
      return e
    }
  }, function(e, t, n) {
    var r = n(39),
      i = n(9)("toStringTag"),
      o = "Arguments" == r(function() {
        return arguments
      }()),
      a = function(e, t) {
        try {
          return e[t]
        } catch (e) {}
      };
    e.exports = function(e) {
      var t, n, s;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), i)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
  }, function(e, t) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e
    }
  }, function(e, t) {
    e.exports = !0
  }, function(e, t, n) {
    var r = n(16),
      i = n(183),
      o = n(68),
      a = n(74)("IE_PROTO"),
      s = function() {},
      u = function() {
        var e, t = n(67)("iframe"),
          r = o.length;
        for (t.style.display = "none", n(103).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
        return u()
      };
    e.exports = Object.create || function(e, t) {
      var n;
      return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
    }
  }, function(e, t) {
    t.f = {}.propertyIsEnumerable
  }, function(e, t, n) {
    var r = n(11),
      i = n(4),
      o = n(26);
    e.exports = function(e, t) {
      var n = (i.Object || {})[e] || Object[e],
        a = {};
      a[e] = t(n), r(r.S + r.F * o(function() {
        n(1)
      }), "Object", a)
    }
  }, function(e, t, n) {
    var r = n(22);
    e.exports = function(e, t, n) {
      for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
      return e
    }
  }, function(e, t, n) {
    var r = n(76),
      i = Math.min;
    e.exports = function(e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0
    }
  }, function(e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PublishModeTypes = t.PublishTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.PublishTypes = (0, i.default)({
      RTMP: "rtmp",
      RTC: "rtc"
    }), t.PublishModeTypes = (0, i.default)({
      LIVE: "live",
      RECORD: "record",
      APPEND: "append"
    })
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.IceTransportTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.IceTransportTypes = (0, i.default)({
      UDP: "udp",
      TCP: "tcp"
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(29),
      _ = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(b),
      m = n(87),
      g = r(m),
      y = n(13),
      S = n(8),
      E = n(2),
      C = "R5ProWebRTCPeer",
      w = function(e) {
        function t(e, n) {
          (0, c.default)(this, t);
          var r = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, n || C));
          return r._responder = e, r._dataChannel = void 0, r._peerConnection = void 0, r._onDataChannelMessage = r._onDataChannelMessage.bind(r), r
        }
        return (0, v.default)(t, e), (0, d.default)(t, [{
          key: "_removeDataChannelHandlers",
          value: function(e) {
            e.onopen = void 0, e.onerror = void 0, e.onclose = void 0, e.onmessage = void 0
          }
        }, {
          key: "_addDataChannelHandlers",
          value: function(e) {
            var t = this;
            e.onerror = function(n) {
              t._responder.onDataChannelError(e, n.error.message)
            }, e.onmessage = this._onDataChannelMessage, e.onopen = function() {
              t._responder.onDataChannelOpen(e)
            }, e.onclose = function(n) {
              t._responder.onDataChannelClose(e), t.trigger(new y.MessageTransportStateEvent(y.MessageTransportStateEventTypes.CLOSE, t._name, {
                socket: t,
                event: n
              }))
            }
          }
        }, {
          key: "_removeConnectionHandlers",
          value: function(e) {
            (0, E.warn)(this._name, "_removeConnectionHandlers is abstract.")
          }
        }, {
          key: "_addConnectionHandlers",
          value: function(e, t) {
            (0, E.warn)(this._name, "_addConnectionHandlers is abstract.")
          }
        }, {
          key: "_onDataChannelMessage",
          value: function(e) {
            var t = e.data instanceof ArrayBuffer ? {
              data: {
                message: String.fromCharCode.apply(null, new Uint8Array(e.data))
              }
            } : e;
            if (this.handleMessageResponse(t)) return !0;
            var n = this.getJsonFromSocketMessage(t);
            if (null === n) return (0, E.warn)(this._name, "Determined websocket response not in correct format. Aborting message handle."), !0;
            (0, E.debug)(this._name, "[datachannel-response]: " + (0, o.default)(n, null, 2));
            var r = n.data,
              i = n.method,
              a = n.type,
              s = n.id;
            if (r && r.message && "error" === r.type) return this._responder.onDataChannelError(this._dataChannel, r.message), !0;
            if (r && r.code && "error" === r.type) return this._responder.onDataChannelError(this._dataChannel, r.code), !0;
            if (i) return this._responder.onSendReceived(i, r), !0;
            if ("metadata" === a) return this._responder.onMetaData(r), !0;
            if (r && "status" === r.type) {
              if ("NetConnection.Connect.Closed" === r.code) return this._responder.onConnectionClosed(), !0;
              (0, E.debug)(C, "[datachannel.message] status :: " + r.code)
            } else if (n.async && s) {
              var u = this._asyncTickets.find(function(e) {
                  return e.id === s
                }),
                c = u.promise;
              if (c && n.data) return c.resolve(n.data), !0;
              if (c && n.error) return c.reject(n.error), !0
            }
            return !1
          }
        }, {
          key: "setUp",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            this.tearDown();
            var r = t || new S.DeferredPromise;
            try {
              var i = {
                iceServers: e,
                iceCandidatePoolSize: 2,
                bundlePolicy: "max-bundle"
              };
              void 0 !== n && (i.rtcpMuxPolicy = n), (0, E.debug)(C, "[peerconnection:setup]: " + (0, o.default)(i, null, 2));
              var a = new _.RTCPeerConnection(i, {
                optional: [{
                  RtpDataChannels: !1
                }, {
                  googCpuOveruseDetection: !0
                }]
              });
              this._addConnectionHandlers(a), this._peerConnection = a, r.resolve(a)
            } catch (e) {
              (0, E.warn)(C, "Could not establish a PeerConnection. " + e.message), r.reject(e.message)
            }
            return r.hasOwnProperty("promise") ? r.promise : r
          }
        }, {
          key: "setUpWithPeerConfiguration",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            this.tearDown();
            var r = n || new S.DeferredPromise;
            try {
              (0, E.debug)(C, "[peerconnection:setUpWithPeerConfiguration]: " + (0, o.default)(e, null, 2));
              var i = new _.RTCPeerConnection(e);
              t && (this._dataChannel = i.createDataChannel(t.name, {
                ordered: !0
              }), this._addDataChannelHandlers(this._dataChannel)), this._addConnectionHandlers(i), this._peerConnection = i, r.resolve(i)
            } catch (e) {
              (0, E.warn)(C, "Could not establish a PeerConnection. " + e.message), r.reject(e.message)
            }
            return r.hasOwnProperty("promise") ? r.promise : r
          }
        }, {
          key: "tearDown",
          value: function() {
            if (this._dataChannel) {
              this._removeDataChannelHandlers(this._dataChannel);
              try {
                this._dataChannel.close()
              } catch (e) {
                (0, E.warn)(C, "[datachannel.close] error: " + e.message)
              } finally {
                this._dataChannel = void 0
              }
            }
            if (this._peerConnection) {
              (0, E.debug)(C, "[teardown]"), this._removeConnectionHandlers(this._peerConnection);
              try {
                this._peerConnection.close()
              } catch (e) {
                (0, E.warn)(C, "[peerconnection.close] error: " + e.message)
              } finally {
                this._peerConnection = void 0
              }
            }
          }
        }, {
          key: "setLocalDescription",
          value: function(e) {
            return (0, E.debug)(C, "[setlocaldescription]"), this._peerConnection.setLocalDescription(e)
          }
        }, {
          key: "setRemoteDescription",
          value: function(e) {
            return (0, E.debug)(C, "[setremotedescription]"), this._peerConnection.setRemoteDescription(new _.RTCSessionDescription(e))
          }
        }, {
          key: "addIceCandidate",
          value: function(e) {
            return (0, E.debug)(C, "[addcandidate]"), this._peerConnection.addIceCandidate(e)
          }
        }, {
          key: "post",
          value: function(e) {
            if (this._dataChannel) {
              var t = "string" == typeof e ? e : (0, o.default)(e, null, 2);
              (0, E.debug)(C, "[datachannel.send] message: " + t);
              try {
                return this._dataChannel.send(t), !0
              } catch (e) {
                (0, E.error)(C, e.hasOwnProperty("message") ? e.message : e)
              }
            }
            return !1
          }
        }, {
          key: "connection",
          get: function() {
            return this._peerConnection
          }
        }, {
          key: "dataChannel",
          get: function() {
            return this._dataChannel
          }
        }]), t
      }(g.default);
    t.default = w
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = r(i),
      a = n(1),
      s = r(a),
      u = n(7),
      c = r(u),
      l = n(2),
      d = "R5ProPublishView",
      h = "red5pro-publisher",
      f = function() {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
          (0, o.default)(this, e);
          try {
            this._targetElement = c.default.resolveElement(t)
          } catch (e) {
            throw (0, l.error)(d, "Could not instantiate a new instance of Red5ProPublisher. Reason: " + e.message), e
          }
        }
        return (0, s.default)(e, [{
          key: "attachPublisher",
          value: function(e) {
            (0, l.debug)(d, "[attachpublisher]"), e.setView(this, c.default.getElementId(this._targetElement))
          }
        }, {
          key: "preview",
          value: function(e) {
            var t = this.isAutoplay;
            (0, l.debug)(d, "[preview]: autoplay(" + t + ")"), c.default.setVideoSource(this._targetElement, e, t)
          }
        }, {
          key: "unpreview",
          value: function() {
            c.default.setVideoSource(this._targetElement, null, this.isAutoplay)
          }
        }, {
          key: "isAutoplay",
          get: function() {
            return c.default.hasAttributeDefined(this._targetElement, "autoplay")
          }
        }, {
          key: "view",
          get: function() {
            return this._targetElement
          }
        }]), e
      }();
    t.default = f
  }, function(e, t, n) {
    e.exports = {
      default: n(166),
      __esModule: !0
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var i = n(148),
      o = r(i),
      a = n(147),
      s = r(a),
      u = "function" == typeof s.default && "symbol" == typeof o.default ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
      };
    t.default = "function" == typeof s.default && "symbol" === u(o.default) ? function(e) {
      return void 0 === e ? "undefined" : u(e)
    } : function(e) {
      return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : u(e)
    }
  }, function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  }, function(e, t, n) {
    var r = n(20),
      i = n(69),
      o = n(35),
      a = n(56),
      s = n(175);
    e.exports = function(e, t) {
      var n = 1 == e,
        u = 2 == e,
        c = 3 == e,
        l = 4 == e,
        d = 6 == e,
        h = 5 == e || d,
        f = t || s;
      return function(t, s, p) {
        for (var v, b, _ = o(t), m = i(_), g = r(s, p, 3), y = a(m.length), S = 0, E = n ? f(t, y) : u ? f(t, 0) : void 0; y > S; S++)
          if ((h || S in m) && (v = m[S], b = g(v, S, _), e))
            if (n) E[S] = b;
            else if (b) switch (e) {
          case 3:
            return !0;
          case 5:
            return v;
          case 6:
            return S;
          case 2:
            E.push(v)
        } else if (l) return !1;
        return d ? -1 : c || l ? l : E
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(11),
      o = n(33),
      a = n(26),
      s = n(22),
      u = n(55),
      c = n(40),
      l = n(48),
      d = n(14),
      h = n(42),
      f = n(15).f,
      p = n(65)(0),
      v = n(17);
    e.exports = function(e, t, n, b, _, m) {
      var g = r[e],
        y = g,
        S = _ ? "set" : "add",
        E = y && y.prototype,
        C = {};
      return v && "function" == typeof y && (m || E.forEach && !a(function() {
        (new y).entries().next()
      })) ? (y = t(function(t, n) {
        l(t, y, e, "_c"), t._c = new g, void 0 != n && c(n, _, t[S], t)
      }), p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
        var t = "add" == e || "set" == e;
        e in E && (!m || "clear" != e) && s(y.prototype, e, function(n, r) {
          if (l(this, y, e), !t && m && !d(n)) return "get" == e && void 0;
          var i = this._c[e](0 === n ? 0 : n, r);
          return t ? this : i
        })
      }), "size" in E && f(y.prototype, "size", {
        get: function() {
          return this._c.size
        }
      })) : (y = b.getConstructor(t, e, _, S), u(y.prototype, n), o.NEED = !0), h(y, e), C[e] = y, i(i.G + i.W + i.F, C), m || b.setStrong(y, e, _), y
    }
  }, function(e, t, n) {
    var r = n(14),
      i = n(12).document,
      o = r(i) && r(i.createElement);
    e.exports = function(e) {
      return o ? i.createElement(e) : {}
    }
  }, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function(e, t, n) {
    var r = n(39);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
      return "String" == r(e) ? e.split("") : Object(e)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(51),
      i = n(11),
      o = n(73),
      a = n(22),
      s = n(21),
      u = n(32),
      c = n(180),
      l = n(42),
      d = n(112),
      h = n(9)("iterator"),
      f = !([].keys && "next" in [].keys()),
      p = function() {
        return this
      };
    e.exports = function(e, t, n, v, b, _, m) {
      c(n, t, v);
      var g, y, S, E = function(e) {
          if (!f && e in k) return k[e];
          switch (e) {
            case "keys":
            case "values":
              return function() {
                return new n(this, e)
              }
          }
          return function() {
            return new n(this, e)
          }
        },
        C = t + " Iterator",
        w = "values" == b,
        T = !1,
        k = e.prototype,
        P = k[h] || k["@@iterator"] || b && k[b],
        O = P || E(b),
        R = b ? w ? E("entries") : O : void 0,
        A = "Array" == t ? k.entries || P : P;
      if (A && (S = d(A.call(new e))) !== Object.prototype && (l(S, C, !0), r || s(S, h) || a(S, h, p)), w && P && "values" !== P.name && (T = !0, O = function() {
          return P.call(this)
        }), r && !m || !f && !T && k[h] || a(k, h, O), u[t] = O, u[C] = p, b)
        if (g = {
            values: w ? O : E("values"),
            keys: _ ? O : E("keys"),
            entries: R
          }, m)
          for (y in g) y in k || o(k, y, g[y]);
        else i(i.P + i.F * (f || T), t, g);
      return g
    }
  }, function(e, t, n) {
    var r = n(53),
      i = n(41),
      o = n(23),
      a = n(77),
      s = n(21),
      u = n(104),
      c = Object.getOwnPropertyDescriptor;
    t.f = n(17) ? c : function(e, t) {
      if (e = o(e), t = a(t, !0), u) try {
        return c(e, t)
      } catch (e) {}
      if (s(e, t)) return i(!r.f.call(e, t), e[t])
    }
  }, function(e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function(e, t, n) {
    e.exports = n(22)
  }, function(e, t, n) {
    var r = n(75)("keys"),
      i = n(57);
    e.exports = function(e) {
      return r[e] || (r[e] = i(e))
    }
  }, function(e, t, n) {
    var r = n(12),
      i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function(e) {
      return i[e] || (i[e] = {})
    }
  }, function(e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function(e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
  }, function(e, t, n) {
    var r = n(14);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
      if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
      if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function(e, t, n) {
    var r = n(12),
      i = n(4),
      o = n(51),
      a = n(79),
      s = n(15).f;
    e.exports = function(e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || s(t, e, {
        value: a.f(e)
      })
    }
  }, function(e, t, n) {
    t.f = n(9)
  }, function(e, t, n) {
    var r = n(49),
      i = n(9)("iterator"),
      o = n(32);
    e.exports = n(4).getIteratorMethod = function(e) {
      if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.embedSwfObject = t.defineEmbedElement = void 0;
    var r = n(7),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r),
      o = n(8);
    t.defineEmbedElement = function(e, t) {
      var n = new o.DeferredPromise,
        r = e.id;
      if ("video" === e.nodeName.toLowerCase()) {
        var a = i.default.createElement("div");
        a.id = r + "_rtmp", t.appendChild(a), e.parentElement && e.parentElement.removeChild(e), n.resolve(a.id)
      } else n.resolve(r);
      return n.promise
    }, t.embedSwfObject = function(e, t, n, r, i) {
      var a = new o.DeferredPromise,
        s = {
          quality: "high",
          wmode: "opaque",
          bgcolor: t.backgroundColor || "#000",
          allowscriptaccess: "always",
          allowfullscreen: "true",
          allownetworking: "all"
        },
        u = {
          id: e,
          name: e,
          align: "middle"
        };
      return r.hasFlashPlayerVersion(t.minFlashVersion) ? r.embedSWF(t.swf, i, t.embedWidth || 640, t.embedHeight || 480, t.minFlashVersion, t.productInstallURL, n, s, u, function(e) {
        e.success ? a.resolve() : a.reject("Flash Object embed failed.")
      }) : a.reject("Flash Player Version is not supported."), a.promise
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.applyOrientation = void 0;
    var r = n(7),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r),
      o = i.default.requestFrame,
      a = ["webkitTransformOrigin", "mozTransformOrigin", "msTransformOrigin", "oTransformOrigin", "transformOrigin"],
      s = ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"],
      u = ["webkitTransition", "mozTransition", "msTransition", "oTransition", "transition"],
      c = {
        0: {
          origin: "center center",
          transform: "rotate(0deg)"
        },
        90: {
          origin: "left top",
          transform: "rotate(90deg) translateY(-100%)"
        },
        180: {
          origin: "center center",
          transform: "rotate(180deg)"
        },
        270: {
          origin: "top left",
          transform: "rotate(270deg) translateX(-100%) translateY(0%)"
        },
        "-90": {
          origin: "left top",
          transform: "rotate(-90deg) translateX(-100%)"
        },
        "-180": {
          origin: "center center",
          transform: "rotate(-180deg)"
        },
        "-270": {
          origin: "top left",
          transform: "rotate(-270deg) translateY(-100%)"
        }
      },
      l = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function() {
          var i = t.parentNode;
          if (i) {
            var o = i.clientWidth,
              a = i.clientHeight;
            t.style.width = r ? a + "px" : o + "px";
            var s = t.clientWidth,
              u = t.clientHeight,
              c = .5 * (r ? o - u : o - s);
            t.style.position = "relative", t.style.left = c + "px"
          }
          n && n(e(t, n, r))
        }
      };
    t.applyOrientation = function(e, t, n) {
      var r = void 0,
        i = s.length;
      t %= 360;
      var d = t % 180 != 0,
        h = e.parentNode,
        f = e.width ? e.width : h.clientWidth,
        p = e.height ? e.height : h.clientHeight,
        v = c[t.toString()];
      for (r = 0; r < i; r++) e.style[a[r]] = v.origin, e.style[s[r]] = v.transform, e.style[u[r]] = "transform 0.0s linear";
      d ? (e.style.width = p + "px", h.style.height = p + "px") : (e.style.width = f + "px", e.style.height = p + "px", h.style.height = "unset"), document.attachEvent ? h.attachEvent("resize", l(e, o, d)) : l(e, o, d)()
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MessageTransportStateEventTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.MessageTransportStateEventTypes = (0, i.default)({
      OPEN: "MessageTransport.Open",
      CLOSE: "MessageTransport.Close",
      CHANGE: "MessageTransport.Change",
      ERROR: "MessageTransport.Error"
    })
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RTMPPublisherEventTypes = t.RTCPublisherEventTypes = t.FailoverPublisherEventTypes = t.PublisherEventTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.PublisherEventTypes = (0, i.default)({
      CONNECT_SUCCESS: "Connect.Success",
      CONNECT_FAILURE: "Connect.Failure",
      PUBLISH_START: "Publish.Start",
      PUBLISH_FAIL: "Publish.Fail",
      PUBLISH_INVALID_NAME: "Publish.InvalidName",
      UNPUBLISH_SUCCESS: "Unpublish.Success",
      PUBLISH_METADATA: "Publish.Metadata",
      PUBLISH_STATUS: "Publish.Status",
      PUBLISH_AVAILABLE: "Publish.Available",
      PUBLISH_INSUFFICIENT_BANDWIDTH: "Publish.InsufficientBW",
      PUBLISH_SUFFICIENT_BANDWIDTH: "Publish.SufficientBW",
      PUBLISH_RECOVERING_BANDWIDTH: "Publish.RecoveringBW",
      PUBLISH_SEND_INVOKE: "Publish.Send.Invoke",
      CONNECTION_CLOSED: "Publisher.Connection.Closed",
      DIMENSION_CHANGE: "Publisher.Video.DimensionChange"
    }), t.FailoverPublisherEventTypes = (0, i.default)({
      PUBLISHER_REJECT: "Publisher.Reject",
      PUBLISHER_ACCEPT: "Publisher.Accept"
    }), t.RTCPublisherEventTypes = (0, i.default)({
      CONSTRAINTS_ACCEPTED: "WebRTC.MediaConstraints.Accepted",
      CONSTRAINTS_REJECTED: "WebRTC.MediaConstraints.Rejected",
      MEDIA_STREAM_AVAILABLE: "WebRTC.MediaStream.Available",
      PEER_CONNECTION_AVAILABLE: "WebRTC.PeerConnection.Available",
      OFFER_START: "WebRTC.Offer.Start",
      OFFER_END: "WebRTC.Offer.End",
      PEER_CANDIDATE_END: "WebRTC.PeerConnection.CandidateEnd",
      ICE_TRICKLE_COMPLETE: "WebRTC.IceTrickle.Complete",
      DATA_CHANNEL_OPEN: "WebRTC.DataChannel.Open",
      DATA_CHANNEL_AVAILABLE: "WebRTC.DataChannel.Available",
      DATA_CHANNEL_CLOSE: "WebRTC.DataChannel.Close",
      DATA_CHANNEL_MESSAGE: "WebRTC.DataChannel.Message",
      DATA_CHANNEL_ERROR: "WebRTC.DataChannel.Error",
      PEER_CONNECTION_OPEN: "WebRTC.PeerConnection.Open"
    }), t.RTMPPublisherEventTypes = (0, i.default)({
      EMBED_SUCCESS: "FlashPlayer.Embed.Success",
      EMBED_FAILURE: "FlashPlayer.Embed.Failure"
    })
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SharedObjectEventTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.SharedObjectEventTypes = (0, i.default)({
      CONNECT_SUCCESS: "Connect.Success",
      CONNECT_FAILURE: "Connect.Failure",
      PROPERTY_UPDATE: "SharedObject.PropertyUpdate",
      PROPERTY_REMOVE: "SharedObject.PropertyRemove",
      METHOD_UPDATE: "SharedObject.MethodUpdate",
      CONNECTION_CLOSED: "SharedObject.Connection.Closed"
    })
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RTMPSubscriberEventTypes = t.RTCSubscriberEventTypes = t.FailoverSubscriberEventTypes = t.SubscriberEventTypes = void 0;
    var r = n(18),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.SubscriberEventTypes = (0, i.default)({
      CONNECT_SUCCESS: "Connect.Success",
      CONNECT_FAILURE: "Connect.Failure",
      SUBSCRIBE_START: "Subscribe.Start",
      SUBSCRIBE_STOP: "Subscribe.Stop",
      SUBSCRIBE_FAIL: "Subscribe.Fail",
      SUBSCRIBE_INVALID_NAME: "Subscribe.InvalidName",
      SUBSCRIBE_METADATA: "Subscribe.Metadata",
      SUBSCRIBE_STATUS: "Subscribe.Status",
      SUBSCRIBE_SEND_INVOKE: "Subscribe.Send.Invoke",
      SUBSCRIBE_PUBLISHER_CONGESTION: "Subscribe.Publisher.NetworkCongestion",
      SUBSCRIBE_PUBLISHER_RECOVERY: "Subscribe.Publisher.NetworkRecovery",
      PLAY_UNPUBLISH: "Subscribe.Play.Unpublish",
      CONNECTION_CLOSED: "Subscribe.Connection.Closed",
      ORIENTATION_CHANGE: "Subscribe.Orientation.Change",
      STREAMING_MODE_CHANGE: "Subscribe.StreamingMode.Change",
      VIDEO_DIMENSIONS_CHANGE: "Subscribe.VideoDimensions.Change",
      VOLUME_CHANGE: "Subscribe.Volume.Change",
      PLAYBACK_TIME_UPDATE: "Subscribe.Time.Update",
      PLAYBACK_STATE_CHANGE: "Subscribe.Playback.Change",
      FULL_SCREEN_STATE_CHANGE: "Subscribe.FullScreen.Change",
      AUTO_PLAYBACK_FAILURE: "Subscribe.Autoplay.Failure",
      AUTO_PLAYBACK_MUTED: "Subscribe.Autoplay.Muted"
    }), t.FailoverSubscriberEventTypes = (0, i.default)({
      SUBSCRIBER_REJECT: "Subscriber.Reject",
      SUBSCRIBER_ACCEPT: "Subscriber.Accept"
    }), t.RTCSubscriberEventTypes = (0, i.default)({
      PEER_CONNECTION_AVAILABLE: "WebRTC.PeerConnection.Available",
      OFFER_START: "WebRTC.Offer.Start",
      OFFER_END: "WebRTC.Offer.End",
      ANSWER_START: "WebRTC.Answer.Start",
      ANSWER_END: "WebRTC.Answer.End",
      CANDIDATE_START: "WebRTC.Candidate.Start",
      CANDIDATE_END: "WebRTC.Candidate.End",
      PEER_CANDIDATE_END: "WebRTC.PeerConnection.CandidateEnd",
      ICE_TRICKLE_COMPLETE: "WebRTC.IceTrickle.Complete",
      DATA_CHANNEL_MESSAGE: "WebRTC.DataChannel.Message",
      DATA_CHANNEL_OPEN: "WebRTC.DataChannel.Open",
      DATA_CHANNEL_AVAILABLE: "WebRTC.DataChannel.Available",
      DATA_CHANNEL_CLOSE: "WebRTC.DataChannel.Close",
      DATA_CHANNEL_ERROR: "WebRTC.DataChannel.Error",
      PEER_CONNECTION_OPEN: "WebRTC.PeerConnection.Open",
      ON_ADD_STREAM: "WebRTC.Add.Stream"
    }), t.RTMPSubscriberEventTypes = (0, i.default)({
      EMBED_SUCCESS: "FlashPlayer.Embed.Success",
      EMBED_FAILURE: "FlashPlayer.Embed.Failure",
      ABR_LEVEL_CHANGE: "RTMP.AdaptiveBitrate.Level"
    })
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(5),
      f = r(h),
      p = n(19),
      v = r(p),
      b = n(8),
      _ = n(2),
      m = "MessageTransport",
      g = function(e) {
        function t(e) {
          (0, s.default)(this, t);
          var n = (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this));
          return n._name = e || m, n._responseHandlers = [], n._asyncTickets = [], n
        }
        return (0, f.default)(t, e), (0, c.default)(t, [{
          key: "getJsonFromSocketMessage",
          value: function(e) {
            try {
              return "string" == typeof e.data ? JSON.parse(e.data) : e.data
            } catch (t) {
              (0, _.warn)(this._name, "Could not parse message as JSON. Message= " + e.data + ". Error= " + t.message)
            }
            return null
          }
        }, {
          key: "addResponseHandler",
          value: function(e) {
            this._responseHandlers.push(e)
          }
        }, {
          key: "respond",
          value: function(e) {
            (0, _.warn)(this._name, "respond() should be overriden.")
          }
        }, {
          key: "post",
          value: function(e) {
            (0, _.warn)(this._name, "post() should be overriden.")
          }
        }, {
          key: "postAsync",
          value: function(e) {
            var t = new b.DeferredPromise,
              n = Math.floor(65536 * Math.random()).toString(16);
            return e.id = n, e.async = !0, this._asyncTickets.push({
              id: n,
              promise: t
            }), this.post(e), t.promise
          }
        }, {
          key: "addSharedObjectResponseHandler",
          value: function(e) {
            this._responseHandlers.push(e)
          }
        }, {
          key: "removeSharedObjectResponseHandler",
          value: function(e) {
            for (var t = this._responseHandlers.length; --t > -1;)
              if (this._responseHandlers[t] === e) return void this._responseHandlers.splice(t, 1)
          }
        }, {
          key: "handleMessageResponse",
          value: function(e) {
            var t = void 0,
              n = void 0,
              r = this._responseHandlers.length;
            for (t = 0; t < r; t++)
              if (n = this._responseHandlers[t], n.respond(e)) return !0;
            return !1
          }
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {
            this.post({
              sharedObjectGetRemote: {
                name: e
              }
            })
          }
        }, {
          key: "connectToSharedObject",
          value: function(e) {
            this.post({
              sharedObjectConnect: {
                name: e
              }
            })
          }
        }, {
          key: "sendToSharedObject",
          value: function(e, t, n) {
            this.post({
              sharedObjectSend: {
                name: e,
                method: t,
                message: n
              }
            })
          }
        }, {
          key: "sendPropertyToSharedObject",
          value: function(e, t, n) {
            this.post({
              sharedObjectSetProperty: {
                name: e,
                key: t,
                value: n
              }
            })
          }
        }, {
          key: "closeSharedObject",
          value: function(e) {
            this.post({
              sharedObjectClose: {
                name: e
              }
            })
          }
        }]), t
      }(v.default);
    t.default = g
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(7),
      d = r(l),
      h = n(2),
      f = "R5ProRTMPSharedObjectHandler",
      p = function() {
        function e() {
          (0, s.default)(this, e), this._element = void 0, this._responseHandlers = []
        }
        return (0, c.default)(e, [{
          key: "addResponseHandler",
          value: function(e) {
            this._responseHandlers.push(e)
          }
        }, {
          key: "removeResponseHandler",
          value: function(e) {
            for (var t = this._responseHandlers.length; --t > -1;)
              if (this._responseHandlers[t] === e) return void this._responseHandlers.splice(t, 1)
          }
        }, {
          key: "handleSharedObjectEvent",
          value: function(e) {
            (0, h.debug)(f, "[sharedobject:event]");
            var t = void 0,
              n = this._responseHandlers.length,
              r = void 0;
            for (t = 0; t < n && (r = this._responseHandlers[t], !r.respond(JSON.parse(e))); t++);
          }
        }, {
          key: "assignSharedObjectResponder",
          value: function(e, t) {
            var n = this.handleSharedObjectEvent.bind(this),
              r = t.id.split("-").join("_"),
              i = ["handleSharedObjectEvent", r].join("_");
            (0, h.debug)(f, "[assign:sharedobject:responder] :: " + r), (0, h.debug)(f, "[sharedoject:responder] :: " + i), t.setSharedObjectResponder(e, i), d.default.setGlobal(i, n)
          }
        }, {
          key: "connect",
          value: function(e) {
            this._element = d.default.getEmbedObject(e), this._element || (0, h.warn)("Could not locate embedded Flash object for id: " + e)
          }
        }, {
          key: "disconnect",
          value: function() {
            for (; this._responseHandlers.length > 0;) this._responseHandlers.shift()
          }
        }, {
          key: "sendToSharedObject",
          value: function(e, t, n) {
            (0, h.debug)(f, "[sendToSharedObject]");
            try {
              this._element.sharedObjectSend(e, t, "string" == typeof n ? n : (0, o.default)(n))
            } catch (t) {
              (0, h.warn)("Could not send to shared object (" + e + "). Error: " + t.message)
            }
          }
        }, {
          key: "sendPropertyToSharedObject",
          value: function(e, t, n) {
            (0, h.debug)(f, "[sendPropertyToSharedObject]");
            try {
              this._element.sharedObjectSendProperty(e, t, n)
            } catch (t) {
              (0, h.warn)("Could not send to shared object (" + e + "). Error: " + t.message)
            }
          }
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {
            (0, h.debug)(f, "[getRemoteSharedObject]");
            try {
              this.assignSharedObjectResponder(e, this._element), this._element.getRemoteSharedObject(e)
            } catch (e) {
              (0, h.warn)("Could not get remote shared object (" + name + "). Error: " + e.message)
            }
          }
        }, {
          key: "connectToSharedObject",
          value: function(e) {
            (0, h.debug)(f, "[connectToSharedObject]");
            try {
              this._element.connectToSharedObject(e)
            } catch (e) {
              (0, h.warn)("Could not connect to shared object (" + name + "). Error: " + e.message)
            }
          }
        }, {
          key: "closeSharedObject",
          value: function(e) {
            (0, h.debug)(f, "[disconnectToSharedObject]");
            try {
              this._element.disconnectFromSharedObject(e)
            } catch (e) {
              (0, h.warn)("Could not disconnect to shared object (" + name + "). Error: " + e.message)
            }
          }
        }]), e
      }();
    t.default = p
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RTMPMediaConstraint = t.RTCMediaConstraint = void 0;
    var i = n(0),
      o = r(i),
      a = n(96),
      s = r(a),
      u = function(e, t, n) {
        (0, s.default)(e, t, {
          value: n,
          writable: !0,
          enumerable: !0
        })
      },
      c = function e() {
        (0, o.default)(this, e), u(this, "width", {
          exact: 640
        }), u(this, "height", {
          exact: 480
        })
      },
      l = function e() {
        (0, o.default)(this, e), u(this, "width", 640), u(this, "height", 480), u(this, "force", !1), u(this, "framerate", 15), u(this, "bandwidth", 5e4), u(this, "quality", 80), u(this, "profile", "baseline"), u(this, "level", 3.1)
      },
      d = function e() {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        (0, o.default)(this, e), u(this, "audio", t), u(this, "video", n || new c)
      },
      h = function e() {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        (0, o.default)(this, e), u(this, "audio", t), u(this, "video", n || new l)
      };
    t.RTCMediaConstraint = d, t.RTMPMediaConstraint = h
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(31),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(45),
      _ = r(b),
      m = n(8),
      g = n(46),
      y = function(e) {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
          (0, s.default)(this, t);
          var n = Math.floor(65536 * Math.random()).toString(16),
            r = "sharedobject-" + n,
            i = (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
          return i.id = r, i._sharedObjectName = void 0, i
        }
        return (0, v.default)(t, e), (0, c.default)(t, [{
          key: "getRemoteSharedObject",
          value: function(e) {
            (0, f.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "getRemoteSharedObject", this).call(this, e), this._sharedObjectName = e
          }
        }, {
          key: "init",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
              r = new m.DeferredPromise;
            this.id = t || this.id, this._name = this.id;
            var i = (0, g.rtcSocketEndpointFromOptions)(e, {
              id: this.id,
              capabilities: n
            });
            return this.setUp(i, r), r.promise
          }
        }, {
          key: "respond",
          value: function(e) {
            if (!(0, f.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "respond", this).call(this, e) && e.data) {
              var n = this.getJsonFromSocketMessage(e);
              if (n && n.data) {
                var r = n.data;
                if ("status" === r.type) "NetConnection.Connect.Closed" === r.code ? (this.respond({
                  data: {
                    data: {
                      status: "SharedObject.Status.Disconnect",
                      message: r.code,
                      name: this._sharedObjectName
                    }
                  }
                }), this._sharedObjectName = void 0) : "NetConnection.ICE.TrickleCompleted" === r.code && this._responder ? this._responder.onIceTrickleComplete() : "NetConnection.DataChannel.Available" === r.code && this._responder ? this._responder.onDataChannelAvailable(r.description) : this._responder && this._responder.onSocketStatus(r);
                else if (r.sdp) {
                  var i = r.sdp;
                  "answer" === i.type && this._responder && this._responder.onSDPAnswer(i)
                } else if (r.candidate && this._responder) {
                  var a = r.candidate;
                  this._responder.onAddIceCandidate(a)
                }
              }
            }
          }
        }, {
          key: "close",
          value: function() {
            this._sharedObjectName = void 0, this.tearDown()
          }
        }, {
          key: "getMessageTransport",
          value: function() {
            return this
          }
        }, {
          key: "getConnection",
          value: function() {
            return this
          }
        }]), t
      }(_.default);
    t.default = y
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SliderEventTypes = t.SliderEvent = void 0;
    var i = n(18),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(13),
      _ = function(e) {
        function t(e, n, r) {
          (0, c.default)(this, t);
          var i = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e, r));
          return i._control = n, i
        }
        return (0, v.default)(t, e), (0, d.default)(t, [{
          key: "control",
          get: function() {
            return this._control
          }
        }]), t
      }(b.Event),
      m = (0, o.default)({
        CHANGE_START: "changestart",
        CHANGE: "change",
        CHANGE_COMPLETE: "changecomplete"
      });
    t.SliderEvent = _, t.SliderEventTypes = m
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ImplFactoryOrder = void 0;
    var i = n(149),
      o = r(i),
      a = n(150),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(98),
      f = r(h),
      p = n(8),
      v = new f.default,
      b = function(e) {
        return v.has(e) || v.set(e, {}), v.get(e)
      },
      _ = t.ImplFactoryOrder = function() {
        function e() {
          var t = this;
          (0, c.default)(this, e), this.listorder = function() {
            return s.default.mark(function e(t) {
              return s.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!(t.length > 0)) {
                      e.next = 5;
                      break
                    }
                    return e.next = 3, t.shift();
                  case 3:
                    e.next = 0;
                    break;
                  case 5:
                  case "end":
                    return e.stop()
                }
              }, e, this)
            })
          }(), b(this).find = function(e, n, r, i) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              u = b(t).next(e, n),
              c = (0, o.default)(u, 2),
              l = c[0],
              d = c[1];
            if (d) {
              var h = void 0,
                f = r[l];
              f = f || r, h = a ? (new d)[a](f) : new d(f), h.then(function(e) {
                i.resolve(e)
              }).catch(function(o) {
                s = o, b(t).find(e, n, r, i, a, s)
              })
            } else i.reject(s)
          }, b(this).next = function(e, t) {
            var n = void 0,
              r = void 0,
              i = e.next();
            return i.done || (r = i.value, n = t.get(r)), [r, n]
          }
        }
        return (0, d.default)(e, [{
          key: "create",
          value: function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              i = new p.DeferredPromise;
            return b(this).find(this.listorder(e.slice()), t, n, i, r), i.promise
          }
        }]), e
      }();
    t.default = _
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = t.curry = function(e) {
        var t = e.length;
        return function n() {
          var r = Array.prototype.slice.call(arguments, 0);
          return r.length >= t ? e.apply(null, r) : function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return n.apply(null, r.concat(e))
          }
        }
      },
      i = (t.filter = r(function(e, t) {
        for (var n = 0, r = t.length, i = []; n < r;) e(t[n]) && (i[i.length] = t[n]), n += 1;
        return i
      }), t.toInt = function(e) {
        return "string" == typeof e ? parseInt(e, 10) : Math.round(e)
      });
    t.getOrElse = function(e, t) {
      return e || t
    }, t.getIntOrElse = function(e, t) {
      return isNaN(i(e)) ? t : i(e)
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(155),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(156),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(160),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(167),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(170),
      __esModule: !0
    }
  }, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(139),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return (0, i.default)(e)
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (void 0 === e || null === e) return e;
      if (Array.isArray(e)) return e.slice();
      if ("object" == typeof e) {
        var t = {};
        return Object.keys(e).forEach(function(n) {
          t[n] = e[n]
        }), t
      }
      return e
    }

    function i() {
      var e = {},
        t = Error.stackTraceLimit,
        n = Error.prepareStackTrace;
      return Error.stackTraceLimit = 3, Error.prepareStackTrace = function(t, n) {
        var r = n[2];
        e.file = r.getFileName(), e.line = r.getLineNumber();
        var i = r.getFunctionName();
        i && (e.func = i)
      }, Error.stackTraceLimit = t, Error.prepareStackTrace = n, e
    }

    function o(e, t) {
      return t || (t = "    "), t + e.split(/\r?\n/g).join("\n" + t)
    }

    function a(e, t) {
      if (t) {
        if (_[t]) return;
        _[t] = !0
      }
      console.error(e + "\n")
    }

    function s(e) {
      return _[e]
    }

    function u() {}

    function c() {}

    function l(e) {
      return "string" == typeof e ? C[e.toLowerCase()] : e
    }

    function d(e, t, n) {
      if (!(this instanceof d)) return new d(e, t);
      var i;
      if (void 0 !== t && (i = e, e = t, !(i instanceof d))) throw new TypeError("invalid Logger creation: do not pass a second arg");
      if (!e) throw new TypeError("options (object) is required");
      if (i) {
        if (e.name) throw new TypeError("invalid options.name: child cannot set logger name")
      } else if (!e.name) throw new TypeError("options.name (string) is required");
      if (e.stream && e.streams) throw new TypeError('cannot mix "streams" and "stream" options');
      if (e.streams && !Array.isArray(e.streams)) throw new TypeError("invalid options.streams: must be an array");
      if (e.serializers && ("object" != typeof e.serializers || Array.isArray(e.serializers))) throw new TypeError("invalid options.serializers: must be an object");
      var o, a, s;
      if (i && n) {
        this._isSimpleChild = !0, this._level = i._level, this.streams = i.streams, this.serializers = i.serializers, this.src = i.src, o = this.fields = {};
        var c = Object.keys(i.fields);
        for (s = 0; s < c.length; s++) a = c[s], o[a] = i.fields[a];
        var l = Object.keys(e);
        for (s = 0; s < l.length; s++) a = l[s], o[a] = e[a]
      } else {
        var h = this;
        if (i) {
          for (this._level = i._level, this.streams = [], s = 0; s < i.streams.length; s++) {
            var f = r(i.streams[s]);
            f.closeOnExit = !1, this.streams.push(f)
          }
          this.serializers = r(i.serializers), this.src = i.src, this.fields = r(i.fields), e.level && this.level(e.level)
        } else this._level = Number.POSITIVE_INFINITY, this.streams = [], this.serializers = null, this.src = !1, this.fields = {};
        e.stream ? h.addStream({
          type: "stream",
          stream: e.stream,
          closeOnExit: !1,
          level: e.level
        }) : e.streams ? e.streams.forEach(function(t) {
          h.addStream(t, e.level)
        }) : i && e.level ? this.level(e.level) : i || h.addStream({
          type: "raw",
          stream: new u,
          closeOnExit: !1,
          level: e.level
        }), e.serializers && h.addSerializers(e.serializers), e.src && (this.src = !0), o = r(e), delete o.stream, delete o.level, delete o.streams, delete o.serializers, delete o.src, this.serializers && this._applySerializers(o), Object.keys(o).forEach(function(e) {
          h.fields[e] = o[e]
        })
      }
    }

    function h(e) {
      return function() {
        var t = this,
          n = null,
          o = arguments,
          u = null;
        if (this._emit) {
          if (0 === arguments.length) return this._level <= e;
          this._level > e || (u = function(a) {
            var s;
            a[0] instanceof Error ? (n = {
              err: t.serializers && t.serializers.err ? t.serializers.err(a[0]) : d.stdSerializers.err(a[0])
            }, s = {
              err: !0
            }, o = 1 === a.length ? [n.err.message] : Array.prototype.slice.call(a, 1)) : "object" != typeof a[0] && null !== a[0] || Array.isArray(a[0]) ? (n = null, o = Array.prototype.slice.call(a)) : (n = a[0], o = Array.prototype.slice.call(a, 1));
            var u = r(t.fields);
            u.level = e;
            var c = n ? r(n) : null;
            return c && (t.serializers && t._applySerializers(c, s), Object.keys(c).forEach(function(e) {
              u[e] = c[e]
            })), u.levelName = w[e], u.msg = b.apply(t, o), u.time || (u.time = new Date), t.src && !u.src && (u.src = i()), u.v = v, u
          }(o), this._emit(u))
        } else {
          if (!s.unbound) {
            var c = i();
            a(b("bunyan usage error: %s:%s: attempt to log with an unbound log method: `this` is: %s", c.file, c.line, this.toString()), "unbound")
          }
        }
      }
    }

    function f(e) {
      var t = e.stack || e.toString();
      if (e.cause && "function" == typeof e.cause) {
        var n = e.cause();
        n && (t += "\nCaused by: " + f(n))
      }
      return t
    }

    function p() {
      var e = [];
      return function(t, n) {
        return n && "object" == typeof n ? -1 !== e.indexOf(n) ? "[Circular]" : (e.push(n), n) : n
      }
    }
    var v = 0,
      b = function(e) {
        if (null === e) return "null";
        if ("string" != typeof e) return e.toString();
        for (var t = /%[sdj%]/g, n = 1, r = arguments, i = r.length, o = String(e).replace(t, function(e) {
            if ("%%" === e) return "%";
            if (n >= i) return e;
            switch (e) {
              case "%s":
                return String(r[n++]);
              case "%d":
                return Number(r[n++]);
              case "%j":
                try {
                  return JSON.stringify(r[n++])
                } catch (e) {
                  return "[Circular]"
                }
                break;
              default:
                return e
            }
          }), a = r[n]; n < i; a = r[++n]) o += " " + a;
        return o
      },
      _ = {};
    u.prototype.write = function(e) {
      e.level < g ? console.log(e) : e.level < y ? console.info(e) : e.level < S ? console.warn(e) : console.error(e), e.err && e.err.stack && console.error(e.err.stack)
    }, c.prototype.write = function(e) {
      function t(e, t) {
        return Array(t + 1 - (e + "").length).join("0") + e
      }
      var n;
      n = e.level < m ? "color: DeepPink" : e.level < g ? "color: GoldenRod" : e.level < y ? "color: DarkTurquoise" : e.level < S ? "color: Purple" : e.level < E ? "color: Crimson" : "color: Black";
      var r = e.childName ? e.name + "/" + e.childName : e.name,
        i = w[e.level].toUpperCase();
      i = Array(6 - i.length).join(" ") + i, console.log("[%s:%s:%s:%s] %c%s%c: %s: %c%s", t(e.time.getHours(), 2), t(e.time.getMinutes(), 2), t(e.time.getSeconds(), 2), t(e.time.getMilliseconds(), 4), n, i, "color: DimGray", r, "color: SteelBlue", e.msg), e.err && e.err.stack && console.log("%c%s,", n, e.err.stack)
    };
    var m = 20,
      g = 30,
      y = 40,
      S = 50,
      E = 60,
      C = {
        trace: 10,
        debug: m,
        info: g,
        warn: y,
        error: S,
        fatal: E
      },
      w = {};
    Object.keys(C).forEach(function(e) {
      w[C[e]] = e
    }), d.prototype.addStream = function(e, t) {
      var n = this;
      switch (null !== t && void 0 !== t || (t = g), e = r(e), !e.type && e.stream && (e.type = "raw"), e.raw = "raw" === e.type, e.level ? e.level = l(e.level) : e.level = l(t), e.level < n._level && (n._level = e.level), e.type) {
        case "stream":
        case "raw":
          e.closeOnExit || (e.closeOnExit = !1);
          break;
        default:
          throw new TypeError('unknown stream type "' + e.type + '"')
      }
      n.streams.push(e), delete n.haveNonRawStreams
    }, d.prototype.addSerializers = function(e) {
      var t = this;
      t.serializers || (t.serializers = {}), Object.keys(e).forEach(function(n) {
        var r = e[n];
        if ("function" != typeof r) throw new TypeError(b('invalid serializer for "%s" field: must be a function', n));
        t.serializers[n] = r
      })
    }, d.prototype.child = function(e, t) {
      return new this.constructor(this, e || {}, t)
    }, d.prototype.level = function(e) {
      if (void 0 === e) return this._level;
      for (var t = l(e), n = this.streams.length, r = 0; r < n; r++) this.streams[r].level = t;
      this._level = t
    }, d.prototype.levels = function(e, t) {
      if (void 0 === e) return this.streams.map(function(e) {
        return e.level
      });
      var n;
      if ("number" == typeof e) {
        if (void 0 === (n = this.streams[e])) throw new Error("invalid stream index: " + e)
      } else {
        for (var r = this.streams.length, i = 0; i < r; i++) {
          var o = this.streams[i];
          if (o.name === e) {
            n = o;
            break
          }
        }
        if (!n) throw new Error(b('no stream with name "%s"', e))
      }
      if (void 0 === t) return n.level;
      var a = l(t);
      n.level = a, a < this._level && (this._level = a)
    }, d.prototype._applySerializers = function(e, t) {
      var n = this;
      Object.keys(this.serializers).forEach(function(r) {
        if (!(void 0 === e[r] || t && t[r])) try {
          e[r] = n.serializers[r](e[r])
        } catch (t) {
          a(b('bunyan: ERROR: Exception thrown from the "%s" Bunyan serializer. This should never happen. This is a bugin that serializer function.\n%s', r, t.stack || t)), e[r] = b('(Error in Bunyan log "%s" serializer broke field. See stderr for details.)', r)
        }
      })
    }, d.prototype._emit = function(e, t) {
      var n;
      if (void 0 === this.haveNonRawStreams)
        for (this.haveNonRawStreams = !1, n = 0; n < this.streams.length; n++)
          if (!this.streams[n].raw) {
            this.haveNonRawStreams = !0;
            break
          } var r;
      if (t || this.haveNonRawStreams) try {
        r = JSON.stringify(e, p()) + "\n"
      } catch (t) {
        var i = t.stack.split(/\n/g, 2).join("\n");
        a('bunyan: ERROR: Exception in `JSON.stringify(rec)`. You can install the "safe-json-stringify" module to have Bunyan fallback to safer stringification. Record:\n' + o(b("%s\n%s", e, t.stack)), i), r = b("(Exception in JSON.stringify(rec): %j. See stderr for details.)\n", t.message)
      }
      if (t) return r;
      var s = e.level;
      for (n = 0; n < this.streams.length; n++) {
        var u = this.streams[n];
        u.level <= s && u.stream.write(u.raw ? e : r)
      }
      return r
    }, d.prototype.trace = h(10), d.prototype.debug = h(m), d.prototype.info = h(g), d.prototype.warn = h(y), d.prototype.error = h(S), d.prototype.fatal = h(E), d.stdSerializers = {}, d.stdSerializers.err = function(e) {
      return e && e.stack ? {
        message: e.message,
        name: e.name,
        stack: f(e),
        code: e.code,
        signal: e.signal
      } : e
    }, e.exports = d, e.exports.TRACE = 10, e.exports.DEBUG = m, e.exports.INFO = g, e.exports.WARN = y, e.exports.ERROR = S, e.exports.FATAL = E, e.exports.resolveLevel = l, e.exports.levelFromName = C, e.exports.nameFromLevel = w, e.exports.VERSION = "0.2.3", e.exports.LOG_VERSION = v, e.exports.createLogger = function(e) {
      return new d(e)
    }, e.exports.safeCycles = p, e.exports.ConsoleFormattedStream = c, e.exports.ConsoleRawStream = u
  }, function(e, t, n) {
    "use strict";
    var r = n(15).f,
      i = n(52),
      o = n(55),
      a = n(20),
      s = n(48),
      u = n(50),
      c = n(40),
      l = n(70),
      d = n(109),
      h = n(114),
      f = n(17),
      p = n(33).fastKey,
      v = f ? "_s" : "size",
      b = function(e, t) {
        var n, r = p(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n)
          if (n.k == t) return n
      };
    e.exports = {
      getConstructor: function(e, t, n, l) {
        var d = e(function(e, r) {
          s(e, d, t, "_i"), e._i = i(null), e._f = void 0, e._l = void 0, e[v] = 0, void 0 != r && c(r, n, e[l], e)
        });
        return o(d.prototype, {
          clear: function() {
            for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
            e._f = e._l = void 0, e[v] = 0
          },
          delete: function(e) {
            var t = this,
              n = b(t, e);
            if (n) {
              var r = n.n,
                i = n.p;
              delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[v]--
            }
            return !!n
          },
          forEach: function(e) {
            s(this, d, "forEach");
            for (var t, n = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
              for (n(t.v, t.k, this); t && t.r;) t = t.p
          },
          has: function(e) {
            return !!b(this, e)
          }
        }), f && r(d.prototype, "size", {
          get: function() {
            return u(this[v])
          }
        }), d
      },
      def: function(e, t, n) {
        var r, i, o = b(e, t);
        return o ? o.v = n : (e._l = o = {
          i: i = p(t, !0),
          k: t,
          v: n,
          p: r = e._l,
          n: void 0,
          r: !1
        }, e._f || (e._f = o), r && (r.n = o), e[v]++, "F" !== i && (e._i[i] = o)), e
      },
      getEntry: b,
      setStrong: function(e, t, n) {
        l(e, t, function(e, t) {
          this._t = e, this._k = t, this._l = void 0
        }, function() {
          for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
          return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? d(0, n.k) : "values" == t ? d(0, n.v) : d(0, [n.k, n.v]) : (e._t = void 0, d(1))
        }, n ? "entries" : "values", !n, !0), h(t)
      }
    }
  }, function(e, t, n) {
    var r = n(49),
      i = n(172);
    e.exports = function(e) {
      return function() {
        if (r(this) != e) throw TypeError(e + "#toJSON isn't generic");
        return i(this)
      }
    }
  }, function(e, t, n) {
    e.exports = n(12).document && document.documentElement
  }, function(e, t, n) {
    e.exports = !n(17) && !n(26)(function() {
      return 7 != Object.defineProperty(n(67)("div"), "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(e, t, n) {
    var r = n(32),
      i = n(9)("iterator"),
      o = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (r.Array === e || o[i] === e)
    }
  }, function(e, t, n) {
    var r = n(39);
    e.exports = Array.isArray || function(e) {
      return "Array" == r(e)
    }
  }, function(e, t, n) {
    var r = n(16);
    e.exports = function(e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n)
      } catch (t) {
        var o = e.return;
        throw void 0 !== o && r(o.call(e)), t
      }
    }
  }, function(e, t, n) {
    var r = n(9)("iterator"),
      i = !1;
    try {
      var o = [7][r]();
      o.return = function() {
        i = !0
      }, Array.from(o, function() {
        throw 2
      })
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          a = o[r]();
        a.next = function() {
          return {
            done: n = !0
          }
        }, o[r] = function() {
          return a
        }, e(o)
      } catch (e) {}
      return n
    }
  }, function(e, t) {
    e.exports = function(e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(34),
      i = n(72),
      o = n(53),
      a = n(35),
      s = n(69),
      u = Object.assign;
    e.exports = !u || n(26)(function() {
      var e = {},
        t = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return e[n] = 7, r.split("").forEach(function(e) {
        t[e] = e
      }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    }) ? function(e, t) {
      for (var n = a(e), u = arguments.length, c = 1, l = i.f, d = o.f; u > c;)
        for (var h, f = s(arguments[c++]), p = l ? r(f).concat(l(f)) : r(f), v = p.length, b = 0; v > b;) d.call(f, h = p[b++]) && (n[h] = f[h]);
      return n
    } : u
  }, function(e, t, n) {
    var r = n(113),
      i = n(68).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
      return r(e, i)
    }
  }, function(e, t, n) {
    var r = n(21),
      i = n(35),
      o = n(74)("IE_PROTO"),
      a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
      return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
  }, function(e, t, n) {
    var r = n(21),
      i = n(23),
      o = n(173)(!1),
      a = n(74)("IE_PROTO");
    e.exports = function(e, t) {
      var n, s = i(e),
        u = 0,
        c = [];
      for (n in s) n != a && r(s, n) && c.push(n);
      for (; t.length > u;) r(s, n = t[u++]) && (~o(c, n) || c.push(n));
      return c
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(4),
      o = n(15),
      a = n(17),
      s = n(9)("species");
    e.exports = function(e) {
      var t = "function" == typeof i[e] ? i[e] : r[e];
      a && t && !t[s] && o.f(t, s, {
        configurable: !0,
        get: function() {
          return this
        }
      })
    }
  }, function(e, t, n) {
    var r, i, o, a = n(20),
      s = n(179),
      u = n(103),
      c = n(67),
      l = n(12),
      d = l.process,
      h = l.setImmediate,
      f = l.clearImmediate,
      p = l.MessageChannel,
      v = 0,
      b = {},
      _ = function() {
        var e = +this;
        if (b.hasOwnProperty(e)) {
          var t = b[e];
          delete b[e], t()
        }
      },
      m = function(e) {
        _.call(e.data)
      };
    h && f || (h = function(e) {
      for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
      return b[++v] = function() {
        s("function" == typeof e ? e : Function(e), t)
      }, r(v), v
    }, f = function(e) {
      delete b[e]
    }, "process" == n(39)(d) ? r = function(e) {
      d.nextTick(a(_, e, 1))
    } : p ? (i = new p, o = i.port2, i.port1.onmessage = m, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
      l.postMessage(e + "", "*")
    }, l.addEventListener("message", m, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
      u.appendChild(c("script")).onreadystatechange = function() {
        u.removeChild(this), _.call(e)
      }
    } : function(e) {
      setTimeout(a(_, e, 1), 0)
    }), e.exports = {
      set: h,
      clear: f
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getLogger = t.LOG_LEVELS = t.getRecordedLogs = t.setLogLevel = t.IceTransportTypes = t.PlaybackVideoEncoder = t.PlaybackAudioEncoder = t.MessageTransportStateEventTypes = t.SharedObjectEventTypes = t.FailoverSubscriberEventTypes = t.RTMPSubscriberEventTypes = t.RTCSubscriberEventTypes = t.SubscriberEventTypes = t.FailoverPublisherEventTypes = t.RTCPublisherEventTypes = t.PublisherEventTypes = t.Red5ProSharedObjectPeerConnection = t.Red5ProSharedObjectSocket = t.Red5ProSharedObject = t.PlaybackControls = t.PublisherView = t.RTMPPublisher = t.RTCPublisher = t.Red5ProPublisher = t.PlaybackView = t.HLSSubscriber = t.RTMPSubscriber = t.RTCSubscriber = t.Red5ProSubscriber = void 0;
    var o = n(24);
    Object.defineProperty(t, "PlaybackControls", {
      enumerable: !0,
      get: function() {
        return o.PlaybackControls
      }
    });
    var a = n(2),
      s = n(132),
      u = i(s),
      c = n(124),
      l = i(c),
      d = n(128),
      h = i(d),
      f = n(36),
      p = i(f),
      v = n(59),
      b = i(v),
      _ = n(84),
      m = i(_),
      g = n(86),
      y = i(g),
      S = n(85),
      E = i(S),
      C = n(83),
      w = i(C),
      T = n(47),
      k = r(T),
      P = n(61),
      O = r(P);
    t.Red5ProSubscriber = u.Red5ProSubscriber, t.RTCSubscriber = u.RTCSubscriber, t.RTMPSubscriber = u.RTMPSubscriber, t.HLSSubscriber = u.HLSSubscriber;
    t.PlaybackView = k.default;
    t.Red5ProPublisher = l.Red5ProPublisher, t.RTCPublisher = l.RTCPublisher, t.RTMPPublisher = l.RTMPPublisher;
    t.PublisherView = O.default;
    t.Red5ProSharedObject = h.Red5ProSharedObject, t.Red5ProSharedObjectSocket = h.Red5ProSharedObjectSocket, t.Red5ProSharedObjectPeerConnection = h.Red5ProSharedObjectPeerConnection, t.PublisherEventTypes = m.PublisherEventTypes, t.RTCPublisherEventTypes = m.RTCPublisherEventTypes, t.FailoverPublisherEventTypes = m.FailoverPublisherEventTypes, t.SubscriberEventTypes = y.SubscriberEventTypes, t.RTCSubscriberEventTypes = y.RTCSubscriberEventTypes, t.RTMPSubscriberEventTypes = y.RTMPSubscriberEventTypes, t.FailoverSubscriberEventTypes = y.FailoverSubscriberEventTypes, t.SharedObjectEventTypes = E.SharedObjectEventTypes, t.MessageTransportStateEventTypes = w.MessageTransportStateEventTypes, t.PlaybackAudioEncoder = p.PlaybackAudioEncoder, t.PlaybackVideoEncoder = p.PlaybackVideoEncoder, t.IceTransportTypes = b.IceTransportTypes;
    (0, a.establishLogger)("error");
    t.setLogLevel = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      a.LEVELS.hasOwnProperty(e.toUpperCase()) && ((0, a.establishLogger)(e, t), console && console.log("Red5 Pro SDK Version 9.1.2"))
    };
    t.getRecordedLogs = a.getRecordedLogs;
    t.LOG_LEVELS = a.LEVELS, t.getLogger = a.getLogger
  }, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
      var r = "",
        i = t,
        o = t + n;
      do {
        r += String.fromCharCode(e[i++])
      } while (i < o);
      return r
    }

    function i(e, t) {
      try {
        return JSON.parse(e)[t]
      } catch (i) {
        var n = c.exec(e),
          r = void 0;
        if (n && n.length > 1 && (r = l.exec(e), n[1] === t && r && r.length > 1)) return r[1];
        return
      }
    }

    function o(e) {
      var t = i(e, "orientation");
      if (t) return {
        orientation: parseInt(t)
      }
    }

    function a(e) {
      var t = i(e, "streamingMode");
      if (t) return {
        streamingMode: t
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.removePlayerDelegates = t.onStreamingModeMetadata = t.onOrientationMetadata = void 0;
    var s = n(98),
      u = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(s),
      c = /['"](.*?)['"]:/gi,
      l = /:['"](.*?)['"]/gi,
      d = new u.default,
      h = function(e) {
        return d.get(e)
      },
      f = function(e) {
        var t = "function" == typeof e.textTracks ? e.textTracks() : e.textTracks;
        t && (e.addTextTrack("metadata"), t.addEventListener("addtrack", function(t) {
          var n = t.track;
          n.mode = "hidden", n.addEventListener("cuechange", function(t) {
            var i = void 0,
              s = void 0;
            for (t && t.currentTarget ? i = t.currentTarget.cues : (i = n.cues, i = i && i.length > 0 ? i : n.activeCues), i = i || [], s = 0; s < i.length; s++) {
              var u = i[s];
              u.value && function() {
                var t = "string" == typeof u.value.data ? u.value.data : r(u.value.data, 0, u.size),
                  n = o(t),
                  i = a(t),
                  s = h(e);
                n && s && s.orientation && s.orientation.forEach(function(e) {
                  e(n)
                }), i && s && s.streamingMode && s.streamingMode.forEach(function(e) {
                  e(i)
                })
              }()
            }
          })
        }))
      };
    t.onOrientationMetadata = function(e, t) {
      var n = d.get(e);
      d.has(e) ? n.hasOwnProperty("orientation") || (d.get(e).orientation = []) : (f(e), d.set(e, {
        orientation: []
      })), d.get(e).orientation.push(t)
    }, t.onStreamingModeMetadata = function(e, t) {
      var n = d.get(e);
      d.has(e) ? n.hasOwnProperty("streamingMode") || (d.get(e).streamingMode = []) : (f(e), d.set(e, {
        streamingMode: []
      })), d.get(e).streamingMode.push(t)
    }, t.removePlayerDelegates = function(e) {
      d.has(e) && d.delete(e)
    }
  }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.NoSupportedCameraResolutionsError = t.NoElementFoundError = void 0;
    var r = n(0),
      i = function(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.NoElementFoundError = function e(t) {
      (0, i.default)(this, e), this.name = "NoElementFound", this.message = t
    }, t.NoSupportedCameraResolutionsError = function e(t) {
      (0, i.default)(this, e), this.name = "NoSupportedCameraResolutionsError", this.message = t
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(31),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(45),
      _ = r(b),
      m = n(25),
      g = n(2),
      y = "R5ProPublisherSocket",
      S = function(e) {
        function t(e) {
          return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, y))
        }
        return (0, v.default)(t, e), (0, c.default)(t, [{
          key: "respond",
          value: function(e) {
            if (e.data) {
              var n = this.getJsonFromSocketMessage(e);
              (0, f.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "respond", this).call(this, e) || void 0 !== n.data && (void 0 !== n.data.sdp && "answer" === n.data.sdp.type && this._responder.onSDPAnswer(n.data), void 0 !== n.data.candidate && ((0, m.isObjectEmpty)(n.data.candidate) ? this._responder.onEmptyCandidate() : this._responder.onAddIceCandidate(n.data.candidate)), "status" === n.data.type && ("NetConnection.ICE.TricleCompleted" === n.data.code || "NetConnection.ICE.TrickleCompleted" === n.data.code ? this._responder.onSocketIceCandidateEnd() : "NetConnection.Publish.InsufficientBW" === n.data.code ? this._responder.onInsufficientBandwidth(n.data) : "NetConnection.Publish.SufficientBW" === n.data.code ? this._responder.onSufficientBandwidth(n.data) : "NetConnection.Publish.RecoveringBW" === n.data.code ? this._responder.onRecoveringBandwidth(n.data) : this._responder.onPublisherStatus(n.data)), void 0 !== n.type && "metadata" === n.type.toLowerCase() && (void 0 !== n.method ? this._responder.onSendReceived(n.method, n.data) : this._responder.onMetaData(n.data)))
            } else(0, g.warn)(y, "[ws.onmessage] - No Message Data.")
          }
        }, {
          key: "postUnpublish",
          value: function(e) {
            return void 0 !== this._websocket && 1 === this._openState && (this.post({
              unpublish: e
            }), !0)
          }
        }]), t
      }(_.default);
    t.default = S
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(31),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(45),
      _ = r(b),
      m = n(25),
      g = n(2),
      y = "R5ProSubscriptionSocket",
      S = function(e) {
        function t(e) {
          return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, y))
        }
        return (0, v.default)(t, e), (0, c.default)(t, [{
          key: "respond",
          value: function(e) {
            if (e.data) {
              var n = this.getJsonFromSocketMessage(e);
              (0, f.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "respond", this).call(this, e) || (void 0 !== n.data ? (void 0 !== n.data.sdp && "offer" === n.data.sdp.type && this._responder.onSDPOffer(n.data), void 0 !== n.data.candidate && ((0, m.isObjectEmpty)(n.data.candidate) ? this._responder.onEmptyCandidate() : this._responder.onAddIceCandidate(n.data.candidate)), "status" === n.data.type && ("NetConnection.ICE.TricleCompleted" === n.data.code || "NetConnection.ICE.TrickleCompleted" === n.data.code ? this._responder.onSocketIceCandidateEnd() : "NetStream.Play.UnpublishNotify" === n.data.code ? this._responder.onUnpublish() : "NetConnection.Connect.Closed" === n.data.code ? this._responder.onConnectionClosed() : this._responder.onSubscriberStatus(n.data)), n.data.hasOwnProperty("status") && "NetStream.Play.UnpublishNotify" === n.data.status && this._responder.onUnpublish(), void 0 !== n.type && "metadata" === n.type && (void 0 !== n.method ? this._responder.onSendReceived(n.method, n.data) : this._responder.onMetaData(n.data))) : void 0 !== n.type && "metadata" === n.type && this._responder.onMetaData(n.metadata))
            } else(0, g.warn)(y, "[ws.onmessage] - No Message Data.")
          }
        }]), t
      }(_.default);
    t.default = S
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(31),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(29),
      g = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(m),
      y = n(7),
      S = r(y),
      E = n(60),
      C = r(E),
      w = n(8),
      T = n(2),
      k = "R5ProPublishPeer",
      P = function(e) {
        function t(e) {
          return (0, c.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e, k))
        }
        return (0, _.default)(t, e), (0, d.default)(t, [{
          key: "_removeConnectionHandlers",
          value: function(e) {
            e.onconnectionstatechange = void 0, e.oniceconnectionstatechange = void 0, e.onicecandidate = void 0
          }
        }, {
          key: "_addConnectionHandlers",
          value: function(e, t) {
            var n = this,
              r = void 0;
            e.onconnectionstatechange = function() {
              (0, T.debug)(k, "[peer.onconnectionstatechange] - State: " + e.connectionState), "connected" === e.connectionState ? ((0, T.debug)(k, "[peerconnection:open]"), t ? t.resolve(n) : n._responder.onPeerConnectionOpen()) : "failed" !== e.connectionState && "disconnected" !== e.connectionState || ((0, T.warn)(k, "[peerconnection:error]"), t && t.reject(), "failed" === e.connectionState && n._responder.onPeerConnectionFail())
            }, e.onicecandidate = function(e) {
              (0, T.debug)(k, "[peer.onicecandidate] - Peer Candidate: " + e.candidate), e.candidate ? n._responder.onIceCandidate(e.candidate) : e.candidate
            }, e.oniceconnectionstatechange = function(t) {
              var i = e.iceConnectionState;
              (0, T.debug)(k, "[peer.oniceconnectionstatechange] - State: " + i), "connected" === i && S.default.getIsEdge() ? ((0, T.debug)(k, "[edge/ortc:notify complete]"), n._responder.onPeerGatheringComplete()) : "failed" === i ? (r && clearTimeout(r), n._responder.onPeerConnectionClose(t)) : "disconnected" === i ? r = setTimeout(function() {
                (0, T.debug)(k, "[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection."), clearTimeout(r), n._responder.onPeerConnectionClose(t)
              }, 5e3) : r && ((0, T.debug)(k, "[peer.oniceconnectionstatechange] - Clearing timeout for reconnect."), clearTimeout(r))
            }, e.onsignalingstatechange = function(t) {
              var n = e.signalingState;
              (0, T.debug)(k, "[peer.onsignalingstatechange] - State: " + n)
            }, e.onicegatheringstatechange = function() {
              var t = e.iceGatheringState;
              (0, T.debug)(k, "[peer.onicegatheringstatechange] - State: " + t), "complete" === t && n._responder.onPeerGatheringComplete()
            }, e.onremovestream = function() {
              (0, T.debug)(k, "[peer.onremovestream]")
            }
          }
        }, {
          key: "_onDataChannelMessage",
          value: function(e) {
            var n = e.data instanceof ArrayBuffer ? {
              data: {
                message: String.fromCharCode.apply(null, new Uint8Array(e.data))
              }
            } : e;
            if ((0, v.default)(t.prototype.__proto__ || (0, s.default)(t.prototype), "_onDataChannelMessage", this).call(this, e)) return !0;
            var r = this.getJsonFromSocketMessage(n);
            if (null === r) return (0, T.warn)(this._name, "Determined websocket response not in correct format. Aborting message handle."), !0;
            (0, T.debug)(this._name, "[datachannel-response]: " + (0, o.default)(r, null, 2));
            var i = r.data;
            return i && "status" === i.type ? "NetStream.Play.UnpublishNotify" === i.code ? (this._responder.onUnpublish(), !0) : ((0, T.debug)(k, "[datachannel.message] status :: " + i.code), this._responder.onPublisherStatus(i), !0) : (this._responder.onDataChannelMessage(this._dataChannel, n), !1)
          }
        }, {
          key: "getUserMedia",
          value: function(e, t) {
            return g.getUserMedia(e, t)
          }
        }, {
          key: "forceUserMedia",
          value: function(e) {
            return g.forceUserMedia(e)
          }
        }, {
          key: "createOffer",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            (0, T.debug)(k, "[createoffer]");
            var i = r || new w.DeferredPromise;
            return this._peerConnection.createOffer().then(function(r) {
              t.setLocalDescription(r, e).then(function() {
                e && (r.sdp = g.updateBandwidth(e, r.sdp)), n && (r.sdp = r.sdp.replaceAll("H264", "H265"), (0, T.debug)(k, "[createoffer] FORCING VP8")), t._responder.onSDPSuccess(), i.resolve(r)
              }).catch(function(e) {
                t._responder.onSDPError(e), i.reject(e)
              })
            }).catch(function(e) {
              (0, T.debug)(k, "[createoffer:error]"), i.reject(e)
            }), i.hasOwnProperty("promise") ? i.promise : i
          }
        }, {
          key: "postUnpublish",
          value: function(e) {
            var t = this.post({
              unpublish: e
            });
            return (0, T.debug)(k, "[peerconnection:unpublish] complete: " + t), t
          }
        }]), t
      }(C.default);
    t.default = P
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(31),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(29),
      g = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(m),
      y = n(7),
      S = r(y),
      E = n(60),
      C = r(E),
      w = n(8),
      T = n(2),
      k = "R5ProSubscriptionPeer",
      P = function(e) {
        return void 0 === e || "string" == typeof e && 0 === e.length
      },
      O = function(e) {
        function t(e) {
          return (0, c.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e, k))
        }
        return (0, _.default)(t, e), (0, d.default)(t, [{
          key: "_removeConnectionHandlers",
          value: function(e) {
            e.onconnectionstatechange = void 0, e.oniceconnectionstatechange = void 0, e.onicecandidate = void 0, e.ontrack = void 0, e.ondatachannel = void 0
          }
        }, {
          key: "_addConnectionHandlers",
          value: function(e, t) {
            var n = this,
              r = void 0;
            e.onconnectionstatechange = function() {
              (0, T.debug)(k, "[peer.onconnectionstatechange] - State: " + e.connectionState), "connected" === e.connectionState ? ((0, T.debug)(k, "[peerconnection:open]"), t ? t.resolve(n) : n._responder.onPeerConnectionOpen()) : "failed" !== e.connectionState && "disconnected" !== e.connectionState || ((0, T.warn)(k, "[peerconnection:error]"), t && t.reject())
            }, e.onicecandidate = function(e) {
              (0, T.debug)(k, "[peer.onicecandidate] - Peer Candidate: " + e.candidate), e.candidate ? n._responder.onIceCandidate(e.candidate) : null === e.candidate && n._pendingMediaStream && (n._responder.onIceCandidateTrickleEnd(n._pendingMediaStream), n._pendingMediaStream = void 0)
            }, e.ontrack = function(e) {
              (0, T.debug)(k, "(ontrack) Peer Add Stream: " + e.streams), e.streams && e.streams.length > 0 && void 0 === n._pendingMediaStream && (n._pendingMediaStream = e.streams[0], n._responder.onAnswerMediaStream(e.streams[0]))
            }, e.oniceconnectionstatechange = function(t) {
              var i = e.iceConnectionState;
              (0, T.debug)(k, "[peer.oniceconnectionstatechange] - State: " + i), "connected" === i && S.default.getIsEdge() ? ((0, T.debug)(k, "[edge/ortc:notify complete]"), n._responder.onPeerGatheringComplete(), e.onicecandidate({
                candidate: null
              })) : "failed" === i ? (r && clearTimeout(r), n._responder.onPeerConnectionFail(), n._responder.onPeerConnectionClose(t)) : "disconnected" === i ? r = setTimeout(function() {
                (0, T.debug)(k, "[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection."), clearTimeout(r), n._responder.onPeerConnectionClose(t)
              }, 5e3) : r && ((0, T.debug)(k, "[peer.oniceconnectionstatechange] - Clearing timeout for reconnect."), clearTimeout(r))
            }, e.onicegatheringstatechange = function() {
              var t = e.iceGatheringState;
              (0, T.debug)(k, "[peer.onicegatheringstatechange] - State: " + t), "complete" === t && n._responder.onPeerGatheringComplete()
            }, e.onremovestream = function() {
              (0, T.debug)(k, "[peer.onremovestream]")
            }
          }
        }, {
          key: "_onDataChannelMessage",
          value: function(e) {
            var n = e.data instanceof ArrayBuffer ? {
              data: {
                message: String.fromCharCode.apply(null, new Uint8Array(e.data))
              }
            } : e;
            if ((0, v.default)(t.prototype.__proto__ || (0, s.default)(t.prototype), "_onDataChannelMessage", this).call(this, e)) return !0;
            var r = this.getJsonFromSocketMessage(n);
            if (null === r) return (0, T.warn)(this._name, "Determined websocket response not in correct format. Aborting message handle."), !0;
            (0, T.debug)(this._name, "[datachannel-response]: " + (0, o.default)(r, null, 2));
            var i = r.data;
            return i && "status" === i.type ? "NetStream.Play.UnpublishNotify" === i.code ? (this._responder.onUnpublish(), this._responder.onConnectionClosed(), !0) : ((0, T.debug)(k, "[datachannel.message] status :: " + i.code), this._responder.onSubscriberStatus(i), !0) : i.status && "NetStream.Play.UnpublishNotify" === i.status ? (this._responder.onUnpublish(), this._responder.onConnectionClosed(), !0) : (this._responder.onDataChannelMessage(this._dataChannel, n), !1)
          }
        }, {
          key: "createAnswer",
          value: function(e) {
            var t = this;
            (0, T.debug)(k, "[createanswer]");
            var n = new w.DeferredPromise;
            return this._peerConnection.setRemoteDescription(e).then(this._responder.onSDPSuccess).catch(function(e) {
              t._responder.onSDPError(e)
            }), this._peerConnection.createAnswer().then(function(e) {
              t._peerConnection.setLocalDescription(e).then(t._responder.onSDPSuccess).catch(function(e) {
                t._responder.onSDPError(e)
              }), n.resolve(e)
            }).catch(n.reject), n.promise
          }
        }, {
          key: "addIceCandidate",
          value: function(e) {
            if ((0, T.debug)(k, "checking if empty..."), P(e))(0, T.debug)(k, "[addicecandidate]:: empty");
            else if (null !== e) {
              (0, T.debug)(k, "[addicecandidate] :: non-empty");
              var t = new g.RTCIceCandidate({
                sdpMLineIndex: e.sdpMLineIndex,
                candidate: e.candidate
              });
              this._peerConnection.addIceCandidate(t).then(function() {}).catch(function(e) {
                (0, T.error)(k, "Error in add of ICE Candidiate + " + e)
              })
            } else(0, T.debug)(k, "[addicecandidate] :: null"), this._peerConnection.addIceCandidate(e).then(function() {}).catch(function(e) {
              (0, T.error)(k, "Error in add of ICE Candidiate + " + e)
            })
          }
        }]), t
      }(C.default);
    t.default = O
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RawStream = void 0;
    var i = n(0),
      o = r(i),
      a = n(1),
      s = r(a),
      u = n(100);
    t.RawStream = function() {
      function e() {
        (0, o.default)(this, e)
      }
      return (0, s.default)(e, [{
        key: "write",
        value: function(e) {
          console.log("%s - [%s] %s: %s", e.time.toISOString(), e.name, u.nameFromLevel[e.level], e.msg)
        }
      }]), e
    }()
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RTCPublisher = t.RTMPPublisher = t.Red5ProPublisher = void 0;
    var i = n(97),
      o = r(i),
      a = n(99),
      s = r(a),
      u = n(3),
      c = r(u),
      l = n(0),
      d = r(l),
      h = n(1),
      f = r(h),
      p = n(6),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(94),
      g = r(m),
      y = n(92),
      S = r(y),
      E = n(19),
      C = r(E),
      w = n(127),
      T = r(w),
      k = n(126),
      P = r(k),
      O = n(8),
      R = n(58),
      A = n(2),
      M = "Red5ProPublisher",
      N = new S.default,
      I = function() {
        var e = new g.default;
        return e.set(R.PublishTypes.RTC, P.default), e.set(R.PublishTypes.RTMP, T.default), e
      }(),
      L = function(e) {
        function t() {
          (0, d.default)(this, t);
          var e = (0, v.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
          return e._options = void 0, e._order = [R.PublishTypes.RTC, R.PublishTypes.RTMP], e
        }
        return (0, _.default)(t, e), (0, f.default)(t, [{
          key: "_getPublisherFromOrder",
          value: function(e, t) {
            return N.create(e, I, t, "init")
          }
        }, {
          key: "getPublishOrder",
          value: function() {
            return this._order
          }
        }, {
          key: "setPublishOrder",
          value: function(e) {
            e = "string" == typeof e ? [e] : e;
            var t = e.filter(function(e) {
              var t = void 0;
              for (t in R.PublishTypes)
                if (R.PublishTypes[t].toLowerCase() === e.toLowerCase()) return !0;
              return !1
            }).map(function(e) {
              return e.toLowerCase()
            });
            return this._order = [].concat((0, s.default)(new o.default(t))), (0, A.debug)(M, "[orderupdate]: " + this._order), this
          }
        }, {
          key: "init",
          value: function(e) {
            var t = new O.DeferredPromise;
            return (0, A.debug)(M, "[publish]"), this._options = e, this._getPublisherFromOrder(this._order, this._options).then(function(e) {
              t.resolve(e)
            }).catch(function(e) {
              (0, A.warn)(M, "[publisherror]: Could not implement a publisher: " + e), t.reject(e)
            }), t.promise
          }
        }, {
          key: "publishTypes",
          get: function() {
            return R.PublishTypes
          }
        }]), t
      }(C.default);
    t.Red5ProPublisher = L, t.RTMPPublisher = T.default, t.RTCPublisher = P.default
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(142),
      o = r(i),
      a = n(10),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(81),
      f = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(h),
      p = n(7),
      v = r(p),
      b = n(88),
      _ = r(b),
      m = n(93),
      g = n(25),
      y = n(8),
      S = n(2),
      E = "R5ProPublisherSourceHandler",
      C = function(e) {
        return e.exact || e.ideal || e.max || e.min || e
      },
      w = function(e, t) {
        var n = (0, g.deepCopy)(t);
        if ("boolean" == typeof e.video) n.video = e.video;
        else {
          var r = void 0;
          for (r in e.video) n[r] = C(e.video[r]);
          n.video = !0
        }
        return n.audio = "boolean" != typeof e.audio || e.audio, n
      },
      T = function() {
        function e(t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          (0, c.default)(this, e), this.video = t, this.clone = this.video.cloneNode(!0), this.holder = this.video.parentNode, this._publisherType = n, this._swfId = null, this._embedFuture = void 0, this._soResponder = r || new _.default
        }
        return (0, d.default)(e, [{
          key: "getEmbedOperation",
          value: function() {
            return this._embedFuture = y.Future.createIfNotExist(this._embedFuture), this._embedFuture.promise
          }
        }, {
          key: "cleanUp",
          value: function() {
            this.video.remove(), this.video = this.clone.cloneNode(!0), this.holder.appendChild(this.video), this._embedFuture = void 0
          }
        }, {
          key: "addSource",
          value: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            (0, S.debug)(E, "[addsource]");
            var i = this;
            this._swfId = e, this._embedFuture = y.Future.createIfNotExist(this._embedFuture);
            var o = this._embedFuture;
            return t.swf = n || t.swf, t.minFlashVersion = r || t.minFlashVersion, f.defineEmbedElement(this.video, this.holder).then(function(n) {
              (0, S.debug)(E, "[element:complete]");
              var r = {
                buffer: null != t.buffer ? t.buffer : 1,
                streamMode: t.streamMode,
                streamName: t.streamName,
                appName: t.app,
                host: t.host
              };
              return t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.context && (r.roomName = t.context), "100%" !== t.embedWidth && "100%" !== t.embedHeight || (r.autosize = !0), void 0 !== t.connectionParams && (r.connectionParams = encodeURIComponent((0, s.default)(t.connectionParams))), r = w(t.mediaConstraints, r), f.embedSwfObject(e, t, r, v.default.getSwfObject(), n)
            }).then(function() {
              (0, S.debug)(E, "[embed:complete]"), o.resolve(i)
            }).catch(function(e) {
              return o.reject(e)
            }), o.promise
          }
        }, {
          key: "connect",
          value: function(e) {
            (0, S.debug)(E, "[connect]");
            var t = v.default.getEmbedObject(this._swfId);
            t ? (t.connect(e), this._soResponder.connect(this._swfId)) : (0, S.warn)(E, "Could not determine embedded element with swf id: " + this._swfId + ".")
          }
        }, {
          key: "disconnect",
          value: function() {
            (0, S.debug)(E, "[disconnect]");
            try {
              var e = v.default.getEmbedObject(this._swfId);
              e && e.disconnect()
            } catch (e) {}
            this.cleanUp(), this._soResponder.disconnect()
          }
        }, {
          key: "send",
          value: function(e, t) {
            var n = v.default.getEmbedObject(this._swfId);
            n && n.send(e, t)
          }
        }, {
          key: "addSharedObjectResponseHandler",
          value: function(e) {
            this._soResponder.addResponseHandler(e)
          }
        }, {
          key: "removeSharedObjectResponseHandler",
          value: function(e) {
            this._soResponder.removeResponseHandler(e)
          }
        }, {
          key: "sendToSharedObject",
          value: function(e, t, n) {
            this._soResponder.sendToSharedObject(e, t, n)
          }
        }, {
          key: "sendPropertyToSharedObject",
          value: function(e, t, n) {
            this._soResponder.sendPropertyToSharedObject(e, t, n)
          }
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {
            this._soResponder.getRemoteSharedObject(e)
          }
        }, {
          key: "connectToSharedObject",
          value: function(e) {
            this._soResponder.connectToSharedObject(e)
          }
        }, {
          key: "closeSharedObject",
          value: function(e) {
            this._soResponder.closeSharedObject(e)
          }
        }, {
          key: "setMediaQuality",
          value: function(e) {
            var t = v.default.getEmbedObject(this._swfId);
            if (t && e.video && "boolean" != typeof e.video) {
              var n = isNaN(e.video.width) ? o.default : (0, m.toInt)(e.video.width),
                r = isNaN(e.video.height) ? o.default : (0, m.toInt)(e.video.height);
              t.updateResolution(n, r)
            }
          }
        }, {
          key: "getType",
          value: function() {
            return this._publisherType
          }
        }]), e
      }();
    t.default = T
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(38),
      a = i(o),
      s = n(62),
      u = i(s),
      c = n(30),
      l = i(c),
      d = n(10),
      h = i(d),
      f = n(3),
      p = i(f),
      v = n(0),
      b = i(v),
      _ = n(1),
      m = i(_),
      g = n(6),
      y = i(g),
      S = n(5),
      E = i(S),
      C = n(19),
      w = i(C),
      T = n(29),
      k = r(T),
      P = n(44),
      O = r(P),
      R = n(7),
      A = i(R),
      M = n(119),
      N = i(M),
      I = n(121),
      L = i(I),
      j = n(61),
      H = i(j),
      D = n(13),
      F = n(58),
      U = n(59),
      x = n(8),
      B = n(89),
      V = n(46),
      G = n(2),
      W = /(.*) starting/i,
      z = /(.*) stopping/i,
      Y = "RTCPublisher",
      q = function(e) {
        (0, G.debug)(Y, e)
      },
      J = function(e) {
        (0, G.warn)(Y, e)
      },
      K = function(e) {
        (0, G.error)(Y, e)
      },
      X = {
        protocol: "wss",
        port: 443,
        app: "live",
        streamMode: F.PublishModeTypes.LIVE,
        keyFramerate: 3e3,
        mediaElementId: "red5pro-publisher",
        rtcConfiguration: {
          iceServers: [{
            urls: "stun:stun2.l.google.com:19302"
          }],
          iceCandidatePoolSize: 2,
          bundlePolicy: "max-bundle"
        },
        iceServers: void 0,
        iceTransport: U.IceTransportTypes.UDP,
        bandwidth: {
          audio: 56,
          video: 512
        },
        clearMediaOnUnpublish: !1,
        mediaConstraints: new B.RTCMediaConstraint,
        onGetUserMedia: void 0,
        signalingSocketOnly: !0,
        dataChannelConfiguration: void 0,
        forceVP8: !1,
        socketSwitchDelay: 100
      },
      Q = function(e) {
        var t = {
            audio: !1,
            video: !1
          },
          n = {
            audio: !1,
            video: !1
          };
        return e.getTracks().forEach(function(e) {
          "video" === e.kind ? (n.video = e.getSettings(), t.video = e.getConstraints()) : "audio" === e.kind && (n.audio = e.getSettings(), t.audio = e.getConstraints())
        }), {
          requested: t,
          accepted: n
        }
      },
      $ = function(e) {
        function t() {
          (0, b.default)(this, t);
          var e = (0, y.default)(this, (t.__proto__ || (0, p.default)(t)).call(this));
          return e._options = void 0, e._view = void 0, e._peerHelper = void 0, e._socketHelper = void 0, e._messageTransport = void 0, e._mediaStream = void 0, e._switchChannelRequest = void 0, e._streamFuture = void 0, e._availableFuture = void 0, e._peerFuture = void 0, e._offerFuture = void 0, e._sendOfferFuture = void 0, e._trickleEndFuture = void 0, e._publishFuture = void 0, e._unpublishFuture = void 0, e._onOrientationChange = e._onOrientationChange.bind(e), e._gUMRejectionHandler = e._onGUMRejection.bind(e), e
        }
        return (0, E.default)(t, e), (0, m.default)(t, [{
          key: "_getMediaStream",
          value: function() {
            return this._streamFuture = x.Future.createIfNotExist(this._streamFuture), this._streamFuture.promise
          }
        }, {
          key: "_getTrickleEnd",
          value: function() {
            return x.Future.createIfNotExist(this._trickleEndFuture)
          }
        }, {
          key: "_gum",
          value: function(e) {
            var t = this,
              n = function(e) {
                if (!e) return !1;
                var t = e.getTracks();
                return !!(t && t.length > 1) && "video" === t[0].kind
              };
            void 0 !== e.onGetUserMedia ? (q("Requesting gUM from user-defined configuration:onGetUserMedia."), e.onGetUserMedia().then(function(r) {
              if (n(r)) return q("We received a MediaStream with mismatching track listing. Trying again..."), void t._gum(e);
              t.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.CONSTRAINTS_ACCEPTED, t, Q(r))), t._streamFuture.resolve(r)
            }).catch(function(n) {
              K("Could not resolve MediaStream from provided gUM. Error - " + n), t.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.CONSTRAINTS_REJECTED, t, {
                constraints: e.mediaConstraints
              })), t._streamFuture.reject(n)
            })) : (q("Requesting gUM using mediaConstraints: " + (0, h.default)(e.mediaConstraints, null, 2)), this._peerHelper.getUserMedia(e.mediaConstraints, this._gUMRejectionHandler).then(function(r) {
              if (n(r.media)) return q("We received a MediaStream with mismatching track listing. Trying again..."), void t._gum(e);
              q("Found valid constraints: " + (0, h.default)(r.constraints, null, 2)), t.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.CONSTRAINTS_ACCEPTED, t, Q(r.media))), t.trigger(new D.PublisherEvent(D.PublisherEventTypes.DIMENSION_CHANGE, t, r.constraints)), t._streamFuture.resolve(r.media)
            }).catch(function(n) {
              q("Could not find valid constraint resolutions from: " + (0, h.default)(n.constraints, null, 2)), K("Could not resolve MediaStream from provided mediaConstraints. Error - " + n.error), q("Attempting to find resolutions from original provided constraints: " + (0, h.default)(n.constraints, null, 2)), t.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.CONSTRAINTS_REJECTED, t, {
                constraints: n.constraints
              })), e.onGetUserMedia = function() {
                return t._peerHelper.forceUserMedia(n.constraints)
              }, t._gum(e)
            }))
          }
        }, {
          key: "_onGUMRejection",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.CONSTRAINTS_REJECTED, this, {
              constraints: e
            }))
          }
        }, {
          key: "_onOrientationChange",
          value: function(e) {
            this.getMessageTransport() && this.getMessageTransport().post({
              send: {
                method: "onMetaData",
                data: {
                  deviceOrientation: e
                }
              }
            })
          }
        }, {
          key: "_onMediaStreamReceived",
          value: function(e) {
            this._mediaStream = e, this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.MEDIA_STREAM_AVAILABLE, this, e)), this._view && this._view.preview(this._mediaStream)
          }
        }, {
          key: "_setViewIfNotExist",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (void 0 === e && void 0 !== t) {
              new H.default(t).attachPublisher(this)
            }
          }
        }, {
          key: "_requestAvailability",
          value: function(e) {
            return q("[requestavailability]"), this._availableFuture = x.Future.createIfNotExist(this._availableFuture), this._socketHelper.post({
              isAvailable: e,
              bundle: !0
            }), this._availableFuture.promise
          }
        }, {
          key: "_createPeerConnection",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            q("[createpeeer]"), this._peerFuture = void 0, this._peerFuture = x.Future.createIfNotExist(this._peerFuture), n && e && (J("The iceServers configuration property is considered deprecated. Please use the rtcConfiguration configuration property upon which you can assign iceServers. Reference: https://www.red5pro.com/docs/streaming/migrationguide.html"), e.iceServers = n);
            return void 0 !== e ? this._peerHelper.setUpWithPeerConfiguration(e, t, this._peerFuture) : this._peerHelper.setUp(n, this._peerFuture, this._options.rtcpMuxPolicy)
          }
        }, {
          key: "_createOffer",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return q("[createoffer]"), this._offerFuture = void 0, this._offerFuture = x.Future.createIfNotExist(this._offerFuture), this._peerHelper.createOffer(e, t, this._offerFuture), this._offerFuture.promise
          }
        }, {
          key: "_setRemoteDescription",
          value: function(e) {
            return q("[setremotedescription]"), this._peerHelper.setRemoteDescription(e)
          }
        }, {
          key: "_sendOffer",
          value: function(e, t, n) {
            return q("[sendoffer]"), this._sendOfferFuture = void 0, this._sendOfferFuture = x.Future.createIfNotExist(this._sendOffFuture), this._socketHelper.post({
              handleOffer: t,
              transport: n,
              data: {
                sdp: e
              }
            }), this._sendOfferFuture.promise
          }
        }, {
          key: "_sendCandidate",
          value: function(e, t) {
            q("[sendcandidate]"), this._socketHelper.post({
              handleCandidate: t,
              data: {
                candidate: e
              }
            })
          }
        }, {
          key: "_requestPublish",
          value: function(e, t, n) {
            return q("[requestpublish]"), this._publishFuture = void 0, this._publishFuture = x.Future.createIfNotExist(this._publishFuture), this._socketHelper.post({
              publish: e,
              mode: t,
              keyFramerate: n
            }), this._publishFuture.promise
          }
        }, {
          key: "_requestUnpublish",
          value: function(e) {
            return this._unpublishFuture = void 0, this._unpublishFuture = x.Future.createIfNotExist(this._unpublishFuture), this.getMessageTransport().postUnpublish(e) || this._unpublishFuture.resolve(), this._unpublishFuture.promise
          }
        }, {
          key: "init",
          value: function(e) {
            this._streamFuture = void 0;
            var t = new x.DeferredPromise;
            return k.isSupported() && O.isSupported() ? (this._options = (0, l.default)({}, X, e), this._peerHelper = new L.default(this), this._socketHelper = new N.default(this), this._messageTransport = this._socketHelper, this._getMediaStream().then(this._onMediaStreamReceived.bind(this)).catch(function(e) {
              J("[gum]: " + e)
            }), this._gum(this._options), this._setViewIfNotExist(this._view, this._options.mediaElementId), t.resolve(this)) : t.reject("Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets."), t.promise
          }
        }, {
          key: "initWithStream",
          value: function(e, t) {
            q("[initWithStream]"), this._streamFuture = void 0;
            var n = new x.DeferredPromise;
            if (k.isSupported() && O.isSupported()) {
              this._options = (0, l.default)({}, X, e), this._peerHelper = new L.default(this), this._socketHelper = new N.default(this), this._messageTransport = this._socketHelper, this._setViewIfNotExist(this._view, this._options.mediaElementId);
              this._getMediaStream().then(this._onMediaStreamReceived.bind(this)).catch(function(e) {
                J("[gum]: " + e)
              }), this._streamFuture.resolve(t), n.resolve(this)
            } else n.reject("Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets.");
            return n.promise
          }
        }, {
          key: "setView",
          value: function(e) {
            return this._view = e, this._mediaStream && this._view && this._view.preview(this._mediaStream), this
          }
        }, {
          key: "preview",
          value: function() {
            var e = this;
            q("[preview]");
            var t = new u.default(function(t) {
              t(e)
            });
            return this._setViewIfNotExist(this._view, this._options.mediaElementId), t
          }
        }, {
          key: "unpreview",
          value: function() {
            q("[unpreview]"), this._mediaStream && this._mediaStream.getTracks().forEach(function(e) {
              e.stop()
            }), this._view && this._view.unpreview()
          }
        }, {
          key: "publish",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            q("[publish]"), this._options.streamName = t || this._options.streamName;
            var r = n || new x.DeferredPromise,
              i = new x.DeferredPromise,
              o = (0, V.rtcSocketEndpointFromOptions)(this._options, {
                id: this._options.streamName
              });
            this._trickleEndFuture = this._getTrickleEnd(), this._peerHelper || (this._peerHelper = new L.default(this)), this._socketHelper ? this._socketHelper.clearRetry() : (this._socketHelper = new N.default(this), this._messageTransport = this._socketHelper), this._socketHelper.setUp(o, i);
            var a = this._options,
              s = a.rtcConfiguration,
              u = a.signalingSocketOnly,
              c = a.dataChannelConfiguration,
              l = u && k.supportsDataChannel();
            return l && !c && (c = {
              name: "red5pro"
            }), this._options.signalingSocketOnly = l, this._publishFuture = x.Future.createIfNotExist(this._publishFuture), this._publishFuture.promise.catch(function(t) {
              A.default.removeOrientationChangeHandler(e._onOrientationChange), r.reject(t), e.trigger(new D.PublisherEvent(D.PublisherEventTypes.CONNECT_FAILURE, e, t))
            }), i.promise.then(function() {
              return e.trigger(new D.PublisherEvent(D.PublisherEventTypes.CONNECT_SUCCESS, e)), e._getMediaStream()
            }).then(function() {
              return e._requestAvailability(e._options.streamName, e._options.streamType)
            }).then(function() {
              return e._createPeerConnection(s, c, e._options.iceServers)
            }).then(function(t) {
              return e.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.PEER_CONNECTION_AVAILABLE, e, t)), e._mediaStream.getTracks().forEach(function(n) {
                t.addTrack(n, e._mediaStream)
              }), e._createOffer(e._options.bandwidth, e._options.forceVP8)
            }).then(function(t) {
              return e.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.OFFER_START, e, t)), e._sendOffer(t, e._options.streamName, e._options.iceTransport)
            }).then(function(t) {
              return e._setRemoteDescription(t.sdp)
            }).then(function(t) {
              return e.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.OFFER_END, e, t)), e._getTrickleEnd().promise
            }).then(function() {
              return e.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.ICE_TRICKLE_COMPLETE, e)), e._requestPublish(e._options.streamName, e._options.streamMode, e._options.keyFramerate)
            }).then(function() {
              A.default.addOrientationChangeHandler(e._onOrientationChange), r.resolve(e), e.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_START, e))
            }).catch(function(t) {
              A.default.removeOrientationChangeHandler(e._onOrientationChange), r.reject(t), e.trigger(new D.PublisherEvent(D.PublisherEventTypes.CONNECT_FAILURE, e, t))
            }), r.hasOwnProperty("promise") ? r.promise : r
          }
        }, {
          key: "publishWithSocket",
          value: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            q("[publishWithSocket]"), this._options.streamName = n || this._options.streamName;
            var i = r || new x.DeferredPromise,
              o = new x.DeferredPromise;
            return this._socketHelper = new N.default(this), this._socketHelper.setUpWithSocket(e, o), o.promise.then(function() {
              return t._requestPublish(t._options.streamName, t._options.streamMode, t._options.keyFramerate)
            }).then(function() {
              A.default.addOrientationChangeHandler(t._onOrientationChange), i.resolve(t), t.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_START, t))
            }).catch(function(e) {
              A.default.removeOrientationChangeHandler(t._onOrientationChange), i.reject(e), t.trigger(new D.PublisherEvent(D.PublisherEventTypes.CONNECT_FAILURE, t, e))
            }), i.hasOwnProperty("promise") ? i.promise : i
          }
        }, {
          key: "unpublish",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            q("[unpublish]");
            var n = function() {
              e._socketHelper && (q("[unpublish:teardown]"), e._socketHelper.tearDown()), e._peerHelper && e._peerHelper.tearDown(), e._socketHelper = void 0, e._peerHelper = void 0, e._messageTransport = void 0
            };
            (this._options.clearMediaOnUnpublish || t) && this.unpreview(), this._availableFuture = void 0, this._peerFuture = void 0, this._offerFuture = void 0, this._sendOfferFuture = void 0, this._trickleEndFuture = void 0, this._publishFuture = void 0;
            var r = this._requestUnpublish(this._options.streamName);
            return r.then(function() {
              e._unpublishFuture = void 0, n(), e.trigger(new D.PublisherEvent(D.PublisherEventTypes.UNPUBLISH_SUCCESS, e))
            }), A.default.removeOrientationChangeHandler(this._onOrientationChange), r
          }
        }, {
          key: "mute",
          value: function() {
            this.muteAudio()
          }
        }, {
          key: "unmute",
          value: function() {
            this.unmuteAudio()
          }
        }, {
          key: "muteAudio",
          value: function() {
            this.getMessageTransport().post({
              mute: {
                muteAudio: !0
              }
            })
          }
        }, {
          key: "unmuteAudio",
          value: function() {
            this.getMessageTransport().post({
              mute: {
                muteAudio: !1
              }
            })
          }
        }, {
          key: "muteVideo",
          value: function() {
            this.getMessageTransport().post({
              mute: {
                muteVideo: !0
              }
            })
          }
        }, {
          key: "unmuteVideo",
          value: function() {
            this.getMessageTransport().post({
              mute: {
                muteVideo: !1
              }
            })
          }
        }, {
          key: "send",
          value: function(e, t) {
            this.getMessageTransport().post({
              send: {
                method: e,
                data: "string" == typeof t ? JSON.parse(t) : t
              }
            })
          }
        }, {
          key: "callServer",
          value: function(e, t) {
            return this.getMessageTransport().postAsync({
              callAdapter: {
                method: e,
                arguments: t
              }
            })
          }
        }, {
          key: "sendLog",
          value: function(e, t) {
            try {
              var n = (0, a.default)(G.LEVELS).find(function(t) {
                  return t.toLowerCase() === e.toLowerCase()
                }) ? e : G.LEVELS.DEBUG,
                r = "string" == typeof t ? t : (0, h.default)(t);
              this.getMessageTransport().post({
                log: n.toUpperCase(),
                message: r
              })
            } catch (e) {
              e.message;
              K(Y), K(Y)
            }
          }
        }, {
          key: "onStreamAvailable",
          value: function(e) {
            q("[onstreamavailable]: " + (0, h.default)(e, null, 2)), this._availableFuture = x.Future.createIfNotExist(this._availableFuture), this._availableFuture.reject("Stream with name " + this._options.streamName + " already has a broadcast session."), this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_INVALID_NAME, this))
          }
        }, {
          key: "onStreamUnavailable",
          value: function(e) {
            q("Stream " + this._options.streamName + " does not exist."), q("[onstreamunavailable]: " + (0, h.default)(e, null, 2)), this._availableFuture = x.Future.createIfNotExist(this._availableFuture), this._availableFuture.resolve(!0)
          }
        }, {
          key: "onSocketMessageError",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            K("Error in stream publish: " + e + ".\n[Optional detail]: " + t), this._publishFuture && (this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_FAIL, this)), this._publishFuture.reject(e), this.unpublish())
          }
        }, {
          key: "onSocketClose",
          value: function(e) {
            q("[onsocketclose]"), this._peerHelper && this._peerHelper.tearDown(), this.trigger(new D.PublisherEvent(D.PublisherEventTypes.CONNECTION_CLOSED, this, e))
          }
        }, {
          key: "onPeerConnectionFail",
          value: function() {
            q("[onpeerconnectionfail]"), this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_FAIL, this)), this._subscriptionResolver.reject("Peer Connection Failed.")
          }
        }, {
          key: "onPeerConnectionClose",
          value: function(e) {
            q("[onpeerconnectionclose]"), this._socketHelper && (q("[onpeerconnectionclose:teardown]"), this._socketHelper.tearDown()), this.onSocketClose(e)
          }
        }, {
          key: "onPeerConnectionOpen",
          value: function() {
            q("[onpeerconnection::open]"), this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.PEER_CONNECTION_OPEN))
          }
        }, {
          key: "onSDPSuccess",
          value: function(e) {
            var t = e ? ": " + (0, h.default)(e, null, 2) : "";
            q("[onsdpsuccess]" + t)
          }
        }, {
          key: "onSDPError",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_FAIL, this));
            var t = e ? ": " + (0, h.default)(e, null, 2) : "";
            t("[onsdperror]" + t)
          }
        }, {
          key: "onSDPAnswer",
          value: function(e) {
            q("[sdpanswer]:: " + (0, h.default)(e, null, 2)), this._sendOfferFuture = x.Future.createIfNotExist(this._sendOfferFuture), this._sendOfferFuture.resolve(e)
          }
        }, {
          key: "onAddIceCandidate",
          value: function(e) {
            q("[addicecandidate]"), this._peerHelper.addIceCandidate(e).then(function() {
              q("[addicecandidate:success]")
            }).catch(function(e) {
              J("[addicecandidate:error] - " + e)
            })
          }
        }, {
          key: "onIceCandidate",
          value: function(e) {
            q("[icecandidatetrickle]"), this._sendCandidate(e, this._options.streamName)
          }
        }, {
          key: "onIceCandidateTrickleEnd",
          value: function() {
            q("[icecandidatetrickle:end]")
          }
        }, {
          key: "onEmptyCandidate",
          value: function() {
            q("[icecandidatetrickle:empty]"), this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.PEER_CANDIDATE_END))
          }
        }, {
          key: "onPeerGatheringComplete",
          value: function() {
            q("[icecandidategathering:end]"), this._socketHelper && this._socketHelper.postEndOfCandidates(this._options.streamName)
          }
        }, {
          key: "onSocketIceCandidateEnd",
          value: function() {
            q("[socketicecandidate:end]"), this._getTrickleEnd().resolve()
          }
        }, {
          key: "onPublisherStatus",
          value: function(e) {
            q("[publisherstatus] - " + (0, h.default)(e, null, 2));
            var t = z.exec(e.message),
              n = W.exec(e.message);
            t && t[1] === this._options.streamName ? this._unpublishFuture.resolve() : n && n[1] === this._options.streamName ? this._publishFuture.resolve() : e.code && "NetStream.Publish.IsAvailable" === e.code ? this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_AVAILABLE, this.status)) : this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_STATUS, this, e))
          }
        }, {
          key: "onInsufficientBandwidth",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_INSUFFICIENT_BANDWIDTH, this, e))
          }
        }, {
          key: "onSufficientBandwidth",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_SUFFICIENT_BANDWIDTH, this, e))
          }
        }, {
          key: "onRecoveringBandwidth",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_RECOVERING_BANDWIDTH, this, e))
          }
        }, {
          key: "onSendReceived",
          value: function(e, t) {
            "onMetaData" === e ? this.onMetaData(t) : this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_SEND_INVOKE, this, {
              methodName: e,
              data: t
            }))
          }
        }, {
          key: "onDataChannelAvailable",
          value: function(e) {
            var t = this;
            if (q("[ondatachannel::available]"), this._switchChannelRequest = {
                switchChannel: e || "red5pro"
              }, this._options.signalingSocketOnly) var n = setTimeout(function() {
              clearTimeout(n), t._socketHelper.sever(t._switchChannelRequest), t._messageTransport = t._peerHelper, t.trigger(new D.MessageTransportStateEvent(D.MessageTransportStateEventTypes.CHANGE, t, {
                controller: t,
                transport: t._messageTransport
              }))
            }, this._options.socketSwitchDelay);
            this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.DATA_CHANNEL_AVAILABLE, this, {
              name: e,
              dataChannel: this.getDataChannel()
            }))
          }
        }, {
          key: "onDataChannelError",
          value: function(e, t) {
            this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.DATA_CHANNEL_ERROR, this, {
              dataChannel: e,
              error: t
            }))
          }
        }, {
          key: "onDataChannelMessage",
          value: function(e, t) {
            this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.DATA_CHANNEL_MESSAGE, this, {
              dataChannel: e,
              message: t
            }))
          }
        }, {
          key: "onDataChannelOpen",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.DATA_CHANNEL_OPEN, this, {
              dataChannel: e
            }))
          }
        }, {
          key: "onDataChannelClose",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.RTCPublisherEventTypes.DATA_CHANNEL_CLOSE, this, {
              dataChannel: e
            }))
          }
        }, {
          key: "onMetaData",
          value: function(e) {
            this.trigger(new D.PublisherEvent(D.PublisherEventTypes.PUBLISH_METADATA, this, e))
          }
        }, {
          key: "overlayOptions",
          value: function(e) {
            this._options = (0, l.default)(this._options, e)
          }
        }, {
          key: "getMessageTransport",
          value: function() {
            return this._messageTransport
          }
        }, {
          key: "getConnection",
          value: function() {
            return this._socketHelper
          }
        }, {
          key: "getPeerConnection",
          value: function() {
            return this._peerHelper ? this._peerHelper.connection : void 0
          }
        }, {
          key: "getDataChannel",
          value: function() {
            return this._peerHelper ? this._peerHelper.dataChannel : void 0
          }
        }, {
          key: "getMediaStream",
          value: function() {
            return this._mediaStream
          }
        }, {
          key: "getOptions",
          value: function() {
            return this._options
          }
        }, {
          key: "getType",
          value: function() {
            return F.PublishTypes.RTC.toUpperCase()
          }
        }]), t
      }(w.default);
    t.default = $
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(30),
      s = r(a),
      u = n(3),
      c = r(u),
      l = n(0),
      d = r(l),
      h = n(1),
      f = r(h),
      p = n(6),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(19),
      g = r(m),
      y = n(7),
      S = r(y),
      E = n(125),
      C = r(E),
      w = n(61),
      T = r(w),
      k = n(13),
      P = n(8),
      O = n(58),
      R = n(89),
      A = n(2),
      M = "RTMPPublisher",
      N = {
        protocol: "rtmp",
        port: 1935,
        streamMode: "live",
        mediaElementId: "red5pro-publisher",
        embedWidth: "100%",
        embedHeight: "100%",
        minFlashVersion: "10.0.0",
        swf: "lib/red5pro/red5pro-publisher.swf",
        swfobjectURL: "lib/swfobject/swfobject.js",
        productInstallURL: "lib/swfobject/playerProductInstall.swf",
        mediaConstraints: new R.RTMPMediaConstraint
      },
      I = function(e) {
        function t() {
          (0, d.default)(this, t);
          var e = (0, v.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
          return e._options = void 0, e._view = void 0, e._sourceHandler = void 0, e._elementId = void 0, e._connectFuture = void 0, e
        }
        return (0, _.default)(t, e), (0, f.default)(t, [{
          key: "_setViewIfNotExist",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (void 0 === e && void 0 !== t) {
              new T.default(t).attachPublisher(this)
            }
          }
        }, {
          key: "setView",
          value: function(e, t) {
            var n = this;
            return this._view = e, this._elementId = t, void 0 !== this._sourceHandler && (this._sourceHandler.disconnect(), this._sourceHandler = void 0), this._view && (this._sourceHandler = new C.default(this._view.view, this.getType())), this._options && this._sourceHandler && this._sourceHandler.addSource(this._elementId, this._options).catch(function(e) {
              (0, A.error)(M, "Could not establish proper RTMP publisher: " + e), n.trigger(new k.PublisherEvent(k.RTMPPublisherEventTypes.EMBED_FAILURE, n))
            }), this
          }
        }, {
          key: "_setUpConnectCallback",
          value: function(e) {
            var t = this;
            window.setActiveId = function(n) {
              (0, A.debug)(M, "Embed and connect() complete for publisher swf. successId(" + n + ")."), e.resolve(t), t.trigger(new k.PublisherEvent(k.RTMPPublisherEventTypes.EMBED_SUCCESS, t)), t._tearDownConnectCallback()
            }
          }
        }, {
          key: "_tearDownConnectCallback",
          value: function() {
            window.setActiveId = void 0
          }
        }, {
          key: "_establishExtIntHandlers",
          value: function() {
            var e = this,
              t = this._options.streamName,
              n = function(e) {
                return ["publisher", e, t.split("-").join("_")].join("_")
              };
            window[n("r5proConnectClosed")] = function() {
              e.trigger(new k.PublisherEvent(k.PublisherEventTypes.CONNECTION_CLOSED, e))
            }, window[n("r5proConnectSuccess")] = function() {
              return e.trigger(new k.PublisherEvent(k.PublisherEventTypes.CONNECT_SUCCESS, e))
            }, window[n("r5proUnpublishSuccess")] = function() {
              return e.trigger(new k.PublisherEvent(k.PublisherEventTypes.UNPUBLISH_SUCCESS, e))
            }, window[n("r5proPublishStart")] = function() {
              e._connectFuture.resolve(e), e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_START, e))
            }, window[n("r5proPublishMetadata")] = function(t) {
              return e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_METADATA, e, t))
            }, window[n("r5proPublishInsufficientBW")] = function(t) {
              return e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_INSUFFICIENT_BANDWIDTH, e, t))
            }, window[n("r5proPublishSufficientBW")] = function(t) {
              return e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_SUFFICIENT_BANDWIDTH, e, t))
            }, window[n("r5proPublishRecoveringBW")] = function(t) {
              return e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_RECOVERING_BANDWIDTH, e, t))
            }, window[n("r5proConnectFailure")] = function() {
              e._connectFuture.reject(k.PublisherEventTypes.CONNECT_FAILURE), e.trigger(new k.PublisherEvent(k.PublisherEventTypes.CONNECT_FAILURE, e))
            }, window[n("r5proPublishFail")] = function() {
              e._connectFuture.reject(k.PublisherEventTypes.PUBLISH_FAIL), e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_FAIL, e))
            }, window[n("r5proPublishInvalidName")] = function() {
              e._connectFuture.reject(k.PublisherEventTypes.PUBLISH_INVALID_NAME), e.trigger(new k.PublisherEvent(k.PublisherEventTypes.PUBLISH_INVALID_NAME, e))
            }
          }
        }, {
          key: "init",
          value: function(e) {
            var t = this,
              n = new P.DeferredPromise,
              r = e.minFlashVersion || N.minFlashVersion;
            if (S.default.supportsFlashVersion(r)) {
              this._options = (0, s.default)({}, N, e);
              try {
                S.default.injectScript(this._options.swfobjectURL).then(function() {
                  return (0, A.debug)(M, "SWFObject embedded."), t._sourceHandler ? ((0, A.debug)(M, "Publish handler established."), t._sourceHandler.addSource(t._elementId, t._options)) : ((0, A.debug)(M, "Publish handler not established."), !0)
                }).then(function() {
                  t._setViewIfNotExist(t._view, t._options.mediaElementId), n.resolve(t)
                }).catch(function(e) {
                  (0, A.error)(M, "Could not embed Flash-based RTMP Publisher. Reason: " + e), t._sourceHandler && t._sourceHandler.disconnect(), n.reject(e), t.trigger(new k.PublisherEvent(k.RTMPPublisherEventTypes.EMBED_FAILURE, t))
                })
              } catch (e) {
                n.reject("Could not inject Flash-based Publisher into the page. Reason: " + e.message), t.trigger(new k.PublisherEvent(k.RTMPPublisherEventTypes.EMBED_FAILURE, t))
              }
            } else n.reject("Could not resolve RTMPPublisher instance. Requires minimum Flash Player install of " + r);
            return n.promise
          }
        }, {
          key: "publish",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              r = n || new P.DeferredPromise;
            this._setUpConnectCallback(r), this._options.streamName = t || this._options.streamName;
            var i = this._options;
            try {
              var a = this._sourceHandler;
              this._sourceHandler.getEmbedOperation().then(function() {
                (0, A.debug)(M, "[handler:embed:complete]"), S.default.getEmbedObject(e._elementId) && e._establishExtIntHandlers();
                var t = 0;
                ! function e() {
                  var n = void 0;
                  n = setTimeout(function() {
                    try {
                      clearTimeout(n), a.connect((0, o.default)(i))
                    } catch (n) {
                      if (t++ > 100) throw n;
                      e()
                    }
                  }, 300)
                }()
              }).catch(function(t) {
                r.reject(t), e.trigger(new k.PublisherEvent(k.PublisherEventTypes.CONNECT_FAILURE, e))
              })
            } catch (e) {
              (0, A.error)(M, "[handler:embed:error]"), r.reject("Could not initiate connection sequence. Reason: " + e.message), this.trigger(new k.PublisherEvent(k.PublisherEventTypes.CONNECT_FAILURE, this)), this._tearDownConnectCallback()
            }
            return this._connectFuture = r, r.promise
          }
        }, {
          key: "unpublish",
          value: function() {
            var e = new P.DeferredPromise;
            try {
              S.default.getEmbedObject(this._elementId).unpublish(), e.resolve()
            } catch (t) {
              (0, A.error)(M, "Could not initiate publish sequence. Reason: " + t.message), e.reject(t.message)
            }
            return this._connectFuture = void 0, e.promise
          }
        }, {
          key: "send",
          value: function(e, t) {
            this._sourceHandler.send(e, "string" == typeof t ? t : (0, o.default)(t))
          }
        }, {
          key: "setMediaQuality",
          value: function(e) {
            this._sourceHandler && this._sourceHandler.setMediaQuality(e)
          }
        }, {
          key: "overlayOptions",
          value: function(e) {
            this._options = (0, s.default)(this._options, e)
          }
        }, {
          key: "getConnection",
          value: function() {
            return this._sourceHandler
          }
        }, {
          key: "getOptions",
          value: function() {
            return this._options
          }
        }, {
          key: "getType",
          value: function() {
            return O.PublishTypes.RTMP.toUpperCase()
          }
        }]), t
      }(g.default);
    t.default = I
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Red5ProSharedObjectPeerConnection = t.Red5ProSharedObjectSocket = t.Red5ProSharedObject = void 0;
    var i = n(130),
      o = r(i),
      a = n(90),
      s = r(a),
      u = n(129),
      c = r(u);
    t.Red5ProSharedObject = o.default, t.Red5ProSharedObjectSocket = s.default, t.Red5ProSharedObjectPeerConnection = c.default
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(31),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(29),
      _ = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(b),
      m = n(60),
      g = r(m),
      y = n(7),
      S = r(y),
      E = n(90),
      C = r(E),
      w = n(25),
      T = n(13),
      k = n(8),
      P = n(2),
      O = /(.*) starting/i,
      R = function(e) {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
          (0, s.default)(this, t);
          var n = Math.floor(65536 * Math.random()).toString(16),
            r = "sharedobject-" + n,
            i = (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
          return i.id = r, i._options = void 0, i._socket = void 0, i._sharedObjectName = void 0, i._connectionPromise = void 0, i
        }
        return (0, v.default)(t, e), (0, c.default)(t, [{
          key: "_removeConnectionHandlers",
          value: function(e) {
            e.onconnectionstatechange = void 0, e.oniceconnectionstatechange = void 0, e.onicecandidate = void 0, e.ontrack = void 0, e.ondatachannel = void 0
          }
        }, {
          key: "_addConnectionHandlers",
          value: function(e, t) {
            var n = this,
              r = void 0;
            t = t || this._connectionPromise, e.onconnectionstatechange = function() {
              (0, P.debug)(n._name, "[peer.onconnectionstatechange] - State: " + e.connectionState), "connected" === e.connectionState ? ((0, P.debug)(n._name, "[peerconnection:open]"), n.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.OPEN, n._name, {
                peerConnection: n
              }))) : "failed" !== e.connectionState && "disconnected" !== e.connectionState || ((0, P.warn)(n._name, "[peerconnection:error]"), "failed" === e.connectionState && n.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.ERROR, n._name, {
                peerConnection: n,
                error: "Connection Failed."
              })), t && t.reject("Connection Failed."))
            }, e.onicecandidate = function(e) {
              (0, P.debug)(n._name, "[peer.onicecandidate] - Peer Candidate: " + e.candidate), e.candidate ? n._socket.post({
                handleCandidate: n._name,
                data: {
                  candidate: e.candidate
                }
              }) : null === e.candidate && (0, P.debug)(n._name, "[icecandidatetrickle:end]")
            }, e.oniceconnectionstatechange = function(i) {
              var o = e.iceConnectionState;
              (0, P.debug)(n._name, "[peer.oniceconnectionstatechange] - State: " + o), "connected" === o && S.default.getIsEdge() ? ((0, P.debug)(n._name, "[edge/ortc:notify complete]"), (0, P.debug)(n._name, "[icecandidategathering:end]"), n._socket.postEndOfCandidates(n._name)) : "failed" === o ? (r && clearTimeout(r), n.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.ERROR, n._name, {
                peerConnection: n,
                error: "Connection Failed."
              })), n.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.CLOSE, n._name, {
                peerConnection: n,
                event: i
              })), t && t.reject("Connection Failed.")) : "disconnected" === o ? r = setTimeout(function() {
                (0, P.debug)(n._name, "[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection."), clearTimeout(r), n.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.CLOSE, n._name, {
                  peerConnection: n,
                  event: i
                }))
              }, 5e3) : r && ((0, P.debug)(n._name, "[peer.oniceconnectionstatechange] - Clearing timeout for reconnect."), clearTimeout(r))
            }, e.onicegatheringstatechange = function() {
              var t = e.iceGatheringState;
              (0, P.debug)(n._name, "[peer.onicegatheringstatechange] - State: " + t), "complete" === t && ((0, P.debug)(n._name, "[icecandidategathering:end]"), n._socket.postEndOfCandidates(n._name))
            }
          }
        }, {
          key: "_createOffer",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            (0, P.debug)(this._name, "[peer.createoffer]"), this._peerConnection.createOffer().then(function(n) {
              (0, P.debug)(e._name, "[peer:offer] " + n.sdp), e._peerConnection.setLocalDescription(n).then(function() {
                e._socket.post({
                  handleOffer: e._name,
                  transport: "udp",
                  data: {
                    sdp: n
                  }
                })
              }).catch(function(e) {
                t && t.reject(e)
              })
            })
          }
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {
            (0, f.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "getRemoteSharedObject", this).call(this, e), this._sharedObjectName = e
          }
        }, {
          key: "init",
          value: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              r = new k.DeferredPromise;
            return this.id = n || this.id, this._name = this.id, this._options = e, this._socket = new C.default(this), this._socket.on("MessageTransport.Open", function(n) {
              (0, P.debug)(t._name, "[socket:event] - " + n.type), t._connectionPromise = r, t.setUpWithPeerConfiguration(e.rtcConfiguration, t.getDataChannelConfiguration(e)).then(function() {
                t._createOffer(r)
              }).catch(function(e) {
                t.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.ERROR, t._name, {
                  peerConnection: t,
                  error: e
                })), r.reject(e)
              })
            }), this._socket.init(e, this.id, 4).catch(function(e) {
              t.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.ERROR, t._name, {
                peerConnection: t,
                error: e
              })), r.reject(e)
            }), r.promise
          }
        }, {
          key: "getMessageTransport",
          value: function() {
            return this._socket || this
          }
        }, {
          key: "getDataChannelConfiguration",
          value: function(e) {
            return e.dataChannelConfiguration || {
              name: "red5pro"
            }
          }
        }, {
          key: "getDataChannelName",
          value: function(e) {
            var t = e.dataChannelConfiguration;
            return t && t.name ? t.name : "red5pro"
          }
        }, {
          key: "onIceTrickleComplete",
          value: function() {
            (0, P.debug)(this._name, "[peer:icetricklecomplete]"), this._socket.post({
              startChannel: this.getDataChannelName(this._options)
            })
          }
        }, {
          key: "onAddIceCandidate",
          value: function(e) {
            (0, P.debug)(this._name, "[peer:addicecandidate]"), (0, w.isObjectEmpty)(e.candidate) ? (0, P.debug)(this._name, "[peer:onemptycandidate]") : this._peerConnection.addIceCandidate(e)
          }
        }, {
          key: "onSDPAnswer",
          value: function(e) {
            var t = this;
            (0, P.debug)(this._name, "[peer:handleanswer]"), this._peerConnection.setRemoteDescription(new _.RTCSessionDescription(e)).then(function() {}).catch(function(e) {
              t.trigger(new T.MessageTransportStateEvent(T.MessageTransportStateEventTypes.ERROR, t._name, {
                peerConnection: t,
                error: e
              })), t._connectionPromise.reject(e)
            })
          }
        }, {
          key: "onDataChannelAvailable",
          value: function(e) {
            this._socket.sever({
              switchChannel: e || "red5pro"
            }), this._socket = void 0, this._connectionPromise.resolve(this)
          }
        }, {
          key: "onSocketStatus",
          value: function(e) {
            if (e.message) {
              var t = O.exec(e.message);
              (0, P.debug)(this._name, "[peer:status] " + e.message), t && t.length
            }
          }
        }]), t
      }(g.default);
    t.default = R
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(38),
      s = r(a),
      u = n(3),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(5),
      f = r(h),
      p = n(0),
      v = r(p),
      b = n(1),
      _ = r(b),
      m = n(19),
      g = r(m),
      y = n(7),
      S = r(y),
      E = n(13),
      C = n(2),
      w = "Red5ProSharedObject",
      T = function(e, t) {
        (0, C.debug)([w, e].join(":"), t)
      },
      k = function(e, t) {
        (0, C.warn)([w, e].join(":"), t)
      },
      P = function(e, t) {
        (0, C.error)([w, e].join(":"), t)
      },
      O = function(e) {
        return "string" == typeof e ? JSON.parse(e) : e
      },
      R = function() {
        function e(t, n) {
          (0, v.default)(this, e), this.key = t, this.value = n
        }
        return (0, _.default)(e, [{
          key: "toObject",
          value: function() {
            var e = {};
            return e[this.key] = this.value, e
          }
        }]), e
      }(),
      A = function() {
        function e(t, n) {
          (0, v.default)(this, e), this.methodName = t;
          var r = void 0;
          if ("[object Array]" === Object.prototype.toString.call(n)) {
            var i = void 0,
              o = void 0,
              a = n.length;
            for (r = [], i = 0; i < a; i++) o = O(n[i]), "[object Array]" === Object.prototype.toString.call(n) ? r = r.concat(o) : r.push(o)
          } else r = [O(n)];
          this.message = 1 === r.length ? r[0] : r
        }
        return (0, _.default)(e, [{
          key: "toObject",
          value: function() {
            return {
              methodName: this.methodName,
              message: this.message
            }
          }
        }]), e
      }(),
      M = function(e) {
        function t(e, n) {
          (0, v.default)(this, t);
          var r = (0, d.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
          return r._name = e, r._transport = void 0, r._transportController = void 0, r._onclose = r.close.bind(r), r._handleTransportStateEvents = r._handleTransportStateEvents.bind(r), r._handleMessageTransportChange = r._handleMessageTransportChange.bind(r), r.setMessageTransportController(n), r
        }
        return (0, f.default)(t, e), (0, _.default)(t, [{
          key: "_establishTransport",
          value: function(e) {
            e.addSharedObjectResponseHandler(this);
            try {
              T(this._name, "[sharedobject:connect:attempt]"), e.on("*", this._handleSocketStateEvents), e.getRemoteSharedObject(this._name), S.default.addCloseHandler(this._onclose, 0)
            } catch (e) {
              P(this._name, "[sharedobject:connect:error]: " + e.message), this._transport = void 0, this._transportController = void 0
            }
          }
        }, {
          key: "_handleMessageTransportChange",
          value: function(e) {
            var t = this,
              n = e.data.controller,
              r = setTimeout(function() {
                clearTimeout(r), t.setMessageTransportController(n)
              }, 1e3)
          }
        }, {
          key: "_handleTransportStateEvents",
          value: function(e) {
            T(this._name, e.name + ": " + e.type), e.type === E.MessageTransportStateEventTypes.CLOSE && (this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECTION_CLOSED, this._name)), this.close())
          }
        }, {
          key: "_getJsonFromSocketMessage",
          value: function(e) {
            try {
              return "string" == typeof e.data ? JSON.parse(e.data) : e.data
            } catch (t) {
              k(this._name, "Could not parse message as JSON. Message= " + e.data + ". Error= " + t.message)
            }
            return null
          }
        }, {
          key: "_notifyOfPropertyValues",
          value: function(e) {
            if (0 === (0, s.default)(e).length) this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, {}));
            else {
              var t = void 0;
              for (t in e) this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, new R(t, e[t]).toObject()))
            }
          }
        }, {
          key: "_notifyOfEvents",
          value: function(e) {
            var t = void 0,
              n = void 0,
              r = !1,
              i = e.length;
            for (t = 0; t < i; t++) switch (n = e[t], n.subtype) {
              case 9:
                this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_REMOVE, this._name, {
                  attribute: n.attribute
                })), r = !0;
                break;
              case 4:
                n.attributes ? this._notifyOfPropertyValues(n.attributes) : this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, new R(n.attribute, n.value).toObject())), r = !0;
                break;
              case 6:
                this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.METHOD_UPDATE, this._name, new A(n.method, n.value).toObject())), r = !0
            }
            return r
          }
        }, {
          key: "respond",
          value: function(e) {
            if (e.data) {
              var t = this._getJsonFromSocketMessage(e);
              if (null === t) return k(this._name, "Determined message response not in correct format. Aborting message handle."), !0;
              if (void 0 !== t.data)
                if (t.data.name === this._name) {
                  if (T(this._name, "[sharedobject-response]: " + (0, o.default)(t, null, 2)), "SharedObject.Status.GetRemote" === t.data.status && "Success" === t.data.message) return this._transport.connectToSharedObject(this._name), !0;
                  if ("SharedObject.Status.GetRemote" === t.data.status && "Fail" === t.data.message) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECT_FAILURE, this._name)), !0;
                  if ("SharedObject.Status.Connect" === t.data.status && "Success" === t.data.message) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECT_SUCCESS, this._name)), !0;
                  if ("SharedObject.Status.Connect" === t.data.status && "Fail" === t.data.message) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECT_FAILURE, this._name)), !0;
                  if ("SharedObject.Status.Disconnect" === t.data.status) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECTION_CLOSED, this._name)), !0;
                  if ("sharedobject" === t.data.type) {
                    if (t.data.hasOwnProperty("events")) return this._notifyOfEvents(t.data.events);
                    if (t.data.hasOwnProperty("value")) return this._notifyOfPropertyValues(t.data.value)
                  }
                } else T(this._name, "Unhandled Message exchange: " + (0, o.default)(t, null, 2))
            }
            return !1
          }
        }, {
          key: "send",
          value: function(e, t) {
            var n = this._transport;
            n ? n.sendToSharedObject(this._name, e, t) : k(this._name, "No WebSocket connection available!")
          }
        }, {
          key: "setProperty",
          value: function(e, t) {
            this._transport.sendPropertyToSharedObject(this._name, e, t)
          }
        }, {
          key: "close",
          value: function() {
            var e = this._transport;
            if (e) {
              try {
                e.closeSharedObject(this._name)
              } catch (e) {}
              e.removeSharedObjectResponseHandler(this), e.off("*", this._handleTransportStateEvents)
            }
            this._transport = void 0, this._transportController = void 0, S.default.removeCloseHandler(this._onclose)
          }
        }, {
          key: "getMessageTransportController",
          value: function() {
            return this._transportController
          }
        }, {
          key: "setMessageTransportController",
          value: function(e) {
            this._transport && (this._transport.removeSharedObjectResponseHandler(this), this._transport.off("*", this._handleTransportStateEvents), S.default.removeCloseHandler(this._onclose), this._transport = void 0, this._transportController = void 0), this._transportController = e, this._transport = this._transportController.getMessageTransport(), this._transportController && this._transport && (this._transportController.on(E.MessageTransportStateEventTypes.CHANGE, this._handleMessageTransportChange), this._establishTransport(this._transport))
          }
        }, {
          key: "getName",
          value: function() {
            return this._name
          }
        }]), t
      }(g.default);
    t.default = M
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(3),
      o = r(i),
      a = n(0),
      s = r(a),
      u = n(1),
      c = r(u),
      l = n(6),
      d = r(l),
      h = n(5),
      f = r(h),
      p = n(19),
      v = r(p),
      b = n(7),
      _ = r(b),
      m = n(91),
      g = n(2),
      y = "ControlSlider",
      S = function(e) {
        function t(e) {
          (0, s.default)(this, t);
          var n = (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this));
          return n.name = [y, e].join("::"), (0, g.debug)(n.name, "[init]"), n._container = _.default.createElement("div"), n._button = n.createButton(), n._track = n.createTrack(), n._progressBar = n.createProgressBar(), n._container.appendChild(n._track), n._container.appendChild(n._progressBar), n._container.appendChild(n._button), n._value = 0, n._disabled = !1, n._eventStartPosition = 0, n._layout(), n._mouseupHandler = n._mouseup.bind(n), n._mousedownHandler = n._mousedown.bind(n), n._mousemoveHandler = n._mousemove.bind(n), n._touchupHandler = n._touchproxy.bind(n), n._touchdownHandler = n._touchproxy.bind(n), n._touchmoveHandler = n._touchproxy.bind(n), n._updateHandlers(n._disabled), n
        }
        return (0, f.default)(t, e), (0, c.default)(t, [{
          key: "_touchproxy",
          value: function(e) {
            if (e.preventDefault(), !(e.touches.length > 1 || "touchend" == e.type && e.touches.length > 0)) {
              var t = _.default.createEvent("MouseEvent"),
                n = void 0,
                r = void 0,
                i = e.originalTarget || e.target;
              switch (e.type) {
                case "touchstart":
                  n = "mousedown", r = e.changedTouches[0];
                  break;
                case "touchmove":
                  n = "mousemove", r = e.changedTouches[0];
                  break;
                case "touchend":
                  n = "mouseup", r = e.changedTouches[0]
              }
              t.initMouseEvent(n, !0, !0, i.ownerDocument.defaultView, 0, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), i.dispatchEvent(t)
            }
          }
        }, {
          key: "_mouseup",
          value: function() {
            this._eventStartPosition = 0, document.removeEventListener("mousemove", this._mousemoveHandler), document.removeEventListener("mouseup", this._mouseupHandler), document.removeEventListener("touchmove", this._touchmoveHandler), document.removeEventListener("touchup", this._touchupHandler), this.trigger(new m.SliderEvent(m.SliderEventTypes.CHANGE_COMPLETE, this))
          }
        }, {
          key: "_mousemove",
          value: function(e) {
            var t = _.default.getMouseXFromEvent(e) - this._eventStartPosition,
              n = this._button.parentNode.getBoundingClientRect(),
              r = this._eventStartPosition + t - n.left;
            r = Math.max(0, r), r = Math.min(r, n.width);
            var i = r / n.width;
            this.trigger(new m.SliderEvent(m.SliderEventTypes.CHANGE, this, i))
          }
        }, {
          key: "_mousedown",
          value: function(e) {
            this._eventStartPosition = _.default.getMouseXFromEvent(e), this.trigger(new m.SliderEvent(m.SliderEventTypes.CHANGE_START, this)), document.addEventListener("mousemove", this._mousemoveHandler), document.addEventListener("mouseup", this._mouseupHandler), document.addEventListener("touchmove", this._touchmoveHandler), document.addEventListener("touchup", this._touchupHandler)
          }
        }, {
          key: "_updateHandlers",
          value: function(e) {
            this._eventStartPosition = 0, e ? (this._track.removeEventListener("click", this._mousemoveHandler), this._progressBar.removeEventListener("click", this._mousemoveHandler), this._button.removeEventListener("mousedown", this._mousedownHandler), document.removeEventListener("mousemove", this._mousemoveHandler), document.removeEventListener("mouseup", this._mouseupHandler), document.removeEventListener("touchmove", this._touchmoveHandler), document.removeEventListener("touchup", this._touchupHandler), this._track.classList.add("red5pro-media-slider-disabled"), this._progressBar.classList.add("red5pro-media-slider-disabled"), this._button.classList.add("red5pro-media-slider-disabled")) : (this._track.addEventListener("click", this._mousemoveHandler), this._progressBar.addEventListener("click", this._mousemoveHandler), this._button.addEventListener("mousedown", this._mousedownHandler), this._button.addEventListener("touchstart", this._touchdownHandler), this._track.classList.remove("red5pro-media-slider-disabled"), this._progressBar.classList.remove("red5pro-media-slider-disabled"), this._button.classList.remove("red5pro-media-slider-disabled"))
          }
        }, {
          key: "_layout",
          value: function() {
            var e = this._progressBar.parentNode.clientWidth * this._value;
            this._progressBar.style.width = e + "px", this._button.style.left = e - .5 * this._button.clientWidth + "px"
          }
        }, {
          key: "createButton",
          value: function() {
            var e = _.default.createElement("span");
            return e.classList.add("red5pro-media-slider-button"), e
          }
        }, {
          key: "createProgressBar",
          value: function() {
            var e = _.default.createElement("span");
            return e.classList.add("red5pro-media-slider-progress"), e
          }
        }, {
          key: "createTrack",
          value: function() {
            var e = _.default.createElement("span");
            return e.classList.add("red5pro-media-slider-track"), e
          }
        }, {
          key: "value",
          get: function() {
            return this._value
          },
          set: function(e) {
            this._value = e, this._layout()
          }
        }, {
          key: "disabled",
          get: function() {
            return this._disabled
          },
          set: function(e) {
            this._disabled = e, this._updateHandlers(e)
          }
        }, {
          key: "view",
          get: function() {
            return this._container
          }
        }]), t
      }(v.default);
    t.default = S
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.RTMPSubscriber = t.HLSSubscriber = t.RTCSubscriber = t.Red5ProSubscriber = void 0;
    var i = n(97),
      o = r(i),
      a = n(99),
      s = r(a),
      u = n(3),
      c = r(u),
      l = n(0),
      d = r(l),
      h = n(1),
      f = r(h),
      p = n(6),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(94),
      g = r(m),
      y = n(92),
      S = r(y),
      E = n(19),
      C = r(E),
      w = n(134),
      T = r(w),
      k = n(135),
      P = r(k),
      O = n(133),
      R = r(O),
      A = n(8),
      M = n(36),
      N = n(2),
      I = "Red5ProSubscriber",
      L = new S.default,
      j = function() {
        var e = new g.default;
        return e.set(M.PlaybackTypes.RTC, T.default), e.set(M.PlaybackTypes.RTMP, P.default), e.set(M.PlaybackTypes.HLS, R.default), e
      }(),
      H = function(e) {
        function t() {
          (0, d.default)(this, t);
          var e = (0, v.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
          return e._options = void 0, e._order = [M.PlaybackTypes.RTC, M.PlaybackTypes.RTMP, M.PlaybackTypes.HLS], e
        }
        return (0, _.default)(t, e), (0, f.default)(t, [{
          key: "_getPlaybackFromOrder",
          value: function(e, t) {
            return L.create(e, j, t, "init")
          }
        }, {
          key: "getPlaybackOrder",
          value: function() {
            return this._order
          }
        }, {
          key: "setPlaybackOrder",
          value: function(e) {
            e = "string" == typeof e ? [e] : e;
            var t = e.filter(function(e) {
              var t = void 0;
              for (t in M.PlaybackTypes)
                if (M.PlaybackTypes[t].toLowerCase() === e.toLowerCase()) return !0;
              return !1
            }).map(function(e) {
              return e.toLowerCase()
            });
            return this._order = [].concat((0, s.default)(new o.default(t))), (0, N.debug)(I, "[orderupdate]: " + this._order), this
          }
        }, {
          key: "init",
          value: function(e) {
            this._options = e;
            var t = new A.DeferredPromise;
            return (0, N.debug)(I, "[init]"), this._getPlaybackFromOrder(this._order, this._options).then(function(e) {
              (0, N.debug)(I, "[init:success]: subscriber found " + e.getType()), t.resolve(e)
            }).catch(function(e) {
              (0, N.warn)(I, "[playerror]: Could not implement a subscriber: " + e), t.reject(e)
            }), t.promise
          }
        }, {
          key: "playbackTypes",
          get: function() {
            return M.PlaybackTypes
          }
        }]), t
      }(C.default);
    t.Red5ProSubscriber = H, t.RTCSubscriber = T.default, t.HLSSubscriber = R.default, t.RTMPSubscriber = P.default
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(30),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(7),
      _ = r(b),
      m = n(44),
      g = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(m),
      y = n(45),
      S = r(y),
      E = n(136),
      C = r(E),
      w = n(47),
      T = r(w),
      k = n(24),
      P = n(13),
      O = n(36),
      R = n(8),
      A = n(2),
      M = n(46),
      N = "HLSSubscriber",
      I = {
        protocol: "https",
        port: 443,
        app: "live",
        mimeType: "application/x-mpegURL",
        mediaElementId: "red5pro-subscriber",
        autoLayoutOrientation: !0,
        muteOnAutoplayRestriction: !0,
        subscriptionId: function() {
          return "subscriber-" + Math.floor(65536 * Math.random()).toString(16)
        }()
      },
      L = /^http(|s).*\.m3u8/g,
      j = function(e) {
        var t = e.hlsprotocol ? e.hlsprotocol : e.protocol,
          n = e.hlsport ? e.hlsport : e.port,
          r = e.context ? [e.app, e.context].join("/") : e.app;
        return t + "://" + e.host + ":" + n + "/" + r + "/" + e.streamName + ".m3u8"
      },
      H = function(e) {
        function t() {
          (0, c.default)(this, t);
          var e = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this));
          return e._options = void 0, e._view = void 0, e._sourceHandler = void 0, e._socketHelper = void 0, e._viewResolver = new R.DeferredPromise, e._subscriptionResolver = new R.DeferredPromise, e._boundBubbleSubscriberEvents = e.bubbleSubscriberEvents.bind(e), e
        }
        return (0, v.default)(t, e), (0, d.default)(t, [{
          key: "_getViewResolverPromise",
          value: function() {
            return this._viewResolver.promise
          }
        }, {
          key: "_getSubscriptionResolverPromise",
          value: function() {
            return this._subscriptionResolver.promise
          }
        }, {
          key: "bubbleSubscriberEvents",
          value: function(e) {
            e.type === P.SubscriberEventTypes.SUBSCRIBE_START && this._subscriptionResolver.resolve(this), this.trigger(new P.SubscriberEvent(e.type, this, e.data))
          }
        }, {
          key: "_glomSourceHandlerAPI",
          value: function(e) {
            var t = this;
            this.play = e.play.bind(e), this.pause = e.pause.bind(e), this.resume = e.resume.bind(e), this.stop = e.stop.bind(e), this.mute = e.mute.bind(e), this.unmute = e.unmute.bind(e), this.setVolume = e.setVolume.bind(e), this.seekTo = e.seekTo.bind(e), this.toggleFullScreen = e.toggleFullScreen.bind(e), e.on("*", function(e) {
              t.trigger(new P.SubscriberEvent(e.type, t, e.data))
            })
          }
        }, {
          key: "_setViewIfNotExist",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (void 0 === e && void 0 !== t) {
              new T.default(t).attachSubscriber(this)
            }
          }
        }, {
          key: "_initHandler",
          value: function(e) {
            var t = this,
              n = this._options,
              r = n.streamName,
              i = n.mimeType,
              o = r.match(L) ? r : j(this._options);
            this._sourceHandler.on("*", this._boundBubbleSubscriberEvents), this._sourceHandler.addSource(o, i, e).then(function() {
              t.trigger(new P.SubscriberEvent(P.SubscriberEventTypes.CONNECT_SUCCESS)), t._trackStreamingModeState(t._sourceHandler)
            }).catch(function(e) {
              (0, A.error)(N, "Could not establish an HLS Subscriber: " + e), t.trigger(new P.SubscriberEvent(P.SubscriberEventTypes.CONNECT_FAILURE))
            })
          }
        }, {
          key: "_trackStreamingModeState",
          value: function(e) {
            var t = this;
            e.on(P.SubscriberEventTypes.STREAMING_MODE_CHANGE, function(e) {
              var n = e.data,
                r = n.streamingMode,
                i = n.previousStreamingMode;
              if ("Empty" !== r && "Empty" === i) {
                t._sourceHandler.disconnect();
                var o = t._options,
                  a = o.streamName,
                  s = o.mimeType,
                  u = a.match(L) ? a : j(t._options);
                t._sourceHandler.addSource(u, s, t._options).then(function() {
                  return t.subscribe()
                }).catch(function(e) {
                  return e(N, e)
                })
              }
            })
          }
        }, {
          key: "init",
          value: function(e) {
            var t = this,
              n = new R.DeferredPromise;
            if (_.default.supportsHLS())
              if (e.connectionParams && !g.isSupported())(0, A.warn)(N, "Could not resolve HLSSubscriber instance with connection params. WebSocket support is required."), n.reject(N, "Could not resolve HLSSubscriber instance with connection params. WebSocket support is required.");
              else {
                this._options = (0, o.default)({}, I, e);
                var r = new R.DeferredPromise;
                if (this._options.connectionParams) try {
                  this._socketHelper = new S.default(this, "HLSSubscriptionSocket");
                  var i = (0, M.hlsSocketEndpointFromOptions)(this._options, {
                    id: this._options.subscriptionId
                  });
                  this._socketHelper.setUp(i, r)
                } catch (e) {
                  (0, A.error)(N, e.message), n.reject(N, "Could not set up WebSocket for authentication with connectionParams: " + e.message)
                } else r.resolve();
                r.promise.then(function() {
                  t._socketHelper && (t._socketHelper.tearDown(), t._socketHelper = void 0), t._setViewIfNotExist(t._view, t._options.mediaElementId), t._getViewResolverPromise().then(function(e) {
                    t._sourceHandler = new C.default(e.view, t.getType()), t._glomSourceHandlerAPI(t._sourceHandler), t._options && t._initHandler(t._options)
                  }), n.resolve(t)
                }).catch(function(e) {
                  n.reject(e), t.trigger(new P.SubscriberEvent(P.SubscriberEventTypes.CONNECT_FAILURE, t, e))
                })
              }
            else(0, A.warn)(N, "Could not resolve HLSSubscriber instance."), n.reject("Could not resolve HLSSubscriber instance.");
            return n.promise
          }
        }, {
          key: "setView",
          value: function(e) {
            return this._view = e, this._viewResolver.resolve(e), this
          }
        }, {
          key: "subscribe",
          value: function() {
            return this._getSubscriptionResolverPromise()
          }
        }, {
          key: "unsubscribe",
          value: function() {
            (0, A.debug)(N, "[unscubscribe]");
            var e = new R.DeferredPromise;
            this._socketHelper && this._socketHelper.tearDown();
            try {
              this._sourceHandler.stop(), this._sourceHandler.disconnect(), e.resolve()
            } catch (t) {
              e.reject(t.message)
            }
            return e.promise
          }
        }, {
          key: "getConnection",
          value: function() {
            return this._sourceHandler
          }
        }, {
          key: "getControls",
          value: function() {
            return this._sourceHandler ? this._sourceHandler.getControls() : void 0
          }
        }, {
          key: "getOptions",
          value: function() {
            return this._options
          }
        }, {
          key: "getPlayer",
          value: function() {
            return this._view.view
          }
        }, {
          key: "getType",
          value: function() {
            return O.PlaybackTypes.HLS.toUpperCase()
          }
        }]), t
      }(k.PlaybackController);
    t.default = H
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = n(38),
      a = i(o),
      s = n(10),
      u = i(s),
      c = n(30),
      l = i(c),
      d = n(3),
      h = i(d),
      f = n(0),
      p = i(f),
      v = n(1),
      b = i(v),
      _ = n(6),
      m = i(_),
      g = n(5),
      y = i(g),
      S = n(7),
      E = i(S),
      C = n(82),
      w = n(29),
      T = r(w),
      k = n(44),
      P = r(k),
      O = n(137),
      R = i(O),
      A = n(120),
      M = i(A),
      N = n(122),
      I = i(N),
      L = n(47),
      j = i(L),
      H = n(24),
      D = n(25),
      F = n(46),
      U = n(13),
      x = n(36),
      B = n(59),
      V = n(8),
      G = n(2),
      W = /(.*) starting/i,
      z = "RTCSubscriber",
      Y = function() {
        return "subscriber-" + Math.floor(65536 * Math.random()).toString(16)
      },
      q = {
        protocol: "wss",
        port: 443,
        app: "live",
        autoLayoutOrientation: !0,
        mediaElementId: "red5pro-subscriber",
        rtcConfiguration: {
          iceServers: [{
            urls: "stun:stun2.l.google.com:19302"
          }],
          iceCandidatePoolSize: 2,
          bundlePolicy: "max-bundle"
        },
        iceServers: void 0,
        iceTransport: B.IceTransportTypes.UDP,
        muteOnAutoplayRestriction: !0,
        maintainConnectionOnSubscribeErrors: !1,
        signalingSocketOnly: !0,
        dataChannelConfiguration: void 0,
        socketSwitchDelay: 1e3
      },
      J = function(e) {
        function t() {
          (0, p.default)(this, t);
          var e = (0, m.default)(this, (t.__proto__ || (0, h.default)(t)).call(this));
          return e._view = void 0, e._options = void 0, e._peerHelper = void 0, e._socketHelper = void 0, e._messageTransport = void 0, e._connectionClosed = !0, e._sourceHandler = void 0, e._mediaStream = void 0, e._viewResolver = new V.DeferredPromise, e._availabilityResolver = new V.DeferredPromise, e._subscriptionResolver = new V.DeferredPromise, e._orientation = 0, e._streamingMode = "Video/Audio", e._switchChannelRequest = void 0, e
        }
        return (0, y.default)(t, e), (0, b.default)(t, [{
          key: "_getViewResolverPromise",
          value: function() {
            return this._viewResolver.promise
          }
        }, {
          key: "_getAvailabilityResolverPromise",
          value: function() {
            return this._availabilityResolver.promise
          }
        }, {
          key: "_getSubscriptionResolverPromise",
          value: function() {
            return this._subscriptionResolver.promise
          }
        }, {
          key: "_glomSourceHandlerAPI",
          value: function(e) {
            var t = this;
            this.play = e.play.bind(e), this.pause = e.pause.bind(e), this.resume = e.resume.bind(e), this.stop = e.stop.bind(e), this.mute = e.mute.bind(e), this.unmute = e.unmute.bind(e), this.setVolume = e.setVolume.bind(e), this.seekTo = e.seekTo.bind(e), this.toggleFullScreen = e.toggleFullScreen.bind(e), e.on("*", function(e) {
              t.trigger(new U.SubscriberEvent(e.type, t, e.data))
            })
          }
        }, {
          key: "_setViewIfNotExist",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (void 0 === e && void 0 !== t) {
              new j.default(t).attachSubscriber(this)
            }
          }
        }, {
          key: "_initHandler",
          value: function(e, t) {
            e && t && (t.on("*", this._boundBubbleSubscriberEvents), t.addSource(e))
          }
        }, {
          key: "_requestAvailability",
          value: function(e) {
            (0, G.debug)(z, "[requestavailability]"), this._socketHelper.post({
              isAvailable: e
            })
          }
        }, {
          key: "_requestOffer",
          value: function(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
              o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0;
            (0, G.debug)(z, "[requestoffer]");
            var a = {
              requestOffer: e,
              requestId: t,
              transport: n,
              datachannel: r
            };
            void 0 !== i && i !== x.PlaybackVideoEncoder.NONE ? a.videoEncoding = i : E.default.getIsEdge(), void 0 !== o && o !== x.PlaybackAudioEncoder.NONE && (a.audioEncoding = o), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.OFFER_START, this)), this._socketHelper.post(a)
          }
        }, {
          key: "_requestAnswer",
          value: function(e) {
            var t = this;
            (0, G.debug)(z, "[requestanswer]"), this._peerHelper.createAnswer(e).then(function(e) {
              (0, G.debug)(z, "[onanswercreated]"), (0, G.debug)(z, "[> sendanswer]"), t._sendAnswer(t._options.streamName, t._options.subscriptionId, e)
            }).catch(function(e) {
              t.onSDPError(e)
            })
          }
        }, {
          key: "_sendAnswer",
          value: function(e, t, n) {
            (0, G.debug)(z, "[sendanswer]: streamname(" + e + "), subscriptionid(" + t + ")"), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.ANSWER_START, this, n)), this._socketHelper.post({
              handleAnswer: e,
              requestId: t,
              data: {
                sdp: n
              }
            })
          }
        }, {
          key: "_sendCandidate",
          value: function(e) {
            (0, G.debug)(z, "[sendcandidate]"), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.CANDIDATE_START, this, e)), this._socketHelper.post({
              handleCandidate: this._options.streamName,
              requestId: this._options.subscriptionId,
              data: {
                candidate: e
              }
            })
          }
        }, {
          key: "_connect",
          value: function(e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            (0, G.debug)(z, "[connect]"), r && e && ((0, G.warn)("The iceServers configuration property is considered deprecated. Please use the rtcConfiguration configuration property upon which you can assign iceServers. Reference: https://www.red5pro.com/docs/streaming/migrationguide.html"), e.iceServers = r), this._options.iceServers = e ? e.iceServers : r;
            var i = void 0;
            return i = void 0 !== e ? this._peerHelper.setUpWithPeerConfiguration(e, n, void 0) : this._peerHelper.setUp(this._options.iceServers, void 0, this._options.rtcpMuxPolicy), i.then(function(e) {
              t.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.PEER_CONNECTION_AVAILABLE, t, e)), t._requestOffer(t._options.streamName, t._options.subscriptionId, t._options.iceTransport, t._options.signalingSocketOnly, t._options.videoEncoding, t._options.audioEncoding)
            }).catch(function() {
              (0, G.warn)(z, "Could not establish RTCPeerConnection."), t.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.CONNECT_FAILURE, t))
            }), this
          }
        }, {
          key: "_disconnect",
          value: function() {
            this._socketHelper && ((0, G.debug)(z, "[disconnect:socket]"), this._socketHelper.tearDown()), this._peerHelper && ((0, G.debug)(z, "[disconnect:peer]"), this._peerHelper.tearDown()), this._view && this._view.detachStream(), this._socketHelper = void 0, this._peerHelper = void 0, this._messageTransport = void 0, this._sourceHandler && ((0, G.debug)(z, "[disconnect:source]"), this._sourceHandler.disconnect(), this._sourceHandler = void 0), this._connectionClosed = !0
          }
        }, {
          key: "_playIfAutoplaySet",
          value: function(e, t) {
            e && t && (e.autoplay = E.default.hasAttributeDefined(t.view, "autoplay"), e.autoplay && this._sourceHandler.attemptAutoplay(e.muteOnAutoplayRestriction))
          }
        }, {
          key: "_sendSubscribe",
          value: function() {
            (0, G.debug)(z, "[sendsubscribe]"), this._socketHelper.post({
              subscribe: this._options.streamName,
              requestId: this._options.subscriptionId
            })
          }
        }, {
          key: "init",
          value: function(e) { // RTCSubscriber.init()
            const t = this;
            const n = new V.DeferredPromise;
            if (T.isSupported() && P.isSupported()) {
              this._disconnect();
              // console.log('_options:', this._options);
              // console.log('q:', q);
              // console.log('e:', e);
              this._options = (0, l.default)({}, q, e);
              // console.log('_options:', this._options);
              this._options.subscriptionId = this._options.subscriptionId || Y();
              this._peerHelper = new I.default(this);
              this._socketHelper = new M.default(this);
              this._messageTransport = this._socketHelper;
              const r = new V.DeferredPromise;
              const i = (0, F.rtcSocketEndpointFromOptions)(this._options, {
                id: this._options.subscriptionId
              });
              r.promise.then(function() {
                n.resolve(t);
                t._connectionClosed = !1;
                t.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.CONNECT_SUCCESS, t));
              }).catch(function(e) {
                n.reject(e), t.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.CONNECT_FAILURE, t, e))
              });
              this._socketHelper.setUp(i, r);
            }
            else {
              n.reject("Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets.");
            }
            return n.promise;
          }
        }, {
          key: "setView",
          value: function(e) {
            return this._view = e, this._viewResolver.resolve(this._view), this
          }
        }, {
          key: "subscribe",
          value: function() {
            var e = this,
              t = this._options,
              n = t.streamName,
              r = t.mediaElementId,
              i = t.rtcConfiguration,
              o = this._options,
              a = o.signalingSocketOnly,
              s = o.dataChannelConfiguration,
              u = a && T.supportsDataChannel();
            return u && !s && (s = {
              name: "red5pro"
            }), this._options.signalingSocketOnly = u, this._getViewResolverPromise().then(function(t) {
              e._sourceHandler = new R.default(t.view, e.getType()), e._glomSourceHandlerAPI(e._sourceHandler), e._initHandler(e._options, e._sourceHandler)
            }).catch(function() {}), this._getAvailabilityResolverPromise().then(function() {
              e._connect(i, s, e._options.iceServers)
            }).catch(function() {}), this._setViewIfNotExist(this._view, r), this._requestAvailability(n), this._getSubscriptionResolverPromise()
          }
        }, {
          key: "unsubscribe",
          value: function() {
            (0, G.debug)(z, "[unsubscribe]");
            var e = new V.DeferredPromise;
            return this.stop(), this._disconnect(), this._mediaStream = void 0, e.resolve(this), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_STOP, this)), e.promise
          }
        }, {
          key: "onStreamAvailable",
          value: function(e) {
            (0, G.debug)(z, "[onstreamavailable]: " + (0, u.default)(e, null, 2)), this._availabilityResolver.resolve(this)
          }
        }, {
          key: "onStreamUnavailable",
          value: function(e) {
            (0, G.debug)(z, "Stream " + this._options.streamName + " does not exist."), (0, G.debug)(z, "[onstreamunavailable]: " + (0, u.default)(e, null, 2)), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_INVALID_NAME, this)), this._availabilityResolver.reject("Stream " + this._options.streamName + " does not exist."), this._subscriptionResolver.reject("Stream " + this._options.streamName + " does not exist."), this._options.maintainConnectionOnSubscribeErrors ? (this._availabilityResolver = new V.DeferredPromise, this._subscriptionResolver = new V.DeferredPromise) : this._disconnect()
          }
        }, {
          key: "onSDPSuccess",
          value: function(e) {
            (0, G.debug)(z, "[onsdpsuccess]: " + (0, u.default)(e, null, 2))
          }
        }, {
          key: "onSDPOffer",
          value: function(e) {
            (0, G.debug)(z, "[onsdpoffer]: " + (0, u.default)(e, null, 2));
            var t = new T.RTCSessionDescription(e.sdp);
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.OFFER_END, this)), this._requestAnswer(t)
          }
        }, {
          key: "onSDPError",
          value: function(e) {
            this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_FAIL, this, e)), this._subscriptionResolver.reject("Invalid SDP."), (0, G.error)(z, "[onsdperror]"), (0, G.error)(z, e)
          }
        }, {
          key: "onAnswerMediaStream",
          value: function() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.ANSWER_END, this))
          }
        }, {
          key: "onIceCandidate",
          value: function(e) {
            (0, G.debug)(z, "[onicecandidate]"), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.CANDIDATE_END, this)), this._sendCandidate(e)
          }
        }, {
          key: "onIceCandidateTrickleEnd",
          value: function(e) {
            var t = this;
            (0, G.debug)(z, "[onicetrickleend]"), this._getViewResolverPromise().then(function(n) {
              n.attachStream(e), t._mediaStream = e, t.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.ON_ADD_STREAM, t, t._mediaStream))
            })
          }
        }, {
          key: "onAddIceCandidate",
          value: function(e) {
            (0, G.debug)(z, "[onaddicecandidate]"), this._peerHelper.addIceCandidate(e)
          }
        }, {
          key: "onEmptyCandidate",
          value: function() {
            (0, G.debug)(z, "[icecandidatetrickle:empty]"), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.PEER_CANDIDATE_END))
          }
        }, {
          key: "onPeerGatheringComplete",
          value: function() {
            (0, G.debug)(z, "[icecandidategathering:end]"), this._socketHelper && this._socketHelper.postEndOfCandidates(this._options.streamName)
          }
        }, {
          key: "onSocketIceCandidateEnd",
          value: function() {
            (0, G.debug)(z, "[onsocketicecandidateend]"), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.ICE_TRICKLE_COMPLETE, this)), this._sendSubscribe()
          }
        }, {
          key: "onSocketMessageError",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            (0, G.error)(z, "Error in stream subscription: " + e + ".\n[Optional detail]: " + t), this._subscriptionResolver.reject("Error in stream subscription: " + e + "."), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_FAIL, this, e))
          }
        }, {
          key: "onSocketClose",
          value: function(e) {
            (0, G.debug)(z, "[onsocketclose]"), this._peerHelper && this._peerHelper.tearDown(), this.onConnectionClosed(e)
          }
        }, {
          key: "onPeerConnectionFail",
          value: function() {
            (0, G.debug)(z, "[onpeerconnectionfail]"), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_FAIL, this, "fail")), this._subscriptionResolver.reject("Peer Connection Failed.")
          }
        }, {
          key: "onPeerConnectionClose",
          value: function(e) {
            (0, G.debug)(z, "[onpeerconnectionclose]"), this._socketHelper && this._socketHelper.tearDown(), this.onSocketClose(e)
          }
        }, {
          key: "onPeerConnectionOpen",
          value: function() {
            (0, G.debug)(z, "[onpeerconnectionopen]"), this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.PEER_CONNECTION_OPEN))
          }
        }, {
          key: "onUnpublish",
          value: function() {
            (0, G.debug)(z, "[onunpublish]"), this._sourceHandler && this._sourceHandler.unpublish(), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.PLAY_UNPUBLISH, this)), this.unsubscribe()
          }
        }, {
          key: "onConnectionClosed",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            this._connectionClosed || ((0, G.debug)(z, "[onconnectionclosed]"), this._disconnect(), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.CONNECTION_CLOSED, this, e)))
          }
        }, {
          key: "onSendReceived",
          value: function(e, t) {
            "onMetaData" === e ? this.onMetaData(t) : "onPublisherNetworkCongestion" === e ? this.onPublisherNetworkCongestion(t) : "onPublisherNetworkRecovery" === e ? this.onPublisherNetworkRecovery(t) : this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_SEND_INVOKE, this, {
              methodName: e,
              data: t
            }))
          }
        }, {
          key: "onSubscriberStatus",
          value: function(e) {
            (0, G.debug)(z, "[subscriberstatus] - " + (0, u.default)(e, null, 2));
            var t = W.exec(e.message);
            t && t[1] === this._options.streamName ? (this._subscriptionResolver.resolve(this), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_START, this)), this._playIfAutoplaySet(this._options, this._view)) : this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_STATUS, this, e))
          }
        }, {
          key: "onDataChannelAvailable",
          value: function(e) {
            var t = this;
            if ((0, G.debug)("[ondatachannel::available]"), this._switchChannelRequest = {
                switchChannel: e || "red5pro"
              }, this._options.signalingSocketOnly) var n = setTimeout(function() {
              clearTimeout(n), t._socketHelper.sever(t._switchChannelRequest), t._messageTransport = t._peerHelper, t.trigger(new U.MessageTransportStateEvent(U.MessageTransportStateEventTypes.CHANGE, t, {
                controller: t,
                transport: t._messageTransport
              }))
            }, this._options.socketSwitchDelay);
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.DATA_CHANNEL_AVAILABLE, this, {
              name: e,
              dataChannel: this.getDataChannel()
            }))
          }
        }, {
          key: "onDataChannelError",
          value: function(e, t) {
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.DATA_CHANNEL_ERROR, this, {
              dataChannel: e,
              error: t
            }))
          }
        }, {
          key: "onDataChannelMessage",
          value: function(e, t) {
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.DATA_CHANNEL_MESSAGE, this, {
              dataChannel: e,
              message: t
            }))
          }
        }, {
          key: "onDataChannelOpen",
          value: function(e) {
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.DATA_CHANNEL_OPEN, this, {
              dataChannel: e
            }))
          }
        }, {
          key: "onDataChannelClose",
          value: function(e) {
            this.trigger(new U.SubscriberEvent(U.RTCSubscriberEventTypes.DATA_CHANNEL_CLOSE, this, {
              dataChannel: e
            }))
          }
        }, {
          key: "onMetaData",
          value: function(e) {
            var t = e.orientation,
              n = e.streamingMode,
              r = this._streamingMode;
            void 0 !== t && t !== this._orientation && (this._orientation = t, this._options.autoLayoutOrientation && ((0, C.applyOrientation)(this._view.view, parseInt(t, 10), (0, D.metadataResolutionToObject)(e.resolution)), this._sourceHandler && this._sourceHandler.handleOrientationChange(parseInt(t, 10))), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.ORIENTATION_CHANGE, this, {
              orientation: parseInt(t, 10),
              viewElement: this._view.view
            }))), void 0 !== n && n !== r && (this._streamingMode = n, this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.STREAMING_MODE_CHANGE, this, {
              streamingMode: n,
              previousStreamingMode: r,
              viewElement: this._view.view
            }))), this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_METADATA, this, e))
          }
        }, {
          key: "onPublisherNetworkCongestion",
          value: function(e) {
            this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_PUBLISHER_CONGESTION, this, e))
          }
        }, {
          key: "onPublisherNetworkRecovery",
          value: function(e) {
            this.trigger(new U.SubscriberEvent(U.SubscriberEventTypes.SUBSCRIBE_PUBLISHER_RECOVERY, this, e))
          }
        }, {
          key: "callServer",
          value: function(e, t) {
            return this.getMessageTransport().postAsync({
              callAdapter: {
                method: e,
                arguments: t
              }
            })
          }
        }, {
          key: "sendLog",
          value: function(e, t) {
            try {
              var n = (0, a.default)(G.LEVELS).find(function(t) {
                  return t.toLowerCase() === e.toLowerCase()
                }) ? e : G.LEVELS.DEBUG,
                r = "string" == typeof t ? t : (0, u.default)(t);
              this.getMessageTransport().post({
                log: n.toUpperCase(),
                message: r
              })
            } catch (e) {
              var i = e.message || e;
              (0, G.error)(z, "Could not send log to server. Message parameter expected to be String or JSON-serializable object."), (0, G.error)(z, i)
            }
          }
        }, {
          key: "enableStandby",
          value: function() {
            this.getMessageTransport().post({
              standby: !0
            })
          }
        }, {
          key: "disableStandby",
          value: function() {
            this.getMessageTransport().post({
              standby: !1
            })
          }
        }, {
          key: "getMessageTransport",
          value: function() {
            return this._messageTransport
          }
        }, {
          key: "getConnection",
          value: function() {
            return this._socketHelper
          }
        }, {
          key: "getPeerConnection",
          value: function() {
            return this._peerHelper ? this._peerHelper.connection : void 0
          }
        }, {
          key: "getDataChannel",
          value: function() {
            return this._peerHelper ? this._peerHelper.dataChannel : void 0
          }
        }, {
          key: "getMediaStream",
          value: function() {
            return this._mediaStream
          }
        }, {
          key: "getControls",
          value: function() {
            return this._sourceHandler ? this._sourceHandler.getControls() : void 0
          }
        }, {
          key: "getPlayer",
          value: function() {
            return this._view.view
          }
        }, {
          key: "getOptions",
          value: function() {
            return this._options
          }
        }, {
          key: "getType",
          value: function() {
            return x.PlaybackTypes.RTC.toUpperCase()
          }
        }]), t
      }(H.PlaybackController);
    t.default = J
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(62),
      o = r(i),
      a = n(30),
      s = r(a),
      u = n(3),
      c = r(u),
      l = n(0),
      d = r(l),
      h = n(1),
      f = r(h),
      p = n(6),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(7),
      g = r(m),
      y = n(138),
      S = r(y),
      E = n(47),
      C = r(E),
      w = n(24),
      T = n(13),
      k = n(36),
      P = n(37),
      O = n(8),
      R = n(2),
      A = "RTMPSubcriber",
      M = {
        protocol: "rtmp",
        port: 1935,
        width: 320,
        height: 240,
        embedWidth: "100%",
        embedHeight: "100%",
        minFlashVersion: "10.0.0",
        swf: "lib/red5pro/red5pro-subscriber.swf",
        swfobjectURL: "lib/swfobject/swfobject.js",
        productInstallURL: "lib/swfobject/playerProductInstall.swf",
        mediaElementId: "red5pro-subscriber",
        useAdaptiveBitrateController: !1,
        abrVariants: void 0,
        abrVariantUpgradeSettings: {
          minimumDowngradePlaybackSpan: 1e4,
          upgrade: [{
            level: 1,
            retryTimeout: 0
          }, {
            level: 2,
            retryTimeout: 1e4
          }, {
            level: 3,
            retryTimeout: 2e4
          }]
        }
      },
      N = function(e) {
        function t() {
          (0, d.default)(this, t);
          var e = (0, v.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
          return e._options = void 0, e._view = void 0, e._sourceHandler = void 0, e._elementId = void 0, e._embedPromise = void 0, e._getEmbedPromise().then(function() {
            e.onEmbedComplete()
          }).catch(function(t) {
            return e.onEmbedFailure(t)
          }), e._viewResolver = new O.DeferredPromise, e._subscriptionResolver = new O.DeferredPromise, e._orientation = 0, e._streamingMode = "Video/Audio", e
        }
        return (0, _.default)(t, e), (0, f.default)(t, [{
          key: "_getViewResolverPromise",
          value: function() {
            return this._viewResolver.promise
          }
        }, {
          key: "_getSubscriptionResolverPromise",
          value: function() {
            return this._subscriptionResolver.promise
          }
        }, {
          key: "_getEmbedPromise",
          value: function() {
            return this._embedPromise = O.Future.createIfNotExist(this._embedPromise), this._embedPromise.promise
          }
        }, {
          key: "_glomSourceHandlerAPI",
          value: function(e) {
            var t = this;
            this.pause = e.pause.bind(e), this.resume = e.resume.bind(e), this.stop = e.stop.bind(e), this.mute = e.mute.bind(e), this.unmute = e.unmute.bind(e), this.setVolume = e.setVolume.bind(e), this.seekTo = e.seekTo.bind(e), this.toggleFullScreen = e.toggleFullScreen.bind(e), this.setABRLevel = e.setABRLevel.bind(e), this.setABRVariants = e.setABRVariants.bind(e), this.stopABRController = e.stopABRController.bind(e), this.startABRController = e.startABRController.bind(e), this.setABRVariantUpgradeSettings = e.setABRVariantUpgradeSettings.bind(e), e.on("*", function(e) {
              t.trigger(new T.SubscriberEvent(e.type, t, e.data))
            })
          }
        }, {
          key: "_setViewIfNotExist",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            if (void 0 === e && void 0 !== t) {
              new C.default(t).attachSubscriber(this)
            }
          }
        }, {
          key: "_establishExtIntHandlers",
          value: function(e) {
            var t = this;
            (0, R.debug)(A, "Subscriber ID provided to client: (" + e + ").");
            var n = function(t) {
              return ["subscriber", t, e.split("-").join("_")].join("_")
            };
            window[n("r5proConnectClosed")] = function() {
              return t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.CONNECTION_CLOSED, t))
            }, window[n("r5proConnectSuccess")] = function() {
              return t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.CONNECT_SUCCESS, t))
            }, window[n("r5proConnectFailure")] = function() {
              t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.CONNECT_FAILURE, t))
            }, window[n("r5proSubscribeStop")] = function() {
              return t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_STOP, t))
            }, window[n("r5proSubscribeMetadata")] = function(e) {
              var n = JSON.parse(e),
                r = n.orientation,
                i = n.streamingMode,
                o = parseInt(r, 10),
                a = t._streamingMode;
              t._orientation !== o && (t._orientation = o, t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.ORIENTATION_CHANGE, t, {
                orientation: o
              }))), a !== i && (t._streamingMode = i, t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.STREAMING_MODE_CHANGE, t, {
                streamingMode: i,
                previousStreamingMode: a
              }))), t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_METADATA, t, JSON.parse(e)))
            }, window[n("r5proSubscribeUnpublish")] = function() {
              t.onUnpublish()
            }, window[n("r5proSubscribePublisherCongestion")] = function(e) {
              return t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_PUBLISHER_CONGESTION, t, JSON.parse(e)))
            }, window[n("r5proSubscribePublisherRecovery")] = function(e) {
              return t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_PUBLISHER_RECOVERY, t, JSON.parse(e)))
            }, window[n("r5proSubscribeSendInvoke")] = function(e) {
              t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_SEND_INVOKE, t, "string" == typeof e ? JSON.parse(e) : e))
            }, window[n("r5proSubscribePlayRequest")] = function() {
              t.play()
            }, window[n("r5proSubscribeStart")] = function() {
              t._subscriptionResolver.resolve(t), t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_START, t))
            }, window[n("r5proSubscribeInvalidName")] = function() {
              t._subscriptionResolver.reject("NetStream.Play.StreamNotFound", t), t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_INVALID_NAME, t))
            }, window[n("r5proSubscribeFail")] = function() {
              t._subscriptionResolver.reject("NetStream.Failed", t), t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.SUBSCRIBE_FAIL, t))
            }, window[n("r5proSubscribeVolumeChange")] = function(e) {
              t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.VOLUME_CHANGE, t, {
                volume: JSON.parse(e).volume
              }))
            }, window[n("r5proSubscribePlaybackStalled")] = function() {
              (0, R.debug)(A, "playback has stalled...")
            }, window[n("r5proSubscribePlaybackTimeChange")] = function(e) {
              var n = JSON.parse(e);
              t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, t, {
                time: n.value,
                duration: n.duration
              }))
            }, window[n("r5proSubscribePlaybackStateChange")] = function(e) {
              var n = JSON.parse(e).code;
              t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, t, {
                code: n,
                state: P.PlaybackStateReadable[n]
              }))
            }, window[n("r5proSubscribeABRLevelChange")] = function(e) {
              var n = JSON.parse(e),
                r = n.level,
                i = n.stream,
                o = JSON.parse(decodeURIComponent(i));
              t.trigger(new T.SubscriberEvent(T.RTMPSubscriberEventTypes.ABR_LEVEL_CHANGE, t, {
                level: r,
                stream: o
              }))
            }
          }
        }, {
          key: "init",
          value: function(e) {
            var t = this,
              n = new O.DeferredPromise,
              r = e.minFlashVersion || M.minFlashVersion;
            if (g.default.supportsFlashVersion(r)) {
              this._options = (0, s.default)({}, M, e);
              var i = function() {
                t._getViewResolverPromise().then(function(e) {
                  if (t._sourceHandler = new S.default(t, e.view, t.getType()), t._glomSourceHandlerAPI(t._sourceHandler), t._options) {
                    var n = t._embedPromise;
                    t._sourceHandler.addSource(t._elementId, t._options).then(function(e) {
                      t._establishExtIntHandlers(e), n.resolve(t)
                    }).catch(function(e) {
                      return n.reject(e)
                    })
                  }
                })
              };
              try {
                g.default.injectScript(this._options.swfobjectURL).then(function() {
                  var e = t._embedPromise;
                  return (0, R.debug)(A, "SWFObject embedded."), t._sourceHandler ? (t._sourceHandler.addSource(t._elementId, t._options).then(function(n) {
                    t._establishExtIntHandlers(n), e.resolve(t)
                  }).catch(function(t) {
                    e.reject(t)
                  }), t._getEmbedPromise()) : (i(), !0)
                }).then(function() {
                  t._setViewIfNotExist(t._view, t._options.mediaElementId), n.resolve(t)
                }).catch(function(e) {
                  (0, R.error)(A, "Could not embed Flash-based RTMP Player. Reason: " + e), t._sourceHandler && t._sourceHandler.disconnect(), n.reject(e), t.trigger(new T.SubscriberEvent(T.RTMPSubscriberEventTypes.EMBED_FAILURE, t))
                })
              } catch (e) {
                n.reject("Could not inject Flash-based Player into the page. Reason: " + e.message), this.trigger(new T.SubscriberEvent(T.RTMPSubscriberEventTypes.EMBED_FAILURE, this))
              }
            } else(0, R.warn)(A, "Could not resolve RTMPSubscriber instance. Requires minimum Flash Player install of " + r + "."), n.reject("Could not resolve RTMPSubscriber instance. Requires minimum Flash Player install of " + r + ".");
            return n.promise
          }
        }, {
          key: "setView",
          value: function(e, t) {
            return this._view = e, this._elementId = t, this._viewResolver.resolve(this._view), this
          }
        }, {
          key: "subscribe",
          value: function() {
            return this._getSubscriptionResolverPromise()
          }
        }, {
          key: "unsubscribe",
          value: function() {
            var e = this;
            (0, R.debug)(A, "[unsubscribe]");
            var t = function(t, n) {
              try {
                e._sourceHandler.disconnect(), t()
              } catch (e) {
                n(e.message)
              }
            };
            return new o.default(t)
          }
        }, {
          key: "play",
          value: function() {
            var e = this;
            (0, R.debug)(A, "[play]"), this._getEmbedPromise().then(function() {
              e._sourceHandler.play()
            })
          }
        }, {
          key: "onEmbedComplete",
          value: function() {
            (0, R.debug)(A, "[embed:complete]"), this.trigger(new T.SubscriberEvent(T.RTMPSubscriberEventTypes.EMBED_SUCCESS, this))
          }
        }, {
          key: "onEmbedFailure",
          value: function(e) {
            (0, R.debug)(A, "[embed:failure] - " + e), this.trigger(new T.SubscriberEvent(T.RTMPSubscriberEventTypes.EMBED_FAILURE, this))
          }
        }, {
          key: "onUnpublish",
          value: function() {
            (0, R.debug)(A, "[onunpublish]"), this._sourceHandler && this._sourceHandler.unpublish(), this.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.PLAY_UNPUBLISH, this)), this._sourceHandler && this._sourceHandler.disconnect()
          }
        }, {
          key: "getConnection",
          value: function() {
            return this._sourceHandler
          }
        }, {
          key: "getControls",
          value: function() {
            return this._sourceHandler ? this._sourceHandler.getControls() : void 0
          }
        }, {
          key: "getOptions",
          value: function() {
            return this._options
          }
        }, {
          key: "getPlayer",
          value: function() {
            return this._sourceHandler ? this._sourceHandler.getEmbeddedView() : void 0
          }
        }, {
          key: "getType",
          value: function() {
            return k.PlaybackTypes.RTMP.toUpperCase()
          }
        }]), t
      }(w.PlaybackController);
    t.default = N
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(95),
      s = r(a),
      u = n(3),
      c = r(u),
      l = n(0),
      d = r(l),
      h = n(1),
      f = r(h),
      p = n(6),
      v = r(p),
      b = n(5),
      _ = r(b),
      m = n(7),
      g = r(m),
      y = n(82),
      S = n(25),
      E = n(24),
      C = n(37),
      w = n(13),
      T = n(8),
      k = n(2),
      P = "HLSSourceHandler",
      O = function(e) {
        function t(e, n) {
          (0, d.default)(this, t);
          var r = (0, v.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
          return r.media = e, r.clone = r.media.cloneNode(!0), r.parent = r.media.parentNode, r.holder = r._determineHolder(e), r.playerType = n, r._mediaSource = void 0, r._isVOD = !1, r._controls = void 0, r._orientation = 0, r._streamingMode = "Video/Audio", r._autoLayoutOrientation = !0, r._playbackNotificationCenter = r.media, r._handleOrientationChange = r._handleOrientationChange.bind(r), r._onOrientationMetadata = r._onOrientationMetadata.bind(r), r._onStreamingModeMetadata = r._onStreamingModeMetadata.bind(r), g.default.onFullScreenStateChange(r._handleFullScreenChange.bind(r)), r
        }
        return (0, _.default)(t, e), (0, f.default)(t, [{
          key: "_determineHolder",
          value: function(e) {
            if (e.parentNode.classList.contains("red5pro-media-container")) return e.parentNode;
            var t = e.parentNode,
              n = g.default.createElement("div");
            return n.classList.add("red5pro-media-container"), t.insertBefore(n, e), t.removeChild(e), n.appendChild(e), n
          }
        }, {
          key: "_cleanUp",
          value: function() {
            var e = this.media,
              t = this._mediaSource,
              n = e.parentNode,
              r = this.holder;
            if (t && e.removeChild(t), n) n.removeChild(e), n !== this.parent && (n.parentNode.removeChild(n), r = this.parent);
            else try {
              e.remove()
            } catch (e) {
              (0, k.warn)(P, "Issue in DOM cleanup of HLS video object: " + e.message)
            }
            this.media = this.clone.cloneNode(!0), r.appendChild(this.media), this._controls && this._controls.detach(), this.media.setAttribute("autoplay", !0), this.clone = this.media.cloneNode(!0), this.parent = this.media.parentNode, this.holder = this._determineHolder(this.media), this._orientation = 0, this.isVOD = !1
          }
        }, {
          key: "_addPlaybackHandlers",
          value: function(e) {
            var t = this,
              n = this.getControls(),
              r = void 0 !== n;
            e.oncanplay = function() {
              n && n.enable(!0), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: C.PlaybackState.AVAILABLE,
                state: C.PlaybackStateReadable[C.PlaybackState.AVAILABLE]
              })), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.VOLUME_CHANGE, void 0, {
                volume: e.volume
              }))
            }, e.ondurationchange = function(i) {
              !isNaN(e.duration) && (0, s.default)(e.duration) && (t.isVOD = !0), r && n.setPlaybackDuration(e.duration)
            }, e.onended = function() {
              (0, k.debug)(P, "[videoelement:onended]"), r && n.setState(C.PlaybackState.IDLE), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: C.PlaybackState.IDLE,
                state: C.PlaybackStateReadable[C.PlaybackState.IDLE]
              }))
            }, e.ontimeupdate = function(i) {
              r && n.setSeekTime(e.currentTime, self.isVOD ? e.duration : void 0), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, void 0, {
                time: e.currentTime,
                duration: e.duration
              }))
            }, e.onseeked = function(e) {}, e.onseeking = function(e) {}, e.onplay = function() {
              r && n.setState(C.PlaybackState.PLAYING), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: C.PlaybackState.PLAYING,
                state: C.PlaybackStateReadable[C.PlaybackState.PLAYING]
              }))
            }, e.onpause = function() {
              r && n.setState(C.PlaybackState.PAUSED), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: C.PlaybackState.PAUSED,
                state: C.PlaybackStateReadable[C.PlaybackState.PAUSED]
              }))
            }, e.onvolumechange = function(i) {
              r && n.getVolume() !== t.media.volume && n.setVolume(t.media.volume), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.VOLUME_CHANGE, void 0, {
                volume: e.muted ? 0 : e.volume
              }))
            }, e.onencrypted = function() {
              (0, k.debug)(P, "[videoelement:event] encrypted")
            }, e.onemptied = function() {
              (0, k.debug)(P, "[videoelement:event] emptied")
            }, e.onloadeddata = function() {
              (0, k.debug)(P, "[videoelement:event] loadeddata")
            }, e.onresize = function() {
              (0, k.debug)(P, "[videoelement:event] resize"), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.VIDEO_DIMENSIONS_CHANGE, void 0, {
                width: t.media.videoWidth,
                height: t.media.videoHeight
              }))
            }, e.onloadedmetadata = function() {
              (0, k.debug)(P, "[videoelement:event] loadedmetadata"), t.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.SUBSCRIBE_START, void 0, {}))
            }, e.onloadstart = function() {
              (0, k.debug)(P, "[videoelement:event] loadedstart")
            }, e.onstalled = function() {
              (0, k.debug)(P, "[videoelement:event] stalled")
            }, e.onsuspend = function() {
              (0, k.debug)(P, "[videoelement:event] suspend")
            }, e.onwaiting = function() {
              (0, k.debug)(P, "[videoelement:event] waiting")
            }
          }
        }, {
          key: "_handleFullScreenChange",
          value: function(e) {
            e ? (this.holder.classList.add("red5pro-media-container-full-screen"), this.media.classList.add("red5pro-media-container-full-screen")) : (this.holder.classList.remove("red5pro-media-container-full-screen"), this.media.classList.remove("red5pro-media-container-full-screen")), this.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, void 0, e))
          }
        }, {
          key: "_embedMediaSource",
          value: function(e, t, n) {
            var r = new T.DeferredPromise;
            try {
              var i = g.default.createElement("source");
              i.type = t, i.src = e, this.media.type = t, this.media.firstChild ? this.media.insertBefore(i, this.media.firstChild) : this.media.appendChild(i), this._mediaSource = i, this._autoLayoutOrientation = n.autoLayoutOrientation, g.default.onOrientationMetadata(this.media, this._onOrientationMetadata), g.default.onStreamingModeMetadata(this.media, this._onStreamingModeMetadata), r.resolve()
            } catch (e) {
              r.reject(e.message)
            }
            return r.promise
          }
        }, {
          key: "_onOrientationMetadata",
          value: function(e) {
            var t = e.orientation,
              n = e.resolution,
              r = parseInt(t, 10);
            t && this._orientation !== r && ((0, k.debug)(P, "Metadata received: " + (0, o.default)(e, null, 2)), this._orientation = r, this._autoLayoutOrientation && ((0, y.applyOrientation)(this.media, this._orientation, (0, S.metadataResolutionToObject)(n)), this._handleOrientationChange(this._orientation)), this.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.ORIENTATION_CHANGE, void 0, {
              orientation: this._orientation,
              viewElement: this.media
            })), this.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.SUBSCRIBE_METADATA, void 0, e)))
          }
        }, {
          key: "_onStreamingModeMetadata",
          value: function(e) {
            var t = e.streamingMode,
              n = this._streamingMode;
            t && n !== t && ((0, k.debug)(P, "Metadata received: " + (0, o.default)(e, null, 2)), this._streamingMode = t, this.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.STREAMING_MODE_CHANGE, void 0, {
              streamingMode: this._streamingMode,
              previousStreamingMode: n,
              viewElement: this.media
            })), this.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.SUBSCRIBE_METADATA, void 0, e)))
          }
        }, {
          key: "addSource",
          value: function(e, t, n) {
            var r = this;
            (0, k.debug)(P, "[addsource]"), this.holder = this._determineHolder(this.media);
            var i = new T.DeferredPromise,
              o = n.controls,
              a = g.default.hasAttributeDefined(this.media, "muted"),
              s = g.default.hasAttributeDefined(this.media, "autoplay");
            a || this.media.setAttribute("autoplay", !1);
            var u = g.default.hasAttributeDefined(this.media, "controls") && g.default.hasClassDefined(this.media, "red5pro-media");
            return this._embedMediaSource(e, t, n).then(function() {
              (o || u) && (r._controls = o ? n.controls : new E.PlaybackControlsImpl(r, r.holder), r.media.controls = !1, r._controls.setAsVOD(r.isVOD), r._controls.setMutedState(a)), r._addPlaybackHandlers(r._playbackNotificationCenter), s && r.attemptAutoplay(n.muteOnAutoplayRestriction), i.resolve()
            }).catch(function(e) {
              return i.reject(e)
            }), i.promise
          }
        }, {
          key: "connect",
          value: function() {
            (0, k.debug)(P, "[connect]")
          }
        }, {
          key: "attemptAutoplay",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.play().catch(function(n) {
              t ? (e.mute(), e.play().then(function() {
                e.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.AUTO_PLAYBACK_MUTED, void 0, {
                  element: e.media
                }))
              }).catch(function(t) {
                e.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, {
                  error: t.message ? t.message : t,
                  element: e.media
                }))
              })) : e.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, {
                error: n.message ? n.message : n,
                element: e.media
              }))
            })
          }
        }, {
          key: "play",
          value: function() {
            (0, k.debug)(P, "[videoelement:action] play");
            var e = new T.DeferredPromise;
            try {
              var t = this.media.play();
              t ? t.then(function() {
                (0, k.debug)(P, "[videoelement:action] play (START)"), e.resolve()
              }).catch(e.reject) : ((0, k.debug)(P, "[videoelement:action] play (START)"), e.resolve())
            } catch (t) {
              (0, k.error)(P, "[videoelement:action] play (FAULT) - " + t.message), e.reject(t)
            }
            return e.promise
          }
        }, {
          key: "pause",
          value: function() {
            (0, k.debug)(P, "[videoelement:action] pause");
            try {
              this.media.pause()
            } catch (e) {
              (0, k.debug)(P, "[videoelement:action] pause (FAULT) - " + e.message)
            }
          }
        }, {
          key: "resume",
          value: function() {
            (0, k.debug)(P, "[videoelement:action] resume");
            try {
              var e = this.media.play();
              e && e.then(function() {
                return (0, k.debug)(P, "[videoelement:action] play (START)")
              }).catch(function(e) {
                return (0, k.error)(P, "[videoelement:action] play (FAULT) " + (e.message ? e.message : e))
              })
            } catch (e) {
              (0, k.error)(P, "[videoelement:action] resume (FAULT) - " + e.message)
            }
          }
        }, {
          key: "stop",
          value: function() {
            try {
              this.media.stop()
            } catch (e) {}
          }
        }, {
          key: "mute",
          value: function() {
            this.media.muted = !0;
            var e = this.getControls();
            e && e.setMutedState(!0)
          }
        }, {
          key: "unmute",
          value: function() {
            this.media.muted = !1;
            var e = this.getControls();
            e && e.setMutedState(!1)
          }
        }, {
          key: "setVolume",
          value: function(e) {
            this.unmute(), this.media.volume = e
          }
        }, {
          key: "seekTo",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            this.media.currentTime = t ? e * t : e
          }
        }, {
          key: "toggleFullScreen",
          value: function() {
            try {
              g.default.toggleFullScreen(this.holder)
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "unpublish",
          value: function() {
            try {
              this.stop(), this.media.onended.call(this.media)
            } catch (e) {}
          }
        }, {
          key: "disconnect",
          value: function() {
            this._cleanUp()
          }
        }, {
          key: "_handleOrientationChange",
          value: function(e) {
            this._controls && e % 180 != 0 && (this.holder.classList.add("red5pro-media-background"), this.media.classList.remove("red5pro-media-background"))
          }
        }, {
          key: "addSharedObjectResponseHandler",
          value: function(e) {}
        }, {
          key: "removeSharedObjectResponseHandler",
          value: function(e) {}
        }, {
          key: "sendToSharedObject",
          value: function(e, t, n) {}
        }, {
          key: "sendPropertyToSharedObject",
          value: function(e, t, n) {}
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {}
        }, {
          key: "connectToSharedObject",
          value: function(e) {}
        }, {
          key: "closeSharedObject",
          value: function(e) {}
        }, {
          key: "getControls",
          value: function() {
            return this._controls
          }
        }, {
          key: "getType",
          value: function() {
            return this.playerType
          }
        }, {
          key: "isVOD",
          get: function() {
            return this._isVOD
          },
          set: function(e) {
            this._isVOD = e, this._controls && this._controls.setAsVOD(e)
          }
        }]), t
      }(E.PlaybackController);
    t.default = O
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(95),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(7),
      _ = r(b),
      m = n(24),
      g = n(37),
      y = n(13),
      S = n(8),
      E = n(2),
      C = "RTCSourceHandler",
      w = function(e) {
        function t(e, n) {
          (0, c.default)(this, t);
          var r = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this));
          return r.media = e, _.default.hasAttributeDefined(r.media, "controls") && _.default.hasClassDefined(r.media, "red5pro-media") && (r.clone = r.media.cloneNode(!0), r.parent = r.media.parentNode, r.holder = r._determineHolder(r.media)), r.playerType = n, r._isVOD = !1, r._controls = void 0, r._playbackNotificationCenter = r.media, _.default.onFullScreenStateChange(r._handleFullScreenChange.bind(r)), r
        }
        return (0, v.default)(t, e), (0, d.default)(t, [{
          key: "_determineHolder",
          value: function(e) {
            if (e.parentNode.classList.contains("red5pro-media-container")) return e.parentNode;
            var t = e.parentNode,
              n = _.default.createElement("div");
            return n.classList.add("red5pro-media-container"), t.insertBefore(n, e), t.removeChild(e), n.appendChild(e), n
          }
        }, {
          key: "_cleanUp",
          value: function() {
            if (this.clone) {
              var e = this.media,
                t = e.parentNode,
                n = this.holder;
              if (t) t.removeChild(e), t !== this.parent && (t.parentNode.removeChild(t), n = this.parent);
              else try {
                e.remove()
              } catch (e) {
                (0, E.warn)(C, "Issue in DOM cleanup of WebRTC video object: " + e.message)
              }
              this.media = this.clone.cloneNode(!0), n.appendChild(this.media), this._controls && this._controls.detach()
            }
          }
        }, {
          key: "_addPlaybackHandlers",
          value: function(e) {
            var t = this,
              n = this.getControls(),
              r = void 0 !== n;
            e.oncanplay = function() {
              (0, E.debug)(C, "[videoelement:event] canplay"), n && n.enable(!0), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: g.PlaybackState.AVAILABLE,
                state: g.PlaybackStateReadable[g.PlaybackState.AVAILABLE]
              })), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.VOLUME_CHANGE, void 0, {
                volume: e.volume
              }))
            }, e.ondurationchange = function(i) {
              (0, E.debug)(C, "[videoelement:event] durationchange"), !isNaN(e.duration) && (0, o.default)(e.duration) && (t.isVOD = !0), r && n.setPlaybackDuration(e.duration)
            }, e.onended = function() {
              (0, E.debug)(C, "[videoelement:event] ended"), r && n.setState(g.PlaybackState.IDLE), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: g.PlaybackState.IDLE,
                state: g.PlaybackStateReadable[g.PlaybackState.IDLE]
              }))
            }, e.ontimeupdate = function(i) {
              r && n.setSeekTime(e.currentTime, self.isVOD ? e.duration : void 0), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, void 0, {
                time: e.currentTime,
                duration: e.duration
              }))
            }, e.onseeked = function(e) {}, e.onseeking = function(e) {}, e.onplay = function() {
              (0, E.debug)(C, "[videoelement:event] play"), r && n.setState(g.PlaybackState.PLAYING), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: g.PlaybackState.PLAYING,
                state: g.PlaybackStateReadable[g.PlaybackState.PLAYING]
              }))
            }, e.onpause = function() {
              (0, E.debug)(C, "[videoelement:event] pause"), r && n.setState(g.PlaybackState.PAUSED), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: g.PlaybackState.PAUSED,
                state: g.PlaybackStateReadable[g.PlaybackState.PAUSED]
              }))
            }, e.onvolumechange = function(i) {
              r && n.getVolume() !== t.media.volume && n.setVolume(t.media.volume), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.VOLUME_CHANGE, void 0, {
                volume: e.muted ? 0 : e.volume
              }))
            }, e.onencrypted = function() {
              (0, E.debug)(C, "[videoelement:event] encrypted")
            }, e.onemptied = function() {
              (0, E.debug)(C, "[videoelement:event] emptied")
            }, e.onloadeddata = function() {
              (0, E.debug)(C, "[videoelement:event] loadeddata"), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.VIDEO_DIMENSIONS_CHANGE, void 0, {
                width: t.media.videoWidth,
                height: t.media.videoHeight
              }))
            }, e.onresize = function() {
              (0, E.debug)(C, "[videoelement:event] resize"), t.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.VIDEO_DIMENSIONS_CHANGE, void 0, {
                width: t.media.videoWidth,
                height: t.media.videoHeight
              }))
            }, e.onloadedmetadata = function() {
              (0, E.debug)(C, "[videoelement:event] loadedmetadata")
            }, e.onloadstart = function() {
              (0, E.debug)(C, "[videoelement:event] loadedstart")
            }, e.onstalled = function() {
              (0, E.debug)(C, "[videoelement:event] stalled")
            }, e.onsuspend = function() {
              (0, E.debug)(C, "[videoelement:event] suspend")
            }, e.onwaiting = function() {
              (0, E.debug)(C, "[videoelement:event] waiting")
            }
          }
        }, {
          key: "_handleFullScreenChange",
          value: function(e) {
            e ? (this.holder && this.holder.classList.add("red5pro-media-container-full-screen"), this.media.classList.add("red5pro-media-container-full-screen")) : (this.holder && this.holder.classList.remove("red5pro-media-container-full-screen"), this.media.classList.remove("red5pro-media-container-full-screen")), this.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, void 0, e))
          }
        }, {
          key: "addSource",
          value: function(e) {
            (0, E.debug)(C, "[addsource]");
            var t = _.default.hasAttributeDefined(this.media, "controls") && _.default.hasClassDefined(this.media, "red5pro-media");
            t && (this.holder = this._determineHolder(this.media));
            var n = new S.DeferredPromise,
              r = e.controls,
              i = _.default.hasAttributeDefined(this.media, "muted");
            return (r || t) && (this._controls = r ? e.controls : new m.PlaybackControlsImpl(this, this.holder), this.media.controls = !1, this._controls.setAsVOD(this.isVOD), this._controls.setMutedState(i)), this._addPlaybackHandlers(this._playbackNotificationCenter), n.resolve(), n.promise
          }
        }, {
          key: "connect",
          value: function() {
            (0, E.debug)(C, "[connect]")
          }
        }, {
          key: "attemptAutoplay",
          value: function() {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.play().catch(function(n) {
              t ? (e.mute(), e.play().then(function() {
                e.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.AUTO_PLAYBACK_MUTED, void 0, {
                  element: e.media
                }))
              }).catch(function(t) {
                e.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, {
                  error: t.message ? t.message : t,
                  element: e.media
                }))
              })) : e.trigger(new y.SubscriberEvent(y.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, {
                error: n.message ? n.message : n,
                element: e.media
              }))
            })
          }
        }, {
          key: "play",
          value: function() {
            (0, E.debug)(C, "[videoelement:action] play");
            var e = new S.DeferredPromise;
            try {
              var t = this.media.play();
              t ? t.then(function() {
                (0, E.debug)(C, "[videoelement:action] play (START)"), e.resolve()
              }).catch(e.reject) : ((0, E.debug)(C, "[videoelement:action] play (START)"), e.resolve())
            } catch (t) {
              (0, E.error)(C, "[videoelement:action] play (FAULT) - " + t.message), e.reject(t)
            }
            return e.promise
          }
        }, {
          key: "pause",
          value: function() {
            (0, E.debug)(C, "[videoelement:action] pause");
            try {
              this.media.pause()
            } catch (e) {
              (0, E.warn)(C, "[videoelement:action] pause (CATCH::FAULT) - " + e.message)
            }
          }
        }, {
          key: "resume",
          value: function() {
            (0, E.debug)(C, "[videoelement:action] resume");
            try {
              var e = this.media.play();
              e && e.then(function() {
                return (0, E.debug)(C, "[videoelement:action] play (START)")
              }).catch(function(e) {
                return (0, E.warn)(C, "[videoelement:action] play (CATCH::FAULT) " + (e.message ? e.message : e))
              })
            } catch (e) {
              (0, E.warn)(C, "[videoelement:action] resume (CATCH::FAULT) - " + e.message)
            }
          }
        }, {
          key: "stop",
          value: function() {
            (0, E.debug)(C, "[videoelement:action] stop");
            try {
              this.media.stop()
            } catch (e) {}
          }
        }, {
          key: "mute",
          value: function() {
            this.media.muted = !0;
            var e = this.getControls();
            e && e.setMutedState(!0)
          }
        }, {
          key: "unmute",
          value: function() {
            this.media.muted = !1;
            var e = this.getControls();
            e && e.setMutedState(!1)
          }
        }, {
          key: "setVolume",
          value: function(e) {
            this.unmute(), this.media.volume = e
          }
        }, {
          key: "seekTo",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            this.media.currentTime = t ? e * t : e
          }
        }, {
          key: "toggleFullScreen",
          value: function() {
            try {
              this.holder && _.default.toggleFullScreen(this.holder)
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "unpublish",
          value: function() {
            try {
              this.stop(), this.media.onended.call(this.media)
            } catch (e) {}
          }
        }, {
          key: "disconnect",
          value: function() {
            this._cleanUp()
          }
        }, {
          key: "handleOrientationChange",
          value: function(e) {
            this._controls && e % 180 != 0 && (this.holder && this.holder.classList.add("red5pro-media-background"), this.media.classList.remove("red5pro-media-background"))
          }
        }, {
          key: "addSharedObjectResponseHandler",
          value: function(e) {}
        }, {
          key: "removeSharedObjectResponseHandler",
          value: function(e) {}
        }, {
          key: "sendToSharedObject",
          value: function(e, t, n) {}
        }, {
          key: "sendPropertyToSharedObject",
          value: function(e, t, n) {}
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {}
        }, {
          key: "connectToSharedObject",
          value: function(e) {}
        }, {
          key: "closeSharedObject",
          value: function(e) {}
        }, {
          key: "getControls",
          value: function() {
            return this._controls
          }
        }, {
          key: "getType",
          value: function() {
            return this.playerType
          }
        }, {
          key: "isVOD",
          get: function() {
            return this._isVOD
          },
          set: function(e) {
            this._isVOD = e, this._controls && this._controls.setAsVOD(e)
          }
        }]), t
      }(m.PlaybackController);
    t.default = w
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(10),
      o = r(i),
      a = n(3),
      s = r(a),
      u = n(0),
      c = r(u),
      l = n(1),
      d = r(l),
      h = n(6),
      f = r(h),
      p = n(5),
      v = r(p),
      b = n(81),
      _ = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(b),
      m = n(7),
      g = r(m),
      y = n(88),
      S = r(y),
      E = n(24),
      C = n(37),
      w = n(13),
      T = n(8),
      k = n(2),
      P = "RTMPSourceHandler",
      O = function(e) {
        return "string" == typeof e ? parseInt(e, 10) : Math.round(e)
      },
      R = function(e) {
        return /^.*\.(flv|mp4|mp3)/.test(e)
      },
      A = function(e) {
        function t(e, n, r) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
          (0, c.default)(this, t);
          var o = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this));
          return o.media = n, o.clone = o.media.cloneNode(!0), o.parent = o.media.parentNode, o.holder = o._determineHolder(o.media), o.playerType = r, o._swfId = void 0, o._controls = void 0, o._soResponder = i || new S.default, o._playbackNotificationCenter = e, g.default.onFullScreenStateChange(o._handleFullScreenChange.bind(o)), o
        }
        return (0, v.default)(t, e), (0, d.default)(t, [{
          key: "_determineHolder",
          value: function(e) {
            if (e.parentNode.classList.contains("red5pro-media-container")) return e.parentNode;
            var t = e.parentNode,
              n = g.default.createElement("div");
            return n.classList.add("red5pro-media-container"), t.insertBefore(n, e), t.removeChild(e), n.appendChild(e), n
          }
        }, {
          key: "_cleanUp",
          value: function() {
            var e = this.getEmbeddedView(),
              t = e.parentNode,
              n = this.holder;
            if (t) t.removeChild(e), t !== this.parent && (t.parentNode.removeChild(t), n = this.parent);
            else try {
              e.remove()
            } catch (e) {
              (0, k.warn)(P, "Issue in DOM cleanup of flash object embed: " + e.message)
            }
            this.media = this.clone.cloneNode(!0), n.appendChild(this.media), this._controls && this._controls.detach()
          }
        }, {
          key: "_addPlaybackHandlers",
          value: function(e) {
            var t = this.getControls();
            void 0 !== t && (e.on(w.SubscriberEventTypes.SUBSCRIBE_START, function() {
              t.setState(C.PlaybackState.PLAYING)
            }), e.on(w.SubscriberEventTypes.SUBSCRIBE_STOP, function() {
              t.setState(C.PlaybackState.IDLE)
            }), e.on(w.SubscriberEventTypes.PLAY_UNPUBLISH, function() {
              t.setState(C.PlaybackState.IDLE)
            }), e.on(w.SubscriberEventTypes.SUBSCRIBE_METADATA, function(e) {
              e.data.duration && t.setPlaybackDuration(e.data.duration)
            }), e.on(w.SubscriberEventTypes.VOLUME_CHANGE, function(e) {
              t.setVolume(e.data.volume)
            }), e.on(w.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, function(e) {
              e.data.code === C.PlaybackState.AVAILABLE && t.enable(!0), t.setState(e.data.code)
            }), e.on(w.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, function(e) {
              t.setSeekTime(e.data.time, e.data.duration)
            }), e.on(w.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, function(e) {
              t.onFullScreenChange(e.data)
            }))
          }
        }, {
          key: "_handleFullScreenChange",
          value: function(e) {
            var t = this.getEmbeddedView();
            e ? (this.holder.classList.add("red5pro-media-container-full-screen"), t.classList.add("red5pro-media-container-full-screen")) : (this.holder.classList.remove("red5pro-media-container-full-screen"), t.classList.remove("red5pro-media-container-full-screen")), this.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, void 0, e))
          }
        }, {
          key: "_setUpInitCallback",
          value: function(e) {
            var t = this;
            g.default.addSubscriptionAssignmentHandler(function(n) {
              (0, k.debug)(P, "Embed and init() complete for subscriber swf. successId(" + n + ")."), e.resolve(n), t._tearDownInitCallback()
            })
          }
        }, {
          key: "_tearDownInitCallback",
          value: function() {}
        }, {
          key: "addSource",
          value: function(e, t) {
            var n = this,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            (0, k.debug)(P, "[addsource]"), this._swfId = e, this.holder = this._determineHolder(this.media);
            var a = this._soResponder,
              s = new T.DeferredPromise,
              u = t.controls,
              c = g.default.hasAttributeDefined(this.media, "muted"),
              l = g.default.hasAttributeDefined(this.media, "controls") && g.default.hasClassDefined(this.media, "red5pro-media");
            t.swf = r || t.swf, t.minFlashVersion = i || t.minFlashVersion, this._setUpInitCallback(s);
            var d = this.media.classList;
            return _.defineEmbedElement(this.media, this.holder).then(function(r) {
              var i = {
                stream: t.streamName,
                app: t.context ? t.app + "/" + t.context : t.app,
                host: t.host,
                muted: g.default.hasAttributeDefined(n.media, "muted"),
                autoplay: g.default.hasAttributeDefined(n.media, "autoplay"),
                useAdaptiveBitrateController: t.useAdaptiveBitrateController
              };
              return t.backgroundColor && (i.backgroundColor = t.backgroundColor), t.buffer && !isNaN(Number(t.buffer)) && (i.buffer = t.buffer), t.width && !isNaN(t.width) && (i.width = O(t.width)), t.height && !isNaN(t.height) && (i.height = O(t.height)), "100%" !== t.embedWidth && "100%" !== t.embedHeight || (i.autosize = !0), n._swfId = e, void 0 !== t.connectionParams && (i.connectionParams = encodeURIComponent((0, o.default)(t.connectionParams))), void 0 !== t.abrVariants && (i.abrVariants = encodeURIComponent((0, o.default)(t.abrVariants))), void 0 !== t.abrVariantUpgradeSettings && (i.abrVariantUpgradeSettings = encodeURIComponent((0, o.default)(t.abrVariantUpgradeSettings))), _.embedSwfObject(e, t, i, g.default.getSwfObject(), r)
            }).then(function() {
              if (u || l) {
                n._controls = u ? t.controls : new E.PlaybackControlsImpl(n, n.holder), n.media.controls = !1, n._controls.setAsVOD(R(t.streamName)), n._controls.setMutedState(c);
                for (var e = n.getEmbeddedView(), r = d.length, i = void 0; --r > -1;) i = d.item(r), e.classList.add(i)
              }
              return n._addPlaybackHandlers(n._playbackNotificationCenter), n.trigger(new w.SubscriberEvent(w.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, {
                code: C.PlaybackState.AVAILABLE,
                state: C.PlaybackStateReadable[C.PlaybackState.AVAILABLE]
              })), !0
            }).then(function() {
              return a.connect(e), !0
            }).catch(function(e) {
              return s.reject(e)
            }), s.promise
          }
        }, {
          key: "connect",
          value: function() {
            (0, k.debug)(P, "[connect]");
            try {
              this.getEmbeddedView().connect()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "play",
          value: function() {
            try {
              this.getEmbeddedView().play()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "pause",
          value: function() {
            try {
              this.getEmbeddedView().pause()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "resume",
          value: function() {
            try {
              this.getEmbeddedView().resume()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "stop",
          value: function() {
            try {
              this.getEmbeddedView().stop()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "mute",
          value: function() {
            try {
              this.getEmbeddedView().mute()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "unmute",
          value: function() {
            try {
              this.getEmbeddedView().unmute()
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "setVolume",
          value: function(e) {
            try {
              this.getEmbeddedView().setVolume(e)
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "seekTo",
          value: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            try {
              this.getEmbeddedView().seekTo(e, t)
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "toggleFullScreen",
          value: function() {
            try {
              g.default.toggleFullScreen(this.holder)
            } catch (e) {
              throw e
            }
          }
        }, {
          key: "unpublish",
          value: function() {
            this.stop()
          }
        }, {
          key: "disconnect",
          value: function() {
            try {
              this.getEmbeddedView().disconnect(), (0, k.debug)(P, "[disconnect]")
            } catch (e) {}
            this._cleanUp(), this._soResponder.disconnect()
          }
        }, {
          key: "addSharedObjectResponseHandler",
          value: function(e) {
            this._soResponder.addResponseHandler(e)
          }
        }, {
          key: "removeSharedObjectResponseHandler",
          value: function(e) {
            this._soResponder.removeResponseHandler(e)
          }
        }, {
          key: "sendToSharedObject",
          value: function(e, t, n) {
            this._soResponder.sendToSharedObject(e, t, n)
          }
        }, {
          key: "sendPropertyToSharedObject",
          value: function(e, t, n) {
            this._soResponder.sendPropertyToSharedObject(e, t, n)
          }
        }, {
          key: "getRemoteSharedObject",
          value: function(e) {
            this._soResponder.getRemoteSharedObject(e)
          }
        }, {
          key: "connectToSharedObject",
          value: function(e) {
            this._soResponder.connectToSharedObject(e)
          }
        }, {
          key: "closeSharedObject",
          value: function(e) {
            this._soResponder.closeSharedObject(e)
          }
        }, {
          key: "startABRController",
          value: function() {
            try {
              this.getEmbeddedView().startABRController()
            } catch (e) {
              (0, k.debug)(P, "Could not start the Adaptive Bitrate Controller: " + e.message)
            }
          }
        }, {
          key: "stopABRController",
          value: function() {
            try {
              this.getEmbeddedView().stopABRController()
            } catch (e) {
              (0, k.debug)(P, "Could not stop the Adaptive Bitrate Controller: " + e.message)
            }
          }
        }, {
          key: "setABRVariants",
          value: function(e, t) {
            try {
              var n = "string" == typeof e ? encodeURIComponent(e) : encodeURIComponent((0, o.default)(e));
              this.getEmbeddedView().setABRVariants(n, t || 1)
            } catch (e) {
              (0, k.debug)(P, "Could not set ABR Variants: " + e.message)
            }
          }
        }, {
          key: "setABRLevel",
          value: function(e, t) {
            try {
              this.getEmbeddedView().setABRLevel(e, !!t)
            } catch (e) {
              (0, k.debug)(P, "Could not set ABR level: " + e.message)
            }
          }
        }, {
          key: "setABRVariantUpgradeSettings",
          value: function(e) {
            try {
              var t = "string" == typeof abrVariants ? encodeURIComponent(e) : encodeURIComponent((0, o.default)(e));
              this.getEmbeddedView().setABRVariantUpgradeSettings(t)
            } catch (e) {
              (0, k.debug)(P, "Could not set ABR Variants: " + e.message)
            }
          }
        }, {
          key: "getEmbeddedView",
          value: function() {
            return g.default.getEmbedObject(this._swfId)
          }
        }, {
          key: "getControls",
          value: function() {
            return this._controls
          }
        }, {
          key: "getType",
          value: function() {
            return this.playerType
          }
        }]), t
      }(E.PlaybackController);
    t.default = A
  }, function(e, t, n) {
    e.exports = {
      default: n(151),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(152),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(153),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(157),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(158),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(159),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(162),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(165),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(168),
      __esModule: !0
    }
  }, function(e, t, n) {
    e.exports = {
      default: n(169),
      __esModule: !0
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var i = n(141),
      o = r(i),
      a = n(140),
      s = r(a);
    t.default = function() {
      function e(e, t) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, u = (0, s.default)(e); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e
        } finally {
          try {
            !r && u.return && u.return()
          } finally {
            if (i) throw o
          }
        }
        return n
      }
      return function(t, n) {
        if (Array.isArray(t)) return t;
        if ((0, o.default)(Object(t))) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
  }, function(e, t, n) {
    e.exports = n(212)
  }, function(e, t, n) {
    n(27), n(191), e.exports = n(4).Array.from
  }, function(e, t, n) {
    n(28), n(27), e.exports = n(189)
  }, function(e, t, n) {
    n(28), n(27), e.exports = n(190)
  }, function(e, t, n) {
    var r = n(4),
      i = r.JSON || (r.JSON = {
        stringify: JSON.stringify
      });
    e.exports = function(e) {
      return i.stringify.apply(i, arguments)
    }
  }, function(e, t, n) {
    n(43), n(27), n(28), n(193), n(208), e.exports = n(4).Map
  }, function(e, t, n) {
    n(194), e.exports = n(4).Number.isFinite
  }, function(e, t, n) {
    n(195), e.exports = n(4).Number.isNaN
  }, function(e, t, n) {
    n(196), e.exports = n(4).Object.assign
  }, function(e, t, n) {
    n(197);
    var r = n(4).Object;
    e.exports = function(e, t) {
      return r.create(e, t)
    }
  }, function(e, t, n) {
    n(198);
    var r = n(4).Object;
    e.exports = function(e, t, n) {
      return r.defineProperty(e, t, n)
    }
  }, function(e, t, n) {
    n(199), e.exports = n(4).Object.freeze
  }, function(e, t, n) {
    n(200);
    var r = n(4).Object;
    e.exports = function(e, t) {
      return r.getOwnPropertyDescriptor(e, t)
    }
  }, function(e, t, n) {
    n(201), e.exports = n(4).Object.getPrototypeOf
  }, function(e, t, n) {
    n(202), e.exports = n(4).Object.keys
  }, function(e, t, n) {
    n(203), e.exports = n(4).Object.setPrototypeOf
  }, function(e, t, n) {
    n(43), n(27), n(28), n(204), e.exports = n(4).Promise
  }, function(e, t, n) {
    n(43), n(27), n(28), n(205), n(209), e.exports = n(4).Set
  }, function(e, t, n) {
    n(206), n(43), n(210), n(211), e.exports = n(4).Symbol
  }, function(e, t, n) {
    n(27), n(28), e.exports = n(79).f("iterator")
  }, function(e, t, n) {
    n(43), n(28), n(207), e.exports = n(4).WeakMap
  }, function(e, t) {
    e.exports = function() {}
  }, function(e, t, n) {
    var r = n(40);
    e.exports = function(e, t) {
      var n = [];
      return r(e, !1, n.push, n, t), n
    }
  }, function(e, t, n) {
    var r = n(23),
      i = n(56),
      o = n(188);
    e.exports = function(e) {
      return function(t, n, a) {
        var s, u = r(t),
          c = i(u.length),
          l = o(a, c);
        if (e && n != n) {
          for (; c > l;)
            if ((s = u[l++]) != s) return !0
        } else
          for (; c > l; l++)
            if ((e || l in u) && u[l] === n) return e || l || 0;
        return !e && -1
      }
    }
  }, function(e, t, n) {
    var r = n(14),
      i = n(106),
      o = n(9)("species");
    e.exports = function(e) {
      var t;
      return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
    }
  }, function(e, t, n) {
    var r = n(174);
    e.exports = function(e, t) {
      return new(r(e))(t)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(55),
      i = n(33).getWeak,
      o = n(16),
      a = n(14),
      s = n(48),
      u = n(40),
      c = n(65),
      l = n(21),
      d = c(5),
      h = c(6),
      f = 0,
      p = function(e) {
        return e._l || (e._l = new v)
      },
      v = function() {
        this.a = []
      },
      b = function(e, t) {
        return d(e.a, function(e) {
          return e[0] === t
        })
      };
    v.prototype = {
      get: function(e) {
        var t = b(this, e);
        if (t) return t[1]
      },
      has: function(e) {
        return !!b(this, e)
      },
      set: function(e, t) {
        var n = b(this, e);
        n ? n[1] = t : this.a.push([e, t])
      },
      delete: function(e) {
        var t = h(this.a, function(t) {
          return t[0] === e
        });
        return ~t && this.a.splice(t, 1), !!~t
      }
    }, e.exports = {
      getConstructor: function(e, t, n, o) {
        var c = e(function(e, r) {
          s(e, c, t, "_i"), e._i = f++, e._l = void 0, void 0 != r && u(r, n, e[o], e)
        });
        return r(c.prototype, {
          delete: function(e) {
            if (!a(e)) return !1;
            var t = i(e);
            return !0 === t ? p(this).delete(e) : t && l(t, this._i) && delete t[this._i]
          },
          has: function(e) {
            if (!a(e)) return !1;
            var t = i(e);
            return !0 === t ? p(this).has(e) : t && l(t, this._i)
          }
        }), c
      },
      def: function(e, t, n) {
        var r = i(o(t), !0);
        return !0 === r ? p(e).set(t, n) : r[e._i] = n, e
      },
      ufstore: p
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(15),
      i = n(41);
    e.exports = function(e, t, n) {
      t in e ? r.f(e, t, i(0, n)) : e[t] = n
    }
  }, function(e, t, n) {
    var r = n(34),
      i = n(72),
      o = n(53);
    e.exports = function(e) {
      var t = r(e),
        n = i.f;
      if (n)
        for (var a, s = n(e), u = o.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
      return t
    }
  }, function(e, t) {
    e.exports = function(e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
      }
      return e.apply(n, t)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(52),
      i = n(41),
      o = n(42),
      a = {};
    n(22)(a, n(9)("iterator"), function() {
      return this
    }), e.exports = function(e, t, n) {
      e.prototype = r(a, {
        next: i(1, n)
      }), o(e, t + " Iterator")
    }
  }, function(e, t, n) {
    var r = n(34),
      i = n(23);
    e.exports = function(e, t) {
      for (var n, o = i(e), a = r(o), s = a.length, u = 0; s > u;)
        if (o[n = a[u++]] === t) return n
    }
  }, function(e, t, n) {
    var r = n(12),
      i = n(115).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      s = r.Promise,
      u = "process" == n(39)(a);
    e.exports = function() {
      var e, t, n, c = function() {
        var r, i;
        for (u && (r = a.domain) && r.exit(); e;) {
          i = e.fn, e = e.next;
          try {
            i()
          } catch (r) {
            throw e ? n() : t = void 0, r
          }
        }
        t = void 0, r && r.enter()
      };
      if (u) n = function() {
        a.nextTick(c)
      };
      else if (o) {
        var l = !0,
          d = document.createTextNode("");
        new o(c).observe(d, {
          characterData: !0
        }), n = function() {
          d.data = l = !l
        }
      } else if (s && s.resolve) {
        var h = s.resolve();
        n = function() {
          h.then(c)
        }
      } else n = function() {
        i.call(r, c)
      };
      return function(r) {
        var i = {
          fn: r,
          next: void 0
        };
        t && (t.next = i), e || (e = i, n()), t = i
      }
    }
  }, function(e, t, n) {
    var r = n(15),
      i = n(16),
      o = n(34);
    e.exports = n(17) ? Object.defineProperties : function(e, t) {
      i(e);
      for (var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
      return e
    }
  }, function(e, t, n) {
    var r = n(23),
      i = n(111).f,
      o = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      s = function(e) {
        try {
          return i(e)
        } catch (e) {
          return a.slice()
        }
      };
    e.exports.f = function(e) {
      return a && "[object Window]" == o.call(e) ? s(e) : i(r(e))
    }
  }, function(e, t, n) {
    var r = n(14),
      i = n(16),
      o = function(e, t) {
        if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
      };
    e.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
        try {
          r = n(20)(Function.call, n(71).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
        } catch (e) {
          t = !0
        }
        return function(e, n) {
          return o(e, n), t ? e.__proto__ = n : r(e, n), e
        }
      }({}, !1) : void 0),
      check: o
    }
  }, function(e, t, n) {
    var r = n(16),
      i = n(64),
      o = n(9)("species");
    e.exports = function(e, t) {
      var n, a = r(e).constructor;
      return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n)
    }
  }, function(e, t, n) {
    var r = n(76),
      i = n(50);
    e.exports = function(e) {
      return function(t, n) {
        var o, a, s = String(i(t)),
          u = r(n),
          c = s.length;
        return u < 0 || u >= c ? e ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536)
      }
    }
  }, function(e, t, n) {
    var r = n(76),
      i = Math.max,
      o = Math.min;
    e.exports = function(e, t) {
      return e = r(e), e < 0 ? i(e + t, 0) : o(e, t)
    }
  }, function(e, t, n) {
    var r = n(16),
      i = n(80);
    e.exports = n(4).getIterator = function(e) {
      var t = i(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return r(t.call(e))
    }
  }, function(e, t, n) {
    var r = n(49),
      i = n(9)("iterator"),
      o = n(32);
    e.exports = n(4).isIterable = function(e) {
      var t = Object(e);
      return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t))
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(20),
      i = n(11),
      o = n(35),
      a = n(107),
      s = n(105),
      u = n(56),
      c = n(177),
      l = n(80);
    i(i.S + i.F * !n(108)(function(e) {
      Array.from(e)
    }), "Array", {
      from: function(e) {
        var t, n, i, d, h = o(e),
          f = "function" == typeof this ? this : Array,
          p = arguments.length,
          v = p > 1 ? arguments[1] : void 0,
          b = void 0 !== v,
          _ = 0,
          m = l(h);
        if (b && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || f == Array && s(m))
          for (t = u(h.length), n = new f(t); t > _; _++) c(n, _, b ? v(h[_], _) : h[_]);
        else
          for (d = m.call(h), n = new f; !(i = d.next()).done; _++) c(n, _, b ? a(d, v, [i.value, _], !0) : i.value);
        return n.length = _, n
      }
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(171),
      i = n(109),
      o = n(32),
      a = n(23);
    e.exports = n(70)(Array, "Array", function(e, t) {
      this._t = a(e), this._i = 0, this._k = t
    }, function() {
      var e = this._t,
        t = this._k,
        n = this._i++;
      return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
  }, function(e, t, n) {
    "use strict";
    var r = n(101);
    e.exports = n(66)("Map", function(e) {
      return function() {
        return e(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      get: function(e) {
        var t = r.getEntry(this, e);
        return t && t.v
      },
      set: function(e, t) {
        return r.def(this, 0 === e ? 0 : e, t)
      }
    }, r, !0)
  }, function(e, t, n) {
    var r = n(11),
      i = n(12).isFinite;
    r(r.S, "Number", {
      isFinite: function(e) {
        return "number" == typeof e && i(e)
      }
    })
  }, function(e, t, n) {
    var r = n(11);
    r(r.S, "Number", {
      isNaN: function(e) {
        return e != e
      }
    })
  }, function(e, t, n) {
    var r = n(11);
    r(r.S + r.F, "Object", {
      assign: n(110)
    })
  }, function(e, t, n) {
    var r = n(11);
    r(r.S, "Object", {
      create: n(52)
    })
  }, function(e, t, n) {
    var r = n(11);
    r(r.S + r.F * !n(17), "Object", {
      defineProperty: n(15).f
    })
  }, function(e, t, n) {
    var r = n(14),
      i = n(33).onFreeze;
    n(54)("freeze", function(e) {
      return function(t) {
        return e && r(t) ? e(i(t)) : t
      }
    })
  }, function(e, t, n) {
    var r = n(23),
      i = n(71).f;
    n(54)("getOwnPropertyDescriptor", function() {
      return function(e, t) {
        return i(r(e), t)
      }
    })
  }, function(e, t, n) {
    var r = n(35),
      i = n(112);
    n(54)("getPrototypeOf", function() {
      return function(e) {
        return i(r(e))
      }
    })
  }, function(e, t, n) {
    var r = n(35),
      i = n(34);
    n(54)("keys", function() {
      return function(e) {
        return i(r(e))
      }
    })
  }, function(e, t, n) {
    var r = n(11);
    r(r.S, "Object", {
      setPrototypeOf: n(185).set
    })
  }, function(e, t, n) {
    "use strict";
    var r, i, o, a = n(51),
      s = n(12),
      u = n(20),
      c = n(49),
      l = n(11),
      d = n(14),
      h = n(64),
      f = n(48),
      p = n(40),
      v = n(186),
      b = n(115).set,
      _ = n(182)(),
      m = s.TypeError,
      g = s.process,
      y = s.Promise,
      g = s.process,
      S = "process" == c(g),
      E = function() {},
      C = !! function() {
        try {
          var e = y.resolve(1),
            t = (e.constructor = {})[n(9)("species")] = function(e) {
              e(E, E)
            };
          return (S || "function" == typeof PromiseRejectionEvent) && e.then(E) instanceof t
        } catch (e) {}
      }(),
      w = function(e, t) {
        return e === t || e === y && t === o
      },
      T = function(e) {
        var t;
        return !(!d(e) || "function" != typeof(t = e.then)) && t
      },
      k = function(e) {
        return w(y, e) ? new P(e) : new i(e)
      },
      P = i = function(e) {
        var t, n;
        this.promise = new e(function(e, r) {
          if (void 0 !== t || void 0 !== n) throw m("Bad Promise constructor");
          t = e, n = r
        }), this.resolve = h(t), this.reject = h(n)
      },
      O = function(e) {
        try {
          e()
        } catch (e) {
          return {
            error: e
          }
        }
      },
      R = function(e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          _(function() {
            for (var r = e._v, i = 1 == e._s, o = 0; n.length > o;) ! function(t) {
              var n, o, a = i ? t.ok : t.fail,
                s = t.resolve,
                u = t.reject,
                c = t.domain;
              try {
                a ? (i || (2 == e._h && N(e), e._h = 1), !0 === a ? n = r : (c && c.enter(), n = a(r), c && c.exit()), n === t.promise ? u(m("Promise-chain cycle")) : (o = T(n)) ? o.call(n, s, u) : s(n)) : u(r)
              } catch (e) {
                u(e)
              }
            }(n[o++]);
            e._c = [], e._n = !1, t && !e._h && A(e)
          })
        }
      },
      A = function(e) {
        b.call(s, function() {
          var t, n, r, i = e._v;
          if (M(e) && (t = O(function() {
              S ? g.emit("unhandledRejection", i, e) : (n = s.onunhandledrejection) ? n({
                promise: e,
                reason: i
              }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", i)
            }), e._h = S || M(e) ? 2 : 1), e._a = void 0, t) throw t.error
        })
      },
      M = function(e) {
        if (1 == e._h) return !1;
        for (var t, n = e._a || e._c, r = 0; n.length > r;)
          if (t = n[r++], t.fail || !M(t.promise)) return !1;
        return !0
      },
      N = function(e) {
        b.call(s, function() {
          var t;
          S ? g.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({
            promise: e,
            reason: e._v
          })
        })
      },
      I = function(e) {
        var t = this;
        t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), R(t, !0))
      },
      L = function(e) {
        var t, n = this;
        if (!n._d) {
          n._d = !0, n = n._w || n;
          try {
            if (n === e) throw m("Promise can't be resolved itself");
            (t = T(e)) ? _(function() {
              var r = {
                _w: n,
                _d: !1
              };
              try {
                t.call(e, u(L, r, 1), u(I, r, 1))
              } catch (e) {
                I.call(r, e)
              }
            }): (n._v = e, n._s = 1, R(n, !1))
          } catch (e) {
            I.call({
              _w: n,
              _d: !1
            }, e)
          }
        }
      };
    C || (y = function(e) {
      f(this, y, "Promise", "_h"), h(e), r.call(this);
      try {
        e(u(L, this, 1), u(I, this, 1))
      } catch (e) {
        I.call(this, e)
      }
    }, r = function(e) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, r.prototype = n(55)(y.prototype, {
      then: function(e, t) {
        var n = k(v(this, y));
        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = S ? g.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
      },
      catch: function(e) {
        return this.then(void 0, e)
      }
    }), P = function() {
      var e = new r;
      this.promise = e, this.resolve = u(L, e, 1), this.reject = u(I, e, 1)
    }), l(l.G + l.W + l.F * !C, {
      Promise: y
    }), n(42)(y, "Promise"), n(114)("Promise"), o = n(4).Promise, l(l.S + l.F * !C, "Promise", {
      reject: function(e) {
        var t = k(this);
        return (0, t.reject)(e), t.promise
      }
    }), l(l.S + l.F * (a || !C), "Promise", {
      resolve: function(e) {
        if (e instanceof y && w(e.constructor, this)) return e;
        var t = k(this);
        return (0, t.resolve)(e), t.promise
      }
    }), l(l.S + l.F * !(C && n(108)(function(e) {
      y.all(e).catch(E)
    })), "Promise", {
      all: function(e) {
        var t = this,
          n = k(t),
          r = n.resolve,
          i = n.reject,
          o = O(function() {
            var n = [],
              o = 0,
              a = 1;
            p(e, !1, function(e) {
              var s = o++,
                u = !1;
              n.push(void 0), a++, t.resolve(e).then(function(e) {
                u || (u = !0, n[s] = e, --a || r(n))
              }, i)
            }), --a || r(n)
          });
        return o && i(o.error), n.promise
      },
      race: function(e) {
        var t = this,
          n = k(t),
          r = n.reject,
          i = O(function() {
            p(e, !1, function(e) {
              t.resolve(e).then(n.resolve, r)
            })
          });
        return i && r(i.error), n.promise
      }
    })
  }, function(e, t, n) {
    "use strict";
    var r = n(101);
    e.exports = n(66)("Set", function(e) {
      return function() {
        return e(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      add: function(e) {
        return r.def(this, e = 0 === e ? 0 : e, e)
      }
    }, r)
  }, function(e, t, n) {
    "use strict";
    var r = n(12),
      i = n(21),
      o = n(17),
      a = n(11),
      s = n(73),
      u = n(33).KEY,
      c = n(26),
      l = n(75),
      d = n(42),
      h = n(57),
      f = n(9),
      p = n(79),
      v = n(78),
      b = n(181),
      _ = n(178),
      m = n(106),
      g = n(16),
      y = n(23),
      S = n(77),
      E = n(41),
      C = n(52),
      w = n(184),
      T = n(71),
      k = n(15),
      P = n(34),
      O = T.f,
      R = k.f,
      A = w.f,
      M = r.Symbol,
      N = r.JSON,
      I = N && N.stringify,
      L = f("_hidden"),
      j = f("toPrimitive"),
      H = {}.propertyIsEnumerable,
      D = l("symbol-registry"),
      F = l("symbols"),
      U = l("op-symbols"),
      x = Object.prototype,
      B = "function" == typeof M,
      V = r.QObject,
      G = !V || !V.prototype || !V.prototype.findChild,
      W = o && c(function() {
        return 7 != C(R({}, "a", {
          get: function() {
            return R(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function(e, t, n) {
        var r = O(x, t);
        r && delete x[t], R(e, t, n), r && e !== x && R(x, t, r)
      } : R,
      z = function(e) {
        var t = F[e] = C(M.prototype);
        return t._k = e, t
      },
      Y = B && "symbol" == typeof M.iterator ? function(e) {
        return "symbol" == typeof e
      } : function(e) {
        return e instanceof M
      },
      q = function(e, t, n) {
        return e === x && q(U, t, n), g(e), t = S(t, !0), g(n), i(F, t) ? (n.enumerable ? (i(e, L) && e[L][t] && (e[L][t] = !1), n = C(n, {
          enumerable: E(0, !1)
        })) : (i(e, L) || R(e, L, E(1, {})), e[L][t] = !0), W(e, t, n)) : R(e, t, n)
      },
      J = function(e, t) {
        g(e);
        for (var n, r = _(t = y(t)), i = 0, o = r.length; o > i;) q(e, n = r[i++], t[n]);
        return e
      },
      K = function(e, t) {
        return void 0 === t ? C(e) : J(C(e), t)
      },
      X = function(e) {
        var t = H.call(this, e = S(e, !0));
        return !(this === x && i(F, e) && !i(U, e)) && (!(t || !i(this, e) || !i(F, e) || i(this, L) && this[L][e]) || t)
      },
      Q = function(e, t) {
        if (e = y(e), t = S(t, !0), e !== x || !i(F, t) || i(U, t)) {
          var n = O(e, t);
          return !n || !i(F, t) || i(e, L) && e[L][t] || (n.enumerable = !0), n
        }
      },
      $ = function(e) {
        for (var t, n = A(y(e)), r = [], o = 0; n.length > o;) i(F, t = n[o++]) || t == L || t == u || r.push(t);
        return r
      },
      Z = function(e) {
        for (var t, n = e === x, r = A(n ? U : y(e)), o = [], a = 0; r.length > a;) !i(F, t = r[a++]) || n && !i(x, t) || o.push(F[t]);
        return o
      };
    B || (M = function() {
      if (this instanceof M) throw TypeError("Symbol is not a constructor!");
      var e = h(arguments.length > 0 ? arguments[0] : void 0),
        t = function(n) {
          this === x && t.call(U, n), i(this, L) && i(this[L], e) && (this[L][e] = !1), W(this, e, E(1, n))
        };
      return o && G && W(x, e, {
        configurable: !0,
        set: t
      }), z(e)
    }, s(M.prototype, "toString", function() {
      return this._k
    }), T.f = Q, k.f = q, n(111).f = w.f = $, n(53).f = X, n(72).f = Z, o && !n(51) && s(x, "propertyIsEnumerable", X, !0), p.f = function(e) {
      return z(f(e))
    }), a(a.G + a.W + a.F * !B, {
      Symbol: M
    });
    for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) f(ee[te++]);
    for (var ee = P(f.store), te = 0; ee.length > te;) v(ee[te++]);
    a(a.S + a.F * !B, "Symbol", {
      for: function(e) {
        return i(D, e += "") ? D[e] : D[e] = M(e)
      },
      keyFor: function(e) {
        if (Y(e)) return b(D, e);
        throw TypeError(e + " is not a symbol!")
      },
      useSetter: function() {
        G = !0
      },
      useSimple: function() {
        G = !1
      }
    }), a(a.S + a.F * !B, "Object", {
      create: K,
      defineProperty: q,
      defineProperties: J,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: $,
      getOwnPropertySymbols: Z
    }), N && a(a.S + a.F * (!B || c(function() {
      var e = M();
      return "[null]" != I([e]) || "{}" != I({
        a: e
      }) || "{}" != I(Object(e))
    })), "JSON", {
      stringify: function(e) {
        if (void 0 !== e && !Y(e)) {
          for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
          return t = r[1], "function" == typeof t && (n = t), !n && m(t) || (t = function(e, t) {
            if (n && (t = n.call(this, e, t)), !Y(t)) return t
          }), r[1] = t, I.apply(N, r)
        }
      }
    }), M.prototype[j] || n(22)(M.prototype, j, M.prototype.valueOf), d(M, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
  }, function(e, t, n) {
    "use strict";
    var r, i = n(65)(0),
      o = n(73),
      a = n(33),
      s = n(110),
      u = n(176),
      c = n(14),
      l = a.getWeak,
      d = Object.isExtensible,
      h = u.ufstore,
      f = {},
      p = function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      },
      v = {
        get: function(e) {
          if (c(e)) {
            var t = l(e);
            return !0 === t ? h(this).get(e) : t ? t[this._i] : void 0
          }
        },
        set: function(e, t) {
          return u.def(this, e, t)
        }
      },
      b = e.exports = n(66)("WeakMap", p, v, u, !0, !0);
    7 != (new b).set((Object.freeze || Object)(f), 7).get(f) && (r = u.getConstructor(p), s(r.prototype, v), a.NEED = !0, i(["delete", "has", "get", "set"], function(e) {
      var t = b.prototype,
        n = t[e];
      o(t, e, function(t, i) {
        if (c(t) && !d(t)) {
          this._f || (this._f = new r);
          var o = this._f[e](t, i);
          return "set" == e ? this : o
        }
        return n.call(this, t, i)
      })
    }))
  }, function(e, t, n) {
    var r = n(11);
    r(r.P + r.R, "Map", {
      toJSON: n(102)("Map")
    })
  }, function(e, t, n) {
    var r = n(11);
    r(r.P + r.R, "Set", {
      toJSON: n(102)("Set")
    })
  }, function(e, t, n) {
    n(78)("asyncIterator")
  }, function(e, t, n) {
    n(78)("observable")
  }, function(e, t, n) {
    var r = function() {
        return this
      }() || Function("return this")(),
      i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      o = i && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(213), i) r.regeneratorRuntime = o;
    else try {
      delete r.regeneratorRuntime
    } catch (e) {
      r.regeneratorRuntime = void 0
    }
  }, function(e, t) {
    ! function(t) {
      "use strict";

      function n(e, t, n, r) {
        var o = t && t.prototype instanceof i ? t : i,
          a = Object.create(o.prototype),
          s = new f(r || []);
        return a._invoke = c(e, n, s), a
      }

      function r(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          }
        } catch (e) {
          return {
            type: "throw",
            arg: e
          }
        }
      }

      function i() {}

      function o() {}

      function a() {}

      function s(e) {
        ["next", "throw", "return"].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e)
          }
        })
      }

      function u(e) {
        function t(n, i, o, a) {
          var s = r(e[n], e, i);
          if ("throw" !== s.type) {
            var u = s.arg,
              c = u.value;
            return c && "object" == typeof c && m.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
              t("next", e, o, a)
            }, function(e) {
              t("throw", e, o, a)
            }) : Promise.resolve(c).then(function(e) {
              u.value = e, o(u)
            }, a)
          }
          a(s.arg)
        }

        function n(e, n) {
          function r() {
            return new Promise(function(r, i) {
              t(e, n, r, i)
            })
          }
          return i = i ? i.then(r, r) : r()
        }
        var i;
        this._invoke = n
      }

      function c(e, t, n) {
        var i = T;
        return function(o, a) {
          if (i === P) throw new Error("Generator is already running");
          if (i === O) {
            if ("throw" === o) throw a;
            return v()
          }
          for (n.method = o, n.arg = a;;) {
            var s = n.delegate;
            if (s) {
              var u = l(s, n);
              if (u) {
                if (u === R) continue;
                return u
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (i === T) throw i = O, n.arg;
              n.dispatchException(n.arg)
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = P;
            var c = r(e, t, n);
            if ("normal" === c.type) {
              if (i = n.done ? O : k, c.arg === R) continue;
              return {
                value: c.arg,
                done: n.done
              }
            }
            "throw" === c.type && (i = O, n.method = "throw", n.arg = c.arg)
          }
        }
      }

      function l(e, t) {
        var n = e.iterator[t.method];
        if (n === b) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = b, l(e, t), "throw" === t.method)) return R;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return R
        }
        var i = r(n, e.iterator, t.arg);
        if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, R;
        var o = i.arg;
        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = b), t.delegate = null, R) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, R)
      }

      function d(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
      }

      function h(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
      }

      function f(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(d, this), this.reset(!0)
      }

      function p(e) {
        if (e) {
          var t = e[y];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                for (; ++n < e.length;)
                  if (m.call(e, n)) return t.value = e[n], t.done = !1, t;
                return t.value = b, t.done = !0, t
              };
            return r.next = r
          }
        }
        return {
          next: v
        }
      }

      function v() {
        return {
          value: b,
          done: !0
        }
      }
      var b, _ = Object.prototype,
        m = _.hasOwnProperty,
        g = "function" == typeof Symbol ? Symbol : {},
        y = g.iterator || "@@iterator",
        S = g.asyncIterator || "@@asyncIterator",
        E = g.toStringTag || "@@toStringTag",
        C = "object" == typeof e,
        w = t.regeneratorRuntime;
      if (w) return void(C && (e.exports = w));
      w = t.regeneratorRuntime = C ? e.exports : {}, w.wrap = n;
      var T = "suspendedStart",
        k = "suspendedYield",
        P = "executing",
        O = "completed",
        R = {},
        A = {};
      A[y] = function() {
        return this
      };
      var M = Object.getPrototypeOf,
        N = M && M(M(p([])));
      N && N !== _ && m.call(N, y) && (A = N);
      var I = a.prototype = i.prototype = Object.create(A);
      o.prototype = I.constructor = a, a.constructor = o, a[E] = o.displayName = "GeneratorFunction", w.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
      }, w.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, E in e || (e[E] = "GeneratorFunction")), e.prototype = Object.create(I), e
      }, w.awrap = function(e) {
        return {
          __await: e
        }
      }, s(u.prototype), u.prototype[S] = function() {
        return this
      }, w.AsyncIterator = u, w.async = function(e, t, r, i) {
        var o = new u(n(e, t, r, i));
        return w.isGeneratorFunction(t) ? o : o.next().then(function(e) {
          return e.done ? e.value : o.next()
        })
      }, s(I), I[E] = "Generator", I[y] = function() {
        return this
      }, I.toString = function() {
        return "[object Generator]"
      }, w.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t.reverse(),
          function n() {
            for (; t.length;) {
              var r = t.pop();
              if (r in e) return n.value = r, n.done = !1, n
            }
            return n.done = !0, n
          }
      }, w.values = p, f.prototype = {
        constructor: f,
        reset: function(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = b, this.done = !1, this.delegate = null, this.method = "next", this.arg = b, this.tryEntries.forEach(h), !e)
            for (var t in this) "t" === t.charAt(0) && m.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = b)
        },
        stop: function() {
          this.done = !0;
          var e = this.tryEntries[0],
            t = e.completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval
        },
        dispatchException: function(e) {
          function t(t, r) {
            return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = b), !!r
          }
          if (this.done) throw e;
          for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r],
              o = i.completion;
            if ("root" === i.tryLoc) return t("end");
            if (i.tryLoc <= this.prev) {
              var a = m.call(i, "catchLoc"),
                s = m.call(i, "finallyLoc");
              if (a && s) {
                if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return t(i.finallyLoc)
              } else if (a) {
                if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
              } else {
                if (!s) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return t(i.finallyLoc)
              }
            }
          }
        },
        abrupt: function(e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.tryLoc <= this.prev && m.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
              var i = r;
              break
            }
          }
          i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var o = i ? i.completion : {};
          return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, R) : this.complete(o)
        },
        complete: function(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), R
        },
        finish: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), h(n), R
          }
        },
        catch: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var i = r.arg;
                h(n)
              }
              return i
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, n) {
          return this.delegate = {
            iterator: p(e),
            resultName: t,
            nextLoc: n
          }, "next" === this.method && (this.arg = b), R
        }
      }
    }(function() {
      return this
    }() || Function("return this")())
  }, function(e, t, n) {
    e.exports = n(116)
  }])
});