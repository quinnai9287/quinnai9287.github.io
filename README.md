# 個人履歷 / Portfolio

這個專案使用 Next.js、[shadcn/ui](https://ui.shadcn.com/)、[magic ui](https://magicui.design/) 建立，並且採用 GitHub Actions 自動部署到 GitHub Pages。

# 專案特色

- 只需要修改 [單一設定檔](./src/data/resume.tsx) 即可快速更新內容
- 使用 Next.js 14、React、TypeScript、Shadcn/UI、TailwindCSS、Framer Motion、Magic UI
- 內建部落格頁面
- 支援不同裝置的響應式排版
- 配合靜態匯出（Static Export）與 GitHub Pages 部署

# 本地開發

1. 複製這個 repository 到本機：

   ```bash
   git clone https://github.com/quinnai9287/resume.git
   ```

2. 進入專案目錄：

   ```bash
   cd resume
   ```

3. 安裝依賴：

   ```bash
   pnpm install
   ```

4. 啟動本地開發伺服器：

   ```bash
   pnpm dev
   ```

5. 編輯 [設定檔](./src/data/resume.tsx) 即可更新履歷內容。

# GitHub Pages 部署流程

這個專案已經配置成靜態匯出，設定在 [next.config.mjs](./next.config.mjs)：

```js
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};
```

部署流程定義在 [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)。

## 觸發條件

當 `master` 分支有新的 push 時，自動觸發工作流程：

```yaml
on:
  push:
    branches: [master]
```

## 建置步驟

工作流程會執行以下動作：

1. 下載專案程式碼
2. 設定 Node.js 18
3. 使用 `pnpm` 安裝依賴
4. 執行 `pnpm run build`
5. 在匯出資料夾中建立 `.nojekyll`
6. 將生成的靜態網站部署到 `gh-pages` 分支

## 部署目標

這個 GitHub Actions 會將 `./out` 資料夾中的內容部署到 GitHub Pages，並使用 `gh-pages` 分支作為發布來源。

## 常見發布流程

```bash
git add .
git commit -m "Update resume content"
git push origin master
```

只要 push 到 `master`，GitHub Actions 就會自動建置並發布到 `gh-pages`。

## GitHub Pages 設定方式

在 GitHub repository 設定中，建議將 Pages 設定為：

- Source: Deploy from a branch
- Branch: `gh-pages`

這樣 GitHub Pages 才會讀取這個分支上的靜態站點。

# 授權

本專案依照 [MIT license](https://github.com/dillionverma/portfolio/blob/main/LICENSE.md) 授權條款使用。
