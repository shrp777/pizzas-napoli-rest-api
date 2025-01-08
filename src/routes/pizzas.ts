import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import { pizzas } from "../data";

import type { Pizza } from "../types";
const route = new Hono();

const host = process.env.HOST;

route.get("/", async (c) => {
  return c.json({ pizzas: pizzas }, 200);
});

route.get("/:id", async (c) => {
  const id: number = Number.parseInt(c.req.param("id"));
  const foundPizza: Pizza | undefined = pizzas.find((p: Pizza) => p.id === id);

  if (foundPizza) {
    return c.json({ pizza: foundPizza }, 200);
  } else {
    throw new HTTPException(404, { message: `Pizza ${id} does not exist` });
  }
});

route.put("/:id", async (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const foundPizza: Pizza | undefined = pizzas.find((p: Pizza) => p.id === id);

  if (foundPizza) {
    return c.json({ pizza: foundPizza }, 200);
  } else {
    throw new HTTPException(404, { message: `Pizza ${id} does not exist` });
  }
});

route.patch("/:id", async (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const foundPizza: Pizza | undefined = pizzas.find((p: Pizza) => p.id === id);
  if (foundPizza) {
    return c.json({ pizza: foundPizza }, 200);
  } else {
    throw new HTTPException(404, { message: `Pizza ${id} does not exist` });
  }
});

route.delete("/:id", async (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const index: number = pizzas.findIndex((p: Pizza) => p.id === id);
  if (index > -1) {
    pizzas.slice(index, 1);
    c.status(204);
    return c.body(null);
  } else {
    throw new HTTPException(404, { message: `Pizza ${id} does not exist` });
  }
});

route.post("/", async (c) => {
  const body = await c.req.json();
  const newPizza: Pizza = {
    id: pizzas.length + 1,
    ...body
  };

  pizzas.push(newPizza);

  c.res.headers.set("location", `${host}/pizzas/${newPizza.id}`);
  return c.json({ pizza: newPizza }, 201);
});

export default route;
