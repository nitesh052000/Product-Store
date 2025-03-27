import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, CodeSquare } from "lucide-react";
import { useProductSore } from "../store/useProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const { error, loading, fetchProduct, currentProduct } = useProductSore();

  console.log("currentProduct", currentProduct);

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  return (
    <div className=" container mx-auto mx-w-4xl  px-4 py-8">
      <button className="btn btn-ghost mb-8">
        <ArrowLeftIcon className="size-4 mr-2" />
        Back to Products
      </button>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* {Product Image} */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            src={currentProduct[0]?.image}
            alt={currentProduct[0]?.name}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
