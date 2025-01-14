import { Hono } from "hono";

export const pizzasEndpoint = new Hono();

pizzasEndpoint.get("/", (c) => {
  return c.json([]);
});
