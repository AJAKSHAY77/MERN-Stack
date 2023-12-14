
import fs from "fs"

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

export const createPrduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);

  res.json(req.body);
};

export const getapi = (req, res) => {
  console.log(req.params);
  res.json(products);
};

export const product = (req, res) => {
  console.log(req.params.id);
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

export const updateapi = (req, res) => {
  console.log(req.params.id);
  const id = +req.params.id;
  const productindex = products.findIndex((p) => p.id === id);

  products.splice(productindex, 1, { ...req.body, id: id });
  res.status(201).json();
};
