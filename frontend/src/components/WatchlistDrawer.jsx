import React from "react";
import { useProductSore } from "../store/useProductStore";

const WatchlistDrawer = ({ ref }) => {
  const { watchlist } = useProductSore();
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={ref}
      />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <h1 className="font-bold">Watchlist</h1>
          {/* Sidebar content here */}
          <li>
            {watchlist.map((product) => (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product?.price}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WatchlistDrawer;
