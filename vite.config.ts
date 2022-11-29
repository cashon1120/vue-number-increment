/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // jest like test api
    globals: true,
    // 模拟dom环境
    environment: "happy-dom",
    // 支持tsx,jsx
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
