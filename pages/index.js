// pages/index.js
import React from "react";

import Image from "next/image";
import Link from "next/Link";
import Navbar from "../components/navbar";

const CustomerList = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#fff] px-10 pb-10">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Vercel Logo" width={400} height={400} />
        </div>
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="rounded-md flex items-center justify-center ">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">ออเดอร์</h2>
                  <p>บันทึก และดูออเดอร์ไข่เป็ดได้ที่นี่</p>
                  <div className="card-actions justify-end">
                    <Link href="/order">
                      <button className="btn bg-[#FF7B50] text-white">
                        คลิกที่นี่
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center ">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">รายได้</h2>
                  <p>สรุปรายรับ รายจ่าย กำไร ขาดทุน</p>
                  <div className="card-actions justify-end">
                    <Link href="/revenue">
                      <button className="btn bg-[#FF7B50] text-white">
                        คลิกที่นี่
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md flex items-center justify-center ">
              <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">บันทึกไข่</h2>
                  <p>บันทึก สรุปผลจำนวนไข่ รายวัน สัปดาห์ เดือน</p>
                  <div className="card-actions justify-end">
                    <Link href="/totalegg">
                      <button className="btn bg-[#FF7B50] text-white">
                        คลิกที่นี่
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
