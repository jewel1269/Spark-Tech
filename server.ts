import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./src/routes/user.routes"
import courseRoutes from "./src/routes/course.routes"
import ConnectDB from './src/config/db';
import errorHandler from './src/middleware/errorHandler';

// Initialize dotenv config
dotenv.config();

// Initialize express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
//database
const uri = process.env.MONGO_URI;
ConnectDB(uri)
// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/courses', courseRoutes);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});
// Add the error handling middleware at the end, after all routes
app.use(errorHandler);


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});