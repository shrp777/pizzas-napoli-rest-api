import { Hono } from "hono";
import { connectDatabase, createSchema, seedData } from "./db/database";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Pizzas Napoli API" });
});

export default app;
