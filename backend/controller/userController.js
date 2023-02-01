const { avatarUpload, gallerayUpload } = require("../utils/upload")
const User = require("./../model/User")
exports.addAvatar = async (req, res) => {
    try {
        avatarUpload(req, res, async err => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Multer error" + err
                })
            }
            console.log(req.body);
            console.log(req.file.filename);
            const result = await User.create({
                ...req.body,
                profile: `profile/${req.file.filename}`
            })
            res.json({
                success: true,
                message: "Avatar add Successfully",
                result
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}
exports.getAllAvatars = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            success: true,
            message: "Avatar fetched  successfylly",
            result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}

exports.addToGallery = async (req, res) => {
    try {
        gallerayUpload(req, res, async err => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Multer error" + err
                })
            }
            console.log(req.body);
            console.log(req.files);
            const d = []
            for (let i = 0; i < req.files.length; i++) {
                d.push(`gallery/${req.files[i].filename}`)

            }
            console.log(d);

            const result = await User.create({
                ...req.body,
                docs: d
            })
            res.json({
                success: true,
                message: "Avatar and Gallery add Successfully",
                result
            })
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: " error" + error
        })
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            success: true,
            message: " User fetch Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })

    }
}
exports.destroyUsers = async (req, res) => {
    try {
        const result = await User.deleteMany()
        res.json({
            success: true,
            message: "all User Delted Successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error" + error
        })

    }
}