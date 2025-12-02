# 🌤️ Dekai Inu Portfolio

**水色の空 × レトロピクセル × ピクセルアート** をテーマにした、  
イラストレーター兼 Web デザイナーのポートフォリオサイト  

[Live Demo (coming soon)](https://your-domain-or-github-pages)  

---

## ✨ サイト概要

このリポジトリは、以下の構成で作成されたポートフォリオサイトです：

- **Top / About Me** — 自己紹介、世界観の紹介  
- **Gallery** — 描いたピクセルアートのギャラリー  
- **Works** — UI デザインや Web プロジェクトなどの制作実績  
- **Topics** — 新作情報、イベント参加、更新情報などのお知らせ  
- **Contact / Footer** — SNS（X, note, GitHub）リンクや連絡先  

特徴として、  
- レトロゲーム風のピクセル枠や影  
- カードにホバー・クリックで反応するインタラクション  
- ステッカー風イラストで “ポップ” な演出  
- 背景に空／雲イメージ、水色基調の配色  

を取り入れています。  

---

## 🛠 技術スタック

- Next.js (App Router)  
- Tailwind CSS  
- TypeScript + React  
- 静的ホスティング対応（例：GitHub Pages / Walrus / Vercel 等）  

---

## 📥 ローカルでの起動方法

```bash
git clone https://github.com/biggestdog09/dekaiinu-portfolio.git
cd dekaiinu-portfolio
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開くと、ローカルでサイトを確認できます。

---

## 🖼 スクリーンショット / デザイン参照

- Figma デザイン（こちらのリポジトリの元デザイン）  
  https://www.figma.com/make/rqEsArVEIkzseAi4NNypjF/Retro-Pixel-Portfolio-Design

> 🎨 実際のデザインと実装のズレ防止のため、  
> デザインを先に確認しつつコードを編集することを推奨します。

---

## 🧩 ディレクトリ構成

```
dekaiinu-portfolio/
├── package.json
├── src/
│   └── app/
│       ├── page.tsx       # Top ページ
│       ├── gallery/       # Gallery ページ
│       ├── works/         # Works ページ
│       ├── topics/        # Topics ページ
│       ├── about/         # About Me ページ
│       └── globals.css    # 共通スタイル（Tailwind + カラー 調整用）
├── public/                # 画像、ステッカー、アイコン等のアセット
└── README.md              # このファイル
```

（※ ページ構成は今後の実装状況に応じて変更される可能性あり）

---

## 🎯 今後の予定・やりたいこと

- Gallery の画像モーダル表示 ＆ ステッカー飛び出しアニメーションの実装  
- Works / Topics カードクリックで詳細モーダル or 詳細ページへ遷移  
- レスポンシブ（スマホ対応）＆アクセシビリティ調整  
- サイトの公開（GitHub Pages / Walrus / Vercel 等でデプロイ）  
- 必要に応じて英語対応  

---

## 📫 Contact & SNS

- X：[@DekaiInu_wanwan]  
- note：[https://note.com/biggestdog]  
- GitHub：[@biggestdog09](https://github.com/biggestdog09)  
