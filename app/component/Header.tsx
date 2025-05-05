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
        <div
          style={{ backgroundColor: "rgba(36, 93, 48, 1)" }}
          className="text-white text-center text-xs lg:text-sm font-normal py-2 px-3 relative flex justify-center items-center"
        >
          Sign up and get 20% off to your first order. Sign Up Now
          <button
            onClick={() => setText(false)}
            className="absolute top-1 right-4 text-2xl font-bold"
          >
            ×
          </button>
        </div>
      )}

      <header className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center relative">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={60}
            height={60}
            className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] no-underline"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  style={{ textDecoration: "no-underline" }}
                  href={link.href}
                  className={`no-underline ${
                    pathname === link.href ? "text-success" : "text-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-5 relative">
          <div className="relative">
            <CiSearch className="absolute top-2 left-3 size-5" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 text-sm rounded-full bg-gray-100"
            />
          </div>
          <Link href="/Basket" className="relative">
            <MdAddShoppingCart size={24} className="text-dark" />
            {carts.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {carts.length}
              </span>
            )}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <div className="relative">
            <CiSearch className="absolute top-2 left-3 size-5" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 text-sm rounded-full bg-gray-100"
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
            <IoReorderThreeOutline size={24} className="text-dark" />
          </button>
        </div>

        {open && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-40 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="fixed top-0 right-0 z-50 w-64 h-1/3 rounded-l-2xl bg-white shadow-lg p-6">
              <button onClick={() => setOpen(false)} className="mb-6 ">
                Yopish
              </button>
              <ul className="space-y-4 ">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block no-underline ${
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
