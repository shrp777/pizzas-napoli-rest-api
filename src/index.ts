import { Hono } from "hono";
import pizzasRoutes from "./routes/pizzas";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Pizzas Napoli API" });
});

app.route("/pizzas", pizzasRoutes);

export default app;
