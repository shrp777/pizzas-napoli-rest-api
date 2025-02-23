import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import PizzasService from "../../services/PizzaService";
import { Pizza } from "../../entities/Pizza";

const factory = createFactory();

export default factory.createHandlers(async (c) => {
  try {
    const result: Array<Pizza> = await PizzasService.findAll();
    return c.json({ pizzas: result }, 200);
  } catch (error) {
    console.error(error);
    throw new HTTPException(500);
  }
});
