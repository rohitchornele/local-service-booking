import dotenv from 'dotenv/config'
import app from './app.js';
import connectDB from './db/index.js';


const port = process.env.PORT || 8000;


await connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on url http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.error("MongoDB connection error ", err);
        process.exit(1);
    })



