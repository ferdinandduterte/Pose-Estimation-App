// @tensorflow/tfjs-models Copyright 2018 Google
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@tensorflow/tfjs")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs"], t) : t(e.posenet = {}, e.tf)
}(this, function(e, t) {
    "use strict";

    function n(e, t, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }).then(a, s)
            }
            u((r = r.apply(e, t || [])).next())
        })
    }

    function r(e, t) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
    var i = ["nose", "leftEye", "rightEye", "leftEar", "rightEar", "leftShoulder", "rightShoulder", "leftElbow", "rightElbow", "leftWrist", "rightWrist", "leftHip", "rightHip", "leftKnee", "rightKnee", "leftAnkle", "rightAnkle"],
        o = i.length,
        a = i.reduce(function(e, t, n) {
            return e[t] = n, e
        }, {}),
        s = [
            ["nose", "leftEye"],
            ["leftEye", "leftEar"],
            ["nose", "rightEye"],
            ["rightEye", "rightEar"],
            ["nose", "leftShoulder"],
            ["leftShoulder", "leftElbow"],
            ["leftElbow", "leftWrist"],
            ["leftShoulder", "leftHip"],
            ["leftHip", "leftKnee"],
            ["leftKnee", "leftAnkle"],
            ["nose", "rightShoulder"],
            ["rightShoulder", "rightElbow"],
            ["rightElbow", "rightWrist"],
            ["rightShoulder", "rightHip"],
            ["rightHip", "rightKnee"],
            ["rightKnee", "rightAnkle"]
        ],
        u = [
            ["leftHip", "leftShoulder"],
            ["leftElbow", "leftShoulder"],
            ["leftElbow", "leftWrist"],
            ["leftHip", "leftKnee"],
            ["leftKnee", "leftAnkle"],
            ["rightHip", "rightShoulder"],
            ["rightElbow", "rightShoulder"],
            ["rightElbow", "rightWrist"],
            ["rightHip", "rightKnee"],
            ["rightKnee", "rightAnkle"],
            ["leftShoulder", "rightShoulder"],
            ["leftHip", "rightHip"]
        ].map(function(e) {
            var t = e[0],
                n = e[1];
            return [a[t], a[n]]
        });
    var l = Number.NEGATIVE_INFINITY,
        c = Number.POSITIVE_INFINITY;

    function p(e) {
        return e.reduce(function(e, t) {
            var n = e.maxX,
                r = e.maxY,
                i = e.minX,
                o = e.minY,
                a = t.position,
                s = a.x,
                u = a.y;
            return {
                maxX: Math.max(n, s),
                maxY: Math.max(r, u),
                minX: Math.min(i, s),
                minY: Math.min(o, u)
            }
        }, {
            maxX: l,
            maxY: l,
            minX: c,
            minY: c
        })
    }

    function f(e, i) {
        return void 0 === i && (i = "float32"), n(this, void 0, void 0, function() {
            var n;
            return r(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e.data()];
                    case 1:
                        return n = r.sent(), [2, new t.TensorBuffer(e.shape, i, n)]
                }
            })
        })
    }

    function h(e, t, n) {
        return {
            score: e.score,
            keypoints: e.keypoints.map(function(e) {
                var r = e.score,
                    i = e.part,
                    o = e.position;
                return {
                    score: r,
                    part: i,
                    position: {
                        x: o.x * t,
                        y: o.y * n
                    }
                }
            })
        }
    }

    function v(e, t, n) {
        var r = t * e - 1;
        return r - r % n + 1
    }

    function d(e) {
        return Math.floor(e / 2)
    }
    var b = function() {
        function e(e, t) {
            this.priorityQueue = new Array(e), this.numberOfElements = -1, this.getElementValue = t
        }
        return e.prototype.enqueue = function(e) {
            this.priorityQueue[++this.numberOfElements] = e, this.swim(this.numberOfElements)
        }, e.prototype.dequeue = function() {
            var e = this.priorityQueue[0];
            return this.exchange(0, this.numberOfElements--), this.sink(0), this.priorityQueue[this.numberOfElements + 1] = null, e
        }, e.prototype.empty = function() {
            return -1 === this.numberOfElements
        }, e.prototype.size = function() {
            return this.numberOfElements + 1
        }, e.prototype.all = function() {
            return this.priorityQueue.slice(0, this.numberOfElements + 1)
        }, e.prototype.max = function() {
            return this.priorityQueue[0]
        }, e.prototype.swim = function(e) {
            for (; e > 0 && this.less(d(e), e);) this.exchange(e, d(e)), e = d(e)
        }, e.prototype.sink = function(e) {
            for (; 2 * e <= this.numberOfElements;) {
                var t = 2 * e;
                if (t < this.numberOfElements && this.less(t, t + 1) && t++, !this.less(e, t)) break;
                this.exchange(e, t), e = t
            }
        }, e.prototype.getValueAt = function(e) {
            return this.getElementValue(this.priorityQueue[e])
        }, e.prototype.less = function(e, t) {
            return this.getValueAt(e) < this.getValueAt(t)
        }, e.prototype.exchange = function(e, t) {
            var n = this.priorityQueue[e];
            this.priorityQueue[e] = this.priorityQueue[t], this.priorityQueue[t] = n
        }, e
    }();

    function m(e, t, n, r, i, o) {
        for (var a = o.shape, s = a[0], u = a[1], l = !0, c = Math.max(n - i, 0), p = Math.min(n + i + 1, s), f = c; f < p; ++f) {
            for (var h = Math.max(r - i, 0), v = Math.min(r + i + 1, u), d = h; d < v; ++d)
                if (o.get(f, d, e) > t) {
                    l = !1;
                    break
                }
            if (!l) break
        }
        return l
    }

    function y(e, t, n, r) {
        return {
            y: r.get(e, t, n),
            x: r.get(e, t, n + o)
        }
    }

    function g(e, t, n) {
        var r = y(e.heatmapY, e.heatmapX, e.id, n),
            i = r.y,
            o = r.x;
        return {
            x: e.heatmapX * t + o,
            y: e.heatmapY * t + i
        }
    }

    function w(e, t, n) {
        return e < t ? t : e > n ? n : e
    }

    function x(e, t) {
        return {
            x: e.x + t.x,
            y: e.y + t.y
        }
    }
    var C = s.map(function(e) {
            var t = e[0],
                n = e[1];
            return [a[t], a[n]]
        }),
        E = C.map(function(e) {
            return e[1]
        }),
        S = C.map(function(e) {
            return e[0]
        });

    function k(e, t, n, r) {
        return {
            y: w(Math.round(e.y / t), 0, n - 1),
            x: w(Math.round(e.x / t), 0, r - 1)
        }
    }

    function M(e, t, n, r, o, a, s) {
        var u = r.shape,
            l = u[0],
            c = u[1],
            p = function(e, t, n) {
                var r = n.shape[2] / 2;
                return {
                    y: n.get(t.y, t.x, e),
                    x: n.get(t.y, t.x, r + e)
                }
            }(e, k(t.position, a, l, c), s),
            f = k(x(t.position, p), a, l, c),
            h = y(f.y, f.x, n, o),
            v = r.get(f.y, f.x, n);
        return {
            position: x({
                x: f.x * a,
                y: f.y * a
            }, {
                x: h.x,
                y: h.y
            }),
            part: i[n],
            score: v
        }
    }

    function P(e, t, n, r, o, a) {
        var s = t.shape[2],
            u = E.length,
            l = new Array(s),
            c = e.part,
            p = e.score,
            f = g(c, r, n);
        l[c.id] = {
            score: p,
            part: i[c.id],
            position: f
        };
        for (var h = u - 1; h >= 0; --h) {
            var v = E[h],
                d = S[h];
            l[v] && !l[d] && (l[d] = M(h, l[v], d, t, n, r, a))
        }
        for (h = 0; h < u; ++h) {
            v = S[h], d = E[h];
            l[v] && !l[d] && (l[d] = M(h, l[v], d, t, n, r, o))
        }
        return l
    }

    function O(e, t, n, r) {
        var i = n.x,
            o = n.y;
        return e.some(function(e) {
            var n, a, s, u, l, c, p = e.keypoints[r].position;
            return n = o, a = i, s = p.y, u = p.x, (l = s - n) * l + (c = u - a) * c <= t
        })
    }

    function _(e, t, n) {
        return n.reduce(function(n, r, i) {
            var o = r.position,
                a = r.score;
            return O(e, t, o, i) || (n += a), n
        }, 0) / n.length
    }
    var N = 1;

    function T(e, t, i, o, a, s, u, l) {
        return void 0 === u && (u = .5), void 0 === l && (l = 20), n(this, void 0, void 0, function() {
            var c, p, h, v, d, y, w, x, C, E, S, k;
            return r(this, function(M) {
                switch (M.label) {
                    case 0:
                        return c = [], [4, function(e) {
                            return n(this, void 0, void 0, function() {
                                return r(this, function(t) {
                                    return [2, Promise.all(e.map(function(e) {
                                        return f(e, "float32")
                                    }))]
                                })
                            })
                        }([e, t, i, o])];
                    case 1:
                        for (p = M.sent(), h = p[0], v = p[1], d = p[2], y = p[3], w = function(e, t, n) {
                                for (var r = n.shape, i = r[0], o = r[1], a = r[2], s = new b(i * o * a, function(e) {
                                        return e.score
                                    }), u = 0; u < i; ++u)
                                    for (var l = 0; l < o; ++l)
                                        for (var c = 0; c < a; ++c) {
                                            var p = n.get(u, l, c);
                                            p < e || m(c, p, u, l, t, n) && s.enqueue({
                                                score: p,
                                                part: {
                                                    heatmapY: u,
                                                    heatmapX: l,
                                                    id: c
                                                }
                                            })
                                        }
                                return s
                            }(u, N, h), x = l * l; c.length < s && !w.empty();) C = w.dequeue(), E = g(C.part, a, v), O(c, x, E, C.part.id) || (S = P(C, h, v, a, d, y), k = _(c, x, S), c.push({
                            keypoints: S,
                            score: k
                        }));
                        return [2, c]
                }
            })
        })
    }
    var A = function() {
            function e(e) {
                this.urlPath = e, "/" !== this.urlPath.charAt(this.urlPath.length - 1) && (this.urlPath += "/")
            }
            return e.prototype.loadManifest = function() {
                var e = this;
                return new Promise(function(t, n) {
                    var r = new XMLHttpRequest;
                    r.open("GET", e.urlPath + "manifest.json"), r.onload = function() {
                        e.checkpointManifest = JSON.parse(r.responseText), t()
                    }, r.onerror = function(t) {
                        throw new Error("manifest.json not found at " + e.urlPath + ". " + t)
                    }, r.send()
                })
            }, e.prototype.getCheckpointManifest = function() {
                var e = this;
                return null == this.checkpointManifest ? new Promise(function(t, n) {
                    e.loadManifest().then(function() {
                        t(e.checkpointManifest)
                    })
                }) : new Promise(function(t, n) {
                    t(e.checkpointManifest)
                })
            }, e.prototype.getAllVariables = function() {
                var e = this;
                return null != this.variables ? new Promise(function(t, n) {
                    t(e.variables)
                }) : new Promise(function(t, n) {
                    e.getCheckpointManifest().then(function(n) {
                        for (var r = Object.keys(e.checkpointManifest), i = [], o = 0; o < r.length; o++) i.push(e.getVariable(r[o]));
                        Promise.all(i).then(function(n) {
                            e.variables = {};
                            for (var i = 0; i < n.length; i++) e.variables[r[i]] = n[i];
                            t(e.variables)
                        })
                    })
                })
            }, e.prototype.getVariable = function(e) {
                var n = this;
                if (!(e in this.checkpointManifest)) throw new Error("Cannot load non-existant variable " + e);
                var r = function(r, i) {
                    var o = new XMLHttpRequest;
                    o.responseType = "arraybuffer";
                    var a = n.checkpointManifest[e].filename;
                    o.open("GET", n.urlPath + a), o.onload = function() {
                        if (404 === o.status) throw new Error("Not found variable " + e);
                        var i = new Float32Array(o.response),
                            a = t.Tensor.make(n.checkpointManifest[e].shape, {
                                values: i
                            });
                        r(a)
                    }, o.onerror = function(t) {
                        throw new Error("Could not fetch variable " + e + ": " + t)
                    }, o.send()
                };
                return null == this.checkpointManifest ? new Promise(function(e, t) {
                    n.loadManifest().then(function() {
                        new Promise(r).then(e)
                    })
                }) : new Promise(r)
            }, e
        }(),
        V = [8, 16, 32];

    function I(e) {
        t.util.assert("number" == typeof e, "outputStride is not a number"), t.util.assert(V.indexOf(e) >= 0, "outputStride of " + e + " is invalid. It must be either 8, 16, or 32")
    }

    function H(e) {
        t.util.assert("number" == typeof e, "imageScaleFactor is not a number"), t.util.assert(e >= .2 && e <= 1, "imageScaleFactor must be between 0.2 and 1.0")
    }
    var F = {
        100: [
            ["conv2d", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1]
        ],
        75: [
            ["conv2d", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1]
        ],
        50: [
            ["conv2d", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1]
        ]
    };
    var j = function() {
            function e(e, n) {
                this.PREPROCESS_DIVISOR = t.scalar(127.5), this.ONE = t.scalar(1), this.variables = e, this.convolutionDefinitions = n
            }
            return e.prototype.predict = function(e, n) {
                var r = this,
                    i = t.cast(e, "float32").div(this.PREPROCESS_DIVISOR).sub(this.ONE);
                return function(e, t) {
                    var n = 1,
                        r = 1;
                    return e.map(function(e, i) {
                        var o, a, s = e[0],
                            u = e[1];
                        return n === t ? (o = 1, a = r, r *= u) : (o = u, a = 1, n *= u), {
                            blockId: i,
                            convType: s,
                            stride: o,
                            rate: a,
                            outputStride: n
                        }
                    })
                }(this.convolutionDefinitions, n).reduce(function(e, t) {
                    var n = t.blockId,
                        i = t.stride,
                        o = t.convType,
                        a = t.rate;
                    if ("conv2d" === o) return r.conv(e, i, n);
                    if ("separableConv" === o) return r.separableConv(e, i, n, a);
                    throw Error("Unknown conv type of " + o)
                }, i)
            }, e.prototype.convToOutput = function(e, t) {
                return e.conv2d(this.weights(t), 1, "same").add(this.biases(t))
            }, e.prototype.conv = function(e, t, n) {
                return e.conv2d(this.weights("Conv2d_" + String(n)), t, "same").add(this.biases("Conv2d_" + String(n))).clipByValue(0, 6)
            }, e.prototype.separableConv = function(e, t, n, r) {
                void 0 === r && (r = 1);
                var i = "Conv2d_" + String(n) + "_depthwise",
                    o = "Conv2d_" + String(n) + "_pointwise";
                return e.depthwiseConv2D(this.depthwiseWeights(i), t, "same", "NHWC", r).add(this.biases(i)).clipByValue(0, 6).conv2d(this.weights(o), [1, 1], "same").add(this.biases(o)).clipByValue(0, 6)
            }, e.prototype.weights = function(e) {
                return this.variables["MobilenetV1/" + e + "/weights"]
            }, e.prototype.biases = function(e) {
                return this.variables["MobilenetV1/" + e + "/biases"]
            }, e.prototype.depthwiseWeights = function(e) {
                return this.variables["MobilenetV1/" + e + "/depthwise_weights"]
            }, e.prototype.dispose = function() {
                for (var e in this.variables) this.variables[e].dispose()
            }, e
        }(),
        X = "https://storage.googleapis.com/tfjs-models/weights/posenet/",
        Y = {
            1.01: {
                url: X + "mobilenet_v1_101/",
                architecture: F[100]
            },
            1: {
                url: X + "mobilenet_v1_100/",
                architecture: F[100]
            },
            .75: {
                url: X + "mobilenet_v1_075/",
                architecture: F[75]
            },
            .5: {
                url: X + "mobilenet_v1_050/",
                architecture: F[50]
            }
        };

    function B(e) {
        var n = e.shape,
            r = n[0],
            i = n[1],
            o = n[2];
        return t.tidy(function() {
            var n, a, s = e.reshape([r * i, o]).argMax(0),
                u = s.div(t.scalar(i, "int32")).expandDims(1),
                l = (n = s, a = i, t.tidy(function() {
                    var e = n.div(t.scalar(a, "int32"));
                    return n.sub(e.mul(t.scalar(a, "int32")))
                })).expandDims(1);
            return t.concat([u, l], 1)
        })
    }

    function K(e, t, n, r) {
        return {
            y: r.get(e, t, n),
            x: r.get(e, t, n + o)
        }
    }

    function Q(e, n, r) {
        return t.tidy(function() {
            var i = function(e, n) {
                for (var r = [], i = 0; i < o; i++) {
                    var a = K(e.get(i, 0).valueOf(), e.get(i, 1).valueOf(), i, n),
                        s = a.x,
                        u = a.y;
                    r.push(u), r.push(s)
                }
                return t.tensor2d(r, [o, 2])
            }(e, r);
            return e.toTensor().mul(t.scalar(n, "int32")).toFloat().add(i)
        })
    }

    function W(e, t, o) {
        return n(this, void 0, void 0, function() {
            var n, a, s, u, l, c, p, h, v, d;
            return r(this, function(r) {
                switch (r.label) {
                    case 0:
                        return n = 0, a = B(e), [4, Promise.all([f(e), f(t), f(a, "int32")])];
                    case 1:
                        return s = r.sent(), u = s[0], l = s[1], c = s[2], [4, f(p = Q(c, o, l))];
                    case 2:
                        return h = r.sent(), v = Array.from(function(e, t) {
                            for (var n = t.shape[0], r = new Float32Array(n), i = 0; i < n; i++) {
                                var o = t.get(i, 0),
                                    a = t.get(i, 1);
                                r[i] = e.get(o, a, i)
                            }
                            return r
                        }(u, c)), d = v.map(function(e, t) {
                            return n += e, {
                                position: {
                                    y: h.get(t, 0),
                                    x: h.get(t, 1)
                                },
                                part: i[t],
                                score: e
                            }
                        }), a.dispose(), p.dispose(), [2, {
                            keypoints: d,
                            score: n / d.length
                        }]
                }
            })
        })
    }

    function R(e, n, r, i) {
        var o = e instanceof t.Tensor ? e : t.fromPixels(e);
        return i ? o.reverse(1).resizeBilinear([n, r]) : o.resizeBilinear([n, r])
    }
    var q = function() {
        function e(e) {
            this.mobileNet = e
        }
        return e.prototype.predictForSinglePose = function(e, n) {
            var r = this;
            return void 0 === n && (n = 16), I(n), t.tidy(function() {
                var t = r.mobileNet.predict(e, n),
                    i = r.mobileNet.convToOutput(t, "heatmap_2"),
                    o = r.mobileNet.convToOutput(t, "offset_2");
                return {
                    heatmapScores: i.sigmoid(),
                    offsets: o
                }
            })
        }, e.prototype.predictForMultiPose = function(e, n) {
            var r = this;
            return void 0 === n && (n = 16), t.tidy(function() {
                var t = r.mobileNet.predict(e, n),
                    i = r.mobileNet.convToOutput(t, "heatmap_2"),
                    o = r.mobileNet.convToOutput(t, "offset_2"),
                    a = r.mobileNet.convToOutput(t, "displacement_fwd_2"),
                    s = r.mobileNet.convToOutput(t, "displacement_bwd_2");
                return {
                    heatmapScores: i.sigmoid(),
                    offsets: o,
                    displacementFwd: a,
                    displacementBwd: s
                }
            })
        }, e.prototype.estimateSinglePose = function(e, i, o, a) {
            return void 0 === i && (i = .5), void 0 === o && (o = !1), void 0 === a && (a = 16), n(this, void 0, void 0, function() {
                var n, s, u, l, c, p, f, d, b, m = this;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return I(a), H(i), n = e instanceof t.Tensor ? [e.shape[0], e.shape[1]] : [e.height, e.width], s = n[0], u = n[1], l = v(i, s, a), c = v(i, u, a), p = t.tidy(function() {
                                var t = R(e, l, c, o);
                                return m.predictForSinglePose(t, a)
                            }), f = p.heatmapScores, d = p.offsets, [4, W(f, d, a)];
                        case 1:
                            return b = r.sent(), f.dispose(), d.dispose(), [2, h(b, s / l, u / c)]
                    }
                })
            })
        }, e.prototype.estimateMultiplePoses = function(e, i, o, a, s, u, l) {
            return void 0 === i && (i = .5), void 0 === o && (o = !1), void 0 === a && (a = 16), void 0 === s && (s = 5), void 0 === u && (u = .5), void 0 === l && (l = 20), n(this, void 0, void 0, function() {
                var n, c, p, f, d, b, m, y, g, w, x, C = this;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return I(a), H(i), n = e instanceof t.Tensor ? [e.shape[0], e.shape[1]] : [e.height, e.width], c = n[0], p = n[1], f = v(i, c, a), d = v(i, p, a), b = t.tidy(function() {
                                var t = R(e, f, d, o);
                                return C.predictForMultiPose(t, a)
                            }), m = b.heatmapScores, y = b.offsets, g = b.displacementFwd, w = b.displacementBwd, [4, T(m, y, g, w, a, s, u, l)];
                        case 1:
                            return x = r.sent(), m.dispose(), y.dispose(), g.dispose(), w.dispose(), [2, function(e, t, n) {
                                return 1 === n && 1 === t ? e : e.map(function(e) {
                                    return h(e, n, t)
                                })
                            }(x, c / f, p / d)]
                    }
                })
            })
        }, e.prototype.dispose = function() {
            this.mobileNet.dispose()
        }, e
    }();
    var D = {
        load: function(e) {
            return n(void 0, void 0, void 0, function() {
                var t, n;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = Y[e], [4, new A(t.url).getAllVariables()];
                        case 1:
                            return n = r.sent(), [2, new j(n, t.architecture)]
                    }
                })
            })
        }
    };
    e.decodeMultiplePoses = T, e.decodeSinglePose = W, e.load = function(e) {
        return void 0 === e && (e = 1.01), n(this, void 0, void 0, function() {
            var n, i;
            return r(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (null == t) throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");
                        return n = Object.keys(Y), t.util.assert("number" == typeof e, "got multiplier type of " + typeof e + " when it should be a number."), t.util.assert(n.indexOf(e.toString()) >= 0, "invalid multiplier value of " + e + ".  No checkpoint exists for that multiplier. Must be one of " + n.join(",") + "."), [4, D.load(e)];
                    case 1:
                        return i = r.sent(), [2, new q(i)]
                }
            })
        })
    }, e.PoseNet = q, e.checkpoints = Y, e.partIds = a, e.partNames = i, e.poseChain = s, e.getAdjacentKeyPoints = function(e, t) {
        return u.reduce(function(n, r) {
            var i = r[0],
                o = r[1];
            return function(e, t, n) {
                return e < n || t < n
            }(e[i].score, e[o].score, t) ? n : (n.push([e[i], e[o]]), n)
        }, [])
    }, e.getBoundingBox = p, e.getBoundingBoxPoints = function(e) {
        var t = p(e),
            n = t.minX,
            r = t.minY,
            i = t.maxX,
            o = t.maxY;
        return [{
            x: n,
            y: r
        }, {
            x: i,
            y: r
        }, {
            x: i,
            y: o
        }, {
            x: n,
            y: o
        }]
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});