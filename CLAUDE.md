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

## 学習ロードマップ（1日・2〜3時間）

参考: https://tanstack.com/start/latest

### Block 1: サーバー関数（45分）

- [ ] `src/utils/greet.ts` — `createServerFn` + Zod で挨拶を返す
- [ ] `src/routes/index.tsx` — `loader` から呼んで `useLoaderData` で表示
- [ ] `src/utils/secret.ts` — `createServerOnlyFn` で `process.env` を返す（コンポから呼んでエラーを確認）
- [ ] `src/utils/logger.ts` — `createIsomorphicFn` でサーバー/クライアントで出力先が変わるのを確認

### Block 2: ルーティング（45分）

- [ ] `src/routes/about.tsx` — 別ルートを追加、`<Link>` で遷移
- [ ] `src/routes/posts/$postId.tsx` — 動的ルート、`$postId` をloaderで受け取る
- [ ] クライアントナビゲーション時にネットワークタブで RPC リクエストを確認

### Block 3: Next.js 比較・まとめ（30分）

- [ ] 気づいた違いをこのファイルに書き足す

## 前提知識メモ（ドキュメントから抽出済み）

| 概念 | 要点 |
|---|---|
| Execution Model | 全コードはデフォルトでアイソモーフィック。`loader` も両環境で実行される |
| `createServerFn` | `.handler()` でRPC化。`.inputValidator()` でZod対応。GET/POST両対応 |
| `createServerOnlyFn` | サーバー限定。クライアントで呼ぶとランタイムエラー |
| `createIsomorphicFn` | 環境ごとに実装を分岐 |
| vs Next.js Server Actions | Start は GET 対応、ミドルウェアが関数単位、Vercel 依存なし |

## Next.js との違い（実装しながら追記）

## 進め方の方針

- 基本的に人が手書きでコードを書いていくため、Claude Code からのファイル編集は md ファイル以外は受け付けない
- Next.js App Router との違いを意識しながら進める

## 前提知識

- Next.js App Router（Phase 1 完了済み）
- React 18 / 19（Phase 8 完了済み）
- Hono 基礎（Phase 2 完了済み）
