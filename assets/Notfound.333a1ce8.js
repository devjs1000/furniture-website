import { a as e, j as t } from "./index.0967a299.js";
import { u as a } from "./vendor.cfa9d7b1.js";
var n = "/assets/notfound.f3c90dbd.svg",
  i = () => {
    const { notfound: s } = a();
    return e("div", {
      className: "flex m-auto justify-center items-center ",
      style: { minHeight: "60vh" },
      children: t("div", {
        className: "  flex flex-wrap justify-center px-5 items-center ",
        children: [
          t("h1", {
            className: "text-8xl text-center m-4 w-auto text-gray-800",
            style: { margin: "50px !important" },
            children: [
              s,
              " ",
              e("span", { className: "text-indigo-500", children: "notfound" }),
            ],
          }),
          e("img", { src: n, className: "w-auto m-4  h-60" }),
        ],
      }),
    });
  };
export { i as default };
