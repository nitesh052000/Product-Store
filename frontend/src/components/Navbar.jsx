import React, { useRef } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingCartIcon, Palette, ShoppingBagIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useProductSore } from "../store/useProductStore";
import WatchlistDrawer from "./WatchlistDrawer";

const Navbar = () => {
  const { pathname } = useResolvedPath();
  const { totalWatchlistProduct, watchlist } = useProductSore();

  console.log("total", totalWatchlistProduct);
  console.log("watchlist", watchlist);

  const drawerRef = useRef(null);

  const openDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = true;
    }
  };

  return (
    <div className=" bg-base-100  backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* {Logo} */}
          <div className=" flex-1 lg:flex-none">
            <Link to="/">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />

                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  PRODUCT STORE
                </span>
              </div>
            </Link>
          </div>
          <div className=" flex items-center gap-4">
            <ThemeSelector />

            {pathname == "/" ? (
              <div className=" indicator">
                <div className=" p-2 rounded-full hover:bg-base-50 transition-colors">
                  <ShoppingBagIcon
                    onClick={openDrawer}
                    className=" size-5 cursor-pointer"
                  />
                  <WatchlistDrawer ref={drawerRef} />
                  <span className=" badge badge-sm badge-primary indicator-item">
                    {totalWatchlistProduct}
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
