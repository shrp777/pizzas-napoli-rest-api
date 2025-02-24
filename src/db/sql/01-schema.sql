BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "pizzas" (
    "id" integer NOT NULL,
    "name" text NOT NULL UNIQUE,
    "price" real NOT NULL,
    "ingredients" text NOT NULL,
    "base" text NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
);
COMMIT;