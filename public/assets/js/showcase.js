(function (factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function () {
  "use strict";

  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = e);
  }
  /*!
   * GSAP 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var _suppressOverwrites$1,
    _reverting$1,
    _context$1,
    _globalTimeline,
    _win$3,
    _coreInitted$2,
    _doc$3,
    _coreReady,
    _lastRenderedFrame,
    _quickTween,
    _tickerActive,
    _config = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    _defaults$1 = { duration: 0.5, overwrite: !1, delay: 0 },
    _bigNum$1 = 1e8,
    _tinyNum = 1 / _bigNum$1,
    _2PI = 2 * Math.PI,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString$1 = function (t) {
      return "string" == typeof t;
    },
    _isFunction$1 = function (t) {
      return "function" == typeof t;
    },
    _isNumber$1 = function (t) {
      return "number" == typeof t;
    },
    _isUndefined = function (t) {
      return void 0 === t;
    },
    _isObject$1 = function (t) {
      return "object" == typeof t;
    },
    _isNotFalse = function (t) {
      return !1 !== t;
    },
    _windowExists$2 = function () {
      return "undefined" != typeof window;
    },
    _isFuncOrString = function (t) {
      return _isFunction$1(t) || _isString$1(t);
    },
    _isTypedArray =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    _isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    _relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globals = {},
    _installScope = {},
    _install = function (t) {
      return (_installScope = _merge(t, _globals)) && gsap$2;
    },
    _missingPlugin = function (t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    _warn = function (t, e) {
      return !e && console.warn(t);
    },
    _addGlobal = function (t, e) {
      return (
        (t && (_globals[t] = e) && _installScope && (_installScope[t] = e)) ||
        _globals
      );
    },
    _emptyFunc = function () {
      return 0;
    },
    _startAtRevertConfig = { suppressEvents: !0, isStart: !0, kill: !1 },
    _revertConfigNoKill = { suppressEvents: !0, kill: !1 },
    _revertConfig = { suppressEvents: !0 },
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function (t) {
      var e,
        i,
        r = t[0];
      if (
        (_isObject$1(r) || _isFunction$1(r) || (t = [t]),
        !(e = (r._gsap || {}).harness))
      ) {
        for (
          i = _harnessPlugins.length;
          i-- && !_harnessPlugins[i].targetTest(r);

        );
        e = _harnessPlugins[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new GSCache(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    },
    _getCache = function (t) {
      return t._gsap || _harness(toArray(t))[0]._gsap;
    },
    _getProperty = function (t, e, i) {
      return (i = t[e]) && _isFunction$1(i)
        ? t[e]()
        : (_isUndefined(i) && t.getAttribute && t.getAttribute(e)) || i;
    },
    _forEachName = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    _round$1 = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    _roundPrecise = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    _parseRelative = function (t, e) {
      var i = e.charAt(0),
        r = parseFloat(e.substr(2));
      return (
        (t = parseFloat(t)),
        "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r
      );
    },
    _arrayContainsAny = function (t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i;
    },
    _lazyRender = function () {
      var t,
        e,
        i = _lazyTweens.length,
        r = _lazyTweens.slice(0);
      for (_lazyLookup = {}, _lazyTweens.length = 0, t = 0; t < i; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    _lazySafeRender = function (t, e, i, r) {
      _lazyTweens.length && _lazyRender(),
        t.render(
          e,
          i,
          r || (_reverting$1 && e < 0 && (t._initted || t._startAt))
        ),
        _lazyTweens.length && _lazyRender();
    },
    _numericIfPossible = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(_delimitedValueExp).length < 2
        ? e
        : _isString$1(t)
        ? t.trim()
        : t;
    },
    _passThrough$1 = function (t) {
      return t;
    },
    _setDefaults$1 = function (t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    },
    _setKeyframeDefaults = function (t) {
      return function (e, i) {
        for (var r in i)
          r in e || ("duration" === r && t) || "ease" === r || (e[r] = i[r]);
      };
    },
    _merge = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    },
    _mergeDeep = function t(e, i) {
      for (var r in i)
        "__proto__" !== r &&
          "constructor" !== r &&
          "prototype" !== r &&
          (e[r] = _isObject$1(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
      return e;
    },
    _copyExcluding = function (t, e) {
      var i,
        r = {};
      for (i in t) i in e || (r[i] = t[i]);
      return r;
    },
    _inheritDefaults = function (t) {
      var e = t.parent || _globalTimeline,
        i = t.keyframes
          ? _setKeyframeDefaults(_isArray(t.keyframes))
          : _setDefaults$1;
      if (_isNotFalse(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    _arraysMatch = function (t, e) {
      for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
      return i < 0;
    },
    _addLinkedListItem = function (t, e, i, r, n) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var a,
        s = t[r];
      if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
      return (
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[i]), (t[i] = e)),
        e._next ? (e._next._prev = e) : (t[r] = e),
        (e._prev = s),
        (e.parent = e._dp = t),
        e
      );
    },
    _removeLinkedListItem = function (t, e, i, r) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var n = e._prev,
        a = e._next;
      n ? (n._next = a) : t[i] === e && (t[i] = a),
        a ? (a._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null);
    },
    _removeFromParent = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
        (t._act = 0);
    },
    _uncache = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
      return t;
    },
    _recacheAncestors = function (t) {
      for (var e = t.parent; e && e.parent; )
        (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    _rewindStartAt = function (t, e, i, r) {
      return (
        t._startAt &&
        (_reverting$1
          ? t._startAt.revert(_revertConfigNoKill)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(e, !0, r))
      );
    },
    _hasNoPausedAncestors = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    _elapsedCycleDuration = function (t) {
      return t._repeat
        ? _animationCycle(t._tTime, (t = t.duration() + t._rDelay)) * t
        : 0;
    },
    _animationCycle = function (t, e) {
      var i = Math.floor((t /= e));
      return t && i === t ? i - 1 : i;
    },
    _parentToChildTotalTime = function (t, e) {
      return (
        (t - e._start) * e._ts +
        (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    },
    _setEnd = function (t) {
      return (t._end = _roundPrecise(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || _tinyNum) || 0)
      ));
    },
    _alignPlayhead = function (t, e) {
      var i = t._dp;
      return (
        i &&
          i.smoothChildTiming &&
          t._ts &&
          ((t._start = _roundPrecise(
            i._time -
              (t._ts > 0
                ? e / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
          )),
          _setEnd(t),
          i._dirty || _uncache(i, t)),
        t
      );
    },
    _postAddChecks = function (t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = _parentToChildTotalTime(t.rawTime(), e)),
          (!e._dur ||
            _clamp$1(0, e.totalDuration(), i) - e._tTime > _tinyNum) &&
            e.render(i, !0)),
        _uncache(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -_tinyNum;
      }
    },
    _addToTimeline = function (t, e, i, r) {
      return (
        e.parent && _removeFromParent(e),
        (e._start = _roundPrecise(
          (_isNumber$1(i)
            ? i
            : i || t !== _globalTimeline
            ? _parsePosition$1(t, i, e)
            : t._time) + e._delay
        )),
        (e._end = _roundPrecise(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
        )),
        _addLinkedListItem(t, e, "_first", "_last", t._sort ? "_start" : 0),
        _isFromOrFromStart(e) || (t._recent = e),
        r || _postAddChecks(t, e),
        t._ts < 0 && _alignPlayhead(t, t._tTime),
        t
      );
    },
    _scrollTrigger = function (t, e) {
      return (
        (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", e)) &&
        _globals.ScrollTrigger.create(e, t)
      );
    },
    _attemptInitTween = function (t, e, i, r, n) {
      return (
        _initTween(t, e, n),
        t._initted
          ? !i &&
            t._pt &&
            !_reverting$1 &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            _lastRenderedFrame !== _ticker.frame
            ? (_lazyTweens.push(t), (t._lazy = [n, r]), 1)
            : void 0
          : 1
      );
    },
    _parentPlayheadIsBeforeStart = function t(e) {
      var i = e.parent;
      return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
    },
    _isFromOrFromStart = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    _renderZeroDurationTween = function (t, e, i, r) {
      var n,
        a,
        s,
        o = t.ratio,
        _ =
          e < 0 ||
          (!e &&
            ((!t._start &&
              _parentPlayheadIsBeforeStart(t) &&
              (t._initted || !_isFromOrFromStart(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !_isFromOrFromStart(t))))
            ? 0
            : 1,
        u = t._rDelay,
        l = 0;
      if (
        (u &&
          t._repeat &&
          ((l = _clamp$1(0, t._tDur, e)),
          (a = _animationCycle(l, u)),
          t._yoyo && 1 & a && (_ = 1 - _),
          a !== _animationCycle(t._tTime, u) &&
            ((o = 1 - _),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        _ !== o ||
          _reverting$1 ||
          r ||
          t._zTime === _tinyNum ||
          (!e && t._zTime))
      ) {
        if (!t._initted && _attemptInitTween(t, e, r, i, l)) return;
        for (
          s = t._zTime,
            t._zTime = e || (i ? _tinyNum : 0),
            i || (i = e && !s),
            t.ratio = _,
            t._from && (_ = 1 - _),
            t._time = 0,
            t._tTime = l,
            n = t._pt;
          n;

        )
          n.r(_, n.d), (n = n._next);
        e < 0 && _rewindStartAt(t, e, i, !0),
          t._onUpdate && !i && _callback$1(t, "onUpdate"),
          l && t._repeat && !i && t.parent && _callback$1(t, "onRepeat"),
          (e >= t._tDur || e < 0) &&
            t.ratio === _ &&
            (_ && _removeFromParent(t, 1),
            i ||
              _reverting$1 ||
              (_callback$1(t, _ ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    _findNextPauseTween = function (t, e, i) {
      var r;
      if (i > e)
        for (r = t._first; r && r._start <= i; ) {
          if ("isPause" === r.data && r._start > e) return r;
          r = r._next;
        }
      else
        for (r = t._last; r && r._start >= i; ) {
          if ("isPause" === r.data && r._start < e) return r;
          r = r._prev;
        }
    },
    _setDuration = function (t, e, i, r) {
      var n = t._repeat,
        a = _roundPrecise(e) || 0,
        s = t._tTime / t._tDur;
      return (
        s && !r && (t._time *= a / t._dur),
        (t._dur = a),
        (t._tDur = n
          ? n < 0
            ? 1e10
            : _roundPrecise(a * (n + 1) + t._rDelay * n)
          : a),
        s > 0 && !r && _alignPlayhead(t, (t._tTime = t._tDur * s)),
        t.parent && _setEnd(t),
        i || _uncache(t.parent, t),
        t
      );
    },
    _onUpdateTotalDuration = function (t) {
      return t instanceof Timeline ? _uncache(t) : _setDuration(t, t._dur);
    },
    _zeroPosition = {
      _start: 0,
      endTime: _emptyFunc,
      totalDuration: _emptyFunc,
    },
    _parsePosition$1 = function t(e, i, r) {
      var n,
        a,
        s,
        o = e.labels,
        _ = e._recent || _zeroPosition,
        u = e.duration() >= _bigNum$1 ? _.endTime(!1) : e._dur;
      return _isString$1(i) && (isNaN(i) || i in o)
        ? ((a = i.charAt(0)),
          (s = "%" === i.substr(-1)),
          (n = i.indexOf("=")),
          "<" === a || ">" === a
            ? (n >= 0 && (i = i.replace(/=/, "")),
              ("<" === a ? _._start : _.endTime(_._repeat >= 0)) +
                (parseFloat(i.substr(1)) || 0) *
                  (s ? (n < 0 ? _ : r).totalDuration() / 100 : 1))
            : n < 0
            ? (i in o || (o[i] = u), o[i])
            : ((a = parseFloat(i.charAt(n - 1) + i.substr(n + 1))),
              s &&
                r &&
                (a = (a / 100) * (_isArray(r) ? r[0] : r).totalDuration()),
              n > 1 ? t(e, i.substr(0, n - 1), r) + a : u + a))
        : null == i
        ? u
        : +i;
    },
    _createTweenType = function (t, e, i) {
      var r,
        n,
        a = _isNumber$1(e[1]),
        s = (a ? 2 : 1) + (t < 2 ? 0 : 1),
        o = e[s];
      if ((a && (o.duration = e[1]), (o.parent = i), t)) {
        for (r = o, n = i; n && !("immediateRender" in r); )
          (r = n.vars.defaults || {}),
            (n = _isNotFalse(n.vars.inherit) && n.parent);
        (o.immediateRender = _isNotFalse(r.immediateRender)),
          t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
      }
      return new Tween(e[0], o, e[s + 1]);
    },
    _conditionalReturn = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    _clamp$1 = function (t, e, i) {
      return i < t ? t : i > e ? e : i;
    },
    getUnit = function (t, e) {
      return _isString$1(t) && (e = _unitExp.exec(t)) ? e[1] : "";
    },
    clamp = function (t, e, i) {
      return _conditionalReturn(i, function (i) {
        return _clamp$1(t, e, i);
      });
    },
    _slice = [].slice,
    _isArrayLike = function (t, e) {
      return (
        t &&
        _isObject$1(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && _isObject$1(t[0]))) &&
        !t.nodeType &&
        t !== _win$3
      );
    },
    _flatten = function (t, e, i) {
      return (
        void 0 === i && (i = []),
        t.forEach(function (t) {
          var r;
          return (_isString$1(t) && !e) || _isArrayLike(t, 1)
            ? (r = i).push.apply(r, toArray(t))
            : i.push(t);
        }) || i
      );
    },
    toArray = function (t, e, i) {
      return _context$1 && !e && _context$1.selector
        ? _context$1.selector(t)
        : !_isString$1(t) || i || (!_coreInitted$2 && _wake())
        ? _isArray(t)
          ? _flatten(t, i)
          : _isArrayLike(t)
          ? _slice.call(t, 0)
          : t
          ? [t]
          : []
        : _slice.call((e || _doc$3).querySelectorAll(t), 0);
    },
    selector = function (t) {
      return (
        (t = toArray(t)[0] || _warn("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return toArray(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? _warn("Invalid scope") || _doc$3.createElement("div")
              : t
          );
        }
      );
    },
    shuffle = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    distribute = function (t) {
      if (_isFunction$1(t)) return t;
      var e = _isObject$1(t) ? t : { each: t },
        i = _parseEase(e.ease),
        r = e.from || 0,
        n = parseFloat(e.base) || 0,
        a = {},
        s = r > 0 && r < 1,
        o = isNaN(r) || s,
        _ = e.axis,
        u = r,
        l = r;
      return (
        _isString$1(r)
          ? (u = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !s && o && ((u = r[0]), (l = r[1])),
        function (t, s, c) {
          var h,
            p,
            d,
            f,
            m,
            g,
            v,
            T,
            y,
            w = (c || e).length,
            b = a[w];
          if (!b) {
            if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, _bigNum$1])[1])) {
              for (
                v = -_bigNum$1;
                v < (v = c[y++].getBoundingClientRect().left) && y < w;

              );
              y--;
            }
            for (
              b = a[w] = [],
                h = o ? Math.min(y, w) * u - 0.5 : r % y,
                p = y === _bigNum$1 ? 0 : o ? (w * l) / y - 0.5 : (r / y) | 0,
                v = 0,
                T = _bigNum$1,
                g = 0;
              g < w;
              g++
            )
              (d = (g % y) - h),
                (f = p - ((g / y) | 0)),
                (b[g] = m =
                  _ ? Math.abs("y" === _ ? f : d) : _sqrt(d * d + f * f)),
                m > v && (v = m),
                m < T && (T = m);
            "random" === r && shuffle(b),
              (b.max = v - T),
              (b.min = T),
              (b.v = w =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (y > w
                      ? w - 1
                      : _
                      ? "y" === _
                        ? w / y
                        : y
                      : Math.max(y, w / y)) ||
                  0) * ("edges" === r ? -1 : 1)),
              (b.b = w < 0 ? n - w : n),
              (b.u = getUnit(e.amount || e.each) || 0),
              (i = i && w < 0 ? _invertEase(i) : i);
          }
          return (
            (w = (b[t] - b.min) / b.max || 0),
            _roundPrecise(b.b + (i ? i(w) : w) * b.v) + b.u
          );
        }
      );
    },
    _roundModifier = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (i) {
        var r = _roundPrecise(Math.round(parseFloat(i) / t) * t * e);
        return (r - (r % 1)) / e + (_isNumber$1(i) ? 0 : getUnit(i));
      };
    },
    snap = function (t, e) {
      var i,
        r,
        n = _isArray(t);
      return (
        !n &&
          _isObject$1(t) &&
          ((i = n = t.radius || _bigNum$1),
          t.values
            ? ((t = toArray(t.values)), (r = !_isNumber$1(t[0])) && (i *= i))
            : (t = _roundModifier(t.increment))),
        _conditionalReturn(
          e,
          n
            ? _isFunction$1(t)
              ? function (e) {
                  return (r = t(e)), Math.abs(r - e) <= i ? r : e;
                }
              : function (e) {
                  for (
                    var n,
                      a,
                      s = parseFloat(r ? e.x : e),
                      o = parseFloat(r ? e.y : 0),
                      _ = _bigNum$1,
                      u = 0,
                      l = t.length;
                    l--;

                  )
                    (n = r
                      ? (n = t[l].x - s) * n + (a = t[l].y - o) * a
                      : Math.abs(t[l] - s)) < _ && ((_ = n), (u = l));
                  return (
                    (u = !i || _ <= i ? t[u] : e),
                    r || u === e || _isNumber$1(e) ? u : u + getUnit(e)
                  );
                }
            : _roundModifier(t)
        )
      );
    },
    random = function (t, e, i, r) {
      return _conditionalReturn(
        _isArray(t) ? !e : !0 === i ? !!(i = 0) : !r,
        function () {
          return _isArray(t)
            ? t[~~(Math.random() * t.length)]
            : (i = i || 1e-5) &&
                (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i
                  ) *
                    i *
                    r
                ) / r;
        }
      );
    },
    pipe = function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (t) {
        return e.reduce(function (t, e) {
          return e(t);
        }, t);
      };
    },
    unitize = function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || getUnit(i));
      };
    },
    normalize = function (t, e, i) {
      return mapRange(t, e, 0, 1, i);
    },
    _wrapArray = function (t, e, i) {
      return _conditionalReturn(i, function (i) {
        return t[~~e(i)];
      });
    },
    wrap = function t(e, i, r) {
      var n = i - e;
      return _isArray(e)
        ? _wrapArray(e, t(0, e.length), i)
        : _conditionalReturn(r, function (t) {
            return ((n + ((t - e) % n)) % n) + e;
          });
    },
    wrapYoyo = function t(e, i, r) {
      var n = i - e,
        a = 2 * n;
      return _isArray(e)
        ? _wrapArray(e, t(0, e.length - 1), i)
        : _conditionalReturn(r, function (t) {
            return e + ((t = (a + ((t - e) % a)) % a || 0) > n ? a - t : t);
          });
    },
    _replaceRandom = function (t) {
      for (var e, i, r, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
        (r = t.indexOf(")", e)),
          (n = "[" === t.charAt(e + 7)),
          (i = t
            .substr(e + 7, r - e - 7)
            .match(n ? _delimitedValueExp : _strictNumExp)),
          (s +=
            t.substr(a, e - a) +
            random(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)),
          (a = r + 1);
      return s + t.substr(a, t.length - a);
    },
    mapRange = function (t, e, i, r, n) {
      var a = e - t,
        s = r - i;
      return _conditionalReturn(n, function (e) {
        return i + (((e - t) / a) * s || 0);
      });
    },
    interpolate = function t(e, i, r, n) {
      var a = isNaN(e + i)
        ? 0
        : function (t) {
            return (1 - t) * e + t * i;
          };
      if (!a) {
        var s,
          o,
          _,
          u,
          l,
          c = _isString$1(e),
          h = {};
        if ((!0 === r && (n = 1) && (r = null), c))
          (e = { p: e }), (i = { p: i });
        else if (_isArray(e) && !_isArray(i)) {
          for (_ = [], u = e.length, l = u - 2, o = 1; o < u; o++)
            _.push(t(e[o - 1], e[o]));
          u--,
            (a = function (t) {
              t *= u;
              var e = Math.min(l, ~~t);
              return _[e](t - e);
            }),
            (r = i);
        } else n || (e = _merge(_isArray(e) ? [] : {}, e));
        if (!_) {
          for (s in i) _addPropTween.call(h, e, s, "get", i[s]);
          a = function (t) {
            return _renderPropTweens(t, h) || (c ? e.p : e);
          };
        }
      }
      return _conditionalReturn(r, a);
    },
    _getLabelInDirection = function (t, e, i) {
      var r,
        n,
        a,
        s = t.labels,
        o = _bigNum$1;
      for (r in s)
        (n = s[r] - e) < 0 == !!i &&
          n &&
          o > (n = Math.abs(n)) &&
          ((a = r), (o = n));
      return a;
    },
    _callback$1 = function (t, e, i) {
      var r,
        n,
        a,
        s = t.vars,
        o = s[e],
        _ = _context$1,
        u = t._ctx;
      if (o)
        return (
          (r = s[e + "Params"]),
          (n = s.callbackScope || t),
          i && _lazyTweens.length && _lazyRender(),
          u && (_context$1 = u),
          (a = r ? o.apply(n, r) : o.call(n)),
          (_context$1 = _),
          a
        );
    },
    _interrupt = function (t) {
      return (
        _removeFromParent(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!_reverting$1),
        t.progress() < 1 && _callback$1(t, "onInterrupt"),
        t
      );
    },
    _createPlugin = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        i = _isFunction$1(t),
        r =
          e && !i && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0,
        },
        a = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0,
        };
      if ((_wake(), t !== r)) {
        if (_plugins[e]) return;
        _setDefaults$1(r, _setDefaults$1(_copyExcluding(t, n), a)),
          _merge(r.prototype, _merge(n, _copyExcluding(t, a))),
          (_plugins[(r.prop = e)] = r),
          t.targetTest && (_harnessPlugins.push(r), (_reservedProps[e] = 1)),
          (e =
            ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
            "Plugin");
      }
      _addGlobal(e, r), t.register && t.register(gsap$2, r, PropTween);
    },
    _255 = 255,
    _colorLookup = {
      aqua: [0, _255, _255],
      lime: [0, _255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _255],
      navy: [0, 0, 128],
      white: [_255, _255, _255],
      olive: [128, 128, 0],
      yellow: [_255, _255, 0],
      orange: [_255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_255, 0, 0],
      pink: [_255, 192, 203],
      cyan: [0, _255, _255],
      transparent: [_255, _255, _255, 0],
    },
    _hue = function (t, e, i) {
      return (
        ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) *
          _255 +
          0.5) |
        0
      );
    },
    splitColor = function (t, e, i) {
      var r,
        n,
        a,
        s,
        o,
        _,
        u,
        l,
        c,
        h,
        p = t
          ? _isNumber$1(t)
            ? [t >> 16, (t >> 8) & _255, t & _255]
            : 0
          : _colorLookup.black;
      if (!p) {
        if (
          ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
          _colorLookup[t])
        )
          p = _colorLookup[t];
        else if ("#" === t.charAt(0)) {
          if (
            (t.length < 6 &&
              ((r = t.charAt(1)),
              (n = t.charAt(2)),
              (a = t.charAt(3)),
              (t =
                "#" +
                r +
                r +
                n +
                n +
                a +
                a +
                (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
            9 === t.length)
          )
            return [
              (p = parseInt(t.substr(1, 6), 16)) >> 16,
              (p >> 8) & _255,
              p & _255,
              parseInt(t.substr(7), 16) / 255,
            ];
          p = [
            (t = parseInt(t.substr(1), 16)) >> 16,
            (t >> 8) & _255,
            t & _255,
          ];
        } else if ("hsl" === t.substr(0, 3))
          if (((p = h = t.match(_strictNumExp)), e)) {
            if (~t.indexOf("="))
              return (p = t.match(_numExp)), i && p.length < 4 && (p[3] = 1), p;
          } else
            (s = (+p[0] % 360) / 360),
              (o = +p[1] / 100),
              (r =
                2 * (_ = +p[2] / 100) -
                (n = _ <= 0.5 ? _ * (o + 1) : _ + o - _ * o)),
              p.length > 3 && (p[3] *= 1),
              (p[0] = _hue(s + 1 / 3, r, n)),
              (p[1] = _hue(s, r, n)),
              (p[2] = _hue(s - 1 / 3, r, n));
        else p = t.match(_strictNumExp) || _colorLookup.transparent;
        p = p.map(Number);
      }
      return (
        e &&
          !h &&
          ((r = p[0] / _255),
          (n = p[1] / _255),
          (a = p[2] / _255),
          (_ = ((u = Math.max(r, n, a)) + (l = Math.min(r, n, a))) / 2),
          u === l
            ? (s = o = 0)
            : ((c = u - l),
              (o = _ > 0.5 ? c / (2 - u - l) : c / (u + l)),
              (s =
                u === r
                  ? (n - a) / c + (n < a ? 6 : 0)
                  : u === n
                  ? (a - r) / c + 2
                  : (r - n) / c + 4),
              (s *= 60)),
          (p[0] = ~~(s + 0.5)),
          (p[1] = ~~(100 * o + 0.5)),
          (p[2] = ~~(100 * _ + 0.5))),
        i && p.length < 4 && (p[3] = 1),
        p
      );
    },
    _colorOrderData = function (t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(_colorExp).forEach(function (t) {
          var n = t.match(_numWithUnitExp) || [];
          e.push.apply(e, n), i.push((r += n.length + 1));
        }),
        (e.c = i),
        e
      );
    },
    _formatColors = function (t, e, i) {
      var r,
        n,
        a,
        s,
        o = "",
        _ = (t + o).match(_colorExp),
        u = e ? "hsla(" : "rgba(",
        l = 0;
      if (!_) return t;
      if (
        ((_ = _.map(function (t) {
          return (
            (t = splitColor(t, e, 1)) &&
            u +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        i && ((a = _colorOrderData(t)), (r = i.c).join(o) !== a.c.join(o)))
      )
        for (
          s = (n = t.replace(_colorExp, "1").split(_numWithUnitExp)).length - 1;
          l < s;
          l++
        )
          o +=
            n[l] +
            (~r.indexOf(l)
              ? _.shift() || u + "0,0,0,0)"
              : (a.length ? a : _.length ? _ : i).shift());
      if (!n)
        for (s = (n = t.split(_colorExp)).length - 1; l < s; l++)
          o += n[l] + _[l];
      return o + n[s];
    },
    _colorExp = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in _colorLookup) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function (t) {
      var e,
        i = t.join(" ");
      if (((_colorExp.lastIndex = 0), _colorExp.test(i)))
        return (
          (e = _hslExp.test(i)),
          (t[1] = _formatColors(t[1], e)),
          (t[0] = _formatColors(t[0], e, _colorOrderData(t[1]))),
          !0
        );
    },
    _ticker = (function () {
      var t,
        e,
        i,
        r,
        n,
        a,
        s = Date.now,
        o = 500,
        _ = 33,
        u = s(),
        l = u,
        c = 1e3 / 240,
        h = c,
        p = [],
        d = function i(d) {
          var f,
            m,
            g,
            v,
            T = s() - l,
            y = !0 === d;
          if (
            (T > o && (u += T - _),
            ((f = (g = (l += T) - u) - h) > 0 || y) &&
              ((v = ++r.frame),
              (n = g - 1e3 * r.time),
              (r.time = g /= 1e3),
              (h += f + (f >= c ? 4 : c - f)),
              (m = 1)),
            y || (t = e(i)),
            m)
          )
            for (a = 0; a < p.length; a++) p[a](g, n, v, d);
        };
      return (r = {
        time: 0,
        frame: 0,
        tick: function () {
          d(!0);
        },
        deltaRatio: function (t) {
          return n / (1e3 / (t || 60));
        },
        wake: function () {
          _coreReady &&
            (!_coreInitted$2 &&
              _windowExists$2() &&
              ((_win$3 = _coreInitted$2 = window),
              (_doc$3 = _win$3.document || {}),
              (_globals.gsap = gsap$2),
              (_win$3.gsapVersions || (_win$3.gsapVersions = [])).push(
                gsap$2.version
              ),
              _install(
                _installScope ||
                  _win$3.GreenSockGlobals ||
                  (!_win$3.gsap && _win$3) ||
                  {}
              ),
              (i = _win$3.requestAnimationFrame)),
            t && r.sleep(),
            (e =
              i ||
              function (t) {
                return setTimeout(t, (h - 1e3 * r.time + 1) | 0);
              }),
            (_tickerActive = 1),
            d(2));
        },
        sleep: function () {
          (i ? _win$3.cancelAnimationFrame : clearTimeout)(t),
            (_tickerActive = 0),
            (e = _emptyFunc);
        },
        lagSmoothing: function (t, e) {
          (o = t || 1 / _tinyNum), (_ = Math.min(e, o, 0));
        },
        fps: function (t) {
          (c = 1e3 / (t || 240)), (h = 1e3 * r.time + c);
        },
        add: function (t, e, i) {
          var n = e
            ? function (e, i, a, s) {
                t(e, i, a, s), r.remove(n);
              }
            : t;
          return r.remove(t), p[i ? "unshift" : "push"](n), _wake(), n;
        },
        remove: function (t, e) {
          ~(e = p.indexOf(t)) && p.splice(e, 1) && a >= e && a--;
        },
        _listeners: p,
      });
    })(),
    _wake = function () {
      return !_tickerActive && _ticker.wake();
    },
    _easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function (t) {
      for (
        var e,
          i,
          r,
          n = {},
          a = t.substr(1, t.length - 3).split(":"),
          s = a[0],
          o = 1,
          _ = a.length;
        o < _;
        o++
      )
        (i = a[o]),
          (e = o !== _ - 1 ? i.lastIndexOf(",") : i.length),
          (r = i.substr(0, e)),
          (n[s] = isNaN(r) ? r.replace(_quotesExp, "").trim() : +r),
          (s = i.substr(e + 1).trim());
      return n;
    },
    _valueInParentheses = function (t) {
      var e = t.indexOf("(") + 1,
        i = t.indexOf(")"),
        r = t.indexOf("(", e);
      return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
    },
    _configEaseFromString = function (t) {
      var e = (t + "").split("("),
        i = _easeMap[e[0]];
      return i && e.length > 1 && i.config
        ? i.config.apply(
            null,
            ~t.indexOf("{")
              ? [_parseObjectInString(e[1])]
              : _valueInParentheses(t).split(",").map(_numericIfPossible)
          )
        : _easeMap._CE && _customEaseExp.test(t)
        ? _easeMap._CE("", t)
        : i;
    },
    _invertEase = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    _propagateYoyoEase = function t(e, i) {
      for (var r, n = e._first; n; )
        n instanceof Timeline
          ? t(n, i)
          : !n.vars.yoyoEase ||
            (n._yoyo && n._repeat) ||
            n._yoyo === i ||
            (n.timeline
              ? t(n.timeline, i)
              : ((r = n._ease),
                (n._ease = n._yEase),
                (n._yEase = r),
                (n._yoyo = i))),
          (n = n._next);
    },
    _parseEase = function (t, e) {
      return (
        (t &&
          (_isFunction$1(t) ? t : _easeMap[t] || _configEaseFromString(t))) ||
        e
      );
    },
    _insertEase = function (t, e, i, r) {
      void 0 === i &&
        (i = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === r &&
          (r = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var n,
        a = { easeIn: e, easeOut: i, easeInOut: r };
      return (
        _forEachName(t, function (t) {
          for (var e in ((_easeMap[t] = _globals[t] = a),
          (_easeMap[(n = t.toLowerCase())] = i),
          a))
            _easeMap[
              n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = _easeMap[t + "." + e] = a[e];
        }),
        a
      );
    },
    _easeInOutFromOut = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    _configElastic = function t(e, i, r) {
      var n = i >= 1 ? i : 1,
        a = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
        s = (a / _2PI) * (Math.asin(1 / n) || 0),
        o = function (t) {
          return 1 === t ? 1 : n * Math.pow(2, -10 * t) * _sin((t - s) * a) + 1;
        },
        _ =
          "out" === e
            ? o
            : "in" === e
            ? function (t) {
                return 1 - o(1 - t);
              }
            : _easeInOutFromOut(o);
      return (
        (a = _2PI / a),
        (_.config = function (i, r) {
          return t(e, i, r);
        }),
        _
      );
    },
    _configBack = function t(e, i) {
      void 0 === i && (i = 1.70158);
      var r = function (t) {
          return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
        },
        n =
          "out" === e
            ? r
            : "in" === e
            ? function (t) {
                return 1 - r(1 - t);
              }
            : _easeInOutFromOut(r);
      return (
        (n.config = function (i) {
          return t(e, i);
        }),
        n
      );
    };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var i = e < 5 ? e + 1 : e;
    _insertEase(
      t + ",Power" + (i - 1),
      e
        ? function (t) {
            return Math.pow(t, i);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, i);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, i) / 2
          : 1 - Math.pow(2 * (1 - t), i) / 2;
      }
    );
  }),
    (_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn),
    _insertEase(
      "Elastic",
      _configElastic("in"),
      _configElastic("out"),
      _configElastic()
    ),
    (function (t, e) {
      var i = 1 / e,
        r = function (r) {
          return r < i
            ? t * r * r
            : r < 0.7272727272727273
            ? t * Math.pow(r - 1.5 / e, 2) + 0.75
            : r < 0.9090909090909092
            ? t * (r -= 2.25 / e) * r + 0.9375
            : t * Math.pow(r - 2.625 / e, 2) + 0.984375;
        };
      _insertEase(
        "Bounce",
        function (t) {
          return 1 - r(1 - t);
        },
        r
      );
    })(7.5625, 2.75),
    _insertEase("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    _insertEase("Circ", function (t) {
      return -(_sqrt(1 - t * t) - 1);
    }),
    _insertEase("Sine", function (t) {
      return 1 === t ? 1 : 1 - _cos(t * _HALF_PI);
    }),
    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack()),
    (_easeMap.SteppedEase =
      _easeMap.steps =
      _globals.SteppedEase =
        {
          config: function (t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
              r = t + (e ? 0 : 1),
              n = e ? 1 : 0,
              a = 1 - _tinyNum;
            return function (t) {
              return (((r * _clamp$1(0, a, t)) | 0) + n) * i;
            };
          },
        }),
    (_defaults$1.ease = _easeMap["quad.out"]),
    _forEachName(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (_callbackNames += t + "," + t + "Params,");
      }
    );
  var GSCache = function (t, e) {
    (this.id = _gsID++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : _getProperty),
      (this.set = e ? e.getSetter : _getSetter);
  };
  var Animation = (function () {
    function t(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        _setDuration(this, +t.duration, 1, 1),
        (this.data = t.data),
        _context$1 && ((this._ctx = _context$1), _context$1.data.push(this)),
        _tickerActive || _ticker.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            _setDuration(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((_wake(), !arguments.length)) return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
          for (
            _alignPlayhead(this, t),
              !i._dp || i.parent || _postAddChecks(i, this);
            i && i.parent;

          )
            i.parent._time !==
              i._start +
                (i._ts >= 0
                  ? i._tTime / i._ts
                  : (i.totalDuration() - i._tTime) / -i._ts) &&
              i.totalTime(i._tTime, !0),
              (i = i.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === _tinyNum) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), _lazySafeRender(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + _elapsedCycleDuration(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (e.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                _elapsedCycleDuration(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (t, e) {
        var i = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * i, e)
          : this._repeat
          ? _animationCycle(this._tTime, i) + 1
          : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts
            ? _parentToChildTotalTime(this.parent._time, this)
            : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -_tinyNum ? 0 : this._rts),
          this.totalTime(_clamp$1(-this._delay, this._tDur, e), !0),
          _setEnd(this),
          _recacheAncestors(this)
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (_wake(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      Math.abs(this._zTime) !== _tinyNum &&
                      (this._tTime -= _tinyNum)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            e &&
              (e._sort || !this.parent) &&
              _addToTimeline(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (_isNotFalse(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? _parentToChildTotalTime(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (t) {
        void 0 === t && (t = _revertConfig);
        var e = _reverting$1;
        return (
          (_reverting$1 = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          "nested" !== this.data && !1 !== t.kill && this.kill(),
          (_reverting$1 = e),
          this
        );
      }),
      (e.globalTime = function (t) {
        for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
          (i = e._start + i / (e._ts || 1)), (e = e._dp);
        return !this.parent && this.vars.immediateRender ? -1 : i;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t),
            _onUpdateTotalDuration(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (
            (this._rDelay = t),
            _onUpdateTotalDuration(this),
            e ? this.time(e) : this
          );
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(_parsePosition$1(this, t), _isNotFalse(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, _isNotFalse(e));
      }),
      (e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -_tinyNum : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -_tinyNum), this;
      }),
      (e.isActive = function () {
        var t,
          e = this.parent || this._dp,
          i = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < this.endTime(!0) - _tinyNum
          )
        );
      }),
      (e.eventCallback = function (t, e, i) {
        var r = this.vars;
        return arguments.length > 1
          ? (e
              ? ((r[t] = e),
                i && (r[t + "Params"] = i),
                "onUpdate" === t && (this._onUpdate = e))
              : delete r[t],
            this)
          : r[t];
      }),
      (e.then = function (t) {
        var e = this;
        return new Promise(function (i) {
          var r = _isFunction$1(t) ? t : _passThrough$1,
            n = function () {
              var t = e.then;
              (e.then = null),
                _isFunction$1(r) &&
                  (r = r(e)) &&
                  (r.then || r === e) &&
                  (e.then = t),
                i(r),
                (e.then = t);
            };
          (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
          (!e._tTime && e._ts < 0)
            ? n()
            : (e._prom = n);
        });
      }),
      (e.kill = function () {
        _interrupt(this);
      }),
      t
    );
  })();
  _setDefaults$1(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Timeline = (function (t) {
    function e(e, i) {
      var r;
      return (
        void 0 === e && (e = {}),
        ((r = t.call(this, e) || this).labels = {}),
        (r.smoothChildTiming = !!e.smoothChildTiming),
        (r.autoRemoveChildren = !!e.autoRemoveChildren),
        (r._sort = _isNotFalse(e.sortChildren)),
        _globalTimeline &&
          _addToTimeline(
            e.parent || _globalTimeline,
            _assertThisInitialized(r),
            i
          ),
        e.reversed && r.reverse(),
        e.paused && r.paused(!0),
        e.scrollTrigger &&
          _scrollTrigger(_assertThisInitialized(r), e.scrollTrigger),
        r
      );
    }
    _inheritsLoose(e, t);
    var i = e.prototype;
    return (
      (i.to = function (t, e, i) {
        return _createTweenType(0, arguments, this), this;
      }),
      (i.from = function (t, e, i) {
        return _createTweenType(1, arguments, this), this;
      }),
      (i.fromTo = function (t, e, i, r) {
        return _createTweenType(2, arguments, this), this;
      }),
      (i.set = function (t, e, i) {
        return (
          (e.duration = 0),
          (e.parent = this),
          _inheritDefaults(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Tween(t, e, _parsePosition$1(this, i), 1),
          this
        );
      }),
      (i.call = function (t, e, i) {
        return _addToTimeline(this, Tween.delayedCall(0, t, e), i);
      }),
      (i.staggerTo = function (t, e, i, r, n, a, s) {
        return (
          (i.duration = e),
          (i.stagger = i.stagger || r),
          (i.onComplete = a),
          (i.onCompleteParams = s),
          (i.parent = this),
          new Tween(t, i, _parsePosition$1(this, n)),
          this
        );
      }),
      (i.staggerFrom = function (t, e, i, r, n, a, s) {
        return (
          (i.runBackwards = 1),
          (_inheritDefaults(i).immediateRender = _isNotFalse(
            i.immediateRender
          )),
          this.staggerTo(t, e, i, r, n, a, s)
        );
      }),
      (i.staggerFromTo = function (t, e, i, r, n, a, s, o) {
        return (
          (r.startAt = i),
          (_inheritDefaults(r).immediateRender = _isNotFalse(
            r.immediateRender
          )),
          this.staggerTo(t, e, r, n, a, s, o)
        );
      }),
      (i.render = function (t, e, i) {
        var r,
          n,
          a,
          s,
          o,
          _,
          u,
          l,
          c,
          h,
          p,
          d,
          f = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : _roundPrecise(t),
          T = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (
          (this !== _globalTimeline && v > m && t >= 0 && (v = m),
          v !== this._tTime || i || T)
        ) {
          if (
            (f !== this._time &&
              g &&
              ((v += this._time - f), (t += this._time - f)),
            (r = v),
            (c = this._start),
            (_ = !(l = this._ts)),
            T && (g || (f = this._zTime), (t || !e) && (this._zTime = t)),
            this._repeat)
          ) {
            if (
              ((p = this._yoyo),
              (o = g + this._rDelay),
              this._repeat < -1 && t < 0)
            )
              return this.totalTime(100 * o + t, e, i);
            if (
              ((r = _roundPrecise(v % o)),
              v === m
                ? ((s = this._repeat), (r = g))
                : ((s = ~~(v / o)) && s === v / o && ((r = g), s--),
                  r > g && (r = g)),
              (h = _animationCycle(this._tTime, o)),
              !f && this._tTime && h !== s && (h = s),
              p && 1 & s && ((r = g - r), (d = 1)),
              s !== h && !this._lock)
            ) {
              var y = p && 1 & h,
                w = y === (p && 1 & s);
              if (
                (s < h && (y = !y),
                (f = y ? 0 : g),
                (this._lock = 1),
                (this.render(
                  f || (d ? 0 : _roundPrecise(s * o)),
                  e,
                  !g
                )._lock = 0),
                (this._tTime = v),
                !e && this.parent && _callback$1(this, "onRepeat"),
                this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                (f && f !== this._time) ||
                  _ !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                w &&
                  ((this._lock = 2),
                  (f = y ? g : -1e-4),
                  this.render(f, !0),
                  this.vars.repeatRefresh && !d && this.invalidate()),
                (this._lock = 0),
                !this._ts && !_)
              )
                return this;
              _propagateYoyoEase(this, d);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (u = _findNextPauseTween(
                this,
                _roundPrecise(f),
                _roundPrecise(r)
              )) &&
              (v -= r - (r = u._start)),
            (this._tTime = v),
            (this._time = r),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t),
              (f = 0)),
            !f && r && !e && (_callback$1(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (r >= f && t >= 0)
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || r >= n._start) && n._ts && u !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (r - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (r - n._start) * n._ts,
                    e,
                    i
                  ),
                  r !== this._time || (!this._ts && !_))
                ) {
                  (u = 0), a && (v += this._zTime = -_tinyNum);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var b = t < 0 ? t : r; n; ) {
              if (
                ((a = n._prev), (n._act || b <= n._end) && n._ts && u !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, i);
                if (
                  (n.render(
                    n._ts > 0
                      ? (b - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (b - n._start) * n._ts,
                    e,
                    i || (_reverting$1 && (n._initted || n._startAt))
                  ),
                  r !== this._time || (!this._ts && !_))
                ) {
                  (u = 0), a && (v += this._zTime = b ? -_tinyNum : _tinyNum);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            u &&
            !e &&
            (this.pause(),
            (u.render(r >= f ? 0 : -_tinyNum)._zTime = r >= f ? 1 : -1),
            this._ts)
          )
            return (this._start = c), _setEnd(this), this.render(t, e, i);
          this._onUpdate && !e && _callback$1(this, "onUpdate", !0),
            ((v === m && this._tTime >= this.totalDuration()) || (!v && f)) &&
              ((c !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((t || !g) &&
                  ((v === m && this._ts > 0) || (!v && this._ts < 0)) &&
                  _removeFromParent(this, 1),
                e ||
                  (t < 0 && !f) ||
                  (!v && !f && m) ||
                  (_callback$1(
                    this,
                    v === m && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(v < m && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (i.add = function (t, e) {
        var i = this;
        if (
          (_isNumber$1(e) || (e = _parsePosition$1(this, e, t)),
          !(t instanceof Animation))
        ) {
          if (_isArray(t))
            return (
              t.forEach(function (t) {
                return i.add(t, e);
              }),
              this
            );
          if (_isString$1(t)) return this.addLabel(t, e);
          if (!_isFunction$1(t)) return this;
          t = Tween.delayedCall(0, t);
        }
        return this !== t ? _addToTimeline(this, t, e) : this;
      }),
      (i.getChildren = function (t, e, i, r) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === i && (i = !0),
          void 0 === r && (r = -_bigNum$1);
        for (var n = [], a = this._first; a; )
          a._start >= r &&
            (a instanceof Tween
              ? e && n.push(a)
              : (i && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, i)))),
            (a = a._next);
        return n;
      }),
      (i.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
          if (e[i].vars.id === t) return e[i];
      }),
      (i.remove = function (t) {
        return _isString$1(t)
          ? this.removeLabel(t)
          : _isFunction$1(t)
          ? this.killTweensOf(t)
          : (_removeLinkedListItem(this, t),
            t === this._recent && (this._recent = this._last),
            _uncache(this));
      }),
      (i.totalTime = function (e, i) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = _roundPrecise(
                _ticker.time -
                  (this._ts > 0
                    ? e / this._ts
                    : (this.totalDuration() - e) / -this._ts)
              )),
            t.prototype.totalTime.call(this, e, i),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (i.addLabel = function (t, e) {
        return (this.labels[t] = _parsePosition$1(this, e)), this;
      }),
      (i.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (i.addPause = function (t, e, i) {
        var r = Tween.delayedCall(0, e || _emptyFunc, i);
        return (
          (r.data = "isPause"),
          (this._hasPause = 1),
          _addToTimeline(this, r, _parsePosition$1(this, t))
        );
      }),
      (i.removePause = function (t) {
        var e = this._first;
        for (t = _parsePosition$1(this, t); e; )
          e._start === t && "isPause" === e.data && _removeFromParent(e),
            (e = e._next);
      }),
      (i.killTweensOf = function (t, e, i) {
        for (var r = this.getTweensOf(t, i), n = r.length; n--; )
          _overwritingTween !== r[n] && r[n].kill(t, e);
        return this;
      }),
      (i.getTweensOf = function (t, e) {
        for (
          var i, r = [], n = toArray(t), a = this._first, s = _isNumber$1(e);
          a;

        )
          a instanceof Tween
            ? _arrayContainsAny(a._targets, n) &&
              (s
                ? (!_overwritingTween || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              r.push(a)
            : (i = a.getTweensOf(n, e)).length && r.push.apply(r, i),
            (a = a._next);
        return r;
      }),
      (i.tweenTo = function (t, e) {
        e = e || {};
        var i,
          r = this,
          n = _parsePosition$1(r, t),
          a = e,
          s = a.startAt,
          o = a.onStart,
          _ = a.onStartParams,
          u = a.immediateRender,
          l = Tween.to(
            r,
            _setDefaults$1(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration:
                  e.duration ||
                  Math.abs(
                    (n - (s && "time" in s ? s.time : r._time)) / r.timeScale()
                  ) ||
                  _tinyNum,
                onStart: function () {
                  if ((r.pause(), !i)) {
                    var t =
                      e.duration ||
                      Math.abs(
                        (n - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale()
                      );
                    l._dur !== t &&
                      _setDuration(l, t, 0, 1).render(l._time, !0, !0),
                      (i = 1);
                  }
                  o && o.apply(l, _ || []);
                },
              },
              e
            )
          );
        return u ? l.render(0) : l;
      }),
      (i.tweenFromTo = function (t, e, i) {
        return this.tweenTo(
          e,
          _setDefaults$1({ startAt: { time: _parsePosition$1(this, t) } }, i)
        );
      }),
      (i.recent = function () {
        return this._recent;
      }),
      (i.nextLabel = function (t) {
        return (
          void 0 === t && (t = this._time),
          _getLabelInDirection(this, _parsePosition$1(this, t))
        );
      }),
      (i.previousLabel = function (t) {
        return (
          void 0 === t && (t = this._time),
          _getLabelInDirection(this, _parsePosition$1(this, t), 1)
        );
      }),
      (i.currentLabel = function (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + _tinyNum);
      }),
      (i.shiftChildren = function (t, e, i) {
        void 0 === i && (i = 0);
        for (var r, n = this._first, a = this.labels; n; )
          n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (r in a) a[r] >= i && (a[r] += t);
        return _uncache(this);
      }),
      (i.invalidate = function (e) {
        var i = this._first;
        for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
        return t.prototype.invalidate.call(this, e);
      }),
      (i.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, i = this._first; i; )
          (e = i._next), this.remove(i), (i = e);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          _uncache(this)
        );
      }),
      (i.totalDuration = function (t) {
        var e,
          i,
          r,
          n = 0,
          a = this,
          s = a._last,
          o = _bigNum$1;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (r = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              (i = s._start) > o && a._sort && s._ts && !a._lock
                ? ((a._lock = 1),
                  (_addToTimeline(a, s, i - s._delay, 1)._lock = 0))
                : (o = i),
              i < 0 &&
                s._ts &&
                ((n -= i),
                ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                  ((a._start += i / a._ts), (a._time -= i), (a._tTime -= i)),
                a.shiftChildren(-i, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          _setDuration(
            a,
            a === _globalTimeline && a._time > n ? a._time : n,
            1,
            1
          ),
            (a._dirty = 0);
        }
        return a._tDur;
      }),
      (e.updateRoot = function (t) {
        if (
          (_globalTimeline._ts &&
            (_lazySafeRender(
              _globalTimeline,
              _parentToChildTotalTime(t, _globalTimeline)
            ),
            (_lastRenderedFrame = _ticker.frame)),
          _ticker.frame >= _nextGCFrame)
        ) {
          _nextGCFrame += _config.autoSleep || 120;
          var e = _globalTimeline._first;
          if (
            (!e || !e._ts) &&
            _config.autoSleep &&
            _ticker._listeners.length < 2
          ) {
            for (; e && !e._ts; ) e = e._next;
            e || _ticker.sleep();
          }
        }
      }),
      e
    );
  })(Animation);
  _setDefaults$1(Timeline.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var _overwritingTween,
    _forceAllPropTweens,
    _addComplexStringPropTween = function (t, e, i, r, n, a, s) {
      var o,
        _,
        u,
        l,
        c,
        h,
        p,
        d,
        f = new PropTween(this._pt, t, e, 0, 1, _renderComplexString, null, n),
        m = 0,
        g = 0;
      for (
        f.b = i,
          f.e = r,
          i += "",
          (p = ~(r += "").indexOf("random(")) && (r = _replaceRandom(r)),
          a && (a((d = [i, r]), t, e), (i = d[0]), (r = d[1])),
          _ = i.match(_complexStringNumExp) || [];
        (o = _complexStringNumExp.exec(r));

      )
        (l = o[0]),
          (c = r.substring(m, o.index)),
          u ? (u = (u + 1) % 5) : "rgba(" === c.substr(-5) && (u = 1),
          l !== _[g++] &&
            ((h = parseFloat(_[g - 1]) || 0),
            (f._pt = {
              _next: f._pt,
              p: c || 1 === g ? c : ",",
              s: h,
              c:
                "=" === l.charAt(1)
                  ? _parseRelative(h, l) - h
                  : parseFloat(l) - h,
              m: u && u < 4 ? Math.round : 0,
            }),
            (m = _complexStringNumExp.lastIndex));
      return (
        (f.c = m < r.length ? r.substring(m, r.length) : ""),
        (f.fp = s),
        (_relExp.test(r) || p) && (f.e = 0),
        (this._pt = f),
        f
      );
    },
    _addPropTween = function (t, e, i, r, n, a, s, o, _, u) {
      _isFunction$1(r) && (r = r(n || 0, t, a));
      var l,
        c = t[e],
        h =
          "get" !== i
            ? i
            : _isFunction$1(c)
            ? _
              ? t[
                  e.indexOf("set") || !_isFunction$1(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](_)
              : t[e]()
            : c,
        p = _isFunction$1(c)
          ? _
            ? _setterFuncWithParam
            : _setterFunc
          : _setterPlain;
      if (
        (_isString$1(r) &&
          (~r.indexOf("random(") && (r = _replaceRandom(r)),
          "=" === r.charAt(1) &&
            ((l = _parseRelative(h, r) + (getUnit(h) || 0)) || 0 === l) &&
            (r = l)),
        !u || h !== r || _forceAllPropTweens)
      )
        return isNaN(h * r) || "" === r
          ? (!c && !(e in t) && _missingPlugin(e, r),
            _addComplexStringPropTween.call(
              this,
              t,
              e,
              h,
              r,
              p,
              o || _config.stringFilter,
              _
            ))
          : ((l = new PropTween(
              this._pt,
              t,
              e,
              +h || 0,
              r - (h || 0),
              "boolean" == typeof c ? _renderBoolean : _renderPlain,
              0,
              p
            )),
            _ && (l.fp = _),
            s && l.modifier(s, this, t),
            (this._pt = l));
    },
    _processVars = function (t, e, i, r, n) {
      if (
        (_isFunction$1(t) && (t = _parseFuncOrString(t, n, e, i, r)),
        !_isObject$1(t) ||
          (t.style && t.nodeType) ||
          _isArray(t) ||
          _isTypedArray(t))
      )
        return _isString$1(t) ? _parseFuncOrString(t, n, e, i, r) : t;
      var a,
        s = {};
      for (a in t) s[a] = _parseFuncOrString(t[a], n, e, i, r);
      return s;
    },
    _checkPlugin = function (t, e, i, r, n, a) {
      var s, o, _, u;
      if (
        _plugins[t] &&
        !1 !==
          (s = new _plugins[t]()).init(
            n,
            s.rawVars ? e[t] : _processVars(e[t], r, n, a, i),
            i,
            r,
            a
          ) &&
        ((i._pt = o =
          new PropTween(i._pt, n, t, 0, 1, s.render, s, 0, s.priority)),
        i !== _quickTween)
      )
        for (_ = i._ptLookup[i._targets.indexOf(n)], u = s._props.length; u--; )
          _[s._props[u]] = o;
      return s;
    },
    _initTween = function t(e, i, r) {
      var n,
        a,
        s,
        o,
        _,
        u,
        l,
        c,
        h,
        p,
        d,
        f,
        m,
        g = e.vars,
        v = g.ease,
        T = g.startAt,
        y = g.immediateRender,
        w = g.lazy,
        b = g.onUpdate,
        P = g.onUpdateParams,
        x = g.callbackScope,
        k = g.runBackwards,
        E = g.yoyoEase,
        A = g.keyframes,
        M = g.autoRevert,
        S = e._dur,
        C = e._startAt,
        F = e._targets,
        D = e.parent,
        N = D && "nested" === D.data ? D.vars.targets : F,
        R = "auto" === e._overwrite && !_suppressOverwrites$1,
        O = e.timeline;
      if (
        (O && (!A || !v) && (v = "none"),
        (e._ease = _parseEase(v, _defaults$1.ease)),
        (e._yEase = E
          ? _invertEase(_parseEase(!0 === E ? v : E, _defaults$1.ease))
          : 0),
        E &&
          e._yoyo &&
          !e._repeat &&
          ((E = e._yEase), (e._yEase = e._ease), (e._ease = E)),
        (e._from = !O && !!g.runBackwards),
        !O || (A && !g.stagger))
      ) {
        if (
          ((f = (c = F[0] ? _getCache(F[0]).harness : 0) && g[c.prop]),
          (n = _copyExcluding(g, _reservedProps)),
          C &&
            (C._zTime < 0 && C.progress(1),
            i < 0 && k && y && !M
              ? C.render(-1, !0)
              : C.revert(k && S ? _revertConfigNoKill : _startAtRevertConfig),
            (C._lazy = 0)),
          T)
        ) {
          if (
            (_removeFromParent(
              (e._startAt = Tween.set(
                F,
                _setDefaults$1(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: _isNotFalse(w),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: P,
                    callbackScope: x,
                    stagger: 0,
                  },
                  T
                )
              ))
            ),
            (e._startAt._dp = 0),
            i < 0 &&
              (_reverting$1 || (!y && !M)) &&
              e._startAt.revert(_revertConfigNoKill),
            y && S && i <= 0 && r <= 0)
          )
            return void (i && (e._zTime = i));
        } else if (k && S && !C)
          if (
            (i && (y = !1),
            (s = _setDefaults$1(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && _isNotFalse(w),
                immediateRender: y,
                stagger: 0,
                parent: D,
              },
              n
            )),
            f && (s[c.prop] = f),
            _removeFromParent((e._startAt = Tween.set(F, s))),
            (e._startAt._dp = 0),
            i < 0 &&
              (_reverting$1
                ? e._startAt.revert(_revertConfigNoKill)
                : e._startAt.render(-1, !0)),
            (e._zTime = i),
            y)
          ) {
            if (!i) return;
          } else t(e._startAt, _tinyNum, _tinyNum);
        for (
          e._pt = e._ptCache = 0, w = (S && _isNotFalse(w)) || (w && !S), a = 0;
          a < F.length;
          a++
        ) {
          if (
            ((l = (_ = F[a])._gsap || _harness(F)[a]._gsap),
            (e._ptLookup[a] = p = {}),
            _lazyLookup[l.id] && _lazyTweens.length && _lazyRender(),
            (d = N === F ? a : N.indexOf(_)),
            c &&
              !1 !== (h = new c()).init(_, f || n, e, d, N) &&
              ((e._pt = o =
                new PropTween(
                  e._pt,
                  _,
                  h.name,
                  0,
                  1,
                  h.render,
                  h,
                  0,
                  h.priority
                )),
              h._props.forEach(function (t) {
                p[t] = o;
              }),
              h.priority && (u = 1)),
            !c || f)
          )
            for (s in n)
              _plugins[s] && (h = _checkPlugin(s, n, e, d, _, N))
                ? h.priority && (u = 1)
                : (p[s] = o =
                    _addPropTween.call(
                      e,
                      _,
                      s,
                      "get",
                      n[s],
                      d,
                      N,
                      0,
                      g.stringFilter
                    ));
          e._op && e._op[a] && e.kill(_, e._op[a]),
            R &&
              e._pt &&
              ((_overwritingTween = e),
              _globalTimeline.killTweensOf(_, p, e.globalTime(i)),
              (m = !e.parent),
              (_overwritingTween = 0)),
            e._pt && w && (_lazyLookup[l.id] = 1);
        }
        u && _sortPropTweensByPriority(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = b),
        (e._initted = (!e._op || e._pt) && !m),
        A && i <= 0 && O.render(_bigNum$1, !0, !0);
    },
    _updatePropTweens = function (t, e, i, r, n, a, s) {
      var o,
        _,
        u,
        l,
        c = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
      if (!c)
        for (
          c = t._ptCache[e] = [], u = t._ptLookup, l = t._targets.length;
          l--;

        ) {
          if ((o = u[l][e]) && o.d && o.d._pt)
            for (o = o.d._pt; o && o.p !== e && o.fp !== e; ) o = o._next;
          if (!o)
            return (
              (_forceAllPropTweens = 1),
              (t.vars[e] = "+=0"),
              _initTween(t, s),
              (_forceAllPropTweens = 0),
              1
            );
          c.push(o);
        }
      for (l = c.length; l--; )
        ((o = (_ = c[l])._pt || _).s =
          (!r && 0 !== r) || n ? o.s + (r || 0) + a * o.c : r),
          (o.c = i - o.s),
          _.e && (_.e = _round$1(i) + getUnit(_.e)),
          _.b && (_.b = o.s + getUnit(_.b));
    },
    _addAliasesToVars = function (t, e) {
      var i,
        r,
        n,
        a,
        s = t[0] ? _getCache(t[0]).harness : 0,
        o = s && s.aliases;
      if (!o) return e;
      for (r in ((i = _merge({}, e)), o))
        if (r in i)
          for (n = (a = o[r].split(",")).length; n--; ) i[a[n]] = i[r];
      return i;
    },
    _parseKeyframe = function (t, e, i, r) {
      var n,
        a,
        s = e.ease || r || "power1.inOut";
      if (_isArray(e))
        (a = i[t] || (i[t] = [])),
          e.forEach(function (t, i) {
            return a.push({ t: (i / (e.length - 1)) * 100, v: t, e: s });
          });
      else
        for (n in e)
          (a = i[n] || (i[n] = [])),
            "ease" === n || a.push({ t: parseFloat(t), v: e[n], e: s });
    },
    _parseFuncOrString = function (t, e, i, r, n) {
      return _isFunction$1(t)
        ? t.call(e, i, r, n)
        : _isString$1(t) && ~t.indexOf("random(")
        ? _replaceRandom(t)
        : t;
    },
    _staggerTweenProps =
      _callbackNames +
      "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};
  _forEachName(
    _staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger",
    function (t) {
      return (_staggerPropsToSkip[t] = 1);
    }
  );
  var Tween = (function (t) {
    function e(e, i, r, n) {
      var a;
      "number" == typeof i && ((r.duration = i), (i = r), (r = null));
      var s,
        o,
        _,
        u,
        l,
        c,
        h,
        p,
        d = (a = t.call(this, n ? i : _inheritDefaults(i)) || this).vars,
        f = d.duration,
        m = d.delay,
        g = d.immediateRender,
        v = d.stagger,
        T = d.overwrite,
        y = d.keyframes,
        w = d.defaults,
        b = d.scrollTrigger,
        P = d.yoyoEase,
        x = i.parent || _globalTimeline,
        k = (
          _isArray(e) || _isTypedArray(e) ? _isNumber$1(e[0]) : "length" in i
        )
          ? [e]
          : toArray(e);
      if (
        ((a._targets = k.length
          ? _harness(k)
          : _warn(
              "GSAP target " + e + " not found. https://greensock.com",
              !_config.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = T),
        y || v || _isFuncOrString(f) || _isFuncOrString(m))
      ) {
        if (
          ((i = a.vars),
          (s = a.timeline =
            new Timeline({
              data: "nested",
              defaults: w || {},
              targets: x && "nested" === x.data ? x.vars.targets : k,
            })).kill(),
          (s.parent = s._dp = _assertThisInitialized(a)),
          (s._start = 0),
          v || _isFuncOrString(f) || _isFuncOrString(m))
        ) {
          if (((u = k.length), (h = v && distribute(v)), _isObject$1(v)))
            for (l in v)
              ~_staggerTweenProps.indexOf(l) && (p || (p = {}), (p[l] = v[l]));
          for (o = 0; o < u; o++)
            ((_ = _copyExcluding(i, _staggerPropsToSkip)).stagger = 0),
              P && (_.yoyoEase = P),
              p && _merge(_, p),
              (c = k[o]),
              (_.duration = +_parseFuncOrString(
                f,
                _assertThisInitialized(a),
                o,
                c,
                k
              )),
              (_.delay =
                (+_parseFuncOrString(m, _assertThisInitialized(a), o, c, k) ||
                  0) - a._delay),
              !v &&
                1 === u &&
                _.delay &&
                ((a._delay = m = _.delay), (a._start += m), (_.delay = 0)),
              s.to(c, _, h ? h(o, c, k) : 0),
              (s._ease = _easeMap.none);
          s.duration() ? (f = m = 0) : (a.timeline = 0);
        } else if (y) {
          _inheritDefaults(_setDefaults$1(s.vars.defaults, { ease: "none" })),
            (s._ease = _parseEase(y.ease || i.ease || "none"));
          var E,
            A,
            M,
            S = 0;
          if (_isArray(y))
            y.forEach(function (t) {
              return s.to(k, t, ">");
            }),
              s.duration();
          else {
            for (l in ((_ = {}), y))
              "ease" === l ||
                "easeEach" === l ||
                _parseKeyframe(l, y[l], _, y.easeEach);
            for (l in _)
              for (
                E = _[l].sort(function (t, e) {
                  return t.t - e.t;
                }),
                  S = 0,
                  o = 0;
                o < E.length;
                o++
              )
                ((M = {
                  ease: (A = E[o]).e,
                  duration: ((A.t - (o ? E[o - 1].t : 0)) / 100) * f,
                })[l] = A.v),
                  s.to(k, M, S),
                  (S += M.duration);
            s.duration() < f && s.to({}, { duration: f - s.duration() });
          }
        }
        f || a.duration((f = s.duration()));
      } else a.timeline = 0;
      return (
        !0 !== T ||
          _suppressOverwrites$1 ||
          ((_overwritingTween = _assertThisInitialized(a)),
          _globalTimeline.killTweensOf(k),
          (_overwritingTween = 0)),
        _addToTimeline(x, _assertThisInitialized(a), r),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (g ||
          (!f &&
            !y &&
            a._start === _roundPrecise(x._time) &&
            _isNotFalse(g) &&
            _hasNoPausedAncestors(_assertThisInitialized(a)) &&
            "nested" !== x.data)) &&
          ((a._tTime = -_tinyNum), a.render(Math.max(0, -m) || 0)),
        b && _scrollTrigger(_assertThisInitialized(a), b),
        a
      );
    }
    _inheritsLoose(e, t);
    var i = e.prototype;
    return (
      (i.render = function (t, e, i) {
        var r,
          n,
          a,
          s,
          o,
          _,
          u,
          l,
          c,
          h = this._time,
          p = this._tDur,
          d = this._dur,
          f = t < 0,
          m = t > p - _tinyNum && !f ? p : t < _tinyNum ? 0 : t;
        if (d) {
          if (
            m !== this._tTime ||
            !t ||
            i ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 !== f)
          ) {
            if (((r = m), (l = this.timeline), this._repeat)) {
              if (((s = d + this._rDelay), this._repeat < -1 && f))
                return this.totalTime(100 * s + t, e, i);
              if (
                ((r = _roundPrecise(m % s)),
                m === p
                  ? ((a = this._repeat), (r = d))
                  : ((a = ~~(m / s)) && a === m / s && ((r = d), a--),
                    r > d && (r = d)),
                (_ = this._yoyo && 1 & a) && ((c = this._yEase), (r = d - r)),
                (o = _animationCycle(this._tTime, s)),
                r === h && !i && this._initted)
              )
                return (this._tTime = m), this;
              a !== o &&
                (l && this._yEase && _propagateYoyoEase(l, _),
                !this.vars.repeatRefresh ||
                  _ ||
                  this._lock ||
                  ((this._lock = i = 1),
                  (this.render(
                    _roundPrecise(s * a),
                    !0
                  ).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (_attemptInitTween(this, f ? t : r, i, e, m))
                return (this._tTime = 0), this;
              if (h !== this._time) return this;
              if (d !== this._dur) return this.render(t, e, i);
            }
            if (
              ((this._tTime = m),
              (this._time = r),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = u = (c || this._ease)(r / d)),
              this._from && (this.ratio = u = 1 - u),
              r &&
                !h &&
                !e &&
                (_callback$1(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (n = this._pt; n; ) n.r(u, n.d), (n = n._next);
            (l &&
              l.render(
                t < 0
                  ? t
                  : !r && _
                  ? -_tinyNum
                  : l._dur * l._ease(r / this._dur),
                e,
                i
              )) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (f && _rewindStartAt(this, t, e, i),
                _callback$1(this, "onUpdate")),
              this._repeat &&
                a !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                _callback$1(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (f && !this._onUpdate && _rewindStartAt(this, t, !0, !0),
                (t || !d) &&
                  ((m === this._tDur && this._ts > 0) ||
                    (!m && this._ts < 0)) &&
                  _removeFromParent(this, 1),
                e ||
                  (f && !h) ||
                  !(m || h || _) ||
                  (_callback$1(
                    this,
                    m === p ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(m < p && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else _renderZeroDurationTween(this, t, e, i);
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function (e) {
        return (
          (!e || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(e),
          t.prototype.invalidate.call(this, e)
        );
      }),
      (i.resetTo = function (t, e, i, r) {
        _tickerActive || _ticker.wake(), this._ts || this.play();
        var n,
          a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return (
          this._initted || _initTween(this, a),
          (n = this._ease(a / this._dur)),
          _updatePropTweens(this, t, e, i, r, n, a)
            ? this.resetTo(t, e, i, r)
            : (_alignPlayhead(this, 0),
              this.parent ||
                _addLinkedListItem(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (i.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (
            (this._lazy = this._pt = 0), this.parent ? _interrupt(this) : this
          );
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(
              t,
              e,
              _overwritingTween && !0 !== _overwritingTween.vars.overwrite
            )._first || _interrupt(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              _setDuration(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var r,
          n,
          a,
          s,
          o,
          _,
          u,
          l = this._targets,
          c = t ? toArray(t) : l,
          h = this._ptLookup,
          p = this._pt;
        if ((!e || "all" === e) && _arraysMatch(l, c))
          return "all" === e && (this._pt = 0), _interrupt(this);
        for (
          r = this._op = this._op || [],
            "all" !== e &&
              (_isString$1(e) &&
                ((o = {}),
                _forEachName(e, function (t) {
                  return (o[t] = 1);
                }),
                (e = o)),
              (e = _addAliasesToVars(l, e))),
            u = l.length;
          u--;

        )
          if (~c.indexOf(l[u]))
            for (o in ((n = h[u]),
            "all" === e
              ? ((r[u] = e), (s = n), (a = {}))
              : ((a = r[u] = r[u] || {}), (s = e)),
            s))
              (_ = n && n[o]) &&
                (("kill" in _.d && !0 !== _.d.kill(o)) ||
                  _removeLinkedListItem(this, _, "_pt"),
                delete n[o]),
                "all" !== a && (a[o] = 1);
        return this._initted && !this._pt && p && _interrupt(this), this;
      }),
      (e.to = function (t, i) {
        return new e(t, i, arguments[2]);
      }),
      (e.from = function (t, e) {
        return _createTweenType(1, arguments);
      }),
      (e.delayedCall = function (t, i, r, n) {
        return new e(i, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: i,
          onReverseComplete: i,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: n,
        });
      }),
      (e.fromTo = function (t, e, i) {
        return _createTweenType(2, arguments);
      }),
      (e.set = function (t, i) {
        return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
      }),
      (e.killTweensOf = function (t, e, i) {
        return _globalTimeline.killTweensOf(t, e, i);
      }),
      e
    );
  })(Animation);
  _setDefaults$1(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0,
  }),
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function (t) {
      Tween[t] = function () {
        var e = new Timeline(),
          i = _slice.call(arguments, 0);
        return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
      };
    });
  var _setterPlain = function (t, e, i) {
      return (t[e] = i);
    },
    _setterFunc = function (t, e, i) {
      return t[e](i);
    },
    _setterFuncWithParam = function (t, e, i, r) {
      return t[e](r.fp, i);
    },
    _setterAttribute = function (t, e, i) {
      return t.setAttribute(e, i);
    },
    _getSetter = function (t, e) {
      return _isFunction$1(t[e])
        ? _setterFunc
        : _isUndefined(t[e]) && t.setAttribute
        ? _setterAttribute
        : _setterPlain;
    },
    _renderPlain = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    _renderBoolean = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    _renderComplexString = function (t, e) {
      var i = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * t)
              : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
            r),
            (i = i._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    _renderPropTweens = function (t, e) {
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    },
    _addPluginModifier = function (t, e, i, r) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === r && a.modifier(t, e, i), (a = n);
    },
    _killPropTweensOf = function (t) {
      for (var e, i, r = this._pt; r; )
        (i = r._next),
          (r.p === t && !r.op) || r.op === t
            ? _removeLinkedListItem(this, r, "_pt")
            : r.dep || (e = 1),
          (r = i);
      return !e;
    },
    _setterWithModifier = function (t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    },
    _sortPropTweensByPriority = function (t) {
      for (var e, i, r, n, a = t._pt; a; ) {
        for (e = a._next, i = r; i && i.pr > a.pr; ) i = i._next;
        (a._prev = i ? i._prev : n) ? (a._prev._next = a) : (r = a),
          (a._next = i) ? (i._prev = a) : (n = a),
          (a = e);
      }
      t._pt = r;
    };
  var PropTween = (function () {
    function t(t, e, i, r, n, a, s, o, _) {
      (this.t = e),
        (this.s = r),
        (this.c = n),
        (this.p = i),
        (this.r = a || _renderPlain),
        (this.d = s || this),
        (this.set = o || _setterPlain),
        (this.pr = _ || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, i) {
        (this.mSet = this.mSet || this.set),
          (this.set = _setterWithModifier),
          (this.m = t),
          (this.mt = i),
          (this.tween = e);
      }),
      t
    );
  })();
  _forEachName(
    _callbackNames +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (_reservedProps[t] = 1);
    }
  ),
    (_globals.TweenMax = _globals.TweenLite = Tween),
    (_globals.TimelineLite = _globals.TimelineMax = Timeline),
    (_globalTimeline = new Timeline({
      sortChildren: !1,
      defaults: _defaults$1,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (_config.stringFilter = _colorStringFilter);
  var _media = [],
    _listeners$1 = {},
    _emptyArray$1 = [],
    _lastMediaTime = 0,
    _dispatch$1 = function (t) {
      return (_listeners$1[t] || _emptyArray$1).map(function (t) {
        return t();
      });
    },
    _onMediaChange = function () {
      var t = Date.now(),
        e = [];
      t - _lastMediaTime > 2 &&
        (_dispatch$1("matchMediaInit"),
        _media.forEach(function (t) {
          var i,
            r,
            n,
            a,
            s = t.queries,
            o = t.conditions;
          for (r in s)
            (i = _win$3.matchMedia(s[r]).matches) && (n = 1),
              i !== o[r] && ((o[r] = i), (a = 1));
          a && (t.revert(), n && e.push(t));
        }),
        _dispatch$1("matchMediaRevert"),
        e.forEach(function (t) {
          return t.onMatch(t);
        }),
        (_lastMediaTime = t),
        _dispatch$1("matchMedia"));
    },
    Context = (function () {
      function t(t, e) {
        (this.selector = e && selector(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          t && this.add(t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, i) {
          _isFunction$1(t) && ((i = e), (e = t), (t = _isFunction$1));
          var r = this,
            n = function () {
              var t,
                n = _context$1,
                a = r.selector;
              return (
                n && n !== r && n.data.push(r),
                i && (r.selector = selector(i)),
                (_context$1 = r),
                (t = e.apply(r, arguments)),
                _isFunction$1(t) && r._r.push(t),
                (_context$1 = n),
                (r.selector = a),
                (r.isReverted = !1),
                t
              );
            };
          return (r.last = n), t === _isFunction$1 ? n(r) : t ? (r[t] = n) : n;
        }),
        (e.ignore = function (t) {
          var e = _context$1;
          (_context$1 = null), t(this), (_context$1 = e);
        }),
        (e.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof t
                ? e.push.apply(e, i.getTweens())
                : i instanceof Tween &&
                    !(i.parent && "nested" === i.parent.data) &&
                    e.push(i);
            }),
            e
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (t, e) {
          var i = this;
          if (t) {
            var r = this.getTweens();
            this.data.forEach(function (t) {
              "isFlip" === t.data &&
                (t.revert(),
                t.getChildren(!0, !0, !1).forEach(function (t) {
                  return r.splice(r.indexOf(t), 1);
                }));
            }),
              r
                .map(function (t) {
                  return { g: t.globalTime(0), t: t };
                })
                .sort(function (t, e) {
                  return e.g - t.g || -1;
                })
                .forEach(function (e) {
                  return e.t.revert(t);
                }),
              this.data.forEach(function (e) {
                return !(e instanceof Animation) && e.revert && e.revert(t);
              }),
              this._r.forEach(function (e) {
                return e(t, i);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (t) {
              return t.kill && t.kill();
            });
          if ((this.clear(), e)) {
            var n = _media.indexOf(this);
            ~n && _media.splice(n, 1);
          }
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        t
      );
    })(),
    MatchMedia = (function () {
      function t(t) {
        (this.contexts = []), (this.scope = t);
      }
      var e = t.prototype;
      return (
        (e.add = function (t, e, i) {
          _isObject$1(t) || (t = { matches: t });
          var r,
            n,
            a,
            s = new Context(0, i || this.scope),
            o = (s.conditions = {});
          for (n in (this.contexts.push(s),
          (e = s.add("onMatch", e)),
          (s.queries = t),
          t))
            "all" === n
              ? (a = 1)
              : (r = _win$3.matchMedia(t[n])) &&
                (_media.indexOf(s) < 0 && _media.push(s),
                (o[n] = r.matches) && (a = 1),
                r.addListener
                  ? r.addListener(_onMediaChange)
                  : r.addEventListener("change", _onMediaChange));
          return a && e(s), this;
        }),
        (e.revert = function (t) {
          this.kill(t || {});
        }),
        (e.kill = function (t) {
          this.contexts.forEach(function (e) {
            return e.kill(t, !0);
          });
        }),
        t
      );
    })(),
    _gsap = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (t) {
          return _createPlugin(t);
        });
      },
      timeline: function (t) {
        return new Timeline(t);
      },
      getTweensOf: function (t, e) {
        return _globalTimeline.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, r) {
        _isString$1(t) && (t = toArray(t)[0]);
        var n = _getCache(t || {}).get,
          a = i ? _passThrough$1 : _numericIfPossible;
        return (
          "native" === i && (i = ""),
          t
            ? e
              ? a(((_plugins[e] && _plugins[e].get) || n)(t, e, i, r))
              : function (e, i, r) {
                  return a(((_plugins[e] && _plugins[e].get) || n)(t, e, i, r));
                }
            : t
        );
      },
      quickSetter: function (t, e, i) {
        if ((t = toArray(t)).length > 1) {
          var r = t.map(function (t) {
              return gsap$2.quickSetter(t, e, i);
            }),
            n = r.length;
          return function (t) {
            for (var e = n; e--; ) r[e](t);
          };
        }
        t = t[0] || {};
        var a = _plugins[e],
          s = _getCache(t),
          o = (s.harness && (s.harness.aliases || {})[e]) || e,
          _ = a
            ? function (e) {
                var r = new a();
                (_quickTween._pt = 0),
                  r.init(t, i ? e + i : e, _quickTween, 0, [t]),
                  r.render(1, r),
                  _quickTween._pt && _renderPropTweens(1, _quickTween);
              }
            : s.set(t, o);
        return a
          ? _
          : function (e) {
              return _(t, o, i ? e + i : e, s, 1);
            };
      },
      quickTo: function (t, e, i) {
        var r,
          n = gsap$2.to(
            t,
            _merge((((r = {})[e] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          a = function (t, i, r) {
            return n.resetTo(e, t, i, r);
          };
        return (a.tween = n), a;
      },
      isTweening: function (t) {
        return _globalTimeline.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return (
          t && t.ease && (t.ease = _parseEase(t.ease, _defaults$1.ease)),
          _mergeDeep(_defaults$1, t || {})
        );
      },
      config: function (t) {
        return _mergeDeep(_config, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          r = t.plugins,
          n = t.defaults,
          a = t.extendTimeline;
        (r || "").split(",").forEach(function (t) {
          return (
            t &&
            !_plugins[t] &&
            !_globals[t] &&
            _warn(e + " effect requires " + t + " plugin.")
          );
        }),
          (_effects[e] = function (t, e, r) {
            return i(toArray(t), _setDefaults$1(e || {}, n), r);
          }),
          a &&
            (Timeline.prototype[e] = function (t, i, r) {
              return this.add(
                _effects[e](t, _isObject$1(i) ? i : (r = i) && {}, this),
                r
              );
            });
      },
      registerEase: function (t, e) {
        _easeMap[t] = _parseEase(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? _parseEase(t, e) : _easeMap;
      },
      getById: function (t) {
        return _globalTimeline.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var i,
          r,
          n = new Timeline(t);
        for (
          n.smoothChildTiming = _isNotFalse(t.smoothChildTiming),
            _globalTimeline.remove(n),
            n._dp = 0,
            n._time = n._tTime = _globalTimeline._time,
            i = _globalTimeline._first;
          i;

        )
          (r = i._next),
            (!e &&
              !i._dur &&
              i instanceof Tween &&
              i.vars.onComplete === i._targets[0]) ||
              _addToTimeline(n, i, i._start - i._delay),
            (i = r);
        return _addToTimeline(_globalTimeline, n, 0), n;
      },
      context: function (t, e) {
        return t ? new Context(t, e) : _context$1;
      },
      matchMedia: function (t) {
        return new MatchMedia(t);
      },
      matchMediaRefresh: function () {
        return (
          _media.forEach(function (t) {
            var e,
              i,
              r = t.conditions;
            for (i in r) r[i] && ((r[i] = !1), (e = 1));
            e && t.revert();
          }) || _onMediaChange()
        );
      },
      addEventListener: function (t, e) {
        var i = _listeners$1[t] || (_listeners$1[t] = []);
        ~i.indexOf(e) || i.push(e);
      },
      removeEventListener: function (t, e) {
        var i = _listeners$1[t],
          r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle,
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        reverting: function () {
          return _reverting$1;
        },
        context: function (t) {
          return (
            t && _context$1 && (_context$1.data.push(t), (t._ctx = _context$1)),
            _context$1
          );
        },
        suppressOverwrites: function (t) {
          return (_suppressOverwrites$1 = t);
        },
      },
    };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (_gsap[t] = Tween[t]);
  }),
    _ticker.add(Timeline.updateRoot),
    (_quickTween = _gsap.to({}, { duration: 0 }));
  var _getPluginPropTween = function (t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    },
    _addModifiers = function (t, e) {
      var i,
        r,
        n,
        a = t._targets;
      for (i in e)
        for (r = a.length; r--; )
          (n = t._ptLookup[r][i]) &&
            (n = n.d) &&
            (n._pt && (n = _getPluginPropTween(n, i)),
            n && n.modifier && n.modifier(e[i], t, a[r], i));
    },
    _buildModifierPlugin = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, i, r) {
          r._onInit = function (t) {
            var r, n;
            if (
              (_isString$1(i) &&
                ((r = {}),
                _forEachName(i, function (t) {
                  return (r[t] = 1);
                }),
                (i = r)),
              e)
            ) {
              for (n in ((r = {}), i)) r[n] = e(i[n]);
              i = r;
            }
            _addModifiers(t, i);
          };
        },
      };
    };
  var gsap$2 =
    _gsap.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var a, s, o;
          for (a in ((this.tween = i), e))
            (o = t.getAttribute(a) || ""),
              ((s = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[a],
                r,
                n,
                0,
                0,
                a
              )).op = a),
              (s.b = o),
              this._props.push(a);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            _reverting$1 ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      _buildModifierPlugin("roundProps", _roundModifier),
      _buildModifierPlugin("modifiers"),
      _buildModifierPlugin("snap", snap)
    ) || _gsap;
  (Tween.version = Timeline.version = gsap$2.version = "3.11.3"),
    (_coreReady = 1),
    _windowExists$2() && _wake();
  _easeMap.Power0;
  _easeMap.Power1;
  _easeMap.Power2;
  _easeMap.Power3;
  _easeMap.Power4;
  _easeMap.Linear;
  _easeMap.Quad;
  _easeMap.Cubic;
  _easeMap.Quart;
  _easeMap.Quint;
  _easeMap.Strong;
  _easeMap.Elastic;
  _easeMap.Back;
  _easeMap.SteppedEase;
  _easeMap.Bounce;
  _easeMap.Sine;
  _easeMap.Expo;
  _easeMap.Circ;

  /*!
   * CSSPlugin 3.11.3
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var _win$2,
    _doc$2,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _recentSetterPlugin,
    _reverting,
    _supports3D,
    _windowExists$1 = function () {
      return "undefined" != typeof window;
    },
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp$1 = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    _renderCSSProp = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    _renderPropWithEnd = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e
      );
    },
    _renderCSSPropWithBeginning = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e
      );
    },
    _renderRoundedCSSProp = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    _renderNonTweeningValue = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    _renderNonTweeningValueOnlyAtEnd = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    _setterCSSStyle = function (t, e, r) {
      return (t.style[e] = r);
    },
    _setterCSSProp = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    _setterTransform = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    _setterScale = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    _setterScaleWithRender = function (t, e, r, n, o) {
      var i = t._gsap;
      (i.scaleX = i.scaleY = r), i.renderTransform(o, i);
    },
    _setterTransformWithRender = function (t, e, r, n, o) {
      var i = t._gsap;
      (i[e] = r), i.renderTransform(o, i);
    },
    _transformProp$1 = "transform",
    _transformOriginProp = _transformProp$1 + "Origin",
    _saveStyle = function (t, e) {
      var r = this,
        n = this.target,
        o = n.style;
      if (t in _transformProps) {
        if (
          ((this.tfm = this.tfm || {}),
          "transform" !== t &&
            (~(t = _propertyAliases[t] || t).indexOf(",")
              ? t.split(",").forEach(function (t) {
                  return (r.tfm[t] = _get(n, t));
                })
              : (this.tfm[t] = n._gsap.x ? n._gsap[t] : _get(n, t))),
          this.props.indexOf(_transformProp$1) >= 0)
        )
          return;
        n._gsap.svg &&
          ((this.svgo = n.getAttribute("data-svg-origin")),
          this.props.push(_transformOriginProp, e, "")),
          (t = _transformProp$1);
      }
      (o || e) && this.props.push(t, e, o[t]);
    },
    _removeIndependentTransforms = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    _revertStyle = function () {
      var t,
        e,
        r = this.props,
        n = this.target,
        o = n.style,
        i = n._gsap;
      for (t = 0; t < r.length; t += 3)
        r[t + 1]
          ? (n[r[t]] = r[t + 2])
          : r[t + 2]
          ? (o[r[t]] = r[t + 2])
          : o.removeProperty(r[t].replace(_capsExp$1, "-$1").toLowerCase());
      if (this.tfm) {
        for (e in this.tfm) i[e] = this.tfm[e];
        i.svg &&
          (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          !(t = _reverting()) ||
            t.isStart ||
            o[_transformProp$1] ||
            (_removeIndependentTransforms(o), (i.uncache = 1));
      }
    },
    _getStyleSaver = function (t, e) {
      var r = { target: t, props: [], revert: _revertStyle, save: _saveStyle };
      return (
        e &&
          e.split(",").forEach(function (t) {
            return r.save(t);
          }),
        r
      );
    },
    _createElement = function (t, e) {
      var r = _doc$2.createElementNS
        ? _doc$2.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : _doc$2.createElement(t);
      return r.style ? r : _doc$2.createElement(t);
    },
    _getComputedProperty = function t(e, r, n) {
      var o = getComputedStyle(e);
      return (
        o[r] ||
        o.getPropertyValue(r.replace(_capsExp$1, "-$1").toLowerCase()) ||
        o.getPropertyValue(r) ||
        (!n && t(e, _checkPropPrefix(r) || r, 1)) ||
        ""
      );
    },
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function (t, e, r) {
      var n = (e || _tempDiv).style,
        o = 5;
      if (t in n && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        o-- && !(_prefixes[o] + t in n);

      );
      return o < 0 ? null : (3 === o ? "ms" : o >= 0 ? _prefixes[o] : "") + t;
    },
    _initCore$1 = function () {
      _windowExists$1() &&
        window.document &&
        ((_win$2 = window),
        (_doc$2 = _win$2.document),
        (_docElement = _doc$2.documentElement),
        (_tempDiv = _createElement("div") || { style: {} }),
        _createElement("div"),
        (_transformProp$1 = _checkPropPrefix(_transformProp$1)),
        (_transformOriginProp = _transformProp$1 + "Origin"),
        (_tempDiv.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (_supports3D = !!_checkPropPrefix("perspective")),
        (_reverting = gsap$2.core.reverting),
        (_pluginInitted = 1));
    },
    _getBBoxHack = function t(e) {
      var r,
        n = _createElement(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        o = this.parentNode,
        i = this.nextSibling,
        s = this.style.cssText;
      if (
        (_docElement.appendChild(n),
        n.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (r = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (r = this._gsapBBox());
      return (
        o && (i ? o.insertBefore(this, i) : o.appendChild(this)),
        _docElement.removeChild(n),
        (this.style.cssText = s),
        r
      );
    },
    _getAttributeFallbacks = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    _getBBox = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = _getBBoxHack.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === _getBBoxHack ||
          (e = _getBBoxHack.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +_getAttributeFallbacks(t, ["x", "cx", "x1"]) || 0,
              y: +_getAttributeFallbacks(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    _isSVG = function (t) {
      return !(
        !t.getCTM ||
        (t.parentNode && !t.ownerSVGElement) ||
        !_getBBox(t)
      );
    },
    _removeProperty = function (t, e) {
      if (e) {
        var r = t.style;
        e in _transformProps &&
          e !== _transformOriginProp &&
          (e = _transformProp$1),
          r.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              r.removeProperty(e.replace(_capsExp$1, "-$1").toLowerCase()))
            : r.removeAttribute(e);
      }
    },
    _addNonTweeningPT = function (t, e, r, n, o, i) {
      var s = new PropTween(
        t._pt,
        e,
        r,
        0,
        1,
        i ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue
      );
      return (t._pt = s), (s.b = n), (s.e = o), t._props.push(r), s;
    },
    _nonConvertibleUnits = { deg: 1, rad: 1, turn: 1 },
    _nonStandardLayouts = { grid: 1, flex: 1 },
    _convertToUnit = function t(e, r, n, o) {
      var i,
        s,
        a,
        _,
        p = parseFloat(n) || 0,
        l = (n + "").trim().substr((p + "").length) || "px",
        f = _tempDiv.style,
        g = _horizontalExp.test(r),
        c = "svg" === e.tagName.toLowerCase(),
        d = (c ? "client" : "offset") + (g ? "Width" : "Height"),
        u = 100,
        h = "px" === o,
        m = "%" === o;
      return o === l || !p || _nonConvertibleUnits[o] || _nonConvertibleUnits[l]
        ? p
        : ("px" !== l && !h && (p = t(e, r, n, "px")),
          (_ = e.getCTM && _isSVG(e)),
          (!m && "%" !== l) || (!_transformProps[r] && !~r.indexOf("adius"))
            ? ((f[g ? "width" : "height"] = u + (h ? l : o)),
              (s =
                ~r.indexOf("adius") || ("em" === o && e.appendChild && !c)
                  ? e
                  : e.parentNode),
              _ && (s = (e.ownerSVGElement || {}).parentNode),
              (s && s !== _doc$2 && s.appendChild) || (s = _doc$2.body),
              (a = s._gsap) &&
              m &&
              a.width &&
              g &&
              a.time === _ticker.time &&
              !a.uncache
                ? _round$1((p / a.width) * u)
                : ((m || "%" === l) &&
                    !_nonStandardLayouts[_getComputedProperty(s, "display")] &&
                    (f.position = _getComputedProperty(e, "position")),
                  s === e && (f.position = "static"),
                  s.appendChild(_tempDiv),
                  (i = _tempDiv[d]),
                  s.removeChild(_tempDiv),
                  (f.position = "absolute"),
                  g &&
                    m &&
                    (((a = _getCache(s)).time = _ticker.time),
                    (a.width = s[d])),
                  _round$1(h ? (i * p) / u : i && p ? (u / i) * p : 0)))
            : ((i = _ ? e.getBBox()[g ? "width" : "height"] : e[d]),
              _round$1(m ? (p / i) * u : (p / 100) * i)));
    },
    _get = function (t, e, r, n) {
      var o;
      return (
        _pluginInitted || _initCore$1(),
        e in _propertyAliases &&
          "transform" !== e &&
          ~(e = _propertyAliases[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        _transformProps[e] && "transform" !== e
          ? ((o = _parseTransform(t, n)),
            (o =
              "transformOrigin" !== e
                ? o[e]
                : o.svg
                ? o.origin
                : _firstTwoOnly(_getComputedProperty(t, _transformOriginProp)) +
                  " " +
                  o.zOrigin +
                  "px"))
          : (!(o = t.style[e]) ||
              "auto" === o ||
              n ||
              ~(o + "").indexOf("calc(")) &&
            (o =
              (_specialProps[e] && _specialProps[e](t, e, r)) ||
              _getComputedProperty(t, e) ||
              _getProperty(t, e) ||
              ("opacity" === e ? 1 : 0)),
        r && !~(o + "").trim().indexOf(" ") ? _convertToUnit(t, e, o, r) + r : o
      );
    },
    _tweenComplexCSSString = function (t, e, r, n) {
      if (!r || "none" === r) {
        var o = _checkPropPrefix(e, t, 1),
          i = o && _getComputedProperty(t, o, 1);
        i && i !== r
          ? ((e = o), (r = i))
          : "borderColor" === e &&
            (r = _getComputedProperty(t, "borderTopColor"));
      }
      var s,
        a,
        _,
        p,
        l,
        f,
        g,
        c,
        d,
        u,
        h,
        m = new PropTween(this._pt, t.style, e, 0, 1, _renderComplexString),
        P = 0,
        x = 0;
      if (
        ((m.b = r),
        (m.e = n),
        (r += ""),
        "auto" === (n += "") &&
          ((t.style[e] = n),
          (n = _getComputedProperty(t, e) || n),
          (t.style[e] = r)),
        _colorStringFilter((s = [r, n])),
        (n = s[1]),
        (_ = (r = s[0]).match(_numWithUnitExp) || []),
        (n.match(_numWithUnitExp) || []).length)
      ) {
        for (; (a = _numWithUnitExp.exec(n)); )
          (g = a[0]),
            (d = n.substring(P, a.index)),
            l
              ? (l = (l + 1) % 5)
              : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                (l = 1),
            g !== (f = _[x++] || "") &&
              ((p = parseFloat(f) || 0),
              (h = f.substr((p + "").length)),
              "=" === g.charAt(1) && (g = _parseRelative(p, g) + h),
              (c = parseFloat(g)),
              (u = g.substr((c + "").length)),
              (P = _numWithUnitExp.lastIndex - u.length),
              u ||
                ((u = u || _config.units[e] || h),
                P === n.length && ((n += u), (m.e += u))),
              h !== u && (p = _convertToUnit(t, e, f, u) || 0),
              (m._pt = {
                _next: m._pt,
                p: d || 1 === x ? d : ",",
                s: p,
                c: c - p,
                m: (l && l < 4) || "zIndex" === e ? Math.round : 0,
              }));
        m.c = P < n.length ? n.substring(P, n.length) : "";
      } else
        m.r =
          "display" === e && "none" === n
            ? _renderNonTweeningValueOnlyAtEnd
            : _renderNonTweeningValue;
      return _relExp.test(n) && (m.e = 0), (this._pt = m), m;
    },
    _keywordToPercent = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    _convertKeywordsToPercentages = function (t) {
      var e = t.split(" "),
        r = e[0],
        n = e[1] || "50%";
      return (
        ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) ||
          ((t = r), (r = n), (n = t)),
        (e[0] = _keywordToPercent[r] || r),
        (e[1] = _keywordToPercent[n] || n),
        e.join(" ")
      );
    },
    _renderClearProps = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          n,
          o,
          i = e.t,
          s = i.style,
          a = e.u,
          _ = i._gsap;
        if ("all" === a || !0 === a) (s.cssText = ""), (n = 1);
        else
          for (o = (a = a.split(",")).length; --o > -1; )
            (r = a[o]),
              _transformProps[r] &&
                ((n = 1),
                (r =
                  "transformOrigin" === r
                    ? _transformOriginProp
                    : _transformProp$1)),
              _removeProperty(i, r);
        n &&
          (_removeProperty(i, _transformProp$1),
          _ &&
            (_.svg && i.removeAttribute("transform"),
            _parseTransform(i, 1),
            (_.uncache = 1),
            _removeIndependentTransforms(s)));
      }
    },
    _specialProps = {
      clearProps: function (t, e, r, n, o) {
        if ("isFromStart" !== o.data) {
          var i = (t._pt = new PropTween(t._pt, e, r, 0, 0, _renderClearProps));
          return (i.u = n), (i.pr = -10), (i.tween = o), t._props.push(r), 1;
        }
      },
    },
    _identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    _getComputedTransformMatrixAsArray = function (t) {
      var e = _getComputedProperty(t, _transformProp$1);
      return _isNullTransform(e)
        ? _identity2DMatrix
        : e.substr(7).match(_numExp).map(_round$1);
    },
    _getMatrix = function (t, e) {
      var r,
        n,
        o,
        i,
        s = t._gsap || _getCache(t),
        a = t.style,
        _ = _getComputedTransformMatrixAsArray(t);
      return s.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (_ = [
            (o = t.transform.baseVal.consolidate().matrix).a,
            o.b,
            o.c,
            o.d,
            o.e,
            o.f,
          ]).join(",")
          ? _identity2DMatrix
          : _
        : (_ !== _identity2DMatrix ||
            t.offsetParent ||
            t === _docElement ||
            s.svg ||
            ((o = a.display),
            (a.display = "block"),
            ((r = t.parentNode) && t.offsetParent) ||
              ((i = 1), (n = t.nextElementSibling), _docElement.appendChild(t)),
            (_ = _getComputedTransformMatrixAsArray(t)),
            o ? (a.display = o) : _removeProperty(t, "display"),
            i &&
              (n
                ? r.insertBefore(t, n)
                : r
                ? r.appendChild(t)
                : _docElement.removeChild(t))),
          e && _.length > 6 ? [_[0], _[1], _[4], _[5], _[12], _[13]] : _);
    },
    _applySVGOrigin = function (t, e, r, n, o, i) {
      var s,
        a,
        _,
        p = t._gsap,
        l = o || _getMatrix(t, !0),
        f = p.xOrigin || 0,
        g = p.yOrigin || 0,
        c = p.xOffset || 0,
        d = p.yOffset || 0,
        u = l[0],
        h = l[1],
        m = l[2],
        P = l[3],
        x = l[4],
        y = l[5],
        v = e.split(" "),
        w = parseFloat(v[0]) || 0,
        T = parseFloat(v[1]) || 0;
      r
        ? l !== _identity2DMatrix &&
          (a = u * P - h * m) &&
          ((_ = w * (-h / a) + T * (u / a) - (u * y - h * x) / a),
          (w = w * (P / a) + T * (-m / a) + (m * y - P * x) / a),
          (T = _))
        : ((w =
            (s = _getBBox(t)).x +
            (~v[0].indexOf("%") ? (w / 100) * s.width : w)),
          (T =
            s.y + (~(v[1] || v[0]).indexOf("%") ? (T / 100) * s.height : T))),
        n || (!1 !== n && p.smooth)
          ? ((x = w - f),
            (y = T - g),
            (p.xOffset = c + (x * u + y * m) - x),
            (p.yOffset = d + (x * h + y * P) - y))
          : (p.xOffset = p.yOffset = 0),
        (p.xOrigin = w),
        (p.yOrigin = T),
        (p.smooth = !!n),
        (p.origin = e),
        (p.originIsAbsolute = !!r),
        (t.style[_transformOriginProp] = "0px 0px"),
        i &&
          (_addNonTweeningPT(i, p, "xOrigin", f, w),
          _addNonTweeningPT(i, p, "yOrigin", g, T),
          _addNonTweeningPT(i, p, "xOffset", c, p.xOffset),
          _addNonTweeningPT(i, p, "yOffset", d, p.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + T);
    },
    _parseTransform = function (t, e) {
      var r = t._gsap || new GSCache(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        o,
        i,
        s,
        a,
        _,
        p,
        l,
        f,
        g,
        c,
        d,
        u,
        h,
        m,
        P,
        x,
        y,
        v,
        w,
        T,
        S,
        O,
        b,
        C,
        E,
        D,
        A,
        M,
        B,
        k,
        N,
        R = t.style,
        z = r.scaleX < 0,
        G = "px",
        U = "deg",
        F = getComputedStyle(t),
        V = _getComputedProperty(t, _transformOriginProp) || "0";
      return (
        (n = o = i = _ = p = l = f = g = c = 0),
        (s = a = 1),
        (r.svg = !(!t.getCTM || !_isSVG(t))),
        F.translate &&
          (("none" === F.translate &&
            "none" === F.scale &&
            "none" === F.rotate) ||
            (R[_transformProp$1] =
              ("none" !== F.translate
                ? "translate3d(" +
                  (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
              ("none" !== F.scale
                ? "scale(" + F.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== F[_transformProp$1] ? F[_transformProp$1] : "")),
          (R.scale = R.rotate = R.translate = "none")),
        (h = _getMatrix(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((C = t.getBBox()),
              (V = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px"),
              (b = ""))
            : (b = !e && t.getAttribute("data-svg-origin")),
          _applySVGOrigin(
            t,
            b || V,
            !!b || r.originIsAbsolute,
            !1 !== r.smooth,
            h
          )),
        (d = r.xOrigin || 0),
        (u = r.yOrigin || 0),
        h !== _identity2DMatrix &&
          ((y = h[0]),
          (v = h[1]),
          (w = h[2]),
          (T = h[3]),
          (n = S = h[4]),
          (o = O = h[5]),
          6 === h.length
            ? ((s = Math.sqrt(y * y + v * v)),
              (a = Math.sqrt(T * T + w * w)),
              (_ = y || v ? _atan2(v, y) * _RAD2DEG : 0),
              (f = w || T ? _atan2(w, T) * _RAD2DEG + _ : 0) &&
                (a *= Math.abs(Math.cos(f * _DEG2RAD))),
              r.svg && ((n -= d - (d * y + u * w)), (o -= u - (d * v + u * T))))
            : ((N = h[6]),
              (B = h[7]),
              (D = h[8]),
              (A = h[9]),
              (M = h[10]),
              (k = h[11]),
              (n = h[12]),
              (o = h[13]),
              (i = h[14]),
              (p = (m = _atan2(N, M)) * _RAD2DEG),
              m &&
                ((b = S * (P = Math.cos(-m)) + D * (x = Math.sin(-m))),
                (C = O * P + A * x),
                (E = N * P + M * x),
                (D = S * -x + D * P),
                (A = O * -x + A * P),
                (M = N * -x + M * P),
                (k = B * -x + k * P),
                (S = b),
                (O = C),
                (N = E)),
              (l = (m = _atan2(-w, M)) * _RAD2DEG),
              m &&
                ((P = Math.cos(-m)),
                (k = T * (x = Math.sin(-m)) + k * P),
                (y = b = y * P - D * x),
                (v = C = v * P - A * x),
                (w = E = w * P - M * x)),
              (_ = (m = _atan2(v, y)) * _RAD2DEG),
              m &&
                ((b = y * (P = Math.cos(m)) + v * (x = Math.sin(m))),
                (C = S * P + O * x),
                (v = v * P - y * x),
                (O = O * P - S * x),
                (y = b),
                (S = C)),
              p &&
                Math.abs(p) + Math.abs(_) > 359.9 &&
                ((p = _ = 0), (l = 180 - l)),
              (s = _round$1(Math.sqrt(y * y + v * v + w * w))),
              (a = _round$1(Math.sqrt(O * O + N * N))),
              (m = _atan2(S, O)),
              (f = Math.abs(m) > 2e-4 ? m * _RAD2DEG : 0),
              (c = k ? 1 / (k < 0 ? -k : k) : 0)),
          r.svg &&
            ((b = t.getAttribute("transform")),
            (r.forceCSS =
              t.setAttribute("transform", "") ||
              !_isNullTransform(_getComputedProperty(t, _transformProp$1))),
            b && t.setAttribute("transform", b))),
        Math.abs(f) > 90 &&
          Math.abs(f) < 270 &&
          (z
            ? ((s *= -1),
              (f += _ <= 0 ? 180 : -180),
              (_ += _ <= 0 ? 180 : -180))
            : ((a *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          n -
          ((r.xPercent =
            n &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          G),
        (r.y =
          o -
          ((r.yPercent =
            o &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-o) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          G),
        (r.z = i + G),
        (r.scaleX = _round$1(s)),
        (r.scaleY = _round$1(a)),
        (r.rotation = _round$1(_) + U),
        (r.rotationX = _round$1(p) + U),
        (r.rotationY = _round$1(l) + U),
        (r.skewX = f + U),
        (r.skewY = g + U),
        (r.transformPerspective = c + G),
        (r.zOrigin = parseFloat(V.split(" ")[2]) || 0) &&
          (R[_transformOriginProp] = _firstTwoOnly(V)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = _config.force3D),
        (r.renderTransform = r.svg
          ? _renderSVGTransforms
          : _supports3D
          ? _renderCSSTransforms
          : _renderNon3DTransforms),
        (r.uncache = 0),
        r
      );
    },
    _firstTwoOnly = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    _addPxTranslate = function (t, e, r) {
      var n = getUnit(e);
      return (
        _round$1(
          parseFloat(e) + parseFloat(_convertToUnit(t, "x", r + "px", n))
        ) + n
      );
    },
    _renderNon3DTransforms = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        _renderCSSTransforms(t, e);
    },
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function (t, e) {
      var r = e || this,
        n = r.xPercent,
        o = r.yPercent,
        i = r.x,
        s = r.y,
        a = r.z,
        _ = r.rotation,
        p = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        g = r.skewY,
        c = r.scaleX,
        d = r.scaleY,
        u = r.transformPerspective,
        h = r.force3D,
        m = r.target,
        P = r.zOrigin,
        x = "",
        y = ("auto" === h && t && 1 !== t) || !0 === h;
      if (P && (l !== _zeroDeg || p !== _zeroDeg)) {
        var v,
          w = parseFloat(p) * _DEG2RAD,
          T = Math.sin(w),
          S = Math.cos(w);
        (w = parseFloat(l) * _DEG2RAD),
          (v = Math.cos(w)),
          (i = _addPxTranslate(m, i, T * v * -P)),
          (s = _addPxTranslate(m, s, -Math.sin(w) * -P)),
          (a = _addPxTranslate(m, a, S * v * -P + P));
      }
      u !== _zeroPx && (x += "perspective(" + u + _endParenthesis),
        (n || o) && (x += "translate(" + n + "%, " + o + "%) "),
        (y || i !== _zeroPx || s !== _zeroPx || a !== _zeroPx) &&
          (x +=
            a !== _zeroPx || y
              ? "translate3d(" + i + ", " + s + ", " + a + ") "
              : "translate(" + i + ", " + s + _endParenthesis),
        _ !== _zeroDeg && (x += "rotate(" + _ + _endParenthesis),
        p !== _zeroDeg && (x += "rotateY(" + p + _endParenthesis),
        l !== _zeroDeg && (x += "rotateX(" + l + _endParenthesis),
        (f === _zeroDeg && g === _zeroDeg) ||
          (x += "skew(" + f + ", " + g + _endParenthesis),
        (1 === c && 1 === d) ||
          (x += "scale(" + c + ", " + d + _endParenthesis),
        (m.style[_transformProp$1] = x || "translate(0, 0)");
    },
    _renderSVGTransforms = function (t, e) {
      var r,
        n,
        o,
        i,
        s,
        a = e || this,
        _ = a.xPercent,
        p = a.yPercent,
        l = a.x,
        f = a.y,
        g = a.rotation,
        c = a.skewX,
        d = a.skewY,
        u = a.scaleX,
        h = a.scaleY,
        m = a.target,
        P = a.xOrigin,
        x = a.yOrigin,
        y = a.xOffset,
        v = a.yOffset,
        w = a.forceCSS,
        T = parseFloat(l),
        S = parseFloat(f);
      (g = parseFloat(g)),
        (c = parseFloat(c)),
        (d = parseFloat(d)) && ((c += d = parseFloat(d)), (g += d)),
        g || c
          ? ((g *= _DEG2RAD),
            (c *= _DEG2RAD),
            (r = Math.cos(g) * u),
            (n = Math.sin(g) * u),
            (o = Math.sin(g - c) * -h),
            (i = Math.cos(g - c) * h),
            c &&
              ((d *= _DEG2RAD),
              (s = Math.tan(c - d)),
              (o *= s = Math.sqrt(1 + s * s)),
              (i *= s),
              d &&
                ((s = Math.tan(d)), (r *= s = Math.sqrt(1 + s * s)), (n *= s))),
            (r = _round$1(r)),
            (n = _round$1(n)),
            (o = _round$1(o)),
            (i = _round$1(i)))
          : ((r = u), (i = h), (n = o = 0)),
        ((T && !~(l + "").indexOf("px")) || (S && !~(f + "").indexOf("px"))) &&
          ((T = _convertToUnit(m, "x", l, "px")),
          (S = _convertToUnit(m, "y", f, "px"))),
        (P || x || y || v) &&
          ((T = _round$1(T + P - (P * r + x * o) + y)),
          (S = _round$1(S + x - (P * n + x * i) + v))),
        (_ || p) &&
          ((s = m.getBBox()),
          (T = _round$1(T + (_ / 100) * s.width)),
          (S = _round$1(S + (p / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          o +
          "," +
          i +
          "," +
          T +
          "," +
          S +
          ")"),
        m.setAttribute("transform", s),
        w && (m.style[_transformProp$1] = s);
    },
    _addRotationalPropTween = function (t, e, r, n, o) {
      var i,
        s,
        a = 360,
        _ = _isString$1(o),
        p = parseFloat(o) * (_ && ~o.indexOf("rad") ? _RAD2DEG : 1) - n,
        l = n + p + "deg";
      return (
        _ &&
          ("short" === (i = o.split("_")[1]) &&
            (p %= a) !== p % 180 &&
            (p += p < 0 ? a : -360),
          "cw" === i && p < 0
            ? (p = ((p + a * _bigNum) % a) - ~~(p / a) * a)
            : "ccw" === i &&
              p > 0 &&
              (p = ((p - a * _bigNum) % a) - ~~(p / a) * a)),
        (t._pt = s = new PropTween(t._pt, e, r, n, p, _renderPropWithEnd)),
        (s.e = l),
        (s.u = "deg"),
        t._props.push(r),
        s
      );
    },
    _assign = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    _addRawTransformPTs = function (t, e, r) {
      var n,
        o,
        i,
        s,
        a,
        _,
        p,
        l = _assign({}, r._gsap),
        f = r.style;
      for (o in (l.svg
        ? ((i = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (f[_transformProp$1] = e),
          (n = _parseTransform(r, 1)),
          _removeProperty(r, _transformProp$1),
          r.setAttribute("transform", i))
        : ((i = getComputedStyle(r)[_transformProp$1]),
          (f[_transformProp$1] = e),
          (n = _parseTransform(r, 1)),
          (f[_transformProp$1] = i)),
      _transformProps))
        (i = l[o]) !== (s = n[o]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 &&
          ((a =
            getUnit(i) !== (p = getUnit(s))
              ? _convertToUnit(r, o, i, p)
              : parseFloat(i)),
          (_ = parseFloat(s)),
          (t._pt = new PropTween(t._pt, n, o, a, _ - a, _renderCSSProp)),
          (t._pt.u = p || 0),
          t._props.push(o));
      _assign(n, l);
    };
  _forEachName("padding,margin,Width,Radius", function (t, e) {
    var r = "Top",
      n = "Right",
      o = "Bottom",
      i = "Left",
      s = (e < 3 ? [r, n, o, i] : [r + i, r + n, o + n, o + i]).map(function (
        r
      ) {
        return e < 2 ? t + r : "border" + r + t;
      });
    _specialProps[e > 1 ? "border" + t : t] = function (t, e, r, n, o) {
      var i, a;
      if (arguments.length < 4)
        return (
          (i = s.map(function (e) {
            return _get(t, e, r);
          })),
          5 === (a = i.join(" ")).split(i[0]).length ? i[0] : a
        );
      (i = (n + "").split(" ")),
        (a = {}),
        s.forEach(function (t, e) {
          return (a[t] = i[e] = i[e] || i[((e - 1) / 2) | 0]);
        }),
        t.init(e, a, o);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore$1,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, n, o) {
      var i,
        s,
        a,
        _,
        p,
        l,
        f,
        g,
        c,
        d,
        u,
        h,
        m,
        P,
        x,
        y,
        v = this._props,
        w = t.style,
        T = r.vars.startAt;
      for (f in (_pluginInitted || _initCore$1(),
      (this.styles = this.styles || _getStyleSaver(t)),
      (y = this.styles.props),
      (this.tween = r),
      e))
        if (
          "autoRound" !== f &&
          ((s = e[f]), !_plugins[f] || !_checkPlugin(f, e, r, n, t, o))
        )
          if (
            ((p = typeof s),
            (l = _specialProps[f]),
            "function" === p && (p = typeof (s = s.call(r, n, t, o))),
            "string" === p && ~s.indexOf("random(") && (s = _replaceRandom(s)),
            l)
          )
            l(this, t, f, s, r) && (x = 1);
          else if ("--" === f.substr(0, 2))
            (i = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
              (s += ""),
              (_colorExp.lastIndex = 0),
              _colorExp.test(i) || ((g = getUnit(i)), (c = getUnit(s))),
              c
                ? g !== c && (i = _convertToUnit(t, f, i, c) + c)
                : g && (s += g),
              this.add(w, "setProperty", i, s, n, o, 0, 0, f),
              v.push(f),
              y.push(f, 0, w[f]);
          else if ("undefined" !== p) {
            if (
              (T && f in T
                ? ((i =
                    "function" == typeof T[f] ? T[f].call(r, n, t, o) : T[f]),
                  _isString$1(i) &&
                    ~i.indexOf("random(") &&
                    (i = _replaceRandom(i)),
                  getUnit(i + "") ||
                    (i += _config.units[f] || getUnit(_get(t, f)) || ""),
                  "=" === (i + "").charAt(1) && (i = _get(t, f)))
                : (i = _get(t, f)),
              (_ = parseFloat(i)),
              (d = "string" === p && "=" === s.charAt(1) && s.substr(0, 2)) &&
                (s = s.substr(2)),
              (a = parseFloat(s)),
              f in _propertyAliases &&
                ("autoAlpha" === f &&
                  (1 === _ &&
                    "hidden" === _get(t, "visibility") &&
                    a &&
                    (_ = 0),
                  y.push("visibility", 0, w.visibility),
                  _addNonTweeningPT(
                    this,
                    w,
                    "visibility",
                    _ ? "inherit" : "hidden",
                    a ? "inherit" : "hidden",
                    !a
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = _propertyAliases[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (u = f in _transformProps))
            )
              if (
                (this.styles.save(f),
                h ||
                  (((m = t._gsap).renderTransform && !e.parseTransform) ||
                    _parseTransform(t, e.parseTransform),
                  (P = !1 !== e.smoothOrigin && m.smooth),
                  ((h = this._pt =
                    new PropTween(
                      this._pt,
                      w,
                      _transformProp$1,
                      0,
                      1,
                      m.renderTransform,
                      m,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new PropTween(
                  this._pt,
                  m,
                  "scaleY",
                  _,
                  (d ? _parseRelative(_, d + a) : a) - _ || 0,
                  _renderCSSProp
                )),
                  (this._pt.u = 0),
                  v.push("scaleY", f),
                  (f += "X");
              else {
                if ("transformOrigin" === f) {
                  y.push(_transformOriginProp, 0, w[_transformOriginProp]),
                    (s = _convertKeywordsToPercentages(s)),
                    m.svg
                      ? _applySVGOrigin(t, s, 0, P, 0, this)
                      : ((c = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin &&
                          _addNonTweeningPT(this, m, "zOrigin", m.zOrigin, c),
                        _addNonTweeningPT(
                          this,
                          w,
                          f,
                          _firstTwoOnly(i),
                          _firstTwoOnly(s)
                        ));
                  continue;
                }
                if ("svgOrigin" === f) {
                  _applySVGOrigin(t, s, 1, P, 0, this);
                  continue;
                }
                if (f in _rotationalProperties) {
                  _addRotationalPropTween(
                    this,
                    m,
                    f,
                    _,
                    d ? _parseRelative(_, d + s) : s
                  );
                  continue;
                }
                if ("smoothOrigin" === f) {
                  _addNonTweeningPT(this, m, "smooth", m.smooth, s);
                  continue;
                }
                if ("force3D" === f) {
                  m[f] = s;
                  continue;
                }
                if ("transform" === f) {
                  _addRawTransformPTs(this, s, t);
                  continue;
                }
              }
            else f in w || (f = _checkPropPrefix(f) || f);
            if (
              u ||
              ((a || 0 === a) &&
                (_ || 0 === _) &&
                !_complexExp.test(s) &&
                f in w)
            )
              a || (a = 0),
                (g = (i + "").substr((_ + "").length)) !==
                  (c =
                    getUnit(s) ||
                    (f in _config.units ? _config.units[f] : g)) &&
                  (_ = _convertToUnit(t, f, i, c)),
                (this._pt = new PropTween(
                  this._pt,
                  u ? m : w,
                  f,
                  _,
                  (d ? _parseRelative(_, d + a) : a) - _,
                  u || ("px" !== c && "zIndex" !== f) || !1 === e.autoRound
                    ? _renderCSSProp
                    : _renderRoundedCSSProp
                )),
                (this._pt.u = c || 0),
                g !== c &&
                  "%" !== c &&
                  ((this._pt.b = i),
                  (this._pt.r = _renderCSSPropWithBeginning));
            else if (f in w)
              _tweenComplexCSSString.call(this, t, f, i, d ? d + s : s);
            else {
              if (!(f in t)) {
                _missingPlugin(f, s);
                continue;
              }
              this.add(t, f, i || t[f], d ? d + s : s, n, o);
            }
            u || (f in w ? y.push(f, 0, w[f]) : y.push(f, 1, i || t[f])),
              v.push(f);
          }
      x && _sortPropTweensByPriority(this);
    },
    render: function (t, e) {
      if (e.tween._time || !_reverting())
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      else e.styles.revert();
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function (t, e, r) {
      var n = _propertyAliases[e];
      return (
        n && n.indexOf(",") < 0 && (e = n),
        e in _transformProps &&
        e !== _transformOriginProp &&
        (t._gsap.x || _get(t, "x"))
          ? r && _recentSetterPlugin === r
            ? "scale" === e
              ? _setterScale
              : _setterTransform
            : (_recentSetterPlugin = r || {}) &&
              ("scale" === e
                ? _setterScaleWithRender
                : _setterTransformWithRender)
          : t.style && !_isUndefined(t.style[e])
          ? _setterCSSStyle
          : ~e.indexOf("-")
          ? _setterCSSProp
          : _getSetter(t, e)
      );
    },
    core: { _removeProperty: _removeProperty, _getMatrix: _getMatrix },
  };
  (gsap$2.utils.checkPrefix = _checkPropPrefix),
    (gsap$2.core.getStyleSaver = _getStyleSaver),
    (function (t, e, r, n) {
      var o = _forEachName(
        t +
          "," +
          e +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          _transformProps[t] = 1;
        }
      );
      _forEachName(e, function (t) {
        (_config.units[t] = "deg"), (_rotationalProperties[t] = 1);
      }),
        (_propertyAliases[o[13]] = t + "," + e),
        _forEachName(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            _propertyAliases[e[1]] = o[e[0]];
          }
        );
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY"
    ),
    _forEachName(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        _config.units[t] = "px";
      }
    ),
    gsap$2.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap$2.registerPlugin(CSSPlugin) || gsap$2;
  gsapWithCSS.core.Tween;

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function _createClass(e, t, r) {
    return (
      t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    );
  }
  /*!
   * Observer 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var gsap$1,
    _coreInitted$1,
    _win$1,
    _doc$1,
    _docEl$1,
    _body$1,
    _isTouch,
    _pointerType,
    ScrollTrigger$1,
    _root$1,
    _normalizer$1,
    _eventTypes,
    _getGSAP$1 = function () {
      return (
        gsap$1 ||
        ("undefined" != typeof window &&
          (gsap$1 = window.gsap) &&
          gsap$1.registerPlugin &&
          gsap$1)
      );
    },
    _startup$1 = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime$1 = Date.now,
    _bridge = function (e, t) {
      return t;
    },
    _integrate = function () {
      var e = ScrollTrigger$1.core,
        t = e.bridge || {},
        r = e._scrollers,
        n = e._proxies;
      r.push.apply(r, _scrollers),
        n.push.apply(n, _proxies),
        (_scrollers = r),
        (_proxies = n),
        (_bridge = function (e, r) {
          return t[e](r);
        });
    },
    _getProxyProp = function (e, t) {
      return ~_proxies.indexOf(e) && _proxies[_proxies.indexOf(e) + 1][t];
    },
    _isViewport$1 = function (e) {
      return !!~_root$1.indexOf(e);
    },
    _addListener$1 = function (e, t, r, n, o) {
      return e.addEventListener(t, r, { passive: !n, capture: !!o });
    },
    _removeListener$1 = function (e, t, r, n) {
      return e.removeEventListener(t, r, !!n);
    },
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll$1 = function () {
      return (_normalizer$1 && _normalizer$1.isPressed) || _scrollers.cache++;
    },
    _scrollCacheFunc = function (e, t) {
      var r = function r(n) {
        if (n || 0 === n) {
          _startup$1 && (_win$1.history.scrollRestoration = "manual");
          var o = _normalizer$1 && _normalizer$1.isPressed;
          (n = r.v =
            Math.round(n) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0)),
            e(n),
            (r.cacheID = _scrollers.cache),
            o && _bridge("ss", n);
        } else
          (t || _scrollers.cache !== r.cacheID || _bridge("ref")) &&
            ((r.cacheID = _scrollers.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (r.offset = 0), e && r;
    },
    _horizontal = {
      s: _scrollLeft,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: _scrollCacheFunc(function (e) {
        return arguments.length
          ? _win$1.scrollTo(e, _vertical.sc())
          : _win$1.pageXOffset ||
              _doc$1[_scrollLeft] ||
              _docEl$1[_scrollLeft] ||
              _body$1[_scrollLeft] ||
              0;
      }),
    },
    _vertical = {
      s: _scrollTop,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: _horizontal,
      sc: _scrollCacheFunc(function (e) {
        return arguments.length
          ? _win$1.scrollTo(_horizontal.sc(), e)
          : _win$1.pageYOffset ||
              _doc$1[_scrollTop] ||
              _docEl$1[_scrollTop] ||
              _body$1[_scrollTop] ||
              0;
      }),
    },
    _getTarget = function (e) {
      return (
        gsap$1.utils.toArray(e)[0] ||
        ("string" == typeof e && !1 !== gsap$1.config().nullTargetWarn
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    _getScrollFunc = function (e, t) {
      var r = t.s,
        n = t.sc;
      _isViewport$1(e) && (e = _doc$1.scrollingElement || _docEl$1);
      var o = _scrollers.indexOf(e),
        i = n === _vertical.sc ? 1 : 2;
      !~o && (o = _scrollers.push(e) - 1),
        _scrollers[o + i] || e.addEventListener("scroll", _onScroll$1);
      var s = _scrollers[o + i],
        l =
          s ||
          (_scrollers[o + i] =
            _scrollCacheFunc(_getProxyProp(e, r), !0) ||
            (_isViewport$1(e)
              ? n
              : _scrollCacheFunc(function (t) {
                  return arguments.length ? (e[r] = t) : e[r];
                })));
      return (
        (l.target = e),
        s || (l.smooth = "smooth" === gsap$1.getProperty(e, "scrollBehavior")),
        l
      );
    },
    _getVelocityProp = function (e, t, r) {
      var n = e,
        o = e,
        i = _getTime$1(),
        s = i,
        l = t || 50,
        a = Math.max(500, 3 * l),
        c = function (e, t) {
          var a = _getTime$1();
          t || a - i > l
            ? ((o = n), (n = e), (s = i), (i = a))
            : r
            ? (n += e)
            : (n = o + ((e - o) / (a - s)) * (i - s));
        };
      return {
        update: c,
        reset: function () {
          (o = n = r ? 0 : n), (s = i = 0);
        },
        getVelocity: function (e) {
          var t = s,
            l = o,
            _ = _getTime$1();
          return (
            (e || 0 === e) && e !== n && c(e),
            i === s || _ - s > a
              ? 0
              : ((n + (r ? l : -l)) / ((r ? _ : i) - t)) * 1e3
          );
        },
      };
    },
    _getEvent = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    _getAbsoluteMax = function (e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    _setScrollTrigger = function () {
      (ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger) &&
        ScrollTrigger$1.core &&
        _integrate();
    },
    _initCore = function (e) {
      return (
        (gsap$1 = e || _getGSAP$1()) &&
          "undefined" != typeof document &&
          document.body &&
          ((_win$1 = window),
          (_doc$1 = document),
          (_docEl$1 = _doc$1.documentElement),
          (_body$1 = _doc$1.body),
          (_root$1 = [_win$1, _doc$1, _docEl$1, _body$1]),
          gsap$1.utils.clamp,
          (_pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse"),
          (_isTouch = Observer.isTouch =
            _win$1.matchMedia &&
            _win$1.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in _win$1 ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (_eventTypes = Observer.eventTypes =
            (
              "ontouchstart" in _docEl$1
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in _docEl$1
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (_startup$1 = 0);
          }, 500),
          _setScrollTrigger(),
          (_coreInitted$1 = 1)),
        _coreInitted$1
      );
    };
  (_horizontal.op = _vertical), (_scrollers.cache = 0);
  var Observer = (function () {
    function e(e) {
      this.init(e);
    }
    return (
      (e.prototype.init = function (e) {
        _coreInitted$1 ||
          _initCore(gsap$1) ||
          console.warn("Please gsap.registerPlugin(Observer)"),
          ScrollTrigger$1 || _setScrollTrigger();
        var t = e.tolerance,
          r = e.dragMinimum,
          n = e.type,
          o = e.target,
          i = e.lineHeight,
          s = e.debounce,
          l = e.preventDefault,
          a = e.onStop,
          c = e.onStopDelay,
          _ = e.ignore,
          u = e.wheelSpeed,
          d = e.event,
          g = e.onDragStart,
          p = e.onDragEnd,
          v = e.onDrag,
          f = e.onPress,
          h = e.onRelease,
          y = e.onRight,
          m = e.onLeft,
          b = e.onUp,
          T = e.onDown,
          x = e.onChangeX,
          w = e.onChangeY,
          L = e.onChange,
          E = e.onToggleX,
          P = e.onToggleY,
          M = e.onHover,
          O = e.onHoverEnd,
          S = e.onMove,
          X = e.ignoreCheck,
          Y = e.isNormalizer,
          D = e.onGestureStart,
          C = e.onGestureEnd,
          z = e.onWheel,
          k = e.onEnable,
          A = e.onDisable,
          V = e.onClick,
          F = e.scrollSpeed,
          G = e.capture,
          I = e.allowClicks,
          H = e.lockAxis,
          R = e.onLockAxis;
        (this.target = o = _getTarget(o) || _docEl$1),
          (this.vars = e),
          _ && (_ = gsap$1.utils.toArray(_)),
          (t = t || 1e-9),
          (r = r || 0),
          (u = u || 1),
          (F = F || 1),
          (n = n || "wheel,touch,pointer"),
          (s = !1 !== s),
          i ||
            (i = parseFloat(_win$1.getComputedStyle(_body$1).lineHeight) || 22);
        var B,
          W,
          q,
          j,
          N,
          U,
          J,
          K = this,
          Q = 0,
          Z = 0,
          $ = _getScrollFunc(o, _horizontal),
          ee = _getScrollFunc(o, _vertical),
          te = $(),
          re = ee(),
          ne =
            ~n.indexOf("touch") &&
            !~n.indexOf("pointer") &&
            "pointerdown" === _eventTypes[0],
          oe = _isViewport$1(o),
          ie = o.ownerDocument || _doc$1,
          se = [0, 0, 0],
          le = [0, 0, 0],
          ae = 0,
          ce = function () {
            return (ae = _getTime$1());
          },
          _e = function (e, t) {
            return (
              ((K.event = e) && _ && ~_.indexOf(e.target)) ||
              (t && ne && "touch" !== e.pointerType) ||
              (X && X(e, t))
            );
          },
          ue = function () {
            var e = (K.deltaX = _getAbsoluteMax(se)),
              r = (K.deltaY = _getAbsoluteMax(le)),
              n = Math.abs(e) >= t,
              o = Math.abs(r) >= t;
            L && (n || o) && L(K, e, r, se, le),
              n &&
                (y && K.deltaX > 0 && y(K),
                m && K.deltaX < 0 && m(K),
                x && x(K),
                E && K.deltaX < 0 != Q < 0 && E(K),
                (Q = K.deltaX),
                (se[0] = se[1] = se[2] = 0)),
              o &&
                (T && K.deltaY > 0 && T(K),
                b && K.deltaY < 0 && b(K),
                w && w(K),
                P && K.deltaY < 0 != Z < 0 && P(K),
                (Z = K.deltaY),
                (le[0] = le[1] = le[2] = 0)),
              (j || q) && (S && S(K), q && (v(K), (q = !1)), (j = !1)),
              U && !(U = !1) && R && R(K),
              N && (z(K), (N = !1)),
              (B = 0);
          },
          de = function (e, t, r) {
            (se[r] += e),
              (le[r] += t),
              K._vx.update(e),
              K._vy.update(t),
              s ? B || (B = requestAnimationFrame(ue)) : ue();
          },
          ge = function (e, t) {
            H &&
              !J &&
              ((K.axis = J = Math.abs(e) > Math.abs(t) ? "x" : "y"), (U = !0)),
              "y" !== J && ((se[2] += e), K._vx.update(e, !0)),
              "x" !== J && ((le[2] += t), K._vy.update(t, !0)),
              s ? B || (B = requestAnimationFrame(ue)) : ue();
          },
          pe = function (e) {
            if (!_e(e, 1)) {
              var t = (e = _getEvent(e, l)).clientX,
                n = e.clientY,
                o = t - K.x,
                i = n - K.y,
                s = K.isDragging;
              (K.x = t),
                (K.y = n),
                (s ||
                  Math.abs(K.startX - t) >= r ||
                  Math.abs(K.startY - n) >= r) &&
                  (v && (q = !0),
                  s || (K.isDragging = !0),
                  ge(o, i),
                  s || (g && g(K)));
            }
          },
          ve = (K.onPress = function (e) {
            _e(e, 1) ||
              ((K.axis = J = null),
              W.pause(),
              (K.isPressed = !0),
              (e = _getEvent(e)),
              (Q = Z = 0),
              (K.startX = K.x = e.clientX),
              (K.startY = K.y = e.clientY),
              K._vx.reset(),
              K._vy.reset(),
              _addListener$1(Y ? o : ie, _eventTypes[1], pe, l, !0),
              (K.deltaX = K.deltaY = 0),
              f && f(K));
          }),
          fe = function (e) {
            if (!_e(e, 1)) {
              _removeListener$1(Y ? o : ie, _eventTypes[1], pe, !0);
              var t =
                  K.isDragging &&
                  (Math.abs(K.x - K.startX) > 3 ||
                    Math.abs(K.y - K.startY) > 3),
                r = _getEvent(e);
              t ||
                (K._vx.reset(),
                K._vy.reset(),
                l &&
                  I &&
                  gsap$1.delayedCall(0.08, function () {
                    if (_getTime$1() - ae > 300 && !e.defaultPrevented)
                      if (e.target.click) e.target.click();
                      else if (ie.createEvent) {
                        var t = ie.createEvent("MouseEvents");
                        t.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          _win$1,
                          1,
                          r.screenX,
                          r.screenY,
                          r.clientX,
                          r.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          e.target.dispatchEvent(t);
                      }
                  })),
                (K.isDragging = K.isGesturing = K.isPressed = !1),
                a && !Y && W.restart(!0),
                p && t && p(K),
                h && h(K, t);
            }
          },
          he = function (e) {
            return (
              e.touches &&
              e.touches.length > 1 &&
              (K.isGesturing = !0) &&
              D(e, K.isDragging)
            );
          },
          ye = function () {
            return (K.isGesturing = !1) || C(K);
          },
          me = function (e) {
            if (!_e(e)) {
              var t = $(),
                r = ee();
              de((t - te) * F, (r - re) * F, 1),
                (te = t),
                (re = r),
                a && W.restart(!0);
            }
          },
          be = function (e) {
            if (!_e(e)) {
              (e = _getEvent(e, l)), z && (N = !0);
              var t =
                (1 === e.deltaMode
                  ? i
                  : 2 === e.deltaMode
                  ? _win$1.innerHeight
                  : 1) * u;
              de(e.deltaX * t, e.deltaY * t, 0), a && !Y && W.restart(!0);
            }
          },
          Te = function (e) {
            if (!_e(e)) {
              var t = e.clientX,
                r = e.clientY,
                n = t - K.x,
                o = r - K.y;
              (K.x = t), (K.y = r), (j = !0), (n || o) && ge(n, o);
            }
          },
          xe = function (e) {
            (K.event = e), M(K);
          },
          we = function (e) {
            (K.event = e), O(K);
          },
          Le = function (e) {
            return _e(e) || (_getEvent(e, l) && V(K));
          };
        (W = K._dc =
          gsap$1
            .delayedCall(c || 0.25, function () {
              K._vx.reset(), K._vy.reset(), W.pause(), a && a(K);
            })
            .pause()),
          (K.deltaX = K.deltaY = 0),
          (K._vx = _getVelocityProp(0, 50, !0)),
          (K._vy = _getVelocityProp(0, 50, !0)),
          (K.scrollX = $),
          (K.scrollY = ee),
          (K.isDragging = K.isGesturing = K.isPressed = !1),
          (K.enable = function (e) {
            return (
              K.isEnabled ||
                (_addListener$1(oe ? ie : o, "scroll", _onScroll$1),
                n.indexOf("scroll") >= 0 &&
                  _addListener$1(oe ? ie : o, "scroll", me, l, G),
                n.indexOf("wheel") >= 0 && _addListener$1(o, "wheel", be, l, G),
                ((n.indexOf("touch") >= 0 && _isTouch) ||
                  n.indexOf("pointer") >= 0) &&
                  (_addListener$1(o, _eventTypes[0], ve, l, G),
                  _addListener$1(ie, _eventTypes[2], fe),
                  _addListener$1(ie, _eventTypes[3], fe),
                  I && _addListener$1(o, "click", ce, !1, !0),
                  V && _addListener$1(o, "click", Le),
                  D && _addListener$1(ie, "gesturestart", he),
                  C && _addListener$1(ie, "gestureend", ye),
                  M && _addListener$1(o, _pointerType + "enter", xe),
                  O && _addListener$1(o, _pointerType + "leave", we),
                  S && _addListener$1(o, _pointerType + "move", Te)),
                (K.isEnabled = !0),
                e && e.type && ve(e),
                k && k(K)),
              K
            );
          }),
          (K.disable = function () {
            K.isEnabled &&
              (_observers.filter(function (e) {
                return e !== K && _isViewport$1(e.target);
              }).length ||
                _removeListener$1(oe ? ie : o, "scroll", _onScroll$1),
              K.isPressed &&
                (K._vx.reset(),
                K._vy.reset(),
                _removeListener$1(Y ? o : ie, _eventTypes[1], pe, !0)),
              _removeListener$1(oe ? ie : o, "scroll", me, G),
              _removeListener$1(o, "wheel", be, G),
              _removeListener$1(o, _eventTypes[0], ve, G),
              _removeListener$1(ie, _eventTypes[2], fe),
              _removeListener$1(ie, _eventTypes[3], fe),
              _removeListener$1(o, "click", ce, !0),
              _removeListener$1(o, "click", Le),
              _removeListener$1(ie, "gesturestart", he),
              _removeListener$1(ie, "gestureend", ye),
              _removeListener$1(o, _pointerType + "enter", xe),
              _removeListener$1(o, _pointerType + "leave", we),
              _removeListener$1(o, _pointerType + "move", Te),
              (K.isEnabled = K.isPressed = K.isDragging = !1),
              A && A(K));
          }),
          (K.kill = function () {
            K.disable();
            var e = _observers.indexOf(K);
            e >= 0 && _observers.splice(e, 1),
              _normalizer$1 === K && (_normalizer$1 = 0);
          }),
          _observers.push(K),
          Y && _isViewport$1(o) && (_normalizer$1 = K),
          K.enable(d);
      }),
      _createClass(e, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      e
    );
  })();
  (Observer.version = "3.11.3"),
    (Observer.create = function (e) {
      return new Observer(e);
    }),
    (Observer.register = _initCore),
    (Observer.getAll = function () {
      return _observers.slice();
    }),
    (Observer.getById = function (e) {
      return _observers.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    _getGSAP$1() && gsap$1.registerPlugin(Observer);

  /*!
   * ScrollTrigger 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _context,
    _scrollRestoration,
    _limitCallbacks,
    _rafID,
    _refreshingAll,
    _queueRefreshID,
    _primary,
    _startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _pointerDownHandler = function () {
      return (_pointerIsDown = 1);
    },
    _pointerUpHandler = function () {
      return (_pointerIsDown = 0);
    },
    _passThrough = function (e) {
      return e;
    },
    _round = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    _windowExists = function () {
      return "undefined" != typeof window;
    },
    _getGSAP = function () {
      return (
        gsap ||
        (_windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap)
      );
    },
    _isViewport = function (e) {
      return !!~_root.indexOf(e);
    },
    _getBoundsFunc = function (e) {
      return (
        _getProxyProp(e, "getBoundingClientRect") ||
        (_isViewport(e)
          ? function () {
              return (
                (_winOffsets.width = _win.innerWidth),
                (_winOffsets.height = _win.innerHeight),
                _winOffsets
              );
            }
          : function () {
              return _getBounds(e);
            })
      );
    },
    _getSizeFunc = function (e, r, t) {
      var n = t.d,
        i = t.d2,
        o = t.a;
      return (o = _getProxyProp(e, "getBoundingClientRect"))
        ? function () {
            return o()[n];
          }
        : function () {
            return (r ? _win["inner" + i] : e["client" + i]) || 0;
          };
    },
    _getOffsetsFunc = function (e, r) {
      return !r || ~_proxies.indexOf(e)
        ? _getBoundsFunc(e)
        : function () {
            return _winOffsets;
          };
    },
    _maxScroll = function (e, r) {
      var t = r.s,
        n = r.d2,
        i = r.d,
        o = r.a;
      return (t = "scroll" + n) && (o = _getProxyProp(e, t))
        ? o() - _getBoundsFunc(e)()[i]
        : _isViewport(e)
        ? (_docEl[t] || _body[t]) -
          (_win["inner" + n] || _docEl["client" + n] || _body["client" + n])
        : e[t] - e["offset" + n];
    },
    _iterateAutoRefresh = function (e, r) {
      for (var t = 0; t < _autoRefresh.length; t += 3)
        (!r || ~r.indexOf(_autoRefresh[t + 1])) &&
          e(_autoRefresh[t], _autoRefresh[t + 1], _autoRefresh[t + 2]);
    },
    _isString = function (e) {
      return "string" == typeof e;
    },
    _isFunction = function (e) {
      return "function" == typeof e;
    },
    _isNumber = function (e) {
      return "number" == typeof e;
    },
    _isObject = function (e) {
      return "object" == typeof e;
    },
    _endAnimation = function (e, r, t) {
      return e && e.progress(r ? 0 : 1) && t && e.pause();
    },
    _callback = function (e, r) {
      if (e.enabled) {
        var t = r(e);
        t && t.totalTime && (e.callbackAnimation = t);
      }
    },
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function (e) {
      return _win.getComputedStyle(e);
    },
    _makePositionable = function (e) {
      var r = _getComputedStyle(e).position;
      e.style.position = "absolute" === r || "fixed" === r ? r : "relative";
    },
    _setDefaults = function (e, r) {
      for (var t in r) t in e || (e[t] = r[t]);
      return e;
    },
    _getBounds = function (e, r) {
      var t =
          r &&
          "matrix(1, 0, 0, 1, 0, 0)" !== _getComputedStyle(e)[_transformProp] &&
          gsap
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        n = e.getBoundingClientRect();
      return t && t.progress(0).kill(), n;
    },
    _getSize = function (e, r) {
      var t = r.d2;
      return e["offset" + t] || e["client" + t] || 0;
    },
    _getLabelRatioArray = function (e) {
      var r,
        t = [],
        n = e.labels,
        i = e.duration();
      for (r in n) t.push(n[r] / i);
      return t;
    },
    _getClosestLabel = function (e) {
      return function (r) {
        return gsap.utils.snap(_getLabelRatioArray(e), r);
      };
    },
    _snapDirectional = function (e) {
      var r = gsap.utils.snap(e),
        t =
          Array.isArray(e) &&
          e.slice(0).sort(function (e, r) {
            return e - r;
          });
      return t
        ? function (e, n, i) {
            var o;
            if ((void 0 === i && (i = 0.001), !n)) return r(e);
            if (n > 0) {
              for (e -= i, o = 0; o < t.length; o++) if (t[o] >= e) return t[o];
              return t[o - 1];
            }
            for (o = t.length, e += i; o--; ) if (t[o] <= e) return t[o];
            return t[0];
          }
        : function (t, n, i) {
            void 0 === i && (i = 0.001);
            var o = r(t);
            return !n || Math.abs(o - t) < i || o - t < 0 == n < 0
              ? o
              : r(n < 0 ? t - e : t + e);
          };
    },
    _getLabelAtDirection = function (e) {
      return function (r, t) {
        return _snapDirectional(_getLabelRatioArray(e))(r, t.direction);
      };
    },
    _multiListener = function (e, r, t, n) {
      return t.split(",").forEach(function (t) {
        return e(r, t, n);
      });
    },
    _addListener = function (e, r, t, n, i) {
      return e.addEventListener(r, t, { passive: !n, capture: !!i });
    },
    _removeListener = function (e, r, t, n) {
      return e.removeEventListener(r, t, !!n);
    },
    _wheelListener = function (e, r, t) {
      return t && t.wheelHandler && e(r, "wheel", t);
    },
    _markerDefaults = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    _defaults = { toggleActions: "play", anticipatePin: 0 },
    _keywords = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    _offsetToPx = function (e, r) {
      if (_isString(e)) {
        var t = e.indexOf("="),
          n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
        ~t && (e.indexOf("%") > t && (n *= r / 100), (e = e.substr(0, t - 1))),
          (e =
            n +
            (e in _keywords
              ? _keywords[e] * r
              : ~e.indexOf("%")
              ? (parseFloat(e) * r) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    _createMarker = function (e, r, t, n, i, o, s, a) {
      var l = i.startColor,
        _ = i.endColor,
        c = i.fontSize,
        u = i.indent,
        g = i.fontWeight,
        p = _doc.createElement("div"),
        d = _isViewport(t) || "fixed" === _getProxyProp(t, "pinType"),
        f = -1 !== e.indexOf("scroller"),
        h = d ? _body : t,
        m = -1 !== e.indexOf("start"),
        v = m ? l : _,
        S =
          "border-color:" +
          v +
          ";font-size:" +
          c +
          ";color:" +
          v +
          ";font-weight:" +
          g +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (S += "position:" + ((f || a) && d ? "fixed;" : "absolute;")),
        (f || a || !d) &&
          (S +=
            (n === _vertical ? _right : _bottom) +
            ":" +
            (o + parseFloat(u)) +
            "px;"),
        s &&
          (S +=
            "box-sizing:border-box;text-align:left;width:" +
            s.offsetWidth +
            "px;"),
        (p._isStart = m),
        p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
        (p.style.cssText = S),
        (p.innerText = r || 0 === r ? e + "-" + r : e),
        h.children[0] ? h.insertBefore(p, h.children[0]) : h.appendChild(p),
        (p._offset = p["offset" + n.op.d2]),
        _positionMarker(p, 0, n, m),
        p
      );
    },
    _positionMarker = function (e, r, t, n) {
      var i = { display: "block" },
        o = t[n ? "os2" : "p2"],
        s = t[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (i[t.a + "Percent"] = n ? -100 : 0),
        (i[t.a] = n ? "1px" : 0),
        (i["border" + o + _Width] = 1),
        (i["border" + s + _Width] = 0),
        (i[t.p] = r + "px"),
        gsap.set(e, i);
    },
    _triggers = [],
    _ids = {},
    _sync = function () {
      return (
        _getTime() - _lastScrollTime > 34 &&
        (_rafID || (_rafID = requestAnimationFrame(_updateAll)))
      );
    },
    _onScroll = function () {
      (!_normalizer ||
        !_normalizer.isPressed ||
        _normalizer.startX > _body.clientWidth) &&
        (_scrollers.cache++,
        _normalizer
          ? _rafID || (_rafID = requestAnimationFrame(_updateAll))
          : _updateAll(),
        _lastScrollTime || _dispatch("scrollStart"),
        (_lastScrollTime = _getTime()));
    },
    _setBaseDimensions = function () {
      (_baseScreenWidth = _win.innerWidth),
        (_baseScreenHeight = _win.innerHeight);
    },
    _onResize = function () {
      _scrollers.cache++,
        !_refreshing &&
          !_ignoreResize &&
          !_doc.fullscreenElement &&
          !_doc.webkitFullscreenElement &&
          (!_ignoreMobileResize ||
            _baseScreenWidth !== _win.innerWidth ||
            Math.abs(_win.innerHeight - _baseScreenHeight) >
              0.25 * _win.innerHeight) &&
          _resizeDelay.restart(!0);
    },
    _listeners = {},
    _emptyArray = [],
    _softRefresh = function e() {
      return _removeListener(ScrollTrigger, "scrollEnd", e) || _refreshAll(!0);
    },
    _dispatch = function (e) {
      return (
        (_listeners[e] &&
          _listeners[e].map(function (e) {
            return e();
          })) ||
        _emptyArray
      );
    },
    _savedStyles = [],
    _revertRecorded = function (e) {
      for (var r = 0; r < _savedStyles.length; r += 5)
        (!e || (_savedStyles[r + 4] && _savedStyles[r + 4].query === e)) &&
          ((_savedStyles[r].style.cssText = _savedStyles[r + 1]),
          _savedStyles[r].getBBox &&
            _savedStyles[r].setAttribute(
              "transform",
              _savedStyles[r + 2] || ""
            ),
          (_savedStyles[r + 3].uncache = 1));
    },
    _revertAll = function (e, r) {
      var t;
      for (_i = 0; _i < _triggers.length; _i++)
        !(t = _triggers[_i]) ||
          (r && t._ctx !== r) ||
          (e ? t.kill(1) : t.revert(!0, !0));
      r && _revertRecorded(r), r || _dispatch("revert");
    },
    _clearScrollMemory = function (e, r) {
      _scrollers.cache++,
        (r || !_refreshingAll) &&
          _scrollers.forEach(function (e) {
            return _isFunction(e) && e.cacheID++ && (e.rec = 0);
          }),
        _isString(e) &&
          (_win.history.scrollRestoration = _scrollRestoration = e);
    },
    _refreshID = 0,
    _queueRefreshAll = function () {
      if (_queueRefreshID !== _refreshID) {
        var e = (_queueRefreshID = _refreshID);
        requestAnimationFrame(function () {
          return e === _refreshID && _refreshAll(!0);
        });
      }
    },
    _refreshAll = function (e, r) {
      if (!_lastScrollTime || e) {
        (_refreshingAll = ScrollTrigger.isRefreshing = !0),
          _scrollers.forEach(function (e) {
            return _isFunction(e) && e.cacheID++ && (e.rec = e());
          });
        var t = _dispatch("refreshInit");
        _sort && ScrollTrigger.sort(),
          r || _revertAll(),
          _scrollers.forEach(function (e) {
            _isFunction(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          _triggers.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          _triggers.forEach(function (e, r) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[t];
              e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[t] - n),
                e.revert(!1, 1);
            }
          }),
          _triggers.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, _maxScroll(e.scroller, e._dir))
              )
            );
          }),
          t.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          _scrollers.forEach(function (e) {
            _isFunction(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          _clearScrollMemory(_scrollRestoration, 1),
          _resizeDelay.pause(),
          _refreshID++,
          _updateAll(2),
          _triggers.forEach(function (e) {
            return _isFunction(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (_refreshingAll = ScrollTrigger.isRefreshing = !1),
          _dispatch("refresh");
      } else _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
    },
    _lastScroll = 0,
    _direction = 1,
    _updateAll = function (e) {
      if (!_refreshingAll || 2 === e) {
        (ScrollTrigger.isUpdating = !0), _primary && _primary.update(0);
        var r = _triggers.length,
          t = _getTime(),
          n = t - _time1 >= 50,
          i = r && _triggers[0].scroll();
        if (
          ((_direction = _lastScroll > i ? -1 : 1),
          (_lastScroll = i),
          n &&
            (_lastScrollTime &&
              !_pointerIsDown &&
              t - _lastScrollTime > 200 &&
              ((_lastScrollTime = 0), _dispatch("scrollEnd")),
            (_time2 = _time1),
            (_time1 = t)),
          _direction < 0)
        ) {
          for (_i = r; _i-- > 0; ) _triggers[_i] && _triggers[_i].update(0, n);
          _direction = 1;
        } else
          for (_i = 0; _i < r; _i++)
            _triggers[_i] && _triggers[_i].update(0, n);
        ScrollTrigger.isUpdating = !1;
      }
      _rafID = 0;
    },
    _propNamesToCopy = [
      _left,
      _top,
      _bottom,
      _right,
      _margin + _Bottom,
      _margin + _Right,
      _margin + _Top,
      _margin + _Left,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    _stateProps = _propNamesToCopy.concat([
      _width,
      _height,
      "boxSizing",
      "max" + _Width,
      "max" + _Height,
      "position",
      _margin,
      _padding,
      _padding + _Top,
      _padding + _Right,
      _padding + _Bottom,
      _padding + _Left,
    ]),
    _swapPinOut = function (e, r, t) {
      _setState(t);
      var n = e._gsap;
      if (n.spacerIsNative) _setState(n.spacerState);
      else if (e._gsap.swappedIn) {
        var i = r.parentNode;
        i && (i.insertBefore(e, r), i.removeChild(r));
      }
      e._gsap.swappedIn = !1;
    },
    _swapPinIn = function (e, r, t, n) {
      if (!e._gsap.swappedIn) {
        for (
          var i, o = _propNamesToCopy.length, s = r.style, a = e.style;
          o--;

        )
          s[(i = _propNamesToCopy[o])] = t[i];
        (s.position = "absolute" === t.position ? "absolute" : "relative"),
          "inline" === t.display && (s.display = "inline-block"),
          (a[_bottom] = a[_right] = "auto"),
          (s.flexBasis = t.flexBasis || "auto"),
          (s.overflow = "visible"),
          (s.boxSizing = "border-box"),
          (s[_width] = _getSize(e, _horizontal) + _px),
          (s[_height] = _getSize(e, _vertical) + _px),
          (s[_padding] = a[_margin] = a[_top] = a[_left] = "0"),
          _setState(n),
          (a[_width] = a["max" + _Width] = t[_width]),
          (a[_height] = a["max" + _Height] = t[_height]),
          (a[_padding] = t[_padding]),
          e.parentNode !== r &&
            (e.parentNode.insertBefore(r, e), r.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    _capsExp = /([A-Z])/g,
    _setState = function (e) {
      if (e) {
        var r,
          t,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || gsap.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (t = e[o + 1]),
            (r = e[o]),
            t
              ? (n[r] = t)
              : n[r] &&
                n.removeProperty(r.replace(_capsExp, "-$1").toLowerCase());
      }
    },
    _getState = function (e) {
      for (var r = _stateProps.length, t = e.style, n = [], i = 0; i < r; i++)
        n.push(_stateProps[i], t[_stateProps[i]]);
      return (n.t = e), n;
    },
    _copyState = function (e, r, t) {
      for (var n, i = [], o = e.length, s = t ? 8 : 0; s < o; s += 2)
        (n = e[s]), i.push(n, n in r ? r[n] : e[s + 1]);
      return (i.t = e.t), i;
    },
    _winOffsets = { left: 0, top: 0 },
    _parsePosition = function (e, r, t, n, i, o, s, a, l, _, c, u, g) {
      _isFunction(e) && (e = e(a)),
        _isString(e) &&
          "max" === e.substr(0, 3) &&
          (e =
            u + ("=" === e.charAt(4) ? _offsetToPx("0" + e.substr(3), t) : 0));
      var p,
        d,
        f,
        h = g ? g.time() : 0;
      if ((g && g.seek(0), _isNumber(e))) s && _positionMarker(s, t, n, !0);
      else {
        _isFunction(r) && (r = r(a));
        var m,
          v,
          S,
          y,
          b = (e || "0").split(" ");
        (f = _getTarget(r) || _body),
          ((m = _getBounds(f) || {}) && (m.left || m.top)) ||
            "none" !== _getComputedStyle(f).display ||
            ((y = f.style.display),
            (f.style.display = "block"),
            (m = _getBounds(f)),
            y ? (f.style.display = y) : f.style.removeProperty("display")),
          (v = _offsetToPx(b[0], m[n.d])),
          (S = _offsetToPx(b[1] || "0", t)),
          (e = m[n.p] - l[n.p] - _ + v + i - S),
          s && _positionMarker(s, S, n, t - S < 20 || (s._isStart && S > 20)),
          (t -= t - S);
      }
      if (o) {
        var w = e + t,
          x = o._isStart;
        (p = "scroll" + n.d2),
          _positionMarker(
            o,
            w,
            n,
            (x && w > 20) ||
              (!x &&
                (c ? Math.max(_body[p], _docEl[p]) : o.parentNode[p]) <= w + 1)
          ),
          c &&
            ((l = _getBounds(s)),
            c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + _px));
      }
      return (
        g &&
          f &&
          ((p = _getBounds(f)),
          g.seek(u),
          (d = _getBounds(f)),
          (g._caScrollDist = p[n.p] - d[n.p]),
          (e = (e / g._caScrollDist) * u)),
        g && g.seek(h),
        g ? e : Math.round(e)
      );
    },
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function (e, r, t, n) {
      if (e.parentNode !== r) {
        var i,
          o,
          s = e.style;
        if (r === _body) {
          for (i in ((e._stOrig = s.cssText), (o = _getComputedStyle(e))))
            +i ||
              _prefixExp.test(i) ||
              !o[i] ||
              "string" != typeof s[i] ||
              "0" === i ||
              (s[i] = o[i]);
          (s.top = t), (s.left = n);
        } else s.cssText = e._stOrig;
        (gsap.core.getCache(e).uncache = 1), r.appendChild(e);
      }
    },
    _getTweenCreator = function (e, r) {
      var t,
        n,
        i = _getScrollFunc(e, r),
        o = "_scroll" + r.p2,
        s = function r(s, a, l, _, c) {
          var u = r.tween,
            g = a.onComplete,
            p = {};
          return (
            (l = l || i()),
            (c = (_ && c) || 0),
            (_ = _ || s - l),
            u && u.kill(),
            (t = Math.round(l)),
            (a[o] = s),
            (a.modifiers = p),
            (p[o] = function (e) {
              return (
                (e = Math.round(i())) !== t &&
                e !== n &&
                Math.abs(e - t) > 3 &&
                Math.abs(e - n) > 3
                  ? (u.kill(), (r.tween = 0))
                  : (e = l + _ * u.ratio + c * u.ratio * u.ratio),
                (n = t),
                (t = Math.round(e))
              );
            }),
            (a.onComplete = function () {
              (r.tween = 0), g && g.call(u);
            }),
            (u = r.tween = gsap.to(e, a))
          );
        };
      return (
        (e[o] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        _addListener(e, "wheel", i.wheelHandler),
        s
      );
    };
  var ScrollTrigger = (function () {
    function e(r, t) {
      _coreInitted ||
        e.register(gsap) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(r, t);
    }
    return (
      (e.prototype.init = function (r, t) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          _enabled)
        ) {
          var n,
            i,
            o,
            s,
            a,
            l,
            _,
            c,
            u,
            g,
            p,
            d,
            f,
            h,
            m,
            v,
            S,
            y,
            b,
            w,
            x,
            T,
            A,
            P,
            k,
            I,
            R,
            O,
            L,
            z,
            E,
            C,
            D,
            F,
            M,
            B,
            N,
            H,
            W = (r = _setDefaults(
              _isString(r) || _isNumber(r) || r.nodeType ? { trigger: r } : r,
              _defaults
            )),
            V = W.onUpdate,
            q = W.toggleClass,
            j = W.id,
            Y = W.onToggle,
            U = W.onRefresh,
            G = W.scrub,
            X = W.trigger,
            K = W.pin,
            Z = W.pinSpacing,
            $ = W.invalidateOnRefresh,
            J = W.anticipatePin,
            Q = W.onScrubComplete,
            ee = W.onSnapComplete,
            re = W.once,
            te = W.snap,
            ne = W.pinReparent,
            ie = W.pinSpacer,
            oe = W.containerAnimation,
            se = W.fastScrollEnd,
            ae = W.preventOverlaps,
            le =
              r.horizontal || (r.containerAnimation && !1 !== r.horizontal)
                ? _horizontal
                : _vertical,
            _e = !G && 0 !== G,
            ce = _getTarget(r.scroller || _win),
            ue = gsap.core.getCache(ce),
            ge = _isViewport(ce),
            pe =
              "fixed" ===
              ("pinType" in r
                ? r.pinType
                : _getProxyProp(ce, "pinType") || (ge && "fixed")),
            de = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
            fe = _e && r.toggleActions.split(" "),
            he = "markers" in r ? r.markers : _defaults.markers,
            me = ge
              ? 0
              : parseFloat(_getComputedStyle(ce)["border" + le.p2 + _Width]) ||
                0,
            ve = this,
            Se =
              r.onRefreshInit &&
              function () {
                return r.onRefreshInit(ve);
              },
            ye = _getSizeFunc(ce, ge, le),
            be = _getOffsetsFunc(ce, ge),
            we = 0,
            xe = 0,
            Te = _getScrollFunc(ce, le);
          if (
            (_context(ve),
            (ve._dir = le),
            (J *= 45),
            (ve.scroller = ce),
            (ve.scroll = oe ? oe.time.bind(oe) : Te),
            (s = Te()),
            (ve.vars = r),
            (t = t || r.animation),
            "refreshPriority" in r &&
              ((_sort = 1), -9999 === r.refreshPriority && (_primary = ve)),
            (ue.tweenScroll = ue.tweenScroll || {
              top: _getTweenCreator(ce, _vertical),
              left: _getTweenCreator(ce, _horizontal),
            }),
            (ve.tweenTo = n = ue.tweenScroll[le.p]),
            (ve.scrubDuration = function (e) {
              (E = _isNumber(e) && e)
                ? z
                  ? z.duration(e)
                  : (z = gsap.to(t, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: E,
                      paused: !0,
                      onComplete: function () {
                        return Q && Q(ve);
                      },
                    }))
                : (z && z.progress(1).kill(), (z = 0));
            }),
            t &&
              ((t.vars.lazy = !1),
              t._initted ||
                (!1 !== t.vars.immediateRender &&
                  !1 !== r.immediateRender &&
                  t.duration() &&
                  t.render(0, !0, !0)),
              (ve.animation = t.pause()),
              (t.scrollTrigger = ve),
              ve.scrubDuration(G),
              (O = 0),
              j || (j = t.vars.id)),
            _triggers.push(ve),
            te &&
              ((_isObject(te) && !te.push) || (te = { snapTo: te }),
              "scrollBehavior" in _body.style &&
                gsap.set(ge ? [_body, _docEl] : ce, { scrollBehavior: "auto" }),
              _scrollers.forEach(function (e) {
                return (
                  _isFunction(e) &&
                  e.target === (ge ? _doc.scrollingElement || _docEl : ce) &&
                  (e.smooth = !1)
                );
              }),
              (o = _isFunction(te.snapTo)
                ? te.snapTo
                : "labels" === te.snapTo
                ? _getClosestLabel(t)
                : "labelsDirectional" === te.snapTo
                ? _getLabelAtDirection(t)
                : !1 !== te.directional
                ? function (e, r) {
                    return _snapDirectional(te.snapTo)(
                      e,
                      _getTime() - xe < 500 ? 0 : r.direction
                    );
                  }
                : gsap.utils.snap(te.snapTo)),
              (C = te.duration || { min: 0.1, max: 2 }),
              (C = _isObject(C) ? _clamp(C.min, C.max) : _clamp(C, C)),
              (D = gsap
                .delayedCall(te.delay || E / 2 || 0.1, function () {
                  var e = Te(),
                    r = _getTime() - xe < 500,
                    i = n.tween;
                  if (
                    !(r || Math.abs(ve.getVelocity()) < 10) ||
                    i ||
                    _pointerIsDown ||
                    we === e
                  )
                    ve.isActive && we !== e && D.restart(!0);
                  else {
                    var s = (e - l) / f,
                      a = t && !_e ? t.totalProgress() : s,
                      c = r ? 0 : ((a - L) / (_getTime() - _time2)) * 1e3 || 0,
                      u = gsap.utils.clamp(
                        -s,
                        1 - s,
                        (_abs(c / 2) * c) / 0.185
                      ),
                      g = s + (!1 === te.inertia ? 0 : u),
                      p = _clamp(0, 1, o(g, ve)),
                      d = Math.round(l + p * f),
                      h = te,
                      m = h.onStart,
                      v = h.onInterrupt,
                      S = h.onComplete;
                    if (e <= _ && e >= l && d !== e) {
                      if (i && !i._initted && i.data <= _abs(d - e)) return;
                      !1 === te.inertia && (u = p - s),
                        n(
                          d,
                          {
                            duration: C(
                              _abs(
                                (0.185 * Math.max(_abs(g - a), _abs(p - a))) /
                                  c /
                                  0.05 || 0
                              )
                            ),
                            ease: te.ease || "power3",
                            data: _abs(d - e),
                            onInterrupt: function () {
                              return D.restart(!0) && v && v(ve);
                            },
                            onComplete: function () {
                              ve.update(),
                                (we = Te()),
                                (O = L =
                                  t && !_e ? t.totalProgress() : ve.progress),
                                ee && ee(ve),
                                S && S(ve);
                            },
                          },
                          e,
                          u * f,
                          d - e - u * f
                        ),
                        m && m(ve, n.tween);
                    }
                  }
                })
                .pause())),
            j && (_ids[j] = ve),
            (H =
              (X = ve.trigger = _getTarget(X || K)) &&
              X._gsap &&
              X._gsap.stRevert) && (H = H(ve)),
            (K = !0 === K ? X : _getTarget(K)),
            _isString(q) && (q = { targets: X, className: q }),
            K &&
              (!1 === Z ||
                Z === _margin ||
                (Z =
                  !(
                    !Z &&
                    K.parentNode &&
                    K.parentNode.style &&
                    "flex" === _getComputedStyle(K.parentNode).display
                  ) && _padding),
              (ve.pin = K),
              (i = gsap.core.getCache(K)).spacer
                ? (h = i.pinState)
                : (ie &&
                    ((ie = _getTarget(ie)) &&
                      !ie.nodeType &&
                      (ie = ie.current || ie.nativeElement),
                    (i.spacerIsNative = !!ie),
                    ie && (i.spacerState = _getState(ie))),
                  (i.spacer = S = ie || _doc.createElement("div")),
                  S.classList.add("pin-spacer"),
                  j && S.classList.add("pin-spacer-" + j),
                  (i.pinState = h = _getState(K))),
              !1 !== r.force3D && gsap.set(K, { force3D: !0 }),
              (ve.spacer = S = i.spacer),
              (R = _getComputedStyle(K)),
              (A = R[Z + le.os2]),
              (b = gsap.getProperty(K)),
              (w = gsap.quickSetter(K, le.a, _px)),
              _swapPinIn(K, S, R),
              (v = _getState(K))),
            he)
          ) {
            (d = _isObject(he)
              ? _setDefaults(he, _markerDefaults)
              : _markerDefaults),
              (g = _createMarker("scroller-start", j, ce, le, d, 0)),
              (p = _createMarker("scroller-end", j, ce, le, d, 0, g)),
              (y = g["offset" + le.op.d2]);
            var Ae = _getTarget(_getProxyProp(ce, "content") || ce);
            (c = this.markerStart =
              _createMarker("start", j, Ae, le, d, y, 0, oe)),
              (u = this.markerEnd =
                _createMarker("end", j, Ae, le, d, y, 0, oe)),
              oe && (N = gsap.quickSetter([c, u], le.a, _px)),
              pe ||
                (_proxies.length && !0 === _getProxyProp(ce, "fixedMarkers")) ||
                (_makePositionable(ge ? _body : ce),
                gsap.set([g, p], { force3D: !0 }),
                (k = gsap.quickSetter(g, le.a, _px)),
                (I = gsap.quickSetter(p, le.a, _px)));
          }
          if (oe) {
            var Pe = oe.vars.onUpdate,
              ke = oe.vars.onUpdateParams;
            oe.eventCallback("onUpdate", function () {
              ve.update(0, 0, 1), Pe && Pe.apply(ke || []);
            });
          }
          (ve.previous = function () {
            return _triggers[_triggers.indexOf(ve) - 1];
          }),
            (ve.next = function () {
              return _triggers[_triggers.indexOf(ve) + 1];
            }),
            (ve.revert = function (e, r) {
              if (!r) return ve.kill(!0);
              var n = !1 !== e || !ve.enabled,
                i = _refreshing;
              n !== ve.isReverted &&
                (n &&
                  ((M = Math.max(Te(), ve.scroll.rec || 0)),
                  (F = ve.progress),
                  (B = t && t.progress())),
                c &&
                  [c, u, g, p].forEach(function (e) {
                    return (e.style.display = n ? "none" : "block");
                  }),
                n && ((_refreshing = 1), ve.update(n)),
                K &&
                  (n
                    ? _swapPinOut(K, S, h)
                    : (!ne || !ve.isActive) &&
                      _swapPinIn(K, S, _getComputedStyle(K), P)),
                n || ve.update(n),
                (_refreshing = i),
                (ve.isReverted = n));
            }),
            (ve.refresh = function (i, o) {
              if ((!_refreshing && ve.enabled) || o)
                if (K && i && _lastScrollTime)
                  _addListener(e, "scrollEnd", _softRefresh);
                else {
                  !_refreshingAll && Se && Se(ve),
                    (_refreshing = 1),
                    (xe = _getTime()),
                    n.tween && (n.tween.kill(), (n.tween = 0)),
                    z && z.pause(),
                    $ && t && t.revert({ kill: !1 }).invalidate(),
                    ve.isReverted || ve.revert(!0, !0),
                    (ve._subPinOffset = !1);
                  for (
                    var d,
                      y,
                      w,
                      A,
                      k,
                      I,
                      R,
                      O,
                      L,
                      E,
                      C = ye(),
                      N = be(),
                      H = oe ? oe.duration() : _maxScroll(ce, le),
                      W = 0,
                      V = 0,
                      q = r.end,
                      j = r.endTrigger || X,
                      Y =
                        r.start ||
                        (0 !== r.start && X ? (K ? "0 0" : "0 100%") : 0),
                      G = (ve.pinnedContainer =
                        r.pinnedContainer && _getTarget(r.pinnedContainer)),
                      J = (X && Math.max(0, _triggers.indexOf(ve))) || 0,
                      Q = J;
                    Q--;

                  )
                    (I = _triggers[Q]).end ||
                      I.refresh(0, 1) ||
                      (_refreshing = 1),
                      !(R = I.pin) ||
                        (R !== X && R !== K) ||
                        I.isReverted ||
                        (E || (E = []), E.unshift(I), I.revert(!0, !0)),
                      I !== _triggers[Q] && (J--, Q--);
                  for (
                    _isFunction(Y) && (Y = Y(ve)),
                      l =
                        _parsePosition(
                          Y,
                          X,
                          C,
                          le,
                          Te(),
                          c,
                          g,
                          ve,
                          N,
                          me,
                          pe,
                          H,
                          oe
                        ) || (K ? -0.001 : 0),
                      _isFunction(q) && (q = q(ve)),
                      _isString(q) &&
                        !q.indexOf("+=") &&
                        (~q.indexOf(" ")
                          ? (q = (_isString(Y) ? Y.split(" ")[0] : "") + q)
                          : ((W = _offsetToPx(q.substr(2), C)),
                            (q = _isString(Y) ? Y : l + W),
                            (j = X))),
                      _ =
                        Math.max(
                          l,
                          _parsePosition(
                            q || (j ? "100% 0" : H),
                            j,
                            C,
                            le,
                            Te() + W,
                            u,
                            p,
                            ve,
                            N,
                            me,
                            pe,
                            H,
                            oe
                          )
                        ) || -0.001,
                      f = _ - l || ((l -= 0.01) && 0.001),
                      W = 0,
                      Q = J;
                    Q--;

                  )
                    (R = (I = _triggers[Q]).pin) &&
                      I.start - I._pinPush <= l &&
                      !oe &&
                      I.end > 0 &&
                      ((d = I.end - I.start),
                      ((R === X && I.start - I._pinPush < l) || R === G) &&
                        !_isNumber(Y) &&
                        (W += d * (1 - I.progress)),
                      R === K && (V += d));
                  if (
                    ((l += W),
                    (_ += W),
                    (ve._pinPush = V),
                    c &&
                      W &&
                      (((d = {})[le.a] = "+=" + W),
                      G && (d[le.p] = "-=" + Te()),
                      gsap.set([c, u], d)),
                    K)
                  )
                    (d = _getComputedStyle(K)),
                      (A = le === _vertical),
                      (w = Te()),
                      (x = parseFloat(b(le.a)) + V),
                      !H &&
                        _ > 1 &&
                        ((ge ? _body : ce).style["overflow-" + le.a] =
                          "scroll"),
                      _swapPinIn(K, S, d),
                      (v = _getState(K)),
                      (y = _getBounds(K, !0)),
                      (O =
                        pe &&
                        _getScrollFunc(ce, A ? _horizontal : _vertical)()),
                      Z &&
                        (((P = [Z + le.os2, f + V + _px]).t = S),
                        (Q = Z === _padding ? _getSize(K, le) + f + V : 0) &&
                          P.push(le.d, Q + _px),
                        _setState(P),
                        G &&
                          _triggers.forEach(function (e) {
                            e.pin === G &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        pe && Te(M)),
                      pe &&
                        (((k = {
                          top: y.top + (A ? w - l : O) + _px,
                          left: y.left + (A ? O : w - l) + _px,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[_width] = k["max" + _Width] =
                          Math.ceil(y.width) + _px),
                        (k[_height] = k["max" + _Height] =
                          Math.ceil(y.height) + _px),
                        (k[_margin] =
                          k[_margin + _Top] =
                          k[_margin + _Right] =
                          k[_margin + _Bottom] =
                          k[_margin + _Left] =
                            "0"),
                        (k[_padding] = d[_padding]),
                        (k[_padding + _Top] = d[_padding + _Top]),
                        (k[_padding + _Right] = d[_padding + _Right]),
                        (k[_padding + _Bottom] = d[_padding + _Bottom]),
                        (k[_padding + _Left] = d[_padding + _Left]),
                        (m = _copyState(h, k, ne)),
                        _refreshingAll && Te(0)),
                      t
                        ? ((L = t._initted),
                          _suppressOverwrites(1),
                          t.render(t.duration(), !0, !0),
                          (T = b(le.a) - x + f + V),
                          f !== T && pe && m.splice(m.length - 2, 2),
                          t.render(0, !0, !0),
                          L || t.invalidate(!0),
                          t.parent || t.totalTime(t.totalTime()),
                          _suppressOverwrites(0))
                        : (T = f);
                  else if (X && Te() && !oe)
                    for (y = X.parentNode; y && y !== _body; )
                      y._pinOffset &&
                        ((l -= y._pinOffset), (_ -= y._pinOffset)),
                        (y = y.parentNode);
                  E &&
                    E.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (ve.start = l),
                    (ve.end = _),
                    (s = a = _refreshingAll ? M : Te()),
                    oe ||
                      _refreshingAll ||
                      (s < M && Te(M), (ve.scroll.rec = 0)),
                    ve.revert(!1, !0),
                    D &&
                      ((we = -1), ve.isActive && Te(l + f * F), D.restart(!0)),
                    (_refreshing = 0),
                    t &&
                      _e &&
                      (t._initted || B) &&
                      t.progress() !== B &&
                      t.progress(B, !0).render(t.time(), !0, !0),
                    (F !== ve.progress || oe) &&
                      (t && !_e && t.totalProgress(F, !0),
                      (ve.progress = (s - l) / f === F ? 0 : F)),
                    K && Z && (S._pinOffset = Math.round(ve.progress * T)),
                    U && !_refreshingAll && U(ve);
                }
            }),
            (ve.getVelocity = function () {
              return ((Te() - a) / (_getTime() - _time2)) * 1e3 || 0;
            }),
            (ve.endAnimation = function () {
              _endAnimation(ve.callbackAnimation),
                t &&
                  (z
                    ? z.progress(1)
                    : t.paused()
                    ? _e || _endAnimation(t, ve.direction < 0, 1)
                    : _endAnimation(t, t.reversed()));
            }),
            (ve.labelToScroll = function (e) {
              return (
                (t &&
                  t.labels &&
                  (l || ve.refresh() || l) +
                    (t.labels[e] / t.duration()) * f) ||
                0
              );
            }),
            (ve.getTrailing = function (e) {
              var r = _triggers.indexOf(ve),
                t =
                  ve.direction > 0
                    ? _triggers.slice(0, r).reverse()
                    : _triggers.slice(r + 1);
              return (
                _isString(e)
                  ? t.filter(function (r) {
                      return r.vars.preventOverlaps === e;
                    })
                  : t
              ).filter(function (e) {
                return ve.direction > 0 ? e.end <= l : e.start >= _;
              });
            }),
            (ve.update = function (e, r, i) {
              if (!oe || i || e) {
                var o,
                  c,
                  u,
                  p,
                  d,
                  h,
                  y,
                  b = _refreshingAll ? M : ve.scroll(),
                  P = e ? 0 : (b - l) / f,
                  R = P < 0 ? 0 : P > 1 ? 1 : P || 0,
                  E = ve.progress;
                if (
                  (r &&
                    ((a = s),
                    (s = oe ? Te() : b),
                    te && ((L = O), (O = t && !_e ? t.totalProgress() : R))),
                  J &&
                    !R &&
                    K &&
                    !_refreshing &&
                    !_startup &&
                    _lastScrollTime &&
                    l < b + ((b - a) / (_getTime() - _time2)) * J &&
                    (R = 1e-4),
                  R !== E && ve.enabled)
                ) {
                  if (
                    ((p =
                      (d =
                        (o = ve.isActive = !!R && R < 1) !== (!!E && E < 1)) ||
                      !!R != !!E),
                    (ve.direction = R > E ? 1 : -1),
                    (ve.progress = R),
                    p &&
                      !_refreshing &&
                      ((c = R && !E ? 0 : 1 === R ? 1 : 1 === E ? 2 : 3),
                      _e &&
                        ((u =
                          (!d && "none" !== fe[c + 1] && fe[c + 1]) || fe[c]),
                        (y =
                          t && ("complete" === u || "reset" === u || u in t)))),
                    ae &&
                      (d || y) &&
                      (y || G || !t) &&
                      (_isFunction(ae)
                        ? ae(ve)
                        : ve.getTrailing(ae).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    _e ||
                      (!z || _refreshing || _startup
                        ? t && t.totalProgress(R, !!_refreshing)
                        : ((oe || (_primary && _primary !== ve)) &&
                            z.render(z._dp._time - z._start),
                          z.resetTo
                            ? z.resetTo("totalProgress", R, t._tTime / t._tDur)
                            : ((z.vars.totalProgress = R),
                              z.invalidate().restart()))),
                    K)
                  )
                    if ((e && Z && (S.style[Z + le.os2] = A), pe)) {
                      if (p) {
                        if (
                          ((h =
                            !e &&
                            R > E &&
                            _ + 1 > b &&
                            b + 1 >= _maxScroll(ce, le)),
                          ne)
                        )
                          if (e || (!o && !h)) _reparent(K, S);
                          else {
                            var C = _getBounds(K, !0),
                              F = b - l;
                            _reparent(
                              K,
                              _body,
                              C.top + (le === _vertical ? F : 0) + _px,
                              C.left + (le === _vertical ? 0 : F) + _px
                            );
                          }
                        _setState(o || h ? m : v),
                          (T !== f && R < 1 && o) ||
                            w(x + (1 !== R || h ? 0 : T));
                      }
                    } else w(_round(x + T * R));
                  te && !n.tween && !_refreshing && !_startup && D.restart(!0),
                    q &&
                      (d || (re && R && (R < 1 || !_limitCallbacks))) &&
                      _toArray(q.targets).forEach(function (e) {
                        return e.classList[o || re ? "add" : "remove"](
                          q.className
                        );
                      }),
                    V && !_e && !e && V(ve),
                    p && !_refreshing
                      ? (_e &&
                          (y &&
                            ("complete" === u
                              ? t.pause().totalProgress(1)
                              : "reset" === u
                              ? t.restart(!0).pause()
                              : "restart" === u
                              ? t.restart(!0)
                              : t[u]()),
                          V && V(ve)),
                        (!d && _limitCallbacks) ||
                          (Y && d && _callback(ve, Y),
                          de[c] && _callback(ve, de[c]),
                          re && (1 === R ? ve.kill(!1, 1) : (de[c] = 0)),
                          d ||
                            (de[(c = 1 === R ? 1 : 3)] &&
                              _callback(ve, de[c]))),
                        se &&
                          !o &&
                          Math.abs(ve.getVelocity()) >
                            (_isNumber(se) ? se : 2500) &&
                          (_endAnimation(ve.callbackAnimation),
                          z
                            ? z.progress(1)
                            : _endAnimation(t, "reverse" === u ? 1 : !R, 1)))
                      : _e && V && !_refreshing && V(ve);
                }
                if (I) {
                  var B = oe
                    ? (b / oe.duration()) * (oe._caScrollDist || 0)
                    : b;
                  k(B + (g._isFlipped ? 1 : 0)), I(B);
                }
                N && N((-b / oe.duration()) * (oe._caScrollDist || 0));
              }
            }),
            (ve.enable = function (r, t) {
              ve.enabled ||
                ((ve.enabled = !0),
                _addListener(ce, "resize", _onResize),
                _addListener(ge ? _doc : ce, "scroll", _onScroll),
                Se && _addListener(e, "refreshInit", Se),
                !1 !== r && ((ve.progress = F = 0), (s = a = we = Te())),
                !1 !== t && ve.refresh());
            }),
            (ve.getTween = function (e) {
              return e && n ? n.tween : z;
            }),
            (ve.setPositions = function (e, r) {
              K &&
                ((x += e - l),
                (T += r - e - f),
                Z === _padding && ve.adjustPinSpacing(r - e - f)),
                (ve.start = l = e),
                (ve.end = _ = r),
                (f = r - e),
                ve.update();
            }),
            (ve.adjustPinSpacing = function (e) {
              if (P) {
                var r = P.indexOf(le.d) + 1;
                (P[r] = parseFloat(P[r]) + e + _px),
                  (P[1] = parseFloat(P[1]) + e + _px),
                  _setState(P);
              }
            }),
            (ve.disable = function (r, t) {
              if (
                ve.enabled &&
                (!1 !== r && ve.revert(!0, !0),
                (ve.enabled = ve.isActive = !1),
                t || (z && z.pause()),
                (M = 0),
                i && (i.uncache = 1),
                Se && _removeListener(e, "refreshInit", Se),
                D && (D.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                !ge)
              ) {
                for (var o = _triggers.length; o--; )
                  if (_triggers[o].scroller === ce && _triggers[o] !== ve)
                    return;
                _removeListener(ce, "resize", _onResize),
                  _removeListener(ce, "scroll", _onScroll);
              }
            }),
            (ve.kill = function (e, n) {
              ve.disable(e, n), z && !n && z.kill(), j && delete _ids[j];
              var o = _triggers.indexOf(ve);
              o >= 0 && _triggers.splice(o, 1),
                o === _i && _direction > 0 && _i--,
                (o = 0),
                _triggers.forEach(function (e) {
                  return e.scroller === ve.scroller && (o = 1);
                }),
                o || _refreshingAll || (ve.scroll.rec = 0),
                t &&
                  ((t.scrollTrigger = null),
                  e && t.revert({ kill: !1 }),
                  n || t.kill()),
                c &&
                  [c, u, g, p].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                _primary === ve && (_primary = 0),
                K &&
                  (i && (i.uncache = 1),
                  (o = 0),
                  _triggers.forEach(function (e) {
                    return e.pin === K && o++;
                  }),
                  o || (i.spacer = 0)),
                r.onKill && r.onKill(ve);
            }),
            ve.enable(!1, !1),
            H && H(ve),
            t && t.add && !f
              ? gsap.delayedCall(0.01, function () {
                  return l || _ || ve.refresh();
                }) &&
                (f = 0.01) &&
                (l = _ = 0)
              : ve.refresh(),
            K && _queueRefreshAll();
        } else this.update = this.refresh = this.kill = _passThrough;
      }),
      (e.register = function (r) {
        return (
          _coreInitted ||
            ((gsap = r || _getGSAP()),
            _windowExists() && window.document && e.enable(),
            (_coreInitted = _enabled)),
          _coreInitted
        );
      }),
      (e.defaults = function (e) {
        if (e) for (var r in e) _defaults[r] = e[r];
        return _defaults;
      }),
      (e.disable = function (e, r) {
        (_enabled = 0),
          _triggers.forEach(function (t) {
            return t[r ? "kill" : "disable"](e);
          }),
          _removeListener(_win, "wheel", _onScroll),
          _removeListener(_doc, "scroll", _onScroll),
          clearInterval(_syncInterval),
          _removeListener(_doc, "touchcancel", _passThrough),
          _removeListener(_body, "touchstart", _passThrough),
          _multiListener(
            _removeListener,
            _doc,
            "pointerdown,touchstart,mousedown",
            _pointerDownHandler
          ),
          _multiListener(
            _removeListener,
            _doc,
            "pointerup,touchend,mouseup",
            _pointerUpHandler
          ),
          _resizeDelay.kill(),
          _iterateAutoRefresh(_removeListener);
        for (var t = 0; t < _scrollers.length; t += 3)
          _wheelListener(_removeListener, _scrollers[t], _scrollers[t + 1]),
            _wheelListener(_removeListener, _scrollers[t], _scrollers[t + 2]);
      }),
      (e.enable = function () {
        if (
          ((_win = window),
          (_doc = document),
          (_docEl = _doc.documentElement),
          (_body = _doc.body),
          gsap &&
            ((_toArray = gsap.utils.toArray),
            (_clamp = gsap.utils.clamp),
            (_context = gsap.core.context || _passThrough),
            (_suppressOverwrites =
              gsap.core.suppressOverwrites || _passThrough),
            (_scrollRestoration = _win.history.scrollRestoration || "auto"),
            gsap.core.globals("ScrollTrigger", e),
            _body))
        ) {
          (_enabled = 1),
            Observer.register(gsap),
            (e.isTouch = Observer.isTouch),
            (_fixIOSBug =
              Observer.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            _addListener(_win, "wheel", _onScroll),
            (_root = [_win, _doc, _docEl, _body]),
            gsap.matchMedia
              ? ((e.matchMedia = function (e) {
                  var r,
                    t = gsap.matchMedia();
                  for (r in e) t.add(r, e[r]);
                  return t;
                }),
                gsap.addEventListener("matchMediaInit", function () {
                  return _revertAll();
                }),
                gsap.addEventListener("matchMediaRevert", function () {
                  return _revertRecorded();
                }),
                gsap.addEventListener("matchMedia", function () {
                  _refreshAll(0, 1), _dispatch("matchMedia");
                }),
                gsap.matchMedia("(orientation: portrait)", function () {
                  return _setBaseDimensions(), _setBaseDimensions;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            _setBaseDimensions(),
            _addListener(_doc, "scroll", _onScroll);
          var r,
            t,
            n = _body.style,
            i = n.borderTopStyle,
            o = gsap.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              r = _getBounds(_body),
              _vertical.m = Math.round(r.top + _vertical.sc()) || 0,
              _horizontal.m = Math.round(r.left + _horizontal.sc()) || 0,
              i ? (n.borderTopStyle = i) : n.removeProperty("border-top-style"),
              _syncInterval = setInterval(_sync, 250),
              gsap.delayedCall(0.5, function () {
                return (_startup = 0);
              }),
              _addListener(_doc, "touchcancel", _passThrough),
              _addListener(_body, "touchstart", _passThrough),
              _multiListener(
                _addListener,
                _doc,
                "pointerdown,touchstart,mousedown",
                _pointerDownHandler
              ),
              _multiListener(
                _addListener,
                _doc,
                "pointerup,touchend,mouseup",
                _pointerUpHandler
              ),
              _transformProp = gsap.utils.checkPrefix("transform"),
              _stateProps.push(_transformProp),
              _coreInitted = _getTime(),
              _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause(),
              _autoRefresh = [
                _doc,
                "visibilitychange",
                function () {
                  var e = _win.innerWidth,
                    r = _win.innerHeight;
                  _doc.hidden
                    ? ((_prevWidth = e), (_prevHeight = r))
                    : (_prevWidth === e && _prevHeight === r) || _onResize();
                },
                _doc,
                "DOMContentLoaded",
                _refreshAll,
                _win,
                "load",
                _refreshAll,
                _win,
                "resize",
                _onResize,
              ],
              _iterateAutoRefresh(_addListener),
              _triggers.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < _scrollers.length;
            t += 3
          )
            _wheelListener(_removeListener, _scrollers[t], _scrollers[t + 1]),
              _wheelListener(_removeListener, _scrollers[t], _scrollers[t + 2]);
        }
      }),
      (e.config = function (r) {
        "limitCallbacks" in r && (_limitCallbacks = !!r.limitCallbacks);
        var t = r.syncInterval;
        (t && clearInterval(_syncInterval)) ||
          ((_syncInterval = t) && setInterval(_sync, t)),
          "ignoreMobileResize" in r &&
            (_ignoreMobileResize = 1 === e.isTouch && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (_iterateAutoRefresh(_removeListener) ||
              _iterateAutoRefresh(_addListener, r.autoRefreshEvents || "none"),
            (_ignoreResize =
              -1 === (r.autoRefreshEvents + "").indexOf("resize")));
      }),
      (e.scrollerProxy = function (e, r) {
        var t = _getTarget(e),
          n = _scrollers.indexOf(t),
          i = _isViewport(t);
        ~n && _scrollers.splice(n, i ? 6 : 2),
          r &&
            (i
              ? _proxies.unshift(_win, r, _body, r, _docEl, r)
              : _proxies.unshift(t, r));
      }),
      (e.clearMatchMedia = function (e) {
        _triggers.forEach(function (r) {
          return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (e, r, t) {
        var n = (_isString(e) ? _getTarget(e) : e).getBoundingClientRect(),
          i = n[t ? _width : _height] * r || 0;
        return t
          ? n.right - i > 0 && n.left + i < _win.innerWidth
          : n.bottom - i > 0 && n.top + i < _win.innerHeight;
      }),
      (e.positionInViewport = function (e, r, t) {
        _isString(e) && (e = _getTarget(e));
        var n = e.getBoundingClientRect(),
          i = n[t ? _width : _height],
          o =
            null == r
              ? i / 2
              : r in _keywords
              ? _keywords[r] * i
              : ~r.indexOf("%")
              ? (parseFloat(r) * i) / 100
              : parseFloat(r) || 0;
        return t
          ? (n.left + o) / _win.innerWidth
          : (n.top + o) / _win.innerHeight;
      }),
      (e.killAll = function (e) {
        if (
          (_triggers.forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var r = _listeners.killAll || [];
          (_listeners = {}),
            r.forEach(function (e) {
              return e();
            });
        }
      }),
      e
    );
  })();
  (ScrollTrigger.version = "3.11.3"),
    (ScrollTrigger.saveStyles = function (e) {
      return e
        ? _toArray(e).forEach(function (e) {
            if (e && e.style) {
              var r = _savedStyles.indexOf(e);
              r >= 0 && _savedStyles.splice(r, 5),
                _savedStyles.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  gsap.core.getCache(e),
                  _context()
                );
            }
          })
        : _savedStyles;
    }),
    (ScrollTrigger.revert = function (e, r) {
      return _revertAll(!e, r);
    }),
    (ScrollTrigger.create = function (e, r) {
      return new ScrollTrigger(e, r);
    }),
    (ScrollTrigger.refresh = function (e) {
      return e
        ? _onResize()
        : (_coreInitted || ScrollTrigger.register()) && _refreshAll(!0);
    }),
    (ScrollTrigger.update = _updateAll),
    (ScrollTrigger.clearScrollMemory = _clearScrollMemory),
    (ScrollTrigger.maxScroll = function (e, r) {
      return _maxScroll(e, r ? _horizontal : _vertical);
    }),
    (ScrollTrigger.getScrollFunc = function (e, r) {
      return _getScrollFunc(_getTarget(e), r ? _horizontal : _vertical);
    }),
    (ScrollTrigger.getById = function (e) {
      return _ids[e];
    }),
    (ScrollTrigger.getAll = function () {
      return _triggers.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ScrollTrigger.isScrolling = function () {
      return !!_lastScrollTime;
    }),
    (ScrollTrigger.snapDirectional = _snapDirectional),
    (ScrollTrigger.addEventListener = function (e, r) {
      var t = _listeners[e] || (_listeners[e] = []);
      ~t.indexOf(r) || t.push(r);
    }),
    (ScrollTrigger.removeEventListener = function (e, r) {
      var t = _listeners[e],
        n = t && t.indexOf(r);
      n >= 0 && t.splice(n, 1);
    }),
    (ScrollTrigger.batch = function (e, r) {
      var t,
        n = [],
        i = {},
        o = r.interval || 0.016,
        s = r.batchMax || 1e9,
        a = function (e, r) {
          var t = [],
            n = [],
            i = gsap
              .delayedCall(o, function () {
                r(t, n), (t = []), (n = []);
              })
              .pause();
          return function (e) {
            t.length || i.restart(!0),
              t.push(e.trigger),
              n.push(e),
              s <= t.length && i.progress(1);
          };
        };
      for (t in r)
        i[t] =
          "on" === t.substr(0, 2) && _isFunction(r[t]) && "onRefreshInit" !== t
            ? a(0, r[t])
            : r[t];
      return (
        _isFunction(s) &&
          ((s = s()),
          _addListener(ScrollTrigger, "refresh", function () {
            return (s = r.batchMax());
          })),
        _toArray(e).forEach(function (e) {
          var r = {};
          for (t in i) r[t] = i[t];
          (r.trigger = e), n.push(ScrollTrigger.create(r));
        }),
        n
      );
    });
  var _inputIsFocused,
    _clampScrollAndGetDurationMultiplier = function (e, r, t, n) {
      return (
        r > n ? e(n) : r < 0 && e(0),
        t > n ? (n - r) / (t - r) : t < 0 ? r / (r - t) : 1
      );
    },
    _allowNativePanning = function e(r, t) {
      !0 === t
        ? r.style.removeProperty("touch-action")
        : (r.style.touchAction =
            !0 === t
              ? "auto"
              : t
              ? "pan-" + t + (Observer.isTouch ? " pinch-zoom" : "")
              : "none"),
        r === _docEl && e(_body, t);
    },
    _overflow = { auto: 1, scroll: 1 },
    _nestedScroll = function (e) {
      var r,
        t = e.event,
        n = e.target,
        i = e.axis,
        o = (t.changedTouches ? t.changedTouches[0] : t).target,
        s = o._gsap || gsap.core.getCache(o),
        a = _getTime();
      if (!s._isScrollT || a - s._isScrollT > 2e3) {
        for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode;
        (s._isScroll =
          o &&
          !_isViewport(o) &&
          o !== n &&
          (_overflow[(r = _getComputedStyle(o)).overflowY] ||
            _overflow[r.overflowX])),
          (s._isScrollT = a);
      }
      (s._isScroll || "x" === i) && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    _inputObserver = function (e, r, t, n) {
      return Observer.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: (n = n && _nestedScroll),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return (
            t &&
            _addListener(_doc, Observer.eventTypes[0], _captureInputs, !1, !0)
          );
        },
        onDisable: function () {
          return _removeListener(
            _doc,
            Observer.eventTypes[0],
            _captureInputs,
            !0
          );
        },
      });
    },
    _inputExp = /(input|label|select|textarea)/i,
    _captureInputs = function (e) {
      var r = _inputExp.test(e.target.tagName);
      (r || _inputIsFocused) && ((e._gsapAllow = !0), (_inputIsFocused = r));
    },
    _getScrollNormalizer = function (e) {
      _isObject(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var r,
        t,
        n,
        i,
        o,
        s,
        a,
        l,
        _ = e,
        c = _.normalizeScrollX,
        u = _.momentum,
        g = _.allowNestedScroll,
        p = _getTarget(e.target) || _docEl,
        d = gsap.core.globals().ScrollSmoother,
        f = d && d.get(),
        h =
          _fixIOSBug &&
          ((e.content && _getTarget(e.content)) ||
            (f && !1 !== e.content && !f.smooth() && f.content())),
        m = _getScrollFunc(p, _vertical),
        v = _getScrollFunc(p, _horizontal),
        S = 1,
        y =
          (Observer.isTouch && _win.visualViewport
            ? _win.visualViewport.scale * _win.visualViewport.width
            : _win.outerWidth) / _win.innerWidth,
        b = 0,
        w = _isFunction(u)
          ? function () {
              return u(r);
            }
          : function () {
              return u || 2.8;
            },
        x = _inputObserver(p, e.type, !0, g),
        T = function () {
          return (i = !1);
        },
        A = _passThrough,
        P = _passThrough,
        k = function () {
          (t = _maxScroll(p, _vertical)),
            (P = _clamp(_fixIOSBug ? 1 : 0, t)),
            c && (A = _clamp(0, _maxScroll(p, _horizontal))),
            (n = _refreshID);
        },
        I = function () {
          (h._gsap.y = _round(parseFloat(h._gsap.y) + m.offset) + "px"),
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(h._gsap.y) +
              ", 0, 1)"),
            (m.offset = m.cacheID = 0);
        },
        R = function () {
          k(),
            o.isActive() &&
              o.vars.scrollY > t &&
              (m() > t ? o.progress(1) && m(t) : o.resetTo("scrollY", t));
        };
      return (
        h && gsap.set(h, { y: "+=0" }),
        (e.ignoreCheck = function (e) {
          return (
            (_fixIOSBug &&
              "touchmove" === e.type &&
              (function () {
                if (i) {
                  requestAnimationFrame(T);
                  var e = _round(r.deltaY / 2),
                    t = P(m.v - e);
                  if (h && t !== m.v + m.offset) {
                    m.offset = t - m.v;
                    var n = _round(
                      (parseFloat(h && h._gsap.y) || 0) - m.offset
                    );
                    (h.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      n +
                      ", 0, 1)"),
                      (h._gsap.y = n + "px"),
                      (m.cacheID = _scrollers.cache),
                      _updateAll();
                  }
                  return !0;
                }
                m.offset && I(), (i = !0);
              })()) ||
            (S > 1.05 && "touchstart" !== e.type) ||
            r.isGesturing ||
            (e.touches && e.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          var e = S;
          (S = _round(
            ((_win.visualViewport && _win.visualViewport.scale) || 1) / y
          )),
            o.pause(),
            e !== S && _allowNativePanning(p, S > 1.01 || (!c && "x")),
            (s = v()),
            (a = m()),
            k(),
            (n = _refreshID);
        }),
        (e.onRelease = e.onGestureStart =
          function (e, r) {
            if ((m.offset && I(), r)) {
              _scrollers.cache++;
              var n,
                i,
                s = w();
              c &&
                ((i = (n = v()) + (0.05 * s * -e.velocityX) / 0.227),
                (s *= _clampScrollAndGetDurationMultiplier(
                  v,
                  n,
                  i,
                  _maxScroll(p, _horizontal)
                )),
                (o.vars.scrollX = A(i))),
                (i = (n = m()) + (0.05 * s * -e.velocityY) / 0.227),
                (s *= _clampScrollAndGetDurationMultiplier(
                  m,
                  n,
                  i,
                  _maxScroll(p, _vertical)
                )),
                (o.vars.scrollY = P(i)),
                o.invalidate().duration(s).play(0.01),
                ((_fixIOSBug && o.vars.scrollY >= t) || n >= t - 1) &&
                  gsap.to({}, { onUpdate: R, duration: s });
            } else l.restart(!0);
          }),
        (e.onWheel = function () {
          o._ts && o.pause(),
            _getTime() - b > 1e3 && ((n = 0), (b = _getTime()));
        }),
        (e.onChange = function (e, r, t, i, o) {
          if (
            (_refreshID !== n && k(),
            r && c && v(A(i[2] === r ? s + (e.startX - e.x) : v() + r - i[1])),
            t)
          ) {
            m.offset && I();
            var l = o[2] === t,
              _ = l ? a + e.startY - e.y : m() + t - o[1],
              u = P(_);
            l && _ !== u && (a += u - _), m(u);
          }
          (t || r) && _updateAll();
        }),
        (e.onEnable = function () {
          _allowNativePanning(p, !c && "x"),
            ScrollTrigger.addEventListener("refresh", R),
            _addListener(_win, "resize", R),
            m.smooth &&
              ((m.target.style.scrollBehavior = "auto"),
              (m.smooth = v.smooth = !1)),
            x.enable();
        }),
        (e.onDisable = function () {
          _allowNativePanning(p, !0),
            _removeListener(_win, "resize", R),
            ScrollTrigger.removeEventListener("refresh", R),
            x.kill();
        }),
        (e.lockAxis = !1 !== e.lockAxis),
        ((r = new Observer(e)).iOS = _fixIOSBug),
        _fixIOSBug && !m() && m(1),
        _fixIOSBug && gsap.ticker.add(_passThrough),
        (l = r._dc),
        (o = gsap.to(r, {
          ease: "power4",
          paused: !0,
          scrollX: c ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          onComplete: l.vars.onComplete,
        })),
        r
      );
    };
  (ScrollTrigger.sort = function (e) {
    return _triggers.sort(
      e ||
        function (e, r) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (r.start + -1e6 * (r.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (ScrollTrigger.observe = function (e) {
      return new Observer(e);
    }),
    (ScrollTrigger.normalizeScroll = function (e) {
      if (void 0 === e) return _normalizer;
      if (!0 === e && _normalizer) return _normalizer.enable();
      if (!1 === e) return _normalizer && _normalizer.kill();
      var r = e instanceof Observer ? e : _getScrollNormalizer(e);
      return (
        _normalizer && _normalizer.target === r.target && _normalizer.kill(),
        _isViewport(r.target) && (_normalizer = r),
        r
      );
    }),
    (ScrollTrigger.core = {
      _getVelocityProp: _getVelocityProp,
      _inputObserver: _inputObserver,
      _scrollers: _scrollers,
      _proxies: _proxies,
      bridge: {
        ss: function () {
          _lastScrollTime || _dispatch("scrollStart"),
            (_lastScrollTime = _getTime());
        },
        ref: function () {
          return _refreshing;
        },
      },
    }),
    _getGSAP() && gsap.registerPlugin(ScrollTrigger);

  gsapWithCSS.registerPlugin(ScrollTrigger);
  const { merge: merge } = window._,
    showcaseParallaxInit = () => {
      const { getData: r } = window.phoenix.utils,
        e = document.querySelectorAll("[data-gsap]"),
        o = document.querySelectorAll("[data-gsap-parallax]");
      o &&
        Array.from(o).forEach((e) => {
          const o = r(e, "gsap-parallax"),
            t = merge(
              {
                ease: "none",
                scrollTrigger: {
                  trigger: e,
                  scrub: !0,
                  start: "top bottom",
                  toggleActions: "play none none reverse",
                },
              },
              o
            );
          gsapWithCSS.to(e, t);
        }),
        e &&
          Array.from(e).forEach((e) => {
            const o = r(e, "gsap");
            gsapWithCSS.to(e, {
              y: o,
              ease: "none",
              scrollTrigger: {
                trigger: ".gsap",
                scrub: !0,
                start: "+=450 bottom",
                toggleActions: "play none none reverse",
              },
            });
          }),
        gsapWithCSS.to(".feature-figma-img", {
          y: "-50%",
          scrollTrigger: {
            trigger: ".feature-figma-img",
            toggleActions: "play none none reverse",
            scrub: !0,
            start: "top bottom",
          },
        }),
        gsapWithCSS.to(".bg-gradient-figma", {
          y: "-90%",
          scrollTrigger: {
            trigger: ".bg-gradient-figma",
            toggleActions: "play none none reverse",
            scrub: !0,
            start: "top bottom",
            end: "top -20%",
          },
        });
    };

  const { docReady: docReady } = window.phoenix.utils;
  docReady(showcaseParallaxInit);
});
//# sourceMappingURL=showcase.js.map
