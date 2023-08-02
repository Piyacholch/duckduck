import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar";
import customersData from "../../../data/customers.json";
import { useRouter } from "next/router";

const UpdateOrderPage = () => {
  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    quantity: 0,
    totalprice: 0,
    order_date: "",
    shipping_date: "",
    status: "",
  });

  const { id } = useRouter().query;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/updateorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, ...customer }),
      });

      if (response.ok) {
        console.log("Customer data updated successfully!");
      } else {
        console.error("Unable to update customer data");
      }
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  const fetchCustomerDetails = () => {
    const foundCustomer = customersData.customers.find(
      (customer) => customer.id === id
    );

    if (foundCustomer) {
      setCustomer(foundCustomer);
    }
  };

  useEffect(() => {
    fetchCustomerDetails();
  }, [id]);
  return (
    <div className="text-[#555]">
      <Navbar />
      <div className="bg-[#fff] px-10 py-10">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold ">แก้ไขรายการออเดอร์</h1>
        </div>
        <form className="md:px-60 px-5" onSubmit={handleSubmit}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">ชื่อลูกค้า</span>
              <span className="label-text-alt">เช่นครูจู</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">เบอร์โทร</span>
              <span className="label-text-alt">0913972756 / - / ชื่อ FB</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="contact"
              value={customer.contact}
              onChange={(e) =>
                setCustomer({ ...customer, contact: e.target.value })
              }
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">จำนวน</span>
              <span className="label-text-alt">แผง</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="quantity"
              value={customer.quantity}
              onChange={(e) =>
                setCustomer({ ...customer, quantity: e.target.value })
              }
              min="1"
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">รวม</span>
              <span className="label-text-alt">บาท</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="totalprice"
              value={customer.totalprice}
              onChange={(e) =>
                setCustomer({ ...customer, totalprice: e.target.value })
              }
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">วันที่สั่ง</span>
              <span className="label-text-alt">27/7/2566</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="order_date"
              value={customer.order_date}
              onChange={(e) =>
                setCustomer({ ...customer, order_date: e.target.value })
              }
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">วันที่ส่ง</span>
              <span className="label-text-alt">28/7/2566</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="shipping_date"
              value={customer.shipping_date}
              onChange={(e) =>
                setCustomer({ ...customer, shipping_date: e.target.value })
              }
            />
          </div>

          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">สถานะการจัดส่ง</span>
              <span className="label-text-alt">เลือก</span>
            </label>
            <select
              className="select select-bordered"
              id="status"
              name="status"
              value={customer.status}
              onChange={(e) =>
                setCustomer({ ...customer, status: e.target.value })
              }
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="รอการจัดส่ง">รอการจัดส่ง</option>
              <option value="กำลังจัดส่ง">กำลังจัดส่ง</option>
              <option value="จัดส่งแล้ว">จัดส่งแล้ว</option>
            </select>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateOrderPage;
