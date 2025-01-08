export type Pizza = {
  id: number;
  name: string;
  ingredients: string[];
  price: number;
};

export type JSONBodyResponse = {
  status: "success" | "fail" | "error";
  code: 200 | 201 | 204 | 404;
  type: "collection" | "resource";
  links: {
    self: string;
    related?: string;
  };
  count?: number;
  data?: {};
};
