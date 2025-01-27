CREATE TABLE `pizzas` (
    `id` integer PRIMARY KEY NOT NULL,
    `name` text,
    `price` real,
    `ingredients` blob,
    `base` text
)