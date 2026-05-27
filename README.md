# tanstack-start-workspace

Phase 9: TanStack Start の学習リポジトリ。

## 起動

```bash
pnpm install
pnpm dev
```

## スタック

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

## 構成

```
src/
├── routes/
│   ├── __root.tsx        # ルートレイアウト
│   ├── index.tsx         # / — createServerFn を loader で呼ぶ例
│   └── api/
│       └── hello.ts      # /api/hello — Server Routes の例
├── utils/
│   ├── greet.ts          # createServerFn + Zod
│   └── secret.ts         # createServerOnlyFn
└── styles.css
```

## 学習メモ

詳細は [CLAUDE.md](./CLAUDE.md) を参照。
