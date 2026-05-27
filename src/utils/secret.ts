import { createServerOnlyFn } from "@tanstack/react-start";

export const getSecret = createServerOnlyFn(() => {
  return { secret: process.env.SECRET_KEY ?? "no secret" };
});
