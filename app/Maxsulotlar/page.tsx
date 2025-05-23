"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image_src: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image_src?: string;
  category_id?: number;
}

export default function Maxsulotlar() {
  const {
    products,
    fetchProducts,
    categories,
    fetchCategories,
    addToCart,
    search,
  } = useProductStore();

  const [kategoriya, setKategoriya] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchProducts();
      await fetchCategories();
      setLoading(false);
    };
    loadData();
  }, [fetchProducts, fetchCategories]);

  const filteredProducts = products.filter((pro: Product) => {
    const matchesCategory = kategoriya ? pro.category_id === kategoriya : true;
    const matchesSearch = search
      ? pro.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const Davron = (id: number): void => {
    setKategoriya((prev) => (prev === id ? null : id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto lg:pt-20 lg:pb-20 lg:pl-10">
      <div className="flex items-center justify-center">
        <p className="lg:text-[50px] font-normal">
          Kategoriyalar va Maxsulotlar
        </p>
      </div>

      <div className="flex items-center px-8 lg:px-0 gap-x-6 overflow-x-scroll scroll-hidden">
        {categories.map((cat: Category) => (
          <div
            key={cat.id}
            onClick={() => Davron(cat.id)}
            className={`gap-x-4 flex items-center cursor-pointer min-w-[200px] ${
              kategoriya === cat.id ? "text-blue-500" : ""
            }`}
          >
            <Image
              className="lg:w-[70px] lg:h-[70px]"
              width={70}
              height={70}
              alt={cat.name}
              src={`https://api.piknicuz.com/api/uploads/images/${cat.image_src}`}
            />
            <p className="mb-0">{cat.name}</p>
          </div>
        ))}
      </div>

      <div className="max-w-[1540px] mx-auto transition-all duration-700 px-12 lg:px-0 ease-in-out gap-y-10 grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {filteredProducts.map((pro) => (
          <div
            className="border rounded-[20px] mt-4 p-3 w-[300px] h-[450px]"
            key={pro.id}
          >
            <Link href={`details/${pro.id}`}>
              <div>
                <Image
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
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/star.svg"
                    width={18}
                    height={18}
                    alt="star"
                  />
                ))}
                <p className="mb-0">5.0/5</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[25px] mb-0 font-semibold">{pro.price}</p>
              <div className="group">
                <MdOutlineAddShoppingCart
                  className="cursor-pointer group-hover:text-green-700 group-hover:scale-[1.1] transition-colors duration-300 "
                  onClick={() => addToCart(pro)}
                  size={30}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
