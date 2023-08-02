// pages/order/updateorder.js
import React, { useState } from "react";

const UpdateOrder = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    contact: "",
    quantity: 0,
    totalprice: 0,
    order_date: "",
    shipping_date: "",
    status: "",
  });

  // เพิ่มโค้ดสำหรับการแก้ไขข้อมูล

  return (
    <div>
      <h1>แก้ไขข้อมูลออเดอร์</h1>
      {/* เพิ่มฟอร์มในการแก้ไขข้อมูล */}
    </div>
  );
};

export default UpdateOrder;
