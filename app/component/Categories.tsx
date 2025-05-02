"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Categories() {
  const {
    products,
    fetchProducts,
    categories,
    fetchCategories,
    addToCart,
    carts,
    search,
  } = useProductStore();
  const [kategoriya, setKategoriya] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(search);

  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const filteredProducts = products.filter((pro) => {
    const matchesCategory = kategoriya ? pro.category_id === kategoriya : true;
    const matchesSearch = search
      ? pro.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });
  const Davron = (id) => {
    if (id === kategoriya) {
      setKategoriya(null);
    } else {
      setKategoriya(id);
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto pt-20">
      <div className="flex items-center justify-center">
        <p className="lg:text-[50px] font-normal">
          Kategoriyalar va Maxsulotlar
        </p>
      </div>

      <div className="flex items-center px-8 lg:px-0 gap-x-3 overflow-x-scroll scroll-hidden">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => Davron(cat.id)}
            className={` gap-x-2 items-center cursor-pointer min-w-[200px] ${
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
            <p>{cat.name}</p>
          </div>
        ))}
      </div>

      <div
        className={`max-w-[1540px] mx-auto transition-all duration-700 px-12 lg:px-0 ease-in-out gap-y-10 h-[1530px] ${
          open ? "overflow-hidden" : "h-auto"
        } grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2`}
      >
        {filteredProducts.map((pro) => (
          <div
            className="border rounded-[20px] mt-4 p-3 w-[300px] h-[450px]"
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
                  alt=""
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
            <div className="flex items-center justify-between">
              <p className="text-[25px] mb-0 font-semibold">{pro.price}</p>
              <MdOutlineAddShoppingCart
                className="cursor-pointer"
                onClick={() => addToCart(pro)}
                size={30}
              />
            </div>
          </div>
        ))}
      </div>

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
