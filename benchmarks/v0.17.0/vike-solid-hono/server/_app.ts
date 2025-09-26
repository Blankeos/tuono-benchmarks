import { Hono } from "hono";

const app = new Hono();

/**
 * Minimal API setup to match Next.js simple structure
 */
export const appRouter = app;

export type AppRouter = typeof appRouter;
