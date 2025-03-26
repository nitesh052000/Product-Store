import React from "react";
import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useProductSore = create((set, get) => ({
  // products state

  products: [],
  loading: false,
  error: null,

  // form state
  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),

  addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully");
      document.getElementById("add_product_modal").close();
    } catch (error) {
      console.log("Error in addProduct Function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true });

    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      console.log("response", response);
      set({ products: response?.data?.data, error: null });
    } catch (err) {
      console.log("error in fetch product", err);
      toast.error("Something went wrong");
      if (err.status == 429)
        set({ error: "Rate limit exceeded", products: [] });
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.delete(`${BASE_URL}/api/products/${id}`);
      console.log("delete", response);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log("error in deleteproduct function", error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProduct: async (id) => {
    set({ loading: true });

    try {
      const response = await axios.get(`${BASE_URL}/api/products/${id}`);
      console.log("response", response);
      set({ products: response?.data?.data, error: null });
    } catch (err) {
      console.log("error in fetch product", err);
      toast.error("Something went wrong");
      if (err.status == 429)
        set({ error: "Rate limit exceeded", products: [] });
      else set({ error: "Something went wrong", products: [] });
    } finally {
      set({ loading: false });
    }
  },
}));
