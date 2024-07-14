"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useOutsideClick } from "../_hooks/useOutsideClick";

const navLinks = [
  { label: "Cabins", route: "/cabins" },
  { label: "About", route: "/about" },
  { label: "Guest area", route: "/account" },
];

const Navigation = ({ avatar }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    setIsOpenMenu(true);
  };
  const closeMenu = () => setIsOpenMenu(false);

  const ref = useOutsideClick(closeMenu);

  return (
    <nav className="relative z-20 text-base sm:text-lg md:text-xl">
      {isOpenMenu ? (
        <XMarkIcon
          className="h-8 w-8 cursor-pointer text-primary-100 sm:hidden sm:h-10 sm:w-10"
          onClick={openMenu}
        />
      ) : (
        <Bars3Icon
          className="h-8 w-8 cursor-pointer text-primary-100 sm:hidden sm:h-10 sm:w-10"
          onClick={openMenu}
        />
      )}

      <ul
        className={`absolute right-0 mt-3 flex w-48 origin-top flex-col items-center gap-10 rounded-md bg-primary-900/80 px-3 py-5 transition-all duration-300 sm:relative sm:w-full sm:scale-y-100 sm:flex-row sm:bg-transparent sm:p-0 md:gap-16 ${isOpenMenu ? "scale-y-100" : "scale-y-0"}`}
        ref={ref}
      >
        {navLinks.map((link) => (
          <li key={link.route} onClick={closeMenu}>
            {avatar && link.route === "/account" ? (
              <Link
                href={link.route}
                className="flex items-center gap-4 transition-colors hover:text-accent-400"
              >
                <img
                  src={avatar}
                  className="h-12 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span>{link.label}</span>
              </Link>
            ) : (
              <Link
                href={link.route}
                className="transition-colors hover:text-accent-400"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
