import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        /*
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "微软雅黑",
          "Arial",
          "sans-serif",
        ],
        */
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
