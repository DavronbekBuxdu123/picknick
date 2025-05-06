"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import useProductStore from "../store/useProductStore";

export default function Header() {
  const pathname = usePathname();
  const { carts, search, setSearch } = useProductStore();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(true);

  const links = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/Maxsulotlar", label: "Mahsulotlar" },
    { href: "/Contactt", label: "Aloqa" },
    { href: "/Blog", label: "Blog" },
  ];

  return (
    <div className="w-full">
      {text && (
        <div className="bg-green-800 text-white text-center text-xs lg:text-sm font-normal py-2 px-3 relative flex justify-center items-center">
          Sign up and get 20% off to your first order. Sign Up Now
          <button
            onClick={() => setText(false)}
            className="absolute top-1 right-4 text-2xl font-bold"
          >
            ×
          </button>
        </div>
      )}

      <header className="w-full z-50 bg-white sticky top-0 shadow-sm">
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={60}
              height={60}
              className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`no-underline font-medium ${
                      pathname === link.href ? "text-success" : "text-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Search & Cart */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="relative">
              <CiSearch className="absolute top-2 left-3 size-5 text-gray-500" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 text-sm rounded-full bg-gray-100 w-60"
              />
            </div>
            <Link href="/Basket" className="relative">
              <MdAddShoppingCart size={24} className="text-dark" />
              {carts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {carts.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="relative">
              <CiSearch className="absolute top-2 left-3 size-5 text-gray-500" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="pl-10 pr-3 py-2 text-sm rounded-full bg-gray-100 w-36"
              />
            </div>
            <Link href="/Basket" className="relative">
              <MdAddShoppingCart size={24} className="text-dark" />
              {carts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {carts.length}
                </span>
              )}
            </Link>
            <button onClick={() => setOpen(true)}>
              <IoReorderThreeOutline size={26} className="text-dark" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <>
            <div
              className="fixed inset-0 backdrop-blur-xs  bg-opacity-40 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg p-6 flex flex-col">
              <button
                onClick={() => setOpen(false)}
                className="mb-6 text-right text-sm font-semibold text-red-500"
              >
                Yopish
              </button>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block no-underline font-medium ${
                        pathname === link.href ? "text-success" : "text-dark"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </header>
    </div>
  );
}
