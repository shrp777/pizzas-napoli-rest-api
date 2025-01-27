import { db } from "./db";
import * as schema from "./schema";

db.delete(schema.pizzas)
  .then((_) => {
    db.insert(schema.pizzas)
      .values([
        {
          name: "Margherita",
          price: 7,
          ingredients: ["Basilic", "Mozzarella"],
          base: "Tomate"
        },
        {
          name: "Marinara",
          price: 6,
          ingredients: ["Ail", "Origan"],
          base: "Tomate"
        },
        {
          name: "Boscaiola",
          price: 12,
          ingredients: ["Mozzarella", "Champignons", "Jambon cru"],
          base: "Crème"
        },
        {
          name: "Rucola",
          price: 13,
          ingredients: [
            "Mozzarella",
            "Rucola",
            "Jambon cru",
            "Tomates cerises"
          ],
          base: "Nature"
        },
        {
          name: "Quattro Stagioni",
          price: 12,
          ingredients: [
            "Mozzarella",
            "Jambon",
            "Champignons",
            "Coeurs d'artichauts",
            "Olives"
          ],
          base: "Tomate"
        }
      ])
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
      .finally(() => console.log(`Seeding complete.`));
  })
  .catch((error) => console.error(error));
