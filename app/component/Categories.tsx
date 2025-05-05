"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from "next/link";

export interface Category {
  id: number;
  name: string;
  image_src: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image_src: string;
  description: string;
  category_id: number;
  category?: Category;
}

export default function Categories() {
  const {
    products,
    fetchProducts,
    categories,
    fetchCategories,
    addToCart,
    search,
    loading,
  } = useProductStore();
  const [kategoriya, setKategoriya] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const [open, setOpen] = useState(true);

  const filteredProducts = products.filter((pro) => {
    const matchesCategory = kategoriya ? pro.category_id === kategoriya : true;
    const matchesSearch = search
      ? pro.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const Davron = (id: number) => {
    if (id === kategoriya) {
      setKategoriya(null);
    } else {
      setKategoriya(id);
    }
  };

  return (
    <div className="max-w-[1440px] container mx-auto pt-20">
      <div className="flex items-center justify-center">
        <p className="lg:text-[50px] text-2xl font-bold text-center lg:font-normal">
          Kategoriyalar va Maxsulotlar
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="flex items-center px-8 py-4 lg:px-0 gap-x-6  overflow-x-scroll scroll-hidden">
            {categories.map((cat: Category) => (
              <div
                key={cat.id}
                onClick={() => Davron(cat.id)}
                className={` gap-x-3 flex items-center cursor-pointer min-w-[200px] ${
                  kategoriya === cat.id ? "text-blue-500" : ""
                }`}
              >
                <Image
                  className="lg:w-[70px] lg:h-[70px]"
                  width={20}
                  height={20}
                  alt="photo"
                  src={`https://api.piknicuz.com/api/uploads/images/${cat.image_src}`}
                />
                <p className="mb-0">{cat.name}</p>
              </div>
            ))}
          </div>

          <div
            className={`container mx-auto transition-all duration-700  lg:px-0 ease-in-out gap-y-10 h-[1530px] ${
              open ? "overflow-hidden" : "h-auto"
            } grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2`}
          >
            {filteredProducts.map((pro) => (
              <div
                className="border rounded-[20px]   lg:ml-0 mt-4 p-3 w-[300px] h-[450px]"
                key={pro.id}
              >
                <Link href={`details/${pro.id}`}>
                  <div>
                    <Image
                      key={pro.id}
                      className="rounded-[30px] w-[300px] h-[300px] cursor-pointer"
                      style={{ backgroundColor: "#e8f8ed" }}
                      width={300}
                      height={300}
                      alt={pro.title}
                      src={`https://api.piknicuz.com/api/uploads/images/${pro.image_src}`}
                    />
                  </div>
                </Link>

                <div>
                  <p className="font-semibold">{pro.title}</p>
                </div>
                <div>
                  <div className="flex gap-x-2 items-center">
                    <Image src="/star.svg" width={18} height={18} alt="photo" />
                    <Image src="/star.svg" width={18} height={18} alt="photo" />
                    <Image src="/star.svg" width={18} height={18} alt="photo" />
                    <Image src="/star.svg" width={18} height={18} alt="photo" />
                    <Image src="/star.svg" width={18} height={18} alt="photo" />
                    <p className="mb-0">5.0/5</p>
                  </div>
                </div>
                <div className="flex items-center justify-between  ">
                  <p className="text-[25px] mb-0 font-semibold">
                    {" "}
                    {pro.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span className="ml-2">UZS</span>
                  </p>
                  <div className="group">
                    <MdOutlineAddShoppingCart
                      className="cursor-pointer   group-hover:text-green-700 group-hover:scale-[1.1] transition-colors duration-300 "
                      onClick={() => addToCart(pro)}
                      size={30}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mx-auto max-w-[200px] mt-[20px]">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-outline-success mx-auto"
        >
          {open ? "Hammasini ko`rish" : "Yopish"}
        </button>
      </div>
    </div>
  );
}
