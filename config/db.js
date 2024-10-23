const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.once('open', function (err) {
    if (err) {
        console.log("Database Not Connected");
    }
    console.log("Database Is Connected");
});
module.exports = db;