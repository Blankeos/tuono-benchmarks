import { privateConfig } from "@/config.private";

import { Hono } from "hono";

import { apply } from "vike-server/hono";
import { serve } from "vike-server/hono/serve";

const app = new Hono();

// Health checks
app.get("/up", async (c) => {
  return c.newResponse("🟢 UP", { status: 200 });
});

// Vike - handles all page rendering
apply(app);

// Returning errors.
app.onError((error, c) => {
  console.error({
    cause: error.cause,
    message: error.message,
    stack: error.stack,
  });

  return c.json(
    {
      error: {
        cause: error.cause,
        message: c.error?.message ?? "Something went wrong.",
        stack: privateConfig.NODE_ENV === "production" ? undefined : error.stack,
      },
    },
    error.cause ?? 500
  );
});

// No need to export default (especially Bun).
serve(app, { port: privateConfig.PORT });
