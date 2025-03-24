import { Palette } from "lucide-react";
import React from "react";
import { THEMES } from "../constants/theme";

const ThemeSelector = () => {
  return (
    <div className="dropdown">
      <button tabIndex={0} role="button" className="btn m-1">
        <Palette className="h-6 w-6" />
      </button>
      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl
        w-40
        "
      >
        {THEMES.map((theme) => (
          <button
            key={theme.name}
            className="w-full flex items-center gap-2 transition-colors px-2 py-2"
          >
            <Palette className="size-4" />
            <span>{theme.label}</span>
            {/* {Theme preview codes} */}
            {theme.colors.map((color, i) => (
              <span
                key={i}
                className=" rounded-full size-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
