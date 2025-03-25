import React, { useEffect } from "react";
import { useProductSore } from "../store/useProductStore";
import { PlusCircleIcon, RefreshCwIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductSore();

  console.log("useProduct", useProductSore);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <main className=" max-w-6xl  mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <button className=" flex px-2 py-2 bg-green-600 text-black items-center gap-3 rounded-full font-bold">
          <PlusCircleIcon className="size-5" />
          Add Product
        </button>
        <button>
          <RefreshCwIcon className="size-5" />
        </button>
      </div>

      {loading ? (
        <div className=" flex justify-center items-center h-64">
          <div className=" loading loading-spinner loading-lg"></div>
        </div>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
