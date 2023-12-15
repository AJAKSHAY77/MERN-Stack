import { Product } from "../Models/product.js";

// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

export const createPrduct = async (req, res) => {
  const product = new Product(req.body);
try {
    const savedProduct = await product.save();
    console.log(savedProduct);
  } catch (err) {
    console.log(err);
  }

  res.json(req.body);
};

export const getapi = async (req, res) => {
  // console.log(req.params);
  const products = await Product.find({price:{$gt:9000}});
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
