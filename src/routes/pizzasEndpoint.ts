import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { connectDatabase } from "../db/database";

const route = new Hono();

route.get("/", async (c) => {
  try {
    const db = connectDatabase();

    const query = await db.query("SELECT * FROM pizzas").as(Pizza);
    const result = query.all();

    return c.json({ pizzas: result }, 200);
  } catch (error) {
    console.error(error);
    throw new HTTPException(500);
  }
});

export default route;
