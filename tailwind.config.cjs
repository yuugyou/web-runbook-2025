/** @type {import('tailwindcss').Config} */
module.exports = {
  // 告诉 Tailwind “到这些路径里查找 className”
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // 递归扫描 src 下所有 js/jsx
  ],
  theme: {
    extend: {}, // 这里可自定义颜色、间距、字体
  },
  plugins: [], // 暂时不用插件留空
};
