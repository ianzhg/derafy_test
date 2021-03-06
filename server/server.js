import express from 'express';
import dotenv from "dotenv";

const app = express();
dotenv.config;

app.get('/', (req, res) => {
    res.send("API is running...")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));