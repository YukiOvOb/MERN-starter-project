import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.routes.js'
import AuthRouter from './routes/user.auth.js'
import cookieParser from 'cookie-parser'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');})
    .catch((err) => {
    console.log(err);});


const app = express()

app.use(express.json());

app.use(cookieParser());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`)
    }
);

app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode ||500
    const message = err.message || 'From Server: Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})