import { createIsomorphicFn } from "@tanstack/react-start";

export const logger = createIsomorphicFn()
  .server((msg: string) => {
    console.log(`[SERVER] ${msg}`); // ターミナルに出る
  })
  .client((msg: string) => {
    console.log(`[CLIENT] ${msg}`); // ブラウザコンソールに出る
  });
