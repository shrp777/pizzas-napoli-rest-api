import { Pizza } from "./types";

export const pizzas: Array<Pizza> = [];

const margherita: Pizza = {
  id: 1,
  name: "Margherita",
  ingredients: ["mozzarella", "basilic"],
  price: 7,
  base: "Tomate"
};

const marinara: Pizza = {
  id: 2,
  name: "Marinara",
  ingredients: ["tomate", "ail", "origan"],
  price: 6,
  base: "Tomate"
};

const quattroFormaggi: Pizza = {
  id: 3,
  name: "Quattro Formaggi",
  ingredients: ["mozzarella", "gorgonzola", "parmesan", "chèvre"],
  price: 11.5,
  base: "Crème"
};

const rucola: Pizza = {
  id: 4,
  name: "Rucola",
  ingredients: ["mozzarella", "rucola", "parmesan", "jambon cru"],
  price: 11.5,
  base: "Nature"
};

pizzas.push(margherita, marinara, quattroFormaggi, rucola);
