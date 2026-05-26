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

## 学習ロードマップ（2日版）

参考: https://tanstack.com/start/latest

### Day 1: コア概念 + サーバー関数を動かす
- [ ] Execution Model（コードはデフォルトでアイソモーフィック。`createServerFn` 等で制御）
- [ ] `createServerFn` でサーバー関数を実装（GET/POST、Zodバリデーション、ローダー内呼び出し）
- [ ] `createServerOnlyFn` / `createClientOnlyFn` / `createIsomorphicFn` を試す

### Day 2: ルーティング + Next.js 比較 + まとめ
- [ ] Routing（`createFileRoute`、`$param`、`loader`、`<Outlet />`）
- [ ] Server Routes（APIルートの実装）
- [ ] Next.js との主な違いを整理して記録

## ドキュメントで読む必要があるもの（ドキュメントを読んだことで補足済み）

| トピック | 要点 |
|---|---|
| Execution Model | 全コードはデフォルトでアイソモーフィック（両環境で動く）。loaderも両環境で実行される |
| createServerFn | `.handler()` でRPC。`.inputValidator()` でZod対応。GET/POSTどちらも可 |
| Code Execution Patterns | `createServerFn/OnlyFn/ClientOnlyFn/IsomorphicFn` の使い分け |
| vs Next.js | Server Actionsと違いGET対応、ミドルウェアが関数単位で設定可、Vercel依存なし |

## 進め方の方針

- 基本的に人が手書きでコードを書いていくため、Claude Code からのファイル編集は md ファイル以外は受け付けない
- Next.js App Router との違いを意識しながら進める

## 前提知識

- Next.js App Router（Phase 1 完了済み）
- React 18 / 19（Phase 8 完了済み）
- Hono 基礎（Phase 2 完了済み）
