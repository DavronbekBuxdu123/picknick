import Image from "next/image";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "rgba(36, 93, 48, 1)" }}
      className="w-full pt-[70px] pb-[20px] lg:h-auto border mx-auto space-y-[80px]"
    >
      <div
        style={{ backgroundColor: "rgba(36, 93, 48, 1)" }}
        className="grid lg:grid-cols-5 sm:grid-cols-1 max-w-[1240px]    mx-auto gap-x-[70px]"
      >
        <div className="">
          <div className=" px-4">
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </div>
          <div className="flex gap-x-[12px] mt-[20px]  px-4 pb-5">
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
              {" "}
              <FaTwitter />
            </div>
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
              {" "}
              <FaFacebookF />
            </div>
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center">
              <FaGithub />
            </div>
          </div>
        </div>
        <div>
          <ul
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            className="text-[16px]  font-normal flex flex-col gap-y-[20px]"
          >
            <li className="text-white">KOMPANIYA</li>
            <li>Biz haqimizda</li>
            <li>Xususiyatlar</li>
            <li>Ishlash jarayoni</li>
            <li>Karyera imkoniyatlari</li>
          </ul>
        </div>
        <div>
          <ul
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            className="text-[16px]   font-normal flex flex-col gap-y-[20px]"
          >
            <li className="text-white">YORDAM</li>
            <li>Mijozlarni qo'llab quvvatlash</li>
            <li>Yetkazib berish tafsilotlari</li>
            <li>Shartlar va qoidalar</li>
            <li>Maxfiylik siyosati</li>
          </ul>
        </div>
        <div>
          <ul
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            className="text-[16px]  font-normal flex flex-col gap-y-[20px]"
          >
            <li className="text-white">SAVOLLAR</li>
            <li>Hisob</li>
            <li>Yetkazib berishni boshqarish</li>
            <li>Buyurtmalar</li>
            <li>To'lovlar</li>
          </ul>
        </div>
        <div>
          <ul
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            className="text-[16px]  font-normal flex flex-col gap-y-[20px]"
          >
            <li className="text-white">RESURSLAR</li>
            <li>Bepul e-kitoblar</li>
            <li>Dasturlash bo'yicha qo'llanmalar</li>
            <li>Qanday foydalanish - Blog</li>
            <li>You Tube pleylist</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto lg:flex sm:block px-4 items-center justify-between border-t-cyan-700">
        <p className="text-white"> © 2000-2021, All rights reserved</p>
        <div className="flex gap-x-[20px]">
          <Image src="/Badge.svg" width={46} height={30} alt="photo" />
          <Image src="/Badge (1).svg" width={46} height={30} alt="photo" />
          <Image src="/Badge (2).svg" width={46} height={30} alt="photo" />
          <Image src="/Badge (3).svg" width={46} height={30} alt="photo" />
          <Image src="/Badge (4).svg" width={46} height={30} alt="photo" />
        </div>
      </div>
    </div>
  );
}
