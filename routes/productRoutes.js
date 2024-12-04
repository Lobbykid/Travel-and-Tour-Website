import express from 'express';
import { connectToDatabase } from '../lib/db.js';

const router = express.Router();
// CREATE - Thêm khách sạn mới
router.post('/', async (req, res) => {
    try {
        const { hotel_name, hotel_description, hotel_address, hotel_img, hotel_price, location_id } = req.body;
        const db = await connectToDatabase();
        
        // Thêm khách sạn vào bảng hotel
        const [result] = await db.query(
            "INSERT INTO hotel (hotel_name, hotel_description, hotel_address, hotel_img, hotel_price, location_id) VALUES (?, ?, ?, ?, ?, ?)",
            [hotel_name, hotel_description, hotel_address, hotel_img, hotel_price, location_id]
        );

        // Lấy thông tin tên địa điểm từ bảng location dựa trên location_id
        const [location] = await db.query(
            "SELECT llocation_name FROM location WHERE location_id = ?",
            [location_id]
        );

        if (!location[0]) {
            return res.status(400).json({ error: "Location not found" });
        }

        // Trả về thông tin khách sạn mới cùng với tên địa điểm
        res.status(201).json({
            hotel_id: result.insertId,
            hotel_name,
            hotel_description,
            hotel_address,
            hotel_img,
            hotel_price,
            location_id,
            location_name: location[0].llocation_name, // Thêm tên địa điểm
        });
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Backend route để lấy khách sạn với tên địa điểm từ bảng location
// Backend - API `/hotel`
router.get("/", async (req, res) => {
    try {
      const db = await connectToDatabase();
      const [hotels] = await db.query(`
        SELECT hotel.*, location.llocation_name
        FROM hotel
        JOIN location ON hotel.location_id = location.location_id
      `);
      res.json(hotels);  // Trả về danh sách khách sạn và địa điểm
    } catch (error) {
      console.error("Error fetching hotels:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  

// API GET lấy khách sạn theo ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connectToDatabase();
        const query = `
            SELECT hotel.*, location.llocation_name 
            FROM hotel
            LEFT JOIN location ON hotel.location_id = location.location_id
            WHERE hotel.hotel_id = ?
        `;
        const [rows] = await db.query(query, [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Hotel not found' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// UPDATE - Cập nhật thông tin khách sạn
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { hotel_name, hotel_description, hotel_address, hotel_img, hotel_price, location_id } = req.body;
        const db = await connectToDatabase();

        const [result] = await db.query(
            "UPDATE hotel SET hotel_name = ?, hotel_description = ?, hotel_address = ?, hotel_img = ?, hotel_price = ?, location_id = ? WHERE hotel_id = ?",
            [hotel_name, hotel_description, hotel_address, hotel_img, hotel_price, location_id, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Hotel not found' });
        }

        // Lấy tên địa điểm mới
        const [location] = await db.query(
            "SELECT llocation_name FROM location WHERE location_id = ?",
            [location_id]
        );

        res.json({
            hotel_id: id,
            hotel_name,
            hotel_description,
            hotel_address,
            hotel_img,
            hotel_price,
            location_id,
            location_name: location[0]?.llocation_name || null
        });
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE - Xóa khách sạn
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connectToDatabase();

        const [result] = await db.query("DELETE FROM hotel WHERE hotel_id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Hotel not found' });
        }

        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
