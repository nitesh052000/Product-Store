import { Trash2Icon, EditIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log("product", product);
  return (
    <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* {Product Image} */}
      <figure className=" relative pt-[56.25%]">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

          <button className=" btn btn-sm btn-error btn-outline">
            <Trash2Icon className=" size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
