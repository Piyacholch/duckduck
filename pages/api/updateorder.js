import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { id, ...updatedFields } = req.body;

    const filePath = path.join(process.cwd(), "data", "customers.json");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.status(500).json({ error: "Failed to read data file" });
      } else {
        try {
          const customers = JSON.parse(data);
          const updatedCustomers = customers.map((customer) =>
            customer.id === id ? { ...customer, ...updatedFields } : customer
          );

          fs.writeFile(filePath, JSON.stringify({ customers: updatedCustomers }), "utf8", (err) => {
            if (err) {
              console.error("Error writing file:", err);
              res.status(500).json({ error: "Failed to update data" });
            } else {
              res.status(200).json({ message: "Data updated successfully" });
            }
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
          res.status(500).json({ error: "Failed to parse JSON data" });
        }
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
