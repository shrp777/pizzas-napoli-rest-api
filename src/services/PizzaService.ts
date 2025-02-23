import { connectDatabase } from "../db/database";
import { Pizza } from "../entities/Pizza";
import PizzaServiceError, { PizzaServiceErrorType } from "./PizzaServiceError";

export default class PizzasService {
  static async findAll(): Promise<Array<Pizza>> {
    try {
      const db = connectDatabase();

      const query = db.query("SELECT * FROM pizzas").as(Pizza); //permet de mapper chaque résultat en instance de Pizza
      const result = query.all();

      if (!result) {
        throw new PizzaServiceError(PizzaServiceErrorType.CANT_FIND);
      }

      //conversion de la liste d'ingrédients récupérée sous forme de String depuis SQLite en liste de String
      const pizzas = result.map((r) => ({
        ...r,
        ingredients: JSON.parse(String(r?.ingredients) || "[]")
      }));

      return pizzas;
    } catch (error) {
      if (error instanceof PizzaServiceError) {
        throw error;
      } else {
        throw new PizzaServiceError(PizzaServiceErrorType.DATASOURCE);
      }
    }
  }

  static async findOneById(id: number): Promise<Pizza> {
    try {
      const db = connectDatabase();

      const query = db.query(`SELECT * FROM pizzas WHERE id = $id`).as(Pizza); //permet de mapper chaque résultat en instance de Pizza
      const result = query.get(id);

      if (!result) {
        throw new PizzaServiceError(PizzaServiceErrorType.DOES_NOT_EXIST);
      }

      //conversion de la liste d'ingrédients récupérée sous forme de String depuis SQLite en liste de String
      result!.ingredients = JSON.parse(String(result?.ingredients) || "[]");

      return result;
    } catch (error) {
      if (error instanceof PizzaServiceError) {
        throw error;
      } else {
        throw new PizzaServiceError(PizzaServiceErrorType.DATASOURCE);
      }
    }
  }
}
