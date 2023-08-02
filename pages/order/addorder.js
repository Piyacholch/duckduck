import React, { useState } from "react";
import useRouter from "next/router";
import Navbar from "../../components/navbar";

const router = useRouter;

const AddCustomerPage = () => {
  const [formData, setFormData] = useState({
    contact: "",
    name: "",
    order_date: "",
    quantity: 1,
    shipping_date: "",
    totalprice: 140,
    status: "รอการจัดส่ง",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "quantity") {
      const quantity = parseInt(value);
      const totalprice = quantity * 140;
      setFormData((prevFormData) => ({
        ...prevFormData,
        quantity,
        totalprice,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/addorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.message); 
      router.push("/order");
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการส่งข้อมูล:", error);
    }
  };

  return (
    <div className="text-[#555]">
      <Navbar />
      <div className="bg-[#fff] px-10 py-10">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold ">เพิ่มรายการออเดอร์</h1>
        </div>

        <form onSubmit={handleSubmit} className="md:px-60 px-5">
          <div className="grid grid-cols-2 gap-4">
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.contact}
                onChange={handleChange}
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
                min="1"
                value={formData.quantity}
                onChange={handleChange}
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
                value={formData.totalprice}
                onChange={handleChange}
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
                value={formData.order_date}
                onChange={handleChange}
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
                value={formData.shipping_date}
                onChange={handleChange}
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
                value={formData.status}
                onChange={handleChange}
              >
                <option disabled selected>
                  Pick one
                </option>
                <option value="รอการจัดส่ง">รอการจัดส่ง</option>
                <option value="กำลังจัดส่ง">กำลังจัดส่ง</option>
                <option value="จัดส่งแล้ว">จัดส่งแล้ว</option>
              </select>
            </div>
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

export default AddCustomerPage;
