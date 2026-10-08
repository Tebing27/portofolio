"use client";

import {
  useEffect,
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ThemeContext {
  theme: string;
  toggleTheme: () => void;
}

//Create Context
const ThemeContext = createContext<ThemeContext | undefined>(undefined);

//Create Provider Components
export function ThemeProvider({ children }: { children: ReactNode }) {
  //state awal "light" agar sama dengan server, lalu disinkronkan dengan class yang sudah dipasang script di <head>
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  // Fungsi untuk mengganti tema, localStorage hanya ditulis saat user memilih
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  // Menyediakan state theme dan fungsi toggleTheme ke semua komponen anak
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//Buat custom hook untuk mempermudah penggunaan context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Mengubah Color Error");
  }
  return context;
}
