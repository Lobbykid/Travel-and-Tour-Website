import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Enable CORS
app.use(cors({
    origin: "*", // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only GET and POST methods
}));

// Parse incoming JSON requests
app.use(express.json());

// Define routes
app.use('/auth', authRouter); 
app.use('/location', locationRoutes);
app.use('/hotel',productRoutes)
// Root endpoint for logging requests

  app.listen(8080, () => {
    console.log("Connected to backend.");
  });
