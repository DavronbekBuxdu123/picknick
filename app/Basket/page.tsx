"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useProductStore from "../store/useProductStore";
import Modal from "../component/Modal";

const IMAG_URL_PIKNIK = "https://api.piknicuz.com/api/uploads/images/";

export default function CartPage() {
  const { carts, handleQuantity, removeFromCart, clearCart } =
    useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const UmumumiyPul = () => {
    return carts.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };
  const handleSubmit = () => {
    setIsModalOpen(false);
    clearCart();
    alert("Xaridingiz uchun rahmat!");
  };

  return (
    <div>
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="card">
          <div className="card-header text-white text-center bg-success">
            Maxsulot xarid qilish
          </div>
          <div className="card-body space-y-4">
            <input
              type="text"
              placeholder="Ismingizni kiriting..."
              className="form-control mt-2"
            />{" "}
            <input
              type="text"
              placeholder="Telefoningizni kiriting..."
              className="form-control mt-2"
            />
            <input
              type="text"
              placeholder="Manzilingizni kiriting..."
              className="form-control mt-2"
            />
            <textarea
              className="form-control mt-2"
              placeholder="Q'oshimcha talab va izohlaringizni yozing"
            ></textarea>
          </div>
          <div className="card-footer">
            <button onClick={handleSubmit} className="btn btn-success w-full">
              Yuborish
            </button>
          </div>
        </div>
      </Modal>
      <div className="max-w-[1240px] mx-auto w-full min-h-[786px] px-[16px] sm:px-0 ">
        <h1 className="text-[36px] sm:text-left text-center font-bold text-black mt-[50px] sm:mt-[32px]">
          Sizning savatingiz
        </h1>

        <div className="max-w-[1240px] w-full flex flex-col sm:flex-row gap-[24px] sm:gap-[20px] mt-[50px] sm:mt-[45px]">
          <div className="max-w-[715px] overflow-y-scroll w-full h-[390px] sm:h-[528px] flex flex-col gap-[24px] border border-[#0000001A] rounded-[20px] items-center py-[24px] px-[16px] sm:px-[24px] sm:py-[30px]">
            {carts.map((item, index) => (
              <div key={index} className="max-w-[667px] w-full">
                <div className="max-w-[667px] w-full gap-[16px] flex">
                  <Image
                    className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]"
                    src={IMAG_URL_PIKNIK + item.product.image_src}
                    alt="photo"
                    width={124}
                    height={124}
                  />
                  <div className="max-w-[527px] w-full h-[82px] sm:h-[124px] flex justify-between items-center">
                    <div className="max-w-[71px] h-[60px] sm:h-[118px] w-full flex flex-col justify-between">
                      <p className="text-[20px] font-bold text-[#000000]">
                        {item.product.title}
                      </p>
                      <h1 className="text-[24px] font-bold text-[#000000]">
                        ${item.product.price}
                      </h1>
                    </div>
                    <div className="max-w-[255px] w-full h-[82px] sm:h-[124px] flex flex-col justify-between items-end">
                      <button
                        className="w-[24px] h-[24px]"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <MdDelete size={24} color="red" />
                      </button>
                      <div className="max-w-[126px] w-full h-[31px] sm:h-[44px] flex items-center justify-around bg-[#F0F0F0] rounded-[62px]">
                        <FaMinus
                          className="cursor-pointer"
                          onClick={() => handleQuantity("MINUS", item.id)}
                          size={14}
                          color="black"
                        />
                        <p className="text-[14px] mb-0 font-medium text-black">
                          {item.quantity}
                        </p>
                        <FaPlus
                          className="cursor-pointer"
                          onClick={() => handleQuantity("PLUS", item.id)}
                          size={14}
                          color="black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="max-w-[667px] w-full bg-[#0000001A] mt-[24px]" />
              </div>
            ))}
          </div>

          {/* Buyurtma xulosasi */}
          <div className="max-w-[505px] w-full mb-[104px] sm:h-[406px] h-[444px] sm:mb-0 border border-[#0000001A] rounded-[20px] px-[16px] py-[24px] sm:py-[30px] sm:px-[24px]">
            <h1 className="font-bold text-black text-[20px] sm:text-[24px]">
              Buyurtma xulosasi
            </h1>
            <div className="flex flex-col justify-between h-[137px] mt-[24px]">
              <div className="flex justify-between">
                <p className="text-[14px] sm:text-[20px] text-[#00000099]">
                  Oraliq jami
                </p>
                <p className="text-[14px] sm:text-[20px] text-black font-semibold">
                  ${UmumumiyPul()}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] sm:text-[20px] text-[#00000099]">
                  Chegirma (-20%)
                </p>
                <p className="text-[14px] sm:text-[20px] text-[#FF3333] font-semibold">
                  -${(UmumumiyPul() * 0.2).toFixed(2)}
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p className="text-[16px] sm:text-[20px] text-[#00000099]">
                  Umumiy
                </p>
                <p className="text-[20px] sm:text-[24px] text-black font-semibold">
                  ${(UmumumiyPul() * 0.8).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Promo input */}
            <div className="flex gap-[12px] items-center mt-[24px]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Promo code qo`shing"
                  className="w-full h-[48px] text-center text-[16px] text-[#00000066] bg-[#F0F0F0] rounded-[62px]"
                />
              </div>
              <div className="bg-[#245D30] w-[119px] rounded-[62px] h-[48px] text-white flex items-center justify-center p-3">
                Tekshirish
              </div>
            </div>

            {/* Buyurtma berish */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="w-full h-[60px] cursor-pointer mt-[24px] rounded-[62px] bg-[#245D30] text-white flex justify-center items-center gap-[4px]"
            >
              Buyurtma berish <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
