"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = () => {
    toast.success("Tez orada siz bilan bog'lanamiz");
  };
  return (
    <div className="max-w-[1440px] mx-auto lg:p-[100px] lg:flex lg:mt-[0] mt-[30px] ">
      <div>
        {" "}
        <ToastContainer />
        <div className="max-w-[570px] text-left px-2 text-[25px]">
          <p
            className="lg:text-[50px] lg:text-left "
            style={{ color: "rgba(1, 19, 52, 1)" }}
          >
            Keling, biz bilan gaplashaylik
          </p>
          <p className="lg:text-left text-[12px] lg:text-[16px] text-left  ">
            Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez
            orada bog'lanamiz.
          </p>
        </div>
        <div className="flex flex-col gap-y-3 px-2">
          <div className="flex items-center gap-x-3">
            <CiLocationOn className="size-8" size={24} />
            <p className="mb-0" style={{ color: "rgba(1, 19, 52, 1)" }}>
              1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <FaPhoneAlt size={24} />{" "}
            <p className="mb-0" style={{ color: "rgba(1, 19, 52, 1)" }}>
              +1 234 678 9108 99
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <MdOutlineEmail size={24} />
            <p className="mb-0" style={{ color: "rgba(1, 19, 52, 1)" }}>
              {" "}
              Contact@moralizer.com
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-[20px] border rounded-[30px] p-6 lg:mt-0 mt-[50px]">
        <div className="lg:flex sm:block gap-y-7 gap-x-2 sm:gap-x-4 max-w-[565px]">
          <input type="text" placeholder="name..." className="form-control" />
          <input
            type="text"
            placeholder="lastname..."
            className="form-control lg:mt-[0]"
          />
        </div>

        <div className="space-y-[20px]">
          <div>
            <input
              type="text"
              placeholder="Email*..."
              className="form-control mt-10"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone*..."
              className="form-control mt-[20px]"
            />
          </div>
          <div>
            <textarea
              typeof="text"
              placeholder="Your Message"
              className="form-control"
            ></textarea>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit} className="btn btn-success w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
