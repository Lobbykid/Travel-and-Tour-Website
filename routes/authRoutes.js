import express from 'express';
import {connectToDatabase} from '../lib/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router();

//Đăng ký
router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
        if(rows.length > 0) {
            return res.status(409).json({message : "user already existed"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
            [name, email, hashPassword])
        
        return res.status(201).json({message: "user created successfully"})
    } catch(err) {
        return res.status(500).json(err.message)
    }
})
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const isMatch = await bcrypt.compare(password, rows[0].password);
        if (!isMatch) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // Tạo JWT token
        const token = jwt.sign({ id: rows[0].id }, process.env.JWT_KEY, { expiresIn: '3h' });

        // Trả về token cùng với thông tin người dùng
        const user = {
            id: rows[0].id,
            name: rows[0].name, // Thêm các thông tin bạn muốn trả về
            email: rows[0].email,
            role: rows[0].role
        };

        return res.status(201).json({
            token: token,
            user: user // Trả về thông tin người dùng
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if(!token) {
            return res.status(403).json({message: "No Token Provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userId = decoded.id;
        next()
    }  catch(err) {
        return res.status(500).json({message: "server error"})
    }
}

router.get('/dashboard', verifyToken, async (req, res) => {
    try {
        const db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Trả về thông tin người dùng bao gồm role
        return res.status(200).json({ user: rows[0] });
    } catch (err) {
        return res.status(500).json({ message: "Server error" });
    }
});

export default router;