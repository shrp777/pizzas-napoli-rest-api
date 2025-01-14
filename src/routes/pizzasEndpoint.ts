import { Hono } from "hono";
import { pizzas } from "../data";

export const pizzasEndpoint = new Hono();

pizzasEndpoint.get("/", (c) => {
  //return c.json({ pizzas: [] });
  return c.json({ pizzas });
});
