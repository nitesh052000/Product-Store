import { Package2Icon, PlusCircleIcon } from "lucide-react";
import React from "react";
import { useProductSore } from "../store/useProductStore";

const AddProductModal = () => {
  const { addProduct, loading, formData, setFormData } = useProductSore();

  return (
    <div>
      <dialog className="modal" id="add_product_modal">
        <div className=" modal-box">
          {/* {Close button} */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h1 className=" font-bold text-xl mb-8">Add New Product</h1>

          <form onSubmit={addProduct}>
            <div className="grid gap-6">
              {/* {Product Name Input} */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium mb-2 ml-1">
                    Product Name
                  </span>
                </label>
                <div className="relative w-full">
                  {/* Left Icon */}
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Package2Icon className="w-5 h-5 text-gray-500" />
                  </div>

                  {/* Input field with left padding */}
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="input input-bordered w-full pl-12 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 rounded-xl"
                  />
                </div>
              </div>

              {/* {Product Price} */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium mb-2 ml-1">
                    Product Price
                  </span>
                </label>
                <div className="relative w-full">
                  {/* Left Icon */}
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Package2Icon className="w-5 h-5 text-gray-500" />
                  </div>

                  {/* Input field with left padding */}
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="input input-bordered w-full pl-12 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 rounded-xl"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* {Product Image} */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium mb-2 ml-1">
                    Image URL
                  </span>
                </label>
                <div className="relative w-full">
                  {/* Left Icon */}
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Package2Icon className="w-5 h-5 text-gray-500" />
                  </div>

                  {/* Input field with left padding */}
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="input input-bordered w-full pl-12 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 rounded-xl"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* {Modal Actions} */}
            <div className=" modal-action">
              <form method="dialog">
                <button className=" btn btn-ghost">Cancel</button>
              </form>
              <button className="btn btn-soft btn-primary">
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <>
                    <PlusCircleIcon className="size-5 mr-2" />
                    Add Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddProductModal;
