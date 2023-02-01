const { multiDocUpload } = require("../utils/upload");
const multiDocs = require("./../model/Doc")

exports.addDocController = async (req, res) => {
    try {
        multiDocUpload(req, res, async (err) => {
            if (err) {
                return res.json({
                    successs: false,
                    message: "multer Error" + err
                })
            }
        if (req.files.dob ) {
           req.body.userDob = `dob/${req.files.dob[0].filename}`
        }
        if (req.files.adhar ) {
           req.body.userAdhar = `adhar/${req.files.adhar[0].filename}`
        }
        if (req.files.tc ) {
           req.body.userTc = `tc/${req.files.tc[0].filename}`
        }
        const result = await multiDocs.create(req.body)
               
            res.json({
                successs: true,
                message: "Doc Uploaded Successfully"
            })
        })
    } catch (error) {
        res.json({
            successs: true,
            message: "Error" + error
        })
    }
}

exports.getAlldocsController = async(req, res ) => {
    try {
        const result = await multiDocs.find()
        res.json({
            successs: true,
            message: "doc fetched successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            successs: true,
            message: "Error" + error
        })
    }
}
exports.getAllDeleteController = async(req, res ) => {
    try {
        const result = await multiDocs.deleteMany()
        res.json({
            successs: true,
            message: "doc deleted successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            successs: true,
            message: "Error" + error
        })
    }
}