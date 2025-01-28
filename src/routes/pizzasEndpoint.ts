import { Hono } from "hono";
import { pizzasCollection } from "../data";

const pizzasEndpoint = new Hono();

pizzasEndpoint.get("/:id", (c) => {
  const id: number = parseInt(c.req.param("id"));
  //récupère l'id dans le path de l'URI
  //on convertit l'id en nombre
  const pizza = pizzasCollection.find((p) => p.id === id);
  //on cherche la pizza dont l'id est égal au paramètre id récupéré
  return c.json({ pizza });
});

pizzasEndpoint.get("/", (c) => {
  const query = c.req.query();

  const basePizza = query.base; //accès direct à la clé base (si elle existe)

  const { base, price } = c.req.query(); //création dynamique d'une variable base, par destructuration de l'objet retourné par c.req.query()

  let pizzas = pizzasCollection;

  if (base) {
    pizzas = pizzas.filter((p) => p.base === base);
  }

  if (price) {
    pizzas = pizzas.filter((p) => p.price === Number(price));
  }

  return c.json({ pizzas });
});

export default pizzasEndpoint;
