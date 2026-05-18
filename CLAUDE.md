# tanstack-start-workspace

## 目的

Phase 9: TanStack Start の学習リポジトリ。

## フェーズ目標

- [ ] TanStack Start の基本概念を理解
- [ ] Next.js App Router との比較

## 現在の状況

TanStack Start のセットアップ完了。`pnpm dev` で起動確認済み。

## 技術スタック（現在）

| パッケージ | 用途 |
|---|---|
| `vite` | ビルドツール |
| `@tanstack/react-start` | フルスタックフレームワーク |
| `@tanstack/react-router` | ルーティング |
| `react` | UI ライブラリ（v19） |
| `tailwindcss` | スタイリング |
| `oxlint` | Linter |
| `oxfmt` | Formatter |

## 学習ロードマップ

参考: https://tanstack.com/start/latest

### Day 1: コア概念 + 実装
- [ ] Execution Model を読む
- [ ] Code Execution Patterns を読む
- [ ] Server Functions を読む
- [ ] `createServerFn` でサーバー関数を書く
- [ ] Import Protection を読む

### Day 2: ルーティング + レンダリング
- [ ] Routing を読む
- [ ] Middleware を読む
- [ ] Server Routes を読む
- [ ] 複数ページ + APIルートを実装する
- [ ] Selective SSR / SPA Mode / Static Prerendering / ISR を読む

### Day 3: Next.js との比較
- [ ] Start vs Next.js を読む
- [ ] Migrate from Next.js を読む
- [ ] 気づいた違いを整理する

## 進め方の方針

- 基本的に人が手書きでコードを書いていくため、Claude Code からのファイル編集は md ファイル以外は受け付けない
- Next.js App Router との違いを意識しながら進める

## 前提知識

- Next.js App Router（Phase 1 完了済み）
- React 18 / 19（Phase 8 完了済み）
- Hono 基礎（Phase 2 完了済み）
