import React from "react";
import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:3000";

export const useProductSore = create((set, get) => ({
  // products state

  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });

    try {
      const response = await axios.get(`${BASE_URL}/api/products`);

      console.log("response", response);

      set({ products: response?.data?.data, error: null });
    } catch (err) {
      console.log("error in fetch product", err);
      if (err.status == 429)
        set({ error: "Rate limit exceeded", products: [] });
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
