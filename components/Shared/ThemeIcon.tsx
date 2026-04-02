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
  //menyimpan tema saat ini di dalam state, untuk mengambil string light di localStorage
  const [theme, setTheme] = useState<string>("light");

  //untuk menangani side-effect ketika komponen pertama kali di render atau tema berubah
  useEffect(() => {
    //1. Cek tema yang tersimpan di localStorage
    const savedTheme = localStorage.getItem("theme");

    //2. Cek prefensi tema dari sistem pengguna
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    //Prioritas: localStorage -> prefensi sistem -> default ("light")
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
  }, []); //Dijalankan hanya sekali memuat aja

  useEffect(() => {
    //Setiap kali state theme berubah maka lakukan hal ini:
    //1. Hapus class light dan dark dari elemen html
    document.documentElement.classList.remove("light", "dark");

    //2. Tambahkan class sesuai dengan tema saat ini
    document.documentElement.classList.add(theme);

    //3. Simpan theme ke localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); //Dijalankan setiap kali state theme berubah

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
