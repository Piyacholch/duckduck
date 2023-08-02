// pages/api/addorder.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { contact, name, order_date, quantity, shipping_date, totalprice, status } = req.body;

    if (!contact || !name || !order_date || !quantity || !shipping_date || !totalprice || !status) {
      res.status(400).json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
      return;
    }

    try {
      const newCustomer = {
        id: new Date().getTime().toString(), // สร้าง ID จาก timestamp ปัจจุบัน
        contact,
        name,
        order_date,
        quantity,
        shipping_date,
        totalprice,
        status,
      };

      addCustomer(newCustomer);
      res.status(201).json({ message: 'เพิ่มข้อมูลลูกค้าเรียบร้อยแล้ว', customer: newCustomer });
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเพิ่มข้อมูลลูกค้า:', error);
      res.status(500).json({ error: 'เกิดข้อผิดพลาดในการเพิ่มข้อมูลลูกค้า' });
    }
  } else {
    res.status(405).end();
  }
}

function addCustomer(newCustomer) {
  const customersFilePath = path.join(process.cwd(), 'data', 'customers.json');
  const rawData = fs.readFileSync(customersFilePath);
  const data = JSON.parse(rawData);
  data.customers.push(newCustomer);
  fs.writeFileSync(customersFilePath, JSON.stringify(data, null, 2));
}
