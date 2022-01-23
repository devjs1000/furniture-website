import { r as l } from "./vendor.cfa9d7b1.js";
import { j as a, a as e } from "./index.0967a299.js";
var r = "/assets/auth.05e99897.svg",
  d = () => {
    const [t, m] = l.exports.useState("");
    return a("div", {
      className: " bg-white border-1 rounded shadow-lg p-8 m-8 block sm:flex",
      children: [
        e("div", {
          className: "w-full",
          children: e("img", { src: r, alt: "auth image", className: "h-60" }),
        }),
        a("div", {
          className: "",
          children: [
            e("h1", {
              className: "text-gray-600 text-2xl mx-2 mt-2",
              children: "Add Comment",
            }),
            a("form", {
              action: "#",
              className: "flex flex-wrap",
              children: [
                e("input", {
                  type: "email",
                  className: "w-full p-1 px-4 rounded bg-gray-50",
                  placeholder: "youremail@email.com",
                }),
                e("textarea", {
                  name: "name",
                  onChange: (s) => {
                    m(s.target.value);
                  },
                  value: t,
                  className:
                    "my-2 bg-gray-50 p-4 text-gray-600 resize-none rounded w-full h-40",
                  children: "your comment",
                }),
                e("button", {
                  type: "submit",
                  name: "button",
                  className:
                    "w-full rounded bg-indigo-500 py-2 px-4 font-semibold text-white",
                  children: "Comment",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { d as default };
