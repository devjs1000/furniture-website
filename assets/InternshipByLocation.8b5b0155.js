import { L as t } from "./vendor.cfa9d7b1.js";
import { a, j as o } from "./index.0967a299.js";
var r = "/assets/banglore.ad883bde.png",
  l = "/assets/delhi.9a1e155e.png",
  c = "/assets/kolkata.d728d4f7.png",
  d = "/assets/mumbai.468a21bf.png",
  m = "/assets/work-from-home.b30e7129.png",
  h = "/assets/chennai.dfbda6e6.png",
  p = "/assets/international.a6c5a841.png";
const e = ({ icon: s, title: n }) => {
    const i = n.trim().replaceAll("/", "-").replaceAll(" ", "-");
    return a("div", {
      className: "mx-2 p-2",
      children: o(t, {
        to: i,
        children: [
          a("img", { src: s, className: "rounded h-32", alt: n }),
          a("button", {
            className:
              "w-full my-2 shadow-lg font-semibold bg-indigo-500 text-white py-1 px-2 rounded",
            children: n,
          }),
        ],
      }),
    });
  },
  b = ({}) =>
    a("div", {
      className: " bg-indigo-100  p-4 shadow",
      children: o("div", {
        className: "flex flex-wrap justify-center rounded bg-white",
        children: [
          a(e, { icon: m, title: "Work From Home" }),
          a(e, { icon: r, title: "Banglore" }),
          a(e, { icon: l, title: "Delhi/NCR" }),
          a(e, { icon: c, title: "Kolkata" }),
          a(e, { icon: d, title: "Mumbai" }),
          a(e, { icon: h, title: "Chennai" }),
          a(e, { icon: p, title: "International" }),
        ],
      }),
    });
var v = b;
export { v as I };
