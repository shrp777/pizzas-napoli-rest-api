import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Welcome to Pizzas Napoli API" });
});

export default app;
