import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import productRoutes from "../backend/routes/productRoutes.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares for our application
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/products", productRoutes);

console.log("sql", sql);

async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS products (
   id SERIAL PRIMARY KEY,  -- Fixed
   name VARCHAR(255) NOT NULL,
   image VARCHAR(255) NOT NULL,  -- Fixed
   price DECIMAL(10,2) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
 `;

    console.log("database initialized successfully");
  } catch (error) {
    console.log("Error in initialize db", error);
  }
}

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", +PORT);
  });
});
