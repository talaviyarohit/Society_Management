const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', require('./routes/index'));
app.use((req, res, next) => {
    res.cookie('exampleCookie', 'cookieValue', {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    next();
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});