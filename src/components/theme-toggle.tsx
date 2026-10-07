"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check current class (set by inline head script), localStorage or system preference
    const stored = localStorage.getItem("theme");
    const isDark =
      document.documentElement.classList.contains("dark") ||
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl border border-[#EAE6DF] dark:border-[#1E283D] bg-white dark:bg-[#101624]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-xl border border-[#EAE6DF] dark:border-[#1E283D] bg-white dark:bg-[#101624] text-[#1C1E21] dark:text-[#F8FAFC] hover:border-[#D8D2C7] dark:hover:border-[#334155] shadow-2xs flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02365D] dark:focus-visible:ring-[#38BDF8]"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-[#5C6470] hover:text-[#02365D] transition-colors" />
      ) : (
        <Sun className="w-4 h-4 text-[#F59E0B] hover:text-[#FBBF24] transition-colors" />
      )}
    </button>
  );
}
