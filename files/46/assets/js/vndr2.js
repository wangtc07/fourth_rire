/*! For license information please see vndr.js.LICENSE */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function (t, e, i) {
      (function (t) {
        var i,
          n,
          r,
          s,
          o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
        (s = function () {
          return (function (t) {
            var e = {};
            function i(n) {
              if (e[n]) return e[n].exports;
              var r = (e[n] = { exports: {}, id: n, loaded: !1 });
              return (
                t[n].call(r.exports, r, r.exports, i),
                (r.loaded = !0),
                r.exports
              );
            }
            return (
              (i.m = t), (i.c = e), (i.p = "http://localhost:8080/dist"), i(0)
            );
          })([
            function (t, e, i) {
              "function" != typeof Promise && (window.Promise = i(1));
              var n = {
                version: "1.0.0",
                BaseTransition: i(4),
                BaseView: i(6),
                BaseCache: i(8),
                Dispatcher: i(7),
                HistoryManager: i(9),
                Pjax: i(10),
                Prefetch: i(13),
                Utils: i(5),
              };
              t.exports = n;
            },
            function (t, e, i) {
              (function (e) {
                !(function (i) {
                  var n = setTimeout;
                  function r() {}
                  var s =
                      ("function" == typeof e && e) ||
                      function (t) {
                        n(t, 0);
                      },
                    a = function (t) {
                      "undefined" != typeof console &&
                        console &&
                        console.warn(
                          "Possible Unhandled Promise Rejection:",
                          t
                        );
                    };
                  function l(t) {
                    if ("object" !== o(this))
                      throw new TypeError(
                        "Promises must be constructed via new"
                      );
                    if ("function" != typeof t)
                      throw new TypeError("not a function");
                    (this._state = 0),
                      (this._handled = !1),
                      (this._value = void 0),
                      (this._deferreds = []),
                      p(t, this);
                  }
                  function u(t, e) {
                    for (; 3 === t._state; ) t = t._value;
                    0 !== t._state
                      ? ((t._handled = !0),
                        s(function () {
                          var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                          if (null !== i) {
                            var n;
                            try {
                              n = i(t._value);
                            } catch (t) {
                              return void c(e.promise, t);
                            }
                            h(e.promise, n);
                          } else (1 === t._state ? h : c)(e.promise, t._value);
                        }))
                      : t._deferreds.push(e);
                  }
                  function h(t, e) {
                    try {
                      if (e === t)
                        throw new TypeError(
                          "A promise cannot be resolved with itself."
                        );
                      if (
                        e &&
                        ("object" === (void 0 === e ? "undefined" : o(e)) ||
                          "function" == typeof e)
                      ) {
                        var i = e.then;
                        if (e instanceof l)
                          return (t._state = 3), (t._value = e), void f(t);
                        if ("function" == typeof i)
                          return void p(
                            ((n = i),
                            (r = e),
                            function () {
                              n.apply(r, arguments);
                            }),
                            t
                          );
                      }
                      (t._state = 1), (t._value = e), f(t);
                    } catch (e) {
                      c(t, e);
                    }
                    var n, r;
                  }
                  function c(t, e) {
                    (t._state = 2), (t._value = e), f(t);
                  }
                  function f(t) {
                    2 === t._state &&
                      0 === t._deferreds.length &&
                      s(function () {
                        t._handled || a(t._value);
                      });
                    for (var e = 0, i = t._deferreds.length; e < i; e++)
                      u(t, t._deferreds[e]);
                    t._deferreds = null;
                  }
                  function p(t, e) {
                    var i = !1;
                    try {
                      t(
                        function (t) {
                          i || ((i = !0), h(e, t));
                        },
                        function (t) {
                          i || ((i = !0), c(e, t));
                        }
                      );
                    } catch (t) {
                      if (i) return;
                      (i = !0), c(e, t);
                    }
                  }
                  (l.prototype.catch = function (t) {
                    return this.then(null, t);
                  }),
                    (l.prototype.then = function (t, e) {
                      var i = new this.constructor(r);
                      return (
                        u(
                          this,
                          new (function (t, e, i) {
                            (this.onFulfilled =
                              "function" == typeof t ? t : null),
                              (this.onRejected =
                                "function" == typeof e ? e : null),
                              (this.promise = i);
                          })(t, e, i)
                        ),
                        i
                      );
                    }),
                    (l.all = function (t) {
                      var e = Array.prototype.slice.call(t);
                      return new l(function (t, i) {
                        if (0 === e.length) return t([]);
                        var n = e.length;
                        function r(s, a) {
                          try {
                            if (
                              a &&
                              ("object" ===
                                (void 0 === a ? "undefined" : o(a)) ||
                                "function" == typeof a)
                            ) {
                              var l = a.then;
                              if ("function" == typeof l)
                                return void l.call(
                                  a,
                                  function (t) {
                                    r(s, t);
                                  },
                                  i
                                );
                            }
                            (e[s] = a), 0 == --n && t(e);
                          } catch (t) {
                            i(t);
                          }
                        }
                        for (var s = 0; s < e.length; s++) r(s, e[s]);
                      });
                    }),
                    (l.resolve = function (t) {
                      return t &&
                        "object" === (void 0 === t ? "undefined" : o(t)) &&
                        t.constructor === l
                        ? t
                        : new l(function (e) {
                            e(t);
                          });
                    }),
                    (l.reject = function (t) {
                      return new l(function (e, i) {
                        i(t);
                      });
                    }),
                    (l.race = function (t) {
                      return new l(function (e, i) {
                        for (var n = 0, r = t.length; n < r; n++)
                          t[n].then(e, i);
                      });
                    }),
                    (l._setImmediateFn = function (t) {
                      s = t;
                    }),
                    (l._setUnhandledRejectionFn = function (t) {
                      a = t;
                    }),
                    void 0 !== t && t.exports
                      ? (t.exports = l)
                      : i.Promise || (i.Promise = l);
                })(this);
              }.call(e, i(2).setImmediate));
            },
            function (t, e, i) {
              (function (t, n) {
                var r = i(3).nextTick,
                  s = Function.prototype.apply,
                  o = Array.prototype.slice,
                  a = {},
                  l = 0;
                function u(t, e) {
                  (this._id = t), (this._clearFn = e);
                }
                (e.setTimeout = function () {
                  return new u(
                    s.call(setTimeout, window, arguments),
                    clearTimeout
                  );
                }),
                  (e.setInterval = function () {
                    return new u(
                      s.call(setInterval, window, arguments),
                      clearInterval
                    );
                  }),
                  (e.clearTimeout = e.clearInterval =
                    function (t) {
                      t.close();
                    }),
                  (u.prototype.unref = u.prototype.ref = function () {}),
                  (u.prototype.close = function () {
                    this._clearFn.call(window, this._id);
                  }),
                  (e.enroll = function (t, e) {
                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
                  }),
                  (e.unenroll = function (t) {
                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
                  }),
                  (e._unrefActive = e.active =
                    function (t) {
                      clearTimeout(t._idleTimeoutId);
                      var e = t._idleTimeout;
                      e >= 0 &&
                        (t._idleTimeoutId = setTimeout(function () {
                          t._onTimeout && t._onTimeout();
                        }, e));
                    }),
                  (e.setImmediate =
                    "function" == typeof t
                      ? t
                      : function (t) {
                          var i = l++,
                            n = !(arguments.length < 2) && o.call(arguments, 1);
                          return (
                            (a[i] = !0),
                            r(function () {
                              a[i] &&
                                (n ? t.apply(null, n) : t.call(null),
                                e.clearImmediate(i));
                            }),
                            i
                          );
                        }),
                  (e.clearImmediate =
                    "function" == typeof n
                      ? n
                      : function (t) {
                          delete a[t];
                        });
              }.call(e, i(2).setImmediate, i(2).clearImmediate));
            },
            function (t, e) {
              var i,
                n,
                r = (t.exports = {});
              !(function () {
                try {
                  i = setTimeout;
                } catch (t) {
                  i = function () {
                    throw new Error("setTimeout is not defined");
                  };
                }
                try {
                  n = clearTimeout;
                } catch (t) {
                  n = function () {
                    throw new Error("clearTimeout is not defined");
                  };
                }
              })();
              var s,
                o = [],
                a = !1,
                l = -1;
              function u() {
                a &&
                  s &&
                  ((a = !1),
                  s.length ? (o = s.concat(o)) : (l = -1),
                  o.length && h());
              }
              function h() {
                if (!a) {
                  var t = i(u);
                  a = !0;
                  for (var e = o.length; e; ) {
                    for (s = o, o = []; ++l < e; ) s && s[l].run();
                    (l = -1), (e = o.length);
                  }
                  (s = null), (a = !1), n(t);
                }
              }
              function c(t, e) {
                (this.fun = t), (this.array = e);
              }
              function f() {}
              (r.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                o.push(new c(t, e)), 1 !== o.length || a || i(h, 0);
              }),
                (c.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (r.title = "browser"),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ""),
                (r.versions = {}),
                (r.on = f),
                (r.addListener = f),
                (r.once = f),
                (r.off = f),
                (r.removeListener = f),
                (r.removeAllListeners = f),
                (r.emit = f),
                (r.binding = function (t) {
                  throw new Error("process.binding is not supported");
                }),
                (r.cwd = function () {
                  return "/";
                }),
                (r.chdir = function (t) {
                  throw new Error("process.chdir is not supported");
                }),
                (r.umask = function () {
                  return 0;
                });
            },
            function (t, e, i) {
              var n = i(5),
                r = {
                  oldContainer: void 0,
                  newContainer: void 0,
                  newContainerLoading: void 0,
                  extend: function (t) {
                    return n.extend(this, t);
                  },
                  init: function (t, e) {
                    var i = this;
                    return (
                      (this.oldContainer = t),
                      (this._newContainerPromise = e),
                      (this.deferred = n.deferred()),
                      (this.newContainerReady = n.deferred()),
                      (this.newContainerLoading =
                        this.newContainerReady.promise),
                      this.start(),
                      this._newContainerPromise.then(function (t) {
                        (i.newContainer = t), i.newContainerReady.resolve();
                      }),
                      this.deferred.promise
                    );
                  },
                  done: function () {
                    this.oldContainer.parentNode.removeChild(this.oldContainer),
                      (this.newContainer.style.visibility = "visible"),
                      this.deferred.resolve();
                  },
                  start: function () {},
                };
              t.exports = r;
            },
            function (t, e) {
              var i = {
                getCurrentUrl: function () {
                  return (
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname +
                    window.location.search
                  );
                },
                cleanLink: function (t) {
                  return t.replace(/#.*/, "");
                },
                xhrTimeout: 5e3,
                xhr: function (t) {
                  var e = this.deferred(),
                    i = new XMLHttpRequest();
                  return (
                    (i.onreadystatechange = function () {
                      if (4 === i.readyState)
                        return 200 === i.status
                          ? e.resolve(i.responseText)
                          : e.reject(new Error("xhr: HTTP code is not 200"));
                    }),
                    (i.ontimeout = function () {
                      return e.reject(new Error("xhr: Timeout exceeded"));
                    }),
                    i.open("GET", t),
                    (i.timeout = this.xhrTimeout),
                    i.setRequestHeader("x-barba", "yes"),
                    i.send(),
                    e.promise
                  );
                },
                extend: function (t, e) {
                  var i = Object.create(t);
                  for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                  return i;
                },
                deferred: function () {
                  return new (function () {
                    (this.resolve = null),
                      (this.reject = null),
                      (this.promise = new Promise(
                        function (t, e) {
                          (this.resolve = t), (this.reject = e);
                        }.bind(this)
                      ));
                  })();
                },
                getPort: function (t) {
                  var e = void 0 !== t ? t : window.location.port,
                    i = window.location.protocol;
                  return "" != e
                    ? parseInt(e)
                    : "http:" === i
                    ? 80
                    : "https:" === i
                    ? 443
                    : void 0;
                },
              };
              t.exports = i;
            },
            function (t, e, i) {
              var n = i(7),
                r = i(5),
                s = {
                  namespace: null,
                  extend: function (t) {
                    return r.extend(this, t);
                  },
                  init: function () {
                    var t = this;
                    n.on("initStateChange", function (e, i) {
                      i && i.namespace === t.namespace && t.onLeave();
                    }),
                      n.on("newPageReady", function (e, i, n) {
                        (t.container = n),
                          e.namespace === t.namespace && t.onEnter();
                      }),
                      n.on("transitionCompleted", function (e, i) {
                        e.namespace === t.namespace && t.onEnterCompleted(),
                          i &&
                            i.namespace === t.namespace &&
                            t.onLeaveCompleted();
                      });
                  },
                  onEnter: function () {},
                  onEnterCompleted: function () {},
                  onLeave: function () {},
                  onLeaveCompleted: function () {},
                };
              t.exports = s;
            },
            function (t, e) {
              var i = {
                events: {},
                on: function (t, e) {
                  (this.events[t] = this.events[t] || []),
                    this.events[t].push(e);
                },
                off: function (t, e) {
                  t in this.events != 0 &&
                    this.events[t].splice(this.events[t].indexOf(e), 1);
                },
                trigger: function (t) {
                  if (t in this.events != 0)
                    for (var e = 0; e < this.events[t].length; e++)
                      this.events[t][e].apply(
                        this,
                        Array.prototype.slice.call(arguments, 1)
                      );
                },
              };
              t.exports = i;
            },
            function (t, e, i) {
              var n = i(5),
                r = {
                  data: {},
                  extend: function (t) {
                    return n.extend(this, t);
                  },
                  set: function (t, e) {
                    this.data[t] = e;
                  },
                  get: function (t) {
                    return this.data[t];
                  },
                  reset: function () {
                    this.data = {};
                  },
                };
              t.exports = r;
            },
            function (t, e) {
              t.exports = {
                history: [],
                add: function (t, e) {
                  e || (e = void 0),
                    this.history.push({ url: t, namespace: e });
                },
                currentStatus: function () {
                  return this.history[this.history.length - 1];
                },
                prevStatus: function () {
                  var t = this.history;
                  return t.length < 2 ? null : t[t.length - 2];
                },
              };
            },
            function (t, e, i) {
              var n = i(5),
                r = i(7),
                s = i(11),
                o = i(8),
                a = i(9),
                l = {
                  Dom: i(12),
                  History: a,
                  Cache: o,
                  cacheEnabled: !0,
                  transitionProgress: !1,
                  ignoreClassLink: "no-barba",
                  start: function () {
                    this.init();
                  },
                  init: function () {
                    var t = this.Dom.getContainer();
                    this.Dom.getWrapper().setAttribute("aria-live", "polite"),
                      this.History.add(
                        this.getCurrentUrl(),
                        this.Dom.getNamespace(t)
                      ),
                      r.trigger(
                        "initStateChange",
                        this.History.currentStatus()
                      ),
                      r.trigger(
                        "newPageReady",
                        this.History.currentStatus(),
                        {},
                        t,
                        this.Dom.currentHTML
                      ),
                      r.trigger(
                        "transitionCompleted",
                        this.History.currentStatus()
                      ),
                      this.bindEvents();
                  },
                  bindEvents: function () {
                    document.addEventListener(
                      "click",
                      this.onLinkClick.bind(this)
                    ),
                      window.addEventListener(
                        "popstate",
                        this.onStateChange.bind(this)
                      );
                  },
                  getCurrentUrl: function () {
                    return n.cleanLink(n.getCurrentUrl());
                  },
                  goTo: function (t) {
                    window.history.pushState(null, null, t),
                      this.onStateChange();
                  },
                  forceGoTo: function (t) {
                    window.location = t;
                  },
                  load: function (t) {
                    var e,
                      i = n.deferred(),
                      r = this;
                    return (
                      (e = this.Cache.get(t)) ||
                        ((e = n.xhr(t)), this.Cache.set(t, e)),
                      e.then(
                        function (t) {
                          var e = r.Dom.parseResponse(t);
                          r.Dom.putContainer(e),
                            r.cacheEnabled || r.Cache.reset(),
                            i.resolve(e);
                        },
                        function () {
                          r.forceGoTo(t), i.reject();
                        }
                      ),
                      i.promise
                    );
                  },
                  getHref: function (t) {
                    if (t)
                      return t.getAttribute &&
                        "string" == typeof t.getAttribute("xlink:href")
                        ? t.getAttribute("xlink:href")
                        : "string" == typeof t.href
                        ? t.href
                        : void 0;
                  },
                  onLinkClick: function (t) {
                    if (t.srcElement.firstElementChild.tagName === 'A'){
                      const i = t.srcElement.firstElementChild.href
                      window.location.replace(i);
                    }
                    for (var e = t.target; e && !this.getHref(e); )
                      e = e.childNodes;
                    if (this.preventCheck(t, e)) {
                      t.stopPropagation(),
                        t.preventDefault(),
                        r.trigger("linkClicked", e, t);
                      var i = this.getHref(e);
                      console.log(i)
                      this.goTo(i);
                    }
                  },
                  preventCheck: function (t, e) {
                    if (!window.history.pushState) return !1;
                    var i = this.getHref(e);
                    return !(
                      !e ||
                      !i ||
                      t.which > 1 ||
                      t.metaKey ||
                      t.ctrlKey ||
                      t.shiftKey ||
                      t.altKey ||
                      (e.target && "_blank" === e.target) ||
                      window.location.protocol !== e.protocol ||
                      window.location.hostname !== e.hostname ||
                      n.getPort() !== n.getPort(e.port) ||
                      i.indexOf("#") > -1 ||
                      (e.getAttribute &&
                        "string" == typeof e.getAttribute("download")) ||
                      n.cleanLink(i) == n.cleanLink(location.href) ||
                      e.classList.contains(this.ignoreClassLink)
                    );
                  },
                  getTransition: function () {
                    return s;
                  },
                  onStateChange: function () {
                    var t = this.getCurrentUrl();
                    if (
                      (this.transitionProgress && this.forceGoTo(t),
                      this.History.currentStatus().url === t)
                    )
                      return !1;
                    this.History.add(t);
                    var e = this.load(t),
                      i = Object.create(this.getTransition());
                    (this.transitionProgress = !0),
                      r.trigger(
                        "initStateChange",
                        this.History.currentStatus(),
                        this.History.prevStatus()
                      );
                    var n = i.init(this.Dom.getContainer(), e);
                    e.then(this.onNewContainerLoaded.bind(this)),
                      n.then(this.onTransitionEnd.bind(this));
                  },
                  onNewContainerLoaded: function (t) {
                    (this.History.currentStatus().namespace =
                      this.Dom.getNamespace(t)),
                      r.trigger(
                        "newPageReady",
                        this.History.currentStatus(),
                        this.History.prevStatus(),
                        t,
                        this.Dom.currentHTML
                      );
                  },
                  onTransitionEnd: function () {
                    (this.transitionProgress = !1),
                      r.trigger(
                        "transitionCompleted",
                        this.History.currentStatus(),
                        this.History.prevStatus()
                      );
                  },
                };
              t.exports = l;
            },
            function (t, e, i) {
              var n = i(4).extend({
                start: function () {
                  this.newContainerLoading.then(this.finish.bind(this));
                },
                finish: function () {
                  (document.body.scrollTop = 0), this.done();
                },
              });
              t.exports = n;
            },
            function (t, e) {
              var i = {
                dataNamespace: "namespace",
                wrapperId: "barba-wrapper",
                containerClass: "barba-container",
                currentHTML: document.documentElement.innerHTML,
                parseResponse: function (t) {
                  this.currentHTML = t;
                  var e = document.createElement("div");
                  e.innerHTML = t;
                  var i = e.querySelector("title");
                  return (
                    i && (document.title = i.textContent), this.getContainer(e)
                  );
                },
                getWrapper: function () {
                  var t = document.getElementById(this.wrapperId);
                  if (!t) throw new Error("Barba.js: wrapper not found!");
                  return t;
                },
                getContainer: function (t) {
                  if ((t || (t = document.body), !t))
                    throw new Error("Barba.js: DOM not ready!");
                  var e = this.parseContainer(t);
                  if ((e && e.jquery && (e = e[0]), !e))
                    throw new Error("Barba.js: no container found");
                  return e;
                },
                getNamespace: function (t) {
                  return t && t.dataset
                    ? t.dataset[this.dataNamespace]
                    : t
                    ? t.getAttribute("data-" + this.dataNamespace)
                    : null;
                },
                putContainer: function (t) {
                  (t.style.visibility = "hidden"),
                    this.getWrapper().appendChild(t);
                },
                parseContainer: function (t) {
                  return t.querySelector("." + this.containerClass);
                },
              };
              t.exports = i;
            },
            function (t, e, i) {
              var n = i(5),
                r = i(10),
                s = {
                  ignoreClassLink: "no-barba-prefetch",
                  init: function () {
                    if (!window.history.pushState) return !1;
                    document.body.addEventListener(
                      "mouseover",
                      this.onLinkEnter.bind(this)
                    ),
                      document.body.addEventListener(
                        "touchstart",
                        this.onLinkEnter.bind(this)
                      );
                  },
                  onLinkEnter: function (t) {
                    for (var e = t.target; e && !r.getHref(e); )
                      e = e.parentNode;
                    if (e && !e.classList.contains(this.ignoreClassLink)) {
                      var i = r.getHref(e);
                      if (r.preventCheck(t, e) && !r.Cache.get(i)) {
                        var s = n.xhr(i);
                        r.Cache.set(i, s);
                      }
                    }
                  },
                };
              t.exports = s;
            },
          ]);
        }),
          "object" === o(e) && "object" === o(t)
            ? (t.exports = s())
            : ((n = []),
              void 0 ===
                (r = "function" == typeof (i = s) ? i.apply(e, n) : i) ||
                (t.exports = r));
      }.call(this, i(25)(t)));
    },
    function (t, e, i) {
      var n, r;
      void 0 ===
        (r =
          "function" ==
          typeof (n = function (t, e) {
            "use strict";
            var i = 5e3,
              n = "callback";
            function r(t) {
              try {
                delete window[t];
              } catch (e) {
                window[t] = void 0;
              }
            }
            function s(t) {
              var e = document.getElementById(t);
              e && document.getElementsByTagName("head")[0].removeChild(e);
            }
            e.exports = function (t) {
              var e =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1],
                o = t,
                a = e.timeout || i,
                l = e.jsonpCallback || n,
                u = void 0;
              return new Promise(function (i, n) {
                var h =
                    e.jsonpCallbackFunction ||
                    "jsonp_" +
                      Date.now() +
                      "_" +
                      Math.ceil(1e5 * Math.random()),
                  c = l + "_" + h;
                (window[h] = function (t) {
                  i({
                    ok: !0,
                    json: function () {
                      return Promise.resolve(t);
                    },
                  }),
                    u && clearTimeout(u),
                    s(c),
                    r(h);
                }),
                  (o += -1 === o.indexOf("?") ? "?" : "&");
                var f = document.createElement("script");
                f.setAttribute("src", "" + o + l + "=" + h),
                  e.charset && f.setAttribute("charset", e.charset),
                  (f.id = c),
                  document.getElementsByTagName("head")[0].appendChild(f),
                  (u = setTimeout(function () {
                    n(new Error("JSONP request to " + t + " timed out")),
                      r(h),
                      s(c),
                      (window[h] = function () {
                        r(h);
                      });
                  }, a)),
                  (f.onerror = function () {
                    n(new Error("JSONP request to " + t + " failed")),
                      r(h),
                      s(c),
                      u && clearTimeout(u);
                  });
              });
            };
          })
            ? n.apply(e, [e, t])
            : n) || (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              },
        r = i(9),
        s = i(30),
        o = Object.prototype.toString;
      function a(t) {
        return "[object Array]" === o.call(t);
      }
      function l(t) {
        return null !== t && "object" === (void 0 === t ? "undefined" : n(t));
      }
      function u(t) {
        return "[object Function]" === o.call(t);
      }
      function h(t, e) {
        if (null !== t && void 0 !== t)
          if (
            ("object" !== (void 0 === t ? "undefined" : n(t)) && (t = [t]),
            a(t))
          )
            for (var i = 0, r = t.length; i < r; i++) e.call(null, t[i], i, t);
          else
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) &&
                e.call(null, t[s], s, t);
      }
      t.exports = {
        isArray: a,
        isArrayBuffer: function (t) {
          return "[object ArrayBuffer]" === o.call(t);
        },
        isBuffer: s,
        isFormData: function (t) {
          return "undefined" != typeof FormData && t instanceof FormData;
        },
        isArrayBufferView: function (t) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && t.buffer instanceof ArrayBuffer;
        },
        isString: function (t) {
          return "string" == typeof t;
        },
        isNumber: function (t) {
          return "number" == typeof t;
        },
        isObject: l,
        isUndefined: function (t) {
          return void 0 === t;
        },
        isDate: function (t) {
          return "[object Date]" === o.call(t);
        },
        isFile: function (t) {
          return "[object File]" === o.call(t);
        },
        isBlob: function (t) {
          return "[object Blob]" === o.call(t);
        },
        isFunction: u,
        isStream: function (t) {
          return l(t) && u(t.pipe);
        },
        isURLSearchParams: function (t) {
          return (
            "undefined" != typeof URLSearchParams &&
            t instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              "ReactNative" !== navigator.product) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: h,
        merge: function t() {
          var e = {};
          function i(i, r) {
            "object" === n(e[r]) &&
            "object" === (void 0 === i ? "undefined" : n(i))
              ? (e[r] = t(e[r], i))
              : (e[r] = i);
          }
          for (var r = 0, s = arguments.length; r < s; r++) h(arguments[r], i);
          return e;
        },
        extend: function (t, e, i) {
          return (
            h(e, function (e, n) {
              t[n] = i && "function" == typeof e ? r(e, i) : e;
            }),
            t
          );
        },
        trim: function (t) {
          return t.replace(/^\s*/, "").replace(/\s*$/, "");
        },
      };
    },
    function (t, e) {
      var i,
        n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              };
      i = (function () {
        return this;
      })();
      try {
        i = i || Function("return this")() || (0, eval)("this");
      } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
          (i = window);
      }
      t.exports = i;
    },
    function (t, e, i) {
      "use strict";
      i.r(e),
        function (t, n) {
          i.d(e, "_gsScope", function () {
            return s;
          }),
            i.d(e, "TweenLite", function () {
              return o;
            }),
            i.d(e, "globals", function () {
              return a;
            }),
            i.d(e, "default", function () {
              return o;
            }),
            i.d(e, "SimpleTimeline", function () {
              return u;
            }),
            i.d(e, "Animation", function () {
              return h;
            }),
            i.d(e, "Ease", function () {
              return c;
            }),
            i.d(e, "Linear", function () {
              return f;
            }),
            i.d(e, "Power0", function () {
              return p;
            }),
            i.d(e, "Power1", function () {
              return d;
            }),
            i.d(e, "Power2", function () {
              return m;
            }),
            i.d(e, "Power3", function () {
              return _;
            }),
            i.d(e, "Power4", function () {
              return g;
            }),
            i.d(e, "TweenPlugin", function () {
              return v;
            }),
            i.d(e, "EventDispatcher", function () {
              return y;
            });
          var r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  },
            s =
              "undefined" != typeof window
                ? window
                : void 0 !== t && t.exports && void 0 !== n
                ? n
                : {},
            o = (function (t) {
              var e = {},
                i = t.document,
                n = (t.GreenSockGlobals = t.GreenSockGlobals || t);
              if (n.TweenLite) return n.TweenLite;
              var s,
                o,
                a,
                l,
                u,
                h,
                c,
                f = function (t) {
                  var e,
                    i = t.split("."),
                    r = n;
                  for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                  return r;
                },
                p = f("com.greensock"),
                d = function (t) {
                  var e,
                    i = [],
                    n = t.length;
                  for (e = 0; e !== n; i.push(t[e++]));
                  return i;
                },
                m = function () {},
                _ =
                  ((h = Object.prototype.toString),
                  (c = h.call([])),
                  function (t) {
                    return (
                      null != t &&
                      (t instanceof Array ||
                        ("object" === (void 0 === t ? "undefined" : r(t)) &&
                          !!t.push &&
                          h.call(t) === c))
                    );
                  }),
                g = {},
                v = (t._gsDefine = function (t, i, r, s) {
                  return new (function t(i, r, s, o) {
                    (this.sc = g[i] ? g[i].sc : []),
                      (g[i] = this),
                      (this.gsClass = null),
                      (this.func = s);
                    var a = [];
                    (this.check = function (l) {
                      for (var u, h, c, p, d = r.length, m = d; --d > -1; )
                        (u = g[r[d]] || new t(r[d], [])).gsClass
                          ? ((a[d] = u.gsClass), m--)
                          : l && u.sc.push(this);
                      if (0 === m && s)
                        for (
                          c = (h = ("com.greensock." + i).split(".")).pop(),
                            p =
                              f(h.join("."))[c] =
                              this.gsClass =
                                s.apply(s, a),
                            o && (n[c] = e[c] = p),
                            d = 0;
                          d < this.sc.length;
                          d++
                        )
                          this.sc[d].check();
                    }),
                      this.check(!0);
                  })(t, i, r, s);
                }),
                y = (p._class = function (t, e, i) {
                  return (
                    (e = e || function () {}),
                    v(
                      t,
                      [],
                      function () {
                        return e;
                      },
                      i
                    ),
                    e
                  );
                });
              v.globals = n;
              var x = [0, 0, 1, 1],
                w = y(
                  "easing.Ease",
                  function (t, e, i, n) {
                    (this._func = t),
                      (this._type = i || 0),
                      (this._power = n || 0),
                      (this._params = e ? x.concat(e) : x);
                  },
                  !0
                ),
                T = (w.map = {}),
                b = (w.register = function (t, e, i, n) {
                  for (
                    var r,
                      s,
                      o,
                      a,
                      l = e.split(","),
                      u = l.length,
                      h = (i || "easeIn,easeOut,easeInOut").split(",");
                    --u > -1;

                  )
                    for (
                      s = l[u],
                        r = n ? y("easing." + s, null, !0) : p.easing[s] || {},
                        o = h.length;
                      --o > -1;

                    )
                      (a = h[o]),
                        (T[s + "." + a] =
                          T[a + s] =
                          r[a] =
                            t.getRatio ? t : t[a] || new t());
                });
              for (
                (a = w.prototype)._calcEnd = !1,
                  a.getRatio = function (t) {
                    if (this._func)
                      return (
                        (this._params[0] = t),
                        this._func.apply(null, this._params)
                      );
                    var e = this._type,
                      i = this._power,
                      n =
                        1 === e
                          ? 1 - t
                          : 2 === e
                          ? t
                          : t < 0.5
                          ? 2 * t
                          : 2 * (1 - t);
                    return (
                      1 === i
                        ? (n *= n)
                        : 2 === i
                        ? (n *= n * n)
                        : 3 === i
                        ? (n *= n * n * n)
                        : 4 === i && (n *= n * n * n * n),
                      1 === e
                        ? 1 - n
                        : 2 === e
                        ? n
                        : t < 0.5
                        ? n / 2
                        : 1 - n / 2
                    );
                  },
                  o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                    .length;
                --o > -1;

              )
                (a = s[o] + ",Power" + o),
                  b(new w(null, null, 1, o), a, "easeOut", !0),
                  b(
                    new w(null, null, 2, o),
                    a,
                    "easeIn" + (0 === o ? ",easeNone" : "")
                  ),
                  b(new w(null, null, 3, o), a, "easeInOut");
              (T.linear = p.easing.Linear.easeIn),
                (T.swing = p.easing.Quad.easeInOut);
              var P = y("events.EventDispatcher", function (t) {
                (this._listeners = {}), (this._eventTarget = t || this);
              });
              ((a = P.prototype).addEventListener = function (t, e, i, n, r) {
                r = r || 0;
                var s,
                  o,
                  a = this._listeners[t],
                  h = 0;
                for (
                  this !== l || u || l.wake(),
                    null == a && (this._listeners[t] = a = []),
                    o = a.length;
                  --o > -1;

                )
                  (s = a[o]).c === e && s.s === i
                    ? a.splice(o, 1)
                    : 0 === h && s.pr < r && (h = o + 1);
                a.splice(h, 0, { c: e, s: i, up: n, pr: r });
              }),
                (a.removeEventListener = function (t, e) {
                  var i,
                    n = this._listeners[t];
                  if (n)
                    for (i = n.length; --i > -1; )
                      if (n[i].c === e) return void n.splice(i, 1);
                }),
                (a.dispatchEvent = function (t) {
                  var e,
                    i,
                    n,
                    r = this._listeners[t];
                  if (r)
                    for (
                      (e = r.length) > 1 && (r = r.slice(0)),
                        i = this._eventTarget;
                      --e > -1;

                    )
                      (n = r[e]) &&
                        (n.up
                          ? n.c.call(n.s || i, { type: t, target: i })
                          : n.c.call(n.s || i));
                });
              var S = t.requestAnimationFrame,
                k = t.cancelAnimationFrame,
                A =
                  Date.now ||
                  function () {
                    return new Date().getTime();
                  },
                O = A();
              for (
                o = (s = ["ms", "moz", "webkit", "o"]).length;
                --o > -1 && !S;

              )
                (S = t[s[o] + "RequestAnimationFrame"]),
                  (k =
                    t[s[o] + "CancelAnimationFrame"] ||
                    t[s[o] + "CancelRequestAnimationFrame"]);
              y("Ticker", function (t, e) {
                var n,
                  r,
                  s,
                  o,
                  a,
                  h = this,
                  c = A(),
                  f = !(!1 === e || !S) && "auto",
                  p = 500,
                  d = 33,
                  _ = function t(e) {
                    var i,
                      l,
                      u = A() - O;
                    u > p && (c += u - d),
                      (O += u),
                      (h.time = (O - c) / 1e3),
                      (i = h.time - a),
                      (!n || i > 0 || !0 === e) &&
                        (h.frame++,
                        (a += i + (i >= o ? 0.004 : o - i)),
                        (l = !0)),
                      !0 !== e && (s = r(t)),
                      l && h.dispatchEvent("tick");
                  };
                P.call(h),
                  (h.time = h.frame = 0),
                  (h.tick = function () {
                    _(!0);
                  }),
                  (h.lagSmoothing = function (t, e) {
                    if (!arguments.length) return p < 1e8;
                    (p = t || 1e8), (d = Math.min(e, p, 0));
                  }),
                  (h.sleep = function () {
                    null != s &&
                      (f && k ? k(s) : clearTimeout(s),
                      (r = m),
                      (s = null),
                      h === l && (u = !1));
                  }),
                  (h.wake = function (t) {
                    null !== s
                      ? h.sleep()
                      : t
                      ? (c += -O + (O = A()))
                      : h.frame > 10 && (O = A() - p + 5),
                      (r =
                        0 === n
                          ? m
                          : f && S
                          ? S
                          : function (t) {
                              return setTimeout(
                                t,
                                (1e3 * (a - h.time) + 1) | 0
                              );
                            }),
                      h === l && (u = !0),
                      _(2);
                  }),
                  (h.fps = function (t) {
                    if (!arguments.length) return n;
                    (o = 1 / ((n = t) || 60)), (a = this.time + o), h.wake();
                  }),
                  (h.useRAF = function (t) {
                    if (!arguments.length) return f;
                    h.sleep(), (f = t), h.fps(n);
                  }),
                  h.fps(t),
                  setTimeout(function () {
                    "auto" === f &&
                      h.frame < 5 &&
                      "hidden" !== (i || {}).visibilityState &&
                      h.useRAF(!1);
                  }, 1500);
              }),
                ((a = p.Ticker.prototype =
                  new p.events.EventDispatcher()).constructor = p.Ticker);
              var C = y("core.Animation", function (t, e) {
                if (
                  ((this.vars = e = e || {}),
                  (this._duration = this._totalDuration = t || 0),
                  (this._delay = Number(e.delay) || 0),
                  (this._timeScale = 1),
                  (this._active = !!e.immediateRender),
                  (this.data = e.data),
                  (this._reversed = !!e.reversed),
                  W)
                ) {
                  u || l.wake();
                  var i = this.vars.useFrames ? G : W;
                  i.add(this, i._time), this.vars.paused && this.paused(!0);
                }
              });
              (l = C.ticker = new p.Ticker()),
                ((a = C.prototype)._dirty =
                  a._gc =
                  a._initted =
                  a._paused =
                    !1),
                (a._totalTime = a._time = 0),
                (a._rawPrevTime = -1),
                (a._next =
                  a._last =
                  a._onUpdate =
                  a._timeline =
                  a.timeline =
                    null),
                (a._paused = !1),
                (function t() {
                  u &&
                    A() - O > 2e3 &&
                    ("hidden" !== (i || {}).visibilityState ||
                      !l.lagSmoothing()) &&
                    l.wake();
                  var e = setTimeout(t, 2e3);
                  e.unref && e.unref();
                })(),
                (a.play = function (t, e) {
                  return (
                    null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                  );
                }),
                (a.pause = function (t, e) {
                  return null != t && this.seek(t, e), this.paused(!0);
                }),
                (a.resume = function (t, e) {
                  return null != t && this.seek(t, e), this.paused(!1);
                }),
                (a.seek = function (t, e) {
                  return this.totalTime(Number(t), !1 !== e);
                }),
                (a.restart = function (t, e) {
                  return this.reversed(!1)
                    .paused(!1)
                    .totalTime(t ? -this._delay : 0, !1 !== e, !0);
                }),
                (a.reverse = function (t, e) {
                  return (
                    null != t && this.seek(t || this.totalDuration(), e),
                    this.reversed(!0).paused(!1)
                  );
                }),
                (a.render = function (t, e, i) {}),
                (a.invalidate = function () {
                  return (
                    (this._time = this._totalTime = 0),
                    (this._initted = this._gc = !1),
                    (this._rawPrevTime = -1),
                    (!this._gc && this.timeline) || this._enabled(!0),
                    this
                  );
                }),
                (a.isActive = function () {
                  var t,
                    e = this._timeline,
                    i = this._startTime;
                  return (
                    !e ||
                    (!this._gc &&
                      !this._paused &&
                      e.isActive() &&
                      (t = e.rawTime(!0)) >= i &&
                      t < i + this.totalDuration() / this._timeScale - 1e-8)
                  );
                }),
                (a._enabled = function (t, e) {
                  return (
                    u || l.wake(),
                    (this._gc = !t),
                    (this._active = this.isActive()),
                    !0 !== e &&
                      (t && !this.timeline
                        ? this._timeline.add(
                            this,
                            this._startTime - this._delay
                          )
                        : !t &&
                          this.timeline &&
                          this._timeline._remove(this, !0)),
                    !1
                  );
                }),
                (a._kill = function (t, e) {
                  return this._enabled(!1, !1);
                }),
                (a.kill = function (t, e) {
                  return this._kill(t, e), this;
                }),
                (a._uncache = function (t) {
                  for (var e = t ? this : this.timeline; e; )
                    (e._dirty = !0), (e = e.timeline);
                  return this;
                }),
                (a._swapSelfInParams = function (t) {
                  for (var e = t.length, i = t.concat(); --e > -1; )
                    "{self}" === t[e] && (i[e] = this);
                  return i;
                }),
                (a._callback = function (t) {
                  var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                  switch (n ? n.length : 0) {
                    case 0:
                      i.call(r);
                      break;
                    case 1:
                      i.call(r, n[0]);
                      break;
                    case 2:
                      i.call(r, n[0], n[1]);
                      break;
                    default:
                      i.apply(r, n);
                  }
                }),
                (a.eventCallback = function (t, e, i, n) {
                  if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e
                      ? delete r[t]
                      : ((r[t] = e),
                        (r[t + "Params"] =
                          _(i) && -1 !== i.join("").indexOf("{self}")
                            ? this._swapSelfInParams(i)
                            : i),
                        (r[t + "Scope"] = n)),
                      "onUpdate" === t && (this._onUpdate = e);
                  }
                  return this;
                }),
                (a.delay = function (t) {
                  return arguments.length
                    ? (this._timeline.smoothChildTiming &&
                        this.startTime(this._startTime + t - this._delay),
                      (this._delay = t),
                      this)
                    : this._delay;
                }),
                (a.duration = function (t) {
                  return arguments.length
                    ? ((this._duration = this._totalDuration = t),
                      this._uncache(!0),
                      this._timeline.smoothChildTiming &&
                        this._time > 0 &&
                        this._time < this._duration &&
                        0 !== t &&
                        this.totalTime(
                          this._totalTime * (t / this._duration),
                          !0
                        ),
                      this)
                    : ((this._dirty = !1), this._duration);
                }),
                (a.totalDuration = function (t) {
                  return (
                    (this._dirty = !1),
                    arguments.length ? this.duration(t) : this._totalDuration
                  );
                }),
                (a.time = function (t, e) {
                  return arguments.length
                    ? (this._dirty && this.totalDuration(),
                      this.totalTime(
                        t > this._duration ? this._duration : t,
                        e
                      ))
                    : this._time;
                }),
                (a.totalTime = function (t, e, i) {
                  if ((u || l.wake(), !arguments.length))
                    return this._totalTime;
                  if (this._timeline) {
                    if (
                      (t < 0 && !i && (t += this.totalDuration()),
                      this._timeline.smoothChildTiming)
                    ) {
                      this._dirty && this.totalDuration();
                      var n = this._totalDuration,
                        r = this._timeline;
                      if (
                        (t > n && !i && (t = n),
                        (this._startTime =
                          (this._paused ? this._pauseTime : r._time) -
                          (this._reversed ? n - t : t) / this._timeScale),
                        r._dirty || this._uncache(!1),
                        r._timeline)
                      )
                        for (; r._timeline; )
                          r._timeline._time !==
                            (r._startTime + r._totalTime) / r._timeScale &&
                            r.totalTime(r._totalTime, !0),
                            (r = r._timeline);
                    }
                    this._gc && this._enabled(!0, !1),
                      (this._totalTime === t && 0 !== this._duration) ||
                        (I.length && Q(),
                        this.render(t, e, !1),
                        I.length && Q());
                  }
                  return this;
                }),
                (a.progress = a.totalProgress =
                  function (t, e) {
                    var i = this.duration();
                    return arguments.length
                      ? this.totalTime(i * t, e)
                      : i
                      ? this._time / i
                      : this.ratio;
                  }),
                (a.startTime = function (t) {
                  return arguments.length
                    ? (t !== this._startTime &&
                        ((this._startTime = t),
                        this.timeline &&
                          this.timeline._sortChildren &&
                          this.timeline.add(this, t - this._delay)),
                      this)
                    : this._startTime;
                }),
                (a.endTime = function (t) {
                  return (
                    this._startTime +
                    (0 != t ? this.totalDuration() : this.duration()) /
                      this._timeScale
                  );
                }),
                (a.timeScale = function (t) {
                  if (!arguments.length) return this._timeScale;
                  var e, i;
                  for (
                    t = t || 1e-8,
                      this._timeline &&
                        this._timeline.smoothChildTiming &&
                        ((i =
                          (e = this._pauseTime) || 0 === e
                            ? e
                            : this._timeline.totalTime()),
                        (this._startTime =
                          i - ((i - this._startTime) * this._timeScale) / t)),
                      this._timeScale = t,
                      i = this.timeline;
                    i && i.timeline;

                  )
                    (i._dirty = !0), i.totalDuration(), (i = i.timeline);
                  return this;
                }),
                (a.reversed = function (t) {
                  return arguments.length
                    ? (t != this._reversed &&
                        ((this._reversed = t),
                        this.totalTime(
                          this._timeline && !this._timeline.smoothChildTiming
                            ? this.totalDuration() - this._totalTime
                            : this._totalTime,
                          !0
                        )),
                      this)
                    : this._reversed;
                }),
                (a.paused = function (t) {
                  if (!arguments.length) return this._paused;
                  var e,
                    i,
                    n = this._timeline;
                  return (
                    t != this._paused &&
                      n &&
                      (u || t || l.wake(),
                      (i = (e = n.rawTime()) - this._pauseTime),
                      !t &&
                        n.smoothChildTiming &&
                        ((this._startTime += i), this._uncache(!1)),
                      (this._pauseTime = t ? e : null),
                      (this._paused = t),
                      (this._active = this.isActive()),
                      !t &&
                        0 !== i &&
                        this._initted &&
                        this.duration() &&
                        ((e = n.smoothChildTiming
                          ? this._totalTime
                          : (e - this._startTime) / this._timeScale),
                        this.render(e, e === this._totalTime, !0))),
                    this._gc && !t && this._enabled(!0, !1),
                    this
                  );
                });
              var E = y("core.SimpleTimeline", function (t) {
                C.call(this, 0, t),
                  (this.autoRemoveChildren = this.smoothChildTiming = !0);
              });
              ((a = E.prototype = new C()).constructor = E),
                (a.kill()._gc = !1),
                (a._first = a._last = a._recent = null),
                (a._sortChildren = !1),
                (a.add = a.insert =
                  function (t, e, i, n) {
                    var r, s;
                    if (
                      ((t._startTime = Number(e || 0) + t._delay),
                      t._paused &&
                        this !== t._timeline &&
                        (t._pauseTime =
                          this.rawTime() -
                          (t._timeline.rawTime() - t._pauseTime)),
                      t.timeline && t.timeline._remove(t, !0),
                      (t.timeline = t._timeline = this),
                      t._gc && t._enabled(!0, !0),
                      (r = this._last),
                      this._sortChildren)
                    )
                      for (s = t._startTime; r && r._startTime > s; )
                        r = r._prev;
                    return (
                      r
                        ? ((t._next = r._next), (r._next = t))
                        : ((t._next = this._first), (this._first = t)),
                      t._next ? (t._next._prev = t) : (this._last = t),
                      (t._prev = r),
                      (this._recent = t),
                      this._timeline && this._uncache(!0),
                      this
                    );
                  }),
                (a._remove = function (t, e) {
                  return (
                    t.timeline === this &&
                      (e || t._enabled(!1, !0),
                      t._prev
                        ? (t._prev._next = t._next)
                        : this._first === t && (this._first = t._next),
                      t._next
                        ? (t._next._prev = t._prev)
                        : this._last === t && (this._last = t._prev),
                      (t._next = t._prev = t.timeline = null),
                      t === this._recent && (this._recent = this._last),
                      this._timeline && this._uncache(!0)),
                    this
                  );
                }),
                (a.render = function (t, e, i) {
                  var n,
                    r = this._first;
                  for (
                    this._totalTime = this._time = this._rawPrevTime = t;
                    r;

                  )
                    (n = r._next),
                      (r._active ||
                        (t >= r._startTime && !r._paused && !r._gc)) &&
                        (r._reversed
                          ? r.render(
                              (r._dirty
                                ? r.totalDuration()
                                : r._totalDuration) -
                                (t - r._startTime) * r._timeScale,
                              e,
                              i
                            )
                          : r.render((t - r._startTime) * r._timeScale, e, i)),
                      (r = n);
                }),
                (a.rawTime = function () {
                  return u || l.wake(), this._totalTime;
                });
              var R = y(
                  "TweenLite",
                  function (e, i, n) {
                    if (
                      (C.call(this, i, n),
                      (this.render = R.prototype.render),
                      null == e)
                    )
                      throw "Cannot tween a null target.";
                    this.target = e =
                      "string" != typeof e ? e : R.selector(e) || e;
                    var r,
                      s,
                      o,
                      a =
                        e.jquery ||
                        (e.length &&
                          e !== t &&
                          e[0] &&
                          (e[0] === t ||
                            (e[0].nodeType && e[0].style && !e.nodeType))),
                      l = this.vars.overwrite;
                    if (
                      ((this._overwrite = l =
                        null == l
                          ? V[R.defaultOverwrite]
                          : "number" == typeof l
                          ? l >> 0
                          : V[l]),
                      (a || e instanceof Array || (e.push && _(e))) &&
                        "number" != typeof e[0])
                    )
                      for (
                        this._targets = o = d(e),
                          this._propLookup = [],
                          this._siblings = [],
                          r = 0;
                        r < o.length;
                        r++
                      )
                        (s = o[r])
                          ? "string" != typeof s
                            ? s.length &&
                              s !== t &&
                              s[0] &&
                              (s[0] === t ||
                                (s[0].nodeType && s[0].style && !s.nodeType))
                              ? (o.splice(r--, 1),
                                (this._targets = o = o.concat(d(s))))
                              : ((this._siblings[r] = Z(s, this, !1)),
                                1 === l &&
                                  this._siblings[r].length > 1 &&
                                  J(s, this, null, 1, this._siblings[r]))
                            : "string" == typeof (s = o[r--] = R.selector(s)) &&
                              o.splice(r + 1, 1)
                          : o.splice(r--, 1);
                    else
                      (this._propLookup = {}),
                        (this._siblings = Z(e, this, !1)),
                        1 === l &&
                          this._siblings.length > 1 &&
                          J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender ||
                      (0 === i &&
                        0 === this._delay &&
                        !1 !== this.vars.immediateRender)) &&
                      ((this._time = -1e-8),
                      this.render(Math.min(0, -this._delay)));
                  },
                  !0
                ),
                M = function (e) {
                  return (
                    e &&
                    e.length &&
                    e !== t &&
                    e[0] &&
                    (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
                  );
                };
              ((a = R.prototype = new C()).constructor = R),
                (a.kill()._gc = !1),
                (a.ratio = 0),
                (a._firstPT =
                  a._targets =
                  a._overwrittenProps =
                  a._startAt =
                    null),
                (a._notifyPluginsOfEnabled = a._lazy = !1),
                (R.version = "2.1.3"),
                (R.defaultEase = a._ease = new w(null, null, 1, 1)),
                (R.defaultOverwrite = "auto"),
                (R.ticker = l),
                (R.autoSleep = 120),
                (R.lagSmoothing = function (t, e) {
                  l.lagSmoothing(t, e);
                }),
                (R.selector =
                  t.$ ||
                  t.jQuery ||
                  function (e) {
                    var n = t.$ || t.jQuery;
                    return n
                      ? ((R.selector = n), n(e))
                      : (i || (i = t.document),
                        i
                          ? i.querySelectorAll
                            ? i.querySelectorAll(e)
                            : i.getElementById(
                                "#" === e.charAt(0) ? e.substr(1) : e
                              )
                          : e);
                  });
              var I = [],
                F = {},
                N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                D = /[\+-]=-?[\.\d]/,
                z = function (t) {
                  for (var e, i = this._firstPT; i; )
                    (e = i.blob
                      ? 1 === t && null != this.end
                        ? this.end
                        : t
                        ? this.join("")
                        : this.start
                      : i.c * t + i.s),
                      i.m
                        ? (e = i.m.call(
                            this._tween,
                            e,
                            this._target || i.t,
                            this._tween
                          ))
                        : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                      i.f
                        ? i.fp
                          ? i.t[i.p](i.fp, e)
                          : i.t[i.p](e)
                        : (i.t[i.p] = e),
                      (i = i._next);
                },
                L = function (t) {
                  return ((1e3 * t) | 0) / 1e3 + "";
                },
                j = function (t, e, i, n) {
                  var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    h,
                    c = [],
                    f = 0,
                    p = "",
                    d = 0;
                  for (
                    c.start = t,
                      c.end = e,
                      t = c[0] = t + "",
                      e = c[1] = e + "",
                      i && (i(c), (t = c[0]), (e = c[1])),
                      c.length = 0,
                      r = t.match(N) || [],
                      s = e.match(N) || [],
                      n &&
                        ((n._next = null),
                        (n.blob = 1),
                        (c._firstPT = c._applyPT = n)),
                      l = s.length,
                      a = 0;
                    a < l;
                    a++
                  )
                    (h = s[a]),
                      (p +=
                        (u = e.substr(f, e.indexOf(h, f) - f)) || !a ? u : ","),
                      (f += u.length),
                      d
                        ? (d = (d + 1) % 5)
                        : "rgba(" === u.substr(-5) && (d = 1),
                      h === r[a] || r.length <= a
                        ? (p += h)
                        : (p && (c.push(p), (p = "")),
                          (o = parseFloat(r[a])),
                          c.push(o),
                          (c._firstPT = {
                            _next: c._firstPT,
                            t: c,
                            p: c.length - 1,
                            s: o,
                            c:
                              ("=" === h.charAt(1)
                                ? parseInt(h.charAt(0) + "1", 10) *
                                  parseFloat(h.substr(2))
                                : parseFloat(h) - o) || 0,
                            f: 0,
                            m: d && d < 4 ? Math.round : L,
                          })),
                      (f += h.length);
                  return (
                    (p += e.substr(f)) && c.push(p),
                    (c.setRatio = z),
                    D.test(e) && (c.end = null),
                    c
                  );
                },
                X = function (t, e, i, n, s, o, a, l, u) {
                  "function" == typeof n && (n = n(u || 0, t));
                  var h = r(t[e]),
                    c =
                      "function" !== h
                        ? ""
                        : e.indexOf("set") ||
                          "function" != typeof t["get" + e.substr(3)]
                        ? e
                        : "get" + e.substr(3),
                    f = "get" !== i ? i : c ? (a ? t[c](a) : t[c]()) : t[e],
                    p = "string" == typeof n && "=" === n.charAt(1),
                    d = {
                      t: t,
                      p: e,
                      s: f,
                      f: "function" === h,
                      pg: 0,
                      n: s || e,
                      m: o ? ("function" == typeof o ? o : Math.round) : 0,
                      pr: 0,
                      c: p
                        ? parseInt(n.charAt(0) + "1", 10) *
                          parseFloat(n.substr(2))
                        : parseFloat(n) - f || 0,
                    };
                  if (
                    (("number" != typeof f || ("number" != typeof n && !p)) &&
                      (a ||
                      isNaN(f) ||
                      (!p && isNaN(n)) ||
                      "boolean" == typeof f ||
                      "boolean" == typeof n
                        ? ((d.fp = a),
                          (d = {
                            t: j(
                              f,
                              p
                                ? parseFloat(d.s) +
                                    d.c +
                                    (d.s + "").replace(/[0-9\-\.]/g, "")
                                : n,
                              l || R.defaultStringFilter,
                              d
                            ),
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: s || e,
                            pr: 0,
                            m: 0,
                          }))
                        : ((d.s = parseFloat(f)),
                          p || (d.c = parseFloat(n) - d.s || 0))),
                    d.c)
                  )
                    return (
                      (d._next = this._firstPT) && (d._next._prev = d),
                      (this._firstPT = d),
                      d
                    );
                },
                B = (R._internals = {
                  isArray: _,
                  isSelector: M,
                  lazyTweens: I,
                  blobDif: j,
                }),
                Y = (R._plugins = {}),
                U = (B.tweenLookup = {}),
                H = 0,
                q = (B.reservedProps = {
                  ease: 1,
                  delay: 1,
                  overwrite: 1,
                  onComplete: 1,
                  onCompleteParams: 1,
                  onCompleteScope: 1,
                  useFrames: 1,
                  runBackwards: 1,
                  startAt: 1,
                  onUpdate: 1,
                  onUpdateParams: 1,
                  onUpdateScope: 1,
                  onStart: 1,
                  onStartParams: 1,
                  onStartScope: 1,
                  onReverseComplete: 1,
                  onReverseCompleteParams: 1,
                  onReverseCompleteScope: 1,
                  onRepeat: 1,
                  onRepeatParams: 1,
                  onRepeatScope: 1,
                  easeParams: 1,
                  yoyo: 1,
                  immediateRender: 1,
                  repeat: 1,
                  repeatDelay: 1,
                  data: 1,
                  paused: 1,
                  reversed: 1,
                  autoCSS: 1,
                  lazy: 1,
                  onOverwrite: 1,
                  callbackScope: 1,
                  stringFilter: 1,
                  id: 1,
                  yoyoEase: 1,
                  stagger: 1,
                }),
                V = {
                  none: 0,
                  all: 1,
                  auto: 2,
                  concurrent: 3,
                  allOnStart: 4,
                  preexisting: 5,
                  true: 1,
                  false: 0,
                },
                G = (C._rootFramesTimeline = new E()),
                W = (C._rootTimeline = new E()),
                $ = 30,
                Q = (B.lazyRender = function () {
                  var t,
                    e,
                    i = I.length;
                  for (F = {}, t = 0; t < i; t++)
                    (e = I[t]) &&
                      !1 !== e._lazy &&
                      (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
                  I.length = 0;
                });
              (W._startTime = l.time),
                (G._startTime = l.frame),
                (W._active = G._active = !0),
                setTimeout(Q, 1),
                (C._updateRoot = R.render =
                  function () {
                    var t, e, i;
                    if (
                      (I.length && Q(),
                      W.render((l.time - W._startTime) * W._timeScale, !1, !1),
                      G.render((l.frame - G._startTime) * G._timeScale, !1, !1),
                      I.length && Q(),
                      l.frame >= $)
                    ) {
                      for (i in (($ =
                        l.frame + (parseInt(R.autoSleep, 10) || 120)),
                      U)) {
                        for (t = (e = U[i].tweens).length; --t > -1; )
                          e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete U[i];
                      }
                      if (
                        (!(i = W._first) || i._paused) &&
                        R.autoSleep &&
                        !G._first &&
                        1 === l._listeners.tick.length
                      ) {
                        for (; i && i._paused; ) i = i._next;
                        i || l.sleep();
                      }
                    }
                  }),
                l.addEventListener("tick", C._updateRoot);
              var Z = function (t, e, i) {
                  var n,
                    r,
                    s = t._gsTweenID;
                  if (
                    (U[s || (t._gsTweenID = s = "t" + H++)] ||
                      (U[s] = { target: t, tweens: [] }),
                    e && (((n = U[s].tweens)[(r = n.length)] = e), i))
                  )
                    for (; --r > -1; ) n[r] === e && n.splice(r, 1);
                  return U[s].tweens;
                },
                K = function (t, e, i, n) {
                  var r,
                    s,
                    o = t.vars.onOverwrite;
                  return (
                    o && (r = o(t, e, i, n)),
                    (o = R.onOverwrite) && (s = o(t, e, i, n)),
                    !1 !== r && !1 !== s
                  );
                },
                J = function (t, e, i, n, r) {
                  var s, o, a, l;
                  if (1 === n || n >= 4) {
                    for (l = r.length, s = 0; s < l; s++)
                      if ((a = r[s]) !== e)
                        a._gc || (a._kill(null, t, e) && (o = !0));
                      else if (5 === n) break;
                    return o;
                  }
                  var u,
                    h = e._startTime + 1e-8,
                    c = [],
                    f = 0,
                    p = 0 === e._duration;
                  for (s = r.length; --s > -1; )
                    (a = r[s]) === e ||
                      a._gc ||
                      a._paused ||
                      (a._timeline !== e._timeline
                        ? ((u = u || tt(e, 0, p)),
                          0 === tt(a, u, p) && (c[f++] = a))
                        : a._startTime <= h &&
                          a._startTime + a.totalDuration() / a._timeScale > h &&
                          (((p || !a._initted) && h - a._startTime <= 2e-8) ||
                            (c[f++] = a)));
                  for (s = f; --s > -1; )
                    if (
                      ((l = (a = c[s])._firstPT),
                      2 === n && a._kill(i, t, e) && (o = !0),
                      2 !== n || (!a._firstPT && a._initted && l))
                    ) {
                      if (2 !== n && !K(a, e)) continue;
                      a._enabled(!1, !1) && (o = !0);
                    }
                  return o;
                },
                tt = function (t, e, i) {
                  for (
                    var n = t._timeline, r = n._timeScale, s = t._startTime;
                    n._timeline;

                  ) {
                    if (((s += n._startTime), (r *= n._timeScale), n._paused))
                      return -100;
                    n = n._timeline;
                  }
                  return (s /= r) > e
                    ? s - e
                    : (i && s === e) || (!t._initted && s - e < 2e-8)
                    ? 1e-8
                    : (s += t.totalDuration() / t._timeScale / r) > e + 1e-8
                    ? 0
                    : s - e - 1e-8;
                };
              (a._init = function () {
                var t,
                  e,
                  i,
                  n,
                  r,
                  s,
                  o = this.vars,
                  a = this._overwrittenProps,
                  l = this._duration,
                  u = !!o.immediateRender,
                  h = o.ease,
                  c = this._startAt;
                if (o.startAt) {
                  for (n in (c && (c.render(-1, !0), c.kill()),
                  (r = {}),
                  o.startAt))
                    r[n] = o.startAt[n];
                  if (
                    ((r.data = "isStart"),
                    (r.overwrite = !1),
                    (r.immediateRender = !0),
                    (r.lazy = u && !1 !== o.lazy),
                    (r.startAt = r.delay = null),
                    (r.onUpdate = o.onUpdate),
                    (r.onUpdateParams = o.onUpdateParams),
                    (r.onUpdateScope =
                      o.onUpdateScope || o.callbackScope || this),
                    (this._startAt = R.to(this.target || {}, 0, r)),
                    u)
                  )
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return;
                } else if (o.runBackwards && 0 !== l)
                  if (c) c.render(-1, !0), c.kill(), (this._startAt = null);
                  else {
                    for (n in (0 !== this._time && (u = !1), (i = {}), o))
                      (q[n] && "autoCSS" !== n) || (i[n] = o[n]);
                    if (
                      ((i.overwrite = 0),
                      (i.data = "isFromStart"),
                      (i.lazy = u && !1 !== o.lazy),
                      (i.immediateRender = u),
                      (this._startAt = R.to(this.target, 0, i)),
                      u)
                    ) {
                      if (0 === this._time) return;
                    } else
                      this._startAt._init(),
                        this._startAt._enabled(!1),
                        this.vars.immediateRender && (this._startAt = null);
                  }
                if (
                  ((this._ease = h =
                    h
                      ? h instanceof w
                        ? h
                        : "function" == typeof h
                        ? new w(h, o.easeParams)
                        : T[h] || R.defaultEase
                      : R.defaultEase),
                  o.easeParams instanceof Array &&
                    h.config &&
                    (this._ease = h.config.apply(h, o.easeParams)),
                  (this._easeType = this._ease._type),
                  (this._easePower = this._ease._power),
                  (this._firstPT = null),
                  this._targets)
                )
                  for (s = this._targets.length, t = 0; t < s; t++)
                    this._initProps(
                      this._targets[t],
                      (this._propLookup[t] = {}),
                      this._siblings[t],
                      a ? a[t] : null,
                      t
                    ) && (e = !0);
                else
                  e = this._initProps(
                    this.target,
                    this._propLookup,
                    this._siblings,
                    a,
                    0
                  );
                if (
                  (e && R._onPluginEvent("_onInitAllProps", this),
                  a &&
                    (this._firstPT ||
                      ("function" != typeof this.target &&
                        this._enabled(!1, !1))),
                  o.runBackwards)
                )
                  for (i = this._firstPT; i; )
                    (i.s += i.c), (i.c = -i.c), (i = i._next);
                (this._onUpdate = o.onUpdate), (this._initted = !0);
              }),
                (a._initProps = function (e, i, n, r, s) {
                  var o, a, l, u, h, c;
                  if (null == e) return !1;
                  for (o in (F[e._gsTweenID] && Q(),
                  this.vars.css ||
                    (e.style &&
                      e !== t &&
                      e.nodeType &&
                      Y.css &&
                      !1 !== this.vars.autoCSS &&
                      (function (t, e) {
                        var i,
                          n = {};
                        for (i in t)
                          q[i] ||
                            (i in e &&
                              "transform" !== i &&
                              "x" !== i &&
                              "y" !== i &&
                              "width" !== i &&
                              "height" !== i &&
                              "className" !== i &&
                              "border" !== i) ||
                            !(!Y[i] || (Y[i] && Y[i]._autoCSS)) ||
                            ((n[i] = t[i]), delete t[i]);
                        t.css = n;
                      })(this.vars, e)),
                  this.vars))
                    if (((c = this.vars[o]), q[o]))
                      c &&
                        (c instanceof Array || (c.push && _(c))) &&
                        -1 !== c.join("").indexOf("{self}") &&
                        (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (
                      Y[o] &&
                      (u = new Y[o]())._onInitTween(e, this.vars[o], this, s)
                    ) {
                      for (
                        this._firstPT = h =
                          {
                            _next: this._firstPT,
                            t: u,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: u._priority,
                            m: 0,
                          },
                          a = u._overwriteProps.length;
                        --a > -1;

                      )
                        i[u._overwriteProps[a]] = this._firstPT;
                      (u._priority || u._onInitAllProps) && (l = !0),
                        (u._onDisable || u._onEnable) &&
                          (this._notifyPluginsOfEnabled = !0),
                        h._next && (h._next._prev = h);
                    } else
                      i[o] = X.call(
                        this,
                        e,
                        o,
                        "get",
                        c,
                        o,
                        0,
                        null,
                        this.vars.stringFilter,
                        s
                      );
                  return r && this._kill(r, e)
                    ? this._initProps(e, i, n, r, s)
                    : this._overwrite > 1 &&
                      this._firstPT &&
                      n.length > 1 &&
                      J(e, this, i, this._overwrite, n)
                    ? (this._kill(i, e), this._initProps(e, i, n, r, s))
                    : (this._firstPT &&
                        ((!1 !== this.vars.lazy && this._duration) ||
                          (this.vars.lazy && !this._duration)) &&
                        (F[e._gsTweenID] = !0),
                      l);
                }),
                (a.render = function (t, e, i) {
                  var n,
                    r,
                    s,
                    o,
                    a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                  if (t >= l - 1e-8 && t >= 0)
                    (this._totalTime = this._time = l),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(1)
                        : 1),
                      this._reversed ||
                        ((n = !0),
                        (r = "onComplete"),
                        (i = i || this._timeline.autoRemoveChildren)),
                      0 === l &&
                        (this._initted || !this.vars.lazy || i) &&
                        (this._startTime === this._timeline._duration &&
                          (t = 0),
                        (u < 0 ||
                          (t <= 0 && t >= -1e-8) ||
                          (1e-8 === u && "isPause" !== this.data)) &&
                          u !== t &&
                          ((i = !0), u > 1e-8 && (r = "onReverseComplete")),
                        (this._rawPrevTime = o =
                          !e || t || u === t ? t : 1e-8));
                  else if (t < 1e-8)
                    (this._totalTime = this._time = 0),
                      (this.ratio = this._ease._calcEnd
                        ? this._ease.getRatio(0)
                        : 0),
                      (0 !== a || (0 === l && u > 0)) &&
                        ((r = "onReverseComplete"), (n = this._reversed)),
                      t > -1e-8
                        ? (t = 0)
                        : t < 0 &&
                          ((this._active = !1),
                          0 === l &&
                            (this._initted || !this.vars.lazy || i) &&
                            (u >= 0 &&
                              (1e-8 !== u || "isPause" !== this.data) &&
                              (i = !0),
                            (this._rawPrevTime = o =
                              !e || t || u === t ? t : 1e-8))),
                      (!this._initted ||
                        (this._startAt && this._startAt.progress())) &&
                        (i = !0);
                  else if (
                    ((this._totalTime = this._time = t), this._easeType)
                  ) {
                    var h = t / l,
                      c = this._easeType,
                      f = this._easePower;
                    (1 === c || (3 === c && h >= 0.5)) && (h = 1 - h),
                      3 === c && (h *= 2),
                      1 === f
                        ? (h *= h)
                        : 2 === f
                        ? (h *= h * h)
                        : 3 === f
                        ? (h *= h * h * h)
                        : 4 === f && (h *= h * h * h * h),
                      (this.ratio =
                        1 === c
                          ? 1 - h
                          : 2 === c
                          ? h
                          : t / l < 0.5
                          ? h / 2
                          : 1 - h / 2);
                  } else this.ratio = this._ease.getRatio(t / l);
                  if (this._time !== a || i) {
                    if (!this._initted) {
                      if ((this._init(), !this._initted || this._gc)) return;
                      if (
                        !i &&
                        this._firstPT &&
                        ((!1 !== this.vars.lazy && this._duration) ||
                          (this.vars.lazy && !this._duration))
                      )
                        return (
                          (this._time = this._totalTime = a),
                          (this._rawPrevTime = u),
                          I.push(this),
                          void (this._lazy = [t, e])
                        );
                      this._time && !n
                        ? (this.ratio = this._ease.getRatio(this._time / l))
                        : n &&
                          this._ease._calcEnd &&
                          (this.ratio = this._ease.getRatio(
                            0 === this._time ? 0 : 1
                          ));
                    }
                    for (
                      !1 !== this._lazy && (this._lazy = !1),
                        this._active ||
                          (!this._paused &&
                            this._time !== a &&
                            t >= 0 &&
                            (this._active = !0)),
                        0 === a &&
                          (this._startAt &&
                            (t >= 0
                              ? this._startAt.render(t, !0, i)
                              : r || (r = "_dummyGS")),
                          this.vars.onStart &&
                            ((0 === this._time && 0 !== l) ||
                              e ||
                              this._callback("onStart"))),
                        s = this._firstPT;
                      s;

                    )
                      s.f
                        ? s.t[s.p](s.c * this.ratio + s.s)
                        : (s.t[s.p] = s.c * this.ratio + s.s),
                        (s = s._next);
                    this._onUpdate &&
                      (t < 0 &&
                        this._startAt &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      e ||
                        ((this._time !== a || n || i) &&
                          this._callback("onUpdate"))),
                      r &&
                        ((this._gc && !i) ||
                          (t < 0 &&
                            this._startAt &&
                            !this._onUpdate &&
                            -1e-4 !== t &&
                            this._startAt.render(t, !0, i),
                          n &&
                            (this._timeline.autoRemoveChildren &&
                              this._enabled(!1, !1),
                            (this._active = !1)),
                          !e && this.vars[r] && this._callback(r),
                          0 === l &&
                            1e-8 === this._rawPrevTime &&
                            1e-8 !== o &&
                            (this._rawPrevTime = 0)));
                  }
                }),
                (a._kill = function (t, e, i) {
                  if (
                    ("all" === t && (t = null),
                    null == t && (null == e || e === this.target))
                  )
                    return (this._lazy = !1), this._enabled(!1, !1);
                  e =
                    "string" != typeof e
                      ? e || this._targets || this.target
                      : R.selector(e) || e;
                  var n,
                    s,
                    o,
                    a,
                    l,
                    u,
                    h,
                    c,
                    f,
                    p =
                      i &&
                      this._time &&
                      i._startTime === this._startTime &&
                      this._timeline === i._timeline,
                    d = this._firstPT;
                  if ((_(e) || M(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1; )
                      this._kill(t, e[n], i) && (u = !0);
                  else {
                    if (this._targets) {
                      for (n = this._targets.length; --n > -1; )
                        if (e === this._targets[n]) {
                          (l = this._propLookup[n] || {}),
                            (this._overwrittenProps =
                              this._overwrittenProps || []),
                            (s = this._overwrittenProps[n] =
                              t ? this._overwrittenProps[n] || {} : "all");
                          break;
                        }
                    } else {
                      if (e !== this.target) return !1;
                      (l = this._propLookup),
                        (s = this._overwrittenProps =
                          t ? this._overwrittenProps || {} : "all");
                    }
                    if (l) {
                      if (
                        ((h = t || l),
                        (c =
                          t !== s &&
                          "all" !== s &&
                          t !== l &&
                          ("object" !== (void 0 === t ? "undefined" : r(t)) ||
                            !t._tempKill)),
                        i && (R.onOverwrite || this.vars.onOverwrite))
                      ) {
                        for (o in h) l[o] && (f || (f = []), f.push(o));
                        if ((f || !t) && !K(this, i, e, f)) return !1;
                      }
                      for (o in h)
                        (a = l[o]) &&
                          (p &&
                            (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (u = !0)),
                          a.pg && a.t._kill(h) && (u = !0),
                          (a.pg && 0 !== a.t._overwriteProps.length) ||
                            (a._prev
                              ? (a._prev._next = a._next)
                              : a === this._firstPT &&
                                (this._firstPT = a._next),
                            a._next && (a._next._prev = a._prev),
                            (a._next = a._prev = null)),
                          delete l[o]),
                          c && (s[o] = 1);
                      !this._firstPT &&
                        this._initted &&
                        d &&
                        this._enabled(!1, !1);
                    }
                  }
                  return u;
                }),
                (a.invalidate = function () {
                  this._notifyPluginsOfEnabled &&
                    R._onPluginEvent("_onDisable", this);
                  var t = this._time;
                  return (
                    (this._firstPT =
                      this._overwrittenProps =
                      this._startAt =
                      this._onUpdate =
                        null),
                    (this._notifyPluginsOfEnabled =
                      this._active =
                      this._lazy =
                        !1),
                    (this._propLookup = this._targets ? {} : []),
                    C.prototype.invalidate.call(this),
                    this.vars.immediateRender &&
                      ((this._time = -1e-8),
                      this.render(t, !1, !1 !== this.vars.lazy)),
                    this
                  );
                }),
                (a._enabled = function (t, e) {
                  if ((u || l.wake(), t && this._gc)) {
                    var i,
                      n = this._targets;
                    if (n)
                      for (i = n.length; --i > -1; )
                        this._siblings[i] = Z(n[i], this, !0);
                    else this._siblings = Z(this.target, this, !0);
                  }
                  return (
                    C.prototype._enabled.call(this, t, e),
                    !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                      R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                  );
                }),
                (R.to = function (t, e, i) {
                  return new R(t, e, i);
                }),
                (R.from = function (t, e, i) {
                  return (
                    (i.runBackwards = !0),
                    (i.immediateRender = 0 != i.immediateRender),
                    new R(t, e, i)
                  );
                }),
                (R.fromTo = function (t, e, i, n) {
                  return (
                    (n.startAt = i),
                    (n.immediateRender =
                      0 != n.immediateRender && 0 != i.immediateRender),
                    new R(t, e, n)
                  );
                }),
                (R.delayedCall = function (t, e, i, n, r) {
                  return new R(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0,
                  });
                }),
                (R.set = function (t, e) {
                  return new R(t, 0, e);
                }),
                (R.getTweensOf = function (t, e) {
                  if (null == t) return [];
                  var i, n, r, s;
                  if (
                    ((t = "string" != typeof t ? t : R.selector(t) || t),
                    (_(t) || M(t)) && "number" != typeof t[0])
                  ) {
                    for (i = t.length, n = []; --i > -1; )
                      n = n.concat(R.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1; )
                      for (s = n[i], r = i; --r > -1; )
                        s === n[r] && n.splice(i, 1);
                  } else if (t._gsTweenID)
                    for (i = (n = Z(t).concat()).length; --i > -1; )
                      (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
                  return n || [];
                }),
                (R.killTweensOf = R.killDelayedCallsTo =
                  function (t, e, i) {
                    "object" === (void 0 === e ? "undefined" : r(e)) &&
                      ((i = e), (e = !1));
                    for (var n = R.getTweensOf(t, e), s = n.length; --s > -1; )
                      n[s]._kill(i, t);
                  });
              var et = y(
                "plugins.TweenPlugin",
                function (t, e) {
                  (this._overwriteProps = (t || "").split(",")),
                    (this._propName = this._overwriteProps[0]),
                    (this._priority = e || 0),
                    (this._super = et.prototype);
                },
                !0
              );
              if (
                ((a = et.prototype),
                (et.version = "1.19.0"),
                (et.API = 2),
                (a._firstPT = null),
                (a._addTween = X),
                (a.setRatio = z),
                (a._kill = function (t) {
                  var e,
                    i = this._overwriteProps,
                    n = this._firstPT;
                  if (null != t[this._propName]) this._overwriteProps = [];
                  else
                    for (e = i.length; --e > -1; )
                      null != t[i[e]] && i.splice(e, 1);
                  for (; n; )
                    null != t[n.n] &&
                      (n._next && (n._next._prev = n._prev),
                      n._prev
                        ? ((n._prev._next = n._next), (n._prev = null))
                        : this._firstPT === n && (this._firstPT = n._next)),
                      (n = n._next);
                  return !1;
                }),
                (a._mod = a._roundProps =
                  function (t) {
                    for (var e, i = this._firstPT; i; )
                      (e =
                        t[this._propName] ||
                        (null != i.n &&
                          t[i.n.split(this._propName + "_").join("")])) &&
                        "function" == typeof e &&
                        (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                        (i = i._next);
                  }),
                (R._onPluginEvent = function (t, e) {
                  var i,
                    n,
                    r,
                    s,
                    o,
                    a = e._firstPT;
                  if ("_onInitAllProps" === t) {
                    for (; a; ) {
                      for (o = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
                      (a._prev = n ? n._prev : s)
                        ? (a._prev._next = a)
                        : (r = a),
                        (a._next = n) ? (n._prev = a) : (s = a),
                        (a = o);
                    }
                    a = e._firstPT = r;
                  }
                  for (; a; )
                    a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                      (a = a._next);
                  return i;
                }),
                (et.activate = function (t) {
                  for (var e = t.length; --e > -1; )
                    t[e].API === et.API && (Y[new t[e]()._propName] = t[e]);
                  return !0;
                }),
                (v.plugin = function (t) {
                  if (!(t && t.propName && t.init && t.API))
                    throw "illegal plugin definition.";
                  var e,
                    i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = {
                      init: "_onInitTween",
                      set: "setRatio",
                      kill: "_kill",
                      round: "_mod",
                      mod: "_mod",
                      initAll: "_onInitAllProps",
                    },
                    o = y(
                      "plugins." +
                        i.charAt(0).toUpperCase() +
                        i.substr(1) +
                        "Plugin",
                      function () {
                        et.call(this, i, n), (this._overwriteProps = r || []);
                      },
                      !0 === t.global
                    ),
                    a = (o.prototype = new et(i));
                  for (e in ((a.constructor = o), (o.API = t.API), s))
                    "function" == typeof t[e] && (a[s[e]] = t[e]);
                  return (o.version = t.version), et.activate([o]), o;
                }),
                (s = t._gsQueue))
              ) {
                for (o = 0; o < s.length; o++) s[o]();
                for (a in g)
                  g[a].func ||
                    t.console.log("GSAP encountered missing dependency: " + a);
              }
              return (u = !1), R;
            })(s),
            a = s.GreenSockGlobals,
            l = a.com.greensock,
            u = l.core.SimpleTimeline,
            h = l.core.Animation,
            c = a.Ease,
            f = a.Linear,
            p = f,
            d = a.Power1,
            m = a.Power2,
            _ = a.Power3,
            g = a.Power4,
            v = a.TweenPlugin,
            y = l.events.EventDispatcher;
        }.call(this, i(18)(t), i(3));
    },
    function (t, e, i) {
      (function (i) {
        var n,
          r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
        !(function (i, s) {
          "use strict";
          var o = {},
            a = i.document,
            l = (i.GreenSockGlobals = i.GreenSockGlobals || i),
            u = l.TweenLite;
          if (u) return void 0 !== t && t.exports && (t.exports = u), u;
          var h,
            c,
            f,
            p,
            d,
            m,
            _,
            g = function (t) {
              var e,
                i = t.split("."),
                n = l;
              for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
              return n;
            },
            v = g("com.greensock"),
            y = function (t) {
              var e,
                i = [],
                n = t.length;
              for (e = 0; e !== n; i.push(t[e++]));
              return i;
            },
            x = function () {},
            w =
              ((m = Object.prototype.toString),
              (_ = m.call([])),
              function (t) {
                return (
                  null != t &&
                  (t instanceof Array ||
                    ("object" === (void 0 === t ? "undefined" : r(t)) &&
                      !!t.push &&
                      m.call(t) === _))
                );
              }),
            T = {},
            b = (i._gsDefine = function (i, r, s, a) {
              return new (function i(r, s, a, u) {
                (this.sc = T[r] ? T[r].sc : []),
                  (T[r] = this),
                  (this.gsClass = null),
                  (this.func = a);
                var h = [];
                (this.check = function (c) {
                  for (var f, p, d, m, _ = s.length, v = _; --_ > -1; )
                    (f = T[s[_]] || new i(s[_], [])).gsClass
                      ? ((h[_] = f.gsClass), v--)
                      : c && f.sc.push(this);
                  if (0 === v && a) {
                    if (
                      ((d = (p = ("com.greensock." + r).split(".")).pop()),
                      (m = g(p.join("."))[d] = this.gsClass = a.apply(a, h)),
                      u)
                    )
                      if (((l[d] = o[d] = m), void 0 !== t && t.exports))
                        if ("TweenLite" === r)
                          for (_ in ((t.exports = o.TweenLite = m), o))
                            m[_] = o[_];
                        else o.TweenLite && (o.TweenLite[d] = m);
                      else
                        void 0 ===
                          (n = function () {
                            return m;
                          }.apply(e, [])) || (t.exports = n);
                    for (_ = 0; _ < this.sc.length; _++) this.sc[_].check();
                  }
                }),
                  this.check(!0);
              })(i, r, s, a);
            }),
            P = (v._class = function (t, e, i) {
              return (
                (e = e || function () {}),
                b(
                  t,
                  [],
                  function () {
                    return e;
                  },
                  i
                ),
                e
              );
            });
          b.globals = l;
          var S = [0, 0, 1, 1],
            k = P(
              "easing.Ease",
              function (t, e, i, n) {
                (this._func = t),
                  (this._type = i || 0),
                  (this._power = n || 0),
                  (this._params = e ? S.concat(e) : S);
              },
              !0
            ),
            A = (k.map = {}),
            O = (k.register = function (t, e, i, n) {
              for (
                var r,
                  s,
                  o,
                  a,
                  l = e.split(","),
                  u = l.length,
                  h = (i || "easeIn,easeOut,easeInOut").split(",");
                --u > -1;

              )
                for (
                  s = l[u],
                    r = n ? P("easing." + s, null, !0) : v.easing[s] || {},
                    o = h.length;
                  --o > -1;

                )
                  (a = h[o]),
                    (A[s + "." + a] =
                      A[a + s] =
                      r[a] =
                        t.getRatio ? t : t[a] || new t());
            });
          for (
            (f = k.prototype)._calcEnd = !1,
              f.getRatio = function (t) {
                if (this._func)
                  return (
                    (this._params[0] = t), this._func.apply(null, this._params)
                  );
                var e = this._type,
                  i = this._power,
                  n =
                    1 === e
                      ? 1 - t
                      : 2 === e
                      ? t
                      : t < 0.5
                      ? 2 * t
                      : 2 * (1 - t);
                return (
                  1 === i
                    ? (n *= n)
                    : 2 === i
                    ? (n *= n * n)
                    : 3 === i
                    ? (n *= n * n * n)
                    : 4 === i && (n *= n * n * n * n),
                  1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2
                );
              },
              c = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
                .length;
            --c > -1;

          )
            (f = h[c] + ",Power" + c),
              O(new k(null, null, 1, c), f, "easeOut", !0),
              O(
                new k(null, null, 2, c),
                f,
                "easeIn" + (0 === c ? ",easeNone" : "")
              ),
              O(new k(null, null, 3, c), f, "easeInOut");
          (A.linear = v.easing.Linear.easeIn),
            (A.swing = v.easing.Quad.easeInOut);
          var C = P("events.EventDispatcher", function (t) {
            (this._listeners = {}), (this._eventTarget = t || this);
          });
          ((f = C.prototype).addEventListener = function (t, e, i, n, r) {
            r = r || 0;
            var s,
              o,
              a = this._listeners[t],
              l = 0;
            for (
              this !== p || d || p.wake(),
                null == a && (this._listeners[t] = a = []),
                o = a.length;
              --o > -1;

            )
              (s = a[o]).c === e && s.s === i
                ? a.splice(o, 1)
                : 0 === l && s.pr < r && (l = o + 1);
            a.splice(l, 0, { c: e, s: i, up: n, pr: r });
          }),
            (f.removeEventListener = function (t, e) {
              var i,
                n = this._listeners[t];
              if (n)
                for (i = n.length; --i > -1; )
                  if (n[i].c === e) return void n.splice(i, 1);
            }),
            (f.dispatchEvent = function (t) {
              var e,
                i,
                n,
                r = this._listeners[t];
              if (r)
                for (
                  (e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget;
                  --e > -1;

                )
                  (n = r[e]) &&
                    (n.up
                      ? n.c.call(n.s || i, { type: t, target: i })
                      : n.c.call(n.s || i));
            });
          var E = i.requestAnimationFrame,
            R = i.cancelAnimationFrame,
            M =
              Date.now ||
              function () {
                return new Date().getTime();
              },
            I = M();
          for (c = (h = ["ms", "moz", "webkit", "o"]).length; --c > -1 && !E; )
            (E = i[h[c] + "RequestAnimationFrame"]),
              (R =
                i[h[c] + "CancelAnimationFrame"] ||
                i[h[c] + "CancelRequestAnimationFrame"]);
          P("Ticker", function (t, e) {
            var i,
              n,
              r,
              s,
              o,
              l = this,
              u = M(),
              h = !(!1 === e || !E) && "auto",
              c = 500,
              f = 33,
              m = function t(e) {
                var a,
                  h,
                  p = M() - I;
                p > c && (u += p - f),
                  (I += p),
                  (l.time = (I - u) / 1e3),
                  (a = l.time - o),
                  (!i || a > 0 || !0 === e) &&
                    (l.frame++, (o += a + (a >= s ? 0.004 : s - a)), (h = !0)),
                  !0 !== e && (r = n(t)),
                  h && l.dispatchEvent("tick");
              };
            C.call(l),
              (l.time = l.frame = 0),
              (l.tick = function () {
                m(!0);
              }),
              (l.lagSmoothing = function (t, e) {
                if (!arguments.length) return c < 1e8;
                (c = t || 1e8), (f = Math.min(e, c, 0));
              }),
              (l.sleep = function () {
                null != r &&
                  (h && R ? R(r) : clearTimeout(r),
                  (n = x),
                  (r = null),
                  l === p && (d = !1));
              }),
              (l.wake = function (t) {
                null !== r
                  ? l.sleep()
                  : t
                  ? (u += -I + (I = M()))
                  : l.frame > 10 && (I = M() - c + 5),
                  (n =
                    0 === i
                      ? x
                      : h && E
                      ? E
                      : function (t) {
                          return setTimeout(t, (1e3 * (o - l.time) + 1) | 0);
                        }),
                  l === p && (d = !0),
                  m(2);
              }),
              (l.fps = function (t) {
                if (!arguments.length) return i;
                (s = 1 / ((i = t) || 60)), (o = this.time + s), l.wake();
              }),
              (l.useRAF = function (t) {
                if (!arguments.length) return h;
                l.sleep(), (h = t), l.fps(i);
              }),
              l.fps(t),
              setTimeout(function () {
                "auto" === h &&
                  l.frame < 5 &&
                  "hidden" !== (a || {}).visibilityState &&
                  l.useRAF(!1);
              }, 1500);
          }),
            ((f = v.Ticker.prototype =
              new v.events.EventDispatcher()).constructor = v.Ticker);
          var F = P("core.Animation", function (t, e) {
            if (
              ((this.vars = e = e || {}),
              (this._duration = this._totalDuration = t || 0),
              (this._delay = Number(e.delay) || 0),
              (this._timeScale = 1),
              (this._active = !!e.immediateRender),
              (this.data = e.data),
              (this._reversed = !!e.reversed),
              J)
            ) {
              d || p.wake();
              var i = this.vars.useFrames ? K : J;
              i.add(this, i._time), this.vars.paused && this.paused(!0);
            }
          });
          (p = F.ticker = new v.Ticker()),
            ((f = F.prototype)._dirty = f._gc = f._initted = f._paused = !1),
            (f._totalTime = f._time = 0),
            (f._rawPrevTime = -1),
            (f._next = f._last = f._onUpdate = f._timeline = f.timeline = null),
            (f._paused = !1),
            (function t() {
              d &&
                M() - I > 2e3 &&
                ("hidden" !== (a || {}).visibilityState || !p.lagSmoothing()) &&
                p.wake();
              var e = setTimeout(t, 2e3);
              e.unref && e.unref();
            })(),
            (f.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (f.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (f.resume = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!1);
            }),
            (f.seek = function (t, e) {
              return this.totalTime(Number(t), !1 !== e);
            }),
            (f.restart = function (t, e) {
              return this.reversed(!1)
                .paused(!1)
                .totalTime(t ? -this._delay : 0, !1 !== e, !0);
            }),
            (f.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (f.render = function (t, e, i) {}),
            (f.invalidate = function () {
              return (
                (this._time = this._totalTime = 0),
                (this._initted = this._gc = !1),
                (this._rawPrevTime = -1),
                (!this._gc && this.timeline) || this._enabled(!0),
                this
              );
            }),
            (f.isActive = function () {
              var t,
                e = this._timeline,
                i = this._startTime;
              return (
                !e ||
                (!this._gc &&
                  !this._paused &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= i &&
                  t < i + this.totalDuration() / this._timeScale - 1e-8)
              );
            }),
            (f._enabled = function (t, e) {
              return (
                d || p.wake(),
                (this._gc = !t),
                (this._active = this.isActive()),
                !0 !== e &&
                  (t && !this.timeline
                    ? this._timeline.add(this, this._startTime - this._delay)
                    : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
              );
            }),
            (f._kill = function (t, e) {
              return this._enabled(!1, !1);
            }),
            (f.kill = function (t, e) {
              return this._kill(t, e), this;
            }),
            (f._uncache = function (t) {
              for (var e = t ? this : this.timeline; e; )
                (e._dirty = !0), (e = e.timeline);
              return this;
            }),
            (f._swapSelfInParams = function (t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i;
            }),
            (f._callback = function (t) {
              var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
              switch (n ? n.length : 0) {
                case 0:
                  i.call(r);
                  break;
                case 1:
                  i.call(r, n[0]);
                  break;
                case 2:
                  i.call(r, n[0], n[1]);
                  break;
                default:
                  i.apply(r, n);
              }
            }),
            (f.eventCallback = function (t, e, i, n) {
              if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e
                  ? delete r[t]
                  : ((r[t] = e),
                    (r[t + "Params"] =
                      w(i) && -1 !== i.join("").indexOf("{self}")
                        ? this._swapSelfInParams(i)
                        : i),
                    (r[t + "Scope"] = n)),
                  "onUpdate" === t && (this._onUpdate = e);
              }
              return this;
            }),
            (f.delay = function (t) {
              return arguments.length
                ? (this._timeline.smoothChildTiming &&
                    this.startTime(this._startTime + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (f.duration = function (t) {
              return arguments.length
                ? ((this._duration = this._totalDuration = t),
                  this._uncache(!0),
                  this._timeline.smoothChildTiming &&
                    this._time > 0 &&
                    this._time < this._duration &&
                    0 !== t &&
                    this.totalTime(this._totalTime * (t / this._duration), !0),
                  this)
                : ((this._dirty = !1), this._duration);
            }),
            (f.totalDuration = function (t) {
              return (
                (this._dirty = !1),
                arguments.length ? this.duration(t) : this._totalDuration
              );
            }),
            (f.time = function (t, e) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e))
                : this._time;
            }),
            (f.totalTime = function (t, e, i) {
              if ((d || p.wake(), !arguments.length)) return this._totalTime;
              if (this._timeline) {
                if (
                  (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming)
                ) {
                  this._dirty && this.totalDuration();
                  var n = this._totalDuration,
                    r = this._timeline;
                  if (
                    (t > n && !i && (t = n),
                    (this._startTime =
                      (this._paused ? this._pauseTime : r._time) -
                      (this._reversed ? n - t : t) / this._timeScale),
                    r._dirty || this._uncache(!1),
                    r._timeline)
                  )
                    for (; r._timeline; )
                      r._timeline._time !==
                        (r._startTime + r._totalTime) / r._timeScale &&
                        r.totalTime(r._totalTime, !0),
                        (r = r._timeline);
                }
                this._gc && this._enabled(!0, !1),
                  (this._totalTime === t && 0 !== this._duration) ||
                    (L.length && et(), this.render(t, e, !1), L.length && et());
              }
              return this;
            }),
            (f.progress = f.totalProgress =
              function (t, e) {
                var i = this.duration();
                return arguments.length
                  ? this.totalTime(i * t, e)
                  : i
                  ? this._time / i
                  : this.ratio;
              }),
            (f.startTime = function (t) {
              return arguments.length
                ? (t !== this._startTime &&
                    ((this._startTime = t),
                    this.timeline &&
                      this.timeline._sortChildren &&
                      this.timeline.add(this, t - this._delay)),
                  this)
                : this._startTime;
            }),
            (f.endTime = function (t) {
              return (
                this._startTime +
                (0 != t ? this.totalDuration() : this.duration()) /
                  this._timeScale
              );
            }),
            (f.timeScale = function (t) {
              if (!arguments.length) return this._timeScale;
              var e, i;
              for (
                t = t || 1e-8,
                  this._timeline &&
                    this._timeline.smoothChildTiming &&
                    ((i =
                      (e = this._pauseTime) || 0 === e
                        ? e
                        : this._timeline.totalTime()),
                    (this._startTime =
                      i - ((i - this._startTime) * this._timeScale) / t)),
                  this._timeScale = t,
                  i = this.timeline;
                i && i.timeline;

              )
                (i._dirty = !0), i.totalDuration(), (i = i.timeline);
              return this;
            }),
            (f.reversed = function (t) {
              return arguments.length
                ? (t != this._reversed &&
                    ((this._reversed = t),
                    this.totalTime(
                      this._timeline && !this._timeline.smoothChildTiming
                        ? this.totalDuration() - this._totalTime
                        : this._totalTime,
                      !0
                    )),
                  this)
                : this._reversed;
            }),
            (f.paused = function (t) {
              if (!arguments.length) return this._paused;
              var e,
                i,
                n = this._timeline;
              return (
                t != this._paused &&
                  n &&
                  (d || t || p.wake(),
                  (i = (e = n.rawTime()) - this._pauseTime),
                  !t &&
                    n.smoothChildTiming &&
                    ((this._startTime += i), this._uncache(!1)),
                  (this._pauseTime = t ? e : null),
                  (this._paused = t),
                  (this._active = this.isActive()),
                  !t &&
                    0 !== i &&
                    this._initted &&
                    this.duration() &&
                    ((e = n.smoothChildTiming
                      ? this._totalTime
                      : (e - this._startTime) / this._timeScale),
                    this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                this
              );
            });
          var N = P("core.SimpleTimeline", function (t) {
            F.call(this, 0, t),
              (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((f = N.prototype = new F()).constructor = N),
            (f.kill()._gc = !1),
            (f._first = f._last = f._recent = null),
            (f._sortChildren = !1),
            (f.add = f.insert =
              function (t, e, i, n) {
                var r, s;
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused &&
                    this !== t._timeline &&
                    (t._pauseTime =
                      this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (r = this._last),
                  this._sortChildren)
                )
                  for (s = t._startTime; r && r._startTime > s; ) r = r._prev;
                return (
                  r
                    ? ((t._next = r._next), (r._next = t))
                    : ((t._next = this._first), (this._first = t)),
                  t._next ? (t._next._prev = t) : (this._last = t),
                  (t._prev = r),
                  (this._recent = t),
                  this._timeline && this._uncache(!0),
                  this
                );
              }),
            (f._remove = function (t, e) {
              return (
                t.timeline === this &&
                  (e || t._enabled(!1, !0),
                  t._prev
                    ? (t._prev._next = t._next)
                    : this._first === t && (this._first = t._next),
                  t._next
                    ? (t._next._prev = t._prev)
                    : this._last === t && (this._last = t._prev),
                  (t._next = t._prev = t.timeline = null),
                  t === this._recent && (this._recent = this._last),
                  this._timeline && this._uncache(!0)),
                this
              );
            }),
            (f.render = function (t, e, i) {
              var n,
                r = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                (n = r._next),
                  (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
                    (r._reversed
                      ? r.render(
                          (r._dirty ? r.totalDuration() : r._totalDuration) -
                            (t - r._startTime) * r._timeScale,
                          e,
                          i
                        )
                      : r.render((t - r._startTime) * r._timeScale, e, i)),
                  (r = n);
            }),
            (f.rawTime = function () {
              return d || p.wake(), this._totalTime;
            });
          var D = P(
              "TweenLite",
              function (t, e, n) {
                if (
                  (F.call(this, e, n),
                  (this.render = D.prototype.render),
                  null == t)
                )
                  throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : D.selector(t) || t;
                var r,
                  s,
                  o,
                  a =
                    t.jquery ||
                    (t.length &&
                      t !== i &&
                      t[0] &&
                      (t[0] === i ||
                        (t[0].nodeType && t[0].style && !t.nodeType))),
                  l = this.vars.overwrite;
                if (
                  ((this._overwrite = l =
                    null == l
                      ? Z[D.defaultOverwrite]
                      : "number" == typeof l
                      ? l >> 0
                      : Z[l]),
                  (a || t instanceof Array || (t.push && w(t))) &&
                    "number" != typeof t[0])
                )
                  for (
                    this._targets = o = y(t),
                      this._propLookup = [],
                      this._siblings = [],
                      r = 0;
                    r < o.length;
                    r++
                  )
                    (s = o[r])
                      ? "string" != typeof s
                        ? s.length &&
                          s !== i &&
                          s[0] &&
                          (s[0] === i ||
                            (s[0].nodeType && s[0].style && !s.nodeType))
                          ? (o.splice(r--, 1),
                            (this._targets = o = o.concat(y(s))))
                          : ((this._siblings[r] = it(s, this, !1)),
                            1 === l &&
                              this._siblings[r].length > 1 &&
                              rt(s, this, null, 1, this._siblings[r]))
                        : "string" == typeof (s = o[r--] = D.selector(s)) &&
                          o.splice(r + 1, 1)
                      : o.splice(r--, 1);
                else
                  (this._propLookup = {}),
                    (this._siblings = it(t, this, !1)),
                    1 === l &&
                      this._siblings.length > 1 &&
                      rt(t, this, null, 1, this._siblings);
                (this.vars.immediateRender ||
                  (0 === e &&
                    0 === this._delay &&
                    !1 !== this.vars.immediateRender)) &&
                  ((this._time = -1e-8),
                  this.render(Math.min(0, -this._delay)));
              },
              !0
            ),
            z = function (t) {
              return (
                t &&
                t.length &&
                t !== i &&
                t[0] &&
                (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType))
              );
            };
          ((f = D.prototype = new F()).constructor = D),
            (f.kill()._gc = !1),
            (f.ratio = 0),
            (f._firstPT = f._targets = f._overwrittenProps = f._startAt = null),
            (f._notifyPluginsOfEnabled = f._lazy = !1),
            (D.version = "2.1.3"),
            (D.defaultEase = f._ease = new k(null, null, 1, 1)),
            (D.defaultOverwrite = "auto"),
            (D.ticker = p),
            (D.autoSleep = 120),
            (D.lagSmoothing = function (t, e) {
              p.lagSmoothing(t, e);
            }),
            (D.selector =
              i.$ ||
              i.jQuery ||
              function (t) {
                var e = i.$ || i.jQuery;
                return e
                  ? ((D.selector = e), e(t))
                  : (a || (a = i.document),
                    a
                      ? a.querySelectorAll
                        ? a.querySelectorAll(t)
                        : a.getElementById(
                            "#" === t.charAt(0) ? t.substr(1) : t
                          )
                      : t);
              });
          var L = [],
            j = {},
            X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            B = /[\+-]=-?[\.\d]/,
            Y = function (t) {
              for (var e, i = this._firstPT; i; )
                (e = i.blob
                  ? 1 === t && null != this.end
                    ? this.end
                    : t
                    ? this.join("")
                    : this.start
                  : i.c * t + i.s),
                  i.m
                    ? (e = i.m.call(
                        this._tween,
                        e,
                        this._target || i.t,
                        this._tween
                      ))
                    : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f
                    ? i.fp
                      ? i.t[i.p](i.fp, e)
                      : i.t[i.p](e)
                    : (i.t[i.p] = e),
                  (i = i._next);
            },
            U = function (t) {
              return ((1e3 * t) | 0) / 1e3 + "";
            },
            H = function (t, e, i, n) {
              var r,
                s,
                o,
                a,
                l,
                u,
                h,
                c = [],
                f = 0,
                p = "",
                d = 0;
              for (
                c.start = t,
                  c.end = e,
                  t = c[0] = t + "",
                  e = c[1] = e + "",
                  i && (i(c), (t = c[0]), (e = c[1])),
                  c.length = 0,
                  r = t.match(X) || [],
                  s = e.match(X) || [],
                  n &&
                    ((n._next = null),
                    (n.blob = 1),
                    (c._firstPT = c._applyPT = n)),
                  l = s.length,
                  a = 0;
                a < l;
                a++
              )
                (h = s[a]),
                  (p += (u = e.substr(f, e.indexOf(h, f) - f)) || !a ? u : ","),
                  (f += u.length),
                  d ? (d = (d + 1) % 5) : "rgba(" === u.substr(-5) && (d = 1),
                  h === r[a] || r.length <= a
                    ? (p += h)
                    : (p && (c.push(p), (p = "")),
                      (o = parseFloat(r[a])),
                      c.push(o),
                      (c._firstPT = {
                        _next: c._firstPT,
                        t: c,
                        p: c.length - 1,
                        s: o,
                        c:
                          ("=" === h.charAt(1)
                            ? parseInt(h.charAt(0) + "1", 10) *
                              parseFloat(h.substr(2))
                            : parseFloat(h) - o) || 0,
                        f: 0,
                        m: d && d < 4 ? Math.round : U,
                      })),
                  (f += h.length);
              return (
                (p += e.substr(f)) && c.push(p),
                (c.setRatio = Y),
                B.test(e) && (c.end = null),
                c
              );
            },
            q = function (t, e, i, n, s, o, a, l, u) {
              "function" == typeof n && (n = n(u || 0, t));
              var h = r(t[e]),
                c =
                  "function" !== h
                    ? ""
                    : e.indexOf("set") ||
                      "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3),
                f = "get" !== i ? i : c ? (a ? t[c](a) : t[c]()) : t[e],
                p = "string" == typeof n && "=" === n.charAt(1),
                d = {
                  t: t,
                  p: e,
                  s: f,
                  f: "function" === h,
                  pg: 0,
                  n: s || e,
                  m: o ? ("function" == typeof o ? o : Math.round) : 0,
                  pr: 0,
                  c: p
                    ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2))
                    : parseFloat(n) - f || 0,
                };
              if (
                (("number" != typeof f || ("number" != typeof n && !p)) &&
                  (a ||
                  isNaN(f) ||
                  (!p && isNaN(n)) ||
                  "boolean" == typeof f ||
                  "boolean" == typeof n
                    ? ((d.fp = a),
                      (d = {
                        t: H(
                          f,
                          p
                            ? parseFloat(d.s) +
                                d.c +
                                (d.s + "").replace(/[0-9\-\.]/g, "")
                            : n,
                          l || D.defaultStringFilter,
                          d
                        ),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0,
                        m: 0,
                      }))
                    : ((d.s = parseFloat(f)),
                      p || (d.c = parseFloat(n) - d.s || 0))),
                d.c)
              )
                return (
                  (d._next = this._firstPT) && (d._next._prev = d),
                  (this._firstPT = d),
                  d
                );
            },
            V = (D._internals = {
              isArray: w,
              isSelector: z,
              lazyTweens: L,
              blobDif: H,
            }),
            G = (D._plugins = {}),
            W = (V.tweenLookup = {}),
            $ = 0,
            Q = (V.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1,
            }),
            Z = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0,
            },
            K = (F._rootFramesTimeline = new N()),
            J = (F._rootTimeline = new N()),
            tt = 30,
            et = (V.lazyRender = function () {
              var t,
                e,
                i = L.length;
              for (j = {}, t = 0; t < i; t++)
                (e = L[t]) &&
                  !1 !== e._lazy &&
                  (e.render(e._lazy[0], e._lazy[1], !0), (e._lazy = !1));
              L.length = 0;
            });
          (J._startTime = p.time),
            (K._startTime = p.frame),
            (J._active = K._active = !0),
            setTimeout(et, 1),
            (F._updateRoot = D.render =
              function () {
                var t, e, i;
                if (
                  (L.length && et(),
                  J.render((p.time - J._startTime) * J._timeScale, !1, !1),
                  K.render((p.frame - K._startTime) * K._timeScale, !1, !1),
                  L.length && et(),
                  p.frame >= tt)
                ) {
                  for (i in ((tt =
                    p.frame + (parseInt(D.autoSleep, 10) || 120)),
                  W)) {
                    for (t = (e = W[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete W[i];
                  }
                  if (
                    (!(i = J._first) || i._paused) &&
                    D.autoSleep &&
                    !K._first &&
                    1 === p._listeners.tick.length
                  ) {
                    for (; i && i._paused; ) i = i._next;
                    i || p.sleep();
                  }
                }
              }),
            p.addEventListener("tick", F._updateRoot);
          var it = function (t, e, i) {
              var n,
                r,
                s = t._gsTweenID;
              if (
                (W[s || (t._gsTweenID = s = "t" + $++)] ||
                  (W[s] = { target: t, tweens: [] }),
                e && (((n = W[s].tweens)[(r = n.length)] = e), i))
              )
                for (; --r > -1; ) n[r] === e && n.splice(r, 1);
              return W[s].tweens;
            },
            nt = function (t, e, i, n) {
              var r,
                s,
                o = t.vars.onOverwrite;
              return (
                o && (r = o(t, e, i, n)),
                (o = D.onOverwrite) && (s = o(t, e, i, n)),
                !1 !== r && !1 !== s
              );
            },
            rt = function (t, e, i, n, r) {
              var s, o, a, l;
              if (1 === n || n >= 4) {
                for (l = r.length, s = 0; s < l; s++)
                  if ((a = r[s]) !== e)
                    a._gc || (a._kill(null, t, e) && (o = !0));
                  else if (5 === n) break;
                return o;
              }
              var u,
                h = e._startTime + 1e-8,
                c = [],
                f = 0,
                p = 0 === e._duration;
              for (s = r.length; --s > -1; )
                (a = r[s]) === e ||
                  a._gc ||
                  a._paused ||
                  (a._timeline !== e._timeline
                    ? ((u = u || st(e, 0, p)),
                      0 === st(a, u, p) && (c[f++] = a))
                    : a._startTime <= h &&
                      a._startTime + a.totalDuration() / a._timeScale > h &&
                      (((p || !a._initted) && h - a._startTime <= 2e-8) ||
                        (c[f++] = a)));
              for (s = f; --s > -1; )
                if (
                  ((l = (a = c[s])._firstPT),
                  2 === n && a._kill(i, t, e) && (o = !0),
                  2 !== n || (!a._firstPT && a._initted && l))
                ) {
                  if (2 !== n && !nt(a, e)) continue;
                  a._enabled(!1, !1) && (o = !0);
                }
              return o;
            },
            st = function (t, e, i) {
              for (
                var n = t._timeline, r = n._timeScale, s = t._startTime;
                n._timeline;

              ) {
                if (((s += n._startTime), (r *= n._timeScale), n._paused))
                  return -100;
                n = n._timeline;
              }
              return (s /= r) > e
                ? s - e
                : (i && s === e) || (!t._initted && s - e < 2e-8)
                ? 1e-8
                : (s += t.totalDuration() / t._timeScale / r) > e + 1e-8
                ? 0
                : s - e - 1e-8;
            };
          (f._init = function () {
            var t,
              e,
              i,
              n,
              r,
              s,
              o = this.vars,
              a = this._overwrittenProps,
              l = this._duration,
              u = !!o.immediateRender,
              h = o.ease,
              c = this._startAt;
            if (o.startAt) {
              for (n in (c && (c.render(-1, !0), c.kill()),
              (r = {}),
              o.startAt))
                r[n] = o.startAt[n];
              if (
                ((r.data = "isStart"),
                (r.overwrite = !1),
                (r.immediateRender = !0),
                (r.lazy = u && !1 !== o.lazy),
                (r.startAt = r.delay = null),
                (r.onUpdate = o.onUpdate),
                (r.onUpdateParams = o.onUpdateParams),
                (r.onUpdateScope = o.onUpdateScope || o.callbackScope || this),
                (this._startAt = D.to(this.target || {}, 0, r)),
                u)
              )
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return;
            } else if (o.runBackwards && 0 !== l)
              if (c) c.render(-1, !0), c.kill(), (this._startAt = null);
              else {
                for (n in (0 !== this._time && (u = !1), (i = {}), o))
                  (Q[n] && "autoCSS" !== n) || (i[n] = o[n]);
                if (
                  ((i.overwrite = 0),
                  (i.data = "isFromStart"),
                  (i.lazy = u && !1 !== o.lazy),
                  (i.immediateRender = u),
                  (this._startAt = D.to(this.target, 0, i)),
                  u)
                ) {
                  if (0 === this._time) return;
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null);
              }
            if (
              ((this._ease = h =
                h
                  ? h instanceof k
                    ? h
                    : "function" == typeof h
                    ? new k(h, o.easeParams)
                    : A[h] || D.defaultEase
                  : D.defaultEase),
              o.easeParams instanceof Array &&
                h.config &&
                (this._ease = h.config.apply(h, o.easeParams)),
              (this._easeType = this._ease._type),
              (this._easePower = this._ease._power),
              (this._firstPT = null),
              this._targets)
            )
              for (s = this._targets.length, t = 0; t < s; t++)
                this._initProps(
                  this._targets[t],
                  (this._propLookup[t] = {}),
                  this._siblings[t],
                  a ? a[t] : null,
                  t
                ) && (e = !0);
            else
              e = this._initProps(
                this.target,
                this._propLookup,
                this._siblings,
                a,
                0
              );
            if (
              (e && D._onPluginEvent("_onInitAllProps", this),
              a &&
                (this._firstPT ||
                  ("function" != typeof this.target && this._enabled(!1, !1))),
              o.runBackwards)
            )
              for (i = this._firstPT; i; )
                (i.s += i.c), (i.c = -i.c), (i = i._next);
            (this._onUpdate = o.onUpdate), (this._initted = !0);
          }),
            (f._initProps = function (t, e, n, r, s) {
              var o, a, l, u, h, c;
              if (null == t) return !1;
              for (o in (j[t._gsTweenID] && et(),
              this.vars.css ||
                (t.style &&
                  t !== i &&
                  t.nodeType &&
                  G.css &&
                  !1 !== this.vars.autoCSS &&
                  (function (t, e) {
                    var i,
                      n = {};
                    for (i in t)
                      Q[i] ||
                        (i in e &&
                          "transform" !== i &&
                          "x" !== i &&
                          "y" !== i &&
                          "width" !== i &&
                          "height" !== i &&
                          "className" !== i &&
                          "border" !== i) ||
                        !(!G[i] || (G[i] && G[i]._autoCSS)) ||
                        ((n[i] = t[i]), delete t[i]);
                    t.css = n;
                  })(this.vars, t)),
              this.vars))
                if (((c = this.vars[o]), Q[o]))
                  c &&
                    (c instanceof Array || (c.push && w(c))) &&
                    -1 !== c.join("").indexOf("{self}") &&
                    (this.vars[o] = c = this._swapSelfInParams(c, this));
                else if (
                  G[o] &&
                  (u = new G[o]())._onInitTween(t, this.vars[o], this, s)
                ) {
                  for (
                    this._firstPT = h =
                      {
                        _next: this._firstPT,
                        t: u,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: u._priority,
                        m: 0,
                      },
                      a = u._overwriteProps.length;
                    --a > -1;

                  )
                    e[u._overwriteProps[a]] = this._firstPT;
                  (u._priority || u._onInitAllProps) && (l = !0),
                    (u._onDisable || u._onEnable) &&
                      (this._notifyPluginsOfEnabled = !0),
                    h._next && (h._next._prev = h);
                } else
                  e[o] = q.call(
                    this,
                    t,
                    o,
                    "get",
                    c,
                    o,
                    0,
                    null,
                    this.vars.stringFilter,
                    s
                  );
              return r && this._kill(r, t)
                ? this._initProps(t, e, n, r, s)
                : this._overwrite > 1 &&
                  this._firstPT &&
                  n.length > 1 &&
                  rt(t, this, e, this._overwrite, n)
                ? (this._kill(e, t), this._initProps(t, e, n, r, s))
                : (this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration)) &&
                    (j[t._gsTweenID] = !0),
                  l);
            }),
            (f.render = function (t, e, i) {
              var n,
                r,
                s,
                o,
                a = this._time,
                l = this._duration,
                u = this._rawPrevTime;
              if (t >= l - 1e-8 && t >= 0)
                (this._totalTime = this._time = l),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(1)
                    : 1),
                  this._reversed ||
                    ((n = !0),
                    (r = "onComplete"),
                    (i = i || this._timeline.autoRemoveChildren)),
                  0 === l &&
                    (this._initted || !this.vars.lazy || i) &&
                    (this._startTime === this._timeline._duration && (t = 0),
                    (u < 0 ||
                      (t <= 0 && t >= -1e-8) ||
                      (1e-8 === u && "isPause" !== this.data)) &&
                      u !== t &&
                      ((i = !0), u > 1e-8 && (r = "onReverseComplete")),
                    (this._rawPrevTime = o = !e || t || u === t ? t : 1e-8));
              else if (t < 1e-8)
                (this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd
                    ? this._ease.getRatio(0)
                    : 0),
                  (0 !== a || (0 === l && u > 0)) &&
                    ((r = "onReverseComplete"), (n = this._reversed)),
                  t > -1e-8
                    ? (t = 0)
                    : t < 0 &&
                      ((this._active = !1),
                      0 === l &&
                        (this._initted || !this.vars.lazy || i) &&
                        (u >= 0 &&
                          (1e-8 !== u || "isPause" !== this.data) &&
                          (i = !0),
                        (this._rawPrevTime = o =
                          !e || t || u === t ? t : 1e-8))),
                  (!this._initted ||
                    (this._startAt && this._startAt.progress())) &&
                    (i = !0);
              else if (((this._totalTime = this._time = t), this._easeType)) {
                var h = t / l,
                  c = this._easeType,
                  f = this._easePower;
                (1 === c || (3 === c && h >= 0.5)) && (h = 1 - h),
                  3 === c && (h *= 2),
                  1 === f
                    ? (h *= h)
                    : 2 === f
                    ? (h *= h * h)
                    : 3 === f
                    ? (h *= h * h * h)
                    : 4 === f && (h *= h * h * h * h),
                  (this.ratio =
                    1 === c
                      ? 1 - h
                      : 2 === c
                      ? h
                      : t / l < 0.5
                      ? h / 2
                      : 1 - h / 2);
              } else this.ratio = this._ease.getRatio(t / l);
              if (this._time !== a || i) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return;
                  if (
                    !i &&
                    this._firstPT &&
                    ((!1 !== this.vars.lazy && this._duration) ||
                      (this.vars.lazy && !this._duration))
                  )
                    return (
                      (this._time = this._totalTime = a),
                      (this._rawPrevTime = u),
                      L.push(this),
                      void (this._lazy = [t, e])
                    );
                  this._time && !n
                    ? (this.ratio = this._ease.getRatio(this._time / l))
                    : n &&
                      this._ease._calcEnd &&
                      (this.ratio = this._ease.getRatio(
                        0 === this._time ? 0 : 1
                      ));
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active ||
                      (!this._paused &&
                        this._time !== a &&
                        t >= 0 &&
                        (this._active = !0)),
                    0 === a &&
                      (this._startAt &&
                        (t >= 0
                          ? this._startAt.render(t, !0, i)
                          : r || (r = "_dummyGS")),
                      this.vars.onStart &&
                        ((0 === this._time && 0 !== l) ||
                          e ||
                          this._callback("onStart"))),
                    s = this._firstPT;
                  s;

                )
                  s.f
                    ? s.t[s.p](s.c * this.ratio + s.s)
                    : (s.t[s.p] = s.c * this.ratio + s.s),
                    (s = s._next);
                this._onUpdate &&
                  (t < 0 &&
                    this._startAt &&
                    -1e-4 !== t &&
                    this._startAt.render(t, !0, i),
                  e ||
                    ((this._time !== a || n || i) &&
                      this._callback("onUpdate"))),
                  r &&
                    ((this._gc && !i) ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        -1e-4 !== t &&
                        this._startAt.render(t, !0, i),
                      n &&
                        (this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[r] && this._callback(r),
                      0 === l &&
                        1e-8 === this._rawPrevTime &&
                        1e-8 !== o &&
                        (this._rawPrevTime = 0)));
              }
            }),
            (f._kill = function (t, e, i) {
              if (
                ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
              )
                return (this._lazy = !1), this._enabled(!1, !1);
              e =
                "string" != typeof e
                  ? e || this._targets || this.target
                  : D.selector(e) || e;
              var n,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                f,
                p =
                  i &&
                  this._time &&
                  i._startTime === this._startTime &&
                  this._timeline === i._timeline,
                d = this._firstPT;
              if ((w(e) || z(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1; )
                  this._kill(t, e[n], i) && (u = !0);
              else {
                if (this._targets) {
                  for (n = this._targets.length; --n > -1; )
                    if (e === this._targets[n]) {
                      (l = this._propLookup[n] || {}),
                        (this._overwrittenProps = this._overwrittenProps || []),
                        (s = this._overwrittenProps[n] =
                          t ? this._overwrittenProps[n] || {} : "all");
                      break;
                    }
                } else {
                  if (e !== this.target) return !1;
                  (l = this._propLookup),
                    (s = this._overwrittenProps =
                      t ? this._overwrittenProps || {} : "all");
                }
                if (l) {
                  if (
                    ((h = t || l),
                    (c =
                      t !== s &&
                      "all" !== s &&
                      t !== l &&
                      ("object" !== (void 0 === t ? "undefined" : r(t)) ||
                        !t._tempKill)),
                    i && (D.onOverwrite || this.vars.onOverwrite))
                  ) {
                    for (o in h) l[o] && (f || (f = []), f.push(o));
                    if ((f || !t) && !nt(this, i, e, f)) return !1;
                  }
                  for (o in h)
                    (a = l[o]) &&
                      (p && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (u = !0)),
                      a.pg && a.t._kill(h) && (u = !0),
                      (a.pg && 0 !== a.t._overwriteProps.length) ||
                        (a._prev
                          ? (a._prev._next = a._next)
                          : a === this._firstPT && (this._firstPT = a._next),
                        a._next && (a._next._prev = a._prev),
                        (a._next = a._prev = null)),
                      delete l[o]),
                      c && (s[o] = 1);
                  !this._firstPT && this._initted && d && this._enabled(!1, !1);
                }
              }
              return u;
            }),
            (f.invalidate = function () {
              this._notifyPluginsOfEnabled &&
                D._onPluginEvent("_onDisable", this);
              var t = this._time;
              return (
                (this._firstPT =
                  this._overwrittenProps =
                  this._startAt =
                  this._onUpdate =
                    null),
                (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                (this._propLookup = this._targets ? {} : []),
                F.prototype.invalidate.call(this),
                this.vars.immediateRender &&
                  ((this._time = -1e-8),
                  this.render(t, !1, !1 !== this.vars.lazy)),
                this
              );
            }),
            (f._enabled = function (t, e) {
              if ((d || p.wake(), t && this._gc)) {
                var i,
                  n = this._targets;
                if (n)
                  for (i = n.length; --i > -1; )
                    this._siblings[i] = it(n[i], this, !0);
                else this._siblings = it(this.target, this, !0);
              }
              return (
                F.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
                  D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              );
            }),
            (D.to = function (t, e, i) {
              return new D(t, e, i);
            }),
            (D.from = function (t, e, i) {
              return (
                (i.runBackwards = !0),
                (i.immediateRender = 0 != i.immediateRender),
                new D(t, e, i)
              );
            }),
            (D.fromTo = function (t, e, i, n) {
              return (
                (n.startAt = i),
                (n.immediateRender =
                  0 != n.immediateRender && 0 != i.immediateRender),
                new D(t, e, n)
              );
            }),
            (D.delayedCall = function (t, e, i, n, r) {
              return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0,
              });
            }),
            (D.set = function (t, e) {
              return new D(t, 0, e);
            }),
            (D.getTweensOf = function (t, e) {
              if (null == t) return [];
              var i, n, r, s;
              if (
                ((t = "string" != typeof t ? t : D.selector(t) || t),
                (w(t) || z(t)) && "number" != typeof t[0])
              ) {
                for (i = t.length, n = []; --i > -1; )
                  n = n.concat(D.getTweensOf(t[i], e));
                for (i = n.length; --i > -1; )
                  for (s = n[i], r = i; --r > -1; )
                    s === n[r] && n.splice(i, 1);
              } else if (t._gsTweenID)
                for (i = (n = it(t).concat()).length; --i > -1; )
                  (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
              return n || [];
            }),
            (D.killTweensOf = D.killDelayedCallsTo =
              function (t, e, i) {
                "object" === (void 0 === e ? "undefined" : r(e)) &&
                  ((i = e), (e = !1));
                for (var n = D.getTweensOf(t, e), s = n.length; --s > -1; )
                  n[s]._kill(i, t);
              });
          var ot = P(
            "plugins.TweenPlugin",
            function (t, e) {
              (this._overwriteProps = (t || "").split(",")),
                (this._propName = this._overwriteProps[0]),
                (this._priority = e || 0),
                (this._super = ot.prototype);
            },
            !0
          );
          if (
            ((f = ot.prototype),
            (ot.version = "1.19.0"),
            (ot.API = 2),
            (f._firstPT = null),
            (f._addTween = q),
            (f.setRatio = Y),
            (f._kill = function (t) {
              var e,
                i = this._overwriteProps,
                n = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; n; )
                null != t[n.n] &&
                  (n._next && (n._next._prev = n._prev),
                  n._prev
                    ? ((n._prev._next = n._next), (n._prev = null))
                    : this._firstPT === n && (this._firstPT = n._next)),
                  (n = n._next);
              return !1;
            }),
            (f._mod = f._roundProps =
              function (t) {
                for (var e, i = this._firstPT; i; )
                  (e =
                    t[this._propName] ||
                    (null != i.n &&
                      t[i.n.split(this._propName + "_").join("")])) &&
                    "function" == typeof e &&
                    (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                    (i = i._next);
              }),
            (D._onPluginEvent = function (t, e) {
              var i,
                n,
                r,
                s,
                o,
                a = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; a; ) {
                  for (o = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
                  (a._prev = n ? n._prev : s) ? (a._prev._next = a) : (r = a),
                    (a._next = n) ? (n._prev = a) : (s = a),
                    (a = o);
                }
                a = e._firstPT = r;
              }
              for (; a; )
                a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
                  (a = a._next);
              return i;
            }),
            (ot.activate = function (t) {
              for (var e = t.length; --e > -1; )
                t[e].API === ot.API && (G[new t[e]()._propName] = t[e]);
              return !0;
            }),
            (b.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e,
                i = t.propName,
                n = t.priority || 0,
                r = t.overwriteProps,
                s = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps",
                },
                o = P(
                  "plugins." +
                    i.charAt(0).toUpperCase() +
                    i.substr(1) +
                    "Plugin",
                  function () {
                    ot.call(this, i, n), (this._overwriteProps = r || []);
                  },
                  !0 === t.global
                ),
                a = (o.prototype = new ot(i));
              for (e in ((a.constructor = o), (o.API = t.API), s))
                "function" == typeof t[e] && (a[s[e]] = t[e]);
              return (o.version = t.version), ot.activate([o]), o;
            }),
            (h = i._gsQueue))
          ) {
            for (c = 0; c < h.length; c++) h[c]();
            for (f in T)
              T[f].func ||
                i.console.log("GSAP encountered missing dependency: " + f);
          }
          d = !1;
        })(void 0 !== t && t.exports && void 0 !== i ? i : this || window);
      }.call(this, i(3)));
    },
    function (t, e, i) {
      t.exports = i(29);
    },
    function (t, e) {
      var i,
        n,
        r = (t.exports = {});
      function s() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === s || !i) && setTimeout)
          return (i = setTimeout), setTimeout(t, 0);
        try {
          return i(t, 0);
        } catch (e) {
          try {
            return i.call(null, t, 0);
          } catch (e) {
            return i.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          i = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
          i = s;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          n = o;
        }
      })();
      var l,
        u = [],
        h = !1,
        c = -1;
      function f() {
        h &&
          l &&
          ((h = !1), l.length ? (u = l.concat(u)) : (c = -1), u.length && p());
      }
      function p() {
        if (!h) {
          var t = a(f);
          h = !0;
          for (var e = u.length; e; ) {
            for (l = u, u = []; ++c < e; ) l && l[c].run();
            (c = -1), (e = u.length);
          }
          (l = null),
            (h = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === o || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function m() {}
      (r.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        u.push(new d(t, e)), 1 !== u.length || h || a(p);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = m),
        (r.addListener = m),
        (r.once = m),
        (r.off = m),
        (r.removeListener = m),
        (r.removeAllListeners = m),
        (r.emit = m),
        (r.prependListener = m),
        (r.prependOnceListener = m),
        (r.listeners = function (t) {
          return [];
        }),
        (r.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    function (t, e, i) {
      "use strict";
      (function (e) {
        var n = i(2),
          r = i(32),
          s = { "Content-Type": "application/x-www-form-urlencoded" };
        function o(t, e) {
          !n.isUndefined(t) &&
            n.isUndefined(t["Content-Type"]) &&
            (t["Content-Type"] = e);
        }
        var a,
          l = {
            adapter:
              ("undefined" != typeof XMLHttpRequest
                ? (a = i(10))
                : void 0 !== e && (a = i(10)),
              a),
            transformRequest: [
              function (t, e) {
                return (
                  r(e, "Content-Type"),
                  n.isFormData(t) ||
                  n.isArrayBuffer(t) ||
                  n.isBuffer(t) ||
                  n.isStream(t) ||
                  n.isFile(t) ||
                  n.isBlob(t)
                    ? t
                    : n.isArrayBufferView(t)
                    ? t.buffer
                    : n.isURLSearchParams(t)
                    ? (o(e, "application/x-www-form-urlencoded;charset=utf-8"),
                      t.toString())
                    : n.isObject(t)
                    ? (o(e, "application/json;charset=utf-8"),
                      JSON.stringify(t))
                    : t
                );
              },
            ],
            transformResponse: [
              function (t) {
                if ("string" == typeof t)
                  try {
                    t = JSON.parse(t);
                  } catch (t) {}
                return t;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (t) {
              return t >= 200 && t < 300;
            },
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
            },
          };
        n.forEach(["delete", "get", "head"], function (t) {
          l.headers[t] = {};
        }),
          n.forEach(["post", "put", "patch"], function (t) {
            l.headers[t] = n.merge(s);
          }),
          (t.exports = l);
      }.call(this, i(7)));
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t, e) {
        return function () {
          for (var i = new Array(arguments.length), n = 0; n < i.length; n++)
            i[n] = arguments[n];
          return t.apply(e, i);
        };
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = i(33),
        s = i(35),
        o = i(36),
        a = i(37),
        l = i(11);
      t.exports = function (t) {
        return new Promise(function (e, u) {
          var h = t.data,
            c = t.headers;
          n.isFormData(h) && delete c["Content-Type"];
          var f = new XMLHttpRequest();
          if (t.auth) {
            var p = t.auth.username || "",
              d = t.auth.password || "";
            c.Authorization = "Basic " + btoa(p + ":" + d);
          }
          if (
            (f.open(
              t.method.toUpperCase(),
              s(t.url, t.params, t.paramsSerializer),
              !0
            ),
            (f.timeout = t.timeout),
            (f.onreadystatechange = function () {
              if (
                f &&
                4 === f.readyState &&
                (0 !== f.status ||
                  (f.responseURL && 0 === f.responseURL.indexOf("file:")))
              ) {
                var i =
                    "getAllResponseHeaders" in f
                      ? o(f.getAllResponseHeaders())
                      : null,
                  n = {
                    data:
                      t.responseType && "text" !== t.responseType
                        ? f.response
                        : f.responseText,
                    status: f.status,
                    statusText: f.statusText,
                    headers: i,
                    config: t,
                    request: f,
                  };
                r(e, u, n), (f = null);
              }
            }),
            (f.onerror = function () {
              u(l("Network Error", t, null, f)), (f = null);
            }),
            (f.ontimeout = function () {
              u(
                l(
                  "timeout of " + t.timeout + "ms exceeded",
                  t,
                  "ECONNABORTED",
                  f
                )
              ),
                (f = null);
            }),
            n.isStandardBrowserEnv())
          ) {
            var m = i(38),
              _ =
                (t.withCredentials || a(t.url)) && t.xsrfCookieName
                  ? m.read(t.xsrfCookieName)
                  : void 0;
            _ && (c[t.xsrfHeaderName] = _);
          }
          if (
            ("setRequestHeader" in f &&
              n.forEach(c, function (t, e) {
                void 0 === h && "content-type" === e.toLowerCase()
                  ? delete c[e]
                  : f.setRequestHeader(e, t);
              }),
            t.withCredentials && (f.withCredentials = !0),
            t.responseType)
          )
            try {
              f.responseType = t.responseType;
            } catch (e) {
              if ("json" !== t.responseType) throw e;
            }
          "function" == typeof t.onDownloadProgress &&
            f.addEventListener("progress", t.onDownloadProgress),
            "function" == typeof t.onUploadProgress &&
              f.upload &&
              f.upload.addEventListener("progress", t.onUploadProgress),
            t.cancelToken &&
              t.cancelToken.promise.then(function (t) {
                f && (f.abort(), u(t), (f = null));
              }),
            void 0 === h && (h = null),
            f.send(h);
        });
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(34);
      t.exports = function (t, e, i, r, s) {
        var o = new Error(t);
        return n(o, e, i, r, s);
      };
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t) {
        return !(!t || !t.__CANCEL__);
      };
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        this.message = t;
      }
      (n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (n.prototype.__CANCEL__ = !0),
        (t.exports = n);
    },
    function (t, e, i) {
      "use strict";
      e.a = function (t) {
        var e = this.constructor;
        return this.then(
          function (i) {
            return e.resolve(t()).then(function () {
              return i;
            });
          },
          function (i) {
            return e.resolve(t()).then(function () {
              return e.reject(i);
            });
          }
        );
      };
    },
    ,
    ,
    function (t, e) {
      !(function (t, e) {
        function i(t) {
          return -1 != s.indexOf(t);
        }
        function n(t) {
          var e = t.split("."),
            i = {};
          return (
            (i.str = t),
            (i.float = parseFloat(t) || 0),
            (i.major = (e.length > 0 && parseInt(e[0])) || 0),
            (i.minor = (e.length > 1 && parseInt(e[1])) || 0),
            (i.build = (e.length > 2 && parseInt(e[2])) || 0),
            (i.revision = (e.length > 3 && parseInt(e[3])) || 0),
            i
          );
        }
        var r = {
            _detects: [
              "mobile",
              "tablet",
              "pc",
              "windows",
              "mac",
              "linux",
              "ios",
              "android",
              "edge",
              "ie",
              "safari",
              "webkit",
              "chrome",
              "firefox",
              "opera",
              "webview",
            ],
          },
          s = (r.userAgent = t.navigator.userAgent.toLowerCase());
        try {
          r.mobile =
            i("iphone") ||
            i("ipod") ||
            (i("android") && i("mobile")) ||
            (i("windows") && i("phone")) ||
            (i("firefox") && i("mobile")) ||
            i("blackberry");
        } catch (t) {}
        try {
          r.tablet =
            i("ipad") ||
            (i("android") && !i("mobile")) ||
            (i("windows") && i("touch") && !i("tablet pc")) ||
            (i("firefox") && i("tablet")) ||
            i("kindle") ||
            i("silk") ||
            i("playbook");
        } catch (t) {}
        try {
          r.pc =
            !i("iphone") &&
            !i("ipod") &&
            !i("ipad") &&
            !i("android") &&
            (!i("windows") ||
              (!i("phone") && (!i("touch") || i("tablet pc")))) &&
            (!i("firefox") || (!i("mobile") && !i("tablet"))) &&
            !i("blackberry") &&
            !i("kindle") &&
            !i("silk") &&
            !i("playbook");
        } catch (t) {}
        try {
          (r.windows = i("windows")),
            r.windows &&
              ((r.windows = new Boolean(!0)),
              s.match(/nt ([\d.]+)/g) && (r.windows.version = n(RegExp.$1)));
        } catch (t) {}
        try {
          (r.mac = i("mac os x") && !i("iphone") && !i("ipad") && !i("ipod")),
            r.mac &&
              ((r.mac = new Boolean(!0)),
              s.match(/ mac os x ([\d_\.]+)/g) &&
                (r.mac.version = n(RegExp.$1.replace(/_/g, "."))));
        } catch (t) {}
        try {
          r.linux = i("linux") && !i("android");
        } catch (t) {}
        try {
          (r.ios = i("iphone") || i("ipad") || i("ipod")),
            r.ios &&
              ((r.ios = new Boolean(!0)),
              s.match(/ os ([\d_]+)/g) &&
                (r.ios.version = n(RegExp.$1.replace(/_/g, "."))));
        } catch (t) {}
        try {
          (r.android = i("android")),
            r.android &&
              ((r.android = new Boolean(!0)),
              s.match(/android ([\d\.]+)/g) &&
                (r.android.version = n(RegExp.$1)));
        } catch (t) {}
        try {
          (r.edge = i("edge")),
            r.edge &&
              ((r.edge = new Boolean(!0)),
              s.match(/edge\/([\d.]+)/g) && (r.edge.version = n(RegExp.$1)));
        } catch (t) {}
        try {
          (r.ie = i("trident") || i("msie")),
            r.ie &&
              ((r.ie = new Boolean(!0)),
              s.match(/(msie|rv:?)\s?([\d.]+)/g) &&
                (r.ie.version = n(RegExp.$2)));
        } catch (t) {}
        try {
          (r.safari =
            i("safari") &&
            !i("android") &&
            !i("edge") &&
            !i("opera") &&
            !i("opr/d+.d+") &&
            !i("chrome")),
            r.safari &&
              ((r.safari = new Boolean(!0)),
              s.match(/version\/([\d.]+)/g) &&
                (r.safari.version = n(RegExp.$1)));
        } catch (t) {}
        try {
          r.webkit =
            i("applewebkit") &&
            !i("safari") &&
            !i("android") &&
            !i("edge") &&
            !i("opera") &&
            !i("opr/d+.d+") &&
            !i("chrome");
        } catch (t) {}
        try {
          (r.chrome =
            i("chrome") && !i("edge") && !i("opera") && !i("opr/d+.d+")),
            r.chrome &&
              ((r.chrome = new Boolean(!0)),
              s.match(/chrome\/([\d.]+)/g) &&
                (r.chrome.version = n(RegExp.$1)));
        } catch (t) {}
        try {
          (r.firefox = i("firefox") && !i("edge")),
            r.firefox &&
              ((r.firefox = new Boolean(!0)),
              s.match(/firefox\/([\d.]+)/g) &&
                (r.firefox.version = n(RegExp.$1)));
        } catch (t) {}
        try {
          (r.opera = i("opera") || i("opr/d+.d+")),
            r.opera &&
              ((r.opera = new Boolean(!0)),
              s.match(/(opera|opr)\/([\d.]+)/g) &&
                (r.opera.version = n(RegExp.$2)));
        } catch (t) {}
        try {
          r.webview =
            (i("iphone") || i("ipad") || i("ipod")) &&
            (!i("safari") ||
              i("crios") ||
              i("fxios") ||
              i("opios") ||
              i("twitter") ||
              i("fbav") ||
              i("line"));
        } catch (t) {}
        var o,
          a,
          l,
          u = (r._classPrefix = ""),
          h = e.documentElement,
          c = h.className;
        for (a = r._detects.length, o = 0; o < a; o++)
          r[(l = r._detects[o])]
            ? (c += " " + u + l)
            : (c += " " + u + "no-" + l);
        (h.className = c), (t.Useragnt = r);
      })(window, document);
    },
    function (t, e) {
      t.exports = function (t) {
        if (!t.webpackPolyfill) {
          var e = Object.create(t);
          e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            Object.defineProperty(e, "exports", { enumerable: !0 }),
            (e.webpackPolyfill = 1);
        }
        return e;
      };
    },
    function (t, e, i) {
      (function (n) {
        var r,
          s,
          o,
          a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          l = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (l._gsQueue || (l._gsQueue = [])).push(function () {
          "use strict";
          l._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (t, e) {
              var i,
                n,
                r,
                s,
                o = function e() {
                  t.call(this, "css"),
                    (this._overwriteProps.length = 0),
                    (this.setRatio = e.prototype.setRatio);
                },
                u = l._gsDefine.globals,
                h = {},
                c = (o.prototype = new t("css"));
              (c.constructor = o),
                (o.version = "2.1.3"),
                (o.API = 2),
                (o.defaultTransformPerspective = 0),
                (o.defaultSkewType = "compensated"),
                (o.defaultSmoothOrigin = !0),
                (o.suffixMap = {
                  top: (c = "px"),
                  right: c,
                  bottom: c,
                  left: c,
                  width: c,
                  height: c,
                  fontSize: c,
                  padding: c,
                  margin: c,
                  perspective: c,
                  lineHeight: "",
                });
              var f,
                p,
                d,
                m,
                _,
                g,
                v,
                y,
                x = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
                P = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                S = /(?:\d|\-|\+|=|#|\.)*/g,
                k = /opacity *= *([^)]*)/i,
                A = /opacity:([^;]*)/i,
                O = /alpha\(opacity *=.+?\)/i,
                C = /^(rgb|hsl)/,
                E = /([A-Z])/g,
                R = /-([a-z])/gi,
                M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                I = function (t, e) {
                  return e.toUpperCase();
                },
                F = /(?:Left|Right|Width)/i,
                N = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                z = /,(?=[^\)]*(?:\(|$))/gi,
                L = /[\s,\(]/i,
                j = Math.PI / 180,
                X = 180 / Math.PI,
                B = {},
                Y = { style: {} },
                U = l.document || {
                  createElement: function () {
                    return Y;
                  },
                },
                H = function (t, e) {
                  var i = U.createElementNS
                    ? U.createElementNS(e || "http://www.w3.org/1999/xhtml", t)
                    : U.createElement(t);
                  return i.style ? i : U.createElement(t);
                },
                q = H("div"),
                V = H("img"),
                G = (o._internals = { _specialProps: h }),
                W = (l.navigator || {}).userAgent || "",
                $ = (function () {
                  var t = W.indexOf("Android"),
                    e = H("a");
                  return (
                    (d =
                      -1 !== W.indexOf("Safari") &&
                      -1 === W.indexOf("Chrome") &&
                      (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3)),
                    (_ =
                      d &&
                      parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6),
                    (m = -1 !== W.indexOf("Firefox")),
                    (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) ||
                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) &&
                      (g = parseFloat(RegExp.$1)),
                    !!e &&
                      ((e.style.cssText = "top:1px;opacity:.55;"),
                      /^0.55/.test(e.style.opacity))
                  );
                })(),
                Q = function (t) {
                  return k.test(
                    "string" == typeof t
                      ? t
                      : (t.currentStyle
                          ? t.currentStyle.filter
                          : t.style.filter) || ""
                  )
                    ? parseFloat(RegExp.$1) / 100
                    : 1;
                },
                Z = function (t) {
                  l.console && console.log(t);
                },
                K = "",
                J = "",
                tt = function (t, e) {
                  var i,
                    n,
                    r = (e = e || q).style;
                  if (void 0 !== r[t]) return t;
                  for (
                    t = t.charAt(0).toUpperCase() + t.substr(1),
                      i = ["O", "Moz", "ms", "Ms", "Webkit"],
                      n = 5;
                    --n > -1 && void 0 === r[i[n] + t];

                  );
                  return n >= 0
                    ? ((K =
                        "-" + (J = 3 === n ? "ms" : i[n]).toLowerCase() + "-"),
                      J + t)
                    : null;
                },
                et =
                  "undefined" != typeof window
                    ? window
                    : U.defaultView || { getComputedStyle: function () {} },
                it = function (t) {
                  return et.getComputedStyle(t);
                },
                nt = (o.getStyle = function (t, e, i, n, r) {
                  var s;
                  return $ || "opacity" !== e
                    ? (!n && t.style[e]
                        ? (s = t.style[e])
                        : (i = i || it(t))
                        ? (s =
                            i[e] ||
                            i.getPropertyValue(e) ||
                            i.getPropertyValue(
                              e.replace(E, "-$1").toLowerCase()
                            ))
                        : t.currentStyle && (s = t.currentStyle[e]),
                      null == r ||
                      (s && "none" !== s && "auto" !== s && "auto auto" !== s)
                        ? s
                        : r)
                    : Q(t);
                }),
                rt = (G.convertToPixels = function (t, i, n, r, s) {
                  if ("px" === r || (!r && "lineHeight" !== i)) return n;
                  if ("auto" === r || !n) return 0;
                  var a,
                    l,
                    u,
                    h = F.test(i),
                    c = t,
                    f = q.style,
                    p = n < 0,
                    d = 1 === n;
                  if ((p && (n = -n), d && (n *= 100), "lineHeight" !== i || r))
                    if ("%" === r && -1 !== i.indexOf("border"))
                      a = (n / 100) * (h ? t.clientWidth : t.clientHeight);
                    else {
                      if (
                        ((f.cssText =
                          "border:0 solid red;position:" +
                          nt(t, "position") +
                          ";line-height:0;"),
                        "%" !== r &&
                          c.appendChild &&
                          "v" !== r.charAt(0) &&
                          "rem" !== r)
                      )
                        f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                      else {
                        if (
                          ((c = t.parentNode || U.body),
                          -1 !== nt(c, "display").indexOf("flex") &&
                            (f.position = "absolute"),
                          (l = c._gsCache),
                          (u = e.ticker.frame),
                          l && h && l.time === u)
                        )
                          return (l.width * n) / 100;
                        f[h ? "width" : "height"] = n + r;
                      }
                      c.appendChild(q),
                        (a = parseFloat(q[h ? "offsetWidth" : "offsetHeight"])),
                        c.removeChild(q),
                        h &&
                          "%" === r &&
                          !1 !== o.cacheWidths &&
                          (((l = c._gsCache = c._gsCache || {}).time = u),
                          (l.width = (a / n) * 100)),
                        0 !== a || s || (a = rt(t, i, n, r, !0));
                    }
                  else
                    (l = it(t).lineHeight),
                      (t.style.lineHeight = n),
                      (a = parseFloat(it(t).lineHeight)),
                      (t.style.lineHeight = l);
                  return d && (a /= 100), p ? -a : a;
                }),
                st = (G.calculateOffset = function (t, e, i) {
                  if ("absolute" !== nt(t, "position", i)) return 0;
                  var n = "left" === e ? "Left" : "Top",
                    r = nt(t, "margin" + n, i);
                  return (
                    t["offset" + n] -
                    (rt(t, e, parseFloat(r), r.replace(S, "")) || 0)
                  );
                }),
                ot = function (t, e) {
                  var i,
                    n,
                    r,
                    s = {};
                  if ((e = e || it(t)))
                    if ((i = e.length))
                      for (; --i > -1; )
                        (-1 !== (r = e[i]).indexOf("-transform") && zt !== r) ||
                          (s[r.replace(R, I)] = e.getPropertyValue(r));
                    else
                      for (i in e)
                        (-1 !== i.indexOf("Transform") && Dt !== i) ||
                          (s[i] = e[i]);
                  else if ((e = t.currentStyle || t.style))
                    for (i in e)
                      "string" == typeof i &&
                        void 0 === s[i] &&
                        (s[i.replace(R, I)] = e[i]);
                  return (
                    $ || (s.opacity = Q(t)),
                    (n = $t(t, e, !1)),
                    (s.rotation = n.rotation),
                    (s.skewX = n.skewX),
                    (s.scaleX = n.scaleX),
                    (s.scaleY = n.scaleY),
                    (s.x = n.x),
                    (s.y = n.y),
                    jt &&
                      ((s.z = n.z),
                      (s.rotationX = n.rotationX),
                      (s.rotationY = n.rotationY),
                      (s.scaleZ = n.scaleZ)),
                    s.filters && delete s.filters,
                    s
                  );
                },
                at = function (t, e, i, n, r) {
                  var s,
                    o,
                    a,
                    l = {},
                    u = t.style;
                  for (o in i)
                    "cssText" !== o &&
                      "length" !== o &&
                      isNaN(o) &&
                      (e[o] !== (s = i[o]) || (r && r[o])) &&
                      -1 === o.indexOf("Origin") &&
                      (("number" != typeof s && "string" != typeof s) ||
                        ((l[o] =
                          "auto" !== s || ("left" !== o && "top" !== o)
                            ? ("" !== s && "auto" !== s && "none" !== s) ||
                              "string" != typeof e[o] ||
                              "" === e[o].replace(P, "")
                              ? s
                              : 0
                            : st(t, o)),
                        void 0 !== u[o] && (a = new Tt(u, o, u[o], a))));
                  if (n) for (o in n) "className" !== o && (l[o] = n[o]);
                  return { difs: l, firstMPT: a };
                },
                lt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                ut = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ht = function (t, e, i) {
                  if ("svg" === (t.nodeName + "").toLowerCase())
                    return (i || it(t))[e] || 0;
                  if (t.getCTM && Vt(t)) return t.getBBox()[e] || 0;
                  var n = parseFloat(
                      "width" === e ? t.offsetWidth : t.offsetHeight
                    ),
                    r = lt[e],
                    s = r.length;
                  for (i = i || it(t); --s > -1; )
                    (n -= parseFloat(nt(t, "padding" + r[s], i, !0)) || 0),
                      (n -=
                        parseFloat(nt(t, "border" + r[s] + "Width", i, !0)) ||
                        0);
                  return n;
                },
                ct = function t(e, i) {
                  if ("contain" === e || "auto" === e || "auto auto" === e)
                    return e + " ";
                  (null != e && "" !== e) || (e = "0 0");
                  var n,
                    r = e.split(" "),
                    s =
                      -1 !== e.indexOf("left")
                        ? "0%"
                        : -1 !== e.indexOf("right")
                        ? "100%"
                        : r[0],
                    o =
                      -1 !== e.indexOf("top")
                        ? "0%"
                        : -1 !== e.indexOf("bottom")
                        ? "100%"
                        : r[1];
                  if (r.length > 3 && !i) {
                    for (
                      r = e.split(", ").join(",").split(","), e = [], n = 0;
                      n < r.length;
                      n++
                    )
                      e.push(t(r[n]));
                    return e.join(",");
                  }
                  return (
                    null == o
                      ? (o = "center" === s ? "50%" : "0")
                      : "center" === o && (o = "50%"),
                    ("center" === s ||
                      (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) &&
                      (s = "50%"),
                    (e = s + " " + o + (r.length > 2 ? " " + r[2] : "")),
                    i &&
                      ((i.oxp = -1 !== s.indexOf("%")),
                      (i.oyp = -1 !== o.indexOf("%")),
                      (i.oxr = "=" === s.charAt(1)),
                      (i.oyr = "=" === o.charAt(1)),
                      (i.ox = parseFloat(s.replace(P, ""))),
                      (i.oy = parseFloat(o.replace(P, ""))),
                      (i.v = e)),
                    i || e
                  );
                },
                ft = function (t, e) {
                  return (
                    "function" == typeof t && (t = t(y, v)),
                    "string" == typeof t && "=" === t.charAt(1)
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(t.substr(2))
                      : parseFloat(t) - parseFloat(e) || 0
                  );
                },
                pt = function (t, e) {
                  "function" == typeof t && (t = t(y, v));
                  var i = "string" == typeof t && "=" === t.charAt(1);
                  return (
                    "string" == typeof t &&
                      "v" === t.charAt(t.length - 2) &&
                      (t =
                        (i ? t.substr(0, 2) : 0) +
                        window[
                          "inner" + ("vh" === t.substr(-2) ? "Height" : "Width")
                        ] *
                          (parseFloat(i ? t.substr(2) : t) / 100)),
                    null == t
                      ? e
                      : i
                      ? parseInt(t.charAt(0) + "1", 10) *
                          parseFloat(t.substr(2)) +
                        e
                      : parseFloat(t) || 0
                  );
                },
                dt = function (t, e, i, n) {
                  var r, s, o, a, l;
                  return (
                    "function" == typeof t && (t = t(y, v)),
                    null == t
                      ? (a = e)
                      : "number" == typeof t
                      ? (a = t)
                      : ((r = 360),
                        (s = t.split("_")),
                        (o =
                          ((l = "=" === t.charAt(1))
                            ? parseInt(t.charAt(0) + "1", 10) *
                              parseFloat(s[0].substr(2))
                            : parseFloat(s[0])) *
                            (-1 === t.indexOf("rad") ? 1 : X) -
                          (l ? 0 : e)),
                        s.length &&
                          (n && (n[i] = e + o),
                          -1 !== t.indexOf("short") &&
                            (o %= r) != o % (r / 2) &&
                            (o = o < 0 ? o + r : o - r),
                          -1 !== t.indexOf("_cw") && o < 0
                            ? (o =
                                ((o + 9999999999 * r) % r) - ((o / r) | 0) * r)
                            : -1 !== t.indexOf("ccw") &&
                              o > 0 &&
                              (o =
                                ((o - 9999999999 * r) % r) -
                                ((o / r) | 0) * r)),
                        (a = e + o)),
                    a < 1e-6 && a > -1e-6 && (a = 0),
                    a
                  );
                },
                mt = {
                  aqua: [0, 255, 255],
                  lime: [0, 255, 0],
                  silver: [192, 192, 192],
                  black: [0, 0, 0],
                  maroon: [128, 0, 0],
                  teal: [0, 128, 128],
                  blue: [0, 0, 255],
                  navy: [0, 0, 128],
                  white: [255, 255, 255],
                  fuchsia: [255, 0, 255],
                  olive: [128, 128, 0],
                  yellow: [255, 255, 0],
                  orange: [255, 165, 0],
                  gray: [128, 128, 128],
                  purple: [128, 0, 128],
                  green: [0, 128, 0],
                  red: [255, 0, 0],
                  pink: [255, 192, 203],
                  cyan: [0, 255, 255],
                  transparent: [255, 255, 255, 0],
                },
                _t = function (t, e, i) {
                  return (
                    (255 *
                      (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                        ? e + (i - e) * t * 6
                        : t < 0.5
                        ? i
                        : 3 * t < 2
                        ? e + (i - e) * (2 / 3 - t) * 6
                        : e) +
                      0.5) |
                    0
                  );
                },
                gt = (o.parseColor = function (t, e) {
                  var i, n, r, s, o, a, l, u, h, c, f;
                  if (t)
                    if ("number" == typeof t)
                      i = [t >> 16, (t >> 8) & 255, 255 & t];
                    else {
                      if (
                        ("," === t.charAt(t.length - 1) &&
                          (t = t.substr(0, t.length - 1)),
                        mt[t])
                      )
                        i = mt[t];
                      else if ("#" === t.charAt(0))
                        4 === t.length &&
                          (t =
                            "#" +
                            (n = t.charAt(1)) +
                            n +
                            (r = t.charAt(2)) +
                            r +
                            (s = t.charAt(3)) +
                            s),
                          (i = [
                            (t = parseInt(t.substr(1), 16)) >> 16,
                            (t >> 8) & 255,
                            255 & t,
                          ]);
                      else if ("hsl" === t.substr(0, 3))
                        if (((i = f = t.match(x)), e)) {
                          if (-1 !== t.indexOf("=")) return t.match(w);
                        } else
                          (o = (Number(i[0]) % 360) / 360),
                            (a = Number(i[1]) / 100),
                            (n =
                              2 * (l = Number(i[2]) / 100) -
                              (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                            i.length > 3 && (i[3] = Number(i[3])),
                            (i[0] = _t(o + 1 / 3, n, r)),
                            (i[1] = _t(o, n, r)),
                            (i[2] = _t(o - 1 / 3, n, r));
                      else i = t.match(x) || mt.transparent;
                      (i[0] = Number(i[0])),
                        (i[1] = Number(i[1])),
                        (i[2] = Number(i[2])),
                        i.length > 3 && (i[3] = Number(i[3]));
                    }
                  else i = mt.black;
                  return (
                    e &&
                      !f &&
                      ((n = i[0] / 255),
                      (r = i[1] / 255),
                      (s = i[2] / 255),
                      (l =
                        ((u = Math.max(n, r, s)) + (h = Math.min(n, r, s))) /
                        2),
                      u === h
                        ? (o = a = 0)
                        : ((c = u - h),
                          (a = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
                          (o =
                            u === n
                              ? (r - s) / c + (r < s ? 6 : 0)
                              : u === r
                              ? (s - n) / c + 2
                              : (n - r) / c + 4),
                          (o *= 60)),
                      (i[0] = (o + 0.5) | 0),
                      (i[1] = (100 * a + 0.5) | 0),
                      (i[2] = (100 * l + 0.5) | 0)),
                    i
                  );
                }),
                vt = function (t, e) {
                  var i,
                    n,
                    r,
                    s = t.match(yt) || [],
                    o = 0,
                    a = "";
                  if (!s.length) return t;
                  for (i = 0; i < s.length; i++)
                    (n = s[i]),
                      (o +=
                        (r = t.substr(o, t.indexOf(n, o) - o)).length +
                        n.length),
                      3 === (n = gt(n, e)).length && n.push(1),
                      (a +=
                        r +
                        (e
                          ? "hsla(" +
                            n[0] +
                            "," +
                            n[1] +
                            "%," +
                            n[2] +
                            "%," +
                            n[3]
                          : "rgba(" + n.join(",")) +
                        ")");
                  return a + t.substr(o);
                },
                yt =
                  "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
              for (c in mt) yt += "|" + c + "\\b";
              (yt = new RegExp(yt + ")", "gi")),
                (o.colorStringFilter = function (t) {
                  var e,
                    i = t[0] + " " + t[1];
                  yt.test(i) &&
                    ((e =
                      -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
                    (t[0] = vt(t[0], e)),
                    (t[1] = vt(t[1], e))),
                    (yt.lastIndex = 0);
                }),
                e.defaultStringFilter ||
                  (e.defaultStringFilter = o.colorStringFilter);
              var xt = function (t, e, i, n) {
                  if (null == t)
                    return function (t) {
                      return t;
                    };
                  var r,
                    s = e ? (t.match(yt) || [""])[0] : "",
                    o = t.split(s).join("").match(T) || [],
                    a = t.substr(0, t.indexOf(o[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    u = -1 !== t.indexOf(" ") ? " " : ",",
                    h = o.length,
                    c = h > 0 ? o[0].replace(x, "") : "";
                  return h
                    ? (r = e
                        ? function (t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += c;
                            else if (n && z.test(t)) {
                              for (
                                d = t.replace(z, "|").split("|"), p = 0;
                                p < d.length;
                                p++
                              )
                                d[p] = r(d[p]);
                              return d.join(",");
                            }
                            if (
                              ((e = (t.match(yt) || [s])[0]),
                              (p = (f = t.split(e).join("").match(T) || [])
                                .length),
                              h > p--)
                            )
                              for (; ++p < h; )
                                f[p] = i ? f[((p - 1) / 2) | 0] : o[p];
                            return (
                              a +
                              f.join(u) +
                              u +
                              e +
                              l +
                              (-1 !== t.indexOf("inset") ? " inset" : "")
                            );
                          }
                        : function (t) {
                            var e, s, f;
                            if ("number" == typeof t) t += c;
                            else if (n && z.test(t)) {
                              for (
                                s = t.replace(z, "|").split("|"), f = 0;
                                f < s.length;
                                f++
                              )
                                s[f] = r(s[f]);
                              return s.join(",");
                            }
                            if (
                              ((f = (e = t.match("," === u ? T : b) || [])
                                .length),
                              h > f--)
                            )
                              for (; ++f < h; )
                                e[f] = i ? e[((f - 1) / 2) | 0] : o[f];
                            return (
                              ((a &&
                                "none" !== t &&
                                t.substr(0, t.indexOf(e[0]))) ||
                                a) +
                              e.join(u) +
                              l
                            );
                          })
                    : function (t) {
                        return t;
                      };
                },
                wt = function (t) {
                  return (
                    (t = t.split(",")),
                    function (e, i, n, r, s, o, a) {
                      var l,
                        u = (i + "").split(" ");
                      for (a = {}, l = 0; l < 4; l++)
                        a[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                      return r.parse(e, a, s, o);
                    }
                  );
                },
                Tt =
                  ((G._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (
                      var e,
                        i,
                        n,
                        r,
                        s,
                        o = this.data,
                        a = o.proxy,
                        l = o.firstMPT;
                      l;

                    )
                      (e = a[l.v]),
                        l.r ? (e = l.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                        (l.t[l.p] = e),
                        (l = l._next);
                    if (
                      (o.autoRotate &&
                        (o.autoRotate.rotation = o.mod
                          ? o.mod.call(
                              this._tween,
                              a.rotation,
                              this.t,
                              this._tween
                            )
                          : a.rotation),
                      1 === t || 0 === t)
                    )
                      for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l; ) {
                        if ((i = l.t).type) {
                          if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                              r += i["xn" + n] + i["xs" + (n + 1)];
                            i[s] = r;
                          }
                        } else i[s] = i.s + i.xs0;
                        l = l._next;
                      }
                  }),
                  function (t, e, i, n, r) {
                    (this.t = t),
                      (this.p = e),
                      (this.v = i),
                      (this.r = r),
                      n && ((n._prev = this), (this._next = n));
                  }),
                bt =
                  ((G._parseToProxy = function (t, e, i, n, r, s) {
                    var o,
                      a,
                      l,
                      u,
                      h,
                      c = n,
                      f = {},
                      p = {},
                      d = i._transform,
                      m = B;
                    for (
                      i._transform = null,
                        B = e,
                        n = h = i.parse(t, e, n, r),
                        B = m,
                        s &&
                          ((i._transform = d),
                          c &&
                            ((c._prev = null),
                            c._prev && (c._prev._next = null)));
                      n && n !== c;

                    ) {
                      if (
                        n.type <= 1 &&
                        ((p[(a = n.p)] = n.s + n.c),
                        (f[a] = n.s),
                        s || ((u = new Tt(n, "s", a, u, n.r)), (n.c = 0)),
                        1 === n.type)
                      )
                        for (o = n.l; --o > 0; )
                          (l = "xn" + o),
                            (p[(a = n.p + "_" + l)] = n.data[l]),
                            (f[a] = n[l]),
                            s || (u = new Tt(n, l, a, u, n.rxp[l]));
                      n = n._next;
                    }
                    return { proxy: f, end: p, firstMPT: u, pt: h };
                  }),
                  (G.CSSPropTween = function (t, e, n, r, o, a, l, u, h, c, f) {
                    (this.t = t),
                      (this.p = e),
                      (this.s = n),
                      (this.c = r),
                      (this.n = l || e),
                      t instanceof bt || s.push(this.n),
                      (this.r = u
                        ? "function" == typeof u
                          ? u
                          : Math.round
                        : u),
                      (this.type = a || 0),
                      h && ((this.pr = h), (i = !0)),
                      (this.b = void 0 === c ? n : c),
                      (this.e = void 0 === f ? n + r : f),
                      o && ((this._next = o), (o._prev = this));
                  })),
                Pt = function (t, e, i, n, r, s) {
                  var o = new bt(t, e, i, n - i, r, -1, s);
                  return (o.b = i), (o.e = o.xs0 = n), o;
                },
                St = (o.parseComplex = function (t, e, i, n, r, s, a, l, u, h) {
                  (i = i || s || ""),
                    "function" == typeof n && (n = n(y, v)),
                    (a = new bt(t, e, 0, 0, a, h ? 2 : 1, null, !1, l, i, n)),
                    (n += ""),
                    r &&
                      yt.test(n + i) &&
                      (o.colorStringFilter((n = [i, n])),
                      (i = n[0]),
                      (n = n[1]));
                  var c,
                    p,
                    d,
                    m,
                    _,
                    g,
                    T,
                    b,
                    P,
                    S,
                    k,
                    A,
                    O,
                    C = i.split(", ").join(",").split(" "),
                    E = n.split(", ").join(",").split(" "),
                    R = C.length,
                    M = !1 !== f;
                  for (
                    (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                      (-1 !== (n + i).indexOf("rgb") ||
                      -1 !== (n + i).indexOf("hsl")
                        ? ((C = C.join(" ").replace(z, ", ").split(" ")),
                          (E = E.join(" ").replace(z, ", ").split(" ")))
                        : ((C = C.join(" ").split(",").join(", ").split(" ")),
                          (E = E.join(" ").split(",").join(", ").split(" "))),
                      (R = C.length)),
                      R !== E.length && (R = (C = (s || "").split(" ")).length),
                      a.plugin = u,
                      a.setRatio = h,
                      yt.lastIndex = 0,
                      c = 0;
                    c < R;
                    c++
                  )
                    if (
                      ((m = C[c]),
                      (_ = E[c] + ""),
                      (b = parseFloat(m)) || 0 === b)
                    )
                      a.appendXtra(
                        "",
                        b,
                        ft(_, b),
                        _.replace(w, ""),
                        !(!M || -1 === _.indexOf("px")) && Math.round,
                        !0
                      );
                    else if (r && yt.test(m))
                      (A = ")" + ((A = _.indexOf(")") + 1) ? _.substr(A) : "")),
                        (O = -1 !== _.indexOf("hsl") && $),
                        (S = _),
                        (m = gt(m, O)),
                        (_ = gt(_, O)),
                        (P = m.length + _.length > 6) && !$ && 0 === _[3]
                          ? ((a["xs" + a.l] += a.l
                              ? " transparent"
                              : "transparent"),
                            (a.e = a.e.split(E[c]).join("transparent")))
                          : ($ || (P = !1),
                            O
                              ? a
                                  .appendXtra(
                                    S.substr(0, S.indexOf("hsl")) +
                                      (P ? "hsla(" : "hsl("),
                                    m[0],
                                    ft(_[0], m[0]),
                                    ",",
                                    !1,
                                    !0
                                  )
                                  .appendXtra(
                                    "",
                                    m[1],
                                    ft(_[1], m[1]),
                                    "%,",
                                    !1
                                  )
                                  .appendXtra(
                                    "",
                                    m[2],
                                    ft(_[2], m[2]),
                                    P ? "%," : "%" + A,
                                    !1
                                  )
                              : a
                                  .appendXtra(
                                    S.substr(0, S.indexOf("rgb")) +
                                      (P ? "rgba(" : "rgb("),
                                    m[0],
                                    _[0] - m[0],
                                    ",",
                                    Math.round,
                                    !0
                                  )
                                  .appendXtra(
                                    "",
                                    m[1],
                                    _[1] - m[1],
                                    ",",
                                    Math.round
                                  )
                                  .appendXtra(
                                    "",
                                    m[2],
                                    _[2] - m[2],
                                    P ? "," : A,
                                    Math.round
                                  ),
                            P &&
                              ((m = m.length < 4 ? 1 : m[3]),
                              a.appendXtra(
                                "",
                                m,
                                (_.length < 4 ? 1 : _[3]) - m,
                                A,
                                !1
                              ))),
                        (yt.lastIndex = 0);
                    else if ((g = m.match(x))) {
                      if (!(T = _.match(w)) || T.length !== g.length) return a;
                      for (d = 0, p = 0; p < g.length; p++)
                        (k = g[p]),
                          (S = m.indexOf(k, d)),
                          a.appendXtra(
                            m.substr(d, S - d),
                            Number(k),
                            ft(T[p], k),
                            "",
                            !(!M || "px" !== m.substr(S + k.length, 2)) &&
                              Math.round,
                            0 === p
                          ),
                          (d = S + k.length);
                      a["xs" + a.l] += m.substr(d);
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + _ : _;
                  if (-1 !== n.indexOf("=") && a.data) {
                    for (A = a.xs0 + a.data.s, c = 1; c < a.l; c++)
                      A += a["xs" + c] + a.data["xn" + c];
                    a.e = A + a["xs" + c];
                  }
                  return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                }),
                kt = 9;
              for ((c = bt.prototype).l = c.pr = 0; --kt > 0; )
                (c["xn" + kt] = 0), (c["xs" + kt] = "");
              (c.xs0 = ""),
                (c._next =
                  c._prev =
                  c.xfirst =
                  c.data =
                  c.plugin =
                  c.setRatio =
                  c.rxp =
                    null),
                (c.appendXtra = function (t, e, i, n, r, s) {
                  var o = this,
                    a = o.l;
                  return (
                    (o["xs" + a] +=
                      s && (a || o["xs" + a]) ? " " + t : t || ""),
                    i || 0 === a || o.plugin
                      ? (o.l++,
                        (o.type = o.setRatio ? 2 : 1),
                        (o["xs" + o.l] = n || ""),
                        a > 0
                          ? ((o.data["xn" + a] = e + i),
                            (o.rxp["xn" + a] = r),
                            (o["xn" + a] = e),
                            o.plugin ||
                              ((o.xfirst = new bt(
                                o,
                                "xn" + a,
                                e,
                                i,
                                o.xfirst || o,
                                0,
                                o.n,
                                r,
                                o.pr
                              )),
                              (o.xfirst.xs0 = 0)),
                            o)
                          : ((o.data = { s: e + i }),
                            (o.rxp = {}),
                            (o.s = e),
                            (o.c = i),
                            (o.r = r),
                            o))
                      : ((o["xs" + a] += e + (n || "")), o)
                  );
                });
              var At = function (t, e) {
                  (e = e || {}),
                    (this.p = (e.prefix && tt(t)) || t),
                    (h[t] = h[this.p] = this),
                    (this.format =
                      e.formatter ||
                      xt(e.defaultValue, e.color, e.collapsible, e.multi)),
                    e.parser && (this.parse = e.parser),
                    (this.clrs = e.color),
                    (this.multi = e.multi),
                    (this.keyword = e.keyword),
                    (this.dflt = e.defaultValue),
                    (this.allowFunc = e.allowFunc),
                    (this.pr = e.priority || 0);
                },
                Ot = (G._registerComplexSpecialProp = function (t, e, i) {
                  "object" !== (void 0 === e ? "undefined" : a(e)) &&
                    (e = { parser: i });
                  var n,
                    r = t.split(","),
                    s = e.defaultValue;
                  for (i = i || [s], n = 0; n < r.length; n++)
                    (e.prefix = 0 === n && e.prefix),
                      (e.defaultValue = i[n] || s),
                      new At(r[n], e);
                }),
                Ct = (G._registerPluginProp = function (t) {
                  if (!h[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Ot(t, {
                      parser: function (t, i, n, r, s, o, a) {
                        var l = u.com.greensock.plugins[e];
                        return l
                          ? (l._cssRegister(), h[n].parse(t, i, n, r, s, o, a))
                          : (Z("Error: " + e + " js file not loaded."), s);
                      },
                    });
                  }
                });
              ((c = At.prototype).parseComplex = function (t, e, i, n, r, s) {
                var o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  f = this.keyword;
                if (
                  (this.multi &&
                    (z.test(i) || z.test(e)
                      ? ((a = e.replace(z, "|").split("|")),
                        (l = i.replace(z, "|").split("|")))
                      : f && ((a = [e]), (l = [i]))),
                  l)
                ) {
                  for (
                    u = l.length > a.length ? l.length : a.length, o = 0;
                    o < u;
                    o++
                  )
                    (e = a[o] = a[o] || this.dflt),
                      (i = l[o] = l[o] || this.dflt),
                      f &&
                        (h = e.indexOf(f)) !== (c = i.indexOf(f)) &&
                        (-1 === c
                          ? (a[o] = a[o].split(f).join(""))
                          : -1 === h && (a[o] += " " + f));
                  (e = a.join(", ")), (i = l.join(", "));
                }
                return St(
                  t,
                  this.p,
                  e,
                  i,
                  this.clrs,
                  this.dflt,
                  n,
                  this.pr,
                  r,
                  s
                );
              }),
                (c.parse = function (t, e, i, n, s, o, a) {
                  return this.parseComplex(
                    t.style,
                    this.format(nt(t, this.p, r, !1, this.dflt)),
                    this.format(e),
                    s,
                    o
                  );
                }),
                (o.registerSpecialProp = function (t, e, i) {
                  Ot(t, {
                    parser: function (t, n, r, s, o, a, l) {
                      var u = new bt(t, r, 0, 0, o, 2, r, !1, i);
                      return (
                        (u.plugin = a), (u.setRatio = e(t, n, s._tween, r)), u
                      );
                    },
                    priority: i,
                  });
                }),
                (o.useSVGTransformAttr = !0);
              var Et,
                Rt,
                Mt,
                It,
                Ft,
                Nt =
                  "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
                    ","
                  ),
                Dt = tt("transform"),
                zt = K + "transform",
                Lt = tt("transformOrigin"),
                jt = null !== tt("perspective"),
                Xt = (G.Transform = function () {
                  (this.perspective =
                    parseFloat(o.defaultTransformPerspective) || 0),
                    (this.force3D =
                      !(!1 === o.defaultForce3D || !jt) &&
                      (o.defaultForce3D || "auto"));
                }),
                Bt = l.SVGElement,
                Yt = function (t, e, i) {
                  var n,
                    r = U.createElementNS("http://www.w3.org/2000/svg", t),
                    s = /([a-z])([A-Z])/g;
                  for (n in i)
                    r.setAttributeNS(
                      null,
                      n.replace(s, "$1-$2").toLowerCase(),
                      i[n]
                    );
                  return e.appendChild(r), r;
                },
                Ut = U.documentElement || {},
                Ht =
                  ((Ft = g || (/Android/i.test(W) && !l.chrome)),
                  U.createElementNS &&
                    Ut.appendChild &&
                    !Ft &&
                    ((It = (Mt = Yt("rect", (Rt = Yt("svg", Ut)), {
                      width: 100,
                      height: 50,
                      x: 100,
                    })).getBoundingClientRect().width),
                    (Mt.style[Lt] = "50% 50%"),
                    (Mt.style[Dt] = "scaleX(0.5)"),
                    (Ft =
                      It === Mt.getBoundingClientRect().width && !(m && jt)),
                    Ut.removeChild(Rt)),
                  Ft),
                qt = function (t, e, i, n, r, s) {
                  var a,
                    l,
                    u,
                    h,
                    c,
                    f,
                    p,
                    d,
                    m,
                    _,
                    g,
                    v,
                    y,
                    x,
                    w = t._gsTransform,
                    T = Wt(t, !0);
                  w && ((y = w.xOrigin), (x = w.yOrigin)),
                    (!n || (a = n.split(" ")).length < 2) &&
                      (0 === (p = t.getBBox()).x &&
                        0 === p.y &&
                        p.width + p.height === 0 &&
                        (p = {
                          x:
                            parseFloat(
                              t.hasAttribute("x")
                                ? t.getAttribute("x")
                                : t.hasAttribute("cx")
                                ? t.getAttribute("cx")
                                : 0
                            ) || 0,
                          y:
                            parseFloat(
                              t.hasAttribute("y")
                                ? t.getAttribute("y")
                                : t.hasAttribute("cy")
                                ? t.getAttribute("cy")
                                : 0
                            ) || 0,
                          width: 0,
                          height: 0,
                        }),
                      (a = [
                        (-1 !== (e = ct(e).split(" "))[0].indexOf("%")
                          ? (parseFloat(e[0]) / 100) * p.width
                          : parseFloat(e[0])) + p.x,
                        (-1 !== e[1].indexOf("%")
                          ? (parseFloat(e[1]) / 100) * p.height
                          : parseFloat(e[1])) + p.y,
                      ])),
                    (i.xOrigin = h = parseFloat(a[0])),
                    (i.yOrigin = c = parseFloat(a[1])),
                    n &&
                      T !== Gt &&
                      ((f = T[0]),
                      (p = T[1]),
                      (d = T[2]),
                      (m = T[3]),
                      (_ = T[4]),
                      (g = T[5]),
                      (v = f * m - p * d) &&
                        ((l = h * (m / v) + c * (-d / v) + (d * g - m * _) / v),
                        (u = h * (-p / v) + c * (f / v) - (f * g - p * _) / v),
                        (h = i.xOrigin = a[0] = l),
                        (c = i.yOrigin = a[1] = u))),
                    w &&
                      (s &&
                        ((i.xOffset = w.xOffset),
                        (i.yOffset = w.yOffset),
                        (w = i)),
                      r || (!1 !== r && !1 !== o.defaultSmoothOrigin)
                        ? ((l = h - y),
                          (u = c - x),
                          (w.xOffset += l * T[0] + u * T[2] - l),
                          (w.yOffset += l * T[1] + u * T[3] - u))
                        : (w.xOffset = w.yOffset = 0)),
                    s || t.setAttribute("data-svg-origin", a.join(" "));
                },
                Vt = function (t) {
                  return !(
                    !Bt ||
                    !t.getCTM ||
                    (t.parentNode && !t.ownerSVGElement) ||
                    !(function (t) {
                      try {
                        return t.getBBox();
                      } catch (e) {
                        return function t(e) {
                          var i,
                            n = H(
                              "svg",
                              (this.ownerSVGElement &&
                                this.ownerSVGElement.getAttribute("xmlns")) ||
                                "http://www.w3.org/2000/svg"
                            ),
                            r = this.parentNode,
                            s = this.nextSibling,
                            o = this.style.cssText;
                          if (
                            (Ut.appendChild(n),
                            n.appendChild(this),
                            (this.style.display = "block"),
                            e)
                          )
                            try {
                              (i = this.getBBox()),
                                (this._originalGetBBox = this.getBBox),
                                (this.getBBox = t);
                            } catch (t) {}
                          else
                            this._originalGetBBox &&
                              (i = this._originalGetBBox());
                          return (
                            s ? r.insertBefore(this, s) : r.appendChild(this),
                            Ut.removeChild(n),
                            (this.style.cssText = o),
                            i
                          );
                        }.call(t, !0);
                      }
                    })(t)
                  );
                },
                Gt = [1, 0, 0, 1, 0, 0],
                Wt = function (t, e) {
                  var i,
                    n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u = t._gsTransform || new Xt(),
                    h = t.style;
                  if (
                    (Dt
                      ? (n = nt(t, zt, null, !0))
                      : t.currentStyle &&
                        (n =
                          (n = t.currentStyle.filter.match(N)) && 4 === n.length
                            ? [
                                n[0].substr(4),
                                Number(n[2].substr(4)),
                                Number(n[1].substr(4)),
                                n[3].substr(4),
                                u.x || 0,
                                u.y || 0,
                              ].join(",")
                            : ""),
                    (i =
                      !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                    Dt &&
                      i &&
                      !t.offsetParent &&
                      t !== Ut &&
                      ((s = h.display),
                      (h.display = "block"),
                      ((l = t.parentNode) && t.offsetParent) ||
                        ((o = 1), (a = t.nextSibling), Ut.appendChild(t)),
                      (i =
                        !(n = nt(t, zt, null, !0)) ||
                        "none" === n ||
                        "matrix(1, 0, 0, 1, 0, 0)" === n),
                      s ? (h.display = s) : Jt(h, "display"),
                      o &&
                        (a
                          ? l.insertBefore(t, a)
                          : l
                          ? l.appendChild(t)
                          : Ut.removeChild(t))),
                    (u.svg || (t.getCTM && Vt(t))) &&
                      (i &&
                        -1 !== (h[Dt] + "").indexOf("matrix") &&
                        ((n = h[Dt]), (i = 0)),
                      (r = t.getAttribute("transform")),
                      i &&
                        r &&
                        ((n =
                          "matrix(" +
                          (r = t.transform.baseVal.consolidate().matrix).a +
                          "," +
                          r.b +
                          "," +
                          r.c +
                          "," +
                          r.d +
                          "," +
                          r.e +
                          "," +
                          r.f +
                          ")"),
                        (i = 0))),
                    i)
                  )
                    return Gt;
                  for (r = (n || "").match(x) || [], kt = r.length; --kt > -1; )
                    (s = Number(r[kt])),
                      (r[kt] = (o = s - (s |= 0))
                        ? ((1e5 * o + (o < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s
                        : s);
                  return e && r.length > 6
                    ? [r[0], r[1], r[4], r[5], r[12], r[13]]
                    : r;
                },
                $t = (G.getTransform = function (t, i, n, r) {
                  if (t._gsTransform && n && !r) return t._gsTransform;
                  var s,
                    a,
                    l,
                    u,
                    h,
                    c,
                    f = (n && t._gsTransform) || new Xt(),
                    p = f.scaleX < 0,
                    d =
                      (jt &&
                        (parseFloat(nt(t, Lt, i, !1, "0 0 0").split(" ")[2]) ||
                          f.zOrigin)) ||
                      0,
                    m = parseFloat(o.defaultTransformPerspective) || 0;
                  if (
                    ((f.svg = !(!t.getCTM || !Vt(t))),
                    f.svg &&
                      (qt(
                        t,
                        nt(t, Lt, i, !1, "50% 50%") + "",
                        f,
                        t.getAttribute("data-svg-origin")
                      ),
                      (Et = o.useSVGTransformAttr || Ht)),
                    (s = Wt(t)) !== Gt)
                  ) {
                    if (16 === s.length) {
                      var _,
                        g,
                        v,
                        y,
                        x,
                        w = s[0],
                        T = s[1],
                        b = s[2],
                        P = s[3],
                        S = s[4],
                        k = s[5],
                        A = s[6],
                        O = s[7],
                        C = s[8],
                        E = s[9],
                        R = s[10],
                        M = s[12],
                        I = s[13],
                        F = s[14],
                        N = s[11],
                        D = Math.atan2(A, R);
                      f.zOrigin &&
                        ((M = C * (F = -f.zOrigin) - s[12]),
                        (I = E * F - s[13]),
                        (F = R * F + f.zOrigin - s[14])),
                        (f.rotationX = D * X),
                        D &&
                          ((_ =
                            S * (y = Math.cos(-D)) + C * (x = Math.sin(-D))),
                          (g = k * y + E * x),
                          (v = A * y + R * x),
                          (C = S * -x + C * y),
                          (E = k * -x + E * y),
                          (R = A * -x + R * y),
                          (N = O * -x + N * y),
                          (S = _),
                          (k = g),
                          (A = v)),
                        (D = Math.atan2(-b, R)),
                        (f.rotationY = D * X),
                        D &&
                          ((g =
                            T * (y = Math.cos(-D)) - E * (x = Math.sin(-D))),
                          (v = b * y - R * x),
                          (E = T * x + E * y),
                          (R = b * x + R * y),
                          (N = P * x + N * y),
                          (w = _ = w * y - C * x),
                          (T = g),
                          (b = v)),
                        (D = Math.atan2(T, w)),
                        (f.rotation = D * X),
                        D &&
                          ((_ = w * (y = Math.cos(D)) + T * (x = Math.sin(D))),
                          (g = S * y + k * x),
                          (v = C * y + E * x),
                          (T = T * y - w * x),
                          (k = k * y - S * x),
                          (E = E * y - C * x),
                          (w = _),
                          (S = g),
                          (C = v)),
                        f.rotationX &&
                          Math.abs(f.rotationX) + Math.abs(f.rotation) >
                            359.9 &&
                          ((f.rotationX = f.rotation = 0),
                          (f.rotationY = 180 - f.rotationY)),
                        (D = Math.atan2(S, k)),
                        (f.scaleX =
                          ((1e5 * Math.sqrt(w * w + T * T + b * b) + 0.5) | 0) /
                          1e5),
                        (f.scaleY =
                          ((1e5 * Math.sqrt(k * k + A * A) + 0.5) | 0) / 1e5),
                        (f.scaleZ =
                          ((1e5 * Math.sqrt(C * C + E * E + R * R) + 0.5) | 0) /
                          1e5),
                        (w /= f.scaleX),
                        (S /= f.scaleY),
                        (T /= f.scaleX),
                        (k /= f.scaleY),
                        Math.abs(D) > 2e-5
                          ? ((f.skewX = D * X),
                            (S = 0),
                            "simple" !== f.skewType &&
                              (f.scaleY *= 1 / Math.cos(D)))
                          : (f.skewX = 0),
                        (f.perspective = N ? 1 / (N < 0 ? -N : N) : 0),
                        (f.x = M),
                        (f.y = I),
                        (f.z = F),
                        f.svg &&
                          ((f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * S)),
                          (f.y -= f.yOrigin - (f.yOrigin * T - f.xOrigin * k)));
                    } else if (
                      !jt ||
                      r ||
                      !s.length ||
                      f.x !== s[4] ||
                      f.y !== s[5] ||
                      (!f.rotationX && !f.rotationY)
                    ) {
                      var z = s.length >= 6,
                        L = z ? s[0] : 1,
                        j = s[1] || 0,
                        B = s[2] || 0,
                        Y = z ? s[3] : 1;
                      (f.x = s[4] || 0),
                        (f.y = s[5] || 0),
                        (l = Math.sqrt(L * L + j * j)),
                        (u = Math.sqrt(Y * Y + B * B)),
                        (h = L || j ? Math.atan2(j, L) * X : f.rotation || 0),
                        (c = B || Y ? Math.atan2(B, Y) * X + h : f.skewX || 0),
                        (f.scaleX = l),
                        (f.scaleY = u),
                        (f.rotation = h),
                        (f.skewX = c),
                        jt &&
                          ((f.rotationX = f.rotationY = f.z = 0),
                          (f.perspective = m),
                          (f.scaleZ = 1)),
                        f.svg &&
                          ((f.x -= f.xOrigin - (f.xOrigin * L + f.yOrigin * B)),
                          (f.y -= f.yOrigin - (f.xOrigin * j + f.yOrigin * Y)));
                    }
                    for (a in (Math.abs(f.skewX) > 90 &&
                      Math.abs(f.skewX) < 270 &&
                      (p
                        ? ((f.scaleX *= -1),
                          (f.skewX += f.rotation <= 0 ? 180 : -180),
                          (f.rotation += f.rotation <= 0 ? 180 : -180))
                        : ((f.scaleY *= -1),
                          (f.skewX += f.skewX <= 0 ? 180 : -180))),
                    (f.zOrigin = d),
                    f))
                      f[a] < 2e-5 && f[a] > -2e-5 && (f[a] = 0);
                  }
                  return (
                    n &&
                      ((t._gsTransform = f),
                      f.svg &&
                        (Et && t.style[Dt]
                          ? e.delayedCall(0.001, function () {
                              Jt(t.style, Dt);
                            })
                          : !Et &&
                            t.getAttribute("transform") &&
                            e.delayedCall(0.001, function () {
                              t.removeAttribute("transform");
                            }))),
                    f
                  );
                }),
                Qt = function (t) {
                  var e,
                    i,
                    n = this.data,
                    r = -n.rotation * j,
                    s = r + n.skewX * j,
                    o = ((Math.cos(r) * n.scaleX * 1e5) | 0) / 1e5,
                    a = ((Math.sin(r) * n.scaleX * 1e5) | 0) / 1e5,
                    l = ((Math.sin(s) * -n.scaleY * 1e5) | 0) / 1e5,
                    u = ((Math.cos(s) * n.scaleY * 1e5) | 0) / 1e5,
                    h = this.t.style,
                    c = this.t.currentStyle;
                  if (c) {
                    (i = a),
                      (a = -l),
                      (l = -i),
                      (e = c.filter),
                      (h.filter = "");
                    var f,
                      p,
                      d = this.t.offsetWidth,
                      m = this.t.offsetHeight,
                      _ = "absolute" !== c.position,
                      v =
                        "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                        o +
                        ", M12=" +
                        a +
                        ", M21=" +
                        l +
                        ", M22=" +
                        u,
                      y = n.x + (d * n.xPercent) / 100,
                      x = n.y + (m * n.yPercent) / 100;
                    if (
                      (null != n.ox &&
                        ((y +=
                          (f = (n.oxp ? d * n.ox * 0.01 : n.ox) - d / 2) -
                          (f * o +
                            (p = (n.oyp ? m * n.oy * 0.01 : n.oy) - m / 2) *
                              a)),
                        (x += p - (f * l + p * u))),
                      (v += _
                        ? ", Dx=" +
                          ((f = d / 2) - (f * o + (p = m / 2) * a) + y) +
                          ", Dy=" +
                          (p - (f * l + p * u) + x) +
                          ")"
                        : ", sizingMethod='auto expand')"),
                      -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                        ? (h.filter = e.replace(D, v))
                        : (h.filter = v + " " + e),
                      (0 !== t && 1 !== t) ||
                        (1 === o &&
                          0 === a &&
                          0 === l &&
                          1 === u &&
                          ((_ && -1 === v.indexOf("Dx=0, Dy=0")) ||
                            (k.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                            (-1 === e.indexOf(e.indexOf("Alpha")) &&
                              h.removeAttribute("filter")))),
                      !_)
                    ) {
                      var w,
                        T,
                        b,
                        P = g < 8 ? 1 : -1;
                      for (
                        f = n.ieOffsetX || 0,
                          p = n.ieOffsetY || 0,
                          n.ieOffsetX = Math.round(
                            (d -
                              ((o < 0 ? -o : o) * d + (a < 0 ? -a : a) * m)) /
                              2 +
                              y
                          ),
                          n.ieOffsetY = Math.round(
                            (m -
                              ((u < 0 ? -u : u) * m + (l < 0 ? -l : l) * d)) /
                              2 +
                              x
                          ),
                          kt = 0;
                        kt < 4;
                        kt++
                      )
                        (b =
                          (i =
                            -1 !== (w = c[(T = ut[kt])]).indexOf("px")
                              ? parseFloat(w)
                              : rt(
                                  this.t,
                                  T,
                                  parseFloat(w),
                                  w.replace(S, "")
                                ) || 0) !== n[T]
                            ? kt < 2
                              ? -n.ieOffsetX
                              : -n.ieOffsetY
                            : kt < 2
                            ? f - n.ieOffsetX
                            : p - n.ieOffsetY),
                          (h[T] =
                            (n[T] = Math.round(
                              i - b * (0 === kt || 2 === kt ? 1 : P)
                            )) + "px");
                    }
                  }
                },
                Zt =
                  (G.set3DTransformRatio =
                  G.setTransformRatio =
                    function (t) {
                      var e,
                        i,
                        n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        u,
                        h,
                        c,
                        f,
                        p,
                        d,
                        _,
                        g,
                        v,
                        y,
                        x,
                        w,
                        T,
                        b = this.data,
                        P = this.t.style,
                        S = b.rotation,
                        k = b.rotationX,
                        A = b.rotationY,
                        O = b.scaleX,
                        C = b.scaleY,
                        E = b.scaleZ,
                        R = b.x,
                        M = b.y,
                        I = b.z,
                        F = b.svg,
                        N = b.perspective,
                        D = b.force3D,
                        z = b.skewY,
                        L = b.skewX;
                      if (
                        (z && ((L += z), (S += z)),
                        !(
                          (((1 !== t && 0 !== t) ||
                            "auto" !== D ||
                            (this.tween._totalTime !==
                              this.tween._totalDuration &&
                              this.tween._totalTime)) &&
                            D) ||
                          I ||
                          N ||
                          A ||
                          k ||
                          1 !== E
                        ) ||
                          (Et && F) ||
                          !jt)
                      )
                        S || L || F
                          ? ((S *= j),
                            (w = L * j),
                            (T = 1e5),
                            (i = Math.cos(S) * O),
                            (s = Math.sin(S) * O),
                            (n = Math.sin(S - w) * -C),
                            (o = Math.cos(S - w) * C),
                            w &&
                              "simple" === b.skewType &&
                              ((e = Math.tan(w - z * j)),
                              (n *= e = Math.sqrt(1 + e * e)),
                              (o *= e),
                              z &&
                                ((e = Math.tan(z * j)),
                                (i *= e = Math.sqrt(1 + e * e)),
                                (s *= e))),
                            F &&
                              ((R +=
                                b.xOrigin -
                                (b.xOrigin * i + b.yOrigin * n) +
                                b.xOffset),
                              (M +=
                                b.yOrigin -
                                (b.xOrigin * s + b.yOrigin * o) +
                                b.yOffset),
                              Et &&
                                (b.xPercent || b.yPercent) &&
                                ((_ = this.t.getBBox()),
                                (R += 0.01 * b.xPercent * _.width),
                                (M += 0.01 * b.yPercent * _.height)),
                              R < (_ = 1e-6) && R > -_ && (R = 0),
                              M < _ && M > -_ && (M = 0)),
                            (x =
                              ((i * T) | 0) / T +
                              "," +
                              ((s * T) | 0) / T +
                              "," +
                              ((n * T) | 0) / T +
                              "," +
                              ((o * T) | 0) / T +
                              "," +
                              R +
                              "," +
                              M +
                              ")"),
                            F && Et
                              ? this.t.setAttribute("transform", "matrix(" + x)
                              : (P[Dt] =
                                  (b.xPercent || b.yPercent
                                    ? "translate(" +
                                      b.xPercent +
                                      "%," +
                                      b.yPercent +
                                      "%) matrix("
                                    : "matrix(") + x))
                          : (P[Dt] =
                              (b.xPercent || b.yPercent
                                ? "translate(" +
                                  b.xPercent +
                                  "%," +
                                  b.yPercent +
                                  "%) matrix("
                                : "matrix(") +
                              O +
                              ",0,0," +
                              C +
                              "," +
                              R +
                              "," +
                              M +
                              ")");
                      else {
                        if (
                          (m &&
                            (O < (_ = 1e-4) && O > -_ && (O = E = 2e-5),
                            C < _ && C > -_ && (C = E = 2e-5),
                            !N || b.z || b.rotationX || b.rotationY || (N = 0)),
                          S || L)
                        )
                          (S *= j),
                            (g = i = Math.cos(S)),
                            (v = s = Math.sin(S)),
                            L &&
                              ((S -= L * j),
                              (g = Math.cos(S)),
                              (v = Math.sin(S)),
                              "simple" === b.skewType &&
                                ((e = Math.tan((L - z) * j)),
                                (g *= e = Math.sqrt(1 + e * e)),
                                (v *= e),
                                b.skewY &&
                                  ((e = Math.tan(z * j)),
                                  (i *= e = Math.sqrt(1 + e * e)),
                                  (s *= e)))),
                            (n = -v),
                            (o = g);
                        else {
                          if (!(A || k || 1 !== E || N || F))
                            return void (P[Dt] =
                              (b.xPercent || b.yPercent
                                ? "translate(" +
                                  b.xPercent +
                                  "%," +
                                  b.yPercent +
                                  "%) translate3d("
                                : "translate3d(") +
                              R +
                              "px," +
                              M +
                              "px," +
                              I +
                              "px)" +
                              (1 !== O || 1 !== C
                                ? " scale(" + O + "," + C + ")"
                                : ""));
                          (i = o = 1), (n = s = 0);
                        }
                        (h = 1),
                          (r = a = l = u = c = f = 0),
                          (p = N ? -1 / N : 0),
                          (d = b.zOrigin),
                          (_ = 1e-6),
                          (S = A * j) &&
                            ((g = Math.cos(S)),
                            (l = -(v = Math.sin(S))),
                            (c = p * -v),
                            (r = i * v),
                            (a = s * v),
                            (h = g),
                            (p *= g),
                            (i *= g),
                            (s *= g)),
                          (S = k * j) &&
                            ((e =
                              n * (g = Math.cos(S)) + r * (v = Math.sin(S))),
                            (y = o * g + a * v),
                            (u = h * v),
                            (f = p * v),
                            (r = n * -v + r * g),
                            (a = o * -v + a * g),
                            (h *= g),
                            (p *= g),
                            (n = e),
                            (o = y)),
                          1 !== E && ((r *= E), (a *= E), (h *= E), (p *= E)),
                          1 !== C && ((n *= C), (o *= C), (u *= C), (f *= C)),
                          1 !== O && ((i *= O), (s *= O), (l *= O), (c *= O)),
                          (d || F) &&
                            (d &&
                              ((R += r * -d), (M += a * -d), (I += h * -d + d)),
                            F &&
                              ((R +=
                                b.xOrigin -
                                (b.xOrigin * i + b.yOrigin * n) +
                                b.xOffset),
                              (M +=
                                b.yOrigin -
                                (b.xOrigin * s + b.yOrigin * o) +
                                b.yOffset)),
                            R < _ && R > -_ && (R = "0"),
                            M < _ && M > -_ && (M = "0"),
                            I < _ && I > -_ && (I = 0)),
                          (x =
                            b.xPercent || b.yPercent
                              ? "translate(" +
                                b.xPercent +
                                "%," +
                                b.yPercent +
                                "%) matrix3d("
                              : "matrix3d("),
                          (x +=
                            (i < _ && i > -_ ? "0" : i) +
                            "," +
                            (s < _ && s > -_ ? "0" : s) +
                            "," +
                            (l < _ && l > -_ ? "0" : l)),
                          (x +=
                            "," +
                            (c < _ && c > -_ ? "0" : c) +
                            "," +
                            (n < _ && n > -_ ? "0" : n) +
                            "," +
                            (o < _ && o > -_ ? "0" : o)),
                          k || A || 1 !== E
                            ? ((x +=
                                "," +
                                (u < _ && u > -_ ? "0" : u) +
                                "," +
                                (f < _ && f > -_ ? "0" : f) +
                                "," +
                                (r < _ && r > -_ ? "0" : r)),
                              (x +=
                                "," +
                                (a < _ && a > -_ ? "0" : a) +
                                "," +
                                (h < _ && h > -_ ? "0" : h) +
                                "," +
                                (p < _ && p > -_ ? "0" : p) +
                                ","))
                            : (x += ",0,0,0,0,1,0,"),
                          (x +=
                            R +
                            "," +
                            M +
                            "," +
                            I +
                            "," +
                            (N ? 1 + -I / N : 1) +
                            ")"),
                          (P[Dt] = x);
                      }
                    });
              ((c = Xt.prototype).x =
                c.y =
                c.z =
                c.skewX =
                c.skewY =
                c.rotation =
                c.rotationX =
                c.rotationY =
                c.zOrigin =
                c.xPercent =
                c.yPercent =
                c.xOffset =
                c.yOffset =
                  0),
                (c.scaleX = c.scaleY = c.scaleZ = 1),
                Ot(
                  "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                  {
                    parser: function (t, e, i, n, s, l, u) {
                      if (n._lastParsedTransform === u) return s;
                      n._lastParsedTransform = u;
                      var h =
                        u.scale && "function" == typeof u.scale ? u.scale : 0;
                      h && (u.scale = h(y, t));
                      var c,
                        f,
                        p,
                        d,
                        m,
                        _,
                        g,
                        x,
                        w,
                        T = t._gsTransform,
                        b = t.style,
                        P = Nt.length,
                        S = u,
                        k = {},
                        A = $t(t, r, !0, S.parseTransform),
                        O =
                          S.transform &&
                          ("function" == typeof S.transform
                            ? S.transform(y, v)
                            : S.transform);
                      if (
                        ((A.skewType =
                          S.skewType || A.skewType || o.defaultSkewType),
                        (n._transform = A),
                        "rotationZ" in S && (S.rotation = S.rotationZ),
                        O && "string" == typeof O && Dt)
                      )
                        ((f = q.style)[Dt] = O),
                          (f.display = "block"),
                          (f.position = "absolute"),
                          -1 !== O.indexOf("%") &&
                            ((f.width = nt(t, "width")),
                            (f.height = nt(t, "height"))),
                          U.body.appendChild(q),
                          (c = $t(q, null, !1)),
                          "simple" === A.skewType &&
                            (c.scaleY *= Math.cos(c.skewX * j)),
                          A.svg &&
                            ((_ = A.xOrigin),
                            (g = A.yOrigin),
                            (c.x -= A.xOffset),
                            (c.y -= A.yOffset),
                            (S.transformOrigin || S.svgOrigin) &&
                              ((O = {}),
                              qt(
                                t,
                                ct(S.transformOrigin),
                                O,
                                S.svgOrigin,
                                S.smoothOrigin,
                                !0
                              ),
                              (_ = O.xOrigin),
                              (g = O.yOrigin),
                              (c.x -= O.xOffset - A.xOffset),
                              (c.y -= O.yOffset - A.yOffset)),
                            (_ || g) &&
                              ((x = Wt(q, !0)),
                              (c.x -= _ - (_ * x[0] + g * x[2])),
                              (c.y -= g - (_ * x[1] + g * x[3])))),
                          U.body.removeChild(q),
                          c.perspective || (c.perspective = A.perspective),
                          null != S.xPercent &&
                            (c.xPercent = pt(S.xPercent, A.xPercent)),
                          null != S.yPercent &&
                            (c.yPercent = pt(S.yPercent, A.yPercent));
                      else if (
                        "object" === (void 0 === S ? "undefined" : a(S))
                      ) {
                        if (
                          ((c = {
                            scaleX: pt(
                              null != S.scaleX ? S.scaleX : S.scale,
                              A.scaleX
                            ),
                            scaleY: pt(
                              null != S.scaleY ? S.scaleY : S.scale,
                              A.scaleY
                            ),
                            scaleZ: pt(S.scaleZ, A.scaleZ),
                            x: pt(S.x, A.x),
                            y: pt(S.y, A.y),
                            z: pt(S.z, A.z),
                            xPercent: pt(S.xPercent, A.xPercent),
                            yPercent: pt(S.yPercent, A.yPercent),
                            perspective: pt(
                              S.transformPerspective,
                              A.perspective
                            ),
                          }),
                          null != (m = S.directionalRotation))
                        )
                          if ("object" === (void 0 === m ? "undefined" : a(m)))
                            for (f in m) S[f] = m[f];
                          else S.rotation = m;
                        "string" == typeof S.x &&
                          -1 !== S.x.indexOf("%") &&
                          ((c.x = 0), (c.xPercent = pt(S.x, A.xPercent))),
                          "string" == typeof S.y &&
                            -1 !== S.y.indexOf("%") &&
                            ((c.y = 0), (c.yPercent = pt(S.y, A.yPercent))),
                          (c.rotation = dt(
                            "rotation" in S
                              ? S.rotation
                              : "shortRotation" in S
                              ? S.shortRotation + "_short"
                              : A.rotation,
                            A.rotation,
                            "rotation",
                            k
                          )),
                          jt &&
                            ((c.rotationX = dt(
                              "rotationX" in S
                                ? S.rotationX
                                : "shortRotationX" in S
                                ? S.shortRotationX + "_short"
                                : A.rotationX || 0,
                              A.rotationX,
                              "rotationX",
                              k
                            )),
                            (c.rotationY = dt(
                              "rotationY" in S
                                ? S.rotationY
                                : "shortRotationY" in S
                                ? S.shortRotationY + "_short"
                                : A.rotationY || 0,
                              A.rotationY,
                              "rotationY",
                              k
                            ))),
                          (c.skewX = dt(S.skewX, A.skewX)),
                          (c.skewY = dt(S.skewY, A.skewY));
                      }
                      for (
                        jt &&
                          null != S.force3D &&
                          ((A.force3D = S.force3D), (d = !0)),
                          (p =
                            A.force3D ||
                            A.z ||
                            A.rotationX ||
                            A.rotationY ||
                            c.z ||
                            c.rotationX ||
                            c.rotationY ||
                            c.perspective) ||
                            null == S.scale ||
                            (c.scaleZ = 1);
                        --P > -1;

                      )
                        ((O = c[(w = Nt[P])] - A[w]) > 1e-6 ||
                          O < -1e-6 ||
                          null != S[w] ||
                          null != B[w]) &&
                          ((d = !0),
                          (s = new bt(A, w, A[w], O, s)),
                          w in k && (s.e = k[w]),
                          (s.xs0 = 0),
                          (s.plugin = l),
                          n._overwriteProps.push(s.n));
                      return (
                        (O =
                          "function" == typeof S.transformOrigin
                            ? S.transformOrigin(y, v)
                            : S.transformOrigin),
                        A.svg &&
                          (O || S.svgOrigin) &&
                          ((_ = A.xOffset),
                          (g = A.yOffset),
                          qt(t, ct(O), c, S.svgOrigin, S.smoothOrigin),
                          (s = Pt(
                            A,
                            "xOrigin",
                            (T ? A : c).xOrigin,
                            c.xOrigin,
                            s,
                            "transformOrigin"
                          )),
                          (s = Pt(
                            A,
                            "yOrigin",
                            (T ? A : c).yOrigin,
                            c.yOrigin,
                            s,
                            "transformOrigin"
                          )),
                          (_ === A.xOffset && g === A.yOffset) ||
                            ((s = Pt(
                              A,
                              "xOffset",
                              T ? _ : A.xOffset,
                              A.xOffset,
                              s,
                              "transformOrigin"
                            )),
                            (s = Pt(
                              A,
                              "yOffset",
                              T ? g : A.yOffset,
                              A.yOffset,
                              s,
                              "transformOrigin"
                            ))),
                          (O = "0px 0px")),
                        (O || (jt && p && A.zOrigin)) &&
                          (Dt
                            ? ((d = !0),
                              (w = Lt),
                              O ||
                                (O =
                                  (O = (nt(t, w, r, !1, "50% 50%") + "").split(
                                    " "
                                  ))[0] +
                                  " " +
                                  O[1] +
                                  " " +
                                  A.zOrigin +
                                  "px"),
                              (O += ""),
                              ((s = new bt(
                                b,
                                w,
                                0,
                                0,
                                s,
                                -1,
                                "transformOrigin"
                              )).b = b[w]),
                              (s.plugin = l),
                              jt
                                ? ((f = A.zOrigin),
                                  (O = O.split(" ")),
                                  (A.zOrigin =
                                    (O.length > 2 ? parseFloat(O[2]) : f) || 0),
                                  (s.xs0 = s.e =
                                    O[0] + " " + (O[1] || "50%") + " 0px"),
                                  ((s = new bt(
                                    A,
                                    "zOrigin",
                                    0,
                                    0,
                                    s,
                                    -1,
                                    s.n
                                  )).b = f),
                                  (s.xs0 = s.e = A.zOrigin))
                                : (s.xs0 = s.e = O))
                            : ct(O + "", A)),
                        d &&
                          (n._transformType =
                            (A.svg && Et) || (!p && 3 !== this._transformType)
                              ? 2
                              : 3),
                        h && (u.scale = h),
                        s
                      );
                    },
                    allowFunc: !0,
                    prefix: !0,
                  }
                ),
                Ot("boxShadow", {
                  defaultValue: "0px 0px 0px 0px #999",
                  prefix: !0,
                  color: !0,
                  multi: !0,
                  keyword: "inset",
                }),
                Ot("clipPath", {
                  defaultValue: "inset(0%)",
                  prefix: !0,
                  multi: !0,
                  formatter: xt("inset(0% 0% 0% 0%)", !1, !0),
                }),
                Ot("borderRadius", {
                  defaultValue: "0px",
                  parser: function (t, e, i, s, o, a) {
                    e = this.format(e);
                    var l,
                      u,
                      h,
                      c,
                      f,
                      p,
                      d,
                      m,
                      _,
                      g,
                      v,
                      y,
                      x,
                      w,
                      T,
                      b,
                      P = [
                        "borderTopLeftRadius",
                        "borderTopRightRadius",
                        "borderBottomRightRadius",
                        "borderBottomLeftRadius",
                      ],
                      S = t.style;
                    for (
                      _ = parseFloat(t.offsetWidth),
                        g = parseFloat(t.offsetHeight),
                        l = e.split(" "),
                        u = 0;
                      u < P.length;
                      u++
                    )
                      this.p.indexOf("border") && (P[u] = tt(P[u])),
                        -1 !==
                          (f = c = nt(t, P[u], r, !1, "0px")).indexOf(" ") &&
                          ((f = (c = f.split(" "))[0]), (c = c[1])),
                        (p = h = l[u]),
                        (d = parseFloat(f)),
                        (y = f.substr((d + "").length)),
                        (x = "=" === p.charAt(1))
                          ? ((m = parseInt(p.charAt(0) + "1", 10)),
                            (p = p.substr(2)),
                            (m *= parseFloat(p)),
                            (v =
                              p.substr((m + "").length - (m < 0 ? 1 : 0)) ||
                              ""))
                          : ((m = parseFloat(p)),
                            (v = p.substr((m + "").length))),
                        "" === v && (v = n[i] || y),
                        v !== y &&
                          ((w = rt(t, "borderLeft", d, y)),
                          (T = rt(t, "borderTop", d, y)),
                          "%" === v
                            ? ((f = (w / _) * 100 + "%"),
                              (c = (T / g) * 100 + "%"))
                            : "em" === v
                            ? ((f =
                                w / (b = rt(t, "borderLeft", 1, "em")) + "em"),
                              (c = T / b + "em"))
                            : ((f = w + "px"), (c = T + "px")),
                          x &&
                            ((p = parseFloat(f) + m + v),
                            (h = parseFloat(c) + m + v))),
                        (o = St(
                          S,
                          P[u],
                          f + " " + c,
                          p + " " + h,
                          !1,
                          "0px",
                          o
                        ));
                    return o;
                  },
                  prefix: !0,
                  formatter: xt("0px 0px 0px 0px", !1, !0),
                }),
                Ot(
                  "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
                  {
                    defaultValue: "0px",
                    parser: function (t, e, i, n, s, o) {
                      return St(
                        t.style,
                        i,
                        this.format(nt(t, i, r, !1, "0px 0px")),
                        this.format(e),
                        !1,
                        "0px",
                        s
                      );
                    },
                    prefix: !0,
                    formatter: xt("0px 0px", !1, !0),
                  }
                ),
                Ot("backgroundPosition", {
                  defaultValue: "0 0",
                  parser: function (t, e, i, n, s, o) {
                    var a,
                      l,
                      u,
                      h,
                      c,
                      f,
                      p = "background-position",
                      d = r || it(t),
                      m = this.format(
                        (d
                          ? g
                            ? d.getPropertyValue(p + "-x") +
                              " " +
                              d.getPropertyValue(p + "-y")
                            : d.getPropertyValue(p)
                          : t.currentStyle.backgroundPositionX +
                            " " +
                            t.currentStyle.backgroundPositionY) || "0 0"
                      ),
                      _ = this.format(e);
                    if (
                      (-1 !== m.indexOf("%")) != (-1 !== _.indexOf("%")) &&
                      _.split(",").length < 2 &&
                      (f = nt(t, "backgroundImage").replace(M, "")) &&
                      "none" !== f
                    ) {
                      for (
                        a = m.split(" "),
                          l = _.split(" "),
                          V.setAttribute("src", f),
                          u = 2;
                        --u > -1;

                      )
                        (h = -1 !== (m = a[u]).indexOf("%")) !=
                          (-1 !== l[u].indexOf("%")) &&
                          ((c =
                            0 === u
                              ? t.offsetWidth - V.width
                              : t.offsetHeight - V.height),
                          (a[u] = h
                            ? (parseFloat(m) / 100) * c + "px"
                            : (parseFloat(m) / c) * 100 + "%"));
                      m = a.join(" ");
                    }
                    return this.parseComplex(t.style, m, _, s, o);
                  },
                  formatter: ct,
                }),
                Ot("backgroundSize", {
                  defaultValue: "0 0",
                  formatter: function (t) {
                    return "co" === (t += "").substr(0, 2)
                      ? t
                      : ct(-1 === t.indexOf(" ") ? t + " " + t : t);
                  },
                }),
                Ot("perspective", { defaultValue: "0px", prefix: !0 }),
                Ot("perspectiveOrigin", {
                  defaultValue: "50% 50%",
                  prefix: !0,
                }),
                Ot("transformStyle", { prefix: !0 }),
                Ot("backfaceVisibility", { prefix: !0 }),
                Ot("userSelect", { prefix: !0 }),
                Ot("margin", {
                  parser: wt("marginTop,marginRight,marginBottom,marginLeft"),
                }),
                Ot("padding", {
                  parser: wt(
                    "paddingTop,paddingRight,paddingBottom,paddingLeft"
                  ),
                }),
                Ot("clip", {
                  defaultValue: "rect(0px,0px,0px,0px)",
                  parser: function (t, e, i, n, s, o) {
                    var a, l, u;
                    return (
                      g < 9
                        ? ((l = t.currentStyle),
                          (u = g < 8 ? " " : ","),
                          (a =
                            "rect(" +
                            l.clipTop +
                            u +
                            l.clipRight +
                            u +
                            l.clipBottom +
                            u +
                            l.clipLeft +
                            ")"),
                          (e = this.format(e).split(",").join(u)))
                        : ((a = this.format(nt(t, this.p, r, !1, this.dflt))),
                          (e = this.format(e))),
                      this.parseComplex(t.style, a, e, s, o)
                    );
                  },
                }),
                Ot("textShadow", {
                  defaultValue: "0px 0px 0px #999",
                  color: !0,
                  multi: !0,
                }),
                Ot("autoRound,strictUnits", {
                  parser: function (t, e, i, n, r) {
                    return r;
                  },
                }),
                Ot("border", {
                  defaultValue: "0px solid #000",
                  parser: function (t, e, i, n, s, o) {
                    var a = nt(t, "borderTopWidth", r, !1, "0px"),
                      l = this.format(e).split(" "),
                      u = l[0].replace(S, "");
                    return (
                      "px" !== u &&
                        (a = parseFloat(a) / rt(t, "borderTopWidth", 1, u) + u),
                      this.parseComplex(
                        t.style,
                        this.format(
                          a +
                            " " +
                            nt(t, "borderTopStyle", r, !1, "solid") +
                            " " +
                            nt(t, "borderTopColor", r, !1, "#000")
                        ),
                        l.join(" "),
                        s,
                        o
                      )
                    );
                  },
                  color: !0,
                  formatter: function (t) {
                    var e = t.split(" ");
                    return (
                      e[0] +
                      " " +
                      (e[1] || "solid") +
                      " " +
                      (t.match(yt) || ["#000"])[0]
                    );
                  },
                }),
                Ot("borderWidth", {
                  parser: wt(
                    "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
                  ),
                }),
                Ot("float,cssFloat,styleFloat", {
                  parser: function (t, e, i, n, r, s) {
                    var o = t.style,
                      a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new bt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e);
                  },
                });
              var Kt = function (t) {
                var e,
                  i = this.t,
                  n = i.filter || nt(this.data, "filter") || "",
                  r = (this.s + this.c * t) | 0;
                100 === r &&
                  (-1 === n.indexOf("atrix(") &&
                  -1 === n.indexOf("radient(") &&
                  -1 === n.indexOf("oader(")
                    ? (i.removeAttribute("filter"),
                      (e = !nt(this.data, "filter")))
                    : ((i.filter = n.replace(O, "")), (e = !0))),
                  e ||
                    (this.xn1 &&
                      (i.filter = n = n || "alpha(opacity=" + r + ")"),
                    -1 === n.indexOf("pacity")
                      ? (0 === r && this.xn1) ||
                        (i.filter = n + " alpha(opacity=" + r + ")")
                      : (i.filter = n.replace(k, "opacity=" + r)));
              };
              Ot("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, i, n, s, o) {
                  var a = parseFloat(nt(t, "opacity", r, !1, "1")),
                    l = t.style,
                    u = "autoAlpha" === i;
                  return (
                    "string" == typeof e &&
                      "=" === e.charAt(1) &&
                      (e =
                        ("-" === e.charAt(0) ? -1 : 1) *
                          parseFloat(e.substr(2)) +
                        a),
                    u &&
                      1 === a &&
                      "hidden" === nt(t, "visibility", r) &&
                      0 !== e &&
                      (a = 0),
                    $
                      ? (s = new bt(l, "opacity", a, e - a, s))
                      : (((s = new bt(
                          l,
                          "opacity",
                          100 * a,
                          100 * (e - a),
                          s
                        )).xn1 = u ? 1 : 0),
                        (l.zoom = 1),
                        (s.type = 2),
                        (s.b = "alpha(opacity=" + s.s + ")"),
                        (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                        (s.data = t),
                        (s.plugin = o),
                        (s.setRatio = Kt)),
                    u &&
                      (((s = new bt(
                        l,
                        "visibility",
                        0,
                        0,
                        s,
                        -1,
                        null,
                        !1,
                        0,
                        0 !== a ? "inherit" : "hidden",
                        0 === e ? "hidden" : "inherit"
                      )).xs0 = "inherit"),
                      n._overwriteProps.push(s.n),
                      n._overwriteProps.push(i)),
                    s
                  );
                },
              });
              var Jt = function (t, e) {
                  e &&
                    (t.removeProperty
                      ? (("ms" !== e.substr(0, 2) &&
                          "webkit" !== e.substr(0, 6)) ||
                          (e = "-" + e),
                        t.removeProperty(e.replace(E, "-$1").toLowerCase()))
                      : t.removeAttribute(e));
                },
                te = function (t) {
                  if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e; )
                      e.v ? (i[e.p] = e.v) : Jt(i, e.p), (e = e._next);
                    1 === t &&
                      this.t._gsClassPT === this &&
                      (this.t._gsClassPT = null);
                  } else
                    this.t.getAttribute("class") !== this.e &&
                      this.t.setAttribute("class", this.e);
                };
              Ot("className", {
                parser: function (t, e, n, s, o, a, l) {
                  var u,
                    h,
                    c,
                    f,
                    p,
                    d = t.getAttribute("class") || "",
                    m = t.style.cssText;
                  if (
                    (((o = s._classNamePT = new bt(t, n, 0, 0, o, 2)).setRatio =
                      te),
                    (o.pr = -11),
                    (i = !0),
                    (o.b = d),
                    (h = ot(t, r)),
                    (c = t._gsClassPT))
                  ) {
                    for (f = {}, p = c.data; p; ) (f[p.p] = 1), (p = p._next);
                    c.setRatio(1);
                  }
                  return (
                    (t._gsClassPT = o),
                    (o.e =
                      "=" !== e.charAt(1)
                        ? e
                        : d.replace(
                            new RegExp(
                              "(?:\\s|^)" + e.substr(2) + "(?![\\w-])"
                            ),
                            ""
                          ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                    t.setAttribute("class", o.e),
                    (u = at(t, h, ot(t), l, f)),
                    t.setAttribute("class", d),
                    (o.data = u.firstMPT),
                    t.style.cssText !== m && (t.style.cssText = m),
                    (o.xfirst = s.parse(t, u.difs, o, a))
                  );
                },
              });
              var ee = function (t) {
                if (
                  (1 === t || 0 === t) &&
                  this.data._totalTime === this.data._totalDuration &&
                  "isFromStart" !== this.data.data
                ) {
                  var e,
                    i,
                    n,
                    r,
                    s,
                    o = this.t.style,
                    a = h.transform.parse;
                  if ("all" === this.e) (o.cssText = ""), (r = !0);
                  else
                    for (
                      n = (e = this.e.split(" ").join("").split(",")).length;
                      --n > -1;

                    )
                      (i = e[n]),
                        h[i] &&
                          (h[i].parse === a
                            ? (r = !0)
                            : (i = "transformOrigin" === i ? Lt : h[i].p)),
                        Jt(o, i);
                  r &&
                    (Jt(o, Dt),
                    (s = this.t._gsTransform) &&
                      (s.svg &&
                        (this.t.removeAttribute("data-svg-origin"),
                        this.t.removeAttribute("transform")),
                      delete this.t._gsTransform));
                }
              };
              for (
                Ot("clearProps", {
                  parser: function (t, e, n, r, s) {
                    return (
                      ((s = new bt(t, n, 0, 0, s, 2)).setRatio = ee),
                      (s.e = e),
                      (s.pr = -10),
                      (s.data = r._tween),
                      (i = !0),
                      s
                    );
                  },
                }),
                  c = "bezier,throwProps,physicsProps,physics2D".split(","),
                  kt = c.length;
                kt--;

              )
                Ct(c[kt]);
              ((c = o.prototype)._firstPT =
                c._lastParsedTransform =
                c._transform =
                  null),
                (c._onInitTween = function (t, e, a, l) {
                  if (!t.nodeType) return !1;
                  (this._target = v = t),
                    (this._tween = a),
                    (this._vars = e),
                    (y = l),
                    (f = e.autoRound),
                    (i = !1),
                    (n = e.suffixMap || o.suffixMap),
                    (r = it(t)),
                    (s = this._overwriteProps);
                  var u,
                    c,
                    m,
                    g,
                    x,
                    w,
                    T,
                    b,
                    P,
                    S = t.style;
                  if (
                    (p &&
                      "" === S.zIndex &&
                      (("auto" !== (u = nt(t, "zIndex", r)) && "" !== u) ||
                        this._addLazySet(S, "zIndex", 0)),
                    "string" == typeof e &&
                      ((g = S.cssText),
                      (u = ot(t, r)),
                      (S.cssText = g + ";" + e),
                      (u = at(t, u, ot(t)).difs),
                      !$ && A.test(e) && (u.opacity = parseFloat(RegExp.$1)),
                      (e = u),
                      (S.cssText = g)),
                    e.className
                      ? (this._firstPT = c =
                          h.className.parse(
                            t,
                            e.className,
                            "className",
                            this,
                            null,
                            null,
                            e
                          ))
                      : (this._firstPT = c = this.parse(t, e, null)),
                    this._transformType)
                  ) {
                    for (
                      P = 3 === this._transformType,
                        Dt
                          ? d &&
                            ((p = !0),
                            "" === S.zIndex &&
                              (("auto" !== (T = nt(t, "zIndex", r)) &&
                                "" !== T) ||
                                this._addLazySet(S, "zIndex", 0)),
                            _ &&
                              this._addLazySet(
                                S,
                                "WebkitBackfaceVisibility",
                                this._vars.WebkitBackfaceVisibility ||
                                  (P ? "visible" : "hidden")
                              ))
                          : (S.zoom = 1),
                        m = c;
                      m && m._next;

                    )
                      m = m._next;
                    (b = new bt(t, "transform", 0, 0, null, 2)),
                      this._linkCSSP(b, null, m),
                      (b.setRatio = Dt ? Zt : Qt),
                      (b.data = this._transform || $t(t, r, !0)),
                      (b.tween = a),
                      (b.pr = -1),
                      s.pop();
                  }
                  if (i) {
                    for (; c; ) {
                      for (w = c._next, m = g; m && m.pr > c.pr; ) m = m._next;
                      (c._prev = m ? m._prev : x)
                        ? (c._prev._next = c)
                        : (g = c),
                        (c._next = m) ? (m._prev = c) : (x = c),
                        (c = w);
                    }
                    this._firstPT = g;
                  }
                  return !0;
                }),
                (c.parse = function (t, e, i, s) {
                  var o,
                    a,
                    l,
                    u,
                    c,
                    p,
                    d,
                    m,
                    _,
                    g,
                    x = t.style;
                  for (o in e) {
                    if (
                      ((p = e[o]),
                      (a = h[o]),
                      "function" != typeof p ||
                        (a && a.allowFunc) ||
                        (p = p(y, v)),
                      a)
                    )
                      i = a.parse(t, p, o, this, i, s, e);
                    else {
                      if ("--" === o.substr(0, 2)) {
                        this._tween._propLookup[o] = this._addTween.call(
                          this._tween,
                          t.style,
                          "setProperty",
                          it(t).getPropertyValue(o) + "",
                          p + "",
                          o,
                          !1,
                          o
                        );
                        continue;
                      }
                      (c = nt(t, o, r) + ""),
                        (_ = "string" == typeof p),
                        "color" === o ||
                        "fill" === o ||
                        "stroke" === o ||
                        -1 !== o.indexOf("Color") ||
                        (_ && C.test(p))
                          ? (_ ||
                              (p =
                                ((p = gt(p)).length > 3 ? "rgba(" : "rgb(") +
                                p.join(",") +
                                ")"),
                            (i = St(x, o, c, p, !0, "transparent", i, 0, s)))
                          : _ && L.test(p)
                          ? (i = St(x, o, c, p, !0, null, i, 0, s))
                          : ((d =
                              (l = parseFloat(c)) || 0 === l
                                ? c.substr((l + "").length)
                                : ""),
                            ("" !== c && "auto" !== c) ||
                              ("width" === o || "height" === o
                                ? ((l = ht(t, o, r)), (d = "px"))
                                : "left" === o || "top" === o
                                ? ((l = st(t, o, r)), (d = "px"))
                                : ((l = "opacity" !== o ? 0 : 1), (d = ""))),
                            (g = _ && "=" === p.charAt(1))
                              ? ((u = parseInt(p.charAt(0) + "1", 10)),
                                (p = p.substr(2)),
                                (u *= parseFloat(p)),
                                (m = p.replace(S, "")))
                              : ((u = parseFloat(p)),
                                (m = _ ? p.replace(S, "") : "")),
                            "" === m && (m = o in n ? n[o] : d),
                            (p = u || 0 === u ? (g ? u + l : u) + m : e[o]),
                            d !== m &&
                              (("" === m && "lineHeight" !== o) ||
                                ((u || 0 === u) &&
                                  l &&
                                  ((l = rt(t, o, l, d)),
                                  "%" === m
                                    ? ((l /= rt(t, o, 100, "%") / 100),
                                      !0 !== e.strictUnits && (c = l + "%"))
                                    : "em" === m ||
                                      "rem" === m ||
                                      "vw" === m ||
                                      "vh" === m
                                    ? (l /= rt(t, o, 1, m))
                                    : "px" !== m &&
                                      ((u = rt(t, o, u, m)), (m = "px")),
                                  g && (u || 0 === u) && (p = u + l + m)))),
                            g && (u += l),
                            (!l && 0 !== l) || (!u && 0 !== u)
                              ? void 0 !== x[o] &&
                                (p || (p + "" != "NaN" && null != p))
                                ? ((i = new bt(
                                    x,
                                    o,
                                    u || l || 0,
                                    0,
                                    i,
                                    -1,
                                    o,
                                    !1,
                                    0,
                                    c,
                                    p
                                  )).xs0 =
                                    "none" !== p ||
                                    ("display" !== o &&
                                      -1 === o.indexOf("Style"))
                                      ? p
                                      : c)
                                : Z("invalid " + o + " tween value: " + e[o])
                              : ((i = new bt(
                                  x,
                                  o,
                                  l,
                                  u - l,
                                  i,
                                  0,
                                  o,
                                  !1 !== f && ("px" === m || "zIndex" === o),
                                  0,
                                  c,
                                  p
                                )).xs0 = m));
                    }
                    s && i && !i.plugin && (i.plugin = s);
                  }
                  return i;
                }),
                (c.setRatio = function (t) {
                  var e,
                    i,
                    n,
                    r = this._firstPT;
                  if (
                    1 !== t ||
                    (this._tween._time !== this._tween._duration &&
                      0 !== this._tween._time)
                  )
                    if (
                      t ||
                      (this._tween._time !== this._tween._duration &&
                        0 !== this._tween._time) ||
                      -1e-6 === this._tween._rawPrevTime
                    )
                      for (; r; ) {
                        if (
                          ((e = r.c * t + r.s),
                          r.r ? (e = r.r(e)) : e < 1e-6 && e > -1e-6 && (e = 0),
                          r.type)
                        )
                          if (1 === r.type)
                            if (2 === (n = r.l))
                              r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                            else if (3 === n)
                              r.t[r.p] =
                                r.xs0 +
                                e +
                                r.xs1 +
                                r.xn1 +
                                r.xs2 +
                                r.xn2 +
                                r.xs3;
                            else if (4 === n)
                              r.t[r.p] =
                                r.xs0 +
                                e +
                                r.xs1 +
                                r.xn1 +
                                r.xs2 +
                                r.xn2 +
                                r.xs3 +
                                r.xn3 +
                                r.xs4;
                            else if (5 === n)
                              r.t[r.p] =
                                r.xs0 +
                                e +
                                r.xs1 +
                                r.xn1 +
                                r.xs2 +
                                r.xn2 +
                                r.xs3 +
                                r.xn3 +
                                r.xs4 +
                                r.xn4 +
                                r.xs5;
                            else {
                              for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
                                i += r["xn" + n] + r["xs" + (n + 1)];
                              r.t[r.p] = i;
                            }
                          else
                            -1 === r.type
                              ? (r.t[r.p] = r.xs0)
                              : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next;
                      }
                    else
                      for (; r; )
                        2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                          (r = r._next);
                  else
                    for (; r; ) {
                      if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                          if (((e = r.r(r.s + r.c)), r.type)) {
                            if (1 === r.type) {
                              for (
                                n = r.l, i = r.xs0 + e + r.xs1, n = 1;
                                n < r.l;
                                n++
                              )
                                i += r["xn" + n] + r["xs" + (n + 1)];
                              r.t[r.p] = i;
                            }
                          } else r.t[r.p] = e + r.xs0;
                        else r.t[r.p] = r.e;
                      else r.setRatio(t);
                      r = r._next;
                    }
                }),
                (c._enableTransforms = function (t) {
                  (this._transform =
                    this._transform || $t(this._target, r, !0)),
                    (this._transformType =
                      (this._transform.svg && Et) ||
                      (!t && 3 !== this._transformType)
                        ? 2
                        : 3);
                });
              var ie = function (t) {
                (this.t[this.p] = this.e),
                  this.data._linkCSSP(this, this._next, null, !0);
              };
              (c._addLazySet = function (t, e, i) {
                var n = (this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2));
                (n.e = i), (n.setRatio = ie), (n.data = this);
              }),
                (c._linkCSSP = function (t, e, i, n) {
                  return (
                    t &&
                      (e && (e._prev = t),
                      t._next && (t._next._prev = t._prev),
                      t._prev
                        ? (t._prev._next = t._next)
                        : this._firstPT === t &&
                          ((this._firstPT = t._next), (n = !0)),
                      i
                        ? (i._next = t)
                        : n || null !== this._firstPT || (this._firstPT = t),
                      (t._next = e),
                      (t._prev = i)),
                    t
                  );
                }),
                (c._mod = function (t) {
                  for (var e = this._firstPT; e; )
                    "function" == typeof t[e.p] && (e.r = t[e.p]),
                      (e = e._next);
                }),
                (c._kill = function (e) {
                  var i,
                    n,
                    r,
                    s = e;
                  if (e.autoAlpha || e.alpha) {
                    for (n in ((s = {}), e)) s[n] = e[n];
                    (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
                  }
                  for (
                    e.className &&
                      (i = this._classNamePT) &&
                      ((r = i.xfirst) && r._prev
                        ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                        : r === this._firstPT && (this._firstPT = i._next),
                      i._next &&
                        this._linkCSSP(i._next, i._next._next, r._prev),
                      (this._classNamePT = null)),
                      i = this._firstPT;
                    i;

                  )
                    i.plugin &&
                      i.plugin !== n &&
                      i.plugin._kill &&
                      (i.plugin._kill(e), (n = i.plugin)),
                      (i = i._next);
                  return t.prototype._kill.call(this, s);
                });
              var ne = function t(e, i, n) {
                var r, s, o, a;
                if (e.slice) for (s = e.length; --s > -1; ) t(e[s], i, n);
                else
                  for (s = (r = e.childNodes).length; --s > -1; )
                    (a = (o = r[s]).type),
                      o.style && (i.push(ot(o)), n && n.push(o)),
                      (1 !== a && 9 !== a && 11 !== a) ||
                        !o.childNodes.length ||
                        t(o, i, n);
              };
              return (
                (o.cascadeTo = function (t, i, n) {
                  var r,
                    s,
                    o,
                    a,
                    l = e.to(t, i, n),
                    u = [l],
                    h = [],
                    c = [],
                    f = [],
                    p = e._internals.reservedProps;
                  for (
                    t = l._targets || l.target,
                      ne(t, h, f),
                      l.render(i, !0, !0),
                      ne(t, c),
                      l.render(0, !0, !0),
                      l._enabled(!0),
                      r = f.length;
                    --r > -1;

                  )
                    if ((s = at(f[r], h[r], c[r])).firstMPT) {
                      for (o in ((s = s.difs), n)) p[o] && (s[o] = n[o]);
                      for (o in ((a = {}), s)) a[o] = h[r][o];
                      u.push(e.fromTo(f[r], i, a, s));
                    }
                  return u;
                }),
                t.activate([o]),
                o
              );
            },
            !0
          );
        }),
          l._gsDefine && l._gsQueue.pop()(),
          (function (n) {
            "use strict";
            var a = function () {
              return (l.GreenSockGlobals || l).CSSPlugin;
            };
            void 0 !== t && t.exports
              ? (i(5), (t.exports = a()))
              : ((s = [i(4)]),
                void 0 ===
                  (o = "function" == typeof (r = a) ? r.apply(e, s) : r) ||
                  (t.exports = o));
          })();
      }.call(this, i(3)));
    },
    function (t, e, i) {
      (function (n) {
        var r,
          s,
          o,
          a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          l = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (l._gsQueue || (l._gsQueue = [])).push(function () {
          "use strict";
          var t = (l.document || {}).documentElement,
            e = l,
            i = function (i, n) {
              var r = "x" === n ? "Width" : "Height",
                s = "scroll" + r,
                o = "client" + r,
                a = document.body;
              return i === e || i === t || i === a
                ? Math.max(t[s], a[s]) - (e["inner" + r] || t[o] || a[o])
                : i[s] - i["offset" + r];
            },
            n = function (i, n) {
              var r = "scroll" + ("x" === n ? "Left" : "Top");
              return (
                i === e &&
                  (null != i.pageXOffset
                    ? (r = "page" + n.toUpperCase() + "Offset")
                    : (i = null != t[r] ? t : document.body)),
                function () {
                  return i[r];
                }
              );
            },
            r = function (i, r) {
              var s,
                o = ((s = i),
                "string" == typeof s && (s = TweenLite.selector(s)),
                s.length &&
                  s !== e &&
                  s[0] &&
                  s[0].style &&
                  !s.nodeType &&
                  (s = s[0]),
                s === e || (s.nodeType && s.style)
                  ? s
                  : null).getBoundingClientRect(),
                a = document.body,
                l = !r || r === e || r === a,
                u = l
                  ? {
                      top:
                        t.clientTop -
                        (window.pageYOffset || t.scrollTop || a.scrollTop || 0),
                      left:
                        t.clientLeft -
                        (window.pageXOffset ||
                          t.scrollLeft ||
                          a.scrollLeft ||
                          0),
                    }
                  : r.getBoundingClientRect(),
                h = { x: o.left - u.left, y: o.top - u.top };
              return !l && r && ((h.x += n(r, "x")()), (h.y += n(r, "y")())), h;
            },
            s = function (t, e, n, s) {
              var o = void 0 === t ? "undefined" : a(t);
              return isNaN(t)
                ? "string" === o && "=" === t.charAt(1)
                  ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) +
                    s
                  : "max" === t
                  ? i(e, n)
                  : Math.min(i(e, n), r(t, e)[n])
                : parseFloat(t);
            },
            o = l._gsDefine.plugin({
              propName: "scrollTo",
              API: 2,
              global: !0,
              version: "1.9.2",
              init: function (t, i, r) {
                return (
                  (this._wdw = t === e),
                  (this._target = t),
                  (this._tween = r),
                  "object" !== (void 0 === i ? "undefined" : a(i))
                    ? "string" == typeof (i = { y: i }).y &&
                      "max" !== i.y &&
                      "=" !== i.y.charAt(1) &&
                      (i.x = i.y)
                    : i.nodeType && (i = { y: i, x: i }),
                  (this.vars = i),
                  (this._autoKill = !1 !== i.autoKill),
                  (this.getX = n(t, "x")),
                  (this.getY = n(t, "y")),
                  (this.x = this.xPrev = this.getX()),
                  (this.y = this.yPrev = this.getY()),
                  null != i.x
                    ? (this._addTween(
                        this,
                        "x",
                        this.x,
                        s(i.x, t, "x", this.x) - (i.offsetX || 0),
                        "scrollTo_x",
                        !0
                      ),
                      this._overwriteProps.push("scrollTo_x"))
                    : (this.skipX = !0),
                  null != i.y
                    ? (this._addTween(
                        this,
                        "y",
                        this.y,
                        s(i.y, t, "y", this.y) - (i.offsetY || 0),
                        "scrollTo_y",
                        !0
                      ),
                      this._overwriteProps.push("scrollTo_y"))
                    : (this.skipY = !0),
                  !0
                );
              },
              set: function (t) {
                this._super.setRatio.call(this, t);
                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                  r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                  s = r - this.yPrev,
                  a = n - this.xPrev,
                  l = o.autoKillThreshold;
                this.x < 0 && (this.x = 0),
                  this.y < 0 && (this.y = 0),
                  this._autoKill &&
                    (!this.skipX &&
                      (a > l || a < -l) &&
                      n < i(this._target, "x") &&
                      (this.skipX = !0),
                    !this.skipY &&
                      (s > l || s < -l) &&
                      r < i(this._target, "y") &&
                      (this.skipY = !0),
                    this.skipX &&
                      this.skipY &&
                      (this._tween.kill(),
                      this.vars.onAutoKill &&
                        this.vars.onAutoKill.apply(
                          this.vars.onAutoKillScope || this._tween,
                          this.vars.onAutoKillParams || []
                        ))),
                  this._wdw
                    ? e.scrollTo(
                        this.skipX ? n : this.x,
                        this.skipY ? r : this.y
                      )
                    : (this.skipY || (this._target.scrollTop = this.y),
                      this.skipX || (this._target.scrollLeft = this.x)),
                  (this.xPrev = this.x),
                  (this.yPrev = this.y);
              },
            }),
            u = o.prototype;
          (o.max = i),
            (o.getOffset = r),
            (o.buildGetter = n),
            (o.autoKillThreshold = 7),
            (u._kill = function (t) {
              return (
                t.scrollTo_x && (this.skipX = !0),
                t.scrollTo_y && (this.skipY = !0),
                this._super._kill.call(this, t)
              );
            });
        }),
          l._gsDefine && l._gsQueue.pop()(),
          (function (n) {
            "use strict";
            var a = function () {
              return (l.GreenSockGlobals || l).ScrollToPlugin;
            };
            void 0 !== t && t.exports
              ? (i(5), (t.exports = a()))
              : ((s = [i(4)]),
                void 0 ===
                  (o = "function" == typeof (r = a) ? r.apply(e, s) : r) ||
                  (t.exports = o));
          })();
      }.call(this, i(3)));
    },
    function (t, e, i) {
      (function (n) {
        var r,
          s,
          o,
          a = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (a._gsQueue || (a._gsQueue = [])).push(function () {
          "use strict";
          a._gsDefine(
            "easing.CustomEase",
            ["easing.Ease"],
            function (t) {
              var e = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                i = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                r = /[cLlsS]/g,
                s = "CustomEase only accepts Cubic Bezier data.",
                o = function t(e, i, n, r, s, o, a, l, u, h, c) {
                  var f,
                    p = (e + n) / 2,
                    d = (i + r) / 2,
                    m = (n + s) / 2,
                    _ = (r + o) / 2,
                    g = (s + a) / 2,
                    v = (o + l) / 2,
                    y = (p + m) / 2,
                    x = (d + _) / 2,
                    w = (m + g) / 2,
                    T = (_ + v) / 2,
                    b = (y + w) / 2,
                    P = (x + T) / 2,
                    S = a - e,
                    k = l - i,
                    A = Math.abs((n - a) * k - (r - l) * S),
                    O = Math.abs((s - a) * k - (o - l) * S);
                  return (
                    h ||
                      ((h = [
                        { x: e, y: i },
                        { x: a, y: l },
                      ]),
                      (c = 1)),
                    h.splice(c || h.length - 1, 0, { x: b, y: P }),
                    (A + O) * (A + O) > u * (S * S + k * k) &&
                      ((f = h.length),
                      t(e, i, p, d, y, x, b, P, u, h, c),
                      t(b, P, w, T, g, v, a, l, u, h, c + 1 + (h.length - f))),
                    h
                  );
                },
                a = function (t) {
                  var e =
                    this.lookup[(t * this.l) | 0] || this.lookup[this.l - 1];
                  return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                },
                l = function (e, i, n) {
                  (this._calcEnd = !0),
                    (this.id = e),
                    e && (t.map[e] = this),
                    (this.getRatio = a),
                    this.setData(i, n);
                },
                u = (l.prototype = new t());
              return (
                (u.constructor = l),
                (u.setData = function (t, a) {
                  var l,
                    u,
                    h,
                    c,
                    f,
                    p,
                    d,
                    m,
                    _,
                    g,
                    v = (t = t || "0,0,1,1").match(e),
                    y = 1,
                    x = [];
                  if (
                    ((g = (a = a || {}).precision || 1),
                    (this.data = t),
                    (this.lookup = []),
                    (this.points = x),
                    (this.fast = g <= 1),
                    (r.test(t) ||
                      (-1 !== t.indexOf("M") && -1 === t.indexOf("C"))) &&
                      (v = (function (t) {
                        var e,
                          r,
                          o,
                          a,
                          l,
                          u,
                          h,
                          c,
                          f,
                          p,
                          d,
                          m =
                            (t + "")
                              .replace(n, function (t) {
                                var e = +t;
                                return e < 1e-4 && e > -1e-4 ? 0 : e;
                              })
                              .match(i) || [],
                          _ = [],
                          g = 0,
                          v = 0,
                          y = m.length,
                          x = 2;
                        for (e = 0; e < y; e++)
                          if (
                            ((f = a),
                            isNaN(m[e])
                              ? (l = (a = m[e].toUpperCase()) !== m[e])
                              : e--,
                            (r = +m[e + 1]),
                            (o = +m[e + 2]),
                            l && ((r += g), (o += v)),
                            e || ((h = r), (c = o)),
                            "M" === a)
                          )
                            u && u.length < 8 && ((_.length -= 1), (x = 0)),
                              (g = h = r),
                              (v = c = o),
                              (u = [r, o]),
                              (x = 2),
                              _.push(u),
                              (e += 2),
                              (a = "L");
                          else if ("C" === a)
                            u || (u = [0, 0]),
                              (u[x++] = r),
                              (u[x++] = o),
                              l || (g = v = 0),
                              (u[x++] = g + 1 * m[e + 3]),
                              (u[x++] = v + 1 * m[e + 4]),
                              (u[x++] = g += 1 * m[e + 5]),
                              (u[x++] = v += 1 * m[e + 6]),
                              (e += 6);
                          else if ("S" === a)
                            "C" === f || "S" === f
                              ? ((p = g - u[x - 4]),
                                (d = v - u[x - 3]),
                                (u[x++] = g + p),
                                (u[x++] = v + d))
                              : ((u[x++] = g), (u[x++] = v)),
                              (u[x++] = r),
                              (u[x++] = o),
                              l || (g = v = 0),
                              (u[x++] = g += 1 * m[e + 3]),
                              (u[x++] = v += 1 * m[e + 4]),
                              (e += 4);
                          else {
                            if ("L" !== a && "Z" !== a) throw s;
                            "Z" === a && ((r = h), (o = c), (u.closed = !0)),
                              ("L" === a ||
                                Math.abs(g - r) > 0.5 ||
                                Math.abs(v - o) > 0.5) &&
                                ((u[x++] = g + (r - g) / 3),
                                (u[x++] = v + (o - v) / 3),
                                (u[x++] = g + (2 * (r - g)) / 3),
                                (u[x++] = v + (2 * (o - v)) / 3),
                                (u[x++] = r),
                                (u[x++] = o),
                                "L" === a && (e += 2)),
                              (g = r),
                              (v = o);
                          }
                        return _[0];
                      })(t)),
                    4 === (l = v.length))
                  )
                    v.unshift(0, 0), v.push(1, 1), (l = 8);
                  else if ((l - 2) % 6) throw s;
                  for (
                    (0 == +v[0] && 1 == +v[l - 2]) ||
                      (function (t, e, i) {
                        i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                        var n,
                          r = -1 * +t[0],
                          s = -i,
                          o = t.length,
                          a = 1 / (+t[o - 2] + r),
                          l =
                            -e ||
                            (Math.abs(+t[o - 1] - +t[1]) <
                            0.01 * (+t[o - 2] - +t[0])
                              ? (function (t) {
                                  var e,
                                    i = t.length,
                                    n = 999999999999;
                                  for (e = 1; e < i; e += 6)
                                    +t[e] < n && (n = +t[e]);
                                  return n;
                                })(t) + s
                              : +t[o - 1] + s);
                        for (l = l ? 1 / l : -a, n = 0; n < o; n += 2)
                          (t[n] = (+t[n] + r) * a),
                            (t[n + 1] = (+t[n + 1] + s) * l);
                      })(v, a.height, a.originY),
                      this.rawBezier = v,
                      c = 2;
                    c < l;
                    c += 6
                  )
                    (u = { x: +v[c - 2], y: +v[c - 1] }),
                      (h = { x: +v[c + 4], y: +v[c + 5] }),
                      x.push(u, h),
                      o(
                        u.x,
                        u.y,
                        +v[c],
                        +v[c + 1],
                        +v[c + 2],
                        +v[c + 3],
                        h.x,
                        h.y,
                        1 / (2e5 * g),
                        x,
                        x.length - 1
                      );
                  for (l = x.length, c = 0; c < l; c++)
                    (d = x[c]),
                      (m = x[c - 1] || d),
                      d.x > m.x || (m.y !== d.y && m.x === d.x) || d === m
                        ? ((m.cx = d.x - m.x),
                          (m.cy = d.y - m.y),
                          (m.n = d),
                          (m.nx = d.x),
                          this.fast &&
                            c > 1 &&
                            Math.abs(m.cy / m.cx - x[c - 2].cy / x[c - 2].cx) >
                              2 &&
                            (this.fast = !1),
                          m.cx < y &&
                            (m.cx
                              ? (y = m.cx)
                              : ((m.cx = 0.001),
                                c === l - 1 &&
                                  ((m.x -= 0.001),
                                  (y = Math.min(y, 0.001)),
                                  (this.fast = !1)))))
                        : (x.splice(c--, 1), l--);
                  if (
                    ((l = (1 / y + 1) | 0),
                    (this.l = l),
                    (f = 1 / l),
                    (p = 0),
                    (d = x[0]),
                    this.fast)
                  ) {
                    for (c = 0; c < l; c++)
                      (_ = c * f),
                        d.nx < _ && (d = x[++p]),
                        (u = d.y + ((_ - d.x) / d.cx) * d.cy),
                        (this.lookup[c] = { x: _, cx: f, y: u, cy: 0, nx: 9 }),
                        c && (this.lookup[c - 1].cy = u - this.lookup[c - 1].y);
                    this.lookup[l - 1].cy = x[x.length - 1].y - u;
                  } else {
                    for (c = 0; c < l; c++)
                      d.nx < c * f && (d = x[++p]), (this.lookup[c] = d);
                    p < x.length - 1 && (this.lookup[c - 1] = x[x.length - 2]);
                  }
                  return (
                    (this._calcEnd = 1 !== x[x.length - 1].y || 0 !== x[0].y),
                    this
                  );
                }),
                (u.getRatio = a),
                (u.getSVGData = function (t) {
                  return l.getSVGData(this, t);
                }),
                (l.create = function (t, e, i) {
                  return new l(t, e, i);
                }),
                (l.version = "0.2.2"),
                (l.bezierToPoints = o),
                (l.get = function (e) {
                  return t.map[e];
                }),
                (l.getSVGData = function (e, i) {
                  var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    h,
                    c,
                    f,
                    p = (i = i || {}).width || 100,
                    d = i.height || 100,
                    m = i.x || 0,
                    _ = (i.y || 0) + d,
                    g = i.path;
                  if (
                    (i.invert && ((d = -d), (_ = 0)),
                    (e = e.getRatio
                      ? e
                      : t.map[e] || console.log("No ease found: ", e))
                      .rawBezier)
                  ) {
                    for (n = [], u = e.rawBezier.length, s = 0; s < u; s += 2)
                      n.push(
                        ((1e3 * (m + e.rawBezier[s] * p)) | 0) / 1e3 +
                          "," +
                          ((1e3 * (_ + e.rawBezier[s + 1] * -d)) | 0) / 1e3
                      );
                    (n[0] = "M" + n[0]), (n[1] = "C" + n[1]);
                  } else
                    for (
                      n = ["M" + m + "," + _],
                        o = 1 / (u = Math.max(5, 200 * (i.precision || 1))),
                        h = 5 / (u += 2),
                        c = ((1e3 * (m + o * p)) | 0) / 1e3,
                        r =
                          ((f = ((1e3 * (_ + e.getRatio(o) * -d)) | 0) / 1e3) -
                            _) /
                          (c - m),
                        s = 2;
                      s < u;
                      s++
                    )
                      (a = ((1e3 * (m + s * o * p)) | 0) / 1e3),
                        (l = ((1e3 * (_ + e.getRatio(s * o) * -d)) | 0) / 1e3),
                        (Math.abs((l - f) / (a - c) - r) > h || s === u - 1) &&
                          (n.push(c + "," + f), (r = (l - f) / (a - c))),
                        (c = a),
                        (f = l);
                  return (
                    g &&
                      ("string" == typeof g
                        ? document.querySelector(g)
                        : g
                      ).setAttribute("d", n.join(" ")),
                    n.join(" ")
                  );
                }),
                l
              );
            },
            !0
          );
        }),
          a._gsDefine && a._gsQueue.pop()(),
          (function (n) {
            "use strict";
            var l = function () {
              return (a.GreenSockGlobals || a).CustomEase;
            };
            void 0 !== t && t.exports
              ? (i(5), (t.exports = l()))
              : ((s = [i(4)]),
                void 0 ===
                  (o = "function" == typeof (r = l) ? r.apply(e, s) : r) ||
                  (t.exports = o));
          })();
      }.call(this, i(3)));
    },
    function (t, e, i) {
      (function (n) {
        var r,
          s,
          o,
          a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          l = void 0 !== t && t.exports && void 0 !== n ? n : this || window;
        (l._gsQueue || (l._gsQueue = [])).push(function () {
          "use strict";
          var t,
            e = Math.PI,
            i = e / 180,
            n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            r = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            s = /(^[#\.][a-z]|[a-y][a-z])/i,
            o = /[achlmqstvz]/gi,
            u = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            h = Math.atan2,
            c = Math.cos,
            f = Math.sin,
            p = Math.sqrt,
            d = 2 * e,
            m = 0.3 * e,
            _ = 0.7 * e,
            g = l._gsDefine.globals.TweenLite,
            v = function (t) {
              l.console && console.log(t);
            },
            y = function (t, n, r, s, o, a, l, u, h) {
              if (t !== u || n !== h) {
                (r = Math.abs(r)), (s = Math.abs(s));
                var m = (o % 360) * i,
                  _ = c(m),
                  g = f(m),
                  v = (t - u) / 2,
                  y = (n - h) / 2,
                  x = _ * v + g * y,
                  w = -g * v + _ * y,
                  T = x * x,
                  b = w * w,
                  P = T / (r * r) + b / (s * s);
                P > 1 && ((r = p(P) * r), (s = p(P) * s));
                var S = r * r,
                  k = s * s,
                  A = (S * k - S * b - k * T) / (S * b + k * T);
                A < 0 && (A = 0);
                var O = (a === l ? -1 : 1) * p(A),
                  C = O * ((r * w) / s),
                  E = O * ((-s * x) / r),
                  R = (t + u) / 2 + (_ * C - g * E),
                  M = (n + h) / 2 + (g * C + _ * E),
                  I = (x - C) / r,
                  F = (w - E) / s,
                  N = (-x - C) / r,
                  D = (-w - E) / s,
                  z = I * I + F * F,
                  L = (F < 0 ? -1 : 1) * Math.acos(I / p(z)),
                  j =
                    (I * D - F * N < 0 ? -1 : 1) *
                    Math.acos((I * N + F * D) / p(z * (N * N + D * D)));
                isNaN(j) && (j = e),
                  !l && j > 0 ? (j -= d) : l && j < 0 && (j += d),
                  (L %= d),
                  (j %= d);
                var X,
                  B = Math.ceil(Math.abs(j) / (d / 4)),
                  Y = [],
                  U = j / B,
                  H = ((4 / 3) * f(U / 2)) / (1 + c(U / 2)),
                  q = _ * r,
                  V = g * r,
                  G = g * -s,
                  W = _ * s;
                for (X = 0; X < B; X++)
                  (x = c((o = L + X * U))),
                    (w = f(o)),
                    (I = c((o += U))),
                    (F = f(o)),
                    Y.push(x - H * w, w + H * x, I + H * F, F - H * I, I, F);
                for (X = 0; X < Y.length; X += 2)
                  (x = Y[X]),
                    (w = Y[X + 1]),
                    (Y[X] = x * q + w * G + R),
                    (Y[X + 1] = x * V + w * W + M);
                return (Y[X - 2] = u), (Y[X - 1] = h), Y;
              }
            },
            x = function (t) {
              var e,
                i,
                r,
                s,
                o,
                a,
                l,
                h,
                c,
                f,
                p,
                d,
                m,
                _ =
                  (t + "")
                    .replace(u, function (t) {
                      var e = +t;
                      return e < 1e-4 && e > -1e-4 ? 0 : e;
                    })
                    .match(n) || [],
                g = [],
                x = 0,
                w = 0,
                T = _.length,
                b = 0,
                P = "ERROR: malformed path: " + t,
                S = function (t, e, i, n) {
                  (f = (i - t) / 3),
                    (p = (n - e) / 3),
                    l.push(t + f, e + p, i - f, n - p, i, n);
                };
              if (!t || !isNaN(_[0]) || isNaN(_[1])) return v(P), g;
              for (e = 0; e < T; e++)
                if (
                  ((m = o),
                  isNaN(_[e]) ? (a = (o = _[e].toUpperCase()) !== _[e]) : e--,
                  (r = +_[e + 1]),
                  (s = +_[e + 2]),
                  a && ((r += x), (s += w)),
                  e || ((h = r), (c = s)),
                  "M" === o)
                )
                  l && (l.length < 8 ? (g.length -= 1) : (b += l.length)),
                    (x = h = r),
                    (w = c = s),
                    (l = [r, s]),
                    g.push(l),
                    (e += 2),
                    (o = "L");
                else if ("C" === o)
                  l || (l = [0, 0]),
                    a || (x = w = 0),
                    l.push(
                      r,
                      s,
                      x + 1 * _[e + 3],
                      w + 1 * _[e + 4],
                      (x += 1 * _[e + 5]),
                      (w += 1 * _[e + 6])
                    ),
                    (e += 6);
                else if ("S" === o)
                  (f = x),
                    (p = w),
                    ("C" !== m && "S" !== m) ||
                      ((f += x - l[l.length - 4]), (p += w - l[l.length - 3])),
                    a || (x = w = 0),
                    l.push(
                      f,
                      p,
                      r,
                      s,
                      (x += 1 * _[e + 3]),
                      (w += 1 * _[e + 4])
                    ),
                    (e += 4);
                else if ("Q" === o)
                  (f = x + (2 / 3) * (r - x)),
                    (p = w + (2 / 3) * (s - w)),
                    a || (x = w = 0),
                    (x += 1 * _[e + 3]),
                    (w += 1 * _[e + 4]),
                    l.push(
                      f,
                      p,
                      x + (2 / 3) * (r - x),
                      w + (2 / 3) * (s - w),
                      x,
                      w
                    ),
                    (e += 4);
                else if ("T" === o)
                  (f = x - l[l.length - 4]),
                    (p = w - l[l.length - 3]),
                    l.push(
                      x + f,
                      w + p,
                      r + (2 / 3) * (x + 1.5 * f - r),
                      s + (2 / 3) * (w + 1.5 * p - s),
                      (x = r),
                      (w = s)
                    ),
                    (e += 2);
                else if ("H" === o) S(x, w, (x = r), w), (e += 1);
                else if ("V" === o)
                  S(x, w, x, (w = r + (a ? w - x : 0))), (e += 1);
                else if ("L" === o || "Z" === o)
                  "Z" === o && ((r = h), (s = c), (l.closed = !0)),
                    ("L" === o ||
                      Math.abs(x - r) > 0.5 ||
                      Math.abs(w - s) > 0.5) &&
                      (S(x, w, r, s), "L" === o && (e += 2)),
                    (x = r),
                    (w = s);
                else if ("A" === o) {
                  if (
                    (d = y(
                      x,
                      w,
                      +_[e + 1],
                      +_[e + 2],
                      +_[e + 3],
                      +_[e + 4],
                      +_[e + 5],
                      (a ? x : 0) + 1 * _[e + 6],
                      (a ? w : 0) + 1 * _[e + 7]
                    ))
                  )
                    for (i = 0; i < d.length; i++) l.push(d[i]);
                  (x = l[l.length - 2]), (w = l[l.length - 1]), (e += 7);
                } else v(P);
              return (
                (e = l.length) < 6
                  ? (g.pop(), (e = 0))
                  : l[0] === l[e - 2] && l[1] === l[e - 1] && (l.closed = !0),
                (g.totalPoints = b + e),
                g
              );
            },
            w = function (t, e) {
              var i,
                n,
                r,
                s,
                o,
                a,
                l,
                u,
                h,
                c,
                f,
                p,
                d,
                m,
                _ = 0,
                g = t.length,
                v = e / ((g - 2) / 6);
              for (d = 2; d < g; d += 6)
                for (_ += v; _ > 0.999999; )
                  (i = t[d - 2]),
                    (n = t[d - 1]),
                    (r = t[d]),
                    (s = t[d + 1]),
                    (o = t[d + 2]),
                    (a = t[d + 3]),
                    (l = t[d + 4]),
                    (u = t[d + 5]),
                    (h = i + (r - i) * (m = 1 / ((Math.floor(_) || 1) + 1))),
                    (h += ((f = r + (o - r) * m) - h) * m),
                    (f += (o + (l - o) * m - f) * m),
                    (c = n + (s - n) * m),
                    (c += ((p = s + (a - s) * m) - c) * m),
                    (p += (a + (u - a) * m - p) * m),
                    t.splice(
                      d,
                      4,
                      i + (r - i) * m,
                      n + (s - n) * m,
                      h,
                      c,
                      h + (f - h) * m,
                      c + (p - c) * m,
                      f,
                      p,
                      o + (l - o) * m,
                      a + (u - a) * m
                    ),
                    (d += 6),
                    (g += 6),
                    _--;
              return t;
            },
            T = function (t, e) {
              var i,
                n,
                r,
                s = "",
                o = t.length,
                a = Math.pow(10, e || 2);
              for (n = 0; n < t.length; n++) {
                for (
                  o = (r = t[n]).length,
                    s +=
                      "M" +
                      ((r[0] * a) | 0) / a +
                      " " +
                      ((r[1] * a) | 0) / a +
                      " C",
                    i = 2;
                  i < o;
                  i++
                )
                  s += ((r[i] * a) | 0) / a + " ";
                r.closed && (s += "z");
              }
              return s;
            },
            b = function (t) {
              for (var e = [], i = t.length - 1, n = 0; --i > -1; )
                (e[n++] = t[i]), (e[n++] = t[i + 1]), i--;
              for (i = 0; i < n; i++) t[i] = e[i];
              t.reversed = !t.reversed;
            },
            P = function (t) {
              var e,
                i = t.length,
                n = 0,
                r = 0;
              for (e = 0; e < i; e++) (n += t[e++]), (r += t[e]);
              return [n / (i / 2), r / (i / 2)];
            },
            S = function (t) {
              var e,
                i,
                n,
                r = t.length,
                s = t[0],
                o = s,
                a = t[1],
                l = a;
              for (n = 6; n < r; n += 6)
                (e = t[n]),
                  (i = t[n + 1]),
                  e > s ? (s = e) : e < o && (o = e),
                  i > a ? (a = i) : i < l && (l = i);
              return (
                (t.centerX = (s + o) / 2),
                (t.centerY = (a + l) / 2),
                (t.size = (s - o) * (a - l))
              );
            },
            k = function (t, e) {
              e = e || 3;
              for (
                var i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  f,
                  p,
                  d,
                  m,
                  _,
                  g,
                  v = t.length,
                  y = t[0][0],
                  x = y,
                  w = t[0][1],
                  T = w,
                  b = 1 / e;
                --v > -1;

              )
                for (i = (o = t[v]).length, s = 6; s < i; s += 6)
                  for (
                    h = o[s],
                      c = o[s + 1],
                      f = o[s + 2] - h,
                      m = o[s + 3] - c,
                      p = o[s + 4] - h,
                      _ = o[s + 5] - c,
                      d = o[s + 6] - h,
                      g = o[s + 7] - c,
                      a = e;
                    --a > -1;

                  )
                    (r =
                      ((l = b * a) * l * g +
                        3 * (u = 1 - l) * (l * _ + u * m)) *
                        l +
                      c),
                      (n = (l * l * d + 3 * u * (l * p + u * f)) * l + h) > y
                        ? (y = n)
                        : n < x && (x = n),
                      r > w ? (w = r) : r < T && (T = r);
              return (
                (t.centerX = (y + x) / 2),
                (t.centerY = (w + T) / 2),
                (t.left = x),
                (t.width = y - x),
                (t.top = T),
                (t.height = w - T),
                (t.size = (y - x) * (w - T))
              );
            },
            A = function (t, e) {
              return e.length - t.length;
            },
            O = function (t, e) {
              var i = t.size || S(t),
                n = e.size || S(e);
              return Math.abs(n - i) < (i + n) / 20
                ? e.centerX - t.centerX || e.centerY - t.centerY
                : n - i;
            },
            C = function (t, e) {
              var i,
                n,
                r = t.slice(0),
                s = t.length,
                o = s - 2;
              for (e |= 0, i = 0; i < s; i++)
                (n = (i + e) % o), (t[i++] = r[n]), (t[i] = r[n + 1]);
            },
            E = function (t, e, i, n, r) {
              var s,
                o,
                a,
                l,
                u = t.length,
                h = 0,
                c = u - 2;
              for (i *= 6, o = 0; o < u; o += 6)
                (l = t[(s = (o + i) % c)] - (e[o] - n)),
                  (a = t[s + 1] - (e[o + 1] - r)),
                  (h += p(a * a + l * l));
              return h;
            },
            R = function (t, e, i) {
              var n,
                r,
                s,
                o = t.length,
                a = P(t),
                l = P(e),
                u = l[0] - a[0],
                h = l[1] - a[1],
                c = E(t, e, 0, u, h),
                f = 0;
              for (s = 6; s < o; s += 6)
                (r = E(t, e, s / 6, u, h)) < c && ((c = r), (f = s));
              if (i)
                for (n = t.slice(0), b(n), s = 6; s < o; s += 6)
                  (r = E(n, e, s / 6, u, h)) < c && ((c = r), (f = -s));
              return f / 6;
            },
            M = function (t, e, i) {
              for (
                var n, r, s, o, a, l, u = t.length, h = 1e20, c = 0, f = 0;
                --u > -1;

              )
                for (l = (n = t[u]).length, a = 0; a < l; a += 6)
                  (r = n[a] - e),
                    (s = n[a + 1] - i),
                    (o = p(r * r + s * s)) < h &&
                      ((h = o), (c = n[a]), (f = n[a + 1]));
              return [c, f];
            },
            I = function (t, e, i, n, r, s) {
              var o,
                a,
                l,
                u,
                h = e.length,
                c = 0,
                f = Math.min(t.size || S(t), e[i].size || S(e[i])) * n,
                d = 1e20,
                m = t.centerX + r,
                _ = t.centerY + s;
              for (o = i; o < h && !((e[o].size || S(e[o])) < f); o++)
                (a = e[o].centerX - m),
                  (l = e[o].centerY - _),
                  (u = p(a * a + l * l)) < d && ((c = o), (d = u));
              return (u = e[c]), e.splice(c, 1), u;
            },
            F = function (t, e, i, n, r) {
              var s,
                o,
                l,
                u,
                h,
                c,
                f,
                p = e.length - t.length,
                d = p > 0 ? e : t,
                m = p > 0 ? t : e,
                _ = 0,
                g = "complexity" === n ? A : O,
                y = "position" === n ? 0 : "number" == typeof n ? n : 0.8,
                x = m.length,
                T =
                  "object" === (void 0 === i ? "undefined" : a(i)) && i.push
                    ? i.slice(0)
                    : [i],
                P = "reverse" === T[0] || T[0] < 0,
                E = "log" === i;
              if (m[0]) {
                if (
                  d.length > 1 &&
                  (t.sort(g),
                  e.sort(g),
                  (c = d.size || k(d)),
                  (c = m.size || k(m)),
                  (c = d.centerX - m.centerX),
                  (f = d.centerY - m.centerY),
                  g === O)
                )
                  for (x = 0; x < m.length; x++)
                    d.splice(x, 0, I(m[x], d, x, y, c, f));
                if (p)
                  for (
                    p < 0 && (p = -p),
                      d[0].length > m[0].length &&
                        w(m[0], ((d[0].length - m[0].length) / 6) | 0),
                      x = m.length;
                    _ < p;

                  )
                    (u = d[x].size || S(d[x])),
                      (u = (l = M(m, d[x].centerX, d[x].centerY))[0]),
                      (h = l[1]),
                      (m[x++] = [u, h, u, h, u, h, u, h]),
                      (m.totalPoints += 8),
                      _++;
                for (x = 0; x < t.length; x++)
                  (s = e[x]),
                    (o = t[x]),
                    (p = s.length - o.length) < 0
                      ? w(s, (-p / 6) | 0)
                      : p > 0 && w(o, (p / 6) | 0),
                    P && !1 !== r && !o.reversed && b(o),
                    (i = T[x] || 0 === T[x] ? T[x] : "auto") &&
                      (o.closed ||
                      (Math.abs(o[0] - o[o.length - 2]) < 0.5 &&
                        Math.abs(o[1] - o[o.length - 1]) < 0.5)
                        ? "auto" === i || "log" === i
                          ? ((T[x] = i = R(o, s, !x || !1 === r)),
                            i < 0 && ((P = !0), b(o), (i = -i)),
                            C(o, 6 * i))
                          : "reverse" !== i &&
                            (x && i < 0 && b(o), C(o, 6 * (i < 0 ? -i : i)))
                        : !P &&
                          (("auto" === i &&
                            Math.abs(s[0] - o[0]) +
                              Math.abs(s[1] - o[1]) +
                              Math.abs(s[s.length - 2] - o[o.length - 2]) +
                              Math.abs(s[s.length - 1] - o[o.length - 1]) >
                              Math.abs(s[0] - o[o.length - 2]) +
                                Math.abs(s[1] - o[o.length - 1]) +
                                Math.abs(s[s.length - 2] - o[0]) +
                                Math.abs(s[s.length - 1] - o[1])) ||
                            i % 2)
                        ? (b(o), (T[x] = -1), (P = !0))
                        : "auto" === i
                        ? (T[x] = 0)
                        : "reverse" === i && (T[x] = -1),
                      o.closed !== s.closed && (o.closed = s.closed = !1));
                return (
                  E && v("shapeIndex:[" + T.join(",") + "]"),
                  (t.shapeIndex = T),
                  T
                );
              }
            },
            N = function (t, e) {
              var i,
                n,
                r,
                s,
                o,
                a,
                l,
                u = 0,
                h = parseFloat(t[0]),
                c = parseFloat(t[1]),
                f = h + "," + c + " ";
              for (
                i = (0.5 * e) / (0.5 * (r = t.length) - 1), n = 0;
                n < r - 2;
                n += 2
              ) {
                if (
                  ((u += i),
                  (a = parseFloat(t[n + 2])),
                  (l = parseFloat(t[n + 3])),
                  u > 0.999999)
                )
                  for (o = 1 / (Math.floor(u) + 1), s = 1; u > 0.999999; )
                    (f +=
                      (h + (a - h) * o * s).toFixed(2) +
                      "," +
                      (c + (l - c) * o * s).toFixed(2) +
                      " "),
                      u--,
                      s++;
                (f += a + "," + l + " "), (h = a), (c = l);
              }
              return f;
            },
            D = function (t) {
              var e = t[0].match(r) || [],
                i = t[1].match(r) || [],
                n = i.length - e.length;
              n > 0 ? (t[0] = N(e, n)) : (t[1] = N(i, -n));
            },
            z = function (t) {
              return isNaN(t)
                ? D
                : function (e) {
                    D(e),
                      (e[1] = (function (t, e) {
                        if (!e) return t;
                        var i,
                          n,
                          s,
                          o = t.match(r) || [],
                          a = o.length,
                          l = "";
                        for (
                          "reverse" === e
                            ? ((n = a - 1), (i = -2))
                            : ((n =
                                (2 * (parseInt(e, 10) || 0) + 1 + 100 * a) % a),
                              (i = 2)),
                            s = 0;
                          s < a;
                          s += 2
                        )
                          (l += o[n - 1] + "," + o[n] + " "), (n = (n + i) % a);
                        return l;
                      })(e[1], parseInt(t, 10)));
                  };
            },
            L = {
              rect: "rx,ry,x,y,width,height",
              circle: "r,cx,cy",
              ellipse: "rx,ry,cx,cy",
              line: "x1,x2,y1,y2",
            },
            j = function (t, e) {
              var i,
                n,
                s,
                o,
                a,
                u,
                h,
                c,
                f,
                p,
                d,
                m,
                _,
                g,
                v,
                y,
                w,
                b,
                P,
                S,
                k,
                A,
                O = t.tagName.toLowerCase(),
                C = 0.552284749831;
              return "path" !== O && t.getBBox
                ? ((u = (function (t, e) {
                    var i,
                      n = l.document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "path"
                      ),
                      r = Array.prototype.slice.call(t.attributes),
                      s = r.length;
                    for (e = "," + e + ","; --s > -1; )
                      (i = r[s].nodeName.toLowerCase()),
                        -1 === e.indexOf("," + i + ",") &&
                          n.setAttributeNS(null, i, r[s].nodeValue);
                    return n;
                  })(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points")),
                  (A = (function (t, e) {
                    for (
                      var i = e ? e.split(",") : [], n = {}, r = i.length;
                      --r > -1;

                    )
                      n[i[r]] = +t.getAttribute(i[r]) || 0;
                    return n;
                  })(t, L[O])),
                  "rect" === O
                    ? ((o = A.rx),
                      (a = A.ry),
                      (n = A.x),
                      (s = A.y),
                      (p = A.width - 2 * o),
                      (d = A.height - 2 * a),
                      (i =
                        o || a
                          ? "M" +
                            (y = (g = (_ = n + o) + p) + o) +
                            "," +
                            (b = s + a) +
                            " V" +
                            (P = b + d) +
                            " C" +
                            [
                              y,
                              (S = P + a * C),
                              (v = g + o * C),
                              (k = P + a),
                              g,
                              k,
                              g - (g - _) / 3,
                              k,
                              _ + (g - _) / 3,
                              k,
                              _,
                              k,
                              (m = n + o * (1 - C)),
                              k,
                              n,
                              S,
                              n,
                              P,
                              n,
                              P - (P - b) / 3,
                              n,
                              b + (P - b) / 3,
                              n,
                              b,
                              n,
                              (w = s + a * (1 - C)),
                              m,
                              s,
                              _,
                              s,
                              _ + (g - _) / 3,
                              s,
                              g - (g - _) / 3,
                              s,
                              g,
                              s,
                              v,
                              s,
                              y,
                              w,
                              y,
                              b,
                            ].join(",") +
                            "z"
                          : "M" +
                            (n + p) +
                            "," +
                            s +
                            " v" +
                            d +
                            " h" +
                            -p +
                            " v" +
                            -d +
                            " h" +
                            p +
                            "z"))
                    : "circle" === O || "ellipse" === O
                    ? ("circle" === O
                        ? (c = (o = a = A.r) * C)
                        : ((o = A.rx), (c = (a = A.ry) * C)),
                      (i =
                        "M" +
                        ((n = A.cx) + o) +
                        "," +
                        (s = A.cy) +
                        " C" +
                        [
                          n + o,
                          s + c,
                          n + (h = o * C),
                          s + a,
                          n,
                          s + a,
                          n - h,
                          s + a,
                          n - o,
                          s + c,
                          n - o,
                          s,
                          n - o,
                          s - c,
                          n - h,
                          s - a,
                          n,
                          s - a,
                          n + h,
                          s - a,
                          n + o,
                          s - c,
                          n + o,
                          s,
                        ].join(",") +
                        "z"))
                    : "line" === O
                    ? (i = "M" + A.x1 + "," + A.y1 + " L" + A.x2 + "," + A.y2)
                    : ("polyline" !== O && "polygon" !== O) ||
                      ((i =
                        "M" +
                        (n = (f =
                          (t.getAttribute("points") + "").match(r) ||
                          []).shift()) +
                        "," +
                        (s = f.shift()) +
                        " L" +
                        f.join(",")),
                      "polygon" === O && (i += "," + n + "," + s + "z")),
                  u.setAttribute("d", T((u._gsRawPath = x(i)))),
                  e &&
                    t.parentNode &&
                    (t.parentNode.insertBefore(u, t),
                    t.parentNode.removeChild(t)),
                  u)
                : t;
            },
            X = function (t, e, i) {
              var n,
                o,
                a = "string" == typeof t;
              return (
                (!a || s.test(t) || (t.match(r) || []).length < 3) &&
                  ((n = a ? g.selector(t) : t && t[0] ? t : [t]) && n[0]
                    ? ((o = ((n = n[0]).nodeName + "").toUpperCase()),
                      e && "PATH" !== o && ((n = j(n, !1)), (o = "PATH")),
                      (t = n.getAttribute("PATH" === o ? "d" : "points") || ""),
                      n === i &&
                        (t = n.getAttributeNS(null, "data-original") || t))
                    : (v("WARNING: invalid morph to: " + t), (t = !1))),
                t
              );
            },
            B = function (t, e) {
              for (
                var i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  c,
                  f,
                  d,
                  m,
                  _ = t.length,
                  g = 0.2 * (e || 1);
                --_ > -1;

              ) {
                for (
                  d = (n = t[_]).isSmooth = n.isSmooth || [0, 0, 0, 0],
                    m = n.smoothData = n.smoothData || [0, 0, 0, 0],
                    d.length = 4,
                    u = n.length - 2,
                    l = 6;
                  l < u;
                  l += 6
                )
                  (r = n[l] - n[l - 2]),
                    (s = n[l + 1] - n[l - 1]),
                    (o = n[l + 2] - n[l]),
                    (a = n[l + 3] - n[l + 1]),
                    (c = h(s, r)),
                    (f = h(a, o)),
                    (i = Math.abs(c - f) < g) &&
                      ((m[l - 2] = c),
                      (m[l + 2] = f),
                      (m[l - 1] = p(r * r + s * s)),
                      (m[l + 3] = p(o * o + a * a))),
                    d.push(i, i, 0, 0, i, i);
                n[u] === n[0] &&
                  n[u + 1] === n[1] &&
                  ((r = n[0] - n[u - 2]),
                  (s = n[1] - n[u - 1]),
                  (o = n[2] - n[0]),
                  (a = n[3] - n[1]),
                  (c = h(s, r)),
                  (f = h(a, o)),
                  Math.abs(c - f) < g &&
                    ((m[u - 2] = c),
                    (m[2] = f),
                    (m[u - 1] = p(r * r + s * s)),
                    (m[3] = p(o * o + a * a)),
                    (d[u - 2] = d[u - 1] = !0)));
              }
              return t;
            },
            Y = function (t) {
              var e = t.trim().split(" ");
              return {
                x:
                  (t.indexOf("left") >= 0
                    ? 0
                    : t.indexOf("right") >= 0
                    ? 100
                    : isNaN(parseFloat(e[0]))
                    ? 50
                    : parseFloat(e[0])) / 100,
                y:
                  (t.indexOf("top") >= 0
                    ? 0
                    : t.indexOf("bottom") >= 0
                    ? 100
                    : isNaN(parseFloat(e[1]))
                    ? 50
                    : parseFloat(e[1])) / 100,
              };
            },
            U =
              "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            H = l._gsDefine.plugin({
              propName: "morphSVG",
              API: 2,
              global: !0,
              version: "0.9.2",
              overwriteProps: ["morphSVG"],
              init: function (e, i, n, s) {
                var l,
                  u,
                  h,
                  c,
                  f,
                  p,
                  d,
                  m,
                  _,
                  g,
                  y,
                  w,
                  b,
                  P,
                  S,
                  A,
                  O,
                  C,
                  E,
                  R,
                  M,
                  I,
                  N = e.nodeType ? window.getComputedStyle(e) : {},
                  D = N.fill + "",
                  L = !(
                    "none" === D ||
                    "0" === (D.match(r) || [])[3] ||
                    "evenodd" === N.fillRule
                  ),
                  j = (i.origin || "50 50").split(",");
                if (
                  ("function" == typeof i && (i = i(s, e)),
                  (f =
                    "POLYLINE" === (l = (e.nodeName + "").toUpperCase()) ||
                    "POLYGON" === l),
                  "PATH" !== l && !f && !i.prop)
                )
                  return (
                    v("WARNING: cannot morph a <" + l + "> element. " + U), !1
                  );
                if (
                  ((u = "PATH" === l ? "d" : "points"),
                  ("string" == typeof i || i.getBBox || i[0]) &&
                    (i = { shape: i }),
                  !i.prop && "function" != typeof e.setAttribute)
                )
                  return !1;
                if (
                  ((c = X(i.shape || i.d || i.points || "", "d" === u, e)),
                  f && o.test(c))
                )
                  return (
                    v("WARNING: a <" + l + "> cannot accept path data. " + U),
                    !1
                  );
                if (
                  ((p =
                    i.shapeIndex || 0 === i.shapeIndex ? i.shapeIndex : "auto"),
                  (d = i.map || H.defaultMap),
                  (this._prop = i.prop),
                  (this._render = i.render || H.defaultRender),
                  (this._apply =
                    "updateTarget" in i
                      ? i.updateTarget
                      : H.defaultUpdateTarget),
                  (this._rnd = Math.pow(
                    10,
                    isNaN(i.precision) ? 2 : +i.precision
                  )),
                  (this._tween = n),
                  c)
                ) {
                  if (
                    ((this._target = e),
                    (O = "object" === a(i.precompile)),
                    (g = this._prop ? e[this._prop] : e.getAttribute(u)),
                    this._prop ||
                      e.getAttributeNS(null, "data-original") ||
                      e.setAttributeNS(null, "data-original", g),
                    "d" === u || this._prop)
                  ) {
                    if (
                      ((g = x(O ? i.precompile[0] : g)),
                      (y = x(O ? i.precompile[1] : c)),
                      !O && !F(g, y, p, d, L))
                    )
                      return !1;
                    for (
                      ("log" !== i.precompile && !0 !== i.precompile) ||
                        v('precompile:["' + T(g) + '","' + T(y) + '"]'),
                        (M = "linear" !== (i.type || H.defaultType)) &&
                          ((g = B(g, i.smoothTolerance)),
                          (y = B(y, i.smoothTolerance)),
                          g.size || k(g),
                          y.size || k(y),
                          (R = Y(j[0])),
                          (this._origin = g.origin =
                            {
                              x: g.left + R.x * g.width,
                              y: g.top + R.y * g.height,
                            }),
                          j[1] && (R = Y(j[1])),
                          (this._eOrigin = {
                            x: y.left + R.x * y.width,
                            y: y.top + R.y * y.height,
                          })),
                        this._rawPath = e._gsRawPath = g,
                        b = g.length;
                      --b > -1;

                    )
                      for (
                        S = g[b],
                          A = y[b],
                          m = S.isSmooth || [],
                          _ = A.isSmooth || [],
                          P = S.length,
                          t = 0,
                          w = 0;
                        w < P;
                        w += 2
                      )
                        (A[w] === S[w] && A[w + 1] === S[w + 1]) ||
                          (M
                            ? m[w] && _[w]
                              ? ((C = S.smoothData),
                                (E = A.smoothData),
                                (I = w + (w === P - 4 ? 7 - P : 5)),
                                (this._controlPT = {
                                  _next: this._controlPT,
                                  i: w,
                                  j: b,
                                  l1s: C[w + 1],
                                  l1c: E[w + 1] - C[w + 1],
                                  l2s: C[I],
                                  l2c: E[I] - C[I],
                                }),
                                (h = this._tweenRotation(S, A, w + 2)),
                                this._tweenRotation(S, A, w, h),
                                this._tweenRotation(S, A, I - 1, h),
                                (w += 4))
                              : this._tweenRotation(S, A, w)
                            : ((h = this._addTween(S, w, S[w], A[w])),
                              (h =
                                this._addTween(S, w + 1, S[w + 1], A[w + 1]) ||
                                h)));
                  } else
                    h = this._addTween(
                      e,
                      "setAttribute",
                      e.getAttribute(u) + "",
                      c + "",
                      "morphSVG",
                      !1,
                      u,
                      z(p)
                    );
                  M &&
                    (this._addTween(
                      this._origin,
                      "x",
                      this._origin.x,
                      this._eOrigin.x
                    ),
                    (h = this._addTween(
                      this._origin,
                      "y",
                      this._origin.y,
                      this._eOrigin.y
                    ))),
                    h &&
                      (this._overwriteProps.push("morphSVG"),
                      (h.end = c),
                      (h.endProp = u));
                }
                return !0;
              },
              set: function (t) {
                var e,
                  i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  p,
                  d,
                  m,
                  _,
                  g,
                  v = this._rawPath,
                  y = this._controlPT,
                  x = this._anchorPT,
                  w = this._rnd,
                  T = this._target;
                if (
                  (this._super.setRatio.call(this, t), 1 === t && this._apply)
                )
                  for (r = this._firstPT; r; )
                    r.end &&
                      (this._prop
                        ? (T[this._prop] = r.end)
                        : T.setAttribute(r.endProp, r.end)),
                      (r = r._next);
                else if (v) {
                  for (; x; )
                    (a = x.sa + t * x.ca),
                      (o = x.sl + t * x.cl),
                      (x.t[x.i] = this._origin.x + c(a) * o),
                      (x.t[x.i + 1] = this._origin.y + f(a) * o),
                      (x = x._next);
                  for (n = t < 0.5 ? 2 * t * t : (4 - 2 * t) * t - 1; y; )
                    (g =
                      (l = y.i) +
                      (l === (s = v[y.j]).length - 4 ? 7 - s.length : 5)),
                      (a = h(s[g] - s[l + 1], s[g - 1] - s[l])),
                      (m = f(a)),
                      (_ = c(a)),
                      (p = s[l + 2]),
                      (d = s[l + 3]),
                      (o = y.l1s + n * y.l1c),
                      (s[l] = p - _ * o),
                      (s[l + 1] = d - m * o),
                      (o = y.l2s + n * y.l2c),
                      (s[g - 1] = p + _ * o),
                      (s[g] = d + m * o),
                      (y = y._next);
                  if (((T._gsRawPath = v), this._apply)) {
                    for (e = "", i = " ", u = 0; u < v.length; u++)
                      for (
                        o = (s = v[u]).length,
                          e +=
                            "M" +
                            ((s[0] * w) | 0) / w +
                            i +
                            ((s[1] * w) | 0) / w +
                            " C",
                          l = 2;
                        l < o;
                        l++
                      )
                        e += ((s[l] * w) | 0) / w + i;
                    this._prop ? (T[this._prop] = e) : T.setAttribute("d", e);
                  }
                }
                this._render && v && this._render.call(this._tween, v, T);
              },
            });
          (H.prototype._tweenRotation = function (i, n, r, s) {
            var o,
              a,
              l,
              u = this._origin,
              c = this._eOrigin,
              f = i[r] - u.x,
              g = i[r + 1] - u.y,
              v = p(f * f + g * g),
              y = h(g, f);
            return (
              (f = n[r] - c.x),
              (g = n[r + 1] - c.y),
              (a = (l = o = h(g, f) - y) !== l % e ? l + (l < 0 ? d : -d) : l),
              !s && t && Math.abs(a + t.ca) < m && (s = t),
              (this._anchorPT = t =
                {
                  _next: this._anchorPT,
                  t: i,
                  sa: y,
                  ca: s && a * s.ca < 0 && Math.abs(a) > _ ? o : a,
                  sl: v,
                  cl: p(f * f + g * g) - v,
                  i: r,
                })
            );
          }),
            (H.pathFilter = function (t, e, i, n, r) {
              var s = x(t[0]),
                o = x(t[1]);
              F(s, o, e || 0 === e ? e : "auto", i, r) &&
                ((t[0] = T(s)),
                (t[1] = T(o)),
                ("log" !== n && !0 !== n) ||
                  v('precompile:["' + t[0] + '","' + t[1] + '"]'));
            }),
            (H.pointsFilter = D),
            (H.getTotalSize = k),
            (H.subdivideRawBezier = H.subdivideSegment = w),
            (H.rawPathToString = T),
            (H.defaultType = "linear"),
            (H.defaultUpdateTarget = !0),
            (H.defaultMap = "size"),
            (H.stringToRawPath = H.pathDataToRawBezier =
              function (t) {
                return x(X(t, !0));
              }),
            (H.equalizeSegmentQuantity = F),
            (H.convertToPath = function (t, e) {
              "string" == typeof t && (t = g.selector(t));
              for (
                var i =
                    t && 0 !== t.length
                      ? t.length && t[0] && t[0].nodeType
                        ? Array.prototype.slice.call(t, 0)
                        : [t]
                      : [],
                  n = i.length;
                --n > -1;

              )
                i[n] = j(i[n], !1 !== e);
              return i;
            }),
            (H.pathDataToBezier = function (t, e) {
              var i,
                n,
                r,
                s,
                o,
                a,
                l,
                u,
                h = x(X(t, !0))[0] || [],
                c = 0;
              if (
                ((u = (e = e || {}).align || e.relative),
                (s = e.matrix || [1, 0, 0, 1, 0, 0]),
                (o = e.offsetX || 0),
                (a = e.offsetY || 0),
                "relative" === u || !0 === u
                  ? ((o -= h[0] * s[0] + h[1] * s[2]),
                    (a -= h[0] * s[1] + h[1] * s[3]),
                    (c = "+="))
                  : ((o += s[4]),
                    (a += s[5]),
                    u &&
                      (u =
                        "string" == typeof u
                          ? g.selector(u)
                          : u && u[0]
                          ? u
                          : [u]) &&
                      u[0] &&
                      ((o -= (l = u[0].getBBox() || { x: 0, y: 0 }).x),
                      (a -= l.y))),
                (i = []),
                (r = h.length),
                s && "1,0,0,1,0,0" !== s.join(","))
              )
                for (n = 0; n < r; n += 2)
                  i.push({
                    x: c + (h[n] * s[0] + h[n + 1] * s[2] + o),
                    y: c + (h[n] * s[1] + h[n + 1] * s[3] + a),
                  });
              else
                for (n = 0; n < r; n += 2)
                  i.push({ x: c + (h[n] + o), y: c + (h[n + 1] + a) });
              return i;
            });
        }),
          l._gsDefine && l._gsQueue.pop()(),
          (function (n) {
            "use strict";
            var a = function () {
              return (l.GreenSockGlobals || l).MorphSVGPlugin;
            };
            void 0 !== t && t.exports
              ? (i(5), (t.exports = a()))
              : ((s = [i(4)]),
                void 0 ===
                  (o = "function" == typeof (r = a) ? r.apply(e, s) : r) ||
                  (t.exports = o));
          })();
      }.call(this, i(3)));
    },
    function (t, e, i) {
      var n,
        r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              };
      !(function (s, o, a, l) {
        "use strict";
        var u,
          h = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = o.createElement("div"),
          f = "function",
          p = Math.round,
          d = Math.abs,
          m = Date.now;
        function _(t, e, i) {
          return setTimeout(b(t, i), e);
        }
        function g(t, e, i) {
          return !!Array.isArray(t) && (v(t, i[e], i), !0);
        }
        function v(t, e, i) {
          var n;
          if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== l)
              for (n = 0; n < t.length; ) e.call(i, t[n], n, t), n++;
            else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
        }
        function y(t, e, i) {
          var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
          return function () {
            var e = new Error("get-stack-trace"),
              i =
                e && e.stack
                  ? e.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              r = s.console && (s.console.warn || s.console.log);
            return r && r.call(s.console, n, i), t.apply(this, arguments);
          };
        }
        u =
          "function" != typeof Object.assign
            ? function (t) {
                if (t === l || null === t)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                  var n = arguments[i];
                  if (n !== l && null !== n)
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
                }
                return e;
              }
            : Object.assign;
        var x = y(
            function (t, e, i) {
              for (var n = Object.keys(e), r = 0; r < n.length; )
                (!i || (i && t[n[r]] === l)) && (t[n[r]] = e[n[r]]), r++;
              return t;
            },
            "extend",
            "Use `assign`."
          ),
          w = y(
            function (t, e) {
              return x(t, e, !0);
            },
            "merge",
            "Use `assign`."
          );
        function T(t, e, i) {
          var n,
            r = e.prototype;
          ((n = t.prototype = Object.create(r)).constructor = t),
            (n._super = r),
            i && u(n, i);
        }
        function b(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        function P(t, e) {
          return (void 0 === t ? "undefined" : r(t)) == f
            ? t.apply((e && e[0]) || l, e)
            : t;
        }
        function S(t, e) {
          return t === l ? e : t;
        }
        function k(t, e, i) {
          v(E(e), function (e) {
            t.addEventListener(e, i, !1);
          });
        }
        function A(t, e, i) {
          v(E(e), function (e) {
            t.removeEventListener(e, i, !1);
          });
        }
        function O(t, e) {
          for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
          }
          return !1;
        }
        function C(t, e) {
          return t.indexOf(e) > -1;
        }
        function E(t) {
          return t.trim().split(/\s+/g);
        }
        function R(t, e, i) {
          if (t.indexOf && !i) return t.indexOf(e);
          for (var n = 0; n < t.length; ) {
            if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
            n++;
          }
          return -1;
        }
        function M(t) {
          return Array.prototype.slice.call(t, 0);
        }
        function I(t, e, i) {
          for (var n = [], r = [], s = 0; s < t.length; ) {
            var o = e ? t[s][e] : t[s];
            R(r, o) < 0 && n.push(t[s]), (r[s] = o), s++;
          }
          return (
            i &&
              (n = e
                ? n.sort(function (t, i) {
                    return t[e] > i[e];
                  })
                : n.sort()),
            n
          );
        }
        function F(t, e) {
          for (
            var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0;
            s < h.length;

          ) {
            if ((n = (i = h[s]) ? i + r : e) in t) return n;
            s++;
          }
          return l;
        }
        var N = 1;
        function D(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || s;
        }
        var z = "ontouchstart" in s,
          L = F(s, "PointerEvent") !== l,
          j =
            z &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          X = 25,
          B = 1,
          Y = 4,
          U = 8,
          H = 1,
          q = 2,
          V = 4,
          G = 8,
          W = 16,
          $ = q | V,
          Q = G | W,
          Z = $ | Q,
          K = ["x", "y"],
          J = ["clientX", "clientY"];
        function tt(t, e) {
          var i = this;
          (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function (e) {
              P(t.options.enable, [t]) && i.handler(e);
            }),
            this.init();
        }
        function et(t, e, i) {
          var n = i.pointers.length,
            r = i.changedPointers.length,
            s = e & B && n - r == 0,
            o = e & (Y | U) && n - r == 0;
          (i.isFirst = !!s),
            (i.isFinal = !!o),
            s && (t.session = {}),
            (i.eventType = e),
            (function (t, e) {
              var i = t.session,
                n = e.pointers,
                r = n.length;
              i.firstInput || (i.firstInput = it(e)),
                r > 1 && !i.firstMultiple
                  ? (i.firstMultiple = it(e))
                  : 1 === r && (i.firstMultiple = !1);
              var s = i.firstInput,
                o = i.firstMultiple,
                a = o ? o.center : s.center,
                u = (e.center = nt(n));
              (e.timeStamp = m()),
                (e.deltaTime = e.timeStamp - s.timeStamp),
                (e.angle = at(a, u)),
                (e.distance = ot(a, u)),
                (function (t, e) {
                  var i = e.center,
                    n = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    s = t.prevInput || {};
                  (e.eventType !== B && s.eventType !== Y) ||
                    ((r = t.prevDelta = { x: s.deltaX || 0, y: s.deltaY || 0 }),
                    (n = t.offsetDelta = { x: i.x, y: i.y })),
                    (e.deltaX = r.x + (i.x - n.x)),
                    (e.deltaY = r.y + (i.y - n.y));
                })(i, e),
                (e.offsetDirection = st(e.deltaX, e.deltaY));
              var h,
                c,
                f = rt(e.deltaTime, e.deltaX, e.deltaY);
              (e.overallVelocityX = f.x),
                (e.overallVelocityY = f.y),
                (e.overallVelocity = d(f.x) > d(f.y) ? f.x : f.y),
                (e.scale = o
                  ? ((h = o.pointers),
                    ot((c = n)[0], c[1], J) / ot(h[0], h[1], J))
                  : 1),
                (e.rotation = o
                  ? (function (t, e) {
                      return at(e[1], e[0], J) + at(t[1], t[0], J);
                    })(o.pointers, n)
                  : 0),
                (e.maxPointers = i.prevInput
                  ? e.pointers.length > i.prevInput.maxPointers
                    ? e.pointers.length
                    : i.prevInput.maxPointers
                  : e.pointers.length),
                (function (t, e) {
                  var i,
                    n,
                    r,
                    s,
                    o = t.lastInterval || e,
                    a = e.timeStamp - o.timeStamp;
                  if (e.eventType != U && (a > X || o.velocity === l)) {
                    var u = e.deltaX - o.deltaX,
                      h = e.deltaY - o.deltaY,
                      c = rt(a, u, h);
                    (n = c.x),
                      (r = c.y),
                      (i = d(c.x) > d(c.y) ? c.x : c.y),
                      (s = st(u, h)),
                      (t.lastInterval = e);
                  } else
                    (i = o.velocity),
                      (n = o.velocityX),
                      (r = o.velocityY),
                      (s = o.direction);
                  (e.velocity = i),
                    (e.velocityX = n),
                    (e.velocityY = r),
                    (e.direction = s);
                })(i, e);
              var p = t.element;
              O(e.srcEvent.target, p) && (p = e.srcEvent.target),
                (e.target = p);
            })(t, i),
            t.emit("hammer.input", i),
            t.recognize(i),
            (t.session.prevInput = i);
        }
        function it(t) {
          for (var e = [], i = 0; i < t.pointers.length; )
            (e[i] = {
              clientX: p(t.pointers[i].clientX),
              clientY: p(t.pointers[i].clientY),
            }),
              i++;
          return {
            timeStamp: m(),
            pointers: e,
            center: nt(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY,
          };
        }
        function nt(t) {
          var e = t.length;
          if (1 === e) return { x: p(t[0].clientX), y: p(t[0].clientY) };
          for (var i = 0, n = 0, r = 0; r < e; )
            (i += t[r].clientX), (n += t[r].clientY), r++;
          return { x: p(i / e), y: p(n / e) };
        }
        function rt(t, e, i) {
          return { x: e / t || 0, y: i / t || 0 };
        }
        function st(t, e) {
          return t === e ? H : d(t) >= d(e) ? (t < 0 ? q : V) : e < 0 ? G : W;
        }
        function ot(t, e, i) {
          i || (i = K);
          var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]];
          return Math.sqrt(n * n + r * r);
        }
        function at(t, e, i) {
          i || (i = K);
          var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]];
          return (180 * Math.atan2(r, n)) / Math.PI;
        }
        tt.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && k(this.element, this.evEl, this.domHandler),
              this.evTarget && k(this.target, this.evTarget, this.domHandler),
              this.evWin && k(D(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && A(this.element, this.evEl, this.domHandler),
              this.evTarget && A(this.target, this.evTarget, this.domHandler),
              this.evWin && A(D(this.element), this.evWin, this.domHandler);
          },
        };
        var lt = { mousedown: B, mousemove: 2, mouseup: Y },
          ut = "mousedown",
          ht = "mousemove mouseup";
        function ct() {
          (this.evEl = ut),
            (this.evWin = ht),
            (this.pressed = !1),
            tt.apply(this, arguments);
        }
        T(ct, tt, {
          handler: function (t) {
            var e = lt[t.type];
            e & B && 0 === t.button && (this.pressed = !0),
              2 & e && 1 !== t.which && (e = Y),
              this.pressed &&
                (e & Y && (this.pressed = !1),
                this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: "mouse",
                  srcEvent: t,
                }));
          },
        });
        var ft = {
            pointerdown: B,
            pointermove: 2,
            pointerup: Y,
            pointercancel: U,
            pointerout: U,
          },
          pt = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          dt = "pointerdown",
          mt = "pointermove pointerup pointercancel";
        function _t() {
          (this.evEl = dt),
            (this.evWin = mt),
            tt.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        s.MSPointerEvent &&
          !s.PointerEvent &&
          ((dt = "MSPointerDown"),
          (mt = "MSPointerMove MSPointerUp MSPointerCancel")),
          T(_t, tt, {
            handler: function (t) {
              var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                r = ft[n],
                s = pt[t.pointerType] || t.pointerType,
                o = "touch" == s,
                a = R(e, t.pointerId, "pointerId");
              r & B && (0 === t.button || o)
                ? a < 0 && (e.push(t), (a = e.length - 1))
                : r & (Y | U) && (i = !0),
                a < 0 ||
                  ((e[a] = t),
                  this.callback(this.manager, r, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: s,
                    srcEvent: t,
                  }),
                  i && e.splice(a, 1));
            },
          });
        var gt = { touchstart: B, touchmove: 2, touchend: Y, touchcancel: U },
          vt = "touchstart",
          yt = "touchstart touchmove touchend touchcancel";
        function xt() {
          (this.evTarget = vt),
            (this.evWin = yt),
            (this.started = !1),
            tt.apply(this, arguments);
        }
        T(xt, tt, {
          handler: function (t) {
            var e = gt[t.type];
            if ((e === B && (this.started = !0), this.started)) {
              var i = function (t, e) {
                var i = M(t.touches),
                  n = M(t.changedTouches);
                return (
                  e & (Y | U) && (i = I(i.concat(n), "identifier", !0)), [i, n]
                );
              }.call(this, t, e);
              e & (Y | U) &&
                i[0].length - i[1].length == 0 &&
                (this.started = !1),
                this.callback(this.manager, e, {
                  pointers: i[0],
                  changedPointers: i[1],
                  pointerType: "touch",
                  srcEvent: t,
                });
            }
          },
        });
        var wt = { touchstart: B, touchmove: 2, touchend: Y, touchcancel: U },
          Tt = "touchstart touchmove touchend touchcancel";
        function bt() {
          (this.evTarget = Tt),
            (this.targetIds = {}),
            tt.apply(this, arguments);
        }
        T(bt, tt, {
          handler: function (t) {
            var e = wt[t.type],
              i = function (t, e) {
                var i = M(t.touches),
                  n = this.targetIds;
                if (e & (2 | B) && 1 === i.length)
                  return (n[i[0].identifier] = !0), [i, i];
                var r,
                  s,
                  o = M(t.changedTouches),
                  a = [],
                  l = this.target;
                if (
                  ((s = i.filter(function (t) {
                    return O(t.target, l);
                  })),
                  e === B)
                )
                  for (r = 0; r < s.length; ) (n[s[r].identifier] = !0), r++;
                for (r = 0; r < o.length; )
                  n[o[r].identifier] && a.push(o[r]),
                    e & (Y | U) && delete n[o[r].identifier],
                    r++;
                return a.length
                  ? [I(s.concat(a), "identifier", !0), a]
                  : void 0;
              }.call(this, t, e);
            i &&
              this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: "touch",
                srcEvent: t,
              });
          },
        });
        var Pt = 2500;
        function St() {
          tt.apply(this, arguments);
          var t = b(this.handler, this);
          (this.touch = new bt(this.manager, t)),
            (this.mouse = new ct(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function kt(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var i = { x: e.clientX, y: e.clientY };
            this.lastTouches.push(i);
            var n = this.lastTouches;
            setTimeout(function () {
              var t = n.indexOf(i);
              t > -1 && n.splice(t, 1);
            }, Pt);
          }
        }
        T(St, tt, {
          handler: function (t, e, i) {
            var n = "touch" == i.pointerType,
              r = "mouse" == i.pointerType;
            if (
              !(
                r &&
                i.sourceCapabilities &&
                i.sourceCapabilities.firesTouchEvents
              )
            ) {
              if (n)
                (function (t, e) {
                  t & B
                    ? ((this.primaryTouch = e.changedPointers[0].identifier),
                      kt.call(this, e))
                    : t & (Y | U) && kt.call(this, e);
                }.call(this, e, i));
              else if (
                r &&
                function (t) {
                  for (
                    var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0;
                    n < this.lastTouches.length;
                    n++
                  ) {
                    var r = this.lastTouches[n],
                      s = Math.abs(e - r.x),
                      o = Math.abs(i - r.y);
                    if (s <= 25 && o <= 25) return !0;
                  }
                  return !1;
                }.call(this, i)
              )
                return;
              this.callback(t, e, i);
            }
          },
          destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
          },
        });
        var At = F(c.style, "touchAction"),
          Ot = At !== l,
          Ct = "manipulation",
          Et = "none",
          Rt = "pan-x",
          Mt = "pan-y",
          It = (function () {
            if (!Ot) return !1;
            var t = {},
              e = s.CSS && s.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
              ].forEach(function (i) {
                t[i] = !e || s.CSS.supports("touch-action", i);
              }),
              t
            );
          })();
        function Ft(t, e) {
          (this.manager = t), this.set(e);
        }
        Ft.prototype = {
          set: function (t) {
            "compute" == t && (t = this.compute()),
              Ot &&
                this.manager.element.style &&
                It[t] &&
                (this.manager.element.style[At] = t),
              (this.actions = t.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var t = [];
            return (
              v(this.manager.recognizers, function (e) {
                P(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
              }),
              (function (t) {
                if (C(t, Et)) return Et;
                var e = C(t, Rt),
                  i = C(t, Mt);
                return e && i
                  ? Et
                  : e || i
                  ? e
                    ? Rt
                    : Mt
                  : C(t, Ct)
                  ? Ct
                  : "auto";
              })(t.join(" "))
            );
          },
          preventDefaults: function (t) {
            var e = t.srcEvent,
              i = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var n = this.actions,
                r = C(n, Et) && !It[Et],
                s = C(n, Mt) && !It[Mt],
                o = C(n, Rt) && !It[Rt];
              if (r) {
                var a = 1 === t.pointers.length,
                  l = t.distance < 2,
                  u = t.deltaTime < 250;
                if (a && l && u) return;
              }
              if (!o || !s)
                return r || (s && i & $) || (o && i & Q)
                  ? this.preventSrc(e)
                  : void 0;
            }
          },
          preventSrc: function (t) {
            (this.manager.session.prevented = !0), t.preventDefault();
          },
        };
        var Nt = 1,
          Dt = 2,
          zt = 4,
          Lt = 8,
          jt = Lt,
          Xt = 16;
        function Bt(t) {
          (this.options = u({}, this.defaults, t || {})),
            (this.id = N++),
            (this.manager = null),
            (this.options.enable = S(this.options.enable, !0)),
            (this.state = Nt),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function Yt(t) {
          return t & Xt
            ? "cancel"
            : t & Lt
            ? "end"
            : t & zt
            ? "move"
            : t & Dt
            ? "start"
            : "";
        }
        function Ut(t) {
          return t == W
            ? "down"
            : t == G
            ? "up"
            : t == q
            ? "left"
            : t == V
            ? "right"
            : "";
        }
        function Ht(t, e) {
          var i = e.manager;
          return i ? i.get(t) : t;
        }
        function qt() {
          Bt.apply(this, arguments);
        }
        function Vt() {
          qt.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function Gt() {
          qt.apply(this, arguments);
        }
        function Wt() {
          Bt.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function $t() {
          qt.apply(this, arguments);
        }
        function Qt() {
          qt.apply(this, arguments);
        }
        function Zt() {
          Bt.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function Kt(t, e) {
          return (
            ((e = e || {}).recognizers = S(e.recognizers, Kt.defaults.preset)),
            new Jt(t, e)
          );
        }
        function Jt(t, e) {
          var i;
          (this.options = u({}, Kt.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = new ((i = this).options.inputClass ||
              (L ? _t : j ? bt : z ? St : ct))(i, et)),
            (this.touchAction = new Ft(this, this.options.touchAction)),
            te(this, !0),
            v(
              this.options.recognizers,
              function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
              },
              this
            );
        }
        function te(t, e) {
          var i,
            n = t.element;
          n.style &&
            (v(t.options.cssProps, function (r, s) {
              (i = F(n.style, s)),
                e
                  ? ((t.oldCssProps[i] = n.style[i]), (n.style[i] = r))
                  : (n.style[i] = t.oldCssProps[i] || "");
            }),
            e || (t.oldCssProps = {}));
        }
        (Bt.prototype = {
          defaults: {},
          set: function (t) {
            return (
              u(this.options, t),
              this.manager && this.manager.touchAction.update(),
              this
            );
          },
          recognizeWith: function (t) {
            if (g(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return (
              e[(t = Ht(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)),
              this
            );
          },
          dropRecognizeWith: function (t) {
            return g(t, "dropRecognizeWith", this)
              ? this
              : ((t = Ht(t, this)), delete this.simultaneous[t.id], this);
          },
          requireFailure: function (t) {
            if (g(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return (
              -1 === R(e, (t = Ht(t, this))) &&
                (e.push(t), t.requireFailure(this)),
              this
            );
          },
          dropRequireFailure: function (t) {
            if (g(t, "dropRequireFailure", this)) return this;
            t = Ht(t, this);
            var e = R(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this;
          },
          hasRequireFailures: function () {
            return this.requireFail.length > 0;
          },
          canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id];
          },
          emit: function (t) {
            var e = this,
              i = this.state;
            function n(i) {
              e.manager.emit(i, t);
            }
            i < Lt && n(e.options.event + Yt(i)),
              n(e.options.event),
              t.additionalEvent && n(t.additionalEvent),
              i >= Lt && n(e.options.event + Yt(i));
          },
          tryEmit: function (t) {
            if (this.canEmit()) return this.emit(t);
            this.state = 32;
          },
          canEmit: function () {
            for (var t = 0; t < this.requireFail.length; ) {
              if (!(this.requireFail[t].state & (32 | Nt))) return !1;
              t++;
            }
            return !0;
          },
          recognize: function (t) {
            var e = u({}, t);
            if (!P(this.options.enable, [this, e]))
              return this.reset(), void (this.state = 32);
            this.state & (jt | Xt | 32) && (this.state = Nt),
              (this.state = this.process(e)),
              this.state & (Dt | zt | Lt | Xt) && this.tryEmit(e);
          },
          process: function (t) {},
          getTouchAction: function () {},
          reset: function () {},
        }),
          T(qt, Bt, {
            defaults: { pointers: 1 },
            attrTest: function (t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e;
            },
            process: function (t) {
              var e = this.state,
                i = t.eventType,
                n = e & (Dt | zt),
                r = this.attrTest(t);
              return n && (i & U || !r)
                ? e | Xt
                : n || r
                ? i & Y
                  ? e | Lt
                  : e & Dt
                  ? e | zt
                  : Dt
                : 32;
            },
          }),
          T(Vt, qt, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: Z,
            },
            getTouchAction: function () {
              var t = this.options.direction,
                e = [];
              return t & $ && e.push(Mt), t & Q && e.push(Rt), e;
            },
            directionTest: function (t) {
              var e = this.options,
                i = !0,
                n = t.distance,
                r = t.direction,
                s = t.deltaX,
                o = t.deltaY;
              return (
                r & e.direction ||
                  (e.direction & $
                    ? ((r = 0 === s ? H : s < 0 ? q : V),
                      (i = s != this.pX),
                      (n = Math.abs(t.deltaX)))
                    : ((r = 0 === o ? H : o < 0 ? G : W),
                      (i = o != this.pY),
                      (n = Math.abs(t.deltaY)))),
                (t.direction = r),
                i && n > e.threshold && r & e.direction
              );
            },
            attrTest: function (t) {
              return (
                qt.prototype.attrTest.call(this, t) &&
                (this.state & Dt ||
                  (!(this.state & Dt) && this.directionTest(t)))
              );
            },
            emit: function (t) {
              (this.pX = t.deltaX), (this.pY = t.deltaY);
              var e = Ut(t.direction);
              e && (t.additionalEvent = this.options.event + e),
                this._super.emit.call(this, t);
            },
          }),
          T(Gt, qt, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return [Et];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.scale - 1) > this.options.threshold ||
                  this.state & Dt)
              );
            },
            emit: function (t) {
              if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e;
              }
              this._super.emit.call(this, t);
            },
          }),
          T(Wt, Bt, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ["auto"];
            },
            process: function (t) {
              var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime > e.time;
              if (
                ((this._input = t), !n || !i || (t.eventType & (Y | U) && !r))
              )
                this.reset();
              else if (t.eventType & B)
                this.reset(),
                  (this._timer = _(
                    function () {
                      (this.state = jt), this.tryEmit();
                    },
                    e.time,
                    this
                  ));
              else if (t.eventType & Y) return jt;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (t) {
              this.state === jt &&
                (t && t.eventType & Y
                  ? this.manager.emit(this.options.event + "up", t)
                  : ((this._input.timeStamp = m()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          T($t, qt, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return [Et];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.rotation) > this.options.threshold ||
                  this.state & Dt)
              );
            },
          }),
          T(Qt, qt, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: $ | Q,
              pointers: 1,
            },
            getTouchAction: function () {
              return Vt.prototype.getTouchAction.call(this);
            },
            attrTest: function (t) {
              var e,
                i = this.options.direction;
              return (
                i & ($ | Q)
                  ? (e = t.overallVelocity)
                  : i & $
                  ? (e = t.overallVelocityX)
                  : i & Q && (e = t.overallVelocityY),
                this._super.attrTest.call(this, t) &&
                  i & t.offsetDirection &&
                  t.distance > this.options.threshold &&
                  t.maxPointers == this.options.pointers &&
                  d(e) > this.options.velocity &&
                  t.eventType & Y
              );
            },
            emit: function (t) {
              var e = Ut(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t),
                this.manager.emit(this.options.event, t);
            },
          }),
          T(Zt, Bt, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return [Ct];
            },
            process: function (t) {
              var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                r = t.deltaTime < e.time;
              if ((this.reset(), t.eventType & B && 0 === this.count))
                return this.failTimeout();
              if (n && r && i) {
                if (t.eventType != Y) return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                  o =
                    !this.pCenter ||
                    ot(this.pCenter, t.center) < e.posThreshold;
                if (
                  ((this.pTime = t.timeStamp),
                  (this.pCenter = t.center),
                  o && s ? (this.count += 1) : (this.count = 1),
                  (this._input = t),
                  0 == this.count % e.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = _(
                        function () {
                          (this.state = jt), this.tryEmit();
                        },
                        e.interval,
                        this
                      )),
                      Dt)
                    : jt;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = _(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              this.state == jt &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (Kt.VERSION = "2.0.7"),
          (Kt.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [$t, { enable: !1 }],
              [Gt, { enable: !1 }, ["rotate"]],
              [Qt, { direction: $ }],
              [Vt, { direction: $ }, ["swipe"]],
              [Zt],
              [Zt, { event: "doubletap", taps: 2 }, ["tap"]],
              [Wt],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          }),
          (Jt.prototype = {
            set: function (t) {
              return (
                u(this.options, t),
                t.touchAction && this.touchAction.update(),
                t.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = t.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function (t) {
              this.session.stopped = t ? 2 : 1;
            },
            recognize: function (t) {
              var e = this.session;
              if (!e.stopped) {
                var i;
                this.touchAction.preventDefaults(t);
                var n = this.recognizers,
                  r = e.curRecognizer;
                (!r || (r && r.state & jt)) && (r = e.curRecognizer = null);
                for (var s = 0; s < n.length; )
                  (i = n[s]),
                    2 === e.stopped || (r && i != r && !i.canRecognizeWith(r))
                      ? i.reset()
                      : i.recognize(t),
                    !r && i.state & (Dt | zt | Lt) && (r = e.curRecognizer = i),
                    s++;
              }
            },
            get: function (t) {
              if (t instanceof Bt) return t;
              for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t) return e[i];
              return null;
            },
            add: function (t) {
              if (g(t, "add", this)) return this;
              var e = this.get(t.options.event);
              return (
                e && this.remove(e),
                this.recognizers.push(t),
                (t.manager = this),
                this.touchAction.update(),
                t
              );
            },
            remove: function (t) {
              if (g(t, "remove", this)) return this;
              if ((t = this.get(t))) {
                var e = this.recognizers,
                  i = R(e, t);
                -1 !== i && (e.splice(i, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (t, e) {
              if (t !== l && e !== l) {
                var i = this.handlers;
                return (
                  v(E(t), function (t) {
                    (i[t] = i[t] || []), i[t].push(e);
                  }),
                  this
                );
              }
            },
            off: function (t, e) {
              if (t !== l) {
                var i = this.handlers;
                return (
                  v(E(t), function (t) {
                    e ? i[t] && i[t].splice(R(i[t], e), 1) : delete i[t];
                  }),
                  this
                );
              }
            },
            emit: function (t, e) {
              this.options.domEvents &&
                (function (t, e) {
                  var i = o.createEvent("Event");
                  i.initEvent(t, !0, !0),
                    (i.gesture = e),
                    e.target.dispatchEvent(i);
                })(t, e);
              var i = this.handlers[t] && this.handlers[t].slice();
              if (i && i.length) {
                (e.type = t),
                  (e.preventDefault = function () {
                    e.srcEvent.preventDefault();
                  });
                for (var n = 0; n < i.length; ) i[n](e), n++;
              }
            },
            destroy: function () {
              this.element && te(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            },
          }),
          u(Kt, {
            INPUT_START: B,
            INPUT_MOVE: 2,
            INPUT_END: Y,
            INPUT_CANCEL: U,
            STATE_POSSIBLE: Nt,
            STATE_BEGAN: Dt,
            STATE_CHANGED: zt,
            STATE_ENDED: Lt,
            STATE_RECOGNIZED: jt,
            STATE_CANCELLED: Xt,
            STATE_FAILED: 32,
            DIRECTION_NONE: H,
            DIRECTION_LEFT: q,
            DIRECTION_RIGHT: V,
            DIRECTION_UP: G,
            DIRECTION_DOWN: W,
            DIRECTION_HORIZONTAL: $,
            DIRECTION_VERTICAL: Q,
            DIRECTION_ALL: Z,
            Manager: Jt,
            Input: tt,
            TouchAction: Ft,
            TouchInput: bt,
            MouseInput: ct,
            PointerEventInput: _t,
            TouchMouseInput: St,
            SingleTouchInput: xt,
            Recognizer: Bt,
            AttrRecognizer: qt,
            Tap: Zt,
            Pan: Vt,
            Swipe: Qt,
            Pinch: Gt,
            Rotate: $t,
            Press: Wt,
            on: k,
            off: A,
            each: v,
            merge: w,
            extend: x,
            assign: u,
            inherit: T,
            bindFn: b,
            prefixed: F,
          }),
          ((void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer =
            Kt),
          (n = function () {
            return Kt;
          }.call(e, i, e, t)) === l || (t.exports = n);
      })(window, document);
    },
    function (t, e, i) {
      (function (n, r) {
        var s,
          o,
          a,
          l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
        (a = function () {
          "use strict";
          function t(t) {
            return "function" == typeof t;
          }
          function e() {
            var t = setTimeout;
            return function () {
              return t(i, 1);
            };
          }
          function i() {
            for (var t = 0; t < y; t += 2)
              (0, O[t])(O[t + 1]), (O[t] = void 0), (O[t + 1] = void 0);
            y = 0;
          }
          function s(t, e) {
            var i = this,
              n = new this.constructor(a);
            void 0 === n[E] && g(n);
            var r = i._state;
            if (r) {
              var s = arguments[r - 1];
              T(function () {
                return _(r, n, s, i._result);
              });
            } else d(i, n, t, e);
            return n;
          }
          function o(t) {
            if (
              t &&
              "object" == (void 0 === t ? "undefined" : l(t)) &&
              t.constructor === this
            )
              return t;
            var e = new this(a);
            return h(e, t), e;
          }
          function a() {}
          function u(e, i, n) {
            i.constructor === e.constructor &&
            n === s &&
            i.constructor.resolve === o
              ? (function (t, e) {
                  e._state === M
                    ? f(t, e._result)
                    : e._state === I
                    ? p(t, e._result)
                    : d(
                        e,
                        void 0,
                        function (e) {
                          return h(t, e);
                        },
                        function (e) {
                          return p(t, e);
                        }
                      );
                })(e, i)
              : void 0 === n
              ? f(e, i)
              : t(n)
              ? (function (t, e, i) {
                  T(function (t) {
                    var n = !1,
                      r = (function (t, e, i, n) {
                        try {
                          t.call(e, i, n);
                        } catch (t) {
                          return t;
                        }
                      })(
                        i,
                        e,
                        function (i) {
                          n || ((n = !0), e !== i ? h(t, i) : f(t, i));
                        },
                        function (e) {
                          n || ((n = !0), p(t, e));
                        },
                        t._label
                      );
                    !n && r && ((n = !0), p(t, r));
                  }, t);
                })(e, i, n)
              : f(e, i);
          }
          function h(t, e) {
            if (t === e)
              p(t, new TypeError("You cannot resolve a promise with itself"));
            else if (
              (function (t) {
                var e = void 0 === t ? "undefined" : l(t);
                return null !== t && ("object" === e || "function" === e);
              })(e)
            ) {
              var i = void 0;
              try {
                i = e.then;
              } catch (e) {
                return void p(t, e);
              }
              u(t, e, i);
            } else f(t, e);
          }
          function c(t) {
            t._onerror && t._onerror(t._result), m(t);
          }
          function f(t, e) {
            t._state === R &&
              ((t._result = e),
              (t._state = M),
              0 !== t._subscribers.length && T(m, t));
          }
          function p(t, e) {
            t._state === R && ((t._state = I), (t._result = e), T(c, t));
          }
          function d(t, e, i, n) {
            var r = t._subscribers,
              s = r.length;
            (t._onerror = null),
              (r[s] = e),
              (r[s + M] = i),
              (r[s + I] = n),
              0 === s && t._state && T(m, t);
          }
          function m(t) {
            var e = t._subscribers,
              i = t._state;
            if (0 !== e.length) {
              for (
                var n = void 0, r = void 0, s = t._result, o = 0;
                o < e.length;
                o += 3
              )
                (n = e[o]), (r = e[o + i]), n ? _(i, n, r, s) : r(s);
              t._subscribers.length = 0;
            }
          }
          function _(e, i, n, r) {
            var s = t(n),
              o = void 0,
              a = void 0,
              l = !0;
            if (s) {
              try {
                o = n(r);
              } catch (t) {
                (l = !1), (a = t);
              }
              if (i === o)
                return void p(
                  i,
                  new TypeError(
                    "A promises callback cannot return that same promise."
                  )
                );
            } else o = r;
            i._state !== R ||
              (s && l
                ? h(i, o)
                : !1 === l
                ? p(i, a)
                : e === M
                ? f(i, o)
                : e === I && p(i, o));
          }
          function g(t) {
            (t[E] = F++),
              (t._state = void 0),
              (t._result = void 0),
              (t._subscribers = []);
          }
          var v = Array.isArray
              ? Array.isArray
              : function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t);
                },
            y = 0,
            x = void 0,
            w = void 0,
            T = function (t, e) {
              (O[y] = t), (O[y + 1] = e), 2 === (y += 2) && (w ? w(i) : C());
            },
            b = "undefined" != typeof window ? window : void 0,
            P = b || {},
            S = P.MutationObserver || P.WebKitMutationObserver,
            k =
              "undefined" == typeof self &&
              void 0 !== n &&
              "[object process]" === {}.toString.call(n),
            A =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel,
            O = new Array(1e3),
            C = void 0;
          C = k
            ? function () {
                return n.nextTick(i);
              }
            : S
            ? (function () {
                var t = 0,
                  e = new S(i),
                  n = document.createTextNode("");
                return (
                  e.observe(n, { characterData: !0 }),
                  function () {
                    n.data = t = ++t % 2;
                  }
                );
              })()
            : A
            ? (function () {
                var t = new MessageChannel();
                return (
                  (t.port1.onmessage = i),
                  function () {
                    return t.port2.postMessage(0);
                  }
                );
              })()
            : void 0 === b
            ? (function () {
                try {
                  var t = Function("return this")().require("vertx");
                  return void 0 !== (x = t.runOnLoop || t.runOnContext)
                    ? function () {
                        x(i);
                      }
                    : e();
                } catch (t) {
                  return e();
                }
              })()
            : e();
          var E = Math.random().toString(36).substring(2),
            R = void 0,
            M = 1,
            I = 2,
            F = 0,
            N = (function () {
              function t(t, e) {
                (this._instanceConstructor = t),
                  (this.promise = new t(a)),
                  this.promise[E] || g(this.promise),
                  v(e)
                    ? ((this.length = e.length),
                      (this._remaining = e.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? f(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(e),
                          0 === this._remaining &&
                            f(this.promise, this._result)))
                    : p(
                        this.promise,
                        new Error("Array Methods must be provided an Array")
                      );
              }
              return (
                (t.prototype._enumerate = function (t) {
                  for (var e = 0; this._state === R && e < t.length; e++)
                    this._eachEntry(t[e], e);
                }),
                (t.prototype._eachEntry = function (t, e) {
                  var i = this._instanceConstructor,
                    n = i.resolve;
                  if (n === o) {
                    var r = void 0,
                      l = void 0,
                      h = !1;
                    try {
                      r = t.then;
                    } catch (t) {
                      (h = !0), (l = t);
                    }
                    if (r === s && t._state !== R)
                      this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof r)
                      this._remaining--, (this._result[e] = t);
                    else if (i === D) {
                      var c = new i(a);
                      h ? p(c, l) : u(c, t, r), this._willSettleAt(c, e);
                    } else
                      this._willSettleAt(
                        new i(function (e) {
                          return e(t);
                        }),
                        e
                      );
                  } else this._willSettleAt(n(t), e);
                }),
                (t.prototype._settledAt = function (t, e, i) {
                  var n = this.promise;
                  n._state === R &&
                    (this._remaining--,
                    t === I ? p(n, i) : (this._result[e] = i)),
                    0 === this._remaining && f(n, this._result);
                }),
                (t.prototype._willSettleAt = function (t, e) {
                  var i = this;
                  d(
                    t,
                    void 0,
                    function (t) {
                      return i._settledAt(M, e, t);
                    },
                    function (t) {
                      return i._settledAt(I, e, t);
                    }
                  );
                }),
                t
              );
            })(),
            D = (function () {
              function e(t) {
                (this[E] = F++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  a !== t &&
                    ("function" != typeof t &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor"
                        );
                      })(),
                    this instanceof e
                      ? (function (t, e) {
                          try {
                            e(
                              function (e) {
                                h(t, e);
                              },
                              function (e) {
                                p(t, e);
                              }
                            );
                          } catch (e) {
                            p(t, e);
                          }
                        })(this, t)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                          );
                        })());
              }
              return (
                (e.prototype.catch = function (t) {
                  return this.then(null, t);
                }),
                (e.prototype.finally = function (e) {
                  var i = this,
                    n = i.constructor;
                  return t(e)
                    ? i.then(
                        function (t) {
                          return n.resolve(e()).then(function () {
                            return t;
                          });
                        },
                        function (t) {
                          return n.resolve(e()).then(function () {
                            throw t;
                          });
                        }
                      )
                    : i.then(e, e);
                }),
                e
              );
            })();
          return (
            (D.prototype.then = s),
            (D.all = function (t) {
              return new N(this, t).promise;
            }),
            (D.race = function (t) {
              var e = this;
              return new e(
                v(t)
                  ? function (i, n) {
                      for (var r = t.length, s = 0; s < r; s++)
                        e.resolve(t[s]).then(i, n);
                    }
                  : function (t, e) {
                      return e(
                        new TypeError("You must pass an array to race.")
                      );
                    }
              );
            }),
            (D.resolve = o),
            (D.reject = function (t) {
              var e = new this(a);
              return p(e, t), e;
            }),
            (D._setScheduler = function (t) {
              w = t;
            }),
            (D._setAsap = function (t) {
              T = t;
            }),
            (D._asap = T),
            (D.polyfill = function () {
              var t = void 0;
              if (void 0 !== r) t = r;
              else if ("undefined" != typeof self) t = self;
              else
                try {
                  t = Function("return this")();
                } catch (t) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment"
                  );
                }
              var e = t.Promise;
              if (e) {
                var i = null;
                try {
                  i = Object.prototype.toString.call(e.resolve());
                } catch (t) {}
                if ("[object Promise]" === i && !e.cast) return;
              }
              t.Promise = D;
            }),
            (D.Promise = D),
            D.polyfill(),
            D
          );
        }),
          "object" == l(e) && void 0 !== t
            ? (t.exports = a())
            : void 0 ===
                (o = "function" == typeof (s = a) ? s.call(e, i, e, t) : s) ||
              (t.exports = o);
      }.call(this, i(7), i(3)));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, i) {
      "use strict";
      (function (t) {
        var e = i(14),
          n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          r = setTimeout;
        function s(t) {
          return Boolean(t && void 0 !== t.length);
        }
        function o() {}
        function a(t) {
          if (!(this instanceof a))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            f(t, this);
        }
        function l(t, e) {
          for (; 3 === t._state; ) t = t._value;
          0 !== t._state
            ? ((t._handled = !0),
              a._immediateFn(function () {
                var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== i) {
                  var n;
                  try {
                    n = i(t._value);
                  } catch (t) {
                    return void h(e.promise, t);
                  }
                  u(e.promise, n);
                } else (1 === t._state ? u : h)(e.promise, t._value);
              }))
            : t._deferreds.push(e);
        }
        function u(t, e) {
          try {
            if (e === t)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (
              e &&
              ("object" === (void 0 === e ? "undefined" : n(e)) ||
                "function" == typeof e)
            ) {
              var i = e.then;
              if (e instanceof a)
                return (t._state = 3), (t._value = e), void c(t);
              if ("function" == typeof i)
                return void f(
                  ((r = i),
                  (s = e),
                  function () {
                    r.apply(s, arguments);
                  }),
                  t
                );
            }
            (t._state = 1), (t._value = e), c(t);
          } catch (e) {
            h(t, e);
          }
          var r, s;
        }
        function h(t, e) {
          (t._state = 2), (t._value = e), c(t);
        }
        function c(t) {
          2 === t._state &&
            0 === t._deferreds.length &&
            a._immediateFn(function () {
              t._handled || a._unhandledRejectionFn(t._value);
            });
          for (var e = 0, i = t._deferreds.length; e < i; e++)
            l(t, t._deferreds[e]);
          t._deferreds = null;
        }
        function f(t, e) {
          var i = !1;
          try {
            t(
              function (t) {
                i || ((i = !0), u(e, t));
              },
              function (t) {
                i || ((i = !0), h(e, t));
              }
            );
          } catch (t) {
            if (i) return;
            (i = !0), h(e, t);
          }
        }
        (a.prototype.catch = function (t) {
          return this.then(null, t);
        }),
          (a.prototype.then = function (t, e) {
            var i = new this.constructor(o);
            return (
              l(
                this,
                new (function (t, e, i) {
                  (this.onFulfilled = "function" == typeof t ? t : null),
                    (this.onRejected = "function" == typeof e ? e : null),
                    (this.promise = i);
                })(t, e, i)
              ),
              i
            );
          }),
          (a.prototype.finally = e.a),
          (a.all = function (t) {
            return new a(function (e, i) {
              if (!s(t))
                return i(new TypeError("Promise.all accepts an array"));
              var r = Array.prototype.slice.call(t);
              if (0 === r.length) return e([]);
              var o = r.length;
              function a(t, s) {
                try {
                  if (
                    s &&
                    ("object" === (void 0 === s ? "undefined" : n(s)) ||
                      "function" == typeof s)
                  ) {
                    var l = s.then;
                    if ("function" == typeof l)
                      return void l.call(
                        s,
                        function (e) {
                          a(t, e);
                        },
                        i
                      );
                  }
                  (r[t] = s), 0 == --o && e(r);
                } catch (t) {
                  i(t);
                }
              }
              for (var l = 0; l < r.length; l++) a(l, r[l]);
            });
          }),
          (a.resolve = function (t) {
            return t &&
              "object" === (void 0 === t ? "undefined" : n(t)) &&
              t.constructor === a
              ? t
              : new a(function (e) {
                  e(t);
                });
          }),
          (a.reject = function (t) {
            return new a(function (e, i) {
              i(t);
            });
          }),
          (a.race = function (t) {
            return new a(function (e, i) {
              if (!s(t))
                return i(new TypeError("Promise.race accepts an array"));
              for (var n = 0, r = t.length; n < r; n++)
                a.resolve(t[n]).then(e, i);
            });
          }),
          (a._immediateFn =
            ("function" == typeof t &&
              function (e) {
                t(e);
              }) ||
            function (t) {
              r(t, 0);
            }),
          (a._unhandledRejectionFn = function (t) {
            "undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", t);
          });
      }.call(this, i(27).setImmediate));
    },
    function (t, e, i) {
      (function (t) {
        var n =
            (void 0 !== t && t) ||
            ("undefined" != typeof self && self) ||
            window,
          r = Function.prototype.apply;
        function s(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function () {
          return new s(r.call(setTimeout, n, arguments), clearTimeout);
        }),
          (e.setInterval = function () {
            return new s(r.call(setInterval, n, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval =
            function (t) {
              t && t.close();
            }),
          (s.prototype.unref = s.prototype.ref = function () {}),
          (s.prototype.close = function () {
            this._clearFn.call(n, this._id);
          }),
          (e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
          }),
          (e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
          }),
          (e._unrefActive = e.active =
            function (t) {
              clearTimeout(t._idleTimeoutId);
              var e = t._idleTimeout;
              e >= 0 &&
                (t._idleTimeoutId = setTimeout(function () {
                  t._onTimeout && t._onTimeout();
                }, e));
            }),
          i(28),
          (e.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, i(3)));
    },
    function (t, e, i) {
      (function (t, e) {
        !(function (t, i) {
          "use strict";
          if (!t.setImmediate) {
            var n,
              r,
              s,
              o,
              a,
              l = 1,
              u = {},
              h = !1,
              c = t.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (f = f && f.setTimeout ? f : t),
              "[object process]" === {}.toString.call(t.process)
                ? (n = function (t) {
                    e.nextTick(function () {
                      d(t);
                    });
                  })
                : (function () {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        i = t.onmessage;
                      return (
                        (t.onmessage = function () {
                          e = !1;
                        }),
                        t.postMessage("", "*"),
                        (t.onmessage = i),
                        e
                      );
                    }
                  })()
                ? ((o = "setImmediate$" + Math.random() + "$"),
                  (a = function (e) {
                    e.source === t &&
                      "string" == typeof e.data &&
                      0 === e.data.indexOf(o) &&
                      d(+e.data.slice(o.length));
                  }),
                  t.addEventListener
                    ? t.addEventListener("message", a, !1)
                    : t.attachEvent("onmessage", a),
                  (n = function (e) {
                    t.postMessage(o + e, "*");
                  }))
                : t.MessageChannel
                ? (((s = new MessageChannel()).port1.onmessage = function (t) {
                    d(t.data);
                  }),
                  (n = function (t) {
                    s.port2.postMessage(t);
                  }))
                : c && "onreadystatechange" in c.createElement("script")
                ? ((r = c.documentElement),
                  (n = function (t) {
                    var e = c.createElement("script");
                    (e.onreadystatechange = function () {
                      d(t),
                        (e.onreadystatechange = null),
                        r.removeChild(e),
                        (e = null);
                    }),
                      r.appendChild(e);
                  }))
                : (n = function (t) {
                    setTimeout(d, 0, t);
                  }),
              (f.setImmediate = function (t) {
                "function" != typeof t && (t = new Function("" + t));
                for (
                  var e = new Array(arguments.length - 1), i = 0;
                  i < e.length;
                  i++
                )
                  e[i] = arguments[i + 1];
                var r = { callback: t, args: e };
                return (u[l] = r), n(l), l++;
              }),
              (f.clearImmediate = p);
          }
          function p(t) {
            delete u[t];
          }
          function d(t) {
            if (h) setTimeout(d, 0, t);
            else {
              var e = u[t];
              if (e) {
                h = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      n = t.args;
                    switch (n.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(n[0]);
                        break;
                      case 2:
                        e(n[0], n[1]);
                        break;
                      case 3:
                        e(n[0], n[1], n[2]);
                        break;
                      default:
                        e.apply(i, n);
                    }
                  })(e);
                } finally {
                  p(t), (h = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }.call(this, i(3), i(7)));
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = i(9),
        s = i(31),
        o = i(8);
      function a(t) {
        var e = new s(t),
          i = r(s.prototype.request, e);
        return n.extend(i, s.prototype, e), n.extend(i, e), i;
      }
      var l = a(o);
      (l.Axios = s),
        (l.create = function (t) {
          return a(n.merge(o, t));
        }),
        (l.Cancel = i(13)),
        (l.CancelToken = i(44)),
        (l.isCancel = i(12)),
        (l.all = function (t) {
          return Promise.all(t);
        }),
        (l.spread = i(45)),
        (t.exports = l),
        (t.exports.default = l);
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          null != t &&
          null != t.constructor &&
          "function" == typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(8),
        r = i(2),
        s = i(39),
        o = i(40);
      function a(t) {
        (this.defaults = t),
          (this.interceptors = { request: new s(), response: new s() });
      }
      (a.prototype.request = function (t) {
        "string" == typeof t &&
          (t = r.merge({ url: arguments[0] }, arguments[1])),
          ((t = r.merge(n, { method: "get" }, this.defaults, t)).method =
            t.method.toLowerCase());
        var e = [o, void 0],
          i = Promise.resolve(t);
        for (
          this.interceptors.request.forEach(function (t) {
            e.unshift(t.fulfilled, t.rejected);
          }),
            this.interceptors.response.forEach(function (t) {
              e.push(t.fulfilled, t.rejected);
            });
          e.length;

        )
          i = i.then(e.shift(), e.shift());
        return i;
      }),
        r.forEach(["delete", "get", "head", "options"], function (t) {
          a.prototype[t] = function (e, i) {
            return this.request(r.merge(i || {}, { method: t, url: e }));
          };
        }),
        r.forEach(["post", "put", "patch"], function (t) {
          a.prototype[t] = function (e, i, n) {
            return this.request(
              r.merge(n || {}, { method: t, url: e, data: i })
            );
          };
        }),
        (t.exports = a);
    },
    function (t, e, i) {
      "use strict";
      var n = i(2);
      t.exports = function (t, e) {
        n.forEach(t, function (i, n) {
          n !== e &&
            n.toUpperCase() === e.toUpperCase() &&
            ((t[e] = i), delete t[n]);
        });
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(11);
      t.exports = function (t, e, i) {
        var r = i.config.validateStatus;
        i.status && r && !r(i.status)
          ? e(
              n(
                "Request failed with status code " + i.status,
                i.config,
                null,
                i.request,
                i
              )
            )
          : t(i);
      };
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t, e, i, n, r) {
        return (
          (t.config = e),
          i && (t.code = i),
          (t.request = n),
          (t.response = r),
          t
        );
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2);
      function r(t) {
        return encodeURIComponent(t)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      t.exports = function (t, e, i) {
        if (!e) return t;
        var s;
        if (i) s = i(e);
        else if (n.isURLSearchParams(e)) s = e.toString();
        else {
          var o = [];
          n.forEach(e, function (t, e) {
            null !== t &&
              void 0 !== t &&
              (n.isArray(t) ? (e += "[]") : (t = [t]),
              n.forEach(t, function (t) {
                n.isDate(t)
                  ? (t = t.toISOString())
                  : n.isObject(t) && (t = JSON.stringify(t)),
                  o.push(r(e) + "=" + r(t));
              }));
          }),
            (s = o.join("&"));
        }
        return s && (t += (-1 === t.indexOf("?") ? "?" : "&") + s), t;
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      t.exports = function (t) {
        var e,
          i,
          s,
          o = {};
        return t
          ? (n.forEach(t.split("\n"), function (t) {
              if (
                ((s = t.indexOf(":")),
                (e = n.trim(t.substr(0, s)).toLowerCase()),
                (i = n.trim(t.substr(s + 1))),
                e)
              ) {
                if (o[e] && r.indexOf(e) >= 0) return;
                o[e] =
                  "set-cookie" === e
                    ? (o[e] ? o[e] : []).concat([i])
                    : o[e]
                    ? o[e] + ", " + i
                    : i;
              }
            }),
            o)
          : o;
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2);
      t.exports = n.isStandardBrowserEnv()
        ? (function () {
            var t,
              e = /(msie|trident)/i.test(navigator.userAgent),
              i = document.createElement("a");
            function r(t) {
              var n = t;
              return (
                e && (i.setAttribute("href", n), (n = i.href)),
                i.setAttribute("href", n),
                {
                  href: i.href,
                  protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                  host: i.host,
                  search: i.search ? i.search.replace(/^\?/, "") : "",
                  hash: i.hash ? i.hash.replace(/^#/, "") : "",
                  hostname: i.hostname,
                  port: i.port,
                  pathname:
                    "/" === i.pathname.charAt(0)
                      ? i.pathname
                      : "/" + i.pathname,
                }
              );
            }
            return (
              (t = r(window.location.href)),
              function (e) {
                var i = n.isString(e) ? r(e) : e;
                return i.protocol === t.protocol && i.host === t.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2);
      t.exports = n.isStandardBrowserEnv()
        ? {
            write: function (t, e, i, r, s, o) {
              var a = [];
              a.push(t + "=" + encodeURIComponent(e)),
                n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
                n.isString(r) && a.push("path=" + r),
                n.isString(s) && a.push("domain=" + s),
                !0 === o && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (t) {
              var e = document.cookie.match(
                new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
              );
              return e ? decodeURIComponent(e[3]) : null;
            },
            remove: function (t) {
              this.write(t, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2);
      function r() {
        this.handlers = [];
      }
      (r.prototype.use = function (t, e) {
        return (
          this.handlers.push({ fulfilled: t, rejected: e }),
          this.handlers.length - 1
        );
      }),
        (r.prototype.eject = function (t) {
          this.handlers[t] && (this.handlers[t] = null);
        }),
        (r.prototype.forEach = function (t) {
          n.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      var n = i(2),
        r = i(41),
        s = i(12),
        o = i(8),
        a = i(42),
        l = i(43);
      function u(t) {
        t.cancelToken && t.cancelToken.throwIfRequested();
      }
      t.exports = function (t) {
        return (
          u(t),
          t.baseURL && !a(t.url) && (t.url = l(t.baseURL, t.url)),
          (t.headers = t.headers || {}),
          (t.data = r(t.data, t.headers, t.transformRequest)),
          (t.headers = n.merge(
            t.headers.common || {},
            t.headers[t.method] || {},
            t.headers || {}
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (e) {
              delete t.headers[e];
            }
          ),
          (t.adapter || o.adapter)(t).then(
            function (e) {
              return (
                u(t), (e.data = r(e.data, e.headers, t.transformResponse)), e
              );
            },
            function (e) {
              return (
                s(e) ||
                  (u(t),
                  e &&
                    e.response &&
                    (e.response.data = r(
                      e.response.data,
                      e.response.headers,
                      t.transformResponse
                    ))),
                Promise.reject(e)
              );
            }
          )
        );
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(2);
      t.exports = function (t, e, i) {
        return (
          n.forEach(i, function (i) {
            t = i(t, e);
          }),
          t
        );
      };
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
      };
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
      };
    },
    function (t, e, i) {
      "use strict";
      var n = i(13);
      function r(t) {
        if ("function" != typeof t)
          throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function (t) {
          e = t;
        });
        var i = this;
        t(function (t) {
          i.reason || ((i.reason = new n(t)), e(i.reason));
        });
      }
      (r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (r.source = function () {
          var t;
          return {
            token: new r(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }),
        (t.exports = r);
    },
    function (t, e, i) {
      "use strict";
      t.exports = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      };
    },
  ],
]);


const list = document.querySelector('.js-apicomment-list');
list.setAttribute('style', 'opacity: 1;' )
