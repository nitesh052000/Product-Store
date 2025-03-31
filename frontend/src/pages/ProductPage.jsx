import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  CodeSquare,
  Package2Icon,
  PlusCircleIcon,
  SaveIcon,
  Trash2Icon,
} from "lucide-react";
import { useProductSore } from "../store/useProductStore";

const ProductPage = () => {
  const { id } = useParams();
  const {
    error,
    loading,
    fetchProduct,
    currentProduct,
    formData,
    setFormData,
    updateProduct,
    deleteProduct,
  } = useProductSore();
  console.log("formdata", formData);
  console.log("currentProduct", currentProduct);

  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center min-h-screen">
        <div className=" loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className=" container mx-auto max-w-4xl  px-4 py-8">
      <button onClick={() => navigate("/")} className="btn btn-ghost mb-8">
        <ArrowLeftIcon className="size-4 mr-2" />
        Back to Products
      </button>
      {currentProduct?.length > 0 && (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* {Product Image} */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={currentProduct[0]?.image}
              alt={currentProduct[0]?.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* {Information part} */}

          <div className="card bg-base-300 shadow-lg">
            <div className=" card-body">
              <h2 className=" card-title text-2xl mb-6">Edit Product</h2>

              <form
                onSubmit={async (e) => {
                  console.log("submit", e);
                  e.preventDefault();
                  await updateProduct(id);
                  navigate("/");
                }}
                className="space-y-4 mb-4"
              >
                {/* {Product Name} */}
                <div className="form-control">
                  <label className="label">
                    <span className=" label-text text-base font-medium mb-2">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product name"
                    className=" input input-bordered w-full mb-2"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                {/* {Product price} */}
                <div className=" form-control">
                  <label className="label">
                    <span className=" label-text text-base font-medium mb-2">
                      Product Price
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className=" input input-bordered w-full mb-2"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>

                {/* {Product image url} */}
                <div className="form-control">
                  <label className="label">
                    <span className=" label-text text-base font-medium mb-2">
                      Image Url
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className=" input input-bordered w-full"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>
                {/* {form action} */}
                <div className=" flex justify-between">
                  <button
                    type="button"
                    className="btn btn-error rounded-full"
                    onClick={handleDelete}
                  >
                    <Trash2Icon className="size-4 mr-2" />
                    Delete product
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-full"
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.price ||
                      !formData.image
                    }
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      <>
                        <SaveIcon className="size-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
