import { Hono } from "hono";
import { pizzas } from "../data";

const pizzasEndpoint = new Hono();

pizzasEndpoint.get("/:id", (c) => {
  const id = c.req.param().id;
  return c.json({ pizza: { id: Number.parseInt(id) } }); // à remplacer par la vraie pizza issue du tableau pizzas
});

pizzasEndpoint.get("/", (c) => {
  const query = c.req.query();

  console.log(query); //retourne un objet avec pour chaque variable dans l'URL, une clé dans l'objet du même nom

  const basePizza = query.base; //accès direct à la clé base (si elle existe)

  console.log(basePizza);

  const { base } = c.req.query(); //création dynamique d'une variable base, par destructuration de l'objet retourné par c.req.query()

  console.log(base);

  //return c.json({ pizzas: [] });
  return c.json({ pizzas });
});

export default pizzasEndpoint;
