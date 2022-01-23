import { a as e, j as n } from "./index.0967a299.js";
var l = "/assets/android.866bc4f6.png",
  c = "/assets/autocad.80121458.png",
  r = "/assets/excel.18961f4b.png",
  o = "/assets/ios.57198c21.png",
  d = "/assets/digital-marketing.93bcbf59.png",
  g = "/assets/web-development.6065480e.png",
  m = "/assets/creative-writting.511ce6f7.png";
const t = ({ icon: s, title: a }) =>
    e("div", {
      className: "mx-2 p-2",
      children: n("a", {
        href: "#",
        className: "text-center",
        children: [
          e("img", { src: s, className: "rounded h-32 mx-auto", alt: a }),
          e("button", {
            className:
              "w-full my-2 truncate shadow-lg font-semibold bg-indigo-500 text-white py-1 px-2 rounded",
            children: a,
          }),
        ],
      }),
    }),
  x = () =>
    e("div", {
      className: " bg-indigo-100  p-4 shadow",
      children: n("div", {
        className: "flex justify-center flex-wrap rounded bg-white",
        children: [
          e(t, { icon: l, title: "android development" }),
          e(t, { icon: c, title: "autocad" }),
          e(t, { icon: m, title: "creative writting" }),
          e(t, { icon: d, title: "digital marketing" }),
          e(t, { icon: o, title: "ios development" }),
          e(t, { icon: r, title: "ms excel" }),
          e(t, { icon: g, title: "web development" }),
        ],
      }),
    });
var v = x;
const p = ({ heading: s, subHeading: a, linkText: i }) =>
  n("div", {
    className: "flex flex-wrap m-8",
    children: [
      e("h2", { className: "w-full text-4xl text-gray-800", children: s }),
      n("div", {
        className: "flex justify-between w-full",
        children: [
          e("h3", { className: "text-2xl text-gray-500", children: a }),
          e("button", {
            className: "bg-blue-500 text-blue-50 shadow-lg h-12 py-2 px-4 ",
            style: { minWidth: "100px" },
            children: i,
          }),
        ],
      }),
    ],
  });
var u = p;
export { v as C, u as H };
