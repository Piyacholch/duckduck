import React from "react";
import Image from "next/image";

const OrderStatusModal = ({ isOpen, onClose, onUpdateStatus }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-bold mb-4">อัปเดตสถานะ</h2>
            <button
              className="block mb-2"
              onClick={() => onUpdateStatus("รอการจัดส่ง")}
            >
              
              รอการจัดส่ง
            </button>
            <button
              className="block mb-2"
              onClick={() => onUpdateStatus("กำลังจัดส่ง")}
            >
             
              กำลังจัดส่ง
            </button>
            <button
              className="block mb-2"
              onClick={() => onUpdateStatus("จัดส่งแล้ว")}
            >
             
              จัดส่งแล้ว
            </button>
            <button className="block w-full bg-gray-200 text-center py-2 rounded-lg mt-4" onClick={onClose}>
              ยกเลิก
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderStatusModal;
