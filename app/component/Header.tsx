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

  return (
    <div className="mx-auto w-full border">
      <div
        style={{ backgroundColor: "rgba(36, 93, 48, 1)" }}
        className={`h-auto w-full relative mx-auto text-white text-center text-[14px] font-normal p-2 px-3 flex fle-col justify-center ${
          text ? "flex" : "hidden"
        }`}
      >
        Sign up and get 20% off to your first order. Sign Up Now
        <p
          onClick={() => setText(!text)}
          className="absolute  cursor-pointer top-2 right-10"
        >
          {" "}
          X
        </p>
      </div>
      <div className="w-full mx-auto relative">
        <div className="flex items-center container mx-auto justify-between px-4 lg:px-[100px] pt-[20px]">
          <div>
            <Link href="/">
              <Image
                className="lg:w-[60px] lg:h-[60px] w-[45px] h-[45px]"
                src="/logo.svg"
                width={45}
                height={45}
                alt="logo"
              />
            </Link>
          </div>
          <div className="lg:block hidden ml-20">
            <ul className="flex gap-[35px]">
              <Link
                style={{ textDecoration: "none" }}
                className={`no-underline ${
                  pathname === "/" ? "text-success" : "text-dark"
                }`}
                href="/"
              >
                <li>Bosh sahifa</li>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className={`no-underline ${
                  pathname === "/Maxsulotlar" ? "text-success" : "text-dark"
                }`}
                href="/Maxsulotlar"
              >
                <li>Mahsulotlar</li>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className={`no-underline ${
                  pathname === "/Contactt" ? "text-success" : "text-dark"
                }`}
                href="/Contactt"
              >
                <li>Aloqa</li>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className={`no-underline ${
                  pathname === "/Blog" ? "text-success" : "text-dark"
                }`}
                href="/Blog"
              >
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div className="relative ">
            <div className="flex items-center gap-x-4 lg:hidden px-4 py-2">
              <CiSearch className="absolute top-4 left-8 size-6" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ backgroundColor: "rgba(240, 240, 240, 1)" }}
                type="search"
                placeholder="Search for products..."
                className="placeholder:text-[12px] placeholder:ml-[20px] h-[38px] max-w-[278px] rounded-[68px] pt-[8px] pb-[8px] pl-[36px] pr-[16px]"
              />
              <Link className="text-dark cursor-pointer" href="/Basket">
                <MdAddShoppingCart className="cursor-pointer" size={24} />
              </Link>
              <IoReorderThreeOutline
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
                size={24}
              />
            </div>

            {/* Sidebar */}
            {open && (
              <>
                <div
                  className="fixed inset-0 bg-black opacity-40 z-40"
                  onClick={() => setOpen(false)}
                />
                <div className="fixed top-0 right-0 z-50 w-[250px] h-screen bg-white border-l shadow-lg p-4">
                  <button onClick={() => setOpen(false)} className="mb-4">
                    Yopish
                  </button>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/">Bosh sahifa</Link>
                    </li>
                    <li>
                      <Link href="/Maxsulotlar">Mahsulotlar</Link>
                    </li>
                    <li>
                      <Link href="/Contactt">Aloqa</Link>
                    </li>
                    <li>
                      <Link href="/Blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Desktop Search and Cart */}
          <div className="relative hidden lg:flex items-center gap-x-5">
            <CiSearch className="absolute top-2 left-2 size-6" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ backgroundColor: "rgba(240, 240, 240, 1)" }}
              type="search"
              placeholder="Search for products..."
              className="placeholder:text-[12px] placeholder:ml-[20px] h-[38px] max-w-[278px] rounded-[68px] pt-[8px] pb-[8px] pl-[36px] pr-[16px]"
            />
            <Link href="/Basket">
              <MdAddShoppingCart
                className="cursor-pointer text-dark"
                size={24}
              />
            </Link>
            <div className="bg-green-600 w-[17px] h-[17px] rounded-full flex items-center justify-center text-white absolute top-0 -right-3">
              {carts.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
