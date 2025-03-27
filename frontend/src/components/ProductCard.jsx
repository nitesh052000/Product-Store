import { Trash2Icon, EditIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useProductSore } from "../store/useProductStore";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductSore();

  console.log("product", product);
  return (
    <div className="card bg-base-100 w-70 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* {Product Image} */}
      <figure className=" relative pt-[56.25%]">
        <img
          src={product?.image}
          alt={product?.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* {product info } */}
        <h2 className="card-title text-lg font-semibold">{product?.name}</h2>
        <p className=" text-2xl font-bold text-primary">
          ${Number(product?.price).toFixed(2)}
        </p>
        {/* {Card Actions} */}
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <EditIcon className="size-4" />
          </Link>

          <button
            onClick={() => deleteProduct(product?.id)}
            className=" btn btn-sm btn-error btn-outline"
          >
            <Trash2Icon className=" size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
