// pages/order/index.js
import React, { useState } from "react";
import Link from "next/Link";
import Image from "next/image";
import Navbar from "../../components/navbar";

import customersData from "../../data/customers.json";

const calculateTotalIncome = (customers) => {
  const totalIncome = customers.reduce(
    (acc, customer) => acc + customer.totalprice,
    0
  );
  return totalIncome;
};
const OrderHome = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [id, setid] = useState();

  const handleDeleteCustomer = async (customerId) => {
    if (!isDeleting) {
      setIsDeleting(true);
      try {
        const response = await fetch("/api/deleteorder", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: customerId }),
        });
        if (response.ok) {
          console.log("ลบข้อมูลลูกค้าเรียบร้อยแล้ว!");
        } else {
          console.error("ไม่สามารถลบข้อมูลลูกค้าได้");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการลบข้อมูลลูกค้า:", error);
      }
      setIsDeleting(false);
    }
  };

  const EditItem = async (customerId) => {
    setid(customerId);
    window.location.replace(`/order/` + customerId);
    console.log(customerId)
    }


  // const EditItem = async () => {
    
  //   console.log(id)
  //   // window.location.replace(`/order/` + customer.id);
  // };

  const totalIncome = calculateTotalIncome(customersData.customers);

  return (
    <div className="text-[#555]">
      <Navbar />
      <div className="bg-[#fff] px-10 py-10">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold ">รายการออเดอร์</h1>
          <h1 className="text-3xl font-bold ">
            <Link href="/order/addorder">
              <button className=" btn ">
                <Image
                  src="/pluscircle.svg"
                  alt="Vercel Logo"
                  width={30}
                  height={30}
                />
                เพิ่มออเดอร์
              </button>
            </Link>
          </h1>
        </div>
        <div>รายได้ทั้งหมด: {totalIncome}</div>
        <div className="overflow-x-auto overflow-y-auto mt-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>ชื่อ</th>
                <th>ติดต่อ</th>
                <th className="text-center">จำนวน</th>
                <th className="text-center">ราคารวม</th>
                <th className="text-center">วันที่สั่ง</th>
                <th className="text-center">วันที่ส่ง</th>
                <th className="text-center">สถานะ</th>
                <th className="text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {customersData.customers.map((customer, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src="/logoicon.png"
                            alt="Vercel Logo"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{customer.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td className="">{customer.contact}</td>
                  <td className="text-center">{customer.quantity}</td>
                  <td className="text-center">{customer.totalprice}</td>
                  <td className="text-center">
                    {new Date(customer.order_date).toLocaleDateString()}
                  </td>
                  <td className="text-center">
                    {new Date(customer.shipping_date).toLocaleDateString()}
                  </td>
                  <td className="text-center">{customer.status}</td>
                  <td className="text-center ">
                    <button
                      className=" btn btn-error"
                      onClick={() => handleDeleteCustomer(customer.id)}
                      disabled={isDeleting}
                    >
                      <Image
                        src="/trash.svg"
                        alt="Vercel Logo"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      className="mx-2 btn btn-warning"
                      onClick={() => EditItem(customer.id)}
                    >
                      <Image
                        src="/edit.svg"
                        alt="Vercel Logo"
                        width={20}
                        height={20}
                      />
                    </button>
                    <button className=" btn btn-success">
                      <Image
                        src="/check.svg"
                        alt="Vercel Logo"
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>ชื่อ</th>
                <th>ติดต่อ</th>
                <th className="text-center">จำนวน</th>
                <th className="text-center">ราคารวม</th>
                <th className="text-center">วันที่สั่ง</th>
                <th className="text-center">วันที่ส่ง</th>
                <th className="text-center">สถานะ</th>
                <th className="text-center">จัดการ</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHome;
