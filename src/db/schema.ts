import {
  sqliteTable,
  text,
  integer,
  real,
  blob
} from "drizzle-orm/sqlite-core";

export const pizzas = sqliteTable("pizzas", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  price: real("price").notNull(),
  ingredients: blob({ mode: "json" }).$type<string[]>(),
  base: text({ enum: ["Nature", "Tomate", "Crème"] }).notNull()
});
