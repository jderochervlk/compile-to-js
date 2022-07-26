;(() => {
  var Va = {
    compose: function (n) {
      return function (r) {
        return function (t) {
          return n(r(t))
        }
      }
    },
  }
  var X = function (n) {
      return n.identity
    },
    Z = {
      identity: function (n) {
        return n
      },
      Semigroupoid0: function () {
        return Va
      },
    }
  var Dr = !0
  var bn = function (n) {
      return function (r) {
        return function (t) {
          return n(t)(r)
        }
      }
    },
    J = function (n) {
      return function (r) {
        return n
      }
    }
  var $f = function (n) {
    return function (r) {
      for (var t = r.length, e = new Array(t), o = 0; o < t; o++) e[o] = n(r[o])
      return e
    }
  }
  var d = function (n) {
    return n.map
  }
  var On = function (n) {
      return d(n)(J(void 0))
    },
    Xe = function (n) {
      var r = d(n)
      return function (t) {
        return function (e) {
          return r(J(e))(t)
        }
      }
    }
  var Sr = { map: $f }
  var g_ = X(Z)
  var En = function (n) {
    return n.apply
  }
  var Ye = function (n) {
    var r = En(n),
      t = d(n.Functor0())
    return function (e) {
      return function (o) {
        return r(t(J(g_))(e))(o)
      }
    }
  }
  var E = function (n) {
      return n.pure
    },
    Ze = function (n) {
      var r = E(n)
      return function (t) {
        return function (e) {
          if (!t) return e
          if (t) return r(void 0)
          throw new Error(
            'Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): ' +
              [t.constructor.name, e.constructor.name]
          )
        }
      }
    },
    _t = function (n) {
      var r = E(n)
      return function (t) {
        return function (e) {
          if (t) return e
          if (!t) return r(void 0)
          throw new Error(
            'Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): ' +
              [t.constructor.name, e.constructor.name]
          )
        }
      }
    },
    na = function (n) {
      var r = En(n.Apply0()),
        t = E(n)
      return function (e) {
        return function (o) {
          return r(t(e))(o)
        }
      }
    }
  var Uf = function (n) {
    return function (r) {
      return n.length === 0 ? r : r.length === 0 ? n : n.concat(r)
    }
  }
  var Te = { append: Uf }
  var G = function (n) {
    return n.append
  }
  var E_ = String.fromCharCode(65535),
    M_ = String.fromCharCode(0),
    F_ = Number.POSITIVE_INFINITY,
    w_ = Number.NEGATIVE_INFINITY
  var kf = function (n) {
    return function (r) {
      return function (t) {
        return function (e) {
          return function (o) {
            return e < o ? n : e === o ? r : t
          }
        }
      }
    }
  }
  var zf = kf
  var Vf = kf
  var Qf = function (n) {
    return function (r) {
      return n === r
    }
  }
  var Jf = Qf
  var Gf = Qf
  var Ce = { eq: Gf }
  var Ja = { eq: Jf }
  var A = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    W = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    P = (function () {
      function n() {}
      return (n.value = new n()), n
    })()
  var Wr = (function () {
    return {
      compare: Vf(A.value)(P.value)(W.value),
      Eq0: function () {
        return Ce
      },
    }
  })()
  var Qr = (function () {
    return {
      compare: zf(A.value)(P.value)(W.value),
      Eq0: function () {
        return Ja
      },
    }
  })()
  var rn = function (n) {
    return n.compare
  }
  var B_ = X(Z),
    y = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    D = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })()
  var An = function (n) {
      return function (r) {
        return function (t) {
          if (t instanceof y) return n
          if (t instanceof D) return r(t.value0)
          throw new Error(
            'Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): ' +
              [n.constructor.name, r.constructor.name, t.constructor.name]
          )
        }
      }
    },
    ee = An(!0)(J(!1)),
    ta = An(!1)(J(!0))
  var rr = {
      map: function (n) {
        return function (r) {
          return r instanceof D ? new D(n(r.value0)) : y.value
        }
      },
    },
    k_ = d(rr)
  var rt = function (n) {
      return An(n)(B_)
    },
    Ee = function () {
      return function (n) {
        if (n instanceof D) return n.value0
        throw new Error(
          'Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): ' +
            [n.constructor.name]
        )
      }
    }
  var ja = {
    apply: function (n) {
      return function (r) {
        if (n instanceof D) return k_(n.value0)(r)
        if (n instanceof y) return y.value
        throw new Error(
          'Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): ' +
            [n.constructor.name, r.constructor.name]
        )
      }
    },
    Functor0: function () {
      return rr
    },
  }
  var tt = {
    bind: function (n) {
      return function (r) {
        if (n instanceof D) return r(n.value0)
        if (n instanceof y) return y.value
        throw new Error(
          'Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): ' +
            [n.constructor.name, r.constructor.name]
        )
      }
    },
    Apply0: function () {
      return ja
    },
  }
  var In = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    xn = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })()
  var At = function (n) {
    return function (r) {
      return function (t) {
        if (t instanceof In) return n(t.value0)
        if (t instanceof xn) return r(t.value0)
        throw new Error(
          'Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): ' +
            [n.constructor.name, r.constructor.name, t.constructor.name]
        )
      }
    }
  }
  var Yf = function (n) {
      return function (r) {
        return n && r
      }
    },
    Zf = function (n) {
      return function (r) {
        return n || r
      }
    },
    nc = function (n) {
      return !n
    }
  var oa = function (n) {
    return n.tt
  }
  var Nt = function (n) {
    return n.not
  }
  var Lu = function (n) {
    return n.implies
  }
  var ua = function (n) {
    return n.ff
  }
  var Me = function (n) {
      return n.disj
    },
    et = {
      ff: !1,
      tt: !0,
      implies: function (n) {
        return function (r) {
          return Me(et)(Nt(et)(n))(r)
        }
      },
      conj: Yf,
      disj: Zf,
      not: nc,
    }
  var ia = function (n) {
      return n.conj
    },
    Iu = function (n) {
      var r = ua(n),
        t = oa(n),
        e = Lu(n),
        o = ia(n),
        u = Me(n),
        l = Nt(n)
      return {
        ff: function (c) {
          return r
        },
        tt: function (c) {
          return t
        },
        implies: function (c) {
          return function (i) {
            return function (s) {
              return e(c(s))(i(s))
            }
          }
        },
        conj: function (c) {
          return function (i) {
            return function (s) {
              return o(c(s))(i(s))
            }
          }
        },
        disj: function (c) {
          return function (i) {
            return function (s) {
              return u(c(s))(i(s))
            }
          }
        },
        not: function (c) {
          return function (i) {
            return l(c(i))
          }
        },
      }
    }
  var Mn = function (n) {
    return n.mempty
  }
  var j = (function () {
    function n(r, t) {
      ;(this.value0 = r), (this.value1 = t)
    }
    return (
      (n.create = function (r) {
        return function (t) {
          return new n(r, t)
        }
      }),
      n
    )
  })()
  var pr = function (n) {
    return n.value1
  }
  var ae = {
    map: function (n) {
      return function (r) {
        return new j(r.value0, n(r.value1))
      }
    },
  }
  var Fr = function (n) {
    return n.value0
  }
  var Ht = function (n) {
    return n.bimap
  }
  var Dt = function (n) {
    return n.discard
  }
  var V = function (n) {
      return n.bind
    },
    Zn = function (n) {
      return bn(V(n))
    },
    xu = function (n) {
      var r = Zn(n)
      return function (t) {
        return function (e) {
          return function (o) {
            return r(t)(e(o))
          }
        }
      }
    }
  var gt = {
    discard: function (n) {
      return V(n)
    },
  }
  var wr = function (n) {
    return n.empty
  }
  var g = function (n) {
    return n
  }
  var Hu = function () {
    return g
  }
  var Z_ = Hu()
  var Pr = function () {
    return Z_
  }
  var Su = g,
    uc = g
  var ic = function (n) {
      return function (r) {
        return function (t) {
          for (var e = r, o = t.length, u = o - 1; u >= 0; u--) e = n(t[u])(e)
          return e
        }
      }
    },
    fc = function (n) {
      return function (r) {
        return function (t) {
          for (var e = r, o = t.length, u = 0; u < o; u++) e = n(e)(t[u])
          return e
        }
      }
    }
  var $n = function (n) {
    return n.foldr
  }
  var nr = function (n) {
      var r = Ye(n.Apply0()),
        t = E(n)
      return function (e) {
        var o = $n(e)
        return function (u) {
          return o(function (l) {
            return r(u(l))
          })(t(void 0))
        }
      }
    },
    to = function (n) {
      var r = nr(n)
      return function (t) {
        return bn(r(t))
      }
    }
  var qn = function (n) {
    return n.foldl
  }
  var hr = {
    foldr: function (n) {
      return function (r) {
        return function (t) {
          if (t instanceof y) return r
          if (t instanceof D) return n(t.value0)(r)
          throw new Error(
            'Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): ' +
              [n.constructor.name, r.constructor.name, t.constructor.name]
          )
        }
      }
    },
    foldl: function (n) {
      return function (r) {
        return function (t) {
          if (t instanceof y) return r
          if (t instanceof D) return n(r)(t.value0)
          throw new Error(
            'Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): ' +
              [n.constructor.name, r.constructor.name, t.constructor.name]
          )
        }
      }
    },
    foldMap: function (n) {
      var r = Mn(n)
      return function (t) {
        return function (e) {
          if (e instanceof y) return r
          if (e instanceof D) return t(e.value0)
          throw new Error(
            'Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): ' +
              [t.constructor.name, e.constructor.name]
          )
        }
      }
    },
  }
  var _c = function (n) {
      var r = $n(n)
      return function (t) {
        var e = G(t.Semigroup0()),
          o = Mn(t)
        return function (u) {
          return r(function (l) {
            return function (c) {
              return e(u(l))(c)
            }
          })(o)
        }
      }
    },
    Pt = {
      foldr: ic,
      foldl: fc,
      foldMap: function (n) {
        return _c(Pt)(n)
      },
    }
  var er = function (n) {
    return n.foldMap
  }
  var ym = (function () {
    function n(o) {
      return [o]
    }
    function r(o) {
      return function (u) {
        return [o, u]
      }
    }
    function t(o) {
      return function (u) {
        return function (l) {
          return [o, u, l]
        }
      }
    }
    function e(o) {
      return function (u) {
        return o.concat(u)
      }
    }
    return function (o) {
      return function (u) {
        return function (l) {
          return function (c) {
            return function (i) {
              function s(_, m) {
                switch (m - _) {
                  case 0:
                    return l([])
                  case 1:
                    return u(n)(c(i[_]))
                  case 2:
                    return o(u(r)(c(i[_])))(c(i[_ + 1]))
                  case 3:
                    return o(o(u(t)(c(i[_])))(c(i[_ + 1])))(c(i[_ + 2]))
                  default:
                    var v = _ + Math.floor((m - _) / 4) * 2
                    return o(u(e)(s(_, v)))(s(v, m))
                }
              }
              return s(0, i.length)
            }
          }
        }
      }
    }
  })()
  var av = (function () {
    function n(r, t) {
      ;(this.value0 = r), (this.value1 = t)
    }
    return (
      (n.create = function (r) {
        return function (t) {
          return new n(r, t)
        }
      }),
      n
    )
  })()
  var wc = function (n) {
    return function (r) {
      return Su(function (t) {
        return n(t.value0)(t.value1)
      })(r)
    }
  }
  var Lc = function (n) {
      return function (r) {
        return uc(new av(n, r))
      }
    },
    Gu = {
      map: function (n) {
        return function (r) {
          return Su(function (t) {
            return Lc(function (e) {
              return n(t.value0(e))
            })(t.value1)
          })(r)
        }
      },
    }
  var Ic = Lc(X(Z))
  var Ac = function (n) {
    var r = V(n.Bind1()),
      t = Ze(n.Applicative0())
    return function (e) {
      return function (o) {
        return r(e)(function (u) {
          return t(u)(o)
        })
      }
    }
  }
  var Lr = function (n) {
    var r = V(n.Bind1()),
      t = E(n.Applicative0())
    return function (e) {
      return function (o) {
        return r(e)(function (u) {
          return r(o)(function (l) {
            return t(u(l))
          })
        })
      }
    }
  }
  var Nc = function (n) {
      return function () {
        return n
      }
    },
    Hc = function (n) {
      return function (r) {
        return function () {
          return r(n())()
        }
      }
    }
  var Sc = function (n, r, t) {
      var e = 0,
        o
      return function (u) {
        if (e === 2) return o
        if (e === 1)
          throw new ReferenceError(
            n +
              ' was needed before it finished initializing (module ' +
              r +
              ', line ' +
              u +
              ')',
            r,
            u
          )
        return (e = 1), (o = t()), (e = 2), o
      }
    },
    Ot = {
      Applicative0: function () {
        return Qn
      },
      Bind1: function () {
        return Or
      },
    },
    Or = {
      bind: Hc,
      Apply0: function () {
        return Wc(0)
      },
    },
    Qn = {
      pure: Nc,
      Apply0: function () {
        return Wc(0)
      },
    },
    Rc = Sc('functorEffect', 'Effect', function () {
      return { map: na(Qn) }
    }),
    Wc = Sc('applyEffect', 'Effect', function () {
      return {
        apply: Lr(Ot),
        Functor0: function () {
          return Rc(0)
        },
      }
    }),
    Y = Rc(20)
  var Pc = function (n) {
    return function () {
      return { value: n }
    }
  }
  var N = function (n) {
      return function () {
        return n.value
      }
    },
    Oc = function (n) {
      return function (r) {
        return function () {
          var t = n(r.value)
          return (r.value = t.state), t.value
        }
      }
    },
    Fn = function (n) {
      return function (r) {
        return function () {
          r.value = n
        }
      }
    }
  var pv = On(Y),
    Wn = Pc,
    Ku = Oc,
    $c = function (n) {
      return Ku(function (r) {
        var t = n(r)
        return { state: t, value: t }
      })
    },
    $r = function (n) {
      return function (r) {
        return pv($c(n)(r))
      }
    }
  var vv = Zn(Or),
    dv = d(Y),
    cr = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    ar = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    zr = function (n) {
      return n.tailRecM
    }
  var qc = {
    tailRecM: function (n) {
      return function (r) {
        var t = function (e) {
          if (e instanceof ar) return e.value0
          throw new Error(
            'Failed pattern match at Control.Monad.Rec.Class (line 113, column 30 - line 113, column 44): ' +
              [e.constructor.name]
          )
        }
        return function () {
          var o = vv(Wn)(n(r))()
          return (
            (function () {
              for (
                ;
                !(function () {
                  var l = N(o)()
                  if (l instanceof cr) {
                    var c = n(l.value0)()
                    return Fn(c)(o)(), !1
                  }
                  if (l instanceof ar) return !0
                  throw new Error(
                    'Failed pattern match at Control.Monad.Rec.Class (line 104, column 22 - line 109, column 28): ' +
                      [l.constructor.name]
                  )
                })();

              );
              return {}
            })(),
            dv(t)(N(o))()
          )
        }
      }
    },
    Monad0: function () {
      return Ot
    },
  }
  var at = (function () {
    function n(r, t) {
      ;(this.value0 = r), (this.value1 = t)
    }
    return (
      (n.create = function (r) {
        return function (t) {
          return new n(r, t)
        }
      }),
      n
    )
  })()
  var lo = function (n) {
    var r = wr(n)
    return function (t) {
      return new at(t, r)
    }
  }
  var q = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    F = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    ti = function (n) {
      return n
    }
  var Av = function (n) {
      var r = function (t) {
        return function (e) {
          var o = t,
            u = !1,
            l
          function c(i, s) {
            if (
              s instanceof F &&
              s.value1 instanceof F &&
              s.value1.value1 instanceof F
            ) {
              ;(o = new F(s, i)), (e = s.value1.value1.value1)
              return
            }
            var _ = function (v) {
                return v instanceof F &&
                  v.value1 instanceof F &&
                  v.value1.value1 instanceof q
                  ? new F(n(v.value0), new F(n(v.value1.value0), q.value))
                  : v instanceof F && v.value1 instanceof q
                  ? new F(n(v.value0), q.value)
                  : q.value
              },
              m = function (v) {
                return function (p) {
                  var a = v,
                    f = !1,
                    H
                  function cn(Hn, Sn) {
                    if (
                      Hn instanceof F &&
                      Hn.value0 instanceof F &&
                      Hn.value0.value1 instanceof F &&
                      Hn.value0.value1.value1 instanceof F
                    ) {
                      ;(a = Hn.value1),
                        (p = new F(
                          n(Hn.value0.value0),
                          new F(
                            n(Hn.value0.value1.value0),
                            new F(n(Hn.value0.value1.value1.value0), Sn)
                          )
                        ))
                      return
                    }
                    return (f = !0), Sn
                  }
                  for (; !f; ) H = cn(a, p)
                  return H
                }
              }
            return (u = !0), m(i)(_(s))
          }
          for (; !u; ) l = c(o, e)
          return l
        }
      }
      return r(q.value)
    },
    ei = { map: Av }
  var Gr = {
    foldr: function (n) {
      return function (r) {
        var t = (function () {
            var o = function (u) {
              return function (l) {
                var c = u,
                  i = !1,
                  s
                function _(m, v) {
                  if (v instanceof q) return (i = !0), m
                  if (v instanceof F) {
                    ;(c = new F(v.value0, m)), (l = v.value1)
                    return
                  }
                  throw new Error(
                    'Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): ' +
                      [m.constructor.name, v.constructor.name]
                  )
                }
                for (; !i; ) s = _(c, l)
                return s
              }
            }
            return o(q.value)
          })(),
          e = qn(Gr)(bn(n))(r)
        return function (o) {
          return e(t(o))
        }
      }
    },
    foldl: function (n) {
      var r = function (t) {
        return function (e) {
          var o = t,
            u = !1,
            l
          function c(i, s) {
            if (s instanceof q) return (u = !0), i
            if (s instanceof F) {
              ;(o = n(i)(s.value0)), (e = s.value1)
              return
            }
            throw new Error(
              'Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): ' +
                [s.constructor.name]
            )
          }
          for (; !u; ) l = c(o, e)
          return l
        }
      }
      return r
    },
    foldMap: function (n) {
      var r = G(n.Semigroup0()),
        t = Mn(n)
      return function (e) {
        return qn(Gr)(function (o) {
          var u = r(o)
          return function (l) {
            return u(e(l))
          }
        })(t)
      }
    },
  }
  var Nv = $n(Gr)
  var so = {
      append: function (n) {
        return function (r) {
          return Nv(F.create)(r)(n)
        }
      },
    },
    Hv = G(so)
  var Sv = {
      alt: Hv,
      Functor0: function () {
        return ei
      },
    },
    Bc = (function () {
      return {
        empty: q.value,
        Alt0: function () {
          return Sv
        },
      }
    })()
  var ue = (function () {
    var n = function (r) {
      return function (t) {
        var e = r,
          o = !1,
          u
        function l(c, i) {
          if (i instanceof q) return (o = !0), c
          if (i instanceof F) {
            ;(e = new F(i.value0, c)), (t = i.value1)
            return
          }
          throw new Error(
            'Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): ' +
              [c.constructor.name, i.constructor.name]
          )
        }
        for (; !o; ) u = l(e, t)
        return u
      }
    }
    return n(q.value)
  })()
  var Jc = function (n) {
    return n instanceof q
  }
  var Kc = function (n) {
    return n()
  }
  var Xc = function (n) {
    throw new Error(n)
  }
  var Yc = function () {
    return Xc
  }
  var Zv = Yc(),
    nd = Kc,
    Ut = function (n) {
      return nd(function () {
        return Zv(n)
      })
    }
  var O = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    Q = (function () {
      function n(r, t, e, o) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return new n(r, t, e, o)
              }
            }
          }
        }),
        n
      )
    })(),
    vn = (function () {
      function n(r, t, e, o, u, l, c) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o),
          (this.value4 = u),
          (this.value5 = l),
          (this.value6 = c)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return function (u) {
                  return function (l) {
                    return function (c) {
                      return new n(r, t, e, o, u, l, c)
                    }
                  }
                }
              }
            }
          }
        }),
        n
      )
    })(),
    Bt = (function () {
      function n(r, t, e) {
        ;(this.value0 = r), (this.value1 = t), (this.value2 = e)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return new n(r, t, e)
            }
          }
        }),
        n
      )
    })(),
    yt = (function () {
      function n(r, t, e) {
        ;(this.value0 = r), (this.value1 = t), (this.value2 = e)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return new n(r, t, e)
            }
          }
        }),
        n
      )
    })(),
    kt = (function () {
      function n(r, t, e, o, u, l) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o),
          (this.value4 = u),
          (this.value5 = l)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return function (u) {
                  return function (l) {
                    return new n(r, t, e, o, u, l)
                  }
                }
              }
            }
          }
        }),
        n
      )
    })(),
    ut = (function () {
      function n(r, t, e, o, u, l) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o),
          (this.value4 = u),
          (this.value5 = l)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return function (u) {
                  return function (l) {
                    return new n(r, t, e, o, u, l)
                  }
                }
              }
            }
          }
        }),
        n
      )
    })(),
    zt = (function () {
      function n(r, t, e, o, u, l) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o),
          (this.value4 = u),
          (this.value5 = l)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return function (u) {
                  return function (l) {
                    return new n(r, t, e, o, u, l)
                  }
                }
              }
            }
          }
        }),
        n
      )
    })(),
    _o = (function () {
      function n(r, t, e, o) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return new n(r, t, e, o)
              }
            }
          }
        }),
        n
      )
    })()
  var Ne = function (n) {
    var r = rn(n)
    return function (t) {
      var e = function (o) {
        var u = !1,
          l
        function c(i) {
          if (i instanceof O) return (u = !0), y.value
          if (i instanceof Q) {
            var s = r(t)(i.value1)
            if (s instanceof P) return (u = !0), new D(i.value2)
            if (s instanceof A) {
              o = i.value0
              return
            }
            o = i.value3
            return
          }
          if (i instanceof vn) {
            var _ = r(t)(i.value1)
            if (_ instanceof P) return (u = !0), new D(i.value2)
            var m = r(t)(i.value4)
            if (m instanceof P) return (u = !0), new D(i.value5)
            if (_ instanceof A) {
              o = i.value0
              return
            }
            if (m instanceof W) {
              o = i.value6
              return
            }
            o = i.value3
            return
          }
          throw new Error(
            'Failed pattern match at Data.Map.Internal (line 241, column 5 - line 241, column 22): ' +
              [i.constructor.name]
          )
        }
        for (; !u; ) l = c(o)
        return l
      }
      return e
    }
  }
  var rl = function (n) {
      return function (r) {
        return function (t) {
          var e = n,
            o = r,
            u = !1,
            l
          function c(i, s, _) {
            if (s instanceof q) return (u = !0), _
            if (s instanceof F) {
              if (s.value0 instanceof Bt) {
                ;(e = i),
                  (o = s.value1),
                  (t = new Q(
                    _,
                    s.value0.value0,
                    s.value0.value1,
                    s.value0.value2
                  ))
                return
              }
              if (s.value0 instanceof yt) {
                ;(e = i),
                  (o = s.value1),
                  (t = new Q(
                    s.value0.value0,
                    s.value0.value1,
                    s.value0.value2,
                    _
                  ))
                return
              }
              if (s.value0 instanceof kt) {
                ;(e = i),
                  (o = s.value1),
                  (t = new vn(
                    _,
                    s.value0.value0,
                    s.value0.value1,
                    s.value0.value2,
                    s.value0.value3,
                    s.value0.value4,
                    s.value0.value5
                  ))
                return
              }
              if (s.value0 instanceof ut) {
                ;(e = i),
                  (o = s.value1),
                  (t = new vn(
                    s.value0.value0,
                    s.value0.value1,
                    s.value0.value2,
                    _,
                    s.value0.value3,
                    s.value0.value4,
                    s.value0.value5
                  ))
                return
              }
              if (s.value0 instanceof zt) {
                ;(e = i),
                  (o = s.value1),
                  (t = new vn(
                    s.value0.value0,
                    s.value0.value1,
                    s.value0.value2,
                    s.value0.value3,
                    s.value0.value4,
                    s.value0.value5,
                    _
                  ))
                return
              }
              throw new Error(
                'Failed pattern match at Data.Map.Internal (line 462, column 3 - line 467, column 88): ' +
                  [s.value0.constructor.name]
              )
            }
            throw new Error(
              'Failed pattern match at Data.Map.Internal (line 459, column 1 - line 459, column 80): ' +
                [s.constructor.name, _.constructor.name]
            )
          }
          for (; !u; ) l = c(e, o, t)
          return l
        }
      }
    },
    He = function (n) {
      var r = rl(n),
        t = rn(n)
      return function (e) {
        return function (o) {
          var u = function (c) {
              return function (i) {
                var s = c,
                  _ = !1,
                  m
                function v(p, a) {
                  if (p instanceof q)
                    return (
                      (_ = !0), new Q(a.value0, a.value1, a.value2, a.value3)
                    )
                  if (p instanceof F) {
                    if (p.value0 instanceof Bt)
                      return (
                        (_ = !0),
                        r(p.value1)(
                          new vn(
                            a.value0,
                            a.value1,
                            a.value2,
                            a.value3,
                            p.value0.value0,
                            p.value0.value1,
                            p.value0.value2
                          )
                        )
                      )
                    if (p.value0 instanceof yt)
                      return (
                        (_ = !0),
                        r(p.value1)(
                          new vn(
                            p.value0.value0,
                            p.value0.value1,
                            p.value0.value2,
                            a.value0,
                            a.value1,
                            a.value2,
                            a.value3
                          )
                        )
                      )
                    if (p.value0 instanceof kt) {
                      ;(s = p.value1),
                        (i = new _o(
                          new Q(a.value0, a.value1, a.value2, a.value3),
                          p.value0.value0,
                          p.value0.value1,
                          new Q(
                            p.value0.value2,
                            p.value0.value3,
                            p.value0.value4,
                            p.value0.value5
                          )
                        ))
                      return
                    }
                    if (p.value0 instanceof ut) {
                      ;(s = p.value1),
                        (i = new _o(
                          new Q(
                            p.value0.value0,
                            p.value0.value1,
                            p.value0.value2,
                            a.value0
                          ),
                          a.value1,
                          a.value2,
                          new Q(
                            a.value3,
                            p.value0.value3,
                            p.value0.value4,
                            p.value0.value5
                          )
                        ))
                      return
                    }
                    if (p.value0 instanceof zt) {
                      ;(s = p.value1),
                        (i = new _o(
                          new Q(
                            p.value0.value0,
                            p.value0.value1,
                            p.value0.value2,
                            p.value0.value3
                          ),
                          p.value0.value4,
                          p.value0.value5,
                          new Q(a.value0, a.value1, a.value2, a.value3)
                        ))
                      return
                    }
                    throw new Error(
                      'Failed pattern match at Data.Map.Internal (line 498, column 5 - line 503, column 108): ' +
                        [p.value0.constructor.name, a.constructor.name]
                    )
                  }
                  throw new Error(
                    'Failed pattern match at Data.Map.Internal (line 495, column 3 - line 495, column 56): ' +
                      [p.constructor.name, a.constructor.name]
                  )
                }
                for (; !_; ) m = v(s, i)
                return m
              }
            },
            l = function (c) {
              return function (i) {
                var s = c,
                  _ = !1,
                  m
                function v(p, a) {
                  if (a instanceof O)
                    return (_ = !0), u(p)(new _o(O.value, e, o, O.value))
                  if (a instanceof Q) {
                    var f = t(e)(a.value1)
                    if (f instanceof P)
                      return (_ = !0), r(p)(new Q(a.value0, e, o, a.value3))
                    if (f instanceof A) {
                      ;(s = new F(new Bt(a.value1, a.value2, a.value3), p)),
                        (i = a.value0)
                      return
                    }
                    ;(s = new F(new yt(a.value0, a.value1, a.value2), p)),
                      (i = a.value3)
                    return
                  }
                  if (a instanceof vn) {
                    var H = t(e)(a.value1)
                    if (H instanceof P)
                      return (
                        (_ = !0),
                        r(p)(
                          new vn(
                            a.value0,
                            e,
                            o,
                            a.value3,
                            a.value4,
                            a.value5,
                            a.value6
                          )
                        )
                      )
                    var cn = t(e)(a.value4)
                    if (cn instanceof P)
                      return (
                        (_ = !0),
                        r(p)(
                          new vn(
                            a.value0,
                            a.value1,
                            a.value2,
                            a.value3,
                            e,
                            o,
                            a.value6
                          )
                        )
                      )
                    if (H instanceof A) {
                      ;(s = new F(
                        new kt(
                          a.value1,
                          a.value2,
                          a.value3,
                          a.value4,
                          a.value5,
                          a.value6
                        ),
                        p
                      )),
                        (i = a.value0)
                      return
                    }
                    if (H instanceof W && cn instanceof A) {
                      ;(s = new F(
                        new ut(
                          a.value0,
                          a.value1,
                          a.value2,
                          a.value4,
                          a.value5,
                          a.value6
                        ),
                        p
                      )),
                        (i = a.value3)
                      return
                    }
                    ;(s = new F(
                      new zt(
                        a.value0,
                        a.value1,
                        a.value2,
                        a.value3,
                        a.value4,
                        a.value5
                      ),
                      p
                    )),
                      (i = a.value6)
                    return
                  }
                  throw new Error(
                    'Failed pattern match at Data.Map.Internal (line 478, column 3 - line 478, column 55): ' +
                      [p.constructor.name, a.constructor.name]
                  )
                }
                for (; !_; ) m = v(s, i)
                return m
              }
            }
          return l(q.value)
        }
      }
    },
    tl = function (n) {
      var r = rl(n),
        t = rn(n)
      return function (e) {
        var o = function (i) {
            return function (s) {
              var _ = i,
                m = !1,
                v
              function p(a, f) {
                if (a instanceof q) return (m = !0), f
                if (a instanceof F) {
                  if (
                    a.value0 instanceof Bt &&
                    a.value0.value2 instanceof O &&
                    f instanceof O
                  )
                    return (
                      (m = !0),
                      r(a.value1)(
                        new Q(
                          O.value,
                          a.value0.value0,
                          a.value0.value1,
                          O.value
                        )
                      )
                    )
                  if (
                    a.value0 instanceof yt &&
                    a.value0.value0 instanceof O &&
                    f instanceof O
                  )
                    return (
                      (m = !0),
                      r(a.value1)(
                        new Q(
                          O.value,
                          a.value0.value1,
                          a.value0.value2,
                          O.value
                        )
                      )
                    )
                  if (a.value0 instanceof Bt && a.value0.value2 instanceof Q) {
                    ;(_ = a.value1),
                      (s = new vn(
                        f,
                        a.value0.value0,
                        a.value0.value1,
                        a.value0.value2.value0,
                        a.value0.value2.value1,
                        a.value0.value2.value2,
                        a.value0.value2.value3
                      ))
                    return
                  }
                  if (a.value0 instanceof yt && a.value0.value0 instanceof Q) {
                    ;(_ = a.value1),
                      (s = new vn(
                        a.value0.value0.value0,
                        a.value0.value0.value1,
                        a.value0.value0.value2,
                        a.value0.value0.value3,
                        a.value0.value1,
                        a.value0.value2,
                        f
                      ))
                    return
                  }
                  return a.value0 instanceof Bt && a.value0.value2 instanceof vn
                    ? ((m = !0),
                      r(a.value1)(
                        new Q(
                          new Q(
                            f,
                            a.value0.value0,
                            a.value0.value1,
                            a.value0.value2.value0
                          ),
                          a.value0.value2.value1,
                          a.value0.value2.value2,
                          new Q(
                            a.value0.value2.value3,
                            a.value0.value2.value4,
                            a.value0.value2.value5,
                            a.value0.value2.value6
                          )
                        )
                      ))
                    : a.value0 instanceof yt && a.value0.value0 instanceof vn
                    ? ((m = !0),
                      r(a.value1)(
                        new Q(
                          new Q(
                            a.value0.value0.value0,
                            a.value0.value0.value1,
                            a.value0.value0.value2,
                            a.value0.value0.value3
                          ),
                          a.value0.value0.value4,
                          a.value0.value0.value5,
                          new Q(
                            a.value0.value0.value6,
                            a.value0.value1,
                            a.value0.value2,
                            f
                          )
                        )
                      ))
                    : a.value0 instanceof kt &&
                      a.value0.value2 instanceof O &&
                      a.value0.value5 instanceof O &&
                      f instanceof O
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          O.value,
                          a.value0.value0,
                          a.value0.value1,
                          O.value,
                          a.value0.value3,
                          a.value0.value4,
                          O.value
                        )
                      ))
                    : a.value0 instanceof ut &&
                      a.value0.value0 instanceof O &&
                      a.value0.value5 instanceof O &&
                      f instanceof O
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          O.value,
                          a.value0.value1,
                          a.value0.value2,
                          O.value,
                          a.value0.value3,
                          a.value0.value4,
                          O.value
                        )
                      ))
                    : a.value0 instanceof zt &&
                      a.value0.value0 instanceof O &&
                      a.value0.value3 instanceof O &&
                      f instanceof O
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          O.value,
                          a.value0.value1,
                          a.value0.value2,
                          O.value,
                          a.value0.value4,
                          a.value0.value5,
                          O.value
                        )
                      ))
                    : a.value0 instanceof kt && a.value0.value2 instanceof Q
                    ? ((m = !0),
                      r(a.value1)(
                        new Q(
                          new vn(
                            f,
                            a.value0.value0,
                            a.value0.value1,
                            a.value0.value2.value0,
                            a.value0.value2.value1,
                            a.value0.value2.value2,
                            a.value0.value2.value3
                          ),
                          a.value0.value3,
                          a.value0.value4,
                          a.value0.value5
                        )
                      ))
                    : a.value0 instanceof ut && a.value0.value0 instanceof Q
                    ? ((m = !0),
                      r(a.value1)(
                        new Q(
                          new vn(
                            a.value0.value0.value0,
                            a.value0.value0.value1,
                            a.value0.value0.value2,
                            a.value0.value0.value3,
                            a.value0.value1,
                            a.value0.value2,
                            f
                          ),
                          a.value0.value3,
                          a.value0.value4,
                          a.value0.value5
                        )
                      ))
                    : a.value0 instanceof ut && a.value0.value5 instanceof Q
                    ? ((m = !0),
                      r(a.value1)(
                        new Q(
                          a.value0.value0,
                          a.value0.value1,
                          a.value0.value2,
                          new vn(
                            f,
                            a.value0.value3,
                            a.value0.value4,
                            a.value0.value5.value0,
                            a.value0.value5.value1,
                            a.value0.value5.value2,
                            a.value0.value5.value3
                          )
                        )
                      ))
                    : a.value0 instanceof zt && a.value0.value3 instanceof Q
                    ? ((m = !0),
                      r(a.value1)(
                        new Q(
                          a.value0.value0,
                          a.value0.value1,
                          a.value0.value2,
                          new vn(
                            a.value0.value3.value0,
                            a.value0.value3.value1,
                            a.value0.value3.value2,
                            a.value0.value3.value3,
                            a.value0.value4,
                            a.value0.value5,
                            f
                          )
                        )
                      ))
                    : a.value0 instanceof kt && a.value0.value2 instanceof vn
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          new Q(
                            f,
                            a.value0.value0,
                            a.value0.value1,
                            a.value0.value2.value0
                          ),
                          a.value0.value2.value1,
                          a.value0.value2.value2,
                          new Q(
                            a.value0.value2.value3,
                            a.value0.value2.value4,
                            a.value0.value2.value5,
                            a.value0.value2.value6
                          ),
                          a.value0.value3,
                          a.value0.value4,
                          a.value0.value5
                        )
                      ))
                    : a.value0 instanceof ut && a.value0.value0 instanceof vn
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          new Q(
                            a.value0.value0.value0,
                            a.value0.value0.value1,
                            a.value0.value0.value2,
                            a.value0.value0.value3
                          ),
                          a.value0.value0.value4,
                          a.value0.value0.value5,
                          new Q(
                            a.value0.value0.value6,
                            a.value0.value1,
                            a.value0.value2,
                            f
                          ),
                          a.value0.value3,
                          a.value0.value4,
                          a.value0.value5
                        )
                      ))
                    : a.value0 instanceof ut && a.value0.value5 instanceof vn
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          a.value0.value0,
                          a.value0.value1,
                          a.value0.value2,
                          new Q(
                            f,
                            a.value0.value3,
                            a.value0.value4,
                            a.value0.value5.value0
                          ),
                          a.value0.value5.value1,
                          a.value0.value5.value2,
                          new Q(
                            a.value0.value5.value3,
                            a.value0.value5.value4,
                            a.value0.value5.value5,
                            a.value0.value5.value6
                          )
                        )
                      ))
                    : a.value0 instanceof zt && a.value0.value3 instanceof vn
                    ? ((m = !0),
                      r(a.value1)(
                        new vn(
                          a.value0.value0,
                          a.value0.value1,
                          a.value0.value2,
                          new Q(
                            a.value0.value3.value0,
                            a.value0.value3.value1,
                            a.value0.value3.value2,
                            a.value0.value3.value3
                          ),
                          a.value0.value3.value4,
                          a.value0.value3.value5,
                          new Q(
                            a.value0.value3.value6,
                            a.value0.value4,
                            a.value0.value5,
                            f
                          )
                        )
                      ))
                    : ((m = !0),
                      Ut('The impossible happened in partial function `up`.'))
                }
                throw new Error(
                  'Failed pattern match at Data.Map.Internal (line 552, column 5 - line 573, column 86): ' +
                    [a.constructor.name]
                )
              }
              for (; !m; ) v = p(_, s)
              return v
            }
          },
          u = function (i) {
            return function (s) {
              var _ = i,
                m = !1,
                v
              function p(a, f) {
                if (
                  f instanceof Q &&
                  f.value0 instanceof O &&
                  f.value3 instanceof O
                )
                  return (m = !0), o(a)(O.value)
                if (f instanceof Q) {
                  ;(_ = new F(new yt(f.value0, f.value1, f.value2), a)),
                    (s = f.value3)
                  return
                }
                if (
                  f instanceof vn &&
                  f.value0 instanceof O &&
                  f.value3 instanceof O &&
                  f.value6 instanceof O
                )
                  return (
                    (m = !0),
                    o(new F(new yt(O.value, f.value1, f.value2), a))(O.value)
                  )
                if (f instanceof vn) {
                  ;(_ = new F(
                    new zt(
                      f.value0,
                      f.value1,
                      f.value2,
                      f.value3,
                      f.value4,
                      f.value5
                    ),
                    a
                  )),
                    (s = f.value6)
                  return
                }
                return (
                  (m = !0),
                  Ut(
                    'The impossible happened in partial function `removeMaxNode`.'
                  )
                )
              }
              for (; !m; ) v = p(_, s)
              return v
            }
          },
          l = function (i) {
            var s = !1,
              _
            function m(v) {
              if (v instanceof Q && v.value3 instanceof O)
                return (s = !0), { key: v.value1, value: v.value2 }
              if (v instanceof Q) {
                i = v.value3
                return
              }
              if (v instanceof vn && v.value6 instanceof O)
                return (s = !0), { key: v.value4, value: v.value5 }
              if (v instanceof vn) {
                i = v.value6
                return
              }
              return (
                (s = !0),
                Ut('The impossible happened in partial function `maxNode`.')
              )
            }
            for (; !s; ) _ = m(i)
            return _
          },
          c = function (i) {
            return function (s) {
              var _ = i,
                m = !1,
                v
              function p(a, f) {
                if (f instanceof O) return (m = !0), y.value
                if (f instanceof Q) {
                  var H = t(e)(f.value1)
                  if (f.value3 instanceof O && H instanceof P)
                    return (m = !0), new D(new j(f.value2, o(a)(O.value)))
                  if (H instanceof P) {
                    var cn = l(f.value0)
                    return (
                      (m = !0),
                      new D(
                        new j(
                          f.value2,
                          u(new F(new Bt(cn.key, cn.value, f.value3), a))(
                            f.value0
                          )
                        )
                      )
                    )
                  }
                  if (H instanceof A) {
                    ;(_ = new F(new Bt(f.value1, f.value2, f.value3), a)),
                      (s = f.value0)
                    return
                  }
                  ;(_ = new F(new yt(f.value0, f.value1, f.value2), a)),
                    (s = f.value3)
                  return
                }
                if (f instanceof vn) {
                  var Hn = (function () {
                      return (
                        f.value0 instanceof O &&
                        f.value3 instanceof O &&
                        f.value6 instanceof O
                      )
                    })(),
                    H = t(e)(f.value4),
                    Sn = t(e)(f.value1)
                  if (Hn && Sn instanceof P)
                    return (
                      (m = !0),
                      new D(
                        new j(
                          f.value2,
                          r(a)(new Q(O.value, f.value4, f.value5, O.value))
                        )
                      )
                    )
                  if (Hn && H instanceof P)
                    return (
                      (m = !0),
                      new D(
                        new j(
                          f.value5,
                          r(a)(new Q(O.value, f.value1, f.value2, O.value))
                        )
                      )
                    )
                  if (Sn instanceof P) {
                    var cn = l(f.value0)
                    return (
                      (m = !0),
                      new D(
                        new j(
                          f.value2,
                          u(
                            new F(
                              new kt(
                                cn.key,
                                cn.value,
                                f.value3,
                                f.value4,
                                f.value5,
                                f.value6
                              ),
                              a
                            )
                          )(f.value0)
                        )
                      )
                    )
                  }
                  if (H instanceof P) {
                    var cn = l(f.value3)
                    return (
                      (m = !0),
                      new D(
                        new j(
                          f.value5,
                          u(
                            new F(
                              new ut(
                                f.value0,
                                f.value1,
                                f.value2,
                                cn.key,
                                cn.value,
                                f.value6
                              ),
                              a
                            )
                          )(f.value3)
                        )
                      )
                    )
                  }
                  if (Sn instanceof A) {
                    ;(_ = new F(
                      new kt(
                        f.value1,
                        f.value2,
                        f.value3,
                        f.value4,
                        f.value5,
                        f.value6
                      ),
                      a
                    )),
                      (s = f.value0)
                    return
                  }
                  if (Sn instanceof W && H instanceof A) {
                    ;(_ = new F(
                      new ut(
                        f.value0,
                        f.value1,
                        f.value2,
                        f.value4,
                        f.value5,
                        f.value6
                      ),
                      a
                    )),
                      (s = f.value3)
                    return
                  }
                  ;(_ = new F(
                    new zt(
                      f.value0,
                      f.value1,
                      f.value2,
                      f.value3,
                      f.value4,
                      f.value5
                    ),
                    a
                  )),
                    (s = f.value6)
                  return
                }
                throw new Error(
                  'Failed pattern match at Data.Map.Internal (line 525, column 16 - line 548, column 80): ' +
                    [f.constructor.name]
                )
              }
              for (; !m; ) v = p(_, s)
              return v
            }
          }
        return c(q.value)
      }
    },
    or = {
      foldr: function (n) {
        return function (r) {
          return function (t) {
            if (t instanceof O) return r
            if (t instanceof Q)
              return $n(or)(n)(n(t.value2)($n(or)(n)(r)(t.value3)))(t.value0)
            if (t instanceof vn)
              return $n(or)(n)(
                n(t.value2)(
                  $n(or)(n)(n(t.value5)($n(or)(n)(r)(t.value6)))(t.value3)
                )
              )(t.value0)
            throw new Error(
              'Failed pattern match at Data.Map.Internal (line 133, column 17 - line 136, column 85): ' +
                [t.constructor.name]
            )
          }
        }
      },
      foldl: function (n) {
        return function (r) {
          return function (t) {
            if (t instanceof O) return r
            if (t instanceof Q)
              return qn(or)(n)(n(qn(or)(n)(r)(t.value0))(t.value2))(t.value3)
            if (t instanceof vn)
              return qn(or)(n)(
                n(qn(or)(n)(n(qn(or)(n)(r)(t.value0))(t.value2))(t.value3))(
                  t.value5
                )
              )(t.value6)
            throw new Error(
              'Failed pattern match at Data.Map.Internal (line 137, column 17 - line 140, column 85): ' +
                [t.constructor.name]
            )
          }
        }
      },
      foldMap: function (n) {
        var r = Mn(n),
          t = G(n.Semigroup0())
        return function (e) {
          return function (o) {
            if (o instanceof O) return r
            if (o instanceof Q)
              return t(er(or)(n)(e)(o.value0))(
                t(e(o.value2))(er(or)(n)(e)(o.value3))
              )
            if (o instanceof vn)
              return t(er(or)(n)(e)(o.value0))(
                t(e(o.value2))(
                  t(er(or)(n)(e)(o.value3))(
                    t(e(o.value5))(er(or)(n)(e)(o.value6))
                  )
                )
              )
            throw new Error(
              'Failed pattern match at Data.Map.Internal (line 141, column 17 - line 144, column 93): ' +
                [o.constructor.name]
            )
          }
        }
      },
    }
  var ht = (function () {
    return O.value
  })()
  var ci = function (n) {
    var r = tl(n)
    return function (t) {
      return function (e) {
        return An(e)(pr)(r(t)(e))
      }
    }
  }
  var el = function (n) {
    var r = Ne(n),
      t = ci(n),
      e = He(n)
    return function (o) {
      return function (u) {
        return function (l) {
          var c = o(r(u)(l))
          if (c instanceof y) return t(u)(l)
          if (c instanceof D) return e(u)(c.value0)(l)
          throw new Error(
            'Failed pattern match at Data.Map.Internal (line 596, column 15 - line 598, column 25): ' +
              [c.constructor.name]
          )
        }
      }
    }
  }
  var al = function (n) {
      var r = nr(n)(or)
      return function (t) {
        return function (e) {
          return r(function (o) {
            return e(o)
          })(t)
        }
      }
    },
    Se = ht
  var vo = function (n) {
    return function (r) {
      return r.join(n)
    }
  }
  var li = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    da = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })()
  var Ld = function (n) {
      return function (r) {
        if (n < 1) return []
        var t = new Array(n)
        return t.fill(r)
      }
    },
    Id = function (n) {
      return function (r) {
        for (var t = [], e = 0, o = 0; o < n; o++) t[e++] = r
        return t
      }
    },
    xd = typeof Array.prototype.fill == 'function' ? Ld : Id,
    Ad = (function () {
      function n(o, u) {
        ;(this.head = o), (this.tail = u)
      }
      var r = {}
      function t(o) {
        return function (u) {
          return new n(o, u)
        }
      }
      function e(o) {
        for (var u = [], l = 0, c = o; c !== r; )
          (u[l++] = c.head), (c = c.tail)
        return u
      }
      return function (o) {
        return function (u) {
          return e(o(t)(r)(u))
        }
      }
    })(),
    ie = function (n) {
      return n.length
    }
  var ul = function (n) {
    return function (r) {
      return function (t) {
        return function (e) {
          for (var o = 0, u = e.length; o < u; o++) if (t(e[o])) return n(o)
          return r
        }
      }
    }
  }
  var il = function (n) {
    return function (r) {
      return function (t) {
        return function (e) {
          if (t < 0 || t >= e.length) return r
          var o = e.slice()
          return o.splice(t, 1), n(o)
        }
      }
    }
  }
  var Nd = (function () {
    function n(r, t, e, o, u, l) {
      var c, i, s, _, m, v, p
      for (
        c = u + ((l - u) >> 1),
          c - u > 1 && n(r, t, o, e, u, c),
          l - c > 1 && n(r, t, o, e, c, l),
          i = u,
          s = c,
          _ = u;
        i < c && s < l;

      )
        (m = o[i]),
          (v = o[s]),
          (p = t(r(m)(v))),
          p > 0 ? ((e[_++] = v), ++s) : ((e[_++] = m), ++i)
      for (; i < c; ) e[_++] = o[i++]
      for (; s < l; ) e[_++] = o[s++]
    }
    return function (r) {
      return function (t) {
        return function (e) {
          var o
          return e.length < 2
            ? e
            : ((o = e.slice(0)), n(r, t, o, e.slice(0), 0, e.length), o)
        }
      }
    }
  })()
  var Pd = (function () {
    function n(r, t, e, o, u, l) {
      var c, i, s, _, m, v, p
      for (
        c = u + ((l - u) >> 1),
          c - u > 1 && n(r, t, o, e, u, c),
          l - c > 1 && n(r, t, o, e, c, l),
          i = u,
          s = c,
          _ = u;
        i < c && s < l;

      )
        (m = o[i]),
          (v = o[s]),
          (p = t(r(m)(v))),
          p > 0 ? ((e[_++] = v), ++s) : ((e[_++] = m), ++i)
      for (; i < c; ) e[_++] = o[i++]
      for (; s < l; ) e[_++] = o[s++]
    }
    return function (r) {
      return function (t) {
        return function (e) {
          return function () {
            return e.length < 2 || n(r, t, e, e.slice(0), 0, e.length), e
          }
        }
      }
    }
  })()
  var nD = Ee()
  var rD = (function () {
    return ul(D.create)(y.value)
  })()
  var tD = (function () {
      return il(D.create)(y.value)
    })(),
    dl = function (n) {
      return function (r) {
        return function (t) {
          return t.length === 0
            ? []
            : An(t)(function (e) {
                return nD(tD(e)(t))
              })(rD(n(r))(t))
        }
      }
    }
  function Dl(n, r, t) {
    return n == null ? r : t(n)
  }
  function pi(n) {
    return n
  }
  var Tt = An(null)(pi),
    Jn = function (n) {
      return Dl(n, y.value, D.create)
    }
  var Un = (function () {
      function n(r, t, e, o) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return new n(r, t, e, o)
              }
            }
          }
        }),
        n
      )
    })(),
    ga = g,
    xr = function (n, r) {
      return n.value2(n.value1, r)
    },
    Bn = g,
    Ar = function (n) {
      return n.value3(n.value1)
    },
    _r = ga(function (n) {
      return n.value0
    })
  var gl = d(Sr),
    aD = d(ae)
  var Vt = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Ct = (function () {
      function n(r, t, e, o) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return new n(r, t, e, o)
              }
            }
          }
        }),
        n
      )
    })(),
    Qt = (function () {
      function n(r, t, e, o) {
        ;(this.value0 = r),
          (this.value1 = t),
          (this.value2 = e),
          (this.value3 = o)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return function (o) {
                return new n(r, t, e, o)
              }
            }
          }
        }),
        n
      )
    })(),
    fe = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    bt = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    oD = (function () {
      function n(r, t, e) {
        ;(this.value0 = r), (this.value1 = t), (this.value2 = e)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return new n(r, t, e)
            }
          }
        }),
        n
      )
    })(),
    yl = function (n) {
      return function (r) {
        return n(r)
      }
    }
  var uD = g
  var iD = {
      bimap: function (n) {
        return function (r) {
          return yl(function (t) {
            return uD(
              new oD(
                function (e) {
                  return n(t.value0(e))
                },
                function (e) {
                  return r(t.value1(e))
                },
                t.value2
              )
            )
          })
        }
      },
    },
    fD = Ht(iD)
  var ce = yl(function (n) {
    var r = function (t) {
      if (t instanceof Vt) return new Vt(t.value0)
      if (t instanceof Ct)
        return new Ct(t.value0, t.value1, n.value0(t.value2), gl(r)(t.value3))
      if (t instanceof Qt)
        return new Qt(
          t.value0,
          t.value1,
          n.value0(t.value2),
          gl(aD(r))(t.value3)
        )
      if (t instanceof fe) return new fe(n.value1(t.value0))
      if (t instanceof bt) return new bt(fD(n.value0)(n.value1)(t.value0))
      throw new Error(
        'Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): ' +
          [t.constructor.name]
      )
    }
    return r(n.value2)
  })
  function le(n, r) {
    return r[n]
  }
  function mi(n, r) {
    return r.hasOwnProperty(n)
  }
  function Et(n, r, t) {
    t[n] = r
  }
  function vi(n, r) {
    for (var t = [], e = 0; e < n.length; e++) t.push(r(e, n[e]))
    return t
  }
  function di(n, r) {
    for (var t = 0; t < n.length; t++) r(n[t])
  }
  function Di(n, r) {
    for (var t = Object.keys(n), e = 0; e < t.length; e++) {
      var o = t[e]
      r(o, n[o])
    }
  }
  function gi(n, r, t, e, o) {
    for (var u = [], l = n.length, c = r.length, i = 0; ; ) {
      if (i < l) i < c ? u.push(t(i, n[i], r[i])) : e(i, n[i])
      else if (i < c) u.push(o(i, r[i]))
      else break
      i++
    }
    return u
  }
  function ya(n, r, t) {
    for (var e = {}, o = 0; o < n.length; o++) {
      var u = n[o],
        l = r(u)
      e[l] = t(l, o, u)
    }
    return e
  }
  function ha(n, r, t, e, o, u) {
    for (var l = {}, c = 0; c < r.length; c++) {
      var i = r[c],
        s = t(i)
      n.hasOwnProperty(s) ? (l[s] = e(s, c, n[s], i)) : (l[s] = u(s, c, i))
    }
    for (var s in n) s in l || o(s, n[s])
    return l
  }
  function se(n, r) {
    return n === r
  }
  function yi(n, r) {
    return r.createTextNode(n)
  }
  function hi(n, r) {
    r.textContent = n
  }
  function ho(n, r, t) {
    return n != null ? t.createElementNS(n, r) : t.createElement(r)
  }
  function Jt(n, r, t) {
    var e = t.childNodes.item(n) || null
    e !== r && t.insertBefore(r, e)
  }
  function Ta(n, r) {
    r && n.parentNode === r && r.removeChild(n)
  }
  function Ca(n) {
    return n.parentNode
  }
  function To(n, r, t, e) {
    n != null ? e.setAttributeNS(n, r, t) : e.setAttribute(r, t)
  }
  function Co(n, r, t) {
    n != null ? t.removeAttributeNS(n, r) : t.removeAttribute(r)
  }
  function Ti(n, r, t) {
    return n != null ? t.hasAttributeNS(n, r) : t.hasAttribute(r)
  }
  function Ci(n, r, t) {
    t.addEventListener(n, r, !1)
  }
  function bi(n, r, t) {
    t.removeEventListener(n, r, !1)
  }
  var Ei = void 0
  var bo = function () {
    return {}
  }
  var Mi = le,
    Fi = g,
    wi = Et,
    Li = bo
  var Eo = function (n) {
      return function (r) {
        return r[n]
      }
    },
    mD = Eo('namespaceURI'),
    vD = Eo('prefix'),
    dD = Eo('localName'),
    DD = Eo('tagName')
  var Mo = function (n) {
      return function (r) {
        return function () {
          return r[n]
        }
      }
    },
    yD = Mo('children'),
    hD = Mo('firstElementChild'),
    TD = Mo('lastElementChild'),
    CD = Mo('childElementCount')
  function Tl(n) {
    return function (r) {
      return function () {
        return r.querySelector(n)
      }
    }
  }
  var ED = d(Y)
  var Cl = function (n) {
    var r = ED(Jn),
      t = Tl(n)
    return function (e) {
      return r(t(e))
    }
  }
  var xi = g
  var ba = function (n, r, t) {
    var e = 0,
      o
    return function (u) {
      if (e === 2) return o
      if (e === 1)
        throw new ReferenceError(
          n +
            ' was needed before it finished initializing (module ' +
            r +
            ', line ' +
            u +
            ')',
          r,
          u
        )
      return (e = 1), (o = t()), (e = 2), o
    }
  }
  var Ai = function (n) {
      return Ar(n.widget)
    },
    Ni = ba('patchWidget', 'Halogen.VDom.DOM', function () {
      return function (n, r) {
        if (r instanceof bt) return Ni(291)(n, ce(r.value0))
        if (r instanceof fe) {
          var t = xr(n.widget, r.value0),
            e = ga(function (o) {
              return Bn(
                new Un(o.value0, { build: n.build, widget: t }, Ni(296), Ai)
              )
            })(t)
          return e
        }
        return Ai(n), n.build(r)
      }
    }),
    xD = Ni(286),
    Fo = function (n) {
      var r = Ca(n.node)
      return Ta(n.node, r)
    },
    wo = ba('patchText', 'Halogen.VDom.DOM', function () {
      return function (n, r) {
        if (r instanceof bt) return wo(82)(n, ce(r.value0))
        if (r instanceof Vt) {
          if (n.value === r.value0) return Bn(new Un(n.node, n, wo(85), Fo))
          if (Dr) {
            var t = { build: n.build, node: n.node, value: r.value0 }
            return hi(r.value0, n.node), Bn(new Un(n.node, t, wo(89), Fo))
          }
        }
        return Fo(n), n.build(r)
      }
    }),
    AD = wo(77),
    Lo = function (n) {
      var r = Ca(n.node)
      return (
        Ta(n.node, r),
        Di(n.children, function (t, e) {
          return Ar(e)
        }),
        Ar(n.attrs)
      )
    },
    Io = function (n) {
      var r = Ca(n.node)
      return Ta(n.node, r), di(n.children, Ar), Ar(n.attrs)
    },
    bl = function (n, r, t, e) {
      var o = r === e
      return o
        ? (n instanceof D && t instanceof D && n.value0 === t.value0) ||
            (n instanceof y && t instanceof y)
        : !1
    },
    xo = ba('patchElem', 'Halogen.VDom.DOM', function () {
      return function (n, r) {
        if (r instanceof bt) return xo(135)(n, ce(r.value0))
        if (r instanceof Ct && bl(n.ns, n.name, r.value0, r.value1)) {
          var t = ie(r.value3),
            e = ie(n.children)
          if (e === 0 && t === 0) {
            var i = xr(n.attrs, r.value2),
              s = {
                build: n.build,
                node: n.node,
                attrs: i,
                ns: r.value0,
                name: r.value1,
                children: n.children,
              }
            return Bn(new Un(n.node, s, xo(149), Io))
          }
          var o = function (_, m) {
              return Ar(m)
            },
            u = function (_, m, v) {
              var p = xr(m, v)
              return Jt(_, _r(p), n.node), p
            },
            l = function (_, m) {
              var v = n.build(m)
              return Jt(_, _r(v), n.node), v
            },
            c = gi(n.children, r.value3, u, o, l),
            i = xr(n.attrs, r.value2),
            s = {
              build: n.build,
              node: n.node,
              attrs: i,
              ns: r.value0,
              name: r.value1,
              children: c,
            }
          return Bn(new Un(n.node, s, xo(172), Io))
        }
        return Io(n), n.build(r)
      }
    }),
    ND = xo(130),
    Ao = ba('patchKeyed', 'Halogen.VDom.DOM', function () {
      return function (n, r) {
        if (r instanceof bt) return Ao(222)(n, ce(r.value0))
        if (r instanceof Qt && bl(n.ns, n.name, r.value0, r.value1)) {
          var t = ie(r.value3)
          if (n.length === 0 && t === 0) {
            var c = xr(n.attrs, r.value2),
              i = {
                build: n.build,
                node: n.node,
                attrs: c,
                ns: r.value0,
                name: r.value1,
                children: n.children,
                length: 0,
              }
            return Bn(new Un(n.node, i, Ao(237), Lo))
          }
          var e = function (s, _) {
              return Ar(_)
            },
            o = function (s, _, m, v) {
              var p = xr(m, v.value1)
              return Jt(_, _r(p), n.node), p
            },
            u = function (s, _, m) {
              var v = n.build(m.value1)
              return Jt(_, _r(v), n.node), v
            },
            l = ha(n.children, r.value3, Fr, o, e, u),
            c = xr(n.attrs, r.value2),
            i = {
              build: n.build,
              node: n.node,
              attrs: c,
              ns: r.value0,
              name: r.value1,
              children: l,
              length: t,
            }
          return Bn(new Un(n.node, i, Ao(261), Lo))
        }
        return Lo(n), n.build(r)
      }
    }),
    HD = Ao(217),
    SD = function (n, r, t) {
      var e = n.buildWidget(n)(t),
        o = ga(function (u) {
          return Bn(new Un(u.value0, { build: r, widget: e }, xD, Ai))
        })(e)
      return o
    },
    RD = function (n, r, t) {
      var e = yi(t, n.document),
        o = { build: r, node: e, value: t }
      return Bn(new Un(e, o, AD, Fo))
    },
    WD = function (n, r, t, e, o, u) {
      var l = ho(Tt(t), e, n.document),
        c = xi(l),
        i = function (v, p, a) {
          var f = r(a.value1)
          return Jt(p, _r(f), c), f
        },
        s = ya(u, Fr, i),
        _ = n.buildAttributes(l)(o),
        m = {
          build: r,
          node: c,
          attrs: _,
          ns: t,
          name: e,
          children: s,
          length: ie(u),
        }
      return Bn(new Un(c, m, HD, Lo))
    },
    PD = function (n, r, t, e, o, u) {
      var l = ho(Tt(t), e, n.document),
        c = xi(l),
        i = function (v, p) {
          var a = r(p)
          return Jt(v, _r(a), c), a
        },
        s = vi(u, i),
        _ = n.buildAttributes(l)(o),
        m = { build: r, node: c, attrs: _, ns: t, name: e, children: s }
      return Bn(new Un(c, m, ND, Io))
    },
    Ea = function (n) {
      var r = ba('build', 'Halogen.VDom.DOM', function () {
          return function (e) {
            if (e instanceof Vt) return RD(n, r(59), e.value0)
            if (e instanceof Ct)
              return PD(n, r(60), e.value0, e.value1, e.value2, e.value3)
            if (e instanceof Qt)
              return WD(n, r(61), e.value0, e.value1, e.value2, e.value3)
            if (e instanceof fe) return SD(n, r(62), e.value0)
            if (e instanceof bt) return r(63)(ce(e.value0))
            throw new Error(
              'Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): ' +
                [e.constructor.name]
            )
          }
        }),
        t = r(58)
      return t
    }
  function Ri(n) {
    return typeof n
  }
  var Ml =
    Array.isArray ||
    function (n) {
      return Object.prototype.toString.call(n) === '[object Array]'
    }
  function jr(n) {
    return new Error(n)
  }
  function Gt(n) {
    return function () {
      throw n
    }
  }
  var wl = function (n) {
    return Gt(jr(n))
  }
  var qr = function (n) {
    return n.throwError
  }
  var Mt = function (n) {
    return n.catchError
  }
  var Wi = function (n) {
    var r = Mt(n),
      t = n.MonadThrow0().Monad0(),
      e = d(t.Bind1().Apply0().Functor0()),
      o = E(t.Applicative0())
    return function (u) {
      return r(e(xn.create)(u))(function (l) {
        return o(In.create(l))
      })
    }
  }
  var Ll = {
      liftEffect: X(Z),
      Monad0: function () {
        return Ot
      },
    },
    Gn = function (n) {
      return n.liftEffect
    }
  var Oi = (function () {
    var n = lo(Bc)
    return function (r) {
      return ti(n(r))
    }
  })()
  var xl = function (n) {
    return function (r) {
      return new at(n, new F(r.value0, r.value1))
    }
  }
  function Hl(n, r, t, e) {
    return t in e ? r(e[t]) : n
  }
  function $i(n) {
    return function (r) {
      var t = []
      for (var e in r) hasOwnProperty.call(r, e) && t.push(n(e)(r[e]))
      return t
    }
  }
  var sg =
    Object.keys ||
    $i(function (n) {
      return function () {
        return n
      }
    })
  var qi = function (n) {
    return function (r) {
      return function (t) {
        return function (e) {
          return function (o) {
            return n(r, t, e, o)
          }
        }
      }
    }
  }
  var Rl = (function () {
    return qi(Hl)(y.value)(D.create)
  })()
  function Ha(n) {
    return function () {
      return function (r) {
        return n(r)()
      }
    }
  }
  function Ui(n) {
    return function (r) {
      return function (t) {
        return function (e) {
          return function () {
            return e.addEventListener(n, r, t)
          }
        }
      }
    }
  }
  function Bi(n) {
    return function (r) {
      return function (t) {
        return function (e) {
          return function () {
            return e.removeEventListener(n, r, t)
          }
        }
      }
    }
  }
  var gg = function (n, r, t) {
    var e = 0,
      o
    return function (u) {
      if (e === 2) return o
      if (e === 1)
        throw new ReferenceError(
          n +
            ' was needed before it finished initializing (module ' +
            r +
            ', line ' +
            u +
            ')',
          r,
          u
        )
      return (e = 1), (o = t()), (e = 2), o
    }
  }
  var Ol = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    $l = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    jt = (function () {
      function n(r, t, e) {
        ;(this.value0 = r), (this.value1 = t), (this.value2 = e)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return function (e) {
              return new n(r, t, e)
            }
          }
        }),
        n
      )
    })(),
    Kt = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    pe = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Pe = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    yg = le,
    ki = Et,
    hg = function (n, r) {
      var t = Ti(null, n, r)
      if (t) return Co(null, n, r)
      var e = Ri(le(n, r))
      return e === 'string'
        ? Et(n, '', r)
        : n === 'rowSpan'
        ? Et(n, 1, r)
        : n === 'colSpan'
        ? Et(n, 1, r)
        : Et(n, Ei, r)
    },
    Pl = function (n) {
      if (n instanceof jt && n.value0 instanceof D)
        return 'attr/' + (n.value0.value0 + (':' + n.value1))
      if (n instanceof jt) return 'attr/:' + n.value1
      if (n instanceof Kt) return 'prop/' + n.value0
      if (n instanceof pe) return 'handler/' + n.value0
      if (n instanceof Pe) return 'ref'
      throw new Error(
        'Failed pattern match at Halogen.VDom.DOM.Prop (line 182, column 16 - line 187, column 16): ' +
          [n.constructor.name]
      )
    },
    ql = g
  var Ul = function (n) {
    return function (r) {
      var t = function (_) {
          return function (m, v) {
            if (v instanceof jt) return Co(Tt(v.value0), v.value1, r)
            if (v instanceof Kt) return hg(v.value0, r)
            if (v instanceof pe) {
              var p = Mi(v.value0, _)
              return bi(v.value0, Fr(p), r)
            }
            if (v instanceof Pe) return void 0
            throw new Error(
              'Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): ' +
                [v.constructor.name]
            )
          }
        },
        e = function (_) {
          return _ instanceof D ? n(_.value0)() : void 0
        },
        o = function (_) {
          var m = Rl('ref')(_.props)
          return m instanceof D && m.value0 instanceof Pe
            ? e(m.value0.value0(new $l(r)))
            : void 0
        },
        u = function (_, m) {
          return function (v, p, a, f) {
            if (a instanceof jt && f instanceof jt) {
              var H = a.value2 === f.value2
              return H || To(Tt(f.value0), f.value1, f.value2, r), f
            }
            if (a instanceof Kt && f instanceof Kt) {
              var cn = se(a.value1, f.value1)
              if (cn) return f
              if (f.value0 === 'value') {
                var Hn = yg('value', r),
                  Sn = se(Hn, f.value1)
                return Sn || ki(f.value0, f.value1, r), f
              }
              return ki(f.value0, f.value1, r), f
            }
            if (a instanceof pe && f instanceof pe) {
              var dn = Mi(f.value0, _)
              return Fn(f.value1)(pr(dn))(), wi(f.value0, dn, m), f
            }
            return f
          }
        },
        l = function (_) {
          return function (m, v, p) {
            if (p instanceof jt)
              return To(Tt(p.value0), p.value1, p.value2, r), p
            if (p instanceof Kt) return ki(p.value0, p.value1, r), p
            if (p instanceof pe) {
              var a = le(p.value0, _)
              if (mi(p.value0, _)) return Fn(p.value1)(pr(a))(), p
              var f = Wn(p.value1)(),
                H = Ha(function (cn) {
                  return function () {
                    var Sn = N(f)()
                    return e(Sn(cn))
                  }
                })()
              return wi(p.value0, new j(H, f), _), Ci(p.value0, H, r), p
            }
            if (p instanceof Pe) return e(p.value0(new Ol(r))), p
            throw new Error(
              'Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): ' +
                [p.constructor.name]
            )
          }
        },
        c = gg('patchProp', 'Halogen.VDom.DOM.Prop', function () {
          return function (_, m) {
            var v = Li(),
              p = t(_.events),
              a = u(_.events, v),
              f = l(v),
              H = ha(_.props, m, Pl, a, p, f),
              cn = { events: Fi(v), props: H }
            return Bn(new Un(void 0, cn, c(100), o))
          }
        }),
        i = c(87),
        s = function (_) {
          var m = Li(),
            v = ya(_, Pl, l(m)),
            p = { events: Fi(m), props: v }
          return Bn(new Un(void 0, p, i, o))
        }
      return s
    }
  }
  var Vl = function (n) {
    return n
  }
  var bg = function (n) {
      return n.toPropValue
    },
    So = function (n) {
      return Vl(Vt.create(n))
    }
  var Ql = function (n) {
    var r = bg(n)
    return function (t) {
      var e = Kt.create(t)
      return function (o) {
        return e(r(o))
      }
    }
  }
  var Jl = { toPropValue: ql }
  var Gl = function (n) {
    return function (r) {
      return function (t) {
        return function (e) {
          return new Ct(n, r, t, e)
        }
      }
    }
  }
  var Eg = X(Z)
  var Ro = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Vi = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Qi = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    jl = function (n) {
      return function (r) {
        return new Qi(n, r)
      }
    },
    Kl = (function () {
      return Vi.create
    })(),
    Xl = function (n) {
      var r = E(n)
      return function (t) {
        return function (e) {
          return function (o) {
            return function (u) {
              return function (l) {
                if (u instanceof Ro)
                  return new j(new F({ func: r(u.value0), count: l }, t), e)
                if (u instanceof Vi)
                  return new j(new F({ func: o(u.value0), count: l }, t), e)
                if (u instanceof Qi)
                  return Xl(n)(t)(xl(u.value1)(e))(o)(u.value0)((l + 1) | 0)
                throw new Error(
                  'Failed pattern match at Control.Applicative.Free (line 102, column 41 - line 105, column 81): ' +
                    [u.constructor.name]
                )
              }
            }
          }
        }
      }
    },
    Yl = function (n) {
      var r = En(n.Apply0())
      return function (t) {
        return function (e) {
          return function (o) {
            if (t instanceof q) return new In(o)
            if (t instanceof F) {
              var u = r(t.value0.func)(o),
                l = t.value0.count === 1
              if (l)
                return t.value1 instanceof q ? new In(u) : Yl(n)(t.value1)(e)(u)
              if (e instanceof q) return new In(u)
              if (e instanceof F)
                return new xn(
                  new j(
                    new F(
                      { func: u, count: (t.value0.count - 1) | 0 },
                      t.value1
                    ),
                    new at(e.value0, e.value1)
                  )
                )
              throw new Error(
                'Failed pattern match at Control.Applicative.Free (line 83, column 11 - line 88, column 50): ' +
                  [e.constructor.name]
              )
            }
            throw new Error(
              'Failed pattern match at Control.Applicative.Free (line 72, column 3 - line 88, column 50): ' +
                [t.constructor.name]
            )
          }
        }
      }
    },
    Zl = {
      map: function (n) {
        return function (r) {
          return jl(new Ro(n))(r)
        }
      },
    },
    ns = function (n) {
      var r = Yl(n),
        t = E(n),
        e = Xl(n)
      return function (o) {
        return function (u) {
          var l = function (c) {
            var i = !1,
              s
            function _(m) {
              if (m.value1.value0 instanceof Ro) {
                var v = r(m.value0)(m.value1.value1)(t(m.value1.value0.value0))
                if (v instanceof In) return (i = !0), v.value0
                if (v instanceof xn) {
                  c = v.value0
                  return
                }
                throw new Error(
                  'Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): ' +
                    [v.constructor.name]
                )
              }
              if (m.value1.value0 instanceof Vi) {
                var v = r(m.value0)(m.value1.value1)(o(m.value1.value0.value0))
                if (v instanceof In) return (i = !0), v.value0
                if (v instanceof xn) {
                  c = v.value0
                  return
                }
                throw new Error(
                  'Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): ' +
                    [v.constructor.name]
                )
              }
              if (m.value1.value0 instanceof Qi) {
                var p = new at(m.value1.value0.value1, m.value1.value1)
                c = e(m.value0)(p)(o)(m.value1.value0.value0)(1)
                return
              }
              throw new Error(
                'Failed pattern match at Control.Applicative.Free (line 53, column 5 - line 62, column 47): ' +
                  [m.value1.value0.constructor.name]
              )
            }
            for (; !i; ) s = _(c)
            return s
          }
          return l(new j(q.value, Oi(u)))
        }
      }
    },
    rs = function (n) {
      return ns(n)(Eg)
    },
    ts = {
      apply: function (n) {
        return function (r) {
          return jl(n)(r)
        }
      },
      Functor0: function () {
        return Zl
      },
    },
    es = (function () {
      return {
        pure: Ro.create,
        Apply0: function () {
          return ts
        },
      }
    })(),
    Mg = ns(es),
    Ji = function (n) {
      return Mg(function (r) {
        return Kl(n(r))
      })
    }
  var Wo = (function () {
    function n(r, t) {
      ;(this.value0 = r), (this.value1 = t)
    }
    return (
      (n.create = function (r) {
        return function (t) {
          return new n(r, t)
        }
      }),
      n
    )
  })()
  var os = function (n) {
      var r = !1,
        t
      function e(o) {
        if (o.value0 instanceof q && o.value1 instanceof q)
          return (r = !0), y.value
        if (o.value0 instanceof q) {
          n = new Wo(ue(o.value1), q.value)
          return
        }
        if (o.value0 instanceof F)
          return (
            (r = !0),
            new D(new j(o.value0.value0, new Wo(o.value0.value1, o.value1)))
          )
        throw new Error(
          'Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): ' +
            [o.constructor.name]
        )
      }
      for (; !r; ) t = e(n)
      return t
    },
    us = function (n) {
      return function (r) {
        return new Wo(n.value0, new F(r, n.value1))
      }
    }
  var is = function (n) {
    return n.value0 instanceof q && n.value1 instanceof q
  }
  var fs = (function () {
    return new Wo(q.value, q.value)
  })()
  var Oe = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    Po = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })()
  var cs = function (n) {
      return function (r) {
        if (n instanceof Oe) return r
        if (r instanceof Oe) return n
        if (n instanceof Po) return new Po(n.value0, us(n.value1)(r))
        throw new Error(
          'Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): ' +
            [n.constructor.name, r.constructor.name]
        )
      }
    },
    wg = function (n) {
      return function (r) {
        return function (t) {
          var e = function (u) {
              return function (l) {
                return function (c) {
                  var i = u,
                    s = l,
                    _ = !1,
                    m
                  function v(p, a, f) {
                    if (f instanceof q) return (_ = !0), a
                    if (f instanceof F) {
                      ;(i = p), (s = p(a)(f.value0)), (c = f.value1)
                      return
                    }
                    throw new Error(
                      'Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): ' +
                        [
                          p.constructor.name,
                          a.constructor.name,
                          f.constructor.name,
                        ]
                    )
                  }
                  for (; !_; ) m = v(i, s, c)
                  return m
                }
              }
            },
            o = function (u) {
              return function (l) {
                var c = u,
                  i = !1,
                  s
                function _(m, v) {
                  var p = os(m)
                  if (p instanceof y)
                    return (
                      (i = !0),
                      e(function (a) {
                        return function (f) {
                          return f(a)
                        }
                      })(r)(v)
                    )
                  if (p instanceof D) {
                    ;(c = p.value0.value1), (l = new F(n(p.value0.value0), v))
                    return
                  }
                  throw new Error(
                    'Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): ' +
                      [p.constructor.name]
                  )
                }
                for (; !i; ) s = _(c, l)
                return s
              }
            }
          return o(t)(q.value)
        }
      }
    },
    ls = function (n) {
      if (n instanceof Oe) return y.value
      if (n instanceof Po)
        return new D(
          new j(
            n.value0,
            (function () {
              var r = is(n.value1)
              return r ? Oe.value : wg(cs)(Oe.value)(n.value1)
            })()
          )
        )
      throw new Error(
        'Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): ' +
          [n.constructor.name]
      )
    }
  var ss = (function () {
      return Oe.value
    })(),
    ps = cs
  var _s = { append: ps }
  var ms = function (n) {
    return function (r) {
      return ps(n)(new Po(r, fs))
    }
  }
  var Ig = function (n, r, t) {
      var e = 0,
        o
      return function (u) {
        if (e === 2) return o
        if (e === 1)
          throw new ReferenceError(
            n +
              ' was needed before it finished initializing (module ' +
              r +
              ', line ' +
              u +
              ')',
            r,
            u
          )
        return (e = 1), (o = t()), (e = 2), o
      }
    },
    xg = G(_s)
  var ji = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Oo = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Gi = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Ag = function (n) {
      var r = !1,
        t
      function e(o) {
        var u = function (i) {
            return i
          },
          l = function (i) {
            return function (s) {
              return new ji(i.value0, xg(i.value1)(s))
            }
          }
        if (o.value0 instanceof Oo) {
          var c = ls(o.value1)
          if (c instanceof y) return (r = !0), new Oo(o.value0.value0)
          if (c instanceof D) {
            n = l(u(c.value0.value0)(o.value0.value0))(c.value0.value1)
            return
          }
          throw new Error(
            'Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): ' +
              [c.constructor.name]
          )
        }
        if (o.value0 instanceof Gi)
          return (
            (r = !0),
            new Gi(o.value0.value0, function (i) {
              return l(o.value0.value1(i))(o.value1)
            })
          )
        throw new Error(
          'Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): ' +
            [o.value0.constructor.name]
        )
      }
      for (; !r; ) t = e(n)
      return t
    }
  var Ng = function (n) {
    return new ji(n, ss)
  }
  var vs = {
      Applicative0: function () {
        return $o
      },
      Bind1: function () {
        return Xi
      },
    },
    Ki = {
      map: function (n) {
        return function (r) {
          return Zn(Xi)(
            (function () {
              var t = E($o)
              return function (e) {
                return t(n(e))
              }
            })()
          )(r)
        }
      },
    },
    Xi = {
      bind: function (n) {
        return function (r) {
          return new ji(n.value0, ms(n.value1)(r))
        }
      },
      Apply0: function () {
        return ds(0)
      },
    },
    $o = {
      pure: function (n) {
        return Ng(Oo.create(n))
      },
      Apply0: function () {
        return ds(0)
      },
    },
    ds = Ig('freeApply', 'Control.Monad.Free', function () {
      return {
        apply: Lr(vs),
        Functor0: function () {
          return Ki
        },
      }
    })
  var Ds = function (n) {
    var r = n.Monad0(),
      t = d(r.Bind1().Apply0().Functor0()),
      e = E(r.Applicative0()),
      o = zr(n)
    return function (u) {
      var l = function (c) {
        var i = Ag(c)
        if (i instanceof Oo) return t(ar.create)(e(i.value0))
        if (i instanceof Gi)
          return t(function (s) {
            return cr.create(i.value1(s))
          })(u(i.value0))
        throw new Error(
          'Failed pattern match at Control.Monad.Free (line 158, column 10 - line 160, column 37): ' +
            [i.constructor.name]
        )
      }
      return o(l)
    }
  }
  var lr = (function () {
      var n = {},
        r = 'Pure',
        t = 'Throw',
        e = 'Catch',
        o = 'Sync',
        u = 'Async',
        l = 'Bind',
        c = 'Bracket',
        i = 'Fork',
        s = 'Sequential',
        _ = 'Map',
        m = 'Apply',
        v = 'Alt',
        p = 'Cons',
        a = 'Resume',
        f = 'Release',
        H = 'Finalizer',
        cn = 'Finalized',
        Hn = 'Forked',
        Sn = 'Fiber',
        dn = 'Thunk'
      function x(I, yn, kn, Cn) {
        ;(this.tag = I), (this._1 = yn), (this._2 = kn), (this._3 = Cn)
      }
      function Yn(I) {
        var yn = function (kn, Cn, S) {
          return new x(I, kn, Cn, S)
        }
        return (yn.tag = I), yn
      }
      function Zt(I) {
        return new x(r, void 0)
      }
      function hu(I) {
        try {
          I()
        } catch (yn) {
          setTimeout(function () {
            throw yn
          }, 0)
        }
      }
      function Tu(I, yn, kn) {
        try {
          return yn(kn())
        } catch (Cn) {
          return I(Cn)
        }
      }
      function Cu(I, yn, kn) {
        try {
          return yn(kn)()
        } catch (Cn) {
          return kn(I(Cn))(), Zt
        }
      }
      var Ua = (function () {
        var I = 1024,
          yn = 0,
          kn = 0,
          Cn = new Array(I),
          S = !1
        function b() {
          var Tn
          for (S = !0; yn !== 0; )
            yn--, (Tn = Cn[kn]), (Cn[kn] = void 0), (kn = (kn + 1) % I), Tn()
          S = !1
        }
        return {
          isDraining: function () {
            return S
          },
          enqueue: function (Tn) {
            var tn, Pn
            yn === I && ((Pn = S), b(), (S = Pn)),
              (Cn[(kn + yn) % I] = Tn),
              yn++,
              S || b()
          },
        }
      })()
      function p_(I) {
        var yn = {},
          kn = 0,
          Cn = 0
        return {
          register: function (S) {
            var b = kn++
            S.onComplete({
              rethrow: !0,
              handler: function (Tn) {
                return function () {
                  Cn--, delete yn[b]
                }
              },
            })(),
              (yn[b] = S),
              Cn++
          },
          isEmpty: function () {
            return Cn === 0
          },
          killAll: function (S, b) {
            return function () {
              if (Cn === 0) return b()
              var Tn = 0,
                tn = {}
              function Pn(wn) {
                tn[wn] = yn[wn].kill(S, function (Kn) {
                  return function () {
                    delete tn[wn],
                      Tn--,
                      I.isLeft(Kn) &&
                        I.fromLeft(Kn) &&
                        setTimeout(function () {
                          throw I.fromLeft(Kn)
                        }, 0),
                      Tn === 0 && b()
                  }
                })()
              }
              for (var ir in yn) yn.hasOwnProperty(ir) && (Tn++, Pn(ir))
              return (
                (yn = {}),
                (kn = 0),
                (Cn = 0),
                function (wn) {
                  return new x(o, function () {
                    for (var Kn in tn) tn.hasOwnProperty(Kn) && tn[Kn]()
                  })
                }
              )
            }
          },
        }
      }
      var ye = 0,
        Er = 1,
        Ba = 2,
        ka = 3,
        za = 4,
        Nr = 5,
        je = 6
      function bu(I, yn, kn) {
        var Cn = 0,
          S = ye,
          b = kn,
          Tn = null,
          tn = null,
          Pn = null,
          ir = null,
          wn = null,
          Kn = 0,
          ne = 0,
          Ur = null,
          Ft = !0
        function wt(R) {
          for (var $, _n, Dn; ; )
            switch ((($ = null), (_n = null), (Dn = null), S)) {
              case Ba:
                S = Er
                try {
                  ;(b = Pn(b)),
                    ir === null ? (Pn = null) : ((Pn = ir._1), (ir = ir._2))
                } catch (sr) {
                  ;(S = Nr), (Tn = I.left(sr)), (b = null)
                }
                break
              case ka:
                I.isLeft(b)
                  ? ((S = Nr), (Tn = b), (b = null))
                  : Pn === null
                  ? (S = Nr)
                  : ((S = Ba), (b = I.fromRight(b)))
                break
              case Er:
                switch (b.tag) {
                  case l:
                    Pn && (ir = new x(p, Pn, ir)),
                      (Pn = b._2),
                      (S = Er),
                      (b = b._1)
                    break
                  case r:
                    Pn === null
                      ? ((S = Nr), (b = I.right(b._1)))
                      : ((S = Ba), (b = b._1))
                    break
                  case o:
                    ;(S = ka), (b = Tu(I.left, I.right, b._1))
                    break
                  case u:
                    ;(S = za),
                      (b = Cu(I.left, b._1, function (sr) {
                        return function () {
                          Cn === R &&
                            (Cn++,
                            Ua.enqueue(function () {
                              Cn === R + 1 && ((S = ka), (b = sr), wt(Cn))
                            }))
                        }
                      }))
                    return
                  case t:
                    ;(S = Nr), (Tn = I.left(b._1)), (b = null)
                    break
                  case e:
                    Pn === null
                      ? (wn = new x(p, b, wn, tn))
                      : (wn = new x(
                          p,
                          b,
                          new x(p, new x(a, Pn, ir), wn, tn),
                          tn
                        )),
                      (Pn = null),
                      (ir = null),
                      (S = Er),
                      (b = b._1)
                    break
                  case c:
                    Kn++,
                      Pn === null
                        ? (wn = new x(p, b, wn, tn))
                        : (wn = new x(
                            p,
                            b,
                            new x(p, new x(a, Pn, ir), wn, tn),
                            tn
                          )),
                      (Pn = null),
                      (ir = null),
                      (S = Er),
                      (b = b._1)
                    break
                  case i:
                    ;(S = ka),
                      ($ = bu(I, yn, b._2)),
                      yn && yn.register($),
                      b._1 && $.run(),
                      (b = I.right($))
                    break
                  case s:
                    ;(S = Er), (b = m_(I, yn, b._1))
                    break
                }
                break
              case Nr:
                if (((Pn = null), (ir = null), wn === null))
                  (S = je), (b = tn || Tn || b)
                else
                  switch ((($ = wn._3), (Dn = wn._1), (wn = wn._2), Dn.tag)) {
                    case e:
                      tn && tn !== $ && Kn === 0
                        ? (S = Nr)
                        : Tn &&
                          ((S = Er), (b = Dn._2(I.fromLeft(Tn))), (Tn = null))
                      break
                    case a:
                      ;(tn && tn !== $ && Kn === 0) || Tn
                        ? (S = Nr)
                        : ((Pn = Dn._1),
                          (ir = Dn._2),
                          (S = Ba),
                          (b = I.fromRight(b)))
                      break
                    case c:
                      Kn--,
                        Tn === null &&
                          ((_n = I.fromRight(b)),
                          (wn = new x(p, new x(f, Dn._2, _n), wn, $)),
                          (tn === $ || Kn > 0) && ((S = Er), (b = Dn._3(_n))))
                      break
                    case f:
                      ;(wn = new x(p, new x(cn, b, Tn), wn, tn)),
                        (S = Er),
                        tn && tn !== $ && Kn === 0
                          ? (b = Dn._1.killed(I.fromLeft(tn))(Dn._2))
                          : Tn
                          ? (b = Dn._1.failed(I.fromLeft(Tn))(Dn._2))
                          : (b = Dn._1.completed(I.fromRight(b))(Dn._2)),
                        (Tn = null),
                        Kn++
                      break
                    case H:
                      Kn++,
                        (wn = new x(p, new x(cn, b, Tn), wn, tn)),
                        (S = Er),
                        (b = Dn._1)
                      break
                    case cn:
                      Kn--, (S = Nr), (b = Dn._1), (Tn = Dn._2)
                      break
                  }
                break
              case je:
                for (var Vn in Ur)
                  Ur.hasOwnProperty(Vn) &&
                    ((Ft = Ft && Ur[Vn].rethrow), hu(Ur[Vn].handler(b)))
                ;(Ur = null),
                  tn && Tn
                    ? setTimeout(function () {
                        throw I.fromLeft(Tn)
                      }, 0)
                    : I.isLeft(b) &&
                      Ft &&
                      setTimeout(function () {
                        if (Ft) throw I.fromLeft(b)
                      }, 0)
                return
              case ye:
                S = Er
                break
              case za:
                return
            }
        }
        function zn(R) {
          return function () {
            if (S === je)
              return (Ft = Ft && R.rethrow), R.handler(b)(), function () {}
            var $ = ne++
            return (
              (Ur = Ur || {}),
              (Ur[$] = R),
              function () {
                Ur !== null && delete Ur[$]
              }
            )
          }
        }
        function U(R, $) {
          return function () {
            if (S === je) return $(I.right(void 0))(), function () {}
            var _n = zn({
              rethrow: !1,
              handler: function () {
                return $(I.right(void 0))
              },
            })()
            switch (S) {
              case ye:
                ;(tn = I.left(R)), (S = je), (b = tn), wt(Cn)
                break
              case za:
                tn === null && (tn = I.left(R)),
                  Kn === 0 &&
                    (S === za && (wn = new x(p, new x(H, b(R)), wn, tn)),
                    (S = Nr),
                    (b = null),
                    (Tn = null),
                    wt(++Cn))
                break
              default:
                tn === null && (tn = I.left(R)),
                  Kn === 0 && ((S = Nr), (b = null), (Tn = null))
            }
            return _n
          }
        }
        function an(R) {
          return function () {
            var $ = zn({ rethrow: !1, handler: R })()
            return S === ye && wt(Cn), $
          }
        }
        return {
          kill: U,
          join: an,
          onComplete: zn,
          isSuspended: function () {
            return S === ye
          },
          run: function () {
            S === ye &&
              (Ua.isDraining()
                ? wt(Cn)
                : Ua.enqueue(function () {
                    wt(Cn)
                  }))
          },
        }
      }
      function __(I, yn, kn, Cn) {
        var S = 0,
          b = {},
          Tn = 0,
          tn = {},
          Pn = new Error('[ParAff] Early exit'),
          ir = null,
          wn = n
        function Kn(zn, U, an) {
          var R = U,
            $ = null,
            _n = null,
            Dn = 0,
            Vn = {},
            sr,
            Ke
          n: for (;;)
            switch (((sr = null), R.tag)) {
              case Hn:
                if (
                  (R._3 === n &&
                    ((sr = b[R._1]),
                    (Vn[Dn++] = sr.kill(zn, function (v_) {
                      return function () {
                        Dn--, Dn === 0 && an(v_)()
                      }
                    }))),
                  $ === null)
                )
                  break n
                ;(R = $._2),
                  _n === null ? ($ = null) : (($ = _n._1), (_n = _n._2))
                break
              case _:
                R = R._2
                break
              case m:
              case v:
                $ && (_n = new x(p, $, _n)), ($ = R), (R = R._1)
                break
            }
          if (Dn === 0) an(I.right(void 0))()
          else for (Ke = 0, sr = Dn; Ke < sr; Ke++) Vn[Ke] = Vn[Ke]()
          return Vn
        }
        function ne(zn, U, an) {
          var R, $, _n, Dn, Vn, sr
          I.isLeft(zn) ? ((R = zn), ($ = null)) : (($ = zn), (R = null))
          n: for (;;) {
            if (
              ((_n = null), (Dn = null), (Vn = null), (sr = null), ir !== null)
            )
              return
            if (U === null) {
              Cn(R || $)()
              return
            }
            if (U._3 !== n) return
            switch (U.tag) {
              case _:
                R === null
                  ? ((U._3 = I.right(U._1(I.fromRight($)))), ($ = U._3))
                  : (U._3 = R)
                break
              case m:
                if (((_n = U._1._3), (Dn = U._2._3), R)) {
                  if (
                    ((U._3 = R),
                    (Vn = !0),
                    (sr = Tn++),
                    (tn[sr] = Kn(Pn, R === _n ? U._2 : U._1, function () {
                      return function () {
                        delete tn[sr],
                          Vn
                            ? (Vn = !1)
                            : an === null
                            ? ne(R, null, null)
                            : ne(R, an._1, an._2)
                      }
                    })),
                    Vn)
                  ) {
                    Vn = !1
                    return
                  }
                } else {
                  if (_n === n || Dn === n) return
                  ;($ = I.right(I.fromRight(_n)(I.fromRight(Dn)))), (U._3 = $)
                }
                break
              case v:
                if (
                  ((_n = U._1._3),
                  (Dn = U._2._3),
                  (_n === n && I.isLeft(Dn)) || (Dn === n && I.isLeft(_n)))
                )
                  return
                if (_n !== n && I.isLeft(_n) && Dn !== n && I.isLeft(Dn))
                  (R = $ === _n ? Dn : _n), ($ = null), (U._3 = R)
                else if (
                  ((U._3 = $),
                  (Vn = !0),
                  (sr = Tn++),
                  (tn[sr] = Kn(Pn, $ === _n ? U._2 : U._1, function () {
                    return function () {
                      delete tn[sr],
                        Vn
                          ? (Vn = !1)
                          : an === null
                          ? ne($, null, null)
                          : ne($, an._1, an._2)
                    }
                  })),
                  Vn)
                ) {
                  Vn = !1
                  return
                }
                break
            }
            an === null ? (U = null) : ((U = an._1), (an = an._2))
          }
        }
        function Ur(zn) {
          return function (U) {
            return function () {
              delete b[zn._1], (zn._3 = U), ne(U, zn._2._1, zn._2._2)
            }
          }
        }
        function Ft() {
          var zn = Er,
            U = kn,
            an = null,
            R = null,
            $,
            _n
          n: for (;;)
            switch ((($ = null), (_n = null), zn)) {
              case Er:
                switch (U.tag) {
                  case _:
                    an && (R = new x(p, an, R)),
                      (an = new x(_, U._1, n, n)),
                      (U = U._2)
                    break
                  case m:
                    an && (R = new x(p, an, R)),
                      (an = new x(m, n, U._2, n)),
                      (U = U._1)
                    break
                  case v:
                    an && (R = new x(p, an, R)),
                      (an = new x(v, n, U._2, n)),
                      (U = U._1)
                    break
                  default:
                    ;(_n = S++),
                      (zn = Nr),
                      ($ = U),
                      (U = new x(Hn, _n, new x(p, an, R), n)),
                      ($ = bu(I, yn, $)),
                      $.onComplete({ rethrow: !1, handler: Ur(U) })(),
                      (b[_n] = $),
                      yn && yn.register($)
                }
                break
              case Nr:
                if (an === null) break n
                an._1 === n
                  ? ((an._1 = U), (zn = Er), (U = an._2), (an._2 = n))
                  : ((an._2 = U),
                    (U = an),
                    R === null ? (an = null) : ((an = R._1), (R = R._2)))
            }
          for (wn = U, _n = 0; _n < S; _n++) b[_n].run()
        }
        function wt(zn, U) {
          ir = I.left(zn)
          var an
          for (var R in tn)
            if (tn.hasOwnProperty(R)) {
              an = tn[R]
              for (R in an) an.hasOwnProperty(R) && an[R]()
            }
          tn = null
          var $ = Kn(zn, wn, U)
          return function (_n) {
            return new x(u, function (Dn) {
              return function () {
                for (var Vn in $) $.hasOwnProperty(Vn) && $[Vn]()
                return Zt
              }
            })
          }
        }
        return (
          Ft(),
          function (zn) {
            return new x(u, function (U) {
              return function () {
                return wt(zn, U)
              }
            })
          }
        )
      }
      function m_(I, yn, kn) {
        return new x(u, function (Cn) {
          return function () {
            return __(I, yn, kn, Cn)
          }
        })
      }
      return (
        (x.EMPTY = n),
        (x.Pure = Yn(r)),
        (x.Throw = Yn(t)),
        (x.Catch = Yn(e)),
        (x.Sync = Yn(o)),
        (x.Async = Yn(u)),
        (x.Bind = Yn(l)),
        (x.Bracket = Yn(c)),
        (x.Fork = Yn(i)),
        (x.Seq = Yn(s)),
        (x.ParMap = Yn(_)),
        (x.ParApply = Yn(m)),
        (x.ParAlt = Yn(v)),
        (x.Fiber = bu),
        (x.Supervisor = p_),
        (x.Scheduler = Ua),
        (x.nonCanceler = Zt),
        x
      )
    })(),
    Ls = lr.Pure,
    Is = lr.Throw
  function xs(n) {
    return function (r) {
      return lr.Catch(n, r)
    }
  }
  function As(n) {
    return function (r) {
      return r.tag === lr.Pure.tag
        ? lr.Pure(n(r._1))
        : lr.Bind(r, function (t) {
            return lr.Pure(n(t))
          })
    }
  }
  function Ns(n) {
    return function (r) {
      return lr.Bind(n, r)
    }
  }
  function Zi(n) {
    return function (r) {
      return lr.Fork(n, r)
    }
  }
  var Hs = lr.Sync
  function Ss(n) {
    return function (r) {
      return lr.ParMap(n, r)
    }
  }
  function Rs(n) {
    return function (r) {
      return lr.ParApply(n, r)
    }
  }
  var $e = lr.Async
  function qo(n) {
    return function (r) {
      return function (t) {
        return lr.Bracket(n, r, t)
      }
    }
  }
  function Ws(n, r) {
    return function () {
      return lr.Fiber(n, null, r)
    }
  }
  var Wg = (function () {
      function n(t, e) {
        return t === 0 && typeof setImmediate < 'u'
          ? setImmediate(e)
          : setTimeout(e, t)
      }
      function r(t, e) {
        return t === 0 && typeof clearImmediate < 'u'
          ? clearImmediate(e)
          : clearTimeout(e)
      }
      return function (t, e) {
        return lr.Async(function (o) {
          return function () {
            var u = n(e, o(t()))
            return function () {
              return lr.Sync(function () {
                return t(r(e, u))
              })
            }
          }
        })
      }
    })(),
    Ps = lr.Seq
  var qe = function (n) {
      return n.sequential
    },
    Xt = function (n) {
      return n.parallel
    }
  var kg = X(Z),
    zg = function (n) {
      var r = qe(n),
        t = nr(n.Applicative1()),
        e = Xt(n)
      return function (o) {
        var u = t(o)
        return function (l) {
          var c = u(function (i) {
            return e(l(i))
          })
          return function (i) {
            return r(c(i))
          }
        }
      }
    }
  var Ra = function (n) {
    var r = zg(n)
    return function (t) {
      return r(t)(kg)
    }
  }
  var Uo = function (n) {
    return n()
  }
  var $s = function (n, r, t) {
      var e = 0,
        o
      return function (u) {
        if (e === 2) return o
        if (e === 1)
          throw new ReferenceError(
            n +
              ' was needed before it finished initializing (module ' +
              r +
              ', line ' +
              u +
              ')',
            r,
            u
          )
        return (e = 1), (o = t()), (e = 2), o
      }
    },
    Qg = E(Qn),
    qs = On(Y),
    Us = d(Y)
  var Jg = function (n) {
      return n
    },
    Bs = Zi(!1)
  var Gg = { map: Ss },
    Ue = { map: As },
    jg = d(Ue),
    ks = Zi(!0),
    Kg = (function () {
      var n = function (e) {
          if (e instanceof xn) return e.value0
          if (e instanceof In) return Ut('unsafeFromRight: Left')
          throw new Error(
            'Failed pattern match at Effect.Aff (line 407, column 21 - line 409, column 54): ' +
              [e.constructor.name]
          )
        },
        r = function (e) {
          if (e instanceof In) return e.value0
          if (e instanceof xn) return Ut('unsafeFromLeft: Right')
          throw new Error(
            'Failed pattern match at Effect.Aff (line 402, column 20 - line 404, column 55): ' +
              [e.constructor.name]
          )
        },
        t = function (e) {
          if (e instanceof In) return !0
          if (e instanceof xn) return !1
          throw new Error(
            'Failed pattern match at Effect.Aff (line 397, column 12 - line 399, column 21): ' +
              [e.constructor.name]
          )
        }
      return {
        isLeft: t,
        fromLeft: r,
        fromRight: n,
        left: In.create,
        right: xn.create,
      }
    })(),
    zs = function (n) {
      return Ws(Kg, n)
    },
    Xg = function (n) {
      return function () {
        var t = zs(n)()
        return t.run(), t
      }
    }
  var Yg = function (n) {
      return function (r) {
        return qo(n)({ killed: J(r), failed: J(r), completed: J(r) })
      }
    },
    Zg = {
      apply: Rs,
      Functor0: function () {
        return Gg
      },
    }
  var _e = {
      Applicative0: function () {
        return ct
      },
      Bind1: function () {
        return dr
      },
    },
    dr = {
      bind: Ns,
      Apply0: function () {
        return Vs(0)
      },
    },
    ct = {
      pure: Ls,
      Apply0: function () {
        return Vs(0)
      },
    },
    Vs = $s('applyAff', 'Effect.Aff', function () {
      return {
        apply: Lr(_e),
        Functor0: function () {
          return Ue
        },
      }
    })
  var ko = E(ct),
    Qs = V(dr)
  var ny = Zn(dr)
  var Js = function (n) {
    return function (r) {
      return Yg(ko(void 0))(J(n))(J(r))
    }
  }
  var lt = {
      liftEffect: Hs,
      Monad0: function () {
        return _e
      },
    },
    Bo = Gn(lt),
    zo = function (n) {
      return Jg(J(Bo(n)))
    },
    Wa = function (n) {
      return $e(function (r) {
        return Us(zo)(n.join(r))
      })
    },
    Gs = {
      map: function (n) {
        return function (r) {
          return Uo(zs(jg(n)(Wa(r))))
        }
      },
    }
  var Pa = function (n) {
    return function (r) {
      return Qs(Bo(r.isSuspended))(function (t) {
        return t
          ? Bo(qs(r.kill(n, J(Qg(void 0)))))
          : $e(function (e) {
              return Us(zo)(r.kill(n, e))
            })
      })
    }
  }
  var Vo = {
      throwError: Is,
      Monad0: function () {
        return _e
      },
    },
    js = {
      catchError: xs,
      MonadThrow0: function () {
        return Vo
      },
    },
    ry = Wi(js)
  var ty = function (n) {
      return function (r) {
        return Xg(
          ny(function (t) {
            return Bo(n(t))
          })(ry(r))
        )
      }
    },
    Qo = function (n) {
      return function (r) {
        return qs(ty(n)(r))
      }
    }
  var me = {
      parallel: g,
      sequential: Ps,
      Monad0: function () {
        return _e
      },
      Applicative1: function () {
        return Ks(0)
      },
    },
    Ks = $s('applicativeParAff', 'Effect.Aff', function () {
      return {
        pure: (function () {
          var n = Xt(me)
          return function (r) {
            return n(ko(r))
          }
        })(),
        Apply0: function () {
          return Zg
        },
      }
    }),
    tf = Ks(131)
  var Xs = {
    tailRecM: function (n) {
      var r = function (t) {
        return Qs(n(t))(function (e) {
          if (e instanceof ar) return ko(e.value0)
          if (e instanceof cr) return r(e.value0)
          throw new Error(
            'Failed pattern match at Effect.Aff (line 102, column 7 - line 104, column 23): ' +
              [e.constructor.name]
          )
        })
      }
      return r
    },
    Monad0: function () {
      return _e
    },
  }
  var Ys = J(ko(void 0))
  var Zs = g
  function ef(n) {
    return function (r) {
      return n === r
    }
  }
  var Be = ef
  var fy = On(Y)
  var cy = V(Or)
  var ly = G(Te),
    sy = nr(Qn),
    py = sy(Pt)
  var Jo = function (n) {
      return n
    },
    rp = function (n) {
      return function (r) {
        return n(function (t) {
          return fy(r(t))
        })
      }
    }
  var tp = function (n) {
    return function (r) {
      return n(r)
    }
  }
  var ep = function () {
    var r = Wn([])()
    return {
      emitter: function (t) {
        return function () {
          return (
            $r(function (o) {
              return ly(o)([t])
            })(r)(),
            $r(dl(Be)(t))(r)
          )
        }
      },
      listener: function (t) {
        return cy(N(r))(
          py(function (e) {
            return e(t)
          })
        )
      },
    }
  }
  var op = function (n) {
      return n
    },
    up = function (n) {
      return n
    },
    Go = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    jo = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Ko = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Xo = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Yo = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Zo = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    nu = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    ru = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    tu = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    eu = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    au = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })()
  var uf = Qr,
    ou = Qr
  var uu = Ki
  var ff = $o
  var ke = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    ze = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    Ve = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Qe = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })(),
    Je = (function () {
      function n(r, t) {
        ;(this.value0 = r), (this.value1 = t)
      }
      return (
        (n.create = function (r) {
          return function (t) {
            return new n(r, t)
          }
        }),
        n
      )
    })()
  var vy = function (n, r, t) {
    var e = 0,
      o
    return function (u) {
      if (e === 2) return o
      if (e === 1)
        throw new ReferenceError(
          n +
            ' was needed before it finished initializing (module ' +
            r +
            ', line ' +
            u +
            ')',
          r,
          u
        )
      return (e = 1), (o = t()), (e = 2), o
    }
  }
  var dy = function (n, r) {
    return (
      se(n.value0, r.value0) &&
      se(n.value1, r.value1) &&
      n.value1(n.value3, r.value3)
    )
  }
  var ip = function (n) {
    return n.value2(n.value3)
  }
  var fp = function (n) {
    var r = function (u) {
        return Ar(u.vdom)
      },
      t = vy('patchThunk', 'Halogen.VDom.Thunk', function () {
        return function (u, l) {
          var c = dy(u.thunk, l)
          if (c) return Bn(new Un(_r(u.vdom), u, t(112), r))
          var i = xr(u.vdom, n(ip(l)))
          return Bn(new Un(_r(i), { vdom: i, thunk: l }, t(115), r))
        }
      }),
      e = t(108),
      o = function (u) {
        return function (l) {
          var c = Ea(u)(n(ip(l)))
          return Bn(new Un(_r(c), { thunk: l, vdom: c }, e, r))
        }
      }
    return o
  }
  var iu = Xe(uu),
    pf = nr(ff)(hr),
    Dy = d(uu)
  var cp = E(ff)
  var fu = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    cu = (function () {
      function n(r) {
        this.value0 = r
      }
      return (
        (n.create = function (r) {
          return new n(r)
        }),
        n
      )
    })(),
    _f = g,
    mf = g,
    vf = function (n) {
      return function (r) {
        if (r instanceof ke)
          return iu(pf(n.handleAction)(n.initialize))(r.value0)
        if (r instanceof ze) return iu(pf(n.handleAction)(n.finalize))(r.value0)
        if (r instanceof Ve)
          return iu(pf(n.handleAction)(n.receive(r.value0)))(r.value1)
        if (r instanceof Qe) return iu(n.handleAction(r.value0))(r.value1)
        if (r instanceof Je)
          return wc(function (t) {
            var e = Dy(An(r.value1(void 0))(t))
            return function (o) {
              return e(n.handleQuery(o))
            }
          })(r.value0)
        throw new Error(
          'Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 71): ' +
            [r.constructor.name]
        )
      }
    }
  var df = g
  var Df = (function () {
    return {
      handleAction: J(cp(void 0)),
      handleQuery: J(cp(y.value)),
      receive: J(y.value),
      initialize: y.value,
      finalize: y.value,
    }
  })()
  var su = (function () {
    return Gl(y.value)
  })()
  var gf = su('h1')
  var yf = su('p')
  var hf = su('div')
  var yy = Pr()
  var lp = function (n) {
    return Ql(n)
  }
  var hy = lp(Jl)
  var pu = (function () {
    var n = hy('className'),
      r = vo(' '),
      t = d(Sr)(yy)
    return function (e) {
      return n(r(t(e)))
    }
  })()
  var Cy = function (n) {
      return hf([pu(['container', 'mx-auto', 'p-4', 'bg-white', 'h-screen'])])([
        gf([pu(['text-4xl'])])([So('PureScript and Halogen')]),
        yf([pu(['mt-2'])])([
          So(' A basic application written with PureScript and Halogen.'),
        ]),
      ])
    },
    sp = df({
      initialState: function (n) {
        return {}
      },
      render: Cy,
      eval: vf(Df),
    })
  var de = function () {
    return window
  }
  function pp(n) {
    return function () {
      return n.readyState
    }
  }
  var Oa = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    wy = (function () {
      function n() {}
      return (n.value = new n()), n
    })(),
    Ly = (function () {
      function n() {}
      return (n.value = new n()), n
    })()
  var _p = function (n) {
    return n === 'loading'
      ? new D(Oa.value)
      : n === 'interactive'
      ? new D(wy.value)
      : n === 'complete'
      ? new D(Ly.value)
      : y.value
  }
  var Iy = d(Y),
    vp = g
  var dp = g,
    Dp = (function () {
      var n = Iy(
        (function () {
          var r = rt(Oa.value)
          return function (t) {
            return r(_p(t))
          }
        })()
      )
      return function (r) {
        return n(pp(r))
      }
    })()
  function yp(n, r, t) {
    var e = Object.prototype.toString.call(t)
    return e.indexOf('[object HTML') === 0 &&
      e.indexOf('Element]') === e.length - 8
      ? r(t)
      : n
  }
  var hp = g
  var Tf = function (n) {
    return yp(y.value, D.create, n)
  }
  function Ge(n) {
    return function () {
      return n.document
    }
  }
  var Mp = g
  var Mf = 'DOMContentLoaded'
  var Lp = V(dr),
    Fh = Gn(lt),
    Ff = Zn(Or),
    wh = xu(Or),
    Ip = E(ct),
    Lh = Zn(tt),
    Ih = E(Qn),
    xh = d(Y),
    Ah = Dt(gt),
    Nh = qr(Vo),
    Hh = function (n) {
      return Lp(
        Fh(
          Ff(
            wh(
              (function () {
                var r = Cl(n)
                return function (t) {
                  return r(vp(t))
                }
              })()
            )(Ge)
          )(de)
        )
      )(function (r) {
        return Ip(Lh(Tf)(r))
      })
    },
    xp = Qo(At(Gt)(J(Ih(void 0)))),
    Sh = $e(function (n) {
      return function () {
        var t = Ff(Dp)(Ff(Ge)(de))()
        if (t instanceof Oa) {
          var e = xh(Mp)(de)(),
            o = Ha(function (u) {
              return n(new xn(void 0))
            })()
          return Ui(Mf)(o)(!1)(e)(), zo(Bi(Mf)(o)(!1)(e))
        }
        return n(new xn(void 0))(), Ys
      }
    }),
    Ap = Ah(dr)(Sh)(function () {
      return Lp(Hh('body'))(function (n) {
        return An(Nh(jr('Could not find body')))(Ip)(n)
      })
    })
  var _u = {
    suspend: Bs,
    fork: ks,
    join: Wa,
    Monad0: function () {
      return _e
    },
    Functor1: function () {
      return Gs
    },
  }
  var mu = function (n) {
    return n.fork
  }
  var vu = function (n) {
    return function () {
      console.warn(n)
    }
  }
  var Wp = g,
    Kr = g,
    Pp = function (n) {
      var r = nr(n)(hr)
      return function (t) {
        return Kr(function (e) {
          return r(t)(e.rendering)
        })
      }
    },
    Yh = g,
    Op = function (n) {
      return function (r) {
        return Kr(function (t) {
          return Yh(r(t.rendering))
        })
      }
    },
    Zh = g,
    du = function (n) {
      return function (r) {
        return n(r)
      }
    },
    $p = function (n) {
      return function (r) {
        return function (t) {
          return function (e) {
            return function () {
              var u = Wn({})(),
                l = Wn(Se)(),
                c = Wn(Se)(),
                i = Wn(t)(),
                s = Wn(new D(q.value))(),
                _ = Wn(new D(q.value))(),
                m = Wn(y.value)(),
                v = Wn(1)(),
                p = Wn(new D(ht))(),
                a = Wn(ht)(),
                f = {
                  component: n,
                  state: n.initialState(r),
                  refs: ht,
                  children: Se,
                  childrenIn: l,
                  childrenOut: c,
                  selfRef: u,
                  handlerRef: i,
                  pendingQueries: s,
                  pendingOuts: _,
                  pendingHandlers: m,
                  rendering: y.value,
                  fresh: v,
                  subscriptions: p,
                  forks: a,
                  lifecycleHandlers: e,
                }
              return Fn(f)(u)(), Zh(u)
            }
          }
        }
      }
    }
  var nT = nr(Qn)(hr),
    rT = Zn(tt),
    tT = Ne(uf),
    jn = V(dr),
    Ln = Gn(lt),
    eT = Dt(gt),
    Xr = eT(dr),
    Vp = nr(ct),
    aT = Vp(Gr),
    Qp = mu(_u),
    oT = Ra(me)(Gr),
    st = E(ct),
    uT = d(Gu),
    qp = Xt(me),
    iT = d(Ue),
    Up = qe(me),
    fT = d(rr),
    cT = He(uf),
    lT = rs(tf),
    sT = ci(ou),
    pT = Ac(Ot),
    _T = He(ou),
    Bp = Vp(hr),
    kp = Ne(ou),
    mT = Ne(Wr),
    vT = Ds(Xs),
    dT = el(Wr),
    DT = function (n) {
      return function (r) {
        return function () {
          var e = N(r)(),
            o = N(e.subscriptions)()
          return nT(Jo)(rT(tT(n))(o))()
        }
      }
    },
    Du = function (n) {
      return function (r) {
        return jn(Ln(N(n)))(function (t) {
          if (t instanceof y) return r
          if (t instanceof D) return Ln(Fn(new D(new F(r, t.value0)))(n))
          throw new Error(
            'Failed pattern match at Halogen.Aff.Driver.Eval (line 188, column 33 - line 190, column 57): ' +
              [t.constructor.name]
          )
        })
      }
    },
    gu = function (n) {
      return function (r) {
        return Xr(Ln(Fn({ initializers: q.value, finalizers: q.value })(n)))(
          function () {
            return jn(Ln(r))(function (t) {
              return jn(Ln(N(n)))(function (e) {
                return Xr(aT(Qp)(e.finalizers))(function () {
                  return Xr(oT(e.initializers))(function () {
                    return st(t)
                  })
                })
              })
            })
          }
        )
      }
    },
    ge = Qo(At(Gt)(J(E(Qn)(void 0)))),
    zp = function (n) {
      return function (r) {
        return jn(Ln(N(r)))(function (t) {
          return Ln(
            Ku(function (e) {
              return { state: (e + 1) | 0, value: n(e) }
            })(t.fresh)
          )
        })
      }
    },
    Lf = function (n) {
      return function (r) {
        return function (t) {
          return jn(Ln(N(r)))(function (e) {
            return Yt(n)(r)(
              e.component.eval(new Je(uT(D.create)(Ic(t)), J(y.value)))
            )
          })
        }
      }
    },
    Yt = function (n) {
      return function (r) {
        return function (t) {
          var e = function (u) {
              return function (l) {
                return jn(Ln(N(u)))(function (c) {
                  return Zs(function (i) {
                    var s = function (_) {
                      return qp(
                        jn(Ln(N(_)))(function (m) {
                          return Kr(function (v) {
                            return Lf(n)(v.selfRef)(i.value1)
                          })(m)
                        })
                      )
                    }
                    return iT(i.value2)(Up(i.value0(tf)(s)(c.children)))
                  })(l)
                })
              }
            },
            o = function (u) {
              return function (l) {
                if (l instanceof Go)
                  return jn(Ln(N(u)))(function (c) {
                    var i = l.value0(c.state)
                    if (Be(c.state)(i.value1)) return st(i.value0)
                    if (Dr)
                      return Xr(
                        Ln(
                          Fn({
                            component: c.component,
                            state: i.value1,
                            refs: c.refs,
                            children: c.children,
                            childrenIn: c.childrenIn,
                            childrenOut: c.childrenOut,
                            selfRef: c.selfRef,
                            handlerRef: c.handlerRef,
                            pendingQueries: c.pendingQueries,
                            pendingOuts: c.pendingOuts,
                            pendingHandlers: c.pendingHandlers,
                            rendering: c.rendering,
                            fresh: c.fresh,
                            subscriptions: c.subscriptions,
                            forks: c.forks,
                            lifecycleHandlers: c.lifecycleHandlers,
                          })(u)
                        )
                      )(function () {
                        return Xr(
                          gu(c.lifecycleHandlers)(n(c.lifecycleHandlers)(u))
                        )(function () {
                          return st(i.value0)
                        })
                      })
                    throw new Error(
                      'Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): ' +
                        [i.constructor.name]
                    )
                  })
                if (l instanceof jo)
                  return jn(zp(op)(u))(function (c) {
                    return jn(
                      Ln(
                        rp(l.value0(c))(function (i) {
                          return ge(If(n)(u)(new da(i)))
                        })
                      )
                    )(function (i) {
                      return jn(Ln(N(u)))(function (s) {
                        return Xr(Ln($r(fT(cT(c)(i)))(s.subscriptions)))(
                          function () {
                            return st(l.value1(c))
                          }
                        )
                      })
                    })
                  })
                if (l instanceof Ko)
                  return Xr(Ln(DT(l.value0)(u)))(function () {
                    return st(l.value1)
                  })
                if (l instanceof Xo) return l.value0
                if (l instanceof Yo) return e(u)(l.value0)
                if (l instanceof Zo)
                  return jn(Ln(N(u)))(function (c) {
                    return jn(Ln(N(c.handlerRef)))(function (i) {
                      return Xr(Du(c.pendingOuts)(i(l.value0)))(function () {
                        return st(l.value1)
                      })
                    })
                  })
                if (l instanceof nu)
                  return Up(
                    lT(
                      Ji(
                        (function () {
                          var c = Yt(n)(u)
                          return function (i) {
                            return qp(c(i))
                          }
                        })()
                      )(l.value0)
                    )
                  )
                if (l instanceof ru)
                  return jn(zp(up)(u))(function (c) {
                    return jn(Ln(N(u)))(function (i) {
                      return jn(Ln(Wn(!1)))(function (s) {
                        return jn(
                          Qp(
                            Js(
                              Ln(function () {
                                return $r(sT(c))(i.forks)(), Fn(!0)(s)()
                              })
                            )(Yt(n)(u)(l.value0))
                          )
                        )(function (_) {
                          return Xr(Ln(pT(N(s))($r(_T(c)(_))(i.forks))))(
                            function () {
                              return st(l.value1(c))
                            }
                          )
                        })
                      })
                    })
                  })
                if (l instanceof tu)
                  return jn(Ln(N(u)))(function (c) {
                    return jn(Ln(N(c.forks)))(function (i) {
                      return Xr(Bp(Wa)(kp(l.value0)(i)))(function () {
                        return st(l.value1)
                      })
                    })
                  })
                if (l instanceof eu)
                  return jn(Ln(N(u)))(function (c) {
                    return jn(Ln(N(c.forks)))(function (i) {
                      return Xr(Bp(Pa(jr('Cancelled')))(kp(l.value0)(i)))(
                        function () {
                          return st(l.value1)
                        }
                      )
                    })
                  })
                if (l instanceof au)
                  return jn(Ln(N(u)))(function (c) {
                    return st(l.value1(mT(l.value0)(c.refs)))
                  })
                throw new Error(
                  'Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 139, column 33): ' +
                    [l.constructor.name]
                )
              }
            }
          return vT(o(r))(t)
        }
      }
    },
    If = function (n) {
      return function (r) {
        return function (t) {
          if (t instanceof li)
            return Ln(
              bn($r)(r)(
                du(function (e) {
                  return {
                    component: e.component,
                    state: e.state,
                    refs: dT(J(t.value1))(t.value0)(e.refs),
                    children: e.children,
                    childrenIn: e.childrenIn,
                    childrenOut: e.childrenOut,
                    selfRef: e.selfRef,
                    handlerRef: e.handlerRef,
                    pendingQueries: e.pendingQueries,
                    pendingOuts: e.pendingOuts,
                    pendingHandlers: e.pendingHandlers,
                    rendering: e.rendering,
                    fresh: e.fresh,
                    subscriptions: e.subscriptions,
                    forks: e.forks,
                    lifecycleHandlers: e.lifecycleHandlers,
                  }
                })
              )
            )
          if (t instanceof da)
            return jn(Ln(N(r)))(function (e) {
              return Yt(n)(r)(e.component.eval(new Qe(t.value0, void 0)))
            })
          throw new Error(
            'Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): ' +
              [t.constructor.name]
          )
        }
      }
    }
  var yT = V(Or),
    hT = Dt(gt),
    Zp = to(Qn)(hr),
    n_ = nr(ct)(Gr),
    r_ = mu(_u),
    qa = Zn(Or),
    t_ = nr(Qn),
    e_ = t_(hr),
    Jp = t_(or),
    Gp = hT(dr),
    TT = Ra(me)(Gr),
    $a = Gn(lt),
    jp = E(Qn),
    xf = d(Y),
    Af = E(ct),
    Nf = _t(Qn),
    CT = Op(Y),
    bT = On(Ue),
    Kp = al(Qn),
    ET = Pp(Qn),
    MT = zr(qc),
    FT = Xe(Y),
    Hf = V(dr),
    wT = Gn(Ll),
    Xp = (function () {
      return Wn({ initializers: q.value, finalizers: q.value })
    })(),
    Yp = function (n) {
      return function () {
        var t = N(n)()
        return (
          Fn(y.value)(n)(),
          Zp(t)(
            (function () {
              var e = n_(r_)
              return function (o) {
                return ge(e(ue(o)))
              }
            })()
          )()
        )
      }
    },
    LT = function (n) {
      return function () {
        return (
          qa(e_(Jp(Jo)))(N(n.subscriptions))(),
          Fn(y.value)(n.subscriptions)(),
          qa(
            Jp(
              (function () {
                var t = Pa(jr('finalized'))
                return function (e) {
                  return ge(t(e))
                }
              })()
            )
          )(N(n.forks))(),
          Fn(ht)(n.forks)()
        )
      }
    },
    a_ = function (n) {
      return function (r) {
        return function (t) {
          var e = function (_) {
              return function (m) {
                return Kr(function (v) {
                  var p = Yt(l)(v.selfRef)(v.component.eval(new ke(void 0)))
                  return $r(function (a) {
                    return {
                      initializers: new F(
                        Gp(TT(ue(a.initializers)))(function () {
                          return Gp(p)(function () {
                            return $a(function () {
                              return Yp(v.pendingQueries)(), Yp(v.pendingOuts)()
                            })
                          })
                        }),
                        m
                      ),
                      finalizers: a.finalizers,
                    }
                  })(_)
                })
              }
            },
            o = function (_) {
              return function (m) {
                return function (v) {
                  return mf(function (p) {
                    return function () {
                      var f = Xp(),
                        H = $p(p)(v)(m)(f)(),
                        cn = N(_)()
                      return (
                        Fn({
                          initializers: q.value,
                          finalizers: cn.finalizers,
                        })(_)(),
                        qa(
                          Kr(
                            (function () {
                              var Hn = l(_)
                              return function (Sn) {
                                return Hn(
                                  (function (dn) {
                                    return dn.selfRef
                                  })(Sn)
                                )
                              }
                            })()
                          )
                        )(N(H))(),
                        qa(e(_)(cn.initializers))(N(H))(),
                        H
                      )
                    }
                  })
                }
              }
            },
            u = function (_) {
              return function (m) {
                return function (v) {
                  return function (p) {
                    return _f(function (a) {
                      return function () {
                        var H = xf(a.pop)(N(v))(),
                          cn = (function () {
                            if (H instanceof D) {
                              Fn(H.value0.value1)(v)()
                              var Sn = N(H.value0.value0)()
                              return (
                                Kr(function (dn) {
                                  return function () {
                                    return (
                                      bn(Fn)(dn.handlerRef)(
                                        (function () {
                                          var Yn = An(Af(void 0))(m)
                                          return function (Zt) {
                                            return Yn(a.output(Zt))
                                          }
                                        })()
                                      )(),
                                      ge(
                                        Yt(l)(dn.selfRef)(
                                          dn.component.eval(
                                            new Ve(a.input, void 0)
                                          )
                                        )
                                      )()
                                    )
                                  }
                                })(Sn)(),
                                H.value0.value0
                              )
                            }
                            if (H instanceof y)
                              return o(_)(
                                (function () {
                                  var dn = An(Af(void 0))(m)
                                  return function (x) {
                                    return dn(a.output(x))
                                  }
                                })()
                              )(a.input)(a.component)()
                            throw new Error(
                              'Failed pattern match at Halogen.Aff.Driver (line 213, column 14 - line 222, column 98): ' +
                                [H.constructor.name]
                            )
                          })(),
                          Hn = xf(function (Sn) {
                            return ta(a.get(Sn))
                          })(N(p))()
                        return (
                          Nf(Hn)(
                            vu(
                              'Halogen: Duplicate slot address was detected during rendering, unexpected results may occur'
                            )
                          )(),
                          $r(a.set(cn))(p)(),
                          yT(N(cn))(
                            CT(function (Sn) {
                              if (Sn instanceof y)
                                return wl(
                                  'Halogen internal error: child was not initialized in renderChild'
                                )
                              if (Sn instanceof D)
                                return jp(n.renderChild(Sn.value0))
                              throw new Error(
                                'Failed pattern match at Halogen.Aff.Driver (line 227, column 37 - line 229, column 50): ' +
                                  [Sn.constructor.name]
                              )
                            })
                          )()
                        )
                      }
                    })
                  }
                }
              }
            },
            l = function (_) {
              return function (m) {
                return function () {
                  var p = N(m)(),
                    a = xf(ee)(N(p.pendingHandlers))()
                  Nf(a)(Fn(new D(q.value))(p.pendingHandlers))(),
                    Fn(Se)(p.childrenOut)(),
                    Fn(p.children)(p.childrenIn)()
                  var f = (function () {
                      var dn = Du(p.pendingHandlers),
                        x = If(l)(p.selfRef)
                      return function (Yn) {
                        return dn(bT(x(Yn)))
                      }
                    })(),
                    H = (function () {
                      var dn = Du(p.pendingQueries)
                      return function (x) {
                        return dn(f(da.create(x)))
                      }
                    })(),
                    cn = n.render(function (dn) {
                      return ge(f(dn))
                    })(u(_)(H)(p.childrenIn)(p.childrenOut))(
                      p.component.render(p.state)
                    )(p.rendering)(),
                    Hn = N(p.childrenOut)(),
                    Sn = N(p.childrenIn)()
                  return (
                    Kp(Sn)(function (dn) {
                      return function () {
                        var Yn = N(dn)()
                        return ET(n.removeChild)(Yn)(), c(_)(Yn)()
                      }
                    })(),
                    bn($r)(p.selfRef)(
                      du(function (dn) {
                        return {
                          component: dn.component,
                          state: dn.state,
                          refs: dn.refs,
                          children: Hn,
                          childrenIn: dn.childrenIn,
                          childrenOut: dn.childrenOut,
                          selfRef: dn.selfRef,
                          handlerRef: dn.handlerRef,
                          pendingQueries: dn.pendingQueries,
                          pendingOuts: dn.pendingOuts,
                          pendingHandlers: dn.pendingHandlers,
                          rendering: new D(cn),
                          fresh: dn.fresh,
                          subscriptions: dn.subscriptions,
                          forks: dn.forks,
                          lifecycleHandlers: dn.lifecycleHandlers,
                        }
                      })
                    )(),
                    Nf(a)(
                      bn(MT)(void 0)(function (dn) {
                        return function () {
                          var Yn = N(p.pendingHandlers)()
                          Fn(new D(q.value))(p.pendingHandlers)(),
                            e_(
                              (function () {
                                var Tu = n_(r_)
                                return function (Cu) {
                                  return ge(Tu(ue(Cu)))
                                }
                              })()
                            )(Yn)()
                          var Zt = N(p.pendingHandlers)(),
                            hu = An(!1)(Jc)(Zt)
                          return hu
                            ? FT(Fn(y.value)(p.pendingHandlers))(
                                new ar(void 0)
                              )()
                            : new cr(void 0)
                        }
                      })
                    )()
                  )
                }
              }
            },
            c = function (_) {
              return Kr(function (m) {
                return function () {
                  LT(m)()
                  var p = Yt(l)(m.selfRef)(m.component.eval(new ze(void 0)))
                  return (
                    $r(function (a) {
                      return {
                        initializers: a.initializers,
                        finalizers: new F(p, a.finalizers),
                      }
                    })(_)(),
                    Kp(m.children)(function (a) {
                      return function () {
                        var H = N(a)()
                        return c(_)(H)()
                      }
                    })()
                  )
                }
              })
            },
            i = function (_) {
              return function (m) {
                return function (v) {
                  return Hf($a(N(_)))(function (p) {
                    return p ? Af(y.value) : Lf(l)(m)(v)
                  })
                }
              }
            },
            s = function (_) {
              return function (m) {
                return function (v) {
                  return gu(m)(function () {
                    var a = N(_)()
                    return a
                      ? void 0
                      : (Fn(!0)(_)(),
                        c(m)(v)(),
                        Kr(function (f) {
                          return function () {
                            var cn = wT(N(f.selfRef))()
                            return Zp(cn.rendering)(n.dispose)()
                          }
                        })(v)())
                  })
                }
              }
            }
          return Hf($a(Xp))(function (_) {
            return Hf($a(Wn(!1)))(function (m) {
              return gu(_)(function () {
                var p = ep(),
                  a = qa(N)(
                    o(_)(
                      (function () {
                        var f = tp(p.listener)
                        return function (H) {
                          return $a(f(H))
                        }
                      })()
                    )(t)(r)
                  )()
                return Kr(function (f) {
                  return jp({
                    query: i(m)(f.selfRef),
                    messages: p.emitter,
                    dispose: s(m)(_)(a),
                  })
                })(a)()
              })
            })
          })
        }
      }
    }
  var Yr = function (n) {
    return function (r) {
      return function () {
        return r[n]
      }
    }
  }
  var xT = Yr('baseURI'),
    AT = Yr('ownerDocument'),
    o_ = Yr('parentNode'),
    NT = Yr('parentElement')
  var HT = Yr('childNodes'),
    ST = Yr('firstChild'),
    RT = Yr('lastChild'),
    WT = Yr('previousSibling'),
    u_ = Yr('nextSibling'),
    PT = Yr('nodeValue')
  var OT = Yr('textContent')
  function Sf(n) {
    return function (r) {
      return function (t) {
        return function () {
          t.insertBefore(n, r)
        }
      }
    }
  }
  function yu(n) {
    return function (r) {
      return function () {
        r.appendChild(n)
      }
    }
  }
  function Rf(n) {
    return function (r) {
      return function () {
        r.removeChild(n)
      }
    }
  }
  var i_ = d(Y)
  var Wf = (function () {
    var n = i_(Jn)
    return function (r) {
      return n(o_(r))
    }
  })()
  var f_ = (function () {
    var n = i_(Jn)
    return function (r) {
      return n(u_(r))
    }
  })()
  var Pf = function (n, r, t) {
      var e = 0,
        o
      return function (u) {
        if (e === 2) return o
        if (e === 1)
          throw new ReferenceError(
            n +
              ' was needed before it finished initializing (module ' +
              r +
              ', line ' +
              u +
              ')',
            r,
            u
          )
        return (e = 1), (o = t()), (e = 2), o
      }
    },
    Of = On(Y),
    kT = E(Qn),
    zT = nr(Qn)(hr),
    VT = Pr(),
    QT = _t(Qn),
    JT = Nt(Iu(Iu(et))),
    GT = X(Z),
    jT = V(dr),
    KT = Gn(lt),
    XT = d(Y),
    YT = Zn(Or)
  var ZT = function (n) {
      return function (r) {
        return function (t) {
          return r instanceof D && t instanceof D
            ? Of(Sf(n)(r.value0)(t.value0))
            : r instanceof y && t instanceof D
            ? Of(yu(n)(t.value0))
            : kT(void 0)
        }
      }
    },
    c_ = function (n) {
      return function () {
        var t = Wf(n.node)()
        return zT(function (e) {
          return Rf(n.node)(e)
        })(t)()
      }
    },
    nC = function (n) {
      return function (r) {
        return function (t) {
          var e = Wp(function (c) {
              return c.node
            }),
            o = function (c) {
              return c instanceof D ? Ar(c.value0) : void 0
            },
            u = function (c) {
              var i = fp(VT)(c),
                s = Pf('patch', 'Halogen.VDom.Driver', function () {
                  return function (f, H) {
                    if (f instanceof D) {
                      if (H instanceof fu) return Ar(f.value0), m(100)(H.value0)
                      if (H instanceof cu) {
                        var cn = xr(f.value0, H.value0)
                        return Bn(new Un(_r(cn), new D(cn), s(103), o))
                      }
                      throw new Error(
                        'Failed pattern match at Halogen.VDom.Driver (line 97, column 22 - line 103, column 79): ' +
                          [H.constructor.name]
                      )
                    }
                    return _(104)(H)
                  }
                }),
                _ = Pf('render', 'Halogen.VDom.Driver', function () {
                  return function (f) {
                    if (f instanceof fu) return m(86)(f.value0)
                    if (f instanceof cu) {
                      var H = i(f.value0)
                      return Bn(new Un(_r(H), new D(H), s(89), o))
                    }
                    throw new Error(
                      'Failed pattern match at Halogen.VDom.Driver (line 84, column 7 - line 89, column 75): ' +
                        [f.constructor.name]
                    )
                  }
                }),
                m = Pf(
                  'renderComponentSlot',
                  'Halogen.VDom.Driver',
                  function () {
                    return function (f) {
                      var H = N(r)(),
                        cn = H(f)(),
                        Hn = e(cn)
                      return Bn(new Un(Hn, y.value, s(117), o))
                    }
                  }
                ),
                v = s(91),
                p = _(82),
                a = m(109)
              return p
            },
            l = Ul(n)
          return { buildWidget: u, buildAttributes: l, document: t }
        }
      }
    },
    rC = function (n) {
      return function (r) {
        var t = function (e) {
          return function (o) {
            return function (u) {
              return function (l) {
                if (l instanceof y)
                  return function () {
                    var i = Wn(o)(),
                      s = nC(e)(i)(n),
                      _ = Ea(s)(u),
                      m = _r(_)
                    return (
                      Of(yu(m)(hp(r)))(),
                      { machine: _, node: m, renderChildRef: i }
                    )
                  }
                if (l instanceof D)
                  return function () {
                    Fn(o)(l.value0.renderChildRef)()
                    var i = Wf(l.value0.node)(),
                      s = f_(l.value0.node)(),
                      _ = xr(l.value0.machine, u),
                      m = _r(_)
                    return (
                      QT(JT(Be)(l.value0.node)(m))(ZT(m)(s)(i))(),
                      {
                        machine: _,
                        node: m,
                        renderChildRef: l.value0.renderChildRef,
                      }
                    )
                  }
                throw new Error(
                  'Failed pattern match at Halogen.VDom.Driver (line 157, column 5 - line 173, column 80): ' +
                    [l.constructor.name]
                )
              }
            }
          }
        }
        return { render: t, renderChild: GT, removeChild: c_, dispose: c_ }
      }
    },
    l_ = function (n) {
      return function (r) {
        return function (t) {
          return jT(KT(XT(dp)(YT(Ge)(de))))(function (e) {
            return a_(rC(e)(t))(n)(r)
          })
        }
      }
    }
  var s_ = xp(
    V(dr)(Ap)(function (n) {
      return l_(sp)(void 0)(n)
    })
  )
  s_()
})()
