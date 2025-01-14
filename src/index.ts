import { Hono } from "hono";

import pizzasEndpoint from "./routes/pizzasEndpoint";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Pizzas Napoli REST API" });
});

app.route("/pizzas", pizzasEndpoint);

export default app;
