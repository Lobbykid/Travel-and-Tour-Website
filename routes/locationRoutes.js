import express from 'express';
import { connectToDatabase } from '../lib/db.js';

const router = express.Router();

// CREATE - Thêm một bản ghi mới
router.post('/', async (req, res) => {
    try {
        const { llocation_name, location_img } = req.body; // Lấy dữ liệu từ request body
        const db = await connectToDatabase();
        const [result] = await db.query(
            "INSERT INTO location (llocation_name, location_img) VALUES (?, ?)",
            [llocation_name, location_img]
        );
        return res.status(201).json({ 
            location_id: result.insertId, 
            llocation_name, 
            location_img 
        }); // Trả về bản ghi vừa thêm
    } catch (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// READ - Lấy danh sách tất cả bản ghi
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query("SELECT * FROM location");
        return res.json(rows);
    } catch (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// READ (by ID) - Lấy một bản ghi theo location_id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connectToDatabase();
        const [rows] = await db.query("SELECT * FROM location WHERE location_id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }
        return res.json(rows[0]);
    } catch (err) {
        console.error("Error fetching data by ID:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// UPDATE - Cập nhật một bản ghi theo location_id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { llocation_name, location_img } = req.body;
        const db = await connectToDatabase();
        const [result] = await db.query(
            "UPDATE location SET llocation_name = ?, location_img = ? WHERE location_id = ?",
            [llocation_name, location_img, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }
        return res.json({ location_id: id, llocation_name, location_img }); // Trả về bản ghi đã cập nhật
    } catch (err) {
        console.error("Error updating data:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE - Xóa một bản ghi theo location_id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await connectToDatabase();
        const [result] = await db.query("DELETE FROM location WHERE location_id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        }
        return res.json({ message: 'Record deleted successfully' }); // Thông báo thành công
    } catch (err) {
        console.error("Error deleting data:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query("SELECT location_id, llocation_name FROM location"); // Chỉ lấy những trường cần thiết
        return res.json(rows);
    } catch (err) {
        console.error("Error fetching data:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
// CREATE - Thêm một bản ghi địa điểm mới
router.post('/', async (req, res) => {
    try {
        const { llocation_name } = req.body; // Lấy tên địa điểm từ request body
        const db = await connectToDatabase();
        const [result] = await db.query(
            "INSERT INTO location (llocation_name) VALUES (?)",
            [llocation_name]
        );
        return res.status(201).json({
            location_id: result.insertId,
            llocation_name,
        }); // Trả về bản ghi vừa thêm
    } catch (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
// Lấy danh sách địa điểm (chỉ lấy location_id và llocation_name)
router.get('/locations', async (req, res) => {
    try {
      const db = await connectToDatabase();
      const [locations] = await db.query("SELECT location_id, llocation_name FROM location");
  
      return res.status(200).json(locations);
    } catch (err) {
      console.error("Error fetching locations:", err);
      return res.status(500).json({ error: 'Internal server error' });
    }
});
  
export default router;
