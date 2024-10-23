const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

module.exports.registerUser = async (req, res) => {
    try {
        if (req.body !== "") {
            if (req.body.password !== "" && req.body.password === req.body.confirmPassword) {
                let checkmail = await User.findOne({ email: req.body.email });
                if (checkmail) {
                    return res.status(400).json({ message: "Email Already Exists", status: 0 });
                } else {
                    let pass = await bcrypt.hash(req.body.password, 10);
                    req.body.password = pass;
                    let newUser = new User(req.body);
                    await newUser.save();
                    if (newUser) {
                        const transporter = nodemailer.createTransport({
                            host: "smtp.gmail.com",
                            port: 465,
                            secure: true,
                            auth: {
                                user: process.env.EMAIL,
                                pass: process.env.PASSWORD,
                            },
                        });
                        const info = await transporter.sendMail({
                            from: process.env.EMAIL,
                            to: req.body.email,
                            subject: "Refisteration Successfully ✔",
                            text: `Hello ${req.body.name}`,
                            html: `<p>You're Successfully Registered</p><br><p>You're Login Credentials are</p><br><b>email = ${req.body.email}</b></br></br><b>password = ${req.body.password}</b>`,
                        })
                        return res.status(200).json({ message: "User Registered Successfully", status: 1, data: newUser });
                    } else {
                        console.log(error.message);
                        return res.status(400).json({ message: "Something Wrong", status: 0 });
                    }
                }
            }
        } else {
            return res.status(400).json({ message: "Data Not Found", status: 0 });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: "Something Wrong", status: 0 });
    }
}

module.exports.loginUser = async (req, res) => {
    try {
        if (req.body !== "") {
            let checkmail = await User.findOne({ email: req.body.email });
            if (checkmail) {
                var secretKey = checkmail.role === "admin" ? process.env.JWT_SECRET_ADMIN : process.env.JWT_SECRET_USER;
                let pass = await bcrypt.compare(req.body.password, checkmail.password);
                if (pass) {
                    let token = await jwt.sign({ userData: checkmail }, secretKey, { expiresIn: '1d' });
                    return res.status(200).json({ message: "You're Logged In Successfully", status: 1, data: token });
                } else {
                    return res.status(400).json({ message: "Password is Incorrect", status: 0 });
                }
            } else {
                return res.status(400).json({ message: "Email is Incorrect", status: 0 });
            }
        } else {
            return res.status(400).json({ message: "Data Not Found", status: 0 });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: "Something Wrong", status: 0 });
    }
}

