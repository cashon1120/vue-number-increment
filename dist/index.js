import { defineComponent as N, ref as F, watch as A, onMounted as E, openBlock as B, createElementBlock as M, toDisplayString as _ } from "vue";
const k = /* @__PURE__ */ N({
  __name: "NumberIncrement",
  props: {
    to: null,
    speed: null,
    callback: null
  },
  emits: ["callback"],
  setup(d, { emit: h }) {
    const o = d, a = (e, t) => {
      if (typeof e == "number")
        return e;
      if (isNaN(Number(e)))
        throw new Error(`\u5C5E\u6027 ${t} \u7684\u503C\u5FC5\u987B\u4E3A\u4E00\u4E2A\u6570\u5B57\u6216\u8005\u80FD\u8F6C\u4E3A(Number)\u6570\u5B57\u7684\u5B57\u7B26\u4E32`);
      return Number(e);
    }, n = F(0);
    let r = null;
    const b = (e) => {
      const t = a(o.speed, "speed"), u = o.speed ? 12 - Math.min(10, t) : 5;
      return Math.floor((e - n.value) / (u * 10));
    }, l = (e, t, u) => {
      let c = Number((n.value + t + Number(Math.random().toFixed(u))).toFixed(u));
      if (n.value = Math.min(c, e), c >= e) {
        n.value = e, h("callback", n.value), cancelAnimationFrame(r);
        return;
      }
      r = requestAnimationFrame(() => l(e, t, u));
    }, i = () => {
      var s, p;
      cancelAnimationFrame(r);
      const e = a(o.to, "to"), t = b(e), u = ((s = e.toString().split(".")[1]) == null ? void 0 : s.length) || 0, c = ((p = n.value.toString().split(".")[1]) == null ? void 0 : p.length) || 0, m = Math.min(2, Math.max(u, c)), f = Number(e.toFixed(m));
      r = requestAnimationFrame(() => l(f, t, m));
    };
    return A(o, () => {
      i();
    }), E(() => {
      i();
    }), (e, t) => (B(), M("div", null, "1: " + _(n.value), 1));
  }
});
export {
  k as default
};
