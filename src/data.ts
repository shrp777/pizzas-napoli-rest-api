import { Pizza } from "./types";

export const pizzasCollection: Array<Pizza> = [

  {
   id: 1,
   name: "Margherita",
   ingredients: ["mozzarella", "basilic"],
   price: 7,
   base: "Tomate"
  },{
    id: 2,
    name: "Marinara",
    ingredients: ["tomate", "ail", "origan"],
    price: 6,
    base: "Tomate"
  },{
    id: 3,
    name: "Quattro Formaggi",
    ingredients: ["mozzarella", "gorgonzola", "parmesan", "chèvre"],
    price: 11.5,
    base: "Crème"
  },{
    id: 4,
    name: "Rucola",
    ingredients: ["mozzarella", "rucola", "parmesan", "jambon cru"],
    price: 11.5,
    base: "Nature"
  },{
    id: 5,
    name: "Baby",
    ingredients: ["mozzarella", "jambon"],
    price: 6,
    base: "Nature"
  }

];

