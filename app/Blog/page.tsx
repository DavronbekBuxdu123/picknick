"use client";
import React, { useEffect } from "react";
import useProductStore from "../store/useProductStore";
import Image from "next/image";

export default function Blog() {
  const { product, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="max-w-[1540px] mx-auto">
      <div className="max-w-[900px] p-10 mx-auto">
        <p className="lg:text-[50px] text-center">Sayohat va Lager Blogi</p>
        <p
          style={{ color: "rgba(98, 98, 98, 1)" }}
          className="text-center font-normal"
        >
          Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar
          va lager hayoti haqida ko`rsatmalar. Tabiatga yaqin bo`lish va
          sayohatlaringizni unutilmas qilish uchun o`z bilimlaringizni boyiting!
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto lg:space-y-[50px]  grid lg:grid-cols-3 sm:grid-cols-1 p-3">
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
        <div className="max-w-[384px] h-[374px] space-y-[20px] p-3 mt-4">
          <Image
            className="rounded-[10px]"
            width={380}
            height={253}
            alt="photo"
            src="/video.jpg"
          />
          <div>
            <p className="text-[18px] font-semibold">
              Tabiatning Qiziqarli Jihatlari: Sarg`aygan Amazon O`rmonlari
              Haqida Qiziqarli Faktlar
            </p>
          </div>
          <div className="border w-[201px] h-[31px] flex items-center justify-center rounded-[20px]">
            <p className="text-[12px] pt-3">Payshanba, 2024-yil 8-yanvar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
