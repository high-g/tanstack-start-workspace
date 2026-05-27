# tanstack-start-workspace

## 目的

Phase 9: TanStack Start の学習リポジトリ。

## フェーズ目標

- [x] TanStack Start の基本概念を理解
- [x] Next.js App Router との比較

## 現在の状況

全 Block 完了。`createServerFn` / `createServerOnlyFn` / `createIsomorphicFn` / Server Routes を実装・動作確認済み。

## 技術スタック（現在）

| パッケージ | 用途 |
|---|---|
| `vite` | ビルドツール |
| `@tanstack/react-start` | フルスタックフレームワーク |
| `@tanstack/react-router` | ルーティング |
| `react` | UI ライブラリ（v19） |
| `tailwindcss` | スタイリング |
| `zod` | バリデーション |
| `oxlint` | Linter |
| `oxfmt` | Formatter |

## 学習ロードマップ

参考: https://tanstack.com/start/latest

### Block 1: サーバー関数

- [x] `src/utils/greet.ts` — `createServerFn` + Zod で挨拶を返す
- [x] `src/routes/index.tsx` — `loader` から呼んで `useLoaderData` で表示
- [x] `src/utils/secret.ts` — `createServerOnlyFn` で `process.env` を返す（コンポから呼んでエラーを確認）
- [x] `src/utils/logger.ts` — `createIsomorphicFn` でサーバー/クライアントで出力先が変わるのを確認

### Block 2: Next.js 比較・まとめ

- [x] 気づいた違いをこのファイルに書き足す（会話内で整理済み）

## 前提知識メモ（ドキュメントから抽出済み）

| 概念 | 要点 |
|---|---|
| Execution Model | 全コードはデフォルトでアイソモーフィック。`loader` も両環境で実行される |
| `createServerFn` | `.handler()` でRPC化。`.inputValidator()` でZod対応。GET/POST両対応 |
| `createServerOnlyFn` | サーバー限定。クライアントで呼ぶとランタイムエラー |
| `createIsomorphicFn` | 環境ごとに実装を分岐 |
| vs Next.js Server Actions | Start は GET 対応、ミドルウェアが関数単位、Vercel 依存なし |

## Next.js との違い

| | TanStack Start | Next.js |
|---|---|---|
| ベース | TanStack Router + Vite | 独自ルーター + Webpack/Turbopack |
| サーバー関数 | `createServerFn`（GET/POST対応） | Server Actions（POSTのみ） |
| コンポーネント単位SSR | 不可（ルート単位が最小） | RSC で可能 |
| ミドルウェア | 関数単位で設定可 | `middleware.ts` 1ファイル、DBアクセス不可 |
| 外部公開API | Server Routes | Route Handlers |
| Vender lock-in | なし | Vercel 最適化 |
| 学習コスト | TanStack Router の延長 | RSC の概念が必要 |

**使い分け：** バックエンドTS+SSRをシンプルにやるなら Start、RSCで細かく制御したいなら Next.js。

## 進め方の方針

- 基本的に人が手書きでコードを書いていくため、Claude Code からのファイル編集は md ファイル以外は受け付けない
- Next.js App Router との違いを意識しながら進める

## 前提知識

- Next.js App Router（Phase 1 完了済み）
- React 18 / 19（Phase 8 完了済み）
- Hono 基礎（Phase 2 完了済み）
