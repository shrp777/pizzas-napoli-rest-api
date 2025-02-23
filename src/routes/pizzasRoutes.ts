import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import getAllPizzasHandler from "../handlers/pizzas/getAllPizzasHandler";
import getPizzaByIdHandler from "../handlers/pizzas/getPizzaByIdHandler";

const route = new Hono();

route.get("/", ...getAllPizzasHandler);
route.get("/:id", ...getPizzaByIdHandler);

//Erreur 405 (Method not allowed) retournée pour toutes les autres routes
route.all("*", async (c) => {
  throw new HTTPException(405, { message: "Method not allowed" });
});

export default route;
