import { Palette } from "lucide-react";
import React from "react";
import { THEMES } from "../constants/theme";
import { useThemeStore } from "../store/useThemeStore";

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();

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
            className={`
                w-full px-2 py-1 rounded-xl flex items-center gap-1 transition-colors
                ${theme === theme.name ? "bg-green" : "hover:bg-base-content/5"}
              `}
            onClick={() => setTheme(theme.name)}
          >
            <Palette className="size-4 mr-2" />
            <span className=" mr-2">{theme.label}</span>
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
