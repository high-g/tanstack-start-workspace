import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const greet = createServerFn()
  .inputValidator(z.object({ name: z.string() }))
  .handler(async ({ data }) => {
    console.log("サーバで実行中");
    return { message: `Hello, ${data.name}! (from server)` };
  });
