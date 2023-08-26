"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import iconMenu from "../public/icon-menu.svg";
import iconMenuClose from "../public/icon-menu-close.svg";
import { useState } from "react";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="flex justify-between items-center sticky top-0 bg-white mb-3 py-3">
      <Image src={logo} alt="Logo" />
      <button
        onClick={() => {
          setShowMobileMenu(true);
          document.body.style.overflow = "hidden";
        }}
        className="md:hidden"
      >
        <Image src={iconMenu} alt="Menu icon" />
      </button>
      <div
        className={`${
          showMobileMenu ? "" : "max-md:invisible"
        } fixed top-0 right-0 bg-slate-500/50 md:relative max-md:min-w-full max-md:min-h-full overflow-auto`}
      >
        <div
          className={`${
            showMobileMenu ? "right-0" : "-right-[75%]"
          } max-md:absolute max-md:w-3/4 max-md:ms-auto bg-white max-md:min-h-screen transition-all duration-500 p-5`}
        >
          <button
            onClick={() => {
              setShowMobileMenu(false);
              document.body.style.overflow = "";
            }}
            className="md:hidden ms-auto block"
          >
            <Image src={iconMenuClose} alt="Close menu icon" />
          </button>
          <ul className="flex flex-col md:flex-row gap-5 md:gap-10 max-md:mt-10">
            <li className="hover:text-soft-orange">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:text-soft-orange">
              <Link href="#">New</Link>
            </li>
            <li className="hover:text-soft-orange">
              <Link href="#">Popular</Link>
            </li>
            <li className="hover:text-soft-orange">
              <Link href="#">Trending</Link>
            </li>
            <li className="hover:text-soft-orange">
              <Link href="#">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
