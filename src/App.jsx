// ---------- 依赖导入 ----------
import { useState } from "react"; // React 的状态 Hook
import steps from "./data/steps"; // 步骤数据（刚才新建）

// ---------- 组件入口 ----------
export default function App() {
  /* 当前步骤索引（idx）与更新函数 */
  const [idx, setIdx] = useState(0);
  /* 根据索引取出要展示的 step 对象 */
  const step = steps[idx];

  /* 复制当前步骤第一段文本 */
  const copyFirstBlock = () => {
    navigator.clipboard.writeText(step.blocks[0]);
    alert("Copied to clipboard ✅"); // TODO: 可替换为 Toast
  };

  /* ---------- 组件渲染 ---------- */
  return (
    /* 最大宽度 + 居中 */
    <div className="max-w-6xl mx-auto p-6 text-sm">
      {/* ===== 顶部导航栏 ===== */}
      <nav className="flex justify-between mb-6">
        {/* 左侧主导航 */}
        <ul className="flex gap-8 font-medium">
          {["Home", "CCPF", "C3P", "Authenticity"].map((item) => (
            <li key={item} className={item === "CCPF" ? "font-bold" : ""}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* 右侧功能菜单 */}
        <ul className="flex gap-6">
          <li>
            <a href="#">Edit</a>
          </li>
          <li>
            <a href="#">Sys&nbsp;&amp;&nbsp;Admin</a>
          </li>
        </ul>
      </nav>

      {/* ===== 主体三列布局 ===== */}
      <div className="flex">
        {/* --- 左列：圆形外链按钮 --- */}
        <div className="flex flex-col gap-4 items-center mr-6">
          {step.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* --- 中间列：文本块 + 复制 + 翻页 --- */}
        <div className="flex-1">
          {/* 步骤标题 / 视图标签 */}
          <h2 className="mb-2">{step.title}</h2>
          <h3 className="text-center mb-4 font-semibold">Original view</h3>

          {/* 文本块（占位） */}
          {step.blocks.map((txt, i) => (
            <div
              key={i}
              className="bg-gray-300 h-24 mb-4 rounded flex items-center justify-center px-4 text-center whitespace-pre-wrap"
            >
              {txt}
            </div>
          ))}

          {/* 复制按钮 */}
          <button
            onClick={copyFirstBlock}
            className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center ml-auto"
          >
            Copy
          </button>

          {/* 翻页按钮 */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={() => setIdx((i) => i - 1)}
              disabled={idx === 0}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={() => setIdx((i) => i + 1)}
              disabled={idx === steps.length - 1}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>

        {/* --- 右列：图片占位 --- */}
        <div className="ml-6">
          <div className="bg-gray-300 w-56 h-64 flex items-center justify-center">
            {step.imageAlt}
          </div>
        </div>
      </div>
    </div>
  );
}
