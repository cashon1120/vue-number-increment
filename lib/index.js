import { defineComponent as N, ref as M, watch as x, onMounted as _, toDisplayString as g } from "vue";
const v = /* @__PURE__ */ N({
  __name: "NumberIncrement",
  props: {
    to: null,
    speed: null,
    callback: null
  },
  emits: ["callback"],
  setup(b, { emit: h }) {
    const a = b, m = (e, t) => {
      if (typeof e == "number")
        return e;
      if (isNaN(Number(e)))
        throw new Error(
          `the value of props [${t}] must be a number, or typeof Number(to) === 'number'`
        );
      return Number(e);
    }, n = M(0);
    let c = null;
    const d = (e) => {
      const t = m(a.speed, "speed"), r = a.speed ? 12 - Math.min(10, t) : 5;
      return Math.floor((e - n.value) / (r * 10));
    }, u = (e, t, r) => {
      let o = Number(
        (n.value + t + Number(Math.random().toFixed(r))).toFixed(
          r
        )
      );
      if (t !== 0) {
        if (n.value = t > 0 ? Math.min(o, e) : Math.max(o, e), t > 0 && o >= e || t < 0 && o <= e) {
          n.value = e, h("callback", n.value), cancelAnimationFrame(c);
          return;
        }
        c = requestAnimationFrame(() => u(e, t, r));
      }
    }, i = () => {
      var s, p;
      cancelAnimationFrame(c);
      const e = m(a.to, "to"), t = d(e), r = ((s = e.toString().split(".")[1]) == null ? void 0 : s.length) || 0, o = ((p = n.value.toString().split(".")[1]) == null ? void 0 : p.length) || 0, l = Math.min(
        2,
        Math.max(r, o)
      ), f = Number(e.toFixed(l));
      c = requestAnimationFrame(() => u(f, t, l));
    };
    return x(a, () => {
      i();
    }), _(() => {
      i();
    }), (e, t) => g(n.value);
  }
});
export {
  v as default
};
