import { Link } from "react-router-dom";
import { LogOut, MessageCircleCode, Moon, SunMedium, User } from "lucide-react";

import { useEffect, useState } from "react";
import { themeStore } from "../store/themeStore";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { currentTheme, changeTheme } = themeStore();

  const [isChecked, setIsChecked] = useState(currentTheme);

  const handleThemeChange = () => {
    if (isChecked === "light") {
      setIsChecked("dark");
      changeTheme("dark");
    } else {
      setIsChecked("light");
      changeTheme("light");
    }
  };

  useEffect(() => {
    document
      .getElementById("globalHTML")
      .setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircleCode
                  size={25}
                  className="w-10 h-10 p-2 text-primary"
                />
              </div>
              <h1 className="text-lg font-bold">Talkative</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}

            <div className="inline-flex items-center gap-2">
              <label
                htmlFor="switch-component-on"
                className="text-slate-600 text-sm cursor-pointer"
              >
                <div className="relative inline-block w-11 h-5 mt-2 ml-2">
                  <input
                    id="switch-component-on"
                    type="checkbox"
                    value={isChecked}
                    checked={isChecked === "dark"}
                    onChange={handleThemeChange}
                    className="peer appearance-none w-14 h-8 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
                  />
                  <label
                    htmlFor="switch-component-on"
                    className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
                  >
                    {isChecked === "light" ? (
                      <SunMedium className="absolute top-[3px] left-1" />
                    ) : (
                      <Moon className="absolute top-[3px] left-[3px]" />
                    )}
                  </label>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
