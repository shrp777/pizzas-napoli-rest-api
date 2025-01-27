import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
const client = new Database("pizzas-napoli.db");
import * as schema from "./schema";

export const db = drizzle({ schema, client });
