import { create } from "zustand";

export const themeStore = create((set) => ({
  currentTheme: localStorage.getItem("chat-theme") || "light",

  changeTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ currentTheme: theme });
    // localStorage.removeItem("chat-theme");
  },
}));
