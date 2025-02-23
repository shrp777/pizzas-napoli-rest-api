import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import PizzasService from "../../services/PizzaService";
import { Pizza } from "../../entities/Pizza";
import PizzaServiceError, {
  PizzaServiceErrorType
} from "../../services/PizzaServiceError";

const factory = createFactory();

export default factory.createHandlers(async (c) => {
  try {
    const id = Number(c.req.param("id"));
    const result: Pizza = await PizzasService.findOneById(id);

    return c.json({ pizza: result }, 200);
  } catch (error) {
    if (error instanceof PizzaServiceError) {
      if (error.errorType === PizzaServiceErrorType.DOES_NOT_EXIST) {
        throw new HTTPException(404, { message: error.message });
      }
    }
    throw new HTTPException(500);
  }
});
