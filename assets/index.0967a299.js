import {
  j as x,
  r,
  L as h,
  R as f,
  a as u,
  b as N,
  B as _,
} from "./vendor.cfa9d7b1.js";
const w = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const n of s)
      if (n.type === "childList")
        for (const a of n.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && l(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const n = {};
    return (
      s.integrity && (n.integrity = s.integrity),
      s.referrerpolicy && (n.referrerPolicy = s.referrerpolicy),
      s.crossorigin === "use-credentials"
        ? (n.credentials = "include")
        : s.crossorigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const n = i(s);
    fetch(s.href, n);
  }
};
w();
const C = "modulepreload",
  g = {},
  k = "/",
  d = function (t, i) {
    return !i || i.length === 0
      ? t()
      : Promise.all(
          i.map((l) => {
            if (((l = `${k}${l}`), l in g)) return;
            g[l] = !0;
            const s = l.endsWith(".css"),
              n = s ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${n}`)) return;
            const a = document.createElement("link");
            if (
              ((a.rel = s ? "stylesheet" : C),
              s || ((a.as = "script"), (a.crossOrigin = "")),
              (a.href = l),
              document.head.appendChild(a),
              s)
            )
              return new Promise((y, b) => {
                a.addEventListener("load", y), a.addEventListener("error", b);
              });
          })
        ).then(() => t());
  },
  e = x.exports.jsx,
  o = x.exports.jsxs;
var p = () =>
    e("div", {
      className: "w-auto m-4 flex justify-center items-center",
      children: e("div", {
        className: "w-10 h-10 bg-indigo-600 rounded-full replace-animation",
      }),
    }),
  j = "/assets/barrierBreaking.90ced45a.svg",
  E = "/assets/training.e71a04e3.svg",
  I = "/assets/feelingProud.46538f8f.svg";
const m = r.exports.createContext([]);
function P({ children: c }) {
  const [t, i] = r.exports.useState([
      { title: "Internships", color: "yellow", background: j },
      { title: "Training", color: "gray", background: E },
      { title: "Capital", color: "red", background: I },
    ]),
    [l, s] = r.exports.useState(1),
    [n, a] = r.exports.useState(0);
  return e(m.Provider, {
    value: {
      products: t,
      setProducts: i,
      selected: l,
      setSelected: s,
      menuNav: n,
      setMenuNav: a,
    },
    children: c,
  });
}
function S() {
  const c = r.exports.useContext(m);
  return o("nav", {
    className: "flex justify-between mx-2",
    children: [
      e(h, {
        to: "/",
        children: e("img", {
          className: " w-full px-2 m-auto  w-auto object-contain",
          src: "https://seeklogo.com/images/W/woodland-logo-0EC7F57B3B-seeklogo.com.png",
          alt: "brand",
          "aria-label": "brand",
        }),
      }),
      o("div", {
        className: "relative  w-full flex justify-end",
        children: [
          e(h, {
            to: "/training",
            children: e("button", {
              className: "text-gray-400 mx-2  hover:text-gray-800 sm-hide",
              children: "TRAINING",
            }),
          }),
          e(h, {
            to: "/internship",
            children: e("button", {
              className: "text-gray-400 sm-hide mx-2 hover:text-gray-800",
              children: "INTERNSHIP",
            }),
          }),
          e(h, {
            to: "/capital",
            children: e("button", {
              className: "text-gray-400 sm-hide  mx-2 hover:text-gray-800",
              children: "CAPITAL",
            }),
          }),
          e("button", {
            className: "text-gray-400 mx-2 sm-show hover:text-gray-800",
            onClick: () => {
              c.setMenuNav(1);
            },
            children: e("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "25",
              height: "25",
              fill: "currentColor",
              viewBox: "0 0 16 16",
              children: e("path", {
                fillRule: "evenodd",
                d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function L(c) {
  const t = r.exports.useContext(m);
  return e("div", {
    className:
      "flex sm:w-auto sm:justify-end sm:scale-50 dial-container lg:w-full relative my-16",
    children: o("div", {
      className: "dial relative rounded-full ",
      children: [
        e("div", {
          className: "d-0 dials ",
          onClick: () => {
            t.setSelected(
              t.selected - 1 < 0 ? t.products.length - 1 : t.selected - 1
            );
          },
          style: {
            backgroundImage: `url(${
              t.products[
                t.selected - 1 < 0 ? t.products.length - 1 : t.selected - 1
              ].background
            })`,
          },
        }),
        e("div", {
          className: "d-1 dials active",
          children: e("img", { src: t.products[t.selected].background }),
        }),
        e("div", {
          className: "d-2 dials ",
          onClick: () => {
            t.setSelected(
              t.selected + 1 > t.products.length - 1 ? 0 : t.selected + 1
            );
          },
          style: {
            backgroundImage: `url(${
              t.products[
                t.selected + 1 > t.products.length - 1 ? 0 : t.selected + 1
              ].background
            })`,
          },
        }),
      ],
    }),
  });
}
var R = ({}) =>
  o("div", {
    className: " ",
    children: [
      e("div", { className: "w-full" }),
      e("div", { className: "w-full ", children: e(L, {}) }),
    ],
  });
function A(c) {
  const t = r.exports.useContext(m);
  return o("div", {
    className: "relative",
    children: [
      o("div", {
        className: `bg-${
          t.products[t.selected].color
        }-800 text-white flex justify-center items-center`,
        id: "counter",
        children: ["0", t.selected + 1],
      }),
      e("img", {
        className: "absolute bg-dotted",
        src: "http://www.clker.com/cliparts/8/e/a/b/1194989365666493578pattern-dots-square-grid-01.svg.med.png",
        alt: "Dots Square Grid 01 Pattern Clip Art at Clker.com - vector clip art online,  royalty free &amp; public domain",
      }),
      o("div", {
        className: "down absolute",
        children: [
          e("div", { className: "line bg-gray-400" }),
          e("div", {
            onClick: () => {
              t.setSelected(
                t.selected - 1 < 0 ? t.products.length - 1 : t.selected - 1
              );
            },
            className:
              "btn-1 w-10 h-10 bg-white flex justify-center items-center rounded-full relative",
            children: e("div", {
              className: "hover-btn w-10 h-10 rounded-full",
            }),
          }),
          e("div", {
            onClick: () => {
              t.setSelected(
                t.selected + 1 > t.products.length - 1 ? 0 : t.selected + 1
              );
            },
            className:
              "btn-2 w-10 h-10 bg-white flex justify-center items-center rounded-full relative mt-3",
            children: e("div", {
              className: "hover-btn w-10 h-10 rounded-full",
            }),
          }),
        ],
      }),
    ],
  });
}
var D = () => {
    const c = r.exports.useContext(m);
    return o("div", {
      className: "w-full",
      children: [
        e(A, {}),
        o("div", {
          className: "px-4 py-2",
          children: [
            e("h2", {
              className: "text-6xl text-gray-400",
              children: c.products[c.selected].title,
            }),
            e("h2", {
              className: "text-6xl font-semibold text-gray-800",
              children: "at home",
            }),
            e("h2", {
              className: "text-lg text-gray-400 ",
              children: "Meet your new comfort zone!",
            }),
          ],
        }),
      ],
    });
  },
  T = () => o(r.exports.Fragment, { children: [e(D, {}), e(R, {})] });
const v = r.exports.lazy(() =>
    d(
      () => import("./Internship.79c5c639.js"),
      [
        "assets/Internship.79c5c639.js",
        "assets/InternshipByLocation.8b5b0155.js",
        "assets/vendor.cfa9d7b1.js",
        "assets/Heading.65d277f4.js",
      ]
    )
  ),
  O = r.exports.lazy(() =>
    d(
      () => import("./Menubar.53006adb.js"),
      ["assets/Menubar.53006adb.js", "assets/vendor.cfa9d7b1.js"]
    )
  ),
  z = r.exports.lazy(() =>
    d(
      () => import("./Comment.3ddca13b.js"),
      ["assets/Comment.3ddca13b.js", "assets/vendor.cfa9d7b1.js"]
    )
  ),
  B = r.exports.lazy(() =>
    d(
      () => import("./Training.a0b8a682.js"),
      [
        "assets/Training.a0b8a682.js",
        "assets/Heading.65d277f4.js",
        "assets/vendor.cfa9d7b1.js",
      ]
    )
  ),
  M = r.exports.lazy(() =>
    d(
      () => import("./Capital.9496a6b3.js"),
      [
        "assets/Capital.9496a6b3.js",
        "assets/InternshipByLocation.8b5b0155.js",
        "assets/vendor.cfa9d7b1.js",
        "assets/Heading.65d277f4.js",
      ]
    )
  ),
  V = r.exports.lazy(() =>
    d(
      () => import("./Footer.54a9055a.js"),
      ["assets/Footer.54a9055a.js", "assets/vendor.cfa9d7b1.js"]
    )
  ),
  $ = r.exports.lazy(() =>
    d(
      () => import("./Notfound.333a1ce8.js"),
      ["assets/Notfound.333a1ce8.js", "assets/vendor.cfa9d7b1.js"]
    )
  );
function F() {
  const [c, t] = r.exports.useState([]);
  return (
    r.exports.useContext(m),
    r.exports.useEffect(() => {
      fetch("/src/data/cards.json")
        .then((i) => i.json())
        .then((i) => {
          t(i);
        });
    }, []),
    o("div", {
      className: "App  py-2 my-3 mx-auto",
      children: [
        e(S, {}),
        e("main", {
          className: "flex sm-wrap  m-6",
          children: e(f, {
            children: e(u, { path: "/", exact: !0, element: e(T, {}) }),
          }),
        }),
        e(r.exports.Suspense, { fallback: e(p, {}), children: e(O, {}) }),
        o("div", {
          children: [
            e(r.exports.Suspense, {
              fallback: e(p, {}),
              children: o(f, {
                children: [
                  e(u, { path: "/", exact: !0, element: e(v, {}) }),
                  e(u, { path: "/internship", exact: !0, element: e(v, {}) }),
                  e(u, { path: "/capital", exact: !0, element: e(M, {}) }),
                  e(u, { path: "/training", exact: !0, element: e(B, {}) }),
                  e(u, { path: ":notfound/*", exact: !0, element: e($, {}) }),
                ],
              }),
            }),
            e(r.exports.Suspense, { fallback: e(p, {}), children: e(z, {}) }),
          ],
        }),
        e(r.exports.Suspense, { fallback: e(p, {}), children: e(V, {}) }),
      ],
    })
  );
}
N.exports.render(
  e(r.exports.StrictMode, {
    children: e(P, { children: e(_, { children: e(F, {}) }) }),
  }),
  document.getElementById("root")
);
export { e as a, m as c, o as j };
