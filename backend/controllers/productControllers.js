import { sql } from "../config/db.js";

export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newProduct = await sql`
     INSERT INTO products (name,price,image)
     values (${name},${price},${image})
     RETURNING *
     `;

    console.log("New Product added");
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("error in creating products", error);
    res
      .status(500)
      .json({ success: false, message: "Error in adding new Product" });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await sql`SELECT * FROM products ORDER BY created_at DESC`;

    console.log("products", products);

    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.log("erro in fetching products", err);
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await sql`SELECT * FROM products WHERE id=${id}`;

    console.log("products", product);

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log("erro in fetching products", err);
    res
      .status(500)
      .json({ success: false, message: "Error in getting Product" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql` DELETE FROM product WHERE id=${id}`;

    console.log("delted successfully", products);

    res.status(200).json({ success: true, data: deletedProduct });
  } catch (error) {
    console.log("error in creating products", error);
    res
      .status(500)
      .json({ success: false, message: "Error in deleting product" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  try {
    const updateProduct =
      await sql`UPDATE products SET name=${name},price=${price}, image=${image} WHERE id=${id} RETURNING *`;

    if (updateProduct.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("error in creating products", error);
    res
      .status(500)
      .json({ success: false, message: "Error in updating product" });
  }
};
