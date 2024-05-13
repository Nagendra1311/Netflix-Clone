const userModel = require("../models/userModel");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: false
            })
        }
        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: "This email is already exist",
                success: false
            })
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        await userModel.create({
            name,
            email,
            password: hashPassword
        });
        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: false
            });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid Email or Password",
                success: false
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Email or Password",
                success: false
            });
        }
        const token = await jwt.sign({ id: user._id }, "secret", { expiresIn: 60 * 60 });
        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome back ${user.name}`,
            success: true,
            user: user
        });
    } catch (error) {
        console.log(error.message, 'hii');
    }
}

const logout = async (req, res) => {
    return res.status(200).cookie('token', "", { expiresIn: new Date(Date.now()), httpOnly: true }).json({
        message: "user logout Successfullly",
        success: true
    })
}

module.exports = {
    register,
    login,
    logout
}