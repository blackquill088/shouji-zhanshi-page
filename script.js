const copyButton = document.querySelector("[data-copy]");
const toast = document.querySelector(".toast");

const requirementText = [
  "手机展示页制作资料清单：",
  "1. 店名 / 公司名",
  "2. 产品或服务介绍",
  "3. 产品图片",
  "4. 联系方式",
  "5. 想要的风格",
  "6. 参考页面（如有）",
].join("\n");

function showToast() {
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(requirementText);
    showToast();
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = requirementText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast();
  }
});
