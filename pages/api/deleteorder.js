// pages/api/deleteorder.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      res.status(400).json({ error: 'กรุณาระบุ ID ของลูกค้าที่ต้องการลบ' });
      return;
    }

    try {
      deleteCustomer(id);
      res.status(200).json({ message: 'ลบข้อมูลลูกค้าเรียบร้อยแล้ว!' });
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการลบข้อมูลลูกค้า:', error);
      res.status(500).json({ error: 'เกิดข้อผิดพลาดในการลบข้อมูลลูกค้า' });
    }
  } else {
    res.status(405).end(); 
  }
}

function deleteCustomer(id) {
  const customersFilePath = path.join(process.cwd(), 'data', 'customers.json');
  const rawData = fs.readFileSync(customersFilePath);
  const data = JSON.parse(rawData);
  const customerIndex = data.customers.findIndex((customer) => customer.id === id);

  if (customerIndex !== -1) {
    data.customers.splice(customerIndex, 1);
    fs.writeFileSync(customersFilePath, JSON.stringify(data, null, 2));
  } else {
    throw new Error('ไม่พบลูกค้าที่ต้องการลบ');
  }
}
