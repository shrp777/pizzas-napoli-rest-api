import { Hono } from "hono";
import { connectDatabase, createSchema, seedData } from "./db/database";

const app = new Hono();

const db = connectDatabase();
//createSchema(); // création des tables de données (désactiver après initialisation)
//seedData(); // remplissage de la base de données (désactiver après initalisation)

app.get("/", (c) => {
  return c.json({ message: "Pizzas Napoli API" });
});

export default app;
