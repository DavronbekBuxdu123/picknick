import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Main() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between px-4 sm:px-8 lg:px-10 py-8 gap-8 max-w-[1440px] ">
      <div className=" lg:max-w-[596px] text-center lg:text-left">
        <div className="max-w-[450px]  lg:text-left">
          <p
            style={{ lineHeight: "50px", color: "rgba(0, 0, 0, 1)" }}
            className="font-bold text-[28px] sm:text-[32px]  lg:text-[40px]"
          >
            Zo`r jihozlar bilan sarguzashtlarni kashf eting
          </p>
        </div>

        <p
          style={{ color: "rgba(0, 0, 0, 0.6)" }}
          className="font-normal text-[14px] lg:text-left sm:text-[16px] mt-4"
        >
          Sarguzasht ishqibozlari uchun mo`ljallangan ochiq havoda kerakli
          jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager
          anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.
        </p>

        <div className=" flex items-center justify-center lg:justify-start group">
          <Link href="/Maxsulotlar">
            <button className="lg:w-[210px] lg:h-[40px] btn btn-success sm:w-70 bg-green-900   group-hover:  flex items-center justify-center rounded-[62px] pt-[16px] pb-[16px] pr-[54px] pl-[54px] text-white ">
              Xarid qiling
            </button>
          </Link>
        </div>

        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-full justify-items-center lg:justify-items-start">
          <div className="text-center lg:text-left">
            <p className="font-bold text-[25px] sm:text-[30px] lg:text-[40px] mb-0">
              200 <span className="text-green-700">+</span>
            </p>
            <p
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
              className="text-[12px] font-normal"
            >
              Xalqaro brendlar
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-bold text-[25px] sm:text-[30px] lg:text-[40px] mb-0">
              2,000 <span className="text-green-700">+</span>
            </p>
            <p
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
              className="text-[12px] font-normal"
            >
              Yuqori Sifatli Mahsulotlar
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-bold text-[25px] sm:text-[30px] lg:text-[40px] mb-0">
              30,000 <span className="text-green-700">+</span>
            </p>
            <p
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
              className="text-[12px] font-normal"
            >
              Baxtli Mijozlar
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[400px]  lg:w-[614px]">
        <Image
          width={614}
          height={563}
          alt="photo"
          src="/image.svg"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
