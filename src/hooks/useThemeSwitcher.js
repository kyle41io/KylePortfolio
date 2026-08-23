import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const applyTheme = () => {
      const userPref = window.localStorage.getItem("theme");
      const check = userPref
        ? userPref === "dark"
          ? "dark"
          : "light"
        : mediaQuery.matches
          ? "dark"
          : "light";

      setMode(check);
      document.documentElement.classList.toggle("dark", check === "dark");
    };

    // Resolve the theme on mount too, not only when the OS preference changes,
    // otherwise `mode` stays "" and the first toggle click is a no-op.
    applyTheme();

    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, []);

  useEffect(() => {
    // Skip the render before the effect above has resolved a theme, so a
    // stored preference is never overwritten with the default.
    if (!mode) return;

    window.localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
