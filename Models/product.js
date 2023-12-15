
import mongoose from "mongoose";
const { Schema } = mongoose;
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: [0, "wrong min price"] },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount  "],
    max: [50, "wrong max discount"],
  },
  rating: { type: Number, min: [0, "wrong rating"], max: [0, "wrong rating"] },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

export const Product = mongoose.model("Product", productSchema);
